// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './IconVarTableDesign237_50371.module.css';
export const variants = [
  {
    "id": "237:50372",
    "name": "Part=1, size=18",
    "props": {
      "Part": "1",
      "size": "18"
    }
  },
  {
    "id": "237:50373",
    "name": "Part=1, size=16",
    "props": {
      "Part": "1",
      "size": "16"
    }
  },
  {
    "id": "237:50374",
    "name": "Part=3, size=18",
    "props": {
      "Part": "3",
      "size": "18"
    }
  },
  {
    "id": "237:50375",
    "name": "Part=3, size=16",
    "props": {
      "Part": "3",
      "size": "16"
    }
  },
  {
    "id": "237:50376",
    "name": "Part=2, size=18",
    "props": {
      "Part": "2",
      "size": "18"
    }
  },
  {
    "id": "237:50377",
    "name": "Part=2, size=16",
    "props": {
      "Part": "2",
      "size": "16"
    }
  }
] as const;
export type IconVarTableDesign237_50371Variant = typeof variants[number]["id"];
export interface IconVarTableDesign237_50371Dimensions {
  "Part"?: "1" | "2" | "3";
  "size"?: "16" | "18";
}
export interface IconVarTableDesign237_50371Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: IconVarTableDesign237_50371Variant;
  variantProps?: IconVarTableDesign237_50371Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: IconVarTableDesign237_50371Variant) => void;
}
const transitions = {};
export function IconVarTableDesign237_50371({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: IconVarTableDesign237_50371Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "237:50372": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50372"} data-name={"Part=1, size=18"}>
  <span className={s.n1} data-layer={"237:50372/237:50378"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"237:50372/237:50378/227:435"} data-name={"Polygon 2"}>
      <svg width="100%" height="100%" viewBox="0 0 10.1925 6.53438" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.44318 0.29496 C4.78975 -0.09832 5.40275 -0.09832 5.74932 0.29496 L9.97341 5.08842 C10.46881 5.65059 10.06965 6.53438 9.32034 6.53438 L0.87216 6.53438 C0.12285 6.53438 -0.27631 5.65059 0.21909 5.08842 L4.44318 0.29496 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1} data-layer={"237:50372/237:50378/227:436"} data-name={"Rectangle 3591"}></span>
  </span>
</Root>);
case "237:50373": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50373"} data-name={"Part=1, size=16"}>
  <span className={s.n4} data-layer={"237:50373/237:50379"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"237:50373/237:50379/227:511"} data-name={"Polygon 2"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06 5.80834" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.94949 0.26219 C4.25755 -0.0874 4.80245 -0.0874 5.11051 0.26219 L8.86526 4.52304 C9.30561 5.02275 8.9508 5.80834 8.28475 5.80834 L0.77525 5.80834 C0.1092 5.80834 -0.24561 5.02275 0.19474 4.52304 L3.94949 0.26219 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n4} data-layer={"237:50373/237:50379/227:512"} data-name={"Rectangle 3591"}></span>
  </span>
</Root>);
case "237:50374": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50374"} data-name={"Part=3, size=18"}>
  <span className={s.n1} data-layer={"237:50374/237:50380"} data-name={"icon/set/base"}>
    <span className={s.n6} data-layer={"237:50374/237:50380/227:442"} data-name={"Polygon 1"}>
      <svg width="100%" height="100%" viewBox="0 0 10.1925 6.53438" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.44318 0.29496 C4.78975 -0.09832 5.40275 -0.09832 5.74932 0.29496 L9.97341 5.08842 C10.46881 5.65059 10.06965 6.53438 9.32034 6.53438 L0.87216 6.53438 C0.12285 6.53438 -0.27631 5.65059 0.21909 5.08842 L4.44318 0.29496 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1} data-layer={"237:50374/237:50380/227:443"} data-name={"Rectangle 3590"}></span>
  </span>
</Root>);
case "237:50375": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50375"} data-name={"Part=3, size=16"}>
  <span className={s.n4} data-layer={"237:50375/237:50381"} data-name={"icon/set/base"}>
    <span className={s.n7} data-layer={"237:50375/237:50381/227:518"} data-name={"Polygon 1"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06 5.80834" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.94949 0.26219 C4.25755 -0.0874 4.80245 -0.0874 5.11051 0.26219 L8.86526 4.52304 C9.30561 5.02275 8.9508 5.80834 8.28475 5.80834 L0.77525 5.80834 C0.1092 5.80834 -0.24561 5.02275 0.19474 4.52304 L3.94949 0.26219 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n4} data-layer={"237:50375/237:50381/227:519"} data-name={"Rectangle 3590"}></span>
  </span>
</Root>);
case "237:50376": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50376"} data-name={"Part=2, size=18"}>
  <span className={s.n1} data-layer={"237:50376/237:50382"} data-name={"icon/set/base"}>
    <span className={s.n1} data-layer={"237:50376/237:50382/227:439"} data-name={"Rectangle 3591"}></span>
    <span className={s.n8} data-layer={"237:50376/237:50382/227:440"} data-name={"Ellipse 3161"}></span>
  </span>
</Root>);
case "237:50377": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50377"} data-name={"Part=2, size=16"}>
  <span className={s.n4} data-layer={"237:50377/237:50383"} data-name={"icon/set/base"}>
    <span className={s.n4} data-layer={"237:50377/237:50383/227:515"} data-name={"Rectangle 3591"}></span>
    <span className={s.n9} data-layer={"237:50377/237:50383/227:516"} data-name={"Ellipse 3161"}></span>
  </span>
</Root>);
  default: return null;
  }
}
