// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SlotHeadlineVarDesign227_1956.module.css';
export const variants = [
  {
    "id": "227:1957",
    "name": "name=text, size=S, tema=white",
    "props": {
      "name": "text",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "237:50384",
    "name": "name=text, size=S, tema=gray",
    "props": {
      "name": "text",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "237:50386",
    "name": "name=sort, size=S, tema=white",
    "props": {
      "name": "sort",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "237:50389",
    "name": "name=sort, size=S, tema=gray",
    "props": {
      "name": "sort",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "237:50392",
    "name": "name=icon, size=S, tema=white",
    "props": {
      "name": "icon",
      "size": "S",
      "tema": "white"
    }
  },
  {
    "id": "237:50395",
    "name": "name=icon, size=S, tema=gray",
    "props": {
      "name": "icon",
      "size": "S",
      "tema": "gray"
    }
  },
  {
    "id": "237:50398",
    "name": "name=text, size=L, tema=white",
    "props": {
      "name": "text",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "237:50400",
    "name": "name=text, size=L, tema=gray",
    "props": {
      "name": "text",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "237:50402",
    "name": "name=sort, size=L, tema=white",
    "props": {
      "name": "sort",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "237:50405",
    "name": "name=sort, size=L, tema=gray",
    "props": {
      "name": "sort",
      "size": "L",
      "tema": "gray"
    }
  },
  {
    "id": "237:50408",
    "name": "name=icon, size=L, tema=white",
    "props": {
      "name": "icon",
      "size": "L",
      "tema": "white"
    }
  },
  {
    "id": "237:50411",
    "name": "name=icon, size=L, tema=gray",
    "props": {
      "name": "icon",
      "size": "L",
      "tema": "gray"
    }
  }
] as const;
export type SlotHeadlineVarDesign227_1956Variant = typeof variants[number]["id"];
export interface SlotHeadlineVarDesign227_1956Dimensions {
  "name"?: "icon" | "sort" | "text";
  "size"?: "L" | "S";
  "tema"?: "gray" | "white";
}
export interface SlotHeadlineVarDesign227_1956Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SlotHeadlineVarDesign227_1956Variant;
  variantProps?: SlotHeadlineVarDesign227_1956Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SlotHeadlineVarDesign227_1956Variant) => void;
}
const transitions = {};
export function SlotHeadlineVarDesign227_1956({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SlotHeadlineVarDesign227_1956Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1957": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1957"} data-name={"name=text, size=S, tema=white"}>
  <span className={s.n1} data-layer={"227:1957/227:1958"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"227:1957/227:1958","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
</Root>);
case "237:50384": return (<Root {...rootAttributes} className={[s.n2,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50384"} data-name={"name=text, size=S, tema=gray"}>
  <span className={s.n3} data-layer={"237:50384/237:50385"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50384/237:50385","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
</Root>);
case "237:50386": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50386"} data-name={"name=sort, size=S, tema=white"}>
  <span className={s.n5} data-layer={"237:50386/237:50387"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50386/237:50387","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n6} data-layer={"237:50386/237:50388"} data-name={"icon/var/table"}>
    <span className={s.n7} data-layer={"237:50386/237:50388/237:50379"} data-name={"icon/set/base"}>
      <span className={s.n8} data-layer={"237:50386/237:50388/237:50379/227:511"} data-name={"Polygon 2"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06 5.80834" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.94949 0.26219 C4.25755 -0.0874 4.80245 -0.0874 5.11051 0.26219 L8.86526 4.52304 C9.30561 5.02275 8.9508 5.80834 8.28475 5.80834 L0.77525 5.80834 C0.1092 5.80834 -0.24561 5.02275 0.19474 4.52304 L3.94949 0.26219 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n7} data-layer={"237:50386/237:50388/237:50379/227:512"} data-name={"Rectangle 3591"}></span>
    </span>
  </span>
</Root>);
case "237:50389": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50389"} data-name={"name=sort, size=S, tema=gray"}>
  <span className={s.n10} data-layer={"237:50389/237:50390"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50389/237:50390","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n6} data-layer={"237:50389/237:50391"} data-name={"icon/var/table"}>
    <span className={s.n7} data-layer={"237:50389/237:50391/237:50379"} data-name={"icon/set/base"}>
      <span className={s.n8} data-layer={"237:50389/237:50391/237:50379/227:511"} data-name={"Polygon 2"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06 5.80834" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.94949 0.26219 C4.25755 -0.0874 4.80245 -0.0874 5.11051 0.26219 L8.86526 4.52304 C9.30561 5.02275 8.9508 5.80834 8.28475 5.80834 L0.77525 5.80834 C0.1092 5.80834 -0.24561 5.02275 0.19474 4.52304 L3.94949 0.26219 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n7} data-layer={"237:50389/237:50391/237:50379/227:512"} data-name={"Rectangle 3591"}></span>
    </span>
  </span>
</Root>);
case "237:50392": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50392"} data-name={"name=icon, size=S, tema=white"}>
  <span className={s.n1} data-layer={"237:50392/237:50393"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50392/237:50393","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n12} data-layer={"237:50392/237:50394"} data-name={"icon/set/base"}>
    <span className={s.n13} data-layer={"237:50392/237:50394/227:307"} data-name={"Vector"}></span>
    <span className={s.n14} data-layer={"237:50392/237:50394/227:308"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 9.33333 9.91667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.11114 5.9234 L3.98614 5.92341 L3.98614 5.58753 L3.7614 5.33792 L3.11114 5.9234 Z M3.95754 9.82875 L3.48868 9.08997 L3.48868 9.08997 L3.95754 9.82875 Z M3.1111 9.3975 L2.2361 9.39749 L2.2361 9.3975 L3.1111 9.3975 Z M6.2222 8.11409 L5.3472 8.11406 L5.3472 8.11409 L6.2222 8.11409 Z M5.97976 8.54535 L6.44862 9.28412 L6.44863 9.28412 L5.97976 8.54535 Z M6.22228 5.9234 L5.57201 5.33792 L5.34729 5.58751 L5.34728 5.92337 L6.22228 5.9234 Z M0 0.5183 L-0.875 0.5183 L-0.875 0.51833 L0 0.5183 Z M9.3333 0.5183 L8.4583 0.5183 L8.4583 0.51831 L9.3333 0.5183 Z M9.33332 1.83831 L10.20832 1.83829 L9.33332 1.83831 Z M8.78886 0 L8.78886 -0.875 L0.54444 -0.875 L0.54444 0 L0.54444 0.875 L8.78886 0.875 L8.78886 0 Z M9.33332 1.83831 L10.20832 1.83829 L10.2083 0.51828 L9.3333 0.5183 L8.4583 0.51831 L8.45832 1.83832 L9.33332 1.83831 Z M6.22228 5.9234 L6.87254 6.50887 L9.5622 3.52158 L8.91194 2.9361 L8.26168 2.35063 L5.57201 5.33792 L6.22228 5.9234 Z M6.22228 5.9234 L5.34728 5.92337 L5.3472 8.11406 L6.2222 8.11409 L7.0972 8.11413 L7.09728 5.92343 L6.22228 5.9234 Z M5.97976 8.54535 L5.51089 7.80657 L3.48868 9.08997 L3.95754 9.82875 L4.42641 10.56752 L6.44862 9.28412 L5.97976 8.54535 Z M3.1111 9.3975 L3.9861 9.39751 L3.98614 5.92341 L3.11114 5.9234 L2.23614 5.92339 L2.2361 9.39749 L3.1111 9.3975 Z M0.42143 2.93606 L-0.22883 3.52154 L2.46087 6.50887 L3.11114 5.9234 L3.7614 5.33792 L1.0717 2.35059 L0.42143 2.93606 Z M0 0.5183 L-0.875 0.51833 L-0.87495 1.8384 L0.00005 1.83836 L0.87505 1.83833 L0.875 0.51826 L0 0.5183 Z M3.95754 9.82875 L3.48868 9.08997 C3.59056 9.02531 3.71022 9.03119 3.79586 9.07482 C3.8834 9.11943 3.9861 9.23358 3.9861 9.3975 L3.1111 9.3975 L2.2361 9.3975 C2.2361 10.5769 3.54687 11.12573 4.42641 10.56752 L3.95754 9.82875 Z M6.2222 8.11409 L5.3472 8.11409 C5.3472 7.9753 5.42022 7.86411 5.51089 7.80657 L5.97976 8.54535 L6.44863 9.28412 C6.84222 9.03432 7.0972 8.59947 7.0972 8.11409 L6.2222 8.11409 Z M0.54444 0 L0.54444 -0.875 C-0.19842 -0.875 -0.875 -0.29128 -0.875 0.5183 L0 0.5183 L0.875 0.5183 C0.875 0.75538 0.68593 0.875 0.54444 0.875 L0.54444 0 Z M8.78886 0 L8.78886 0.875 C8.64737 0.875 8.4583 0.75538 8.4583 0.5183 L9.3333 0.5183 L10.2083 0.5183 C10.2083 -0.29128 9.53171 -0.875 8.78886 -0.875 L8.78886 0 Z M9.33332 1.83831 L8.45832 1.83832 C8.45833 2.02752 8.38827 2.21002 8.26168 2.35063 L8.91194 2.9361 L9.5622 3.52158 C9.97816 3.05959 10.20833 2.45995 10.20832 1.83829 L9.33332 1.83831 Z M0.42143 2.93606 L1.0717 2.35059 C0.94511 2.20999 0.87506 2.02751 0.87505 1.83833 L0.00005 1.83836 L-0.87495 1.8384 C-0.87492 2.46 -0.64476 3.05959 -0.22883 3.52154 L0.42143 2.93606 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "237:50395": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50395"} data-name={"name=icon, size=S, tema=gray"}>
  <span className={s.n3} data-layer={"237:50395/237:50396"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50395/237:50396","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n12} data-layer={"237:50395/237:50397"} data-name={"icon/set/base"}>
    <span className={s.n13} data-layer={"237:50395/237:50397/227:307"} data-name={"Vector"}></span>
    <span className={s.n14} data-layer={"237:50395/237:50397/227:308"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 9.33333 9.91667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.11114 5.9234 L3.98614 5.92341 L3.98614 5.58753 L3.7614 5.33792 L3.11114 5.9234 Z M3.95754 9.82875 L3.48868 9.08997 L3.48868 9.08997 L3.95754 9.82875 Z M3.1111 9.3975 L2.2361 9.39749 L2.2361 9.3975 L3.1111 9.3975 Z M6.2222 8.11409 L5.3472 8.11406 L5.3472 8.11409 L6.2222 8.11409 Z M5.97976 8.54535 L6.44862 9.28412 L6.44863 9.28412 L5.97976 8.54535 Z M6.22228 5.9234 L5.57201 5.33792 L5.34729 5.58751 L5.34728 5.92337 L6.22228 5.9234 Z M0 0.5183 L-0.875 0.5183 L-0.875 0.51833 L0 0.5183 Z M9.3333 0.5183 L8.4583 0.5183 L8.4583 0.51831 L9.3333 0.5183 Z M9.33332 1.83831 L10.20832 1.83829 L9.33332 1.83831 Z M8.78886 0 L8.78886 -0.875 L0.54444 -0.875 L0.54444 0 L0.54444 0.875 L8.78886 0.875 L8.78886 0 Z M9.33332 1.83831 L10.20832 1.83829 L10.2083 0.51828 L9.3333 0.5183 L8.4583 0.51831 L8.45832 1.83832 L9.33332 1.83831 Z M6.22228 5.9234 L6.87254 6.50887 L9.5622 3.52158 L8.91194 2.9361 L8.26168 2.35063 L5.57201 5.33792 L6.22228 5.9234 Z M6.22228 5.9234 L5.34728 5.92337 L5.3472 8.11406 L6.2222 8.11409 L7.0972 8.11413 L7.09728 5.92343 L6.22228 5.9234 Z M5.97976 8.54535 L5.51089 7.80657 L3.48868 9.08997 L3.95754 9.82875 L4.42641 10.56752 L6.44862 9.28412 L5.97976 8.54535 Z M3.1111 9.3975 L3.9861 9.39751 L3.98614 5.92341 L3.11114 5.9234 L2.23614 5.92339 L2.2361 9.39749 L3.1111 9.3975 Z M0.42143 2.93606 L-0.22883 3.52154 L2.46087 6.50887 L3.11114 5.9234 L3.7614 5.33792 L1.0717 2.35059 L0.42143 2.93606 Z M0 0.5183 L-0.875 0.51833 L-0.87495 1.8384 L0.00005 1.83836 L0.87505 1.83833 L0.875 0.51826 L0 0.5183 Z M3.95754 9.82875 L3.48868 9.08997 C3.59056 9.02531 3.71022 9.03119 3.79586 9.07482 C3.8834 9.11943 3.9861 9.23358 3.9861 9.3975 L3.1111 9.3975 L2.2361 9.3975 C2.2361 10.5769 3.54687 11.12573 4.42641 10.56752 L3.95754 9.82875 Z M6.2222 8.11409 L5.3472 8.11409 C5.3472 7.9753 5.42022 7.86411 5.51089 7.80657 L5.97976 8.54535 L6.44863 9.28412 C6.84222 9.03432 7.0972 8.59947 7.0972 8.11409 L6.2222 8.11409 Z M0.54444 0 L0.54444 -0.875 C-0.19842 -0.875 -0.875 -0.29128 -0.875 0.5183 L0 0.5183 L0.875 0.5183 C0.875 0.75538 0.68593 0.875 0.54444 0.875 L0.54444 0 Z M8.78886 0 L8.78886 0.875 C8.64737 0.875 8.4583 0.75538 8.4583 0.5183 L9.3333 0.5183 L10.2083 0.5183 C10.2083 -0.29128 9.53171 -0.875 8.78886 -0.875 L8.78886 0 Z M9.33332 1.83831 L8.45832 1.83832 C8.45833 2.02752 8.38827 2.21002 8.26168 2.35063 L8.91194 2.9361 L9.5622 3.52158 C9.97816 3.05959 10.20833 2.45995 10.20832 1.83829 L9.33332 1.83831 Z M0.42143 2.93606 L1.0717 2.35059 C0.94511 2.20999 0.87506 2.02751 0.87505 1.83833 L0.00005 1.83836 L-0.87495 1.8384 C-0.87492 2.46 -0.64476 3.05959 -0.22883 3.52154 L0.42143 2.93606 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "237:50398": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50398"} data-name={"name=text, size=L, tema=white"}>
  <span className={s.n17} data-layer={"237:50398/237:50399"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50398/237:50399","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
</Root>);
case "237:50400": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50400"} data-name={"name=text, size=L, tema=gray"}>
  <span className={s.n19} data-layer={"237:50400/237:50401"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50400/237:50401","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
</Root>);
case "237:50402": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50402"} data-name={"name=sort, size=L, tema=white"}>
  <span className={s.n17} data-layer={"237:50402/237:50403"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50402/237:50403","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n21} data-layer={"237:50402/237:50404"} data-name={"icon/var/table"}>
    <span className={s.n22} data-layer={"237:50402/237:50404/237:50378"} data-name={"icon/set/base"}>
      <span className={s.n23} data-layer={"237:50402/237:50404/237:50378/227:435"} data-name={"Polygon 2"}>
        <svg width="100%" height="100%" viewBox="0 0 10.1925 6.53438" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.44318 0.29496 C4.78975 -0.09832 5.40275 -0.09832 5.74932 0.29496 L9.97341 5.08842 C10.46881 5.65059 10.06965 6.53438 9.32034 6.53438 L0.87216 6.53438 C0.12285 6.53438 -0.27631 5.65059 0.21909 5.08842 L4.44318 0.29496 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n22} data-layer={"237:50402/237:50404/237:50378/227:436"} data-name={"Rectangle 3591"}></span>
    </span>
  </span>
</Root>);
case "237:50405": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50405"} data-name={"name=sort, size=L, tema=gray"}>
  <span className={s.n19} data-layer={"237:50405/237:50406"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50405/237:50406","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n21} data-layer={"237:50405/237:50407"} data-name={"icon/var/table"}>
    <span className={s.n22} data-layer={"237:50405/237:50407/237:50378"} data-name={"icon/set/base"}>
      <span className={s.n23} data-layer={"237:50405/237:50407/237:50378/227:435"} data-name={"Polygon 2"}>
        <svg width="100%" height="100%" viewBox="0 0 10.1925 6.53438" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.44318 0.29496 C4.78975 -0.09832 5.40275 -0.09832 5.74932 0.29496 L9.97341 5.08842 C10.46881 5.65059 10.06965 6.53438 9.32034 6.53438 L0.87216 6.53438 C0.12285 6.53438 -0.27631 5.65059 0.21909 5.08842 L4.44318 0.29496 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n22} data-layer={"237:50405/237:50407/237:50378/227:436"} data-name={"Rectangle 3591"}></span>
    </span>
  </span>
</Root>);
case "237:50408": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50408"} data-name={"name=icon, size=L, tema=white"}>
  <span className={s.n17} data-layer={"237:50408/237:50409"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50408/237:50409","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n26} data-layer={"237:50408/237:50410"} data-name={"icon/set/base"}>
    <span className={s.n27} data-layer={"237:50408/237:50410/227:445"} data-name={"Vector"}></span>
    <span className={s.n28} data-layer={"237:50408/237:50410/227:446"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 10.66667 11.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.55558 6.7696 L4.55558 6.76961 L4.55559 6.38575 L4.29874 6.10048 L3.55558 6.7696 Z M4.52291 11.23285 L3.98706 10.38854 L3.98706 10.38854 L4.52291 11.23285 Z M3.55554 10.74 L2.55554 10.73999 L2.55554 10.74 L3.55554 10.74 Z M7.11108 9.27325 L6.11108 9.27322 L6.11108 9.27325 L7.11108 9.27325 Z M6.83401 9.76611 L7.36986 10.61042 L7.36986 10.61042 L6.83401 9.76611 Z M7.11117 6.7696 L6.36802 6.10048 L6.11119 6.38573 L6.11117 6.76956 L7.11117 6.7696 Z M0 0.59234 L-1 0.59234 L-1 0.59238 L0 0.59234 Z M10.66663 0.59234 L9.66663 0.59234 L9.66663 0.59236 L10.66663 0.59234 Z M10.66665 2.10092 L9.66665 2.10094 L10.66665 2.10092 Z M0.48164 3.3555 L-0.26152 4.02462 L0.48164 3.3555 Z M10.04441 0 L10.04441 -1 L0.62222 -1 L0.62222 0 L0.62222 1 L10.04441 1 L10.04441 0 Z M10.66665 2.10092 L11.66665 2.1009 L11.66663 0.59232 L10.66663 0.59234 L9.66663 0.59236 L9.66665 2.10094 L10.66665 2.10092 Z M7.11117 6.7696 L7.85433 7.43871 L10.92823 4.02466 L10.18507 3.35555 L9.44192 2.68643 L6.36802 6.10048 L7.11117 6.7696 Z M7.11117 6.7696 L6.11117 6.76956 L6.11108 9.27322 L7.11108 9.27325 L8.11108 9.27329 L8.11117 6.76963 L7.11117 6.7696 Z M6.83401 9.76611 L6.29816 8.92179 L3.98706 10.38854 L4.52291 11.23285 L5.05875 12.07717 L7.36986 10.61042 L6.83401 9.76611 Z M3.55554 10.74 L4.55554 10.74001 L4.55558 6.76961 L3.55558 6.7696 L2.55558 6.76959 L2.55554 10.73999 L3.55554 10.74 Z M0.48164 3.3555 L-0.26152 4.02462 L2.81243 7.43871 L3.55558 6.7696 L4.29874 6.10048 L1.2248 2.68639 L0.48164 3.3555 Z M0 0.59234 L-1 0.59238 L-0.99994 2.10102 L0.00006 2.10098 L1.00006 2.10094 L1 0.5923 L0 0.59234 Z M4.52291 11.23285 L3.98706 10.38854 C4.10349 10.31464 4.24025 10.32136 4.33812 10.37123 C4.43818 10.4222 4.55554 10.55266 4.55554 10.74 L3.55554 10.74 L2.55554 10.74 C2.55554 12.08788 4.05356 12.71512 5.05875 12.07717 L4.52291 11.23285 Z M7.11108 9.27325 L6.11108 9.27325 C6.11108 9.11463 6.19454 8.98756 6.29816 8.92179 L6.83401 9.76611 L7.36986 10.61042 C7.81968 10.32494 8.11108 9.82797 8.11108 9.27325 L7.11108 9.27325 Z M0.62222 0 L0.62222 -1 C-0.22677 -1 -1 -0.33289 -1 0.59234 L0 0.59234 L1 0.59234 C1 0.86329 0.78392 1 0.62222 1 L0.62222 0 Z M10.04441 0 L10.04441 1 C9.88271 1 9.66663 0.86329 9.66663 0.59234 L10.66663 0.59234 L11.66663 0.59234 C11.66663 -0.33289 10.89339 -1 10.04441 -1 L10.04441 0 Z M10.66665 2.10092 L9.66665 2.10094 C9.66666 2.31717 9.5866 2.52574 9.44192 2.68643 L10.18507 3.35555 L10.92823 4.02466 C11.40362 3.49668 11.66667 2.81137 11.66665 2.1009 L10.66665 2.10092 Z M0.48164 3.3555 L1.2248 2.68639 C1.08013 2.52571 1.00007 2.31716 1.00006 2.10094 L0.00006 2.10098 L-0.99994 2.10102 C-0.99991 2.81143 -0.73686 3.49667 -0.26152 4.02462 L0.48164 3.3555 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "237:50411": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"237:50411"} data-name={"name=icon, size=L, tema=gray"}>
  <span className={s.n19} data-layer={"237:50411/237:50412"} data-name={"Tittle Tittle Tittle"}>
    {textSlot(text,"237:50411/237:50412","Tittle Tittle Tittle","Tittle Tittle Tittle")}
  </span>
  <span className={s.n26} data-layer={"237:50411/237:50413"} data-name={"icon/set/base"}>
    <span className={s.n27} data-layer={"237:50411/237:50413/227:445"} data-name={"Vector"}></span>
    <span className={s.n28} data-layer={"237:50411/237:50413/227:446"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 10.66667 11.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.55558 6.7696 L4.55558 6.76961 L4.55559 6.38575 L4.29874 6.10048 L3.55558 6.7696 Z M4.52291 11.23285 L3.98706 10.38854 L3.98706 10.38854 L4.52291 11.23285 Z M3.55554 10.74 L2.55554 10.73999 L2.55554 10.74 L3.55554 10.74 Z M7.11108 9.27325 L6.11108 9.27322 L6.11108 9.27325 L7.11108 9.27325 Z M6.83401 9.76611 L7.36986 10.61042 L7.36986 10.61042 L6.83401 9.76611 Z M7.11117 6.7696 L6.36802 6.10048 L6.11119 6.38573 L6.11117 6.76956 L7.11117 6.7696 Z M0 0.59234 L-1 0.59234 L-1 0.59238 L0 0.59234 Z M10.66663 0.59234 L9.66663 0.59234 L9.66663 0.59236 L10.66663 0.59234 Z M10.66665 2.10092 L9.66665 2.10094 L10.66665 2.10092 Z M0.48164 3.3555 L-0.26152 4.02462 L0.48164 3.3555 Z M10.04441 0 L10.04441 -1 L0.62222 -1 L0.62222 0 L0.62222 1 L10.04441 1 L10.04441 0 Z M10.66665 2.10092 L11.66665 2.1009 L11.66663 0.59232 L10.66663 0.59234 L9.66663 0.59236 L9.66665 2.10094 L10.66665 2.10092 Z M7.11117 6.7696 L7.85433 7.43871 L10.92823 4.02466 L10.18507 3.35555 L9.44192 2.68643 L6.36802 6.10048 L7.11117 6.7696 Z M7.11117 6.7696 L6.11117 6.76956 L6.11108 9.27322 L7.11108 9.27325 L8.11108 9.27329 L8.11117 6.76963 L7.11117 6.7696 Z M6.83401 9.76611 L6.29816 8.92179 L3.98706 10.38854 L4.52291 11.23285 L5.05875 12.07717 L7.36986 10.61042 L6.83401 9.76611 Z M3.55554 10.74 L4.55554 10.74001 L4.55558 6.76961 L3.55558 6.7696 L2.55558 6.76959 L2.55554 10.73999 L3.55554 10.74 Z M0.48164 3.3555 L-0.26152 4.02462 L2.81243 7.43871 L3.55558 6.7696 L4.29874 6.10048 L1.2248 2.68639 L0.48164 3.3555 Z M0 0.59234 L-1 0.59238 L-0.99994 2.10102 L0.00006 2.10098 L1.00006 2.10094 L1 0.5923 L0 0.59234 Z M4.52291 11.23285 L3.98706 10.38854 C4.10349 10.31464 4.24025 10.32136 4.33812 10.37123 C4.43818 10.4222 4.55554 10.55266 4.55554 10.74 L3.55554 10.74 L2.55554 10.74 C2.55554 12.08788 4.05356 12.71512 5.05875 12.07717 L4.52291 11.23285 Z M7.11108 9.27325 L6.11108 9.27325 C6.11108 9.11463 6.19454 8.98756 6.29816 8.92179 L6.83401 9.76611 L7.36986 10.61042 C7.81968 10.32494 8.11108 9.82797 8.11108 9.27325 L7.11108 9.27325 Z M0.62222 0 L0.62222 -1 C-0.22677 -1 -1 -0.33289 -1 0.59234 L0 0.59234 L1 0.59234 C1 0.86329 0.78392 1 0.62222 1 L0.62222 0 Z M10.04441 0 L10.04441 1 C9.88271 1 9.66663 0.86329 9.66663 0.59234 L10.66663 0.59234 L11.66663 0.59234 C11.66663 -0.33289 10.89339 -1 10.04441 -1 L10.04441 0 Z M10.66665 2.10092 L9.66665 2.10094 C9.66666 2.31717 9.5866 2.52574 9.44192 2.68643 L10.18507 3.35555 L10.92823 4.02466 C11.40362 3.49668 11.66667 2.81137 11.66665 2.1009 L10.66665 2.10092 Z M0.48164 3.3555 L1.2248 2.68639 C1.08013 2.52571 1.00007 2.31716 1.00006 2.10094 L0.00006 2.10098 L-0.99994 2.10102 C-0.99991 2.81143 -0.73686 3.49667 -0.26152 4.02462 L0.48164 3.3555 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
