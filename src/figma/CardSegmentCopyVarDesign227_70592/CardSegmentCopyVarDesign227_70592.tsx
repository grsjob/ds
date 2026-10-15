// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './CardSegmentCopyVarDesign227_70592.module.css';
export const variants = [
  {
    "id": "227:70593",
    "name": "View=segment, State=editor, Hover=off",
    "props": {
      "View": "segment",
      "State": "editor",
      "Hover": "off"
    }
  },
  {
    "id": "227:70608",
    "name": "View=segment, State=editor, Hover=on",
    "props": {
      "View": "segment",
      "State": "editor",
      "Hover": "on"
    }
  },
  {
    "id": "227:70623",
    "name": "View=segment, State=viewing, Hover=off",
    "props": {
      "View": "segment",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70636",
    "name": "View=deviaton, State=viewing, Hover=off",
    "props": {
      "View": "deviaton",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70651",
    "name": "View=segment, State=viewing, Hover=on",
    "props": {
      "View": "segment",
      "State": "viewing",
      "Hover": "on"
    }
  },
  {
    "id": "227:70664",
    "name": "View=deviaton, State=viewing, Hover=on",
    "props": {
      "View": "deviaton",
      "State": "viewing",
      "Hover": "on"
    }
  },
  {
    "id": "227:70679",
    "name": "View=general, State=editor, Hover=off",
    "props": {
      "View": "general",
      "State": "editor",
      "Hover": "off"
    }
  },
  {
    "id": "227:70693",
    "name": "View=general, State=viewing, Hover=off",
    "props": {
      "View": "general",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70707",
    "name": "View=deviaton, State=viewing, Hover=off",
    "props": {
      "View": "deviaton",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70723",
    "name": "View=additionally, State=editor, Hover=off",
    "props": {
      "View": "additionally",
      "State": "editor",
      "Hover": "off"
    }
  },
  {
    "id": "227:70736",
    "name": "View=additionally, State=viewing, Hover=off",
    "props": {
      "View": "additionally",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70749",
    "name": "View=deviaton, State=viewing, Hover=off",
    "props": {
      "View": "deviaton",
      "State": "viewing",
      "Hover": "off"
    }
  },
  {
    "id": "227:70763",
    "name": "View=additionally roll, State=editor, Hover=off",
    "props": {
      "View": "additionally roll",
      "State": "editor",
      "Hover": "off"
    }
  }
] as const;
export type CardSegmentCopyVarDesign227_70592Variant = typeof variants[number]["id"];
export interface CardSegmentCopyVarDesign227_70592Dimensions {
  "View"?: "additionally" | "additionally roll" | "deviaton" | "general" | "segment";
  "State"?: "editor" | "viewing";
  "Hover"?: "off" | "on";
}
export interface CardSegmentCopyVarDesign227_70592Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: CardSegmentCopyVarDesign227_70592Variant;
  variantProps?: CardSegmentCopyVarDesign227_70592Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: CardSegmentCopyVarDesign227_70592Variant) => void;
}
const transitions = {"227:70593":{"ON_HOVER":"227:70608"},"227:70623":{"ON_HOVER":"227:70651"},"227:70636":{"ON_HOVER":"227:70664"},"227:70723":{"ON_CLICK":"227:70763"},"227:70763":{"ON_CLICK":"227:70723"}};
export function CardSegmentCopyVarDesign227_70592({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: CardSegmentCopyVarDesign227_70592Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:70593": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70593"} data-name={"View=segment, State=editor, Hover=off"}>
  <span className={s.n1} data-layer={"227:70593/227:70594"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:70593/227:70594/227:70595"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:70593/227:70594/227:70595/227:70596"} data-name={"Text"}>
        {textSlot(text,"227:70593/227:70594/227:70595/227:70596","Text","Сегмент 1")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:70593/227:70594/227:70597"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70593/227:70594/227:70597/227:70598"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70593/227:70594/227:70597/227:70598/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70593/227:70594/227:70597/227:70598/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70593/227:70594/227:70597/227:70598/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70593/227:70594/227:70597/227:70598/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:70593/227:70594/227:70597/227:70599"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:70593/227:70594/227:70597/227:70599/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70593/227:70600"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70593/227:70600/227:70601"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70593/227:70600/227:70601/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70593/227:70600/227:70601/227:72024","Text text text text text text text","Сегмент")}
      </span>
      <span className={s.n21} data-layer={"227:70593/227:70600/227:70601/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70593/227:70600/227:70601/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70593/227:70600/227:70602"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70593/227:70600/227:70602/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70593/227:70600/227:70602/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:70593/227:70600/227:70602/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70593/227:70600/227:70602/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70593/227:70600/227:70603"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70593/227:70600/227:70603/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70593/227:70600/227:70603/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:70593/227:70600/227:70603/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70593/227:70600/227:70603/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70593/227:70600/227:70604"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70593/227:70600/227:70604/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70593/227:70600/227:70604/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:70593/227:70600/227:70604/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70593/227:70600/227:70604/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n32} data-layer={"227:70593/227:70605"} data-name={"icon edd"}>
    <span className={s.n33} data-layer={"227:70593/227:70605/227:70606"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70593/227:70605/227:70606/227:345"} data-name={"Rectangle 3610"}></span>
      <span className={s.n34} data-layer={"227:70593/227:70605/227:70606/227:346"} data-name={"Group 3719"}>
        <span className={s.n35} data-layer={"227:70593/227:70605/227:70606/227:346/227:347"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.83333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.83333 0.9 C6.33039 0.9 6.73333 0.49706 6.73333 0 C6.73333 -0.49706 6.33039 -0.9 5.83333 -0.9 L5.83333 0 L5.83333 0.9 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.83333 0 L5.83333 -0.9 L0 -0.9 L0 0 L0 0.9 L5.83333 0.9 L5.83333 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n36} data-layer={"227:70593/227:70605/227:70606/227:346/227:348"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 5.83333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 5.83333 C-0.9 6.33039 -0.49706 6.73333 0 6.73333 C0.49706 6.73333 0.9 6.33039 0.9 5.83333 L0 5.83333 L-0.9 5.83333 Z M0 0 L-0.9 0 L-0.9 5.83333 L0 5.83333 L0.9 5.83333 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n17} data-layer={"227:70593/227:70605/227:70606/227:346/227:349"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.33847 0 L3.33847 1.8 L10.66153 1.8 L10.66153 0 L10.66153 -1.8 L3.33847 -1.8 L3.33847 0 Z M14 3.33847 L12.2 3.33847 L12.2 10.66153 L14 10.66153 L15.8 10.66153 L15.8 3.33847 L14 3.33847 Z M10.66153 14 L10.66153 12.2 L3.33847 12.2 L3.33847 14 L3.33847 15.8 L10.66153 15.8 L10.66153 14 Z M0 10.66153 L1.8 10.66153 L1.8 3.33847 L0 3.33847 L-1.8 3.33847 L-1.8 10.66153 L0 10.66153 Z M3.33847 14 L3.33847 12.2 C2.4888 12.2 1.8 11.5112 1.8 10.66153 L0 10.66153 L-1.8 10.66153 C-1.8 13.49943 0.50057 15.8 3.33847 15.8 L3.33847 14 Z M14 10.66153 L12.2 10.66153 C12.2 11.5112 11.5112 12.2 10.66153 12.2 L10.66153 14 L10.66153 15.8 C13.49943 15.8 15.8 13.49943 15.8 10.66153 L14 10.66153 Z M10.66153 0 L10.66153 1.8 C11.5112 1.8 12.2 2.4888 12.2 3.33847 L14 3.33847 L15.8 3.33847 C15.8 0.50057 13.49943 -1.8 10.66153 -1.8 L10.66153 0 Z M3.33847 0 L3.33847 -1.8 C0.50057 -1.8 -1.8 0.50057 -1.8 3.33847 L0 3.33847 L1.8 3.33847 C1.8 2.4888 2.4888 1.8 3.33847 1.8 L3.33847 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n37} data-layer={"227:70593/227:70605/227:70607"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"227:70593/227:70605/227:70607/227:289"} data-name={"Vector"}></span>
      <span className={s.n39} data-layer={"227:70593/227:70605/227:70607/227:290"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 10.90909 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M10.90909 0.9 C11.40615 0.9 11.80909 0.49706 11.80909 0 C11.80909 -0.49706 11.40615 -0.9 10.90909 -0.9 L10.90909 0 L10.90909 0.9 Z M0 0 L0 0.9 L10.90909 0.9 L10.90909 0 L10.90909 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n40} data-layer={"227:70593/227:70605/227:70607/227:291"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 4.09091" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 4.09091 C-0.9 4.58797 -0.49706 4.99091 0 4.99091 C0.49706 4.99091 0.9 4.58797 0.9 4.09091 L0 4.09091 L-0.9 4.09091 Z M0 0 L-0.9 0 L-0.9 4.09091 L0 4.09091 L0.9 4.09091 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n41} data-layer={"227:70593/227:70605/227:70607/227:292"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 4.09091" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 4.09091 C-0.9 4.58797 -0.49706 4.99091 0 4.99091 C0.49706 4.99091 0.9 4.58797 0.9 4.09091 L0 4.09091 L-0.9 4.09091 Z M0 0 L-0.9 0 L-0.9 4.09091 L0 4.09091 L0.9 4.09091 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"227:70593/227:70605/227:70607/227:293"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.54545 9.54545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.89689 -0.07474 C0.85561 -0.57008 0.4206 -0.93817 -0.07474 -0.89689 C-0.57008 -0.85561 -0.93817 -0.4206 -0.89689 0.07474 L0 0 L0.89689 -0.07474 Z M0.68182 8.18182 L1.58182 8.18182 C1.58182 8.15687 1.58078 8.13194 1.57871 8.10708 L0.68182 8.18182 Z M8.86364 8.18182 L7.96675 8.10708 C7.96467 8.13194 7.96364 8.15687 7.96364 8.18182 L8.86364 8.18182 Z M10.44235 0.07474 C10.48362 -0.4206 10.11553 -0.85561 9.6202 -0.89689 C9.12486 -0.93817 8.68984 -0.57008 8.64856 -0.07474 L9.54545 0 L10.44235 0.07474 Z M0 0 L-0.89689 0.07474 L-0.21507 8.25656 L0.68182 8.18182 L1.57871 8.10708 L0.89689 -0.07474 L0 0 Z M0.68182 8.18182 L-0.21818 8.18182 C-0.21818 8.78217 0.02031 9.35794 0.44482 9.78245 L1.08122 9.14605 L1.71761 8.50966 C1.63067 8.42271 1.58182 8.30478 1.58182 8.18182 L0.68182 8.18182 Z M1.08122 9.14605 L0.44482 9.78245 C0.86934 10.20696 1.4451 10.44545 2.04545 10.44545 L2.04545 9.54545 L2.04545 8.64545 C1.92249 8.64545 1.80456 8.59661 1.71761 8.50966 L1.08122 9.14605 Z M2.04545 9.54545 L2.04545 10.44545 L7.5 10.44545 L7.5 9.54545 L7.5 8.64545 L2.04545 8.64545 L2.04545 9.54545 Z M7.5 9.54545 L7.5 10.44545 C8.10035 10.44545 8.67612 10.20696 9.10063 9.78245 L8.46424 9.14605 L7.82784 8.50966 C7.74089 8.59661 7.62296 8.64545 7.5 8.64545 L7.5 9.54545 Z M8.46424 9.14605 L9.10063 9.78245 C9.52515 9.35794 9.76364 8.78217 9.76364 8.18182 L8.86364 8.18182 L7.96364 8.18182 C7.96364 8.30478 7.91479 8.42271 7.82784 8.50966 L8.46424 9.14605 Z M8.86364 8.18182 L9.76053 8.25656 L10.44235 0.07474 L9.54545 0 L8.64856 -0.07474 L7.96675 8.10708 L8.86364 8.18182 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n43} data-layer={"227:70593/227:70605/227:70607/227:294"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 4.09091 2.72727" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.9 2.72727 C-0.9 3.22433 -0.49706 3.62727 0 3.62727 C0.49706 3.62727 0.9 3.22433 0.9 2.72727 L0 2.72727 L-0.9 2.72727 Z M0.68182 0 L0.68182 -0.9 L0.68182 0 Z M3.40909 0 L3.40909 -0.9 L3.40909 0 Z M3.19091 2.72727 C3.19091 3.22433 3.59385 3.62727 4.09091 3.62727 C4.58797 3.62727 4.99091 3.22433 4.99091 2.72727 L4.09091 2.72727 L3.19091 2.72727 Z M0 2.72727 L0.9 2.72727 L0.9 0.68182 L0 0.68182 L-0.9 0.68182 L-0.9 2.72727 L0 2.72727 Z M0 0.68182 L0.9 0.68182 C0.9 0.73968 0.87701 0.79518 0.8361 0.8361 L0.1997 0.1997 L-0.4367 -0.4367 C-0.73334 -0.14005 -0.9 0.26229 -0.9 0.68182 L0 0.68182 Z M0.1997 0.1997 L0.8361 0.8361 C0.79518 0.87701 0.73968 0.9 0.68182 0.9 L0.68182 0 L0.68182 -0.9 C0.26229 -0.9 -0.14005 -0.73334 -0.4367 -0.4367 L0.1997 0.1997 Z M0.68182 0 L0.68182 0.9 L3.40909 0.9 L3.40909 0 L3.40909 -0.9 L0.68182 -0.9 L0.68182 0 Z M3.40909 0 L3.40909 0.9 C3.35123 0.9 3.29573 0.87701 3.25481 0.8361 L3.89121 0.1997 L4.52761 -0.4367 C4.23096 -0.73334 3.82862 -0.9 3.40909 -0.9 L3.40909 0 Z M3.89121 0.1997 L3.25481 0.8361 C3.2139 0.79518 3.19091 0.73968 3.19091 0.68182 L4.09091 0.68182 L4.99091 0.68182 C4.99091 0.26229 4.82425 -0.14005 4.52761 -0.4367 L3.89121 0.1997 Z M4.09091 0.68182 L3.19091 0.68182 L3.19091 2.72727 L4.09091 2.72727 L4.99091 2.72727 L4.99091 0.68182 L4.09091 0.68182 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:70608": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70608"} data-name={"View=segment, State=editor, Hover=on"}>
  <span className={s.n1} data-layer={"227:70608/227:70609"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:70608/227:70609/227:70610"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:70608/227:70609/227:70610/227:70611"} data-name={"Text"}>
        {textSlot(text,"227:70608/227:70609/227:70610/227:70611","Text","Сегмент 1")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:70608/227:70609/227:70612"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70608/227:70609/227:70612/227:70613"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70608/227:70609/227:70612/227:70613/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70608/227:70609/227:70612/227:70613/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70608/227:70609/227:70612/227:70613/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70608/227:70609/227:70612/227:70613/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:70608/227:70609/227:70612/227:70614"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:70608/227:70609/227:70612/227:70614/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70608/227:70615"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70608/227:70615/227:70616"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70608/227:70615/227:70616/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70608/227:70615/227:70616/227:72024","Text text text text text text text","Сегмент")}
      </span>
      <span className={s.n21} data-layer={"227:70608/227:70615/227:70616/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70608/227:70615/227:70616/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70608/227:70615/227:70617"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70608/227:70615/227:70617/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70608/227:70615/227:70617/227:72024","Text text text text text text text","Донор/реципиент")}
      </span>
      <span className={s.n21} data-layer={"227:70608/227:70615/227:70617/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70608/227:70615/227:70617/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70608/227:70615/227:70618"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70608/227:70615/227:70618/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70608/227:70615/227:70618/227:72024","Text text text text text text text","ВСП-контрагент")}
      </span>
      <span className={s.n21} data-layer={"227:70608/227:70615/227:70618/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70608/227:70615/227:70618/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70608/227:70615/227:70619"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70608/227:70615/227:70619/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70608/227:70615/227:70619/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n21} data-layer={"227:70608/227:70615/227:70619/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n23} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78"} data-name={"Box"}>
            <span className={s.n24} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:79"} data-name={"icon left & Text"}>
              <span className={s.n25} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:79/227:80"} data-name={"Placeholder"}>
                {textSlot(text,"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:79/227:80","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n26} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:81"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:81/227:83"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70608/227:70615/227:70619/227:72025/227:72027/227:78/227:81/227:83/227:181"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n32} data-layer={"227:70608/227:70620"} data-name={"icon edd"}>
    <span className={s.n33} data-layer={"227:70608/227:70620/227:70621"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70608/227:70620/227:70621/227:345"} data-name={"Rectangle 3610"}></span>
      <span className={s.n34} data-layer={"227:70608/227:70620/227:70621/227:346"} data-name={"Group 3719"}>
        <span className={s.n35} data-layer={"227:70608/227:70620/227:70621/227:346/227:347"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.83333 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.83333 0.9 C6.33039 0.9 6.73333 0.49706 6.73333 0 C6.73333 -0.49706 6.33039 -0.9 5.83333 -0.9 L5.83333 0 L5.83333 0.9 Z M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M5.83333 0 L5.83333 -0.9 L0 -0.9 L0 0 L0 0.9 L5.83333 0.9 L5.83333 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n36} data-layer={"227:70608/227:70620/227:70621/227:346/227:348"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 5.83333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 5.83333 C-0.9 6.33039 -0.49706 6.73333 0 6.73333 C0.49706 6.73333 0.9 6.33039 0.9 5.83333 L0 5.83333 L-0.9 5.83333 Z M0 0 L-0.9 0 L-0.9 5.83333 L0 5.83333 L0.9 5.83333 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n17} data-layer={"227:70608/227:70620/227:70621/227:346/227:349"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14 14" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.33847 0 L3.33847 1.8 L10.66153 1.8 L10.66153 0 L10.66153 -1.8 L3.33847 -1.8 L3.33847 0 Z M14 3.33847 L12.2 3.33847 L12.2 10.66153 L14 10.66153 L15.8 10.66153 L15.8 3.33847 L14 3.33847 Z M10.66153 14 L10.66153 12.2 L3.33847 12.2 L3.33847 14 L3.33847 15.8 L10.66153 15.8 L10.66153 14 Z M0 10.66153 L1.8 10.66153 L1.8 3.33847 L0 3.33847 L-1.8 3.33847 L-1.8 10.66153 L0 10.66153 Z M3.33847 14 L3.33847 12.2 C2.4888 12.2 1.8 11.5112 1.8 10.66153 L0 10.66153 L-1.8 10.66153 C-1.8 13.49943 0.50057 15.8 3.33847 15.8 L3.33847 14 Z M14 10.66153 L12.2 10.66153 C12.2 11.5112 11.5112 12.2 10.66153 12.2 L10.66153 14 L10.66153 15.8 C13.49943 15.8 15.8 13.49943 15.8 10.66153 L14 10.66153 Z M10.66153 0 L10.66153 1.8 C11.5112 1.8 12.2 2.4888 12.2 3.33847 L14 3.33847 L15.8 3.33847 C15.8 0.50057 13.49943 -1.8 10.66153 -1.8 L10.66153 0 Z M3.33847 0 L3.33847 -1.8 C0.50057 -1.8 -1.8 0.50057 -1.8 3.33847 L0 3.33847 L1.8 3.33847 C1.8 2.4888 2.4888 1.8 3.33847 1.8 L3.33847 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n37} data-layer={"227:70608/227:70620/227:70622"} data-name={"icon/set/base"}>
      <span className={s.n38} data-layer={"227:70608/227:70620/227:70622/227:289"} data-name={"Vector"}></span>
      <span className={s.n39} data-layer={"227:70608/227:70620/227:70622/227:290"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 10.90909 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 C-0.9 0.49706 -0.49706 0.9 0 0.9 L0 0 L0 -0.9 Z M10.90909 0.9 C11.40615 0.9 11.80909 0.49706 11.80909 0 C11.80909 -0.49706 11.40615 -0.9 10.90909 -0.9 L10.90909 0 L10.90909 0.9 Z M0 0 L0 0.9 L10.90909 0.9 L10.90909 0 L10.90909 -0.9 L0 -0.9 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n40} data-layer={"227:70608/227:70620/227:70622/227:291"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 4.09091" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 4.09091 C-0.9 4.58797 -0.49706 4.99091 0 4.99091 C0.49706 4.99091 0.9 4.58797 0.9 4.09091 L0 4.09091 L-0.9 4.09091 Z M0 0 L-0.9 0 L-0.9 4.09091 L0 4.09091 L0.9 4.09091 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n41} data-layer={"227:70608/227:70620/227:70622/227:292"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 4.09091" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.9 0 C0.9 -0.49706 0.49706 -0.9 0 -0.9 C-0.49706 -0.9 -0.9 -0.49706 -0.9 0 L0 0 L0.9 0 Z M-0.9 4.09091 C-0.9 4.58797 -0.49706 4.99091 0 4.99091 C0.49706 4.99091 0.9 4.58797 0.9 4.09091 L0 4.09091 L-0.9 4.09091 Z M0 0 L-0.9 0 L-0.9 4.09091 L0 4.09091 L0.9 4.09091 L0.9 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"227:70608/227:70620/227:70622/227:293"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.54545 9.54545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.89689 -0.07474 C0.85561 -0.57008 0.4206 -0.93817 -0.07474 -0.89689 C-0.57008 -0.85561 -0.93817 -0.4206 -0.89689 0.07474 L0 0 L0.89689 -0.07474 Z M0.68182 8.18182 L1.58182 8.18182 C1.58182 8.15687 1.58078 8.13194 1.57871 8.10708 L0.68182 8.18182 Z M8.86364 8.18182 L7.96675 8.10708 C7.96467 8.13194 7.96364 8.15687 7.96364 8.18182 L8.86364 8.18182 Z M10.44235 0.07474 C10.48362 -0.4206 10.11553 -0.85561 9.6202 -0.89689 C9.12486 -0.93817 8.68984 -0.57008 8.64856 -0.07474 L9.54545 0 L10.44235 0.07474 Z M0 0 L-0.89689 0.07474 L-0.21507 8.25656 L0.68182 8.18182 L1.57871 8.10708 L0.89689 -0.07474 L0 0 Z M0.68182 8.18182 L-0.21818 8.18182 C-0.21818 8.78217 0.02031 9.35794 0.44482 9.78245 L1.08122 9.14605 L1.71761 8.50966 C1.63067 8.42271 1.58182 8.30478 1.58182 8.18182 L0.68182 8.18182 Z M1.08122 9.14605 L0.44482 9.78245 C0.86934 10.20696 1.4451 10.44545 2.04545 10.44545 L2.04545 9.54545 L2.04545 8.64545 C1.92249 8.64545 1.80456 8.59661 1.71761 8.50966 L1.08122 9.14605 Z M2.04545 9.54545 L2.04545 10.44545 L7.5 10.44545 L7.5 9.54545 L7.5 8.64545 L2.04545 8.64545 L2.04545 9.54545 Z M7.5 9.54545 L7.5 10.44545 C8.10035 10.44545 8.67612 10.20696 9.10063 9.78245 L8.46424 9.14605 L7.82784 8.50966 C7.74089 8.59661 7.62296 8.64545 7.5 8.64545 L7.5 9.54545 Z M8.46424 9.14605 L9.10063 9.78245 C9.52515 9.35794 9.76364 8.78217 9.76364 8.18182 L8.86364 8.18182 L7.96364 8.18182 C7.96364 8.30478 7.91479 8.42271 7.82784 8.50966 L8.46424 9.14605 Z M8.86364 8.18182 L9.76053 8.25656 L10.44235 0.07474 L9.54545 0 L8.64856 -0.07474 L7.96675 8.10708 L8.86364 8.18182 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n43} data-layer={"227:70608/227:70620/227:70622/227:294"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 4.09091 2.72727" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.9 2.72727 C-0.9 3.22433 -0.49706 3.62727 0 3.62727 C0.49706 3.62727 0.9 3.22433 0.9 2.72727 L0 2.72727 L-0.9 2.72727 Z M0.68182 0 L0.68182 -0.9 L0.68182 0 Z M3.40909 0 L3.40909 -0.9 L3.40909 0 Z M3.19091 2.72727 C3.19091 3.22433 3.59385 3.62727 4.09091 3.62727 C4.58797 3.62727 4.99091 3.22433 4.99091 2.72727 L4.09091 2.72727 L3.19091 2.72727 Z M0 2.72727 L0.9 2.72727 L0.9 0.68182 L0 0.68182 L-0.9 0.68182 L-0.9 2.72727 L0 2.72727 Z M0 0.68182 L0.9 0.68182 C0.9 0.73968 0.87701 0.79518 0.8361 0.8361 L0.1997 0.1997 L-0.4367 -0.4367 C-0.73334 -0.14005 -0.9 0.26229 -0.9 0.68182 L0 0.68182 Z M0.1997 0.1997 L0.8361 0.8361 C0.79518 0.87701 0.73968 0.9 0.68182 0.9 L0.68182 0 L0.68182 -0.9 C0.26229 -0.9 -0.14005 -0.73334 -0.4367 -0.4367 L0.1997 0.1997 Z M0.68182 0 L0.68182 0.9 L3.40909 0.9 L3.40909 0 L3.40909 -0.9 L0.68182 -0.9 L0.68182 0 Z M3.40909 0 L3.40909 0.9 C3.35123 0.9 3.29573 0.87701 3.25481 0.8361 L3.89121 0.1997 L4.52761 -0.4367 C4.23096 -0.73334 3.82862 -0.9 3.40909 -0.9 L3.40909 0 Z M3.89121 0.1997 L3.25481 0.8361 C3.2139 0.79518 3.19091 0.73968 3.19091 0.68182 L4.09091 0.68182 L4.99091 0.68182 C4.99091 0.26229 4.82425 -0.14005 4.52761 -0.4367 L3.89121 0.1997 Z M4.09091 0.68182 L3.19091 0.68182 L3.19091 2.72727 L4.09091 2.72727 L4.99091 2.72727 L4.99091 0.68182 L4.09091 0.68182 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:70623": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70623"} data-name={"View=segment, State=viewing, Hover=off"}>
  <span className={s.n1} data-layer={"227:70623/227:70624"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:70623/227:70624/227:70625"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:70623/227:70624/227:70625/227:70626"} data-name={"Text"}>
        {textSlot(text,"227:70623/227:70624/227:70625/227:70626","Text","Сегмент 1")}
      </span>
    </span>
    <span className={s.n46} data-layer={"227:70623/227:70624/227:70627"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70623/227:70624/227:70627/227:70628"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70623/227:70624/227:70627/227:70628/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70623/227:70624/227:70627/227:70628/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70623/227:70624/227:70627/227:70628/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70623/227:70624/227:70627/227:70628/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70623/227:70630"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70623/227:70630/227:70631"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70623/227:70630/227:70631/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70623/227:70630/227:70631/227:72036","Text text text","Сегмент")}
      </span>
      <span className={s.n47} data-layer={"227:70623/227:70630/227:70631/227:72037"} data-name={" Box value"}>
        <span className={s.n48} data-layer={"227:70623/227:70630/227:70631/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70623/227:70630/227:70631/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"ХЦК"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70623/227:70630/227:70632"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70623/227:70630/227:70632/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70623/227:70630/227:70632/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n47} data-layer={"227:70623/227:70630/227:70632/227:72037"} data-name={" Box value"}>
        <span className={s.n50} data-layer={"227:70623/227:70630/227:70632/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70623/227:70630/227:70632/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Донор"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70623/227:70630/227:70633"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70623/227:70630/227:70633/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70623/227:70630/227:70633/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n47} data-layer={"227:70623/227:70630/227:70633/227:72037"} data-name={" Box value"}>
        <span className={s.n51} data-layer={"227:70623/227:70630/227:70633/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70623/227:70630/227:70633/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"8576 847 890"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70623/227:70630/227:70634"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70623/227:70630/227:70634/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70623/227:70630/227:70634/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n47} data-layer={"227:70623/227:70630/227:70634/227:72037"} data-name={" Box value"}>
        <span className={s.n52} data-layer={"227:70623/227:70630/227:70634/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70623/227:70630/227:70634/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70636": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70636"} data-name={"View=deviaton, State=viewing, Hover=off"}>
  <span className={s.n1} data-layer={"227:70636/227:70637"} data-name={"Headline"}>
    <span className={s.n53} data-layer={"227:70636/227:70637/227:70638"} data-name={"status"}>
      <span className={s.n54} data-layer={"227:70636/227:70637/227:70638/227:70639"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:70636/227:70637/227:70638/227:70639/227:70640"} data-name={"Text"}>
          {textSlot(text,"227:70636/227:70637/227:70638/227:70639/227:70640","Text","Сегмент 1")}
        </span>
      </span>
      <span className={s.n55} data-layer={"227:70636/227:70637/227:70638/227:70641"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n56} data-layer={"227:70636/227:70637/227:70638/227:70641/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:70636/227:70637/227:70638/227:70641/227:1519","Label","Откл. от модели")}
        </span>
      </span>
    </span>
    <span className={s.n46} data-layer={"227:70636/227:70637/227:70642"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70636/227:70637/227:70642/227:70643"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70636/227:70637/227:70642/227:70643/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70636/227:70637/227:70642/227:70643/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70636/227:70637/227:70642/227:70643/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70636/227:70637/227:70642/227:70643/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70636/227:70645"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70636/227:70645/227:70646"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70636/227:70645/227:70646/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70636/227:70645/227:70646/227:72036","Text text text","Сегмент")}
      </span>
      <span className={s.n47} data-layer={"227:70636/227:70645/227:70646/227:72037"} data-name={" Box value"}>
        <span className={s.n48} data-layer={"227:70636/227:70645/227:70646/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70636/227:70645/227:70646/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"ХЦК"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70636/227:70645/227:70647"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70636/227:70645/227:70647/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70636/227:70645/227:70647/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n47} data-layer={"227:70636/227:70645/227:70647/227:72037"} data-name={" Box value"}>
        <span className={s.n50} data-layer={"227:70636/227:70645/227:70647/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70636/227:70645/227:70647/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Донор"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70636/227:70645/227:70648"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70636/227:70645/227:70648/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70636/227:70645/227:70648/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n47} data-layer={"227:70636/227:70645/227:70648/227:72037"} data-name={" Box value"}>
        <span className={s.n51} data-layer={"227:70636/227:70645/227:70648/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70636/227:70645/227:70648/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"8576 847 890"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70636/227:70645/227:70649"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70636/227:70645/227:70649/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70636/227:70645/227:70649/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n47} data-layer={"227:70636/227:70645/227:70649/227:72037"} data-name={" Box value"}>
        <span className={s.n52} data-layer={"227:70636/227:70645/227:70649/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70636/227:70645/227:70649/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70651": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70651"} data-name={"View=segment, State=viewing, Hover=on"}>
  <span className={s.n1} data-layer={"227:70651/227:70652"} data-name={"Headline"}>
    <span className={s.n2} data-layer={"227:70651/227:70652/227:70653"} data-name={"Name"}>
      <span className={s.n3} data-layer={"227:70651/227:70652/227:70653/227:70654"} data-name={"Text"}>
        {textSlot(text,"227:70651/227:70652/227:70653/227:70654","Text","Сегмент 1")}
      </span>
    </span>
    <span className={s.n46} data-layer={"227:70651/227:70652/227:70655"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70651/227:70652/227:70655/227:70656"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70651/227:70652/227:70655/227:70656/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70651/227:70652/227:70655/227:70656/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70651/227:70652/227:70655/227:70656/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70651/227:70652/227:70655/227:70656/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70651/227:70658"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70651/227:70658/227:70659"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70651/227:70658/227:70659/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70651/227:70658/227:70659/227:72036","Text text text","Сегмент")}
      </span>
      <span className={s.n47} data-layer={"227:70651/227:70658/227:70659/227:72037"} data-name={" Box value"}>
        <span className={s.n48} data-layer={"227:70651/227:70658/227:70659/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70651/227:70658/227:70659/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"ХЦК"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70651/227:70658/227:70660"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70651/227:70658/227:70660/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70651/227:70658/227:70660/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n47} data-layer={"227:70651/227:70658/227:70660/227:72037"} data-name={" Box value"}>
        <span className={s.n50} data-layer={"227:70651/227:70658/227:70660/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70651/227:70658/227:70660/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Донор"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70651/227:70658/227:70661"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70651/227:70658/227:70661/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70651/227:70658/227:70661/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n47} data-layer={"227:70651/227:70658/227:70661/227:72037"} data-name={" Box value"}>
        <span className={s.n51} data-layer={"227:70651/227:70658/227:70661/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70651/227:70658/227:70661/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"8576 847 890"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70651/227:70658/227:70662"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70651/227:70658/227:70662/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70651/227:70658/227:70662/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n47} data-layer={"227:70651/227:70658/227:70662/227:72037"} data-name={" Box value"}>
        <span className={s.n52} data-layer={"227:70651/227:70658/227:70662/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70651/227:70658/227:70662/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70664": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70664"} data-name={"View=deviaton, State=viewing, Hover=on"}>
  <span className={s.n1} data-layer={"227:70664/227:70665"} data-name={"Headline"}>
    <span className={s.n53} data-layer={"227:70664/227:70665/227:70666"} data-name={"status"}>
      <span className={s.n54} data-layer={"227:70664/227:70665/227:70666/227:70667"} data-name={"Name"}>
        <span className={s.n3} data-layer={"227:70664/227:70665/227:70666/227:70667/227:70668"} data-name={"Text"}>
          {textSlot(text,"227:70664/227:70665/227:70666/227:70667/227:70668","Text","Сегмент 1")}
        </span>
      </span>
      <span className={s.n55} data-layer={"227:70664/227:70665/227:70666/227:70669"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n56} data-layer={"227:70664/227:70665/227:70666/227:70669/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:70664/227:70665/227:70666/227:70669/227:1519","Label","Откл. от модели")}
        </span>
      </span>
    </span>
    <span className={s.n46} data-layer={"227:70664/227:70665/227:70670"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70664/227:70665/227:70670/227:70671"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70664/227:70665/227:70670/227:70671/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70664/227:70665/227:70670/227:70671/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70664/227:70665/227:70670/227:70671/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70664/227:70665/227:70670/227:70671/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n18} data-layer={"227:70664/227:70673"} data-name={"Box"}>
    <span className={s.n19} data-layer={"227:70664/227:70673/227:70674"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70664/227:70673/227:70674/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70664/227:70673/227:70674/227:72036","Text text text","Сегмент")}
      </span>
      <span className={s.n47} data-layer={"227:70664/227:70673/227:70674/227:72037"} data-name={" Box value"}>
        <span className={s.n48} data-layer={"227:70664/227:70673/227:70674/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70664/227:70673/227:70674/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"ХЦК"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:70664/227:70673/227:70675"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70664/227:70673/227:70675/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70664/227:70673/227:70675/227:72036","Text text text","Донор/реципиент")}
      </span>
      <span className={s.n47} data-layer={"227:70664/227:70673/227:70675/227:72037"} data-name={" Box value"}>
        <span className={s.n50} data-layer={"227:70664/227:70673/227:70675/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70664/227:70673/227:70675/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Донор"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n30} data-layer={"227:70664/227:70673/227:70676"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70664/227:70673/227:70676/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70664/227:70673/227:70676/227:72036","Text text text","ВСП-контрагент")}
      </span>
      <span className={s.n47} data-layer={"227:70664/227:70673/227:70676/227:72037"} data-name={" Box value"}>
        <span className={s.n51} data-layer={"227:70664/227:70673/227:70676/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70664/227:70673/227:70676/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"8576 847 890"}</span><span className={s.n49}>{" "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n31} data-layer={"227:70664/227:70673/227:70677"} data-name={"list_cast/layer/var"}>
      <span className={s.n20} data-layer={"227:70664/227:70673/227:70677/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70664/227:70673/227:70677/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n47} data-layer={"227:70664/227:70673/227:70677/227:72037"} data-name={" Box value"}>
        <span className={s.n52} data-layer={"227:70664/227:70673/227:70677/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70664/227:70673/227:70677/227:72037/227:72038","Value Value Value","2027")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70679": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70679"} data-name={"View=general, State=editor, Hover=off"}>
  <span className={s.n59} data-layer={"227:70679/227:70680"} data-name={"Headline"}>
    <span className={s.n60} data-layer={"227:70679/227:70680/227:70681"} data-name={"Name"}>
      <span className={s.n61} data-layer={"227:70679/227:70680/227:70681/227:70682"} data-name={"Согласование УТНФ"}>
        {textSlot(text,"227:70679/227:70680/227:70681/227:70682","Согласование УТНФ","Согласование УТНФ")}
      </span>
    </span>
    <span className={s.n62} data-layer={"227:70679/227:70680/227:70683"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70679/227:70680/227:70683/227:70684"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70679/227:70680/227:70683/227:70684/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70679/227:70680/227:70683/227:70684/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70679/227:70680/227:70683/227:70684/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70679/227:70680/227:70683/227:70684/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:70679/227:70680/227:70683/227:70685"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:70679/227:70680/227:70683/227:70685/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n63} data-layer={"227:70679/227:70686"} data-name={"List"}>
    <span className={s.n64} data-layer={"227:70679/227:70686/227:70687"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70679/227:70686/227:70687/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70679/227:70686/227:70687/227:72024","Text text text text text text text","Решение")}
      </span>
      <span className={s.n66} data-layer={"227:70679/227:70686/227:70687/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n67} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n68} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n69} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n70} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70679/227:70686/227:70687/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n71} data-layer={"227:70679/227:70686/227:70688"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70679/227:70686/227:70688/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70679/227:70686/227:70688/227:72024","Text text text text text text text","Предложение")}
      </span>
      <span className={s.n66} data-layer={"227:70679/227:70686/227:70688/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n67} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n68} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n69} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n70} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70679/227:70686/227:70688/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n72} data-layer={"227:70679/227:70686/227:70689"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70679/227:70686/227:70689/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70679/227:70686/227:70689/227:72024","Text text text text text text text","Год решения")}
      </span>
      <span className={s.n66} data-layer={"227:70679/227:70686/227:70689/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n67} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n68} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n69} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n70} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70679/227:70686/227:70689/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n73} data-layer={"227:70679/227:70686/227:70690"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70679/227:70686/227:70690/227:72024"} data-name={"Text text text text text text text"}>
        {textSlot(text,"227:70679/227:70686/227:70690/227:72024","Text text text text text text text","Год перемещения")}
      </span>
      <span className={s.n66} data-layer={"227:70679/227:70686/227:70690/227:72025"} data-name={" Box value"}>
        <span className={s.n22} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027"} data-name={"Select/var"}>
          <span className={s.n67} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977"} data-name={"Box"}>
            <span className={s.n68} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
              <span className={s.n69} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                {textSlot(text,"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
              </span>
            </span>
            <span className={s.n70} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
              <span className={s.n27} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                <span className={s.n28} data-layer={"227:70679/227:70686/227:70690/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
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
case "227:70693": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70693"} data-name={"View=general, State=viewing, Hover=off"}>
  <span className={s.n59} data-layer={"227:70693/227:70694"} data-name={"Headline"}>
    <span className={s.n60} data-layer={"227:70693/227:70694/227:70695"} data-name={"Name"}>
      <span className={s.n61} data-layer={"227:70693/227:70694/227:70695/227:70696"} data-name={"Согласование УТНФ"}>
        {textSlot(text,"227:70693/227:70694/227:70695/227:70696","Согласование УТНФ","Согласование УТНФ")}
      </span>
    </span>
    <span className={s.n62} data-layer={"227:70693/227:70694/227:70697"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70693/227:70694/227:70697/227:70698"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70693/227:70694/227:70697/227:70698/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70693/227:70694/227:70697/227:70698/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70693/227:70694/227:70697/227:70698/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70693/227:70694/227:70697/227:70698/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:70693/227:70694/227:70697/227:70699"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:70693/227:70694/227:70697/227:70699/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n63} data-layer={"227:70693/227:70700"} data-name={"List"}>
    <span className={s.n64} data-layer={"227:70693/227:70700/227:70701"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70693/227:70700/227:70701/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70693/227:70700/227:70701/227:72036","Text text text","Решение")}
      </span>
      <span className={s.n74} data-layer={"227:70693/227:70700/227:70701/227:72037"} data-name={" Box value"}>
        <span className={s.n75} data-layer={"227:70693/227:70700/227:70701/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70693/227:70700/227:70701/227:72037/227:72038","Value Value Value",<><span className={s.n76}>{"Value "}</span><span className={s.n76}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n71} data-layer={"227:70693/227:70700/227:70702"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70693/227:70700/227:70702/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70693/227:70700/227:70702/227:72036","Text text text","Предложение")}
      </span>
      <span className={s.n74} data-layer={"227:70693/227:70700/227:70702/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70693/227:70700/227:70702/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70693/227:70700/227:70702/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n72} data-layer={"227:70693/227:70700/227:70703"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70693/227:70700/227:70703/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70693/227:70700/227:70703/227:72036","Text text text","Год решения")}
      </span>
      <span className={s.n74} data-layer={"227:70693/227:70700/227:70703/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70693/227:70700/227:70703/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70693/227:70700/227:70703/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n73} data-layer={"227:70693/227:70700/227:70704"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70693/227:70700/227:70704/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70693/227:70700/227:70704/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n74} data-layer={"227:70693/227:70700/227:70704/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70693/227:70700/227:70704/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70693/227:70700/227:70704/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70707": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70707"} data-name={"View=deviaton, State=viewing, Hover=off"}>
  <span className={s.n59} data-layer={"227:70707/227:70708"} data-name={"Headline"}>
    <span className={s.n78} data-layer={"227:70707/227:70708/227:70709"} data-name={"status"}>
      <span className={s.n79} data-layer={"227:70707/227:70708/227:70709/227:70710"} data-name={"Name"}>
        <span className={s.n61} data-layer={"227:70707/227:70708/227:70709/227:70710/227:70711"} data-name={"Согласование УТНФ"}>
          {textSlot(text,"227:70707/227:70708/227:70709/227:70710/227:70711","Согласование УТНФ","Согласование УТНФ")}
        </span>
      </span>
      <span className={s.n80} data-layer={"227:70707/227:70708/227:70709/227:70712"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n56} data-layer={"227:70707/227:70708/227:70709/227:70712/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:70707/227:70708/227:70709/227:70712/227:1519","Label","Откл. от модели")}
        </span>
      </span>
    </span>
    <span className={s.n62} data-layer={"227:70707/227:70708/227:70713"} data-name={"icon"}>
      <span className={s.n5} data-layer={"227:70707/227:70708/227:70713/227:70714"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70707/227:70708/227:70713/227:70714/227:816"} data-name={"icon/set/base"}>
          <span className={s.n7} data-layer={"227:70707/227:70708/227:70713/227:70714/227:816/227:507"} data-name={"Group 3716"}>
            <span className={s.n8} data-layer={"227:70707/227:70708/227:70713/227:70714/227:816/227:507/227:508"} data-name={"Rectangle 3609"}>
              <svg width="100%" height="100%" viewBox="0 0 6.7021 8.83274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.73629 7.71494 C0.73629 7.30829 0.40664 6.97864 0 6.97864 C-0.40664 6.97864 -0.73629 7.30829 -0.73629 7.71494 L0 7.71494 L0.73629 7.71494 Z M4.89621 -0.73629 C4.48957 -0.73629 4.15992 -0.40664 4.15992 0 C4.15992 0.40664 4.48957 0.73629 4.89621 0.73629 L4.89621 0 L4.89621 -0.73629 Z M6.7021 1.80589 L5.96581 1.80589 L5.96581 7.01067 L6.7021 7.01067 L7.4384 7.01067 L7.4384 1.80589 L6.7021 1.80589 Z M4.88004 8.83274 L4.88004 8.09645 L1.1178 8.09645 L1.1178 8.83274 L1.1178 9.56903 L4.88004 9.56903 L4.88004 8.83274 Z M1.1178 8.83274 L1.1178 8.09645 C0.9071 8.09645 0.73629 7.92564 0.73629 7.71494 L0 7.71494 L-0.73629 7.71494 C-0.73629 8.73892 0.09381 9.56903 1.1178 9.56903 L1.1178 8.83274 Z M6.7021 7.01067 L5.96581 7.01067 C5.96581 7.61033 5.47969 8.09645 4.88004 8.09645 L4.88004 8.83274 L4.88004 9.56903 C6.29298 9.56903 7.4384 8.42361 7.4384 7.01067 L6.7021 7.01067 Z M6.7021 1.80589 L7.4384 1.80589 C7.4384 0.40188 6.30022 -0.73629 4.89621 -0.73629 L4.89621 0 L4.89621 0.73629 C5.48694 0.73629 5.96581 1.21517 5.96581 1.80589 L6.7021 1.80589 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n9} data-layer={"227:70707/227:70708/227:70713/227:70714/227:816/227:507/227:509"} data-name={"Rectangle 3608"}></span>
          </span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:70707/227:70708/227:70713/227:70715"} data-name={"Button/var"}>
        <span className={s.n6} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816"} data-name={"icon/set/base"}>
          <span className={s.n11} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490"} data-name={"Group 3718"}>
            <span className={s.n12} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490/227:491"} data-name={"Rectangle 3608"}>
              <svg width="100%" height="100%" viewBox="0 0 8.02299 9.98903" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.32299 4.99452 C7.32299 5.38112 7.63639 5.69452 8.02299 5.69452 C8.40959 5.69452 8.72299 5.38112 8.72299 4.99452 L8.02299 4.99452 L7.32299 4.99452 Z M4.01149 10.68903 C4.39809 10.68903 4.71149 10.37563 4.71149 9.98903 C4.71149 9.60243 4.39809 9.28903 4.01149 9.28903 L4.01149 9.98903 L4.01149 10.68903 Z M1.84969 0 L1.84969 0.7 L6.1733 0.7 L6.1733 0 L6.1733 -0.7 L1.84969 -0.7 L1.84969 0 Z M0 8.13935 L0.7 8.13935 L0.7 1.84969 L0 1.84969 L-0.7 1.84969 L-0.7 8.13935 L0 8.13935 Z M8.02299 1.84969 L7.32299 1.84969 L7.32299 4.99452 L8.02299 4.99452 L8.72299 4.99452 L8.72299 1.84969 L8.02299 1.84969 Z M4.01149 9.98903 L4.01149 9.28903 L1.84969 9.28903 L1.84969 9.98903 L1.84969 10.68903 L4.01149 10.68903 L4.01149 9.98903 Z M0 8.13935 L-0.7 8.13935 C-0.7 9.5475 0.44153 10.68903 1.84969 10.68903 L1.84969 9.98903 L1.84969 9.28903 C1.21473 9.28903 0.7 8.7743 0.7 8.13935 L0 8.13935 Z M6.1733 0 L6.1733 0.7 C6.80826 0.7 7.32299 1.21473 7.32299 1.84969 L8.02299 1.84969 L8.72299 1.84969 C8.72299 0.44153 7.58146 -0.7 6.1733 -0.7 L6.1733 0 Z M1.84969 0 L1.84969 -0.7 C0.44153 -0.7 -0.7 0.44153 -0.7 1.84969 L0 1.84969 L0.7 1.84969 C0.7 1.21473 1.21473 0.7 1.84969 0.7 L1.84969 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n13} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490/227:492"} data-name={"Group 3717"}>
              <span className={s.n14} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490/227:492/227:493"} data-name={"Vector"}></span>
              <span className={s.n15} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490/227:492/227:494"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 2.71803 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.71803 0.7 C3.10463 0.7 3.41803 0.3866 3.41803 0 C3.41803 -0.3866 3.10463 -0.7 2.71803 -0.7 L2.71803 0 L2.71803 0.7 Z M0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 C-0.7 0.3866 -0.3866 0.7 0 0.7 L0 0 L0 -0.7 Z M2.71803 0 L2.71803 -0.7 L0 -0.7 L0 0 L0 0.7 L2.71803 0.7 L2.71803 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n16} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:490/227:492/227:495"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0 2.71803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7 0 C0.7 -0.3866 0.3866 -0.7 0 -0.7 C-0.3866 -0.7 -0.7 -0.3866 -0.7 0 L0 0 L0.7 0 Z M-0.7 2.71803 C-0.7 3.10463 -0.3866 3.41803 0 3.41803 C0.3866 3.41803 0.7 3.10463 0.7 2.71803 L0 2.71803 L-0.7 2.71803 Z M0 0 L-0.7 0 L-0.7 2.71803 L0 2.71803 L0.7 2.71803 L0.7 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
          <span className={s.n17} data-layer={"227:70707/227:70708/227:70713/227:70715/227:816/227:497"} data-name={"Rectangle 3611"}></span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n63} data-layer={"227:70707/227:70716"} data-name={"List"}>
    <span className={s.n64} data-layer={"227:70707/227:70716/227:70717"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70707/227:70716/227:70717/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70707/227:70716/227:70717/227:72036","Text text text","Решение")}
      </span>
      <span className={s.n74} data-layer={"227:70707/227:70716/227:70717/227:72037"} data-name={" Box value"}>
        <span className={s.n81} data-layer={"227:70707/227:70716/227:70717/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70707/227:70716/227:70717/227:72037/227:72038","Value Value Value",<><span className={s.n82}>{"Value "}</span><span className={s.n82}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n71} data-layer={"227:70707/227:70716/227:70718"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70707/227:70716/227:70718/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70707/227:70716/227:70718/227:72036","Text text text","Предложение")}
      </span>
      <span className={s.n74} data-layer={"227:70707/227:70716/227:70718/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70707/227:70716/227:70718/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70707/227:70716/227:70718/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n72} data-layer={"227:70707/227:70716/227:70719"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70707/227:70716/227:70719/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70707/227:70716/227:70719/227:72036","Text text text","Год решения")}
      </span>
      <span className={s.n74} data-layer={"227:70707/227:70716/227:70719/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70707/227:70716/227:70719/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70707/227:70716/227:70719/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
    <span className={s.n73} data-layer={"227:70707/227:70716/227:70720"} data-name={"list_cast/layer/var"}>
      <span className={s.n65} data-layer={"227:70707/227:70716/227:70720/227:72036"} data-name={"Text text text"}>
        {textSlot(text,"227:70707/227:70716/227:70720/227:72036","Text text text","Год перемещения")}
      </span>
      <span className={s.n74} data-layer={"227:70707/227:70716/227:70720/227:72037"} data-name={" Box value"}>
        <span className={s.n77} data-layer={"227:70707/227:70716/227:70720/227:72037/227:72038"} data-name={"Value Value Value"}>
          {textSlot(text,"227:70707/227:70716/227:70720/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70723": return (<Root {...rootAttributes} className={[s.n83,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70723"} data-name={"View=additionally, State=editor, Hover=off"}>
  <span className={s.n84} data-layer={"227:70723/227:70724"} data-name={"Test_list_menu"}>
    <span className={s.n33} data-layer={"227:70723/227:70724/227:70725"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70723/227:70724/227:70725/227:525"} data-name={"plus"}>
        <span className={s.n85} data-layer={"227:70723/227:70724/227:70725/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n86} data-layer={"227:70723/227:70724/227:70725/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n87} data-layer={"227:70723/227:70724/227:70726"} data-name={"Переформат"}>
      {textSlot(text,"227:70723/227:70724/227:70726","Переформат","Переформат")}
    </span>
  </span>
  <span className={s.n88} data-layer={"227:70723/227:70727"} data-name={"List"}>
    <span className={s.n89} data-layer={"227:70723/227:70727/227:70728"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n90} data-layer={"227:70723/227:70727/227:70729"} data-name={"List"}>
      <span className={s.n91} data-layer={"227:70723/227:70727/227:70729/227:70730"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:70723/227:70727/227:70729/227:70730/227:72024","Text text text text text text text","Включение в план")}
        </span>
        <span className={s.n93} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n67} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n68} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n69} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n70} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:70723/227:70727/227:70729/227:70730/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n94} data-layer={"227:70723/227:70727/227:70729/227:70731"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:70723/227:70727/227:70729/227:70731/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n93} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n67} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n68} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n69} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n70} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:70723/227:70727/227:70729/227:70731/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n95} data-layer={"227:70723/227:70727/227:70729/227:70732"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:70723/227:70727/227:70729/227:70732/227:72024","Text text text text text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n93} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n67} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n68} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n69} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n70} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:70723/227:70727/227:70729/227:70732/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
                    <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91832 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n96} data-layer={"227:70723/227:70727/227:70729/227:70733"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72024"} data-name={"Text text text text text text text"}>
          {textSlot(text,"227:70723/227:70727/227:70729/227:70733/227:72024","Text text text text text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n93} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025"} data-name={" Box value"}>
          <span className={s.n22} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027"} data-name={"Select/var"}>
            <span className={s.n67} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977"} data-name={"Box"}>
              <span className={s.n68} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1978"} data-name={"icon left & Text"}>
                <span className={s.n69} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1978/227:1979"} data-name={"Placeholder"}>
                  {textSlot(text,"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1978/227:1979","Placeholder","Placeholder")}
                </span>
              </span>
              <span className={s.n70} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1980"} data-name={"Icon"}>
                <span className={s.n27} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1980/227:1982"} data-name={"icon/set/base"}>
                  <span className={s.n28} data-layer={"227:70723/227:70727/227:70729/227:70733/227:72025/227:72027/227:1977/227:1980/227:1982/227:2005"} data-name={"Vector"}>
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
case "227:70736": return (<Root {...rootAttributes} className={[s.n83,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70736"} data-name={"View=additionally, State=viewing, Hover=off"}>
  <span className={s.n84} data-layer={"227:70736/227:70737"} data-name={"Test_list_menu"}>
    <span className={s.n33} data-layer={"227:70736/227:70737/227:70738"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70736/227:70737/227:70738/227:525"} data-name={"plus"}>
        <span className={s.n85} data-layer={"227:70736/227:70737/227:70738/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n86} data-layer={"227:70736/227:70737/227:70738/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n87} data-layer={"227:70736/227:70737/227:70739"} data-name={"Переформат"}>
      {textSlot(text,"227:70736/227:70737/227:70739","Переформат","Переформат")}
    </span>
  </span>
  <span className={s.n88} data-layer={"227:70736/227:70740"} data-name={"List"}>
    <span className={s.n89} data-layer={"227:70736/227:70740/227:70741"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n90} data-layer={"227:70736/227:70740/227:70742"} data-name={"List"}>
      <span className={s.n91} data-layer={"227:70736/227:70740/227:70742/227:70743"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70736/227:70740/227:70742/227:70743/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70736/227:70740/227:70742/227:70743/227:72036","Text text text","Включение в план")}
        </span>
        <span className={s.n97} data-layer={"227:70736/227:70740/227:70742/227:70743/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70736/227:70740/227:70742/227:70743/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70736/227:70740/227:70742/227:70743/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n94} data-layer={"227:70736/227:70740/227:70742/227:70744"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70736/227:70740/227:70742/227:70744/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70736/227:70740/227:70742/227:70744/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n97} data-layer={"227:70736/227:70740/227:70742/227:70744/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70736/227:70740/227:70742/227:70744/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70736/227:70740/227:70742/227:70744/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n95} data-layer={"227:70736/227:70740/227:70742/227:70745"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70736/227:70740/227:70742/227:70745/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70736/227:70740/227:70742/227:70745/227:72036","Text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n97} data-layer={"227:70736/227:70740/227:70742/227:70745/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70736/227:70740/227:70742/227:70745/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70736/227:70740/227:70742/227:70745/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n96} data-layer={"227:70736/227:70740/227:70742/227:70746"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70736/227:70740/227:70742/227:70746/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70736/227:70740/227:70742/227:70746/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n97} data-layer={"227:70736/227:70740/227:70742/227:70746/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70736/227:70740/227:70742/227:70746/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70736/227:70740/227:70742/227:70746/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70749": return (<Root {...rootAttributes} className={[s.n83,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70749"} data-name={"View=deviaton, State=viewing, Hover=off"}>
  <span className={s.n98} data-layer={"227:70749/227:70750"} data-name={"Test_list_menu"}>
    <span className={s.n99} data-layer={"227:70749/227:70750/227:70751"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70749/227:70750/227:70751/227:525"} data-name={"plus"}>
        <span className={s.n85} data-layer={"227:70749/227:70750/227:70751/227:525/227:526"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n86} data-layer={"227:70749/227:70750/227:70751/227:525/227:527"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n100} data-layer={"227:70749/227:70750/227:70752"} data-name={"Переформат"}>
      {textSlot(text,"227:70749/227:70750/227:70752","Переформат","Переформат")}
    </span>
    <span className={s.n101} data-layer={"227:70749/227:70750/227:70753"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n56} data-layer={"227:70749/227:70750/227:70753/227:1519"} data-name={"Label"}>
        {textSlot(text,"227:70749/227:70750/227:70753/227:1519","Label","Откл. от модели")}
      </span>
    </span>
  </span>
  <span className={s.n102} data-layer={"227:70749/227:70754"} data-name={"List"}>
    <span className={s.n89} data-layer={"227:70749/227:70754/227:70755"} data-name={"Line 31"}>
      <svg width="100%" height="100%" viewBox="0 0 161 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 -0 L161 -0 L161 -0.5 L161 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n90} data-layer={"227:70749/227:70754/227:70756"} data-name={"List"}>
      <span className={s.n91} data-layer={"227:70749/227:70754/227:70756/227:70757"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70749/227:70754/227:70756/227:70757/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70749/227:70754/227:70756/227:70757/227:72036","Text text text","Включение в план")}
        </span>
        <span className={s.n97} data-layer={"227:70749/227:70754/227:70756/227:70757/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70749/227:70754/227:70756/227:70757/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70749/227:70754/227:70756/227:70757/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n94} data-layer={"227:70749/227:70754/227:70756/227:70758"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70749/227:70754/227:70756/227:70758/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70749/227:70754/227:70756/227:70758/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n97} data-layer={"227:70749/227:70754/227:70756/227:70758/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70749/227:70754/227:70756/227:70758/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70749/227:70754/227:70756/227:70758/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n95} data-layer={"227:70749/227:70754/227:70756/227:70759"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70749/227:70754/227:70756/227:70759/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70749/227:70754/227:70756/227:70759/227:72036","Text text text","Включение в план соседнего ВСП")}
        </span>
        <span className={s.n97} data-layer={"227:70749/227:70754/227:70756/227:70759/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70749/227:70754/227:70756/227:70759/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70749/227:70754/227:70756/227:70759/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
      <span className={s.n96} data-layer={"227:70749/227:70754/227:70756/227:70760"} data-name={"list_cast/layer/var"}>
        <span className={s.n92} data-layer={"227:70749/227:70754/227:70756/227:70760/227:72036"} data-name={"Text text text"}>
          {textSlot(text,"227:70749/227:70754/227:70756/227:70760/227:72036","Text text text","Включение в ПРМТБ")}
        </span>
        <span className={s.n97} data-layer={"227:70749/227:70754/227:70756/227:70760/227:72037"} data-name={" Box value"}>
          <span className={s.n77} data-layer={"227:70749/227:70754/227:70756/227:70760/227:72037/227:72038"} data-name={"Value Value Value"}>
            {textSlot(text,"227:70749/227:70754/227:70756/227:70760/227:72037/227:72038","Value Value Value",<><span className={s.n49}>{"Value "}</span><span className={s.n49}>{"Value Value "}</span></>)}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:70763": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70763"} data-name={"View=additionally roll, State=editor, Hover=off"}>
  <span className={s.n84} data-layer={"227:70763/227:70764"} data-name={"Test_list_menu"}>
    <span className={s.n33} data-layer={"227:70763/227:70764/227:70765"} data-name={"icon/set/base"}>
      <span className={s.n33} data-layer={"227:70763/227:70764/227:70765/227:554"} data-name={"plus"}>
        <span className={s.n85} data-layer={"227:70763/227:70764/227:70765/227:554/227:555"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8 0 L3.6 0 C1.61178 0 0 1.61178 0 3.6 L0 10.8 C0 12.78823 1.61178 14.4 3.6 14.4 L10.8 14.4 C12.78823 14.4 14.4 12.78822 14.4 10.8 L14.4 3.6 C14.4 1.61178 12.78822 0 10.8 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n86} data-layer={"227:70763/227:70764/227:70765/227:554/227:556"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 C-0.5625 0.31066 -0.31066 0.5625 0 0.5625 L0 0 L0 -0.5625 Z M6 0.5625 C6.31066 0.5625 6.5625 0.31066 6.5625 0 C6.5625 -0.31066 6.31066 -0.5625 6 -0.5625 L6 0 L6 0.5625 Z M0 0 L0 0.5625 L6 0.5625 L6 0 L6 -0.5625 L0 -0.5625 L0 0 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n104} data-layer={"227:70763/227:70764/227:70765/227:554/227:557"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 6" overflow="visible" aria-hidden="true" focusable="false"><path d={""} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/><path d={"M-0.5625 6 C-0.5625 6.31066 -0.31066 6.5625 0 6.5625 C0.31066 6.5625 0.5625 6.31066 0.5625 6 L0 6 L-0.5625 6 Z M0.5625 0 C0.5625 -0.31066 0.31066 -0.5625 0 -0.5625 C-0.31066 -0.5625 -0.5625 -0.31066 -0.5625 0 L0 0 L0.5625 0 Z M0 6 L0.5625 6 L0.5625 0 L0 0 L-0.5625 0 L-0.5625 6 L0 6 Z"} fill={"rgba(40,40,40,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n87} data-layer={"227:70763/227:70764/227:70766"} data-name={"Переформат"}>
      {textSlot(text,"227:70763/227:70764/227:70766","Переформат","Переформат")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
