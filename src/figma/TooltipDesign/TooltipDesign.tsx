// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TooltipDesign.module.css';
export const variants = [
  {
    "id": "227:1288",
    "name": "Tema=white, Size=s",
    "props": {
      "Tema": "white",
      "Size": "s"
    }
  },
  {
    "id": "227:1295",
    "name": "Tema=white, Size=m",
    "props": {
      "Tema": "white",
      "Size": "m"
    }
  },
  {
    "id": "232:50334",
    "name": "Tema=black, Size=m",
    "props": {
      "Tema": "black",
      "Size": "m"
    }
  },
  {
    "id": "232:50341",
    "name": "Tema=black, Size=s",
    "props": {
      "Tema": "black",
      "Size": "s"
    }
  }
] as const;
export type TooltipDesignVariant = typeof variants[number]["id"];
export interface TooltipDesignDimensions {
  "Tema"?: "black" | "white";
  "Size"?: "m" | "s";
}
export interface TooltipDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TooltipDesignVariant;
  variantProps?: TooltipDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TooltipDesignVariant) => void;
}
const transitions = {};
export function TooltipDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TooltipDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1288": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1288"} data-name={"Tema=white, Size=s"}>
  <span className={s.n1} data-layer={"227:1288/227:1291"} data-name={"content"}>
    <span className={s.n2} data-layer={"227:1288/227:1291/227:1292"} data-name={"text"}>
      {textSlot(text,"227:1288/227:1291/227:1292","text","Text text text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text")}
    </span>
  </span>
</Root>);
case "227:1295": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1295"} data-name={"Tema=white, Size=m"}>
  <span className={s.n4} data-layer={"227:1295/227:1298"} data-name={"content"}>
    <span className={s.n5} data-layer={"227:1295/227:1298/227:1299"} data-name={"text"}>
      {textSlot(text,"227:1295/227:1298/227:1299","text","Text text text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text")}
    </span>
  </span>
</Root>);
case "232:50334": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50334"} data-name={"Tema=black, Size=m"}>
  <span className={s.n4} data-layer={"232:50334/232:50337"} data-name={"content"}>
    <span className={s.n7} data-layer={"232:50334/232:50337/232:50338"} data-name={"text"}>
      {textSlot(text,"232:50334/232:50337/232:50338","text",<><span className={s.n8}>{"Text text text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"}</span></>)}
    </span>
  </span>
</Root>);
case "232:50341": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50341"} data-name={"Tema=black, Size=s"}>
  <span className={s.n1} data-layer={"232:50341/232:50344"} data-name={"content"}>
    <span className={s.n10} data-layer={"232:50341/232:50344/232:50345"} data-name={"text"}>
      {textSlot(text,"232:50341/232:50344/232:50345","text",<><span className={s.n11}>{"Text text text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"}</span></>)}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
