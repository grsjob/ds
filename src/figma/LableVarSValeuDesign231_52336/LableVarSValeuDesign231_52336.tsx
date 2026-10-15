// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LableVarSValeuDesign231_52336.module.css';
export const variants = [
  {
    "id": "231:52337",
    "name": "Color=green, object=left, condition=active",
    "props": {
      "Color": "green",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52338",
    "name": "Color=skeleton, object=left, condition=active",
    "props": {
      "Color": "skeleton",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52339",
    "name": "Color=green, object=without, condition=active",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52340",
    "name": "Color=green, object=right, condition=active",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52341",
    "name": "Color=green, object=without, condition=disabled",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52342",
    "name": "Color=green, object=right, condition=disabled",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52343",
    "name": "Color=yellow, object=left, condition=active",
    "props": {
      "Color": "yellow",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52344",
    "name": "Color=yellow, object=without, condition=active",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52345",
    "name": "Color=yellow, object=right, condition=active",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52346",
    "name": "Color=yellow, object=without, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52347",
    "name": "Color=yellow, object=right, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52348",
    "name": "Color=red, object=left, condition=active",
    "props": {
      "Color": "red",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52349",
    "name": "Color=purple, object=left, condition=active",
    "props": {
      "Color": "purple",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52350",
    "name": "Color=basa, object=left, condition=active",
    "props": {
      "Color": "basa",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52351",
    "name": "Color=red, object=without, condition=active",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52352",
    "name": "Color=red, object=right, condition=active",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52353",
    "name": "Color=red, object=without, condition=disabled",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52354",
    "name": "Color=red, object=right, condition=disabled",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52355",
    "name": "Color=purple, object=without, condition=active",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52356",
    "name": "Color=basa, object=without, condition=active",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52357",
    "name": "Color=purple, object=right, condition=active",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52358",
    "name": "Color=basa, object=right, condition=active",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52359",
    "name": "Color=purple, object=without, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52360",
    "name": "Color=purple, object=right, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52361",
    "name": "Color=basa, object=without, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52362",
    "name": "Color=basa, object=right, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52363",
    "name": "Color=blue, object=left, condition=active",
    "props": {
      "Color": "blue",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52364",
    "name": "Color=blue, object=without, condition=active",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52365",
    "name": "Color=blue, object=right, condition=active",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52366",
    "name": "Color=blue, object=without, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52367",
    "name": "Color=blue, object=right, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52368",
    "name": "Color=gray, object=left, condition=active",
    "props": {
      "Color": "gray",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52369",
    "name": "Color=stroke, object=left, condition=active",
    "props": {
      "Color": "stroke",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52370",
    "name": "Color=no color, object=left, condition=active",
    "props": {
      "Color": "no color",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "231:52371",
    "name": "Color=gray, object=right, condition=active",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52372",
    "name": "Color=stroke, object=right, condition=active",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52373",
    "name": "Color=no color, object=right, condition=active",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "231:52374",
    "name": "Color=gray, object=without, condition=active",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52375",
    "name": "Color=stroke, object=without, condition=active",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52376",
    "name": "Color=no color, object=without, condition=active",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "231:52377",
    "name": "Color=gray, object=without, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52378",
    "name": "Color=stroke, object=without, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52379",
    "name": "Color=no color, object=without, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52380",
    "name": "Color=gray, object=right, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52381",
    "name": "Color=stroke, object=right, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "231:52382",
    "name": "Color=no color, object=right, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "disabled"
    }
  }
] as const;
export type LableVarSValeuDesign231_52336Variant = typeof variants[number]["id"];
export interface LableVarSValeuDesign231_52336Dimensions {
  "Color"?: "basa" | "blue" | "gray" | "green" | "no color" | "purple" | "red" | "skeleton" | "stroke" | "yellow";
  "object"?: "left" | "right" | "without";
  "condition"?: "active" | "disabled";
}
export interface LableVarSValeuDesign231_52336Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LableVarSValeuDesign231_52336Variant;
  variantProps?: LableVarSValeuDesign231_52336Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LableVarSValeuDesign231_52336Variant) => void;
}
const transitions = {};
export function LableVarSValeuDesign231_52336({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LableVarSValeuDesign231_52336Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "231:52337": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52337"} data-name={"Color=green, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52337/231:52383"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52337/231:52383/235:49809"} data-name={"01"}>
      <span className={s.n3} data-layer={"231:52337/231:52383/235:49809/235:49810"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n4} data-layer={"231:52337/231:52384"} data-name={"Label"}>
    {textSlot(text,"231:52337/231:52384","Label","Lable")}
  </span>
</Root>);
case "231:52338": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52338"} data-name={"Color=skeleton, object=left, condition=active"}></Root>);
case "231:52339": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52339"} data-name={"Color=green, object=without, condition=active"}>
  <span className={s.n7} data-layer={"231:52339/231:52386"} data-name={"Label"}>
    {textSlot(text,"231:52339/231:52386","Label","Lable")}
  </span>
</Root>);
case "231:52340": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52340"} data-name={"Color=green, object=right, condition=active"}>
  <span className={s.n7} data-layer={"231:52340/231:52387"} data-name={"Label"}>
    {textSlot(text,"231:52340/231:52387","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52340/231:52388"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52340/231:52388/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52340/231:52388/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52341": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52341"} data-name={"Color=green, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52341/231:52390"} data-name={"Label"}>
    {textSlot(text,"231:52341/231:52390","Label","Lable")}
  </span>
</Root>);
case "231:52342": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52342"} data-name={"Color=green, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52342/231:52392"} data-name={"Label"}>
    {textSlot(text,"231:52342/231:52392","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52342/231:52393"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52342/231:52393/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52342/231:52393/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52343": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52343"} data-name={"Color=yellow, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52343/231:52394"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52343/231:52394/235:49809"} data-name={"01"}>
      <span className={s.n3} data-layer={"231:52343/231:52394/235:49809/235:49810"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"231:52343/231:52395"} data-name={"Label"}>
    {textSlot(text,"231:52343/231:52395","Label","Lable")}
  </span>
</Root>);
case "231:52344": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52344"} data-name={"Color=yellow, object=without, condition=active"}>
  <span className={s.n16} data-layer={"231:52344/231:52397"} data-name={"Label"}>
    {textSlot(text,"231:52344/231:52397","Label","Lable")}
  </span>
</Root>);
case "231:52345": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52345"} data-name={"Color=yellow, object=right, condition=active"}>
  <span className={s.n16} data-layer={"231:52345/231:52398"} data-name={"Label"}>
    {textSlot(text,"231:52345/231:52398","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52345/231:52399"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52345/231:52399/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52345/231:52399/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52346": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52346"} data-name={"Color=yellow, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52346/231:52401"} data-name={"Label"}>
    {textSlot(text,"231:52346/231:52401","Label","Lable")}
  </span>
</Root>);
case "231:52347": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52347"} data-name={"Color=yellow, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52347/231:52403"} data-name={"Label"}>
    {textSlot(text,"231:52347/231:52403","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52347/231:52404"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52347/231:52404/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52347/231:52404/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52348": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52348"} data-name={"Color=red, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52348/231:52405"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52348/231:52405/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52348/231:52405/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n20} data-layer={"231:52348/231:52406"} data-name={"Label"}>
    {textSlot(text,"231:52348/231:52406","Label","Lable")}
  </span>
</Root>);
case "231:52349": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52349"} data-name={"Color=purple, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52349/231:52407"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52349/231:52407/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52349/231:52407/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n22} data-layer={"231:52349/231:52408"} data-name={"Label"}>
    {textSlot(text,"231:52349/231:52408","Label","Lable")}
  </span>
</Root>);
case "231:52350": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52350"} data-name={"Color=basa, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52350/231:52409"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52350/231:52409/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52350/231:52409/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n24} data-layer={"231:52350/231:52410"} data-name={"Label"}>
    {textSlot(text,"231:52350/231:52410","Label","Lable")}
  </span>
</Root>);
case "231:52351": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52351"} data-name={"Color=red, object=without, condition=active"}>
  <span className={s.n26} data-layer={"231:52351/231:52412"} data-name={"Label"}>
    {textSlot(text,"231:52351/231:52412","Label","Lable")}
  </span>
</Root>);
case "231:52352": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52352"} data-name={"Color=red, object=right, condition=active"}>
  <span className={s.n26} data-layer={"231:52352/231:52413"} data-name={"Label"}>
    {textSlot(text,"231:52352/231:52413","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52352/231:52414"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52352/231:52414/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52352/231:52414/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52353": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52353"} data-name={"Color=red, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52353/231:52416"} data-name={"Label"}>
    {textSlot(text,"231:52353/231:52416","Label","Lable")}
  </span>
</Root>);
case "231:52354": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52354"} data-name={"Color=red, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52354/231:52418"} data-name={"Label"}>
    {textSlot(text,"231:52354/231:52418","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52354/231:52419"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52354/231:52419/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52354/231:52419/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52355": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52355"} data-name={"Color=purple, object=without, condition=active"}>
  <span className={s.n29} data-layer={"231:52355/231:52421"} data-name={"Label"}>
    {textSlot(text,"231:52355/231:52421","Label","Lable")}
  </span>
</Root>);
case "231:52356": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52356"} data-name={"Color=basa, object=without, condition=active"}>
  <span className={s.n31} data-layer={"231:52356/231:52423"} data-name={"Label"}>
    {textSlot(text,"231:52356/231:52423","Label","Lable")}
  </span>
</Root>);
case "231:52357": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52357"} data-name={"Color=purple, object=right, condition=active"}>
  <span className={s.n29} data-layer={"231:52357/231:52424"} data-name={"Label"}>
    {textSlot(text,"231:52357/231:52424","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52357/231:52425"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52357/231:52425/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52357/231:52425/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52358": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52358"} data-name={"Color=basa, object=right, condition=active"}>
  <span className={s.n31} data-layer={"231:52358/231:52426"} data-name={"Label"}>
    {textSlot(text,"231:52358/231:52426","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52358/231:52427"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52358/231:52427/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52358/231:52427/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52359": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52359"} data-name={"Color=purple, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52359/231:52429"} data-name={"Label"}>
    {textSlot(text,"231:52359/231:52429","Label","Lable")}
  </span>
</Root>);
case "231:52360": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52360"} data-name={"Color=purple, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52360/231:52431"} data-name={"Label"}>
    {textSlot(text,"231:52360/231:52431","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52360/231:52432"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52360/231:52432/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52360/231:52432/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52361": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52361"} data-name={"Color=basa, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52361/231:52434"} data-name={"Label"}>
    {textSlot(text,"231:52361/231:52434","Label","Lable")}
  </span>
</Root>);
case "231:52362": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52362"} data-name={"Color=basa, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52362/231:52436"} data-name={"Label"}>
    {textSlot(text,"231:52362/231:52436","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52362/231:52437"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52362/231:52437/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52362/231:52437/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52363": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52363"} data-name={"Color=blue, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52363/231:52438"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52363/231:52438/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52363/231:52438/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n35} data-layer={"231:52363/231:52439"} data-name={"Label"}>
    {textSlot(text,"231:52363/231:52439","Label","Lable")}
  </span>
</Root>);
case "231:52364": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52364"} data-name={"Color=blue, object=without, condition=active"}>
  <span className={s.n37} data-layer={"231:52364/231:52441"} data-name={"Label"}>
    {textSlot(text,"231:52364/231:52441","Label","Lable")}
  </span>
</Root>);
case "231:52365": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52365"} data-name={"Color=blue, object=right, condition=active"}>
  <span className={s.n37} data-layer={"231:52365/231:52442"} data-name={"Label"}>
    {textSlot(text,"231:52365/231:52442","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52365/231:52443"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52365/231:52443/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52365/231:52443/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52366": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52366"} data-name={"Color=blue, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52366/231:52445"} data-name={"Label"}>
    {textSlot(text,"231:52366/231:52445","Label","Lable")}
  </span>
</Root>);
case "231:52367": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52367"} data-name={"Color=blue, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52367/231:52447"} data-name={"Label"}>
    {textSlot(text,"231:52367/231:52447","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52367/231:52448"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52367/231:52448/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52367/231:52448/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52368": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52368"} data-name={"Color=gray, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52368/231:52449"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52368/231:52449/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52368/231:52449/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n40} data-layer={"231:52368/231:52450"} data-name={"Label"}>
    {textSlot(text,"231:52368/231:52450","Label","Lable")}
  </span>
</Root>);
case "231:52369": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52369"} data-name={"Color=stroke, object=left, condition=active"}>
  <span className={s.n1} data-layer={"231:52369/231:52451"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52369/231:52451/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52369/231:52451/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n40} data-layer={"231:52369/231:52452"} data-name={"Label"}>
    {textSlot(text,"231:52369/231:52452","Label","Lable")}
  </span>
</Root>);
case "231:52370": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52370"} data-name={"Color=no color, object=left, condition=active"}>
  <span className={s.n43} data-layer={"231:52370/231:52453"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"231:52370/231:52453/235:49812"} data-name={"01"}>
      <span className={s.n19} data-layer={"231:52370/231:52453/235:49812/235:49813"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n44} data-layer={"231:52370/231:52454"} data-name={"Label"}>
    {textSlot(text,"231:52370/231:52454","Label","Lable")}
  </span>
</Root>);
case "231:52371": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52371"} data-name={"Color=gray, object=right, condition=active"}>
  <span className={s.n46} data-layer={"231:52371/231:52455"} data-name={"Label"}>
    {textSlot(text,"231:52371/231:52455","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52371/231:52456"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52371/231:52456/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52371/231:52456/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52372": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52372"} data-name={"Color=stroke, object=right, condition=active"}>
  <span className={s.n46} data-layer={"231:52372/231:52457"} data-name={"Label"}>
    {textSlot(text,"231:52372/231:52457","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52372/231:52458"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52372/231:52458/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52372/231:52458/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52373": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52373"} data-name={"Color=no color, object=right, condition=active"}>
  <span className={s.n48} data-layer={"231:52373/231:52459"} data-name={"Label"}>
    {textSlot(text,"231:52373/231:52459","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"231:52373/231:52460"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52373/231:52460/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52373/231:52460/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52374": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52374"} data-name={"Color=gray, object=without, condition=active"}>
  <span className={s.n46} data-layer={"231:52374/231:52462"} data-name={"Label"}>
    {textSlot(text,"231:52374/231:52462","Label","Lable")}
  </span>
</Root>);
case "231:52375": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52375"} data-name={"Color=stroke, object=without, condition=active"}>
  <span className={s.n46} data-layer={"231:52375/231:52464"} data-name={"Label"}>
    {textSlot(text,"231:52375/231:52464","Label","Lable")}
  </span>
</Root>);
case "231:52376": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52376"} data-name={"Color=no color, object=without, condition=active"}>
  <span className={s.n48} data-layer={"231:52376/231:52466"} data-name={"Label"}>
    {textSlot(text,"231:52376/231:52466","Label","Lable")}
  </span>
</Root>);
case "231:52377": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52377"} data-name={"Color=gray, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52377/231:52468"} data-name={"Label"}>
    {textSlot(text,"231:52377/231:52468","Label","Lable")}
  </span>
</Root>);
case "231:52378": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52378"} data-name={"Color=stroke, object=without, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52378/231:52470"} data-name={"Label"}>
    {textSlot(text,"231:52378/231:52470","Label","Lable")}
  </span>
