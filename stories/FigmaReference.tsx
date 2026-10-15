import { useEffect, useId, useState, type ReactNode } from 'react';
import manifest from '../src/generated/manifest.json';
import { Select, Alert, Spinner, Badge } from '../src';
import s from './Reference.module.css';
type Node = {type:string;name?:string;size?:{x:number;y:number};transform?:Record<string,number>;cornerRadius?:number;visible?:boolean;opacity?:number;fill?:string;stroke?:string;strokeWeight?:number;paths?:{d:string;fill?:string;rule?:string}[];fontName?:{family:string;style:string};fontSize?:number;textData?:{characters:string};children?:string[];symbol?:string;gradient?:{color:string;position:number}[];clipsContent?:boolean};
function Scene({nodes,id,root=false,prefix,trail=[]}:{nodes:Record<string,Node>;id:string;root?:boolean;prefix:string;trail?:string[]}):ReactNode{
 const n=nodes[id];if(!n||n.visible===false||trail.includes(id)||trail.length>30)return null;
 const t=n.transform??{},w=n.size?.x??0,h=n.size?.y??0,fill=n.fill??(n.gradient?`url(#${prefix}-${id.replace(':','-')})`:'none');
 const tr=root?undefined:`matrix(${t.m00??1} ${t.m10??0} ${t.m01??0} ${t.m11??1} ${t.m02??0} ${t.m12??0})`;
 const uid=`${prefix}-${id.replace(':','-')}`;const isShape=['FRAME','SYMBOL','INSTANCE','ROUNDED_RECTANGLE','SECTION'].includes(n.type);
 return <g transform={tr} opacity={n.opacity??1}>
  <title>{n.name}</title>
  {n.gradient&&<defs><linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">{n.gradient.map((v,i)=><stop key={i} offset={v.position} stopColor={v.color}/>)}</linearGradient></defs>}
  {isShape&&<rect width={w} height={h} rx={n.cornerRadius??0} fill={fill} stroke={n.stroke??'none'} strokeWidth={n.strokeWeight??1}/>}
  {n.type==='ELLIPSE'&&<ellipse cx={w/2} cy={h/2} rx={w/2} ry={h/2} fill={fill} stroke={n.stroke??'none'}/>}
  {n.type==='LINE'&&<line x2={w} y2={h} stroke={n.stroke??n.fill??'none'} strokeWidth={n.strokeWeight??1}/>}
  {n.paths?.map((p,i)=><path key={i} d={p.d} fill={p.fill??fill} fillRule={p.rule as 'evenodd'|'nonzero'}/>)}
  {n.type==='TEXT'&&<text fill={fill==='none'?'#5c546f':fill} fontFamily={n.fontName?.family??'Arial'} fontSize={n.fontSize??12} fontWeight={/semi|bold/i.test(n.fontName?.style??'')?600:400}>{(n.textData?.characters??'').split('\n').map((line,i)=><tspan key={i} x="0" y={(n.fontSize??12)*(.85+i*1.25)}>{line}</tspan>)}</text>}
  {(n.children??[]).map(c=><Scene key={c} nodes={nodes} id={c} prefix={prefix} trail={[...trail,id]}/>)}
  {!n.children?.length&&n.symbol&&nodes[n.symbol]&&<g transform={`scale(${w/(nodes[n.symbol].size?.x||w||1)} ${h/(nodes[n.symbol].size?.y||h||1)})`}><Scene nodes={nodes} id={n.symbol} root prefix={prefix} trail={[...trail,id]}/></g>}
 </g>;
}
export function FigmaReference({initialFamily='227:718'}:{initialFamily?:string}){
 const [familyId,setFamilyId]=useState(initialFamily);const f=manifest.find(x=>x.id===familyId)??manifest[0];const [variantId,setVariantId]=useState(f.variants[0].id);const [nodes,setNodes]=useState<Record<string,Node>>();const [error,setError]=useState('');const uid=useId().replace(/:/g,'');
 useEffect(()=>{const controller=new AbortController();setNodes(undefined);setError('');fetch(`${import.meta.env.BASE_URL}reference/${familyId.replace(':','-')}.json`,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(setNodes).catch(e=>{if(e.name!=='AbortError')setError(String(e));});return()=>controller.abort();},[familyId]);
 const v=f.variants.find(x=>x.id===variantId)??f.variants[0];return <div className={s.reference}><Alert severity="info" title="Справочник исходных вариантов">Это реконструкция геометрии из .fig для сверки. Здесь нет поведения контролов. Instance overrides, маски, растровые заливки, эффекты и точный перенос текста могут отличаться; для окончательной проверки нужен оригинал в Figma.</Alert><Select label="Семейство в Figma" value={familyId} options={manifest.map(x=>({value:x.id,label:`${x.name} · ${x.id} (${x.variants.length})`}))} onChange={e=>{setFamilyId(e.target.value);setVariantId(manifest.find(f=>f.id===e.target.value)!.variants[0].id);}}/><Select label="Вариант" value={v.id} options={f.variants.map(x=>({value:x.id,label:x.name}))} onChange={e=>setVariantId(e.target.value)}/><div className={s.props}>{Object.entries(v.props).map(([k,value])=><Badge key={k} tone="gray">{k}: {String(value)}</Badge>)}</div><small>Узел {v.id} · {Math.round(v.width)} × {Math.round(v.height)} px</small><div className={s.canvas}>{error?<Alert severity="error">{error}</Alert>:nodes?<svg role="img" aria-label={v.name} width={v.width} height={v.height} viewBox={`0 0 ${v.width} ${v.height}`}><Scene nodes={nodes} id={v.id} root prefix={uid}/></svg>:<Spinner/>}</div></div>;
}
