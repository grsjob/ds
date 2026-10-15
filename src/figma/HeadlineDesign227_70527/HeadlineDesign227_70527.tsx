// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './HeadlineDesign227_70527.module.css';
export const variants = [
  {
    "id": "227:70528",
    "name": "Chat_fill",
    "props": {}
  }
] as const;
export type HeadlineDesign227_70527Variant = typeof variants[number]["id"];
export interface HeadlineDesign227_70527Dimensions {

}
export interface HeadlineDesign227_70527Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: HeadlineDesign227_70527Variant;
  variantProps?: HeadlineDesign227_70527Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: HeadlineDesign227_70527Variant) => void;
}
const transitions = {};
export function HeadlineDesign227_70527({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: HeadlineDesign227_70527Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:70528": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70528"} data-name={"Chat_fill"}>
  <span className={s.n1} data-layer={"227:70528/227:70529"} data-name={"Subtract"}>
    <svg width="100%" height="100%" viewBox="0 0 15 15" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.5 0 C11.64214 0 15 3.35786 15 7.5 L15 11.25 C15 12.41485 14.99987 12.9976 14.80957 13.45703 C14.55584 14.06934 14.06934 14.55584 13.45703 14.80957 C12.9976 14.99987 12.41485 15 11.25 15 L7.5 15 C3.35786 15 0 11.64214 0 7.5 C0 3.35786 3.35786 0 7.5 0 Z M7.5 9.16602 C7.03987 9.16602 6.66717 9.53894 6.66699 9.99902 C6.66699 10.45926 7.03976 10.83203 7.5 10.83203 L10 10.83203 C10.46009 10.83186 10.83301 10.45915 10.83301 9.99902 C10.83283 9.53904 10.45998 9.16619 10 9.16602 L7.5 9.16602 Z M5 5.83301 C4.53987 5.83301 4.16717 6.20593 4.16699 6.66602 C4.16717 7.1261 4.53987 7.49902 5 7.49902 L10 7.49902 C10.45998 7.49885 10.83283 7.12599 10.83301 6.66602 C10.83283 6.20604 10.45998 5.83318 10 5.83301 L5 5.83301 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
  default: return null;
  }
}
