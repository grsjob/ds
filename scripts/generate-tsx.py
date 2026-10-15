"""Compile Figma SYMBOL trees into ordinary TSX and CSS Modules.

No JSON tree interpreter, fetch, screenshot, canvas or full-component SVG at runtime.
Only vector layers use inline SVG paths. Source is never modified.
"""
import json, pathlib, collections, re, base64, struct, math, hashlib
from vector_network import paths as network_paths
from boolean_shapes import render_boolean
from arc_shapes import arc_path
ROOT=pathlib.Path(__file__).resolve().parents[1]
import sys,zipfile
source=pathlib.Path(sys.argv[2]) if len(sys.argv)>2 else ROOT.parent/'ецс.fig'
image_archive=zipfile.ZipFile(source)
raw=json.load(open(sys.argv[1] if len(sys.argv)>1 else ROOT/'.figma-cache/raw.json'));ns=raw['nodes'];K=lambda g:f"{g.get('sessionID')}:{g.get('localID')}";idx={K(n['guid']):n for n in ns};ch=collections.defaultdict(list)
for n in ns:ch[K(n.get('parentIndex',{}).get('guid',{}))].append(n)
for cs in ch.values():cs.sort(key=lambda n:n.get('parentIndex',{}).get('position',''))
styles_by_key={n['key']:n for n in ns if n.get('styleType') and n.get('key')}
groups=collections.defaultdict(list)
for n in ns:
 if n.get('type')=='SYMBOL':groups[K(n.get('parentIndex',{}).get('guid',{}))].append(n)
manifest=[]
for fid,variants in groups.items():
 dims=collections.defaultdict(set);vs=[]
 for n in variants:
  props={k.strip():v.strip() for k,v in re.findall(r'([^,=]+)=([^,]+)',n.get('name',''))}
  for k,v in props.items():dims[k].add(v)
  vs.append({'id':K(n['guid']),'name':n.get('name',''),'props':props})
 manifest.append({'id':fid,'name':idx.get(fid,{}).get('name','Standalone'),'dimensions':{k:sorted(v) for k,v in dims.items()},'variants':vs})
def js(x):return json.dumps(x,ensure_ascii=False,separators=(',',':'))
def num(x):return format(float(x),'.5f').rstrip('0').rstrip('.') if x else '0'
def px(x):return num(x)+'px'
def color(c,alpha=1):return 'rgba('+','.join(str(round(c.get(k,0)*255)) for k in ['r','g','b'])+','+num(c.get('a',1)*alpha)+')'
def resolve_styles(n):
 n=dict(n)
 for field,keys in [('styleIdForFill',['fillPaints']),('styleIdForStrokeFill',['strokePaints']),('styleIdForEffect',['effects']),('styleIdForText',['fontSize','fontName','lineHeight','letterSpacing','textCase','textDecoration'])]:
  ref=n.get(field,{})
  source=styles_by_key.get(ref.get('assetRef',{}).get('key')) or idx.get(K(ref.get('guid',{})))
  if source:
   for k in keys:
    if k not in n:
     sk='fillPaints' if field=='styleIdForStrokeFill' and k=='strokePaints' else k
     if sk in source:n[k]=source[sk]
 return n

def merge(base,override):
 o=dict(base);o.update({k:v for k,v in override.items() if k not in ['guidPath','guid','parentIndex','overrideKey']})
 # Style references override the resolved paints on the source node.
 for field,target in [('styleIdForFill','fillPaints'),('styleIdForStrokeFill','strokePaints'),('styleIdForEffect','effects')]:
  if field in override and target not in override:o.pop(target,None)
 return resolve_styles(o)

def overrides(items):
 result={}
 for o in items:
  path=tuple(K(x) for x in o.get('guidPath',{}).get('guids',[]))
  if path:result[path]=merge(result.get(path,{}),o)
 return result

