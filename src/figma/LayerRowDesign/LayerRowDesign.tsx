// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LayerRowDesign.module.css';
export const variants = [
  {
    "id": "227:71936",
    "name": "view=select, Hover=on, Sceleton=off",
    "props": {
      "view": "select",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71944",
    "name": "view=switch+select, Hover=off, Sceleton=off",
    "props": {
      "view": "switch+select",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71952",
    "name": "view=switch+icon, Hover=off, Sceleton=off",
    "props": {
      "view": "switch+icon",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71960",
    "name": "view=radio, Hover=off, Sceleton=off",
    "props": {
      "view": "radio",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71963",
    "name": "view=radio, Hover=on, Sceleton=off",
    "props": {
      "view": "radio",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71966",
    "name": "view=switch+select, Hover=on, Sceleton=off",
    "props": {
      "view": "switch+select",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71974",
    "name": "view=switch+icon, Hover=on, Sceleton=off",
    "props": {
      "view": "switch+icon",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71982",
    "name": "view=switch, Hover=off, Sceleton=off",
    "props": {
      "view": "switch",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71990",
    "name": "view=switch, Hover=on, Sceleton=off",
    "props": {
      "view": "switch",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71998",
    "name": "view=Opasity, Hover=off, Sceleton=off",
    "props": {
      "view": "Opasity",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:72001",
    "name": "view=Opasity, Hover=on, Sceleton=off",
    "props": {
      "view": "Opasity",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:72004",
    "name": "view=Opasity, Hover=off, Sceleton=on",
    "props": {
      "view": "Opasity",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72007",
    "name": "view=switch, Hover=off, Sceleton=on",
    "props": {
      "view": "switch",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72010",
    "name": "view=switch+select, Hover=off, Sceleton=on",
    "props": {
      "view": "switch+select",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72015",
    "name": "view=switch+icon, Hover=off, Sceleton=on",
    "props": {
      "view": "switch+icon",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72020",
    "name": "view=select, Hover=off, Sceleton=on",
    "props": {
      "view": "select",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72023",
    "name": "view=select, Hover=off, Sceleton=off",
    "props": {
      "view": "select",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:72031",
    "name": "view=radio, Hover=off, Sceleton=on",
    "props": {
      "view": "radio",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:72035",
    "name": "view=value, Hover=off, Sceleton=off",
    "props": {
      "view": "value",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:72042",
    "name": "view=value, Hover=on, Sceleton=off",
    "props": {
      "view": "value",
      "Hover": "on",
      "Sceleton": "off"
    }
  }
] as const;
export type LayerRowDesignVariant = typeof variants[number]["id"];
export interface LayerRowDesignDimensions {
  "view"?: "Opasity" | "radio" | "select" | "switch" | "switch+icon" | "switch+select" | "value";
  "Hover"?: "off" | "on";
  "Sceleton"?: "off" | "on";
}
export interface LayerRowDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LayerRowDesignVariant;
  variantProps?: LayerRowDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LayerRowDesignVariant) => void;
}
const transitions = {"227:71944":{"ON_HOVER":"227:71966"},"227:71952":{"ON_HOVER":"227:71974"},"227:71960":{"ON_HOVER":"227:71963"},"227:71982":{"ON_HOVER":"227:71990"},"227:71998":{"ON_HOVER":"227:72001"},"227:72023":{"ON_HOVER":"227:71936"},"227:72035":{"ON_HOVER":"227:72042"}};
export function LayerRowDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LayerRowDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:71936": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71936"} data-name={"view=select, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71936/227:71937"} data-name={"Text text text text text text text"}>
    {textSlot(text,"227:71936/227:71937","Text text text text text text text","Text text text text text text text")}
  </span>
  <span className={s.n2} data-layer={"227:71936/227:71938"} data-name={" Box value"}>
    <span className={s.n3} data-layer={"227:71936/227:71938/227:71940"} data-name={"Select/var"}>
      <span className={s.n4} data-layer={"227:71936/227:71938/227:71940/227:1977"} data-name={"Box"}>
        <span className={s.n5} data-layer={"227:71936/227:71938/227:71940/227:1977/227:1978"} data-name={"icon left & Text"}>
          <span className={s.n6} data-layer={"227:71936/227:71938/227:71940/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
            {textSlot(text,"227:71936/227:71938/227:71940/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:71936/227:71938/227:71940/227:1977/227:1980"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:71936/227:71938/227:71940/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:71936/227:71938/227:71940/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71944": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71944"} data-name={"view=switch+select, Hover=off, Sceleton=off"}>
  <span className={s.n10} data-layer={"227:71944/227:71945"} data-name={"Text text"}>
    {textSlot(text,"227:71944/227:71945","Text text","Text text")}
  </span>
  <span className={s.n2} data-layer={"227:71944/227:71946"} data-name={" Box value"}>
    <span className={s.n11} data-layer={"227:71944/227:71946/227:71947"} data-name={"Select/var"}>
      <span className={s.n12} data-layer={"227:71944/227:71946/227:71947/227:1977"} data-name={"Box"}>
        <span className={s.n13} data-layer={"227:71944/227:71946/227:71947/227:1977/227:1978"} data-name={"icon left & Text"}>
          <span className={s.n6} data-layer={"227:71944/227:71946/227:71947/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
            {textSlot(text,"227:71944/227:71946/227:71947/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
          </span>
        </span>
        <span className={s.n14} data-layer={"227:71944/227:71946/227:71947/227:1977/227:1980"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:71944/227:71946/227:71947/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:71944/227:71946/227:71947/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n15} data-layer={"227:71944/227:71946/227:71948"} data-name={"Switch/var"}>
      <span className={s.n16} data-layer={"227:71944/227:71946/227:71948/227:1761"} data-name={"Switch"}>
        <span className={s.n17} data-layer={"227:71944/227:71946/227:71948/227:1761/227:1762"} data-name={"Background"}></span>
        <span className={s.n18} data-layer={"227:71944/227:71946/227:71948/227:1761/227:1763"} data-name={"Knob"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(182,182,182,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71952": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71952"} data-name={"view=switch+icon, Hover=off, Sceleton=off"}>
  <span className={s.n10} data-layer={"227:71952/227:71953"} data-name={"Text text"}>
    {textSlot(text,"227:71952/227:71953","Text text","Text text")}
  </span>
  <span className={s.n2} data-layer={"227:71952/227:71954"} data-name={" Box value"}>
    <span className={s.n19} data-layer={"227:71952/227:71954/227:71955"} data-name={"Select/var"}>
      <span className={s.n20} data-layer={"227:71952/227:71954/227:71955/227:1993"} data-name={"Box"}>
        <span className={s.n21} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1994"} data-name={"icon left & Text"}>
          <span className={s.n22} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1994/227:1995"} data-name={"Text"}>
            {textSlot(text,"227:71952/227:71954/227:71955/227:1993/227:1994/227:1995","Text","Text")}
          </span>
        </span>
        <span className={s.n23} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996/227:1997"} data-name={"icon/set/base"}>
            <span className={s.n24} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996/227:1997/227:2002"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n25} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996/227:1997/227:2003"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
          <span className={s.n26} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996/227:1998"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:71952/227:71954/227:71955/227:1993/227:1996/227:1998/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n27} data-layer={"227:71952/227:71954/227:71959"} data-name={"icon/set/base"}>
      <span className={s.n8} data-layer={"227:71952/227:71954/227:71959/227:2013"} data-name={"Vector"}></span>
      <span className={s.n28} data-layer={"227:71952/227:71954/227:71959/227:2014"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n29} data-layer={"227:71952/227:71954/227:71959/227:2015"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n30} data-layer={"227:71952/227:71954/227:71959/227:2016"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7.33333 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88727 C-0.49003 -0.88727 -0.88727 -0.49003 -0.88727 0 C-0.88727 0.49003 -0.49003 0.88727 0 0.88727 L0 0 L0 -0.88727 Z M4.66667 0 L4.66667 -0.88727 L4.66667 0 Z M4 4.44606 C3.50997 4.44606 3.11273 4.84331 3.11273 5.33333 C3.11273 5.82336 3.50997 6.22061 4 6.22061 L4 5.33333 L4 4.44606 Z M0 0 L0 0.88727 L4.66667 0.88727 L4.66667 0 L4.66667 -0.88727 L0 -0.88727 L0 0 Z M4.66667 0 L4.66667 0.88727 C5.13859 0.88727 5.59119 1.07474 5.92489 1.40845 L6.55229 0.78105 L7.17968 0.15365 C6.51319 -0.51284 5.60923 -0.88727 4.66667 -0.88727 L4.66667 0 Z M6.55229 0.78105 L5.92489 1.40845 C6.25859 1.74215 6.44606 2.19474 6.44606 2.66667 L7.33333 2.66667 L8.22061 2.66667 C8.22061 1.7241 7.84617 0.82014 7.17968 0.15365 L6.55229 0.78105 Z M7.33333 2.66667 L6.44606 2.66667 C6.44606 3.13859 6.25859 3.59119 5.92489 3.92489 L6.55229 4.55228 L7.17968 5.17968 C7.84617 4.51319 8.22061 3.60923 8.22061 2.66667 L7.33333 2.66667 Z M6.55229 4.55228 L5.92489 3.92489 C5.59119 4.25859 5.13859 4.44606 4.66667 4.44606 L4.66667 5.33333 L4.66667 6.22061 C5.60923 6.22061 6.51319 5.84617 7.17968 5.17968 L6.55229 4.55228 Z M4.66667 5.33333 L4.66667 4.44606 L4 4.44606 L4 5.33333 L4 6.22061 L4.66667 6.22061 L4.66667 5.33333 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:71960": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71960"} data-name={"view=radio, Hover=off, Sceleton=off"}>
  <span className={s.n31} data-layer={"227:71960/227:71961"} data-name={"radio/var"}>
    <span className={s.n32} data-layer={"227:71960/227:71961/227:1362"} data-name={"Ellipse 49"}></span>
  </span>
  <span className={s.n33} data-layer={"227:71960/227:71962"} data-name={"Text text"}>
    {textSlot(text,"227:71960/227:71962","Text text","Text text")}
  </span>
</Root>);
case "227:71963": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71963"} data-name={"view=radio, Hover=on, Sceleton=off"}>
  <span className={s.n31} data-layer={"227:71963/227:71964"} data-name={"radio/var"}>
    <span className={s.n32} data-layer={"227:71963/227:71964/227:1362"} data-name={"Ellipse 49"}></span>
  </span>
  <span className={s.n34} data-layer={"227:71963/227:71965"} data-name={"Text text"}>
    {textSlot(text,"227:71963/227:71965","Text text","Text text")}
  </span>
</Root>);
case "227:71966": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71966"} data-name={"view=switch+select, Hover=on, Sceleton=off"}>
  <span className={s.n35} data-layer={"227:71966/227:71967"} data-name={"Text text"}>
    {textSlot(text,"227:71966/227:71967","Text text","Text text")}
  </span>
  <span className={s.n2} data-layer={"227:71966/227:71968"} data-name={" Box value"}>
    <span className={s.n11} data-layer={"227:71966/227:71968/227:71969"} data-name={"Select/var"}>
      <span className={s.n12} data-layer={"227:71966/227:71968/227:71969/227:1977"} data-name={"Box"}>
        <span className={s.n36} data-layer={"227:71966/227:71968/227:71969/227:1977/227:1978"} data-name={"icon left & Text"}>
          <span className={s.n6} data-layer={"227:71966/227:71968/227:71969/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
            {textSlot(text,"227:71966/227:71968/227:71969/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
          </span>
        </span>
        <span className={s.n37} data-layer={"227:71966/227:71968/227:71969/227:1977/227:1980"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:71966/227:71968/227:71969/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:71966/227:71968/227:71969/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n15} data-layer={"227:71966/227:71968/227:71970"} data-name={"Switch/var"}>
      <span className={s.n16} data-layer={"227:71966/227:71968/227:71970/227:1761"} data-name={"Switch"}>
        <span className={s.n17} data-layer={"227:71966/227:71968/227:71970/227:1761/227:1762"} data-name={"Background"}></span>
        <span className={s.n18} data-layer={"227:71966/227:71968/227:71970/227:1761/227:1763"} data-name={"Knob"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(182,182,182,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71974": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71974"} data-name={"view=switch+icon, Hover=on, Sceleton=off"}>
  <span className={s.n35} data-layer={"227:71974/227:71975"} data-name={"Text text"}>
    {textSlot(text,"227:71974/227:71975","Text text","Text text")}
  </span>
  <span className={s.n2} data-layer={"227:71974/227:71976"} data-name={" Box value"}>
    <span className={s.n19} data-layer={"227:71974/227:71976/227:71977"} data-name={"Select/var"}>
      <span className={s.n20} data-layer={"227:71974/227:71976/227:71977/227:1993"} data-name={"Box"}>
        <span className={s.n38} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1994"} data-name={"icon left & Text"}>
          <span className={s.n22} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1994/227:1995"} data-name={"Text"}>
            {textSlot(text,"227:71974/227:71976/227:71977/227:1993/227:1994/227:1995","Text","Text")}
          </span>
        </span>
        <span className={s.n39} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996/227:1997"} data-name={"icon/set/base"}>
            <span className={s.n24} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996/227:1997/227:2002"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n25} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996/227:1997/227:2003"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
          <span className={s.n26} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996/227:1998"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:71974/227:71976/227:71977/227:1993/227:1996/227:1998/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n27} data-layer={"227:71974/227:71976/227:71981"} data-name={"icon/set/base"}>
      <span className={s.n8} data-layer={"227:71974/227:71976/227:71981/227:2013"} data-name={"Vector"}></span>
      <span className={s.n28} data-layer={"227:71974/227:71976/227:71981/227:2014"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n29} data-layer={"227:71974/227:71976/227:71981/227:2015"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n30} data-layer={"227:71974/227:71976/227:71981/227:2016"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7.33333 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88727 C-0.49003 -0.88727 -0.88727 -0.49003 -0.88727 0 C-0.88727 0.49003 -0.49003 0.88727 0 0.88727 L0 0 L0 -0.88727 Z M4.66667 0 L4.66667 -0.88727 L4.66667 0 Z M4 4.44606 C3.50997 4.44606 3.11273 4.84331 3.11273 5.33333 C3.11273 5.82336 3.50997 6.22061 4 6.22061 L4 5.33333 L4 4.44606 Z M0 0 L0 0.88727 L4.66667 0.88727 L4.66667 0 L4.66667 -0.88727 L0 -0.88727 L0 0 Z M4.66667 0 L4.66667 0.88727 C5.13859 0.88727 5.59119 1.07474 5.92489 1.40845 L6.55229 0.78105 L7.17968 0.15365 C6.51319 -0.51284 5.60923 -0.88727 4.66667 -0.88727 L4.66667 0 Z M6.55229 0.78105 L5.92489 1.40845 C6.25859 1.74215 6.44606 2.19474 6.44606 2.66667 L7.33333 2.66667 L8.22061 2.66667 C8.22061 1.7241 7.84617 0.82014 7.17968 0.15365 L6.55229 0.78105 Z M7.33333 2.66667 L6.44606 2.66667 C6.44606 3.13859 6.25859 3.59119 5.92489 3.92489 L6.55229 4.55228 L7.17968 5.17968 C7.84617 4.51319 8.22061 3.60923 8.22061 2.66667 L7.33333 2.66667 Z M6.55229 4.55228 L5.92489 3.92489 C5.59119 4.25859 5.13859 4.44606 4.66667 4.44606 L4.66667 5.33333 L4.66667 6.22061 C5.60923 6.22061 6.51319 5.84617 7.17968 5.17968 L6.55229 4.55228 Z M4.66667 5.33333 L4.66667 4.44606 L4 4.44606 L4 5.33333 L4 6.22061 L4.66667 6.22061 L4.66667 5.33333 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:71982": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71982"} data-name={"view=switch, Hover=off, Sceleton=off"}>
  <span className={s.n10} data-layer={"227:71982/227:71983"} data-name={"Text text"}>
    {textSlot(text,"227:71982/227:71983","Text text","Text text")}
  </span>
  <span className={s.n40} data-layer={"227:71982/227:71984"} data-name={" Box value"}>
    <span className={s.n41} data-layer={"227:71982/227:71984/227:71986"} data-name={"Switch/var"}>
      <span className={s.n16} data-layer={"227:71982/227:71984/227:71986/227:1761"} data-name={"Switch"}>
        <span className={s.n17} data-layer={"227:71982/227:71984/227:71986/227:1761/227:1762"} data-name={"Background"}></span>
        <span className={s.n18} data-layer={"227:71982/227:71984/227:71986/227:1761/227:1763"} data-name={"Knob"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(182,182,182,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71990": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71990"} data-name={"view=switch, Hover=on, Sceleton=off"}>
  <span className={s.n35} data-layer={"227:71990/227:71991"} data-name={"Text text"}>
    {textSlot(text,"227:71990/227:71991","Text text","Text text")}
  </span>
  <span className={s.n40} data-layer={"227:71990/227:71992"} data-name={" Box value"}>
    <span className={s.n41} data-layer={"227:71990/227:71992/227:71994"} data-name={"Switch/var"}>
      <span className={s.n16} data-layer={"227:71990/227:71992/227:71994/227:1761"} data-name={"Switch"}>
        <span className={s.n17} data-layer={"227:71990/227:71992/227:71994/227:1761/227:1762"} data-name={"Background"}></span>
        <span className={s.n18} data-layer={"227:71990/227:71992/227:71994/227:1761/227:1763"} data-name={"Knob"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 14 C10.86599 14 14 10.86599 14 7 C14 3.13401 10.86599 0 7 0 C3.13401 0 0 3.13401 0 7 C0 10.86599 3.13401 14 7 14 Z"} fill={"rgba(248,248,248,1)"} fillRule="evenodd"/><path d={"M7 14 L7 14.18382 C10.96752 14.18382 14.18382 10.96752 14.18382 7 L14 7 L13.81618 7 C13.81618 10.76447 10.76447 13.81618 7 13.81618 L7 14 Z M14 7 L14.18382 7 C14.18382 3.03248 10.96752 -0.18382 7 -0.18382 L7 0 L7 0.18382 C10.76447 0.18382 13.81618 3.23553 13.81618 7 L14 7 Z M7 0 L7 -0.18382 C3.03248 -0.18382 -0.18382 3.03248 -0.18382 7 L0 7 L0.18382 7 C0.18382 3.23553 3.23553 0.18382 7 0.18382 L7 0 Z M0 7 L-0.18382 7 C-0.18382 10.96752 3.03248 14.18382 7 14.18382 L7 14 L7 13.81618 C3.23553 13.81618 0.18382 10.76447 0.18382 7 L0 7 Z"} fill={"rgba(182,182,182,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71998": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71998"} data-name={"view=Opasity, Hover=off, Sceleton=off"}>
  <span className={s.n10} data-layer={"227:71998/227:71999"} data-name={"Text text"}>
    {textSlot(text,"227:71998/227:71999","Text text","Text text")}
  </span>
  <span className={s.n43} data-layer={"227:71998/227:72000"} data-name={"Slider/var"}>
    <span className={s.n44} data-layer={"227:71998/227:72000/227:1973"} data-name={"Slider/core"}>
      <span className={s.n45} data-layer={"227:71998/227:72000/227:1973/227:5690"} data-name={"The scale"}>
        <span className={s.n46} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691"} data-name={"50"}>
          <span className={s.n47} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5692"} data-name={"Segment"}>
            <span className={s.n48} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5692/227:5693"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n49} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5694"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5694/227:5695"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n51} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5696"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5696/227:5697"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n52} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5698"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5698/227:5699"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n53} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5700"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5691/227:5700/227:5701"} data-name={"Rectangle 3464280"}></span>
          </span>
        </span>
        <span className={s.n54} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702"} data-name={"50"}>
          <span className={s.n55} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5703"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5703/227:5704"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n49} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5705"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5705/227:5706"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n51} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5707"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5707/227:5708"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n52} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5709"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5709/227:5710"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n56} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5711"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:71998/227:72000/227:1973/227:5690/227:5702/227:5711/227:5712"} data-name={"Rectangle 3464280"}></span>
          </span>
        </span>
      </span>
      <span className={s.n57} data-layer={"227:71998/227:72000/227:1973/227:5713"} data-name={"slider"}></span>
    </span>
  </span>
</Root>);
case "227:72001": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72001"} data-name={"view=Opasity, Hover=on, Sceleton=off"}>
  <span className={s.n35} data-layer={"227:72001/227:72002"} data-name={"Text text"}>
    {textSlot(text,"227:72001/227:72002","Text text","Text text")}
  </span>
  <span className={s.n43} data-layer={"227:72001/227:72003"} data-name={"Slider/var"}>
    <span className={s.n44} data-layer={"227:72001/227:72003/227:1973"} data-name={"Slider/core"}>
      <span className={s.n45} data-layer={"227:72001/227:72003/227:1973/227:5690"} data-name={"The scale"}>
        <span className={s.n46} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691"} data-name={"50"}>
          <span className={s.n47} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5692"} data-name={"Segment"}>
            <span className={s.n48} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5692/227:5693"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n49} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5694"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5694/227:5695"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n51} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5696"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5696/227:5697"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n52} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5698"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5698/227:5699"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n53} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5700"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5691/227:5700/227:5701"} data-name={"Rectangle 3464280"}></span>
          </span>
        </span>
        <span className={s.n54} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702"} data-name={"50"}>
          <span className={s.n55} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5703"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5703/227:5704"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n49} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5705"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5705/227:5706"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n51} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5707"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5707/227:5708"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n52} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5709"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5709/227:5710"} data-name={"Rectangle 3464280"}></span>
          </span>
          <span className={s.n56} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5711"} data-name={"Segment"}>
            <span className={s.n50} data-layer={"227:72001/227:72003/227:1973/227:5690/227:5702/227:5711/227:5712"} data-name={"Rectangle 3464280"}></span>
          </span>
        </span>
      </span>
      <span className={s.n57} data-layer={"227:72001/227:72003/227:1973/227:5713"} data-name={"slider"}></span>
    </span>
  </span>
</Root>);
case "227:72004": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72004"} data-name={"view=Opasity, Hover=off, Sceleton=on"}>
  <span className={s.n58} data-layer={"227:72004/227:72005"} data-name={"Rectangle 3464282"}></span>
  <span className={s.n59} data-layer={"227:72004/227:72006"} data-name={"Rectangle 3464283"}></span>
</Root>);
case "227:72007": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72007"} data-name={"view=switch, Hover=off, Sceleton=on"}>
  <span className={s.n60} data-layer={"227:72007/227:72008"} data-name={"Rectangle 3464282"}></span>
  <span className={s.n61} data-layer={"227:72007/227:72009"} data-name={"Rectangle 3464283"}></span>
</Root>);
case "227:72010": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72010"} data-name={"view=switch+select, Hover=off, Sceleton=on"}>
  <span className={s.n62} data-layer={"227:72010/227:72011"} data-name={"Rectangle 3464282"}></span>
  <span className={s.n2} data-layer={"227:72010/227:72012"} data-name={"Frame 3734"}>
    <span className={s.n63} data-layer={"227:72010/227:72012/227:72013"} data-name={"Rectangle 3464284"}></span>
    <span className={s.n64} data-layer={"227:72010/227:72012/227:72014"} data-name={"Rectangle 3464283"}></span>
  </span>
</Root>);
case "227:72015": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72015"} data-name={"view=switch+icon, Hover=off, Sceleton=on"}>
  <span className={s.n62} data-layer={"227:72015/227:72016"} data-name={"Rectangle 3464282"}></span>
  <span className={s.n2} data-layer={"227:72015/227:72017"} data-name={"Frame 3734"}>
    <span className={s.n65} data-layer={"227:72015/227:72017/227:72018"} data-name={"Rectangle 3464284"}></span>
    <span className={s.n66} data-layer={"227:72015/227:72017/227:72019"} data-name={"Rectangle 3464283"}></span>
  </span>
</Root>);
case "227:72020": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72020"} data-name={"view=select, Hover=off, Sceleton=on"}>
  <span className={s.n67} data-layer={"227:72020/227:72021"} data-name={"Rectangle 3464282"}></span>
  <span className={s.n68} data-layer={"227:72020/227:72022"} data-name={"Rectangle 3464284"}></span>
</Root>);
case "227:72023": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72023"} data-name={"view=select, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:72023/227:72024"} data-name={"Text text text text text text text"}>
    {textSlot(text,"227:72023/227:72024","Text text text text text text text","Text text text text text text text")}
  </span>
  <span className={s.n2} data-layer={"227:72023/227:72025"} data-name={" Box value"}>
    <span className={s.n3} data-layer={"227:72023/227:72025/227:72027"} data-name={"Select/var"}>
      <span className={s.n4} data-layer={"227:72023/227:72025/227:72027/227:1977"} data-name={"Box"}>
        <span className={s.n13} data-layer={"227:72023/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
          <span className={s.n6} data-layer={"227:72023/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
            {textSlot(text,"227:72023/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
          </span>
        </span>
        <span className={s.n14} data-layer={"227:72023/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
          <span className={s.n8} data-layer={"227:72023/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
            <span className={s.n9} data-layer={"227:72023/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:72031": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72031"} data-name={"view=radio, Hover=off, Sceleton=on"}>
  <span className={s.n69} data-layer={"227:72031/227:72032"} data-name={"skeleton"}>
    <span className={s.n70} data-layer={"227:72031/227:72032/227:72033"} data-name={"Rectangle 3464283"}></span>
    <span className={s.n71} data-layer={"227:72031/227:72032/227:72034"} data-name={"Rectangle 3464282"}></span>
  </span>
</Root>);
case "227:72035": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72035"} data-name={"view=value, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:72035/227:72036"} data-name={"Text text text"}>
    {textSlot(text,"227:72035/227:72036","Text text text","Text text text ")}
  </span>
  <span className={s.n72} data-layer={"227:72035/227:72037"} data-name={" Box value"}>
    <span className={s.n73} data-layer={"227:72035/227:72037/227:72038"} data-name={"Value Value Value"}>
      {textSlot(text,"227:72035/227:72037/227:72038","Value Value Value",<><span className={s.n74}>{"Value "}</span><span className={s.n74}>{"Value Value "}</span></>)}
    </span>
  </span>
</Root>);
case "227:72042": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:72042"} data-name={"view=value, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:72042/227:72043"} data-name={"Text text text"}>
    {textSlot(text,"227:72042/227:72043","Text text text","Text text text ")}
  </span>
  <span className={s.n72} data-layer={"227:72042/227:72044"} data-name={" Box value"}>
    <span className={s.n75} data-layer={"227:72042/227:72044/227:72045"} data-name={"Value Value Value"}>
      {textSlot(text,"227:72042/227:72044/227:72045","Value Value Value",<><span className={s.n76}>{"Value "}</span><span className={s.n76}>{"Value Value "}</span></>)}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
