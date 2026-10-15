// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TabDesign.module.css';
export const variants = [
  {
    "id": "227:885",
    "name": "State=hover, icon=off, Size=M",
    "props": {
      "State": "hover",
      "icon": "off",
      "Size": "M"
    }
  },
  {
    "id": "227:890",
    "name": "State=hover, icon=off, Size=S",
    "props": {
      "State": "hover",
      "icon": "off",
      "Size": "S"
    }
  },
  {
    "id": "227:895",
    "name": "State=active, icon=off, Size=S",
    "props": {
      "State": "active",
      "icon": "off",
      "Size": "S"
    }
  },
  {
    "id": "227:900",
    "name": "State=active, icon=off, Size=M",
    "props": {
      "State": "active",
      "icon": "off",
      "Size": "M"
    }
  },
  {
    "id": "227:905",
    "name": "State=default, icon=off, Size=M",
    "props": {
      "State": "default",
      "icon": "off",
      "Size": "M"
    }
  },
  {
    "id": "237:50474",
    "name": "State=default, icon=on, Size=L",
    "props": {
      "State": "default",
      "icon": "on",
      "Size": "L"
    }
  },
  {
    "id": "237:50479",
    "name": "State=default, icon=off, Size=L",
    "props": {
      "State": "default",
      "icon": "off",
      "Size": "L"
    }
  },
  {
    "id": "237:50484",
    "name": "State=disabled, icon=on, Size=L",
    "props": {
      "State": "disabled",
      "icon": "on",
      "Size": "L"
    }
  },
  {
    "id": "237:50489",
    "name": "State=disabled, icon=off, Size=L",
    "props": {
      "State": "disabled",
      "icon": "off",
      "Size": "L"
    }
  },
  {
    "id": "237:50494",
    "name": "State=hover, icon=on, Size=L",
    "props": {
      "State": "hover",
      "icon": "on",
      "Size": "L"
    }
  },
  {
    "id": "237:50499",
    "name": "State=hover, icon=off, Size=L",
    "props": {
      "State": "hover",
      "icon": "off",
      "Size": "L"
    }
  },
  {
    "id": "237:50504",
    "name": "State=active, icon=on, Size=L",
    "props": {
      "State": "active",
      "icon": "on",
      "Size": "L"
    }
  },
  {
    "id": "237:50509",
    "name": "State=active, icon=off, Size=L",
    "props": {
      "State": "active",
      "icon": "off",
      "Size": "L"
    }
  },
  {
    "id": "237:50514",
    "name": "State=loading, icon=on, Size=L",
    "props": {
      "State": "loading",
      "icon": "on",
      "Size": "L"
    }
  },
  {
    "id": "237:50521",
    "name": "State=default, icon=on, Size=M",
    "props": {
      "State": "default",
      "icon": "on",
      "Size": "M"
    }
  },
  {
    "id": "237:50526",
    "name": "State=disabled, icon=on, Size=M",
    "props": {
      "State": "disabled",
      "icon": "on",
      "Size": "M"
    }
  },
  {
    "id": "237:50531",
    "name": "State=disabled, icon=off, Size=M",
    "props": {
      "State": "disabled",
      "icon": "off",
      "Size": "M"
    }
  },
  {
    "id": "237:50536",
    "name": "State=hover, icon=on, Size=M",
    "props": {
      "State": "hover",
      "icon": "on",
      "Size": "M"
    }
  },
  {
    "id": "237:50541",
    "name": "State=active, icon=on, Size=M",
    "props": {
      "State": "active",
      "icon": "on",
      "Size": "M"
    }
  },
  {
    "id": "237:50546",
    "name": "State=loading, icon=on, Size=M",
    "props": {
      "State": "loading",
      "icon": "on",
      "Size": "M"
    }
  },
  {
    "id": "237:50553",
    "name": "State=default, icon=on, Size=S",
    "props": {
      "State": "default",
      "icon": "on",
      "Size": "S"
    }
  },
  {
    "id": "237:50558",
    "name": "State=default, icon=off, Size=S",
    "props": {
      "State": "default",
      "icon": "off",
      "Size": "S"
    }
  },
  {
    "id": "237:50563",
    "name": "State=disabled, icon=on, Size=S",
    "props": {
      "State": "disabled",
      "icon": "on",
      "Size": "S"
    }
  },
  {
    "id": "237:50568",
    "name": "State=disabled, icon=off, Size=S",
    "props": {
      "State": "disabled",
      "icon": "off",
      "Size": "S"
    }
  },
  {
    "id": "237:50573",
    "name": "State=hover, icon=on, Size=S",
    "props": {
      "State": "hover",
      "icon": "on",
      "Size": "S"
    }
  },
  {
    "id": "237:50578",
    "name": "State=active, icon=on, Size=S",
    "props": {
      "State": "active",
      "icon": "on",
      "Size": "S"
    }
  },
  {
    "id": "237:50583",
    "name": "State=loading, icon=on, Size=S",
    "props": {
      "State": "loading",
      "icon": "on",
      "Size": "S"
    }
  }
] as const;
export type TabDesignVariant = typeof variants[number]["id"];
export interface TabDesignDimensions {
  "State"?: "active" | "default" | "disabled" | "hover" | "loading";
  "icon"?: "off" | "on";
  "Size"?: "L" | "M" | "S";
}
export interface TabDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TabDesignVariant;
  variantProps?: TabDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TabDesignVariant) => void;
}
const transitions = {"227:905":{"ON_HOVER":"227:885"},"237:50474":{"ON_HOVER":"4294967295:4294967295"},"237:50479":{"ON_HOVER":"4294967295:4294967295"},"237:50521":{"ON_HOVER":"4294967295:4294967295"},"237:50553":{"ON_HOVER":"4294967295:4294967295"},"237:50558":{"ON_HOVER":"227:890"}};
export function TabDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TabDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:885": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:885"} data-name={"State=hover, icon=off, Size=M"}>
  <span className={s.n1} data-layer={"227:885/227:886"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:885/227:886/227:888"} data-name={"text"}>
      <span className={s.n3} data-layer={"227:885/227:886/227:888/227:889"} data-name={"Button"}>
        {textSlot(text,"227:885/227:886/227:888/227:889","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:890": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:890"} data-name={"State=hover, icon=off, Size=S"}>
  <span className={s.n5} data-layer={"227:890/227:891"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"227:890/227:891/227:893"} data-name={"text"}>
      <span className={s.n7} data-layer={"227:890/227:891/227:893/227:894"} data-name={"Button"}>
        {textSlot(text,"227:890/227:891/227:893/227:894","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:895": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:895"} data-name={"State=active, icon=off, Size=S"}>
  <span className={s.n8} data-layer={"227:895/227:896"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"227:895/227:896/227:898"} data-name={"text"}>
      <span className={s.n9} data-layer={"227:895/227:896/227:898/227:899"} data-name={"Button"}>
        {textSlot(text,"227:895/227:896/227:898/227:899","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:900": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:900"} data-name={"State=active, icon=off, Size=M"}>
  <span className={s.n10} data-layer={"227:900/227:901"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:900/227:901/227:903"} data-name={"text"}>
      <span className={s.n11} data-layer={"227:900/227:901/227:903/227:904"} data-name={"Button"}>
        {textSlot(text,"227:900/227:901/227:903/227:904","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "227:905": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:905"} data-name={"State=default, icon=off, Size=M"}>
  <span className={s.n12} data-layer={"227:905/227:906"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:905/227:906/227:908"} data-name={"text"}>
      <span className={s.n3} data-layer={"227:905/227:906/227:908/227:909"} data-name={"Button"}>
        {textSlot(text,"227:905/227:906/227:908/227:909","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50474": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50474"} data-name={"State=default, icon=on, Size=L"}>
  <span className={s.n14} data-layer={"237:50474/237:50475"} data-name={"icon & text"}>
    <span className={s.n15} data-layer={"237:50474/237:50475/237:50476"} data-name={"icon/set/base"}>
      <span className={s.n16} data-layer={"237:50474/237:50475/237:50476/230:51916"} data-name={"Group 2"}>
        <span className={s.n17} data-layer={"237:50474/237:50475/237:50476/230:51916/230:51917"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.6 C-0.49706 3.6 -0.9 4.00294 -0.9 4.5 C-0.9 4.99706 -0.49706 5.4 0 5.4 L0 4.5 L0 3.6 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M0 4.5 L0 5.4 L0.64622 5.4 L0.64622 4.5 L0.64622 3.6 L0 3.6 L0 4.5 Z M0.64622 4.5 L0.64622 5.4 C2.39595 5.4 3.9 4.02545 3.9 2.25 L3 2.25 L2.1 2.25 C2.1 2.95364 1.48137 3.6 0.64622 3.6 L0.64622 4.5 Z M3 2.25 L3.9 2.25 C3.9 0.48071 2.4024 -0.9 0.64622 -0.9 L0.64622 0 L0.64622 0.9 C1.48347 0.9 2.1 1.54838 2.1 2.25 L3 2.25 Z M0.64622 0 L0.64622 -0.9 L0 -0.9 L0 0 L0 0.9 L0.64622 0.9 L0.64622 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n18} data-layer={"237:50474/237:50475/237:50476/230:51916/230:51918"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0.9 C3.49706 0.9 3.9 0.49706 3.9 0 C3.9 -0.49706 3.49706 -0.9 3 -0.9 L3 0 L3 0.9 Z M3 5.4 C3.49706 5.4 3.9 4.99706 3.9 4.5 C3.9 4.00294 3.49706 3.6 3 3.6 L3 4.5 L3 5.4 Z M3 0 L3 -0.9 L2.35714 -0.9 L2.35714 0 L2.35714 0.9 L3 0.9 L3 0 Z M2.35714 0 L2.35714 -0.9 C0.60143 -0.9 -0.9 0.4744 -0.9 2.25 L0 2.25 L0.9 2.25 C0.9 1.54651 1.51571 0.9 2.35714 0.9 L2.35714 0 Z M0 2.25 L-0.9 2.25 C-0.9 4.02047 0.60034 5.4 2.35714 5.4 L2.35714 4.5 L2.35714 3.6 C1.5168 3.6 0.9 2.95044 0.9 2.25 L0 2.25 Z M2.35714 4.5 L2.35714 5.4 L3 5.4 L3 4.5 L3 3.6 L2.35714 3.6 L2.35714 4.5 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n19} data-layer={"237:50474/237:50475/237:50476/230:51916/230:51919"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.25 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.25 0.9 C5.74706 0.9 6.15 0.49706 6.15 0 C6.15 -0.49706 5.74706 -0.9 5.25 -0.9 L5.25 0 L5.25 0.9 Z M0 0 L0 0.9 L5.25 0.9 L5.25 0 L5.25 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n20} data-layer={"237:50474/237:50475/237:50477"} data-name={"text"}>
      <span className={s.n21} data-layer={"237:50474/237:50475/237:50477/237:50478"} data-name={"Button"}>
        {textSlot(text,"237:50474/237:50475/237:50477/237:50478","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50479": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50479"} data-name={"State=default, icon=off, Size=L"}>
  <span className={s.n23} data-layer={"237:50479/237:50480"} data-name={"icon & text"}>
    <span className={s.n24} data-layer={"237:50479/237:50480/237:50482"} data-name={"text"}>
      <span className={s.n21} data-layer={"237:50479/237:50480/237:50482/237:50483"} data-name={"Button"}>
        {textSlot(text,"237:50479/237:50480/237:50482/237:50483","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50484": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50484"} data-name={"State=disabled, icon=on, Size=L"}>
  <span className={s.n14} data-layer={"237:50484/237:50485"} data-name={"icon & text"}>
    <span className={s.n15} data-layer={"237:50484/237:50485/237:50486"} data-name={"icon/set/base"}>
      <span className={s.n16} data-layer={"237:50484/237:50485/237:50486/230:51916"} data-name={"Group 2"}>
        <span className={s.n17} data-layer={"237:50484/237:50485/237:50486/230:51916/230:51917"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.6 C-0.49706 3.6 -0.9 4.00294 -0.9 4.5 C-0.9 4.99706 -0.49706 5.4 0 5.4 L0 4.5 L0 3.6 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M0 4.5 L0 5.4 L0.64622 5.4 L0.64622 4.5 L0.64622 3.6 L0 3.6 L0 4.5 Z M0.64622 4.5 L0.64622 5.4 C2.39595 5.4 3.9 4.02545 3.9 2.25 L3 2.25 L2.1 2.25 C2.1 2.95364 1.48137 3.6 0.64622 3.6 L0.64622 4.5 Z M3 2.25 L3.9 2.25 C3.9 0.48071 2.4024 -0.9 0.64622 -0.9 L0.64622 0 L0.64622 0.9 C1.48347 0.9 2.1 1.54838 2.1 2.25 L3 2.25 Z M0.64622 0 L0.64622 -0.9 L0 -0.9 L0 0 L0 0.9 L0.64622 0.9 L0.64622 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n18} data-layer={"237:50484/237:50485/237:50486/230:51916/230:51918"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0.9 C3.49706 0.9 3.9 0.49706 3.9 0 C3.9 -0.49706 3.49706 -0.9 3 -0.9 L3 0 L3 0.9 Z M3 5.4 C3.49706 5.4 3.9 4.99706 3.9 4.5 C3.9 4.00294 3.49706 3.6 3 3.6 L3 4.5 L3 5.4 Z M3 0 L3 -0.9 L2.35714 -0.9 L2.35714 0 L2.35714 0.9 L3 0.9 L3 0 Z M2.35714 0 L2.35714 -0.9 C0.60143 -0.9 -0.9 0.4744 -0.9 2.25 L0 2.25 L0.9 2.25 C0.9 1.54651 1.51571 0.9 2.35714 0.9 L2.35714 0 Z M0 2.25 L-0.9 2.25 C-0.9 4.02047 0.60034 5.4 2.35714 5.4 L2.35714 4.5 L2.35714 3.6 C1.5168 3.6 0.9 2.95044 0.9 2.25 L0 2.25 Z M2.35714 4.5 L2.35714 5.4 L3 5.4 L3 4.5 L3 3.6 L2.35714 3.6 L2.35714 4.5 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n19} data-layer={"237:50484/237:50485/237:50486/230:51916/230:51919"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.25 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.25 0.9 C5.74706 0.9 6.15 0.49706 6.15 0 C6.15 -0.49706 5.74706 -0.9 5.25 -0.9 L5.25 0 L5.25 0.9 Z M0 0 L0 0.9 L5.25 0.9 L5.25 0 L5.25 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n20} data-layer={"237:50484/237:50485/237:50487"} data-name={"text"}>
      <span className={s.n25} data-layer={"237:50484/237:50485/237:50487/237:50488"} data-name={"Button"}>
        {textSlot(text,"237:50484/237:50485/237:50487/237:50488","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50489": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50489"} data-name={"State=disabled, icon=off, Size=L"}>
  <span className={s.n23} data-layer={"237:50489/237:50490"} data-name={"icon & text"}>
    <span className={s.n24} data-layer={"237:50489/237:50490/237:50492"} data-name={"text"}>
      <span className={s.n25} data-layer={"237:50489/237:50490/237:50492/237:50493"} data-name={"Button"}>
        {textSlot(text,"237:50489/237:50490/237:50492/237:50493","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50494": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50494"} data-name={"State=hover, icon=on, Size=L"}>
  <span className={s.n26} data-layer={"237:50494/237:50495"} data-name={"icon & text"}>
    <span className={s.n15} data-layer={"237:50494/237:50495/237:50496"} data-name={"icon/set/base"}>
      <span className={s.n16} data-layer={"237:50494/237:50495/237:50496/230:51916"} data-name={"Group 2"}>
        <span className={s.n17} data-layer={"237:50494/237:50495/237:50496/230:51916/230:51917"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.6 C-0.49706 3.6 -0.9 4.00294 -0.9 4.5 C-0.9 4.99706 -0.49706 5.4 0 5.4 L0 4.5 L0 3.6 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M0 4.5 L0 5.4 L0.64622 5.4 L0.64622 4.5 L0.64622 3.6 L0 3.6 L0 4.5 Z M0.64622 4.5 L0.64622 5.4 C2.39595 5.4 3.9 4.02545 3.9 2.25 L3 2.25 L2.1 2.25 C2.1 2.95364 1.48137 3.6 0.64622 3.6 L0.64622 4.5 Z M3 2.25 L3.9 2.25 C3.9 0.48071 2.4024 -0.9 0.64622 -0.9 L0.64622 0 L0.64622 0.9 C1.48347 0.9 2.1 1.54838 2.1 2.25 L3 2.25 Z M0.64622 0 L0.64622 -0.9 L0 -0.9 L0 0 L0 0.9 L0.64622 0.9 L0.64622 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n18} data-layer={"237:50494/237:50495/237:50496/230:51916/230:51918"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0.9 C3.49706 0.9 3.9 0.49706 3.9 0 C3.9 -0.49706 3.49706 -0.9 3 -0.9 L3 0 L3 0.9 Z M3 5.4 C3.49706 5.4 3.9 4.99706 3.9 4.5 C3.9 4.00294 3.49706 3.6 3 3.6 L3 4.5 L3 5.4 Z M3 0 L3 -0.9 L2.35714 -0.9 L2.35714 0 L2.35714 0.9 L3 0.9 L3 0 Z M2.35714 0 L2.35714 -0.9 C0.60143 -0.9 -0.9 0.4744 -0.9 2.25 L0 2.25 L0.9 2.25 C0.9 1.54651 1.51571 0.9 2.35714 0.9 L2.35714 0 Z M0 2.25 L-0.9 2.25 C-0.9 4.02047 0.60034 5.4 2.35714 5.4 L2.35714 4.5 L2.35714 3.6 C1.5168 3.6 0.9 2.95044 0.9 2.25 L0 2.25 Z M2.35714 4.5 L2.35714 5.4 L3 5.4 L3 4.5 L3 3.6 L2.35714 3.6 L2.35714 4.5 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n19} data-layer={"237:50494/237:50495/237:50496/230:51916/230:51919"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.25 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.25 0.9 C5.74706 0.9 6.15 0.49706 6.15 0 C6.15 -0.49706 5.74706 -0.9 5.25 -0.9 L5.25 0 L5.25 0.9 Z M0 0 L0 0.9 L5.25 0.9 L5.25 0 L5.25 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n20} data-layer={"237:50494/237:50495/237:50497"} data-name={"text"}>
      <span className={s.n21} data-layer={"237:50494/237:50495/237:50497/237:50498"} data-name={"Button"}>
        {textSlot(text,"237:50494/237:50495/237:50497/237:50498","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50499": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50499"} data-name={"State=hover, icon=off, Size=L"}>
  <span className={s.n27} data-layer={"237:50499/237:50500"} data-name={"icon & text"}>
    <span className={s.n24} data-layer={"237:50499/237:50500/237:50502"} data-name={"text"}>
      <span className={s.n21} data-layer={"237:50499/237:50500/237:50502/237:50503"} data-name={"Button"}>
        {textSlot(text,"237:50499/237:50500/237:50502/237:50503","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50504": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50504"} data-name={"State=active, icon=on, Size=L"}>
  <span className={s.n28} data-layer={"237:50504/237:50505"} data-name={"icon & text"}>
    <span className={s.n15} data-layer={"237:50504/237:50505/237:50506"} data-name={"icon/set/base"}>
      <span className={s.n16} data-layer={"237:50504/237:50505/237:50506/230:51916"} data-name={"Group 2"}>
        <span className={s.n17} data-layer={"237:50504/237:50505/237:50506/230:51916/230:51917"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.6 C-0.49706 3.6 -0.9 4.00294 -0.9 4.5 C-0.9 4.99706 -0.49706 5.4 0 5.4 L0 4.5 L0 3.6 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M0 4.5 L0 5.4 L0.64622 5.4 L0.64622 4.5 L0.64622 3.6 L0 3.6 L0 4.5 Z M0.64622 4.5 L0.64622 5.4 C2.39595 5.4 3.9 4.02545 3.9 2.25 L3 2.25 L2.1 2.25 C2.1 2.95364 1.48137 3.6 0.64622 3.6 L0.64622 4.5 Z M3 2.25 L3.9 2.25 C3.9 0.48071 2.4024 -0.9 0.64622 -0.9 L0.64622 0 L0.64622 0.9 C1.48347 0.9 2.1 1.54838 2.1 2.25 L3 2.25 Z M0.64622 0 L0.64622 -0.9 L0 -0.9 L0 0 L0 0.9 L0.64622 0.9 L0.64622 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n18} data-layer={"237:50504/237:50505/237:50506/230:51916/230:51918"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 3 4.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0.9 C3.49706 0.9 3.9 0.49706 3.9 0 C3.9 -0.49706 3.49706 -0.9 3 -0.9 L3 0 L3 0.9 Z M3 5.4 C3.49706 5.4 3.9 4.99706 3.9 4.5 C3.9 4.00294 3.49706 3.6 3 3.6 L3 4.5 L3 5.4 Z M3 0 L3 -0.9 L2.35714 -0.9 L2.35714 0 L2.35714 0.9 L3 0.9 L3 0 Z M2.35714 0 L2.35714 -0.9 C0.60143 -0.9 -0.9 0.4744 -0.9 2.25 L0 2.25 L0.9 2.25 C0.9 1.54651 1.51571 0.9 2.35714 0.9 L2.35714 0 Z M0 2.25 L-0.9 2.25 C-0.9 4.02047 0.60034 5.4 2.35714 5.4 L2.35714 4.5 L2.35714 3.6 C1.5168 3.6 0.9 2.95044 0.9 2.25 L0 2.25 Z M2.35714 4.5 L2.35714 5.4 L3 5.4 L3 4.5 L3 3.6 L2.35714 3.6 L2.35714 4.5 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n19} data-layer={"237:50504/237:50505/237:50506/230:51916/230:51919"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.25 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.25 0.9 C5.74706 0.9 6.15 0.49706 6.15 0 C6.15 -0.49706 5.74706 -0.9 5.25 -0.9 L5.25 0 L5.25 0.9 Z M0 0 L0 0.9 L5.25 0.9 L5.25 0 L5.25 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n20} data-layer={"237:50504/237:50505/237:50507"} data-name={"text"}>
      <span className={s.n29} data-layer={"237:50504/237:50505/237:50507/237:50508"} data-name={"Button"}>
        {textSlot(text,"237:50504/237:50505/237:50507/237:50508","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50509": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50509"} data-name={"State=active, icon=off, Size=L"}>
  <span className={s.n30} data-layer={"237:50509/237:50510"} data-name={"icon & text"}>
    <span className={s.n24} data-layer={"237:50509/237:50510/237:50512"} data-name={"text"}>
      <span className={s.n29} data-layer={"237:50509/237:50510/237:50512/237:50513"} data-name={"Button"}>
        {textSlot(text,"237:50509/237:50510/237:50512/237:50513","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50514": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50514"} data-name={"State=loading, icon=on, Size=L"}>
  <span className={s.n31} data-layer={"237:50514/237:50515"} data-name={"icon & text"}>
    <span className={s.n15} data-layer={"237:50514/237:50515/237:50517"} data-name={"spinner"}>
      <span className={s.n32} data-layer={"237:50514/237:50515/237:50517/237:50518"} data-name={"Spinner/var"}>
        <span className={s.n33} data-layer={"237:50514/237:50515/237:50517/237:50518/227:1717"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g77_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g77_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n32} data-layer={"237:50514/237:50515/237:50517/237:50518/227:1718"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
    <span className={s.n20} data-layer={"237:50514/237:50515/237:50519"} data-name={"text"}>
      <span className={s.n34} data-layer={"237:50514/237:50515/237:50519/237:50520"} data-name={"Button"}>
        {textSlot(text,"237:50514/237:50515/237:50519/237:50520","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50521": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50521"} data-name={"State=default, icon=on, Size=M"}>
  <span className={s.n36} data-layer={"237:50521/237:50522"} data-name={"icon & text"}>
    <span className={s.n37} data-layer={"237:50521/237:50522/237:50523"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"237:50521/237:50522/237:50523/227:913"} data-name={"Group 2"}>
        <span className={s.n39} data-layer={"237:50521/237:50522/237:50523/227:913/227:914"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.11111 C-0.49092 3.11111 -0.88889 3.50908 -0.88889 4 C-0.88889 4.49092 -0.49092 4.88889 0 4.88889 L0 4 L0 3.11111 Z M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M0 4 L0 4.88889 L0.57442 4.88889 L0.57442 4 L0.57442 3.11111 L0 3.11111 L0 4 Z M0.57442 4 L0.57442 4.88889 C2.1749 4.88889 3.55556 3.63111 3.55556 2 L2.66667 2 L1.77778 2 C1.77778 2.57252 1.27161 3.11111 0.57442 3.11111 L0.57442 4 Z M2.66667 2 L3.55556 2 C3.55556 0.37458 2.18085 -0.88889 0.57442 -0.88889 L0.57442 0 L0.57442 0.88889 C1.27326 0.88889 1.77778 1.42906 1.77778 2 L2.66667 2 Z M0.57442 0 L0.57442 -0.88889 L0 -0.88889 L0 0 L0 0.88889 L0.57442 0.88889 L0.57442 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n40} data-layer={"237:50521/237:50522/237:50523/227:913/227:915"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.66667 0.88889 C3.15759 0.88889 3.55556 0.49092 3.55556 0 C3.55556 -0.49092 3.15759 -0.88889 2.66667 -0.88889 L2.66667 0 L2.66667 0.88889 Z M2.66667 4.88889 C3.15759 4.88889 3.55556 4.49092 3.55556 4 C3.55556 3.50908 3.15759 3.11111 2.66667 3.11111 L2.66667 4 L2.66667 4.88889 Z M2.66667 0 L2.66667 -0.88889 L2.09524 -0.88889 L2.09524 0 L2.09524 0.88889 L2.66667 0.88889 L2.66667 0 Z M2.09524 0 L2.09524 -0.88889 C0.48945 -0.88889 -0.88889 0.36875 -0.88889 2 L0 2 L0.88889 2 C0.88889 1.42762 1.39245 0.88889 2.09524 0.88889 L2.09524 0 Z M0 2 L-0.88889 2 C-0.88889 3.62659 0.48838 4.88889 2.09524 4.88889 L2.09524 4 L2.09524 3.11111 C1.39352 3.11111 0.88889 2.56977 0.88889 2 L0 2 Z M2.09524 4 L2.09524 4.88889 L2.66667 4.88889 L2.66667 4 L2.66667 3.11111 L2.09524 3.11111 L2.09524 4 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n41} data-layer={"237:50521/237:50522/237:50523/227:913/227:916"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.66667 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M4.66667 0.88889 C5.15759 0.88889 5.55556 0.49092 5.55556 0 C5.55556 -0.49092 5.15759 -0.88889 4.66667 -0.88889 L4.66667 0 L4.66667 0.88889 Z M0 0 L0 0.88889 L4.66667 0.88889 L4.66667 0 L4.66667 -0.88889 L0 -0.88889 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n42} data-layer={"237:50521/237:50522/237:50524"} data-name={"text"}>
      <span className={s.n3} data-layer={"237:50521/237:50522/237:50524/237:50525"} data-name={"Button"}>
        {textSlot(text,"237:50521/237:50522/237:50524/237:50525","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50526": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50526"} data-name={"State=disabled, icon=on, Size=M"}>
  <span className={s.n36} data-layer={"237:50526/237:50527"} data-name={"icon & text"}>
    <span className={s.n37} data-layer={"237:50526/237:50527/237:50528"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"237:50526/237:50527/237:50528/227:913"} data-name={"Group 2"}>
        <span className={s.n39} data-layer={"237:50526/237:50527/237:50528/227:913/227:914"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.11111 C-0.49092 3.11111 -0.88889 3.50908 -0.88889 4 C-0.88889 4.49092 -0.49092 4.88889 0 4.88889 L0 4 L0 3.11111 Z M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M0 4 L0 4.88889 L0.57442 4.88889 L0.57442 4 L0.57442 3.11111 L0 3.11111 L0 4 Z M0.57442 4 L0.57442 4.88889 C2.1749 4.88889 3.55556 3.63111 3.55556 2 L2.66667 2 L1.77778 2 C1.77778 2.57252 1.27161 3.11111 0.57442 3.11111 L0.57442 4 Z M2.66667 2 L3.55556 2 C3.55556 0.37458 2.18085 -0.88889 0.57442 -0.88889 L0.57442 0 L0.57442 0.88889 C1.27326 0.88889 1.77778 1.42906 1.77778 2 L2.66667 2 Z M0.57442 0 L0.57442 -0.88889 L0 -0.88889 L0 0 L0 0.88889 L0.57442 0.88889 L0.57442 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n40} data-layer={"237:50526/237:50527/237:50528/227:913/227:915"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.66667 0.88889 C3.15759 0.88889 3.55556 0.49092 3.55556 0 C3.55556 -0.49092 3.15759 -0.88889 2.66667 -0.88889 L2.66667 0 L2.66667 0.88889 Z M2.66667 4.88889 C3.15759 4.88889 3.55556 4.49092 3.55556 4 C3.55556 3.50908 3.15759 3.11111 2.66667 3.11111 L2.66667 4 L2.66667 4.88889 Z M2.66667 0 L2.66667 -0.88889 L2.09524 -0.88889 L2.09524 0 L2.09524 0.88889 L2.66667 0.88889 L2.66667 0 Z M2.09524 0 L2.09524 -0.88889 C0.48945 -0.88889 -0.88889 0.36875 -0.88889 2 L0 2 L0.88889 2 C0.88889 1.42762 1.39245 0.88889 2.09524 0.88889 L2.09524 0 Z M0 2 L-0.88889 2 C-0.88889 3.62659 0.48838 4.88889 2.09524 4.88889 L2.09524 4 L2.09524 3.11111 C1.39352 3.11111 0.88889 2.56977 0.88889 2 L0 2 Z M2.09524 4 L2.09524 4.88889 L2.66667 4.88889 L2.66667 4 L2.66667 3.11111 L2.09524 3.11111 L2.09524 4 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n41} data-layer={"237:50526/237:50527/237:50528/227:913/227:916"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.66667 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M4.66667 0.88889 C5.15759 0.88889 5.55556 0.49092 5.55556 0 C5.55556 -0.49092 5.15759 -0.88889 4.66667 -0.88889 L4.66667 0 L4.66667 0.88889 Z M0 0 L0 0.88889 L4.66667 0.88889 L4.66667 0 L4.66667 -0.88889 L0 -0.88889 L0 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n42} data-layer={"237:50526/237:50527/237:50529"} data-name={"text"}>
      <span className={s.n43} data-layer={"237:50526/237:50527/237:50529/237:50530"} data-name={"Button"}>
        {textSlot(text,"237:50526/237:50527/237:50529/237:50530","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50531": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50531"} data-name={"State=disabled, icon=off, Size=M"}>
  <span className={s.n12} data-layer={"237:50531/237:50532"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"237:50531/237:50532/237:50534"} data-name={"text"}>
      <span className={s.n43} data-layer={"237:50531/237:50532/237:50534/237:50535"} data-name={"Button"}>
        {textSlot(text,"237:50531/237:50532/237:50534/237:50535","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50536": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50536"} data-name={"State=hover, icon=on, Size=M"}>
  <span className={s.n44} data-layer={"237:50536/237:50537"} data-name={"icon & text"}>
    <span className={s.n37} data-layer={"237:50536/237:50537/237:50538"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"237:50536/237:50537/237:50538/227:913"} data-name={"Group 2"}>
        <span className={s.n39} data-layer={"237:50536/237:50537/237:50538/227:913/227:914"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.11111 C-0.49092 3.11111 -0.88889 3.50908 -0.88889 4 C-0.88889 4.49092 -0.49092 4.88889 0 4.88889 L0 4 L0 3.11111 Z M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M0 4 L0 4.88889 L0.57442 4.88889 L0.57442 4 L0.57442 3.11111 L0 3.11111 L0 4 Z M0.57442 4 L0.57442 4.88889 C2.1749 4.88889 3.55556 3.63111 3.55556 2 L2.66667 2 L1.77778 2 C1.77778 2.57252 1.27161 3.11111 0.57442 3.11111 L0.57442 4 Z M2.66667 2 L3.55556 2 C3.55556 0.37458 2.18085 -0.88889 0.57442 -0.88889 L0.57442 0 L0.57442 0.88889 C1.27326 0.88889 1.77778 1.42906 1.77778 2 L2.66667 2 Z M0.57442 0 L0.57442 -0.88889 L0 -0.88889 L0 0 L0 0.88889 L0.57442 0.88889 L0.57442 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n40} data-layer={"237:50536/237:50537/237:50538/227:913/227:915"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.66667 0.88889 C3.15759 0.88889 3.55556 0.49092 3.55556 0 C3.55556 -0.49092 3.15759 -0.88889 2.66667 -0.88889 L2.66667 0 L2.66667 0.88889 Z M2.66667 4.88889 C3.15759 4.88889 3.55556 4.49092 3.55556 4 C3.55556 3.50908 3.15759 3.11111 2.66667 3.11111 L2.66667 4 L2.66667 4.88889 Z M2.66667 0 L2.66667 -0.88889 L2.09524 -0.88889 L2.09524 0 L2.09524 0.88889 L2.66667 0.88889 L2.66667 0 Z M2.09524 0 L2.09524 -0.88889 C0.48945 -0.88889 -0.88889 0.36875 -0.88889 2 L0 2 L0.88889 2 C0.88889 1.42762 1.39245 0.88889 2.09524 0.88889 L2.09524 0 Z M0 2 L-0.88889 2 C-0.88889 3.62659 0.48838 4.88889 2.09524 4.88889 L2.09524 4 L2.09524 3.11111 C1.39352 3.11111 0.88889 2.56977 0.88889 2 L0 2 Z M2.09524 4 L2.09524 4.88889 L2.66667 4.88889 L2.66667 4 L2.66667 3.11111 L2.09524 3.11111 L2.09524 4 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n41} data-layer={"237:50536/237:50537/237:50538/227:913/227:916"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.66667 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M4.66667 0.88889 C5.15759 0.88889 5.55556 0.49092 5.55556 0 C5.55556 -0.49092 5.15759 -0.88889 4.66667 -0.88889 L4.66667 0 L4.66667 0.88889 Z M0 0 L0 0.88889 L4.66667 0.88889 L4.66667 0 L4.66667 -0.88889 L0 -0.88889 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n42} data-layer={"237:50536/237:50537/237:50539"} data-name={"text"}>
      <span className={s.n3} data-layer={"237:50536/237:50537/237:50539/237:50540"} data-name={"Button"}>
        {textSlot(text,"237:50536/237:50537/237:50539/237:50540","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50541": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50541"} data-name={"State=active, icon=on, Size=M"}>
  <span className={s.n45} data-layer={"237:50541/237:50542"} data-name={"icon & text"}>
    <span className={s.n37} data-layer={"237:50541/237:50542/237:50543"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"237:50541/237:50542/237:50543/227:913"} data-name={"Group 2"}>
        <span className={s.n39} data-layer={"237:50541/237:50542/237:50543/227:913/227:914"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.11111 C-0.49092 3.11111 -0.88889 3.50908 -0.88889 4 C-0.88889 4.49092 -0.49092 4.88889 0 4.88889 L0 4 L0 3.11111 Z M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M0 4 L0 4.88889 L0.57442 4.88889 L0.57442 4 L0.57442 3.11111 L0 3.11111 L0 4 Z M0.57442 4 L0.57442 4.88889 C2.1749 4.88889 3.55556 3.63111 3.55556 2 L2.66667 2 L1.77778 2 C1.77778 2.57252 1.27161 3.11111 0.57442 3.11111 L0.57442 4 Z M2.66667 2 L3.55556 2 C3.55556 0.37458 2.18085 -0.88889 0.57442 -0.88889 L0.57442 0 L0.57442 0.88889 C1.27326 0.88889 1.77778 1.42906 1.77778 2 L2.66667 2 Z M0.57442 0 L0.57442 -0.88889 L0 -0.88889 L0 0 L0 0.88889 L0.57442 0.88889 L0.57442 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n40} data-layer={"237:50541/237:50542/237:50543/227:913/227:915"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.66667 4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.66667 0.88889 C3.15759 0.88889 3.55556 0.49092 3.55556 0 C3.55556 -0.49092 3.15759 -0.88889 2.66667 -0.88889 L2.66667 0 L2.66667 0.88889 Z M2.66667 4.88889 C3.15759 4.88889 3.55556 4.49092 3.55556 4 C3.55556 3.50908 3.15759 3.11111 2.66667 3.11111 L2.66667 4 L2.66667 4.88889 Z M2.66667 0 L2.66667 -0.88889 L2.09524 -0.88889 L2.09524 0 L2.09524 0.88889 L2.66667 0.88889 L2.66667 0 Z M2.09524 0 L2.09524 -0.88889 C0.48945 -0.88889 -0.88889 0.36875 -0.88889 2 L0 2 L0.88889 2 C0.88889 1.42762 1.39245 0.88889 2.09524 0.88889 L2.09524 0 Z M0 2 L-0.88889 2 C-0.88889 3.62659 0.48838 4.88889 2.09524 4.88889 L2.09524 4 L2.09524 3.11111 C1.39352 3.11111 0.88889 2.56977 0.88889 2 L0 2 Z M2.09524 4 L2.09524 4.88889 L2.66667 4.88889 L2.66667 4 L2.66667 3.11111 L2.09524 3.11111 L2.09524 4 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n41} data-layer={"237:50541/237:50542/237:50543/227:913/227:916"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.66667 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88889 C-0.49092 -0.88889 -0.88889 -0.49092 -0.88889 0 C-0.88889 0.49092 -0.49092 0.88889 0 0.88889 L0 0 L0 -0.88889 Z M4.66667 0.88889 C5.15759 0.88889 5.55556 0.49092 5.55556 0 C5.55556 -0.49092 5.15759 -0.88889 4.66667 -0.88889 L4.66667 0 L4.66667 0.88889 Z M0 0 L0 0.88889 L4.66667 0.88889 L4.66667 0 L4.66667 -0.88889 L0 -0.88889 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n42} data-layer={"237:50541/237:50542/237:50544"} data-name={"text"}>
      <span className={s.n11} data-layer={"237:50541/237:50542/237:50544/237:50545"} data-name={"Button"}>
        {textSlot(text,"237:50541/237:50542/237:50544/237:50545","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50546": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50546"} data-name={"State=loading, icon=on, Size=M"}>
  <span className={s.n46} data-layer={"237:50546/237:50547"} data-name={"icon & text"}>
    <span className={s.n37} data-layer={"237:50546/237:50547/237:50549"} data-name={"spinner"}>
      <span className={s.n47} data-layer={"237:50546/237:50547/237:50549/237:50550"} data-name={"Spinner/var"}>
        <span className={s.n48} data-layer={"237:50546/237:50547/237:50549/237:50550/227:1714"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g125_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g125_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n47} data-layer={"237:50546/237:50547/237:50549/237:50550/227:1715"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
    <span className={s.n42} data-layer={"237:50546/237:50547/237:50551"} data-name={"text"}>
      <span className={s.n49} data-layer={"237:50546/237:50547/237:50551/237:50552"} data-name={"Button"}>
        {textSlot(text,"237:50546/237:50547/237:50551/237:50552","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50553": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50553"} data-name={"State=default, icon=on, Size=S"}>
  <span className={s.n51} data-layer={"237:50553/237:50554"} data-name={"icon & text"}>
    <span className={s.n52} data-layer={"237:50553/237:50554/237:50555"} data-name={"icon/set/base"}>
      <span className={s.n53} data-layer={"237:50553/237:50554/237:50555/227:919"} data-name={"Group 2"}>
        <span className={s.n54} data-layer={"237:50553/237:50554/237:50555/227:919/227:920"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.72222 C-0.42955 2.72222 -0.77778 3.07045 -0.77778 3.5 C-0.77778 3.92955 -0.42955 4.27778 0 4.27778 L0 3.5 L0 2.72222 Z M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M0 3.5 L0 4.27778 L0.50262 4.27778 L0.50262 3.5 L0.50262 2.72222 L0 2.72222 L0 3.5 Z M0.50262 3.5 L0.50262 4.27778 C1.90304 4.27778 3.11111 3.17722 3.11111 1.75 L2.33333 1.75 L1.55556 1.75 C1.55556 2.25096 1.11266 2.72222 0.50262 2.72222 L0.50262 3.5 Z M2.33333 1.75 L3.11111 1.75 C3.11111 0.32775 1.90824 -0.77778 0.50262 -0.77778 L0.50262 0 L0.50262 0.77778 C1.11411 0.77778 1.55556 1.25043 1.55556 1.75 L2.33333 1.75 Z M0.50262 0 L0.50262 -0.77778 L0 -0.77778 L0 0 L0 0.77778 L0.50262 0.77778 L0.50262 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n55} data-layer={"237:50553/237:50554/237:50555/227:919/227:921"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.33333 0.77778 C2.76289 0.77778 3.11111 0.42955 3.11111 0 C3.11111 -0.42955 2.76289 -0.77778 2.33333 -0.77778 L2.33333 0 L2.33333 0.77778 Z M2.33333 4.27778 C2.76289 4.27778 3.11111 3.92955 3.11111 3.5 C3.11111 3.07045 2.76289 2.72222 2.33333 2.72222 L2.33333 3.5 L2.33333 4.27778 Z M2.33333 0 L2.33333 -0.77778 L1.83333 -0.77778 L1.83333 0 L1.83333 0.77778 L2.33333 0.77778 L2.33333 0 Z M1.83333 0 L1.83333 -0.77778 C0.42827 -0.77778 -0.77778 0.32265 -0.77778 1.75 L0 1.75 L0.77778 1.75 C0.77778 1.24917 1.21839 0.77778 1.83333 0.77778 L1.83333 0 Z M0 1.75 L-0.77778 1.75 C-0.77778 3.17327 0.42733 4.27778 1.83333 4.27778 L1.83333 3.5 L1.83333 2.72222 C1.21933 2.72222 0.77778 2.24855 0.77778 1.75 L0 1.75 Z M1.83333 3.5 L1.83333 4.27778 L2.33333 4.27778 L2.33333 3.5 L2.33333 2.72222 L1.83333 2.72222 L1.83333 3.5 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n56} data-layer={"237:50553/237:50554/237:50555/227:919/227:922"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.08333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M4.08333 0.77778 C4.51289 0.77778 4.86111 0.42955 4.86111 0 C4.86111 -0.42955 4.51289 -0.77778 4.08333 -0.77778 L4.08333 0 L4.08333 0.77778 Z M0 0 L0 0.77778 L4.08333 0.77778 L4.08333 0 L4.08333 -0.77778 L0 -0.77778 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"237:50553/237:50554/237:50556"} data-name={"text"}>
      <span className={s.n7} data-layer={"237:50553/237:50554/237:50556/237:50557"} data-name={"Button"}>
        {textSlot(text,"237:50553/237:50554/237:50556/237:50557","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50558": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50558"} data-name={"State=default, icon=off, Size=S"}>
  <span className={s.n58} data-layer={"237:50558/237:50559"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"237:50558/237:50559/237:50561"} data-name={"text"}>
      <span className={s.n7} data-layer={"237:50558/237:50559/237:50561/237:50562"} data-name={"Button"}>
        {textSlot(text,"237:50558/237:50559/237:50561/237:50562","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50563": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50563"} data-name={"State=disabled, icon=on, Size=S"}>
  <span className={s.n51} data-layer={"237:50563/237:50564"} data-name={"icon & text"}>
    <span className={s.n52} data-layer={"237:50563/237:50564/237:50565"} data-name={"icon/set/base"}>
      <span className={s.n53} data-layer={"237:50563/237:50564/237:50565/227:919"} data-name={"Group 2"}>
        <span className={s.n54} data-layer={"237:50563/237:50564/237:50565/227:919/227:920"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.72222 C-0.42955 2.72222 -0.77778 3.07045 -0.77778 3.5 C-0.77778 3.92955 -0.42955 4.27778 0 4.27778 L0 3.5 L0 2.72222 Z M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M0 3.5 L0 4.27778 L0.50262 4.27778 L0.50262 3.5 L0.50262 2.72222 L0 2.72222 L0 3.5 Z M0.50262 3.5 L0.50262 4.27778 C1.90304 4.27778 3.11111 3.17722 3.11111 1.75 L2.33333 1.75 L1.55556 1.75 C1.55556 2.25096 1.11266 2.72222 0.50262 2.72222 L0.50262 3.5 Z M2.33333 1.75 L3.11111 1.75 C3.11111 0.32775 1.90824 -0.77778 0.50262 -0.77778 L0.50262 0 L0.50262 0.77778 C1.11411 0.77778 1.55556 1.25043 1.55556 1.75 L2.33333 1.75 Z M0.50262 0 L0.50262 -0.77778 L0 -0.77778 L0 0 L0 0.77778 L0.50262 0.77778 L0.50262 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n55} data-layer={"237:50563/237:50564/237:50565/227:919/227:921"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.33333 0.77778 C2.76289 0.77778 3.11111 0.42955 3.11111 0 C3.11111 -0.42955 2.76289 -0.77778 2.33333 -0.77778 L2.33333 0 L2.33333 0.77778 Z M2.33333 4.27778 C2.76289 4.27778 3.11111 3.92955 3.11111 3.5 C3.11111 3.07045 2.76289 2.72222 2.33333 2.72222 L2.33333 3.5 L2.33333 4.27778 Z M2.33333 0 L2.33333 -0.77778 L1.83333 -0.77778 L1.83333 0 L1.83333 0.77778 L2.33333 0.77778 L2.33333 0 Z M1.83333 0 L1.83333 -0.77778 C0.42827 -0.77778 -0.77778 0.32265 -0.77778 1.75 L0 1.75 L0.77778 1.75 C0.77778 1.24917 1.21839 0.77778 1.83333 0.77778 L1.83333 0 Z M0 1.75 L-0.77778 1.75 C-0.77778 3.17327 0.42733 4.27778 1.83333 4.27778 L1.83333 3.5 L1.83333 2.72222 C1.21933 2.72222 0.77778 2.24855 0.77778 1.75 L0 1.75 Z M1.83333 3.5 L1.83333 4.27778 L2.33333 4.27778 L2.33333 3.5 L2.33333 2.72222 L1.83333 2.72222 L1.83333 3.5 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n56} data-layer={"237:50563/237:50564/237:50565/227:919/227:922"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.08333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M4.08333 0.77778 C4.51289 0.77778 4.86111 0.42955 4.86111 0 C4.86111 -0.42955 4.51289 -0.77778 4.08333 -0.77778 L4.08333 0 L4.08333 0.77778 Z M0 0 L0 0.77778 L4.08333 0.77778 L4.08333 0 L4.08333 -0.77778 L0 -0.77778 L0 0 Z"} fill={"rgba(214,214,214,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"237:50563/237:50564/237:50566"} data-name={"text"}>
      <span className={s.n59} data-layer={"237:50563/237:50564/237:50566/237:50567"} data-name={"Button"}>
        {textSlot(text,"237:50563/237:50564/237:50566/237:50567","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50568": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50568"} data-name={"State=disabled, icon=off, Size=S"}>
  <span className={s.n58} data-layer={"237:50568/237:50569"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"237:50568/237:50569/237:50571"} data-name={"text"}>
      <span className={s.n59} data-layer={"237:50568/237:50569/237:50571/237:50572"} data-name={"Button"}>
        {textSlot(text,"237:50568/237:50569/237:50571/237:50572","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50573": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50573"} data-name={"State=hover, icon=on, Size=S"}>
  <span className={s.n60} data-layer={"237:50573/237:50574"} data-name={"icon & text"}>
    <span className={s.n52} data-layer={"237:50573/237:50574/237:50575"} data-name={"icon/set/base"}>
      <span className={s.n53} data-layer={"237:50573/237:50574/237:50575/227:919"} data-name={"Group 2"}>
        <span className={s.n54} data-layer={"237:50573/237:50574/237:50575/227:919/227:920"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.72222 C-0.42955 2.72222 -0.77778 3.07045 -0.77778 3.5 C-0.77778 3.92955 -0.42955 4.27778 0 4.27778 L0 3.5 L0 2.72222 Z M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M0 3.5 L0 4.27778 L0.50262 4.27778 L0.50262 3.5 L0.50262 2.72222 L0 2.72222 L0 3.5 Z M0.50262 3.5 L0.50262 4.27778 C1.90304 4.27778 3.11111 3.17722 3.11111 1.75 L2.33333 1.75 L1.55556 1.75 C1.55556 2.25096 1.11266 2.72222 0.50262 2.72222 L0.50262 3.5 Z M2.33333 1.75 L3.11111 1.75 C3.11111 0.32775 1.90824 -0.77778 0.50262 -0.77778 L0.50262 0 L0.50262 0.77778 C1.11411 0.77778 1.55556 1.25043 1.55556 1.75 L2.33333 1.75 Z M0.50262 0 L0.50262 -0.77778 L0 -0.77778 L0 0 L0 0.77778 L0.50262 0.77778 L0.50262 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n55} data-layer={"237:50573/237:50574/237:50575/227:919/227:921"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.33333 0.77778 C2.76289 0.77778 3.11111 0.42955 3.11111 0 C3.11111 -0.42955 2.76289 -0.77778 2.33333 -0.77778 L2.33333 0 L2.33333 0.77778 Z M2.33333 4.27778 C2.76289 4.27778 3.11111 3.92955 3.11111 3.5 C3.11111 3.07045 2.76289 2.72222 2.33333 2.72222 L2.33333 3.5 L2.33333 4.27778 Z M2.33333 0 L2.33333 -0.77778 L1.83333 -0.77778 L1.83333 0 L1.83333 0.77778 L2.33333 0.77778 L2.33333 0 Z M1.83333 0 L1.83333 -0.77778 C0.42827 -0.77778 -0.77778 0.32265 -0.77778 1.75 L0 1.75 L0.77778 1.75 C0.77778 1.24917 1.21839 0.77778 1.83333 0.77778 L1.83333 0 Z M0 1.75 L-0.77778 1.75 C-0.77778 3.17327 0.42733 4.27778 1.83333 4.27778 L1.83333 3.5 L1.83333 2.72222 C1.21933 2.72222 0.77778 2.24855 0.77778 1.75 L0 1.75 Z M1.83333 3.5 L1.83333 4.27778 L2.33333 4.27778 L2.33333 3.5 L2.33333 2.72222 L1.83333 2.72222 L1.83333 3.5 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n56} data-layer={"237:50573/237:50574/237:50575/227:919/227:922"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.08333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M4.08333 0.77778 C4.51289 0.77778 4.86111 0.42955 4.86111 0 C4.86111 -0.42955 4.51289 -0.77778 4.08333 -0.77778 L4.08333 0 L4.08333 0.77778 Z M0 0 L0 0.77778 L4.08333 0.77778 L4.08333 0 L4.08333 -0.77778 L0 -0.77778 L0 0 Z"} fill={"rgba(158,158,158,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"237:50573/237:50574/237:50576"} data-name={"text"}>
      <span className={s.n7} data-layer={"237:50573/237:50574/237:50576/237:50577"} data-name={"Button"}>
        {textSlot(text,"237:50573/237:50574/237:50576/237:50577","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50578": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50578"} data-name={"State=active, icon=on, Size=S"}>
  <span className={s.n61} data-layer={"237:50578/237:50579"} data-name={"icon & text"}>
    <span className={s.n52} data-layer={"237:50578/237:50579/237:50580"} data-name={"icon/set/base"}>
      <span className={s.n53} data-layer={"237:50578/237:50579/237:50580/227:919"} data-name={"Group 2"}>
        <span className={s.n54} data-layer={"237:50578/237:50579/237:50580/227:919/227:920"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.72222 C-0.42955 2.72222 -0.77778 3.07045 -0.77778 3.5 C-0.77778 3.92955 -0.42955 4.27778 0 4.27778 L0 3.5 L0 2.72222 Z M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M0 3.5 L0 4.27778 L0.50262 4.27778 L0.50262 3.5 L0.50262 2.72222 L0 2.72222 L0 3.5 Z M0.50262 3.5 L0.50262 4.27778 C1.90304 4.27778 3.11111 3.17722 3.11111 1.75 L2.33333 1.75 L1.55556 1.75 C1.55556 2.25096 1.11266 2.72222 0.50262 2.72222 L0.50262 3.5 Z M2.33333 1.75 L3.11111 1.75 C3.11111 0.32775 1.90824 -0.77778 0.50262 -0.77778 L0.50262 0 L0.50262 0.77778 C1.11411 0.77778 1.55556 1.25043 1.55556 1.75 L2.33333 1.75 Z M0.50262 0 L0.50262 -0.77778 L0 -0.77778 L0 0 L0 0.77778 L0.50262 0.77778 L0.50262 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n55} data-layer={"237:50578/237:50579/237:50580/227:919/227:921"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 2.33333 3.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.33333 0.77778 C2.76289 0.77778 3.11111 0.42955 3.11111 0 C3.11111 -0.42955 2.76289 -0.77778 2.33333 -0.77778 L2.33333 0 L2.33333 0.77778 Z M2.33333 4.27778 C2.76289 4.27778 3.11111 3.92955 3.11111 3.5 C3.11111 3.07045 2.76289 2.72222 2.33333 2.72222 L2.33333 3.5 L2.33333 4.27778 Z M2.33333 0 L2.33333 -0.77778 L1.83333 -0.77778 L1.83333 0 L1.83333 0.77778 L2.33333 0.77778 L2.33333 0 Z M1.83333 0 L1.83333 -0.77778 C0.42827 -0.77778 -0.77778 0.32265 -0.77778 1.75 L0 1.75 L0.77778 1.75 C0.77778 1.24917 1.21839 0.77778 1.83333 0.77778 L1.83333 0 Z M0 1.75 L-0.77778 1.75 C-0.77778 3.17327 0.42733 4.27778 1.83333 4.27778 L1.83333 3.5 L1.83333 2.72222 C1.21933 2.72222 0.77778 2.24855 0.77778 1.75 L0 1.75 Z M1.83333 3.5 L1.83333 4.27778 L2.33333 4.27778 L2.33333 3.5 L2.33333 2.72222 L1.83333 2.72222 L1.83333 3.5 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n56} data-layer={"237:50578/237:50579/237:50580/227:919/227:922"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 4.08333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.77778 C-0.42955 -0.77778 -0.77778 -0.42955 -0.77778 0 C-0.77778 0.42955 -0.42955 0.77778 0 0.77778 L0 0 L0 -0.77778 Z M4.08333 0.77778 C4.51289 0.77778 4.86111 0.42955 4.86111 0 C4.86111 -0.42955 4.51289 -0.77778 4.08333 -0.77778 L4.08333 0 L4.08333 0.77778 Z M0 0 L0 0.77778 L4.08333 0.77778 L4.08333 0 L4.08333 -0.77778 L0 -0.77778 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"237:50578/237:50579/237:50581"} data-name={"text"}>
      <span className={s.n9} data-layer={"237:50578/237:50579/237:50581/237:50582"} data-name={"Button"}>
        {textSlot(text,"237:50578/237:50579/237:50581/237:50582","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "237:50583": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50583"} data-name={"State=loading, icon=on, Size=S"}>
  <span className={s.n62} data-layer={"237:50583/237:50584"} data-name={"icon & text"}>
    <span className={s.n52} data-layer={"237:50583/237:50584/237:50586"} data-name={"spinner"}>
      <span className={s.n63} data-layer={"237:50583/237:50584/237:50586/237:50587"} data-name={"Spinner/var"}>
        <span className={s.n64} data-layer={"237:50583/237:50584/237:50586/237:50587/227:1711"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g177_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g177_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n63} data-layer={"237:50583/237:50584/237:50586/237:50587/227:1712"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
    <span className={s.n57} data-layer={"237:50583/237:50584/237:50588"} data-name={"text"}>
      <span className={s.n65} data-layer={"237:50583/237:50584/237:50588/237:50589"} data-name={"Button"}>
        {textSlot(text,"237:50583/237:50584/237:50588/237:50589","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
