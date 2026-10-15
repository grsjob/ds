// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './DataPickerDataVarDesign227_1533.module.css';
export const variants = [
  {
    "id": "227:1534",
    "name": "State=Day, Hover=off, Size=s zoom",
    "props": {
      "State": "Day",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "227:1538",
    "name": "State=Default, Hover=on, Size=s zoom",
    "props": {
      "State": "Default",
      "Hover": "on",
      "Size": "s zoom"
    }
  },
  {
    "id": "227:1543",
    "name": "State=Disabled, Hover=off, Size=s zoom",
    "props": {
      "State": "Disabled",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "227:1548",
    "name": "State=Default, Hover=off, Size=s zoom",
    "props": {
      "State": "Default",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48866",
    "name": "State=Default, Hover=off, Size=s",
    "props": {
      "State": "Default",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48871",
    "name": "State=Day, Hover=off, Size=s",
    "props": {
      "State": "Day",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48875",
    "name": "State=Disabled, Hover=off, Size=s",
    "props": {
      "State": "Disabled",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48880",
    "name": "State=Another month, Hover=off, Size=s",
    "props": {
      "State": "Another month",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48885",
    "name": "State=Another month, Hover=off, Size=s zoom",
    "props": {
      "State": "Another month",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48890",
    "name": "State=Another month, Hover=on, Size=s",
    "props": {
      "State": "Another month",
      "Hover": "on",
      "Size": "s"
    }
  },
  {
    "id": "228:48895",
    "name": "State=Another month, Hover=on, Size=s zoom",
    "props": {
      "State": "Another month",
      "Hover": "on",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48900",
    "name": "State=Press first, Hover=off, Size=s",
    "props": {
      "State": "Press first",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48905",
    "name": "State=Press first, Hover=off, Size=s zoom",
    "props": {
      "State": "Press first",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48910",
    "name": "State=Press finish, Hover=off, Size=s",
    "props": {
      "State": "Press finish",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48915",
    "name": "State=sceleton, Hover=off, Size=s",
    "props": {
      "State": "sceleton",
      "Hover": "off",
      "Size": "s"
    }
  },
  {
    "id": "228:48920",
    "name": "State=Press finish, Hover=off, Size=s zoom",
    "props": {
      "State": "Press finish",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48925",
    "name": "State=sceleton, Hover=off, Size=s zoom",
    "props": {
      "State": "sceleton",
      "Hover": "off",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48930",
    "name": "State=Press first, Hover=on, Size=s",
    "props": {
      "State": "Press first",
      "Hover": "on",
      "Size": "s"
    }
  },
  {
    "id": "228:48935",
    "name": "State=Press first, Hover=on, Size=s zoom",
    "props": {
      "State": "Press first",
      "Hover": "on",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48940",
    "name": "State=Press finish, Hover=on, Size=s",
    "props": {
      "State": "Press finish",
      "Hover": "on",
      "Size": "s"
    }
  },
  {
    "id": "228:48945",
    "name": "State=Press finish, Hover=on, Size=s zoom",
    "props": {
      "State": "Press finish",
      "Hover": "on",
      "Size": "s zoom"
    }
  },
  {
    "id": "228:48950",
    "name": "State=Default, Hover=on, Size=s",
    "props": {
      "State": "Default",
      "Hover": "on",
      "Size": "s"
    }
  }
] as const;
export type DataPickerDataVarDesign227_1533Variant = typeof variants[number]["id"];
export interface DataPickerDataVarDesign227_1533Dimensions {
  "State"?: "Another month" | "Day" | "Default" | "Disabled" | "Press finish" | "Press first" | "sceleton";
  "Hover"?: "off" | "on";
  "Size"?: "s" | "s zoom";
}
export interface DataPickerDataVarDesign227_1533Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: DataPickerDataVarDesign227_1533Variant;
  variantProps?: DataPickerDataVarDesign227_1533Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: DataPickerDataVarDesign227_1533Variant) => void;
}
const transitions = {"227:1548":{"ON_HOVER":"227:1538"},"228:48866":{"ON_HOVER":"4294967295:4294967295"},"228:48880":{"ON_HOVER":"4294967295:4294967295"},"228:48885":{"ON_HOVER":"4294967295:4294967295"},"228:48900":{"ON_HOVER":"4294967295:4294967295"},"228:48905":{"ON_HOVER":"4294967295:4294967295"},"228:48910":{"ON_HOVER":"4294967295:4294967295"},"228:48915":{"ON_HOVER":"4294967295:4294967295"},"228:48920":{"ON_HOVER":"4294967295:4294967295"},"228:48925":{"ON_HOVER":"4294967295:4294967295"}};
export function DataPickerDataVarDesign227_1533({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: DataPickerDataVarDesign227_1533Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1534": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1534"} data-name={"State=Day, Hover=off, Size=s zoom"}>
  <span className={s.n1} data-layer={"227:1534/227:1536"} data-name={"box"}>
    <span className={s.n2} data-layer={"227:1534/227:1536/227:1537"} data-name={"Dy"}>
      {textSlot(text,"227:1534/227:1536/227:1537","Dy","Dy")}
    </span>
  </span>
</Root>);
case "227:1538": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1538"} data-name={"State=Default, Hover=on, Size=s zoom"}>
  <span className={s.n3} data-layer={"227:1538/227:1540"} data-name={"box"}>
    <span className={s.n4} data-layer={"227:1538/227:1540/227:1541"} data-name={"00"}>
      {textSlot(text,"227:1538/227:1540/227:1541","00","00")}
    </span>
  </span>
</Root>);
case "227:1543": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1543"} data-name={"State=Disabled, Hover=off, Size=s zoom"}>
  <span className={s.n1} data-layer={"227:1543/227:1545"} data-name={"box"}>
    <span className={s.n5} data-layer={"227:1543/227:1545/227:1546"} data-name={"00"}>
      {textSlot(text,"227:1543/227:1545/227:1546","00","00")}
    </span>
  </span>
</Root>);
case "227:1548": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1548"} data-name={"State=Default, Hover=off, Size=s zoom"}>
  <span className={s.n1} data-layer={"227:1548/227:1550"} data-name={"box"}>
    <span className={s.n6} data-layer={"227:1548/227:1550/227:1551"} data-name={"00"}>
      {textSlot(text,"227:1548/227:1550/227:1551","00","00")}
    </span>
  </span>
</Root>);
case "228:48866": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48866"} data-name={"State=Default, Hover=off, Size=s"}>
  <span className={s.n8} data-layer={"228:48866/228:48868"} data-name={"box"}>
    <span className={s.n9} data-layer={"228:48866/228:48868/228:48869"} data-name={"00"}>
      {textSlot(text,"228:48866/228:48868/228:48869","00","00")}
    </span>
  </span>
</Root>);
case "228:48871": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48871"} data-name={"State=Day, Hover=off, Size=s"}>
  <span className={s.n8} data-layer={"228:48871/228:48873"} data-name={"box"}>
    <span className={s.n10} data-layer={"228:48871/228:48873/228:48874"} data-name={"Dy"}>
      {textSlot(text,"228:48871/228:48873/228:48874","Dy","Dy")}
    </span>
  </span>
</Root>);
case "228:48875": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48875"} data-name={"State=Disabled, Hover=off, Size=s"}>
  <span className={s.n8} data-layer={"228:48875/228:48877"} data-name={"box"}>
    <span className={s.n11} data-layer={"228:48875/228:48877/228:48878"} data-name={"00"}>
      {textSlot(text,"228:48875/228:48877/228:48878","00","00")}
    </span>
  </span>
</Root>);
case "228:48880": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48880"} data-name={"State=Another month, Hover=off, Size=s"}>
  <span className={s.n8} data-layer={"228:48880/228:48882"} data-name={"box"}>
    <span className={s.n12} data-layer={"228:48880/228:48882/228:48883"} data-name={"00"}>
      {textSlot(text,"228:48880/228:48882/228:48883","00","00")}
    </span>
  </span>
</Root>);
case "228:48885": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48885"} data-name={"State=Another month, Hover=off, Size=s zoom"}>
  <span className={s.n1} data-layer={"228:48885/228:48887"} data-name={"box"}>
    <span className={s.n13} data-layer={"228:48885/228:48887/228:48888"} data-name={"00"}>
      {textSlot(text,"228:48885/228:48887/228:48888","00","00")}
    </span>
  </span>
</Root>);
case "228:48890": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48890"} data-name={"State=Another month, Hover=on, Size=s"}>
  <span className={s.n14} data-layer={"228:48890/228:48892"} data-name={"box"}>
    <span className={s.n15} data-layer={"228:48890/228:48892/228:48893"} data-name={"00"}>
      {textSlot(text,"228:48890/228:48892/228:48893","00","00")}
    </span>
  </span>
</Root>);
case "228:48895": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48895"} data-name={"State=Another month, Hover=on, Size=s zoom"}>
  <span className={s.n3} data-layer={"228:48895/228:48897"} data-name={"box"}>
    <span className={s.n16} data-layer={"228:48895/228:48897/228:48898"} data-name={"00"}>
      {textSlot(text,"228:48895/228:48897/228:48898","00","00")}
    </span>
  </span>
</Root>);
case "228:48900": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48900"} data-name={"State=Press first, Hover=off, Size=s"}>
  <span className={s.n17} data-layer={"228:48900/228:48902"} data-name={"box"}>
    <span className={s.n18} data-layer={"228:48900/228:48902/228:48903"} data-name={"00"}>
      {textSlot(text,"228:48900/228:48902/228:48903","00","00")}
    </span>
  </span>
</Root>);
case "228:48905": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48905"} data-name={"State=Press first, Hover=off, Size=s zoom"}>
  <span className={s.n19} data-layer={"228:48905/228:48907"} data-name={"box"}>
    <span className={s.n20} data-layer={"228:48905/228:48907/228:48908"} data-name={"00"}>
      {textSlot(text,"228:48905/228:48907/228:48908","00","00")}
    </span>
  </span>
</Root>);
case "228:48910": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48910"} data-name={"State=Press finish, Hover=off, Size=s"}>
  <span className={s.n17} data-layer={"228:48910/228:48912"} data-name={"box"}>
    <span className={s.n18} data-layer={"228:48910/228:48912/228:48913"} data-name={"00"}>
      {textSlot(text,"228:48910/228:48912/228:48913","00","00")}
    </span>
  </span>
</Root>);
case "228:48915": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48915"} data-name={"State=sceleton, Hover=off, Size=s"}>
  <span className={s.n21} data-layer={"228:48915/228:48917"} data-name={"box"}>
    <span className={s.n22} data-layer={"228:48915/228:48917/228:48918"} data-name={"00"}>
      {textSlot(text,"228:48915/228:48917/228:48918","00","00")}
    </span>
  </span>
