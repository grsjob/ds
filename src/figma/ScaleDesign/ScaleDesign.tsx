// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ScaleDesign.module.css';
export const variants = [
  {
    "id": "227:1577",
    "name": "State=headlbne, View=finish",
    "props": {
      "State": "headlbne",
      "View": "finish"
    }
  },
  {
    "id": "227:1581",
    "name": "State=headlbne, View=positive",
    "props": {
      "State": "headlbne",
      "View": "positive"
    }
  },
  {
    "id": "227:1585",
    "name": "State=headlbne, View=Soft",
    "props": {
      "State": "headlbne",
      "View": "Soft"
    }
  },
  {
    "id": "227:1589",
    "name": "State=headlbne, View=no started",
    "props": {
      "State": "headlbne",
      "View": "no started"
    }
  },
  {
    "id": "227:1593",
    "name": "State=slot, View=hard",
    "props": {
      "State": "slot",
      "View": "hard"
    }
  },
  {
    "id": "227:1598",
    "name": "State=slot, View=positive",
    "props": {
      "State": "slot",
      "View": "positive"
    }
  },
  {
    "id": "227:1603",
    "name": "State=slot, View=no started",
    "props": {
      "State": "slot",
      "View": "no started"
    }
  },
  {
    "id": "227:1608",
    "name": "State=slot, View=finish",
    "props": {
      "State": "slot",
      "View": "finish"
    }
  },
  {
    "id": "227:1613",
    "name": "State=slot, View=Soft",
    "props": {
      "State": "slot",
      "View": "Soft"
    }
  },
  {
    "id": "234:3194",
    "name": "State=headlbne, View=hard",
    "props": {
      "State": "headlbne",
      "View": "hard"
    }
  },
  {
    "id": "234:3198",
    "name": "State=headlbne, View=sceleton",
    "props": {
      "State": "headlbne",
      "View": "sceleton"
    }
  },
  {
    "id": "234:3202",
    "name": "State=slot, View=sceleton",
    "props": {
      "State": "slot",
      "View": "sceleton"
    }
  }
] as const;
export type ScaleDesignVariant = typeof variants[number]["id"];
export interface ScaleDesignDimensions {
  "State"?: "headlbne" | "slot";
  "View"?: "Soft" | "finish" | "hard" | "no started" | "positive" | "sceleton";
}
export interface ScaleDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ScaleDesignVariant;
  variantProps?: ScaleDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ScaleDesignVariant) => void;
}
const transitions = {};
export function ScaleDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ScaleDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1577": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1577"} data-name={"State=headlbne, View=finish"}>
  <span className={s.n1} data-layer={"227:1577/227:1578"} data-name={"13.09-26.09"}>
    {textSlot(text,"227:1577/227:1578","13.09-26.09","13.09-26.09")}
  </span>
  <span className={s.n2} data-layer={"227:1577/227:1579"} data-name={"Box"}>
    <span className={s.n3} data-layer={"227:1577/227:1579/227:1580"} data-name={"Rectangle 3464276"}></span>
  </span>
</Root>);
case "227:1581": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1581"} data-name={"State=headlbne, View=positive"}>
  <span className={s.n1} data-layer={"227:1581/227:1582"} data-name={"13.09-26.09"}>
    {textSlot(text,"227:1581/227:1582","13.09-26.09","13.09-26.09")}
  </span>
  <span className={s.n2} data-layer={"227:1581/227:1583"} data-name={"Box"}>
    <span className={s.n4} data-layer={"227:1581/227:1583/227:1584"} data-name={"Rectangle 3464276"}></span>
  </span>
</Root>);
case "227:1585": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1585"} data-name={"State=headlbne, View=Soft"}>
  <span className={s.n1} data-layer={"227:1585/227:1586"} data-name={"13.09-26.09"}>
    {textSlot(text,"227:1585/227:1586","13.09-26.09","13.09-26.09")}
  </span>
  <span className={s.n2} data-layer={"227:1585/227:1587"} data-name={"Box"}>
    <span className={s.n5} data-layer={"227:1585/227:1587/227:1588"} data-name={"Rectangle 3464276"}></span>
  </span>
</Root>);
case "227:1589": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1589"} data-name={"State=headlbne, View=no started"}>
  <span className={s.n1} data-layer={"227:1589/227:1590"} data-name={"13.09-26.09"}>
    {textSlot(text,"227:1589/227:1590","13.09-26.09","13.09-26.09")}
  </span>
  <span className={s.n2} data-layer={"227:1589/227:1591"} data-name={"Box"}></span>
