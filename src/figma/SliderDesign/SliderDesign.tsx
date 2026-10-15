// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './SliderDesign.module.css';
export const variants = [
  {
    "id": "227:1970",
    "name": "Opacity=50%",
    "props": {
      "Opacity": "50%"
    }
  },
  {
    "id": "227:1972",
    "name": "Opacity=100%",
    "props": {
      "Opacity": "100%"
    }
  },
  {
    "id": "230:3194",
    "name": "Opacity=0%",
    "props": {
      "Opacity": "0%"
    }
  }
] as const;
export type SliderDesignVariant = typeof variants[number]["id"];
export interface SliderDesignDimensions {
  "Opacity"?: "0%" | "100%" | "50%";
}
export interface SliderDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: SliderDesignVariant;
  variantProps?: SliderDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: SliderDesignVariant) => void;
}
const transitions = {};
export function SliderDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: SliderDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1970": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1970"} data-name={"Opacity=50%"}>
  <span className={s.n1} data-layer={"227:1970/227:1971"} data-name={"Slider/core"}>
    <span className={s.n2} data-layer={"227:1970/227:1971/227:5690"} data-name={"The scale"}>
      <span className={s.n3} data-layer={"227:1970/227:1971/227:5690/227:5691"} data-name={"50"}>
        <span className={s.n4} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5692"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5692/227:5693"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n6} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5694"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5694/227:5695"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n7} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5696"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5696/227:5697"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n8} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5698"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5698/227:5699"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n9} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5700"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1970/227:1971/227:5690/227:5691/227:5700/227:5701"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:1970/227:1971/227:5690/227:5702"} data-name={"50"}>
        <span className={s.n11} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5703"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5703/227:5704"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n13} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5705"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5705/227:5706"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n14} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5707"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5707/227:5708"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n15} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5709"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5709/227:5710"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n16} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5711"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1970/227:1971/227:5690/227:5702/227:5711/227:5712"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
    </span>
    <span className={s.n17} data-layer={"227:1970/227:1971/227:5714"} data-name={"slider"}></span>
  </span>
</Root>);
case "227:1972": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1972"} data-name={"Opacity=100%"}>
  <span className={s.n1} data-layer={"227:1972/227:1973"} data-name={"Slider/core"}>
    <span className={s.n2} data-layer={"227:1972/227:1973/227:5690"} data-name={"The scale"}>
      <span className={s.n3} data-layer={"227:1972/227:1973/227:5690/227:5691"} data-name={"50"}>
        <span className={s.n4} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5692"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5692/227:5693"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n13} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5694"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5694/227:5695"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n14} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5696"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5696/227:5697"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n15} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5698"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5698/227:5699"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n18} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5700"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5691/227:5700/227:5701"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
      <span className={s.n10} data-layer={"227:1972/227:1973/227:5690/227:5702"} data-name={"50"}>
        <span className={s.n11} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5703"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5703/227:5704"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n13} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5705"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5705/227:5706"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n14} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5707"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5707/227:5708"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n15} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5709"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5709/227:5710"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n16} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5711"} data-name={"Segment"}>
          <span className={s.n12} data-layer={"227:1972/227:1973/227:5690/227:5702/227:5711/227:5712"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
    </span>
    <span className={s.n19} data-layer={"227:1972/227:1973/227:5713"} data-name={"slider"}></span>
  </span>
</Root>);
case "230:3194": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"230:3194"} data-name={"Opacity=0%"}>
  <span className={s.n1} data-layer={"230:3194/230:3195"} data-name={"Slider/core"}>
    <span className={s.n2} data-layer={"230:3194/230:3195/227:5690"} data-name={"The scale"}>
      <span className={s.n3} data-layer={"230:3194/230:3195/227:5690/227:5691"} data-name={"50"}>
        <span className={s.n4} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5692"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5692/227:5693"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n6} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5694"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5694/227:5695"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n7} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5696"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5696/227:5697"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n8} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5698"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5698/227:5699"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n9} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5700"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5691/227:5700/227:5701"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
      <span className={s.n10} data-layer={"230:3194/230:3195/227:5690/227:5702"} data-name={"50"}>
        <span className={s.n4} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5703"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5703/227:5704"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n6} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5705"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5705/227:5706"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n7} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5707"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5707/227:5708"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n8} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5709"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5709/227:5710"} data-name={"Rectangle 3464280"}></span>
        </span>
        <span className={s.n16} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5711"} data-name={"Segment"}>
          <span className={s.n5} data-layer={"230:3194/230:3195/227:5690/227:5702/227:5711/227:5712"} data-name={"Rectangle 3464280"}></span>
        </span>
      </span>
    </span>
    <span className={s.n20} data-layer={"230:3194/230:3195/227:5715"} data-name={"slider"}></span>
  </span>
</Root>);
  default: return null;
  }
}
