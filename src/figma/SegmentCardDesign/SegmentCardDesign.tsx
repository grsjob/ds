// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SegmentCardDesign.module.css';
export const variants = [
  {
    "id": "227:71199",
    "name": "View=segment, State=editor, Hover=off, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71214",
    "name": "View=segment, State=editor, Hover=off, Sceleton=on",
    "props": {
      "View": "segment",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71228",
    "name": "View=segment, State=editor change, Hover=off, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "editor change",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71245",
    "name": "View=segment, State=editor change, Hover=on, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "editor change",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71262",
    "name": "View=segment, State=alert, Hover=off, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "alert",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71277",
    "name": "View=segment, State=alert, Hover=on, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "alert",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71292",
    "name": "View=segment, State=editor, Hover=on, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "editor",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71307",
    "name": "View=segment, State=viewing, Hover=off, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71320",
    "name": "View=segment, State=viewing, Hover=off, Sceleton=on",
    "props": {
      "View": "segment",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71332",
    "name": "View=segment, State=viewing different, Hover=off, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "viewing different",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71347",
    "name": "View=segment, State=viewing, Hover=on, Sceleton=off",
    "props": {
      "View": "segment",
      "State": "viewing",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71360",
    "name": "View=deviaton, State=viewing different, Hover=on, Sceleton=off",
    "props": {
      "View": "deviaton",
      "State": "viewing different",
      "Hover": "on",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71375",
    "name": "View=general, State=editor, Hover=off, Sceleton=off",
    "props": {
      "View": "general",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71389",
    "name": "View=general, State=editor, Hover=off, Sceleton=on",
    "props": {
      "View": "general",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71402",
    "name": "View=deviaton, State=alert, Hover=off, Sceleton=off",
    "props": {
      "View": "deviaton",
      "State": "alert",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71416",
    "name": "View=general, State=viewing, Hover=off, Sceleton=off",
    "props": {
      "View": "general",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71430",
    "name": "View=general, State=viewing, Hover=off, Sceleton=on",
    "props": {
      "View": "general",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71443",
    "name": "View=deviaton, State=viewing, Hover=off, Sceleton=off",
    "props": {
      "View": "deviaton",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71459",
    "name": "View=additionally, State=editor, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71475",
    "name": "View=additionally, State=editor, Hover=off, Sceleton=on",
    "props": {
      "View": "additionally",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71491",
    "name": "View=additionally, State=alert, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally",
      "State": "alert",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71507",
    "name": "View=additionally, State=editor change, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally",
      "State": "editor change",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71524",
    "name": "View=additionally, State=viewing, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71540",
    "name": "View=additionally, State=viewing, Hover=off, Sceleton=on",
    "props": {
      "View": "additionally",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71556",
    "name": "View=additionally, State=viewing different, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally",
      "State": "viewing different",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71573",
    "name": "View=additionally roll, State=editor, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally roll",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71587",
    "name": "View=additionally roll, State=editor, Hover=off, Sceleton=on",
    "props": {
      "View": "additionally roll",
      "State": "editor",
      "Hover": "off",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71601",
    "name": "View=additionally roll, State=alert, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally roll",
      "State": "alert",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71615",
    "name": "View=additionally roll, State=editor change, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally roll",
      "State": "editor change",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71630",
    "name": "View=additionally roll, State=viewing, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally roll",
      "State": "viewing",
      "Hover": "off",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71644",
    "name": "View=additionally roll, State=viewing different, Hover=off, Sceleton=off",
    "props": {
      "View": "additionally roll",
      "State": "viewing different",
      "Hover": "off",
      "Sceleton": "off"
    }
  }
] as const;
export type SegmentCardDesignVariant = typeof variants[number]["id"];
export interface SegmentCardDesignDimensions {
  "View"?: "additionally" | "additionally roll" | "deviaton" | "general" | "segment";
  "State"?: "alert" | "editor" | "editor change" | "viewing" | "viewing different";
  "Hover"?: "off" | "on";
  "Sceleton"?: "off" | "on";
}
export interface SegmentCardDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SegmentCardDesignVariant;
  variantProps?: SegmentCardDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SegmentCardDesignVariant) => void;
}
const transitions = {"227:71199":{"ON_HOVER":"227:71292"},"227:71214":{"ON_HOVER":"227:71292"},"227:71228":{"ON_HOVER":"227:71245"},"227:71262":{"ON_HOVER":"227:71277"},"227:71307":{"ON_HOVER":"227:71347"},"227:71320":{"ON_HOVER":"227:71347"},"227:71332":{"ON_HOVER":"227:71360"},"227:71459":{"ON_CLICK":"227:71573"},"227:71475":{"ON_CLICK":"227:71587"},"227:71491":{"ON_CLICK":"227:71601"},"227:71507":{"ON_CLICK":"227:71615"},"227:71524":{"ON_CLICK":"227:71630"},"227:71540":{"ON_CLICK":"227:71630"},"227:71556":{"ON_CLICK":"227:71644"},"227:71573":{"ON_CLICK":"227:71459"},"227:71587":{"ON_CLICK":"227:71475"},"227:71601":{"ON_CLICK":"227:71491"},"227:71615":{"ON_CLICK":"227:71507"},"227:71630":{"ON_CLICK":"227:71524"},"227:71644":{"ON_CLICK":"227:71556"}};
export function SegmentCardDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SegmentCardDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:71199": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71199"} data-name={"View=segment, State=editor, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71199/227:71200"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71199/227:71200/227:71201"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71199/227:71200/227:71201/227:71202"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71199/227:71200/227:71201/227:71202","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71199/227:71200/227:71203"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71199/227:71200/227:71203/227:71204"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71199/227:71200/227:71203/227:71204/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71199/227:71200/227:71203/227:71204/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71199/227:71200/227:71203/227:71204/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71199/227:71200/227:71203/227:71204/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71199/227:71200/227:71203/227:71205"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71199/227:71200/227:71203/227:71205/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71199/227:71206"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71199/227:71206/227:71208"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71199/227:71206/227:71208/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71199/227:71206/227:71208/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71199/227:71206/227:71208/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71199/227:71206/227:71208/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71199/227:71206/227:71209"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71199/227:71206/227:71209/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71199/227:71206/227:71209/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71199/227:71206/227:71209/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71199/227:71206/227:71209/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71199/227:71206/227:71210"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71199/227:71206/227:71210/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71199/227:71206/227:71210/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71199/227:71206/227:71210/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71199/227:71206/227:71210/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71214": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71214"} data-name={"View=segment, State=editor, Hover=off, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:71214/227:71215"} data-name={"Headline"}>
    <span className={s.n31} data-layer={"227:71214/227:71215/227:71216"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n4} data-layer={"227:71214/227:71215/227:71217"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71214/227:71215/227:71217/227:71218"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71214/227:71215/227:71217/227:71219"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71214/227:71220"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71214/227:71220/227:71222"} data-name={"list_cast/layer/var"}>
      <span className={s.n34} data-layer={"227:71214/227:71220/227:71222/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n35} data-layer={"227:71214/227:71220/227:71222/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
    <span className={s.n29} data-layer={"227:71214/227:71220/227:71223"} data-name={"list_cast/layer/var"}>
      <span className={s.n34} data-layer={"227:71214/227:71220/227:71223/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n35} data-layer={"227:71214/227:71220/227:71223/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
    <span className={s.n30} data-layer={"227:71214/227:71220/227:71224"} data-name={"list_cast/layer/var"}>
      <span className={s.n34} data-layer={"227:71214/227:71220/227:71224/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n35} data-layer={"227:71214/227:71220/227:71224/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
  </span>
</Root>);
case "227:71228": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71228"} data-name={"View=segment, State=editor change, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71228/227:71229"} data-name={"Headline"}>
    <span className={s.n36} data-layer={"227:71228/227:71229/227:71230"} data-name={"status"}>
      <span className={s.n37} data-layer={"227:71228/227:71229/227:71230/227:71231"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:71228/227:71229/227:71230/227:71231/227:71232"} data-name={"Сегмент /название/"}>
          {textSlot(text,"227:71228/227:71229/227:71230/227:71231/227:71232","Сегмент /название/","Сегмент /название/")}
        </span>
      </span>
      <span className={s.n38} data-layer={"227:71228/227:71229/227:71230/227:71233"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n39} data-layer={"227:71228/227:71229/227:71230/227:71233/227:1531"} data-name={"Label"}>
          {textSlot(text,"227:71228/227:71229/227:71230/227:71233/227:1531","Label","Перенесено из ШВ2С")}
        </span>
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71228/227:71229/227:71234"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71228/227:71229/227:71234/227:71235"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71228/227:71229/227:71234/227:71235/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71228/227:71229/227:71234/227:71235/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71228/227:71229/227:71234/227:71235/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71228/227:71229/227:71234/227:71235/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71228/227:71229/227:71234/227:71236"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71228/227:71229/227:71234/227:71236/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71228/227:71237"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71228/227:71237/227:71239"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71228/227:71237/227:71239/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71228/227:71237/227:71239/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71228/227:71237/227:71239/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161"} data-name={"Box"}>
            <span className={s.n40} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n42} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71228/227:71237/227:71239/227:72025/227:72027/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71228/227:71237/227:71240"} data-name={"list_cast/layer/var"}>
      <span className={s.n46} data-layer={"227:71228/227:71237/227:71240/227:71953"} data-name={"Text text"}>
        {textSlot(text,"227:71228/227:71237/227:71240/227:71953","Text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71228/227:71237/227:71240/227:71954"} data-name={" Box value"}>
        <span className={s.n47} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955"} data-name={"Select/var"}>
          <span className={s.n48} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161"} data-name={"Box"}>
            <span className={s.n49} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n50} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71955/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span className={s.n51} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71959"} data-name={"icon/set/base"}>
          <span className={s.n27} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71959/227:2013"} data-name={"Vector"}></span>
          <span className={s.n52} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71959/227:2014"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n53} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71959/227:2015"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n54} data-layer={"227:71228/227:71237/227:71240/227:71954/227:71959/227:2016"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.33333 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88727 C-0.49003 -0.88727 -0.88727 -0.49003 -0.88727 0 C-0.88727 0.49003 -0.49003 0.88727 0 0.88727 L0 0 L0 -0.88727 Z M4.66667 0 L4.66667 -0.88727 L4.66667 0 Z M4 4.44606 C3.50997 4.44606 3.11273 4.84331 3.11273 5.33333 C3.11273 5.82336 3.50997 6.22061 4 6.22061 L4 5.33333 L4 4.44606 Z M0 0 L0 0.88727 L4.66667 0.88727 L4.66667 0 L4.66667 -0.88727 L0 -0.88727 L0 0 Z M4.66667 0 L4.66667 0.88727 C5.13859 0.88727 5.59119 1.07474 5.92489 1.40845 L6.55229 0.78105 L7.17968 0.15365 C6.51319 -0.51284 5.60923 -0.88727 4.66667 -0.88727 L4.66667 0 Z M6.55229 0.78105 L5.92489 1.40845 C6.25859 1.74215 6.44606 2.19474 6.44606 2.66667 L7.33333 2.66667 L8.22061 2.66667 C8.22061 1.7241 7.84617 0.82014 7.17968 0.15365 L6.55229 0.78105 Z M7.33333 2.66667 L6.44606 2.66667 C6.44606 3.13859 6.25859 3.59119 5.92489 3.92489 L6.55229 4.55228 L7.17968 5.17968 C7.84617 4.51319 8.22061 3.60923 8.22061 2.66667 L7.33333 2.66667 Z M6.55229 4.55228 L5.92489 3.92489 C5.59119 4.25859 5.13859 4.44606 4.66667 4.44606 L4.66667 5.33333 L4.66667 6.22061 C5.60923 6.22061 6.51319 5.84617 7.17968 5.17968 L6.55229 4.55228 Z M4.66667 5.33333 L4.66667 4.44606 L4 4.44606 L4 5.33333 L4 6.22061 L4.66667 6.22061 L4.66667 5.33333 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71228/227:71237/227:71241"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71228/227:71237/227:71241/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71228/227:71237/227:71241/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71228/227:71237/227:71241/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161"} data-name={"Box"}>
            <span className={s.n40} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n42} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71228/227:71237/227:71241/227:72025/227:72027/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71245": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71245"} data-name={"View=segment, State=editor change, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71245/227:71246"} data-name={"Headline"}>
    <span className={s.n36} data-layer={"227:71245/227:71246/227:71247"} data-name={"status"}>
      <span className={s.n37} data-layer={"227:71245/227:71246/227:71247/227:71248"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:71245/227:71246/227:71247/227:71248/227:71249"} data-name={"Сегмент /название/"}>
          {textSlot(text,"227:71245/227:71246/227:71247/227:71248/227:71249","Сегмент /название/","Сегмент /название/")}
        </span>
      </span>
      <span className={s.n38} data-layer={"227:71245/227:71246/227:71247/227:71250"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n39} data-layer={"227:71245/227:71246/227:71247/227:71250/227:1531"} data-name={"Label"}>
          {textSlot(text,"227:71245/227:71246/227:71247/227:71250/227:1531","Label","Перенесено из ШВ2С")}
        </span>
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71245/227:71246/227:71251"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71245/227:71246/227:71251/227:71252"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71245/227:71246/227:71251/227:71252/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71245/227:71246/227:71251/227:71252/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71245/227:71246/227:71251/227:71252/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71245/227:71246/227:71251/227:71252/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71245/227:71246/227:71251/227:71253"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71245/227:71246/227:71251/227:71253/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71245/227:71254"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71245/227:71254/227:71256"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71245/227:71254/227:71256/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71245/227:71254/227:71256/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71245/227:71254/227:71256/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161"} data-name={"Box"}>
            <span className={s.n40} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n42} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71245/227:71254/227:71256/227:72025/227:72027/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71245/227:71254/227:71257"} data-name={"list_cast/layer/var"}>
      <span className={s.n46} data-layer={"227:71245/227:71254/227:71257/227:71953"} data-name={"Text text"}>
        {textSlot(text,"227:71245/227:71254/227:71257/227:71953","Text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71245/227:71254/227:71257/227:71954"} data-name={" Box value"}>
        <span className={s.n47} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955"} data-name={"Select/var"}>
          <span className={s.n48} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161"} data-name={"Box"}>
            <span className={s.n49} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n50} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71955/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span className={s.n51} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71959"} data-name={"icon/set/base"}>
          <span className={s.n27} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71959/227:2013"} data-name={"Vector"}></span>
          <span className={s.n52} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71959/227:2014"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n53} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71959/227:2015"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n54} data-layer={"227:71245/227:71254/227:71257/227:71954/227:71959/227:2016"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.33333 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88727 C-0.49003 -0.88727 -0.88727 -0.49003 -0.88727 0 C-0.88727 0.49003 -0.49003 0.88727 0 0.88727 L0 0 L0 -0.88727 Z M4.66667 0 L4.66667 -0.88727 L4.66667 0 Z M4 4.44606 C3.50997 4.44606 3.11273 4.84331 3.11273 5.33333 C3.11273 5.82336 3.50997 6.22061 4 6.22061 L4 5.33333 L4 4.44606 Z M0 0 L0 0.88727 L4.66667 0.88727 L4.66667 0 L4.66667 -0.88727 L0 -0.88727 L0 0 Z M4.66667 0 L4.66667 0.88727 C5.13859 0.88727 5.59119 1.07474 5.92489 1.40845 L6.55229 0.78105 L7.17968 0.15365 C6.51319 -0.51284 5.60923 -0.88727 4.66667 -0.88727 L4.66667 0 Z M6.55229 0.78105 L5.92489 1.40845 C6.25859 1.74215 6.44606 2.19474 6.44606 2.66667 L7.33333 2.66667 L8.22061 2.66667 C8.22061 1.7241 7.84617 0.82014 7.17968 0.15365 L6.55229 0.78105 Z M7.33333 2.66667 L6.44606 2.66667 C6.44606 3.13859 6.25859 3.59119 5.92489 3.92489 L6.55229 4.55228 L7.17968 5.17968 C7.84617 4.51319 8.22061 3.60923 8.22061 2.66667 L7.33333 2.66667 Z M6.55229 4.55228 L5.92489 3.92489 C5.59119 4.25859 5.13859 4.44606 4.66667 4.44606 L4.66667 5.33333 L4.66667 6.22061 C5.60923 6.22061 6.51319 5.84617 7.17968 5.17968 L6.55229 4.55228 Z M4.66667 5.33333 L4.66667 4.44606 L4 4.44606 L4 5.33333 L4 6.22061 L4.66667 6.22061 L4.66667 5.33333 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71245/227:71254/227:71258"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71245/227:71254/227:71258/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71245/227:71254/227:71258/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71245/227:71254/227:71258/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161"} data-name={"Box"}>
            <span className={s.n40} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:162"} data-name={"icon left & Text"}>
              <span className={s.n41} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:162/227:163"} data-name={"Text"}>
                {textSlot(text,"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:162/227:163","Text","Text")}
              </span>
            </span>
            <span className={s.n42} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164/227:165"} data-name={"icon/set/base"}>
                <span className={s.n43} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164/227:165/227:178"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n44} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164/227:165/227:179"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n45} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164/227:166"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71245/227:71254/227:71258/227:72025/227:72027/227:161/227:164/227:166/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71262": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71262"} data-name={"View=segment, State=alert, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71262/227:71263"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71262/227:71263/227:71264"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71262/227:71263/227:71264/227:71265"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71262/227:71263/227:71264/227:71265","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71262/227:71263/227:71266"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71262/227:71263/227:71266/227:71267"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71262/227:71263/227:71266/227:71267/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71262/227:71263/227:71266/227:71267/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71262/227:71263/227:71266/227:71267/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71262/227:71263/227:71266/227:71267/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71262/227:71263/227:71266/227:71268"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71262/227:71263/227:71266/227:71268/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71262/227:71269"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71262/227:71269/227:71271"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71262/227:71269/227:71271/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71262/227:71269/227:71271/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71262/227:71269/227:71271/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71262/227:71269/227:71271/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71262/227:71269/227:71272"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71262/227:71269/227:71272/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71262/227:71269/227:71272/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71262/227:71269/227:71272/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71262/227:71269/227:71272/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71262/227:71269/227:71273"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71262/227:71269/227:71273/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71262/227:71269/227:71273/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71262/227:71269/227:71273/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71262/227:71269/227:71273/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71277": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71277"} data-name={"View=segment, State=alert, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71277/227:71278"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71277/227:71278/227:71279"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71277/227:71278/227:71279/227:71280"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71277/227:71278/227:71279/227:71280","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71277/227:71278/227:71281"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71277/227:71278/227:71281/227:71282"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71277/227:71278/227:71281/227:71282/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71277/227:71278/227:71281/227:71282/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71277/227:71278/227:71281/227:71282/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71277/227:71278/227:71281/227:71282/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71277/227:71278/227:71281/227:71283"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71277/227:71278/227:71281/227:71283/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71277/227:71284"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71277/227:71284/227:71286"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71277/227:71284/227:71286/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71277/227:71284/227:71286/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71277/227:71284/227:71286/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71277/227:71284/227:71286/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71277/227:71284/227:71287"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71277/227:71284/227:71287/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71277/227:71284/227:71287/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71277/227:71284/227:71287/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71277/227:71284/227:71287/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71277/227:71284/227:71288"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71277/227:71284/227:71288/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71277/227:71284/227:71288/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71277/227:71284/227:71288/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n56} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71277/227:71284/227:71288/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71292": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71292"} data-name={"View=segment, State=editor, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71292/227:71293"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71292/227:71293/227:71294"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71292/227:71293/227:71294/227:71295"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71292/227:71293/227:71294/227:71295","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71292/227:71293/227:71296"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71292/227:71293/227:71296/227:71297"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71292/227:71293/227:71296/227:71297/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71292/227:71293/227:71296/227:71297/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71292/227:71293/227:71296/227:71297/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71292/227:71293/227:71296/227:71297/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71292/227:71293/227:71296/227:71298"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71292/227:71293/227:71296/227:71298/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71292/227:71299"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71292/227:71299/227:71301"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71292/227:71299/227:71301/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71292/227:71299/227:71301/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:71292/227:71299/227:71301/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71292/227:71299/227:71301/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71292/227:71299/227:71302"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71292/227:71299/227:71302/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71292/227:71299/227:71302/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:71292/227:71299/227:71302/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71292/227:71299/227:71302/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71292/227:71299/227:71303"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71292/227:71299/227:71303/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71292/227:71299/227:71303/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:71292/227:71299/227:71303/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71292/227:71299/227:71303/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71307": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71307"} data-name={"View=segment, State=viewing, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71307/227:71308"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71307/227:71308/227:71309"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71307/227:71308/227:71309/227:71310"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71307/227:71308/227:71309/227:71310","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n57} data-layer={"227:71307/227:71308/227:71311"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71307/227:71308/227:71311/227:71312"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71307/227:71308/227:71311/227:71312/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71307/227:71308/227:71311/227:71312/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71307/227:71308/227:71311/227:71312/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71307/227:71308/227:71311/227:71312/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71307/227:71314"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71307/227:71314/227:71316"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71307/227:71314/227:71316/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71307/227:71314/227:71316/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n58} data-layer={"227:71307/227:71314/227:71316/227:72037"} data-name={" Box value"}>
        <span className={s.n59} data-layer={"227:71307/227:71314/227:71316/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71307/227:71314/227:71316/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Донор"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71307/227:71314/227:71317"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71307/227:71314/227:71317/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71307/227:71314/227:71317/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n58} data-layer={"227:71307/227:71314/227:71317/227:72037"} data-name={" Box value"}>
        <span className={s.n61} data-layer={"227:71307/227:71314/227:71317/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71307/227:71314/227:71317/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"8576 847 890"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71307/227:71314/227:71318"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71307/227:71314/227:71318/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71307/227:71314/227:71318/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n58} data-layer={"227:71307/227:71314/227:71318/227:72037"} data-name={" Box value"}>
        <span className={s.n62} data-layer={"227:71307/227:71314/227:71318/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71307/227:71314/227:71318/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71320": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71320"} data-name={"View=segment, State=viewing, Hover=off, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:71320/227:71321"} data-name={"Headline"}>
    <span className={s.n31} data-layer={"227:71320/227:71321/227:71322"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n4} data-layer={"227:71320/227:71321/227:71323"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71320/227:71321/227:71323/227:71324"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71320/227:71321/227:71323/227:71325"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71320/227:71326"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71320/227:71326/227:71328"} data-name={"list_cast/layer/var"}>
      <span className={s.n63} data-layer={"227:71320/227:71326/227:71328/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n64} data-layer={"227:71320/227:71326/227:71328/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
    <span className={s.n29} data-layer={"227:71320/227:71326/227:71329"} data-name={"list_cast/layer/var"}>
      <span className={s.n63} data-layer={"227:71320/227:71326/227:71329/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n64} data-layer={"227:71320/227:71326/227:71329/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
    <span className={s.n30} data-layer={"227:71320/227:71326/227:71330"} data-name={"list_cast/layer/var"}>
      <span className={s.n63} data-layer={"227:71320/227:71326/227:71330/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n64} data-layer={"227:71320/227:71326/227:71330/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
  </span>
</Root>);
case "227:71332": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71332"} data-name={"View=segment, State=viewing different, Hover=off, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71332/227:71333"} data-name={"Headline"}>
    <span className={s.n65} data-layer={"227:71332/227:71333/227:71334"} data-name={"status"}>
      <span className={s.n37} data-layer={"227:71332/227:71333/227:71334/227:71335"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:71332/227:71333/227:71334/227:71335/227:71336"} data-name={"Сегмент /название/"}>
          {textSlot(text,"227:71332/227:71333/227:71334/227:71335/227:71336","Сегмент /название/","Сегмент /название/")}
        </span>
      </span>
      <span className={s.n66} data-layer={"227:71332/227:71333/227:71334/227:71337"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n67} data-layer={"227:71332/227:71333/227:71334/227:71337/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71332/227:71333/227:71334/227:71337/227:1519","Label","Расхождение")}
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:71332/227:71333/227:71338"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71332/227:71333/227:71338/227:71339"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71332/227:71333/227:71338/227:71339/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71332/227:71333/227:71338/227:71339/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71332/227:71333/227:71338/227:71339/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71332/227:71333/227:71338/227:71339/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71332/227:71341"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71332/227:71341/227:71343"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71332/227:71341/227:71343/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71332/227:71341/227:71343/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n58} data-layer={"227:71332/227:71341/227:71343/227:72037"} data-name={" Box value"}>
        <span className={s.n59} data-layer={"227:71332/227:71341/227:71343/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71332/227:71341/227:71343/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Донор"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71332/227:71341/227:71344"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71332/227:71341/227:71344/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71332/227:71341/227:71344/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n58} data-layer={"227:71332/227:71341/227:71344/227:72037"} data-name={" Box value"}>
        <span className={s.n68} data-layer={"227:71332/227:71341/227:71344/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71332/227:71341/227:71344/227:72037/227:72038","Value Value Value",<><span className={s.n69}>{"8576 847 890"}</span><span className={s.n69}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71332/227:71341/227:71345"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71332/227:71341/227:71345/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71332/227:71341/227:71345/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n58} data-layer={"227:71332/227:71341/227:71345/227:72037"} data-name={" Box value"}>
        <span className={s.n62} data-layer={"227:71332/227:71341/227:71345/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71332/227:71341/227:71345/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71347": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71347"} data-name={"View=segment, State=viewing, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71347/227:71348"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:71347/227:71348/227:71349"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:71347/227:71348/227:71349/227:71350"} data-name={"Сегмент /название/"}>
        {textSlot(text,"227:71347/227:71348/227:71349/227:71350","Сегмент /название/","Сегмент /название/")}
      </span>
    </span>
    <span className={s.n57} data-layer={"227:71347/227:71348/227:71351"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71347/227:71348/227:71351/227:71352"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71347/227:71348/227:71351/227:71352/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71347/227:71348/227:71351/227:71352/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71347/227:71348/227:71351/227:71352/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71347/227:71348/227:71351/227:71352/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71347/227:71354"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71347/227:71354/227:71356"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71347/227:71354/227:71356/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71347/227:71354/227:71356/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n58} data-layer={"227:71347/227:71354/227:71356/227:72037"} data-name={" Box value"}>
        <span className={s.n59} data-layer={"227:71347/227:71354/227:71356/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71347/227:71354/227:71356/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Донор"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71347/227:71354/227:71357"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71347/227:71354/227:71357/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71347/227:71354/227:71357/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n58} data-layer={"227:71347/227:71354/227:71357/227:72037"} data-name={" Box value"}>
        <span className={s.n61} data-layer={"227:71347/227:71354/227:71357/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71347/227:71354/227:71357/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"8576 847 890"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71347/227:71354/227:71358"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71347/227:71354/227:71358/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71347/227:71354/227:71358/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n58} data-layer={"227:71347/227:71354/227:71358/227:72037"} data-name={" Box value"}>
        <span className={s.n62} data-layer={"227:71347/227:71354/227:71358/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71347/227:71354/227:71358/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71360": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71360"} data-name={"View=deviaton, State=viewing different, Hover=on, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71360/227:71361"} data-name={"Headline"}>
    <span className={s.n65} data-layer={"227:71360/227:71361/227:71362"} data-name={"status"}>
      <span className={s.n37} data-layer={"227:71360/227:71361/227:71362/227:71363"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:71360/227:71361/227:71362/227:71363/227:71364"} data-name={"Сегмент /название/"}>
          {textSlot(text,"227:71360/227:71361/227:71362/227:71363/227:71364","Сегмент /название/","Сегмент /название/")}
        </span>
      </span>
      <span className={s.n66} data-layer={"227:71360/227:71361/227:71362/227:71365"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n67} data-layer={"227:71360/227:71361/227:71362/227:71365/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71360/227:71361/227:71362/227:71365/227:1519","Label","Расхождение")}
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:71360/227:71361/227:71366"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71360/227:71361/227:71366/227:71367"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71360/227:71361/227:71366/227:71367/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71360/227:71361/227:71366/227:71367/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71360/227:71361/227:71366/227:71367/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71360/227:71361/227:71366/227:71367/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:71360/227:71369"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:71360/227:71369/227:71371"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71360/227:71369/227:71371/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71360/227:71369/227:71371/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n58} data-layer={"227:71360/227:71369/227:71371/227:72037"} data-name={" Box value"}>
        <span className={s.n59} data-layer={"227:71360/227:71369/227:71371/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71360/227:71369/227:71371/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Донор"}</span><span className={s.n60}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:71360/227:71369/227:71372"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71360/227:71369/227:71372/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71360/227:71369/227:71372/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n58} data-layer={"227:71360/227:71369/227:71372/227:72037"} data-name={" Box value"}>
        <span className={s.n68} data-layer={"227:71360/227:71369/227:71372/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71360/227:71369/227:71372/227:72037/227:72038","Value Value Value",<><span className={s.n69}>{"8576 847 890"}</span><span className={s.n69}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:71360/227:71369/227:71373"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:71360/227:71369/227:71373/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71360/227:71369/227:71373/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n58} data-layer={"227:71360/227:71369/227:71373/227:72037"} data-name={" Box value"}>
        <span className={s.n62} data-layer={"227:71360/227:71369/227:71373/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71360/227:71369/227:71373/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71375": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71375"} data-name={"View=general, State=editor, Hover=off, Sceleton=off"}>
  <span className={s.n71} data-layer={"227:71375/227:71376"} data-name={"Headline"}>
    <span className={s.n72} data-layer={"227:71375/227:71376/227:71377"} data-name={"Name"}>
      <span className={s.n73} data-layer={"227:71375/227:71376/227:71377/227:71378"} data-name={"Согласование /название/"}>
        {textSlot(text,"227:71375/227:71376/227:71377/227:71378","Согласование /название/","Согласование /название/")}
      </span>
    </span>
    <span className={s.n74} data-layer={"227:71375/227:71376/227:71379"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71375/227:71376/227:71379/227:71380"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71375/227:71376/227:71379/227:71380/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71375/227:71376/227:71379/227:71380/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71375/227:71376/227:71379/227:71380/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71375/227:71376/227:71379/227:71380/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71375/227:71376/227:71379/227:71381"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71375/227:71376/227:71379/227:71381/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71375/227:71382"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71375/227:71382/227:71383"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71375/227:71382/227:71383/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71375/227:71382/227:71383/227:72024","Text text text text text text text","Решение")}
      </span>
      <span className={s.n78} data-layer={"227:71375/227:71382/227:71383/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n79} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71375/227:71382/227:71383/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n83} data-layer={"227:71375/227:71382/227:71384"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71375/227:71382/227:71384/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71375/227:71382/227:71384/227:72024","Text text text text text text text","Предложение")}
      </span>
      <span className={s.n78} data-layer={"227:71375/227:71382/227:71384/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n79} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71375/227:71382/227:71384/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n84} data-layer={"227:71375/227:71382/227:71385"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71375/227:71382/227:71385/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71375/227:71382/227:71385/227:72024","Text text text text text text text","Год решения")}
      </span>
      <span className={s.n78} data-layer={"227:71375/227:71382/227:71385/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n79} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71375/227:71382/227:71385/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n85} data-layer={"227:71375/227:71382/227:71386"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71375/227:71382/227:71386/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71375/227:71382/227:71386/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n78} data-layer={"227:71375/227:71382/227:71386/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n79} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71375/227:71382/227:71386/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71389": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71389"} data-name={"View=general, State=editor, Hover=off, Sceleton=on"}>
  <span className={s.n71} data-layer={"227:71389/227:71390"} data-name={"Headline"}>
    <span className={s.n31} data-layer={"227:71389/227:71390/227:71391"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n74} data-layer={"227:71389/227:71390/227:71392"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71389/227:71390/227:71392/227:71393"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71389/227:71390/227:71392/227:71394"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71389/227:71395"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71389/227:71395/227:71396"} data-name={"list_cast/layer/var"}>
      <span className={s.n86} data-layer={"227:71389/227:71395/227:71396/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n87} data-layer={"227:71389/227:71395/227:71396/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
    <span className={s.n83} data-layer={"227:71389/227:71395/227:71397"} data-name={"list_cast/layer/var"}>
      <span className={s.n86} data-layer={"227:71389/227:71395/227:71397/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n87} data-layer={"227:71389/227:71395/227:71397/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
    <span className={s.n84} data-layer={"227:71389/227:71395/227:71398"} data-name={"list_cast/layer/var"}>
      <span className={s.n86} data-layer={"227:71389/227:71395/227:71398/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n87} data-layer={"227:71389/227:71395/227:71398/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
    <span className={s.n85} data-layer={"227:71389/227:71395/227:71399"} data-name={"list_cast/layer/var"}>
      <span className={s.n86} data-layer={"227:71389/227:71395/227:71399/227:72021"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n87} data-layer={"227:71389/227:71395/227:71399/227:72022"} data-name={"Rectangle 3464284"}></span>
    </span>
  </span>
</Root>);
case "227:71402": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71402"} data-name={"View=deviaton, State=alert, Hover=off, Sceleton=off"}>
  <span className={s.n71} data-layer={"227:71402/227:71403"} data-name={"Headline"}>
    <span className={s.n72} data-layer={"227:71402/227:71403/227:71404"} data-name={"Name"}>
      <span className={s.n73} data-layer={"227:71402/227:71403/227:71404/227:71405"} data-name={"Согласование /название/"}>
        {textSlot(text,"227:71402/227:71403/227:71404/227:71405","Согласование /название/","Согласование /название/")}
      </span>
    </span>
    <span className={s.n74} data-layer={"227:71402/227:71403/227:71406"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71402/227:71403/227:71406/227:71407"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71402/227:71403/227:71406/227:71407/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71402/227:71403/227:71406/227:71407/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71402/227:71403/227:71406/227:71407/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71402/227:71403/227:71406/227:71407/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71402/227:71403/227:71406/227:71408"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71402/227:71403/227:71406/227:71408/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71402/227:71409"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71402/227:71409/227:71410"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71402/227:71409/227:71410/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71402/227:71409/227:71410/227:72024","Text text text text text text text","Решение")}
      </span>
      <span className={s.n78} data-layer={"227:71402/227:71409/227:71410/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n88} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71402/227:71409/227:71410/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n83} data-layer={"227:71402/227:71409/227:71411"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71402/227:71409/227:71411/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71402/227:71409/227:71411/227:72024","Text text text text text text text","Предложение")}
      </span>
      <span className={s.n78} data-layer={"227:71402/227:71409/227:71411/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n88} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71402/227:71409/227:71411/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n84} data-layer={"227:71402/227:71409/227:71412"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71402/227:71409/227:71412/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71402/227:71409/227:71412/227:72024","Text text text text text text text","Год решения")}
      </span>
      <span className={s.n78} data-layer={"227:71402/227:71409/227:71412/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n88} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71402/227:71409/227:71412/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n85} data-layer={"227:71402/227:71409/227:71413"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71402/227:71409/227:71413/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:71402/227:71409/227:71413/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n78} data-layer={"227:71402/227:71409/227:71413/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n88} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n80} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n81} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n82} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:71402/227:71409/227:71413/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71416": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71416"} data-name={"View=general, State=viewing, Hover=off, Sceleton=off"}>
  <span className={s.n71} data-layer={"227:71416/227:71417"} data-name={"Headline"}>
    <span className={s.n72} data-layer={"227:71416/227:71417/227:71418"} data-name={"Name"}>
      <span className={s.n73} data-layer={"227:71416/227:71417/227:71418/227:71419"} data-name={"Согласование /название/"}>
        {textSlot(text,"227:71416/227:71417/227:71418/227:71419","Согласование /название/","Согласование /название/")}
      </span>
    </span>
    <span className={s.n89} data-layer={"227:71416/227:71417/227:71420"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71416/227:71417/227:71420/227:71421"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71416/227:71417/227:71420/227:71421/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71416/227:71417/227:71420/227:71421/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71416/227:71417/227:71420/227:71421/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71416/227:71417/227:71420/227:71421/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71416/227:71423"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71416/227:71423/227:71424"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71416/227:71423/227:71424/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71416/227:71423/227:71424/227:72036","Text text text","Решение")}
      </span>
      <span className={s.n90} data-layer={"227:71416/227:71423/227:71424/227:72037"} data-name={" Box value"}>
        <span className={s.n91} data-layer={"227:71416/227:71423/227:71424/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71416/227:71423/227:71424/227:72037/227:72038","Value Value Value",<><span className={s.n92}>{"Value "}</span><span className={s.n92}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n83} data-layer={"227:71416/227:71423/227:71425"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71416/227:71423/227:71425/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71416/227:71423/227:71425/227:72036","Text text text","Предложение")}
      </span>
      <span className={s.n90} data-layer={"227:71416/227:71423/227:71425/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71416/227:71423/227:71425/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71416/227:71423/227:71425/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n84} data-layer={"227:71416/227:71423/227:71426"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71416/227:71423/227:71426/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71416/227:71423/227:71426/227:72036","Text text text","Год решения")}
      </span>
      <span className={s.n90} data-layer={"227:71416/227:71423/227:71426/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71416/227:71423/227:71426/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71416/227:71423/227:71426/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n85} data-layer={"227:71416/227:71423/227:71427"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71416/227:71423/227:71427/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71416/227:71423/227:71427/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n90} data-layer={"227:71416/227:71423/227:71427/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71416/227:71423/227:71427/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71416/227:71423/227:71427/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71430": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71430"} data-name={"View=general, State=viewing, Hover=off, Sceleton=on"}>
  <span className={s.n71} data-layer={"227:71430/227:71431"} data-name={"Headline"}>
    <span className={s.n31} data-layer={"227:71430/227:71431/227:71432"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n74} data-layer={"227:71430/227:71431/227:71433"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71430/227:71431/227:71433/227:71434"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71430/227:71431/227:71433/227:71435"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71430/227:71436"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71430/227:71436/227:71437"} data-name={"list_cast/layer/var"}>
      <span className={s.n94} data-layer={"227:71430/227:71436/227:71437/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n95} data-layer={"227:71430/227:71436/227:71437/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
    <span className={s.n83} data-layer={"227:71430/227:71436/227:71438"} data-name={"list_cast/layer/var"}>
      <span className={s.n94} data-layer={"227:71430/227:71436/227:71438/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n95} data-layer={"227:71430/227:71436/227:71438/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
    <span className={s.n84} data-layer={"227:71430/227:71436/227:71439"} data-name={"list_cast/layer/var"}>
      <span className={s.n94} data-layer={"227:71430/227:71436/227:71439/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n95} data-layer={"227:71430/227:71436/227:71439/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
    <span className={s.n85} data-layer={"227:71430/227:71436/227:71440"} data-name={"list_cast/layer/var"}>
      <span className={s.n94} data-layer={"227:71430/227:71436/227:71440/227:72005"} data-name={"Rectangle 3464282"}></span>
      <span className={s.n95} data-layer={"227:71430/227:71436/227:71440/227:72006"} data-name={"Rectangle 3464283"}></span>
    </span>
  </span>
</Root>);
case "227:71443": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71443"} data-name={"View=deviaton, State=viewing, Hover=off, Sceleton=off"}>
  <span className={s.n71} data-layer={"227:71443/227:71444"} data-name={"Headline"}>
    <span className={s.n96} data-layer={"227:71443/227:71444/227:71445"} data-name={"status"}>
      <span className={s.n97} data-layer={"227:71443/227:71444/227:71445/227:71446"} data-name={"Name"}>
        <span className={s.n73} data-layer={"227:71443/227:71444/227:71445/227:71446/227:71447"} data-name={"Согласование /название/"}>
          {textSlot(text,"227:71443/227:71444/227:71445/227:71446/227:71447","Согласование /название/","Согласование /название/")}
        </span>
      </span>
      <span className={s.n98} data-layer={"227:71443/227:71444/227:71445/227:71448"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n67} data-layer={"227:71443/227:71444/227:71445/227:71448/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71443/227:71444/227:71445/227:71448/227:1519","Label","Расхождение")}
        </span>
      </span>
    </span>
    <span className={s.n89} data-layer={"227:71443/227:71444/227:71449"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71443/227:71444/227:71449/227:71450"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71443/227:71444/227:71449/227:71450/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71443/227:71444/227:71449/227:71450/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71443/227:71444/227:71449/227:71450/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71443/227:71444/227:71449/227:71450/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n75} data-layer={"227:71443/227:71452"} data-name={"List"}>
    <span className={s.n76} data-layer={"227:71443/227:71452/227:71453"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71443/227:71452/227:71453/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71443/227:71452/227:71453/227:72036","Text text text","Решение")}
      </span>
      <span className={s.n90} data-layer={"227:71443/227:71452/227:71453/227:72037"} data-name={" Box value"}>
        <span className={s.n99} data-layer={"227:71443/227:71452/227:71453/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71443/227:71452/227:71453/227:72037/227:72038","Value Value Value",<><span className={s.n69}>{"Value "}</span><span className={s.n69}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n83} data-layer={"227:71443/227:71452/227:71454"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71443/227:71452/227:71454/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71443/227:71452/227:71454/227:72036","Text text text","Предложение")}
      </span>
      <span className={s.n90} data-layer={"227:71443/227:71452/227:71454/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71443/227:71452/227:71454/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71443/227:71452/227:71454/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n84} data-layer={"227:71443/227:71452/227:71455"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71443/227:71452/227:71455/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71443/227:71452/227:71455/227:72036","Text text text","Год решения")}
      </span>
      <span className={s.n90} data-layer={"227:71443/227:71452/227:71455/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71443/227:71452/227:71455/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71443/227:71452/227:71455/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n85} data-layer={"227:71443/227:71452/227:71456"} data-name={"list_cast/layer/var"}>
      <span className={s.n77} data-layer={"227:71443/227:71452/227:71456/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:71443/227:71452/227:71456/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n90} data-layer={"227:71443/227:71452/227:71456/227:72037"} data-name={" Box value"}>
        <span className={s.n93} data-layer={"227:71443/227:71452/227:71456/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:71443/227:71452/227:71456/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71459": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71459"} data-name={"View=additionally, State=editor, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71459/227:71460"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71459/227:71460/227:71461"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71459/227:71460/227:71461/227:525"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71459/227:71460/227:71461/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71459/227:71460/227:71461/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n106} data-layer={"227:71459/227:71460/227:71462"} data-name={"Переформат"}>
      {textSlot(text,"227:71459/227:71460/227:71462","Переформат","Переформат")}
    </span>
    <span className={s.n107} data-layer={"227:71459/227:71460/227:71463"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71459/227:71460/227:71463/227:71464"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71459/227:71460/227:71463/227:71464/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71459/227:71460/227:71463/227:71464/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71459/227:71460/227:71463/227:71464/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71459/227:71460/227:71463/227:71464/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71459/227:71460/227:71463/227:71465"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71459/227:71460/227:71463/227:71465/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71459/227:71466"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71459/227:71466/227:71467"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71459/227:71466/227:71468"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71459/227:71466/227:71468/227:71469"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71459/227:71466/227:71468/227:71469/227:72024","Text text text text text text text","Включение в план")}
        </span>
        <span className={s.n113} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71459/227:71466/227:71468/227:71469/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n114} data-layer={"227:71459/227:71466/227:71468/227:71470"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71459/227:71466/227:71468/227:71470/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71459/227:71466/227:71468/227:71470/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n115} data-layer={"227:71459/227:71466/227:71468/227:71471"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71459/227:71466/227:71468/227:71471/227:72024","Text text text text text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n113} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71459/227:71466/227:71468/227:71471/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n116} data-layer={"227:71459/227:71466/227:71468/227:71472"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71459/227:71466/227:71468/227:71472/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71459/227:71466/227:71468/227:71472/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71475": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71475"} data-name={"View=additionally, State=editor, Hover=off, Sceleton=on"}>
  <span className={s.n101} data-layer={"227:71475/227:71476"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71475/227:71476/227:71477"} data-name={"icon/set/base"}>
      <span className={s.n117} data-layer={"227:71475/227:71476/227:71477/227:559"} data-name={"Rectangle 3464240"}></span>
    </span>
    <span className={s.n118} data-layer={"227:71475/227:71476/227:71478"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n107} data-layer={"227:71475/227:71476/227:71479"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71475/227:71476/227:71479/227:71480"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71475/227:71476/227:71479/227:71481"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71475/227:71482"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71475/227:71482/227:71483"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71475/227:71482/227:71484"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71475/227:71482/227:71484/227:71485"} data-name={"list_cast/layer/var"}>
        <span className={s.n119} data-layer={"227:71475/227:71482/227:71484/227:71485/227:72021"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n120} data-layer={"227:71475/227:71482/227:71484/227:71485/227:72022"} data-name={"Rectangle 3464284"}></span>
      </span>
      <span className={s.n114} data-layer={"227:71475/227:71482/227:71484/227:71486"} data-name={"list_cast/layer/var"}>
        <span className={s.n119} data-layer={"227:71475/227:71482/227:71484/227:71486/227:72021"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n120} data-layer={"227:71475/227:71482/227:71484/227:71486/227:72022"} data-name={"Rectangle 3464284"}></span>
      </span>
      <span className={s.n115} data-layer={"227:71475/227:71482/227:71484/227:71487"} data-name={"list_cast/layer/var"}>
        <span className={s.n119} data-layer={"227:71475/227:71482/227:71484/227:71487/227:72021"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n120} data-layer={"227:71475/227:71482/227:71484/227:71487/227:72022"} data-name={"Rectangle 3464284"}></span>
      </span>
      <span className={s.n116} data-layer={"227:71475/227:71482/227:71484/227:71488"} data-name={"list_cast/layer/var"}>
        <span className={s.n119} data-layer={"227:71475/227:71482/227:71484/227:71488/227:72021"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n120} data-layer={"227:71475/227:71482/227:71484/227:71488/227:72022"} data-name={"Rectangle 3464284"}></span>
      </span>
    </span>
  </span>
</Root>);
case "227:71491": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71491"} data-name={"View=additionally, State=alert, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71491/227:71492"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71491/227:71492/227:71493"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71491/227:71492/227:71493/227:525"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71491/227:71492/227:71493/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71491/227:71492/227:71493/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n106} data-layer={"227:71491/227:71492/227:71494"} data-name={"Переформат"}>
      {textSlot(text,"227:71491/227:71492/227:71494","Переформат","Переформат")}
    </span>
    <span className={s.n107} data-layer={"227:71491/227:71492/227:71495"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71491/227:71492/227:71495/227:71496"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71491/227:71492/227:71495/227:71496/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71491/227:71492/227:71495/227:71496/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71491/227:71492/227:71495/227:71496/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71491/227:71492/227:71495/227:71496/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71491/227:71492/227:71495/227:71497"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71491/227:71492/227:71495/227:71497/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71491/227:71498"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71491/227:71498/227:71499"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71491/227:71498/227:71500"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71491/227:71498/227:71500/227:71501"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71491/227:71498/227:71500/227:71501/227:72024","Text text text text text text text","Включение в план")}
        </span>
        <span className={s.n113} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n88} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71491/227:71498/227:71500/227:71501/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n114} data-layer={"227:71491/227:71498/227:71500/227:71502"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71491/227:71498/227:71500/227:71502/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n88} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71491/227:71498/227:71500/227:71502/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n115} data-layer={"227:71491/227:71498/227:71500/227:71503"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71491/227:71498/227:71500/227:71503/227:72024","Text text text text text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n113} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n88} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71491/227:71498/227:71500/227:71503/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n116} data-layer={"227:71491/227:71498/227:71500/227:71504"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71491/227:71498/227:71500/227:71504/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n88} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n24} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n81} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n26} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71491/227:71498/227:71500/227:71504/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71507": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71507"} data-name={"View=additionally, State=editor change, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71507/227:71508"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71507/227:71508/227:71509"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71507/227:71508/227:71509/227:525"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71507/227:71508/227:71509/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71507/227:71508/227:71509/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n121} data-layer={"227:71507/227:71508/227:71510"} data-name={"Переформат"}>
      {textSlot(text,"227:71507/227:71508/227:71510","Переформат","Переформат")}
    </span>
    <span className={s.n122} data-layer={"227:71507/227:71508/227:71511"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n123} data-layer={"227:71507/227:71508/227:71511/227:1531"} data-name={"Label"}>
        {textSlot(text,"227:71507/227:71508/227:71511/227:1531","Label","Перенесено из ШВ2С")}
      </span>
    </span>
    <span className={s.n107} data-layer={"227:71507/227:71508/227:71512"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71507/227:71508/227:71512/227:71513"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71507/227:71508/227:71512/227:71513/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71507/227:71508/227:71512/227:71513/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71507/227:71508/227:71512/227:71513/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71507/227:71508/227:71512/227:71513/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71507/227:71508/227:71512/227:71514"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71507/227:71508/227:71512/227:71514/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71507/227:71515"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71507/227:71515/227:71516"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71507/227:71515/227:71517"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71507/227:71515/227:71517/227:71518"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71507/227:71515/227:71517/227:71518/227:72024","Text text text text text text text","Включение в план")}
        </span>
        <span className={s.n113} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169"} data-name={"Box"}>
              <span className={s.n40} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:170"} data-name={"icon left & Text"}>
                <span className={s.n41} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:170/227:171"} data-name={"Text"}>
                  {textSlot(text,"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:170/227:171","Text","Text")}
                </span>
              </span>
              <span className={s.n42} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172/227:173"} data-name={"icon/set/base"}>
                  <span className={s.n43} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172/227:173/227:178"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n44} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172/227:173/227:179"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n45} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172/227:174"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71507/227:71515/227:71517/227:71518/227:72025/227:72027/227:169/227:172/227:174/227:181"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n114} data-layer={"227:71507/227:71515/227:71517/227:71519"} data-name={"list_cast/layer/var"}>
        <span className={s.n124} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71953"} data-name={"Text text"}>
          {textSlot(text,"227:71507/227:71515/227:71517/227:71519/227:71953","Text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954"} data-name={" Box value"}>
          <span className={s.n47} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955"} data-name={"Select/var"}>
            <span className={s.n125} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993"} data-name={"Box"}>
              <span className={s.n49} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1994"} data-name={"icon left & Text"}>
                <span className={s.n41} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1994/227:1995"} data-name={"Text"}>
                  {textSlot(text,"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1994/227:1995","Text","Text")}
                </span>
              </span>
              <span className={s.n50} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996/227:1997"} data-name={"icon/set/base"}>
                  <span className={s.n43} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996/227:1997/227:2002"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n44} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996/227:1997/227:2003"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n45} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996/227:1998"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71955/227:1993/227:1996/227:1998/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span className={s.n51} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71959"} data-name={"icon/set/base"}>
            <span className={s.n27} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71959/227:2013"} data-name={"Vector"}></span>
            <span className={s.n52} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71959/227:2014"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n53} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71959/227:2015"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 2.66667 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.03927 5.96073 C2.38577 6.30723 2.94756 6.30723 3.29406 5.96073 C3.64056 5.61423 3.64056 5.05244 3.29406 4.70594 L2.66667 5.33333 L2.03927 5.96073 Z M0 2.66667 L-0.6274 2.03927 C-0.9739 2.38577 -0.9739 2.94756 -0.6274 3.29406 L0 2.66667 Z M3.29406 0.6274 C3.64056 0.28089 3.64056 -0.28089 3.29406 -0.6274 C2.94756 -0.9739 2.38577 -0.9739 2.03927 -0.6274 L2.66667 0 L3.29406 0.6274 Z M2.66667 5.33333 L3.29406 4.70594 L0.6274 2.03927 L0 2.66667 L-0.6274 3.29406 L2.03927 5.96073 L2.66667 5.33333 Z M0 2.66667 L0.6274 3.29406 L3.29406 0.6274 L2.66667 0 L2.03927 -0.6274 L-0.6274 2.03927 L0 2.66667 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n54} data-layer={"227:71507/227:71515/227:71517/227:71519/227:71954/227:71959/227:2016"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 7.33333 5.33333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.88727 C-0.49003 -0.88727 -0.88727 -0.49003 -0.88727 0 C-0.88727 0.49003 -0.49003 0.88727 0 0.88727 L0 0 L0 -0.88727 Z M4.66667 0 L4.66667 -0.88727 L4.66667 0 Z M4 4.44606 C3.50997 4.44606 3.11273 4.84331 3.11273 5.33333 C3.11273 5.82336 3.50997 6.22061 4 6.22061 L4 5.33333 L4 4.44606 Z M0 0 L0 0.88727 L4.66667 0.88727 L4.66667 0 L4.66667 -0.88727 L0 -0.88727 L0 0 Z M4.66667 0 L4.66667 0.88727 C5.13859 0.88727 5.59119 1.07474 5.92489 1.40845 L6.55229 0.78105 L7.17968 0.15365 C6.51319 -0.51284 5.60923 -0.88727 4.66667 -0.88727 L4.66667 0 Z M6.55229 0.78105 L5.92489 1.40845 C6.25859 1.74215 6.44606 2.19474 6.44606 2.66667 L7.33333 2.66667 L8.22061 2.66667 C8.22061 1.7241 7.84617 0.82014 7.17968 0.15365 L6.55229 0.78105 Z M7.33333 2.66667 L6.44606 2.66667 C6.44606 3.13859 6.25859 3.59119 5.92489 3.92489 L6.55229 4.55228 L7.17968 5.17968 C7.84617 4.51319 8.22061 3.60923 8.22061 2.66667 L7.33333 2.66667 Z M6.55229 4.55228 L5.92489 3.92489 C5.59119 4.25859 5.13859 4.44606 4.66667 4.44606 L4.66667 5.33333 L4.66667 6.22061 C5.60923 6.22061 6.51319 5.84617 7.17968 5.17968 L6.55229 4.55228 Z M4.66667 5.33333 L4.66667 4.44606 L4 4.44606 L4 5.33333 L4 6.22061 L4.66667 6.22061 L4.66667 5.33333 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n115} data-layer={"227:71507/227:71515/227:71517/227:71520"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71507/227:71515/227:71517/227:71520/227:72024","Text text text text text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n113} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169"} data-name={"Box"}>
              <span className={s.n40} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:170"} data-name={"icon left & Text"}>
                <span className={s.n41} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:170/227:171"} data-name={"Text"}>
                  {textSlot(text,"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:170/227:171","Text","Text")}
                </span>
              </span>
              <span className={s.n42} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172/227:173"} data-name={"icon/set/base"}>
                  <span className={s.n43} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172/227:173/227:178"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n44} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172/227:173/227:179"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n45} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172/227:174"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71507/227:71515/227:71517/227:71520/227:72025/227:72027/227:169/227:172/227:174/227:181"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n116} data-layer={"227:71507/227:71515/227:71517/227:71521"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:71507/227:71515/227:71517/227:71521/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n113} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n79} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169"} data-name={"Box"}>
              <span className={s.n40} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:170"} data-name={"icon left & Text"}>
                <span className={s.n41} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:170/227:171"} data-name={"Text"}>
                  {textSlot(text,"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:170/227:171","Text","Text")}
                </span>
              </span>
              <span className={s.n42} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172/227:173"} data-name={"icon/set/base"}>
                  <span className={s.n43} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172/227:173/227:178"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n44} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172/227:173/227:179"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n45} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172/227:174"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:71507/227:71515/227:71517/227:71521/227:72025/227:72027/227:169/227:172/227:174/227:181"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71524": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71524"} data-name={"View=additionally, State=viewing, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71524/227:71525"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71524/227:71525/227:71526"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71524/227:71525/227:71526/227:525"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71524/227:71525/227:71526/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71524/227:71525/227:71526/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n126} data-layer={"227:71524/227:71525/227:71527"} data-name={"Переформат"}>
      {textSlot(text,"227:71524/227:71525/227:71527","Переформат","Переформат")}
    </span>
    <span className={s.n127} data-layer={"227:71524/227:71525/227:71528"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71524/227:71525/227:71528/227:71529"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71524/227:71525/227:71528/227:71529/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71524/227:71525/227:71528/227:71529/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71524/227:71525/227:71528/227:71529/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71524/227:71525/227:71528/227:71529/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71524/227:71531"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71524/227:71531/227:71532"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71524/227:71531/227:71533"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71524/227:71531/227:71533/227:71534"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71524/227:71531/227:71533/227:71534/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71524/227:71531/227:71533/227:71534/227:72036","Text text text","Включение в план")}
        </span>
        <span className={s.n128} data-layer={"227:71524/227:71531/227:71533/227:71534/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71524/227:71531/227:71533/227:71534/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71524/227:71531/227:71533/227:71534/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n114} data-layer={"227:71524/227:71531/227:71533/227:71535"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71524/227:71531/227:71533/227:71535/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71524/227:71531/227:71533/227:71535/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n128} data-layer={"227:71524/227:71531/227:71533/227:71535/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71524/227:71531/227:71533/227:71535/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71524/227:71531/227:71533/227:71535/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n115} data-layer={"227:71524/227:71531/227:71533/227:71536"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71524/227:71531/227:71533/227:71536/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71524/227:71531/227:71533/227:71536/227:72036","Text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n128} data-layer={"227:71524/227:71531/227:71533/227:71536/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71524/227:71531/227:71533/227:71536/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71524/227:71531/227:71533/227:71536/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n116} data-layer={"227:71524/227:71531/227:71533/227:71537"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71524/227:71531/227:71533/227:71537/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71524/227:71531/227:71533/227:71537/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n128} data-layer={"227:71524/227:71531/227:71533/227:71537/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71524/227:71531/227:71533/227:71537/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71524/227:71531/227:71533/227:71537/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71540": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71540"} data-name={"View=additionally, State=viewing, Hover=off, Sceleton=on"}>
  <span className={s.n101} data-layer={"227:71540/227:71541"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71540/227:71541/227:71542"} data-name={"icon/set/base"}>
      <span className={s.n117} data-layer={"227:71540/227:71541/227:71542/227:559"} data-name={"Rectangle 3464240"}></span>
    </span>
    <span className={s.n118} data-layer={"227:71540/227:71541/227:71543"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n107} data-layer={"227:71540/227:71541/227:71544"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71540/227:71541/227:71544/227:71545"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71540/227:71541/227:71544/227:71546"} data-name={"Button/var"}></span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71540/227:71547"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71540/227:71547/227:71548"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71540/227:71547/227:71549"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71540/227:71547/227:71549/227:71550"} data-name={"list_cast/layer/var"}>
        <span className={s.n129} data-layer={"227:71540/227:71547/227:71549/227:71550/227:72005"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n130} data-layer={"227:71540/227:71547/227:71549/227:71550/227:72006"} data-name={"Rectangle 3464283"}></span>
      </span>
      <span className={s.n114} data-layer={"227:71540/227:71547/227:71549/227:71551"} data-name={"list_cast/layer/var"}>
        <span className={s.n129} data-layer={"227:71540/227:71547/227:71549/227:71551/227:72005"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n130} data-layer={"227:71540/227:71547/227:71549/227:71551/227:72006"} data-name={"Rectangle 3464283"}></span>
      </span>
      <span className={s.n115} data-layer={"227:71540/227:71547/227:71549/227:71552"} data-name={"list_cast/layer/var"}>
        <span className={s.n129} data-layer={"227:71540/227:71547/227:71549/227:71552/227:72005"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n130} data-layer={"227:71540/227:71547/227:71549/227:71552/227:72006"} data-name={"Rectangle 3464283"}></span>
      </span>
      <span className={s.n116} data-layer={"227:71540/227:71547/227:71549/227:71553"} data-name={"list_cast/layer/var"}>
        <span className={s.n129} data-layer={"227:71540/227:71547/227:71549/227:71553/227:72005"} data-name={"Rectangle 3464282"}></span>
        <span className={s.n130} data-layer={"227:71540/227:71547/227:71549/227:71553/227:72006"} data-name={"Rectangle 3464283"}></span>
      </span>
    </span>
  </span>