</Root>);
case "231:52379": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52379"} data-name={"Color=no color, object=without, condition=disabled"}>
  <span className={s.n53} data-layer={"231:52379/231:52472"} data-name={"Label"}>
    {textSlot(text,"231:52379/231:52472","Label","Lable")}
  </span>
</Root>);
case "231:52380": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52380"} data-name={"Color=gray, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52380/231:52474"} data-name={"Label"}>
    {textSlot(text,"231:52380/231:52474","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52380/231:52475"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52380/231:52475/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52380/231:52475/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52381": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52381"} data-name={"Color=stroke, object=right, condition=disabled"}>
  <span className={s.n11} data-layer={"231:52381/231:52477"} data-name={"Label"}>
    {textSlot(text,"231:52381/231:52477","Label","Lable")}
  </span>
  <span className={s.n8} data-layer={"231:52381/231:52478"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52381/231:52478/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52381/231:52478/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "231:52382": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:52382"} data-name={"Color=no color, object=right, condition=disabled"}>
  <span className={s.n53} data-layer={"231:52382/231:52480"} data-name={"Label"}>
    {textSlot(text,"231:52382/231:52480","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"231:52382/231:52481"} data-name={"icon/set/base"}>
    <span className={s.n9} data-layer={"231:52382/231:52481/227:1832"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"231:52382/231:52481/227:1833"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
