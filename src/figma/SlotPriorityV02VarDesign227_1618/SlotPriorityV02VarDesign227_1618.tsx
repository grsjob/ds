// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SlotPriorityV02VarDesign227_1618.module.css';
export const variants = [
  {
    "id": "227:1619",
    "name": "Size=L, Tema=gray, Hover=off, Sceleton=off",
    "props": {
      "Size": "L",
      "Tema": "gray",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1625",
    "name": "Size=L, Tema=white, Hover=off, Sceleton=off",
    "props": {
      "Size": "L",
      "Tema": "white",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50258",
    "name": "Size=L, Tema=white, Hover=on, Sceleton=off",
    "props": {
      "Size": "L",
      "Tema": "white",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50264",
    "name": "Size=L, Tema=white, Hover=on, Sceleton=on",
    "props": {
      "Size": "L",
      "Tema": "white",
      "Hover": "on",
      "Sceleton": "on"
    }
  },
  {
    "id": "232:50270",
    "name": "Size=L, Tema=gray, Hover=on, Sceleton=off",
    "props": {
      "Size": "L",
      "Tema": "gray",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50276",
    "name": "Size=L, Tema=gray, Hover=on, Sceleton=on",
    "props": {
      "Size": "L",
      "Tema": "gray",
      "Hover": "on",
      "Sceleton": "on"
    }
  },
  {
    "id": "232:50282",
    "name": "Size=S, Tema=white, Hover=off, Sceleton=off",
    "props": {
      "Size": "S",
      "Tema": "white",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50288",
    "name": "Size=S, Tema=gray, Hover=off, Sceleton=off",
    "props": {
      "Size": "S",
      "Tema": "gray",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50294",
    "name": "Size=S, Tema=white, Hover=on, Sceleton=off",
    "props": {
      "Size": "S",
      "Tema": "white",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50300",
    "name": "Size=S, Tema=white, Hover=on, Sceleton=on",
    "props": {
      "Size": "S",
      "Tema": "white",
      "Hover": "on",
      "Sceleton": "on"
    }
  },
  {
    "id": "232:50306",
    "name": "Size=S, Tema=gray, Hover=on, Sceleton=off",
    "props": {
      "Size": "S",
      "Tema": "gray",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "232:50312",
    "name": "Size=S, Tema=gray, Hover=on, Sceleton=on",
    "props": {
      "Size": "S",
      "Tema": "gray",
      "Hover": "on",
      "Sceleton": "on"
    }
  }
] as const;
export type SlotPriorityV02VarDesign227_1618Variant = typeof variants[number]["id"];
export interface SlotPriorityV02VarDesign227_1618Dimensions {
  "Size"?: "L" | "S";
  "Tema"?: "gray" | "white";
  "Hover"?: "off" | "on";
  "Sceleton"?: "off" | "on";
}
export interface SlotPriorityV02VarDesign227_1618Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SlotPriorityV02VarDesign227_1618Variant;
  variantProps?: SlotPriorityV02VarDesign227_1618Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SlotPriorityV02VarDesign227_1618Variant) => void;
}
const transitions = {};
export function SlotPriorityV02VarDesign227_1618({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SlotPriorityV02VarDesign227_1618Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1619": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1619"} data-name={"Size=L, Tema=gray, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:1619/227:1624"} data-name={"Value Value"}>
    {textSlot(text,"227:1619/227:1624","Value Value","Value Value")}
  </span>
</Root>);
case "227:1625": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1625"} data-name={"Size=L, Tema=white, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:1625/227:1630"} data-name={"Value Value"}>
    {textSlot(text,"227:1625/227:1630","Value Value","Value Value")}
  </span>
</Root>);
case "232:50258": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50258"} data-name={"Size=L, Tema=white, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"232:50258/232:50263"} data-name={"Value Value"}>
    {textSlot(text,"232:50258/232:50263","Value Value","Value Value")}
  </span>
</Root>);
case "232:50264": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50264"} data-name={"Size=L, Tema=white, Hover=on, Sceleton=on"}>
  <span className={s.n4} data-layer={"232:50264/232:50269"} data-name={"Rectangle 3344"}></span>
</Root>);
case "232:50270": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50270"} data-name={"Size=L, Tema=gray, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"232:50270/232:50275"} data-name={"Value Value"}>
    {textSlot(text,"232:50270/232:50275","Value Value","Value Value")}
  </span>
</Root>);
case "232:50276": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50276"} data-name={"Size=L, Tema=gray, Hover=on, Sceleton=on"}>
  <span className={s.n4} data-layer={"232:50276/232:50281"} data-name={"Rectangle 3344"}></span>
</Root>);
case "232:50282": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50282"} data-name={"Size=S, Tema=white, Hover=off, Sceleton=off"}>
  <span className={s.n8} data-layer={"232:50282/232:50287"} data-name={"Value Value"}>
    {textSlot(text,"232:50282/232:50287","Value Value","Value Value")}
  </span>
</Root>);
case "232:50288": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50288"} data-name={"Size=S, Tema=gray, Hover=off, Sceleton=off"}>
  <span className={s.n8} data-layer={"232:50288/232:50293"} data-name={"Value Value"}>
    {textSlot(text,"232:50288/232:50293","Value Value","Value Value")}
  </span>
</Root>);
case "232:50294": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50294"} data-name={"Size=S, Tema=white, Hover=on, Sceleton=off"}>
  <span className={s.n8} data-layer={"232:50294/232:50299"} data-name={"Value Value"}>
    {textSlot(text,"232:50294/232:50299","Value Value","Value Value")}
  </span>
</Root>);
case "232:50300": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50300"} data-name={"Size=S, Tema=white, Hover=on, Sceleton=on"}>
  <span className={s.n11} data-layer={"232:50300/232:50305"} data-name={"Rectangle 3344"}></span>
</Root>);
case "232:50306": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50306"} data-name={"Size=S, Tema=gray, Hover=on, Sceleton=off"}>
  <span className={s.n8} data-layer={"232:50306/232:50311"} data-name={"Value Value"}>
    {textSlot(text,"232:50306/232:50311","Value Value","Value Value")}
  </span>
</Root>);
case "232:50312": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50312"} data-name={"Size=S, Tema=gray, Hover=on, Sceleton=on"}>
  <span className={s.n11} data-layer={"232:50312/232:50317"} data-name={"Rectangle 3344"}></span>
</Root>);
  default: return null;
  }
}