def expand(n,ctx=None,path=(),depth=0):
 if depth>35:raise ValueError('Recursive symbol '+K(n['guid']))
 ctx=ctx or {};parent_path=path;key=K(n.get('overrideKey',n['guid']));path=(*path,key)
 n=merge(n,ctx.get(path,{}));n['_path']='/'.join(path)
 if n.get('visible') is False or n.get('opacity',1)==0:return None
 if n.get('type')=='INSTANCE':
  sd=n.get('symbolData',{});symbol_id=K(n.get('overriddenSymbolID',sd.get('symbolID',{})));symbol=idx.get(symbol_id)
  if symbol:
   base=dict(symbol);base.pop('transform',None);base.pop('prototypeInteractions',None)
   merged=merge(base,n);merged['guid']=n['guid'];merged['_path']=n['_path'];merged['_instance']=symbol_id
   local=overrides(sd.get('symbolOverrides',[]))
   # Derived layout/geometry is the final Figma layout for this instance.
   for k,v in overrides(n.get('derivedSymbolData',[])).items():local[k]=merge(local.get(k,{}),v)
   for k,v in ctx.items():
    if k[:len(path)]==path and len(k)>len(path):local[k[len(path):]]=merge(local.get(k[len(path):],{}),v)
   merged['_children']=[e for c in ch[symbol_id] if (e:=expand(c,local,(),depth+1)) is not None]
   return merged
 n['_children']=[e for c in ch[K(n['guid'])] if (e:=expand(c,ctx,parent_path,depth+1)) is not None]
 return n

pathcache={};warnings=collections.Counter();missing_vectors=[]
def pathblob(i):
 if i in pathcache:return pathcache[i]
 b=base64.b64decode(raw['blobs'][i]);pos=0;parts=[]
 while pos<len(b):
  op=b[pos];pos+=1;count={0:0,1:2,2:2,3:4,4:6}.get(op)
  if count is None:raise ValueError('Unknown path opcode '+str(op))
  coords=struct.unpack_from('<'+'f'*count,b,pos);pos+=count*4;parts.append('ZMLQC'[op]+' '.join(num(x) for x in coords))
 pathcache[i]=' '.join(parts);return pathcache[i]

def visible_paints(n,field):return [p for p in n.get(field,[]) if p.get('visible',True) and p.get('opacity',1)>0]
assets={}
def paint_css(p):
 ty=p.get('type');op=p.get('opacity',1)
 if ty=='SOLID':return color(p.get('color',{}),op)
 if ty in ['GRADIENT_LINEAR','GRADIENT_RADIAL','GRADIENT_ANGULAR','GRADIENT_DIAMOND']:
  stops=','.join(color(s['color'],op)+' '+num(s['position']*100)+'%' for s in p.get('stops',[]));t=p.get('transform',{})
  angle=math.degrees(math.atan2(t.get('m01',0),t.get('m00',1)))+90
  if ty=='GRADIENT_LINEAR':return f'linear-gradient({num(angle)}deg,{stops})'
  if ty=='GRADIENT_ANGULAR':return f'conic-gradient(from {num(angle)}deg,{stops})'
  if ty=='GRADIENT_DIAMOND':warnings['diamond gradients approximated as radial']+=1
  return f'radial-gradient(ellipse at 50% 50%,{stops})'
 if ty=='IMAGE':
  h=p.get('image',{}).get('hash',{});h=bytes(h.values()).hex() if isinstance(h,dict) else ''
  if h:
   try:data=image_archive.read('images/'+h)
   except KeyError:warnings['missing embedded images']+=1;return None
   ext='.png' if data.startswith(b'\x89PNG') else '.jpg' if data.startswith(b'\xff\xd8') else '.gif' if data.startswith(b'GIF') else '.webp' if data[8:12]==b'WEBP' else '.bin'
   assets[h]=ext;return f'url("../assets/{h}{ext}")'
 return None

def is_arc(n):
 a=n.get('arcData',{});return n.get('type')=='ELLIPSE' and (a.get('innerRadius',0)>0 or abs(abs(a.get('endingAngle',2*math.pi)-a.get('startingAngle',0))-2*math.pi)>0.0001)

