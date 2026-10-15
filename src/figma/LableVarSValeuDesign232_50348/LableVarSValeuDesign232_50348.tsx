// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LableVarSValeuDesign232_50348.module.css';
export const variants = [
  {
    "id": "232:50349",
    "name": "Color=green, object=left, condition=active",
    "props": {
      "Color": "green",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50350",
    "name": "Color=skeleton, object=left, condition=active",
    "props": {
      "Color": "skeleton",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50351",
    "name": "Color=green, object=without, condition=active",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50352",
    "name": "Color=green, object=right, condition=active",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50353",
    "name": "Color=green, object=without, condition=disabled",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50354",
    "name": "Color=green, object=right, condition=disabled",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50355",
    "name": "Color=yellow, object=left, condition=active",
    "props": {
      "Color": "yellow",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50356",
    "name": "Color=yellow, object=without, condition=active",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50357",
    "name": "Color=yellow, object=right, condition=active",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50358",
    "name": "Color=yellow, object=without, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50359",
    "name": "Color=yellow, object=right, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50360",
    "name": "Color=red, object=left, condition=active",
    "props": {
      "Color": "red",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50361",
    "name": "Color=purple, object=left, condition=active",
    "props": {
      "Color": "purple",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50362",
    "name": "Color=basa, object=left, condition=active",
    "props": {
      "Color": "basa",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50363",
    "name": "Color=red, object=without, condition=active",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50364",
    "name": "Color=red, object=right, condition=active",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50365",
    "name": "Color=red, object=without, condition=disabled",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50366",
    "name": "Color=red, object=right, condition=disabled",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50367",
    "name": "Color=purple, object=without, condition=active",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50368",
    "name": "Color=basa, object=without, condition=active",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50369",
    "name": "Color=purple, object=right, condition=active",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50370",
    "name": "Color=basa, object=right, condition=active",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50371",
    "name": "Color=purple, object=without, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50372",
    "name": "Color=purple, object=right, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50373",
    "name": "Color=basa, object=without, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50374",
    "name": "Color=basa, object=right, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50375",
    "name": "Color=blue, object=left, condition=active",
    "props": {
      "Color": "blue",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50376",
    "name": "Color=blue, object=without, condition=active",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50377",
    "name": "Color=blue, object=right, condition=active",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50378",
    "name": "Color=blue, object=without, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50379",
    "name": "Color=blue, object=right, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50380",
    "name": "Color=gray, object=left, condition=active",
    "props": {
      "Color": "gray",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50381",
    "name": "Color=stroke, object=left, condition=active",
    "props": {
      "Color": "stroke",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50382",
    "name": "Color=no color, object=left, condition=active",
    "props": {
      "Color": "no color",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "232:50383",
    "name": "Color=gray, object=right, condition=active",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50384",
    "name": "Color=stroke, object=right, condition=active",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50385",
    "name": "Color=no color, object=right, condition=active",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "232:50386",
    "name": "Color=gray, object=without, condition=active",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50387",
    "name": "Color=stroke, object=without, condition=active",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50388",
    "name": "Color=no color, object=without, condition=active",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "232:50389",
    "name": "Color=gray, object=without, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50390",
    "name": "Color=stroke, object=without, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50391",
    "name": "Color=no color, object=without, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50392",
    "name": "Color=gray, object=right, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50393",
    "name": "Color=stroke, object=right, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "232:50394",
    "name": "Color=no color, object=right, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "disabled"
    }
  }
] as const;
export type LableVarSValeuDesign232_50348Variant = typeof variants[number]["id"];
export interface LableVarSValeuDesign232_50348Dimensions {
  "Color"?: "basa" | "blue" | "gray" | "green" | "no color" | "purple" | "red" | "skeleton" | "stroke" | "yellow";
  "object"?: "left" | "right" | "without";
  "condition"?: "active" | "disabled";
}
export interface LableVarSValeuDesign232_50348Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LableVarSValeuDesign232_50348Variant;
  variantProps?: LableVarSValeuDesign232_50348Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LableVarSValeuDesign232_50348Variant) => void;
}
const transitions = {};
export function LableVarSValeuDesign232_50348({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LableVarSValeuDesign232_50348Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "232:50349": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50349"} data-name={"Color=green, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50349/232:50395"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50349/232:50395/230:50676"} data-name={"01"}>
      <span className={s.n3} data-layer={"232:50349/232:50395/230:50676/230:50677"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n4} data-layer={"232:50349/232:50396"} data-name={"Label"}>
    {textSlot(text,"232:50349/232:50396","Label","Lable")}
  </span>
</Root>);
case "232:50350": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50350"} data-name={"Color=skeleton, object=left, condition=active"}></Root>);
case "232:50351": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50351"} data-name={"Color=green, object=without, condition=active"}>
  <span className={s.n7} data-layer={"232:50351/232:50398"} data-name={"Label"}>
    {textSlot(text,"232:50351/232:50398","Label","Lable")}
  </span>
</Root>);
case "232:50352": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50352"} data-name={"Color=green, object=right, condition=active"}>
  <span className={s.n7} data-layer={"232:50352/232:50399"} data-name={"Label"}>
    {textSlot(text,"232:50352/232:50399","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50352/232:50400"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50352/232:50400/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50352/232:50400/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50353": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50353"} data-name={"Color=green, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50353/232:50402"} data-name={"Label"}>
    {textSlot(text,"232:50353/232:50402","Label","Lable")}
  </span>
</Root>);
case "232:50354": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50354"} data-name={"Color=green, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50354/232:50404"} data-name={"Label"}>
    {textSlot(text,"232:50354/232:50404","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50354/232:50405"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50354/232:50405/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50354/232:50405/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50355": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50355"} data-name={"Color=yellow, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50355/232:50406"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50355/232:50406/230:50676"} data-name={"01"}>
      <span className={s.n3} data-layer={"232:50355/232:50406/230:50676/230:50677"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"232:50355/232:50407"} data-name={"Label"}>
    {textSlot(text,"232:50355/232:50407","Label","Lable")}
  </span>
</Root>);
case "232:50356": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50356"} data-name={"Color=yellow, object=without, condition=active"}>
  <span className={s.n16} data-layer={"232:50356/232:50409"} data-name={"Label"}>
    {textSlot(text,"232:50356/232:50409","Label","Lable")}
  </span>
</Root>);
case "232:50357": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50357"} data-name={"Color=yellow, object=right, condition=active"}>
  <span className={s.n16} data-layer={"232:50357/232:50410"} data-name={"Label"}>
    {textSlot(text,"232:50357/232:50410","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50357/232:50411"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50357/232:50411/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50357/232:50411/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50358": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50358"} data-name={"Color=yellow, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50358/232:50413"} data-name={"Label"}>
    {textSlot(text,"232:50358/232:50413","Label","Lable")}
  </span>
</Root>);
case "232:50359": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50359"} data-name={"Color=yellow, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50359/232:50415"} data-name={"Label"}>
    {textSlot(text,"232:50359/232:50415","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50359/232:50416"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50359/232:50416/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50359/232:50416/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50360": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50360"} data-name={"Color=red, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50360/232:50417"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50360/232:50417/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50360/232:50417/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n20} data-layer={"232:50360/232:50418"} data-name={"Label"}>
    {textSlot(text,"232:50360/232:50418","Label","Lable")}
  </span>
</Root>);
case "232:50361": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50361"} data-name={"Color=purple, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50361/232:50419"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50361/232:50419/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50361/232:50419/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n22} data-layer={"232:50361/232:50420"} data-name={"Label"}>
    {textSlot(text,"232:50361/232:50420","Label","Lable")}
  </span>
</Root>);
case "232:50362": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50362"} data-name={"Color=basa, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50362/232:50421"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50362/232:50421/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50362/232:50421/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n24} data-layer={"232:50362/232:50422"} data-name={"Label"}>
    {textSlot(text,"232:50362/232:50422","Label","Lable")}
  </span>
</Root>);
case "232:50363": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50363"} data-name={"Color=red, object=without, condition=active"}>
  <span className={s.n26} data-layer={"232:50363/232:50424"} data-name={"Label"}>
    {textSlot(text,"232:50363/232:50424","Label","Lable")}
  </span>
</Root>);
case "232:50364": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50364"} data-name={"Color=red, object=right, condition=active"}>
  <span className={s.n26} data-layer={"232:50364/232:50425"} data-name={"Label"}>
    {textSlot(text,"232:50364/232:50425","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50364/232:50426"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50364/232:50426/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50364/232:50426/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50365": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50365"} data-name={"Color=red, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50365/232:50428"} data-name={"Label"}>
    {textSlot(text,"232:50365/232:50428","Label","Lable")}
  </span>
</Root>);
case "232:50366": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50366"} data-name={"Color=red, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50366/232:50430"} data-name={"Label"}>
    {textSlot(text,"232:50366/232:50430","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50366/232:50431"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50366/232:50431/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50366/232:50431/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50367": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50367"} data-name={"Color=purple, object=without, condition=active"}>
  <span className={s.n29} data-layer={"232:50367/232:50433"} data-name={"Label"}>
    {textSlot(text,"232:50367/232:50433","Label","Lable")}
  </span>
</Root>);
case "232:50368": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50368"} data-name={"Color=basa, object=without, condition=active"}>
  <span className={s.n31} data-layer={"232:50368/232:50435"} data-name={"Label"}>
    {textSlot(text,"232:50368/232:50435","Label","Lable")}
  </span>
</Root>);
case "232:50369": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50369"} data-name={"Color=purple, object=right, condition=active"}>
  <span className={s.n29} data-layer={"232:50369/232:50436"} data-name={"Label"}>
    {textSlot(text,"232:50369/232:50436","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50369/232:50437"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50369/232:50437/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50369/232:50437/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50370": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50370"} data-name={"Color=basa, object=right, condition=active"}>
  <span className={s.n31} data-layer={"232:50370/232:50438"} data-name={"Label"}>
    {textSlot(text,"232:50370/232:50438","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50370/232:50439"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50370/232:50439/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50370/232:50439/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50371": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50371"} data-name={"Color=purple, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50371/232:50441"} data-name={"Label"}>
    {textSlot(text,"232:50371/232:50441","Label","Lable")}
  </span>
</Root>);
case "232:50372": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50372"} data-name={"Color=purple, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50372/232:50443"} data-name={"Label"}>
    {textSlot(text,"232:50372/232:50443","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50372/232:50444"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50372/232:50444/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50372/232:50444/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50373": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50373"} data-name={"Color=basa, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50373/232:50446"} data-name={"Label"}>
    {textSlot(text,"232:50373/232:50446","Label","Lable")}
  </span>
</Root>);
case "232:50374": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50374"} data-name={"Color=basa, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50374/232:50448"} data-name={"Label"}>
    {textSlot(text,"232:50374/232:50448","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50374/232:50449"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50374/232:50449/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50374/232:50449/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50375": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50375"} data-name={"Color=blue, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50375/232:50450"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50375/232:50450/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50375/232:50450/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n35} data-layer={"232:50375/232:50451"} data-name={"Label"}>
    {textSlot(text,"232:50375/232:50451","Label","Lable")}
  </span>
</Root>);
case "232:50376": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50376"} data-name={"Color=blue, object=without, condition=active"}>
  <span className={s.n37} data-layer={"232:50376/232:50453"} data-name={"Label"}>
    {textSlot(text,"232:50376/232:50453","Label","Lable")}
  </span>
</Root>);
case "232:50377": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50377"} data-name={"Color=blue, object=right, condition=active"}>
  <span className={s.n37} data-layer={"232:50377/232:50454"} data-name={"Label"}>
    {textSlot(text,"232:50377/232:50454","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50377/232:50455"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50377/232:50455/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50377/232:50455/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50378": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50378"} data-name={"Color=blue, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50378/232:50457"} data-name={"Label"}>
    {textSlot(text,"232:50378/232:50457","Label","Lable")}
  </span>
</Root>);
case "232:50379": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50379"} data-name={"Color=blue, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50379/232:50459"} data-name={"Label"}>
    {textSlot(text,"232:50379/232:50459","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50379/232:50460"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50379/232:50460/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50379/232:50460/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50380": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50380"} data-name={"Color=gray, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50380/232:50461"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50380/232:50461/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50380/232:50461/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n40} data-layer={"232:50380/232:50462"} data-name={"Label"}>
    {textSlot(text,"232:50380/232:50462","Label","Lable")}
  </span>
</Root>);
case "232:50381": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50381"} data-name={"Color=stroke, object=left, condition=active"}>
  <span className={s.n1} data-layer={"232:50381/232:50463"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50381/232:50463/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50381/232:50463/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n40} data-layer={"232:50381/232:50464"} data-name={"Label"}>
    {textSlot(text,"232:50381/232:50464","Label","Lable")}
  </span>
</Root>);
case "232:50382": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50382"} data-name={"Color=no color, object=left, condition=active"}>
  <span className={s.n43} data-layer={"232:50382/232:50465"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"232:50382/232:50465/230:50679"} data-name={"01"}>
      <span className={s.n19} data-layer={"232:50382/232:50465/230:50679/230:50680"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n44} data-layer={"232:50382/232:50466"} data-name={"Label"}>
    {textSlot(text,"232:50382/232:50466","Label","Lable")}
  </span>
</Root>);
case "232:50383": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50383"} data-name={"Color=gray, object=right, condition=active"}>
  <span className={s.n46} data-layer={"232:50383/232:50467"} data-name={"Label"}>
    {textSlot(text,"232:50383/232:50467","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50383/232:50468"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50383/232:50468/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50383/232:50468/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50384": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50384"} data-name={"Color=stroke, object=right, condition=active"}>
  <span className={s.n46} data-layer={"232:50384/232:50469"} data-name={"Label"}>
    {textSlot(text,"232:50384/232:50469","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50384/232:50470"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50384/232:50470/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50384/232:50470/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50385": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50385"} data-name={"Color=no color, object=right, condition=active"}>
  <span className={s.n48} data-layer={"232:50385/232:50471"} data-name={"Label"}>
    {textSlot(text,"232:50385/232:50471","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"232:50385/232:50472"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50385/232:50472/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50385/232:50472/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50386": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50386"} data-name={"Color=gray, object=without, condition=active"}>
  <span className={s.n46} data-layer={"232:50386/232:50474"} data-name={"Label"}>
    {textSlot(text,"232:50386/232:50474","Label","Lable")}
  </span>
</Root>);
case "232:50387": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50387"} data-name={"Color=stroke, object=without, condition=active"}>
  <span className={s.n46} data-layer={"232:50387/232:50476"} data-name={"Label"}>
    {textSlot(text,"232:50387/232:50476","Label","Lable")}
  </span>
</Root>);
case "232:50388": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50388"} data-name={"Color=no color, object=without, condition=active"}>
  <span className={s.n48} data-layer={"232:50388/232:50478"} data-name={"Label"}>
    {textSlot(text,"232:50388/232:50478","Label","Lable")}
  </span>
</Root>);
case "232:50389": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50389"} data-name={"Color=gray, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50389/232:50480"} data-name={"Label"}>
    {textSlot(text,"232:50389/232:50480","Label","Lable")}
  </span>
</Root>);
case "232:50390": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50390"} data-name={"Color=stroke, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50390/232:50482"} data-name={"Label"}>
    {textSlot(text,"232:50390/232:50482","Label","Lable")}
  </span>
</Root>);
case "232:50391": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50391"} data-name={"Color=no color, object=without, condition=disabled"}>
  <span className={s.n53} data-layer={"232:50391/232:50484"} data-name={"Label"}>
    {textSlot(text,"232:50391/232:50484","Label","Lable")}
  </span>
</Root>);
case "232:50392": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50392"} data-name={"Color=gray, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50392/232:50486"} data-name={"Label"}>
    {textSlot(text,"232:50392/232:50486","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50392/232:50487"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50392/232:50487/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50392/232:50487/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50393": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50393"} data-name={"Color=stroke, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"232:50393/232:50489"} data-name={"Label"}>
    {textSlot(text,"232:50393/232:50489","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"232:50393/232:50490"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50393/232:50490/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50393/232:50490/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "232:50394": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"232:50394"} data-name={"Color=no color, object=right, condition=disabled"}>
  <span className={s.n53} data-layer={"232:50394/232:50492"} data-name={"Label"}>
    {textSlot(text,"232:50394/232:50492","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"232:50394/232:50493"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"232:50394/232:50493/227:2002"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"232:50394/232:50493/227:2003"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
