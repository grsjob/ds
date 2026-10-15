// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './PrimitivesTextVarDesign227_1316.module.css';
export const variants = [
  {
    "id": "227:1317",
    "name": "Size=16, Sm vs R=on",
    "props": {
      "Size": "16",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50655",
    "name": "Size=18, Sm vs R=on",
    "props": {
      "Size": "18",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50664",
    "name": "Size=18, Sm vs R=off",
    "props": {
      "Size": "18",
      "Sm vs R": "off"
    }
  },
  {
    "id": "235:50673",
    "name": "Size=16, Sm vs R=off",
    "props": {
      "Size": "16",
      "Sm vs R": "off"
    }
  },
  {
    "id": "235:50682",
    "name": "Size=14, Sm vs R=on",
    "props": {
      "Size": "14",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50691",
    "name": "Size=14, Sm vs R=off",
    "props": {
      "Size": "14",
      "Sm vs R": "off"
    }
  },
  {
    "id": "235:50700",
    "name": "Size=12, Sm vs R=on",
    "props": {
      "Size": "12",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50709",
    "name": "Size=12, Sm vs R=off",
    "props": {
      "Size": "12",
      "Sm vs R": "off"
    }
  },
  {
    "id": "235:50718",
    "name": "Size=11, Sm vs R=on",
    "props": {
      "Size": "11",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50727",
    "name": "Size=11, Sm vs R=off",
    "props": {
      "Size": "11",
      "Sm vs R": "off"
    }
  },
  {
    "id": "235:50736",
    "name": "Size=10, Sm vs R=on",
    "props": {
      "Size": "10",
      "Sm vs R": "on"
    }
  },
  {
    "id": "235:50745",
    "name": "Size=10, Sm vs R=off",
    "props": {
      "Size": "10",
      "Sm vs R": "off"
    }
  }
] as const;
export type PrimitivesTextVarDesign227_1316Variant = typeof variants[number]["id"];
export interface PrimitivesTextVarDesign227_1316Dimensions {
  "Size"?: "10" | "11" | "12" | "14" | "16" | "18";
  "Sm vs R"?: "off" | "on";
}
export interface PrimitivesTextVarDesign227_1316Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: PrimitivesTextVarDesign227_1316Variant;
  variantProps?: PrimitivesTextVarDesign227_1316Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: PrimitivesTextVarDesign227_1316Variant) => void;
}
const transitions = {};
export function PrimitivesTextVarDesign227_1316({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: PrimitivesTextVarDesign227_1316Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1317": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1317"} data-name={"Size=16, Sm vs R=on"}>
  <span className={s.n1} data-layer={"227:1317/227:1318"} data-name={"content"}>
    <span className={s.n2} data-layer={"227:1317/227:1318/227:1319"} data-name={"Text"}>
      {textSlot(text,"227:1317/227:1318/227:1319","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50655": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50655"} data-name={"Size=18, Sm vs R=on"}>
  <span className={s.n4} data-layer={"235:50655/235:50656"} data-name={"content"}>
    <span className={s.n5} data-layer={"235:50655/235:50656/235:50657"} data-name={"Text"}>
      {textSlot(text,"235:50655/235:50656/235:50657","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50664": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50664"} data-name={"Size=18, Sm vs R=off"}>
  <span className={s.n7} data-layer={"235:50664/235:50665"} data-name={"content"}>
    <span className={s.n8} data-layer={"235:50664/235:50665/235:50666"} data-name={"Text"}>
      {textSlot(text,"235:50664/235:50665/235:50666","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50673": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50673"} data-name={"Size=16, Sm vs R=off"}>
  <span className={s.n10} data-layer={"235:50673/235:50674"} data-name={"content"}>
    <span className={s.n11} data-layer={"235:50673/235:50674/235:50675"} data-name={"Text"}>
      {textSlot(text,"235:50673/235:50674/235:50675","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50682": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50682"} data-name={"Size=14, Sm vs R=on"}>
  <span className={s.n13} data-layer={"235:50682/235:50683"} data-name={"content"}>
    <span className={s.n14} data-layer={"235:50682/235:50683/235:50684"} data-name={"Text"}>
      {textSlot(text,"235:50682/235:50683/235:50684","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50691": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50691"} data-name={"Size=14, Sm vs R=off"}>
  <span className={s.n16} data-layer={"235:50691/235:50692"} data-name={"content"}>
    <span className={s.n17} data-layer={"235:50691/235:50692/235:50693"} data-name={"Text"}>
      {textSlot(text,"235:50691/235:50692/235:50693","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50700": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50700"} data-name={"Size=12, Sm vs R=on"}>
  <span className={s.n19} data-layer={"235:50700/235:50701"} data-name={"content"}>
    <span className={s.n20} data-layer={"235:50700/235:50701/235:50702"} data-name={"Text"}>
      {textSlot(text,"235:50700/235:50701/235:50702","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50709": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50709"} data-name={"Size=12, Sm vs R=off"}>
  <span className={s.n22} data-layer={"235:50709/235:50710"} data-name={"content"}>
    <span className={s.n23} data-layer={"235:50709/235:50710/235:50711"} data-name={"Text"}>
      {textSlot(text,"235:50709/235:50710/235:50711","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50718": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50718"} data-name={"Size=11, Sm vs R=on"}>
  <span className={s.n25} data-layer={"235:50718/235:50719"} data-name={"content"}>
    <span className={s.n26} data-layer={"235:50718/235:50719/235:50720"} data-name={"Text"}>
      {textSlot(text,"235:50718/235:50719/235:50720","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50727": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50727"} data-name={"Size=11, Sm vs R=off"}>
  <span className={s.n28} data-layer={"235:50727/235:50728"} data-name={"content"}>
    <span className={s.n29} data-layer={"235:50727/235:50728/235:50729"} data-name={"Text"}>
      {textSlot(text,"235:50727/235:50728/235:50729","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50736": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50736"} data-name={"Size=10, Sm vs R=on"}>
  <span className={s.n31} data-layer={"235:50736/235:50737"} data-name={"content"}>
    <span className={s.n32} data-layer={"235:50736/235:50737/235:50738"} data-name={"Text"}>
      {textSlot(text,"235:50736/235:50737/235:50738","Text","Text")}
    </span>
  </span>
</Root>);
case "235:50745": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:50745"} data-name={"Size=10, Sm vs R=off"}>
  <span className={s.n34} data-layer={"235:50745/235:50746"} data-name={"content"}>
    <span className={s.n35} data-layer={"235:50745/235:50746/235:50747"} data-name={"Text"}>
      {textSlot(text,"235:50745/235:50746/235:50747","Text","Text")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
