"""Extract local decoded Figma document. No source files are modified."""
import json, collections, re, pathlib, struct, base64, sys, tempfile, zipfile, subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
source=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else ROOT.parent/'ецс.fig').resolve()
with tempfile.TemporaryDirectory(prefix='ecs-extract-') as tmp:
 canvas=pathlib.Path(tmp)/'canvas.fig';decoded=pathlib.Path(tmp)/'document.json'
 with zipfile.ZipFile(source) as archive: canvas.write_bytes(archive.read('canvas.fig'))
 subprocess.run(['node',str(ROOT/'scripts/decode.cjs'),str(canvas),str(decoded)],check=True)
 j=json.loads(decoded.read_text())
ns=j['nodeChanges']; K=lambda g:f"{g.get('sessionID')}:{g.get('localID')}"
idx={K(n['guid']):n for n in ns};children=collections.defaultdict(list)
for n in ns:children[K(n.get('parentIndex',{}).get('guid',{}))].append(n)
def color(c,opacity=1):return '#'+''.join(f'{round(c.get(k,0)*255):02x}' for k in ['r','g','b'])+ (f'{round(c.get("a",1)*opacity*255):02x}' if c.get('a',1)*opacity<.999 else '')
def paint(ps):
 for p in reversed(ps or []):
  if p.get('visible',True) and p.get('type')=='SOLID':return color(p.get('color',{}),p.get('opacity',1))
 return None
def props(name):return {k.strip():v.strip() for k,v in re.findall(r'([^,=]+)=([^,]+)',name)}
families=collections.defaultdict(list)
for n in ns:
 if n.get('type')=='SYMBOL':families[K(n.get('parentIndex',{}).get('guid',{}))].append(n)
manifest=[]
for fid,variants in families.items():
 dimensions=collections.defaultdict(set)
 for n in variants:
  for k,v in props(n.get('name','')).items():dimensions[k].add(v)
 manifest.append({'id':fid,'name':idx.get(fid,{}).get('name','Standalone'),'dimensions':{k:sorted(v) for k,v in dimensions.items()},'variants':[{'id':K(n['guid']),'name':n.get('name',''),'props':props(n.get('name','')),'width':n.get('size',{}).get('x',0),'height':n.get('size',{}).get('y',0)} for n in variants]})
