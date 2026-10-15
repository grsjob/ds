// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './HoverTestDesign227_67632.module.css';
export const variants = [
  {
    "id": "227:67633",
    "name": "hover=on",
    "props": {
      "hover": "on"
    }
  },
  {
    "id": "227:67635",
    "name": "hover=off",
    "props": {
      "hover": "off"
    }
  }
] as const;
export type HoverTestDesign227_67632Variant = typeof variants[number]["id"];
export interface HoverTestDesign227_67632Dimensions {
  "hover"?: "off" | "on";
}
export interface HoverTestDesign227_67632Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: HoverTestDesign227_67632Variant;
  variantProps?: HoverTestDesign227_67632Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: HoverTestDesign227_67632Variant) => void;
}
const transitions = {"227:67635":{"ON_HOVER":"227:67633"}};
export function HoverTestDesign227_67632({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: HoverTestDesign227_67632Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:67633": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:67633"} data-name={"hover=on"}>
  <span className={s.n1} data-layer={"227:67633/227:67634"} data-name={"Rectangle 3464323"}></span>
</Root>);
case "227:67635": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:67635"} data-name={"hover=off"}>
  <span className={s.n2} data-layer={"227:67635/227:67636"} data-name={"Rectangle 3464324"}></span>
</Root>);
  default: return null;
  }
}
