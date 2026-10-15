// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './IconIndicator16VarDesign227_2066.module.css';
export const variants = [
  {
    "id": "227:2067",
    "name": "name=error, hover=Default",
    "props": {
      "name": "error",
      "hover": "Default"
    }
  },
  {
    "id": "227:2069",
    "name": "name=no accept, hover=Default",
    "props": {
      "name": "no accept",
      "hover": "Default"
    }
  },
  {
    "id": "227:2075",
    "name": "name=alert, hover=Default",
    "props": {
      "name": "alert",
      "hover": "Default"
    }
  },
  {
    "id": "227:2077",
    "name": "name=accept, hover=Default",
    "props": {
      "name": "accept",
      "hover": "Default"
    }
  },
  {
    "id": "227:2080",
    "name": "name=process, hover=Default",
    "props": {
      "name": "process",
      "hover": "Default"
    }
  },
  {
    "id": "227:2087",
    "name": "name=process1, hover=Default",
    "props": {
      "name": "process1",
      "hover": "Default"
    }
  },
  {
    "id": "227:2094",
    "name": "name=info, hover=off",
    "props": {
      "name": "info",
      "hover": "off"
    }
  },
  {
    "id": "227:2097",
    "name": "name=name8, hover=on",
    "props": {
      "name": "name8",
      "hover": "on"
    }
  }
] as const;
export type IconIndicator16VarDesign227_2066Variant = typeof variants[number]["id"];
export interface IconIndicator16VarDesign227_2066Dimensions {
  "name"?: "accept" | "alert" | "error" | "info" | "name8" | "no accept" | "process" | "process1";
  "hover"?: "Default" | "off" | "on";
}
export interface IconIndicator16VarDesign227_2066Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: IconIndicator16VarDesign227_2066Variant;
  variantProps?: IconIndicator16VarDesign227_2066Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: IconIndicator16VarDesign227_2066Variant) => void;
}
const transitions = {"227:2094":{"ON_HOVER":"227:2097"}};
export function IconIndicator16VarDesign227_2066({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: IconIndicator16VarDesign227_2066Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:2067": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2067"} data-name={"name=error, hover=Default"}>
  <span className={s.n1} data-layer={"227:2067/227:2068"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.34667 2.98667 13.33333 6.66667 13.33333 C10.34667 13.33333 13.33333 10.34667 13.33333 6.66667 C13.33333 2.98667 10.34667 0 6.66667 0 Z M6 10 L6 8.66667 L7.33333 8.66667 L7.33333 10 L6 10 Z M6 3.33333 L6 7.33333 L7.33333 7.33333 L7.33333 3.33333 L6 3.33333 Z"} fill={"rgba(255,0,0,1)"} fillRule="evenodd"/></svg>
  </span>
</Root>);
case "227:2069": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2069"} data-name={"name=no accept, hover=Default"}>
  <span className={s.n1} data-layer={"227:2069/227:2070"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 6.66667 C0 2.98667 2.98667 0 6.66667 0 C10.34667 0 13.33333 2.98667 13.33333 6.66667 C13.33333 10.34667 10.34667 13.33333 6.66667 13.33333 C2.98667 13.33333 0 10.34667 0 6.66667 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:2069/227:2071"} data-name={"Group 3871"}>
    <span className={s.n3} data-layer={"227:2069/227:2071/227:2073"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5.44 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.55 L-0.55 -0.55 L-0.55 0.55 L0 0.55 L0 0 L0 -0.55 Z M5.44 0.55 L5.99 0.55 L5.99 -0.55 L5.44 -0.55 L5.44 0 L5.44 0.55 Z M0 0 L0 0.55 L5.44 0.55 L5.44 0 L5.44 -0.55 L0 -0.55 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n4} data-layer={"227:2069/227:2071/227:2074"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5.44" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.55 5.44 L-0.55 5.99 L0.55 5.99 L0.55 5.44 L0 5.44 L-0.55 5.44 Z M0.55 0 L0.55 -0.55 L-0.55 -0.55 L-0.55 0 L0 0 L0.55 0 Z M0 5.44 L0.55 5.44 L0.55 0 L0 0 L-0.55 0 L-0.55 5.44 L0 5.44 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2075": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2075"} data-name={"name=alert, hover=Default"}>
  <span className={s.n5} data-layer={"227:2075/227:2076"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.34667 2.98667 13.33333 6.66667 13.33333 C10.34667 13.33333 13.33333 10.34667 13.33333 6.66667 C13.33333 2.98667 10.34667 0 6.66667 0 Z M6 10 L6 8.66667 L7.33333 8.66667 L7.33333 10 L6 10 Z M6 3.33333 L6 7.33333 L7.33333 7.33333 L7.33333 3.33333 L6 3.33333 Z"} fill={"rgba(218,147,0,1)"} fillRule="evenodd"/></svg>
  </span>
</Root>);
case "227:2077": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2077"} data-name={"name=accept, hover=Default"}>
  <span className={s.n1} data-layer={"227:2077/227:2078"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.34667 2.98667 13.33333 6.66667 13.33333 C10.34667 13.33333 13.33333 10.34667 13.33333 6.66667 C13.33333 2.98667 10.34667 0 6.66667 0 Z"} fill={"rgba(39,193,14,1)"} fillRule="evenodd"/></svg>
  </span>
  <span className={s.n6} data-layer={"227:2077/227:2079"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:2080": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2080"} data-name={"name=process, hover=Default"}>
  <span className={s.n1} data-layer={"227:2080/227:2081"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.34667 2.98667 13.33333 6.66667 13.33333 C10.34667 13.33333 13.33333 10.34667 13.33333 6.66667 C13.33333 2.98667 10.34667 0 6.66667 0 Z"} fill={"rgba(0,187,255,1)"} fillRule="evenodd"/></svg>
  </span>
  <span className={s.n7} data-layer={"227:2080/227:2082"} data-name={"0"}>
    <span className={s.n8} data-layer={"227:2080/227:2082/227:2083"} data-name={"Vector"}></span>
    <span className={s.n9} data-layer={"227:2080/227:2082/227:2084"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 1.83344 3.87658" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.55 0 L0.55 -0.55 L-0.55 -0.55 L-0.55 0 L0 0 L0.55 0 Z M0 2.27979 L-0.55 2.27979 C-0.55 2.43883 -0.48115 2.59009 -0.36122 2.69454 L0 2.27979 Z M1.47222 4.29133 L1.88697 4.65255 L2.60941 3.82304 L2.19466 3.46182 L1.83344 3.87658 L1.47222 4.29133 Z M0 0 L-0.55 0 L-0.55 2.27979 L0 2.27979 L0.55 2.27979 L0.55 0 L0 0 Z M0 2.27979 L-0.36122 2.69454 L1.47222 4.29133 L1.83344 3.87658 L2.19466 3.46182 L0.36122 1.86503 L0 2.27979 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"227:2080/227:2082/227:2086"} data-name={"Ellipse 3163"}></span>
  </span>
</Root>);
case "227:2087": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2087"} data-name={"name=process1, hover=Default"}>
  <span className={s.n11} data-layer={"227:2087/227:2088"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 12.72388 12.72388" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.36194 0 L6.36194 -1.1 C2.24264 -1.1 -1.1 2.24264 -1.1 6.36194 L0 6.36194 L1.1 6.36194 C1.1 3.45766 3.45766 1.1 6.36194 1.1 L6.36194 0 Z M0 6.36194 L-1.1 6.36194 C-1.1 10.48124 2.24264 13.82388 6.36194 13.82388 L6.36194 12.72388 L6.36194 11.62388 C3.45766 11.62388 1.1 9.26622 1.1 6.36194 L0 6.36194 Z M6.36194 12.72388 L6.36194 13.82388 C10.48124 13.82388 13.82388 10.48124 13.82388 6.36194 L12.72388 6.36194 L11.62388 6.36194 C11.62388 9.26622 9.26622 11.62388 6.36194 11.62388 L6.36194 12.72388 Z M12.72388 6.36194 L13.82388 6.36194 C13.82388 2.24264 10.48124 -1.1 6.36194 -1.1 L6.36194 0 L6.36194 1.1 C9.26622 1.1 11.62388 3.45766 11.62388 6.36194 L12.72388 6.36194 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n7} data-layer={"227:2087/227:2089"} data-name={"0"}>
    <span className={s.n8} data-layer={"227:2087/227:2089/227:2090"} data-name={"Vector"}></span>
    <span className={s.n12} data-layer={"227:2087/227:2089/227:2091"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 2.14353 4.86124" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.75 0 L0.75 -0.75 L-0.75 -0.75 L-0.75 0 L0 0 L0.75 0 Z M0 3.28736 L-0.75 3.28736 C-0.75 3.52611 -0.63633 3.7506 -0.44388 3.8919 L0 3.28736 Z M1.69965 5.46578 L2.30419 5.90967 L3.19195 4.70058 L2.58741 4.2567 L2.14353 4.86124 L1.69965 5.46578 Z M0 0 L-0.75 0 L-0.75 3.28736 L0 3.28736 L0.75 3.28736 L0.75 0 L0 0 Z M0 3.28736 L-0.44388 3.8919 L1.69965 5.46578 L2.14353 4.86124 L2.58741 4.2567 L0.44388 2.68282 L0 3.28736 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2094": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2094"} data-name={"name=info, hover=off"}>
  <span className={s.n14} data-layer={"227:2094/227:2095"} data-name={"Ellipse 26"}>
    <svg width="100%" height="100%" viewBox="0 0 12 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 5.33333 C7 4.78105 6.55228 4.33333 6 4.33333 C5.44772 4.33333 5 4.78105 5 5.33333 L6 5.33333 L7 5.33333 Z M5 8.66667 C5 9.21895 5.44772 9.66667 6 9.66667 C6.55228 9.66667 7 9.21895 7 8.66667 L6 8.66667 L5 8.66667 Z M12 6 L11 6 C11 8.76142 8.76142 11 6 11 L6 12 L6 13 C9.86599 13 13 9.86599 13 6 L12 6 Z M6 12 L6 11 C3.23858 11 1 8.76142 1 6 L0 6 L-1 6 C-1 9.86599 2.13401 13 6 13 L6 12 Z M0 6 L1 6 C1 3.23858 3.23858 1 6 1 L6 0 L6 -1 C2.13401 -1 -1 2.13401 -1 6 L0 6 Z M6 0 L6 1 C8.76142 1 11 3.23858 11 6 L12 6 L13 6 C13 2.13401 9.86599 -1 6 -1 L6 0 Z M6 5.33333 L5 5.33333 L5 8.66667 L6 8.66667 L7 8.66667 L7 5.33333 L6 5.33333 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:2094/227:2096"} data-name={"Ellipse 28"}></span>
</Root>);
case "227:2097": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2097"} data-name={"name=name8, hover=on"}>
  <span className={s.n14} data-layer={"227:2097/227:2098"} data-name={"Ellipse 26"}>
    <svg width="100%" height="100%" viewBox="0 0 12 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7 5.33333 C7 4.78105 6.55228 4.33333 6 4.33333 C5.44772 4.33333 5 4.78105 5 5.33333 L6 5.33333 L7 5.33333 Z M5 8.66667 C5 9.21895 5.44772 9.66667 6 9.66667 C6.55228 9.66667 7 9.21895 7 8.66667 L6 8.66667 L5 8.66667 Z M12 6 L11 6 C11 8.76142 8.76142 11 6 11 L6 12 L6 13 C9.86599 13 13 9.86599 13 6 L12 6 Z M6 12 L6 11 C3.23858 11 1 8.76142 1 6 L0 6 L-1 6 C-1 9.86599 2.13401 13 6 13 L6 12 Z M0 6 L1 6 C1 3.23858 3.23858 1 6 1 L6 0 L6 -1 C2.13401 -1 -1 2.13401 -1 6 L0 6 Z M6 0 L6 1 C8.76142 1 11 3.23858 11 6 L12 6 L13 6 C13 2.13401 9.86599 -1 6 -1 L6 0 Z M6 5.33333 L5 5.33333 L5 8.66667 L6 8.66667 L7 8.66667 L7 5.33333 L6 5.33333 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n16} data-layer={"227:2097/227:2099"} data-name={"Ellipse 28"}></span>
</Root>);
  default: return null;
  }
}
