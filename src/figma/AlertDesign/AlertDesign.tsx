// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './AlertDesign.module.css';
export const variants = [
  {
    "id": "227:1471",
    "name": "State=No success, Location=Linck",
    "props": {
      "State": "No success",
      "Location": "Linck"
    }
  },
  {
    "id": "227:1479",
    "name": "State=Attention, Location=Push",
    "props": {
      "State": "Attention",
      "Location": "Push"
    }
  },
  {
    "id": "227:1490",
    "name": "State=Success, Location=Content",
    "props": {
      "State": "Success",
      "Location": "Content"
    }
  },
  {
    "id": "227:1501",
    "name": "State=Sceleton, Location=Linck",
    "props": {
      "State": "Sceleton",
      "Location": "Linck"
    }
  },
  {
    "id": "227:1505",
    "name": "State=Success, Location=Push",
    "props": {
      "State": "Success",
      "Location": "Push"
    }
  },
  {
    "id": "228:52381",
    "name": "State=No success, Location=Push",
    "props": {
      "State": "No success",
      "Location": "Push"
    }
  },
  {
    "id": "228:52392",
    "name": "State=No success soft, Location=Push",
    "props": {
      "State": "No success soft",
      "Location": "Push"
    }
  },
  {
    "id": "228:52403",
    "name": "State=Success, Location=Linck",
    "props": {
      "State": "Success",
      "Location": "Linck"
    }
  },
  {
    "id": "228:52411",
    "name": "State=No success soft, Location=Linck",
    "props": {
      "State": "No success soft",
      "Location": "Linck"
    }
  },
  {
    "id": "228:52419",
    "name": "State=Attention, Location=Linck",
    "props": {
      "State": "Attention",
      "Location": "Linck"
    }
  },
  {
    "id": "228:52427",
    "name": "State=Success, Location=Content mini",
    "props": {
      "State": "Success",
      "Location": "Content mini"
    }
  },
  {
    "id": "228:52433",
    "name": "State=No success, Location=Content mini",
    "props": {
      "State": "No success",
      "Location": "Content mini"
    }
  },
  {
    "id": "228:52439",
    "name": "State=No success soft, Location=Content mini",
    "props": {
      "State": "No success soft",
      "Location": "Content mini"
    }
  },
  {
    "id": "228:52445",
    "name": "State=Attention, Location=Content mini",
    "props": {
      "State": "Attention",
      "Location": "Content mini"
    }
  },
  {
    "id": "228:52451",
    "name": "State=No success, Location=Content",
    "props": {
      "State": "No success",
      "Location": "Content"
    }
  },
  {
    "id": "228:52462",
    "name": "State=Attention, Location=Content",
    "props": {
      "State": "Attention",
      "Location": "Content"
    }
  },
  {
    "id": "228:52473",
    "name": "State=Sceleton, Location=Content",
    "props": {
      "State": "Sceleton",
      "Location": "Content"
    }
  },
  {
    "id": "228:52479",
    "name": "State=No success soft, Location=Content",
    "props": {
      "State": "No success soft",
      "Location": "Content"
    }
  }
] as const;
export type AlertDesignVariant = typeof variants[number]["id"];
export interface AlertDesignDimensions {
  "State"?: "Attention" | "No success" | "No success soft" | "Sceleton" | "Success";
  "Location"?: "Content" | "Content mini" | "Linck" | "Push";
}
export interface AlertDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: AlertDesignVariant;
  variantProps?: AlertDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: AlertDesignVariant) => void;
}
const transitions = {};
export function AlertDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: AlertDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1471": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1471"} data-name={"State=No success, Location=Linck"}>
  <span className={s.n1} data-layer={"227:1471/227:1472"} data-name={"Headline + lable"}>
    <span className={s.n2} data-layer={"227:1471/227:1472/227:1473"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n3} data-layer={"227:1471/227:1472/227:1473/227:1519"} data-name={"Label"}>
        {textSlot(text,"227:1471/227:1472/227:1473/227:1519","Label","Not success")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:1471/227:1472/227:1475"} data-name={"Primitives/text/var"}>
      <span className={s.n5} data-layer={"227:1471/227:1472/227:1475/227:640"} data-name={"content"}>
        <span className={s.n6} data-layer={"227:1471/227:1472/227:1475/227:640/227:641"} data-name={"Text"}>
          {textSlot(text,"227:1471/227:1472/227:1475/227:640/227:641","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:1479": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1479"} data-name={"State=Attention, Location=Push"}>
  <span className={s.n8} data-layer={"227:1479/227:1480"} data-name={"Headline + lable"}>
    <span className={s.n9} data-layer={"227:1479/227:1480/227:1481"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n10} data-layer={"227:1479/227:1480/227:1481/227:1527"} data-name={"Label"}>
        {textSlot(text,"227:1479/227:1480/227:1481/227:1527","Label","Attention")}
      </span>
    </span>
    <span className={s.n11} data-layer={"227:1479/227:1480/227:1483"} data-name={"Primitives/text/var"}>
      <span className={s.n12} data-layer={"227:1479/227:1480/227:1483/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"227:1479/227:1480/227:1483/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"227:1479/227:1480/227:1483/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:1479/227:1484"} data-name={"Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"227:1479/227:1484","Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "227:1490": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1490"} data-name={"State=Success, Location=Content"}>
  <span className={s.n8} data-layer={"227:1490/227:1491"} data-name={"Headline + lable"}>
    <span className={s.n17} data-layer={"227:1490/227:1491/227:1492"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n18} data-layer={"227:1490/227:1491/227:1492/227:1531"} data-name={"Label"}>
        {textSlot(text,"227:1490/227:1491/227:1492/227:1531","Label","Success")}
      </span>
    </span>
    <span className={s.n19} data-layer={"227:1490/227:1491/227:1494"} data-name={"Primitives/text/var"}>
      <span className={s.n20} data-layer={"227:1490/227:1491/227:1494/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"227:1490/227:1491/227:1494/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"227:1490/227:1491/227:1494/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:1490/227:1495"} data-name={"Text text text text text text text text text text text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"227:1490/227:1495","Text text text text text text text text text text text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "227:1501": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1501"} data-name={"State=Sceleton, Location=Linck"}></Root>);
case "227:1505": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1505"} data-name={"State=Success, Location=Push"}>
  <span className={s.n8} data-layer={"227:1505/227:1506"} data-name={"Headline + lable"}>
    <span className={s.n17} data-layer={"227:1505/227:1506/227:1507"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n18} data-layer={"227:1505/227:1506/227:1507/227:1531"} data-name={"Label"}>
        {textSlot(text,"227:1505/227:1506/227:1507/227:1531","Label","Success")}
      </span>
    </span>
    <span className={s.n19} data-layer={"227:1505/227:1506/227:1509"} data-name={"Primitives/text/var"}>
      <span className={s.n20} data-layer={"227:1505/227:1506/227:1509/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"227:1505/227:1506/227:1509/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"227:1505/227:1506/227:1509/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"227:1505/227:1510"} data-name={"Text text text text text text text text text text text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"227:1505/227:1510","Text text text text text text text text text text text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "228:52381": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52381"} data-name={"State=No success, Location=Push"}>
  <span className={s.n8} data-layer={"228:52381/228:52382"} data-name={"Headline + lable"}>
    <span className={s.n2} data-layer={"228:52381/228:52382/228:52383"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n3} data-layer={"228:52381/228:52382/228:52383/227:1519"} data-name={"Label"}>
        {textSlot(text,"228:52381/228:52382/228:52383/227:1519","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52381/228:52382/228:52385"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52381/228:52382/228:52385/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52381/228:52382/228:52385/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52381/228:52382/228:52385/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"228:52381/228:52386"} data-name={"Text text text text text text text text text tex t text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"228:52381/228:52386","Text text text text text text text text text tex t text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"tex"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"t text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "228:52392": return (<Root {...rootAttributes} className={[s.n26,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52392"} data-name={"State=No success soft, Location=Push"}>
  <span className={s.n8} data-layer={"228:52392/228:52393"} data-name={"Headline + lable"}>
    <span className={s.n27} data-layer={"228:52392/228:52393/228:52394"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n28} data-layer={"228:52392/228:52393/228:52394/235:52218"} data-name={"Label"}>
        {textSlot(text,"228:52392/228:52393/228:52394/235:52218","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52392/228:52393/228:52396"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52392/228:52393/228:52396/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52392/228:52393/228:52396/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52392/228:52393/228:52396/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"228:52392/228:52397"} data-name={"Text text text text text text text text text te xt te xt text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"228:52392/228:52397","Text text text text text text text text text te xt te xt text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "228:52403": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52403"} data-name={"State=Success, Location=Linck"}>
  <span className={s.n1} data-layer={"228:52403/228:52404"} data-name={"Headline + lable"}>
    <span className={s.n17} data-layer={"228:52403/228:52404/228:52405"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n18} data-layer={"228:52403/228:52404/228:52405/227:1531"} data-name={"Label"}>
        {textSlot(text,"228:52403/228:52404/228:52405/227:1531","Label","Success")}
      </span>
    </span>
    <span className={s.n30} data-layer={"228:52403/228:52404/228:52407"} data-name={"Primitives/text/var"}>
      <span className={s.n31} data-layer={"228:52403/228:52404/228:52407/227:640"} data-name={"content"}>
        <span className={s.n6} data-layer={"228:52403/228:52404/228:52407/227:640/227:641"} data-name={"Text"}>
          {textSlot(text,"228:52403/228:52404/228:52407/227:640/227:641","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "228:52411": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52411"} data-name={"State=No success soft, Location=Linck"}>
  <span className={s.n1} data-layer={"228:52411/228:52412"} data-name={"Headline + lable"}>
    <span className={s.n27} data-layer={"228:52411/228:52412/228:52413"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n28} data-layer={"228:52411/228:52412/228:52413/235:52218"} data-name={"Label"}>
        {textSlot(text,"228:52411/228:52412/228:52413/235:52218","Label","Not success")}
      </span>
    </span>
    <span className={s.n4} data-layer={"228:52411/228:52412/228:52415"} data-name={"Primitives/text/var"}>
      <span className={s.n5} data-layer={"228:52411/228:52412/228:52415/227:640"} data-name={"content"}>
        <span className={s.n6} data-layer={"228:52411/228:52412/228:52415/227:640/227:641"} data-name={"Text"}>
          {textSlot(text,"228:52411/228:52412/228:52415/227:640/227:641","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "228:52419": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52419"} data-name={"State=Attention, Location=Linck"}>
  <span className={s.n1} data-layer={"228:52419/228:52420"} data-name={"Headline + lable"}>
    <span className={s.n9} data-layer={"228:52419/228:52420/228:52421"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n10} data-layer={"228:52419/228:52420/228:52421/227:1527"} data-name={"Label"}>
        {textSlot(text,"228:52419/228:52420/228:52421/227:1527","Label","Attention")}
      </span>
    </span>
    <span className={s.n34} data-layer={"228:52419/228:52420/228:52423"} data-name={"Primitives/text/var"}>
      <span className={s.n35} data-layer={"228:52419/228:52420/228:52423/227:640"} data-name={"content"}>
        <span className={s.n6} data-layer={"228:52419/228:52420/228:52423/227:640/227:641"} data-name={"Text"}>
          {textSlot(text,"228:52419/228:52420/228:52423/227:640/227:641","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "228:52427": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52427"} data-name={"State=Success, Location=Content mini"}>
  <span className={s.n8} data-layer={"228:52427/228:52428"} data-name={"Headline + lable"}>
    <span className={s.n17} data-layer={"228:52427/228:52428/228:52429"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n18} data-layer={"228:52427/228:52428/228:52429/227:1531"} data-name={"Label"}>
        {textSlot(text,"228:52427/228:52428/228:52429/227:1531","Label","Success")}
      </span>
    </span>
    <span className={s.n19} data-layer={"228:52427/228:52428/228:52431"} data-name={"Primitives/text/var"}>
      <span className={s.n20} data-layer={"228:52427/228:52428/228:52431/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52427/228:52428/228:52431/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52427/228:52428/228:52431/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n37} data-layer={"228:52427/228:52432"} data-name={"Text text text text text text text text text..."}>
    {textSlot(text,"228:52427/228:52432","Text text text text text text text text text...",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{"..."}</span></>)}
  </span>
</Root>);
case "228:52433": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52433"} data-name={"State=No success, Location=Content mini"}>
  <span className={s.n8} data-layer={"228:52433/228:52434"} data-name={"Headline + lable"}>
    <span className={s.n2} data-layer={"228:52433/228:52434/228:52435"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n3} data-layer={"228:52433/228:52434/228:52435/227:1519"} data-name={"Label"}>
        {textSlot(text,"228:52433/228:52434/228:52435/227:1519","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52433/228:52434/228:52437"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52433/228:52434/228:52437/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52433/228:52434/228:52437/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52433/228:52434/228:52437/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n37} data-layer={"228:52433/228:52438"} data-name={"Text text text text text text text text text..."}>
    {textSlot(text,"228:52433/228:52438","Text text text text text text text text text...",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{"..."}</span></>)}
  </span>
</Root>);
case "228:52439": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52439"} data-name={"State=No success soft, Location=Content mini"}>
  <span className={s.n8} data-layer={"228:52439/228:52440"} data-name={"Headline + lable"}>
    <span className={s.n27} data-layer={"228:52439/228:52440/228:52441"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n28} data-layer={"228:52439/228:52440/228:52441/235:52218"} data-name={"Label"}>
        {textSlot(text,"228:52439/228:52440/228:52441/235:52218","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52439/228:52440/228:52443"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52439/228:52440/228:52443/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52439/228:52440/228:52443/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52439/228:52440/228:52443/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n37} data-layer={"228:52439/228:52444"} data-name={"Text text text text text text text text text..."}>
    {textSlot(text,"228:52439/228:52444","Text text text text text text text text text...",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{"..."}</span></>)}
  </span>
</Root>);
case "228:52445": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52445"} data-name={"State=Attention, Location=Content mini"}>
  <span className={s.n8} data-layer={"228:52445/228:52446"} data-name={"Headline + lable"}>
    <span className={s.n9} data-layer={"228:52445/228:52446/228:52447"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n10} data-layer={"228:52445/228:52446/228:52447/227:1527"} data-name={"Label"}>
        {textSlot(text,"228:52445/228:52446/228:52447/227:1527","Label","Attention")}
      </span>
    </span>
    <span className={s.n11} data-layer={"228:52445/228:52446/228:52449"} data-name={"Primitives/text/var"}>
      <span className={s.n12} data-layer={"228:52445/228:52446/228:52449/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52445/228:52446/228:52449/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52445/228:52446/228:52449/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n37} data-layer={"228:52445/228:52450"} data-name={"Text text text text text text text text text..."}>
    {textSlot(text,"228:52445/228:52450","Text text text text text text text text text...",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{"..."}</span></>)}
  </span>
</Root>);
case "228:52451": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52451"} data-name={"State=No success, Location=Content"}>
  <span className={s.n8} data-layer={"228:52451/228:52452"} data-name={"Headline + lable"}>
    <span className={s.n2} data-layer={"228:52451/228:52452/228:52453"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n3} data-layer={"228:52451/228:52452/228:52453/227:1519"} data-name={"Label"}>
        {textSlot(text,"228:52451/228:52452/228:52453/227:1519","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52451/228:52452/228:52455"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52451/228:52452/228:52455/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52451/228:52452/228:52455/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52451/228:52452/228:52455/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"228:52451/228:52456"} data-name={"Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"228:52451/228:52456","Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "228:52462": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52462"} data-name={"State=Attention, Location=Content"}>
  <span className={s.n8} data-layer={"228:52462/228:52463"} data-name={"Headline + lable"}>
    <span className={s.n9} data-layer={"228:52462/228:52463/228:52464"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n10} data-layer={"228:52462/228:52463/228:52464/227:1527"} data-name={"Label"}>
        {textSlot(text,"228:52462/228:52463/228:52464/227:1527","Label","Attention")}
      </span>
    </span>
    <span className={s.n11} data-layer={"228:52462/228:52463/228:52466"} data-name={"Primitives/text/var"}>
      <span className={s.n12} data-layer={"228:52462/228:52463/228:52466/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52462/228:52463/228:52466/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52462/228:52463/228:52466/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"228:52462/228:52467"} data-name={"Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"228:52462/228:52467","Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
case "228:52473": return (<Root {...rootAttributes} className={[s.n43,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52473"} data-name={"State=Sceleton, Location=Content"}></Root>);
case "228:52479": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52479"} data-name={"State=No success soft, Location=Content"}>
  <span className={s.n8} data-layer={"228:52479/228:52480"} data-name={"Headline + lable"}>
    <span className={s.n27} data-layer={"228:52479/228:52480/228:52481"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n28} data-layer={"228:52479/228:52480/228:52481/235:52218"} data-name={"Label"}>
        {textSlot(text,"228:52479/228:52480/228:52481/235:52218","Label","Not success")}
      </span>
    </span>
    <span className={s.n24} data-layer={"228:52479/228:52480/228:52483"} data-name={"Primitives/text/var"}>
      <span className={s.n25} data-layer={"228:52479/228:52480/228:52483/227:586"} data-name={"content"}>
        <span className={s.n13} data-layer={"228:52479/228:52480/228:52483/227:586/227:587"} data-name={"Text"}>
          {textSlot(text,"228:52479/228:52480/228:52483/227:586/227:587","Text","Text text text text")}
        </span>
      </span>
    </span>
  </span>
  <span className={s.n14} data-layer={"228:52479/228:52484"} data-name={"Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text"}>
    {textSlot(text,"228:52479/228:52484","Text text text text text text text text text te xt text text text text text text text text text text text text text text text text text",<><span className={s.n15}>{"Text text text "}</span><span className={s.n15}>{"text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"te"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"xt text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text text text text text text text"}</span><span className={s.n15}>{" "}</span><span className={s.n15}>{"text text"}</span></>)}
  </span>
</Root>);
  default: return null;
  }
}