</Root>);
case "227:71556": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71556"} data-name={"View=additionally, State=viewing different, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71556/227:71557"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71556/227:71557/227:71558"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71556/227:71557/227:71558/227:525"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71556/227:71557/227:71558/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71556/227:71557/227:71558/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n121} data-layer={"227:71556/227:71557/227:71559"} data-name={"Переформат"}>
      {textSlot(text,"227:71556/227:71557/227:71559","Переформат","Переформат")}
    </span>
    <span className={s.n131} data-layer={"227:71556/227:71557/227:71560"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n132} data-layer={"227:71556/227:71557/227:71560/227:1519"} data-name={"Label"}>
        {textSlot(text,"227:71556/227:71557/227:71560/227:1519","Label","Откл. от модели")}
      </span>
    </span>
    <span className={s.n133} data-layer={"227:71556/227:71557/227:71561"} data-name={"icon"}>
      <span className={s.n134} data-layer={"227:71556/227:71557/227:71561/227:71562"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71556/227:71557/227:71561/227:71562/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71556/227:71557/227:71561/227:71562/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71556/227:71557/227:71561/227:71562/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71556/227:71557/227:71561/227:71562/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n108} data-layer={"227:71556/227:71564"} data-name={"List"}>
    <span className={s.n109} data-layer={"227:71556/227:71564/227:71565"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n110} data-layer={"227:71556/227:71564/227:71566"} data-name={"List"}>
      <span className={s.n111} data-layer={"227:71556/227:71564/227:71566/227:71567"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71556/227:71564/227:71566/227:71567/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71556/227:71564/227:71566/227:71567/227:72036","Text text text","Включение в план")}
        </span>
        <span className={s.n128} data-layer={"227:71556/227:71564/227:71566/227:71567/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71556/227:71564/227:71566/227:71567/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71556/227:71564/227:71566/227:71567/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n114} data-layer={"227:71556/227:71564/227:71566/227:71568"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71556/227:71564/227:71566/227:71568/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71556/227:71564/227:71566/227:71568/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n128} data-layer={"227:71556/227:71564/227:71566/227:71568/227:72037"} data-name={" Box value"}>
          <span className={s.n99} data-layer={"227:71556/227:71564/227:71566/227:71568/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71556/227:71564/227:71566/227:71568/227:72037/227:72038","Value Value Value",<><span className={s.n69}>{"Value "}</span><span className={s.n69}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n115} data-layer={"227:71556/227:71564/227:71566/227:71569"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71556/227:71564/227:71566/227:71569/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71556/227:71564/227:71566/227:71569/227:72036","Text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n128} data-layer={"227:71556/227:71564/227:71566/227:71569/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71556/227:71564/227:71566/227:71569/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71556/227:71564/227:71566/227:71569/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n116} data-layer={"227:71556/227:71564/227:71566/227:71570"} data-name={"list_cast/layer/var"}>
        <span className={s.n112} data-layer={"227:71556/227:71564/227:71566/227:71570/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:71556/227:71564/227:71566/227:71570/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n128} data-layer={"227:71556/227:71564/227:71566/227:71570/227:72037"} data-name={" Box value"}>
          <span className={s.n93} data-layer={"227:71556/227:71564/227:71566/227:71570/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:71556/227:71564/227:71566/227:71570/227:72037/227:72038","Value Value Value",<><span className={s.n60}>{"Value "}</span><span className={s.n60}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71573": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71573"} data-name={"View=additionally roll, State=editor, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71573/227:71574"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71573/227:71574/227:71575"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71573/227:71574/227:71575/227:554"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71573/227:71574/227:71575/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71573/227:71574/227:71575/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n136} data-layer={"227:71573/227:71574/227:71575/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n106} data-layer={"227:71573/227:71574/227:71576"} data-name={"Переформат"}>
      {textSlot(text,"227:71573/227:71574/227:71576","Переформат","Переформат")}
    </span>
    <span className={s.n107} data-layer={"227:71573/227:71574/227:71577"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71573/227:71574/227:71577/227:71578"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71573/227:71574/227:71577/227:71578/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71573/227:71574/227:71577/227:71578/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71573/227:71574/227:71577/227:71578/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71573/227:71574/227:71577/227:71578/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71573/227:71574/227:71577/227:71579"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71573/227:71574/227:71577/227:71579/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71587": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71587"} data-name={"View=additionally roll, State=editor, Hover=off, Sceleton=on"}>
  <span className={s.n101} data-layer={"227:71587/227:71588"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71587/227:71588/227:71589"} data-name={"icon/set/base"}>
      <span className={s.n117} data-layer={"227:71587/227:71588/227:71589/227:559"} data-name={"Rectangle 3464240"}></span>
    </span>
    <span className={s.n118} data-layer={"227:71587/227:71588/227:71590"} data-name={"Rectangle 3464282"}></span>
    <span className={s.n107} data-layer={"227:71587/227:71588/227:71591"} data-name={"icon"}>
      <span className={s.n32} data-layer={"227:71587/227:71588/227:71591/227:71592"} data-name={"Button/var"}></span>
      <span className={s.n33} data-layer={"227:71587/227:71588/227:71591/227:71593"} data-name={"Button/var"}></span>
    </span>
  </span>
</Root>);
case "227:71601": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71601"} data-name={"View=additionally roll, State=alert, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71601/227:71602"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71601/227:71602/227:71603"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71601/227:71602/227:71603/227:554"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71601/227:71602/227:71603/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71601/227:71602/227:71603/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n136} data-layer={"227:71601/227:71602/227:71603/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n137} data-layer={"227:71601/227:71602/227:71604"} data-name={"Переформат"}>
      {textSlot(text,"227:71601/227:71602/227:71604","Переформат","Переформат")}
    </span>
    <span className={s.n107} data-layer={"227:71601/227:71602/227:71605"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71601/227:71602/227:71605/227:71606"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71601/227:71602/227:71605/227:71606/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71601/227:71602/227:71605/227:71606/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71601/227:71602/227:71605/227:71606/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71601/227:71602/227:71605/227:71606/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71601/227:71602/227:71605/227:71607"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71601/227:71602/227:71605/227:71607/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71615": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71615"} data-name={"View=additionally roll, State=editor change, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71615/227:71616"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71615/227:71616/227:71617"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71615/227:71616/227:71617/227:554"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71615/227:71616/227:71617/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71615/227:71616/227:71617/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n136} data-layer={"227:71615/227:71616/227:71617/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n121} data-layer={"227:71615/227:71616/227:71618"} data-name={"Переформат"}>
      {textSlot(text,"227:71615/227:71616/227:71618","Переформат","Переформат")}
    </span>
    <span className={s.n122} data-layer={"227:71615/227:71616/227:71619"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n123} data-layer={"227:71615/227:71616/227:71619/227:1531"} data-name={"Label"}>
        {textSlot(text,"227:71615/227:71616/227:71619/227:1531","Label","Перенесено из ШВ2С")}
      </span>
    </span>
    <span className={s.n107} data-layer={"227:71615/227:71616/227:71620"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71615/227:71616/227:71620/227:71621"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71615/227:71616/227:71620/227:71621/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71615/227:71616/227:71620/227:71621/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71615/227:71616/227:71620/227:71621/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71615/227:71616/227:71620/227:71621/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:71615/227:71616/227:71620/227:71622"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:71615/227:71616/227:71620/227:71622/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71630": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71630"} data-name={"View=additionally roll, State=viewing, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71630/227:71631"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71630/227:71631/227:71632"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71630/227:71631/227:71632/227:554"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71630/227:71631/227:71632/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71630/227:71631/227:71632/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n136} data-layer={"227:71630/227:71631/227:71632/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n126} data-layer={"227:71630/227:71631/227:71633"} data-name={"Переформат"}>
      {textSlot(text,"227:71630/227:71631/227:71633","Переформат","Переформат")}
    </span>
    <span className={s.n127} data-layer={"227:71630/227:71631/227:71634"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:71630/227:71631/227:71634/227:71635"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71630/227:71631/227:71634/227:71635/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71630/227:71631/227:71634/227:71635/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71630/227:71631/227:71634/227:71635/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71630/227:71631/227:71634/227:71635/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71644": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71644"} data-name={"View=additionally roll, State=viewing different, Hover=off, Sceleton=off"}>
  <span className={s.n101} data-layer={"227:71644/227:71645"} data-name={"Test_list_menu"}>
    <span className={s.n102} data-layer={"227:71644/227:71645/227:71646"} data-name={"icon/set/base"}>
      <span className={s.n103} data-layer={"227:71644/227:71645/227:71646/227:554"} data-name={"plus"}>
        <span className={s.n104} data-layer={"227:71644/227:71645/227:71646/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n105} data-layer={"227:71644/227:71645/227:71646/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n136} data-layer={"227:71644/227:71645/227:71646/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n121} data-layer={"227:71644/227:71645/227:71647"} data-name={"Переформат"}>
      {textSlot(text,"227:71644/227:71645/227:71647","Переформат","Переформат")}
    </span>
    <span className={s.n131} data-layer={"227:71644/227:71645/227:71648"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n132} data-layer={"227:71644/227:71645/227:71648/227:1519"} data-name={"Label"}>
        {textSlot(text,"227:71644/227:71645/227:71648/227:1519","Label","Откл. от модели")}
      </span>
    </span>
    <span className={s.n133} data-layer={"227:71644/227:71645/227:71649"} data-name={"icon"}>
      <span className={s.n134} data-layer={"227:71644/227:71645/227:71649/227:71650"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:71644/227:71645/227:71649/227:71650/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:71644/227:71645/227:71649/227:71650/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:71644/227:71645/227:71649/227:71650/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:71644/227:71645/227:71649/227:71650/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