(ROOT/'src/generated/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,separators=(',',':')))
styles=[]
for n in ns:
 if n.get('styleType'):styles.append({'id':K(n['guid']),'name':n.get('name'),'type':n['styleType'],'color':paint(n.get('fillPaints')),'font':n.get('fontName'),'fontSize':n.get('fontSize'),'lineHeight':n.get('lineHeight')})
(ROOT/'src/generated/figma-tokens.json').write_text(json.dumps(styles,ensure_ascii=False,indent=2))
css=['/* Generated from Figma. Duplicate names retain unique node identifiers. */',':root {']
for t in styles:
 if t.get('color'):css.append(f'  --figma-{t["id"].replace(":","-")}: {t["color"]}; /* {t["name"]} */')
css.append('}')
(ROOT/'src/styles/figma-tokens.css').write_text('\n'.join(css))
def path(blob):
 b=base64.b64decode(j['blobs'][blob]['base64']);p=0;parts=[]
 while p<len(b):
  op=b[p];p+=1;count={0:0,1:2,2:2,3:4,4:6}.get(op)
  if count is None:raise ValueError(f'Unknown vector opcode {op}')
  v=struct.unpack_from('<'+'f'*count,b,p);p+=count*4
  parts.append('ZMLQC'[op]+' '.join(f'{x:.5g}' for x in v))
 return ' '.join(parts)
# Standalone icon assets, retaining the native paths and geometry.
icons={}
def iconpaths(n,out,depth=0,transform=''):
 if depth>12 or n.get('visible') is False:return
 t=n.get('transform',{});m=f'matrix({t.get("m00",1)} {t.get("m10",0)} {t.get("m01",0)} {t.get("m11",1)} {t.get("m02",0)} {t.get("m12",0)})'
 tr=(transform+' '+m).strip()
 for field in ['fillGeometry','strokeGeometry']:
  for g in n.get(field,[]):
   try:out.append({'d':path(g['commandsBlob']),'transform':tr,'fillRule':'evenodd' if g.get('windingRule')=='ODD' else 'nonzero'})
   except (ValueError,KeyError,struct.error):pass
 for c in children[K(n['guid'])]:iconpaths(c,out,depth+1,tr)
for f in manifest:
 if 'icon/' not in f['name'].lower() and 'interface essential/' not in f['name'].lower():continue
 for v in f['variants']:
  name=v['props'].get('Name',v['props'].get('name',v['name']));slug=re.sub('[^a-z0-9]+','-',name.lower()).strip('-');key=slug+'-'+str(round(v['width']))
  if key in icons:continue
  out=[]
  for c in children[v['id']]:iconpaths(c,out)
  if out:icons[key]={'width':v['width'],'height':v['height'],'paths':out,'source':v['id']}
(ROOT/'src/generated/icons.json').write_text(json.dumps(icons,separators=(',',':')))
# Compact tree for inspecting every family; read-only reference, not a semantic control.
refs={}
fields='type name size transform cornerRadius rectangleCornerRadii visible opacity fontSize fontName lineHeight textData clipsContent strokeWeight'.split()
for n in ns:
 nn={k:n[k] for k in fields if k in n};nn['fill']=paint(n.get('fillPaints'));nn['stroke']=paint(n.get('strokePaints'))
 if n.get('fillPaints'):
  for p in n['fillPaints']:
   if p.get('type','').startswith('GRADIENT') and p.get('visible',True):nn['gradient']=[{'color':color(s['color']),'position':s['position']} for s in p.get('stops',[])];break
 paths=[]
 for field in ['fillGeometry','strokeGeometry']:
  for g in n.get(field,[]):
   try:paths.append({'d':path(g['commandsBlob']),'fill':nn['fill'] if field=='fillGeometry' else nn['stroke'],'rule':'evenodd' if g.get('windingRule')=='ODD' else 'nonzero'})
   except (KeyError,ValueError,struct.error):pass
 if paths:nn['paths']=paths
 cs=children[K(n['guid'])]
 if cs:nn['children']=[K(c['guid']) for c in cs]
 elif n.get('symbolData',{}).get('symbolID'):nn['symbol']=K(n['symbolData']['symbolID'])
 refs[K(n['guid'])]=nn
# One file per family avoids loading the entire Figma document in the browser.
refdir=ROOT/'public/reference';refdir.mkdir(parents=True,exist_ok=True)
def gather(id,out,depth=0):
 if id in out or depth>25 or id not in refs:return
 out[id]=refs[id]
 for c in refs[id].get('children',[]):gather(c,out,depth+1)
 if refs[id].get('symbol'):gather(refs[id]['symbol'],out,depth+1)
for f in manifest:
 out={}
 for v in f['variants']:gather(v['id'],out)
 (refdir/(f['id'].replace(':','-')+'.json')).write_text(json.dumps(out,ensure_ascii=False,separators=(',',':')))
(ROOT/'docs/figma-inventory.md').write_text('# Инвентаризация исходного файла\n\nФайл: `ецс.fig`. Узлов: '+str(len(ns))+'. Вариантов SYMBOL: '+str(sum(len(f['variants']) for f in manifest))+'. Семейств с учётом библиотечных копий: '+str(len(manifest))+'.\n\n| ID | Семейство | Варианты | Измерения |\n|---|---|---:|---|\n'+'\n'.join('| '+f['id']+' | '+f['name']+' | '+str(len(f['variants']))+' | '+', '.join(f['dimensions'])+' |' for f in manifest))
print('families',len(manifest),'icons',len(icons),'tokens',len(styles))
