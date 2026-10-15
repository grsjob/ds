// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ChekboxVarDesign232_60855.module.css';
export const variants = [
  {
    "id": "232:60856",
    "name": "Action=selected, Size=16",
    "props": {
      "Action": "selected",
      "Size": "16"
    }
  },
  {
    "id": "232:60857",
    "name": "Action=partial, Size=16",
    "props": {
      "Action": "partial",
      "Size": "16"
    }
  },
  {
    "id": "232:60858",
    "name": "Action=partial, Size=12",
    "props": {
      "Action": "partial",
      "Size": "12"
    }
  },
  {
    "id": "232:60859",
    "name": "Action=un selected, Size=16",
    "props": {
      "Action": "un selected",
      "Size": "16"
    }
  },
  {
    "id": "232:60860",
    "name": "Action=selected, Size=12",
    "props": {
      "Action": "selected",
      "Size": "12"
    }
  },
  {
    "id": "232:60861",
    "name": "Action=un selected, Size=12",
    "props": {
      "Action": "un selected",
      "Size": "12"
    }
  }
] as const;
export type ChekboxVarDesign232_60855Variant = typeof variants[number]["id"];
export interface ChekboxVarDesign232_60855Dimensions {
  "Action"?: "partial" | "selected" | "un selected";
  "Size"?: "12" | "16";
}
export interface ChekboxVarDesign232_60855Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ChekboxVarDesign232_60855Variant;
  variantProps?: ChekboxVarDesign232_60855Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ChekboxVarDesign232_60855Variant) => void;
}
const transitions = {};
export function ChekboxVarDesign232_60855({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ChekboxVarDesign232_60855Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "232:60856": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60856"} data-name={"Action=selected, Size=16"}>
  <span className={s.n1} data-layer={"232:60856/232:60862"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.94979e-05 1.39885 L2.87412 4.25664 L7.13693 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.422222375869751} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "232:60857": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60857"} data-name={"Action=partial, Size=16"}>
  <span className={s.n3} data-layer={"232:60857/232:60864"} data-name={"Rectangle 1"}></span>
</Root>);
case "232:60858": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60858"} data-name={"Action=partial, Size=12"}>
  <span className={s.n5} data-layer={"232:60858/232:60866"} data-name={"Rectangle 1"}></span>
</Root>);
case "232:60859": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60859"} data-name={"Action=un selected, Size=16"}></Root>);
case "232:60860": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60860"} data-name={"Action=selected, Size=12"}>
  <span className={s.n7} data-layer={"232:60860/232:60868"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-4.46235e-05 1.04914 L2.15559 3.19248 L5.3527 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.0666667222976685} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "232:60861": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:60861"} data-name={"Action=un selected, Size=12"}></Root>);
  default: return null;
  }
}
