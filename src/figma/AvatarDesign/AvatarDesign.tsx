// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './AvatarDesign.module.css';
export const variants = [
  {
    "id": "227:1110",
    "name": "Editor=on, mess=on",
    "props": {
      "Editor": "on",
      "mess": "on"
    }
  },
  {
    "id": "227:1117",
    "name": "Editor=off, mess=off",
    "props": {
      "Editor": "off",
      "mess": "off"
    }
  },
  {
    "id": "234:51362",
    "name": "Editor=off, mess=on",
    "props": {
      "Editor": "off",
      "mess": "on"
    }
  },
  {
    "id": "234:51367",
    "name": "Editor=on, mess=off",
    "props": {
      "Editor": "on",
      "mess": "off"
    }
  }
] as const;
export type AvatarDesignVariant = typeof variants[number]["id"];
export interface AvatarDesignDimensions {
  "Editor"?: "off" | "on";
  "mess"?: "off" | "on";
}
export interface AvatarDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: AvatarDesignVariant;
  variantProps?: AvatarDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: AvatarDesignVariant) => void;
}
const transitions = {};
export function AvatarDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: AvatarDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1110": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1110"} data-name={"Editor=on, mess=on"}>
  <span className={s.n1} data-layer={"227:1110/227:1111"} data-name={"avatar"}></span>
  <span className={s.n2} data-layer={"227:1110/227:1112"} data-name={"text"}>
    <span className={s.n3} data-layer={"227:1110/227:1112/227:1113"} data-name={"name lable"}>
      <span className={s.n4} data-layer={"227:1110/227:1112/227:1113/227:1114"} data-name={"Name Name"}>
        {textSlot(text,"227:1110/227:1112/227:1113/227:1114","Name Name","Name Name")}
      </span>
      <span className={s.n5} data-layer={"227:1110/227:1112/227:1113/227:1115"} data-name={"Lable/var/S/valeu"}>
        <span className={s.n6} data-layer={"227:1110/227:1112/227:1113/227:1115/227:659"} data-name={"icon/set/base"}></span>
        <span className={s.n7} data-layer={"227:1110/227:1112/227:1113/227:1115/227:660"} data-name={"Label"}>
          {textSlot(text,"227:1110/227:1112/227:1113/227:1115/227:660","Label","Ediet")}
        </span>
      </span>
    </span>
    <span className={s.n8} data-layer={"227:1110/227:1112/227:1116"} data-name={"Data Time"}>
      {textSlot(text,"227:1110/227:1112/227:1116","Data Time","Data Time")}
    </span>
  </span>
</Root>);
case "227:1117": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1117"} data-name={"Editor=off, mess=off"}>
  <span className={s.n9} data-layer={"227:1117/227:1118"} data-name={"road"}>
    <span className={s.n10} data-layer={"227:1117/227:1118/227:1119"} data-name={"road"}>
      <span className={s.n11} data-layer={"227:1117/227:1118/227:1119/227:1120"} data-name={"Rectangle 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 12 12" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M12 12 L12 11.5 C5.64873 11.5 0.5 6.35127 0.5 0 L0 0 L-0.5 0 C-0.5 6.90356 5.09644 12.5 12 12.5 L12 12 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n12} data-layer={"227:1117/227:1121"} data-name={"Ellipse 2"}></span>
  <span className={s.n13} data-layer={"227:1117/227:1122"} data-name={"text"}>
    <span className={s.n4} data-layer={"227:1117/227:1122/227:1123"} data-name={"Name Name"}>
      {textSlot(text,"227:1117/227:1122/227:1123","Name Name","Name Name")}
    </span>
    <span className={s.n8} data-layer={"227:1117/227:1122/227:1124"} data-name={"Data Time"}>
      {textSlot(text,"227:1117/227:1122/227:1124","Data Time","Data Time")}
    </span>
  </span>
