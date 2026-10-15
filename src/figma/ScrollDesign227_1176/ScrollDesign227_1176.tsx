// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ScrollDesign227_1176.module.css';
export const variants = [
  {
    "id": "227:1177",
    "name": "Stale=gray",
    "props": {
      "Stale": "gray"
    }
  },
  {
    "id": "227:1179",
    "name": "Stale=white",
    "props": {
      "Stale": "white"
    }
  }
] as const;
export type ScrollDesign227_1176Variant = typeof variants[number]["id"];
export interface ScrollDesign227_1176Dimensions {
  "Stale"?: "gray" | "white";
}
export interface ScrollDesign227_1176Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ScrollDesign227_1176Variant;
  variantProps?: ScrollDesign227_1176Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ScrollDesign227_1176Variant) => void;
}
const transitions = {};
export function ScrollDesign227_1176({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ScrollDesign227_1176Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1177": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1177"} data-name={"Stale=gray"}>
  <span className={s.n1} data-layer={"227:1177/227:1178"} data-name={"Scroll"}></span>
</Root>);
case "227:1179": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1179"} data-name={"Stale=white"}>
  <span className={s.n1} data-layer={"227:1179/227:1180"} data-name={"Scroll"}></span>
</Root>);
  default: return null;
  }
}
