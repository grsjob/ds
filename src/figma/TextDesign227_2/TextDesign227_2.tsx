// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TextDesign227_2.module.css';
export const variants = [
  {
    "id": "227:3",
    "name": "Size=14, Sm vs R=on",
    "props": {
      "Size": "14",
      "Sm vs R": "on"
    }
  },
  {
    "id": "231:48810",
    "name": "Size=18, Sm vs R=on",
    "props": {
      "Size": "18",
      "Sm vs R": "on"
    }
  },
  {
    "id": "231:48812",
    "name": "Size=18, Sm vs R=off",
    "props": {
      "Size": "18",
      "Sm vs R": "off"
    }
  },
  {
    "id": "231:48814",
    "name": "Size=16, Sm vs R=on",
    "props": {
      "Size": "16",
      "Sm vs R": "on"
    }
  },
  {
    "id": "231:48816",
    "name": "Size=16, Sm vs R=off",
    "props": {
      "Size": "16",
      "Sm vs R": "off"
    }
  },
  {
    "id": "231:48818",
    "name": "Size=12, Sm vs R=on",
    "props": {
      "Size": "12",
      "Sm vs R": "on"
    }
  },
  {
    "id": "231:48820",
    "name": "Size=12, Sm vs R=off",
    "props": {
      "Size": "12",
      "Sm vs R": "off"
    }
  },
  {
    "id": "231:48822",
    "name": "Size=10, Sm vs R=off",
    "props": {
      "Size": "10",
      "Sm vs R": "off"
    }
  },
  {
    "id": "231:48824",
    "name": "Size=10, Sm vs R=on",
    "props": {
      "Size": "10",
      "Sm vs R": "on"
    }
  },
  {
    "id": "231:48826",
    "name": "Size=14, Sm vs R=off",
    "props": {
      "Size": "14",
      "Sm vs R": "off"
    }
  }
] as const;
export type TextDesign227_2Variant = typeof variants[number]["id"];
export interface TextDesign227_2Dimensions {
  "Size"?: "10" | "12" | "14" | "16" | "18";
  "Sm vs R"?: "off" | "on";
}
export interface TextDesign227_2Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TextDesign227_2Variant;
  variantProps?: TextDesign227_2Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TextDesign227_2Variant) => void;
}
const transitions = {};
export function TextDesign227_2({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TextDesign227_2Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:3": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:3"} data-name={"Size=14, Sm vs R=on"}>
  <span className={s.n1} data-layer={"227:3/227:4"} data-name={"Text"}>
    {textSlot(text,"227:3/227:4","Text","Text")}
  </span>
</Root>);
case "231:48810": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48810"} data-name={"Size=18, Sm vs R=on"}>
  <span className={s.n3} data-layer={"231:48810/231:48811"} data-name={"Text"}>
    {textSlot(text,"231:48810/231:48811","Text","Text")}
  </span>
</Root>);
case "231:48812": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48812"} data-name={"Size=18, Sm vs R=off"}>
  <span className={s.n5} data-layer={"231:48812/231:48813"} data-name={"Text"}>
    {textSlot(text,"231:48812/231:48813","Text","Text")}
  </span>
</Root>);
case "231:48814": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48814"} data-name={"Size=16, Sm vs R=on"}>
  <span className={s.n7} data-layer={"231:48814/231:48815"} data-name={"Text"}>
    {textSlot(text,"231:48814/231:48815","Text","Text")}
  </span>
</Root>);
case "231:48816": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48816"} data-name={"Size=16, Sm vs R=off"}>
  <span className={s.n9} data-layer={"231:48816/231:48817"} data-name={"Text"}>
    {textSlot(text,"231:48816/231:48817","Text","Text")}
  </span>
</Root>);
case "231:48818": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48818"} data-name={"Size=12, Sm vs R=on"}>
  <span className={s.n11} data-layer={"231:48818/231:48819"} data-name={"Text"}>
    {textSlot(text,"231:48818/231:48819","Text","Text")}
  </span>
</Root>);
case "231:48820": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48820"} data-name={"Size=12, Sm vs R=off"}>
  <span className={s.n13} data-layer={"231:48820/231:48821"} data-name={"Text"}>
    {textSlot(text,"231:48820/231:48821","Text","Text")}
  </span>
</Root>);
case "231:48822": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48822"} data-name={"Size=10, Sm vs R=off"}>
  <span className={s.n15} data-layer={"231:48822/231:48823"} data-name={"Text"}>
    {textSlot(text,"231:48822/231:48823","Text","Text")}
  </span>
</Root>);
case "231:48824": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48824"} data-name={"Size=10, Sm vs R=on"}>
  <span className={s.n17} data-layer={"231:48824/231:48825"} data-name={"Text"}>
    {textSlot(text,"231:48824/231:48825","Text","Text")}
  </span>
</Root>);
case "231:48826": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"231:48826"} data-name={"Size=14, Sm vs R=off"}>
  <span className={s.n19} data-layer={"231:48826/231:48827"} data-name={"Text"}>
    {textSlot(text,"231:48826/231:48827","Text","Text")}
  </span>
</Root>);
  default: return null;
  }
}
