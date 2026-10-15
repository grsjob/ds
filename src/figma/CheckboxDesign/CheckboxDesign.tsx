// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './CheckboxDesign.module.css';
export const variants = [
  {
    "id": "227:677",
    "name": "Action=selected, Size=L, state=default",
    "props": {
      "Action": "selected",
      "Size": "L",
      "state": "default"
    }
  },
  {
    "id": "227:679",
    "name": "Action=selected, Size=M, state=default",
    "props": {
      "Action": "selected",
      "Size": "M",
      "state": "default"
    }
  },
  {
    "id": "227:681",
    "name": "Action=selected, Size=L, state=hover",
    "props": {
      "Action": "selected",
      "Size": "L",
      "state": "hover"
    }
  },
  {
    "id": "227:683",
    "name": "Action=selected, Size=M, state=hover",
    "props": {
      "Action": "selected",
      "Size": "M",
      "state": "hover"
    }
  },
  {
    "id": "227:685",
    "name": "Action=un selected, Size=L, state=default",
    "props": {
      "Action": "un selected",
      "Size": "L",
      "state": "default"
    }
  },
  {
    "id": "227:687",
    "name": "Action=un selected, Size=M, state=default",
    "props": {
      "Action": "un selected",
      "Size": "M",
      "state": "default"
    }
  },
  {
    "id": "227:689",
    "name": "Action=un selected, Size=L, state=hover",
    "props": {
      "Action": "un selected",
      "Size": "L",
      "state": "hover"
    }
  },
  {
    "id": "227:691",
    "name": "Action=un selected, Size=M, state=hover",
    "props": {
      "Action": "un selected",
      "Size": "M",
      "state": "hover"
    }
  },
  {
    "id": "227:693",
    "name": "Action=selected, Size=S, state=default",
    "props": {
      "Action": "selected",
      "Size": "S",
      "state": "default"
    }
  },
  {
    "id": "227:695",
    "name": "Action=selected, Size=S, state=hover",
    "props": {
      "Action": "selected",
      "Size": "S",
      "state": "hover"
    }
  },
  {
    "id": "227:697",
    "name": "Action=un selected, Size=S, state=default",
    "props": {
      "Action": "un selected",
      "Size": "S",
      "state": "default"
    }
  },
  {
    "id": "227:699",
    "name": "Action=un selected, Size=S, state=hover",
    "props": {
      "Action": "un selected",
      "Size": "S",
      "state": "hover"
    }
  },
  {
    "id": "237:48833",
    "name": "Action=selected, Size=L, state=focus",
    "props": {
      "Action": "selected",
      "Size": "L",
      "state": "focus"
    }
  },
  {
    "id": "237:48836",
    "name": "Action=selected, Size=M, state=focus",
    "props": {
      "Action": "selected",
      "Size": "M",
      "state": "focus"
    }
  },
  {
    "id": "237:48839",
    "name": "Action=selected, Size=L, state=disabled",
    "props": {
      "Action": "selected",
      "Size": "L",
      "state": "disabled"
    }
  },
  {
    "id": "237:48841",
    "name": "Action=selected, Size=L, state=hard validation",
    "props": {
      "Action": "selected",
      "Size": "L",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48843",
    "name": "Action=selected, Size=M, state=disabled",
    "props": {
      "Action": "selected",
      "Size": "M",
      "state": "disabled"
    }
  },
  {
    "id": "237:48845",
    "name": "Action=selected, Size=M, state=hard validation",
    "props": {
      "Action": "selected",
      "Size": "M",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48847",
    "name": "Action=partial, Size=L, state=default",
    "props": {
      "Action": "partial",
      "Size": "L",
      "state": "default"
    }
  },
  {
    "id": "237:48850",
    "name": "Action=partial, Size=L, state=focus",
    "props": {
      "Action": "partial",
      "Size": "L",
      "state": "focus"
    }
  },
  {
    "id": "237:48854",
    "name": "Action=partial, Size=M, state=default",
    "props": {
      "Action": "partial",
      "Size": "M",
      "state": "default"
    }
  },
  {
    "id": "237:48857",
    "name": "Action=partial, Size=M, state=focus",
    "props": {
      "Action": "partial",
      "Size": "M",
      "state": "focus"
    }
  },
  {
    "id": "237:48861",
    "name": "Action=partial, Size=L, state=hover",
    "props": {
      "Action": "partial",
      "Size": "L",
      "state": "hover"
    }
  },
  {
    "id": "237:48864",
    "name": "Action=partial, Size=L, state=disabled",
    "props": {
      "Action": "partial",
      "Size": "L",
      "state": "disabled"
    }
  },
  {
    "id": "237:48867",
    "name": "Action=partial, Size=L, state=hard validation",
    "props": {
      "Action": "partial",
      "Size": "L",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48870",
    "name": "Action=partial, Size=M, state=hover",
    "props": {
      "Action": "partial",
      "Size": "M",
      "state": "hover"
    }
  },
  {
    "id": "237:48873",
    "name": "Action=partial, Size=M, state=disabled",
    "props": {
      "Action": "partial",
      "Size": "M",
      "state": "disabled"
    }
  },
  {
    "id": "237:48876",
    "name": "Action=partial, Size=M, state=hard validation",
    "props": {
      "Action": "partial",
      "Size": "M",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48879",
    "name": "Action=partial, Size=S, state=default",
    "props": {
      "Action": "partial",
      "Size": "S",
      "state": "default"
    }
  },
  {
    "id": "237:48882",
    "name": "Action=partial, Size=S, state=focus",
    "props": {
      "Action": "partial",
      "Size": "S",
      "state": "focus"
    }
  },
  {
    "id": "237:48886",
    "name": "Action=partial, Size=S, state=hover",
    "props": {
      "Action": "partial",
      "Size": "S",
      "state": "hover"
    }
  },
  {
    "id": "237:48889",
    "name": "Action=partial, Size=S, state=disabled",
    "props": {
      "Action": "partial",
      "Size": "S",
      "state": "disabled"
    }
  },
  {
    "id": "237:48892",
    "name": "Action=partial, Size=S, state=hard validation",
    "props": {
      "Action": "partial",
      "Size": "S",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48895",
    "name": "Action=un selected, Size=L, state=focus",
    "props": {
      "Action": "un selected",
      "Size": "L",
      "state": "focus"
    }
  },
  {
    "id": "237:48898",
    "name": "Action=un selected, Size=M, state=focus",
    "props": {
      "Action": "un selected",
      "Size": "M",
      "state": "focus"
    }
  },
  {
    "id": "237:48901",
    "name": "Action=un selected, Size=L, state=disabled",
    "props": {
      "Action": "un selected",
      "Size": "L",
      "state": "disabled"
    }
  },
  {
    "id": "237:48903",
    "name": "Action=un selected, Size=L, state=hard validation",
    "props": {
      "Action": "un selected",
      "Size": "L",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48905",
    "name": "Action=un selected, Size=M, state=disabled",
    "props": {
      "Action": "un selected",
      "Size": "M",
      "state": "disabled"
    }
  },
  {
    "id": "237:48907",
    "name": "Action=un selected, Size=M, state=hard validation",
    "props": {
      "Action": "un selected",
      "Size": "M",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48909",
    "name": "Action=selected, Size=S, state=focus",
    "props": {
      "Action": "selected",
      "Size": "S",
      "state": "focus"
    }
  },
  {
    "id": "237:48912",
    "name": "Action=selected, Size=S, state=disabled",
    "props": {
      "Action": "selected",
      "Size": "S",
      "state": "disabled"
    }
  },
  {
    "id": "237:48914",
    "name": "Action=selected, Size=S, state=hard validation",
    "props": {
      "Action": "selected",
      "Size": "S",
      "state": "hard validation"
    }
  },
  {
    "id": "237:48916",
    "name": "Action=un selected, Size=S, state=focus",
    "props": {
      "Action": "un selected",
      "Size": "S",
      "state": "focus"
    }
  },
  {
    "id": "237:48919",
    "name": "Action=un selected, Size=S, state=disabled",
    "props": {
      "Action": "un selected",
      "Size": "S",
      "state": "disabled"
    }
  },
  {
    "id": "237:48921",
    "name": "Action=un selected, Size=S, state=hard validation",
    "props": {
      "Action": "un selected",
      "Size": "S",
      "state": "hard validation"
    }
  }
] as const;
export type CheckboxDesignVariant = typeof variants[number]["id"];
export interface CheckboxDesignDimensions {
  "Action"?: "partial" | "selected" | "un selected";
  "Size"?: "L" | "M" | "S";
  "state"?: "default" | "disabled" | "focus" | "hard validation" | "hover";
}
export interface CheckboxDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: CheckboxDesignVariant;
  variantProps?: CheckboxDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: CheckboxDesignVariant) => void;
}
const transitions = {"227:677":{"ON_HOVER":"227:681"},"227:679":{"ON_HOVER":"227:683"},"227:681":{"ON_CLICK":"227:685"},"227:683":{"ON_CLICK":"227:687"},"227:685":{"ON_HOVER":"227:689"},"227:687":{"ON_HOVER":"227:691"},"227:689":{"ON_CLICK":"227:677"},"227:691":{"ON_CLICK":"227:679"},"227:693":{"ON_HOVER":"227:695"},"227:695":{"ON_CLICK":"227:697"},"227:697":{"ON_HOVER":"227:699"},"227:699":{"ON_CLICK":"227:693"},"237:48833":{"ON_HOVER":"227:681"},"237:48836":{"ON_HOVER":"227:683"},"237:48847":{"ON_HOVER":"4294967295:4294967295"},"237:48850":{"ON_HOVER":"4294967295:4294967295"},"237:48854":{"ON_HOVER":"4294967295:4294967295"},"237:48857":{"ON_HOVER":"4294967295:4294967295"},"237:48879":{"ON_HOVER":"4294967295:4294967295"},"237:48882":{"ON_HOVER":"4294967295:4294967295"},"237:48895":{"ON_HOVER":"227:689"},"237:48898":{"ON_HOVER":"227:691"},"237:48909":{"ON_HOVER":"227:695"},"237:48916":{"ON_HOVER":"227:699"}};
export function CheckboxDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: CheckboxDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:677": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:677"} data-name={"Action=selected, Size=L, state=default"}>
  <span className={s.n1} data-layer={"227:677/227:678"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:679": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:679"} data-name={"Action=selected, Size=M, state=default"}>
  <span className={s.n3} data-layer={"227:679/227:680"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:681": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:681"} data-name={"Action=selected, Size=L, state=hover"}>
  <span className={s.n1} data-layer={"227:681/227:682"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:683": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:683"} data-name={"Action=selected, Size=M, state=hover"}>
  <span className={s.n3} data-layer={"227:683/227:684"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:685": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:685"} data-name={"Action=un selected, Size=L, state=default"}></Root>);
case "227:687": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:687"} data-name={"Action=un selected, Size=M, state=default"}></Root>);
case "227:689": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:689"} data-name={"Action=un selected, Size=L, state=hover"}></Root>);
case "227:691": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:691"} data-name={"Action=un selected, Size=M, state=hover"}></Root>);
case "227:693": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:693"} data-name={"Action=selected, Size=S, state=default"}>
  <span className={s.n11} data-layer={"227:693/227:694"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:695": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:695"} data-name={"Action=selected, Size=S, state=hover"}>
  <span className={s.n11} data-layer={"227:695/227:696"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:697": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:697"} data-name={"Action=un selected, Size=S, state=default"}></Root>);
case "227:699": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:699"} data-name={"Action=un selected, Size=S, state=hover"}></Root>);
case "237:48833": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48833"} data-name={"Action=selected, Size=L, state=focus"}>
  <span className={s.n15} data-layer={"237:48833/237:48834"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.94979e-05 1.39885 L2.87412 4.25664 L7.13693 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.422222375869751} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n16} data-layer={"237:48833/237:48835"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48836": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48836"} data-name={"Action=selected, Size=M, state=focus"}>
  <span className={s.n3} data-layer={"237:48836/237:48837"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.20607e-05 1.22399 L2.51486 3.72456 L6.24482 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.2444446086883545} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n17} data-layer={"237:48836/237:48838"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48839": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48839"} data-name={"Action=selected, Size=L, state=disabled"}>
  <span className={s.n1} data-layer={"237:48839/237:48840"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.94979e-05 1.39885 L2.87412 4.25664 L7.13693 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.422222375869751} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48841": return (<Root {...rootAttributes} className={[s.n19,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48841"} data-name={"Action=selected, Size=L, state=hard validation"}>
  <span className={s.n1} data-layer={"237:48841/237:48842"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.94979e-05 1.39885 L2.87412 4.25664 L7.13693 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.422222375869751} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48843": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48843"} data-name={"Action=selected, Size=M, state=disabled"}>
  <span className={s.n3} data-layer={"237:48843/237:48844"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.20607e-05 1.22399 L2.51486 3.72456 L6.24482 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.2444446086883545} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48845": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48845"} data-name={"Action=selected, Size=M, state=hard validation"}>
  <span className={s.n3} data-layer={"237:48845/237:48846"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.20607e-05 1.22399 L2.51486 3.72456 L6.24482 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.2444446086883545} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48847": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48847"} data-name={"Action=partial, Size=L, state=default"}>
  <span className={s.n22} data-layer={"237:48847/237:48849"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48850": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48850"} data-name={"Action=partial, Size=L, state=focus"}>
  <span className={s.n22} data-layer={"237:48850/237:48852"} data-name={"Rectangle 1"}></span>
  <span className={s.n23} data-layer={"237:48850/237:48853"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48854": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48854"} data-name={"Action=partial, Size=M, state=default"}>
  <span className={s.n24} data-layer={"237:48854/237:48856"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48857": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48857"} data-name={"Action=partial, Size=M, state=focus"}>
  <span className={s.n24} data-layer={"237:48857/237:48859"} data-name={"Rectangle 1"}></span>
  <span className={s.n17} data-layer={"237:48857/237:48860"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48861": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48861"} data-name={"Action=partial, Size=L, state=hover"}>
  <span className={s.n25} data-layer={"237:48861/237:48863"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48864": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48864"} data-name={"Action=partial, Size=L, state=disabled"}>
  <span className={s.n27} data-layer={"237:48864/237:48866"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48867": return (<Root {...rootAttributes} className={[s.n28,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48867"} data-name={"Action=partial, Size=L, state=hard validation"}>
  <span className={s.n29} data-layer={"237:48867/237:48869"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48870": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48870"} data-name={"Action=partial, Size=M, state=hover"}>
  <span className={s.n30} data-layer={"237:48870/237:48872"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48873": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48873"} data-name={"Action=partial, Size=M, state=disabled"}>
  <span className={s.n32} data-layer={"237:48873/237:48875"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48876": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48876"} data-name={"Action=partial, Size=M, state=hard validation"}>
  <span className={s.n34} data-layer={"237:48876/237:48878"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48879": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48879"} data-name={"Action=partial, Size=S, state=default"}>
  <span className={s.n35} data-layer={"237:48879/237:48881"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48882": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48882"} data-name={"Action=partial, Size=S, state=focus"}>
  <span className={s.n35} data-layer={"237:48882/237:48884"} data-name={"Rectangle 1"}></span>
  <span className={s.n36} data-layer={"237:48882/237:48885"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48886": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48886"} data-name={"Action=partial, Size=S, state=hover"}>
  <span className={s.n37} data-layer={"237:48886/237:48888"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48889": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48889"} data-name={"Action=partial, Size=S, state=disabled"}>
  <span className={s.n39} data-layer={"237:48889/237:48891"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48892": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48892"} data-name={"Action=partial, Size=S, state=hard validation"}>
  <span className={s.n41} data-layer={"237:48892/237:48894"} data-name={"Rectangle 1"}></span>
