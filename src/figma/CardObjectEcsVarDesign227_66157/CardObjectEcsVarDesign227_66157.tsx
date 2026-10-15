// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './CardObjectEcsVarDesign227_66157.module.css';
export const variants = [
  {
    "id": "227:66158",
    "name": "State=off, Hover=off",
    "props": {
      "State": "off",
      "Hover": "off"
    }
  },
  {
    "id": "227:66188",
    "name": "State=off, Hover=on",
    "props": {
      "State": "off",
      "Hover": "on"
    }
  },
  {
    "id": "227:66218",
    "name": "State=on, Hover=off",
    "props": {
      "State": "on",
      "Hover": "off"
    }
  },
  {
    "id": "227:66248",
    "name": "State=on, Hover=on",
    "props": {
      "State": "on",
      "Hover": "on"
    }
  },
  {
    "id": "227:66278",
    "name": "State=Card object_ecs, Hover=var",
    "props": {
      "State": "Card object_ecs",
      "Hover": "var"
    }
  },
  {
    "id": "227:66307",
    "name": "State=Card object_ecs, Hover=var",
    "props": {
      "State": "Card object_ecs",
      "Hover": "var"
    }
  }
] as const;
export type CardObjectEcsVarDesign227_66157Variant = typeof variants[number]["id"];
export interface CardObjectEcsVarDesign227_66157Dimensions {
  "State"?: "Card object_ecs" | "off" | "on";
  "Hover"?: "off" | "on" | "var";
}
export interface CardObjectEcsVarDesign227_66157Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: CardObjectEcsVarDesign227_66157Variant;
  variantProps?: CardObjectEcsVarDesign227_66157Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: CardObjectEcsVarDesign227_66157Variant) => void;
}
const transitions = {"227:66158":{"ON_HOVER":"227:66188"},"227:66218":{"ON_HOVER":"227:66248"}};
export function CardObjectEcsVarDesign227_66157({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: CardObjectEcsVarDesign227_66157Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:66158": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66158"} data-name={"State=off, Hover=off"}>
  <span className={s.n1} data-layer={"227:66158/227:66159"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:66158/227:66159/227:66160"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:66158/227:66159/227:66160/227:66163"} data-name={"Text"}>
        {textSlot(text,"227:66158/227:66159/227:66160/227:66163","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:66158/227:66159/227:66160/227:66164"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66165"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66165/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66158/227:66159/227:66160/227:66164/227:66165/227:651","Label","Value to the model")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66166"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66166/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66158/227:66159/227:66160/227:66164/227:66166/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66167"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66158/227:66159/227:66160/227:66164/227:66167/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66158/227:66159/227:66160/227:66164/227:66167/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:66158/227:66159/227:66168"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:66158/227:66159/227:66168/227:66169"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:66158/227:66159/227:66168/227:66169","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:66158/227:66159/227:66168/227:66170"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:66158/227:66159/227:66168/227:66170","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:66158/227:66171"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:66158/227:66172"} data-name={"container"}>
    <span className={s.n16} data-layer={"227:66158/227:66172/227:66180"} data-name={"Text"}>
      <span className={s.n17} data-layer={"227:66158/227:66172/227:66180/227:66181"} data-name={"Previous matching"}>
        {textSlot(text,"227:66158/227:66172/227:66180/227:66181","Previous matching","Previous matching")}
      </span>
      <span className={s.n18} data-layer={"227:66158/227:66172/227:66180/227:66182"} data-name={"Decision: Value Comment: information Important information Important information Important information"}>
        {textSlot(text,"227:66158/227:66172/227:66180/227:66182","Decision: Value Comment: information Important information Important information Important information",<><span className={s.n13}>{"Decision: Value"}</span><span className={s.n13}>{" Comment: information Important information Important information Important information"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n19} data-layer={"227:66158/227:66184"} data-name={"Frame 3919"}>
    <span className={s.n20} data-layer={"227:66158/227:66184/227:66185"} data-name={"Button/var"}>
      <span className={s.n21} data-layer={"227:66158/227:66184/227:66185/227:820"} data-name={"icon/set/base"}>
        <span className={s.n22} data-layer={"227:66158/227:66184/227:66185/227:820/227:311"} data-name={"Icon/control/16/var"}>
          <span className={s.n23} data-layer={"227:66158/227:66184/227:66185/227:820/227:311/227:313"} data-name={"Group 3722"}>
            <span className={s.n24} data-layer={"227:66158/227:66184/227:66185/227:820/227:311/227:313/227:314"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 C-0.46944 -0.85 -0.85 -0.46944 -0.85 0 C-0.85 0.46944 -0.46944 0.85 0 0.85 L0 0 L0 -0.85 Z M8 0.85 C8.46944 0.85 8.85 0.46944 8.85 0 C8.85 -0.46944 8.46944 -0.85 8 -0.85 L8 0 L8 0.85 Z M0 0 L0 0.85 L8 0.85 L8 0 L8 -0.85 L0 -0.85 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n25} data-layer={"227:66158/227:66184/227:66185/227:820/227:311/227:313/227:315"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0.22763 4.74632" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.6214 4.78704 C-0.59891 5.25595 -0.20056 5.61784 0.26834 5.59535 C0.73725 5.57286 1.09914 5.17451 1.07665 4.70561 L0.22763 4.74632 L-0.6214 4.78704 Z M0.84902 -0.04072 C0.82654 -0.50962 0.42819 -0.87151 -0.04072 -0.84902 C-0.50962 -0.82654 -0.87151 -0.42819 -0.84902 0.04072 L0 0 L0.84902 -0.04072 Z M0.22763 4.74632 L1.07665 4.70561 L0.84902 -0.04072 L0 0 L-0.84902 0.04072 L-0.6214 4.78704 L0.22763 4.74632 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n26} data-layer={"227:66158/227:66184/227:66186"} data-name={"Button/var"}>
      <span className={s.n21} data-layer={"227:66158/227:66184/227:66186/227:820"} data-name={"icon/set/base"}>
        <span className={s.n27} data-layer={"227:66158/227:66184/227:66186/227:820/227:178"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n28} data-layer={"227:66158/227:66184/227:66186/227:820/227:179"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:66158/227:66184/227:66187"} data-name={"Button/var"}>
      <span className={s.n30} data-layer={"227:66158/227:66184/227:66187/227:825"} data-name={"Button"}>
        {textSlot(text,"227:66158/227:66184/227:66187/227:825","Button","Согласовать частично")}
      </span>
    </span>
  </span>
</Root>);
case "227:66188": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66188"} data-name={"State=off, Hover=on"}>
  <span className={s.n1} data-layer={"227:66188/227:66189"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:66188/227:66189/227:66190"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:66188/227:66189/227:66190/227:66193"} data-name={"Text"}>
        {textSlot(text,"227:66188/227:66189/227:66190/227:66193","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:66188/227:66189/227:66190/227:66194"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66195"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66195/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66188/227:66189/227:66190/227:66194/227:66195/227:651","Label","Value to the model")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66196"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66196/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66188/227:66189/227:66190/227:66194/227:66196/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66197"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66188/227:66189/227:66190/227:66194/227:66197/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66188/227:66189/227:66190/227:66194/227:66197/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:66188/227:66189/227:66198"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:66188/227:66189/227:66198/227:66199"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:66188/227:66189/227:66198/227:66199","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:66188/227:66189/227:66198/227:66200"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:66188/227:66189/227:66198/227:66200","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:66188/227:66201"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:66188/227:66202"} data-name={"container"}>
    <span className={s.n16} data-layer={"227:66188/227:66202/227:66210"} data-name={"Text"}>
      <span className={s.n17} data-layer={"227:66188/227:66202/227:66210/227:66211"} data-name={"Previous matching"}>
        {textSlot(text,"227:66188/227:66202/227:66210/227:66211","Previous matching","Previous matching")}
      </span>
      <span className={s.n18} data-layer={"227:66188/227:66202/227:66210/227:66212"} data-name={"Decision: Value Comment: information Important information Important information Important information"}>
        {textSlot(text,"227:66188/227:66202/227:66210/227:66212","Decision: Value Comment: information Important information Important information Important information",<><span className={s.n13}>{"Decision: Value"}</span><span className={s.n13}>{" Comment: information Important information Important information Important information"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n19} data-layer={"227:66188/227:66214"} data-name={"Frame 3919"}>
    <span className={s.n20} data-layer={"227:66188/227:66214/227:66215"} data-name={"Button/var"}>
      <span className={s.n21} data-layer={"227:66188/227:66214/227:66215/227:820"} data-name={"icon/set/base"}>
        <span className={s.n22} data-layer={"227:66188/227:66214/227:66215/227:820/227:311"} data-name={"Icon/control/16/var"}>
          <span className={s.n23} data-layer={"227:66188/227:66214/227:66215/227:820/227:311/227:313"} data-name={"Group 3722"}>
            <span className={s.n24} data-layer={"227:66188/227:66214/227:66215/227:820/227:311/227:313/227:314"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.85 C-0.46944 -0.85 -0.85 -0.46944 -0.85 0 C-0.85 0.46944 -0.46944 0.85 0 0.85 L0 0 L0 -0.85 Z M8 0.85 C8.46944 0.85 8.85 0.46944 8.85 0 C8.85 -0.46944 8.46944 -0.85 8 -0.85 L8 0 L8 0.85 Z M0 0 L0 0.85 L8 0.85 L8 0 L8 -0.85 L0 -0.85 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
            </span>
            <span className={s.n25} data-layer={"227:66188/227:66214/227:66215/227:820/227:311/227:313/227:315"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0.22763 4.74632" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.6214 4.78704 C-0.59891 5.25595 -0.20056 5.61784 0.26834 5.59535 C0.73725 5.57286 1.09914 5.17451 1.07665 4.70561 L0.22763 4.74632 L-0.6214 4.78704 Z M0.84902 -0.04072 C0.82654 -0.50962 0.42819 -0.87151 -0.04072 -0.84902 C-0.50962 -0.82654 -0.87151 -0.42819 -0.84902 0.04072 L0 0 L0.84902 -0.04072 Z M0.22763 4.74632 L1.07665 4.70561 L0.84902 -0.04072 L0 0 L-0.84902 0.04072 L-0.6214 4.78704 L0.22763 4.74632 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n26} data-layer={"227:66188/227:66214/227:66216"} data-name={"Button/var"}>
      <span className={s.n21} data-layer={"227:66188/227:66214/227:66216/227:820"} data-name={"icon/set/base"}>
        <span className={s.n27} data-layer={"227:66188/227:66214/227:66216/227:820/227:178"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n28} data-layer={"227:66188/227:66214/227:66216/227:820/227:179"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:66188/227:66214/227:66217"} data-name={"Button/var"}>
      <span className={s.n30} data-layer={"227:66188/227:66214/227:66217/227:825"} data-name={"Button"}>
        {textSlot(text,"227:66188/227:66214/227:66217/227:825","Button","Согласовать частично")}
      </span>
    </span>
  </span>
</Root>);
case "227:66218": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66218"} data-name={"State=on, Hover=off"}>
  <span className={s.n1} data-layer={"227:66218/227:66219"} data-name={"container"}>
    <span className={s.n33} data-layer={"227:66218/227:66219/227:66220"} data-name={"headline"}>
      <span className={s.n34} data-layer={"227:66218/227:66219/227:66220/227:66221"} data-name={"Chekbox/var"}></span>
      <span className={s.n35} data-layer={"227:66218/227:66219/227:66220/227:66223"} data-name={"Text"}>
        {textSlot(text,"227:66218/227:66219/227:66220/227:66223","Text","000_0000_0000")}
      </span>
      <span className={s.n36} data-layer={"227:66218/227:66219/227:66220/227:66224"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66225"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66225/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66218/227:66219/227:66220/227:66224/227:66225/227:651","Label","Value to the model")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66226"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66226/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66218/227:66219/227:66220/227:66224/227:66226/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66227"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66218/227:66219/227:66220/227:66224/227:66227/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66218/227:66219/227:66220/227:66224/227:66227/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:66218/227:66219/227:66228"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:66218/227:66219/227:66228/227:66229"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:66218/227:66219/227:66228/227:66229","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:66218/227:66219/227:66228/227:66230"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:66218/227:66219/227:66228/227:66230","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:66248": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66248"} data-name={"State=on, Hover=on"}>
  <span className={s.n1} data-layer={"227:66248/227:66249"} data-name={"container"}>
    <span className={s.n33} data-layer={"227:66248/227:66249/227:66250"} data-name={"headline"}>
      <span className={s.n34} data-layer={"227:66248/227:66249/227:66250/227:66251"} data-name={"Chekbox/var"}></span>
      <span className={s.n35} data-layer={"227:66248/227:66249/227:66250/227:66253"} data-name={"Text"}>
        {textSlot(text,"227:66248/227:66249/227:66250/227:66253","Text","000_0000_0000")}
      </span>
      <span className={s.n36} data-layer={"227:66248/227:66249/227:66250/227:66254"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66255"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66255/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66248/227:66249/227:66250/227:66254/227:66255/227:651","Label","Value to the model")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66256"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66256/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66248/227:66249/227:66250/227:66254/227:66256/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66257"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66248/227:66249/227:66250/227:66254/227:66257/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66248/227:66249/227:66250/227:66254/227:66257/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:66248/227:66249/227:66258"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:66248/227:66249/227:66258/227:66259"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:66248/227:66249/227:66258/227:66259","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:66248/227:66249/227:66258/227:66260"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:66248/227:66249/227:66258/227:66260","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:66278": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66278"} data-name={"State=Card object_ecs, Hover=var"}>
  <span className={s.n1} data-layer={"227:66278/227:66279"} data-name={"container"}>
    <span className={s.n39} data-layer={"227:66278/227:66279/227:66280"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:66278/227:66279/227:66280/227:66282"} data-name={"Text"}>
        {textSlot(text,"227:66278/227:66279/227:66280/227:66282","Text","000_0000_0000")}
      </span>
      <span className={s.n40} data-layer={"227:66278/227:66279/227:66280/227:66283"} data-name={"Lable"}>
        <span className={s.n41} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66284"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n42} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66284/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66278/227:66279/227:66280/227:66283/227:66284/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n43} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66285"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n44} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66285/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66278/227:66279/227:66280/227:66283/227:66285/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n45} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66286"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66278/227:66279/227:66280/227:66283/227:66286/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66278/227:66279/227:66280/227:66283/227:66286/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n46} data-layer={"227:66278/227:66279/227:66287"} data-name={"Text"}>
      <span className={s.n47} data-layer={"227:66278/227:66279/227:66287/227:66288"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:66278/227:66279/227:66287/227:66288","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n48} data-layer={"227:66278/227:66279/227:66287/227:66289"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:66278/227:66279/227:66287/227:66289","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:66278/227:66290"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n49} data-layer={"227:66278/227:66291"} data-name={"container"}>
    <span className={s.n50} data-layer={"227:66278/227:66291/227:66292"} data-name={"headline"}>
      <span className={s.n51} data-layer={"227:66278/227:66291/227:66292/227:66294"} data-name={"УТНФ"}>
        {textSlot(text,"227:66278/227:66291/227:66292/227:66294","УТНФ","УТНФ")}
      </span>
      <span className={s.n52} data-layer={"227:66278/227:66291/227:66292/227:66295"} data-name={"Lable"}>
        <span className={s.n53} data-layer={"227:66278/227:66291/227:66292/227:66295/227:66296"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n54} data-layer={"227:66278/227:66291/227:66292/227:66295/227:66296/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66278/227:66291/227:66292/227:66295/227:66296/227:651","Label","Согласовано")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n55} data-layer={"227:66278/227:66291/227:66299"} data-name={"Text"}>
      <span className={s.n56} data-layer={"227:66278/227:66291/227:66299/227:66301"} data-name={"Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text"}>
        {textSlot(text,"227:66278/227:66291/227:66299/227:66301","Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text","Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text")}
      </span>
    </span>
  </span>
  <span className={s.n57} data-layer={"227:66278/227:66303"} data-name={"Frame 3919"}>
    <span className={s.n58} data-layer={"227:66278/227:66303/227:66306"} data-name={"Button/var"}>
      <span className={s.n59} data-layer={"227:66278/227:66303/227:66306/227:825"} data-name={"Button"}>
        {textSlot(text,"227:66278/227:66303/227:66306/227:825","Button","Вернуть")}
      </span>
    </span>
  </span>
</Root>);
case "227:66307": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:66307"} data-name={"State=Card object_ecs, Hover=var"}>
  <span className={s.n1} data-layer={"227:66307/227:66308"} data-name={"container"}>
    <span className={s.n39} data-layer={"227:66307/227:66308/227:66309"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:66307/227:66308/227:66309/227:66311"} data-name={"Text"}>
        {textSlot(text,"227:66307/227:66308/227:66309/227:66311","Text","000_0000_0000")}
      </span>
      <span className={s.n40} data-layer={"227:66307/227:66308/227:66309/227:66312"} data-name={"Lable"}>
        <span className={s.n41} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66313"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n42} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66313/227:651"} data-name={"Label"}>
            {textSlot(text,"227:66307/227:66308/227:66309/227:66312/227:66313/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n43} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66314"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n44} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66314/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66307/227:66308/227:66309/227:66312/227:66314/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n45} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66315"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:66307/227:66308/227:66309/227:66312/227:66315/227:654"} data-name={"Label"}>
            {textSlot(text,"227:66307/227:66308/227:66309/227:66312/227:66315/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n46} data-layer={"227:66307/227:66308/227:66316"} data-name={"Text"}>
      <span className={s.n47} data-layer={"227:66307/227:66308/227:66316/227:66317"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:66307/227:66308/227:66316/227:66317","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n48} data-layer={"227:66307/227:66308/227:66316/227:66318"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:66307/227:66308/227:66316/227:66318","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:66307/227:66319"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n49} data-layer={"227:66307/227:66320"} data-name={"container"}>
    <span className={s.n61} data-layer={"227:66307/227:66320/227:66321"} data-name={"headline"}>
      <span className={s.n51} data-layer={"227:66307/227:66320/227:66321/227:66323"} data-name={"УТНФ"}>
        {textSlot(text,"227:66307/227:66320/227:66321/227:66323","УТНФ","УТНФ")}
      </span>
      <span className={s.n62} data-layer={"227:66307/227:66320/227:66321/227:66324"} data-name={"Lable"}>
        <span className={s.n63} data-layer={"227:66307/227:66320/227:66321/227:66324/227:66325"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n64} data-layer={"227:66307/227:66320/227:66321/227:66324/227:66325/227:657"} data-name={"Label"}>
            {textSlot(text,"227:66307/227:66320/227:66321/227:66324/227:66325/227:657","Label","Не согласовано")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n55} data-layer={"227:66307/227:66320/227:66328"} data-name={"Text"}>
      <span className={s.n56} data-layer={"227:66307/227:66320/227:66328/227:66330"} data-name={"Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text"}>
        {textSlot(text,"227:66307/227:66320/227:66328/227:66330","Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text","Комментарий: text text text text text text text text text text text text text text text text text text text text text text text text")}
      </span>
    </span>
  </span>
  <span className={s.n57} data-layer={"227:66307/227:66332"} data-name={"Frame 3919"}>
    <span className={s.n58} data-layer={"227:66307/227:66332/227:66335"} data-name={"Button/var"}>
      <span className={s.n59} data-layer={"227:66307/227:66332/227:66335/227:825"} data-name={"Button"}>
        {textSlot(text,"227:66307/227:66332/227:66335/227:825","Button","Вернуть")}
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