def css_for(n,root=False):
 w=n.get('size',{}).get('x',0);h=n.get('size',{}).get('y',0);t=n.get('transform',{})
 out={'position':'relative' if root else 'absolute','display':'inline-block' if root else 'block','box-sizing':'border-box','width':px(w),'height':px(h),'flex-shrink':'0'}
 if not root:
  out['left']=px(t.get('m02',0));out['top']=px(t.get('m12',0));a=[t.get('m00',1),t.get('m10',0),t.get('m01',0),t.get('m11',1)]
  if a!=[1,0,0,1]:out.update({'transform':'matrix('+','.join(num(x) for x in a)+',0,0)','transform-origin':'0 0'})
 if n.get('opacity',1)!=1:out['opacity']=num(n['opacity'])
 ty='VECTOR' if is_arc(n) else n.get('type');paints=visible_paints(n,'fillPaints');fills=[p for p in (paint_css(p) for p in paints) if p]
 if ty=='TEXT':
  out.update({'font-family':js(n.get('fontName',{}).get('family','SB Sans Text'))+',Arial,sans-serif','font-size':px(n.get('fontSize',12)),'font-weight':str(700 if 'bold'==n.get('fontName',{}).get('style','').lower() else 600 if 'semibold' in n.get('fontName',{}).get('style','').lower() else 400),'white-space':'pre-wrap','overflow-wrap':'normal','margin':'0'})
  lh=n.get('lineHeight',{});out['line-height']=px(lh['value']) if lh.get('units')=='PIXELS' else num(lh['value']/100) if lh.get('value') else '1.254'
  ls=n.get('letterSpacing',{});
  if ls.get('value'):out['letter-spacing']=px(ls['value']) if ls.get('units')=='PIXELS' else num(ls['value']/100)+'em'
  if fills:out['color']=next((f for f in reversed(fills) if f.startswith('rgba')),'var(--ecs-brand)')
  if n.get('textAlignHorizontal'):out['text-align']={'CENTER':'center','RIGHT':'right','JUSTIFIED':'justify'}.get(n['textAlignHorizontal'],'left')
  if n.get('textDecoration')=='UNDERLINE':out['text-decoration']='underline'
  if n.get('textDecoration')=='STRIKETHROUGH':out['text-decoration']='line-through'
  if n.get('textCase')=='UPPER':out['text-transform']='uppercase'
 elif ty not in ['VECTOR','BOOLEAN_OPERATION','LINE']:
  if fills:
   # CSS solid colour is last layer; place it behind image/gradient layers.
   layers=[]
   for f in reversed(fills):layers.append('linear-gradient('+f+','+f+')' if f.startswith('rgba') and len(fills)>1 else f)
   out['background']=','.join(layers)
   if any(p.get('type')=='IMAGE' for p in paints):out.update({'background-size':'cover','background-position':'center','background-repeat':'no-repeat'})
  strokes=visible_paints(n,'strokePaints')
  if strokes:
   c=next((paint_css(p) for p in strokes if p.get('type')=='SOLID'),None)
   if c:
    weight=n.get('strokeWeight',1);out['outline']=f'{px(weight)} solid {c}';out['outline-offset']=px(-weight if n.get('strokeAlign')=='INSIDE' else -weight/2 if n.get('strokeAlign')=='CENTER' else 0)
    for side in ['Top','Right','Bottom','Left']:
     if 'border'+side+'Weight' in n:out['border-'+side.lower()+'-width']=px(n['border'+side+'Weight'])
  radii=[n.get('rectangle'+k+'CornerRadius',n.get('cornerRadius',0)) for k in ['TopLeft','TopRight','BottomRight','BottomLeft']]
  if ty=='ELLIPSE':out['border-radius']='50%'
  elif any(radii):out['border-radius']=' '.join(px(x) for x in radii)
 if n.get('frameMaskDisabled') is False or n.get('clipsContent'):out['overflow']='hidden'
 shadows=[]
 for e in n.get('effects',[]):
  if not e.get('visible',True):continue
  if e.get('type') in ['DROP_SHADOW','INNER_SHADOW']:
   o=e.get('offset',{});shadows.append(('inset ' if e['type']=='INNER_SHADOW' else '')+' '.join([px(o.get('x',0)),px(o.get('y',0)),px(e.get('radius',0)),px(e.get('spread',0)),color(e.get('color',{}))]))
  elif e.get('type')=='LAYER_BLUR':out['filter']='blur('+px(e.get('radius',0))+')'
  elif e.get('type')=='BACKGROUND_BLUR':out['backdrop-filter']='blur('+px(e.get('radius',0))+')'
 if shadows:out['box-shadow']=','.join(shadows)
 return ';'.join(k+':'+v for k,v in out.items())

