// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LableVarSValeuDesign227_1965.module.css';
export const variants = [
  {
    "id": "227:1966",
    "name": "Color=green, object=left, condition=active",
    "props": {
      "Color": "green",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49650",
    "name": "Color=green, object=without, condition=active",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49653",
    "name": "Color=green, object=right, condition=active",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49656",
    "name": "Color=green, object=without, condition=disabled",
    "props": {
      "Color": "green",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49659",
    "name": "Color=green, object=right, condition=disabled",
    "props": {
      "Color": "green",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49663",
    "name": "Color=yellow, object=left, condition=active",
    "props": {
      "Color": "yellow",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49666",
    "name": "Color=yellow, object=without, condition=active",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49669",
    "name": "Color=yellow, object=right, condition=active",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49672",
    "name": "Color=yellow, object=without, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49675",
    "name": "Color=yellow, object=right, condition=disabled",
    "props": {
      "Color": "yellow",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49679",
    "name": "Color=red, object=left, condition=active",
    "props": {
      "Color": "red",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49682",
    "name": "Color=purple, object=left, condition=active",
    "props": {
      "Color": "purple",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49685",
    "name": "Color=basa, object=left, condition=active",
    "props": {
      "Color": "basa",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49688",
    "name": "Color=red, object=without, condition=active",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49691",
    "name": "Color=red, object=right, condition=active",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49694",
    "name": "Color=red, object=without, condition=disabled",
    "props": {
      "Color": "red",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49697",
    "name": "Color=red, object=right, condition=disabled",
    "props": {
      "Color": "red",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49701",
    "name": "Color=purple, object=without, condition=active",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49704",
    "name": "Color=basa, object=without, condition=active",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49707",
    "name": "Color=purple, object=right, condition=active",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49710",
    "name": "Color=basa, object=right, condition=active",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49713",
    "name": "Color=purple, object=without, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49716",
    "name": "Color=purple, object=right, condition=disabled",
    "props": {
      "Color": "purple",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49720",
    "name": "Color=basa, object=without, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49723",
    "name": "Color=basa, object=right, condition=disabled",
    "props": {
      "Color": "basa",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49727",
    "name": "Color=blue, object=left, condition=active",
    "props": {
      "Color": "blue",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49730",
    "name": "Color=blue, object=without, condition=active",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49733",
    "name": "Color=blue, object=right, condition=active",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49736",
    "name": "Color=blue, object=without, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49739",
    "name": "Color=blue, object=right, condition=disabled",
    "props": {
      "Color": "blue",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49743",
    "name": "Color=gray, object=left, condition=active",
    "props": {
      "Color": "gray",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49746",
    "name": "Color=stroke, object=left, condition=active",
    "props": {
      "Color": "stroke",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49749",
    "name": "Color=no color, object=left, condition=active",
    "props": {
      "Color": "no color",
      "object": "left",
      "condition": "active"
    }
  },
  {
    "id": "234:49752",
    "name": "Color=gray, object=right, condition=active",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49755",
    "name": "Color=stroke, object=right, condition=active",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49758",
    "name": "Color=no color, object=right, condition=active",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "active"
    }
  },
  {
    "id": "234:49761",
    "name": "Color=gray, object=without, condition=active",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49764",
    "name": "Color=stroke, object=without, condition=active",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49767",
    "name": "Color=no color, object=without, condition=active",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "active"
    }
  },
  {
    "id": "234:49770",
    "name": "Color=gray, object=without, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49773",
    "name": "Color=stroke, object=without, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49776",
    "name": "Color=no color, object=without, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "without",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49779",
    "name": "Color=gray, object=right, condition=disabled",
    "props": {
      "Color": "gray",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49783",
    "name": "Color=stroke, object=right, condition=disabled",
    "props": {
      "Color": "stroke",
      "object": "right",
      "condition": "disabled"
    }
  },
  {
    "id": "234:49787",
    "name": "Color=no color, object=right, condition=disabled",
    "props": {
      "Color": "no color",
      "object": "right",
      "condition": "disabled"
    }
  }
] as const;
export type LableVarSValeuDesign227_1965Variant = typeof variants[number]["id"];
export interface LableVarSValeuDesign227_1965Dimensions {
  "Color"?: "basa" | "blue" | "gray" | "green" | "no color" | "purple" | "red" | "stroke" | "yellow";
  "object"?: "left" | "right" | "without";
  "condition"?: "active" | "disabled";
}
export interface LableVarSValeuDesign227_1965Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LableVarSValeuDesign227_1965Variant;
  variantProps?: LableVarSValeuDesign227_1965Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LableVarSValeuDesign227_1965Variant) => void;
}
const transitions = {};
export function LableVarSValeuDesign227_1965({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LableVarSValeuDesign227_1965Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1966": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1966"} data-name={"Color=green, object=left, condition=active"}>
  <span className={s.n1} data-layer={"227:1966/227:1967"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:1966/227:1967/227:1901"} data-name={"01"}>
      <span className={s.n3} data-layer={"227:1966/227:1967/227:1901/227:1902"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n4} data-layer={"227:1966/227:1968"} data-name={"Label"}>
    {textSlot(text,"227:1966/227:1968","Label","Lable")}
  </span>
</Root>);
case "234:49650": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49650"} data-name={"Color=green, object=without, condition=active"}>
  <span className={s.n6} data-layer={"234:49650/234:49652"} data-name={"Label"}>
    {textSlot(text,"234:49650/234:49652","Label","Lable")}
  </span>
</Root>);
case "234:49653": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49653"} data-name={"Color=green, object=right, condition=active"}>
  <span className={s.n6} data-layer={"234:49653/234:49654"} data-name={"Label"}>
    {textSlot(text,"234:49653/234:49654","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49653/234:49655"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49653/234:49655/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49653/234:49655/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(31,189,6,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49656": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49656"} data-name={"Color=green, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49656/234:49658"} data-name={"Label"}>
    {textSlot(text,"234:49656/234:49658","Label","Lable")}
  </span>
</Root>);
case "234:49659": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49659"} data-name={"Color=green, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49659/234:49661"} data-name={"Label"}>
    {textSlot(text,"234:49659/234:49661","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49659/234:49662"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49659/234:49662/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49659/234:49662/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49663": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49663"} data-name={"Color=yellow, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49663/234:49664"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49663/234:49664/227:1901"} data-name={"01"}>
      <span className={s.n3} data-layer={"234:49663/234:49664/227:1901/227:1902"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n13} data-layer={"234:49663/234:49665"} data-name={"Label"}>
    {textSlot(text,"234:49663/234:49665","Label","Lable")}
  </span>
</Root>);
case "234:49666": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49666"} data-name={"Color=yellow, object=without, condition=active"}>
  <span className={s.n15} data-layer={"234:49666/234:49668"} data-name={"Label"}>
    {textSlot(text,"234:49666/234:49668","Label","Lable")}
  </span>
</Root>);
case "234:49669": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49669"} data-name={"Color=yellow, object=right, condition=active"}>
  <span className={s.n15} data-layer={"234:49669/234:49670"} data-name={"Label"}>
    {textSlot(text,"234:49669/234:49670","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49669/234:49671"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49669/234:49671/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49669/234:49671/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(218,147,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49672": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49672"} data-name={"Color=yellow, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49672/234:49674"} data-name={"Label"}>
    {textSlot(text,"234:49672/234:49674","Label","Lable")}
  </span>
</Root>);
case "234:49675": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49675"} data-name={"Color=yellow, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49675/234:49677"} data-name={"Label"}>
    {textSlot(text,"234:49675/234:49677","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49675/234:49678"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49675/234:49678/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49675/234:49678/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49679": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49679"} data-name={"Color=red, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49679/234:49680"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49679/234:49680/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49679/234:49680/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n19} data-layer={"234:49679/234:49681"} data-name={"Label"}>
    {textSlot(text,"234:49679/234:49681","Label","Lable")}
  </span>
</Root>);
case "234:49682": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49682"} data-name={"Color=purple, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49682/234:49683"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49682/234:49683/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49682/234:49683/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n21} data-layer={"234:49682/234:49684"} data-name={"Label"}>
    {textSlot(text,"234:49682/234:49684","Label","Lable")}
  </span>
</Root>);
case "234:49685": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49685"} data-name={"Color=basa, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49685/234:49686"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49685/234:49686/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49685/234:49686/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"234:49685/234:49687"} data-name={"Label"}>
    {textSlot(text,"234:49685/234:49687","Label","Lable")}
  </span>
</Root>);
case "234:49688": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49688"} data-name={"Color=red, object=without, condition=active"}>
  <span className={s.n25} data-layer={"234:49688/234:49690"} data-name={"Label"}>
    {textSlot(text,"234:49688/234:49690","Label","Lable")}
  </span>
</Root>);
case "234:49691": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49691"} data-name={"Color=red, object=right, condition=active"}>
  <span className={s.n25} data-layer={"234:49691/234:49692"} data-name={"Label"}>
    {textSlot(text,"234:49691/234:49692","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49691/234:49693"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49691/234:49693/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49691/234:49693/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49694": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49694"} data-name={"Color=red, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49694/234:49696"} data-name={"Label"}>
    {textSlot(text,"234:49694/234:49696","Label","Lable")}
  </span>
</Root>);
case "234:49697": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49697"} data-name={"Color=red, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49697/234:49699"} data-name={"Label"}>
    {textSlot(text,"234:49697/234:49699","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49697/234:49700"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49697/234:49700/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49697/234:49700/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49701": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49701"} data-name={"Color=purple, object=without, condition=active"}>
  <span className={s.n28} data-layer={"234:49701/234:49703"} data-name={"Label"}>
    {textSlot(text,"234:49701/234:49703","Label","Lable")}
  </span>
</Root>);
case "234:49704": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49704"} data-name={"Color=basa, object=without, condition=active"}>
  <span className={s.n30} data-layer={"234:49704/234:49706"} data-name={"Label"}>
    {textSlot(text,"234:49704/234:49706","Label","Lable")}
  </span>
</Root>);
case "234:49707": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49707"} data-name={"Color=purple, object=right, condition=active"}>
  <span className={s.n28} data-layer={"234:49707/234:49708"} data-name={"Label"}>
    {textSlot(text,"234:49707/234:49708","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49707/234:49709"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49707/234:49709/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49707/234:49709/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(162,11,233,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49710": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49710"} data-name={"Color=basa, object=right, condition=active"}>
  <span className={s.n30} data-layer={"234:49710/234:49711"} data-name={"Label"}>
    {textSlot(text,"234:49710/234:49711","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49710/234:49712"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49710/234:49712/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49710/234:49712/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49713": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49713"} data-name={"Color=purple, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49713/234:49715"} data-name={"Label"}>
    {textSlot(text,"234:49713/234:49715","Label","Lable")}
  </span>
</Root>);
case "234:49716": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49716"} data-name={"Color=purple, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49716/234:49718"} data-name={"Label"}>
    {textSlot(text,"234:49716/234:49718","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49716/234:49719"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49716/234:49719/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49716/234:49719/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49720": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49720"} data-name={"Color=basa, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49720/234:49722"} data-name={"Label"}>
    {textSlot(text,"234:49720/234:49722","Label","Lable")}
  </span>
</Root>);
case "234:49723": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49723"} data-name={"Color=basa, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49723/234:49725"} data-name={"Label"}>
    {textSlot(text,"234:49723/234:49725","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49723/234:49726"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49723/234:49726/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49723/234:49726/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49727": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49727"} data-name={"Color=blue, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49727/234:49728"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49727/234:49728/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49727/234:49728/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n34} data-layer={"234:49727/234:49729"} data-name={"Label"}>
    {textSlot(text,"234:49727/234:49729","Label","Lable")}
  </span>
</Root>);
case "234:49730": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49730"} data-name={"Color=blue, object=without, condition=active"}>
  <span className={s.n36} data-layer={"234:49730/234:49732"} data-name={"Label"}>
    {textSlot(text,"234:49730/234:49732","Label","Lable")}
  </span>
</Root>);
case "234:49733": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49733"} data-name={"Color=blue, object=right, condition=active"}>
  <span className={s.n36} data-layer={"234:49733/234:49734"} data-name={"Label"}>
    {textSlot(text,"234:49733/234:49734","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49733/234:49735"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49733/234:49735/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49733/234:49735/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(0,80,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49736": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49736"} data-name={"Color=blue, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49736/234:49738"} data-name={"Label"}>
    {textSlot(text,"234:49736/234:49738","Label","Lable")}
  </span>
</Root>);
case "234:49739": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49739"} data-name={"Color=blue, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49739/234:49741"} data-name={"Label"}>
    {textSlot(text,"234:49739/234:49741","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49739/234:49742"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49739/234:49742/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49739/234:49742/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49743": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49743"} data-name={"Color=gray, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49743/234:49744"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49743/234:49744/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49743/234:49744/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n39} data-layer={"234:49743/234:49745"} data-name={"Label"}>
    {textSlot(text,"234:49743/234:49745","Label","Lable")}
  </span>
</Root>);
case "234:49746": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49746"} data-name={"Color=stroke, object=left, condition=active"}>
  <span className={s.n1} data-layer={"234:49746/234:49747"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49746/234:49747/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49746/234:49747/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n39} data-layer={"234:49746/234:49748"} data-name={"Label"}>
    {textSlot(text,"234:49746/234:49748","Label","Lable")}
  </span>
</Root>);
case "234:49749": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49749"} data-name={"Color=no color, object=left, condition=active"}>
  <span className={s.n42} data-layer={"234:49749/234:49750"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"234:49749/234:49750/234:49643"} data-name={"01"}>
      <span className={s.n18} data-layer={"234:49749/234:49750/234:49643/234:49644"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 5 5.19145" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.8751 4.73538 C1.8751 5.08056 2.15492 5.36038 2.5001 5.36038 C2.84528 5.36038 3.1251 5.08056 3.1251 4.73538 L2.5001 4.73538 L1.8751 4.73538 Z M3.1251 0 C3.1251 -0.34518 2.84528 -0.625 2.5001 -0.625 C2.15492 -0.625 1.8751 -0.34518 1.8751 0 L2.5001 0 L3.1251 0 Z M0.34733 3.00532 C0.06037 2.81349 -0.32777 2.89062 -0.5196 3.17758 C-0.71143 3.46455 -0.6343 3.85269 -0.34733 4.04452 L0 3.52492 L0.34733 3.00532 Z M2.49308 5.19145 L2.14575 5.71105 L2.49214 5.9426 L2.83911 5.71193 L2.49308 5.19145 Z M5.34603 4.04525 C5.63347 3.85415 5.71158 3.4662 5.52047 3.17875 C5.32937 2.89131 4.94142 2.8132 4.65397 3.00431 L5 3.52478 L5.34603 4.04525 Z M2.5001 4.73538 L3.1251 4.73538 L3.1251 0 L2.5001 0 L1.8751 0 L1.8751 4.73538 L2.5001 4.73538 Z M0 3.52492 L-0.34733 4.04452 L2.14575 5.71105 L2.49308 5.19145 L2.84042 4.67185 L0.34733 3.00532 L0 3.52492 Z M2.49308 5.19145 L2.83911 5.71193 L5.34603 4.04525 L5 3.52478 L4.65397 3.00431 L2.14706 4.67098 L2.49308 5.19145 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n43} data-layer={"234:49749/234:49751"} data-name={"Label"}>
    {textSlot(text,"234:49749/234:49751","Label","Lable")}
  </span>
</Root>);
case "234:49752": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49752"} data-name={"Color=gray, object=right, condition=active"}>
  <span className={s.n45} data-layer={"234:49752/234:49753"} data-name={"Label"}>
    {textSlot(text,"234:49752/234:49753","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49752/234:49754"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49752/234:49754/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49752/234:49754/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49755": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49755"} data-name={"Color=stroke, object=right, condition=active"}>
  <span className={s.n45} data-layer={"234:49755/234:49756"} data-name={"Label"}>
    {textSlot(text,"234:49755/234:49756","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49755/234:49757"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49755/234:49757/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49755/234:49757/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49758": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49758"} data-name={"Color=no color, object=right, condition=active"}>
  <span className={s.n47} data-layer={"234:49758/234:49759"} data-name={"Label"}>
    {textSlot(text,"234:49758/234:49759","Label","Lable")}
  </span>
  <span className={s.n48} data-layer={"234:49758/234:49760"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49758/234:49760/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49758/234:49760/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49761": return (<Root {...rootAttributes} className={[s.n49,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49761"} data-name={"Color=gray, object=without, condition=active"}>
  <span className={s.n45} data-layer={"234:49761/234:49763"} data-name={"Label"}>
    {textSlot(text,"234:49761/234:49763","Label","Lable")}
  </span>
</Root>);
case "234:49764": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49764"} data-name={"Color=stroke, object=without, condition=active"}>
  <span className={s.n45} data-layer={"234:49764/234:49766"} data-name={"Label"}>
    {textSlot(text,"234:49764/234:49766","Label","Lable")}
  </span>
</Root>);
case "234:49767": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49767"} data-name={"Color=no color, object=without, condition=active"}>
  <span className={s.n47} data-layer={"234:49767/234:49769"} data-name={"Label"}>
    {textSlot(text,"234:49767/234:49769","Label","Lable")}
  </span>
</Root>);
case "234:49770": return (<Root {...rootAttributes} className={[s.n49,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49770"} data-name={"Color=gray, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49770/234:49772"} data-name={"Label"}>
    {textSlot(text,"234:49770/234:49772","Label","Lable")}
  </span>
</Root>);
case "234:49773": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49773"} data-name={"Color=stroke, object=without, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49773/234:49775"} data-name={"Label"}>
    {textSlot(text,"234:49773/234:49775","Label","Lable")}
  </span>
</Root>);
case "234:49776": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49776"} data-name={"Color=no color, object=without, condition=disabled"}>
  <span className={s.n52} data-layer={"234:49776/234:49778"} data-name={"Label"}>
    {textSlot(text,"234:49776/234:49778","Label","Lable")}
  </span>
</Root>);
case "234:49779": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49779"} data-name={"Color=gray, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49779/234:49781"} data-name={"Label"}>
    {textSlot(text,"234:49779/234:49781","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49779/234:49782"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49779/234:49782/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49779/234:49782/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49783": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49783"} data-name={"Color=stroke, object=right, condition=disabled"}>
  <span className={s.n10} data-layer={"234:49783/234:49785"} data-name={"Label"}>
    {textSlot(text,"234:49783/234:49785","Label","Lable")}
  </span>
  <span className={s.n7} data-layer={"234:49783/234:49786"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49783/234:49786/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49783/234:49786/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "234:49787": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:49787"} data-name={"Color=no color, object=right, condition=disabled"}>
  <span className={s.n52} data-layer={"234:49787/234:49789"} data-name={"Label"}>
    {textSlot(text,"234:49787/234:49789","Label","Lable")}
  </span>
  <span className={s.n48} data-layer={"234:49787/234:49790"} data-name={"icon/set/base"}>
    <span className={s.n8} data-layer={"234:49787/234:49790/234:49332"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M5 0.66667 C5.36819 0.66667 5.66667 0.36819 5.66667 0 C5.66667 -0.36819 5.36819 -0.66667 5 -0.66667 L5 0 L5 0.66667 Z M0 0 L0 0.66667 L5 0.66667 L5 0 L5 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"234:49787/234:49790/234:49333"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 5 C-0.66667 5.36819 -0.36819 5.66667 0 5.66667 C0.36819 5.66667 0.66667 5.36819 0.66667 5 L0 5 L-0.66667 5 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 5 L0.66667 5 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 5 L0 5 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
