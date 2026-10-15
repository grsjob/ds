// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ChipDesign.module.css';
export const variants = [
  {
    "id": "227:1182",
    "name": "Action=off, Hover=off, Sceleton=off, Size=S",
    "props": {
      "Action": "off",
      "Hover": "off",
      "Sceleton": "off",
      "Size": "S"
    }
  },
  {
    "id": "227:1185",
    "name": "Action=off, Hover=on, Sceleton=off, Size=S",
    "props": {
      "Action": "off",
      "Hover": "on",
      "Sceleton": "off",
      "Size": "S"
    }
  },
  {
    "id": "227:1188",
    "name": "Action=on, Hover=off, Sceleton=off, Size=S",
    "props": {
      "Action": "on",
      "Hover": "off",
      "Sceleton": "off",
      "Size": "S"
    }
  },
  {
    "id": "227:1191",
    "name": "Action=on, Hover=on, Sceleton=off, Size=S",
    "props": {
      "Action": "on",
      "Hover": "on",
      "Sceleton": "off",
      "Size": "S"
    }
  },
  {
    "id": "235:3196",
    "name": "Action=off, Hover=off, Sceleton=off, Size=L",
    "props": {
      "Action": "off",
      "Hover": "off",
      "Sceleton": "off",
      "Size": "L"
    }
  },
  {
    "id": "235:3199",
    "name": "Action=off, Hover=on, Sceleton=off, Size=L",
    "props": {
      "Action": "off",
      "Hover": "on",
      "Sceleton": "off",
      "Size": "L"
    }
  },
  {
    "id": "235:3202",
    "name": "Action=on, Hover=off, Sceleton=off, Size=L",
    "props": {
      "Action": "on",
      "Hover": "off",
      "Sceleton": "off",
      "Size": "L"
    }
  },
  {
    "id": "235:3205",
    "name": "Action=on, Hover=on, Sceleton=off, Size=L",
    "props": {
      "Action": "on",
      "Hover": "on",
      "Sceleton": "off",
      "Size": "L"
    }
  },
  {
    "id": "235:3208",
    "name": "Action=on, Hover=on, Sceleton=on, Size=S",
    "props": {
      "Action": "on",
      "Hover": "on",
      "Sceleton": "on",
      "Size": "S"
    }
  },
  {
    "id": "235:3209",
    "name": "Action=on, Hover=on, Sceleton=on, Size=L",
    "props": {
      "Action": "on",
      "Hover": "on",
      "Sceleton": "on",
      "Size": "L"
    }
  }
] as const;
export type ChipDesignVariant = typeof variants[number]["id"];
export interface ChipDesignDimensions {
  "Action"?: "off" | "on";
  "Hover"?: "off" | "on";
  "Sceleton"?: "off" | "on";
  "Size"?: "L" | "S";
}
export interface ChipDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ChipDesignVariant;
  variantProps?: ChipDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ChipDesignVariant) => void;
}
const transitions = {"227:1182":{"ON_HOVER":"227:1185"},"227:1185":{"ON_CLICK":"227:1188"},"227:1188":{"ON_HOVER":"227:1191"},"227:1191":{"ON_CLICK":"227:1182"},"235:3196":{"ON_HOVER":"4294967295:4294967295"},"235:3199":{"ON_CLICK":"4294967295:4294967295"},"235:3202":{"ON_HOVER":"4294967295:4294967295"},"235:3205":{"ON_CLICK":"235:3196"},"235:3208":{"ON_CLICK":"227:1182"},"235:3209":{"ON_CLICK":"235:3196"}};
export function ChipDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ChipDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1182": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1182"} data-name={"Action=off, Hover=off, Sceleton=off, Size=S"}>
  <span className={s.n1} data-layer={"227:1182/227:1183"} data-name={"text"}>
    <span className={s.n2} data-layer={"227:1182/227:1183/227:1184"} data-name={"Chips"}>
      {textSlot(text,"227:1182/227:1183/227:1184","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:1185": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1185"} data-name={"Action=off, Hover=on, Sceleton=off, Size=S"}>
  <span className={s.n1} data-layer={"227:1185/227:1186"} data-name={"text"}>
    <span className={s.n4} data-layer={"227:1185/227:1186/227:1187"} data-name={"Chips"}>
      {textSlot(text,"227:1185/227:1186/227:1187","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:1188": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1188"} data-name={"Action=on, Hover=off, Sceleton=off, Size=S"}>
  <span className={s.n1} data-layer={"227:1188/227:1189"} data-name={"text"}>
    <span className={s.n6} data-layer={"227:1188/227:1189/227:1190"} data-name={"Chips"}>
      {textSlot(text,"227:1188/227:1189/227:1190","Chips","Chips")}
    </span>
  </span>
</Root>);
case "227:1191": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1191"} data-name={"Action=on, Hover=on, Sceleton=off, Size=S"}>
  <span className={s.n1} data-layer={"227:1191/227:1192"} data-name={"text"}>
    <span className={s.n6} data-layer={"227:1191/227:1192/227:1193"} data-name={"Chips"}>
      {textSlot(text,"227:1191/227:1192/227:1193","Chips","Chips")}
    </span>
  </span>
</Root>);
case "235:3196": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3196"} data-name={"Action=off, Hover=off, Sceleton=off, Size=L"}>
  <span className={s.n8} data-layer={"235:3196/235:3197"} data-name={"text"}>
    <span className={s.n9} data-layer={"235:3196/235:3197/235:3198"} data-name={"Chips"}>
      {textSlot(text,"235:3196/235:3197/235:3198","Chips","Chips")}
    </span>
  </span>
</Root>);
case "235:3199": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3199"} data-name={"Action=off, Hover=on, Sceleton=off, Size=L"}>
  <span className={s.n8} data-layer={"235:3199/235:3200"} data-name={"text"}>
    <span className={s.n11} data-layer={"235:3199/235:3200/235:3201"} data-name={"Chips"}>
      {textSlot(text,"235:3199/235:3200/235:3201","Chips","Chips")}
    </span>
  </span>
</Root>);
case "235:3202": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3202"} data-name={"Action=on, Hover=off, Sceleton=off, Size=L"}>
  <span className={s.n13} data-layer={"235:3202/235:3203"} data-name={"text"}>
    <span className={s.n14} data-layer={"235:3202/235:3203/235:3204"} data-name={"Chips"}>
      {textSlot(text,"235:3202/235:3203/235:3204","Chips","Chips")}
    </span>
  </span>
</Root>);
case "235:3205": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3205"} data-name={"Action=on, Hover=on, Sceleton=off, Size=L"}>
  <span className={s.n13} data-layer={"235:3205/235:3206"} data-name={"text"}>
    <span className={s.n14} data-layer={"235:3205/235:3206/235:3207"} data-name={"Chips"}>
      {textSlot(text,"235:3205/235:3206/235:3207","Chips","Chips")}
    </span>
  </span>
</Root>);
case "235:3208": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3208"} data-name={"Action=on, Hover=on, Sceleton=on, Size=S"}></Root>);
case "235:3209": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:3209"} data-name={"Action=on, Hover=on, Sceleton=on, Size=L"}></Root>);
  default: return null;
  }
}
