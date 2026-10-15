// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SwitchDesign.module.css';
export const variants = [
  {
    "id": "227:1756",
    "name": "Size=S, Active=On, Disabled=Off",
    "props": {
      "Size": "S",
      "Active": "On",
      "Disabled": "Off"
    }
  },
  {
    "id": "227:1760",
    "name": "Size=S, Active=Off, Disabled=Off",
    "props": {
      "Size": "S",
      "Active": "Off",
      "Disabled": "Off"
    }
  },
  {
    "id": "237:3194",
    "name": "Size=L, Active=On, Disabled=Off",
    "props": {
      "Size": "L",
      "Active": "On",
      "Disabled": "Off"
    }
  },
  {
    "id": "237:3197",
    "name": "Size=L, Active=On, Disabled=On",
    "props": {
      "Size": "L",
      "Active": "On",
      "Disabled": "On"
    }
  },
  {
    "id": "237:3201",
    "name": "Size=S, Active=On, Disabled=On",
    "props": {
      "Size": "S",
      "Active": "On",
      "Disabled": "On"
    }
  },
  {
    "id": "237:3205",
    "name": "Size=L, Active=Off, Disabled=Off",
    "props": {
      "Size": "L",
      "Active": "Off",
      "Disabled": "Off"
    }
  },
  {
    "id": "237:3209",
    "name": "Size=L, Active=Off, Disabled=On",
    "props": {
      "Size": "L",
      "Active": "Off",
      "Disabled": "On"
    }
  },
  {
    "id": "237:3213",
    "name": "Size=S, Active=Off, Disabled=On",
    "props": {
      "Size": "S",
      "Active": "Off",
      "Disabled": "On"
    }
  }
] as const;
export type SwitchDesignVariant = typeof variants[number]["id"];
export interface SwitchDesignDimensions {
  "Size"?: "L" | "S";
  "Active"?: "Off" | "On";
  "Disabled"?: "Off" | "On";
}
export interface SwitchDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SwitchDesignVariant;
  variantProps?: SwitchDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SwitchDesignVariant) => void;
}
const transitions = {"227:1756":{"ON_CLICK":"227:1760"},"227:1760":{"ON_CLICK":"227:1756"},"237:3194":{"ON_CLICK":"4294967295:4294967295"},"237:3205":{"ON_CLICK":"237:3194"}};
export function SwitchDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SwitchDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1756": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1756"} data-name={"Size=S, Active=On, Disabled=Off"}>
  <span className={s.n1} data-layer={"227:1756/227:1757"} data-name={"Switch"}>
    <span className={s.n2} data-layer={"227:1756/227:1757/227:1758"} data-name={"Background"}></span>
    <span className={s.n3} data-layer={"227:1756/227:1757/227:1759"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1760": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1760"} data-name={"Size=S, Active=Off, Disabled=Off"}>
  <span className={s.n1} data-layer={"227:1760/227:1761"} data-name={"Switch"}>
    <span className={s.n4} data-layer={"227:1760/227:1761/227:1762"} data-name={"Background"}></span>
    <span className={s.n5} data-layer={"227:1760/227:1761/227:1763"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(182,182,182,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "237:3194": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3194"} data-name={"Size=L, Active=On, Disabled=Off"}>
  <span className={s.n7} data-layer={"237:3194/237:3195"} data-name={"Background"}></span>
  <span className={s.n8} data-layer={"237:3194/237:3196"} data-name={"Knob"}>
    <svg width="100%" height="100%" viewBox="0 0 20 20" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill="none" stroke={"rgba(207,207,207,1)"} strokeWidth={0.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:3197": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3197"} data-name={"Size=L, Active=On, Disabled=On"}>
  <span className={s.n10} data-layer={"237:3197/237:3198"} data-name={"Switch"}>
    <span className={s.n7} data-layer={"237:3197/237:3198/237:3199"} data-name={"Background"}></span>
    <span className={s.n8} data-layer={"237:3197/237:3198/237:3200"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill="none" stroke={"rgba(207,207,207,1)"} strokeWidth={0.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "237:3201": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3201"} data-name={"Size=S, Active=On, Disabled=On"}>
  <span className={s.n1} data-layer={"237:3201/237:3202"} data-name={"Switch"}>
    <span className={s.n2} data-layer={"237:3201/237:3202/237:3203"} data-name={"Background"}></span>
    <span className={s.n3} data-layer={"237:3201/237:3202/237:3204"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.866 14 14 10.866 14 7 C14 3.13401 10.866 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.866 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 C10.866 14 14 10.866 14 7 C14 3.13401 10.866 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.866 3.13401 14 7 14 Z"} fill="none" stroke={"rgba(207,207,207,1)"} strokeWidth={0.36764705181121826} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "237:3205": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3205"} data-name={"Size=L, Active=Off, Disabled=Off"}>
  <span className={s.n10} data-layer={"237:3205/237:3206"} data-name={"Switch"}>
    <span className={s.n12} data-layer={"237:3205/237:3206/237:3207"} data-name={"Background"}></span>
    <span className={s.n13} data-layer={"237:3205/237:3206/237:3208"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill="none" stroke={"rgba(182,182,182,1)"} strokeWidth={0.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "237:3209": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3209"} data-name={"Size=L, Active=Off, Disabled=On"}>
  <span className={s.n10} data-layer={"237:3209/237:3210"} data-name={"Switch"}>
    <span className={s.n12} data-layer={"237:3209/237:3210/237:3211"} data-name={"Background"}></span>
    <span className={s.n13} data-layer={"237:3209/237:3210/237:3212"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M10 20 C15.5228 20 20 15.5228 20 10 C20 4.47715 15.5228 0 10 0 C4.47715 0 0 4.47715 0 10 C0 15.5228 4.47715 20 10 20 Z"} fill="none" stroke={"rgba(182,182,182,1)"} strokeWidth={0.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "237:3213": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:3213"} data-name={"Size=S, Active=Off, Disabled=On"}>
  <span className={s.n1} data-layer={"237:3213/237:3214"} data-name={"Switch"}>
    <span className={s.n4} data-layer={"237:3213/237:3214/237:3215"} data-name={"Background"}></span>
    <span className={s.n5} data-layer={"237:3213/237:3214/237:3216"} data-name={"Knob"}>
      <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.866 14 14 10.866 14 7 C14 3.13401 10.866 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.866 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 C10.866 14 14 10.866 14 7 C14 3.13401 10.866 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.866 3.13401 14 7 14 Z"} fill="none" stroke={"rgba(182,182,182,1)"} strokeWidth={0.36764705181121826} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
