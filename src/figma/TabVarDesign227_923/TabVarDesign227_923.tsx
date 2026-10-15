// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TabVarDesign227_923.module.css';
export const variants = [
  {
    "id": "227:924",
    "name": "State=Tab, Size=var",
    "props": {
      "State": "Tab",
      "Size": "var"
    }
  },
  {
    "id": "230:53092",
    "name": "State=default, Size=L",
    "props": {
      "State": "default",
      "Size": "L"
    }
  },
  {
    "id": "230:53099",
    "name": "State=disabled, Size=L",
    "props": {
      "State": "disabled",
      "Size": "L"
    }
  },
  {
    "id": "230:53104",
    "name": "State=hover, Size=L",
    "props": {
      "State": "hover",
      "Size": "L"
    }
  },
  {
    "id": "230:53111",
    "name": "State=active, Size=L",
    "props": {
      "State": "active",
      "Size": "L"
    }
  },
  {
    "id": "230:53118",
    "name": "State=default, Size=M",
    "props": {
      "State": "default",
      "Size": "M"
    }
  },
  {
    "id": "230:53126",
    "name": "State=disabled, Size=M",
    "props": {
      "State": "disabled",
      "Size": "M"
    }
  },
  {
    "id": "230:53131",
    "name": "State=hover, Size=M",
    "props": {
      "State": "hover",
      "Size": "M"
    }
  },
  {
    "id": "230:53139",
    "name": "State=active, Size=M",
    "props": {
      "State": "active",
      "Size": "M"
    }
  },
  {
    "id": "230:53147",
    "name": "State=default, Size=S",
    "props": {
      "State": "default",
      "Size": "S"
    }
  },
  {
    "id": "230:53155",
    "name": "State=disabled, Size=S",
    "props": {
      "State": "disabled",
      "Size": "S"
    }
  },
  {
    "id": "230:53160",
    "name": "State=hover, Size=S",
    "props": {
      "State": "hover",
      "Size": "S"
    }
  },
  {
    "id": "230:53168",
    "name": "State=active, Size=S",
    "props": {
      "State": "active",
      "Size": "S"
    }
  }
] as const;
export type TabVarDesign227_923Variant = typeof variants[number]["id"];
export interface TabVarDesign227_923Dimensions {
  "State"?: "Tab" | "active" | "default" | "disabled" | "hover";
  "Size"?: "L" | "M" | "S" | "var";
}
export interface TabVarDesign227_923Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TabVarDesign227_923Variant;
  variantProps?: TabVarDesign227_923Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TabVarDesign227_923Variant) => void;
}
const transitions = {"230:53092":{"ON_HOVER":"4294967295:4294967295"},"230:53118":{"ON_HOVER":"4294967295:4294967295"},"230:53147":{"ON_HOVER":"4294967295:4294967295"}};
export function TabVarDesign227_923({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TabVarDesign227_923Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:924": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:924"} data-name={"State=Tab, Size=var"}>
  <span className={s.n1} data-layer={"227:924/227:925"} data-name={"icon & text"}>
    <span className={s.n2} data-layer={"227:924/227:925/227:927"} data-name={"text"}>
      <span className={s.n3} data-layer={"227:924/227:925/227:927/227:928"} data-name={"Button"}>
        {textSlot(text,"227:924/227:925/227:927/227:928","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53092": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53092"} data-name={"State=default, Size=L"}>
  <span className={s.n5} data-layer={"230:53092/230:53093"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"230:53092/230:53093/230:53096"} data-name={"text"}>
      <span className={s.n7} data-layer={"230:53092/230:53093/230:53096/230:53097"} data-name={"Button"}>
        {textSlot(text,"230:53092/230:53093/230:53096/230:53097","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53099": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53099"} data-name={"State=disabled, Size=L"}>
  <span className={s.n5} data-layer={"230:53099/230:53100"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"230:53099/230:53100/230:53102"} data-name={"text"}>
      <span className={s.n8} data-layer={"230:53099/230:53100/230:53102/230:53103"} data-name={"Button"}>
        {textSlot(text,"230:53099/230:53100/230:53102/230:53103","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53104": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53104"} data-name={"State=hover, Size=L"}>
  <span className={s.n9} data-layer={"230:53104/230:53105"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"230:53104/230:53105/230:53108"} data-name={"text"}>
      <span className={s.n7} data-layer={"230:53104/230:53105/230:53108/230:53109"} data-name={"Button"}>
        {textSlot(text,"230:53104/230:53105/230:53108/230:53109","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53111": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53111"} data-name={"State=active, Size=L"}>
  <span className={s.n10} data-layer={"230:53111/230:53112"} data-name={"icon & text"}>
    <span className={s.n6} data-layer={"230:53111/230:53112/230:53115"} data-name={"text"}>
      <span className={s.n11} data-layer={"230:53111/230:53112/230:53115/230:53116"} data-name={"Button"}>
        {textSlot(text,"230:53111/230:53112/230:53115/230:53116","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53118": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53118"} data-name={"State=default, Size=M"}>
  <span className={s.n13} data-layer={"230:53118/230:53119"} data-name={"icon & text"}>
    <span className={s.n14} data-layer={"230:53118/230:53119/230:53123"} data-name={"text"}>
      <span className={s.n15} data-layer={"230:53118/230:53119/230:53123/230:53124"} data-name={"Button"}>
        {textSlot(text,"230:53118/230:53119/230:53123/230:53124","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53126": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53126"} data-name={"State=disabled, Size=M"}>
  <span className={s.n13} data-layer={"230:53126/230:53127"} data-name={"icon & text"}>
    <span className={s.n14} data-layer={"230:53126/230:53127/230:53129"} data-name={"text"}>
      <span className={s.n16} data-layer={"230:53126/230:53127/230:53129/230:53130"} data-name={"Button"}>
        {textSlot(text,"230:53126/230:53127/230:53129/230:53130","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53131": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53131"} data-name={"State=hover, Size=M"}>
  <span className={s.n17} data-layer={"230:53131/230:53132"} data-name={"icon & text"}>
    <span className={s.n14} data-layer={"230:53131/230:53132/230:53136"} data-name={"text"}>
      <span className={s.n15} data-layer={"230:53131/230:53132/230:53136/230:53137"} data-name={"Button"}>
        {textSlot(text,"230:53131/230:53132/230:53136/230:53137","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53139": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53139"} data-name={"State=active, Size=M"}>
  <span className={s.n18} data-layer={"230:53139/230:53140"} data-name={"icon & text"}>
    <span className={s.n14} data-layer={"230:53139/230:53140/230:53144"} data-name={"text"}>
      <span className={s.n19} data-layer={"230:53139/230:53140/230:53144/230:53145"} data-name={"Button"}>
        {textSlot(text,"230:53139/230:53140/230:53144/230:53145","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53147": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53147"} data-name={"State=default, Size=S"}>
  <span className={s.n21} data-layer={"230:53147/230:53148"} data-name={"icon & text"}>
    <span className={s.n22} data-layer={"230:53147/230:53148/230:53152"} data-name={"text"}>
      <span className={s.n3} data-layer={"230:53147/230:53148/230:53152/230:53153"} data-name={"Button"}>
        {textSlot(text,"230:53147/230:53148/230:53152/230:53153","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53155": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53155"} data-name={"State=disabled, Size=S"}>
  <span className={s.n21} data-layer={"230:53155/230:53156"} data-name={"icon & text"}>
    <span className={s.n22} data-layer={"230:53155/230:53156/230:53158"} data-name={"text"}>
      <span className={s.n23} data-layer={"230:53155/230:53156/230:53158/230:53159"} data-name={"Button"}>
        {textSlot(text,"230:53155/230:53156/230:53158/230:53159","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53160": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53160"} data-name={"State=hover, Size=S"}>
  <span className={s.n24} data-layer={"230:53160/230:53161"} data-name={"icon & text"}>
    <span className={s.n22} data-layer={"230:53160/230:53161/230:53165"} data-name={"text"}>
      <span className={s.n3} data-layer={"230:53160/230:53161/230:53165/230:53166"} data-name={"Button"}>
        {textSlot(text,"230:53160/230:53161/230:53165/230:53166","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
case "230:53168": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:53168"} data-name={"State=active, Size=S"}>
  <span className={s.n25} data-layer={"230:53168/230:53169"} data-name={"icon & text"}>
    <span className={s.n22} data-layer={"230:53168/230:53169/230:53173"} data-name={"text"}>
      <span className={s.n26} data-layer={"230:53168/230:53169/230:53173/230:53174"} data-name={"Button"}>
        {textSlot(text,"230:53168/230:53169/230:53173/230:53174","Button","Button")}
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
