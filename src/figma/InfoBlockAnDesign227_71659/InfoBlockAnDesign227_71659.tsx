// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './InfoBlockAnDesign227_71659.module.css';
export const variants = [
  {
    "id": "227:71660",
    "name": "State=on",
    "props": {
      "State": "on"
    }
  },
  {
    "id": "227:71695",
    "name": "State=off",
    "props": {
      "State": "off"
    }
  }
] as const;
export type InfoBlockAnDesign227_71659Variant = typeof variants[number]["id"];
export interface InfoBlockAnDesign227_71659Dimensions {
  "State"?: "off" | "on";
}
export interface InfoBlockAnDesign227_71659Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: InfoBlockAnDesign227_71659Variant;
  variantProps?: InfoBlockAnDesign227_71659Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: InfoBlockAnDesign227_71659Variant) => void;
}
const transitions = {"227:71695":{"ON_CLICK":"227:71660"}};
export function InfoBlockAnDesign227_71659({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: InfoBlockAnDesign227_71659Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:71660": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71660"} data-name={"State=on"}>
  <span className={s.n1} data-layer={"227:71660/227:71661"} data-name={"Menu item/var "}>
    <span className={s.n2} data-layer={"227:71660/227:71661/227:1807"} data-name={"icon/set/base"}>
      <span className={s.n3} data-layer={"227:71660/227:71661/227:1807/227:358"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L6.6364 -0.6364 L6.37279 -0.9 L6 -0.9 L6 0 Z M0 10.5 L-0.9 10.5 L0 10.5 Z M7.5 1.5 L6.8636 2.1364 L7.12721 2.4 L7.5 2.4 L7.5 1.5 Z M6 0 L6 -0.9 L1.5 -0.9 L1.5 0 L1.5 0.9 L6 0.9 L6 0 Z M1.5 0 L1.5 -0.9 C0.17044 -0.9 -0.9 0.17044 -0.9 1.5 L0 1.5 L0.9 1.5 C0.9 1.16456 1.16456 0.9 1.5 0.9 L1.5 0 Z M0 1.5 L-0.9 1.5 L-0.9 10.5 L0 10.5 L0.9 10.5 L0.9 1.5 L0 1.5 Z M0 10.5 L-0.9 10.5 C-0.9 11.13652 -0.64714 11.74697 -0.19706 12.19706 L0.43934 11.56066 L1.07574 10.92426 C0.96321 10.81174 0.9 10.65913 0.9 10.5 L0 10.5 Z M0.43934 11.56066 L-0.19706 12.19706 C0.25303 12.64714 0.86348 12.9 1.5 12.9 L1.5 12 L1.5 11.1 C1.34087 11.1 1.18826 11.03679 1.07574 10.92426 L0.43934 11.56066 Z M1.5 12 L1.5 12.9 L13.5 12.9 L13.5 12 L13.5 11.1 L1.5 11.1 L1.5 12 Z M13.5 12 L13.5 12.9 C14.13652 12.9 14.74697 12.64714 15.19705 12.19706 L14.56066 11.56066 L13.92426 10.92426 C13.81174 11.03679 13.65913 11.1 13.5 11.1 L13.5 12 Z M14.56066 11.56066 L15.19705 12.19706 C15.64714 11.74697 15.9 11.13652 15.9 10.5 L15 10.5 L14.1 10.5 C14.1 10.65913 14.03679 10.81174 13.92426 10.92426 L14.56066 11.56066 Z M15 10.5 L15.9 10.5 L15.9 3 L15 3 L14.1 3 L14.1 10.5 L15 10.5 Z M15 3 L15.9 3 C15.9 1.66752 14.81912 0.6 13.5 0.6 L13.5 1.5 L13.5 2.4 C13.83088 2.4 14.1 2.66748 14.1 3 L15 3 Z M13.5 1.5 L13.5 0.6 L7.5 0.6 L7.5 1.5 L7.5 2.4 L13.5 2.4 L13.5 1.5 Z M7.5 1.5 L8.1364 0.8636 L6.6364 -0.6364 L6 0 L5.3636 0.6364 L6.8636 2.1364 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71660/227:71661/227:1808"} data-name={"Label"}>
      {textSlot(text,"227:71660/227:71661/227:1808","Label","Value value")}
    </span>
  </span>
  <span className={s.n5} data-layer={"227:71660/227:71662"} data-name={"list"}>
    <span className={s.n6} data-layer={"227:71660/227:71662/227:71663"} data-name={"Line 32"}>
      <svg width="100%" height="100%" viewBox="0 0 531 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L531 0 L531 -0.5 L531 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n7} data-layer={"227:71660/227:71662/227:71664"} data-name={"list"}>
      <span className={s.n8} data-layer={"227:71660/227:71662/227:71664/227:71665"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71665/227:71666"} data-name={"Slot base/var"}>
          <span className={s.n10} data-layer={"227:71660/227:71662/227:71664/227:71665/227:71666/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71665/227:71666/227:940","Valeu Valeu","Юр. адрес")}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71665/227:71667"} data-name={"Slot base/var"}>
          <span className={s.n12} data-layer={"227:71660/227:71662/227:71664/227:71665/227:71667/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71665/227:71667/227:940","Valeu Valeu","454048, г.Челябинск, ул. Воровского, 62")}
          </span>
        </span>
      </span>
      <span className={s.n13} data-layer={"227:71660/227:71662/227:71664/227:71668"} data-name={"line"}>
        <span className={s.n14} data-layer={"227:71660/227:71662/227:71664/227:71668/227:71669"} data-name={"Slot base/var"}>
          <span className={s.n15} data-layer={"227:71660/227:71662/227:71664/227:71668/227:71669/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71668/227:71669/227:940","Valeu Valeu","Формат офиса")}
          </span>
        </span>
        <span className={s.n16} data-layer={"227:71660/227:71662/227:71664/227:71668/227:71670"} data-name={"Slot base/var"}>
          <span className={s.n17} data-layer={"227:71660/227:71662/227:71664/227:71668/227:71670/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71668/227:71670/227:940","Valeu Valeu","Бизнес-офис")}
          </span>
        </span>
      </span>
      <span className={s.n18} data-layer={"227:71660/227:71662/227:71664/227:71671"} data-name={"line"}>
        <span className={s.n14} data-layer={"227:71660/227:71662/227:71664/227:71671/227:71672"} data-name={"Slot base/var"}>
          <span className={s.n19} data-layer={"227:71660/227:71662/227:71664/227:71671/227:71672/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71671/227:71672/227:940","Valeu Valeu","Расчет модели")}
          </span>
        </span>
        <span className={s.n16} data-layer={"227:71660/227:71662/227:71664/227:71671/227:71673"} data-name={"Slot base/var"}>
          <span className={s.n20} data-layer={"227:71660/227:71662/227:71664/227:71671/227:71673/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71671/227:71673/227:940","Valeu Valeu","Без изменений")}
          </span>
        </span>
      </span>
      <span className={s.n21} data-layer={"227:71660/227:71662/227:71664/227:71674"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71674/227:71675"} data-name={"Slot base/var"}>
          <span className={s.n22} data-layer={"227:71660/227:71662/227:71664/227:71674/227:71675/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71674/227:71675/227:940","Valeu Valeu","Общая факт. площадь")}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71674/227:71676"} data-name={"Slot base/var"}>
          <span className={s.n23} data-layer={"227:71660/227:71662/227:71664/227:71674/227:71676/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71674/227:71676/227:940","Valeu Valeu","454")}
          </span>
        </span>
      </span>
      <span className={s.n24} data-layer={"227:71660/227:71662/227:71664/227:71677"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71677/227:71678"} data-name={"Slot base/var"}>
          <span className={s.n25} data-layer={"227:71660/227:71662/227:71664/227:71677/227:71678/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71677/227:71678/227:940","Valeu Valeu","ПШЕ БСП (Т)")}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71677/227:71679"} data-name={"Slot base/var"}>
          <span className={s.n23} data-layer={"227:71660/227:71662/227:71664/227:71677/227:71679/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71677/227:71679/227:940","Valeu Valeu","9")}
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:71660/227:71662/227:71664/227:71680"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71680/227:71681"} data-name={"Slot base/var"}>
          <span className={s.n27} data-layer={"227:71660/227:71662/227:71664/227:71680/227:71681/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71680/227:71681/227:940","Valeu Valeu","Дата переформата (факт)")}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71680/227:71682"} data-name={"Slot base/var"}>
          <span className={s.n28} data-layer={"227:71660/227:71662/227:71664/227:71680/227:71682/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71680/227:71682/227:940","Valeu Valeu","2012-10-24")}
          </span>
        </span>
      </span>
      <span className={s.n29} data-layer={"227:71660/227:71662/227:71664/227:71683"} data-name={"line"}>
        <span className={s.n30} data-layer={"227:71660/227:71662/227:71664/227:71683/227:71684"} data-name={"Slot base/var"}>
          <span className={s.n31} data-layer={"227:71660/227:71662/227:71664/227:71683/227:71684/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71683/227:71684/227:940","Valeu Valeu","КП СКМ, в мес. (Т)")}
          </span>
        </span>
        <span className={s.n32} data-layer={"227:71660/227:71662/227:71664/227:71683/227:71685"} data-name={"Slot base/var"}>
          <span className={s.n33} data-layer={"227:71660/227:71662/227:71664/227:71683/227:71685/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71683/227:71685/227:940","Valeu Valeu","6565")}
          </span>
        </span>
      </span>
      <span className={s.n34} data-layer={"227:71660/227:71662/227:71664/227:71686"} data-name={"line"}>
        <span className={s.n30} data-layer={"227:71660/227:71662/227:71664/227:71686/227:71687"} data-name={"Slot base/var"}>
          <span className={s.n31} data-layer={"227:71660/227:71662/227:71664/227:71686/227:71687/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71686/227:71687/227:940","Valeu Valeu","КП, в мес (Т+1)")}
          </span>
        </span>
        <span className={s.n32} data-layer={"227:71660/227:71662/227:71664/227:71686/227:71688"} data-name={"Slot base/var"}>
          <span className={s.n35} data-layer={"227:71660/227:71662/227:71664/227:71686/227:71688/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71686/227:71688/227:940","Valeu Valeu","677")}
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:71660/227:71662/227:71664/227:71689"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71689/227:71690"} data-name={"Slot base/var"}>
          <span className={s.n27} data-layer={"227:71660/227:71662/227:71664/227:71689/227:71690/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71689/227:71690/227:940","Valeu Valeu",<><span className={s.n37}>{"Целевая площадь (Т+1), м"}</span><span className={s.n37}>{"2"}</span></>)}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71689/227:71691"} data-name={"Slot base/var"}>
          <span className={s.n38} data-layer={"227:71660/227:71662/227:71664/227:71689/227:71691/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71689/227:71691/227:940","Valeu Valeu","987")}
          </span>
        </span>
      </span>
      <span className={s.n39} data-layer={"227:71660/227:71662/227:71664/227:71692"} data-name={"line"}>
        <span className={s.n9} data-layer={"227:71660/227:71662/227:71664/227:71692/227:71693"} data-name={"Slot base/var"}>
          <span className={s.n27} data-layer={"227:71660/227:71662/227:71664/227:71692/227:71693/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71692/227:71693/227:940","Valeu Valeu",<><span className={s.n37}>{"Целевой избыток (дефицит) (Т+1)"}</span><span className={s.n37}>{", м"}</span><span className={s.n37}>{"2"}</span></>)}
          </span>
        </span>
        <span className={s.n11} data-layer={"227:71660/227:71662/227:71664/227:71692/227:71694"} data-name={"Slot base/var"}>
          <span className={s.n38} data-layer={"227:71660/227:71662/227:71664/227:71692/227:71694/227:940"} data-name={"Valeu Valeu"}>
            {textSlot(text,"227:71660/227:71662/227:71664/227:71692/227:71694/227:940","Valeu Valeu","987")}
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:71695": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71695"} data-name={"State=off"}>
  <span className={s.n1} data-layer={"227:71695/227:71696"} data-name={"Menu item/var "}>
    <span className={s.n2} data-layer={"227:71695/227:71696/227:1810"} data-name={"icon/set/base"}>
      <span className={s.n3} data-layer={"227:71695/227:71696/227:1810/227:521"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 15 12" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L1.5 0 C0.6675 0 0 0.6675 0 1.5 L0 10.5 C0 10.89782 0.15804 11.27936 0.43934 11.56066 C0.72064 11.84196 1.10218 12 1.5 12 L13.5 12 C13.89782 12 14.27935 11.84196 14.56066 11.56066 C14.84196 11.27936 15 10.89782 15 10.5 L15 3 C15 2.1675 14.325 1.5 13.5 1.5 L7.5 1.5 L6 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M6 0 L6.35355 -0.35355 L6.20711 -0.5 L6 -0.5 L6 0 Z M0 10.5 L-0.5 10.5 L0 10.5 Z M7.5 1.5 L7.14645 1.85355 L7.29289 2 L7.5 2 L7.5 1.5 Z M6 0 L6 -0.5 L1.5 -0.5 L1.5 0 L1.5 0.5 L6 0.5 L6 0 Z M1.5 0 L1.5 -0.5 C0.39136 -0.5 -0.5 0.39136 -0.5 1.5 L0 1.5 L0.5 1.5 C0.5 0.94364 0.94364 0.5 1.5 0.5 L1.5 0 Z M0 1.5 L-0.5 1.5 L-0.5 10.5 L0 10.5 L0.5 10.5 L0.5 1.5 L0 1.5 Z M0 10.5 L-0.5 10.5 C-0.5 11.03043 -0.28929 11.53914 0.08579 11.91421 L0.43934 11.56066 L0.79289 11.20711 C0.60536 11.01957 0.5 10.76522 0.5 10.5 L0 10.5 Z M0.43934 11.56066 L0.08579 11.91421 C0.46086 12.28929 0.96957 12.5 1.5 12.5 L1.5 12 L1.5 11.5 C1.23478 11.5 0.98043 11.39464 0.79289 11.20711 L0.43934 11.56066 Z M1.5 12 L1.5 12.5 L13.5 12.5 L13.5 12 L13.5 11.5 L1.5 11.5 L1.5 12 Z M13.5 12 L13.5 12.5 C14.03043 12.5 14.53914 12.28929 14.91421 11.91421 L14.56066 11.56066 L14.20711 11.20711 C14.01957 11.39464 13.76521 11.5 13.5 11.5 L13.5 12 Z M14.56066 11.56066 L14.91421 11.91421 C15.28928 11.53914 15.5 11.03043 15.5 10.5 L15 10.5 L14.5 10.5 C14.5 10.76522 14.39464 11.01957 14.20711 11.20711 L14.56066 11.56066 Z M15 10.5 L15.5 10.5 L15.5 3 L15 3 L14.5 3 L14.5 10.5 L15 10.5 Z M15 3 L15.5 3 C15.5 1.88973 14.59951 1 13.5 1 L13.5 1.5 L13.5 2 C14.05049 2 14.5 2.44527 14.5 3 L15 3 Z M13.5 1.5 L13.5 1 L7.5 1 L7.5 1.5 L7.5 2 L13.5 2 L13.5 1.5 Z M7.5 1.5 L7.85355 1.14645 L6.35355 -0.35355 L6 0 L5.64645 0.35355 L7.14645 1.85355 L7.5 1.5 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n4} data-layer={"227:71695/227:71696/227:1811"} data-name={"Label"}>
      {textSlot(text,"227:71695/227:71696/227:1811","Label","Value value")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
