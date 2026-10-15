// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './IconButtonCastDesign227_2490.module.css';
export const variants = [
  {
    "id": "227:2491",
    "name": "State=on, Hover=off, sceleton=off",
    "props": {
      "State": "on",
      "Hover": "off",
      "sceleton": "off"
    }
  },
  {
    "id": "227:2493",
    "name": "State=on, Hover=off, sceleton=on",
    "props": {
      "State": "on",
      "Hover": "off",
      "sceleton": "on"
    }
  },
  {
    "id": "227:2494",
    "name": "State=on, Hover=on, sceleton=off",
    "props": {
      "State": "on",
      "Hover": "on",
      "sceleton": "off"
    }
  },
  {
    "id": "227:2496",
    "name": "State=off, Hover=off, sceleton=off",
    "props": {
      "State": "off",
      "Hover": "off",
      "sceleton": "off"
    }
  },
  {
    "id": "227:2498",
    "name": "State=off, Hover=on, sceleton=off",
    "props": {
      "State": "off",
      "Hover": "on",
      "sceleton": "off"
    }
  }
] as const;
export type IconButtonCastDesign227_2490Variant = typeof variants[number]["id"];
export interface IconButtonCastDesign227_2490Dimensions {
  "State"?: "off" | "on";
  "Hover"?: "off" | "on";
  "sceleton"?: "off" | "on";
}
export interface IconButtonCastDesign227_2490Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: IconButtonCastDesign227_2490Variant;
  variantProps?: IconButtonCastDesign227_2490Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: IconButtonCastDesign227_2490Variant) => void;
}
const transitions = {"227:2491":{"ON_HOVER":"227:2494"},"227:2493":{"ON_HOVER":"227:2494"},"227:2496":{"ON_HOVER":"227:2498"}};
export function IconButtonCastDesign227_2490({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="button",disabled,...attributes}: IconButtonCastDesign227_2490Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:2491": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2491"} data-name={"State=on, Hover=off, sceleton=off"}>
  <span className={s.n1} data-layer={"227:2491/227:2492"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:2491/227:2492/227:317"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 18 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18 6 L18.66564 6.99846 C18.99948 6.7759 19.2 6.40122 19.2 6 C19.2 5.59878 18.99948 5.2241 18.66564 5.00154 L18 6 Z M9 12 L8.33436 12.99846 C8.73744 13.26718 9.26256 13.26718 9.66564 12.99846 L9 12 Z M0 6 L-0.66564 5.00154 C-0.99948 5.2241 -1.2 5.59878 -1.2 6 C-1.2 6.40122 -0.99948 6.7759 -0.66564 6.99846 L0 6 Z M9 0 L9.66564 -0.99846 C9.26256 -1.26718 8.73744 -1.26718 8.33436 -0.99846 L9 0 Z M18.66564 10.99846 C19.21708 10.63084 19.36608 9.88579 18.99846 9.33436 C18.63084 8.78293 17.88579 8.63392 17.33436 9.00154 L18 10 L18.66564 10.99846 Z M9 16 L8.33436 16.99846 C8.73744 17.26718 9.26256 17.26718 9.66564 16.99846 L9 16 Z M0.66564 9.00154 C0.11421 8.63392 -0.63084 8.78293 -0.99846 9.33436 C-1.36608 9.88579 -1.21707 10.63084 -0.66564 10.99846 L0 10 L0.66564 9.00154 Z M18 6 L17.33436 5.00154 L8.33436 11.00154 L9 12 L9.66564 12.99846 L18.66564 6.99846 L18 6 Z M9 12 L9.66564 11.00154 L0.66564 5.00154 L0 6 L-0.66564 6.99846 L8.33436 12.99846 L9 12 Z M0 6 L0.66564 6.99846 L9.66564 0.99846 L9 0 L8.33436 -0.99846 L-0.66564 5.00154 L0 6 Z M9 0 L8.33436 0.99846 L17.33436 6.99846 L18 6 L18.66564 5.00154 L9.66564 -0.99846 L9 0 Z M18 10 L17.33436 9.00154 L8.33436 15.00154 L9 16 L9.66564 16.99846 L18.66564 10.99846 L18 10 Z M9 16 L9.66564 15.00154 L0.66564 9.00154 L0 10 L-0.66564 10.99846 L8.33436 16.99846 L9 16 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2493": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2493"} data-name={"State=on, Hover=off, sceleton=on"}></Root>);
case "227:2494": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2494"} data-name={"State=on, Hover=on, sceleton=off"}>
  <span className={s.n1} data-layer={"227:2494/227:2495"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:2494/227:2495/227:317"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 18 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18 6 L18.66564 6.99846 C18.99948 6.7759 19.2 6.40122 19.2 6 C19.2 5.59878 18.99948 5.2241 18.66564 5.00154 L18 6 Z M9 12 L8.33436 12.99846 C8.73744 13.26718 9.26256 13.26718 9.66564 12.99846 L9 12 Z M0 6 L-0.66564 5.00154 C-0.99948 5.2241 -1.2 5.59878 -1.2 6 C-1.2 6.40122 -0.99948 6.7759 -0.66564 6.99846 L0 6 Z M9 0 L9.66564 -0.99846 C9.26256 -1.26718 8.73744 -1.26718 8.33436 -0.99846 L9 0 Z M18.66564 10.99846 C19.21708 10.63084 19.36608 9.88579 18.99846 9.33436 C18.63084 8.78293 17.88579 8.63392 17.33436 9.00154 L18 10 L18.66564 10.99846 Z M9 16 L8.33436 16.99846 C8.73744 17.26718 9.26256 17.26718 9.66564 16.99846 L9 16 Z M0.66564 9.00154 C0.11421 8.63392 -0.63084 8.78293 -0.99846 9.33436 C-1.36608 9.88579 -1.21707 10.63084 -0.66564 10.99846 L0 10 L0.66564 9.00154 Z M18 6 L17.33436 5.00154 L8.33436 11.00154 L9 12 L9.66564 12.99846 L18.66564 6.99846 L18 6 Z M9 12 L9.66564 11.00154 L0.66564 5.00154 L0 6 L-0.66564 6.99846 L8.33436 12.99846 L9 12 Z M0 6 L0.66564 6.99846 L9.66564 0.99846 L9 0 L8.33436 -0.99846 L-0.66564 5.00154 L0 6 Z M9 0 L8.33436 0.99846 L17.33436 6.99846 L18 6 L18.66564 5.00154 L9.66564 -0.99846 L9 0 Z M18 10 L17.33436 9.00154 L8.33436 15.00154 L9 16 L9.66564 16.99846 L18.66564 10.99846 L18 10 Z M9 16 L9.66564 15.00154 L0.66564 9.00154 L0 10 L-0.66564 10.99846 L8.33436 16.99846 L9 16 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2496": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2496"} data-name={"State=off, Hover=off, sceleton=off"}>
  <span className={s.n1} data-layer={"227:2496/227:2497"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:2496/227:2497/227:317"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 18 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18 6 L18.66564 6.99846 C18.99948 6.7759 19.2 6.40122 19.2 6 C19.2 5.59878 18.99948 5.2241 18.66564 5.00154 L18 6 Z M9 12 L8.33436 12.99846 C8.73744 13.26718 9.26256 13.26718 9.66564 12.99846 L9 12 Z M0 6 L-0.66564 5.00154 C-0.99948 5.2241 -1.2 5.59878 -1.2 6 C-1.2 6.40122 -0.99948 6.7759 -0.66564 6.99846 L0 6 Z M9 0 L9.66564 -0.99846 C9.26256 -1.26718 8.73744 -1.26718 8.33436 -0.99846 L9 0 Z M18.66564 10.99846 C19.21708 10.63084 19.36608 9.88579 18.99846 9.33436 C18.63084 8.78293 17.88579 8.63392 17.33436 9.00154 L18 10 L18.66564 10.99846 Z M9 16 L8.33436 16.99846 C8.73744 17.26718 9.26256 17.26718 9.66564 16.99846 L9 16 Z M0.66564 9.00154 C0.11421 8.63392 -0.63084 8.78293 -0.99846 9.33436 C-1.36608 9.88579 -1.21707 10.63084 -0.66564 10.99846 L0 10 L0.66564 9.00154 Z M18 6 L17.33436 5.00154 L8.33436 11.00154 L9 12 L9.66564 12.99846 L18.66564 6.99846 L18 6 Z M9 12 L9.66564 11.00154 L0.66564 5.00154 L0 6 L-0.66564 6.99846 L8.33436 12.99846 L9 12 Z M0 6 L0.66564 6.99846 L9.66564 0.99846 L9 0 L8.33436 -0.99846 L-0.66564 5.00154 L0 6 Z M9 0 L8.33436 0.99846 L17.33436 6.99846 L18 6 L18.66564 5.00154 L9.66564 -0.99846 L9 0 Z M18 10 L17.33436 9.00154 L8.33436 15.00154 L9 16 L9.66564 16.99846 L18.66564 10.99846 L18 10 Z M9 16 L9.66564 15.00154 L0.66564 9.00154 L0 10 L-0.66564 10.99846 L8.33436 16.99846 L9 16 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2498": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2498"} data-name={"State=off, Hover=on, sceleton=off"}>
  <span className={s.n1} data-layer={"227:2498/227:2499"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:2498/227:2499/227:317"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 18 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18 6 L18.66564 6.99846 C18.99948 6.7759 19.2 6.40122 19.2 6 C19.2 5.59878 18.99948 5.2241 18.66564 5.00154 L18 6 Z M9 12 L8.33436 12.99846 C8.73744 13.26718 9.26256 13.26718 9.66564 12.99846 L9 12 Z M0 6 L-0.66564 5.00154 C-0.99948 5.2241 -1.2 5.59878 -1.2 6 C-1.2 6.40122 -0.99948 6.7759 -0.66564 6.99846 L0 6 Z M9 0 L9.66564 -0.99846 C9.26256 -1.26718 8.73744 -1.26718 8.33436 -0.99846 L9 0 Z M18.66564 10.99846 C19.21708 10.63084 19.36608 9.88579 18.99846 9.33436 C18.63084 8.78293 17.88579 8.63392 17.33436 9.00154 L18 10 L18.66564 10.99846 Z M9 16 L8.33436 16.99846 C8.73744 17.26718 9.26256 17.26718 9.66564 16.99846 L9 16 Z M0.66564 9.00154 C0.11421 8.63392 -0.63084 8.78293 -0.99846 9.33436 C-1.36608 9.88579 -1.21707 10.63084 -0.66564 10.99846 L0 10 L0.66564 9.00154 Z M18 6 L17.33436 5.00154 L8.33436 11.00154 L9 12 L9.66564 12.99846 L18.66564 6.99846 L18 6 Z M9 12 L9.66564 11.00154 L0.66564 5.00154 L0 6 L-0.66564 6.99846 L8.33436 12.99846 L9 12 Z M0 6 L0.66564 6.99846 L9.66564 0.99846 L9 0 L8.33436 -0.99846 L-0.66564 5.00154 L0 6 Z M9 0 L8.33436 0.99846 L17.33436 6.99846 L18 6 L18.66564 5.00154 L9.66564 -0.99846 L9 0 Z M18 10 L17.33436 9.00154 L8.33436 15.00154 L9 16 L9.66564 16.99846 L18.66564 10.99846 L18 10 Z M9 16 L9.66564 15.00154 L0.66564 9.00154 L0 10 L-0.66564 10.99846 L8.33436 16.99846 L9 16 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
