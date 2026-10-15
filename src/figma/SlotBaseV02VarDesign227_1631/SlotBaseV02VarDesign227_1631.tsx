// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SlotBaseV02VarDesign227_1631.module.css';
export const variants = [
  {
    "id": "227:1632",
    "name": "State=default, size=L, tema=gray",
    "props": {
      "State": "default",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "227:1649",
    "name": "State=default, size=L, tema=white",
    "props": {
      "State": "default",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "227:1666",
    "name": "State=sceleton, size=S, tema=white",
    "props": {
      "State": "sceleton",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "229:61641",
    "name": "State=sceleton, size=L, tema=white",
    "props": {
      "State": "sceleton",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "229:61658",
    "name": "State=focus, size=L, tema=white",
    "props": {
      "State": "focus",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "229:61674",
    "name": "State=alert, size=L, tema=white",
    "props": {
      "State": "alert",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "229:61690",
    "name": "State=hover, size=L, tema=white",
    "props": {
      "State": "hover",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "229:61707",
    "name": "State=sceleton, size=L, tema=gray",
    "props": {
      "State": "sceleton",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "229:61724",
    "name": "State=focus, size=L, tema=gray",
    "props": {
      "State": "focus",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "229:61740",
    "name": "State=alert, size=L, tema=gray",
    "props": {
      "State": "alert",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "229:61756",
    "name": "State=hover, size=L, tema=gray",
    "props": {
      "State": "hover",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "229:61773",
    "name": "State=default, size=S, tema=white",
    "props": {
      "State": "default",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "229:61790",
    "name": "State=focus, size=S, tema=white",
    "props": {
      "State": "focus",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "229:61806",
    "name": "State=alert, size=S, tema=white",
    "props": {
      "State": "alert",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "229:61822",
    "name": "State=hover, size=S, tema=white",
    "props": {
      "State": "hover",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "229:61839",
    "name": "State=default, size=S, tema=gray",
    "props": {
      "State": "default",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "229:61856",
    "name": "State=sceleton, size=S, tema=gray",
    "props": {
      "State": "sceleton",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "229:61873",
    "name": "State=focus, size=S, tema=gray",
    "props": {
      "State": "focus",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "229:61889",
    "name": "State=alert, size=S, tema=gray",
    "props": {
      "State": "alert",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "229:61905",
    "name": "State=hover, size=S, tema=gray",
    "props": {
      "State": "hover",
      "size": "S",
      "tema": "gray"
    }
  }
] as const;
export type SlotBaseV02VarDesign227_1631Variant = typeof variants[number]["id"];
export interface SlotBaseV02VarDesign227_1631Dimensions {
  "State"?: "alert" | "default" | "focus" | "hover" | "sceleton";
  "size"?: "L" | "S";
  "tema"?: "gray" | "white";
}
export interface SlotBaseV02VarDesign227_1631Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SlotBaseV02VarDesign227_1631Variant;
  variantProps?: SlotBaseV02VarDesign227_1631Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SlotBaseV02VarDesign227_1631Variant) => void;
}
const transitions = {};
export function SlotBaseV02VarDesign227_1631({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SlotBaseV02VarDesign227_1631Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1632": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1632"} data-name={"State=default, size=L, tema=gray"}>
  <span className={s.n1} data-layer={"227:1632/227:1636"} data-name={"Value Value"}>
    {textSlot(text,"227:1632/227:1636","Value Value","Value Value")}
  </span>
</Root>);
case "227:1649": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1649"} data-name={"State=default, size=L, tema=white"}>
  <span className={s.n1} data-layer={"227:1649/227:1653"} data-name={"Value Value"}>
    {textSlot(text,"227:1649/227:1653","Value Value","Value Value")}
  </span>
</Root>);
case "227:1666": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1666"} data-name={"State=sceleton, size=S, tema=white"}>
  <span className={s.n4} data-layer={"227:1666/227:1682"} data-name={"Rectangle 3344"}></span>
</Root>);
case "229:61641": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61641"} data-name={"State=sceleton, size=L, tema=white"}>
  <span className={s.n5} data-layer={"229:61641/229:61657"} data-name={"Rectangle 3344"}></span>
</Root>);
case "229:61658": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61658"} data-name={"State=focus, size=L, tema=white"}>
  <span className={s.n1} data-layer={"229:61658/229:61662"} data-name={"Value Value"}>
    {textSlot(text,"229:61658/229:61662","Value Value","Value Value")}
  </span>
</Root>);
case "229:61674": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61674"} data-name={"State=alert, size=L, tema=white"}>
  <span className={s.n1} data-layer={"229:61674/229:61678"} data-name={"Value Value"}>
    {textSlot(text,"229:61674/229:61678","Value Value","Value Value")}
  </span>
</Root>);
case "229:61690": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61690"} data-name={"State=hover, size=L, tema=white"}>
  <span className={s.n1} data-layer={"229:61690/229:61694"} data-name={"Value Value"}>
    {textSlot(text,"229:61690/229:61694","Value Value","Value Value")}
  </span>
</Root>);
case "229:61707": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61707"} data-name={"State=sceleton, size=L, tema=gray"}>
  <span className={s.n5} data-layer={"229:61707/229:61723"} data-name={"Rectangle 3344"}></span>
</Root>);
case "229:61724": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61724"} data-name={"State=focus, size=L, tema=gray"}>
  <span className={s.n1} data-layer={"229:61724/229:61728"} data-name={"Value Value"}>
    {textSlot(text,"229:61724/229:61728","Value Value","Value Value")}
  </span>
</Root>);
case "229:61740": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61740"} data-name={"State=alert, size=L, tema=gray"}>
  <span className={s.n1} data-layer={"229:61740/229:61744"} data-name={"Value Value"}>
    {textSlot(text,"229:61740/229:61744","Value Value","Value Value")}
  </span>
</Root>);
case "229:61756": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61756"} data-name={"State=hover, size=L, tema=gray"}>
  <span className={s.n1} data-layer={"229:61756/229:61760"} data-name={"Value Value"}>
    {textSlot(text,"229:61756/229:61760","Value Value","Value Value")}
  </span>
</Root>);
case "229:61773": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61773"} data-name={"State=default, size=S, tema=white"}>
  <span className={s.n11} data-layer={"229:61773/229:61777"} data-name={"Value Value"}>
    {textSlot(text,"229:61773/229:61777","Value Value","Value Value")}
  </span>
</Root>);
case "229:61790": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61790"} data-name={"State=focus, size=S, tema=white"}>
  <span className={s.n11} data-layer={"229:61790/229:61794"} data-name={"Value Value"}>
    {textSlot(text,"229:61790/229:61794","Value Value","Value Value")}
  </span>
</Root>);
case "229:61806": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61806"} data-name={"State=alert, size=S, tema=white"}>
  <span className={s.n11} data-layer={"229:61806/229:61810"} data-name={"Value Value"}>
    {textSlot(text,"229:61806/229:61810","Value Value","Value Value")}
  </span>
</Root>);
case "229:61822": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61822"} data-name={"State=hover, size=S, tema=white"}>
  <span className={s.n11} data-layer={"229:61822/229:61826"} data-name={"Value Value"}>
    {textSlot(text,"229:61822/229:61826","Value Value","Value Value")}
  </span>
</Root>);
case "229:61839": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61839"} data-name={"State=default, size=S, tema=gray"}>
  <span className={s.n11} data-layer={"229:61839/229:61843"} data-name={"Value Value"}>
    {textSlot(text,"229:61839/229:61843","Value Value","Value Value")}
  </span>
</Root>);
case "229:61856": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61856"} data-name={"State=sceleton, size=S, tema=gray"}>
  <span className={s.n4} data-layer={"229:61856/229:61872"} data-name={"Rectangle 3344"}></span>
</Root>);
case "229:61873": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61873"} data-name={"State=focus, size=S, tema=gray"}>
  <span className={s.n11} data-layer={"229:61873/229:61877"} data-name={"Value Value"}>
    {textSlot(text,"229:61873/229:61877","Value Value","Value Value")}
  </span>
</Root>);
case "229:61889": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61889"} data-name={"State=alert, size=S, tema=gray"}>
  <span className={s.n11} data-layer={"229:61889/229:61893"} data-name={"Value Value"}>
    {textSlot(text,"229:61889/229:61893","Value Value","Value Value")}
  </span>
</Root>);
case "229:61905": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:61905"} data-name={"State=hover, size=S, tema=gray"}>
  <span className={s.n11} data-layer={"229:61905/229:61909"} data-name={"Value Value"}>
    {textSlot(text,"229:61905/229:61909","Value Value","Value Value")}
  </span>
</Root>);
  default: return null;
  }
}