</Root>);
case "227:1593": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1593"} data-name={"State=slot, View=hard"}>
  <span className={s.n7} data-layer={"227:1593/227:1594"} data-name={"Box"}>
    <span className={s.n8} data-layer={"227:1593/227:1594/227:1595"} data-name={"Rectangle 3464276"}></span>
  </span>
  <span className={s.n9} data-layer={"227:1593/227:1596"} data-name={"Value"}>
    <span className={s.n10} data-layer={"227:1593/227:1596/227:1597"} data-name={"44%"}>
      {textSlot(text,"227:1593/227:1596/227:1597","44%","44%")}
    </span>
  </span>
</Root>);
case "227:1598": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1598"} data-name={"State=slot, View=positive"}>
  <span className={s.n7} data-layer={"227:1598/227:1599"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1598/227:1599/227:1600"} data-name={"Rectangle 3464276"}></span>
  </span>
  <span className={s.n9} data-layer={"227:1598/227:1601"} data-name={"Value"}>
    <span className={s.n12} data-layer={"227:1598/227:1601/227:1602"} data-name={"99%"}>
      {textSlot(text,"227:1598/227:1601/227:1602","99%","99%")}
    </span>
  </span>
</Root>);
case "227:1603": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1603"} data-name={"State=slot, View=no started"}>
  <span className={s.n7} data-layer={"227:1603/227:1604"} data-name={"Box"}></span>
  <span className={s.n9} data-layer={"227:1603/227:1606"} data-name={"Value"}>
    <span className={s.n13} data-layer={"227:1603/227:1606/227:1607"} data-name={"0%"}>
      {textSlot(text,"227:1603/227:1606/227:1607","0%","0%")}
    </span>
  </span>
</Root>);
case "227:1608": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1608"} data-name={"State=slot, View=finish"}>
  <span className={s.n9} data-layer={"227:1608/227:1611"} data-name={"Value"}>
    <span className={s.n14} data-layer={"227:1608/227:1611/227:1612"} data-name={"100%"}>
      {textSlot(text,"227:1608/227:1611/227:1612","100%","100%")}
    </span>
  </span>
</Root>);
case "227:1613": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1613"} data-name={"State=slot, View=Soft"}>
  <span className={s.n7} data-layer={"227:1613/227:1614"} data-name={"Box"}>
    <span className={s.n15} data-layer={"227:1613/227:1614/227:1615"} data-name={"Rectangle 3464276"}></span>
  </span>
  <span className={s.n9} data-layer={"227:1613/227:1616"} data-name={"Value"}>
    <span className={s.n16} data-layer={"227:1613/227:1616/227:1617"} data-name={"44%"}>
      {textSlot(text,"227:1613/227:1616/227:1617","44%","44%")}
    </span>
  </span>
</Root>);
case "234:3194": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:3194"} data-name={"State=headlbne, View=hard"}>
  <span className={s.n1} data-layer={"234:3194/234:3195"} data-name={"13.09-26.09"}>
    {textSlot(text,"234:3194/234:3195","13.09-26.09","13.09-26.09")}
  </span>
  <span className={s.n2} data-layer={"234:3194/234:3196"} data-name={"Box"}>
    <span className={s.n17} data-layer={"234:3194/234:3196/234:3197"} data-name={"Rectangle 3464276"}></span>
  </span>
</Root>);
case "234:3198": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:3198"} data-name={"State=headlbne, View=sceleton"}>
  <span className={s.n18} data-layer={"234:3198/234:3199"} data-name={"Rectangle 3344"}></span>
  <span className={s.n2} data-layer={"234:3198/234:3200"} data-name={"Box"}>
    <span className={s.n3} data-layer={"234:3198/234:3200/234:3201"} data-name={"Rectangle 3464276"}></span>
  </span>
</Root>);
case "234:3202": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:3202"} data-name={"State=slot, View=sceleton"}>
  <span className={s.n19} data-layer={"234:3202/234:3203"} data-name={"Box"}></span>
  <span className={s.n9} data-layer={"234:3202/234:3204"} data-name={"Value"}>
    <span className={s.n20} data-layer={"234:3202/234:3204/234:3205"} data-name={"Rectangle 3344"}></span>
  </span>
</Root>);
  default: return null;
  }
}
