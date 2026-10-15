// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './BreadcrumbDesign.module.css';
export const variants = [
  {
    "id": "227:1280",
    "name": "State=default",
    "props": {
      "State": "default"
    }
  },
  {
    "id": "227:1282",
    "name": "State=hover",
    "props": {
      "State": "hover"
    }
  },
  {
    "id": "227:1284",
    "name": "State=press",
    "props": {
      "State": "press"
    }
  },
  {
    "id": "227:1286",
    "name": "State=sceleton",
    "props": {
      "State": "sceleton"
    }
  }
] as const;
export type BreadcrumbDesignVariant = typeof variants[number]["id"];
export interface BreadcrumbDesignDimensions {
  "State"?: "default" | "hover" | "press" | "sceleton";
}
export interface BreadcrumbDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: BreadcrumbDesignVariant;
  variantProps?: BreadcrumbDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: BreadcrumbDesignVariant) => void;
}
const transitions = {"227:1280":{"ON_HOVER":"227:1282"}};
export function BreadcrumbDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: BreadcrumbDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1280": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1280"} data-name={"State=default"}>
  <span className={s.n1} data-layer={"227:1280/227:1281"} data-name={"Text"}>
    {textSlot(text,"227:1280/227:1281","Text","Text")}
  </span>
</Root>);
case "227:1282": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1282"} data-name={"State=hover"}>
  <span className={s.n3} data-layer={"227:1282/227:1283"} data-name={"Text"}>
    {textSlot(text,"227:1282/227:1283","Text","Text")}
  </span>
</Root>);
case "227:1284": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1284"} data-name={"State=press"}>
  <span className={s.n3} data-layer={"227:1284/227:1285"} data-name={"Text"}>
    {textSlot(text,"227:1284/227:1285","Text","Text")}
  </span>
</Root>);
case "227:1286": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1286"} data-name={"State=sceleton"}></Root>);
  default: return null;
  }
}