</Root>);
case "228:48920": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48920"} data-name={"State=Press finish, Hover=off, Size=s zoom"}>
  <span className={s.n19} data-layer={"228:48920/228:48922"} data-name={"box"}>
    <span className={s.n20} data-layer={"228:48920/228:48922/228:48923"} data-name={"00"}>
      {textSlot(text,"228:48920/228:48922/228:48923","00","00")}
    </span>
  </span>
</Root>);
case "228:48925": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48925"} data-name={"State=sceleton, Hover=off, Size=s zoom"}>
  <span className={s.n23} data-layer={"228:48925/228:48927"} data-name={"box"}>
    <span className={s.n24} data-layer={"228:48925/228:48927/228:48928"} data-name={"00"}>
      {textSlot(text,"228:48925/228:48927/228:48928","00","00")}
    </span>
  </span>
</Root>);
case "228:48930": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48930"} data-name={"State=Press first, Hover=on, Size=s"}>
  <span className={s.n25} data-layer={"228:48930/228:48932"} data-name={"box"}>
    <span className={s.n26} data-layer={"228:48930/228:48932/228:48933"} data-name={"00"}>
      {textSlot(text,"228:48930/228:48932/228:48933","00","00")}
    </span>
  </span>
</Root>);
case "228:48935": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48935"} data-name={"State=Press first, Hover=on, Size=s zoom"}>
  <span className={s.n27} data-layer={"228:48935/228:48937"} data-name={"box"}>
    <span className={s.n28} data-layer={"228:48935/228:48937/228:48938"} data-name={"00"}>
      {textSlot(text,"228:48935/228:48937/228:48938","00","00")}
    </span>
  </span>
</Root>);
case "228:48940": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48940"} data-name={"State=Press finish, Hover=on, Size=s"}>
  <span className={s.n25} data-layer={"228:48940/228:48942"} data-name={"box"}>
    <span className={s.n26} data-layer={"228:48940/228:48942/228:48943"} data-name={"00"}>
      {textSlot(text,"228:48940/228:48942/228:48943","00","00")}
    </span>
  </span>
</Root>);
case "228:48945": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48945"} data-name={"State=Press finish, Hover=on, Size=s zoom"}>
  <span className={s.n27} data-layer={"228:48945/228:48947"} data-name={"box"}>
    <span className={s.n28} data-layer={"228:48945/228:48947/228:48948"} data-name={"00"}>
      {textSlot(text,"228:48945/228:48947/228:48948","00","00")}
    </span>
  </span>
</Root>);
case "228:48950": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:48950"} data-name={"State=Default, Hover=on, Size=s"}>
  <span className={s.n14} data-layer={"228:48950/228:48952"} data-name={"box"}>
    <span className={s.n29} data-layer={"228:48950/228:48952/228:48953"} data-name={"00"}>
      {textSlot(text,"228:48950/228:48952/228:48953","00","00")}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
