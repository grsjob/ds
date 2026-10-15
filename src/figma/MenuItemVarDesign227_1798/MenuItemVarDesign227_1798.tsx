// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './MenuItemVarDesign227_1798.module.css';
export const variants = [
  {
    "id": "227:1799",
    "name": "State=hover, Tema=for white, Option=folder close",
    "props": {
      "State": "hover",
      "Tema": "for white",
      "Option": "folder close"
    }
  },
  {
    "id": "227:1802",
    "name": "State=sceleton, Tema=for gray, Option=folder close",
    "props": {
      "State": "sceleton",
      "Tema": "for gray",
      "Option": "folder close"
    }
  },
  {
    "id": "227:1803",
    "name": "State=hover, Tema=for white, Option=folder open",
    "props": {
      "State": "hover",
      "Tema": "for white",
      "Option": "folder open"
    }
  },
  {
    "id": "227:1806",
    "name": "State=default, Tema=for white, Option=folder open",
    "props": {
      "State": "default",
      "Tema": "for white",
      "Option": "folder open"
    }
  },
  {
    "id": "227:1809",
    "name": "State=default, Tema=for white, Option=folder close",
    "props": {
      "State": "default",
      "Tema": "for white",
      "Option": "folder close"
    }
  },
  {
    "id": "235:52387",
    "name": "State=default, Tema=for gray, Option=list",
    "props": {
      "State": "default",
      "Tema": "for gray",
      "Option": "list"
    }
  },
  {
    "id": "235:52391",
    "name": "State=default, Tema=for white, Option=list",
    "props": {
      "State": "default",
      "Tema": "for white",
      "Option": "list"
    }
  },
  {
    "id": "235:52395",
    "name": "State=default, Tema=for gray, Option=folder close",
    "props": {
      "State": "default",
      "Tema": "for gray",
      "Option": "folder close"
    }
  },
  {
    "id": "235:52398",
    "name": "State=default, Tema=for gray, Option=folder open",
    "props": {
      "State": "default",
      "Tema": "for gray",
      "Option": "folder open"
    }
  },
  {
    "id": "235:52401",
    "name": "State=hover, Tema=for gray, Option=folder close",
    "props": {
      "State": "hover",
      "Tema": "for gray",
      "Option": "folder close"
    }
  },
  {
    "id": "235:52404",
    "name": "State=hover, Tema=for gray, Option=folder open",
    "props": {
      "State": "hover",
      "Tema": "for gray",
      "Option": "folder open"
    }
  },
  {
    "id": "235:52407",
    "name": "State=hover, Tema=for gray, Option=list",
    "props": {
      "State": "hover",
      "Tema": "for gray",
      "Option": "list"
    }
  },
  {
    "id": "235:52411",
    "name": "State=hover, Tema=for white, Option=list",
    "props": {
      "State": "hover",
      "Tema": "for white",
      "Option": "list"
    }
  },
  {
    "id": "235:52415",
    "name": "State=press, Tema=for gray, Option=list",
    "props": {
      "State": "press",
      "Tema": "for gray",
      "Option": "list"
    }
  },
  {
    "id": "235:52419",
    "name": "State=sceleton, Tema=for gray, Option=list",
    "props": {
      "State": "sceleton",
      "Tema": "for gray",
      "Option": "list"
    }
  },
  {
    "id": "235:52420",
    "name": "State=press, Tema=for white, Option=list",
    "props": {
      "State": "press",
      "Tema": "for white",
      "Option": "list"
    }
  }
] as const;
export type MenuItemVarDesign227_1798Variant = typeof variants[number]["id"];
export interface MenuItemVarDesign227_1798Dimensions {
  "State"?: "default" | "hover" | "press" | "sceleton";
  "Tema"?: "for gray" | "for white";
  "Option"?: "folder close" | "folder open" | "list";
}
export interface MenuItemVarDesign227_1798Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: MenuItemVarDesign227_1798Variant;
  variantProps?: MenuItemVarDesign227_1798Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: MenuItemVarDesign227_1798Variant) => void;
}
const transitions = {"227:1799":{"ON_HOVER":"4294967295:4294967295"},"227:1802":{"ON_HOVER":"4294967295:4294967295"},"227:1803":{"ON_HOVER":"4294967295:4294967295"},"227:1806":{"ON_HOVER":"227:1803"},"227:1809":{"ON_HOVER":"227:1799"},"235:52387":{"ON_HOVER":"4294967295:4294967295"},"235:52391":{"ON_HOVER":"4294967295:4294967295"},"235:52395":{"ON_HOVER":"4294967295:4294967295"},"235:52398":{"ON_HOVER":"4294967295:4294967295"},"235:52401":{"ON_HOVER":"4294967295:4294967295"},"235:52407":{"ON_CLICK":"4294967295:4294967295"},"235:52411":{"ON_CLICK":"4294967295:4294967295"}};
export function MenuItemVarDesign227_1798({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: MenuItemVarDesign227_1798Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1799": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1799"} data-name={"State=hover, Tema=for white, Option=folder close"}>
  <span className={s.n1} data-layer={"227:1799/227:1800"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:1799/227:1800/227:521"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L1.5 0 C0.6675 0 0 0.6675 0 1.5 L0 10.5 C0 10.89782 0.15804 11.27936 0.43934 11.56066 C0.72064 11.84196 1.10218 12 1.5 12 L13.5 12 C13.89782 12 14.27935 11.84196 14.56066 11.56066 C14.84196 11.27936 15 10.89782 15 10.5 L15 3 C15 2.1675 14.325 1.5 13.5 1.5 L7.5 1.5 L6 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M6 0 L6.35355 -0.35355 L6.20711 -0.5 L6 -0.5 L6 0 Z M0 10.5 L-0.5 10.5 L0 10.5 Z M7.5 1.5 L7.14645 1.85355 L7.29289 2 L7.5 2 L7.5 1.5 Z M6 0 L6 -0.5 L1.5 -0.5 L1.5 0 L1.5 0.5 L6 0.5 L6 0 Z M1.5 0 L1.5 -0.5 C0.39136 -0.5 -0.5 0.39136 -0.5 1.5 L0 1.5 L0.5 1.5 C0.5 0.94364 0.94364 0.5 1.5 0.5 L1.5 0 Z M0 1.5 L-0.5 1.5 L-0.5 10.5 L0 10.5 L0.5 10.5 L0.5 1.5 L0 1.5 Z M0 10.5 L-0.5 10.5 C-0.5 11.03043 -0.28929 11.53914 0.08579 11.91421 L0.43934 11.56066 L0.79289 11.20711 C0.60536 11.01957 0.5 10.76522 0.5 10.5 L0 10.5 Z M0.43934 11.56066 L0.08579 11.91421 C0.46086 12.28929 0.96957 12.5 1.5 12.5 L1.5 12 L1.5 11.5 C1.23478 11.5 0.98043 11.39464 0.79289 11.20711 L0.43934 11.56066 Z M1.5 12 L1.5 12.5 L13.5 12.5 L13.5 12 L13.5 11.5 L1.5 11.5 L1.5 12 Z M13.5 12 L13.5 12.5 C14.03043 12.5 14.53914 12.28929 14.91421 11.91421 L14.56066 11.56066 L14.20711 11.20711 C14.01957 11.39464 13.76521 11.5 13.5 11.5 L13.5 12 Z M14.56066 11.56066 L14.91421 11.91421 C15.28928 11.53914 15.5 11.03043 15.5 10.5 L15 10.5 L14.5 10.5 C14.5 10.76522 14.39464 11.01957 14.20711 11.20711 L14.56066 11.56066 Z M15 10.5 L15.5 10.5 L15.5 3 L15 3 L14.5 3 L14.5 10.5 L15 10.5 Z M15 3 L15.5 3 C15.5 1.88973 14.59951 1 13.5 1 L13.5 1.5 L13.5 2 C14.05049 2 14.5 2.44527 14.5 3 L15 3 Z M13.5 1.5 L13.5 1 L7.5 1 L7.5 1.5 L7.5 2 L13.5 2 L13.5 1.5 Z M7.5 1.5 L7.85355 1.14645 L6.35355 -0.35355 L6 0 L5.64645 0.35355 L7.14645 1.85355 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"227:1799/227:1801"} data-name={"Label"}>
    {textSlot(text,"227:1799/227:1801","Label","Value value")}
  </span>
</Root>);
case "227:1802": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1802"} data-name={"State=sceleton, Tema=for gray, Option=folder close"}></Root>);
case "227:1803": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1803"} data-name={"State=hover, Tema=for white, Option=folder open"}>
  <span className={s.n1} data-layer={"227:1803/227:1804"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:1803/227:1804/227:358"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L6.6364 -0.6364 L6.37279 -0.9 L6 -0.9 L6 0 Z M0 10.5 L-0.9 10.5 L0 10.5 Z M7.5 1.5 L6.8636 2.1364 L7.12721 2.4 L7.5 2.4 L7.5 1.5 Z M6 0 L6 -0.9 L1.5 -0.9 L1.5 0 L1.5 0.9 L6 0.9 L6 0 Z M1.5 0 L1.5 -0.9 C0.17044 -0.9 -0.9 0.17044 -0.9 1.5 L0 1.5 L0.9 1.5 C0.9 1.16456 1.16456 0.9 1.5 0.9 L1.5 0 Z M0 1.5 L-0.9 1.5 L-0.9 10.5 L0 10.5 L0.9 10.5 L0.9 1.5 L0 1.5 Z M0 10.5 L-0.9 10.5 C-0.9 11.13652 -0.64714 11.74697 -0.19706 12.19706 L0.43934 11.56066 L1.07574 10.92426 C0.96321 10.81174 0.9 10.65913 0.9 10.5 L0 10.5 Z M0.43934 11.56066 L-0.19706 12.19706 C0.25303 12.64714 0.86348 12.9 1.5 12.9 L1.5 12 L1.5 11.1 C1.34087 11.1 1.18826 11.03679 1.07574 10.92426 L0.43934 11.56066 Z M1.5 12 L1.5 12.9 L13.5 12.9 L13.5 12 L13.5 11.1 L1.5 11.1 L1.5 12 Z M13.5 12 L13.5 12.9 C14.13652 12.9 14.74697 12.64714 15.19705 12.19706 L14.56066 11.56066 L13.92426 10.92426 C13.81174 11.03679 13.65913 11.1 13.5 11.1 L13.5 12 Z M14.56066 11.56066 L15.19705 12.19706 C15.64714 11.74697 15.9 11.13652 15.9 10.5 L15 10.5 L14.1 10.5 C14.1 10.65913 14.03679 10.81174 13.92426 10.92426 L14.56066 11.56066 Z M15 10.5 L15.9 10.5 L15.9 3 L15 3 L14.1 3 L14.1 10.5 L15 10.5 Z M15 3 L15.9 3 C15.9 1.66752 14.81912 0.6 13.5 0.6 L13.5 1.5 L13.5 2.4 C13.83088 2.4 14.1 2.66748 14.1 3 L15 3 Z M13.5 1.5 L13.5 0.6 L7.5 0.6 L7.5 1.5 L7.5 2.4 L13.5 2.4 L13.5 1.5 Z M7.5 1.5 L8.1364 0.8636 L6.6364 -0.6364 L6 0 L5.3636 0.6364 L6.8636 2.1364 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"227:1803/227:1805"} data-name={"Label"}>
    {textSlot(text,"227:1803/227:1805","Label","Value value")}
  </span>
</Root>);
case "227:1806": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1806"} data-name={"State=default, Tema=for white, Option=folder open"}>
  <span className={s.n1} data-layer={"227:1806/227:1807"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:1806/227:1807/227:358"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L6.6364 -0.6364 L6.37279 -0.9 L6 -0.9 L6 0 Z M0 10.5 L-0.9 10.5 L0 10.5 Z M7.5 1.5 L6.8636 2.1364 L7.12721 2.4 L7.5 2.4 L7.5 1.5 Z M6 0 L6 -0.9 L1.5 -0.9 L1.5 0 L1.5 0.9 L6 0.9 L6 0 Z M1.5 0 L1.5 -0.9 C0.17044 -0.9 -0.9 0.17044 -0.9 1.5 L0 1.5 L0.9 1.5 C0.9 1.16456 1.16456 0.9 1.5 0.9 L1.5 0 Z M0 1.5 L-0.9 1.5 L-0.9 10.5 L0 10.5 L0.9 10.5 L0.9 1.5 L0 1.5 Z M0 10.5 L-0.9 10.5 C-0.9 11.13652 -0.64714 11.74697 -0.19706 12.19706 L0.43934 11.56066 L1.07574 10.92426 C0.96321 10.81174 0.9 10.65913 0.9 10.5 L0 10.5 Z M0.43934 11.56066 L-0.19706 12.19706 C0.25303 12.64714 0.86348 12.9 1.5 12.9 L1.5 12 L1.5 11.1 C1.34087 11.1 1.18826 11.03679 1.07574 10.92426 L0.43934 11.56066 Z M1.5 12 L1.5 12.9 L13.5 12.9 L13.5 12 L13.5 11.1 L1.5 11.1 L1.5 12 Z M13.5 12 L13.5 12.9 C14.13652 12.9 14.74697 12.64714 15.19705 12.19706 L14.56066 11.56066 L13.92426 10.92426 C13.81174 11.03679 13.65913 11.1 13.5 11.1 L13.5 12 Z M14.56066 11.56066 L15.19705 12.19706 C15.64714 11.74697 15.9 11.13652 15.9 10.5 L15 10.5 L14.1 10.5 C14.1 10.65913 14.03679 10.81174 13.92426 10.92426 L14.56066 11.56066 Z M15 10.5 L15.9 10.5 L15.9 3 L15 3 L14.1 3 L14.1 10.5 L15 10.5 Z M15 3 L15.9 3 C15.9 1.66752 14.81912 0.6 13.5 0.6 L13.5 1.5 L13.5 2.4 C13.83088 2.4 14.1 2.66748 14.1 3 L15 3 Z M13.5 1.5 L13.5 0.6 L7.5 0.6 L7.5 1.5 L7.5 2.4 L13.5 2.4 L13.5 1.5 Z M7.5 1.5 L8.1364 0.8636 L6.6364 -0.6364 L6 0 L5.3636 0.6364 L6.8636 2.1364 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"227:1806/227:1808"} data-name={"Label"}>
    {textSlot(text,"227:1806/227:1808","Label","Value value")}
  </span>
</Root>);
case "227:1809": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1809"} data-name={"State=default, Tema=for white, Option=folder close"}>
  <span className={s.n1} data-layer={"227:1809/227:1810"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:1809/227:1810/227:521"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L1.5 0 C0.6675 0 0 0.6675 0 1.5 L0 10.5 C0 10.89782 0.15804 11.27936 0.43934 11.56066 C0.72064 11.84196 1.10218 12 1.5 12 L13.5 12 C13.89782 12 14.27935 11.84196 14.56066 11.56066 C14.84196 11.27936 15 10.89782 15 10.5 L15 3 C15 2.1675 14.325 1.5 13.5 1.5 L7.5 1.5 L6 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M6 0 L6.35355 -0.35355 L6.20711 -0.5 L6 -0.5 L6 0 Z M0 10.5 L-0.5 10.5 L0 10.5 Z M7.5 1.5 L7.14645 1.85355 L7.29289 2 L7.5 2 L7.5 1.5 Z M6 0 L6 -0.5 L1.5 -0.5 L1.5 0 L1.5 0.5 L6 0.5 L6 0 Z M1.5 0 L1.5 -0.5 C0.39136 -0.5 -0.5 0.39136 -0.5 1.5 L0 1.5 L0.5 1.5 C0.5 0.94364 0.94364 0.5 1.5 0.5 L1.5 0 Z M0 1.5 L-0.5 1.5 L-0.5 10.5 L0 10.5 L0.5 10.5 L0.5 1.5 L0 1.5 Z M0 10.5 L-0.5 10.5 C-0.5 11.03043 -0.28929 11.53914 0.08579 11.91421 L0.43934 11.56066 L0.79289 11.20711 C0.60536 11.01957 0.5 10.76522 0.5 10.5 L0 10.5 Z M0.43934 11.56066 L0.08579 11.91421 C0.46086 12.28929 0.96957 12.5 1.5 12.5 L1.5 12 L1.5 11.5 C1.23478 11.5 0.98043 11.39464 0.79289 11.20711 L0.43934 11.56066 Z M1.5 12 L1.5 12.5 L13.5 12.5 L13.5 12 L13.5 11.5 L1.5 11.5 L1.5 12 Z M13.5 12 L13.5 12.5 C14.03043 12.5 14.53914 12.28929 14.91421 11.91421 L14.56066 11.56066 L14.20711 11.20711 C14.01957 11.39464 13.76521 11.5 13.5 11.5 L13.5 12 Z M14.56066 11.56066 L14.91421 11.91421 C15.28928 11.53914 15.5 11.03043 15.5 10.5 L15 10.5 L14.5 10.5 C14.5 10.76522 14.39464 11.01957 14.20711 11.20711 L14.56066 11.56066 Z M15 10.5 L15.5 10.5 L15.5 3 L15 3 L14.5 3 L14.5 10.5 L15 10.5 Z M15 3 L15.5 3 C15.5 1.88973 14.59951 1 13.5 1 L13.5 1.5 L13.5 2 C14.05049 2 14.5 2.44527 14.5 3 L15 3 Z M13.5 1.5 L13.5 1 L7.5 1 L7.5 1.5 L7.5 2 L13.5 2 L13.5 1.5 Z M7.5 1.5 L7.85355 1.14645 L6.35355 -0.35355 L6 0 L5.64645 0.35355 L7.14645 1.85355 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"227:1809/227:1811"} data-name={"Label"}>
    {textSlot(text,"227:1809/227:1811","Label","Value value")}
  </span>
</Root>);
case "235:52387": return (<Root {...rootAttributes} className={[s.n6,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52387"} data-name={"State=default, Tema=for gray, Option=list"}>
  <span className={s.n7} data-layer={"235:52387/235:52388"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52387/235:52388/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52387/235:52388/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52387/235:52388/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52387/235:52388/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52387/235:52388/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52387/235:52388/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52387/235:52388/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52387/235:52388/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52387/235:52388/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52387/235:52388/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n18} data-layer={"235:52387/235:52389"} data-name={"Label"}>
    {textSlot(text,"235:52387/235:52389","Label","Value value")}
  </span>
</Root>);
case "235:52391": return (<Root {...rootAttributes} className={[s.n19,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52391"} data-name={"State=default, Tema=for white, Option=list"}>
  <span className={s.n7} data-layer={"235:52391/235:52392"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52391/235:52392/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52391/235:52392/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52391/235:52392/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52391/235:52392/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52391/235:52392/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52391/235:52392/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52391/235:52392/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52391/235:52392/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52391/235:52392/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52391/235:52392/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n18} data-layer={"235:52391/235:52393"} data-name={"Label"}>
    {textSlot(text,"235:52391/235:52393","Label","Value value")}
  </span>
</Root>);
case "235:52395": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52395"} data-name={"State=default, Tema=for gray, Option=folder close"}>
  <span className={s.n1} data-layer={"235:52395/235:52396"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"235:52395/235:52396/227:521"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L1.5 0 C0.6675 0 0 0.6675 0 1.5 L0 10.5 C0 10.89782 0.15804 11.27936 0.43934 11.56066 C0.72064 11.84196 1.10218 12 1.5 12 L13.5 12 C13.89782 12 14.27935 11.84196 14.56066 11.56066 C14.84196 11.27936 15 10.89782 15 10.5 L15 3 C15 2.1675 14.325 1.5 13.5 1.5 L7.5 1.5 L6 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M6 0 L6.35355 -0.35355 L6.20711 -0.5 L6 -0.5 L6 0 Z M0 10.5 L-0.5 10.5 L0 10.5 Z M7.5 1.5 L7.14645 1.85355 L7.29289 2 L7.5 2 L7.5 1.5 Z M6 0 L6 -0.5 L1.5 -0.5 L1.5 0 L1.5 0.5 L6 0.5 L6 0 Z M1.5 0 L1.5 -0.5 C0.39136 -0.5 -0.5 0.39136 -0.5 1.5 L0 1.5 L0.5 1.5 C0.5 0.94364 0.94364 0.5 1.5 0.5 L1.5 0 Z M0 1.5 L-0.5 1.5 L-0.5 10.5 L0 10.5 L0.5 10.5 L0.5 1.5 L0 1.5 Z M0 10.5 L-0.5 10.5 C-0.5 11.03043 -0.28929 11.53914 0.08579 11.91421 L0.43934 11.56066 L0.79289 11.20711 C0.60536 11.01957 0.5 10.76522 0.5 10.5 L0 10.5 Z M0.43934 11.56066 L0.08579 11.91421 C0.46086 12.28929 0.96957 12.5 1.5 12.5 L1.5 12 L1.5 11.5 C1.23478 11.5 0.98043 11.39464 0.79289 11.20711 L0.43934 11.56066 Z M1.5 12 L1.5 12.5 L13.5 12.5 L13.5 12 L13.5 11.5 L1.5 11.5 L1.5 12 Z M13.5 12 L13.5 12.5 C14.03043 12.5 14.53914 12.28929 14.91421 11.91421 L14.56066 11.56066 L14.20711 11.20711 C14.01957 11.39464 13.76521 11.5 13.5 11.5 L13.5 12 Z M14.56066 11.56066 L14.91421 11.91421 C15.28928 11.53914 15.5 11.03043 15.5 10.5 L15 10.5 L14.5 10.5 C14.5 10.76522 14.39464 11.01957 14.20711 11.20711 L14.56066 11.56066 Z M15 10.5 L15.5 10.5 L15.5 3 L15 3 L14.5 3 L14.5 10.5 L15 10.5 Z M15 3 L15.5 3 C15.5 1.88973 14.59951 1 13.5 1 L13.5 1.5 L13.5 2 C14.05049 2 14.5 2.44527 14.5 3 L15 3 Z M13.5 1.5 L13.5 1 L7.5 1 L7.5 1.5 L7.5 2 L13.5 2 L13.5 1.5 Z M7.5 1.5 L7.85355 1.14645 L6.35355 -0.35355 L6 0 L5.64645 0.35355 L7.14645 1.85355 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"235:52395/235:52397"} data-name={"Label"}>
    {textSlot(text,"235:52395/235:52397","Label","Value value")}
  </span>
</Root>);
case "235:52398": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52398"} data-name={"State=default, Tema=for gray, Option=folder open"}>
  <span className={s.n1} data-layer={"235:52398/235:52399"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"235:52398/235:52399/227:358"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L6.6364 -0.6364 L6.37279 -0.9 L6 -0.9 L6 0 Z M0 10.5 L-0.9 10.5 L0 10.5 Z M7.5 1.5 L6.8636 2.1364 L7.12721 2.4 L7.5 2.4 L7.5 1.5 Z M6 0 L6 -0.9 L1.5 -0.9 L1.5 0 L1.5 0.9 L6 0.9 L6 0 Z M1.5 0 L1.5 -0.9 C0.17044 -0.9 -0.9 0.17044 -0.9 1.5 L0 1.5 L0.9 1.5 C0.9 1.16456 1.16456 0.9 1.5 0.9 L1.5 0 Z M0 1.5 L-0.9 1.5 L-0.9 10.5 L0 10.5 L0.9 10.5 L0.9 1.5 L0 1.5 Z M0 10.5 L-0.9 10.5 C-0.9 11.13652 -0.64714 11.74697 -0.19706 12.19706 L0.43934 11.56066 L1.07574 10.92426 C0.96321 10.81174 0.9 10.65913 0.9 10.5 L0 10.5 Z M0.43934 11.56066 L-0.19706 12.19706 C0.25303 12.64714 0.86348 12.9 1.5 12.9 L1.5 12 L1.5 11.1 C1.34087 11.1 1.18826 11.03679 1.07574 10.92426 L0.43934 11.56066 Z M1.5 12 L1.5 12.9 L13.5 12.9 L13.5 12 L13.5 11.1 L1.5 11.1 L1.5 12 Z M13.5 12 L13.5 12.9 C14.13652 12.9 14.74697 12.64714 15.19705 12.19706 L14.56066 11.56066 L13.92426 10.92426 C13.81174 11.03679 13.65913 11.1 13.5 11.1 L13.5 12 Z M14.56066 11.56066 L15.19705 12.19706 C15.64714 11.74697 15.9 11.13652 15.9 10.5 L15 10.5 L14.1 10.5 C14.1 10.65913 14.03679 10.81174 13.92426 10.92426 L14.56066 11.56066 Z M15 10.5 L15.9 10.5 L15.9 3 L15 3 L14.1 3 L14.1 10.5 L15 10.5 Z M15 3 L15.9 3 C15.9 1.66752 14.81912 0.6 13.5 0.6 L13.5 1.5 L13.5 2.4 C13.83088 2.4 14.1 2.66748 14.1 3 L15 3 Z M13.5 1.5 L13.5 0.6 L7.5 0.6 L7.5 1.5 L7.5 2.4 L13.5 2.4 L13.5 1.5 Z M7.5 1.5 L8.1364 0.8636 L6.6364 -0.6364 L6 0 L5.3636 0.6364 L6.8636 2.1364 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"235:52398/235:52400"} data-name={"Label"}>
    {textSlot(text,"235:52398/235:52400","Label","Value value")}
  </span>
</Root>);
case "235:52401": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52401"} data-name={"State=hover, Tema=for gray, Option=folder close"}>
  <span className={s.n1} data-layer={"235:52401/235:52402"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"235:52401/235:52402/227:521"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L1.5 0 C0.6675 0 0 0.6675 0 1.5 L0 10.5 C0 10.89782 0.15804 11.27936 0.43934 11.56066 C0.72064 11.84196 1.10218 12 1.5 12 L13.5 12 C13.89782 12 14.27935 11.84196 14.56066 11.56066 C14.84196 11.27936 15 10.89782 15 10.5 L15 3 C15 2.1675 14.325 1.5 13.5 1.5 L7.5 1.5 L6 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M6 0 L6.35355 -0.35355 L6.20711 -0.5 L6 -0.5 L6 0 Z M0 10.5 L-0.5 10.5 L0 10.5 Z M7.5 1.5 L7.14645 1.85355 L7.29289 2 L7.5 2 L7.5 1.5 Z M6 0 L6 -0.5 L1.5 -0.5 L1.5 0 L1.5 0.5 L6 0.5 L6 0 Z M1.5 0 L1.5 -0.5 C0.39136 -0.5 -0.5 0.39136 -0.5 1.5 L0 1.5 L0.5 1.5 C0.5 0.94364 0.94364 0.5 1.5 0.5 L1.5 0 Z M0 1.5 L-0.5 1.5 L-0.5 10.5 L0 10.5 L0.5 10.5 L0.5 1.5 L0 1.5 Z M0 10.5 L-0.5 10.5 C-0.5 11.03043 -0.28929 11.53914 0.08579 11.91421 L0.43934 11.56066 L0.79289 11.20711 C0.60536 11.01957 0.5 10.76522 0.5 10.5 L0 10.5 Z M0.43934 11.56066 L0.08579 11.91421 C0.46086 12.28929 0.96957 12.5 1.5 12.5 L1.5 12 L1.5 11.5 C1.23478 11.5 0.98043 11.39464 0.79289 11.20711 L0.43934 11.56066 Z M1.5 12 L1.5 12.5 L13.5 12.5 L13.5 12 L13.5 11.5 L1.5 11.5 L1.5 12 Z M13.5 12 L13.5 12.5 C14.03043 12.5 14.53914 12.28929 14.91421 11.91421 L14.56066 11.56066 L14.20711 11.20711 C14.01957 11.39464 13.76521 11.5 13.5 11.5 L13.5 12 Z M14.56066 11.56066 L14.91421 11.91421 C15.28928 11.53914 15.5 11.03043 15.5 10.5 L15 10.5 L14.5 10.5 C14.5 10.76522 14.39464 11.01957 14.20711 11.20711 L14.56066 11.56066 Z M15 10.5 L15.5 10.5 L15.5 3 L15 3 L14.5 3 L14.5 10.5 L15 10.5 Z M15 3 L15.5 3 C15.5 1.88973 14.59951 1 13.5 1 L13.5 1.5 L13.5 2 C14.05049 2 14.5 2.44527 14.5 3 L15 3 Z M13.5 1.5 L13.5 1 L7.5 1 L7.5 1.5 L7.5 2 L13.5 2 L13.5 1.5 Z M7.5 1.5 L7.85355 1.14645 L6.35355 -0.35355 L6 0 L5.64645 0.35355 L7.14645 1.85355 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"235:52401/235:52403"} data-name={"Label"}>
    {textSlot(text,"235:52401/235:52403","Label","Value value")}
  </span>
</Root>);
case "235:52404": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52404"} data-name={"State=hover, Tema=for gray, Option=folder open"}>
  <span className={s.n1} data-layer={"235:52404/235:52405"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"235:52404/235:52405/227:358"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L6.6364 -0.6364 L6.37279 -0.9 L6 -0.9 L6 0 Z M0 10.5 L-0.9 10.5 L0 10.5 Z M7.5 1.5 L6.8636 2.1364 L7.12721 2.4 L7.5 2.4 L7.5 1.5 Z M6 0 L6 -0.9 L1.5 -0.9 L1.5 0 L1.5 0.9 L6 0.9 L6 0 Z M1.5 0 L1.5 -0.9 C0.17044 -0.9 -0.9 0.17044 -0.9 1.5 L0 1.5 L0.9 1.5 C0.9 1.16456 1.16456 0.9 1.5 0.9 L1.5 0 Z M0 1.5 L-0.9 1.5 L-0.9 10.5 L0 10.5 L0.9 10.5 L0.9 1.5 L0 1.5 Z M0 10.5 L-0.9 10.5 C-0.9 11.13652 -0.64714 11.74697 -0.19706 12.19706 L0.43934 11.56066 L1.07574 10.92426 C0.96321 10.81174 0.9 10.65913 0.9 10.5 L0 10.5 Z M0.43934 11.56066 L-0.19706 12.19706 C0.25303 12.64714 0.86348 12.9 1.5 12.9 L1.5 12 L1.5 11.1 C1.34087 11.1 1.18826 11.03679 1.07574 10.92426 L0.43934 11.56066 Z M1.5 12 L1.5 12.9 L13.5 12.9 L13.5 12 L13.5 11.1 L1.5 11.1 L1.5 12 Z M13.5 12 L13.5 12.9 C14.13652 12.9 14.74697 12.64714 15.19705 12.19706 L14.56066 11.56066 L13.92426 10.92426 C13.81174 11.03679 13.65913 11.1 13.5 11.1 L13.5 12 Z M14.56066 11.56066 L15.19705 12.19706 C15.64714 11.74697 15.9 11.13652 15.9 10.5 L15 10.5 L14.1 10.5 C14.1 10.65913 14.03679 10.81174 13.92426 10.92426 L14.56066 11.56066 Z M15 10.5 L15.9 10.5 L15.9 3 L15 3 L14.1 3 L14.1 10.5 L15 10.5 Z M15 3 L15.9 3 C15.9 1.66752 14.81912 0.6 13.5 0.6 L13.5 1.5 L13.5 2.4 C13.83088 2.4 14.1 2.66748 14.1 3 L15 3 Z M13.5 1.5 L13.5 0.6 L7.5 0.6 L7.5 1.5 L7.5 2.4 L13.5 2.4 L13.5 1.5 Z M7.5 1.5 L8.1364 0.8636 L6.6364 -0.6364 L6 0 L5.3636 0.6364 L6.8636 2.1364 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n3} data-layer={"235:52404/235:52406"} data-name={"Label"}>
    {textSlot(text,"235:52404/235:52406","Label","Value value")}
  </span>
</Root>);
case "235:52407": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52407"} data-name={"State=hover, Tema=for gray, Option=list"}>
  <span className={s.n7} data-layer={"235:52407/235:52408"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52407/235:52408/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52407/235:52408/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52407/235:52408/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52407/235:52408/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52407/235:52408/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52407/235:52408/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52407/235:52408/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52407/235:52408/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52407/235:52408/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52407/235:52408/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n18} data-layer={"235:52407/235:52409"} data-name={"Label"}>
    {textSlot(text,"235:52407/235:52409","Label","Value value")}
  </span>
</Root>);
case "235:52411": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52411"} data-name={"State=hover, Tema=for white, Option=list"}>
  <span className={s.n7} data-layer={"235:52411/235:52412"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52411/235:52412/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52411/235:52412/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52411/235:52412/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52411/235:52412/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52411/235:52412/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52411/235:52412/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52411/235:52412/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52411/235:52412/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52411/235:52412/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52411/235:52412/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n18} data-layer={"235:52411/235:52413"} data-name={"Label"}>
    {textSlot(text,"235:52411/235:52413","Label","Value value")}
  </span>
