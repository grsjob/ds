// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './Section13Design227_70144.module.css';
export const variants = [
  {
    "id": "227:70580",
    "name": "comment_fill",
    "props": {}
  },
  {
    "id": "227:70586",
    "name": "Chat_alt_fill",
    "props": {}
  }
] as const;
export type Section13Design227_70144Variant = typeof variants[number]["id"];
export interface Section13Design227_70144Dimensions {

}
export interface Section13Design227_70144Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: Section13Design227_70144Variant;
  variantProps?: Section13Design227_70144Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: Section13Design227_70144Variant) => void;
}
const transitions = {};
export function Section13Design227_70144({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: Section13Design227_70144Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:70580": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70580"} data-name={"comment_fill"}>
  <span className={s.n1} data-layer={"227:70580/227:70581"} data-name={"Subtract"}>
    <svg width="100%" height="100%" viewBox="0 0 18 16.58779" overflow="visible" aria-hidden="true" focusable="false"><path d={"M11.59961 0 C13.83982 0 14.96076 -0.00043 15.81641 0.43555 C16.56891 0.81902 17.18098 1.43109 17.56445 2.18359 C18.00043 3.03924 18 4.16018 18 6.40039 L18 7.59961 C18 9.83982 18.00043 10.96076 17.56445 11.81641 C17.18098 12.56891 16.56891 13.18098 15.81641 13.56445 C14.96076 14.00043 13.83982 14 11.59961 14 L4.41406 14 C4.1489 14.00004 3.89453 14.10547 3.70703 14.29297 L1.70703 16.29297 C1.07709 16.92279 0.00012 16.47671 0 15.58594 L0 6.40039 C-0 4.16018 -0.00043 3.03924 0.43555 2.18359 C0.81902 1.43109 1.43109 0.81902 2.18359 0.43555 C3.03924 -0.00043 4.16018 -0 6.40039 0 L11.59961 0 Z M6 8 C5.44772 8 5 8.44772 5 9 C5 9.55228 5.44772 10 6 10 L9 10 C9.55228 10 10 9.55228 10 9 C10 8.44772 9.55228 8 9 8 L6 8 Z M6 4 C5.44772 4 5 4.44772 5 5 C5 5.55228 5.44772 6 6 6 L12 6 C12.55228 6 13 5.55228 13 5 C13 4.44772 12.55228 4 12 4 L6 4 Z"} fill={"rgba(34,34,34,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:70586": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70586"} data-name={"Chat_alt_fill"}>
  <span className={s.n2} data-layer={"227:70586/227:70587"} data-name={"Subtract"}>
    <svg width="100%" height="100%" viewBox="0 0 18 18" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9 0 C11.7956 0 13.19328 0.00033 14.2959 0.45703 C15.76607 1.06599 16.93401 2.23393 17.54297 3.7041 C17.99967 4.80672 18 6.2044 18 9 C18 11.7956 17.99967 13.19328 17.54297 14.2959 C16.93401 15.76607 15.76607 16.93401 14.2959 17.54297 C13.19328 17.99967 11.7956 18 9 18 L6 18 C3.17157 18 1.75759 17.99977 0.87891 17.12109 C0.00023 16.24241 0 14.82843 0 12 L0 9 C0 6.2044 0.00033 4.80672 0.45703 3.7041 C1.06599 2.23393 2.23393 1.06599 3.7041 0.45703 C4.80672 0.00033 6.2044 0 9 0 Z M6 10 C5.44772 10 5 10.44771 5 11 C5.00018 11.55213 5.44783 12 6 12 L9 12 C9.55217 12 9.99982 11.55213 10 11 C10 10.44771 9.55228 10 9 10 L6 10 Z M6 6 C5.44772 6 5 6.44772 5 7 C5.00018 7.55213 5.44783 8 6 8 L12 8 C12.55217 8 12.99982 7.55213 13 7 C13 6.44772 12.55228 6 12 6 L6 6 Z"} fill={"rgba(34,34,34,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
  default: return null;
  }
}
