// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './InterfaceEssentialChat1Design227_5718.module.css';
export const variants = [
  {
    "id": "227:5719",
    "name": "Style=Filled",
    "props": {
      "Style": "Filled"
    }
  },
  {
    "id": "227:5721",
    "name": "Style=Outlined",
    "props": {
      "Style": "Outlined"
    }
  }
] as const;
export type InterfaceEssentialChat1Design227_5718Variant = typeof variants[number]["id"];
export interface InterfaceEssentialChat1Design227_5718Dimensions {
  "Style"?: "Filled" | "Outlined";
}
export interface InterfaceEssentialChat1Design227_5718Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: InterfaceEssentialChat1Design227_5718Variant;
  variantProps?: InterfaceEssentialChat1Design227_5718Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: InterfaceEssentialChat1Design227_5718Variant) => void;
}
const transitions = {};
export function InterfaceEssentialChat1Design227_5718({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: InterfaceEssentialChat1Design227_5718Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:5719": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:5719"} data-name={"Style=Filled"}>
  <span className={s.n1} data-layer={"227:5719/227:5720"} data-name={"Icon"}>
    <svg width="100%" height="100%" viewBox="0 0 20.19 19.8104" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.1 0.00107 L15.15 0.00107 C17.8694 -0.02191 20.10851 2.13279 20.19 4.85107 L20.19 12.13107 C20.10845 14.85327 17.86327 17.00952 15.14 16.98107 L13.58 16.98107 C13.19138 16.98227 12.82402 17.15861 12.58 17.46107 L11.1 19.34107 C10.85302 19.6384 10.48653 19.8104 10.1 19.8104 C9.71347 19.8104 9.34698 19.6384 9.1 19.34107 L7.61 17.46107 C7.36598 17.15861 6.99862 16.98227 6.61 16.98107 L5.1 16.98107 C2.35739 17.03715 0.08172 14.87303 0 12.13107 L0 4.85107 C0.08172 2.1091 2.35739 -0.05502 5.1 0.00107 Z M6.35 10.48107 C6.76421 10.48107 7.1 10.14528 7.1 9.73107 L7.1 7.33107 C7.1 6.91685 6.76421 6.58107 6.35 6.58107 C5.93579 6.58107 5.6 6.91685 5.6 7.33107 L5.6 9.73107 C5.6 10.14528 5.93579 10.48107 6.35 10.48107 Z M10.85 9.73107 C10.85 10.14528 10.51421 10.48107 10.1 10.48107 C9.68579 10.48107 9.35 10.14528 9.35 9.73107 L9.35 7.33107 C9.35 6.91685 9.68579 6.58107 10.1 6.58107 C10.51421 6.58107 10.85 6.91685 10.85 7.33107 L10.85 9.73107 Z M13.85 10.48107 C14.26421 10.48107 14.6 10.14528 14.6 9.73107 L14.6 7.33107 C14.6 6.91685 14.26421 6.58107 13.85 6.58107 C13.43579 6.58107 13.1 6.91685 13.1 7.33107 L13.1 9.73107 C13.1 10.14528 13.43579 10.48107 13.85 10.48107 Z"} fill={"rgba(0,0,0,1)"} fillRule="evenodd"/></svg>
  </span>
</Root>);
case "227:5721": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:5721"} data-name={"Style=Outlined"}>
  <span className={s.n2} data-layer={"227:5721/227:5722"} data-name={"Icon"}>
    <svg width="100%" height="100%" viewBox="0 0 21.03 20.58369" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.24 0.00222 L15.74 0.00222 C17.11183 -0.03808 18.44281 0.47191 19.43646 1.4186 C20.43011 2.36529 21.00389 3.67004 21.03 5.04222 L21.03 12.63222 C20.94826 15.45306 18.61157 17.68272 15.79 17.63222 L14.17 17.63222 C13.7628 17.63329 13.3775 17.81676 13.12 18.13222 L11.59 20.08222 C11.3337 20.39938 10.94777 20.58369 10.54 20.58369 C10.13223 20.58369 9.7463 20.39938 9.49 20.08222 L7.91 18.09222 C7.6525 17.77676 7.2672 17.59329 6.86 17.59222 L5.24 17.59222 C2.41843 17.64272 0.08174 15.41306 0 12.59222 L0 5.00222 C0.07637 2.17899 2.4163 -0.05376 5.24 0.00222 Z M15.75 16.13222 C17.75848 16.18265 19.43008 14.60044 19.49 12.59222 L19.49 5.04222 C19.43011 3.02999 17.75234 1.44617 15.74 1.50222 L5.24 1.50222 C3.22766 1.44617 1.54989 3.02999 1.49 5.04222 L1.49 12.59222 C1.54989 14.60445 3.22766 16.18826 5.24 16.13222 L6.86 16.13222 C7.7271 16.1324 8.5473 16.52595 9.09 17.20222 L10.49 18.98222 L11.89 17.20222 C12.4327 16.52595 13.2529 16.1324 14.12 16.13222 L15.75 16.13222 Z"} fill={"rgba(0,0,0,1)"} fillRule="evenodd"/><path d={"M6.74 6.96222 C6.32579 6.96222 5.99 7.29801 5.99 7.71222 L5.99 10.11222 C5.99 10.52643 6.32579 10.86222 6.74 10.86222 C7.15421 10.86222 7.49 10.52643 7.49 10.11222 L7.49 7.71222 C7.49 7.29801 7.15421 6.96222 6.74 6.96222 Z"} fill={"rgba(0,0,0,1)"} fillRule="nonzero"/><path d={"M10.49 6.96222 C10.07579 6.96222 9.74 7.29801 9.74 7.71222 L9.74 10.11222 C9.74 10.52643 10.07579 10.86222 10.49 10.86222 C10.90421 10.86222 11.24 10.52643 11.24 10.11222 L11.24 7.71222 C11.24 7.29801 10.90421 6.96222 10.49 6.96222 Z"} fill={"rgba(0,0,0,1)"} fillRule="nonzero"/><path d={"M14.24 6.96222 C13.82579 6.96222 13.49 7.29801 13.49 7.71222 L13.49 10.11222 C13.49 10.52643 13.82579 10.86222 14.24 10.86222 C14.65421 10.86222 14.99 10.52643 14.99 10.11222 L14.99 7.71222 C14.99 7.29801 14.65421 6.96222 14.24 6.96222 Z"} fill={"rgba(0,0,0,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
  default: return null;
  }
}
