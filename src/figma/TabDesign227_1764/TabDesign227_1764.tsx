// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TabDesign227_1764.module.css';
export const variants = [
  {
    "id": "227:1765",
    "name": "State=hover, Size=S",
    "props": {
      "State": "hover",
      "Size": "S"
    }
  },
  {
    "id": "227:1773",
    "name": "State=active, Size=S",
    "props": {
      "State": "active",
      "Size": "S"
    }
  },
  {
    "id": "227:1781",
    "name": "State=default, Size=S",
    "props": {
      "State": "default",
      "Size": "S"
    }
  },
  {
    "id": "227:1789",
    "name": "State=sceleton, Size=S",
    "props": {
      "State": "sceleton",
      "Size": "S"
    }
  },
  {
    "id": "230:54623",
    "name": "State=default, Size=L",
    "props": {
      "State": "default",
      "Size": "L"
    }
  },
  {
    "id": "230:54630",
    "name": "State=sceleton, Size=L",
    "props": {
      "State": "sceleton",
      "Size": "L"
    }
  },
  {
    "id": "230:54638",
    "name": "State=disabled, Size=L",
    "props": {
      "State": "disabled",
      "Size": "L"
    }
  },
  {
    "id": "230:54643",
    "name": "State=hover, Size=L",
    "props": {
      "State": "hover",
      "Size": "L"
    }
  },
  {
    "id": "230:54650",
    "name": "State=active, Size=L",
    "props": {
      "State": "active",
      "Size": "L"
    }
  },
  {
    "id": "230:54657",
    "name": "State=default, Size=M",
    "props": {
      "State": "default",
      "Size": "M"
    }
  },
  {
    "id": "230:54665",
    "name": "State=sceleton, Size=M",
    "props": {
      "State": "sceleton",
      "Size": "M"
    }
  },
  {
    "id": "230:54674",
    "name": "State=disabled, Size=M",
    "props": {
      "State": "disabled",
      "Size": "M"
    }
  },
  {
    "id": "230:54679",
    "name": "State=hover, Size=M",
    "props": {
      "State": "hover",
      "Size": "M"
    }
  },
  {
    "id": "230:54687",
    "name": "State=active, Size=M",
    "props": {
      "State": "active",
      "Size": "M"
    }
  },
  {
    "id": "230:54695",
    "name": "State=disabled, Size=S",
    "props": {
      "State": "disabled",
      "Size": "S"
    }
  }
] as const;
export type TabDesign227_1764Variant = typeof variants[number]["id"];
export interface TabDesign227_1764Dimensions {
  "State"?: "active" | "default" | "disabled" | "hover" | "sceleton";
  "Size"?: "L" | "M" | "S";
}
export interface TabDesign227_1764Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TabDesign227_1764Variant;
  variantProps?: TabDesign227_1764Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TabDesign227_1764Variant) => void;
}
const transitions = {"227:1781":{"ON_HOVER":"227:1765"},"227:1789":{"ON_HOVER":"227:1765"},"230:54623":{"ON_HOVER":"4294967295:4294967295"},"230:54630":{"ON_HOVER":"4294967295:4294967295"},"230:54657":{"ON_HOVER":"4294967295:4294967295"},"230:54665":{"ON_HOVER":"4294967295:4294967295"}};
export function TabDesign227_1764({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TabDesign227_1764Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1765": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1765"} data-name={"State=hover, Size=S"}>
  <span className={s.n1} data-layer={"227:1765/227:1766"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:1765/227:1766/227:1770"} data-name={"text"}>
      <span className={s.n3} data-layer={"227:1765/227:1766/227:1770/227:1771"} data-name={"Button"}>
        {textSlot(text,"227:1765/227:1766/227:1770/227:1771","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:1773": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1773"} data-name={"State=active, Size=S"}>
  <span className={s.n4} data-layer={"227:1773/227:1774"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:1773/227:1774/227:1778"} data-name={"text"}>
      <span className={s.n5} data-layer={"227:1773/227:1774/227:1778/227:1779"} data-name={"Button"}>
        {textSlot(text,"227:1773/227:1774/227:1778/227:1779","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:1781": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1781"} data-name={"State=default, Size=S"}>
  <span className={s.n6} data-layer={"227:1781/227:1782"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:1781/227:1782/227:1786"} data-name={"text"}>
      <span className={s.n3} data-layer={"227:1781/227:1782/227:1786/227:1787"} data-name={"Button"}>
        {textSlot(text,"227:1781/227:1782/227:1786/227:1787","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:1789": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1789"} data-name={"State=sceleton, Size=S"}>
  <span className={s.n6} data-layer={"227:1789/227:1790"} data-name={"icon & text"}>
    <span className={s.n7} data-layer={"227:1789/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
  </span>
</Root>);
case "230:54623": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54623"} data-name={"State=default, Size=L"}>
  <span className={s.n9} data-layer={"230:54623/230:54624"} data-name={"icon & text"}>
    <span className={s.n10} data-layer={"230:54623/230:54624/230:54627"} data-name={"text"}>
      <span className={s.n11} data-layer={"230:54623/230:54624/230:54627/230:54628"} data-name={"Button"}>
        {textSlot(text,"230:54623/230:54624/230:54627/230:54628","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54630": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54630"} data-name={"State=sceleton, Size=L"}>
  <span className={s.n9} data-layer={"230:54630/230:54631"} data-name={"icon & text"}>
    <span className={s.n12} data-layer={"230:54630/230:54631/230:54637"} data-name={"Rectangle 3344"}></span>
  </span>
</Root>);
case "230:54638": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54638"} data-name={"State=disabled, Size=L"}>
  <span className={s.n9} data-layer={"230:54638/230:54639"} data-name={"icon & text"}>
    <span className={s.n10} data-layer={"230:54638/230:54639/230:54641"} data-name={"text"}>
      <span className={s.n13} data-layer={"230:54638/230:54639/230:54641/230:54642"} data-name={"Button"}>
        {textSlot(text,"230:54638/230:54639/230:54641/230:54642","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54643": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54643"} data-name={"State=hover, Size=L"}>
  <span className={s.n14} data-layer={"230:54643/230:54644"} data-name={"icon & text"}>
    <span className={s.n10} data-layer={"230:54643/230:54644/230:54647"} data-name={"text"}>
      <span className={s.n11} data-layer={"230:54643/230:54644/230:54647/230:54648"} data-name={"Button"}>
        {textSlot(text,"230:54643/230:54644/230:54647/230:54648","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54650": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54650"} data-name={"State=active, Size=L"}>
  <span className={s.n15} data-layer={"230:54650/230:54651"} data-name={"icon & text"}>
    <span className={s.n10} data-layer={"230:54650/230:54651/230:54654"} data-name={"text"}>
      <span className={s.n16} data-layer={"230:54650/230:54651/230:54654/230:54655"} data-name={"Button"}>
        {textSlot(text,"230:54650/230:54651/230:54654/230:54655","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54657": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54657"} data-name={"State=default, Size=M"}>
  <span className={s.n18} data-layer={"230:54657/230:54658"} data-name={"icon & text"}>
    <span className={s.n19} data-layer={"230:54657/230:54658/230:54662"} data-name={"text"}>
      <span className={s.n20} data-layer={"230:54657/230:54658/230:54662/230:54663"} data-name={"Button"}>
        {textSlot(text,"230:54657/230:54658/230:54662/230:54663","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54665": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54665"} data-name={"State=sceleton, Size=M"}>
  <span className={s.n18} data-layer={"230:54665/230:54666"} data-name={"icon & text"}>
    <span className={s.n21} data-layer={"230:54665/230:54666/230:54670"} data-name={"Rectangle 3344"}></span>
  </span>
</Root>);
case "230:54674": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54674"} data-name={"State=disabled, Size=M"}>
  <span className={s.n18} data-layer={"230:54674/230:54675"} data-name={"icon & text"}>
    <span className={s.n19} data-layer={"230:54674/230:54675/230:54677"} data-name={"text"}>
      <span className={s.n22} data-layer={"230:54674/230:54675/230:54677/230:54678"} data-name={"Button"}>
        {textSlot(text,"230:54674/230:54675/230:54677/230:54678","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54679": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54679"} data-name={"State=hover, Size=M"}>
  <span className={s.n23} data-layer={"230:54679/230:54680"} data-name={"icon & text"}>
    <span className={s.n19} data-layer={"230:54679/230:54680/230:54684"} data-name={"text"}>
      <span className={s.n20} data-layer={"230:54679/230:54680/230:54684/230:54685"} data-name={"Button"}>
        {textSlot(text,"230:54679/230:54680/230:54684/230:54685","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54687": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54687"} data-name={"State=active, Size=M"}>
  <span className={s.n24} data-layer={"230:54687/230:54688"} data-name={"icon & text"}>
    <span className={s.n19} data-layer={"230:54687/230:54688/230:54692"} data-name={"text"}>
      <span className={s.n25} data-layer={"230:54687/230:54688/230:54692/230:54693"} data-name={"Button"}>
        {textSlot(text,"230:54687/230:54688/230:54692/230:54693","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:54695": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:54695"} data-name={"State=disabled, Size=S"}>
  <span className={s.n6} data-layer={"230:54695/230:54696"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"230:54695/230:54696/230:54698"} data-name={"text"}>
      <span className={s.n26} data-layer={"230:54695/230:54696/230:54698/230:54699"} data-name={"Button"}>
        {textSlot(text,"230:54695/230:54696/230:54698/230:54699","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