</Root>);
case "237:48895": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48895"} data-name={"Action=un selected, Size=L, state=focus"}>
  <span className={s.n42} data-layer={"237:48895/237:48896"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48898": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48898"} data-name={"Action=un selected, Size=M, state=focus"}>
  <span className={s.n17} data-layer={"237:48898/237:48900"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48901": return (<Root {...rootAttributes} className={[s.n43,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48901"} data-name={"Action=un selected, Size=L, state=disabled"}></Root>);
case "237:48903": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48903"} data-name={"Action=un selected, Size=L, state=hard validation"}></Root>);
case "237:48905": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48905"} data-name={"Action=un selected, Size=M, state=disabled"}></Root>);
case "237:48907": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48907"} data-name={"Action=un selected, Size=M, state=hard validation"}></Root>);
case "237:48909": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48909"} data-name={"Action=selected, Size=S, state=focus"}>
  <span className={s.n11} data-layer={"237:48909/237:48910"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-4.46235e-05 1.04914 L2.15559 3.19248 L5.3527 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.0666667222976685} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n36} data-layer={"237:48909/237:48911"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48912": return (<Root {...rootAttributes} className={[s.n47,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48912"} data-name={"Action=selected, Size=S, state=disabled"}>
  <span className={s.n11} data-layer={"237:48912/237:48913"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-4.46235e-05 1.04914 L2.15559 3.19248 L5.3527 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.0666667222976685} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48914": return (<Root {...rootAttributes} className={[s.n48,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48914"} data-name={"Action=selected, Size=S, state=hard validation"}>
  <span className={s.n11} data-layer={"237:48914/237:48915"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-4.46235e-05 1.04914 L2.15559 3.19248 L5.3527 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.0666667222976685} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "237:48916": return (<Root {...rootAttributes} className={[s.n13,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48916"} data-name={"Action=un selected, Size=S, state=focus"}>
  <span className={s.n36} data-layer={"237:48916/237:48918"} data-name={"Rectangle 2"}></span>
</Root>);
case "237:48919": return (<Root {...rootAttributes} className={[s.n49,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48919"} data-name={"Action=un selected, Size=S, state=disabled"}></Root>);
case "237:48921": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:48921"} data-name={"Action=un selected, Size=S, state=hard validation"}></Root>);
  default: return null;
  }
}
