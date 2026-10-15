// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './WidgetStateDesign227_71730.module.css';
export const variants = [
  {
    "id": "227:71731",
    "name": "State=negative",
    "props": {
      "State": "negative"
    }
  },
  {
    "id": "227:71736",
    "name": "State=positive",
    "props": {
      "State": "positive"
    }
  },
  {
    "id": "227:71741",
    "name": "State=sceleton",
    "props": {
      "State": "sceleton"
    }
  }
] as const;
export type WidgetStateDesign227_71730Variant = typeof variants[number]["id"];
export interface WidgetStateDesign227_71730Dimensions {
  "State"?: "negative" | "positive" | "sceleton";
}
export interface WidgetStateDesign227_71730Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: WidgetStateDesign227_71730Variant;
  variantProps?: WidgetStateDesign227_71730Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: WidgetStateDesign227_71730Variant) => void;
}
const transitions = {};
export function WidgetStateDesign227_71730({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: WidgetStateDesign227_71730Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:71731": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71731"} data-name={"State=negative"}>
  <span className={s.n1} data-layer={"227:71731/227:71732"} data-name={"Value"}>
    <span className={s.n2} data-layer={"227:71731/227:71732/227:71733"} data-name={"Расчет модели:"}>
      {textSlot(text,"227:71731/227:71732/227:71733","Расчет модели:","Расчет модели:")}
    </span>
    <span className={s.n3} data-layer={"227:71731/227:71732/227:71734"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n4} data-layer={"227:71731/227:71732/227:71734/227:1519"} data-name={"Label"}>
        {textSlot(text,"227:71731/227:71732/227:71734/227:1519","Label","Вне ЦС")}
      </span>
    </span>
  </span>
  <span className={s.n5} data-layer={"227:71731/227:71735"} data-name={"Button/var"}>
    <span className={s.n6} data-layer={"227:71731/227:71735/227:837"} data-name={"Button"}>
      {textSlot(text,"227:71731/227:71735/227:837","Button","AI Аналитика")}
    </span>
  </span>
</Root>);
case "227:71736": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71736"} data-name={"State=positive"}>
  <span className={s.n8} data-layer={"227:71736/227:71737"} data-name={"Value"}>
    <span className={s.n2} data-layer={"227:71736/227:71737/227:71738"} data-name={"Расчет модели:"}>
      {textSlot(text,"227:71736/227:71737/227:71738","Расчет модели:","Расчет модели:")}
    </span>
    <span className={s.n9} data-layer={"227:71736/227:71737/227:71739"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n10} data-layer={"227:71736/227:71737/227:71739/227:1531"} data-name={"Label"}>
        {textSlot(text,"227:71736/227:71737/227:71739/227:1531","Label","Без изменений")}
      </span>
    </span>
  </span>
  <span className={s.n5} data-layer={"227:71736/227:71740"} data-name={"Button/var"}>
    <span className={s.n6} data-layer={"227:71736/227:71740/227:837"} data-name={"Button"}>
      {textSlot(text,"227:71736/227:71740/227:837","Button","AI Аналитика")}
    </span>
  </span>
</Root>);
case "227:71741": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71741"} data-name={"State=sceleton"}></Root>);
  default: return null;
  }
}