aliases={'227:718':'ButtonDesign','227:70775':'ObjectCardDesign','227:71198':'SegmentCardDesign','227:71742':'AccessCardDesign','227:71863':'SettingsBoxDesign','227:71935':'LayerRowDesign','227:1436':'LogoDesign','227:2032':'MonoLogoDesign','227:2333':'AgentDesign','227:1194':'MapPinDesign','227:1812':'SelectDesign','227:950':'DateSelectDesign','227:1734':'TimeSelectDesign','227:676':'CheckboxDesign','227:1358':'RadioDesign','227:1755':'SwitchDesign','227:1326':'DropdownItemDesign','227:1470':'AlertDesign','227:1287':'TooltipDesign','227:884':'TabDesign','227:1125':'MessageDesign','227:1074':'ChatInputDesign','227:1367':'TextAreaDesign','227:1109':'AvatarDesign','227:1181':'ChipDesign','227:1279':'BreadcrumbDesign','227:1706':'SpinnerDesign','227:1576':'ScaleDesign','227:1969':'SliderDesign'}
names={}
for f in manifest:
 slug=''.join(x.title() for x in re.findall('[A-Za-z0-9]+',f['name'])) or 'Family'
 names[f['id']]=aliases.get(f['id'],slug+'Design'+f['id'].replace(':','_'))
