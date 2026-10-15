import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';
export function textSlot(text: Record<string, ReactNode> | undefined, key: string, name: string, fallback: ReactNode) {
  if (text && Object.prototype.hasOwnProperty.call(text,key)) return text[key];
  if (text && Object.prototype.hasOwnProperty.call(text,name)) return text[name];
  return fallback;
}
interface Variant { readonly id:string; readonly props:Readonly<Record<string,string>> }
type Transitions = Readonly<Record<string,Readonly<Record<string,string>>>>;
interface Options<T extends string> { variant?:T; variantProps?:object;interactive:boolean;onVariantChange?:(id:T)=>void }
/** Figma prototype swaps only. External navigation and application actions are never executed. */
export function useDesignVariant<T extends string>(variants:readonly Variant[],transitions:Transitions,options:Options<T>) {
  const selected = options.variantProps ? variants.find(v=>Object.entries(options.variantProps!).every(([key,value])=>v.props[key]===value))?.id : options.variant;
  if(options.variantProps && !selected) throw new Error('No Figma variant matches variantProps: '+JSON.stringify(options.variantProps));
  const initial=selected??variants[0].id;
  const [current,setCurrent]=useState(initial);
  const anchor=useRef(initial);
  useEffect(()=>{setCurrent(initial);anchor.current=initial;},[initial]);
  function swap(target:string|undefined){if(!target)return;if(!variants.some(v=>v.id===target))target=anchor.current;setCurrent(target);options.onVariantChange?.(target as T);return target;}
  const props=variants.find(v=>v.id===current)?.props??{};
  const disabled=Object.entries(props).some(([k,v])=>['disabled','sceleton','skeleton'].includes(v.toLowerCase()) || (['disabled','disable'].includes(k.toLowerCase()) && v.toLowerCase()==='on'));
  const handlers:HTMLAttributes<HTMLSpanElement>=options.interactive&&!disabled?{
    onPointerEnter:()=>{anchor.current=current;swap(transitions[current]?.ON_HOVER);},
    onPointerLeave:()=>swap(anchor.current),
    onClick:()=>{const next=transitions[current]?.ON_CLICK;if(next){const actual=swap(next);if(actual)anchor.current=actual;}},
  }:{};
  return {current:options.interactive?current:initial,handlers,disabled};
}

/** Preserve consumer callbacks alongside the prototype transitions. */
export function designAttributes(attributes:HTMLAttributes<HTMLSpanElement>,handlers:HTMLAttributes<HTMLSpanElement>,extra:object) {
  return {...attributes,...extra,
    onClick:(event:React.MouseEvent<HTMLSpanElement>)=>{if((extra as {disabled?:boolean}).disabled){event.preventDefault();return;}attributes.onClick?.(event);if(!event.defaultPrevented)handlers.onClick?.(event);},
    onPointerEnter:(event:React.PointerEvent<HTMLSpanElement>)=>{attributes.onPointerEnter?.(event);if(!event.defaultPrevented)handlers.onPointerEnter?.(event);},
    onPointerLeave:(event:React.PointerEvent<HTMLSpanElement>)=>{attributes.onPointerLeave?.(event);if(!event.defaultPrevented)handlers.onPointerLeave?.(event);},
  };
}
