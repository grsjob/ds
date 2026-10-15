// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './PrimitivesTextVarDesign227_584.module.css';
export const variants = [
  {
    "id": "227:585",
    "name": "Size=14, Sm vs R=on",
    "props": {
      "Size": "14",
      "Sm vs R": "on"
    }
  },
  {
    "id": "227:594",
    "name": "Size=12, Sm vs R=on",
    "props": {
      "Size": "12",
      "Sm vs R": "on"
    }
  },
  {
    "id": "227:603",
    "name": "Size=16, Sm vs R=on",
    "props": {
      "Size": "16",
      "Sm vs R": "on"
    }
  },
  {
    "id": "227:612",
    "name": "Size=10, Sm vs R=on",
    "props": {
      "Size": "10",
      "Sm vs R": "on"
    }
  },
  {
    "id": "227:621",
    "name": "Size=12, Sm vs R=off",
    "props": {
      "Size": "12",
      "Sm vs R": "off"
    }
  },
  {
    "id": "227:630",
    "name": "Size=18, Sm vs R=on",
    "props": {
      "Size": "18",
      "Sm vs R": "on"
    }
  },
  {
    "id": "227:639",
    "name": "Size=14, Sm vs R=off",
    "props": {
      "Size": "14",
      "Sm vs R": "off"
    }
  },
  {
    "id": "237:50429",
    "name": "Size=18, Sm vs R=off",
    "props": {
      "Size": "18",
      "Sm vs R": "off"
    }
  },
  {
    "id": "237:50438",
    "name": "Size=16, Sm vs R=off",
    "props": {
      "Size": "16",
      "Sm vs R": "off"
    }
  },
  {
    "id": "237:50447",
    "name": "Size=11, Sm vs R=on",
    "props": {
      "Size": "11",
      "Sm vs R": "on"
    }
  },
  {
    "id": "237:50456",
    "name": "Size=11, Sm vs R=off",
    "props": {
      "Size": "11",
      "Sm vs R": "off"
    }
  },
  {
    "id": "237:50465",
    "name": "Size=10, Sm vs R=off",
    "props": {
      "Size": "10",
      "Sm vs R": "off"
    }
  }
] as const;
export type PrimitivesTextVarDesign227_584Variant = typeof variants[number]["id"];
export interface PrimitivesTextVarDesign227_584Dimensions {
  "Size"?: "10" | "11" | "12" | "14" | "16" | "18";
  "Sm vs R"?: "off" | "on";
}
export interface PrimitivesTextVarDesign227_584Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: PrimitivesTextVarDesign227_584Variant;
  variantProps?: PrimitivesTextVarDesign227_584Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: PrimitivesTextVarDesign227_584Variant) => void;
}
const transitions = {};
export function PrimitivesTextVarDesign227_584({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: PrimitivesTextVarDesign227_584Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:585": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:585"} data-name={"Size=14, Sm vs R=on"}>
  <span className={s.n1} data-layer={"227:585/227:586"} data-name={"content"}>
    <span className={s.n2} data-layer={"227:585/227:586/227:587"} data-name={"Text"}>
      {textSlot(text,"227:585/227:586/227:587","Text","Text")}
    </span>
  </span>
</Root>);
case "227:594": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:594"} data-name={"Size=12, Sm vs R=on"}>
  <span className={s.n4} data-layer={"227:594/227:595"} data-name={"content"}>
    <span className={s.n5} data-layer={"227:594/227:595/227:596"} data-name={"Text"}>
      {textSlot(text,"227:594/227:595/227:596","Text","Text")}
    </span>
  </span>
</Root>);
case "227:603": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:603"} data-name={"Size=16, Sm vs R=on"}>
  <span className={s.n7} data-layer={"227:603/227:604"} data-name={"content"}>
    <span className={s.n8} data-layer={"227:603/227:604/227:605"} data-name={"Text"}>
      {textSlot(text,"227:603/227:604/227:605","Text","Text")}
    </span>
  </span>
</Root>);
case "227:612": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:612"} data-name={"Size=10, Sm vs R=on"}>
  <span className={s.n10} data-layer={"227:612/227:613"} data-name={"content"}>
    <span className={s.n11} data-layer={"227:612/227:613/227:614"} data-name={"Text"}>
      {textSlot(text,"227:612/227:613/227:614","Text","Text")}
    </span>
  </span>
</Root>);
case "227:621": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:621"} data-name={"Size=12, Sm vs R=off"}>
  <span className={s.n13} data-layer={"227:621/227:622"} data-name={"content"}>
    <span className={s.n14} data-layer={"227:621/227:622/227:623"} data-name={"Text"}>
      {textSlot(text,"227:621/227:622/227:623","Text","Text")}
    </span>
  </span>
</Root>);
case "227:630": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:630"} data-name={"Size=18, Sm vs R=on"}>
  <span className={s.n16} data-layer={"227:630/227:631"} data-name={"content"}>
    <span className={s.n17} data-layer={"227:630/227:631/227:632"} data-name={"Text"}>
      {textSlot(text,"227:630/227:631/227:632","Text","Text")}
    </span>
  </span>
</Root>);
case "227:639": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:639"} data-name={"Size=14, Sm vs R=off"}>
  <span className={s.n19} data-layer={"227:639/227:640"} data-name={"content"}>
    <span className={s.n20} data-layer={"227:639/227:640/227:641"} data-name={"Text"}>
      {textSlot(text,"227:639/227:640/227:641","Text","Text")}
    </span>
  </span>
</Root>);
case "237:50429": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50429"} data-name={"Size=18, Sm vs R=off"}>
  <span className={s.n22} data-layer={"237:50429/237:50430"} data-name={"content"}>
    <span className={s.n23} data-layer={"237:50429/237:50430/237:50431"} data-name={"Text"}>
      {textSlot(text,"237:50429/237:50430/237:50431","Text","Text")}
    </span>
  </span>
</Root>);
case "237:50438": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50438"} data-name={"Size=16, Sm vs R=off"}>
  <span className={s.n25} data-layer={"237:50438/237:50439"} data-name={"content"}>
    <span className={s.n26} data-layer={"237:50438/237:50439/237:50440"} data-name={"Text"}>
      {textSlot(text,"237:50438/237:50439/237:50440","Text","Text")}
    </span>
  </span>
</Root>);
case "237:50447": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50447"} data-name={"Size=11, Sm vs R=on"}>
  <span className={s.n28} data-layer={"237:50447/237:50448"} data-name={"content"}>
    <span className={s.n29} data-layer={"237:50447/237:50448/237:50449"} data-name={"Text"}>
      {textSlot(text,"237:50447/237:50448/237:50449","Text","Text")}
    </span>
  </span>
</Root>);
case "237:50456": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50456"} data-name={"Size=11, Sm vs R=off"}>
  <span className={s.n31} data-layer={"237:50456/237:50457"} data-name={"content"}>
    <span className={s.n32} data-layer={"237:50456/237:50457/237:50458"} data-name={"Text"}>
      {textSlot(text,"237:50456/237:50457/237:50458","Text","Text")}
    </span>
  </span>
</Root>);
case "237:50465": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50465"} data-name={"Size=10, Sm vs R=off"}>
  <span className={s.n34} data-layer={"237:50465/237:50466"} data-name={"content"}>
    <span className={s.n35} data-layer={"237:50465/237:50466/237:50467"} data-name={"Text"}>
      {textSlot(text,"237:50465/237:50466/237:50467","Text","Text")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
