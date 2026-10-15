// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './TimeSelectDesign.module.css';
export const variants = [
  {
    "id": "227:1735",
    "name": "State=default, Style=white",
    "props": {
      "State": "default",
      "Style": "white"
    }
  },
  {
    "id": "227:1745",
    "name": "State=default, Style=gray",
    "props": {
      "State": "default",
      "Style": "gray"
    }
  },
  {
    "id": "229:50398",
    "name": "State=alert, Style=white",
    "props": {
      "State": "alert",
      "Style": "white"
    }
  },
  {
    "id": "229:50408",
    "name": "State=disabled, Style=white",
    "props": {
      "State": "disabled",
      "Style": "white"
    }
  },
  {
    "id": "229:50418",
    "name": "State=hover, Style=white",
    "props": {
      "State": "hover",
      "Style": "white"
    }
  },
  {
    "id": "229:50428",
    "name": "State=press 0:0, Style=white",
    "props": {
      "State": "press 0:0",
      "Style": "white"
    }
  },
  {
    "id": "229:50438",
    "name": "State=press 1:0, Style=white",
    "props": {
      "State": "press 1:0",
      "Style": "white"
    }
  },
  {
    "id": "229:50448",
    "name": "State=press 1:1, Style=white",
    "props": {
      "State": "press 1:1",
      "Style": "white"
    }
  },
  {
    "id": "229:50458",
    "name": "State=fill, Style=white",
    "props": {
      "State": "fill",
      "Style": "white"
    }
  },
  {
    "id": "229:50468",
    "name": "State=disabled fill, Style=white",
    "props": {
      "State": "disabled fill",
      "Style": "white"
    }
  },
  {
    "id": "229:50478",
    "name": "State=alert, Style=gray",
    "props": {
      "State": "alert",
      "Style": "gray"
    }
  },
  {
    "id": "229:50488",
    "name": "State=disabled, Style=gray",
    "props": {
      "State": "disabled",
      "Style": "gray"
    }
  },
  {
    "id": "229:50498",
    "name": "State=hover, Style=gray",
    "props": {
      "State": "hover",
      "Style": "gray"
    }
  },
  {
    "id": "229:50508",
    "name": "State=press 0:0, Style=gray",
    "props": {
      "State": "press 0:0",
      "Style": "gray"
    }
  },
  {
    "id": "229:50518",
    "name": "State=press 1:0, Style=gray",
    "props": {
      "State": "press 1:0",
      "Style": "gray"
    }
  },
  {
    "id": "229:50528",
    "name": "State=press 1:1, Style=gray",
    "props": {
      "State": "press 1:1",
      "Style": "gray"
    }
  },
  {
    "id": "229:50538",
    "name": "State=fill, Style=gray",
    "props": {
      "State": "fill",
      "Style": "gray"
    }
  },
  {
    "id": "229:50548",
    "name": "State=disabled fill, Style=gray",
    "props": {
      "State": "disabled fill",
      "Style": "gray"
    }
  }
] as const;
export type TimeSelectDesignVariant = typeof variants[number]["id"];
export interface TimeSelectDesignDimensions {
  "State"?: "alert" | "default" | "disabled" | "disabled fill" | "fill" | "hover" | "press 0:0" | "press 1:0" | "press 1:1";
  "Style"?: "gray" | "white";
}
export interface TimeSelectDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: TimeSelectDesignVariant;
  variantProps?: TimeSelectDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: TimeSelectDesignVariant) => void;
}
const transitions = {};
export function TimeSelectDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: TimeSelectDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1735": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1735"} data-name={"State=default, Style=white"}>
  <span className={s.n1} data-layer={"227:1735/227:1736"} data-name={"time"}>
    <span className={s.n2} data-layer={"227:1735/227:1736/227:1737"} data-name={"Text"}>
      <span className={s.n3} data-layer={"227:1735/227:1736/227:1737/227:1738"} data-name={"00"}>
        {textSlot(text,"227:1735/227:1736/227:1737/227:1738","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:1735/227:1736/227:1739"} data-name={"Text"}>
      <span className={s.n5} data-layer={"227:1735/227:1736/227:1739/227:1740"} data-name={":"}>
        {textSlot(text,"227:1735/227:1736/227:1739/227:1740",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"227:1735/227:1736/227:1741"} data-name={"Text"}>
      <span className={s.n3} data-layer={"227:1735/227:1736/227:1741/227:1742"} data-name={"00"}>
        {textSlot(text,"227:1735/227:1736/227:1741/227:1742","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"227:1735/227:1743"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"227:1735/227:1743/227:1744"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"227:1735/227:1743/227:1744/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"227:1735/227:1743/227:1744/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:1745": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1745"} data-name={"State=default, Style=gray"}>
  <span className={s.n1} data-layer={"227:1745/227:1746"} data-name={"time"}>
    <span className={s.n2} data-layer={"227:1745/227:1746/227:1747"} data-name={"Text"}>
      <span className={s.n12} data-layer={"227:1745/227:1746/227:1747/227:1748"} data-name={"00"}>
        {textSlot(text,"227:1745/227:1746/227:1747/227:1748","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"227:1745/227:1746/227:1749"} data-name={"Text"}>
      <span className={s.n13} data-layer={"227:1745/227:1746/227:1749/227:1750"} data-name={":"}>
        {textSlot(text,"227:1745/227:1746/227:1749/227:1750",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"227:1745/227:1746/227:1751"} data-name={"Text"}>
      <span className={s.n12} data-layer={"227:1745/227:1746/227:1751/227:1752"} data-name={"00"}>
        {textSlot(text,"227:1745/227:1746/227:1751/227:1752","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"227:1745/227:1753"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"227:1745/227:1753/227:1754"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"227:1745/227:1753/227:1754/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"227:1745/227:1753/227:1754/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50398": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50398"} data-name={"State=alert, Style=white"}>
  <span className={s.n1} data-layer={"229:50398/229:50399"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50398/229:50399/229:50400"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50398/229:50399/229:50400/229:50401"} data-name={"00"}>
        {textSlot(text,"229:50398/229:50399/229:50400/229:50401","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50398/229:50399/229:50402"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50398/229:50399/229:50402/229:50403"} data-name={":"}>
        {textSlot(text,"229:50398/229:50399/229:50402/229:50403",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50398/229:50399/229:50404"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50398/229:50399/229:50404/229:50405"} data-name={"00"}>
        {textSlot(text,"229:50398/229:50399/229:50404/229:50405","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50398/229:50406"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50398/229:50406/229:50407"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50398/229:50406/229:50407/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50398/229:50406/229:50407/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50408": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50408"} data-name={"State=disabled, Style=white"}>
  <span className={s.n1} data-layer={"229:50408/229:50409"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50408/229:50409/229:50410"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50408/229:50409/229:50410/229:50411"} data-name={"00"}>
        {textSlot(text,"229:50408/229:50409/229:50410/229:50411","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50408/229:50409/229:50412"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50408/229:50409/229:50412/229:50413"} data-name={":"}>
        {textSlot(text,"229:50408/229:50409/229:50412/229:50413",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50408/229:50409/229:50414"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50408/229:50409/229:50414/229:50415"} data-name={"00"}>
        {textSlot(text,"229:50408/229:50409/229:50414/229:50415","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50408/229:50416"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50408/229:50416/229:50417"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50408/229:50416/229:50417/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50408/229:50416/229:50417/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50418": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50418"} data-name={"State=hover, Style=white"}>
  <span className={s.n1} data-layer={"229:50418/229:50419"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50418/229:50419/229:50420"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50418/229:50419/229:50420/229:50421"} data-name={"00"}>
        {textSlot(text,"229:50418/229:50419/229:50420/229:50421","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50418/229:50419/229:50422"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50418/229:50419/229:50422/229:50423"} data-name={":"}>
        {textSlot(text,"229:50418/229:50419/229:50422/229:50423",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50418/229:50419/229:50424"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50418/229:50419/229:50424/229:50425"} data-name={"00"}>
        {textSlot(text,"229:50418/229:50419/229:50424/229:50425","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50418/229:50426"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50418/229:50426/229:50427"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50418/229:50426/229:50427/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50418/229:50426/229:50427/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50428": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50428"} data-name={"State=press 0:0, Style=white"}>
  <span className={s.n1} data-layer={"229:50428/229:50429"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50428/229:50429/229:50430"} data-name={"Text"}>
      <span className={s.n18} data-layer={"229:50428/229:50429/229:50430/229:50431"} data-name={" |"}>
        {textSlot(text,"229:50428/229:50429/229:50430/229:50431"," |"," |")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50428/229:50429/229:50432"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50428/229:50429/229:50432/229:50433"} data-name={":"}>
        {textSlot(text,"229:50428/229:50429/229:50432/229:50433",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50428/229:50429/229:50434"} data-name={"Text"}>
      <span className={s.n3} data-layer={"229:50428/229:50429/229:50434/229:50435"} data-name={"00"}>
        {textSlot(text,"229:50428/229:50429/229:50434/229:50435","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50428/229:50436"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50428/229:50436/229:50437"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50428/229:50436/229:50437/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50428/229:50436/229:50437/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50438": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50438"} data-name={"State=press 1:0, Style=white"}>
  <span className={s.n1} data-layer={"229:50438/229:50439"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50438/229:50439/229:50440"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50438/229:50439/229:50440/229:50441"} data-name={" |"}>
        {textSlot(text,"229:50438/229:50439/229:50440/229:50441"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50438/229:50439/229:50442"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50438/229:50439/229:50442/229:50443"} data-name={":"}>
        {textSlot(text,"229:50438/229:50439/229:50442/229:50443",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50438/229:50439/229:50444"} data-name={"Text"}>
      <span className={s.n18} data-layer={"229:50438/229:50439/229:50444/229:50445"} data-name={" |"}>
        {textSlot(text,"229:50438/229:50439/229:50444/229:50445"," |"," |")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50438/229:50446"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50438/229:50446/229:50447"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50438/229:50446/229:50447/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50438/229:50446/229:50447/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50448": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50448"} data-name={"State=press 1:1, Style=white"}>
  <span className={s.n1} data-layer={"229:50448/229:50449"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50448/229:50449/229:50450"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50448/229:50449/229:50450/229:50451"} data-name={" |"}>
        {textSlot(text,"229:50448/229:50449/229:50450/229:50451"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50448/229:50449/229:50452"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50448/229:50449/229:50452/229:50453"} data-name={":"}>
        {textSlot(text,"229:50448/229:50449/229:50452/229:50453",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50448/229:50449/229:50454"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50448/229:50449/229:50454/229:50455"} data-name={" |"}>
        {textSlot(text,"229:50448/229:50449/229:50454/229:50455"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50448/229:50456"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50448/229:50456/229:50457"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50448/229:50456/229:50457/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50448/229:50456/229:50457/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50458": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50458"} data-name={"State=fill, Style=white"}>
  <span className={s.n1} data-layer={"229:50458/229:50459"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50458/229:50459/229:50460"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50458/229:50459/229:50460/229:50461"} data-name={" |"}>
        {textSlot(text,"229:50458/229:50459/229:50460/229:50461"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50458/229:50459/229:50462"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50458/229:50459/229:50462/229:50463"} data-name={":"}>
        {textSlot(text,"229:50458/229:50459/229:50462/229:50463",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50458/229:50459/229:50464"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50458/229:50459/229:50464/229:50465"} data-name={" |"}>
        {textSlot(text,"229:50458/229:50459/229:50464/229:50465"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50458/229:50466"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50458/229:50466/229:50467"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50458/229:50466/229:50467/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50458/229:50466/229:50467/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50468": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50468"} data-name={"State=disabled fill, Style=white"}>
  <span className={s.n1} data-layer={"229:50468/229:50469"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50468/229:50469/229:50470"} data-name={"Text"}>
      <span className={s.n21} data-layer={"229:50468/229:50469/229:50470/229:50471"} data-name={" |"}>
        {textSlot(text,"229:50468/229:50469/229:50470/229:50471"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50468/229:50469/229:50472"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50468/229:50469/229:50472/229:50473"} data-name={":"}>
        {textSlot(text,"229:50468/229:50469/229:50472/229:50473",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50468/229:50469/229:50474"} data-name={"Text"}>
      <span className={s.n21} data-layer={"229:50468/229:50469/229:50474/229:50475"} data-name={" |"}>
        {textSlot(text,"229:50468/229:50469/229:50474/229:50475"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50468/229:50476"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50468/229:50476/229:50477"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50468/229:50476/229:50477/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50468/229:50476/229:50477/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50478": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50478"} data-name={"State=alert, Style=gray"}>
  <span className={s.n1} data-layer={"229:50478/229:50479"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50478/229:50479/229:50480"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50478/229:50479/229:50480/229:50481"} data-name={"00"}>
        {textSlot(text,"229:50478/229:50479/229:50480/229:50481","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50478/229:50479/229:50482"} data-name={"Text"}>
      <span className={s.n13} data-layer={"229:50478/229:50479/229:50482/229:50483"} data-name={":"}>
        {textSlot(text,"229:50478/229:50479/229:50482/229:50483",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50478/229:50479/229:50484"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50478/229:50479/229:50484/229:50485"} data-name={"00"}>
        {textSlot(text,"229:50478/229:50479/229:50484/229:50485","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50478/229:50486"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50478/229:50486/229:50487"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50478/229:50486/229:50487/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50478/229:50486/229:50487/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50488": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50488"} data-name={"State=disabled, Style=gray"}>
  <span className={s.n1} data-layer={"229:50488/229:50489"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50488/229:50489/229:50490"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50488/229:50489/229:50490/229:50491"} data-name={"00"}>
        {textSlot(text,"229:50488/229:50489/229:50490/229:50491","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50488/229:50489/229:50492"} data-name={"Text"}>
      <span className={s.n13} data-layer={"229:50488/229:50489/229:50492/229:50493"} data-name={":"}>
        {textSlot(text,"229:50488/229:50489/229:50492/229:50493",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50488/229:50489/229:50494"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50488/229:50489/229:50494/229:50495"} data-name={"00"}>
        {textSlot(text,"229:50488/229:50489/229:50494/229:50495","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50488/229:50496"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50488/229:50496/229:50497"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50488/229:50496/229:50497/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50488/229:50496/229:50497/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50498": return (<Root {...rootAttributes} className={[s.n24,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50498"} data-name={"State=hover, Style=gray"}>
  <span className={s.n1} data-layer={"229:50498/229:50499"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50498/229:50499/229:50500"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50498/229:50499/229:50500/229:50501"} data-name={"00"}>
        {textSlot(text,"229:50498/229:50499/229:50500/229:50501","00","00")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50498/229:50499/229:50502"} data-name={"Text"}>
      <span className={s.n13} data-layer={"229:50498/229:50499/229:50502/229:50503"} data-name={":"}>
        {textSlot(text,"229:50498/229:50499/229:50502/229:50503",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50498/229:50499/229:50504"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50498/229:50499/229:50504/229:50505"} data-name={"00"}>
        {textSlot(text,"229:50498/229:50499/229:50504/229:50505","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50498/229:50506"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50498/229:50506/229:50507"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50498/229:50506/229:50507/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50498/229:50506/229:50507/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50508": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50508"} data-name={"State=press 0:0, Style=gray"}>
  <span className={s.n1} data-layer={"229:50508/229:50509"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50508/229:50509/229:50510"} data-name={"Text"}>
      <span className={s.n18} data-layer={"229:50508/229:50509/229:50510/229:50511"} data-name={" |"}>
        {textSlot(text,"229:50508/229:50509/229:50510/229:50511"," |"," |")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50508/229:50509/229:50512"} data-name={"Text"}>
      <span className={s.n13} data-layer={"229:50508/229:50509/229:50512/229:50513"} data-name={":"}>
        {textSlot(text,"229:50508/229:50509/229:50512/229:50513",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50508/229:50509/229:50514"} data-name={"Text"}>
      <span className={s.n12} data-layer={"229:50508/229:50509/229:50514/229:50515"} data-name={"00"}>
        {textSlot(text,"229:50508/229:50509/229:50514/229:50515","00","00")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50508/229:50516"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50508/229:50516/229:50517"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50508/229:50516/229:50517/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50508/229:50516/229:50517/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50518": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50518"} data-name={"State=press 1:0, Style=gray"}>
  <span className={s.n1} data-layer={"229:50518/229:50519"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50518/229:50519/229:50520"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50518/229:50519/229:50520/229:50521"} data-name={" |"}>
        {textSlot(text,"229:50518/229:50519/229:50520/229:50521"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50518/229:50519/229:50522"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50518/229:50519/229:50522/229:50523"} data-name={":"}>
        {textSlot(text,"229:50518/229:50519/229:50522/229:50523",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50518/229:50519/229:50524"} data-name={"Text"}>
      <span className={s.n18} data-layer={"229:50518/229:50519/229:50524/229:50525"} data-name={" |"}>
        {textSlot(text,"229:50518/229:50519/229:50524/229:50525"," |"," |")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50518/229:50526"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50518/229:50526/229:50527"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50518/229:50526/229:50527/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50518/229:50526/229:50527/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50528": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50528"} data-name={"State=press 1:1, Style=gray"}>
  <span className={s.n1} data-layer={"229:50528/229:50529"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50528/229:50529/229:50530"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50528/229:50529/229:50530/229:50531"} data-name={" |"}>
        {textSlot(text,"229:50528/229:50529/229:50530/229:50531"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50528/229:50529/229:50532"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50528/229:50529/229:50532/229:50533"} data-name={":"}>
        {textSlot(text,"229:50528/229:50529/229:50532/229:50533",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50528/229:50529/229:50534"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50528/229:50529/229:50534/229:50535"} data-name={" |"}>
        {textSlot(text,"229:50528/229:50529/229:50534/229:50535"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50528/229:50536"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50528/229:50536/229:50537"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50528/229:50536/229:50537/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50528/229:50536/229:50537/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50538": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50538"} data-name={"State=fill, Style=gray"}>
  <span className={s.n1} data-layer={"229:50538/229:50539"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50538/229:50539/229:50540"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50538/229:50539/229:50540/229:50541"} data-name={" |"}>
        {textSlot(text,"229:50538/229:50539/229:50540/229:50541"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50538/229:50539/229:50542"} data-name={"Text"}>
      <span className={s.n20} data-layer={"229:50538/229:50539/229:50542/229:50543"} data-name={":"}>
        {textSlot(text,"229:50538/229:50539/229:50542/229:50543",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50538/229:50539/229:50544"} data-name={"Text"}>
      <span className={s.n19} data-layer={"229:50538/229:50539/229:50544/229:50545"} data-name={" |"}>
        {textSlot(text,"229:50538/229:50539/229:50544/229:50545"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50538/229:50546"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50538/229:50546/229:50547"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50538/229:50546/229:50547/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50538/229:50546/229:50547/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "229:50548": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50548"} data-name={"State=disabled fill, Style=gray"}>
  <span className={s.n1} data-layer={"229:50548/229:50549"} data-name={"time"}>
    <span className={s.n2} data-layer={"229:50548/229:50549/229:50550"} data-name={"Text"}>
      <span className={s.n21} data-layer={"229:50548/229:50549/229:50550/229:50551"} data-name={" |"}>
        {textSlot(text,"229:50548/229:50549/229:50550/229:50551"," |","10")}
      </span>
    </span>
    <span className={s.n4} data-layer={"229:50548/229:50549/229:50552"} data-name={"Text"}>
      <span className={s.n5} data-layer={"229:50548/229:50549/229:50552/229:50553"} data-name={":"}>
        {textSlot(text,"229:50548/229:50549/229:50552/229:50553",":",":")}
      </span>
    </span>
    <span className={s.n6} data-layer={"229:50548/229:50549/229:50554"} data-name={"Text"}>
      <span className={s.n21} data-layer={"229:50548/229:50549/229:50554/229:50555"} data-name={" |"}>
        {textSlot(text,"229:50548/229:50549/229:50554/229:50555"," |","10")}
      </span>
    </span>
  </span>
  <span className={s.n7} data-layer={"229:50548/229:50556"} data-name={"Icon"}>
    <span className={s.n8} data-layer={"229:50548/229:50556/229:50557"} data-name={"icon/set/base"}>
      <span className={s.n9} data-layer={"229:50548/229:50556/229:50557/227:178"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 C-0.95 0.52467 -0.52467 0.95 0 0.95 L0 0 L0 -0.95 Z M8 0.95 C8.52467 0.95 8.95 0.52467 8.95 0 C8.95 -0.52467 8.52467 -0.95 8 -0.95 L8 0 L8 0.95 Z M0 0 L0 0.95 L8 0.95 L8 0 L8 -0.95 L0 -0.95 L0 0 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n10} data-layer={"229:50548/229:50556/229:50557/227:179"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.95 8 C-0.95 8.52467 -0.52467 8.95 0 8.95 C0.52467 8.95 0.95 8.52467 0.95 8 L0 8 L-0.95 8 Z M0.95 0 C0.95 -0.52467 0.52467 -0.95 0 -0.95 C-0.52467 -0.95 -0.95 -0.52467 -0.95 0 L0 0 L0.95 0 Z M0 8 L0.95 8 L0.95 0 L0 0 L-0.95 0 L-0.95 8 L0 8 Z"} fill={"rgba(175,175,175,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
