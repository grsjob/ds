// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ObjectCardDesign.module.css';
export const variants = [
  {
    "id": "227:70776",
    "name": "State=default green, View=default, Sceleton=off",
    "props": {
      "State": "default green",
      "View": "default",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:70808",
    "name": "State=default green, View=default, Sceleton=on",
    "props": {
      "State": "default green",
      "View": "default",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:70850",
    "name": "State=default red, View=default, Sceleton=off",
    "props": {
      "State": "default red",
      "View": "default",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:70882",
    "name": "State=default green, View=hover, Sceleton=off",
    "props": {
      "State": "default green",
      "View": "hover",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:70914",
    "name": "State=default red, View=hover, Sceleton=off",
    "props": {
      "State": "default red",
      "View": "hover",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:70946",
    "name": "State=default green, View=press, Sceleton=off",
    "props": {
      "State": "default green",
      "View": "press",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:70978",
    "name": "State=default red, View=press, Sceleton=off",
    "props": {
      "State": "default red",
      "View": "press",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71011",
    "name": "State=choice, View=default, Sceleton=off",
    "props": {
      "State": "choice",
      "View": "default",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71023",
    "name": "State=choice, View=default, Sceleton=on",
    "props": {
      "State": "choice",
      "View": "default",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71034",
    "name": "State=choice, View=hover, Sceleton=off",
    "props": {
      "State": "choice",
      "View": "hover",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71046",
    "name": "State=choice, View=press, Sceleton=off",
    "props": {
      "State": "choice",
      "View": "press",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71058",
    "name": "State=accept, View=default, Sceleton=off",
    "props": {
      "State": "accept",
      "View": "default",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71073",
    "name": "State=accept, View=default, Sceleton=on",
    "props": {
      "State": "accept",
      "View": "default",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71088",
    "name": "State=accept, View=hover, Sceleton=off",
    "props": {
      "State": "accept",
      "View": "hover",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71103",
    "name": "State=accept, View=press, Sceleton=off",
    "props": {
      "State": "accept",
      "View": "press",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71118",
    "name": "State=no accept, View=default, Sceleton=off",
    "props": {
      "State": "no accept",
      "View": "default",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71134",
    "name": "State=no accept, View=default, Sceleton=on",
    "props": {
      "State": "no accept",
      "View": "default",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:71164",
    "name": "State=no accept, View=hover, Sceleton=off",
    "props": {
      "State": "no accept",
      "View": "hover",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:71180",
    "name": "State=no accept, View=press, Sceleton=off",
    "props": {
      "State": "no accept",
      "View": "press",
      "Sceleton": "off"
    }
  }
] as const;
export type ObjectCardDesignVariant = typeof variants[number]["id"];
export interface ObjectCardDesignDimensions {
  "State"?: "accept" | "choice" | "default green" | "default red" | "no accept";
  "View"?: "default" | "hover" | "press";
  "Sceleton"?: "off" | "on";
}
export interface ObjectCardDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ObjectCardDesignVariant;
  variantProps?: ObjectCardDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ObjectCardDesignVariant) => void;
}
const transitions = {"227:70776":{"ON_HOVER":"227:70882"},"227:70808":{"ON_HOVER":"227:70882"},"227:70850":{"ON_HOVER":"227:70914"},"227:70882":{"ON_HOVER":"4294967295:4294967295"},"227:71011":{"ON_HOVER":"227:71034"},"227:71023":{"ON_HOVER":"227:71034"},"227:71058":{"ON_HOVER":"227:71088"},"227:71073":{"ON_HOVER":"227:71088"},"227:71118":{"ON_HOVER":"227:71164"},"227:71134":{"ON_HOVER":"227:71164"}};
export function ObjectCardDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: ObjectCardDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:70776": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70776"} data-name={"State=default green, View=default, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70776/227:70777"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:70776/227:70777/227:70778"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70776/227:70777/227:70778/227:70779"} data-name={"Text"}>
        {textSlot(text,"227:70776/227:70777/227:70778/227:70779","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:70776/227:70777/227:70778/227:70780"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70781"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70781/227:651"} data-name={"Label"}>
            {textSlot(text,"227:70776/227:70777/227:70778/227:70780/227:70781/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70782"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70782/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70776/227:70777/227:70778/227:70780/227:70782/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70783"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70776/227:70777/227:70778/227:70780/227:70783/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70776/227:70777/227:70778/227:70780/227:70783/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70776/227:70777/227:70784"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70776/227:70777/227:70784/227:70785"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70776/227:70777/227:70784/227:70785","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70776/227:70777/227:70784/227:70786"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70776/227:70777/227:70784/227:70786","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70776/227:70787"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:70776/227:70788"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70776/227:70788/227:70789"} data-name={"Approval history"}>
      {textSlot(text,"227:70776/227:70788/227:70789","Approval history","Approval history")}
    </span>
    <span className={s.n17} data-layer={"227:70776/227:70788/227:70790"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70776/227:70788/227:70790/227:70791"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70776/227:70788/227:70790/227:70791/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70776/227:70788/227:70790/227:70791/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70776/227:70788/227:70790/227:70791/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70791/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70776/227:70788/227:70790/227:70792"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70776/227:70788/227:70790/227:70792/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70776/227:70788/227:70790/227:70792/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70776/227:70788/227:70790/227:70792/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70792/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70776/227:70788/227:70790/227:70793"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70776/227:70788/227:70790/227:70793/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70776/227:70788/227:70790/227:70793/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70776/227:70788/227:70790/227:70793/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70793/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70776/227:70788/227:70790/227:70794"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70776/227:70788/227:70790/227:70794/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70776/227:70788/227:70790/227:70794/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70776/227:70788/227:70790/227:70794/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70794/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70776/227:70788/227:70790/227:70795"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70776/227:70788/227:70790/227:70795/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70776/227:70788/227:70790/227:70795/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70776/227:70788/227:70790/227:70795/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70795/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70776/227:70788/227:70790/227:70796"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70776/227:70788/227:70790/227:70796/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70776/227:70788/227:70790/227:70796/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70776/227:70788/227:70790/227:70796/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70796/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70776/227:70788/227:70790/227:70797"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70776/227:70788/227:70790/227:70797/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70776/227:70788/227:70790/227:70797/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70776/227:70788/227:70790/227:70797/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70797/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70776/227:70788/227:70790/227:70798"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70776/227:70788/227:70790/227:70798/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70776/227:70788/227:70790/227:70798/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70776/227:70788/227:70790/227:70798/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70798/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70776/227:70788/227:70790/227:70799"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70776/227:70788/227:70790/227:70799/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70776/227:70788/227:70790/227:70799/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70776/227:70788/227:70790/227:70799/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70799/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70776/227:70788/227:70790/227:70800"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70776/227:70788/227:70790/227:70800/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70776/227:70788/227:70790/227:70800/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70776/227:70788/227:70790/227:70800/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70800/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70776/227:70788/227:70790/227:70801"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70776/227:70788/227:70790/227:70801/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70776/227:70788/227:70790/227:70801/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70776/227:70788/227:70790/227:70801/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70801/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70776/227:70788/227:70790/227:70802"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70776/227:70788/227:70790/227:70802/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70776/227:70788/227:70790/227:70802/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70776/227:70788/227:70790/227:70802/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70776/227:70788/227:70790/227:70802/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70776/227:70788/227:70803"} data-name={"Decision: Value Comment: information Important information"}>
      {textSlot(text,"227:70776/227:70788/227:70803","Decision: Value Comment: information Important information",<><span className={s.n13}>{"Decision: "}</span><span className={s.n58}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information "}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70776/227:70804"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70776/227:70804/227:70807"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70776/227:70804/227:70807/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70776/227:70804/227:70807/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:70808": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70808"} data-name={"State=default green, View=default, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:70808/227:70809"} data-name={"container"}>
    <span className={s.n62} data-layer={"227:70808/227:70809/227:70810"} data-name={"headline"}>
      <span className={s.n63} data-layer={"227:70808/227:70809/227:70810/227:70811"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n64} data-layer={"227:70808/227:70809/227:70810/227:70812"} data-name={"Lable"}>
        <span className={s.n65} data-layer={"227:70808/227:70809/227:70810/227:70812/227:70813"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n66} data-layer={"227:70808/227:70809/227:70810/227:70812/227:70814"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n67} data-layer={"227:70808/227:70809/227:70810/227:70812/227:70815"} data-name={"Lable/var/S/valeu"}></span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70808/227:70809/227:70816"} data-name={"Text"}>
      <span className={s.n68} data-layer={"227:70808/227:70809/227:70816/227:70817"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n69} data-layer={"227:70808/227:70809/227:70816/227:70818"} data-name={"Rectangle 3464326"}></span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70808/227:70819"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:70808/227:70820"} data-name={"container"}>
    <span className={s.n70} data-layer={"227:70808/227:70820/227:70828"} data-name={"Text"}>
      <span className={s.n71} data-layer={"227:70808/227:70820/227:70828/227:70829"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n17} data-layer={"227:70808/227:70820/227:70828/227:70830"} data-name={"Tabs"}>
        <span className={s.n18} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70831"} data-name={"Tab"}>
          <span className={s.n72} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70831/227:1790"} data-name={"icon & text"}>
            <span className={s.n73} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70831/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n22} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70832"} data-name={"Tab"}>
          <span className={s.n23} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70832/227:1790"} data-name={"icon & text"}>
            <span className={s.n74} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70832/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n26} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70833"} data-name={"Tab"}>
          <span className={s.n27} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70833/227:1790"} data-name={"icon & text"}>
            <span className={s.n75} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70833/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n30} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70834"} data-name={"Tab"}>
          <span className={s.n27} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70834/227:1790"} data-name={"icon & text"}>
            <span className={s.n75} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70834/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n31} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70835"} data-name={"Tab"}>
          <span className={s.n32} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70835/227:1790"} data-name={"icon & text"}>
            <span className={s.n76} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70835/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n35} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70836"} data-name={"Tab"}>
          <span className={s.n23} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70836/227:1790"} data-name={"icon & text"}>
            <span className={s.n74} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70836/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n36} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70837"} data-name={"Tab"}>
          <span className={s.n37} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70837/227:1790"} data-name={"icon & text"}>
            <span className={s.n77} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70837/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n40} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70838"} data-name={"Tab"}>
          <span className={s.n41} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70838/227:1790"} data-name={"icon & text"}>
            <span className={s.n78} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70838/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n44} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70839"} data-name={"Tab"}>
          <span className={s.n45} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70839/227:1790"} data-name={"icon & text"}>
            <span className={s.n79} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70839/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n48} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70840"} data-name={"Tab"}>
          <span className={s.n49} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70840/227:1790"} data-name={"icon & text"}>
            <span className={s.n80} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70840/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n52} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70841"} data-name={"Tab"}>
          <span className={s.n53} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70841/227:1790"} data-name={"icon & text"}>
            <span className={s.n81} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70841/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
        <span className={s.n56} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70842"} data-name={"Tab"}>
          <span className={s.n53} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70842/227:1790"} data-name={"icon & text"}>
            <span className={s.n81} data-layer={"227:70808/227:70820/227:70828/227:70830/227:70842/227:1790/227:1797"} data-name={"Rectangle 3344"}></span>
          </span>
        </span>
      </span>
      <span className={s.n82} data-layer={"227:70808/227:70820/227:70828/227:70843"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n83} data-layer={"227:70808/227:70820/227:70828/227:70844"} data-name={"Rectangle 3464326"}></span>
    </span>
  </span>
  <span className={s.n84} data-layer={"227:70808/227:70846"} data-name={"Button"}>
    <span className={s.n85} data-layer={"227:70808/227:70846/227:70849"} data-name={"Button/var"}></span>
  </span>
</Root>);
case "227:70850": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70850"} data-name={"State=default red, View=default, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70850/227:70851"} data-name={"container"}>
    <span className={s.n86} data-layer={"227:70850/227:70851/227:70852"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70850/227:70851/227:70852/227:70853"} data-name={"Text"}>
        {textSlot(text,"227:70850/227:70851/227:70852/227:70853","Text","000_0000_0000")}
      </span>
      <span className={s.n87} data-layer={"227:70850/227:70851/227:70852/227:70854"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70855"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70855/227:657"} data-name={"Label"}>
            {textSlot(text,"227:70850/227:70851/227:70852/227:70854/227:70855/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n90} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70856"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70856/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70850/227:70851/227:70852/227:70854/227:70856/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n91} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70857"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70850/227:70851/227:70852/227:70854/227:70857/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70850/227:70851/227:70852/227:70854/227:70857/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70850/227:70851/227:70858"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70850/227:70851/227:70858/227:70859"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70850/227:70851/227:70858/227:70859","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70850/227:70851/227:70858/227:70860"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70850/227:70851/227:70858/227:70860","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70850/227:70861"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n92} data-layer={"227:70850/227:70862"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70850/227:70862/227:70863"} data-name={"Approval history"}>
      {textSlot(text,"227:70850/227:70862/227:70863","Approval history","Approval history")}
    </span>
    <span className={s.n17} data-layer={"227:70850/227:70862/227:70864"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70850/227:70862/227:70864/227:70865"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70850/227:70862/227:70864/227:70865/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70850/227:70862/227:70864/227:70865/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70850/227:70862/227:70864/227:70865/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70865/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70850/227:70862/227:70864/227:70866"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70850/227:70862/227:70864/227:70866/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70850/227:70862/227:70864/227:70866/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70850/227:70862/227:70864/227:70866/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70866/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70850/227:70862/227:70864/227:70867"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70850/227:70862/227:70864/227:70867/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70850/227:70862/227:70864/227:70867/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70850/227:70862/227:70864/227:70867/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70867/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70850/227:70862/227:70864/227:70868"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70850/227:70862/227:70864/227:70868/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70850/227:70862/227:70864/227:70868/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70850/227:70862/227:70864/227:70868/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70868/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70850/227:70862/227:70864/227:70869"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70850/227:70862/227:70864/227:70869/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70850/227:70862/227:70864/227:70869/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70850/227:70862/227:70864/227:70869/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70869/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70850/227:70862/227:70864/227:70870"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70850/227:70862/227:70864/227:70870/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70850/227:70862/227:70864/227:70870/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70850/227:70862/227:70864/227:70870/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70870/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70850/227:70862/227:70864/227:70871"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70850/227:70862/227:70864/227:70871/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70850/227:70862/227:70864/227:70871/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70850/227:70862/227:70864/227:70871/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70871/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70850/227:70862/227:70864/227:70872"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70850/227:70862/227:70864/227:70872/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70850/227:70862/227:70864/227:70872/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70850/227:70862/227:70864/227:70872/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70872/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70850/227:70862/227:70864/227:70873"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70850/227:70862/227:70864/227:70873/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70850/227:70862/227:70864/227:70873/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70850/227:70862/227:70864/227:70873/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70873/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70850/227:70862/227:70864/227:70874"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70850/227:70862/227:70864/227:70874/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70850/227:70862/227:70864/227:70874/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70850/227:70862/227:70864/227:70874/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70874/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70850/227:70862/227:70864/227:70875"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70850/227:70862/227:70864/227:70875/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70850/227:70862/227:70864/227:70875/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70850/227:70862/227:70864/227:70875/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70875/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70850/227:70862/227:70864/227:70876"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70850/227:70862/227:70864/227:70876/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70850/227:70862/227:70864/227:70876/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70850/227:70862/227:70864/227:70876/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70850/227:70862/227:70864/227:70876/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70850/227:70862/227:70877"} data-name={"Decision: Value Comment: information Important information"}>
      {textSlot(text,"227:70850/227:70862/227:70877","Decision: Value Comment: information Important information",<><span className={s.n13}>{"Decision: "}</span><span className={s.n93}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information "}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70850/227:70878"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70850/227:70878/227:70881"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70850/227:70878/227:70881/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70850/227:70878/227:70881/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:70882": return (<Root {...rootAttributes} className={[s.n94,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70882"} data-name={"State=default green, View=hover, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70882/227:70883"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:70882/227:70883/227:70884"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70882/227:70883/227:70884/227:70885"} data-name={"Text"}>
        {textSlot(text,"227:70882/227:70883/227:70884/227:70885","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:70882/227:70883/227:70884/227:70886"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70887"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70887/227:651"} data-name={"Label"}>
            {textSlot(text,"227:70882/227:70883/227:70884/227:70886/227:70887/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70888"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70888/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70882/227:70883/227:70884/227:70886/227:70888/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70889"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70882/227:70883/227:70884/227:70886/227:70889/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70882/227:70883/227:70884/227:70886/227:70889/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70882/227:70883/227:70890"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70882/227:70883/227:70890/227:70891"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70882/227:70883/227:70890/227:70891","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70882/227:70883/227:70890/227:70892"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70882/227:70883/227:70890/227:70892","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70882/227:70893"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:70882/227:70894"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70882/227:70894/227:70895"} data-name={"Approval history"}>
      {textSlot(text,"227:70882/227:70894/227:70895","Approval history","Approval history")}
    </span>
    <span className={s.n17} data-layer={"227:70882/227:70894/227:70896"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70882/227:70894/227:70896/227:70897"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70882/227:70894/227:70896/227:70897/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70882/227:70894/227:70896/227:70897/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70882/227:70894/227:70896/227:70897/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70897/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70882/227:70894/227:70896/227:70898"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70882/227:70894/227:70896/227:70898/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70882/227:70894/227:70896/227:70898/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70882/227:70894/227:70896/227:70898/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70898/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70882/227:70894/227:70896/227:70899"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70882/227:70894/227:70896/227:70899/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70882/227:70894/227:70896/227:70899/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70882/227:70894/227:70896/227:70899/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70899/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70882/227:70894/227:70896/227:70900"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70882/227:70894/227:70896/227:70900/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70882/227:70894/227:70896/227:70900/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70882/227:70894/227:70896/227:70900/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70900/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70882/227:70894/227:70896/227:70901"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70882/227:70894/227:70896/227:70901/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70882/227:70894/227:70896/227:70901/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70882/227:70894/227:70896/227:70901/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70901/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70882/227:70894/227:70896/227:70902"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70882/227:70894/227:70896/227:70902/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70882/227:70894/227:70896/227:70902/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70882/227:70894/227:70896/227:70902/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70902/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70882/227:70894/227:70896/227:70903"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70882/227:70894/227:70896/227:70903/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70882/227:70894/227:70896/227:70903/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70882/227:70894/227:70896/227:70903/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70903/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70882/227:70894/227:70896/227:70904"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70882/227:70894/227:70896/227:70904/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70882/227:70894/227:70896/227:70904/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70882/227:70894/227:70896/227:70904/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70904/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70882/227:70894/227:70896/227:70905"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70882/227:70894/227:70896/227:70905/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70882/227:70894/227:70896/227:70905/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70882/227:70894/227:70896/227:70905/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70905/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70882/227:70894/227:70896/227:70906"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70882/227:70894/227:70896/227:70906/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70882/227:70894/227:70896/227:70906/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70882/227:70894/227:70896/227:70906/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70906/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70882/227:70894/227:70896/227:70907"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70882/227:70894/227:70896/227:70907/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70882/227:70894/227:70896/227:70907/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70882/227:70894/227:70896/227:70907/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70907/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70882/227:70894/227:70896/227:70908"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70882/227:70894/227:70896/227:70908/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70882/227:70894/227:70896/227:70908/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70882/227:70894/227:70896/227:70908/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70882/227:70894/227:70896/227:70908/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70882/227:70894/227:70909"} data-name={"Decision: Value Comment: information Important information"}>
      {textSlot(text,"227:70882/227:70894/227:70909","Decision: Value Comment: information Important information",<><span className={s.n13}>{"Decision: "}</span><span className={s.n58}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information "}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70882/227:70910"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70882/227:70910/227:70913"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70882/227:70910/227:70913/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70882/227:70910/227:70913/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:70914": return (<Root {...rootAttributes} className={[s.n94,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70914"} data-name={"State=default red, View=hover, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70914/227:70915"} data-name={"container"}>
    <span className={s.n86} data-layer={"227:70914/227:70915/227:70916"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70914/227:70915/227:70916/227:70917"} data-name={"Text"}>
        {textSlot(text,"227:70914/227:70915/227:70916/227:70917","Text","000_0000_0000")}
      </span>
      <span className={s.n87} data-layer={"227:70914/227:70915/227:70916/227:70918"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70919"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70919/227:657"} data-name={"Label"}>
            {textSlot(text,"227:70914/227:70915/227:70916/227:70918/227:70919/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n90} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70920"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70920/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70914/227:70915/227:70916/227:70918/227:70920/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n91} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70921"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70914/227:70915/227:70916/227:70918/227:70921/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70914/227:70915/227:70916/227:70918/227:70921/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70914/227:70915/227:70922"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70914/227:70915/227:70922/227:70923"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70914/227:70915/227:70922/227:70923","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70914/227:70915/227:70922/227:70924"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70914/227:70915/227:70922/227:70924","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70914/227:70925"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:70914/227:70926"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70914/227:70926/227:70927"} data-name={"Approval history"}>
      {textSlot(text,"227:70914/227:70926/227:70927","Approval history","Approval history")}
    </span>
    <span className={s.n17} data-layer={"227:70914/227:70926/227:70928"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70914/227:70926/227:70928/227:70929"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70914/227:70926/227:70928/227:70929/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70914/227:70926/227:70928/227:70929/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70914/227:70926/227:70928/227:70929/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70929/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70914/227:70926/227:70928/227:70930"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70914/227:70926/227:70928/227:70930/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70914/227:70926/227:70928/227:70930/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70914/227:70926/227:70928/227:70930/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70930/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70914/227:70926/227:70928/227:70931"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70914/227:70926/227:70928/227:70931/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70914/227:70926/227:70928/227:70931/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70914/227:70926/227:70928/227:70931/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70931/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70914/227:70926/227:70928/227:70932"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70914/227:70926/227:70928/227:70932/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70914/227:70926/227:70928/227:70932/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70914/227:70926/227:70928/227:70932/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70932/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70914/227:70926/227:70928/227:70933"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70914/227:70926/227:70928/227:70933/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70914/227:70926/227:70928/227:70933/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70914/227:70926/227:70928/227:70933/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70933/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70914/227:70926/227:70928/227:70934"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70914/227:70926/227:70928/227:70934/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70914/227:70926/227:70928/227:70934/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70914/227:70926/227:70928/227:70934/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70934/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70914/227:70926/227:70928/227:70935"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70914/227:70926/227:70928/227:70935/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70914/227:70926/227:70928/227:70935/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70914/227:70926/227:70928/227:70935/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70935/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70914/227:70926/227:70928/227:70936"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70914/227:70926/227:70928/227:70936/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70914/227:70926/227:70928/227:70936/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70914/227:70926/227:70928/227:70936/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70936/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70914/227:70926/227:70928/227:70937"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70914/227:70926/227:70928/227:70937/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70914/227:70926/227:70928/227:70937/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70914/227:70926/227:70928/227:70937/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70937/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70914/227:70926/227:70928/227:70938"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70914/227:70926/227:70928/227:70938/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70914/227:70926/227:70928/227:70938/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70914/227:70926/227:70928/227:70938/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70938/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70914/227:70926/227:70928/227:70939"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70914/227:70926/227:70928/227:70939/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70914/227:70926/227:70928/227:70939/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70914/227:70926/227:70928/227:70939/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70939/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70914/227:70926/227:70928/227:70940"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70914/227:70926/227:70928/227:70940/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70914/227:70926/227:70928/227:70940/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70914/227:70926/227:70928/227:70940/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70914/227:70926/227:70928/227:70940/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70914/227:70926/227:70941"} data-name={"Decision: Value Comment: information Important information I"}>
      {textSlot(text,"227:70914/227:70926/227:70941","Decision: Value Comment: information Important information I",<><span className={s.n13}>{"Decision: "}</span><span className={s.n93}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information I"}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70914/227:70942"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70914/227:70942/227:70945"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70914/227:70942/227:70945/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70914/227:70942/227:70945/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:70946": return (<Root {...rootAttributes} className={[s.n95,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70946"} data-name={"State=default green, View=press, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70946/227:70947"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:70946/227:70947/227:70948"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70946/227:70947/227:70948/227:70949"} data-name={"Text"}>
        {textSlot(text,"227:70946/227:70947/227:70948/227:70949","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:70946/227:70947/227:70948/227:70950"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70951"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70951/227:651"} data-name={"Label"}>
            {textSlot(text,"227:70946/227:70947/227:70948/227:70950/227:70951/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70952"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70952/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70946/227:70947/227:70948/227:70950/227:70952/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70953"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70946/227:70947/227:70948/227:70950/227:70953/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70946/227:70947/227:70948/227:70950/227:70953/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70946/227:70947/227:70954"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70946/227:70947/227:70954/227:70955"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70946/227:70947/227:70954/227:70955","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70946/227:70947/227:70954/227:70956"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70946/227:70947/227:70954/227:70956","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70946/227:70957"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n92} data-layer={"227:70946/227:70958"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70946/227:70958/227:70959"} data-name={"Approval history"}>
      {textSlot(text,"227:70946/227:70958/227:70959","Approval history","Approval history")}
    </span>
    <span className={s.n96} data-layer={"227:70946/227:70958/227:70960"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70946/227:70958/227:70960/227:70961"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70946/227:70958/227:70960/227:70961/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70946/227:70958/227:70960/227:70961/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70946/227:70958/227:70960/227:70961/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70961/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70946/227:70958/227:70960/227:70962"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70946/227:70958/227:70960/227:70962/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70946/227:70958/227:70960/227:70962/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70946/227:70958/227:70960/227:70962/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70962/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70946/227:70958/227:70960/227:70963"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70946/227:70958/227:70960/227:70963/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70946/227:70958/227:70960/227:70963/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70946/227:70958/227:70960/227:70963/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70963/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70946/227:70958/227:70960/227:70964"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70946/227:70958/227:70960/227:70964/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70946/227:70958/227:70960/227:70964/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70946/227:70958/227:70960/227:70964/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70964/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70946/227:70958/227:70960/227:70965"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70946/227:70958/227:70960/227:70965/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70946/227:70958/227:70960/227:70965/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70946/227:70958/227:70960/227:70965/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70965/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70946/227:70958/227:70960/227:70966"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70946/227:70958/227:70960/227:70966/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70946/227:70958/227:70960/227:70966/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70946/227:70958/227:70960/227:70966/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70966/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70946/227:70958/227:70960/227:70967"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70946/227:70958/227:70960/227:70967/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70946/227:70958/227:70960/227:70967/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70946/227:70958/227:70960/227:70967/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70967/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70946/227:70958/227:70960/227:70968"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70946/227:70958/227:70960/227:70968/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70946/227:70958/227:70960/227:70968/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70946/227:70958/227:70960/227:70968/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70968/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70946/227:70958/227:70960/227:70969"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70946/227:70958/227:70960/227:70969/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70946/227:70958/227:70960/227:70969/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70946/227:70958/227:70960/227:70969/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70969/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70946/227:70958/227:70960/227:70970"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70946/227:70958/227:70960/227:70970/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70946/227:70958/227:70960/227:70970/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70946/227:70958/227:70960/227:70970/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70970/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70946/227:70958/227:70960/227:70971"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70946/227:70958/227:70960/227:70971/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70946/227:70958/227:70960/227:70971/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70946/227:70958/227:70960/227:70971/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70971/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70946/227:70958/227:70960/227:70972"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70946/227:70958/227:70960/227:70972/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70946/227:70958/227:70960/227:70972/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70946/227:70958/227:70960/227:70972/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70946/227:70958/227:70960/227:70972/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70946/227:70958/227:70973"} data-name={"Decision: Value Comment: information Important information"}>
      {textSlot(text,"227:70946/227:70958/227:70973","Decision: Value Comment: information Important information",<><span className={s.n13}>{"Decision: "}</span><span className={s.n58}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information "}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70946/227:70974"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70946/227:70974/227:70977"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70946/227:70974/227:70977/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70946/227:70974/227:70977/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:70978": return (<Root {...rootAttributes} className={[s.n95,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:70978"} data-name={"State=default red, View=press, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:70978/227:70979"} data-name={"container"}>
    <span className={s.n86} data-layer={"227:70978/227:70979/227:70980"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:70978/227:70979/227:70980/227:70981"} data-name={"Text"}>
        {textSlot(text,"227:70978/227:70979/227:70980/227:70981","Text","000_0000_0000")}
      </span>
      <span className={s.n87} data-layer={"227:70978/227:70979/227:70980/227:70982"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70983"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70983/227:657"} data-name={"Label"}>
            {textSlot(text,"227:70978/227:70979/227:70980/227:70982/227:70983/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n90} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70984"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70984/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70978/227:70979/227:70980/227:70982/227:70984/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n91} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70985"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:70978/227:70979/227:70980/227:70982/227:70985/227:654"} data-name={"Label"}>
            {textSlot(text,"227:70978/227:70979/227:70980/227:70982/227:70985/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:70978/227:70979/227:70986"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:70978/227:70979/227:70986/227:70987"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:70978/227:70979/227:70986/227:70987","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:70978/227:70979/227:70986/227:70988"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:70978/227:70979/227:70986/227:70988","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:70978/227:70989"} data-name={"Line 3"}>
    <svg width="100%" height="100%" viewBox="0 0 340 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.5 L0 0 L340 0 L340 -0.5 L340 -1 L0 -1 L0 -0.5 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n15} data-layer={"227:70978/227:70990"} data-name={"history"}>
    <span className={s.n16} data-layer={"227:70978/227:70990/227:70991"} data-name={"Approval history"}>
      {textSlot(text,"227:70978/227:70990/227:70991","Approval history","Approval history")}
    </span>
    <span className={s.n17} data-layer={"227:70978/227:70990/227:70992"} data-name={"Tabs"}>
      <span className={s.n18} data-layer={"227:70978/227:70990/227:70992/227:70993"} data-name={"Tab"}>
        <span className={s.n19} data-layer={"227:70978/227:70990/227:70992/227:70993/227:1774"} data-name={"icon & text"}>
          <span className={s.n20} data-layer={"227:70978/227:70990/227:70992/227:70993/227:1774/227:1778"} data-name={"text"}>
            <span className={s.n21} data-layer={"227:70978/227:70990/227:70992/227:70993/227:1774/227:1778/227:1779"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70993/227:1774/227:1778/227:1779","Button","УТНФ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n22} data-layer={"227:70978/227:70990/227:70992/227:70994"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70978/227:70990/227:70992/227:70994/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70978/227:70990/227:70992/227:70994/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70978/227:70990/227:70992/227:70994/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70994/227:1782/227:1786/227:1787","Button","ШВ2В")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n26} data-layer={"227:70978/227:70990/227:70992/227:70995"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70978/227:70990/227:70992/227:70995/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70978/227:70990/227:70992/227:70995/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70978/227:70990/227:70992/227:70995/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70995/227:1782/227:1786/227:1787","Button","МВС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n30} data-layer={"227:70978/227:70990/227:70992/227:70996"} data-name={"Tab"}>
        <span className={s.n27} data-layer={"227:70978/227:70990/227:70992/227:70996/227:1782"} data-name={"icon & text"}>
          <span className={s.n28} data-layer={"227:70978/227:70990/227:70992/227:70996/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n29} data-layer={"227:70978/227:70990/227:70992/227:70996/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70996/227:1782/227:1786/227:1787","Button","ЦИК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n31} data-layer={"227:70978/227:70990/227:70992/227:70997"} data-name={"Tab"}>
        <span className={s.n32} data-layer={"227:70978/227:70990/227:70992/227:70997/227:1782"} data-name={"icon & text"}>
          <span className={s.n33} data-layer={"227:70978/227:70990/227:70992/227:70997/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n34} data-layer={"227:70978/227:70990/227:70992/227:70997/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70997/227:1782/227:1786/227:1787","Button","ХЦК")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n35} data-layer={"227:70978/227:70990/227:70992/227:70998"} data-name={"Tab"}>
        <span className={s.n23} data-layer={"227:70978/227:70990/227:70992/227:70998/227:1782"} data-name={"icon & text"}>
          <span className={s.n24} data-layer={"227:70978/227:70990/227:70992/227:70998/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n25} data-layer={"227:70978/227:70990/227:70992/227:70998/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70998/227:1782/227:1786/227:1787","Button","ШВ2С")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n36} data-layer={"227:70978/227:70990/227:70992/227:70999"} data-name={"Tab"}>
        <span className={s.n37} data-layer={"227:70978/227:70990/227:70992/227:70999/227:1782"} data-name={"icon & text"}>
          <span className={s.n38} data-layer={"227:70978/227:70990/227:70992/227:70999/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n39} data-layer={"227:70978/227:70990/227:70992/227:70999/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:70999/227:1782/227:1786/227:1787","Button","1 этап")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n40} data-layer={"227:70978/227:70990/227:70992/227:71000"} data-name={"Tab"}>
        <span className={s.n41} data-layer={"227:70978/227:70990/227:70992/227:71000/227:1782"} data-name={"icon & text"}>
          <span className={s.n42} data-layer={"227:70978/227:70990/227:70992/227:71000/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n43} data-layer={"227:70978/227:70990/227:70992/227:71000/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:71000/227:1782/227:1786/227:1787","Button","ГОСБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n44} data-layer={"227:70978/227:70990/227:70992/227:71001"} data-name={"Tab"}>
        <span className={s.n45} data-layer={"227:70978/227:70990/227:70992/227:71001/227:1782"} data-name={"icon & text"}>
          <span className={s.n46} data-layer={"227:70978/227:70990/227:70992/227:71001/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n47} data-layer={"227:70978/227:70990/227:70992/227:71001/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:71001/227:1782/227:1786/227:1787","Button","ТБ")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n48} data-layer={"227:70978/227:70990/227:70992/227:71002"} data-name={"Tab"}>
        <span className={s.n49} data-layer={"227:70978/227:70990/227:70992/227:71002/227:1782"} data-name={"icon & text"}>
          <span className={s.n50} data-layer={"227:70978/227:70990/227:70992/227:71002/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n51} data-layer={"227:70978/227:70990/227:70992/227:71002/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:71002/227:1782/227:1786/227:1787","Button","Фин.")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n52} data-layer={"227:70978/227:70990/227:70992/227:71003"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70978/227:70990/227:70992/227:71003/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70978/227:70990/227:70992/227:71003/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70978/227:70990/227:70992/227:71003/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:71003/227:1782/227:1786/227:1787","Button","ФС")}
            </span>
          </span>
        </span>
      </span>
      <span className={s.n56} data-layer={"227:70978/227:70990/227:70992/227:71004"} data-name={"Tab"}>
        <span className={s.n53} data-layer={"227:70978/227:70990/227:70992/227:71004/227:1782"} data-name={"icon & text"}>
          <span className={s.n54} data-layer={"227:70978/227:70990/227:70992/227:71004/227:1782/227:1786"} data-name={"text"}>
            <span className={s.n55} data-layer={"227:70978/227:70990/227:70992/227:71004/227:1782/227:1786/227:1787"} data-name={"Button"}>
              {textSlot(text,"227:70978/227:70990/227:70992/227:71004/227:1782/227:1786/227:1787","Button","ФК")}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n57} data-layer={"227:70978/227:70990/227:71005"} data-name={"Decision: Value Comment: information Important information"}>
      {textSlot(text,"227:70978/227:70990/227:71005","Decision: Value Comment: information Important information",<><span className={s.n13}>{"Decision: "}</span><span className={s.n93}>{"Value"}</span><span className={s.n13}>{" Comment: information Important information "}</span></>)}
    </span>
  </span>
  <span className={s.n59} data-layer={"227:70978/227:71007"} data-name={"Button"}>
    <span className={s.n60} data-layer={"227:70978/227:71007/227:71010"} data-name={"Button/var"}>
      <span className={s.n61} data-layer={"227:70978/227:71007/227:71010/227:880"} data-name={"Button"}>
        {textSlot(text,"227:70978/227:71007/227:71010/227:880","Button","Принять решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71011": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71011"} data-name={"State=choice, View=default, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71011/227:71012"} data-name={"container"}>
    <span className={s.n98} data-layer={"227:71011/227:71012/227:71013"} data-name={"headline"}>
      <span className={s.n99} data-layer={"227:71011/227:71012/227:71013/227:71014"} data-name={"Chekbox/var"}></span>
      <span className={s.n100} data-layer={"227:71011/227:71012/227:71013/227:71015"} data-name={"Text"}>
        {textSlot(text,"227:71011/227:71012/227:71013/227:71015","Text","000_0000_0000")}
      </span>
      <span className={s.n101} data-layer={"227:71011/227:71012/227:71013/227:71016"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71017"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71017/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71011/227:71012/227:71013/227:71016/227:71017/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71018"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71018/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71011/227:71012/227:71013/227:71016/227:71018/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71019"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71011/227:71012/227:71013/227:71016/227:71019/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71011/227:71012/227:71013/227:71016/227:71019/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:71011/227:71012/227:71020"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:71011/227:71012/227:71020/227:71021"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:71011/227:71012/227:71020/227:71021","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:71011/227:71012/227:71020/227:71022"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:71011/227:71012/227:71020/227:71022","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:71023": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71023"} data-name={"State=choice, View=default, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:71023/227:71024"} data-name={"container"}>
    <span className={s.n62} data-layer={"227:71023/227:71024/227:71025"} data-name={"headline"}>
      <span className={s.n63} data-layer={"227:71023/227:71024/227:71025/227:71026"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n64} data-layer={"227:71023/227:71024/227:71025/227:71027"} data-name={"Lable"}>
        <span className={s.n65} data-layer={"227:71023/227:71024/227:71025/227:71027/227:71028"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n66} data-layer={"227:71023/227:71024/227:71025/227:71027/227:71029"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n67} data-layer={"227:71023/227:71024/227:71025/227:71027/227:71030"} data-name={"Lable/var/S/valeu"}></span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:71023/227:71024/227:71031"} data-name={"Text"}>
      <span className={s.n68} data-layer={"227:71023/227:71024/227:71031/227:71032"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n69} data-layer={"227:71023/227:71024/227:71031/227:71033"} data-name={"Rectangle 3464326"}></span>
    </span>
  </span>
</Root>);
case "227:71034": return (<Root {...rootAttributes} className={[s.n102,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71034"} data-name={"State=choice, View=hover, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71034/227:71035"} data-name={"container"}>
    <span className={s.n98} data-layer={"227:71034/227:71035/227:71036"} data-name={"headline"}>
      <span className={s.n99} data-layer={"227:71034/227:71035/227:71036/227:71037"} data-name={"Chekbox/var"}></span>
      <span className={s.n100} data-layer={"227:71034/227:71035/227:71036/227:71038"} data-name={"Text"}>
        {textSlot(text,"227:71034/227:71035/227:71036/227:71038","Text","000_0000_0000")}
      </span>
      <span className={s.n101} data-layer={"227:71034/227:71035/227:71036/227:71039"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71040"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71040/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71034/227:71035/227:71036/227:71039/227:71040/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71041"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71041/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71034/227:71035/227:71036/227:71039/227:71041/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71042"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71034/227:71035/227:71036/227:71039/227:71042/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71034/227:71035/227:71036/227:71039/227:71042/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:71034/227:71035/227:71043"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:71034/227:71035/227:71043/227:71044"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:71034/227:71035/227:71043/227:71044","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:71034/227:71035/227:71043/227:71045"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:71034/227:71035/227:71043/227:71045","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:71046": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71046"} data-name={"State=choice, View=press, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71046/227:71047"} data-name={"container"}>
    <span className={s.n98} data-layer={"227:71046/227:71047/227:71048"} data-name={"headline"}>
      <span className={s.n99} data-layer={"227:71046/227:71047/227:71048/227:71049"} data-name={"Chekbox/var"}></span>
      <span className={s.n100} data-layer={"227:71046/227:71047/227:71048/227:71050"} data-name={"Text"}>
        {textSlot(text,"227:71046/227:71047/227:71048/227:71050","Text","000_0000_0000")}
      </span>
      <span className={s.n101} data-layer={"227:71046/227:71047/227:71048/227:71051"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71052"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71052/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71046/227:71047/227:71048/227:71051/227:71052/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71053"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71053/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71046/227:71047/227:71048/227:71051/227:71053/227:654","Label","Value")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71054"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71046/227:71047/227:71048/227:71051/227:71054/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71046/227:71047/227:71048/227:71051/227:71054/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:71046/227:71047/227:71055"} data-name={"information"}>
      <span className={s.n11} data-layer={"227:71046/227:71047/227:71055/227:71056"} data-name={"г. “Название город”, “Название улица”, 00"}>
        {textSlot(text,"227:71046/227:71047/227:71055/227:71056","г. “Название город”, “Название улица”, 00","г. “Название город”, “Название улица”, 00 ")}
      </span>
      <span className={s.n12} data-layer={"227:71046/227:71047/227:71055/227:71057"} data-name={"“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00"}>
        {textSlot(text,"227:71046/227:71047/227:71055/227:71057","“Формат офиса” / 000 м2 / 0 ПШЕ / Статус: 0000.00.00",<><span className={s.n13}>{"“Формат офиса” / 000 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 0 ПШЕ / Статус: 0000.00.00"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:71058": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71058"} data-name={"State=accept, View=default, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71058/227:71059"} data-name={"container"}>
    <span className={s.n105} data-layer={"227:71058/227:71059/227:71060"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71058/227:71059/227:71060/227:71061"} data-name={"Text"}>
        {textSlot(text,"227:71058/227:71059/227:71060/227:71061","Text","000_0000_0000")}
      </span>
      <span className={s.n106} data-layer={"227:71058/227:71059/227:71060/227:71062"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71063"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71063/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71058/227:71059/227:71060/227:71062/227:71063/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n107} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71064"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71064/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71058/227:71059/227:71060/227:71062/227:71064/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n109} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71065"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71058/227:71059/227:71060/227:71062/227:71065/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71058/227:71059/227:71060/227:71062/227:71065/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71058/227:71059/227:71066"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71058/227:71059/227:71066/227:71067"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71058/227:71059/227:71066/227:71067","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71058/227:71059/227:71066/227:71068"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71058/227:71059/227:71066/227:71068","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n113} data-layer={"227:71058/227:71069"} data-name={"Button"}>
    <span className={s.n114} data-layer={"227:71058/227:71069/227:71072"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71058/227:71069/227:71072/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71058/227:71069/227:71072/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71073": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71073"} data-name={"State=accept, View=default, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:71073/227:71074"} data-name={"container"}>
    <span className={s.n62} data-layer={"227:71073/227:71074/227:71075"} data-name={"headline"}>
      <span className={s.n63} data-layer={"227:71073/227:71074/227:71075/227:71076"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n64} data-layer={"227:71073/227:71074/227:71075/227:71077"} data-name={"Lable"}>
        <span className={s.n65} data-layer={"227:71073/227:71074/227:71075/227:71077/227:71078"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n66} data-layer={"227:71073/227:71074/227:71075/227:71077/227:71079"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n67} data-layer={"227:71073/227:71074/227:71075/227:71077/227:71080"} data-name={"Lable/var/S/valeu"}></span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:71073/227:71074/227:71081"} data-name={"Text"}>
      <span className={s.n68} data-layer={"227:71073/227:71074/227:71081/227:71082"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n69} data-layer={"227:71073/227:71074/227:71081/227:71083"} data-name={"Rectangle 3464326"}></span>
    </span>
  </span>
  <span className={s.n116} data-layer={"227:71073/227:71084"} data-name={"Button"}>
    <span className={s.n85} data-layer={"227:71073/227:71084/227:71087"} data-name={"Button/var"}></span>
  </span>
</Root>);
case "227:71088": return (<Root {...rootAttributes} className={[s.n117,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71088"} data-name={"State=accept, View=hover, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71088/227:71089"} data-name={"container"}>
    <span className={s.n105} data-layer={"227:71088/227:71089/227:71090"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71088/227:71089/227:71090/227:71091"} data-name={"Text"}>
        {textSlot(text,"227:71088/227:71089/227:71090/227:71091","Text","000_0000_0000")}
      </span>
      <span className={s.n106} data-layer={"227:71088/227:71089/227:71090/227:71092"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71093"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71093/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71088/227:71089/227:71090/227:71092/227:71093/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n107} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71094"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71094/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71088/227:71089/227:71090/227:71092/227:71094/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n109} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71095"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71088/227:71089/227:71090/227:71092/227:71095/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71088/227:71089/227:71090/227:71092/227:71095/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71088/227:71089/227:71096"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71088/227:71089/227:71096/227:71097"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71088/227:71089/227:71096/227:71097","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71088/227:71089/227:71096/227:71098"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71088/227:71089/227:71096/227:71098","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n113} data-layer={"227:71088/227:71099"} data-name={"Button"}>
    <span className={s.n114} data-layer={"227:71088/227:71099/227:71102"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71088/227:71099/227:71102/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71088/227:71099/227:71102/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71103": return (<Root {...rootAttributes} className={[s.n118,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71103"} data-name={"State=accept, View=press, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71103/227:71104"} data-name={"container"}>
    <span className={s.n105} data-layer={"227:71103/227:71104/227:71105"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71103/227:71104/227:71105/227:71106"} data-name={"Text"}>
        {textSlot(text,"227:71103/227:71104/227:71105/227:71106","Text","000_0000_0000")}
      </span>
      <span className={s.n106} data-layer={"227:71103/227:71104/227:71105/227:71107"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71108"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71108/227:651"} data-name={"Label"}>
            {textSlot(text,"227:71103/227:71104/227:71105/227:71107/227:71108/227:651","Label","Без изменений")}
          </span>
        </span>
        <span className={s.n107} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71109"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71109/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71103/227:71104/227:71105/227:71107/227:71109/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n109} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71110"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71103/227:71104/227:71105/227:71107/227:71110/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71103/227:71104/227:71105/227:71107/227:71110/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71103/227:71104/227:71111"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71103/227:71104/227:71111/227:71112"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71103/227:71104/227:71111/227:71112","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71103/227:71104/227:71111/227:71113"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71103/227:71104/227:71111/227:71113","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n113} data-layer={"227:71103/227:71114"} data-name={"Button"}>
    <span className={s.n114} data-layer={"227:71103/227:71114/227:71117"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71103/227:71114/227:71117/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71103/227:71114/227:71117/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71118": return (<Root {...rootAttributes} className={[s.n119,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71118"} data-name={"State=no accept, View=default, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71118/227:71119"} data-name={"container"}>
    <span className={s.n120} data-layer={"227:71118/227:71119/227:71120"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71118/227:71119/227:71120/227:71121"} data-name={"Text"}>
        {textSlot(text,"227:71118/227:71119/227:71120/227:71121","Text","000_0000_0000")}
      </span>
      <span className={s.n121} data-layer={"227:71118/227:71119/227:71120/227:71122"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71123"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71123/227:657"} data-name={"Label"}>
            {textSlot(text,"227:71118/227:71119/227:71120/227:71122/227:71123/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n122} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71124"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71124/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71118/227:71119/227:71120/227:71122/227:71124/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n123} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71125"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71118/227:71119/227:71120/227:71122/227:71125/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71118/227:71119/227:71120/227:71122/227:71125/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71118/227:71119/227:71126"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71118/227:71119/227:71126/227:71127"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71118/227:71119/227:71126/227:71127","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71118/227:71119/227:71126/227:71128"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71118/227:71119/227:71126/227:71128","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n124} data-layer={"227:71118/227:71129"} data-name={"Alert_box"}>
    <span className={s.n125} data-layer={"227:71118/227:71129/227:1472"} data-name={"Headline + lable"}>
      <span className={s.n126} data-layer={"227:71118/227:71129/227:1472/227:1473"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n127} data-layer={"227:71118/227:71129/227:1472/227:1473/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71118/227:71129/227:1472/227:1473/227:1519","Label","Не согласовано")}
        </span>
      </span>
      <span className={s.n128} data-layer={"227:71118/227:71129/227:1472/227:1475"} data-name={"Primitives/text/var"}>
        <span className={s.n129} data-layer={"227:71118/227:71129/227:1472/227:1475/227:640"} data-name={"content"}>
          <span className={s.n130} data-layer={"227:71118/227:71129/227:1472/227:1475/227:640/227:641"} data-name={"Text"}>
            {textSlot(text,"227:71118/227:71129/227:1472/227:1475/227:640/227:641","Text","Большой клиентопоток")}
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n131} data-layer={"227:71118/227:71130"} data-name={"Button"}>
    <span className={s.n114} data-layer={"227:71118/227:71130/227:71133"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71118/227:71130/227:71133/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71118/227:71130/227:71133/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71134": return (<Root {...rootAttributes} className={[s.n119,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71134"} data-name={"State=no accept, View=default, Sceleton=on"}>
  <span className={s.n1} data-layer={"227:71134/227:71135"} data-name={"container"}>
    <span className={s.n62} data-layer={"227:71134/227:71135/227:71136"} data-name={"headline"}>
      <span className={s.n63} data-layer={"227:71134/227:71135/227:71136/227:71138"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n64} data-layer={"227:71134/227:71135/227:71136/227:71139"} data-name={"Lable"}>
        <span className={s.n65} data-layer={"227:71134/227:71135/227:71136/227:71139/227:71140"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n66} data-layer={"227:71134/227:71135/227:71136/227:71139/227:71141"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n67} data-layer={"227:71134/227:71135/227:71136/227:71139/227:71142"} data-name={"Lable/var/S/valeu"}></span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71134/227:71135/227:71143"} data-name={"Text"}>
      <span className={s.n132} data-layer={"227:71134/227:71135/227:71143/227:71144"} data-name={"Rectangle 3464325"}></span>
      <span className={s.n133} data-layer={"227:71134/227:71135/227:71143/227:71145"} data-name={"Rectangle 3464326"}></span>
    </span>
  </span>
  <span className={s.n134} data-layer={"227:71134/227:71159"} data-name={"Alert_box"}></span>
  <span className={s.n135} data-layer={"227:71134/227:71160"} data-name={"Button"}>
    <span className={s.n85} data-layer={"227:71134/227:71160/227:71163"} data-name={"Button/var"}></span>
  </span>
</Root>);
case "227:71164": return (<Root {...rootAttributes} className={[s.n136,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71164"} data-name={"State=no accept, View=hover, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71164/227:71165"} data-name={"container"}>
    <span className={s.n120} data-layer={"227:71164/227:71165/227:71166"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71164/227:71165/227:71166/227:71167"} data-name={"Text"}>
        {textSlot(text,"227:71164/227:71165/227:71166/227:71167","Text","000_0000_0000")}
      </span>
      <span className={s.n121} data-layer={"227:71164/227:71165/227:71166/227:71168"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71169"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71169/227:657"} data-name={"Label"}>
            {textSlot(text,"227:71164/227:71165/227:71166/227:71168/227:71169/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n122} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71170"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71170/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71164/227:71165/227:71166/227:71168/227:71170/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n123} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71171"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71164/227:71165/227:71166/227:71168/227:71171/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71164/227:71165/227:71166/227:71168/227:71171/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71164/227:71165/227:71172"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71164/227:71165/227:71172/227:71173"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71164/227:71165/227:71172/227:71173","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71164/227:71165/227:71172/227:71174"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71164/227:71165/227:71172/227:71174","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n124} data-layer={"227:71164/227:71175"} data-name={"Alert_box"}>
    <span className={s.n125} data-layer={"227:71164/227:71175/227:1472"} data-name={"Headline + lable"}>
      <span className={s.n126} data-layer={"227:71164/227:71175/227:1472/227:1473"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n127} data-layer={"227:71164/227:71175/227:1472/227:1473/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71164/227:71175/227:1472/227:1473/227:1519","Label","Не согласовано")}
        </span>
      </span>
      <span className={s.n128} data-layer={"227:71164/227:71175/227:1472/227:1475"} data-name={"Primitives/text/var"}>
        <span className={s.n129} data-layer={"227:71164/227:71175/227:1472/227:1475/227:640"} data-name={"content"}>
          <span className={s.n130} data-layer={"227:71164/227:71175/227:1472/227:1475/227:640/227:641"} data-name={"Text"}>
            {textSlot(text,"227:71164/227:71175/227:1472/227:1475/227:640/227:641","Text","Большой клиентопоток")}
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n131} data-layer={"227:71164/227:71176"} data-name={"Button"}>
    <span className={s.n114} data-layer={"227:71164/227:71176/227:71179"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71164/227:71176/227:71179/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71164/227:71176/227:71179/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
case "227:71180": return (<Root {...rootAttributes} className={[s.n137,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:71180"} data-name={"State=no accept, View=press, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:71180/227:71181"} data-name={"container"}>
    <span className={s.n120} data-layer={"227:71180/227:71181/227:71182"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:71180/227:71181/227:71182/227:71183"} data-name={"Text"}>
        {textSlot(text,"227:71180/227:71181/227:71182/227:71183","Text","000_0000_0000")}
      </span>
      <span className={s.n121} data-layer={"227:71180/227:71181/227:71182/227:71184"} data-name={"Lable"}>
        <span className={s.n88} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71185"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n89} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71185/227:657"} data-name={"Label"}>
            {textSlot(text,"227:71180/227:71181/227:71182/227:71184/227:71185/227:657","Label","Вне ЦС")}
          </span>
        </span>
        <span className={s.n122} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71186"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n108} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71186/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71180/227:71181/227:71182/227:71184/227:71186/227:654","Label","Город")}
          </span>
        </span>
        <span className={s.n123} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71187"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:71180/227:71181/227:71182/227:71184/227:71187/227:654"} data-name={"Label"}>
            {textSlot(text,"227:71180/227:71181/227:71182/227:71184/227:71187/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n110} data-layer={"227:71180/227:71181/227:71188"} data-name={"Text"}>
      <span className={s.n111} data-layer={"227:71180/227:71181/227:71188/227:71189"} data-name={"г. Москва, Лубянский пр-д, 17"}>
        {textSlot(text,"227:71180/227:71181/227:71188/227:71189","г. Москва, Лубянский пр-д, 17","г. Москва, Лубянский пр-д, 17 ")}
      </span>
      <span className={s.n112} data-layer={"227:71180/227:71181/227:71188/227:71190"} data-name={"Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09"}>
        {textSlot(text,"227:71180/227:71181/227:71188/227:71190","Бизнес-офис / 268 м2 / 8 ПШЕ / Переформат: 2023.11.09",<><span className={s.n13}>{"Бизнес-офис / 268 м"}</span><span className={s.n13}>{"2 "}</span><span className={s.n13}>{"/ 8 ПШЕ / Переформат: 2023.11.09 "}</span></>)}
      </span>
    </span>
  </span>
  <span className={s.n124} data-layer={"227:71180/227:71191"} data-name={"Alert_box"}>
    <span className={s.n125} data-layer={"227:71180/227:71191/227:1472"} data-name={"Headline + lable"}>
      <span className={s.n126} data-layer={"227:71180/227:71191/227:1472/227:1473"} data-name={"Lable/var/L/valeu"}>
        <span className={s.n127} data-layer={"227:71180/227:71191/227:1472/227:1473/227:1519"} data-name={"Label"}>
          {textSlot(text,"227:71180/227:71191/227:1472/227:1473/227:1519","Label","Не согласовано")}
        </span>
      </span>
      <span className={s.n128} data-layer={"227:71180/227:71191/227:1472/227:1475"} data-name={"Primitives/text/var"}>
        <span className={s.n129} data-layer={"227:71180/227:71191/227:1472/227:1475/227:640"} data-name={"content"}>
          <span className={s.n130} data-layer={"227:71180/227:71191/227:1472/227:1475/227:640/227:641"} data-name={"Text"}>
            {textSlot(text,"227:71180/227:71191/227:1472/227:1475/227:640/227:641","Text","Большой клиентопоток")}
          </span>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n131} data-layer={"227:71180/227:71192"} data-name={"Frame 3919"}>
    <span className={s.n114} data-layer={"227:71180/227:71192/227:71195"} data-name={"Button/var"}>
      <span className={s.n115} data-layer={"227:71180/227:71192/227:71195/227:825"} data-name={"Button"}>
        {textSlot(text,"227:71180/227:71192/227:71195/227:825","Button","Изменить решение")}
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
