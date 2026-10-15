// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './IconSetFilledDesign227_1683.module.css';
export const variants = [
  {
    "id": "227:1684",
    "name": "name=pointer positive, Size=18",
    "props": {
      "name": "pointer positive",
      "Size": "18"
    }
  },
  {
    "id": "227:1687",
    "name": "name=Comment, Size=20",
    "props": {
      "name": "Comment",
      "Size": "20"
    }
  },
  {
    "id": "227:1693",
    "name": "name=pointer positive, Size=16",
    "props": {
      "name": "pointer positive",
      "Size": "16"
    }
  },
  {
    "id": "227:1696",
    "name": "name=building, Size=20",
    "props": {
      "name": "building",
      "Size": "20"
    }
  },
  {
    "id": "229:48880",
    "name": "name=location, Size=20",
    "props": {
      "name": "location",
      "Size": "20"
    }
  },
  {
    "id": "229:48884",
    "name": "name=location, Size=32",
    "props": {
      "name": "location",
      "Size": "32"
    }
  },
  {
    "id": "229:48888",
    "name": "name=fiz, Size=20",
    "props": {
      "name": "fiz",
      "Size": "20"
    }
  },
  {
    "id": "229:48892",
    "name": "name=vip, Size=20",
    "props": {
      "name": "vip",
      "Size": "20"
    }
  },
  {
    "id": "229:48895",
    "name": "name=jur, Size=20",
    "props": {
      "name": "jur",
      "Size": "20"
    }
  },
  {
    "id": "229:48899",
    "name": "name=time, Size=20",
    "props": {
      "name": "time",
      "Size": "20"
    }
  },
  {
    "id": "229:48903",
    "name": "name=directory, Size=20",
    "props": {
      "name": "directory",
      "Size": "20"
    }
  },
  {
    "id": "229:48905",
    "name": "name=Divide, Size=20",
    "props": {
      "name": "Divide",
      "Size": "20"
    }
  },
  {
    "id": "229:48911",
    "name": "name=error, Size=16",
    "props": {
      "name": "error",
      "Size": "16"
    }
  },
  {
    "id": "229:48913",
    "name": "name=no accept, Size=16",
    "props": {
      "name": "no accept",
      "Size": "16"
    }
  },
  {
    "id": "229:48919",
    "name": "name=soft error, Size=16",
    "props": {
      "name": "soft error",
      "Size": "16"
    }
  },
  {
    "id": "229:48921",
    "name": "name=accept, Size=16",
    "props": {
      "name": "accept",
      "Size": "16"
    }
  },
  {
    "id": "229:48924",
    "name": "name=time, Size=16",
    "props": {
      "name": "time",
      "Size": "16"
    }
  },
  {
    "id": "229:48931",
    "name": "name=time 2, Size=16",
    "props": {
      "name": "time 2",
      "Size": "16"
    }
  },
  {
    "id": "229:48938",
    "name": "name=pointer negative, Size=16",
    "props": {
      "name": "pointer negative",
      "Size": "16"
    }
  },
  {
    "id": "229:48941",
    "name": "name=pointer negative, Size=18",
    "props": {
      "name": "pointer negative",
      "Size": "18"
    }
  },
  {
    "id": "233:3265",
    "name": "name=Comment, Size=22",
    "props": {
      "name": "Comment",
      "Size": "22"
    }
  }
] as const;
export type IconSetFilledDesign227_1683Variant = typeof variants[number]["id"];
export interface IconSetFilledDesign227_1683Dimensions {
  "name"?: "Comment" | "Divide" | "accept" | "building" | "directory" | "error" | "fiz" | "jur" | "location" | "no accept" | "pointer negative" | "pointer positive" | "soft error" | "time" | "time 2" | "vip";
  "Size"?: "16" | "18" | "20" | "22" | "32";
}
export interface IconSetFilledDesign227_1683Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: IconSetFilledDesign227_1683Variant;
  variantProps?: IconSetFilledDesign227_1683Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: IconSetFilledDesign227_1683Variant) => void;
}
const transitions = {};
export function IconSetFilledDesign227_1683({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: IconSetFilledDesign227_1683Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1684": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1684"} data-name={"name=pointer positive, Size=18"}>
  <span className={s.n1} data-layer={"227:1684/227:1685"} data-name={"Vector"}></span>
  <span className={s.n2} data-layer={"227:1684/227:1686"} data-name={"Polygon 1"}>
    <svg width="100%" height="100%" viewBox="0 0 14.34375 9.19573" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.25282 0.41509 C6.74054 -0.13837 7.60321 -0.13836 8.09093 0.41509 L14.03543 7.16085 C14.7326 7.95199 14.17086 9.19573 13.11637 9.19573 L1.22737 9.19573 C0.17289 9.19573 -0.38885 7.95199 0.30832 7.16085 L6.25282 0.41509 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1687": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1687"} data-name={"name=Comment, Size=20"}>
  <span className={s.n4} data-layer={"227:1687/227:1688"} data-name={"Subtract"}>
    <svg width="100%" height="100%" viewBox="0 0 15 15" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.5 0 C11.64214 0 15 3.35786 15 7.5 L15 11.25 C15 12.41485 14.99987 12.9976 14.80957 13.45703 C14.55584 14.06934 14.06934 14.55584 13.45703 14.80957 C12.9976 14.99987 12.41485 15 11.25 15 L7.5 15 C3.35786 15 0 11.64214 0 7.5 C0 3.35786 3.35786 0 7.5 0 Z M7.5 9.16602 C7.03987 9.16602 6.66717 9.53894 6.66699 9.99902 C6.66699 10.45926 7.03976 10.83203 7.5 10.83203 L10 10.83203 C10.46009 10.83186 10.83301 10.45915 10.83301 9.99902 C10.83283 9.53904 10.45998 9.16619 10 9.16602 L7.5 9.16602 Z M5 5.83301 C4.53987 5.83301 4.16717 6.20593 4.16699 6.66602 C4.16717 7.1261 4.53987 7.49902 5 7.49902 L10 7.49902 C10.45998 7.49885 10.83283 7.12599 10.83301 6.66602 C10.83283 6.20604 10.45998 5.83318 10 5.83301 L5 5.83301 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1693": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1693"} data-name={"name=pointer positive, Size=16"}>
  <span className={s.n6} data-layer={"227:1693/227:1694"} data-name={"Vector"}></span>
  <span className={s.n7} data-layer={"227:1693/227:1695"} data-name={"Polygon 1"}>
    <svg width="100%" height="100%" viewBox="0 0 12.75 8.17398" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.55806 0.36897 C5.99159 -0.12299 6.75841 -0.12299 7.19194 0.36897 L12.47594 6.3652 C13.09564 7.06844 12.59632 8.17398 11.659 8.17398 L1.091 8.17398 C0.15368 8.17398 -0.34564 7.06844 0.27406 6.3652 L5.55806 0.36897 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1696": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1696"} data-name={"name=building, Size=20"}>
  <span className={s.n8} data-layer={"227:1696/227:1698"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 4.25832 3.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.25832 0 C4.19165 0.25 4.16667 0.525 4.16667 0.83333 L4.16667 3.33333 L0 3.33333 L0 1.66667 C0 0.75 0.75 0 1.66667 0 L4.25832 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n9} data-layer={"227:1696/227:1699"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 9.16667 11.66667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 9.16667 L6.66667 0 L2.5 0 C0.83333 0 0 0.83333 0 2.5 L0 9.16667 C0 10.83333 0.83333 11.66667 2.5 11.66667 L9.16667 11.66667 C7.5 11.66667 6.66667 10.83333 6.66667 9.16667 Z M3.95833 7.5 C3.95833 7.84167 3.675 8.125 3.33333 8.125 C2.99167 8.125 2.70833 7.84167 2.70833 7.5 L2.70833 4.16667 C2.70833 3.825 2.99167 3.54167 3.33333 3.54167 C3.675 3.54167 3.95833 3.825 3.95833 4.16667 L3.95833 7.5 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n10} data-layer={"227:1696/227:1700"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 10 16.66667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.33333 16.66667 L2.5 16.66667 C0.83333 16.66667 0 15.83333 0 14.16667 L0 2.5 C0 0.83333 0.83333 0 2.5 0 L7.5 0 C9.16667 0 10 0.83333 10 2.5 L10 14.16667 C10 15.83333 9.16667 16.66667 7.5 16.66667 L6.66667 16.66667"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n11} data-layer={"227:1696/227:1701"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 3.33333 4.16667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.33333 0.83333 L3.33333 4.16667 L0 4.16667 L0 0.83333 C0 0.375 0.375 0 0.83333 0 L2.5 0 C2.95833 0 3.33333 0.375 3.33333 0.83333 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"227:1696/227:1702"} data-name={"Group"}>
    <span className={s.n13} data-layer={"227:1696/227:1702/227:1703"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 1.25 5.41667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.625 5.41667 C0.28333 5.41667 0 5.13333 0 4.79167 L0 0.625 C0 0.28333 0.28333 0 0.625 0 C0.96667 0 1.25 0.28333 1.25 0.625 L1.25 4.79167 C1.25 5.13333 0.96667 5.41667 0.625 5.41667 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:1696/227:1704"} data-name={"Group"}>
    <span className={s.n13} data-layer={"227:1696/227:1704/227:1705"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 1.25 5.41667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.625 5.41667 C0.28333 5.41667 0 5.13333 0 4.79167 L0 0.625 C0 0.28333 0.28333 0 0.625 0 C0.96667 0 1.25 0.28333 1.25 0.625 L1.25 4.79167 C1.25 5.13333 0.96667 5.41667 0.625 5.41667 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "229:48880": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48880"} data-name={"name=location, Size=20"}>
  <span className={s.n15} data-layer={"229:48880/229:48881"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 14.79163 17.08333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.5833 5.58333 C13.7083 1.73333 10.35 0 7.39998 0 C7.39998 0 7.39998 0 7.39165 0 C4.44998 0 1.08332 1.725 0.208315 5.575 C-0.766685 9.875 1.86665 13.5167 4.24998 15.8083 C5.13332 16.6583 6.26665 17.0833 7.39998 17.0833 C8.53332 17.0833 9.66665 16.6583 10.5416 15.8083 C12.925 13.5167 15.5583 9.88333 14.5833 5.58333 Z M7.39998 9.75833 C5.94998 9.75833 4.77498 8.58333 4.77498 7.13333 C4.77498 5.68333 5.94998 4.50833 7.39998 4.50833 C8.84998 4.50833 10.025 5.68333 10.025 7.13333 C10.025 8.58333 8.84998 9.75833 7.39998 9.75833 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48884": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48884"} data-name={"name=location, Size=32"}>
  <span className={s.n17} data-layer={"229:48884/229:48885"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 23.66661 27.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M23.3333 8.93333 C21.9333 2.77333 16.56 0 11.84 0 C11.84 0 11.84 0 11.8266 0 C7.11997 0 1.7333 2.76 0.333304 8.92 C-1.2267 15.8 2.98664 21.6267 6.79997 25.2933 C8.2133 26.6533 10.0266 27.3333 11.84 27.3333 C13.6533 27.3333 15.4666 26.6533 16.8666 25.2933 C20.68 21.6267 24.8933 15.8133 23.3333 8.93333 Z M11.84 15.6133 C9.51997 15.6133 7.63997 13.7333 7.63997 11.4133 C7.63997 9.09333 9.51997 7.21333 11.84 7.21333 C14.16 7.21333 16.04 9.09333 16.04 11.4133 C16.04 13.7333 14.16 15.6133 11.84 15.6133 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48888": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48888"} data-name={"name=fiz, Size=20"}>
  <span className={s.n18} data-layer={"229:48888/229:48889"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 7.91667 7.90833" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.95833 0 C1.775 0 0 1.775 0 3.95833 C0 6.1 1.675 7.83333 3.85833 7.90833 C3.925 7.9 3.99167 7.9 4.04167 7.90833 C4.05833 7.90833 4.06667 7.90833 4.08333 7.90833 C4.09167 7.90833 4.09167 7.90833 4.1 7.90833 C6.23333 7.83333 7.90833 6.1 7.91667 3.95833 C7.91667 1.775 6.14167 0 3.95833 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n19} data-layer={"229:48888/229:48890"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 11.73333 7.70417" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.1 1.1625 C7.775 -0.3875 3.98333 -0.3875 1.64167 1.1625 C0.583333 1.87083 0 2.82917 0 3.85417 C0 4.87917 0.583333 5.82917 1.63333 6.52917 C2.8 7.3125 4.33333 7.70417 5.86667 7.70417 C7.4 7.70417 8.93333 7.3125 10.1 6.52917 C11.15 5.82083 11.7333 4.87083 11.7333 3.8375 C11.725 2.8125 11.15 1.8625 10.1 1.1625 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48892": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48892"} data-name={"name=vip, Size=20"}>
  <span className={s.n21} data-layer={"229:48892/229:48893"} data-name={"box"}>
    <span className={s.n22} data-layer={"229:48892/229:48893/229:48894"} data-name={"vip"}>
      <svg width="100%" height="100%" viewBox="0 0 14.41713 10.38242" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.91777 8.39852 L0 2.51294 L1.45486 2.51294 L2.73338 6.85548 L4.02291 2.51294 L5.40062 2.51294 L3.48285 8.39852 L1.91777 8.39852 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/><path d={"M6.27994 8.39852 L6.27994 2.51294 L7.62459 2.51294 L7.62459 8.39852 L6.27994 8.39852 Z M6.95227 1.49895 C6.40118 1.49895 6.13666 1.24545 6.13666 0.749474 C6.13666 0.253499 6.40118 0 6.95227 0 C7.50335 0 7.76787 0.253499 7.76787 0.749474 C7.76787 1.24545 7.50335 1.49895 6.95227 1.49895 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/><path d={"M9.10468 10.3824 L9.10468 2.51294 L10.3942 2.51294 L10.4493 3.39468 C10.7579 2.83257 11.276 2.38068 12.2789 2.38068 C13.7338 2.38068 14.4171 3.20731 14.4171 5.40062 C14.4171 7.64904 13.6677 8.5418 12.1356 8.5418 C11.1547 8.5418 10.6918 8.0348 10.4493 7.53883 L10.4493 10.3824 L9.10468 10.3824 Z M13.0284 5.40062 C13.0284 4.02291 12.6096 3.59307 11.7609 3.59307 C10.9233 3.59307 10.4493 4.067 10.4493 5.14712 L10.4493 5.76434 C10.4493 6.83344 10.9453 7.32942 11.7499 7.32942 C12.6096 7.32942 13.0284 6.89957 13.0284 5.40062 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "229:48895": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48895"} data-name={"name=jur, Size=20"}>
  <span className={s.n23} data-layer={"229:48895/229:48896"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 16.66391 12.31667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M15.9059 4.34167 C15.1976 3.55833 14.0143 3.16667 12.2976 3.16667 L12.0976 3.16667 L12.0976 3.13333 C12.0976 1.73333 12.0976 0 8.96426 0 L7.69759 0 C4.56426 0 4.56426 1.74167 4.56426 3.13333 L4.56426 3.175 L4.36426 3.175 C2.63926 3.175 1.46426 3.56667 0.755923 4.35 C-0.0690768 5.26667 -0.0440769 6.5 0.0392564 7.34167 L0.0475897 7.4 L0.130923 8.275 C0.139257 8.28333 0.155923 8.3 0.17259 8.30833 C0.44759 8.49167 0.730923 8.675 1.03092 8.84167 C1.14759 8.91667 1.27259 8.98333 1.39759 9.05 C2.82259 9.83333 4.38926 10.3583 5.98092 10.6167 C6.05592 11.4 6.39759 12.3167 8.22259 12.3167 C10.0476 12.3167 10.4059 11.4083 10.4643 10.6 C12.1643 10.325 13.8059 9.73333 15.2893 8.86667 C15.3393 8.84167 15.3726 8.81667 15.4143 8.79167 C15.7976 8.575 16.1559 8.34167 16.5059 8.08333 C16.5226 8.075 16.5393 8.05833 16.5476 8.04167 L16.5809 7.74167 L16.6226 7.35 C16.6309 7.3 16.6309 7.25833 16.6393 7.2 C16.7059 6.35833 16.6893 5.20833 15.9059 4.34167 Z M9.23926 10.05 C9.23926 10.9333 9.23926 11.0667 8.21426 11.0667 C7.18926 11.0667 7.18926 10.9083 7.18926 10.0583 L7.18926 9.00833 L9.23926 9.00833 L9.23926 10.05 Z M5.75592 3.16667 L5.75592 3.13333 C5.75592 1.71667 5.75592 1.19167 7.69759 1.19167 L8.96426 1.19167 C10.9059 1.19167 10.9059 1.725 10.9059 3.13333 L10.9059 3.175 L5.75592 3.175 L5.75592 3.16667 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n24} data-layer={"229:48895/229:48897"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 16.43333 9.025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M15.2833 0.75 C15.2417 0.775 15.2 0.800001 15.1583 0.825001 C13.675 1.69167 12.0333 2.275 10.3333 2.55833 C10.2667 3.35833 9.91667 4.275 8.09167 4.275 C6.26667 4.275 5.91667 3.36667 5.85 2.575 C4.25833 2.325 2.69167 1.8 1.26667 1.00833 C1.14167 0.941667 1.01667 0.875 0.9 0.8 C0.6 0.633333 0.316667 0.450001 0.0416666 0.266667 C0.025 0.258334 0.00833333 0.241667 0 0.233334 L0.508333 5.65833 C0.683333 7.31667 1.36667 9.025 5.03333 9.025 L11.3833 9.025 C15.05 9.025 15.7333 7.31667 15.9083 5.65 L16.4333 0 C16.425 0.0166667 16.4083 0.0333335 16.3917 0.0416668 C16.0333 0.3 15.6667 0.541667 15.2833 0.75 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48899": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48899"} data-name={"name=time, Size=20"}>
  <span className={s.n25} data-layer={"229:48899/229:48900"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 16.66667 16.66667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.6667 8.33333 C16.6667 12.9357 12.9357 16.6667 8.33333 16.6667 C3.73096 16.6667 0 12.9357 0 8.33333 C0 3.73096 3.73096 0 8.33333 0 C12.9357 0 16.6667 3.73096 16.6667 8.33333 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n26} data-layer={"229:48899/229:48901"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 4.64665 7.64167" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.01667 7.64167 C3.90833 7.64167 3.8 7.61667 3.7 7.55 L1.11667 6.00833 C0.474999 5.625 0 4.78333 0 4.04167 L0 0.625 C0 0.283333 0.283333 0 0.625 0 C0.966667 0 1.25 0.283333 1.25 0.625 L1.25 4.04167 C1.25 4.34167 1.5 4.78333 1.75833 4.93333 L4.34167 6.475 C4.64167 6.65 4.73333 7.03333 4.55833 7.33333 C4.43333 7.53333 4.225 7.64167 4.01667 7.64167 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48903": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48903"} data-name={"name=directory, Size=20"}>
  <span className={s.n28} data-layer={"229:48903/229:48904"} data-name={"Vector"}>
    <svg width="100%" height="100%" viewBox="0 0 16 14.66644" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.8 0.775111 C14.42 0.458019 13.9741 0.229542 13.4947 0.106271 C13.0153 -0.0170002 12.5145 -0.0319713 12.0287 0.0624447 L10.8527 0.350445 C10.239 0.462907 9.68412 0.787003 9.2847 1.26633 C8.88528 1.74565 8.66659 2.34985 8.66667 2.97378 L8.66667 13.2851 C8.22457 13.3498 7.77542 13.3498 7.33333 13.2851 L7.33333 2.97378 C7.33554 2.35561 7.1219 1.75605 6.72926 1.27858 C6.33662 0.80111 5.78962 0.475678 5.18267 0.358445 L3.93333 0.0544447 C3.45277 -0.0334927 2.95875 -0.0147219 2.48625 0.109429 C2.01375 0.233579 1.57431 0.460074 1.19904 0.77288 C0.823778 1.08569 0.521857 1.47716 0.314655 1.91958 C0.107452 2.36201 3.25416e-05 2.84457 0 3.33311 L3.14563e-16 10.5284 C3.83039e-05 11.309 0.273984 12.0647 0.774089 12.664 C1.27419 13.2633 1.96874 13.6681 2.73667 13.8078 L6.92733 14.5698 C7.63664 14.6987 8.36336 14.6987 9.07267 14.5698 L13.2667 13.8078 C14.034 13.6674 14.7278 13.2623 15.2272 12.6631 C15.7266 12.0639 16.0001 11.3085 16 10.5284 L16 3.33311 C16.0003 2.84474 15.8929 2.36231 15.6855 1.92017 C15.4781 1.47804 15.1757 1.08707 14.8 0.775111 L14.8 0.775111 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48905": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48905"} data-name={"name=Divide, Size=20"}>
  <span className={s.n29} data-layer={"229:48905/229:48906"} data-name={"people-fill"}>
    <span className={s.n30} data-layer={"229:48905/229:48906/229:48907"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 11.25 13.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.125 13.5 C1.125 13.5 0 13.5 0 12.375 C0 11.25 1.125 7.875 5.625 7.875 C10.125 7.875 11.25 11.25 11.25 12.375 C11.25 13.5 10.125 13.5 10.125 13.5 L1.125 13.5 Z M5.625 6.75 C6.52011 6.75 7.37855 6.39442 8.01149 5.76149 C8.64442 5.12855 9 4.27011 9 3.375 C9 2.47989 8.64442 1.62145 8.01149 0.988515 C7.37855 0.355579 6.52011 4.996e-16 5.625 0 C4.72989 9.99201e-16 3.87145 0.355579 3.23851 0.988515 C2.60558 1.62145 2.25 2.47989 2.25 3.375 C2.25 4.27011 2.60558 5.12855 3.23851 5.76149 C3.87145 6.39442 4.72989 6.75 5.625 6.75 L5.625 6.75 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n31} data-layer={"229:48905/229:48906/229:48908"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 7.803 5.62548" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.868 5.62548 C5.70122 5.27427 5.61805 4.88921 5.625 4.50048 C5.625 2.97611 6.39 1.40673 7.803 0.315481 C7.09773 0.0981711 6.36294 -0.00809924 5.625 0.000480953 C1.125 0.000480953 0 3.37548 0 4.50048 C0 5.62548 1.125 5.62548 1.125 5.62548 L5.868 5.62548 Z"} fill={"rgba(184,211,222,1)"} fillRule="evenodd"/></svg>
    </span>
    <span className={s.n32} data-layer={"229:48905/229:48906/229:48909"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5.625 5.625" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.8125 5.625 C3.55842 5.625 4.27379 5.32868 4.80124 4.80124 C5.32868 4.27379 5.625 3.55842 5.625 2.8125 C5.625 2.06658 5.32868 1.35121 4.80124 0.823762 C4.27379 0.296316 3.55842 0 2.8125 0 C2.06658 0 1.35121 0.296316 0.823762 0.823762 C0.296316 1.35121 2.498e-16 2.06658 0 2.8125 C4.996e-16 3.55842 0.296316 4.27379 0.823762 4.80124 C1.35121 5.32868 2.06658 5.625 2.8125 5.625 L2.8125 5.625 Z"} fill={"rgba(184,211,222,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n33} data-layer={"229:48905/229:48910"} data-name={"Rectangle 3464239"}></span>
</Root>);
case "229:48911": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48911"} data-name={"name=error, Size=16"}>
  <span className={s.n35} data-layer={"229:48911/229:48912"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.3467 2.98667 13.3333 6.66667 13.3333 C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667 C13.3333 2.98667 10.3467 0 6.66667 0 Z M6 10 L6 8.66667 L7.33333 8.66667 L7.33333 10 L6 10 Z M6 3.33333 L6 7.33333 L7.33333 7.33333 L7.33333 3.33333 L6 3.33333 Z"} fill={"rgba(255,0,0,1)"} fillRule="evenodd"/></svg>
  </span>
</Root>);
case "229:48913": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48913"} data-name={"name=no accept, Size=16"}>
  <span className={s.n35} data-layer={"229:48913/229:48914"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.3467 2.98667 13.3333 6.66667 13.3333 C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667 C13.3333 2.98667 10.3467 0 6.66667 0 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n36} data-layer={"229:48913/229:48915"} data-name={"Group 3871"}>
    <span className={s.n37} data-layer={"229:48913/229:48915/229:48917"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5.44 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L5.44 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.100000023841858} strokeLinecap="square" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n38} data-layer={"229:48913/229:48915/229:48918"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 5.44" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 5.44 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.100000023841858} strokeLinecap="square" strokeLinejoin="round"/></svg>
    </span>
  </span>
</Root>);
case "229:48919": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48919"} data-name={"name=soft error, Size=16"}>
  <span className={s.n39} data-layer={"229:48919/229:48920"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.3467 2.98667 13.3333 6.66667 13.3333 C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667 C13.3333 2.98667 10.3467 0 6.66667 0 Z M6 10 L6 8.66667 L7.33333 8.66667 L7.33333 10 L6 10 Z M6 3.33333 L6 7.33333 L7.33333 7.33333 L7.33333 3.33333 L6 3.33333 Z"} fill={"rgba(218,147,0,1)"} fillRule="evenodd"/></svg>
  </span>
</Root>);
case "229:48921": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48921"} data-name={"name=accept, Size=16"}>
  <span className={s.n35} data-layer={"229:48921/229:48922"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.3467 2.98667 13.3333 6.66667 13.3333 C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667 C13.3333 2.98667 10.3467 0 6.66667 0 Z"} fill={"rgba(39,193,14,1)"} fillRule="evenodd"/></svg>
  </span>
  <span className={s.n40} data-layer={"229:48921/229:48923"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-4.46235e-05 1.04914 L2.15559 3.19248 L5.3527 0"} fill="none" stroke={"rgba(248,248,248,1)"} strokeWidth={1.0666667222976685} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "229:48924": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48924"} data-name={"name=time, Size=16"}>
  <span className={s.n35} data-layer={"229:48924/229:48925"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 13.33333 13.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.66667 0 C2.98667 0 0 2.98667 0 6.66667 C0 10.3467 2.98667 13.3333 6.66667 13.3333 C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667 C13.3333 2.98667 10.3467 0 6.66667 0 Z"} fill={"rgba(0,187,255,1)"} fillRule="evenodd"/></svg>
  </span>
  <span className={s.n41} data-layer={"229:48924/229:48926"} data-name={"0"}>
    <span className={s.n42} data-layer={"229:48924/229:48926/229:48927"} data-name={"Vector"}></span>
    <span className={s.n43} data-layer={"229:48924/229:48926/229:48928"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 1.83344 3.87658" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 2.27979 L1.83344 3.87658"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.100000023841858} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n44} data-layer={"229:48924/229:48926/229:48930"} data-name={"Ellipse 3163"}></span>
  </span>
</Root>);
case "229:48931": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48931"} data-name={"name=time 2, Size=16"}>
  <span className={s.n45} data-layer={"229:48931/229:48932"} data-name={"icon"}>
    <svg width="100%" height="100%" viewBox="0 0 12.72388 12.72388" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.36194 0 C2.85015 0 0 2.85015 0 6.36194 C0 9.87373 2.85015 12.7239 6.36194 12.7239 C9.87373 12.7239 12.7239 9.87373 12.7239 6.36194 C12.7239 2.85015 9.87373 0 6.36194 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.100000023841858} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n41} data-layer={"229:48931/229:48933"} data-name={"0"}>
    <span className={s.n42} data-layer={"229:48931/229:48933/229:48934"} data-name={"Vector"}></span>
    <span className={s.n46} data-layer={"229:48931/229:48933/229:48935"} data-name={"Ellipse 3163"}></span>
    <span className={s.n47} data-layer={"229:48931/229:48933/229:48936"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 2.14353 4.86124" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 3.28736 L2.14353 4.86124"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  </span>
</Root>);
case "229:48938": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48938"} data-name={"name=pointer negative, Size=16"}>
  <span className={s.n6} data-layer={"229:48938/229:48939"} data-name={"Vector"}></span>
  <span className={s.n48} data-layer={"229:48938/229:48940"} data-name={"Polygon 1"}>
    <svg width="100%" height="100%" viewBox="0 0 12.75 8.17398" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.19194 0.368973 L12.4759 6.3652 C13.0956 7.06844 12.5963 8.17398 11.659 8.17398 L1.091 8.17398 C0.153676 8.17398 -0.345644 7.06844 0.274061 6.3652 L5.55806 0.368973 C5.99159 -0.122991 6.75841 -0.122991 7.19194 0.368973 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "229:48941": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:48941"} data-name={"name=pointer negative, Size=18"}>
  <span className={s.n1} data-layer={"229:48941/229:48942"} data-name={"Vector"}></span>
  <span className={s.n49} data-layer={"229:48941/229:48943"} data-name={"Polygon 1"}>
    <svg width="100%" height="100%" viewBox="0 0 14.34375 9.19573" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.09093 0.415095 L14.0354 7.16085 C14.7326 7.95199 14.1709 9.19573 13.1164 9.19573 L1.22737 9.19573 C0.172885 9.19573 -0.38885 7.95199 0.308318 7.16085 L6.25282 0.415094 C6.74054 -0.138365 7.60321 -0.138365 8.09093 0.415095 Z"} fill={"rgba(255,0,0,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "233:3265": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3265"} data-name={"name=Comment, Size=22"}>
  <span className={s.n51} data-layer={"233:3265/233:3266"} data-name={"Subtract"}>
    <svg width="100%" height="100%" viewBox="0 0 16.5 16.5" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool73_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0 0)"}><path d={"M0 0 L16.5 0 L16.5 16.5 L0 16.5 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 4.58245 6.41631)"}><g transform={"matrix(1 -0 0 1 0.91721 0.9166)"}><path d={"M0 0 L5.5 0"} fill="none" stroke={"black"} strokeWidth={1.8333333730697632}/></g><g transform={"matrix(1 0 0 1 3.66721 4.58291)"}><path d={"M0 0 L2.75 0"} fill="none" stroke={"black"} strokeWidth={1.8333333730697632}/></g></g></mask></defs><g><rect width={16.5} height={16.5} fill={"rgba(39,193,14,1)"} mask={`url(#${uid}-bool73_1)`}/></g></svg>
  </span>
</Root>);
  default: return null;
  }
}
