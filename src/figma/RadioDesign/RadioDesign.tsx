// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './RadioDesign.module.css';
export const variants = [
  {
    "id": "227:1359",
    "name": "Active=unselected, State=hover, Size=L",
    "props": {
      "Active": "unselected",
      "State": "hover",
      "Size": "L"
    }
  },
  {
    "id": "227:1361",
    "name": "Active=unselected, State=default, Size=L",
    "props": {
      "Active": "unselected",
      "State": "default",
      "Size": "L"
    }
  },
  {
    "id": "227:1363",
    "name": "Active=selected, State=default, Size=L",
    "props": {
      "Active": "selected",
      "State": "default",
      "Size": "L"
    }
  },
  {
    "id": "227:1365",
    "name": "Active=selected, State=hover, Size=L",
    "props": {
      "Active": "selected",
      "State": "hover",
      "Size": "L"
    }
  },
  {
    "id": "228:3198",
    "name": "Active=unselected, State=hover, Size=M",
    "props": {
      "Active": "unselected",
      "State": "hover",
      "Size": "M"
    }
  },
  {
    "id": "228:3200",
    "name": "Active=unselected, State=default, Size=M",
    "props": {
      "Active": "unselected",
      "State": "default",
      "Size": "M"
    }
  },
  {
    "id": "228:3202",
    "name": "Active=unselected, State=disabled, Size=L",
    "props": {
      "Active": "unselected",
      "State": "disabled",
      "Size": "L"
    }
  },
  {
    "id": "228:3204",
    "name": "Active=unselected, State=disabled, Size=M",
    "props": {
      "Active": "unselected",
      "State": "disabled",
      "Size": "M"
    }
  },
  {
    "id": "228:3206",
    "name": "Active=unselected, State=focus, Size=L",
    "props": {
      "Active": "unselected",
      "State": "focus",
      "Size": "L"
    }
  },
  {
    "id": "228:3208",
    "name": "Active=unselected, State=focus, Size=M",
    "props": {
      "Active": "unselected",
      "State": "focus",
      "Size": "M"
    }
  },
  {
    "id": "228:3210",
    "name": "Active=unselected, State=hard validation, Size=L",
    "props": {
      "Active": "unselected",
      "State": "hard validation",
      "Size": "L"
    }
  },
  {
    "id": "228:3212",
    "name": "Active=unselected, State=hard validation, Size=M",
    "props": {
      "Active": "unselected",
      "State": "hard validation",
      "Size": "M"
    }
  },
  {
    "id": "228:3214",
    "name": "Active=selected, State=default, Size=M",
    "props": {
      "Active": "selected",
      "State": "default",
      "Size": "M"
    }
  },
  {
    "id": "228:3216",
    "name": "Active=selected, State=disabled, Size=L",
    "props": {
      "Active": "selected",
      "State": "disabled",
      "Size": "L"
    }
  },
  {
    "id": "228:3218",
    "name": "Active=selected, State=disabled, Size=M",
    "props": {
      "Active": "selected",
      "State": "disabled",
      "Size": "M"
    }
  },
  {
    "id": "228:3220",
    "name": "Active=selected, State=focus, Size=L",
    "props": {
      "Active": "selected",
      "State": "focus",
      "Size": "L"
    }
  },
  {
    "id": "228:3222",
    "name": "Active=selected, State=focus, Size=M",
    "props": {
      "Active": "selected",
      "State": "focus",
      "Size": "M"
    }
  },
  {
    "id": "228:3224",
    "name": "Active=selected, State=hard validation, Size=L",
    "props": {
      "Active": "selected",
      "State": "hard validation",
      "Size": "L"
    }
  },
  {
    "id": "228:3226",
    "name": "Active=selected, State=hard validation, Size=M",
    "props": {
      "Active": "selected",
      "State": "hard validation",
      "Size": "M"
    }
  },
  {
    "id": "228:3228",
    "name": "Active=selected, State=hover, Size=M",
    "props": {
      "Active": "selected",
      "State": "hover",
      "Size": "M"
    }
  },
  {
    "id": "228:3230",
    "name": "Active=unselected, State=default, Size=S",
    "props": {
      "Active": "unselected",
      "State": "default",
      "Size": "S"
    }
  },
  {
    "id": "228:3232",
    "name": "Active=unselected, State=disabled, Size=S",
    "props": {
      "Active": "unselected",
      "State": "disabled",
      "Size": "S"
    }
  },
  {
    "id": "228:3234",
    "name": "Active=unselected, State=focus, Size=S",
    "props": {
      "Active": "unselected",
      "State": "focus",
      "Size": "S"
    }
  },
  {
    "id": "228:3236",
    "name": "Active=unselected, State=hard validation, Size=S",
    "props": {
      "Active": "unselected",
      "State": "hard validation",
      "Size": "S"
    }
  },
  {
    "id": "228:3238",
    "name": "Active=unselected, State=hover, Size=S",
    "props": {
      "Active": "unselected",
      "State": "hover",
      "Size": "S"
    }
  },
  {
    "id": "228:3240",
    "name": "Active=selected, State=default, Size=S",
    "props": {
      "Active": "selected",
      "State": "default",
      "Size": "S"
    }
  },
  {
    "id": "228:3242",
    "name": "Active=selected, State=disabled, Size=S",
    "props": {
      "Active": "selected",
      "State": "disabled",
      "Size": "S"
    }
  },
  {
    "id": "228:3244",
    "name": "Active=selected, State=focus, Size=S",
    "props": {
      "Active": "selected",
      "State": "focus",
      "Size": "S"
    }
  },
  {
    "id": "228:3246",
    "name": "Active=selected, State=hard validation, Size=S",
    "props": {
      "Active": "selected",
      "State": "hard validation",
      "Size": "S"
    }
  },
  {
    "id": "228:3248",
    "name": "Active=selected, State=hover, Size=S",
    "props": {
      "Active": "selected",
      "State": "hover",
      "Size": "S"
    }
  }
] as const;
export type RadioDesignVariant = typeof variants[number]["id"];
export interface RadioDesignDimensions {
  "Active"?: "selected" | "unselected";
  "State"?: "default" | "disabled" | "focus" | "hard validation" | "hover";
  "Size"?: "L" | "M" | "S";
}
export interface RadioDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: RadioDesignVariant;
  variantProps?: RadioDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: RadioDesignVariant) => void;
}
const transitions = {"227:1359":{"ON_CLICK":"227:1363"},"227:1361":{"ON_HOVER":"227:1359"},"227:1363":{"ON_HOVER":"227:1365"},"227:1365":{"ON_CLICK":"227:1361"},"228:3198":{"ON_CLICK":"4294967295:4294967295"},"228:3200":{"ON_HOVER":"228:3198"},"228:3202":{"ON_HOVER":"227:1359"},"228:3204":{"ON_HOVER":"228:3198"},"228:3206":{"ON_HOVER":"227:1359"},"228:3208":{"ON_HOVER":"228:3198"},"228:3210":{"ON_HOVER":"227:1359"},"228:3212":{"ON_HOVER":"228:3198"},"228:3214":{"ON_HOVER":"4294967295:4294967295"},"228:3216":{"ON_HOVER":"227:1365"},"228:3218":{"ON_HOVER":"4294967295:4294967295"},"228:3220":{"ON_HOVER":"227:1365"},"228:3222":{"ON_HOVER":"4294967295:4294967295"},"228:3224":{"ON_HOVER":"227:1365"},"228:3226":{"ON_HOVER":"4294967295:4294967295"},"228:3228":{"ON_CLICK":"228:3200"},"228:3230":{"ON_HOVER":"4294967295:4294967295"},"228:3232":{"ON_HOVER":"4294967295:4294967295"},"228:3234":{"ON_HOVER":"4294967295:4294967295"},"228:3236":{"ON_HOVER":"4294967295:4294967295"},"228:3238":{"ON_CLICK":"4294967295:4294967295"},"228:3240":{"ON_HOVER":"4294967295:4294967295"},"228:3242":{"ON_HOVER":"4294967295:4294967295"},"228:3244":{"ON_HOVER":"4294967295:4294967295"},"228:3246":{"ON_HOVER":"4294967295:4294967295"},"228:3248":{"ON_CLICK":"228:3230"}};
export function RadioDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: RadioDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1359": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1359"} data-name={"Active=unselected, State=hover, Size=L"}>
  <span className={s.n1} data-layer={"227:1359/227:1360"} data-name={"Ellipse 49"}></span>
