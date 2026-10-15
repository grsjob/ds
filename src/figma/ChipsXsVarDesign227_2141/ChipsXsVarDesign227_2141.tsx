// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ChipsXsVarDesign227_2141.module.css';
export const variants = [
  {
    "id": "227:2142",
    "name": "Action=off, Hover=off",
    "props": {
      "Action": "off",
      "Hover": "off"
    }
  },
  {
    "id": "227:2145",
    "name": "Action=off, Hover=on",
    "props": {
      "Action": "off",
      "Hover": "on"
    }
  },
  {
    "id": "227:2148",
    "name": "Action=on, Hover=off",
    "props": {
      "Action": "on",
      "Hover": "off"
    }
  },
  {
    "id": "227:2151",
    "name": "Action=on, Hover=on",
    "props": {
      "Action": "on",
      "Hover": "on"
    }
  }
] as const;
export type ChipsXsVarDesign227_2141Variant = typeof variants[number]["id"];
export interface ChipsXsVarDesign227_2141Dimensions {
  "Action"?: "off" | "on";
  "Hover"?: "off" | "on";
}
export interface ChipsXsVarDesign227_2141Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ChipsXsVarDesign227_2141Variant;
  variantProps?: ChipsXsVarDesign227_2141Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ChipsXsVarDesign227_2141Variant) => void;
}
const transitions = {"227:2142":{"ON_HOVER":"227:2145"},"227:2145":{"ON_CLICK":"227:2148"},"227:2148":{"ON_HOVER":"227:2151"},"227:2151":{"ON_CLICK":"227:2142"}};
export function ChipsXsVarDesign227_2141({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ChipsXsVarDesign227_2141Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:2142": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2142"} data-name={"Action=off, Hover=off"}>
  <span className={s.n1} data-layer={"227:2142/227:2143"} data-name={"text"}>
    <span className={s.n2} data-layer={"227:2142/227:2143/227:2144"} data-name={"Chips"}>
      {textSlot(text,"227:2142/227:2143/227:2144","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:2145": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2145"} data-name={"Action=off, Hover=on"}>
  <span className={s.n1} data-layer={"227:2145/227:2146"} data-name={"text"}>
    <span className={s.n4} data-layer={"227:2145/227:2146/227:2147"} data-name={"Chips"}>
      {textSlot(text,"227:2145/227:2146/227:2147","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:2148": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2148"} data-name={"Action=on, Hover=off"}>
  <span className={s.n1} data-layer={"227:2148/227:2149"} data-name={"text"}>
    <span className={s.n6} data-layer={"227:2148/227:2149/227:2150"} data-name={"Chips"}>
      {textSlot(text,"227:2148/227:2149/227:2150","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:2151": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2151"} data-name={"Action=on, Hover=on"}>
  <span className={s.n1} data-layer={"227:2151/227:2152"} data-name={"text"}>
    <span className={s.n6} data-layer={"227:2151/227:2152/227:2153"} data-name={"Chips"}>
      {textSlot(text,"227:2151/227:2152/227:2153","Chips","Chips")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