report=[];total_nodes=0
for f in manifest:
 name=names[f['id']];folder=ROOT/'src/figma'/name;folder.mkdir(parents=True,exist_ok=True)
 classes={};css=[];layers={};transitions={};nodes_count=[0]
 def klass(decl):
  if decl not in classes:
   v='n'+str(len(classes));classes[decl]=v;css.append('.'+v+'{'+decl+'}')
  return classes[decl]
 def emit(n,root=False,depth=0,parent=""):
  nodes_count[0]+=1;nodeid=K(n['guid']);layer=(parent+'/' if parent else '')+nodeid;laykey=layer
  layers[laykey]=n.get('name','');cls=klass(css_for(n,root));tag='span';attrs=f'className={{s.{cls}}} data-layer={{{js(laykey)}}} data-name={{{js(n.get("name",""))}}}'
  if root:attrs+=' {...rootAttributes}'
  body=[];ty=n.get('type')
  if ty=='TEXT':
   td=n.get('textData',{});chars=td.get('characters','');fallback=js(chars)
   ids=td.get('characterStyleIDs',[]);overrides_table={o['styleID']:o for o in td.get('styleOverrideTable',[])}
   if ids and overrides_table:
    runs=[];start=0
    # Figma character offsets are UTF-16; expand non-BMP characters to surrogate units for slicing.
    units=chars.encode('utf-16-le');length=len(units)//2
    while start<length:
     style_id=ids[start] if start<len(ids) else 0;end=start+1
     while end<length and (ids[end] if end<len(ids) else 0)==style_id:end+=1
     run=units[start*2:end*2].decode('utf-16-le',errors='replace');merged=merge(n,overrides_table.get(style_id,{}));decl=css_for(merged)
     allowed={'font-family','font-size','font-weight','color','letter-spacing','text-decoration','text-transform'}
     decl=';'.join(part for part in decl.split(';') if part.split(':',1)[0] in allowed)
     runs.append('<span className={s.'+klass(decl)+'}>{'+js(run)+'}</span>');start=end
    fallback='<>'+''.join(runs)+'</>'
   body.append('{textSlot(text,'+js(laykey)+','+js(n.get('name',''))+','+fallback+')}')
  elif ty in ['VECTOR','BOOLEAN_OPERATION','LINE'] or is_arc(n):
   paths=[];defs=[]
   def svg_paint(p,ident):
    if p is None:return '"none"'
    if p.get('type')=='SOLID':return '{'+js(color(p.get('color',{}),p.get('opacity',1)))+'}'
    if p.get('type','').startswith('GRADIENT'):
     gid='g'+str(nodes_count[0])+'_'+ident
     stops=''.join('<stop offset={'+str(st['position'])+'} stopColor={'+js(color(st['color'],p.get('opacity',1)))+'}/>' for st in p.get('stops',[]))
     tr=p.get('transform',{});matrix='matrix('+ ' '.join(num(tr.get(k,default)) for k,default in [('m00',1),('m10',0),('m01',0),('m11',1),('m02',0),('m12',0)])+')'
     if p['type']=='GRADIENT_LINEAR':defs.append('<linearGradient id={`${uid}-'+gid+'`} x1="0" y1="0" x2="1" y2="0" gradientTransform={'+js(matrix)+'}>'+stops+'</linearGradient>')
     else:defs.append('<radialGradient id={`${uid}-'+gid+'`}>'+stops+'</radialGradient>')
     return '{`url(#${uid}-'+gid+')`}'
    return '"none"'
   overrides_by_style={o['styleID']:resolve_styles(o) for o in n.get('vectorData',{}).get('styleOverrideTable',[])}
   for field,paintfield in [('fillGeometry','fillPaints'),('strokeGeometry','strokePaints')]:
    for i,g in enumerate(n.get(field,[])):
     paint_node=merge(n,overrides_by_style.get(g.get('styleID',0),{}));paints=visible_paints(paint_node,paintfield)
     if not paints:continue
     try:paths.append('<path d={'+js(pathblob(g['commandsBlob']))+'} fill='+svg_paint(paints[-1],field+str(i))+' fillRule="'+('evenodd' if g.get('windingRule')=='ODD' else 'nonzero')+'"/>')
     except (ValueError,IndexError,KeyError,struct.error):warnings['unreadable vector paths']+=1
   if not paths and 'vectorNetworkBlob' in n.get('vectorData',{}):
    vd=n['vectorData'];sz=n.get('size',{});norm=vd.get('normalizedSize',sz)
    try:
     fills,stroke=network_paths(base64.b64decode(raw['blobs'][vd['vectorNetworkBlob']]),sz.get('x',1)/(norm.get('x',1) or 1),sz.get('y',1)/(norm.get('y',1) or 1))
     for i,g in enumerate(fills):
      paints=visible_paints(merge(n,overrides_by_style.get(g['style'],{})),'fillPaints')
      if paints:paths.append('<path d={'+js(g['d'])+'} fill='+svg_paint(paints[-1],'netfill'+str(i))+' fillRule="'+g['rule']+'"/>')
     paints=visible_paints(n,'strokePaints')
     if paints and stroke:paths.append('<path d={'+js(stroke)+'} fill="none" stroke='+svg_paint(paints[-1],'netstroke')+' strokeWidth={'+str(n.get('strokeWeight',1))+'} strokeLinecap="'+{'ROUND':'round','SQUARE':'square'}.get(n.get('strokeCap'),'butt')+'" strokeLinejoin="'+{'ROUND':'round','BEVEL':'bevel'}.get(n.get('strokeJoin'),'miter')+'"/>')
    except (ValueError,KeyError,struct.error) as err:warnings['unreadable vector networks']+=1
   if not paths and is_arc(n):
    d=arc_path(n);fill_paints=visible_paints(n,'fillPaints');stroke_paints=visible_paints(n,'strokePaints')
    if fill_paints:paths.append('<path d={'+js(d)+'} fill='+svg_paint(fill_paints[-1],'arcfill')+' fillRule="evenodd"/>')
    if stroke_paints:paths.append('<path d={'+js(d)+'} fill="none" stroke='+svg_paint(stroke_paints[-1],'arcstroke')+' strokeWidth={'+str(n.get('strokeWeight',1))+'} strokeLinecap="round"/>')
   if not paths and ty=='BOOLEAN_OPERATION' and n.get('_children'):
    body.append(render_boolean(n,nodes_count[0],js,num,pathblob,raw,network_paths,base64,color,visible_paints,paint_css))
   if paths:
    w=n.get('size',{}).get('x',1);h=n.get('size',{}).get('y',1)
    body.append('<svg width="100%" height="100%" viewBox="0 0 '+num(w)+' '+num(h)+'" overflow="visible" aria-hidden="true" focusable="false">'+('<defs>'+''.join(defs)+'</defs>' if defs else '')+''.join(paths)+'</svg>')
   elif ty=='LINE':body.append('<svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={'+str(n.get('size',{}).get('x',0))+'} stroke={'+js(next((paint_css(p) for p in visible_paints(n,'strokePaints')),'currentColor'))+'}/></svg>')
   elif not body and (visible_paints(n,'fillPaints') or visible_paints(n,'strokePaints')):
    warnings['visible painted vector without geometry']+=1;missing_vectors.append({'id':nodeid,'path':laykey,'name':n.get('name'),'data':n.get('vectorData'),'fill':n.get('fillPaints'),'stroke':n.get('strokePaints')})
  if is_arc(n) and not body:
   warnings['arc without cached geometry']+=1
  if ty!='BOOLEAN_OPERATION' or not body:
   body.extend(emit(c,False,depth+1,laykey) for c in n.get('_children',[]))
  if n.get('isMask'):warnings['mask layers requiring review']+=1
  return '<'+tag+' '+attrs+'>'+('\n'+''.join('  '*(depth+1)+part+'\n' for part in body)+'  '*depth if body else '')+'</'+tag+'>'
 chunks=[];variant_info=[]
 for v in f['variants']:
  n=expand(idx[v['id']]);
  if n is None:n=merge(idx[v['id']],{'visible':True});n['_path']=K(n['guid']);n['_children']=[]
  chunks.append('case '+js(v['id'])+': return ('+emit(n,True)+');')
  variant_info.append({'id':v['id'],'name':v['name'],'props':v['props']})
  ts={}
  for item in n.get('prototypeInteractions',[]):
   if item.get('isDeleted'):continue
   event=item.get('event',{}).get('interactionType');target=next((K(a['transitionNodeID']) for a in item.get('actions',[]) if a.get('navigationType')=='SWAP_STATE' and a.get('transitionNodeID')),None)
   if event and target:ts[event]=target
  if ts:transitions[v['id']]=ts
 types='\n'.join('  '+js(k)+'?: '+' | '.join(js(v) for v in vs)+';' for k,vs in f['dimensions'].items())
 code="// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.\nimport { useId, type HTMLAttributes, type ReactNode } from 'react';\nimport { textSlot, useDesignVariant, designAttributes } from '../runtime';\nimport s from './"+name+".module.css';\n"
 code+='export const variants = '+json.dumps(variant_info,ensure_ascii=False,indent=2)+' as const;\n'
 code+='export type '+name+'Variant = typeof variants[number]["id"];\nexport interface '+name+'Dimensions {\n'+types+'\n}\n'
 code+='export interface '+name+'Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {\n  as?: "span" | "button" | "div";\n  disabled?: boolean;\n  variant?: '+name+'Variant;\n  variantProps?: '+name+'Dimensions;\n  text?: Record<string,ReactNode>;\n  interactive?: boolean;\n  onVariantChange?: (variant: '+name+'Variant) => void;\n}\n'
 code+='const transitions = '+js(transitions)+';\n'
 default_tag='button' if 'button' in f['name'].lower() and 'slot' not in f['name'].lower() else 'span'
 code+='export function '+name+'({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root='+js(default_tag)+',disabled,...attributes}: '+name+'Props) {\n'
 code+='  const uid=useId();\n'
 code+='  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});\n'
 code+='  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});\n'
 # Root className must combine rather than overwrite the generated root geometry.
 for i,c in enumerate(chunks):
  c=re.sub(r'className=\{s\.(n\d+)\} (data-layer=.*?) \{\.\.\.rootAttributes\}',r'{...rootAttributes} className={[s.\1,rootAttributes.className].filter(Boolean).join(" ")} \2',c,count=1)
  c=c.replace('<span {...rootAttributes}', '<Root {...rootAttributes}')
  c=c[:-len('</span>);')]+ '</Root>);' if c.endswith('</span>);') else c
  chunks[i]=c
 code+='  switch(current) {\n'+ '\n'.join(chunks)+'\n  default: return null;\n  }\n}\n'
 (folder/(name+'.tsx')).write_text(code)
 (folder/(name+'.module.css')).write_text('.root{vertical-align:middle;isolation:isolate;font-family:var(--ecs-font,"SB Sans Text",Arial,sans-serif);border:0;padding:0;text-align:initial;color:inherit;background:transparent}.root svg{display:block}.root:where(button){cursor:pointer}.root:where(button):focus-visible{outline:2px solid var(--ecs-focus,#82cded);outline-offset:2px}.root:where(button):disabled{cursor:default}\n'+ '\n'.join(css)+'\n')
 (folder/'index.ts').write_text(f'export {{ {name}, variants }} from "./{name}";\nexport type {{ {name}Props, {name}Dimensions, {name}Variant }} from "./{name}";\n')
 (folder/'layers.json').write_text(json.dumps(layers,ensure_ascii=False,indent=2))
 default=next((v for v in f['variants'] if not any('disabled' in x.lower() or 'sceleton' in x.lower() or 'hover'==x.lower() for x in v['props'].values())),f['variants'][0])
 story="import type { Meta, StoryObj } from '@storybook/react-vite';\nimport { "+name+", variants } from '../../src/figma/"+name+"';\n"
 story+='const meta={title:'+js('Из макета/'+f['name']+' · '+f['id'])+',component:'+name+',tags:["autodocs"],args:{variant:'+js(default['id'])+',interactive:true},argTypes:{variant:{control:{type:"select",labels:Object.fromEntries(variants.map(v=>[v.id,v.name]))},options:variants.map(v=>v.id)},variantProps:{control:"object"},text:{control:"object"},interactive:{control:"boolean"}},parameters:{docs:{description:{component:'+js('Прямой перенос TSX + CSS Modules из '+f['name']+'. '+str(len(f['variants']))+' вариантов. Заменяйте текст через text по имени слоя или ключу из layers.json. Геометрия сохранена из Figma. interactive воспроизводит только заданные переходы прототипа; бизнес-логику задаёт приложение.')+'}}}} satisfies Meta<typeof '+name+'>;\nexport default meta;type Story=StoryObj<typeof meta>;\nexport const Default:Story={};\n'
 state_key=next((k for k in ['State','state','action','Action','condition','selected','Hover','Progress'] if k in f['dimensions']),None)
 if state_key:
  samples=[]
  for value in f['dimensions'][state_key]:
   match=next((v for v in f['variants'] if v['props'].get(state_key)==value),None)
   if match:samples.append({'id':match['id'],'label':value})
  story+='const stateSamples='+js(samples)+' as const;\nexport const States:Story={render:args=><div style={{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"}}>{stateSamples.map(item=><div key={item.id}><p style={{fontSize:12,color:"#8f8b9a"}}>{item.label}</p><'+name+' {...args} variant={item.id} variantProps={undefined} interactive={false}/></div>)}</div>};\n'
 (ROOT/'stories/extracted'/(name+'.stories.tsx')).write_text(story)
 report.append({'id':f['id'],'name':f['name'],'component':name,'variants':len(f['variants']),'jsxNodes':nodes_count[0],'cssClasses':len(classes),'prototypeStates':len(transitions),'layers':len(layers)})
 total_nodes+=nodes_count[0]
 print(name,len(f['variants']),nodes_count[0])
(ROOT/'src/figma/index.ts').write_text('\n'.join(f'export {{ {r["component"]} }} from "./{r["component"]}";\nexport type {{ {r["component"]}Props }} from "./{r["component"]}";' for r in report)+'\n')
(ROOT/'src/figma/catalog.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
# Pull embedded bitmap assets from the original archive, keeping exact source bytes.
import zipfile
assetdir=ROOT/'src/figma/assets';assetdir.mkdir(exist_ok=True)
source=pathlib.Path(sys.argv[2]) if len(sys.argv)>2 else ROOT.parent/'ецс.fig'
with zipfile.ZipFile(source) as z:
 for h,ext in assets.items():
  try:(assetdir/(h+ext)).write_bytes(z.read('images/'+h))
  except KeyError:warnings['missing embedded images']+=1
(ROOT/'docs/tsx-extraction.json').write_text(json.dumps({'families':len(report),'variants':sum(r['variants'] for r in report),'jsxNodes':total_nodes,'images':len(assets),'warnings':dict(warnings)},indent=2))
(ROOT/'docs/tsx-missing-vectors.json').write_text(json.dumps(missing_vectors,ensure_ascii=False,indent=2))
print('COMPLETE',total_nodes,dict(warnings))