</Root>);
case "235:52415": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52415"} data-name={"State=press, Tema=for gray, Option=list"}>
  <span className={s.n7} data-layer={"235:52415/235:52416"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52415/235:52416/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52415/235:52416/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52415/235:52416/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52415/235:52416/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52415/235:52416/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52415/235:52416/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52415/235:52416/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52415/235:52416/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52415/235:52416/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52415/235:52416/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n25} data-layer={"235:52415/235:52417"} data-name={"Label"}>
    {textSlot(text,"235:52415/235:52417","Label","Value value")}
  </span>
</Root>);
case "235:52419": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52419"} data-name={"State=sceleton, Tema=for gray, Option=list"}></Root>);
case "235:52420": return (<Root {...rootAttributes} className={[s.n27,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"235:52420"} data-name={"State=press, Tema=for white, Option=list"}>
  <span className={s.n7} data-layer={"235:52420/235:52421"} data-name={"Logo/var"}>
    <span className={s.n8} data-layer={"235:52420/235:52421/236:49726"} data-name={"Line 17"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n9} data-layer={"235:52420/235:52421/236:49727"} data-name={"Line 16"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n10} data-layer={"235:52420/235:52421/236:49728"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.928 0 L5.928 1.33 L10.28779 1.33 L10.28779 0 L10.28779 -1.33 L5.928 -1.33 L5.928 0 Z M0 12.77031 L1.33 12.77031 L1.33 5.928 L0 5.928 L-1.33 5.928 L-1.33 12.77031 L0 12.77031 Z M13.81579 3.528 L12.48579 3.528 L12.48579 4.14916 L13.81579 4.14916 L15.14579 4.14916 L15.14579 3.528 L13.81579 3.528 Z M5.3079 16.29831 L5.3079 14.96831 L3.528 14.96831 L3.528 16.29831 L3.528 17.62831 L5.3079 17.62831 L5.3079 16.29831 Z M0 12.77031 L-1.33 12.77031 C-1.33 15.45331 0.845 17.62831 3.528 17.62831 L3.528 16.29831 L3.528 14.96831 C2.31408 14.96831 1.33 13.98423 1.33 12.77031 L0 12.77031 Z M10.28779 0 L10.28779 1.33 C11.50171 1.33 12.48579 2.31408 12.48579 3.528 L13.81579 3.528 L15.14579 3.528 C15.14579 0.845 12.97079 -1.33 10.28779 -1.33 L10.28779 0 Z M5.928 0 L5.928 -1.33 C1.91952 -1.33 -1.33 1.91952 -1.33 5.928 L0 5.928 L1.33 5.928 C1.33 3.38859 3.38859 1.33 5.928 1.33 L5.928 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"235:52420/235:52421/236:49729"} data-name={"Rectangle 3464322"}></span>
    <span className={s.n12} data-layer={"235:52420/235:52421/236:49730"} data-name={"Rectangle 3464248"}></span>
    <span className={s.n13} data-layer={"235:52420/235:52421/236:49731"} data-name={"Ellipse 50"}></span>
    <span className={s.n14} data-layer={"235:52420/235:52421/236:49732"} data-name={"Ellipse 52"}></span>
    <span className={s.n15} data-layer={"235:52420/235:52421/236:49733"} data-name={"Ellipse 51"}></span>
    <span className={s.n16} data-layer={"235:52420/235:52421/236:49734"} data-name={"Line 15"}>
      <svg width="100%" height="100%" viewBox="0 0 2.59136 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.13 -2.26 C0.50592 -2.26 0 -1.75408 0 -1.13 C0 -0.50592 0.50592 0 1.13 0 L1.13 -1.13 L1.13 -2.26 Z M1.46136 0 C2.08544 0 2.59136 -0.50592 2.59136 -1.13 C2.59136 -1.75408 2.08544 -2.26 1.46136 -2.26 L1.46136 -1.13 L1.46136 0 Z M1.13 -1.13 L1.13 0 L1.46136 0 L1.46136 -1.13 L1.46136 -2.26 L1.13 -2.26 L1.13 -1.13 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"235:52420/235:52421/236:49735"} data-name={"Rectangle 3464323"}></span>
  </span>
  <span className={s.n25} data-layer={"235:52420/235:52422"} data-name={"Label"}>
    {textSlot(text,"235:52420/235:52422","Label","Value value")}
  </span>
</Root>);
  default: return null;
  }
}
