// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './AccessCardDesign.module.css';
export const variants = [
  {
    "id": "227:71743",
    "name": "State=default, hover=off",
    "props": {
      "State": "default",
      "hover": "off"
    }
  },
  {
    "id": "227:71762",
    "name": "State=State4, hover=on",
    "props": {
      "State": "State4",
      "hover": "on"
    }
  },
  {
    "id": "227:71781",
    "name": "State=active, hover=off",
    "props": {
      "State": "active",
      "hover": "off"
    }
  },
  {
    "id": "227:71822",
    "name": "State=State3, hover=on",
    "props": {
      "State": "State3",
      "hover": "on"
    }
  }
] as const;
export type AccessCardDesignVariant = typeof variants[number]["id"];
export interface AccessCardDesignDimensions {
  "State"?: "State3" | "State4" | "active" | "default";
  "hover"?: "off" | "on";
}
export interface AccessCardDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: AccessCardDesignVariant;
  variantProps?: AccessCardDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: AccessCardDesignVariant) => void;
}
const transitions = {"227:71743":{"ON_HOVER":"227:71762"},"227:71781":{"ON_HOVER":"227:71822"}};
export function AccessCardDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: AccessCardDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:71743": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71743"} data-name={"State=default, hover=off"}>
  <span className={s.n1} data-layer={"227:71743/227:71744"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:71743/227:71744/227:71745"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71743/227:71744/227:71745/227:71746"} data-name={"B2С"}>
        {textSlot(text,"227:71743/227:71744/227:71745/227:71746","B2С","B2С")}
      </span>
      <span className={s.n4} data-layer={"227:71743/227:71744/227:71745/227:71747"} data-name={"Icon"}>
        <span className={s.n5} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71748"} data-name={"Button/var"}>
          <span className={s.n6} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71748/227:792"} data-name={"icon/set/base"}>
            <span className={s.n7} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71748/227:792/227:376"} data-name={"Group 3716"}>
              <span className={s.n8} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71748/227:792/227:376/227:377"} data-name={"Rectangle 3609"}>
                <svg width="100%" height="100%" viewBox="0 0 7.9133 10.42898" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.86935 9.10917 C0.86935 8.62904 0.48013 8.23981 0 8.23981 C-0.48013 8.23981 -0.86935 8.62904 -0.86935 9.10917 L0 9.10917 L0.86935 9.10917 Z M5.78105 -0.86935 C5.30092 -0.86935 4.91169 -0.48013 4.91169 0 C4.91169 0.48013 5.30092 0.86935 5.78105 0.86935 L5.78105 0 L5.78105 -0.86935 Z M7.9133 2.13225 L7.04394 2.13225 L7.04394 8.27763 L7.9133 8.27763 L8.78265 8.27763 L8.78265 2.13225 L7.9133 2.13225 Z M5.76195 10.42898 L5.76195 9.55962 L1.31981 9.55962 L1.31981 10.42898 L1.31981 11.29833 L5.76195 11.29833 L5.76195 10.42898 Z M1.31981 10.42898 L1.31981 9.55962 C1.07103 9.55962 0.86935 9.35795 0.86935 9.10917 L0 9.10917 L-0.86935 9.10917 C-0.86935 10.31821 0.11077 11.29833 1.31981 11.29833 L1.31981 10.42898 Z M7.9133 8.27763 L7.04394 8.27763 C7.04394 8.98566 6.46998 9.55962 5.76195 9.55962 L5.76195 10.42898 L5.76195 11.29833 C7.43024 11.29833 8.78265 9.94592 8.78265 8.27763 L7.9133 8.27763 Z M7.9133 2.13225 L8.78265 2.13225 C8.78265 0.47451 7.43879 -0.86935 5.78105 -0.86935 L5.78105 0 L5.78105 0.86935 C6.47853 0.86935 7.04394 1.43477 7.04394 2.13225 L7.9133 2.13225 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n9} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71748/227:792/227:376/227:378"} data-name={"Rectangle 3608"}></span>
            </span>
          </span>
        </span>
        <span className={s.n10} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749"} data-name={"Button/var"}>
          <span className={s.n6} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840"} data-name={"icon/set/base"}>
            <span className={s.n11} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412"} data-name={"Group 3718"}>
              <span className={s.n12} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412/227:413"} data-name={"Rectangle 3608"}>
                <svg width="100%" height="100%" viewBox="0 0 9.16913 11.41604" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.05802 5.70802 C8.05802 6.32167 8.55548 6.81913 9.16913 6.81913 C9.78278 6.81913 10.28024 6.32167 10.28024 5.70802 L9.16913 5.70802 L8.05802 5.70802 Z M4.58457 12.52715 C5.19822 12.52715 5.69568 12.02969 5.69568 11.41604 C5.69568 10.80239 5.19822 10.30493 4.58457 10.30493 L4.58457 11.41604 L4.58457 12.52715 Z M2.64241 0 L2.64241 1.11111 L6.52672 1.11111 L6.52672 0 L6.52672 -1.11111 L2.64241 -1.11111 L2.64241 0 Z M0 8.77363 L1.11111 8.77363 L1.11111 2.64241 L0 2.64241 L-1.11111 2.64241 L-1.11111 8.77363 L0 8.77363 Z M9.16913 2.64241 L8.05802 2.64241 L8.05802 5.70802 L9.16913 5.70802 L10.28024 5.70802 L10.28024 2.64241 L9.16913 2.64241 Z M4.58457 11.41604 L4.58457 10.30493 L2.64241 10.30493 L2.64241 11.41604 L2.64241 12.52715 L4.58457 12.52715 L4.58457 11.41604 Z M0 8.77363 L-1.11111 8.77363 C-1.11111 10.84664 0.5694 12.52715 2.64241 12.52715 L2.64241 11.41604 L2.64241 10.30493 C1.7967 10.30493 1.11111 9.61934 1.11111 8.77363 L0 8.77363 Z M6.52672 0 L6.52672 1.11111 C7.37243 1.11111 8.05802 1.7967 8.05802 2.64241 L9.16913 2.64241 L10.28024 2.64241 C10.28024 0.5694 8.59973 -1.11111 6.52672 -1.11111 L6.52672 0 Z M2.64241 0 L2.64241 -1.11111 C0.5694 -1.11111 -1.11111 0.56939 -1.11111 2.64241 L0 2.64241 L1.11111 2.64241 C1.11111 1.7967 1.7967 1.11111 2.64241 1.11111 L2.64241 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n13} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412/227:414"} data-name={"Group 3717"}>
                <span className={s.n14} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412/227:414/227:415"} data-name={"Vector"}></span>
                <span className={s.n15} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412/227:414/227:416"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 3.10632 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.10632 0.67107 C3.47694 0.67107 3.77739 0.37062 3.77739 0 C3.77739 -0.37062 3.47694 -0.67107 3.10632 -0.67107 L3.10632 0 L3.10632 0.67107 Z M0 -0.67107 C-0.37062 -0.67107 -0.67107 -0.37062 -0.67107 0 C-0.67107 0.37062 -0.37062 0.67107 0 0.67107 L0 0 L0 -0.67107 Z M3.10632 0 L3.10632 -0.67107 L0 -0.67107 L0 0 L0 0.67107 L3.10632 0.67107 L3.10632 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n16} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:412/227:414/227:417"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 3.10632" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.67107 0 C0.67107 -0.37062 0.37062 -0.67107 0 -0.67107 C-0.37062 -0.67107 -0.67107 -0.37062 -0.67107 0 L0 0 L0.67107 0 Z M-0.67107 3.10632 C-0.67107 3.47694 -0.37062 3.77739 0 3.77739 C0.37062 3.77739 0.67107 3.47694 0.67107 3.10632 L0 3.10632 L-0.67107 3.10632 Z M0 0 L-0.67107 0 L-0.67107 3.10632 L0 3.10632 L0.67107 3.10632 L0.67107 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
            <span className={s.n17} data-layer={"227:71743/227:71744/227:71745/227:71747/227:71749/227:840/227:419"} data-name={"Rectangle 3611"}></span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n18} data-layer={"227:71743/227:71744/227:71750"} data-name={"Box time"}>
      <span className={s.n19} data-layer={"227:71743/227:71744/227:71750/227:71751"} data-name={"Time"}>
        <span className={s.n19} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752"} data-name={"Select data/var"}>
          <span className={s.n20} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:965"} data-name={"Title"}>
            {textSlot(text,"227:71743/227:71744/227:71750/227:71751/227:71752/227:965","Title","Период согласования ЕЦС:")}
          </span>
          <span className={s.n21} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966"} data-name={"Box"}>
            <span className={s.n22} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967"} data-name={"icon left & Text"}>
              <span className={s.n17} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968"} data-name={"icon/set/base"}>
                <span className={s.n23} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:239"} data-name={"Group 3704"}>
                  <span className={s.n24} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:239/227:240"} data-name={"Rectangle 3588"}></span>
                  <span className={s.n25} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:239/227:241"} data-name={"Line 1"}>
                    <svg width="100%" height="100%" viewBox="0 0 10.18134 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L10.18134 0 L10.18134 -0.85 L10.18134 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n26} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:239/227:242"} data-name={"Line 2"}>
                    <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L2 0 L2 -0.85 L2 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n27} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:239/227:243"} data-name={"Line 3"}>
                    <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L2 0 L2 -0.85 L2 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n17} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:968/227:244"} data-name={"Rectangle 3589"}></span>
              </span>
              <span className={s.n28} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969"} data-name={"Text & Text"}>
                <span className={s.n29} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:970"} data-name={"Text"}>
                  <span className={s.n30} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:970/227:971"} data-name={"Placeholder"}>
                    {textSlot(text,"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:970/227:971","Placeholder","Placeholder")}
                  </span>
                </span>
                <span className={s.n31} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:972"} data-name={"Text"}>
                  <span className={s.n30} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:972/227:973"} data-name={"Placeholder"}>
                    {textSlot(text,"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:967/227:969/227:972/227:973","Placeholder","Placeholder")}
                  </span>
                </span>
              </span>
            </span>
            <span className={s.n32} data-layer={"227:71743/227:71744/227:71750/227:71751/227:71752/227:966/227:974"} data-name={"Icon"}></span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n33} data-layer={"227:71743/227:71744/227:71761"} data-name={"Text Area/comm/var"}>
      <span className={s.n34} data-layer={"227:71743/227:71744/227:71761/227:1388"} data-name={"Title"}>
        <span className={s.n35} data-layer={"227:71743/227:71744/227:71761/227:1388/227:1389"} data-name={"Title"}>
          {textSlot(text,"227:71743/227:71744/227:71761/227:1388/227:1389","Title","Комментарий")}
        </span>
        <span className={s.n36} data-layer={"227:71743/227:71744/227:71761/227:1388/227:1390"} data-name={"1000/0"}>
          {textSlot(text,"227:71743/227:71744/227:71761/227:1388/227:1390","1000/0","1000/0")}
        </span>
      </span>
      <span className={s.n37} data-layer={"227:71743/227:71744/227:71761/227:1391"} data-name={"Box"}>
        <span className={s.n38} data-layer={"227:71743/227:71744/227:71761/227:1391/227:1392"} data-name={"icon left & Text"}>
          <span className={s.n30} data-layer={"227:71743/227:71744/227:71761/227:1391/227:1392/227:1393"} data-name={"Placeholder"}>
            {textSlot(text,"227:71743/227:71744/227:71761/227:1391/227:1392/227:1393","Placeholder","Placeholder")}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71762": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71762"} data-name={"State=State4, hover=on"}>
  <span className={s.n1} data-layer={"227:71762/227:71763"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:71762/227:71763/227:71764"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71762/227:71763/227:71764/227:71765"} data-name={"B2С"}>
        {textSlot(text,"227:71762/227:71763/227:71764/227:71765","B2С","B2С")}
      </span>
      <span className={s.n4} data-layer={"227:71762/227:71763/227:71764/227:71766"} data-name={"Icon"}>
        <span className={s.n5} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71767"} data-name={"Button/var"}>
          <span className={s.n6} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71767/227:792"} data-name={"icon/set/base"}>
            <span className={s.n7} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71767/227:792/227:376"} data-name={"Group 3716"}>
              <span className={s.n8} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71767/227:792/227:376/227:377"} data-name={"Rectangle 3609"}>
                <svg width="100%" height="100%" viewBox="0 0 7.9133 10.42898" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.86935 9.10917 C0.86935 8.62904 0.48013 8.23981 0 8.23981 C-0.48013 8.23981 -0.86935 8.62904 -0.86935 9.10917 L0 9.10917 L0.86935 9.10917 Z M5.78105 -0.86935 C5.30092 -0.86935 4.91169 -0.48013 4.91169 0 C4.91169 0.48013 5.30092 0.86935 5.78105 0.86935 L5.78105 0 L5.78105 -0.86935 Z M7.9133 2.13225 L7.04394 2.13225 L7.04394 8.27763 L7.9133 8.27763 L8.78265 8.27763 L8.78265 2.13225 L7.9133 2.13225 Z M5.76195 10.42898 L5.76195 9.55962 L1.31981 9.55962 L1.31981 10.42898 L1.31981 11.29833 L5.76195 11.29833 L5.76195 10.42898 Z M1.31981 10.42898 L1.31981 9.55962 C1.07103 9.55962 0.86935 9.35795 0.86935 9.10917 L0 9.10917 L-0.86935 9.10917 C-0.86935 10.31821 0.11077 11.29833 1.31981 11.29833 L1.31981 10.42898 Z M7.9133 8.27763 L7.04394 8.27763 C7.04394 8.98566 6.46998 9.55962 5.76195 9.55962 L5.76195 10.42898 L5.76195 11.29833 C7.43024 11.29833 8.78265 9.94592 8.78265 8.27763 L7.9133 8.27763 Z M7.9133 2.13225 L8.78265 2.13225 C8.78265 0.47451 7.43879 -0.86935 5.78105 -0.86935 L5.78105 0 L5.78105 0.86935 C6.47853 0.86935 7.04394 1.43477 7.04394 2.13225 L7.9133 2.13225 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n9} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71767/227:792/227:376/227:378"} data-name={"Rectangle 3608"}></span>
            </span>
          </span>
        </span>
        <span className={s.n10} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768"} data-name={"Button/var"}>
          <span className={s.n6} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840"} data-name={"icon/set/base"}>
            <span className={s.n11} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412"} data-name={"Group 3718"}>
              <span className={s.n12} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412/227:413"} data-name={"Rectangle 3608"}>
                <svg width="100%" height="100%" viewBox="0 0 9.16913 11.41604" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.05802 5.70802 C8.05802 6.32167 8.55548 6.81913 9.16913 6.81913 C9.78278 6.81913 10.28024 6.32167 10.28024 5.70802 L9.16913 5.70802 L8.05802 5.70802 Z M4.58457 12.52715 C5.19822 12.52715 5.69568 12.02969 5.69568 11.41604 C5.69568 10.80239 5.19822 10.30493 4.58457 10.30493 L4.58457 11.41604 L4.58457 12.52715 Z M2.64241 0 L2.64241 1.11111 L6.52672 1.11111 L6.52672 0 L6.52672 -1.11111 L2.64241 -1.11111 L2.64241 0 Z M0 8.77363 L1.11111 8.77363 L1.11111 2.64241 L0 2.64241 L-1.11111 2.64241 L-1.11111 8.77363 L0 8.77363 Z M9.16913 2.64241 L8.05802 2.64241 L8.05802 5.70802 L9.16913 5.70802 L10.28024 5.70802 L10.28024 2.64241 L9.16913 2.64241 Z M4.58457 11.41604 L4.58457 10.30493 L2.64241 10.30493 L2.64241 11.41604 L2.64241 12.52715 L4.58457 12.52715 L4.58457 11.41604 Z M0 8.77363 L-1.11111 8.77363 C-1.11111 10.84664 0.5694 12.52715 2.64241 12.52715 L2.64241 11.41604 L2.64241 10.30493 C1.7967 10.30493 1.11111 9.61934 1.11111 8.77363 L0 8.77363 Z M6.52672 0 L6.52672 1.11111 C7.37243 1.11111 8.05802 1.7967 8.05802 2.64241 L9.16913 2.64241 L10.28024 2.64241 C10.28024 0.5694 8.59973 -1.11111 6.52672 -1.11111 L6.52672 0 Z M2.64241 0 L2.64241 -1.11111 C0.5694 -1.11111 -1.11111 0.56939 -1.11111 2.64241 L0 2.64241 L1.11111 2.64241 C1.11111 1.7967 1.7967 1.11111 2.64241 1.11111 L2.64241 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n13} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412/227:414"} data-name={"Group 3717"}>
                <span className={s.n14} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412/227:414/227:415"} data-name={"Vector"}></span>
                <span className={s.n15} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412/227:414/227:416"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 3.10632 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.10632 0.67107 C3.47694 0.67107 3.77739 0.37062 3.77739 0 C3.77739 -0.37062 3.47694 -0.67107 3.10632 -0.67107 L3.10632 0 L3.10632 0.67107 Z M0 -0.67107 C-0.37062 -0.67107 -0.67107 -0.37062 -0.67107 0 C-0.67107 0.37062 -0.37062 0.67107 0 0.67107 L0 0 L0 -0.67107 Z M3.10632 0 L3.10632 -0.67107 L0 -0.67107 L0 0 L0 0.67107 L3.10632 0.67107 L3.10632 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n16} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:412/227:414/227:417"} data-name={"Vector"}>
                  <svg width="100%" height="100%" viewBox="0 0 0 3.10632" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.67107 0 C0.67107 -0.37062 0.37062 -0.67107 0 -0.67107 C-0.37062 -0.67107 -0.67107 -0.37062 -0.67107 0 L0 0 L0.67107 0 Z M-0.67107 3.10632 C-0.67107 3.47694 -0.37062 3.77739 0 3.77739 C0.37062 3.77739 0.67107 3.47694 0.67107 3.10632 L0 3.10632 L-0.67107 3.10632 Z M0 0 L-0.67107 0 L-0.67107 3.10632 L0 3.10632 L0.67107 3.10632 L0.67107 0 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
            </span>
            <span className={s.n17} data-layer={"227:71762/227:71763/227:71764/227:71766/227:71768/227:840/227:419"} data-name={"Rectangle 3611"}></span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n18} data-layer={"227:71762/227:71763/227:71769"} data-name={"Box time"}>
      <span className={s.n19} data-layer={"227:71762/227:71763/227:71769/227:71770"} data-name={"Time"}>
        <span className={s.n19} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771"} data-name={"Select data/var"}>
          <span className={s.n20} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:965"} data-name={"Title"}>
            {textSlot(text,"227:71762/227:71763/227:71769/227:71770/227:71771/227:965","Title","Период согласования ЕЦС:")}
          </span>
          <span className={s.n21} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966"} data-name={"Box"}>
            <span className={s.n22} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967"} data-name={"icon left & Text"}>
              <span className={s.n17} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968"} data-name={"icon/set/base"}>
                <span className={s.n23} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:239"} data-name={"Group 3704"}>
                  <span className={s.n24} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:239/227:240"} data-name={"Rectangle 3588"}></span>
                  <span className={s.n25} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:239/227:241"} data-name={"Line 1"}>
                    <svg width="100%" height="100%" viewBox="0 0 10.18134 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L10.18134 0 L10.18134 -0.85 L10.18134 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n26} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:239/227:242"} data-name={"Line 2"}>
                    <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L2 0 L2 -0.85 L2 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                  <span className={s.n27} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:239/227:243"} data-name={"Line 3"}>
                    <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 L0 0 L2 0 L2 -0.85 L2 -1.7 L0 -1.7 L0 -0.85 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                  </span>
                </span>
                <span className={s.n17} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:968/227:244"} data-name={"Rectangle 3589"}></span>
              </span>
              <span className={s.n28} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969"} data-name={"Text & Text"}>
                <span className={s.n29} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:970"} data-name={"Text"}>
                  <span className={s.n30} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:970/227:971"} data-name={"Placeholder"}>
                    {textSlot(text,"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:970/227:971","Placeholder","Placeholder")}
                  </span>
                </span>
                <span className={s.n31} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:972"} data-name={"Text"}>
                  <span className={s.n30} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:972/227:973"} data-name={"Placeholder"}>
                    {textSlot(text,"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:967/227:969/227:972/227:973","Placeholder","Placeholder")}
                  </span>
                </span>
              </span>
            </span>
            <span className={s.n32} data-layer={"227:71762/227:71763/227:71769/227:71770/227:71771/227:966/227:974"} data-name={"Icon"}></span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n33} data-layer={"227:71762/227:71763/227:71780"} data-name={"Text Area/comm/var"}>
      <span className={s.n34} data-layer={"227:71762/227:71763/227:71780/227:1388"} data-name={"Title"}>
        <span className={s.n35} data-layer={"227:71762/227:71763/227:71780/227:1388/227:1389"} data-name={"Title"}>
          {textSlot(text,"227:71762/227:71763/227:71780/227:1388/227:1389","Title","Комментарий")}
        </span>
        <span className={s.n36} data-layer={"227:71762/227:71763/227:71780/227:1388/227:1390"} data-name={"1000/0"}>
          {textSlot(text,"227:71762/227:71763/227:71780/227:1388/227:1390","1000/0","1000/0")}
        </span>
      </span>
      <span className={s.n37} data-layer={"227:71762/227:71763/227:71780/227:1391"} data-name={"Box"}>
        <span className={s.n38} data-layer={"227:71762/227:71763/227:71780/227:1391/227:1392"} data-name={"icon left & Text"}>
          <span className={s.n30} data-layer={"227:71762/227:71763/227:71780/227:1391/227:1392/227:1393"} data-name={"Placeholder"}>
            {textSlot(text,"227:71762/227:71763/227:71780/227:1391/227:1392/227:1393","Placeholder","Placeholder")}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71781": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71781"} data-name={"State=active, hover=off"}>
  <span className={s.n41} data-layer={"227:71781/227:71782"} data-name={"container"}>
    <span className={s.n42} data-layer={"227:71781/227:71782/227:71783"} data-name={"headline"}>
      <span className={s.n43} data-layer={"227:71781/227:71782/227:71783/227:71784"} data-name={"B2С"}>
        {textSlot(text,"227:71781/227:71782/227:71783/227:71784","B2С","B2С")}
      </span>
      <span className={s.n44} data-layer={"227:71781/227:71782/227:71783/227:71785"} data-name={"index"}>
        <span className={s.n45} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71786"} data-name={"Назначил: Крылов Н.Н. 26.05.2026"}>
          {textSlot(text,"227:71781/227:71782/227:71783/227:71785/227:71786","Назначил: Крылов Н.Н. 26.05.2026","Назначил: Крылов Н.Н. 26.05.2026")}
        </span>
        <span className={s.n46} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787"} data-name={"Button/var"}>
          <span className={s.n47} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787/227:816"} data-name={"icon/set/base"}>
            <span className={s.n48} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787/227:816/227:380"} data-name={"Frame 3387"}>
              <span className={s.n49} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787/227:816/227:380/227:381"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n50} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787/227:816/227:380/227:382"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n51} data-layer={"227:71781/227:71782/227:71783/227:71785/227:71787/227:816/227:380/227:383"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n52} data-layer={"227:71781/227:71782/227:71788"} data-name={"Box"}>
      <span className={s.n53} data-layer={"227:71781/227:71782/227:71788/227:71789"} data-name={"Select data/var"}>
        <span className={s.n54} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790"} data-name={"Value"}>
          <span className={s.n55} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791"} data-name={"name"}>
            <span className={s.n56} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792"} data-name={"icon/set/base"}>
              <span className={s.n57} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:547"} data-name={"Group 3704"}>
                <span className={s.n58} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:547/227:548"} data-name={"Rectangle 3588"}></span>
                <span className={s.n59} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:547/227:549"} data-name={"Line 1"}>
                  <svg width="100%" height="100%" viewBox="0 0 8.90867 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L8.90867 0 L8.90867 -0.74375 L8.90867 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n60} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:547/227:550"} data-name={"Line 2"}>
                  <svg width="100%" height="100%" viewBox="0 0 1.75 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L1.75 0 L1.75 -0.74375 L1.75 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n61} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:547/227:551"} data-name={"Line 3"}>
                  <svg width="100%" height="100%" viewBox="0 0 1.75 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L1.75 0 L1.75 -0.74375 L1.75 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n62} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71792/227:552"} data-name={"Rectangle 3589"}></span>
            </span>
            <span className={s.n63} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71793"} data-name={"Период согласования ЕЦС:"}>
              {textSlot(text,"227:71781/227:71782/227:71788/227:71789/227:71790/227:71791/227:71793","Период согласования ЕЦС:","Период согласования ЕЦС:")}
            </span>
          </span>
          <span className={s.n64} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794"} data-name={"Text & Text"}>
            <span className={s.n65} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71795"} data-name={"Text"}>
              <span className={s.n66} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71795/227:71796"} data-name={"06.10.2025"}>
                {textSlot(text,"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71795/227:71796","06.10.2025","06.10.2025")}
              </span>
            </span>
            <span className={s.n67} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71797"} data-name={"Text"}>
              <span className={s.n68} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71797/227:71798"} data-name={"Ellipse 1073"}></span>
              <span className={s.n69} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71797/227:71799"} data-name={"-"}>
                <svg width="100%" height="100%" viewBox="0 0 76.5 2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L76.5 0 L76.5 2 L0 2 L0 0 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n70} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71797/227:71800"} data-name={"Ellipse 1072"}></span>
            </span>
            <span className={s.n71} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71803"} data-name={"Text"}>
              <span className={s.n66} data-layer={"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71803/227:71804"} data-name={"24.11.2025"}>
                {textSlot(text,"227:71781/227:71782/227:71788/227:71789/227:71790/227:71794/227:71803/227:71804","24.11.2025","24.11.2025")}
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n72} data-layer={"227:71781/227:71782/227:71821"} data-name={"Text Area/comm/var"}>
      <span className={s.n73} data-layer={"227:71781/227:71782/227:71821/227:1433"} data-name={"Title"}>
        {textSlot(text,"227:71781/227:71782/227:71821/227:1433","Title","Комментарий")}
      </span>
      <span className={s.n74} data-layer={"227:71781/227:71782/227:71821/227:1434"} data-name={"Text"}>
        <span className={s.n75} data-layer={"227:71781/227:71782/227:71821/227:1434/227:1435"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
          {textSlot(text,"227:71781/227:71782/227:71821/227:1434/227:1435","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text  ")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71822": return (<Root {...rootAttributes} className={[s.n76,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71822"} data-name={"State=State3, hover=on"}>
  <span className={s.n41} data-layer={"227:71822/227:71823"} data-name={"container"}>
    <span className={s.n42} data-layer={"227:71822/227:71823/227:71824"} data-name={"headline"}>
      <span className={s.n43} data-layer={"227:71822/227:71823/227:71824/227:71825"} data-name={"B2С"}>
        {textSlot(text,"227:71822/227:71823/227:71824/227:71825","B2С","B2С")}
      </span>
      <span className={s.n44} data-layer={"227:71822/227:71823/227:71824/227:71826"} data-name={"index"}>
        <span className={s.n45} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71827"} data-name={"Назначил: Крылов Н.Н. 26.05.2026"}>
          {textSlot(text,"227:71822/227:71823/227:71824/227:71826/227:71827","Назначил: Крылов Н.Н. 26.05.2026","Назначил: Крылов Н.Н. 26.05.2026")}
        </span>
        <span className={s.n46} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828"} data-name={"Button/var"}>
          <span className={s.n47} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828/227:816"} data-name={"icon/set/base"}>
            <span className={s.n48} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828/227:816/227:380"} data-name={"Frame 3387"}>
              <span className={s.n49} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828/227:816/227:380/227:381"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n50} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828/227:816/227:380/227:382"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n51} data-layer={"227:71822/227:71823/227:71824/227:71826/227:71828/227:816/227:380/227:383"} data-name={"Vector"}>
                <svg width="100%" height="100%" viewBox="0 0 0.0001 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.875 C-0.48325 -0.875 -0.875 -0.48325 -0.875 0 C-0.875 0.48325 -0.48325 0.875 0 0.875 L0 0 L0 -0.875 Z M0.0001 0.875 C0.48335 0.875 0.8751 0.48325 0.8751 0 C0.8751 -0.48325 0.48335 -0.875 0.0001 -0.875 L0.0001 0 L0.0001 0.875 Z M0 0 L0 0.875 L0.0001 0.875 L0.0001 0 L0.0001 -0.875 L0 -0.875 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n52} data-layer={"227:71822/227:71823/227:71829"} data-name={"Box"}>
      <span className={s.n53} data-layer={"227:71822/227:71823/227:71829/227:71830"} data-name={"Select data/var"}>
        <span className={s.n54} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831"} data-name={"Value"}>
          <span className={s.n55} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832"} data-name={"Frame 3924"}>
            <span className={s.n56} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833"} data-name={"icon/set/base"}>
              <span className={s.n57} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:547"} data-name={"Group 3704"}>
                <span className={s.n58} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:547/227:548"} data-name={"Rectangle 3588"}></span>
                <span className={s.n59} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:547/227:549"} data-name={"Line 1"}>
                  <svg width="100%" height="100%" viewBox="0 0 8.90867 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L8.90867 0 L8.90867 -0.74375 L8.90867 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n60} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:547/227:550"} data-name={"Line 2"}>
                  <svg width="100%" height="100%" viewBox="0 0 1.75 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L1.75 0 L1.75 -0.74375 L1.75 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
                <span className={s.n61} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:547/227:551"} data-name={"Line 3"}>
                  <svg width="100%" height="100%" viewBox="0 0 1.75 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.74375 L0 0 L1.75 0 L1.75 -0.74375 L1.75 -1.4875 L0 -1.4875 L0 -0.74375 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
                </span>
              </span>
              <span className={s.n62} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71833/227:552"} data-name={"Rectangle 3589"}></span>
            </span>
            <span className={s.n63} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71834"} data-name={"Период согласования ЕЦС:"}>
              {textSlot(text,"227:71822/227:71823/227:71829/227:71830/227:71831/227:71832/227:71834","Период согласования ЕЦС:","Период согласования ЕЦС:")}
            </span>
          </span>
          <span className={s.n64} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835"} data-name={"Text & Text"}>
            <span className={s.n65} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71836"} data-name={"Text"}>
              <span className={s.n66} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71836/227:71837"} data-name={"06.10.2025"}>
                {textSlot(text,"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71836/227:71837","06.10.2025","06.10.2025")}
              </span>
            </span>
            <span className={s.n67} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71838"} data-name={"Text"}>
              <span className={s.n68} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71838/227:71839"} data-name={"Ellipse 1073"}></span>
              <span className={s.n69} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71838/227:71840"} data-name={"-"}>
                <svg width="100%" height="100%" viewBox="0 0 76.5 2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L76.5 0 L76.5 2 L0 2 L0 0 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
              </span>
              <span className={s.n70} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71838/227:71841"} data-name={"Ellipse 1072"}></span>
            </span>
            <span className={s.n71} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71844"} data-name={"Text"}>
              <span className={s.n66} data-layer={"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71844/227:71845"} data-name={"24.11.2025"}>
                {textSlot(text,"227:71822/227:71823/227:71829/227:71830/227:71831/227:71835/227:71844/227:71845","24.11.2025","24.11.2025")}
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n72} data-layer={"227:71822/227:71823/227:71862"} data-name={"Text Area/comm/var"}>
      <span className={s.n73} data-layer={"227:71822/227:71823/227:71862/227:1433"} data-name={"Title"}>
        {textSlot(text,"227:71822/227:71823/227:71862/227:1433","Title","Комментарий")}
      </span>
      <span className={s.n74} data-layer={"227:71822/227:71823/227:71862/227:1434"} data-name={"Text"}>
        <span className={s.n75} data-layer={"227:71822/227:71823/227:71862/227:1434/227:1435"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
          {textSlot(text,"227:71822/227:71823/227:71862/227:1434/227:1435","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text  ")}
        </span>
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
