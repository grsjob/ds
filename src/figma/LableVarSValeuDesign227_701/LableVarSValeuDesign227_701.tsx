// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LableVarSValeuDesign227_701.module.css';
export const variants = [
  {
    "id": "227:702",
    "name": "Color=green, object=without, condition=active",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "227:705",
    "name": "Color=gray, object=without, condition=active",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50517",
    "name": "Color=green, object=left, condition=active",
    "props": {
      "Color": "green",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50520",
    "name": "Color=green, object=right, condition=active",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50523",
    "name": "Color=green, object=without, condition=disabled",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50526",
    "name": "Color=green, object=right, condition=disabled",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50530",
    "name": "Color=yellow, object=left, condition=active",
    "props": {
      "Color": "yellow",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50533",
    "name": "Color=yellow, object=without, condition=active",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50536",
    "name": "Color=yellow, object=right, condition=active",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50539",
    "name": "Color=yellow, object=without, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50542",
    "name": "Color=yellow, object=right, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50546",
    "name": "Color=red, object=left, condition=active",
    "props": {
      "Color": "red",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50549",
    "name": "Color=purple, object=left, condition=active",
    "props": {
      "Color": "purple",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50552",
    "name": "Color=basa, object=left, condition=active",
    "props": {
      "Color": "basa",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50555",
    "name": "Color=red, object=without, condition=active",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50558",
    "name": "Color=red, object=right, condition=active",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50561",
    "name": "Color=red, object=without, condition=disabled",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50564",
    "name": "Color=red, object=right, condition=disabled",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50568",
    "name": "Color=purple, object=without, condition=active",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50571",
    "name": "Color=basa, object=without, condition=active",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50574",
    "name": "Color=purple, object=right, condition=active",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50577",
    "name": "Color=basa, object=right, condition=active",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50580",
    "name": "Color=purple, object=without, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50583",
    "name": "Color=purple, object=right, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50587",
    "name": "Color=basa, object=without, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50590",
    "name": "Color=basa, object=right, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50594",
    "name": "Color=blue, object=left, condition=active",
    "props": {
      "Color": "blue",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50597",
    "name": "Color=blue, object=without, condition=active",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50600",
    "name": "Color=blue, object=right, condition=active",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50603",
    "name": "Color=blue, object=without, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50606",
    "name": "Color=blue, object=right, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50610",
    "name": "Color=gray, object=left, condition=active",
    "props": {
      "Color": "gray",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50613",
    "name": "Color=stroke, object=left, condition=active",
    "props": {
      "Color": "stroke",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50616",
    "name": "Color=no color, object=left, condition=active",
    "props": {
      "Color": "no color",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "235:50619",
    "name": "Color=gray, object=right, condition=active",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50622",
    "name": "Color=stroke, object=right, condition=active",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50625",
    "name": "Color=no color, object=right, condition=active",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "235:50628",
    "name": "Color=stroke, object=without, condition=active",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50631",
    "name": "Color=no color, object=without, condition=active",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "235:50634",
    "name": "Color=gray, object=without, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50637",
    "name": "Color=stroke, object=without, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50640",
    "name": "Color=no color, object=without, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50643",
    "name": "Color=gray, object=right, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50647",
    "name": "Color=stroke, object=right, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "235:50651",
    "name": "Color=no color, object=right, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "disabled"
    }
  }
] as const;
export type LableVarSValeuDesign227_701Variant = typeof variants[number]["id"];
export interface LableVarSValeuDesign227_701Dimensions {
  "Color"?: "basa" | "blue" | "gray" | "green" | "no color" | "purple" | "red" | "stroke" | "yellow";
  "object"?: "left" | "right" | "without";
  "condition"?: "active" | "disabled";
}
export interface LableVarSValeuDesign227_701Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LableVarSValeuDesign227_701Variant;
  variantProps?: LableVarSValeuDesign227_701Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LableVarSValeuDesign227_701Variant) => void;
}
const transitions = {};
export function LableVarSValeuDesign227_701({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LableVarSValeuDesign227_701Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:702": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:702"} data-name={"Color=green, object=without, condition=active"}>
  <span className={s.n1} data-layer={"227:702/227:704"} data-name={"Label"}>
    {textSlot(text,"227:702/227:704","Label","Lable")}
  </span>
</Root>);
case "227:705": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:705"} data-name={"Color=gray, object=without, condition=active"}>
  <span className={s.n3} data-layer={"227:705/227:707"} data-name={"Label"}>
    {textSlot(text,"227:705/227:707","Label","Lable")}
  </span>
</Root>);
case "235:50517": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50517"} data-name={"Color=green, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50517/235:50518"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50517/235:50518/228:49885"} data-name={"01"}>
      <span className={s.n7} data-layer={"235:50517/235:50518/228:49885/228:49886"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n8} data-layer={"235:50517/235:50519"} data-name={"Label"}>
    {textSlot(text,"235:50517/235:50519","Label","Lable")}
  </span>
</Root>);
case "235:50520": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50520"} data-name={"Color=green, object=right, condition=active"}>
  <span className={s.n1} data-layer={"235:50520/235:50521"} data-name={"Label"}>
    {textSlot(text,"235:50520/235:50521","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50520/235:50522"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50520/235:50522/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50520/235:50522/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50523": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50523"} data-name={"Color=green, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50523/235:50525"} data-name={"Label"}>
    {textSlot(text,"235:50523/235:50525","Label","Lable")}
  </span>
</Root>);
case "235:50526": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50526"} data-name={"Color=green, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50526/235:50528"} data-name={"Label"}>
    {textSlot(text,"235:50526/235:50528","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50526/235:50529"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50526/235:50529/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50526/235:50529/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50530": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50530"} data-name={"Color=yellow, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50530/235:50531"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50530/235:50531/228:49885"} data-name={"01"}>
      <span className={s.n7} data-layer={"235:50530/235:50531/228:49885/228:49886"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n15} data-layer={"235:50530/235:50532"} data-name={"Label"}>
    {textSlot(text,"235:50530/235:50532","Label","Lable")}
  </span>
</Root>);
case "235:50533": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50533"} data-name={"Color=yellow, object=without, condition=active"}>
  <span className={s.n17} data-layer={"235:50533/235:50535"} data-name={"Label"}>
    {textSlot(text,"235:50533/235:50535","Label","Lable")}
  </span>
</Root>);
case "235:50536": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50536"} data-name={"Color=yellow, object=right, condition=active"}>
  <span className={s.n17} data-layer={"235:50536/235:50537"} data-name={"Label"}>
    {textSlot(text,"235:50536/235:50537","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50536/235:50538"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50536/235:50538/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50536/235:50538/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50539": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50539"} data-name={"Color=yellow, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50539/235:50541"} data-name={"Label"}>
    {textSlot(text,"235:50539/235:50541","Label","Lable")}
  </span>
</Root>);
case "235:50542": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50542"} data-name={"Color=yellow, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50542/235:50544"} data-name={"Label"}>
    {textSlot(text,"235:50542/235:50544","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50542/235:50545"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50542/235:50545/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50542/235:50545/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50546": return (<Root {...rootAttributes} className={[s.n19,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50546"} data-name={"Color=red, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50546/235:50547"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50546/235:50547/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50546/235:50547/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n21} data-layer={"235:50546/235:50548"} data-name={"Label"}>
    {textSlot(text,"235:50546/235:50548","Label","Lable")}
  </span>
</Root>);
case "235:50549": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50549"} data-name={"Color=purple, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50549/235:50550"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50549/235:50550/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50549/235:50550/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"235:50549/235:50551"} data-name={"Label"}>
    {textSlot(text,"235:50549/235:50551","Label","Lable")}
  </span>
</Root>);
case "235:50552": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50552"} data-name={"Color=basa, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50552/235:50553"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50552/235:50553/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50552/235:50553/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n25} data-layer={"235:50552/235:50554"} data-name={"Label"}>
    {textSlot(text,"235:50552/235:50554","Label","Lable")}
  </span>
</Root>);
case "235:50555": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50555"} data-name={"Color=red, object=without, condition=active"}>
  <span className={s.n27} data-layer={"235:50555/235:50557"} data-name={"Label"}>
    {textSlot(text,"235:50555/235:50557","Label","Lable")}
  </span>
</Root>);
case "235:50558": return (<Root {...rootAttributes} className={[s.n19,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50558"} data-name={"Color=red, object=right, condition=active"}>
  <span className={s.n27} data-layer={"235:50558/235:50559"} data-name={"Label"}>
    {textSlot(text,"235:50558/235:50559","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50558/235:50560"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50558/235:50560/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50558/235:50560/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50561": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50561"} data-name={"Color=red, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50561/235:50563"} data-name={"Label"}>
    {textSlot(text,"235:50561/235:50563","Label","Lable")}
  </span>
</Root>);
case "235:50564": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50564"} data-name={"Color=red, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50564/235:50566"} data-name={"Label"}>
    {textSlot(text,"235:50564/235:50566","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50564/235:50567"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50564/235:50567/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50564/235:50567/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50568": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50568"} data-name={"Color=purple, object=without, condition=active"}>
  <span className={s.n30} data-layer={"235:50568/235:50570"} data-name={"Label"}>
    {textSlot(text,"235:50568/235:50570","Label","Lable")}
  </span>
</Root>);
case "235:50571": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50571"} data-name={"Color=basa, object=without, condition=active"}>
  <span className={s.n32} data-layer={"235:50571/235:50573"} data-name={"Label"}>
    {textSlot(text,"235:50571/235:50573","Label","Lable")}
  </span>
</Root>);
case "235:50574": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50574"} data-name={"Color=purple, object=right, condition=active"}>
  <span className={s.n30} data-layer={"235:50574/235:50575"} data-name={"Label"}>
    {textSlot(text,"235:50574/235:50575","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50574/235:50576"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50574/235:50576/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50574/235:50576/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50577": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50577"} data-name={"Color=basa, object=right, condition=active"}>
  <span className={s.n32} data-layer={"235:50577/235:50578"} data-name={"Label"}>
    {textSlot(text,"235:50577/235:50578","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50577/235:50579"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50577/235:50579/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50577/235:50579/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50580": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50580"} data-name={"Color=purple, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50580/235:50582"} data-name={"Label"}>
    {textSlot(text,"235:50580/235:50582","Label","Lable")}
  </span>
</Root>);
case "235:50583": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50583"} data-name={"Color=purple, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50583/235:50585"} data-name={"Label"}>
    {textSlot(text,"235:50583/235:50585","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50583/235:50586"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50583/235:50586/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50583/235:50586/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50587": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50587"} data-name={"Color=basa, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50587/235:50589"} data-name={"Label"}>
    {textSlot(text,"235:50587/235:50589","Label","Lable")}
  </span>
</Root>);
case "235:50590": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50590"} data-name={"Color=basa, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50590/235:50592"} data-name={"Label"}>
    {textSlot(text,"235:50590/235:50592","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50590/235:50593"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50590/235:50593/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50590/235:50593/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50594": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50594"} data-name={"Color=blue, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50594/235:50595"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50594/235:50595/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50594/235:50595/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n36} data-layer={"235:50594/235:50596"} data-name={"Label"}>
    {textSlot(text,"235:50594/235:50596","Label","Lable")}
  </span>
</Root>);
case "235:50597": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50597"} data-name={"Color=blue, object=without, condition=active"}>
  <span className={s.n38} data-layer={"235:50597/235:50599"} data-name={"Label"}>
    {textSlot(text,"235:50597/235:50599","Label","Lable")}
  </span>
</Root>);
case "235:50600": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50600"} data-name={"Color=blue, object=right, condition=active"}>
  <span className={s.n38} data-layer={"235:50600/235:50601"} data-name={"Label"}>
    {textSlot(text,"235:50600/235:50601","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50600/235:50602"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50600/235:50602/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50600/235:50602/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50603": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50603"} data-name={"Color=blue, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50603/235:50605"} data-name={"Label"}>
    {textSlot(text,"235:50603/235:50605","Label","Lable")}
  </span>
</Root>);
case "235:50606": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50606"} data-name={"Color=blue, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50606/235:50608"} data-name={"Label"}>
    {textSlot(text,"235:50606/235:50608","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50606/235:50609"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50606/235:50609/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50606/235:50609/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50610": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50610"} data-name={"Color=gray, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50610/235:50611"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50610/235:50611/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50610/235:50611/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n41} data-layer={"235:50610/235:50612"} data-name={"Label"}>
    {textSlot(text,"235:50610/235:50612","Label","Lable")}
  </span>
</Root>);
case "235:50613": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50613"} data-name={"Color=stroke, object=left, condition=active"}>
  <span className={s.n5} data-layer={"235:50613/235:50614"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50613/235:50614/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50613/235:50614/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n41} data-layer={"235:50613/235:50615"} data-name={"Label"}>
    {textSlot(text,"235:50613/235:50615","Label","Lable")}
  </span>
</Root>);
case "235:50616": return (<Root {...rootAttributes} className={[s.n43,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50616"} data-name={"Color=no color, object=left, condition=active"}>
  <span className={s.n44} data-layer={"235:50616/235:50617"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"235:50616/235:50617/228:49888"} data-name={"01"}>
      <span className={s.n20} data-layer={"235:50616/235:50617/228:49888/228:49889"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n45} data-layer={"235:50616/235:50618"} data-name={"Label"}>
    {textSlot(text,"235:50616/235:50618","Label","Lable")}
  </span>
</Root>);
case "235:50619": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50619"} data-name={"Color=gray, object=right, condition=active"}>
  <span className={s.n3} data-layer={"235:50619/235:50620"} data-name={"Label"}>
    {textSlot(text,"235:50619/235:50620","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50619/235:50621"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50619/235:50621/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50619/235:50621/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50622": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50622"} data-name={"Color=stroke, object=right, condition=active"}>
  <span className={s.n3} data-layer={"235:50622/235:50623"} data-name={"Label"}>
    {textSlot(text,"235:50622/235:50623","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50622/235:50624"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50622/235:50624/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50622/235:50624/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50625": return (<Root {...rootAttributes} className={[s.n43,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50625"} data-name={"Color=no color, object=right, condition=active"}>
  <span className={s.n48} data-layer={"235:50625/235:50626"} data-name={"Label"}>
    {textSlot(text,"235:50625/235:50626","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"235:50625/235:50627"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50625/235:50627/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50625/235:50627/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50628": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50628"} data-name={"Color=stroke, object=without, condition=active"}>
  <span className={s.n3} data-layer={"235:50628/235:50630"} data-name={"Label"}>
    {textSlot(text,"235:50628/235:50630","Label","Lable")}
  </span>
</Root>);
case "235:50631": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50631"} data-name={"Color=no color, object=without, condition=active"}>
  <span className={s.n48} data-layer={"235:50631/235:50633"} data-name={"Label"}>
    {textSlot(text,"235:50631/235:50633","Label","Lable")}
  </span>
</Root>);
case "235:50634": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50634"} data-name={"Color=gray, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50634/235:50636"} data-name={"Label"}>
    {textSlot(text,"235:50634/235:50636","Label","Lable")}
  </span>
</Root>);
case "235:50637": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50637"} data-name={"Color=stroke, object=without, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50637/235:50639"} data-name={"Label"}>
    {textSlot(text,"235:50637/235:50639","Label","Lable")}
  </span>
</Root>);
case "235:50640": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50640"} data-name={"Color=no color, object=without, condition=disabled"}>
  <span className={s.n52} data-layer={"235:50640/235:50642"} data-name={"Label"}>
    {textSlot(text,"235:50640/235:50642","Label","Lable")}
  </span>
</Root>);
case "235:50643": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50643"} data-name={"Color=gray, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50643/235:50645"} data-name={"Label"}>
    {textSlot(text,"235:50643/235:50645","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50643/235:50646"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50643/235:50646/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50643/235:50646/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50647": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50647"} data-name={"Color=stroke, object=right, condition=disabled"}>
  <span className={s.n12} data-layer={"235:50647/235:50649"} data-name={"Label"}>
    {textSlot(text,"235:50647/235:50649","Label","Lable")}
  </span>
  <span className={s.n9} data-layer={"235:50647/235:50650"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50647/235:50650/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50647/235:50650/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "235:50651": return (<Root {...rootAttributes} className={[s.n43,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50651"} data-name={"Color=no color, object=right, condition=disabled"}>
  <span className={s.n52} data-layer={"235:50651/235:50653"} data-name={"Label"}>
    {textSlot(text,"235:50651/235:50653","Label","Lable")}
  </span>
  <span className={s.n49} data-layer={"235:50651/235:50654"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"235:50651/235:50654/228:49515"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 C-0.59375 0.32792 -0.32792 0.59375 0 0.59375 L0 0 L0 -0.59375 Z M5 0.59375 C5.32792 0.59375 5.59375 0.32792 5.59375 0 C5.59375 -0.32792 5.32792 -0.59375 5 -0.59375 L5 0 L5 0.59375 Z M0 0 L0 0.59375 L5 0.59375 L5 0 L5 -0.59375 L0 -0.59375 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:50651/235:50654/228:49516"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.59375 5 C-0.59375 5.32792 -0.32792 5.59375 0 5.59375 C0.32792 5.59375 0.59375 5.32792 0.59375 5 L0 5 L-0.59375 5 Z M0.59375 0 C0.59375 -0.32792 0.32792 -0.59375 0 -0.59375 C-0.32792 -0.59375 -0.59375 -0.32792 -0.59375 0 L0 0 L0.59375 0 Z M0 5 L0.59375 5 L0.59375 0 L0 0 L-0.59375 0 L-0.59375 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