</Root>);
case "227:1361": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1361"} data-name={"Active=unselected, State=default, Size=L"}>
  <span className={s.n2} data-layer={"227:1361/227:1362"} data-name={"Ellipse 49"}></span>
</Root>);
case "227:1363": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1363"} data-name={"Active=selected, State=default, Size=L"}>
  <span className={s.n3} data-layer={"227:1363/227:1364"} data-name={"Ellipse 48"}></span>
</Root>);
case "227:1365": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1365"} data-name={"Active=selected, State=hover, Size=L"}>
  <span className={s.n4} data-layer={"227:1365/227:1366"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3198": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3198"} data-name={"Active=unselected, State=hover, Size=M"}>
  <span className={s.n6} data-layer={"228:3198/228:3199"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3200": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3200"} data-name={"Active=unselected, State=default, Size=M"}>
  <span className={s.n7} data-layer={"228:3200/228:3201"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3202": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3202"} data-name={"Active=unselected, State=disabled, Size=L"}>
  <span className={s.n8} data-layer={"228:3202/228:3203"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3204": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3204"} data-name={"Active=unselected, State=disabled, Size=M"}>
  <span className={s.n9} data-layer={"228:3204/228:3205"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3206": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3206"} data-name={"Active=unselected, State=focus, Size=L"}>
  <span className={s.n2} data-layer={"228:3206/228:3207"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3208": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3208"} data-name={"Active=unselected, State=focus, Size=M"}>
  <span className={s.n12} data-layer={"228:3208/228:3209"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3210": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3210"} data-name={"Active=unselected, State=hard validation, Size=L"}>
  <span className={s.n13} data-layer={"228:3210/228:3211"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3212": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3212"} data-name={"Active=unselected, State=hard validation, Size=M"}>
  <span className={s.n14} data-layer={"228:3212/228:3213"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3214": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3214"} data-name={"Active=selected, State=default, Size=M"}>
  <span className={s.n15} data-layer={"228:3214/228:3215"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3216": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3216"} data-name={"Active=selected, State=disabled, Size=L"}>
  <span className={s.n16} data-layer={"228:3216/228:3217"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3218": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3218"} data-name={"Active=selected, State=disabled, Size=M"}>
  <span className={s.n17} data-layer={"228:3218/228:3219"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3220": return (<Root {...rootAttributes} className={[s.n10,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3220"} data-name={"Active=selected, State=focus, Size=L"}>
  <span className={s.n3} data-layer={"228:3220/228:3221"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3222": return (<Root {...rootAttributes} className={[s.n11,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3222"} data-name={"Active=selected, State=focus, Size=M"}>
  <span className={s.n18} data-layer={"228:3222/228:3223"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3224": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3224"} data-name={"Active=selected, State=hard validation, Size=L"}>
  <span className={s.n19} data-layer={"228:3224/228:3225"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3226": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3226"} data-name={"Active=selected, State=hard validation, Size=M"}>
  <span className={s.n20} data-layer={"228:3226/228:3227"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3228": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3228"} data-name={"Active=selected, State=hover, Size=M"}>
  <span className={s.n21} data-layer={"228:3228/228:3229"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3230": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3230"} data-name={"Active=unselected, State=default, Size=S"}>
  <span className={s.n23} data-layer={"228:3230/228:3231"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3232": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3232"} data-name={"Active=unselected, State=disabled, Size=S"}>
  <span className={s.n24} data-layer={"228:3232/228:3233"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3234": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3234"} data-name={"Active=unselected, State=focus, Size=S"}>
  <span className={s.n23} data-layer={"228:3234/228:3235"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3236": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3236"} data-name={"Active=unselected, State=hard validation, Size=S"}>
  <span className={s.n26} data-layer={"228:3236/228:3237"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3238": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3238"} data-name={"Active=unselected, State=hover, Size=S"}>
  <span className={s.n27} data-layer={"228:3238/228:3239"} data-name={"Ellipse 49"}></span>
</Root>);
case "228:3240": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3240"} data-name={"Active=selected, State=default, Size=S"}>
  <span className={s.n28} data-layer={"228:3240/228:3241"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3242": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3242"} data-name={"Active=selected, State=disabled, Size=S"}>
  <span className={s.n29} data-layer={"228:3242/228:3243"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3244": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3244"} data-name={"Active=selected, State=focus, Size=S"}>
  <span className={s.n28} data-layer={"228:3244/228:3245"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3246": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3246"} data-name={"Active=selected, State=hard validation, Size=S"}>
  <span className={s.n30} data-layer={"228:3246/228:3247"} data-name={"Ellipse 48"}></span>
</Root>);
case "228:3248": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:3248"} data-name={"Active=selected, State=hover, Size=S"}>
  <span className={s.n31} data-layer={"228:3248/228:3249"} data-name={"Ellipse 48"}></span>
</Root>);
  default: return null;
  }
}