</Root>);
case "234:51362": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:51362"} data-name={"Editor=off, mess=on"}>
  <span className={s.n1} data-layer={"234:51362/234:51363"} data-name={"avatar"}></span>
  <span className={s.n14} data-layer={"234:51362/234:51364"} data-name={"text"}>
    <span className={s.n4} data-layer={"234:51362/234:51364/234:51365"} data-name={"Name Name"}>
      {textSlot(text,"234:51362/234:51364/234:51365","Name Name","Name Name")}
    </span>
    <span className={s.n8} data-layer={"234:51362/234:51364/234:51366"} data-name={"Data Time"}>
      {textSlot(text,"234:51362/234:51364/234:51366","Data Time","Data Time")}
    </span>
  </span>
</Root>);
case "234:51367": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"234:51367"} data-name={"Editor=on, mess=off"}>
  <span className={s.n9} data-layer={"234:51367/234:51368"} data-name={"road"}>
    <span className={s.n10} data-layer={"234:51367/234:51368/234:51369"} data-name={"road"}>
      <span className={s.n11} data-layer={"234:51367/234:51368/234:51369/234:51370"} data-name={"Rectangle 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 12 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M12 12 L0 12 L0 0"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M12 12 L0 12 L0 0"} fill="none" stroke={"rgba(207,207,207,1)"} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n12} data-layer={"234:51367/234:51371"} data-name={"Ellipse 2"}></span>
  <span className={s.n16} data-layer={"234:51367/234:51372"} data-name={"text"}>
    <span className={s.n3} data-layer={"234:51367/234:51372/234:51373"} data-name={"name lable"}>
      <span className={s.n4} data-layer={"234:51367/234:51372/234:51373/234:51374"} data-name={"Name Name"}>
        {textSlot(text,"234:51367/234:51372/234:51373/234:51374","Name Name","Name Name")}
      </span>
      <span className={s.n5} data-layer={"234:51367/234:51372/234:51373/234:51375"} data-name={"Lable/var/S/valeu"}>
        <span className={s.n6} data-layer={"234:51367/234:51372/234:51373/234:51375/227:659"} data-name={"icon/set/base"}>
          <span className={s.n17} data-layer={"234:51367/234:51372/234:51373/234:51375/227:659/227:282"} data-name={"Icon"}>
            <svg width="100%" height="100%" viewBox="0 0 7.5176 6.36091" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 6.293 L-0.54319 6.18322 C-0.57996 6.36517 -0.52319 6.55344 -0.39197 6.68474 C-0.26075 6.81603 -0.07251 6.87291 0.10946 6.83625 L0 6.293 Z M0.36721 4.47598 L-0.17598 4.3662 L0.36721 4.47598 Z M0.50365 4.22157 L0.11169 3.82982 L0.50365 4.22157 Z M2.07405 5.78975 L2.46601 6.1815 L2.46601 6.1815 L2.07405 5.78975 Z M1.81916 5.92645 L1.7097 5.3832 L1.7097 5.3832 L1.81916 5.92645 Z M6.14612 1.00795 L6.53775 0.61587 L6.53775 0.61587 L6.14612 1.00795 Z M6.14641 1.71516 L5.75445 1.32341 L6.14641 1.71516 Z M5.28344 0.14625 L4.89181 0.53832 L5.28344 0.14625 Z M4.57644 0.14654 L4.9684 0.53829 L4.57644 0.14654 Z M3.56885 5.82945 C3.36509 6.05782 3.38504 6.40813 3.6134 6.6119 C3.84177 6.81566 4.19208 6.79571 4.39585 6.56734 L3.98235 6.1984 L3.56885 5.82945 Z M4.29163 5.85176 L4.70513 6.22071 L4.70513 6.22071 L4.29163 5.85176 Z M6.95699 6.14094 L6.58676 5.72859 L6.58676 5.72859 L6.95699 6.14094 Z M7.88783 6.04995 C8.11556 5.84548 8.13442 5.4951 7.92995 5.26737 C7.72548 5.03964 7.37511 5.02078 7.14737 5.22525 L7.5176 5.6376 L7.88783 6.04995 Z M5.65786 5.9627 L6.12546 5.6653 L6.12546 5.6653 L5.65786 5.9627 Z M5.28344 0.14625 L4.89181 0.53832 L5.75448 1.40002 L6.14612 1.00795 L6.53775 0.61587 L5.67508 -0.24583 L5.28344 0.14625 Z M6.14641 1.71516 L5.75445 1.32341 L1.68209 5.39801 L2.07405 5.78975 L2.46601 6.1815 L6.53838 2.1069 L6.14641 1.71516 Z M1.81916 5.92645 L1.7097 5.3832 L-0.10946 5.74975 L0 6.293 L0.10946 6.83625 L1.92862 6.4697 L1.81916 5.92645 Z M0 6.293 L0.54319 6.40277 L0.91039 4.58575 L0.36721 4.47598 L-0.17598 4.3662 L-0.54319 6.18322 L0 6.293 Z M0.50365 4.22157 L0.89561 4.61331 L4.9684 0.53829 L4.57644 0.14654 L4.18448 -0.2452 L0.11169 3.82982 L0.50365 4.22157 Z M0.36721 4.47598 L0.91039 4.58575 C0.90828 4.59619 0.90314 4.60578 0.89561 4.61331 L0.50365 4.22157 L0.11169 3.82982 C-0.03485 3.97644 -0.13491 4.16301 -0.17598 4.3662 L0.36721 4.47598 Z M2.07405 5.78975 L1.68209 5.39801 C1.68963 5.39046 1.69924 5.38531 1.7097 5.3832 L1.81916 5.92645 L1.92862 6.4697 C2.13223 6.42867 2.31918 6.32841 2.46601 6.1815 L2.07405 5.78975 Z M6.14612 1.00795 L5.75448 1.40002 C5.73331 1.37888 5.7333 1.34457 5.75445 1.32341 L6.14641 1.71516 L6.53838 2.1069 C6.95003 1.69503 6.94974 1.0274 6.53775 0.61587 L6.14612 1.00795 Z M5.28344 0.14625 L5.67508 -0.24583 C5.26325 -0.65719 4.59596 -0.65691 4.18448 -0.2452 L4.57644 0.14654 L4.9684 0.53829 C4.94726 0.55945 4.91297 0.55946 4.89181 0.53832 L5.28344 0.14625 Z M3.98235 6.1984 L4.39585 6.56734 L4.70513 6.22071 L4.29163 5.85176 L3.87813 5.48282 L3.56885 5.82945 L3.98235 6.1984 Z M6.95699 6.14094 L7.32722 6.55329 L7.88783 6.04995 L7.5176 5.6376 L7.14737 5.22525 L6.58676 5.72859 L6.95699 6.14094 Z M5.65786 5.9627 L5.19025 6.2601 C5.65899 6.99709 6.67731 7.13681 7.32722 6.55329 L6.95699 6.14094 L6.58676 5.72859 C6.44647 5.85455 6.22665 5.82439 6.12546 5.6653 L5.65786 5.9627 Z M4.29163 5.85176 L4.70513 6.22071 C4.83988 6.06969 5.08163 6.08932 5.19025 6.2601 L5.65786 5.9627 L6.12546 5.6653 C5.62229 4.87415 4.50235 4.78322 3.87813 5.48282 L4.29163 5.85176 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
        <span className={s.n7} data-layer={"234:51367/234:51372/234:51373/234:51375/227:660"} data-name={"Label"}>
          {textSlot(text,"234:51367/234:51372/234:51373/234:51375/227:660","Label","Ediet")}
        </span>
      </span>
    </span>
    <span className={s.n8} data-layer={"234:51367/234:51372/234:51376"} data-name={"Data Time"}>
      {textSlot(text,"234:51367/234:51372/234:51376","Data Time","Data Time")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
