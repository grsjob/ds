// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TextAreaDesign.module.css';
export const variants = [
  {
    "id": "227:1368",
    "name": "Tema=off, State=default fill user scroll, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user scroll",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1373",
    "name": "Tema=off, State=typing, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "typing",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1380",
    "name": "Tema=off, State=default fill, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1387",
    "name": "Tema=off, State=default, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1394",
    "name": "Tema=on, State=default fill, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default fill",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1401",
    "name": "Tema=on, State=hard validation, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "hard validation",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1410",
    "name": "Tema=on, State=default, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1417",
    "name": "Tema=off, State=default fill user graphic, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user graphic",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "227:1426",
    "name": "Tema=off, State=default fill user graphic, size=M, Sceleton=on",
    "props": {
      "Tema": "off",
      "State": "default fill user graphic",
      "size": "M",
      "Sceleton": "on"
    }
  },
  {
    "id": "227:1432",
    "name": "Tema=off, State=default fill user, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3271",
    "name": "Tema=on, State=default, size=M, Sceleton=on",
    "props": {
      "Tema": "on",
      "State": "default",
      "size": "M",
      "Sceleton": "on"
    }
  },
  {
    "id": "233:3277",
    "name": "Tema=on, State=default, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3284",
    "name": "Tema=on, State=default, size=L, Sceleton=on",
    "props": {
      "Tema": "on",
      "State": "default",
      "size": "L",
      "Sceleton": "on"
    }
  },
  {
    "id": "233:3290",
    "name": "Tema=on, State=disabled, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "disabled",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3295",
    "name": "Tema=on, State=disabled, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "disabled",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3300",
    "name": "Tema=on, State=hard validation, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "hard validation",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3309",
    "name": "Tema=on, State=soft validation, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "soft validation",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3319",
    "name": "Tema=on, State=soft validation, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "soft validation",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3329",
    "name": "Tema=on, State=default fill, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default fill",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3336",
    "name": "Tema=off, State=default fill user, size=M, Sceleton=on",
    "props": {
      "Tema": "off",
      "State": "default fill user",
      "size": "M",
      "Sceleton": "on"
    }
  },
  {
    "id": "233:3341",
    "name": "Tema=off, State=default fill user, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3345",
    "name": "Tema=off, State=default fill user, size=L, Sceleton=on",
    "props": {
      "Tema": "off",
      "State": "default fill user",
      "size": "L",
      "Sceleton": "on"
    }
  },
  {
    "id": "233:3350",
    "name": "Tema=off, State=default fill user graphic, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user graphic",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3359",
    "name": "Tema=off, State=default fill user graphic, size=L, Sceleton=on",
    "props": {
      "Tema": "off",
      "State": "default fill user graphic",
      "size": "L",
      "Sceleton": "on"
    }
  },
  {
    "id": "233:3365",
    "name": "Tema=off, State=default fill user scroll graphic, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user scroll graphic",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3376",
    "name": "Tema=off, State=default fill user scroll, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user scroll",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3381",
    "name": "Tema=off, State=default fill user scroll graphic, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill user scroll graphic",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3392",
    "name": "Tema=on, State=default fill scroll, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default fill scroll",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3400",
    "name": "Tema=on, State=default fill scroll, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "default fill scroll",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3408",
    "name": "Tema=on, State=hover, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "hover",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3415",
    "name": "Tema=on, State=hover, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "hover",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3422",
    "name": "Tema=on, State=press cursor, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "press cursor",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3429",
    "name": "Tema=on, State=press cursor, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "press cursor",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3436",
    "name": "Tema=on, State=typing, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "typing",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3443",
    "name": "Tema=on, State=typing, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "typing",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3450",
    "name": "Tema=on, State=typing scroll, size=M, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "typing scroll",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3458",
    "name": "Tema=on, State=typing scroll, size=L, Sceleton=off",
    "props": {
      "Tema": "on",
      "State": "typing scroll",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3466",
    "name": "Tema=off, State=default, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3473",
    "name": "Tema=off, State=disabled, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "disabled",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3478",
    "name": "Tema=off, State=disabled, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "disabled",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3483",
    "name": "Tema=off, State=hard validation, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "hard validation",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3492",
    "name": "Tema=off, State=hard validation, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "hard validation",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3501",
    "name": "Tema=off, State=soft validation, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "soft validation",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3511",
    "name": "Tema=off, State=soft validation, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "soft validation",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3521",
    "name": "Tema=off, State=default fill, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3528",
    "name": "Tema=off, State=default fill scroll, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill scroll",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3536",
    "name": "Tema=off, State=default fill scroll, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "default fill scroll",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3544",
    "name": "Tema=off, State=hover, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "hover",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3551",
    "name": "Tema=off, State=hover, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "hover",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3558",
    "name": "Tema=off, State=press cursor, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "press cursor",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3565",
    "name": "Tema=off, State=press cursor, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "press cursor",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3572",
    "name": "Tema=off, State=typing, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "typing",
      "size": "L",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3579",
    "name": "Tema=off, State=typing scroll, size=M, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "typing scroll",
      "size": "M",
      "Sceleton": "off"
    }
  },
  {
    "id": "233:3587",
    "name": "Tema=off, State=typing scroll, size=L, Sceleton=off",
    "props": {
      "Tema": "off",
      "State": "typing scroll",
      "size": "L",
      "Sceleton": "off"
    }
  }
] as const;
export type TextAreaDesignVariant = typeof variants[number]["id"];
export interface TextAreaDesignDimensions {
  "Tema"?: "off" | "on";
  "State"?: "default" | "default fill" | "default fill scroll" | "default fill user" | "default fill user graphic" | "default fill user scroll" | "default fill user scroll graphic" | "disabled" | "hard validation" | "hover" | "press cursor" | "soft validation" | "typing" | "typing scroll";
  "size"?: "L" | "M";
  "Sceleton"?: "off" | "on";
}
export interface TextAreaDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TextAreaDesignVariant;
  variantProps?: TextAreaDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TextAreaDesignVariant) => void;
}
const transitions = {};
export function TextAreaDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TextAreaDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1368": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1368"} data-name={"Tema=off, State=default fill user scroll, size=M, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:1368/227:1369"} data-name={"Title"}>
    {textSlot(text,"227:1368/227:1369","Title","Title")}
  </span>
  <span className={s.n2} data-layer={"227:1368/227:1370"} data-name={"Text"}>
    <span className={s.n3} data-layer={"227:1368/227:1370/227:1371"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text"}>
      {textSlot(text,"227:1368/227:1370/227:1371","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text",<><span className={s.n4}>{"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text \n"}</span><span className={s.n4}>{"Text Text Text Text Text Text Text Text Text Text"}</span><span className={s.n4}>{"Text Text Text Text Text Text Text"}</span></>)}
    </span>
    <span className={s.n5} data-layer={"227:1368/227:1370/227:1372"} data-name={"Scroll"}>
      <span className={s.n6} data-layer={"227:1368/227:1370/227:1372/227:1178"} data-name={"Scroll"}></span>
    </span>
  </span>
</Root>);
case "227:1373": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1373"} data-name={"Tema=off, State=typing, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1373/227:1374"} data-name={"Title"}>
    <span className={s.n1} data-layer={"227:1373/227:1374/227:1375"} data-name={"Title"}>
      {textSlot(text,"227:1373/227:1374/227:1375","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1373/227:1374/227:1376"} data-name={"1000/0"}>
      {textSlot(text,"227:1373/227:1374/227:1376","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n10} data-layer={"227:1373/227:1377"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1373/227:1377/227:1378"} data-name={"icon left & Text"}>
      <span className={s.n12} data-layer={"227:1373/227:1377/227:1378/227:1379"} data-name={"Text|"}>
        {textSlot(text,"227:1373/227:1377/227:1378/227:1379","Text|",<><span className={s.n4}>{"Text"}</span><span className={s.n4}>{"|"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "227:1380": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1380"} data-name={"Tema=off, State=default fill, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1380/227:1381"} data-name={"Title"}>
    <span className={s.n1} data-layer={"227:1380/227:1381/227:1382"} data-name={"Title"}>
      {textSlot(text,"227:1380/227:1381/227:1382","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1380/227:1381/227:1383"} data-name={"1000/0"}>
      {textSlot(text,"227:1380/227:1381/227:1383","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n13} data-layer={"227:1380/227:1384"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1380/227:1384/227:1385"} data-name={"icon left & Text"}>
      <span className={s.n14} data-layer={"227:1380/227:1384/227:1385/227:1386"} data-name={"Text"}>
        {textSlot(text,"227:1380/227:1384/227:1385/227:1386","Text","Text")}
      </span>
    </span>
  </span>
</Root>);
case "227:1387": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1387"} data-name={"Tema=off, State=default, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1387/227:1388"} data-name={"Title"}>
    <span className={s.n15} data-layer={"227:1387/227:1388/227:1389"} data-name={"Title"}>
      {textSlot(text,"227:1387/227:1388/227:1389","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1387/227:1388/227:1390"} data-name={"1000/0"}>
      {textSlot(text,"227:1387/227:1388/227:1390","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n13} data-layer={"227:1387/227:1391"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1387/227:1391/227:1392"} data-name={"icon left & Text"}>
      <span className={s.n16} data-layer={"227:1387/227:1391/227:1392/227:1393"} data-name={"Placeholder"}>
        {textSlot(text,"227:1387/227:1391/227:1392/227:1393","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "227:1394": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1394"} data-name={"Tema=on, State=default fill, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1394/227:1395"} data-name={"Title"}>
    <span className={s.n1} data-layer={"227:1394/227:1395/227:1396"} data-name={"Title"}>
      {textSlot(text,"227:1394/227:1395/227:1396","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1394/227:1395/227:1397"} data-name={"1000/0"}>
      {textSlot(text,"227:1394/227:1395/227:1397","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1394/227:1398"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1394/227:1398/227:1399"} data-name={"icon left & Text"}>
      <span className={s.n14} data-layer={"227:1394/227:1398/227:1399/227:1400"} data-name={"Text"}>
        {textSlot(text,"227:1394/227:1398/227:1399/227:1400","Text","Text")}
      </span>
    </span>
  </span>
</Root>);
case "227:1401": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1401"} data-name={"Tema=on, State=hard validation, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1401/227:1402"} data-name={"Title"}>
    <span className={s.n1} data-layer={"227:1401/227:1402/227:1403"} data-name={"Title"}>
      {textSlot(text,"227:1401/227:1402/227:1403","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1401/227:1402/227:1404"} data-name={"1000/0"}>
      {textSlot(text,"227:1401/227:1402/227:1404","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n19} data-layer={"227:1401/227:1405"} data-name={"Box & Helper text"}>
    <span className={s.n20} data-layer={"227:1401/227:1405/227:1406"} data-name={"Box"}>
      <span className={s.n11} data-layer={"227:1401/227:1405/227:1406/227:1407"} data-name={"icon left & Text"}>
        <span className={s.n21} data-layer={"227:1401/227:1405/227:1406/227:1407/227:1408"} data-name={"Placeholder"}>
          {textSlot(text,"227:1401/227:1405/227:1406/227:1407/227:1408","Placeholder","Placeholder")}
        </span>
      </span>
    </span>
    <span className={s.n22} data-layer={"227:1401/227:1405/227:1409"} data-name={"text"}>
      {textSlot(text,"227:1401/227:1405/227:1409","text","Error text")}
    </span>
  </span>
</Root>);
case "227:1410": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1410"} data-name={"Tema=on, State=default, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"227:1410/227:1411"} data-name={"Title"}>
    <span className={s.n15} data-layer={"227:1410/227:1411/227:1412"} data-name={"Title"}>
      {textSlot(text,"227:1410/227:1411/227:1412","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"227:1410/227:1411/227:1413"} data-name={"1000/0"}>
      {textSlot(text,"227:1410/227:1411/227:1413","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1410/227:1414"} data-name={"Box"}>
    <span className={s.n11} data-layer={"227:1410/227:1414/227:1415"} data-name={"icon left & Text"}>
      <span className={s.n21} data-layer={"227:1410/227:1414/227:1415/227:1416"} data-name={"Placeholder"}>
        {textSlot(text,"227:1410/227:1414/227:1415/227:1416","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "227:1417": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1417"} data-name={"Tema=off, State=default fill user graphic, size=M, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:1417/227:1418"} data-name={"Title"}>
    {textSlot(text,"227:1417/227:1418","Title","Title")}
  </span>
  <span className={s.n24} data-layer={"227:1417/227:1419"} data-name={"Comment value"}>
    <span className={s.n25} data-layer={"227:1417/227:1419/227:1420"} data-name={"Value"}>
      <span className={s.n26} data-layer={"227:1417/227:1419/227:1420/227:1421"} data-name={"Headline"}>
        <span className={s.n27} data-layer={"227:1417/227:1419/227:1420/227:1421/227:1422"} data-name={"icon/set/filled"}>
          <span className={s.n28} data-layer={"227:1417/227:1419/227:1420/227:1421/227:1422/227:1688"} data-name={"Subtract"}>
            <svg width="100%" height="100%" viewBox="0 0 15 15" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.5 0 C11.64214 0 15 3.35786 15 7.5 L15 11.25 C15 12.41485 14.99987 12.9976 14.80957 13.45703 C14.55584 14.06934 14.06934 14.55584 13.45703 14.80957 C12.9976 14.99987 12.41485 15 11.25 15 L7.5 15 C3.35786 15 0 11.64214 0 7.5 C0 3.35786 3.35786 0 7.5 0 Z M7.5 9.16602 C7.03987 9.16602 6.66717 9.53894 6.66699 9.99902 C6.66699 10.45926 7.03976 10.83203 7.5 10.83203 L10 10.83203 C10.46009 10.83186 10.83301 10.45915 10.83301 9.99902 C10.83283 9.53904 10.45998 9.16619 10 9.16602 L7.5 9.16602 Z M5 5.83301 C4.53987 5.83301 4.16717 6.20593 4.16699 6.66602 C4.16717 7.1261 4.53987 7.49902 5 7.49902 L10 7.49902 C10.45998 7.49885 10.83283 7.12599 10.83301 6.66602 C10.83283 6.20604 10.45998 5.83318 10 5.83301 L5 5.83301 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
        <span className={s.n29} data-layer={"227:1417/227:1419/227:1420/227:1421/227:1423"} data-name={"Высокий клиентопоток"}>
          {textSlot(text,"227:1417/227:1419/227:1420/227:1421/227:1423","Высокий клиентопоток","Высокий клиентопоток")}
        </span>
      </span>
      <span className={s.n30} data-layer={"227:1417/227:1419/227:1420/227:1424"} data-name={"Name"}>
        <span className={s.n31} data-layer={"227:1417/227:1419/227:1420/227:1424/227:1425"} data-name={"Иванов А.А. 22.03.2026"}>
          {textSlot(text,"227:1417/227:1419/227:1420/227:1424/227:1425","Иванов А.А. 22.03.2026","Иванов А.А. 22.03.2026")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:1426": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1426"} data-name={"Tema=off, State=default fill user graphic, size=M, Sceleton=on"}>
  <span className={s.n32} data-layer={"227:1426/227:1427"} data-name={"Rectangle 3344"}></span>
  <span className={s.n33} data-layer={"227:1426/227:1428"} data-name={"Comment value"}>
    <span className={s.n34} data-layer={"227:1426/227:1428/227:1429"} data-name={"Value"}>
      <span className={s.n35} data-layer={"227:1426/227:1428/227:1429/227:1430"} data-name={"Rectangle 3344"}></span>
      <span className={s.n36} data-layer={"227:1426/227:1428/227:1429/227:1431"} data-name={"Rectangle 3345"}></span>
    </span>
  </span>
</Root>);
case "227:1432": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1432"} data-name={"Tema=off, State=default fill user, size=M, Sceleton=off"}>
  <span className={s.n1} data-layer={"227:1432/227:1433"} data-name={"Title"}>
    {textSlot(text,"227:1432/227:1433","Title","Title")}
  </span>
  <span className={s.n38} data-layer={"227:1432/227:1434"} data-name={"Text"}>
    <span className={s.n39} data-layer={"227:1432/227:1434/227:1435"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
      {textSlot(text,"227:1432/227:1434/227:1435","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ")}
    </span>
  </span>
</Root>);
case "233:3271": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3271"} data-name={"Tema=on, State=default, size=M, Sceleton=on"}>
  <span className={s.n8} data-layer={"233:3271/233:3272"} data-name={"Title"}>
    <span className={s.n40} data-layer={"233:3271/233:3272/233:3273"} data-name={"Rectangle 3344"}></span>
  </span>
  <span className={s.n41} data-layer={"233:3271/233:3274"} data-name={"Box"}></span>
</Root>);
case "233:3277": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3277"} data-name={"Tema=on, State=default, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3277/233:3278"} data-name={"Title"}>
    <span className={s.n44} data-layer={"233:3277/233:3278/233:3279"} data-name={"Title"}>
      {textSlot(text,"233:3277/233:3278/233:3279","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3277/233:3278/233:3280"} data-name={"1000/0"}>
      {textSlot(text,"233:3277/233:3278/233:3280","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n46} data-layer={"233:3277/233:3281"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3277/233:3281/233:3282"} data-name={"icon left & Text"}>
      <span className={s.n48} data-layer={"233:3277/233:3281/233:3282/233:3283"} data-name={"Placeholder"}>
        {textSlot(text,"233:3277/233:3281/233:3282/233:3283","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3284": return (<Root {...rootAttributes} className={[s.n49,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3284"} data-name={"Tema=on, State=default, size=L, Sceleton=on"}>
  <span className={s.n8} data-layer={"233:3284/233:3285"} data-name={"Title"}>
    <span className={s.n32} data-layer={"233:3284/233:3285/233:3286"} data-name={"Rectangle 3344"}></span>
  </span>
  <span className={s.n50} data-layer={"233:3284/233:3287"} data-name={"Box"}></span>
</Root>);
case "233:3290": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3290"} data-name={"Tema=on, State=disabled, size=M, Sceleton=off"}>
  <span className={s.n51} data-layer={"233:3290/233:3291"} data-name={"Title"}>
    {textSlot(text,"233:3290/233:3291","Title","Title")}
  </span>
  <span className={s.n52} data-layer={"233:3290/233:3292"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3290/233:3292/233:3293"} data-name={"icon left & Text"}>
      <span className={s.n21} data-layer={"233:3290/233:3292/233:3293/233:3294"} data-name={"Placeholder"}>
        {textSlot(text,"233:3290/233:3292/233:3293/233:3294","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3295": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3295"} data-name={"Tema=on, State=disabled, size=L, Sceleton=off"}>
  <span className={s.n53} data-layer={"233:3295/233:3296"} data-name={"Title"}>
    {textSlot(text,"233:3295/233:3296","Title","Title")}
  </span>
  <span className={s.n54} data-layer={"233:3295/233:3297"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3295/233:3297/233:3298"} data-name={"icon left & Text"}>
      <span className={s.n48} data-layer={"233:3295/233:3297/233:3298/233:3299"} data-name={"Placeholder"}>
        {textSlot(text,"233:3295/233:3297/233:3298/233:3299","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3300": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3300"} data-name={"Tema=on, State=hard validation, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3300/233:3301"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3300/233:3301/233:3302"} data-name={"Title"}>
      {textSlot(text,"233:3300/233:3301/233:3302","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3300/233:3301/233:3303"} data-name={"1000/0"}>
      {textSlot(text,"233:3300/233:3301/233:3303","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n57} data-layer={"233:3300/233:3304"} data-name={"Box & Helper text"}>
    <span className={s.n58} data-layer={"233:3300/233:3304/233:3305"} data-name={"Box"}>
      <span className={s.n47} data-layer={"233:3300/233:3304/233:3305/233:3306"} data-name={"icon left & Text"}>
        <span className={s.n48} data-layer={"233:3300/233:3304/233:3305/233:3306/233:3307"} data-name={"Placeholder"}>
          {textSlot(text,"233:3300/233:3304/233:3305/233:3306/233:3307","Placeholder","Placeholder")}
        </span>
      </span>
    </span>
    <span className={s.n59} data-layer={"233:3300/233:3304/233:3308"} data-name={"text"}>
      {textSlot(text,"233:3300/233:3304/233:3308","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3309": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3309"} data-name={"Tema=on, State=soft validation, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3309/233:3310"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3309/233:3310/233:3311"} data-name={"Title"}>
      {textSlot(text,"233:3309/233:3310/233:3311","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3309/233:3310/233:3312"} data-name={"1000/0"}>
      {textSlot(text,"233:3309/233:3310/233:3312","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n61} data-layer={"233:3309/233:3313"} data-name={"Box & Helper text"}>
    <span className={s.n62} data-layer={"233:3309/233:3313/233:3314"} data-name={"Box"}>
      <span className={s.n63} data-layer={"233:3309/233:3313/233:3314/233:3315"} data-name={"Text"}>
        <span className={s.n64} data-layer={"233:3309/233:3313/233:3314/233:3315/233:3316"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|"}>
          {textSlot(text,"233:3309/233:3313/233:3314/233:3315/233:3316","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|",<><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text|"}</span></>)}
        </span>
        <span className={s.n65} data-layer={"233:3309/233:3313/233:3314/233:3315/233:3317"} data-name={"Scroll"}>
          <span className={s.n66} data-layer={"233:3309/233:3313/233:3314/233:3315/233:3317/227:1180"} data-name={"Scroll"}></span>
        </span>
      </span>
    </span>
    <span className={s.n67} data-layer={"233:3309/233:3313/233:3318"} data-name={"text"}>
      {textSlot(text,"233:3309/233:3313/233:3318","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3319": return (<Root {...rootAttributes} className={[s.n68,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3319"} data-name={"Tema=on, State=soft validation, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3319/233:3320"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3319/233:3320/233:3321"} data-name={"Title"}>
      {textSlot(text,"233:3319/233:3320/233:3321","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3319/233:3320/233:3322"} data-name={"1000/0"}>
      {textSlot(text,"233:3319/233:3320/233:3322","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n69} data-layer={"233:3319/233:3323"} data-name={"Box & Helper text"}>
    <span className={s.n70} data-layer={"233:3319/233:3323/233:3324"} data-name={"Box"}>
      <span className={s.n71} data-layer={"233:3319/233:3323/233:3324/233:3325"} data-name={"Text"}>
        <span className={s.n72} data-layer={"233:3319/233:3323/233:3324/233:3325/233:3326"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|"}>
          {textSlot(text,"233:3319/233:3323/233:3324/233:3325/233:3326","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|",<><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text|"}</span></>)}
        </span>
        <span className={s.n74} data-layer={"233:3319/233:3323/233:3324/233:3325/233:3327"} data-name={"Scroll"}>
          <span className={s.n66} data-layer={"233:3319/233:3323/233:3324/233:3325/233:3327/227:1180"} data-name={"Scroll"}></span>
        </span>
      </span>
    </span>
    <span className={s.n75} data-layer={"233:3319/233:3323/233:3328"} data-name={"text"}>
      {textSlot(text,"233:3319/233:3323/233:3328","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3329": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3329"} data-name={"Tema=on, State=default fill, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3329/233:3330"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3329/233:3330/233:3331"} data-name={"Title"}>
      {textSlot(text,"233:3329/233:3330/233:3331","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3329/233:3330/233:3332"} data-name={"1000/0"}>
      {textSlot(text,"233:3329/233:3330/233:3332","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n46} data-layer={"233:3329/233:3333"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3329/233:3333/233:3334"} data-name={"icon left & Text"}>
      <span className={s.n76} data-layer={"233:3329/233:3333/233:3334/233:3335"} data-name={"Text"}>
        {textSlot(text,"233:3329/233:3333/233:3334/233:3335","Text","Text")}
      </span>
    </span>
  </span>
</Root>);
case "233:3336": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3336"} data-name={"Tema=off, State=default fill user, size=M, Sceleton=on"}>
  <span className={s.n32} data-layer={"233:3336/233:3337"} data-name={"Rectangle 3344"}></span>
  <span className={s.n38} data-layer={"233:3336/233:3338"} data-name={"Text"}>
    <span className={s.n77} data-layer={"233:3336/233:3338/233:3339"} data-name={"Rectangle 3344"}></span>
    <span className={s.n78} data-layer={"233:3336/233:3338/233:3340"} data-name={"Rectangle 3345"}></span>
  </span>
</Root>);
case "233:3341": return (<Root {...rootAttributes} className={[s.n79,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3341"} data-name={"Tema=off, State=default fill user, size=L, Sceleton=off"}>
  <span className={s.n56} data-layer={"233:3341/233:3342"} data-name={"Title"}>
    {textSlot(text,"233:3341/233:3342","Title","Title")}
  </span>
  <span className={s.n80} data-layer={"233:3341/233:3343"} data-name={"Text"}>
    <span className={s.n81} data-layer={"233:3341/233:3343/233:3344"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
      {textSlot(text,"233:3341/233:3343/233:3344","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ")}
    </span>
  </span>
</Root>);
case "233:3345": return (<Root {...rootAttributes} className={[s.n79,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3345"} data-name={"Tema=off, State=default fill user, size=L, Sceleton=on"}>
  <span className={s.n82} data-layer={"233:3345/233:3346"} data-name={"Rectangle 3344"}></span>
  <span className={s.n80} data-layer={"233:3345/233:3347"} data-name={"Text"}>
    <span className={s.n83} data-layer={"233:3345/233:3347/233:3348"} data-name={"Rectangle 3344"}></span>
    <span className={s.n84} data-layer={"233:3345/233:3347/233:3349"} data-name={"Rectangle 3345"}></span>
  </span>
</Root>);
case "233:3350": return (<Root {...rootAttributes} className={[s.n85,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3350"} data-name={"Tema=off, State=default fill user graphic, size=L, Sceleton=off"}>
  <span className={s.n56} data-layer={"233:3350/233:3351"} data-name={"Title"}>
    {textSlot(text,"233:3350/233:3351","Title","Title")}
  </span>
  <span className={s.n86} data-layer={"233:3350/233:3352"} data-name={"Comment value"}>
    <span className={s.n87} data-layer={"233:3350/233:3352/233:3353"} data-name={"Value"}>
      <span className={s.n88} data-layer={"233:3350/233:3352/233:3353/233:3354"} data-name={"Headline"}>
        <span className={s.n89} data-layer={"233:3350/233:3352/233:3353/233:3354/233:3355"} data-name={"icon/set/filled"}>
          <span className={s.n90} data-layer={"233:3350/233:3352/233:3353/233:3354/233:3355/233:3266"} data-name={"Subtract"}>
            <svg width="100%" height="100%" viewBox="0 0 16.5 16.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.25 0 C12.80635 0 16.5 3.69365 16.5 8.25 L16.5 12.375 C16.5 13.65634 16.50035 14.29736 16.29102 14.80273 C16.01191 15.47642 15.47642 16.01191 14.80273 16.29102 C14.29736 16.50035 13.65634 16.5 12.375 16.5 L8.25 16.5 C3.69365 16.5 0 12.80635 0 8.25 C0 3.69365 3.69365 0 8.25 0 Z M8.24902 10.08203 C7.74315 10.08237 7.33219 10.49311 7.33203 10.99902 C7.33208 11.50503 7.74309 11.91567 8.24902 11.91602 L10.99902 11.91602 C11.50525 11.91602 11.91596 11.50524 11.91602 10.99902 C11.91586 10.4929 11.50519 10.08203 10.99902 10.08203 L8.24902 10.08203 Z M5.49902 6.41602 C4.99315 6.41636 4.58219 6.82709 4.58203 7.33301 C4.58224 7.83888 4.99318 8.24966 5.49902 8.25 L10.99902 8.25 C11.50515 8.25 11.9158 7.83909 11.91602 7.33301 C11.91586 6.82688 11.50519 6.41602 10.99902 6.41602 L5.49902 6.41602 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
        <span className={s.n91} data-layer={"233:3350/233:3352/233:3353/233:3354/233:3356"} data-name={"Высокий клиентопоток"}>
          {textSlot(text,"233:3350/233:3352/233:3353/233:3354/233:3356","Высокий клиентопоток","Высокий клиентопоток")}
        </span>
      </span>
      <span className={s.n92} data-layer={"233:3350/233:3352/233:3353/233:3357"} data-name={"Name"}>
        <span className={s.n93} data-layer={"233:3350/233:3352/233:3353/233:3357/233:3358"} data-name={"Иванов А.А. 22.03.2026"}>
          {textSlot(text,"233:3350/233:3352/233:3353/233:3357/233:3358","Иванов А.А. 22.03.2026","Иванов А.А. 22.03.2026")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "233:3359": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3359"} data-name={"Tema=off, State=default fill user graphic, size=L, Sceleton=on"}>
  <span className={s.n82} data-layer={"233:3359/233:3360"} data-name={"Rectangle 3344"}></span>
  <span className={s.n94} data-layer={"233:3359/233:3361"} data-name={"Comment value"}>
    <span className={s.n95} data-layer={"233:3359/233:3361/233:3362"} data-name={"Value"}>
      <span className={s.n96} data-layer={"233:3359/233:3361/233:3362/233:3363"} data-name={"Rectangle 3344"}></span>
      <span className={s.n97} data-layer={"233:3359/233:3361/233:3362/233:3364"} data-name={"Rectangle 3345"}></span>
    </span>
  </span>
</Root>);
case "233:3365": return (<Root {...rootAttributes} className={[s.n98,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3365"} data-name={"Tema=off, State=default fill user scroll graphic, size=M, Sceleton=off"}>
  <span className={s.n1} data-layer={"233:3365/233:3366"} data-name={"Title"}>
    {textSlot(text,"233:3365/233:3366","Title","Title")}
  </span>
  <span className={s.n99} data-layer={"233:3365/233:3367"} data-name={"Comment value"}>
    <span className={s.n100} data-layer={"233:3365/233:3367/233:3368"} data-name={"Value"}>
      <span className={s.n101} data-layer={"233:3365/233:3367/233:3368/233:3369"} data-name={"Headline"}>
        <span className={s.n27} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3370"} data-name={"icon/set/filled"}>
          <span className={s.n28} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3370/227:1688"} data-name={"Subtract"}>
            <svg width="100%" height="100%" viewBox="0 0 15 15" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.5 0 C11.64214 0 15 3.35786 15 7.5 L15 11.25 C15 12.41485 14.99987 12.9976 14.80957 13.45703 C14.55584 14.06934 14.06934 14.55584 13.45703 14.80957 C12.9976 14.99987 12.41485 15 11.25 15 L7.5 15 C3.35786 15 0 11.64214 0 7.5 C0 3.35786 3.35786 0 7.5 0 Z M7.5 9.16602 C7.03987 9.16602 6.66717 9.53894 6.66699 9.99902 C6.66699 10.45926 7.03976 10.83203 7.5 10.83203 L10 10.83203 C10.46009 10.83186 10.83301 10.45915 10.83301 9.99902 C10.83283 9.53904 10.45998 9.16619 10 9.16602 L7.5 9.16602 Z M5 5.83301 C4.53987 5.83301 4.16717 6.20593 4.16699 6.66602 C4.16717 7.1261 4.53987 7.49902 5 7.49902 L10 7.49902 C10.45998 7.49885 10.83283 7.12599 10.83301 6.66602 C10.83283 6.20604 10.45998 5.83318 10 5.83301 L5 5.83301 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
        <span className={s.n102} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3371"} data-name={"Text"}>
          <span className={s.n103} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3371/233:3372"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text"}>
            {textSlot(text,"233:3365/233:3367/233:3368/233:3369/233:3371/233:3372","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text \nText Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text")}
          </span>
          <span className={s.n104} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3371/233:3373"} data-name={"Scroll"}>
            <span className={s.n105} data-layer={"233:3365/233:3367/233:3368/233:3369/233:3371/233:3373/227:1178"} data-name={"Scroll"}></span>
          </span>
        </span>
      </span>
      <span className={s.n106} data-layer={"233:3365/233:3367/233:3368/233:3374"} data-name={"Name"}>
        <span className={s.n31} data-layer={"233:3365/233:3367/233:3368/233:3374/233:3375"} data-name={"Иванов А.А. 22.03.2026"}>
          {textSlot(text,"233:3365/233:3367/233:3368/233:3374/233:3375","Иванов А.А. 22.03.2026","Иванов А.А. 22.03.2026")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "233:3376": return (<Root {...rootAttributes} className={[s.n107,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3376"} data-name={"Tema=off, State=default fill user scroll, size=L, Sceleton=off"}>
  <span className={s.n56} data-layer={"233:3376/233:3377"} data-name={"Title"}>
    {textSlot(text,"233:3376/233:3377","Title","Title")}
  </span>
  <span className={s.n108} data-layer={"233:3376/233:3378"} data-name={"Text"}>
    <span className={s.n109} data-layer={"233:3376/233:3378/233:3379"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
      {textSlot(text,"233:3376/233:3378/233:3379","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text")}
    </span>
    <span className={s.n5} data-layer={"233:3376/233:3378/233:3380"} data-name={"Scroll"}>
      <span className={s.n6} data-layer={"233:3376/233:3378/233:3380/227:1178"} data-name={"Scroll"}></span>
    </span>
  </span>
</Root>);
case "233:3381": return (<Root {...rootAttributes} className={[s.n110,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3381"} data-name={"Tema=off, State=default fill user scroll graphic, size=L, Sceleton=off"}>
  <span className={s.n56} data-layer={"233:3381/233:3382"} data-name={"Title"}>
    {textSlot(text,"233:3381/233:3382","Title","Title")}
  </span>
  <span className={s.n111} data-layer={"233:3381/233:3383"} data-name={"Comment value"}>
    <span className={s.n112} data-layer={"233:3381/233:3383/233:3384"} data-name={"Value"}>
      <span className={s.n113} data-layer={"233:3381/233:3383/233:3384/233:3385"} data-name={"Headline"}>
        <span className={s.n89} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3386"} data-name={"icon/set/filled"}>
          <span className={s.n90} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3386/233:3266"} data-name={"Subtract"}>
            <svg width="100%" height="100%" viewBox="0 0 16.5 16.5" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.25 0 C12.80635 0 16.5 3.69365 16.5 8.25 L16.5 12.375 C16.5 13.65634 16.50035 14.29736 16.29102 14.80273 C16.01191 15.47642 15.47642 16.01191 14.80273 16.29102 C14.29736 16.50035 13.65634 16.5 12.375 16.5 L8.25 16.5 C3.69365 16.5 0 12.80635 0 8.25 C0 3.69365 3.69365 0 8.25 0 Z M8.24902 10.08203 C7.74315 10.08237 7.33219 10.49311 7.33203 10.99902 C7.33208 11.50503 7.74309 11.91567 8.24902 11.91602 L10.99902 11.91602 C11.50525 11.91602 11.91596 11.50524 11.91602 10.99902 C11.91586 10.4929 11.50519 10.08203 10.99902 10.08203 L8.24902 10.08203 Z M5.49902 6.41602 C4.99315 6.41636 4.58219 6.82709 4.58203 7.33301 C4.58224 7.83888 4.99318 8.24966 5.49902 8.25 L10.99902 8.25 C11.50515 8.25 11.9158 7.83909 11.91602 7.33301 C11.91586 6.82688 11.50519 6.41602 10.99902 6.41602 L5.49902 6.41602 Z"} fill={"rgba(39,193,14,1)"} fillRule="nonzero"/></svg>
          </span>
        </span>
        <span className={s.n114} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3387"} data-name={"Text"}>
          <span className={s.n115} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3387/233:3388"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text"}>
            {textSlot(text,"233:3381/233:3383/233:3384/233:3385/233:3387/233:3388","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text",<><span className={s.n4}>{"T"}</span><span className={s.n73}>{"ext Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text \nText Text Text Text Text Text Text Text Text TextText Text Text Text Text Text Text"}</span></>)}
          </span>
          <span className={s.n116} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3387/233:3389"} data-name={"Scroll"}>
            <span className={s.n117} data-layer={"233:3381/233:3383/233:3384/233:3385/233:3387/233:3389/227:1178"} data-name={"Scroll"}></span>
          </span>
        </span>
      </span>
      <span className={s.n118} data-layer={"233:3381/233:3383/233:3384/233:3390"} data-name={"Name"}>
        <span className={s.n93} data-layer={"233:3381/233:3383/233:3384/233:3390/233:3391"} data-name={"Иванов А.А. 22.03.2026"}>
          {textSlot(text,"233:3381/233:3383/233:3384/233:3390/233:3391","Иванов А.А. 22.03.2026","Иванов А.А. 22.03.2026")}
        </span>
      </span>
    </span>
  </span>
</Root>);
case "233:3392": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3392"} data-name={"Tema=on, State=default fill scroll, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3392/233:3393"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3392/233:3393/233:3394"} data-name={"Title"}>
      {textSlot(text,"233:3392/233:3393/233:3394","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3392/233:3393/233:3395"} data-name={"1000/0"}>
      {textSlot(text,"233:3392/233:3393/233:3395","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n17} data-layer={"233:3392/233:3396"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3392/233:3396/233:3397"} data-name={"Text"}>
      <span className={s.n119} data-layer={"233:3392/233:3396/233:3397/233:3398"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
        {textSlot(text,"233:3392/233:3396/233:3397/233:3398","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text")}
      </span>
      <span className={s.n120} data-layer={"233:3392/233:3396/233:3397/233:3399"} data-name={"Scroll"}>
        <span className={s.n121} data-layer={"233:3392/233:3396/233:3397/233:3399/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3400": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3400"} data-name={"Tema=on, State=default fill scroll, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3400/233:3401"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3400/233:3401/233:3402"} data-name={"Title"}>
      {textSlot(text,"233:3400/233:3401/233:3402","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3400/233:3401/233:3403"} data-name={"1000/0"}>
      {textSlot(text,"233:3400/233:3401/233:3403","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n46} data-layer={"233:3400/233:3404"} data-name={"Box"}>
    <span className={s.n122} data-layer={"233:3400/233:3404/233:3405"} data-name={"Text"}>
      <span className={s.n123} data-layer={"233:3400/233:3404/233:3405/233:3406"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
        {textSlot(text,"233:3400/233:3404/233:3405/233:3406","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text")}
      </span>
      <span className={s.n124} data-layer={"233:3400/233:3404/233:3405/233:3407"} data-name={"Scroll"}>
        <span className={s.n121} data-layer={"233:3400/233:3404/233:3405/233:3407/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3408": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3408"} data-name={"Tema=on, State=hover, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3408/233:3409"} data-name={"Title"}>
    <span className={s.n15} data-layer={"233:3408/233:3409/233:3410"} data-name={"Title"}>
      {textSlot(text,"233:3408/233:3409/233:3410","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3408/233:3409/233:3411"} data-name={"1000/0"}>
      {textSlot(text,"233:3408/233:3409/233:3411","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n125} data-layer={"233:3408/233:3412"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3408/233:3412/233:3413"} data-name={"icon left & Text"}>
      <span className={s.n21} data-layer={"233:3408/233:3412/233:3413/233:3414"} data-name={"Placeholder"}>
        {textSlot(text,"233:3408/233:3412/233:3413/233:3414","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3415": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3415"} data-name={"Tema=on, State=hover, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3415/233:3416"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3415/233:3416/233:3417"} data-name={"Title"}>
      {textSlot(text,"233:3415/233:3416/233:3417","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3415/233:3416/233:3418"} data-name={"1000/0"}>
      {textSlot(text,"233:3415/233:3416/233:3418","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n126} data-layer={"233:3415/233:3419"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3415/233:3419/233:3420"} data-name={"icon left & Text"}>
      <span className={s.n48} data-layer={"233:3415/233:3419/233:3420/233:3421"} data-name={"Placeholder"}>
        {textSlot(text,"233:3415/233:3419/233:3420/233:3421","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3422": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3422"} data-name={"Tema=on, State=press cursor, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3422/233:3423"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3422/233:3423/233:3424"} data-name={"Title"}>
      {textSlot(text,"233:3422/233:3423/233:3424","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3422/233:3423/233:3425"} data-name={"1000/0"}>
      {textSlot(text,"233:3422/233:3423/233:3425","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n127} data-layer={"233:3422/233:3426"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3422/233:3426/233:3427"} data-name={"icon left & Text"}>
      <span className={s.n128} data-layer={"233:3422/233:3426/233:3427/233:3428"} data-name={"|"}>
        {textSlot(text,"233:3422/233:3426/233:3427/233:3428","|","|")}
      </span>
    </span>
  </span>
</Root>);
case "233:3429": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3429"} data-name={"Tema=on, State=press cursor, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3429/233:3430"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3429/233:3430/233:3431"} data-name={"Title"}>
      {textSlot(text,"233:3429/233:3430/233:3431","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3429/233:3430/233:3432"} data-name={"1000/0"}>
      {textSlot(text,"233:3429/233:3430/233:3432","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n129} data-layer={"233:3429/233:3433"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3429/233:3433/233:3434"} data-name={"icon left & Text"}>
      <span className={s.n130} data-layer={"233:3429/233:3433/233:3434/233:3435"} data-name={"|"}>
        {textSlot(text,"233:3429/233:3433/233:3434/233:3435","|","|")}
      </span>
    </span>
  </span>
</Root>);
case "233:3436": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3436"} data-name={"Tema=on, State=typing, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3436/233:3437"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3436/233:3437/233:3438"} data-name={"Title"}>
      {textSlot(text,"233:3436/233:3437/233:3438","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3436/233:3437/233:3439"} data-name={"1000/0"}>
      {textSlot(text,"233:3436/233:3437/233:3439","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n127} data-layer={"233:3436/233:3440"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3436/233:3440/233:3441"} data-name={"icon left & Text"}>
      <span className={s.n12} data-layer={"233:3436/233:3440/233:3441/233:3442"} data-name={"Text|"}>
        {textSlot(text,"233:3436/233:3440/233:3441/233:3442","Text|",<><span className={s.n4}>{"Text"}</span><span className={s.n4}>{"|"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "233:3443": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3443"} data-name={"Tema=on, State=typing, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3443/233:3444"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3443/233:3444/233:3445"} data-name={"Title"}>
      {textSlot(text,"233:3443/233:3444/233:3445","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3443/233:3444/233:3446"} data-name={"1000/0"}>
      {textSlot(text,"233:3443/233:3444/233:3446","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n129} data-layer={"233:3443/233:3447"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3443/233:3447/233:3448"} data-name={"icon left & Text"}>
      <span className={s.n131} data-layer={"233:3443/233:3447/233:3448/233:3449"} data-name={"Text|"}>
        {textSlot(text,"233:3443/233:3447/233:3448/233:3449","Text|",<><span className={s.n73}>{"Text"}</span><span className={s.n73}>{"|"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "233:3450": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3450"} data-name={"Tema=on, State=typing scroll, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3450/233:3451"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3450/233:3451/233:3452"} data-name={"Title"}>
      {textSlot(text,"233:3450/233:3451/233:3452","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3450/233:3451/233:3453"} data-name={"1000/0"}>
      {textSlot(text,"233:3450/233:3451/233:3453","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n127} data-layer={"233:3450/233:3454"} data-name={"Box"}>
    <span className={s.n132} data-layer={"233:3450/233:3454/233:3455"} data-name={"Text"}>
      <span className={s.n133} data-layer={"233:3450/233:3454/233:3455/233:3456"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|"}>
        {textSlot(text,"233:3450/233:3454/233:3455/233:3456","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|")}
      </span>
      <span className={s.n120} data-layer={"233:3450/233:3454/233:3455/233:3457"} data-name={"Scroll"}>
        <span className={s.n134} data-layer={"233:3450/233:3454/233:3455/233:3457/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3458": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3458"} data-name={"Tema=on, State=typing scroll, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3458/233:3459"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3458/233:3459/233:3460"} data-name={"Title"}>
      {textSlot(text,"233:3458/233:3459/233:3460","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3458/233:3459/233:3461"} data-name={"1000/0"}>
      {textSlot(text,"233:3458/233:3459/233:3461","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n136} data-layer={"233:3458/233:3462"} data-name={"Box"}>
    <span className={s.n137} data-layer={"233:3458/233:3462/233:3463"} data-name={"Text"}>
      <span className={s.n138} data-layer={"233:3458/233:3462/233:3463/233:3464"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|"}>
        {textSlot(text,"233:3458/233:3462/233:3463/233:3464","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|")}
      </span>
      <span className={s.n139} data-layer={"233:3458/233:3462/233:3463/233:3465"} data-name={"Scroll"}>
        <span className={s.n140} data-layer={"233:3458/233:3462/233:3463/233:3465/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3466": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3466"} data-name={"Tema=off, State=default, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3466/233:3467"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3466/233:3467/233:3468"} data-name={"Title"}>
      {textSlot(text,"233:3466/233:3467/233:3468","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3466/233:3467/233:3469"} data-name={"1000/0"}>
      {textSlot(text,"233:3466/233:3467/233:3469","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n141} data-layer={"233:3466/233:3470"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3466/233:3470/233:3471"} data-name={"icon left & Text"}>
      <span className={s.n142} data-layer={"233:3466/233:3470/233:3471/233:3472"} data-name={"Placeholder"}>
        {textSlot(text,"233:3466/233:3470/233:3471/233:3472","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3473": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3473"} data-name={"Tema=off, State=disabled, size=M, Sceleton=off"}>
  <span className={s.n51} data-layer={"233:3473/233:3474"} data-name={"Title"}>
    {textSlot(text,"233:3473/233:3474","Title","Title")}
  </span>
  <span className={s.n143} data-layer={"233:3473/233:3475"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3473/233:3475/233:3476"} data-name={"icon left & Text"}>
      <span className={s.n16} data-layer={"233:3473/233:3475/233:3476/233:3477"} data-name={"Placeholder"}>
        {textSlot(text,"233:3473/233:3475/233:3476/233:3477","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3478": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3478"} data-name={"Tema=off, State=disabled, size=L, Sceleton=off"}>
  <span className={s.n53} data-layer={"233:3478/233:3479"} data-name={"Title"}>
    {textSlot(text,"233:3478/233:3479","Title","Title")}
  </span>
  <span className={s.n144} data-layer={"233:3478/233:3480"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3478/233:3480/233:3481"} data-name={"icon left & Text"}>
      <span className={s.n142} data-layer={"233:3478/233:3480/233:3481/233:3482"} data-name={"Placeholder"}>
        {textSlot(text,"233:3478/233:3480/233:3481/233:3482","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3483": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3483"} data-name={"Tema=off, State=hard validation, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3483/233:3484"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3483/233:3484/233:3485"} data-name={"Title"}>
      {textSlot(text,"233:3483/233:3484/233:3485","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3483/233:3484/233:3486"} data-name={"1000/0"}>
      {textSlot(text,"233:3483/233:3484/233:3486","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n19} data-layer={"233:3483/233:3487"} data-name={"Box & Helper text"}>
    <span className={s.n145} data-layer={"233:3483/233:3487/233:3488"} data-name={"Box"}>
      <span className={s.n11} data-layer={"233:3483/233:3487/233:3488/233:3489"} data-name={"icon left & Text"}>
        <span className={s.n16} data-layer={"233:3483/233:3487/233:3488/233:3489/233:3490"} data-name={"Placeholder"}>
          {textSlot(text,"233:3483/233:3487/233:3488/233:3489/233:3490","Placeholder","Placeholder")}
        </span>
      </span>
    </span>
    <span className={s.n22} data-layer={"233:3483/233:3487/233:3491"} data-name={"text"}>
      {textSlot(text,"233:3483/233:3487/233:3491","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3492": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3492"} data-name={"Tema=off, State=hard validation, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3492/233:3493"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3492/233:3493/233:3494"} data-name={"Title"}>
      {textSlot(text,"233:3492/233:3493/233:3494","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3492/233:3493/233:3495"} data-name={"1000/0"}>
      {textSlot(text,"233:3492/233:3493/233:3495","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n57} data-layer={"233:3492/233:3496"} data-name={"Box & Helper text"}>
    <span className={s.n146} data-layer={"233:3492/233:3496/233:3497"} data-name={"Box"}>
      <span className={s.n47} data-layer={"233:3492/233:3496/233:3497/233:3498"} data-name={"icon left & Text"}>
        <span className={s.n142} data-layer={"233:3492/233:3496/233:3497/233:3498/233:3499"} data-name={"Placeholder"}>
          {textSlot(text,"233:3492/233:3496/233:3497/233:3498/233:3499","Placeholder","Placeholder")}
        </span>
      </span>
    </span>
    <span className={s.n59} data-layer={"233:3492/233:3496/233:3500"} data-name={"text"}>
      {textSlot(text,"233:3492/233:3496/233:3500","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3501": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3501"} data-name={"Tema=off, State=soft validation, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3501/233:3502"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3501/233:3502/233:3503"} data-name={"Title"}>
      {textSlot(text,"233:3501/233:3502/233:3503","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3501/233:3502/233:3504"} data-name={"1000/0"}>
      {textSlot(text,"233:3501/233:3502/233:3504","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n61} data-layer={"233:3501/233:3505"} data-name={"Box & Helper text"}>
    <span className={s.n147} data-layer={"233:3501/233:3505/233:3506"} data-name={"Box"}>
      <span className={s.n63} data-layer={"233:3501/233:3505/233:3506/233:3507"} data-name={"Text"}>
        <span className={s.n64} data-layer={"233:3501/233:3505/233:3506/233:3507/233:3508"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|"}>
          {textSlot(text,"233:3501/233:3505/233:3506/233:3507/233:3508","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|",<><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text "}</span><span className={s.n4}>{"Text"}</span><span className={s.n4}>{" Text|"}</span></>)}
        </span>
        <span className={s.n65} data-layer={"233:3501/233:3505/233:3506/233:3507/233:3509"} data-name={"Scroll"}>
          <span className={s.n66} data-layer={"233:3501/233:3505/233:3506/233:3507/233:3509/227:1180"} data-name={"Scroll"}></span>
        </span>
      </span>
    </span>
    <span className={s.n67} data-layer={"233:3501/233:3505/233:3510"} data-name={"text"}>
      {textSlot(text,"233:3501/233:3505/233:3510","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3511": return (<Root {...rootAttributes} className={[s.n68,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3511"} data-name={"Tema=off, State=soft validation, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3511/233:3512"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3511/233:3512/233:3513"} data-name={"Title"}>
      {textSlot(text,"233:3511/233:3512/233:3513","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3511/233:3512/233:3514"} data-name={"1000/0"}>
      {textSlot(text,"233:3511/233:3512/233:3514","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n69} data-layer={"233:3511/233:3515"} data-name={"Box & Helper text"}>
    <span className={s.n148} data-layer={"233:3511/233:3515/233:3516"} data-name={"Box"}>
      <span className={s.n71} data-layer={"233:3511/233:3515/233:3516/233:3517"} data-name={"Text"}>
        <span className={s.n72} data-layer={"233:3511/233:3515/233:3516/233:3517/233:3518"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|"}>
          {textSlot(text,"233:3511/233:3515/233:3516/233:3517/233:3518","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text|",<><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text "}</span><span className={s.n73}>{"Text"}</span><span className={s.n73}>{" Text|"}</span></>)}
        </span>
        <span className={s.n74} data-layer={"233:3511/233:3515/233:3516/233:3517/233:3519"} data-name={"Scroll"}>
          <span className={s.n66} data-layer={"233:3511/233:3515/233:3516/233:3517/233:3519/227:1180"} data-name={"Scroll"}></span>
        </span>
      </span>
    </span>
    <span className={s.n75} data-layer={"233:3511/233:3515/233:3520"} data-name={"text"}>
      {textSlot(text,"233:3511/233:3515/233:3520","text","Error text")}
    </span>
  </span>
</Root>);
case "233:3521": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3521"} data-name={"Tema=off, State=default fill, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3521/233:3522"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3521/233:3522/233:3523"} data-name={"Title"}>
      {textSlot(text,"233:3521/233:3522/233:3523","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3521/233:3522/233:3524"} data-name={"1000/0"}>
      {textSlot(text,"233:3521/233:3522/233:3524","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n141} data-layer={"233:3521/233:3525"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3521/233:3525/233:3526"} data-name={"icon left & Text"}>
      <span className={s.n76} data-layer={"233:3521/233:3525/233:3526/233:3527"} data-name={"Text"}>
        {textSlot(text,"233:3521/233:3525/233:3526/233:3527","Text","Text")}
      </span>
    </span>
  </span>
</Root>);
case "233:3528": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3528"} data-name={"Tema=off, State=default fill scroll, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3528/233:3529"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3528/233:3529/233:3530"} data-name={"Title"}>
      {textSlot(text,"233:3528/233:3529/233:3530","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3528/233:3529/233:3531"} data-name={"1000/0"}>
      {textSlot(text,"233:3528/233:3529/233:3531","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n13} data-layer={"233:3528/233:3532"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3528/233:3532/233:3533"} data-name={"Text"}>
      <span className={s.n119} data-layer={"233:3528/233:3532/233:3533/233:3534"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
        {textSlot(text,"233:3528/233:3532/233:3533/233:3534","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text")}
      </span>
      <span className={s.n120} data-layer={"233:3528/233:3532/233:3533/233:3535"} data-name={"Scroll"}>
        <span className={s.n121} data-layer={"233:3528/233:3532/233:3533/233:3535/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3536": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3536"} data-name={"Tema=off, State=default fill scroll, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3536/233:3537"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3536/233:3537/233:3538"} data-name={"Title"}>
      {textSlot(text,"233:3536/233:3537/233:3538","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3536/233:3537/233:3539"} data-name={"1000/0"}>
      {textSlot(text,"233:3536/233:3537/233:3539","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n141} data-layer={"233:3536/233:3540"} data-name={"Box"}>
    <span className={s.n122} data-layer={"233:3536/233:3540/233:3541"} data-name={"Text"}>
      <span className={s.n123} data-layer={"233:3536/233:3540/233:3541/233:3542"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}>
        {textSlot(text,"233:3536/233:3540/233:3541/233:3542","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text")}
      </span>
      <span className={s.n124} data-layer={"233:3536/233:3540/233:3541/233:3543"} data-name={"Scroll"}>
        <span className={s.n121} data-layer={"233:3536/233:3540/233:3541/233:3543/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3544": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3544"} data-name={"Tema=off, State=hover, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3544/233:3545"} data-name={"Title"}>
    <span className={s.n15} data-layer={"233:3544/233:3545/233:3546"} data-name={"Title"}>
      {textSlot(text,"233:3544/233:3545/233:3546","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3544/233:3545/233:3547"} data-name={"1000/0"}>
      {textSlot(text,"233:3544/233:3545/233:3547","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n149} data-layer={"233:3544/233:3548"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3544/233:3548/233:3549"} data-name={"icon left & Text"}>
      <span className={s.n16} data-layer={"233:3544/233:3548/233:3549/233:3550"} data-name={"Placeholder"}>
        {textSlot(text,"233:3544/233:3548/233:3549/233:3550","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3551": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3551"} data-name={"Tema=off, State=hover, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3551/233:3552"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3551/233:3552/233:3553"} data-name={"Title"}>
      {textSlot(text,"233:3551/233:3552/233:3553","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3551/233:3552/233:3554"} data-name={"1000/0"}>
      {textSlot(text,"233:3551/233:3552/233:3554","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n150} data-layer={"233:3551/233:3555"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3551/233:3555/233:3556"} data-name={"icon left & Text"}>
      <span className={s.n142} data-layer={"233:3551/233:3555/233:3556/233:3557"} data-name={"Placeholder"}>
        {textSlot(text,"233:3551/233:3555/233:3556/233:3557","Placeholder","Placeholder")}
      </span>
    </span>
  </span>
</Root>);
case "233:3558": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3558"} data-name={"Tema=off, State=press cursor, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3558/233:3559"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3558/233:3559/233:3560"} data-name={"Title"}>
      {textSlot(text,"233:3558/233:3559/233:3560","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3558/233:3559/233:3561"} data-name={"1000/0"}>
      {textSlot(text,"233:3558/233:3559/233:3561","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n10} data-layer={"233:3558/233:3562"} data-name={"Box"}>
    <span className={s.n11} data-layer={"233:3558/233:3562/233:3563"} data-name={"icon left & Text"}>
      <span className={s.n128} data-layer={"233:3558/233:3562/233:3563/233:3564"} data-name={"|"}>
        {textSlot(text,"233:3558/233:3562/233:3563/233:3564","|","|")}
      </span>
    </span>
  </span>
</Root>);
case "233:3565": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3565"} data-name={"Tema=off, State=press cursor, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3565/233:3566"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3565/233:3566/233:3567"} data-name={"Title"}>
      {textSlot(text,"233:3565/233:3566/233:3567","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3565/233:3566/233:3568"} data-name={"1000/0"}>
      {textSlot(text,"233:3565/233:3566/233:3568","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n151} data-layer={"233:3565/233:3569"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3565/233:3569/233:3570"} data-name={"icon left & Text"}>
      <span className={s.n130} data-layer={"233:3565/233:3569/233:3570/233:3571"} data-name={"|"}>
        {textSlot(text,"233:3565/233:3569/233:3570/233:3571","|","|")}
      </span>
    </span>
  </span>
</Root>);
case "233:3572": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3572"} data-name={"Tema=off, State=typing, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3572/233:3573"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3572/233:3573/233:3574"} data-name={"Title"}>
      {textSlot(text,"233:3572/233:3573/233:3574","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3572/233:3573/233:3575"} data-name={"1000/0"}>
      {textSlot(text,"233:3572/233:3573/233:3575","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n151} data-layer={"233:3572/233:3576"} data-name={"Box"}>
    <span className={s.n47} data-layer={"233:3572/233:3576/233:3577"} data-name={"icon left & Text"}>
      <span className={s.n131} data-layer={"233:3572/233:3576/233:3577/233:3578"} data-name={"Text|"}>
        {textSlot(text,"233:3572/233:3576/233:3577/233:3578","Text|",<><span className={s.n73}>{"Text"}</span><span className={s.n73}>{"|"}</span></>)}
      </span>
    </span>
  </span>
</Root>);
case "233:3579": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3579"} data-name={"Tema=off, State=typing scroll, size=M, Sceleton=off"}>
  <span className={s.n8} data-layer={"233:3579/233:3580"} data-name={"Title"}>
    <span className={s.n1} data-layer={"233:3579/233:3580/233:3581"} data-name={"Title"}>
      {textSlot(text,"233:3579/233:3580/233:3581","Title","Title")}
    </span>
    <span className={s.n9} data-layer={"233:3579/233:3580/233:3582"} data-name={"1000/0"}>
      {textSlot(text,"233:3579/233:3580/233:3582","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n10} data-layer={"233:3579/233:3583"} data-name={"Box"}>
    <span className={s.n132} data-layer={"233:3579/233:3583/233:3584"} data-name={"Text"}>
      <span className={s.n133} data-layer={"233:3579/233:3583/233:3584/233:3585"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|"}>
        {textSlot(text,"233:3579/233:3583/233:3584/233:3585","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|")}
      </span>
      <span className={s.n120} data-layer={"233:3579/233:3583/233:3584/233:3586"} data-name={"Scroll"}>
        <span className={s.n134} data-layer={"233:3579/233:3583/233:3584/233:3586/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
case "233:3587": return (<Root {...rootAttributes} className={[s.n135,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"233:3587"} data-name={"Tema=off, State=typing scroll, size=L, Sceleton=off"}>
  <span className={s.n43} data-layer={"233:3587/233:3588"} data-name={"Title"}>
    <span className={s.n56} data-layer={"233:3587/233:3588/233:3589"} data-name={"Title"}>
      {textSlot(text,"233:3587/233:3588/233:3589","Title","Title")}
    </span>
    <span className={s.n45} data-layer={"233:3587/233:3588/233:3590"} data-name={"1000/0"}>
      {textSlot(text,"233:3587/233:3588/233:3590","1000/0","1000/0")}
    </span>
  </span>
  <span className={s.n152} data-layer={"233:3587/233:3591"} data-name={"Box"}>
    <span className={s.n137} data-layer={"233:3587/233:3591/233:3592"} data-name={"Text"}>
      <span className={s.n138} data-layer={"233:3587/233:3591/233:3592/233:3593"} data-name={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|"}>
        {textSlot(text,"233:3587/233:3591/233:3592/233:3593","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|","Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Te|")}
      </span>
      <span className={s.n139} data-layer={"233:3587/233:3591/233:3592/233:3594"} data-name={"Scroll"}>
        <span className={s.n140} data-layer={"233:3587/233:3591/233:3592/233:3594/227:1178"} data-name={"Scroll"}></span>
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
