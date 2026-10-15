// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './MapPinDesign.module.css';
export const variants = [
  {
    "id": "227:1195",
    "name": "State=green, view=general, selected=default, Hover=off",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "227:1199",
    "name": "State=green, view=general, selected=default, Hover=on",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "227:1203",
    "name": "State=green, view=general, selected=unselected, Hover=on",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1207",
    "name": "State=red, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1212",
    "name": "State=red, view=general, selected=default, Hover=on",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "227:1216",
    "name": "State=red, view=general, selected=unselected, Hover=on",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1220",
    "name": "State=red, view=general, selected=selected, Hover=on",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1227",
    "name": "State=red, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1234",
    "name": "State=green, view=general, selected=selected, Hover=on",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "227:1241",
    "name": "State=red, view=general, selected=default, Hover=off",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "227:1245",
    "name": "State=green, view=general, selected=selected, Hover=off",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "227:1252",
    "name": "State=green, view=general, selected=unselected, Hover=off",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "227:1256",
    "name": "State=red, view=general, selected=unselected, Hover=off",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "227:1260",
    "name": "State=red, view=general, selected=selected, Hover=off",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "227:1267",
    "name": "State=red, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "227:1272",
    "name": "State=red, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3209",
    "name": "State=TB, view=general, selected=default, Hover=off",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3213",
    "name": "State=TB, view=general, selected=default, Hover=on",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3217",
    "name": "State=TB, view=general, selected=unselected, Hover=off",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3221",
    "name": "State=TB, view=general, selected=unselected, Hover=on",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3225",
    "name": "State=GOSB, view=general, selected=default, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3229",
    "name": "State=GOSB, view=general, selected=default, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3234",
    "name": "State=GOSB, view=general, selected=unselected, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3238",
    "name": "State=GOSB, view=general, selected=unselected, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3243",
    "name": "State=green, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3248",
    "name": "State=green, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3253",
    "name": "State=green, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3258",
    "name": "State=green, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3263",
    "name": "State=GOSB, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3268",
    "name": "State=GOSB, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3273",
    "name": "State=GOSB, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3278",
    "name": "State=GOSB, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3283",
    "name": "State=purpur, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3288",
    "name": "State=purpur, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3293",
    "name": "State=purpur, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3298",
    "name": "State=purpur, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3303",
    "name": "State=TB, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3308",
    "name": "State=TB, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3313",
    "name": "State=TB, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3318",
    "name": "State=TB, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3323",
    "name": "State=red, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3328",
    "name": "State=red, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3333",
    "name": "State=blue, view=for CS, selected=default, Hover=off",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3338",
    "name": "State=blue, view=for CS, selected=default, Hover=on",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3343",
    "name": "State=blue, view=for CS, selected=unselected, Hover=off",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3348",
    "name": "State=blue, view=for CS, selected=unselected, Hover=on",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "unselected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3353",
    "name": "State=sceleton, view=general, selected=default, Hover=off",
    "props": {
      "State": "sceleton",
      "view": "general",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3354",
    "name": "State=blue, view=scale, selected=default, Hover=off",
    "props": {
      "State": "blue",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3356",
    "name": "State=blue, view=scale, selected=default, Hover=on",
    "props": {
      "State": "blue",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3358",
    "name": "State=closed, view=scale, selected=default, Hover=off",
    "props": {
      "State": "closed",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3360",
    "name": "State=closed, view=scale, selected=default, Hover=on",
    "props": {
      "State": "closed",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3362",
    "name": "State=red, view=scale, selected=default, Hover=off",
    "props": {
      "State": "red",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3364",
    "name": "State=red, view=scale, selected=default, Hover=on",
    "props": {
      "State": "red",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3366",
    "name": "State=purpur, view=scale, selected=default, Hover=off",
    "props": {
      "State": "purpur",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3368",
    "name": "State=purpur, view=scale, selected=default, Hover=on",
    "props": {
      "State": "purpur",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3370",
    "name": "State=TB, view=scale, selected=default, Hover=off",
    "props": {
      "State": "TB",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3372",
    "name": "State=TB, view=scale, selected=default, Hover=on",
    "props": {
      "State": "TB",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3374",
    "name": "State=green, view=scale, selected=default, Hover=off",
    "props": {
      "State": "green",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3376",
    "name": "State=green, view=scale, selected=default, Hover=on",
    "props": {
      "State": "green",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3378",
    "name": "State=GOSB, view=scale, selected=default, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "scale",
      "selected": "default",
      "Hover": "off"
    }
  },
  {
    "id": "236:3380",
    "name": "State=GOSB, view=scale, selected=default, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "scale",
      "selected": "default",
      "Hover": "on"
    }
  },
  {
    "id": "236:3382",
    "name": "State=blue, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3389",
    "name": "State=blue, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3396",
    "name": "State=purpur, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3403",
    "name": "State=purpur, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3410",
    "name": "State=TB, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3417",
    "name": "State=TB, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3424",
    "name": "State=TB, view=general, selected=selected, Hover=off",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3431",
    "name": "State=TB, view=general, selected=selected, Hover=on",
    "props": {
      "State": "TB",
      "view": "general",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3438",
    "name": "State=GOSB, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3445",
    "name": "State=GOSB, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3452",
    "name": "State=GOSB, view=general, selected=selected, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3459",
    "name": "State=GOSB, view=general, selected=selected, Hover=on",
    "props": {
      "State": "GOSB",
      "view": "general",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3465",
    "name": "State=green, view=for CS, selected=selected, Hover=off",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "selected",
      "Hover": "off"
    }
  },
  {
    "id": "236:3472",
    "name": "State=green, view=for CS, selected=selected, Hover=on",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "selected",
      "Hover": "on"
    }
  },
  {
    "id": "236:3479",
    "name": "State=blue, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "blue",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3481",
    "name": "State=purpur, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "purpur",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3483",
    "name": "State=red, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "red",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3485",
    "name": "State=red, view=general, selected=legend, Hover=off",
    "props": {
      "State": "red",
      "view": "general",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3486",
    "name": "State=green, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "green",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3488",
    "name": "State=green, view=general, selected=legend, Hover=off",
    "props": {
      "State": "green",
      "view": "general",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3489",
    "name": "State=closed, view=general, selected=legend, Hover=off",
    "props": {
      "State": "closed",
      "view": "general",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3490",
    "name": "State=TB, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "TB",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  },
  {
    "id": "236:3492",
    "name": "State=GOSB, view=for CS, selected=legend, Hover=off",
    "props": {
      "State": "GOSB",
      "view": "for CS",
      "selected": "legend",
      "Hover": "off"
    }
  }
] as const;
export type MapPinDesignVariant = typeof variants[number]["id"];
export interface MapPinDesignDimensions {
  "State"?: "GOSB" | "TB" | "blue" | "closed" | "green" | "purpur" | "red" | "sceleton";
  "view"?: "for CS" | "general" | "scale";
  "selected"?: "default" | "legend" | "selected" | "unselected";
  "Hover"?: "off" | "on";
}
export interface MapPinDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: MapPinDesignVariant;
  variantProps?: MapPinDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: MapPinDesignVariant) => void;
}
const transitions = {"227:1195":{"ON_HOVER":"227:1199"},"227:1241":{"ON_HOVER":"227:1212"},"227:1245":{"ON_HOVER":"227:1234"},"227:1252":{"ON_HOVER":"227:1203"},"227:1256":{"ON_HOVER":"227:1216"},"227:1260":{"ON_HOVER":"227:1220"},"227:1267":{"ON_HOVER":"227:1207"},"227:1272":{"ON_HOVER":"227:1227"},"236:3209":{"ON_HOVER":"4294967295:4294967295"},"236:3217":{"ON_HOVER":"4294967295:4294967295"},"236:3225":{"ON_HOVER":"4294967295:4294967295"},"236:3234":{"ON_HOVER":"4294967295:4294967295"},"236:3243":{"ON_HOVER":"4294967295:4294967295"},"236:3253":{"ON_HOVER":"4294967295:4294967295"},"236:3263":{"ON_HOVER":"4294967295:4294967295"},"236:3273":{"ON_HOVER":"4294967295:4294967295"},"236:3283":{"ON_HOVER":"4294967295:4294967295"},"236:3293":{"ON_HOVER":"4294967295:4294967295"},"236:3303":{"ON_HOVER":"4294967295:4294967295"},"236:3313":{"ON_HOVER":"4294967295:4294967295"},"236:3323":{"ON_HOVER":"4294967295:4294967295"},"236:3333":{"ON_HOVER":"4294967295:4294967295"},"236:3343":{"ON_HOVER":"4294967295:4294967295"},"236:3354":{"ON_HOVER":"4294967295:4294967295"},"236:3358":{"ON_HOVER":"4294967295:4294967295"},"236:3362":{"ON_HOVER":"4294967295:4294967295"},"236:3366":{"ON_HOVER":"4294967295:4294967295"},"236:3370":{"ON_HOVER":"4294967295:4294967295"},"236:3374":{"ON_HOVER":"4294967295:4294967295"},"236:3378":{"ON_HOVER":"4294967295:4294967295"},"236:3382":{"ON_HOVER":"4294967295:4294967295"},"236:3396":{"ON_HOVER":"4294967295:4294967295"},"236:3410":{"ON_HOVER":"4294967295:4294967295"},"236:3424":{"ON_HOVER":"4294967295:4294967295"},"236:3438":{"ON_HOVER":"4294967295:4294967295"},"236:3452":{"ON_HOVER":"4294967295:4294967295"},"236:3465":{"ON_HOVER":"4294967295:4294967295"}};
export function MapPinDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: MapPinDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1195": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1195"} data-name={"State=green, view=general, selected=default, Hover=off"}>
  <span className={s.n1} data-layer={"227:1195/227:1196"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"227:1195/227:1196/227:1197"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.35896 8.00027 C17.35896 7.24976 16.75055 6.64135 16.00004 6.64135 C15.24953 6.64135 14.64112 7.24976 14.64112 8.00027 L16.00004 8.00027 L17.35896 8.00027 Z M11.33703 2.25671 C11.98553 2.6345 12.81749 2.41504 13.19527 1.76655 C13.57306 1.11805 13.3536 0.28609 12.70511 -0.0917 L12.02107 1.08251 L11.33703 2.25671 Z M16.00004 8.00027 L14.64112 8.00027 C14.64112 11.66823 11.66776 14.64162 8.00002 14.64162 L8.00002 16.00054 L8.00002 17.35946 C13.16886 17.35946 17.35896 13.16917 17.35896 8.00027 L16.00004 8.00027 Z M8.00002 16.00054 L8.00002 14.64162 C4.33228 14.64162 1.35892 11.66823 1.35892 8.00027 L0 8.00027 L-1.35892 8.00027 C-1.35892 13.16917 2.83118 17.35946 8.00002 17.35946 L8.00002 16.00054 Z M0 8.00027 L1.35892 8.00027 C1.35892 4.33231 4.33228 1.35892 8.00002 1.35892 L8.00002 0 L8.00002 -1.35892 C2.83118 -1.35892 -1.35892 2.83137 -1.35892 8.00027 L0 8.00027 Z M8.00002 0 L8.00002 1.35892 C9.21911 1.35892 10.35764 1.68616 11.33703 2.25671 L12.02107 1.08251 L12.70511 -0.0917 C11.32162 -0.89765 9.71263 -1.35892 8.00002 -1.35892 L8.00002 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n3} data-layer={"227:1195/227:1196/227:1198"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.70447 1.74666 C0.06268 1.3576 -0.77299 1.56247 -1.16206 2.20425 C-1.55113 2.84604 -1.34626 3.68172 -0.70447 4.07079 L0 2.90873 L0.70447 1.74666 Z M2.91545 4.67614 L2.21098 5.8382 L2.97094 6.29892 L3.69766 5.78736 L2.91545 4.67614 Z M10.34061 1.11122 C10.95431 0.67921 11.10161 -0.16851 10.66961 -0.78222 C10.2376 -1.39592 9.38988 -1.54322 8.77618 -1.11122 L9.55839 0 L10.34061 1.11122 Z M0 2.90873 L-0.70447 4.07079 L2.21098 5.8382 L2.91545 4.67614 L3.61992 3.51408 L0.70447 1.74666 L0 2.90873 Z M2.91545 4.67614 L3.69766 5.78736 L10.34061 1.11122 L9.55839 0 L8.77618 -1.11122 L2.13323 3.56493 L2.91545 4.67614 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1199": return (<Root {...rootAttributes} className={[s.n4,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1199"} data-name={"State=green, view=general, selected=default, Hover=on"}>
  <span className={s.n1} data-layer={"227:1199/227:1200"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"227:1199/227:1200/227:1201"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.35896 8.00027 C17.35896 7.24976 16.75055 6.64135 16.00004 6.64135 C15.24953 6.64135 14.64112 7.24976 14.64112 8.00027 L16.00004 8.00027 L17.35896 8.00027 Z M11.33703 2.25671 C11.98553 2.6345 12.81749 2.41504 13.19527 1.76655 C13.57306 1.11805 13.3536 0.28609 12.70511 -0.0917 L12.02107 1.08251 L11.33703 2.25671 Z M16.00004 8.00027 L14.64112 8.00027 C14.64112 11.66823 11.66776 14.64162 8.00002 14.64162 L8.00002 16.00054 L8.00002 17.35946 C13.16886 17.35946 17.35896 13.16917 17.35896 8.00027 L16.00004 8.00027 Z M8.00002 16.00054 L8.00002 14.64162 C4.33228 14.64162 1.35892 11.66823 1.35892 8.00027 L0 8.00027 L-1.35892 8.00027 C-1.35892 13.16917 2.83118 17.35946 8.00002 17.35946 L8.00002 16.00054 Z M0 8.00027 L1.35892 8.00027 C1.35892 4.33231 4.33228 1.35892 8.00002 1.35892 L8.00002 0 L8.00002 -1.35892 C2.83118 -1.35892 -1.35892 2.83137 -1.35892 8.00027 L0 8.00027 Z M8.00002 0 L8.00002 1.35892 C9.21911 1.35892 10.35764 1.68616 11.33703 2.25671 L12.02107 1.08251 L12.70511 -0.0917 C11.32162 -0.89765 9.71263 -1.35892 8.00002 -1.35892 L8.00002 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n3} data-layer={"227:1199/227:1200/227:1202"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.70447 1.74666 C0.06268 1.3576 -0.77299 1.56247 -1.16206 2.20425 C-1.55113 2.84604 -1.34626 3.68172 -0.70447 4.07079 L0 2.90873 L0.70447 1.74666 Z M2.91545 4.67614 L2.21098 5.8382 L2.97094 6.29892 L3.69766 5.78736 L2.91545 4.67614 Z M10.34061 1.11122 C10.95431 0.67921 11.10161 -0.16851 10.66961 -0.78222 C10.2376 -1.39592 9.38988 -1.54322 8.77618 -1.11122 L9.55839 0 L10.34061 1.11122 Z M0 2.90873 L-0.70447 4.07079 L2.21098 5.8382 L2.91545 4.67614 L3.61992 3.51408 L0.70447 1.74666 L0 2.90873 Z M2.91545 4.67614 L3.69766 5.78736 L10.34061 1.11122 L9.55839 0 L8.77618 -1.11122 L2.13323 3.56493 L2.91545 4.67614 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1203": return (<Root {...rootAttributes} className={[s.n5,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1203"} data-name={"State=green, view=general, selected=unselected, Hover=on"}>
  <span className={s.n6} data-layer={"227:1203/227:1204"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"227:1203/227:1204/227:1205"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.3471 4.30782 C9.3471 3.9037 9.0195 3.5761 8.61538 3.5761 C8.21126 3.5761 7.88366 3.9037 7.88366 4.30782 L8.61538 4.30782 L9.3471 4.30782 Z M6.10453 1.21515 C6.45372 1.41857 6.9017 1.3004 7.10512 0.95121 C7.30855 0.60203 7.19038 0.15405 6.84119 -0.04938 L6.47286 0.58289 L6.10453 1.21515 Z M8.61538 4.30782 L7.88366 4.30782 C7.88366 6.28287 6.28262 7.88392 4.30769 7.88392 L4.30769 8.61565 L4.30769 9.34737 C7.0909 9.34737 9.3471 7.09107 9.3471 4.30782 L8.61538 4.30782 Z M4.30769 8.61565 L4.30769 7.88392 C2.33276 7.88392 0.73172 6.28287 0.73172 4.30782 L0 4.30782 L-0.73172 4.30782 C-0.73172 7.09107 1.52448 9.34737 4.30769 9.34737 L4.30769 8.61565 Z M0 4.30782 L0.73172 4.30782 C0.73172 2.33278 2.33276 0.73172 4.30769 0.73172 L4.30769 0 L4.30769 -0.73172 C1.52448 -0.73172 -0.73172 1.52458 -0.73172 4.30782 L0 4.30782 Z M4.30769 0 L4.30769 0.73172 C4.96412 0.73172 5.57717 0.90793 6.10453 1.21515 L6.47286 0.58289 L6.84119 -0.04938 C6.09624 -0.48335 5.22986 -0.73172 4.30769 -0.73172 L4.30769 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:1203/227:1204/227:1206"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.37933 0.94051 C0.03375 0.73101 -0.41623 0.84133 -0.62572 1.1869 C-0.83522 1.53248 -0.72491 1.98246 -0.37933 2.19196 L0 1.56623 L0.37933 0.94051 Z M1.56985 2.51791 L1.19052 3.14364 L1.59973 3.39171 L1.99104 3.11626 L1.56985 2.51791 Z M5.568 0.59835 C5.89846 0.36573 5.97777 -0.09073 5.74515 -0.42119 C5.51254 -0.75165 5.05608 -0.83096 4.72562 -0.59835 L5.14681 0 L5.568 0.59835 Z M0 1.56623 L-0.37933 2.19196 L1.19052 3.14364 L1.56985 2.51791 L1.94918 1.89219 L0.37933 0.94051 L0 1.56623 Z M1.56985 2.51791 L1.99104 3.11626 L5.568 0.59835 L5.14681 0 L4.72562 -0.59835 L1.14866 1.91957 L1.56985 2.51791 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1207": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1207"} data-name={"State=red, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n10} data-layer={"227:1207/227:1208"} data-name={"fill"}>
    <span className={s.n11} data-layer={"227:1207/227:1208/227:1209"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"227:1207/227:1208/227:1209/227:1210"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.67946 4.00012 C8.67946 3.62487 8.37525 3.32067 8 3.32067 C7.62474 3.32067 7.32054 3.62487 7.32054 4.00012 L8 4.00012 L8.67946 4.00012 Z M5.6685 1.12835 C5.99274 1.31724 6.40873 1.20752 6.59762 0.88327 C6.78651 0.55902 6.67678 0.14304 6.35254 -0.04585 L6.01052 0.54125 L5.6685 1.12835 Z M8 4.00012 L7.32054 4.00012 C7.32054 5.8341 5.83386 7.32079 4 7.32079 L4 8.00025 L4 8.67971 C6.58441 8.67971 8.67946 6.58457 8.67946 4.00012 L8 4.00012 Z M4 8.00025 L4 7.32079 C2.16613 7.32079 0.67946 5.8341 0.67946 4.00012 L0 4.00012 L-0.67946 4.00012 C-0.67946 6.58457 1.41559 8.67971 4 8.67971 L4 8.00025 Z M0 4.00012 L0.67946 4.00012 C0.67946 2.16615 2.16613 0.67946 4 0.67946 L4 0 L4 -0.67946 C1.41559 -0.67946 -0.67946 1.41568 -0.67946 4.00012 L0 4.00012 Z M4 0 L4 0.67946 C4.60954 0.67946 5.1788 0.84308 5.6685 1.12835 L6.01052 0.54125 L6.35254 -0.04585 C5.6608 -0.44883 4.8563 -0.67946 4 -0.67946 L4 0 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"227:1207/227:1208/227:1209/227:1211"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.35223 0.87333 C0.03134 0.6788 -0.3865 0.78123 -0.58103 1.10212 C-0.77556 1.42302 -0.67313 1.84085 -0.35223 2.03539 L0 1.45436 L0.35223 0.87333 Z M1.45772 2.33806 L1.10548 2.91909 L1.48547 3.14945 L1.84883 2.89367 L1.45772 2.33806 Z M5.17029 0.55561 C5.47714 0.33961 5.55079 -0.08425 5.33479 -0.39111 C5.11879 -0.69796 4.69493 -0.77161 4.38807 -0.55561 L4.77918 0 L5.17029 0.55561 Z M0 1.45436 L-0.35223 2.03539 L1.10548 2.91909 L1.45772 2.33806 L1.80995 1.75704 L0.35223 0.87333 L0 1.45436 Z M1.45772 2.33806 L1.84883 2.89367 L5.17029 0.55561 L4.77918 0 L4.38807 -0.55561 L1.06661 1.78246 L1.45772 2.33806 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:1212": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1212"} data-name={"State=red, view=general, selected=default, Hover=on"}>
  <span className={s.n1} data-layer={"227:1212/227:1213"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"227:1212/227:1213/227:1214"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.35896 8.00027 C17.35896 7.24976 16.75055 6.64135 16.00004 6.64135 C15.24953 6.64135 14.64112 7.24976 14.64112 8.00027 L16.00004 8.00027 L17.35896 8.00027 Z M11.33703 2.25671 C11.98553 2.6345 12.81749 2.41504 13.19527 1.76655 C13.57306 1.11805 13.3536 0.28609 12.70511 -0.0917 L12.02107 1.08251 L11.33703 2.25671 Z M16.00004 8.00027 L14.64112 8.00027 C14.64112 11.66823 11.66776 14.64162 8.00002 14.64162 L8.00002 16.00054 L8.00002 17.35946 C13.16886 17.35946 17.35896 13.16917 17.35896 8.00027 L16.00004 8.00027 Z M8.00002 16.00054 L8.00002 14.64162 C4.33228 14.64162 1.35892 11.66823 1.35892 8.00027 L0 8.00027 L-1.35892 8.00027 C-1.35892 13.16917 2.83118 17.35946 8.00002 17.35946 L8.00002 16.00054 Z M0 8.00027 L1.35892 8.00027 C1.35892 4.33231 4.33228 1.35892 8.00002 1.35892 L8.00002 0 L8.00002 -1.35892 C2.83118 -1.35892 -1.35892 2.83137 -1.35892 8.00027 L0 8.00027 Z M8.00002 0 L8.00002 1.35892 C9.21911 1.35892 10.35764 1.68616 11.33703 2.25671 L12.02107 1.08251 L12.70511 -0.0917 C11.32162 -0.89765 9.71263 -1.35892 8.00002 -1.35892 L8.00002 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n3} data-layer={"227:1212/227:1213/227:1215"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.70447 1.74666 C0.06268 1.3576 -0.77299 1.56247 -1.16206 2.20425 C-1.55113 2.84604 -1.34626 3.68172 -0.70447 4.07079 L0 2.90873 L0.70447 1.74666 Z M2.91545 4.67614 L2.21098 5.8382 L2.97094 6.29892 L3.69766 5.78736 L2.91545 4.67614 Z M10.34061 1.11122 C10.95431 0.67921 11.10161 -0.16851 10.66961 -0.78222 C10.2376 -1.39592 9.38988 -1.54322 8.77618 -1.11122 L9.55839 0 L10.34061 1.11122 Z M0 2.90873 L-0.70447 4.07079 L2.21098 5.8382 L2.91545 4.67614 L3.61992 3.51408 L0.70447 1.74666 L0 2.90873 Z M2.91545 4.67614 L3.69766 5.78736 L10.34061 1.11122 L9.55839 0 L8.77618 -1.11122 L2.13323 3.56493 L2.91545 4.67614 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1216": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1216"} data-name={"State=red, view=general, selected=unselected, Hover=on"}>
  <span className={s.n6} data-layer={"227:1216/227:1217"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"227:1216/227:1217/227:1218"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.3471 4.30782 C9.3471 3.9037 9.0195 3.5761 8.61538 3.5761 C8.21126 3.5761 7.88366 3.9037 7.88366 4.30782 L8.61538 4.30782 L9.3471 4.30782 Z M6.10453 1.21515 C6.45372 1.41857 6.9017 1.3004 7.10512 0.95121 C7.30855 0.60203 7.19038 0.15405 6.84119 -0.04938 L6.47286 0.58289 L6.10453 1.21515 Z M8.61538 4.30782 L7.88366 4.30782 C7.88366 6.28287 6.28262 7.88392 4.30769 7.88392 L4.30769 8.61565 L4.30769 9.34737 C7.0909 9.34737 9.3471 7.09107 9.3471 4.30782 L8.61538 4.30782 Z M4.30769 8.61565 L4.30769 7.88392 C2.33276 7.88392 0.73172 6.28287 0.73172 4.30782 L0 4.30782 L-0.73172 4.30782 C-0.73172 7.09107 1.52448 9.34737 4.30769 9.34737 L4.30769 8.61565 Z M0 4.30782 L0.73172 4.30782 C0.73172 2.33278 2.33276 0.73172 4.30769 0.73172 L4.30769 0 L4.30769 -0.73172 C1.52448 -0.73172 -0.73172 1.52458 -0.73172 4.30782 L0 4.30782 Z M4.30769 0 L4.30769 0.73172 C4.96412 0.73172 5.57717 0.90793 6.10453 1.21515 L6.47286 0.58289 L6.84119 -0.04938 C6.09624 -0.48335 5.22986 -0.73172 4.30769 -0.73172 L4.30769 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:1216/227:1217/227:1219"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.37933 0.94051 C0.03375 0.73101 -0.41623 0.84133 -0.62572 1.1869 C-0.83522 1.53248 -0.72491 1.98246 -0.37933 2.19196 L0 1.56623 L0.37933 0.94051 Z M1.56985 2.51791 L1.19052 3.14364 L1.59973 3.39171 L1.99104 3.11626 L1.56985 2.51791 Z M5.568 0.59835 C5.89846 0.36573 5.97777 -0.09073 5.74515 -0.42119 C5.51254 -0.75165 5.05608 -0.83096 4.72562 -0.59835 L5.14681 0 L5.568 0.59835 Z M0 1.56623 L-0.37933 2.19196 L1.19052 3.14364 L1.56985 2.51791 L1.94918 1.89219 L0.37933 0.94051 L0 1.56623 Z M1.56985 2.51791 L1.99104 3.11626 L5.568 0.59835 L5.14681 0 L4.72562 -0.59835 L1.14866 1.91957 L1.56985 2.51791 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1220": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1220"} data-name={"State=red, view=general, selected=selected, Hover=on"}>
  <span className={s.n17} data-layer={"227:1220/227:1221"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.53369 C32 28.18462 16 35.06738 16 35.06738 C16 35.06738 0 28.18462 0 15.53369 C0 6.95467 7.16344 0 16 0 C24.83656 0 32 6.95467 32 15.53369 Z"} fill={"rgba(255,43,43,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n18} data-layer={"227:1220/227:1222"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"227:1220/227:1222/227:1223"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"227:1220/227:1222/227:1223/227:1224"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.69716 9.53875 C20.69716 8.64392 19.97175 7.91851 19.07691 7.91851 C18.18208 7.91851 17.45667 8.64392 17.45667 9.53875 L19.07691 9.53875 L20.69716 9.53875 Z M13.51718 2.69068 C14.29039 3.14112 15.28234 2.87946 15.73277 2.10626 C16.18321 1.33306 15.92155 0.3411 15.14835 -0.10933 L14.33277 1.29068 L13.51718 2.69068 Z M19.07691 9.53875 L17.45667 9.53875 C17.45667 13.91207 13.91152 17.45726 9.53846 17.45726 L9.53846 19.07751 L9.53846 20.69776 C15.70129 20.69776 20.69716 15.70165 20.69716 9.53875 L19.07691 9.53875 Z M9.53846 19.07751 L9.53846 17.45726 C5.1654 17.45726 1.62025 13.91207 1.62025 9.53875 L0 9.53875 L-1.62025 9.53875 C-1.62025 15.70165 3.37563 20.69776 9.53846 20.69776 L9.53846 19.07751 Z M0 9.53875 L1.62025 9.53875 C1.62025 5.16543 5.1654 1.62025 9.53846 1.62025 L9.53846 0 L9.53846 -1.62025 C3.37563 -1.62025 -1.62025 3.37586 -1.62025 9.53875 L0 9.53875 Z M9.53846 0 L9.53846 1.62025 C10.99198 1.62025 12.34945 2.01041 13.51718 2.69068 L14.33277 1.29068 L15.14835 -0.10933 C13.49882 -1.07028 11.5804 -1.62025 9.53846 -1.62025 L9.53846 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n21} data-layer={"227:1220/227:1222/227:1223/227:1225"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.83994 2.08255 C0.07474 1.61867 -0.92164 1.86293 -1.38553 2.62814 C-1.84942 3.39335 -1.60515 4.38973 -0.83994 4.85361 L0 3.46808 L0.83994 2.08255 Z M3.4761 5.57538 L2.63615 6.96091 L3.54227 7.51022 L4.40874 6.90029 L3.4761 5.57538 Z M12.32914 1.32491 C13.06087 0.80983 13.2365 -0.20091 12.72142 -0.93264 C12.20633 -1.66437 11.19559 -1.83999 10.46387 -1.32491 L11.39651 0 L12.32914 1.32491 Z M0 3.46808 L-0.83994 4.85361 L2.63615 6.96091 L3.4761 5.57538 L4.31604 4.18985 L0.83994 2.08255 L0 3.46808 Z M3.4761 5.57538 L4.40874 6.90029 L12.32914 1.32491 L11.39651 0 L10.46387 -1.32491 L2.54346 4.25047 L3.4761 5.57538 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1220/227:1226"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 35.06738 L14.41935 38.74183 L16 39.42178 L17.58065 38.74183 L16 35.06738 Z M32 15.53369 L28 15.53369 C28 20.07727 25.1114 23.94029 21.45352 26.95992 C19.68497 28.41989 17.89588 29.54545 16.5404 30.30716 C15.86726 30.68544 15.31283 30.9674 14.93716 31.15022 C14.74962 31.24149 14.60754 31.30761 14.5185 31.34826 C14.474 31.36857 14.44285 31.38248 14.42598 31.38995 C14.41755 31.39368 14.41271 31.3958 14.41156 31.3963 C14.41098 31.39655 14.41134 31.3964 14.41263 31.39584 C14.41328 31.39556 14.41416 31.39517 14.41528 31.39469 C14.41584 31.39445 14.41686 31.39401 14.41714 31.39389 C14.41821 31.39343 14.41935 31.39294 16 35.06738 C17.58065 38.74183 17.58191 38.74129 17.58323 38.74072 C17.58375 38.74049 17.58513 38.73989 17.58618 38.73944 C17.58827 38.73854 17.59061 38.73753 17.5932 38.73641 C17.59837 38.73417 17.60452 38.73149 17.61163 38.72839 C17.62587 38.72218 17.64397 38.71423 17.66581 38.70456 C17.7095 38.68521 17.76818 38.65893 17.84088 38.62574 C17.98621 38.55939 18.18788 38.46528 18.43784 38.34364 C18.93717 38.10064 19.63274 37.74605 20.4596 37.28139 C22.10412 36.35725 24.31503 34.97144 26.54647 33.12935 C30.8886 29.54486 36 23.64104 36 15.53369 L32 15.53369 Z M16 35.06738 C17.58065 31.39294 17.58179 31.39343 17.58286 31.39389 C17.58314 31.39401 17.58416 31.39445 17.58472 31.39469 C17.58584 31.39517 17.58672 31.39556 17.58737 31.39584 C17.58866 31.3964 17.58901 31.39655 17.58844 31.3963 C17.58729 31.3958 17.58245 31.39368 17.57402 31.38995 C17.55715 31.38248 17.526 31.36857 17.4815 31.34826 C17.39246 31.30761 17.25038 31.24149 17.06284 31.15022 C16.68717 30.9674 16.13274 30.68544 15.4596 30.30716 C14.10412 29.54545 12.31503 28.41989 10.54648 26.95992 C6.8886 23.94029 4 20.07727 4 15.53369 L0 15.53369 L-4 15.53369 C-4 23.64104 1.1114 29.54486 5.45352 33.12935 C7.68497 34.97144 9.89588 36.35725 11.5404 37.28139 C12.36726 37.74605 13.06283 38.10064 13.56216 38.34364 C13.81212 38.46528 14.01379 38.55939 14.15912 38.62574 C14.23182 38.65893 14.2905 38.68521 14.33419 38.70456 C14.35603 38.71423 14.37413 38.72218 14.38837 38.72839 C14.39548 38.73149 14.40163 38.73417 14.4068 38.73641 C14.40939 38.73753 14.41173 38.73854 14.41382 38.73944 C14.41486 38.73989 14.41625 38.74049 14.41677 38.74072 C14.41809 38.74129 14.41935 38.74183 16 35.06738 Z M0 15.53369 L4 15.53369 C4 9.27451 9.26024 4 16 4 L16 0 L16 -4 C5.06665 -4 -4 4.63483 -4 15.53369 L0 15.53369 Z M16 0 L16 4 C22.73976 4 28 9.27451 28 15.53369 L32 15.53369 L36 15.53369 C36 4.63483 26.93335 -4 16 -4 L16 0 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1227": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1227"} data-name={"State=red, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n23} data-layer={"227:1227/227:1228"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.94681 C32 28.93419 16 36 16 36 C16 36 0 28.93419 0 15.94681 C0 7.13963 7.16344 0 16 0 C24.83656 0 32 7.13963 32 15.94681 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n24} data-layer={"227:1227/227:1229"} data-name={"fill"}>
    <span className={s.n25} data-layer={"227:1227/227:1229/227:1230"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"227:1227/227:1229/227:1230/227:1231"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M21.36481 9.84646 C21.36481 8.92275 20.616 8.17394 19.6923 8.17394 C18.76859 8.17394 18.01978 8.92275 18.01978 9.84646 L19.6923 9.84646 L21.36481 9.84646 Z M13.95322 2.77748 C14.75137 3.24245 15.77532 2.97235 16.24028 2.1742 C16.70525 1.37606 16.43515 0.35211 15.63701 -0.11286 L14.79512 1.33231 L13.95322 2.77748 Z M19.6923 9.84646 L18.01978 9.84646 C18.01978 14.36085 14.36027 18.0204 9.84615 18.0204 L9.84615 19.69291 L9.84615 21.36543 C16.20778 21.36543 21.36481 16.20816 21.36481 9.84646 L19.6923 9.84646 Z M9.84615 19.69291 L9.84615 18.0204 C5.33202 18.0204 1.67251 14.36085 1.67251 9.84646 L0 9.84646 L-1.67251 9.84646 C-1.67251 16.20816 3.48452 21.36543 9.84615 21.36543 L9.84615 19.69291 Z M0 9.84646 L1.67251 9.84646 C1.67251 5.33206 5.33202 1.67251 9.84615 1.67251 L9.84615 0 L9.84615 -1.67251 C3.48452 -1.67251 -1.67251 3.48475 -1.67251 9.84646 L0 9.84646 Z M9.84615 0 L9.84615 1.67251 C11.34656 1.67251 12.74782 2.07527 13.95322 2.77748 L14.79512 1.33231 L15.63701 -0.11286 C13.93426 -1.1048 11.95396 -1.67251 9.84615 -1.67251 L9.84615 0 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"227:1227/227:1229/227:1230/227:1232"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.86704 2.14973 C0.07715 1.67088 -0.95137 1.92303 -1.43022 2.71292 C-1.90908 3.50281 -1.65693 4.53133 -0.86704 5.01018 L0 3.57996 L0.86704 2.14973 Z M3.58823 5.75523 L2.72119 7.18546 L3.65653 7.75249 L4.55095 7.12288 L3.58823 5.75523 Z M12.72686 1.36765 C13.48219 0.83595 13.66348 -0.20739 13.13178 -0.96272 C12.60009 -1.71805 11.55674 -1.89935 10.80141 -1.36765 L11.76414 0 L12.72686 1.36765 Z M0 3.57996 L-0.86704 5.01018 L2.72119 7.18546 L3.58823 5.75523 L4.45527 4.32501 L0.86704 2.14973 L0 3.57996 Z M3.58823 5.75523 L4.55095 7.12288 L12.72686 1.36765 L11.76414 0 L10.80141 -1.36765 L2.62551 4.38759 L3.58823 5.75523 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"227:1227/227:1233"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 36 L14.3841 39.65908 L16 40.37268 L17.6159 39.65908 L16 36 Z M32 15.94681 L28 15.94681 C28 20.70296 25.05971 24.70239 21.41389 27.79211 C19.64428 29.2918 17.85525 30.4471 16.50117 31.22826 C15.82858 31.61628 15.27479 31.9054 14.89981 32.09273 C14.71262 32.18625 14.57088 32.25396 14.48219 32.29553 C14.43787 32.3163 14.40689 32.3305 14.3902 32.33809 C14.38186 32.34188 14.3771 32.34402 14.37604 32.34449 C14.37551 32.34473 14.37591 32.34455 14.37725 32.34396 C14.37792 32.34366 14.37882 32.34325 14.37996 32.34275 C14.38053 32.3425 14.38157 32.34204 14.38185 32.34191 C14.38295 32.34143 14.3841 32.34092 16 36 C17.6159 39.65908 17.61717 39.65852 17.61851 39.65792 C17.61904 39.65769 17.62044 39.65707 17.6215 39.6566 C17.62361 39.65567 17.62597 39.65462 17.62858 39.65346 C17.63379 39.65114 17.63999 39.64838 17.64715 39.64517 C17.66147 39.63875 17.67966 39.63055 17.70159 39.62058 C17.74545 39.60064 17.80432 39.57357 17.87719 39.53942 C18.02287 39.47115 18.22488 39.37437 18.47519 39.24932 C18.97521 38.99951 19.67142 38.63515 20.49883 38.15782 C22.14475 37.20829 24.35572 35.78542 26.58611 33.89524 C30.94029 30.2052 36 24.17804 36 15.94681 L32 15.94681 Z M16 36 C17.6159 32.34092 17.61705 32.34143 17.61815 32.34191 C17.61843 32.34204 17.61947 32.3425 17.62004 32.34275 C17.62118 32.34325 17.62208 32.34366 17.62275 32.34396 C17.62409 32.34455 17.62449 32.34473 17.62396 32.34449 C17.6229 32.34402 17.61814 32.34188 17.60979 32.33809 C17.59311 32.3305 17.56213 32.3163 17.51781 32.29553 C17.42912 32.25396 17.28738 32.18625 17.10019 32.09273 C16.72521 31.9054 16.17142 31.61628 15.49883 31.22826 C14.14475 30.4471 12.35572 29.2918 10.58611 27.79211 C6.94029 24.70239 4 20.70296 4 15.94681 L0 15.94681 L-4 15.94681 C-4 24.17804 1.05971 30.2052 5.41389 33.89524 C7.64428 35.78542 9.85525 37.20829 11.50117 38.15782 C12.32858 38.63515 13.02479 38.99951 13.52481 39.24932 C13.77512 39.37437 13.97713 39.47115 14.12281 39.53942 C14.19568 39.57357 14.25455 39.60064 14.29841 39.62058 C14.32034 39.63055 14.33853 39.63875 14.35285 39.64517 C14.36001 39.64838 14.36621 39.65114 14.37142 39.65346 C14.37403 39.65462 14.37639 39.65567 14.3785 39.6566 C14.37956 39.65707 14.38096 39.65769 14.38149 39.65792 C14.38282 39.65852 14.3841 39.65908 16 36 Z M0 15.94681 L4 15.94681 C4 9.36132 9.36001 4 16 4 L16 0 L16 -4 C4.96687 -4 -4 4.91794 -4 15.94681 L0 15.94681 Z M16 0 L16 4 C22.63998 4 28 9.36132 28 15.94681 L32 15.94681 L36 15.94681 C36 4.91794 27.03313 -4 16 -4 L16 0 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1234": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1234"} data-name={"State=green, view=general, selected=selected, Hover=on"}>
  <span className={s.n17} data-layer={"227:1234/227:1235"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.53369 C32 28.18462 16 35.06738 16 35.06738 C16 35.06738 0 28.18462 0 15.53369 C0 6.95467 7.16344 0 16 0 C24.83656 0 32 6.95467 32 15.53369 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n28} data-layer={"227:1234/227:1236"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"227:1234/227:1236/227:1237"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"227:1234/227:1236/227:1237/227:1238"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.69716 9.53875 C20.69716 8.64392 19.97175 7.91851 19.07691 7.91851 C18.18208 7.91851 17.45667 8.64392 17.45667 9.53875 L19.07691 9.53875 L20.69716 9.53875 Z M13.51718 2.69068 C14.29039 3.14112 15.28234 2.87946 15.73277 2.10626 C16.18321 1.33306 15.92155 0.3411 15.14835 -0.10933 L14.33277 1.29068 L13.51718 2.69068 Z M19.07691 9.53875 L17.45667 9.53875 C17.45667 13.91207 13.91152 17.45726 9.53846 17.45726 L9.53846 19.07751 L9.53846 20.69776 C15.70129 20.69776 20.69716 15.70165 20.69716 9.53875 L19.07691 9.53875 Z M9.53846 19.07751 L9.53846 17.45726 C5.1654 17.45726 1.62025 13.91207 1.62025 9.53875 L0 9.53875 L-1.62025 9.53875 C-1.62025 15.70165 3.37563 20.69776 9.53846 20.69776 L9.53846 19.07751 Z M0 9.53875 L1.62025 9.53875 C1.62025 5.16543 5.1654 1.62025 9.53846 1.62025 L9.53846 0 L9.53846 -1.62025 C3.37563 -1.62025 -1.62025 3.37586 -1.62025 9.53875 L0 9.53875 Z M9.53846 0 L9.53846 1.62025 C10.99198 1.62025 12.34945 2.01041 13.51718 2.69068 L14.33277 1.29068 L15.14835 -0.10933 C13.49882 -1.07028 11.5804 -1.62025 9.53846 -1.62025 L9.53846 0 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n21} data-layer={"227:1234/227:1236/227:1237/227:1239"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.83994 2.08255 C0.07474 1.61867 -0.92164 1.86293 -1.38553 2.62814 C-1.84942 3.39335 -1.60515 4.38973 -0.83994 4.85361 L0 3.46808 L0.83994 2.08255 Z M3.4761 5.57538 L2.63615 6.96091 L3.54227 7.51022 L4.40874 6.90029 L3.4761 5.57538 Z M12.32914 1.32491 C13.06087 0.80983 13.2365 -0.20091 12.72142 -0.93264 C12.20633 -1.66437 11.19559 -1.83999 10.46387 -1.32491 L11.39651 0 L12.32914 1.32491 Z M0 3.46808 L-0.83994 4.85361 L2.63615 6.96091 L3.4761 5.57538 L4.31604 4.18985 L0.83994 2.08255 L0 3.46808 Z M3.4761 5.57538 L4.40874 6.90029 L12.32914 1.32491 L11.39651 0 L10.46387 -1.32491 L2.54346 4.25047 L3.4761 5.57538 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1234/227:1240"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 35.06738 L14.41935 38.74183 L16 39.42178 L17.58065 38.74183 L16 35.06738 Z M32 15.53369 L28 15.53369 C28 20.07727 25.1114 23.94029 21.45352 26.95992 C19.68497 28.41989 17.89588 29.54545 16.5404 30.30716 C15.86726 30.68544 15.31283 30.9674 14.93716 31.15022 C14.74962 31.24149 14.60754 31.30761 14.5185 31.34826 C14.474 31.36857 14.44285 31.38248 14.42598 31.38995 C14.41755 31.39368 14.41271 31.3958 14.41156 31.3963 C14.41098 31.39655 14.41134 31.3964 14.41263 31.39584 C14.41328 31.39556 14.41416 31.39517 14.41528 31.39469 C14.41584 31.39445 14.41686 31.39401 14.41714 31.39389 C14.41821 31.39343 14.41935 31.39294 16 35.06738 C17.58065 38.74183 17.58191 38.74129 17.58323 38.74072 C17.58375 38.74049 17.58513 38.73989 17.58618 38.73944 C17.58827 38.73854 17.59061 38.73753 17.5932 38.73641 C17.59837 38.73417 17.60452 38.73149 17.61163 38.72839 C17.62587 38.72218 17.64397 38.71423 17.66581 38.70456 C17.7095 38.68521 17.76818 38.65893 17.84088 38.62574 C17.98621 38.55939 18.18788 38.46528 18.43784 38.34364 C18.93717 38.10064 19.63274 37.74605 20.4596 37.28139 C22.10412 36.35725 24.31503 34.97144 26.54647 33.12935 C30.8886 29.54486 36 23.64104 36 15.53369 L32 15.53369 Z M16 35.06738 C17.58065 31.39294 17.58179 31.39343 17.58286 31.39389 C17.58314 31.39401 17.58416 31.39445 17.58472 31.39469 C17.58584 31.39517 17.58672 31.39556 17.58737 31.39584 C17.58866 31.3964 17.58901 31.39655 17.58844 31.3963 C17.58729 31.3958 17.58245 31.39368 17.57402 31.38995 C17.55715 31.38248 17.526 31.36857 17.4815 31.34826 C17.39246 31.30761 17.25038 31.24149 17.06284 31.15022 C16.68717 30.9674 16.13274 30.68544 15.4596 30.30716 C14.10412 29.54545 12.31503 28.41989 10.54648 26.95992 C6.8886 23.94029 4 20.07727 4 15.53369 L0 15.53369 L-4 15.53369 C-4 23.64104 1.1114 29.54486 5.45352 33.12935 C7.68497 34.97144 9.89588 36.35725 11.5404 37.28139 C12.36726 37.74605 13.06283 38.10064 13.56216 38.34364 C13.81212 38.46528 14.01379 38.55939 14.15912 38.62574 C14.23182 38.65893 14.2905 38.68521 14.33419 38.70456 C14.35603 38.71423 14.37413 38.72218 14.38837 38.72839 C14.39548 38.73149 14.40163 38.73417 14.4068 38.73641 C14.40939 38.73753 14.41173 38.73854 14.41382 38.73944 C14.41486 38.73989 14.41625 38.74049 14.41677 38.74072 C14.41809 38.74129 14.41935 38.74183 16 35.06738 Z M0 15.53369 L4 15.53369 C4 9.27451 9.26024 4 16 4 L16 0 L16 -4 C5.06665 -4 -4 4.63483 -4 15.53369 L0 15.53369 Z M16 0 L16 4 C22.73976 4 28 9.27451 28 15.53369 L32 15.53369 L36 15.53369 C36 4.63483 26.93335 -4 16 -4 L16 0 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1241": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1241"} data-name={"State=red, view=general, selected=default, Hover=off"}>
  <span className={s.n1} data-layer={"227:1241/227:1242"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"227:1241/227:1242/227:1243"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.35896 8.00027 C17.35896 7.24976 16.75055 6.64135 16.00004 6.64135 C15.24953 6.64135 14.64112 7.24976 14.64112 8.00027 L16.00004 8.00027 L17.35896 8.00027 Z M11.33703 2.25671 C11.98553 2.6345 12.81749 2.41504 13.19527 1.76655 C13.57306 1.11805 13.3536 0.28609 12.70511 -0.0917 L12.02107 1.08251 L11.33703 2.25671 Z M16.00004 8.00027 L14.64112 8.00027 C14.64112 11.66823 11.66776 14.64162 8.00002 14.64162 L8.00002 16.00054 L8.00002 17.35946 C13.16886 17.35946 17.35896 13.16917 17.35896 8.00027 L16.00004 8.00027 Z M8.00002 16.00054 L8.00002 14.64162 C4.33228 14.64162 1.35892 11.66823 1.35892 8.00027 L0 8.00027 L-1.35892 8.00027 C-1.35892 13.16917 2.83118 17.35946 8.00002 17.35946 L8.00002 16.00054 Z M0 8.00027 L1.35892 8.00027 C1.35892 4.33231 4.33228 1.35892 8.00002 1.35892 L8.00002 0 L8.00002 -1.35892 C2.83118 -1.35892 -1.35892 2.83137 -1.35892 8.00027 L0 8.00027 Z M8.00002 0 L8.00002 1.35892 C9.21911 1.35892 10.35764 1.68616 11.33703 2.25671 L12.02107 1.08251 L12.70511 -0.0917 C11.32162 -0.89765 9.71263 -1.35892 8.00002 -1.35892 L8.00002 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n3} data-layer={"227:1241/227:1242/227:1244"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.70447 1.74666 C0.06268 1.3576 -0.77299 1.56247 -1.16206 2.20425 C-1.55113 2.84604 -1.34626 3.68172 -0.70447 4.07079 L0 2.90873 L0.70447 1.74666 Z M2.91545 4.67614 L2.21098 5.8382 L2.97094 6.29892 L3.69766 5.78736 L2.91545 4.67614 Z M10.34061 1.11122 C10.95431 0.67921 11.10161 -0.16851 10.66961 -0.78222 C10.2376 -1.39592 9.38988 -1.54322 8.77618 -1.11122 L9.55839 0 L10.34061 1.11122 Z M0 2.90873 L-0.70447 4.07079 L2.21098 5.8382 L2.91545 4.67614 L3.61992 3.51408 L0.70447 1.74666 L0 2.90873 Z M2.91545 4.67614 L3.69766 5.78736 L10.34061 1.11122 L9.55839 0 L8.77618 -1.11122 L2.13323 3.56493 L2.91545 4.67614 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1245": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1245"} data-name={"State=green, view=general, selected=selected, Hover=off"}>
  <span className={s.n17} data-layer={"227:1245/227:1246"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.53369 C32 28.18462 16 35.06738 16 35.06738 C16 35.06738 0 28.18462 0 15.53369 C0 6.95467 7.16344 0 16 0 C24.83656 0 32 6.95467 32 15.53369 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n28} data-layer={"227:1245/227:1247"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"227:1245/227:1247/227:1248"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"227:1245/227:1247/227:1248/227:1249"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.69716 9.53875 C20.69716 8.64392 19.97175 7.91851 19.07691 7.91851 C18.18208 7.91851 17.45667 8.64392 17.45667 9.53875 L19.07691 9.53875 L20.69716 9.53875 Z M13.51718 2.69068 C14.29039 3.14112 15.28234 2.87946 15.73277 2.10626 C16.18321 1.33306 15.92155 0.3411 15.14835 -0.10933 L14.33277 1.29068 L13.51718 2.69068 Z M19.07691 9.53875 L17.45667 9.53875 C17.45667 13.91207 13.91152 17.45726 9.53846 17.45726 L9.53846 19.07751 L9.53846 20.69776 C15.70129 20.69776 20.69716 15.70165 20.69716 9.53875 L19.07691 9.53875 Z M9.53846 19.07751 L9.53846 17.45726 C5.1654 17.45726 1.62025 13.91207 1.62025 9.53875 L0 9.53875 L-1.62025 9.53875 C-1.62025 15.70165 3.37563 20.69776 9.53846 20.69776 L9.53846 19.07751 Z M0 9.53875 L1.62025 9.53875 C1.62025 5.16543 5.1654 1.62025 9.53846 1.62025 L9.53846 0 L9.53846 -1.62025 C3.37563 -1.62025 -1.62025 3.37586 -1.62025 9.53875 L0 9.53875 Z M9.53846 0 L9.53846 1.62025 C10.99198 1.62025 12.34945 2.01041 13.51718 2.69068 L14.33277 1.29068 L15.14835 -0.10933 C13.49882 -1.07028 11.5804 -1.62025 9.53846 -1.62025 L9.53846 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n21} data-layer={"227:1245/227:1247/227:1248/227:1250"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.83994 2.08255 C0.07474 1.61867 -0.92164 1.86293 -1.38553 2.62814 C-1.84942 3.39335 -1.60515 4.38973 -0.83994 4.85361 L0 3.46808 L0.83994 2.08255 Z M3.4761 5.57538 L2.63615 6.96091 L3.54227 7.51022 L4.40874 6.90029 L3.4761 5.57538 Z M12.32914 1.32491 C13.06087 0.80983 13.2365 -0.20091 12.72142 -0.93264 C12.20633 -1.66437 11.19559 -1.83999 10.46387 -1.32491 L11.39651 0 L12.32914 1.32491 Z M0 3.46808 L-0.83994 4.85361 L2.63615 6.96091 L3.4761 5.57538 L4.31604 4.18985 L0.83994 2.08255 L0 3.46808 Z M3.4761 5.57538 L4.40874 6.90029 L12.32914 1.32491 L11.39651 0 L10.46387 -1.32491 L2.54346 4.25047 L3.4761 5.57538 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1245/227:1251"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 35.06738 L15.20968 36.90461 L16 37.24458 L16.79032 36.90461 L16 35.06738 Z M32 15.53369 L30 15.53369 C30 20.96821 26.5557 25.34143 22.72676 28.50228 C20.84249 30.05778 18.94794 31.2484 17.5202 32.05072 C16.80863 32.45059 16.21892 32.75071 15.81233 32.94857 C15.60919 33.04744 15.45221 33.12055 15.34909 33.16763 C15.29755 33.19116 15.25951 33.20816 15.23594 33.2186 C15.22416 33.22382 15.216 33.22739 15.21158 33.22932 C15.20937 33.23029 15.2081 33.23084 15.20777 33.23098 C15.20761 33.23105 15.20769 33.23102 15.20801 33.23088 C15.20816 33.23081 15.20858 33.23063 15.20866 33.2306 C15.20914 33.23039 15.20968 33.23016 16 35.06738 C16.79032 36.90461 16.79098 36.90432 16.7917 36.90401 C16.79203 36.90387 16.79281 36.90353 16.79346 36.90326 C16.79474 36.9027 16.79628 36.90203 16.79806 36.90127 C16.80161 36.89973 16.80614 36.89776 16.81161 36.89537 C16.82258 36.89058 16.83736 36.88409 16.85586 36.8759 C16.89283 36.85953 16.94464 36.83634 17.01028 36.80637 C17.14154 36.74644 17.32831 36.65933 17.56267 36.54528 C18.03108 36.31733 18.69137 35.9809 19.4798 35.53784 C21.05206 34.6543 23.15751 33.33355 25.27324 31.58699 C29.4443 28.14372 34 22.7501 34 15.53369 L32 15.53369 Z M16 35.06738 C16.79032 33.23016 16.79086 33.23039 16.79134 33.2306 C16.79142 33.23063 16.79184 33.23081 16.79199 33.23088 C16.79231 33.23102 16.79239 33.23105 16.79223 33.23098 C16.7919 33.23084 16.79063 33.23029 16.78842 33.22932 C16.784 33.22739 16.77584 33.22382 16.76406 33.2186 C16.74049 33.20816 16.70245 33.19116 16.65091 33.16763 C16.54779 33.12055 16.39081 33.04744 16.18767 32.94857 C15.78108 32.75071 15.19137 32.45059 14.4798 32.05072 C13.05206 31.2484 11.15751 30.05778 9.27324 28.50228 C5.4443 25.34143 2 20.96821 2 15.53369 L0 15.53369 L-2 15.53369 C-2 22.7501 2.5557 28.14372 6.72676 31.58699 C8.84249 33.33355 10.94794 34.6543 12.5202 35.53784 C13.30863 35.9809 13.96892 36.31733 14.43733 36.54528 C14.67169 36.65933 14.85846 36.74644 14.98972 36.80637 C15.05536 36.83634 15.10717 36.85953 15.14414 36.8759 C15.16263 36.88409 15.17742 36.89058 15.18838 36.89537 C15.19387 36.89776 15.19839 36.89973 15.20194 36.90127 C15.20372 36.90203 15.20526 36.9027 15.20654 36.90326 C15.20719 36.90353 15.20797 36.90387 15.20829 36.90401 C15.20902 36.90432 15.20968 36.90461 16 35.06738 Z M0 15.53369 L2 15.53369 C2 8.11459 8.21184 2 16 2 L16 0 L16 -2 C6.11505 -2 -2 5.79475 -2 15.53369 L0 15.53369 Z M16 0 L16 2 C23.78816 2 30 8.11459 30 15.53369 L32 15.53369 L34 15.53369 C34 5.79475 25.88495 -2 16 -2 L16 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1252": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1252"} data-name={"State=green, view=general, selected=unselected, Hover=off"}>
  <span className={s.n6} data-layer={"227:1252/227:1253"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"227:1252/227:1253/227:1254"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.3471 4.30782 C9.3471 3.9037 9.0195 3.5761 8.61538 3.5761 C8.21126 3.5761 7.88366 3.9037 7.88366 4.30782 L8.61538 4.30782 L9.3471 4.30782 Z M6.10453 1.21515 C6.45372 1.41857 6.9017 1.3004 7.10512 0.95121 C7.30855 0.60203 7.19038 0.15405 6.84119 -0.04938 L6.47286 0.58289 L6.10453 1.21515 Z M8.61538 4.30782 L7.88366 4.30782 C7.88366 6.28287 6.28262 7.88392 4.30769 7.88392 L4.30769 8.61565 L4.30769 9.34737 C7.0909 9.34737 9.3471 7.09107 9.3471 4.30782 L8.61538 4.30782 Z M4.30769 8.61565 L4.30769 7.88392 C2.33276 7.88392 0.73172 6.28287 0.73172 4.30782 L0 4.30782 L-0.73172 4.30782 C-0.73172 7.09107 1.52448 9.34737 4.30769 9.34737 L4.30769 8.61565 Z M0 4.30782 L0.73172 4.30782 C0.73172 2.33278 2.33276 0.73172 4.30769 0.73172 L4.30769 0 L4.30769 -0.73172 C1.52448 -0.73172 -0.73172 1.52458 -0.73172 4.30782 L0 4.30782 Z M4.30769 0 L4.30769 0.73172 C4.96412 0.73172 5.57717 0.90793 6.10453 1.21515 L6.47286 0.58289 L6.84119 -0.04938 C6.09624 -0.48335 5.22986 -0.73172 4.30769 -0.73172 L4.30769 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:1252/227:1253/227:1255"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.37933 0.94051 C0.03375 0.73101 -0.41623 0.84133 -0.62572 1.1869 C-0.83522 1.53248 -0.72491 1.98246 -0.37933 2.19196 L0 1.56623 L0.37933 0.94051 Z M1.56985 2.51791 L1.19052 3.14364 L1.59973 3.39171 L1.99104 3.11626 L1.56985 2.51791 Z M5.568 0.59835 C5.89846 0.36573 5.97777 -0.09073 5.74515 -0.42119 C5.51254 -0.75165 5.05608 -0.83096 4.72562 -0.59835 L5.14681 0 L5.568 0.59835 Z M0 1.56623 L-0.37933 2.19196 L1.19052 3.14364 L1.56985 2.51791 L1.94918 1.89219 L0.37933 0.94051 L0 1.56623 Z M1.56985 2.51791 L1.99104 3.11626 L5.568 0.59835 L5.14681 0 L4.72562 -0.59835 L1.14866 1.91957 L1.56985 2.51791 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1256": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1256"} data-name={"State=red, view=general, selected=unselected, Hover=off"}>
  <span className={s.n6} data-layer={"227:1256/227:1257"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"227:1256/227:1257/227:1258"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.3471 4.30782 C9.3471 3.9037 9.0195 3.5761 8.61538 3.5761 C8.21126 3.5761 7.88366 3.9037 7.88366 4.30782 L8.61538 4.30782 L9.3471 4.30782 Z M6.10453 1.21515 C6.45372 1.41857 6.9017 1.3004 7.10512 0.95121 C7.30855 0.60203 7.19038 0.15405 6.84119 -0.04938 L6.47286 0.58289 L6.10453 1.21515 Z M8.61538 4.30782 L7.88366 4.30782 C7.88366 6.28287 6.28262 7.88392 4.30769 7.88392 L4.30769 8.61565 L4.30769 9.34737 C7.0909 9.34737 9.3471 7.09107 9.3471 4.30782 L8.61538 4.30782 Z M4.30769 8.61565 L4.30769 7.88392 C2.33276 7.88392 0.73172 6.28287 0.73172 4.30782 L0 4.30782 L-0.73172 4.30782 C-0.73172 7.09107 1.52448 9.34737 4.30769 9.34737 L4.30769 8.61565 Z M0 4.30782 L0.73172 4.30782 C0.73172 2.33278 2.33276 0.73172 4.30769 0.73172 L4.30769 0 L4.30769 -0.73172 C1.52448 -0.73172 -0.73172 1.52458 -0.73172 4.30782 L0 4.30782 Z M4.30769 0 L4.30769 0.73172 C4.96412 0.73172 5.57717 0.90793 6.10453 1.21515 L6.47286 0.58289 L6.84119 -0.04938 C6.09624 -0.48335 5.22986 -0.73172 4.30769 -0.73172 L4.30769 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:1256/227:1257/227:1259"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.37933 0.94051 C0.03375 0.73101 -0.41623 0.84133 -0.62572 1.1869 C-0.83522 1.53248 -0.72491 1.98246 -0.37933 2.19196 L0 1.56623 L0.37933 0.94051 Z M1.56985 2.51791 L1.19052 3.14364 L1.59973 3.39171 L1.99104 3.11626 L1.56985 2.51791 Z M5.568 0.59835 C5.89846 0.36573 5.97777 -0.09073 5.74515 -0.42119 C5.51254 -0.75165 5.05608 -0.83096 4.72562 -0.59835 L5.14681 0 L5.568 0.59835 Z M0 1.56623 L-0.37933 2.19196 L1.19052 3.14364 L1.56985 2.51791 L1.94918 1.89219 L0.37933 0.94051 L0 1.56623 Z M1.56985 2.51791 L1.99104 3.11626 L5.568 0.59835 L5.14681 0 L4.72562 -0.59835 L1.14866 1.91957 L1.56985 2.51791 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1260": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1260"} data-name={"State=red, view=general, selected=selected, Hover=off"}>
  <span className={s.n17} data-layer={"227:1260/227:1261"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.53369 C32 28.18462 16 35.06738 16 35.06738 C16 35.06738 0 28.18462 0 15.53369 C0 6.95467 7.16344 0 16 0 C24.83656 0 32 6.95467 32 15.53369 Z"} fill={"rgba(255,43,43,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n18} data-layer={"227:1260/227:1262"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"227:1260/227:1262/227:1263"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"227:1260/227:1262/227:1263/227:1264"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.69716 9.53875 C20.69716 8.64392 19.97175 7.91851 19.07691 7.91851 C18.18208 7.91851 17.45667 8.64392 17.45667 9.53875 L19.07691 9.53875 L20.69716 9.53875 Z M13.51718 2.69068 C14.29039 3.14112 15.28234 2.87946 15.73277 2.10626 C16.18321 1.33306 15.92155 0.3411 15.14835 -0.10933 L14.33277 1.29068 L13.51718 2.69068 Z M19.07691 9.53875 L17.45667 9.53875 C17.45667 13.91207 13.91152 17.45726 9.53846 17.45726 L9.53846 19.07751 L9.53846 20.69776 C15.70129 20.69776 20.69716 15.70165 20.69716 9.53875 L19.07691 9.53875 Z M9.53846 19.07751 L9.53846 17.45726 C5.1654 17.45726 1.62025 13.91207 1.62025 9.53875 L0 9.53875 L-1.62025 9.53875 C-1.62025 15.70165 3.37563 20.69776 9.53846 20.69776 L9.53846 19.07751 Z M0 9.53875 L1.62025 9.53875 C1.62025 5.16543 5.1654 1.62025 9.53846 1.62025 L9.53846 0 L9.53846 -1.62025 C3.37563 -1.62025 -1.62025 3.37586 -1.62025 9.53875 L0 9.53875 Z M9.53846 0 L9.53846 1.62025 C10.99198 1.62025 12.34945 2.01041 13.51718 2.69068 L14.33277 1.29068 L15.14835 -0.10933 C13.49882 -1.07028 11.5804 -1.62025 9.53846 -1.62025 L9.53846 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n21} data-layer={"227:1260/227:1262/227:1263/227:1265"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.83994 2.08255 C0.07474 1.61867 -0.92164 1.86293 -1.38553 2.62814 C-1.84942 3.39335 -1.60515 4.38973 -0.83994 4.85361 L0 3.46808 L0.83994 2.08255 Z M3.4761 5.57538 L2.63615 6.96091 L3.54227 7.51022 L4.40874 6.90029 L3.4761 5.57538 Z M12.32914 1.32491 C13.06087 0.80983 13.2365 -0.20091 12.72142 -0.93264 C12.20633 -1.66437 11.19559 -1.83999 10.46387 -1.32491 L11.39651 0 L12.32914 1.32491 Z M0 3.46808 L-0.83994 4.85361 L2.63615 6.96091 L3.4761 5.57538 L4.31604 4.18985 L0.83994 2.08255 L0 3.46808 Z M3.4761 5.57538 L4.40874 6.90029 L12.32914 1.32491 L11.39651 0 L10.46387 -1.32491 L2.54346 4.25047 L3.4761 5.57538 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"227:1260/227:1266"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 35.06738 L15.20968 36.90461 L16 37.24458 L16.79032 36.90461 L16 35.06738 Z M32 15.53369 L30 15.53369 C30 20.96821 26.5557 25.34143 22.72676 28.50228 C20.84249 30.05778 18.94794 31.2484 17.5202 32.05072 C16.80863 32.45059 16.21892 32.75071 15.81233 32.94857 C15.60919 33.04744 15.45221 33.12055 15.34909 33.16763 C15.29755 33.19116 15.25951 33.20816 15.23594 33.2186 C15.22416 33.22382 15.216 33.22739 15.21158 33.22932 C15.20937 33.23029 15.2081 33.23084 15.20777 33.23098 C15.20761 33.23105 15.20769 33.23102 15.20801 33.23088 C15.20816 33.23081 15.20858 33.23063 15.20866 33.2306 C15.20914 33.23039 15.20968 33.23016 16 35.06738 C16.79032 36.90461 16.79098 36.90432 16.7917 36.90401 C16.79203 36.90387 16.79281 36.90353 16.79346 36.90326 C16.79474 36.9027 16.79628 36.90203 16.79806 36.90127 C16.80161 36.89973 16.80614 36.89776 16.81161 36.89537 C16.82258 36.89058 16.83736 36.88409 16.85586 36.8759 C16.89283 36.85953 16.94464 36.83634 17.01028 36.80637 C17.14154 36.74644 17.32831 36.65933 17.56267 36.54528 C18.03108 36.31733 18.69137 35.9809 19.4798 35.53784 C21.05206 34.6543 23.15751 33.33355 25.27324 31.58699 C29.4443 28.14372 34 22.7501 34 15.53369 L32 15.53369 Z M16 35.06738 C16.79032 33.23016 16.79086 33.23039 16.79134 33.2306 C16.79142 33.23063 16.79184 33.23081 16.79199 33.23088 C16.79231 33.23102 16.79239 33.23105 16.79223 33.23098 C16.7919 33.23084 16.79063 33.23029 16.78842 33.22932 C16.784 33.22739 16.77584 33.22382 16.76406 33.2186 C16.74049 33.20816 16.70245 33.19116 16.65091 33.16763 C16.54779 33.12055 16.39081 33.04744 16.18767 32.94857 C15.78108 32.75071 15.19137 32.45059 14.4798 32.05072 C13.05206 31.2484 11.15751 30.05778 9.27324 28.50228 C5.4443 25.34143 2 20.96821 2 15.53369 L0 15.53369 L-2 15.53369 C-2 22.7501 2.5557 28.14372 6.72676 31.58699 C8.84249 33.33355 10.94794 34.6543 12.5202 35.53784 C13.30863 35.9809 13.96892 36.31733 14.43733 36.54528 C14.67169 36.65933 14.85846 36.74644 14.98972 36.80637 C15.05536 36.83634 15.10717 36.85953 15.14414 36.8759 C15.16263 36.88409 15.17742 36.89058 15.18838 36.89537 C15.19387 36.89776 15.19839 36.89973 15.20194 36.90127 C15.20372 36.90203 15.20526 36.9027 15.20654 36.90326 C15.20719 36.90353 15.20797 36.90387 15.20829 36.90401 C15.20902 36.90432 15.20968 36.90461 16 35.06738 Z M0 15.53369 L2 15.53369 C2 8.11459 8.21184 2 16 2 L16 0 L16 -2 C6.11505 -2 -2 5.79475 -2 15.53369 L0 15.53369 Z M16 0 L16 2 C23.78816 2 30 8.11459 30 15.53369 L32 15.53369 L34 15.53369 C34 5.79475 25.88495 -2 16 -2 L16 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "227:1267": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1267"} data-name={"State=red, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n10} data-layer={"227:1267/227:1268"} data-name={"fill"}>
    <span className={s.n11} data-layer={"227:1267/227:1268/227:1269"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"227:1267/227:1268/227:1269/227:1270"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.67946 4.00012 C8.67946 3.62487 8.37525 3.32067 8 3.32067 C7.62474 3.32067 7.32054 3.62487 7.32054 4.00012 L8 4.00012 L8.67946 4.00012 Z M5.6685 1.12835 C5.99274 1.31724 6.40873 1.20752 6.59762 0.88327 C6.78651 0.55902 6.67678 0.14304 6.35254 -0.04585 L6.01052 0.54125 L5.6685 1.12835 Z M8 4.00012 L7.32054 4.00012 C7.32054 5.8341 5.83386 7.32079 4 7.32079 L4 8.00025 L4 8.67971 C6.58441 8.67971 8.67946 6.58457 8.67946 4.00012 L8 4.00012 Z M4 8.00025 L4 7.32079 C2.16613 7.32079 0.67946 5.8341 0.67946 4.00012 L0 4.00012 L-0.67946 4.00012 C-0.67946 6.58457 1.41559 8.67971 4 8.67971 L4 8.00025 Z M0 4.00012 L0.67946 4.00012 C0.67946 2.16615 2.16613 0.67946 4 0.67946 L4 0 L4 -0.67946 C1.41559 -0.67946 -0.67946 1.41568 -0.67946 4.00012 L0 4.00012 Z M4 0 L4 0.67946 C4.60954 0.67946 5.1788 0.84308 5.6685 1.12835 L6.01052 0.54125 L6.35254 -0.04585 C5.6608 -0.44883 4.8563 -0.67946 4 -0.67946 L4 0 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"227:1267/227:1268/227:1269/227:1271"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.35223 0.87333 C0.03134 0.6788 -0.3865 0.78123 -0.58103 1.10212 C-0.77556 1.42302 -0.67313 1.84085 -0.35223 2.03539 L0 1.45436 L0.35223 0.87333 Z M1.45772 2.33806 L1.10548 2.91909 L1.48547 3.14945 L1.84883 2.89367 L1.45772 2.33806 Z M5.17029 0.55561 C5.47714 0.33961 5.55079 -0.08425 5.33479 -0.39111 C5.11879 -0.69796 4.69493 -0.77161 4.38807 -0.55561 L4.77918 0 L5.17029 0.55561 Z M0 1.45436 L-0.35223 2.03539 L1.10548 2.91909 L1.45772 2.33806 L1.80995 1.75704 L0.35223 0.87333 L0 1.45436 Z M1.45772 2.33806 L1.84883 2.89367 L5.17029 0.55561 L4.77918 0 L4.38807 -0.55561 L1.06661 1.78246 L1.45772 2.33806 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:1272": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1272"} data-name={"State=red, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n23} data-layer={"227:1272/227:1273"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.94681 C32 28.93419 16 36 16 36 C16 36 0 28.93419 0 15.94681 C0 7.13963 7.16344 0 16 0 C24.83656 0 32 7.13963 32 15.94681 Z"} fill={"rgba(255,43,43,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n33} data-layer={"227:1272/227:1274"} data-name={"fill"}>
    <span className={s.n25} data-layer={"227:1272/227:1274/227:1275"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"227:1272/227:1274/227:1275/227:1276"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M21.36481 9.84646 C21.36481 8.92275 20.616 8.17394 19.6923 8.17394 C18.76859 8.17394 18.01978 8.92275 18.01978 9.84646 L19.6923 9.84646 L21.36481 9.84646 Z M13.95322 2.77748 C14.75137 3.24245 15.77532 2.97235 16.24028 2.1742 C16.70525 1.37606 16.43515 0.35211 15.63701 -0.11286 L14.79512 1.33231 L13.95322 2.77748 Z M19.6923 9.84646 L18.01978 9.84646 C18.01978 14.36085 14.36027 18.0204 9.84615 18.0204 L9.84615 19.69291 L9.84615 21.36543 C16.20778 21.36543 21.36481 16.20816 21.36481 9.84646 L19.6923 9.84646 Z M9.84615 19.69291 L9.84615 18.0204 C5.33202 18.0204 1.67251 14.36085 1.67251 9.84646 L0 9.84646 L-1.67251 9.84646 C-1.67251 16.20816 3.48452 21.36543 9.84615 21.36543 L9.84615 19.69291 Z M0 9.84646 L1.67251 9.84646 C1.67251 5.33206 5.33202 1.67251 9.84615 1.67251 L9.84615 0 L9.84615 -1.67251 C3.48452 -1.67251 -1.67251 3.48475 -1.67251 9.84646 L0 9.84646 Z M9.84615 0 L9.84615 1.67251 C11.34656 1.67251 12.74782 2.07527 13.95322 2.77748 L14.79512 1.33231 L15.63701 -0.11286 C13.93426 -1.1048 11.95396 -1.67251 9.84615 -1.67251 L9.84615 0 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"227:1272/227:1274/227:1275/227:1277"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.86704 2.14973 C0.07715 1.67088 -0.95137 1.92303 -1.43022 2.71292 C-1.90908 3.50281 -1.65693 4.53133 -0.86704 5.01018 L0 3.57996 L0.86704 2.14973 Z M3.58823 5.75523 L2.72119 7.18546 L3.65653 7.75249 L4.55095 7.12288 L3.58823 5.75523 Z M12.72686 1.36765 C13.48219 0.83595 13.66348 -0.20739 13.13178 -0.96272 C12.60009 -1.71805 11.55674 -1.89935 10.80141 -1.36765 L11.76414 0 L12.72686 1.36765 Z M0 3.57996 L-0.86704 5.01018 L2.72119 7.18546 L3.58823 5.75523 L4.45527 4.32501 L0.86704 2.14973 L0 3.57996 Z M3.58823 5.75523 L4.55095 7.12288 L12.72686 1.36765 L11.76414 0 L10.80141 -1.36765 L2.62551 4.38759 L3.58823 5.75523 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"227:1272/227:1278"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 36 L15.19205 37.82954 L16 38.18634 L16.80795 37.82954 L16 36 Z M32 15.94681 L30 15.94681 C30 21.57173 26.52985 26.07809 22.70695 29.31789 C20.82214 30.91521 18.92762 32.13739 17.50059 32.96065 C16.78929 33.37099 16.1999 33.67892 15.79366 33.88188 C15.59068 33.98328 15.43388 34.05826 15.33094 34.1065 C15.27948 34.13062 15.24153 34.14803 15.21805 34.15871 C15.20631 34.16405 15.19819 34.1677 15.19382 34.16966 C15.19163 34.17064 15.19038 34.1712 15.19008 34.17133 C15.18993 34.1714 15.19002 34.17136 15.19035 34.17121 C15.19051 34.17114 15.19094 34.17095 15.19102 34.17092 C15.1915 34.1707 15.19205 34.17046 16 36 C16.80795 37.82954 16.80862 37.82925 16.80935 37.82892 C16.80967 37.82878 16.81046 37.82843 16.81111 37.82814 C16.81241 37.82756 16.81396 37.82688 16.81575 37.82608 C16.81932 37.82449 16.82387 37.82246 16.82937 37.82 C16.84038 37.81507 16.85521 37.80838 16.87374 37.79996 C16.91081 37.7831 16.9627 37.75926 17.02844 37.72845 C17.15987 37.66685 17.34682 37.57734 17.58134 37.46017 C18.0501 37.22598 18.71071 36.88043 19.49941 36.42543 C21.07238 35.51799 23.17786 34.16201 25.29305 32.36945 C29.47015 28.8295 34 23.30927 34 15.94681 L32 15.94681 Z M16 36 C16.80795 34.17046 16.8085 34.1707 16.80898 34.17092 C16.80906 34.17095 16.80949 34.17114 16.80965 34.17121 C16.80998 34.17136 16.81007 34.1714 16.80992 34.17133 C16.80962 34.1712 16.80837 34.17064 16.80618 34.16966 C16.80181 34.1677 16.79369 34.16405 16.78195 34.15871 C16.75847 34.14803 16.72052 34.13062 16.66906 34.1065 C16.56612 34.05826 16.40932 33.98328 16.20634 33.88188 C15.8001 33.67892 15.21071 33.37099 14.49941 32.96065 C13.07238 32.13739 11.17786 30.91521 9.29305 29.31789 C5.47015 26.07809 2 21.57173 2 15.94681 L0 15.94681 L-2 15.94681 C-2 23.30927 2.52985 28.8295 6.70695 32.36945 C8.82214 34.16201 10.92762 35.51799 12.50059 36.42543 C13.28929 36.88043 13.9499 37.22598 14.41866 37.46017 C14.65318 37.57734 14.84013 37.66685 14.97156 37.72845 C15.0373 37.75926 15.08919 37.7831 15.12625 37.79996 C15.14479 37.80838 15.15962 37.81507 15.17063 37.82 C15.17613 37.82246 15.18068 37.82449 15.18425 37.82608 C15.18604 37.82688 15.18758 37.82756 15.18889 37.82814 C15.18954 37.82843 15.19033 37.82878 15.19065 37.82892 C15.19138 37.82925 15.19205 37.82954 16 36 Z M0 15.94681 L2 15.94681 C2 8.25047 8.26173 2 16 2 L16 0 L16 -2 C6.06516 -2 -2 6.02879 -2 15.94681 L0 15.94681 Z M16 0 L16 2 C23.73827 2 30 8.25047 30 15.94681 L32 15.94681 L34 15.94681 C34 6.02879 25.93484 -2 16 -2 L16 0 Z"} fill={"rgba(255,43,43,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:3209": return (<Root {...rootAttributes} className={[s.n34,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3209"} data-name={"State=TB, view=general, selected=default, Hover=off"}>
  <span className={s.n1} data-layer={"236:3209/236:3210"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"236:3209/236:3210/236:3211"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n3} data-layer={"236:3209/236:3210/236:3212"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3213": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3213"} data-name={"State=TB, view=general, selected=default, Hover=on"}>
  <span className={s.n1} data-layer={"236:3213/236:3214"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"236:3213/236:3214/236:3215"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n3} data-layer={"236:3213/236:3214/236:3216"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3217": return (<Root {...rootAttributes} className={[s.n36,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3217"} data-name={"State=TB, view=general, selected=unselected, Hover=off"}>
  <span className={s.n6} data-layer={"236:3217/236:3218"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"236:3217/236:3218/236:3219"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.61538 4.30782 C8.61538 6.68697 6.68676 8.61565 4.30769 8.61565 C1.92862 8.61565 0 6.68697 0 4.30782 C0 1.92868 1.92862 0 4.30769 0 C5.09699 0 5.83671 0.212289 6.47286 0.582886"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n8} data-layer={"236:3217/236:3218/236:3220"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.56623 L1.56985 2.51791 L5.14681 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3221": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3221"} data-name={"State=TB, view=general, selected=unselected, Hover=on"}>
  <span className={s.n6} data-layer={"236:3221/236:3222"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"236:3221/236:3222/236:3223"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.61538 4.30782 C8.61538 6.68697 6.68676 8.61565 4.30769 8.61565 C1.92862 8.61565 0 6.68697 0 4.30782 C0 1.92868 1.92862 0 4.30769 0 C5.09699 0 5.83671 0.212289 6.47286 0.582886"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n8} data-layer={"236:3221/236:3222/236:3224"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.56623 L1.56985 2.51791 L5.14681 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3225": return (<Root {...rootAttributes} className={[s.n38,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3225"} data-name={"State=GOSB, view=general, selected=default, Hover=off"}>
  <span className={s.n1} data-layer={"236:3225/236:3226"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"236:3225/236:3226/236:3227"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n3} data-layer={"236:3225/236:3226/236:3228"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3229": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3229"} data-name={"State=GOSB, view=general, selected=default, Hover=on"}>
  <span className={s.n1} data-layer={"236:3229/236:3230"} data-name={"Group 6913"}>
    <span className={s.n2} data-layer={"236:3229/236:3230/236:3231"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n3} data-layer={"236:3229/236:3230/236:3232"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n40} data-layer={"236:3229/236:3233"} data-name={"Ellipse 3206"}></span>
</Root>);
case "236:3234": return (<Root {...rootAttributes} className={[s.n41,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3234"} data-name={"State=GOSB, view=general, selected=unselected, Hover=off"}>
  <span className={s.n6} data-layer={"236:3234/236:3235"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"236:3234/236:3235/236:3236"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.61538 4.30782 C8.61538 6.68697 6.68676 8.61565 4.30769 8.61565 C1.92862 8.61565 0 6.68697 0 4.30782 C0 1.92868 1.92862 0 4.30769 0 C5.09699 0 5.83671 0.212289 6.47286 0.582886"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n8} data-layer={"236:3234/236:3235/236:3237"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.56623 L1.56985 2.51791 L5.14681 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:3238": return (<Root {...rootAttributes} className={[s.n42,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3238"} data-name={"State=GOSB, view=general, selected=unselected, Hover=on"}>
  <span className={s.n43} data-layer={"236:3238/236:3239"} data-name={"Group 6913"}>
    <span className={s.n7} data-layer={"236:3238/236:3239/236:3240"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 8.61538 8.61565" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.61538 4.30782 C8.61538 6.68697 6.68676 8.61565 4.30769 8.61565 C1.92862 8.61565 0 6.68697 0 4.30782 C0 1.92868 1.92862 0 4.30769 0 C5.09699 0 5.83671 0.212289 6.47286 0.582886"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n8} data-layer={"236:3238/236:3239/236:3241"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 5.14681 2.51791" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.56623 L1.56985 2.51791 L5.14681 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.4634482860565186} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n44} data-layer={"236:3238/236:3242"} data-name={"Ellipse 3206"}></span>
</Root>);
case "236:3243": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3243"} data-name={"State=green, view=for CS, selected=default, Hover=off"}>
  <span className={s.n46} data-layer={"236:3243/236:3244"} data-name={"Frame 633164"}>
    <span className={s.n47} data-layer={"236:3243/236:3244/236:3245"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3243/236:3244/236:3245/236:3246"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3243/236:3244/236:3245/236:3247"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3248": return (<Root {...rootAttributes} className={[s.n48,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3248"} data-name={"State=green, view=for CS, selected=default, Hover=on"}>
  <span className={s.n49} data-layer={"236:3248/236:3249"} data-name={"Frame 633164"}>
    <span className={s.n47} data-layer={"236:3248/236:3249/236:3250"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3248/236:3249/236:3250/236:3251"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3248/236:3249/236:3250/236:3252"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3253": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3253"} data-name={"State=green, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n10} data-layer={"236:3253/236:3254"} data-name={"Frame 633164"}>
    <span className={s.n11} data-layer={"236:3253/236:3254/236:3255"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3253/236:3254/236:3255/236:3256"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3253/236:3254/236:3255/236:3257"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3258": return (<Root {...rootAttributes} className={[s.n51,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3258"} data-name={"State=green, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n10} data-layer={"236:3258/236:3259"} data-name={"Frame 633164"}>
    <span className={s.n11} data-layer={"236:3258/236:3259/236:3260"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3258/236:3259/236:3260/236:3261"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3258/236:3259/236:3260/236:3262"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3263": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3263"} data-name={"State=GOSB, view=for CS, selected=default, Hover=off"}>
  <span className={s.n53} data-layer={"236:3263/236:3264"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3263/236:3264/236:3265"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3263/236:3264/236:3265/236:3266"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3263/236:3264/236:3265/236:3267"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3268": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3268"} data-name={"State=GOSB, view=for CS, selected=default, Hover=on"}>
  <span className={s.n55} data-layer={"236:3268/236:3269"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3268/236:3269/236:3270"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3268/236:3269/236:3270/236:3271"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3268/236:3269/236:3270/236:3272"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3273": return (<Root {...rootAttributes} className={[s.n56,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3273"} data-name={"State=GOSB, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n57} data-layer={"236:3273/236:3274"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3273/236:3274/236:3275"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3273/236:3274/236:3275/236:3276"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3273/236:3274/236:3275/236:3277"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3278": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3278"} data-name={"State=GOSB, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n57} data-layer={"236:3278/236:3279"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3278/236:3279/236:3280"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3278/236:3279/236:3280/236:3281"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3278/236:3279/236:3280/236:3282"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3283": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3283"} data-name={"State=purpur, view=for CS, selected=default, Hover=off"}>
  <span className={s.n46} data-layer={"236:3283/236:3284"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3283/236:3284/236:3285"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3283/236:3284/236:3285/236:3286"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3283/236:3284/236:3285/236:3287"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3288": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3288"} data-name={"State=purpur, view=for CS, selected=default, Hover=on"}>
  <span className={s.n61} data-layer={"236:3288/236:3289"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3288/236:3289/236:3290"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3288/236:3289/236:3290/236:3291"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3288/236:3289/236:3290/236:3292"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3293": return (<Root {...rootAttributes} className={[s.n62,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3293"} data-name={"State=purpur, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n10} data-layer={"236:3293/236:3294"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3293/236:3294/236:3295"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3293/236:3294/236:3295/236:3296"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3293/236:3294/236:3295/236:3297"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3298": return (<Root {...rootAttributes} className={[s.n63,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3298"} data-name={"State=purpur, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n10} data-layer={"236:3298/236:3299"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3298/236:3299/236:3300"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3298/236:3299/236:3300/236:3301"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3298/236:3299/236:3300/236:3302"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3303": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3303"} data-name={"State=TB, view=for CS, selected=default, Hover=off"}>
  <span className={s.n64} data-layer={"236:3303/236:3304"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3303/236:3304/236:3305"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3303/236:3304/236:3305/236:3306"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3303/236:3304/236:3305/236:3307"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3308": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3308"} data-name={"State=TB, view=for CS, selected=default, Hover=on"}>
  <span className={s.n64} data-layer={"236:3308/236:3309"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3308/236:3309/236:3310"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3308/236:3309/236:3310/236:3311"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3308/236:3309/236:3310/236:3312"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3313": return (<Root {...rootAttributes} className={[s.n56,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3313"} data-name={"State=TB, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n65} data-layer={"236:3313/236:3314"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3313/236:3314/236:3315"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3313/236:3314/236:3315/236:3316"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3313/236:3314/236:3315/236:3317"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3318": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3318"} data-name={"State=TB, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n65} data-layer={"236:3318/236:3319"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3318/236:3319/236:3320"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3318/236:3319/236:3320/236:3321"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3318/236:3319/236:3320/236:3322"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3323": return (<Root {...rootAttributes} className={[s.n66,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3323"} data-name={"State=red, view=for CS, selected=default, Hover=off"}>
  <span className={s.n46} data-layer={"236:3323/236:3324"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3323/236:3324/236:3325"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3323/236:3324/236:3325/236:3326"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3323/236:3324/236:3325/236:3327"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3328": return (<Root {...rootAttributes} className={[s.n67,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3328"} data-name={"State=red, view=for CS, selected=default, Hover=on"}>
  <span className={s.n68} data-layer={"236:3328/236:3329"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3328/236:3329/236:3330"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3328/236:3329/236:3330/236:3331"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3328/236:3329/236:3330/236:3332"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3333": return (<Root {...rootAttributes} className={[s.n69,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3333"} data-name={"State=blue, view=for CS, selected=default, Hover=off"}>
  <span className={s.n46} data-layer={"236:3333/236:3334"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3333/236:3334/236:3335"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3333/236:3334/236:3335/236:3336"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3333/236:3334/236:3335/236:3337"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3338": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3338"} data-name={"State=blue, view=for CS, selected=default, Hover=on"}>
  <span className={s.n71} data-layer={"236:3338/236:3339"} data-name={"fill"}>
    <span className={s.n47} data-layer={"236:3338/236:3339/236:3340"} data-name={"Group 6913"}>
      <span className={s.n2} data-layer={"236:3338/236:3339/236:3340/236:3341"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 16.00004 16.00054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16 8.00027 C16 12.4187 12.4183 16.0005 8.00002 16.0005 C3.58173 16.0005 0 12.4187 0 8.00027 C0 3.58184 3.58173 0 8.00002 0 C9.46587 0 10.8396 0.394252 12.0211 1.08251"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n3} data-layer={"236:3338/236:3339/236:3340/236:3342"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55839 4.67614" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90873 L2.91545 4.67614 L9.55839 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.717841386795044} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3343": return (<Root {...rootAttributes} className={[s.n72,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3343"} data-name={"State=blue, view=for CS, selected=unselected, Hover=off"}>
  <span className={s.n10} data-layer={"236:3343/236:3344"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3343/236:3344/236:3345"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3343/236:3344/236:3345/236:3346"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3343/236:3344/236:3345/236:3347"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3348": return (<Root {...rootAttributes} className={[s.n73,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3348"} data-name={"State=blue, view=for CS, selected=unselected, Hover=on"}>
  <span className={s.n10} data-layer={"236:3348/236:3349"} data-name={"fill"}>
    <span className={s.n11} data-layer={"236:3348/236:3349/236:3350"} data-name={"Group 6913"}>
      <span className={s.n12} data-layer={"236:3348/236:3349/236:3350/236:3351"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 8 8.00025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 4.00012 C8 6.20933 6.20914 8.00025 4 8.00025 C1.79086 8.00025 0 6.20933 0 4.00012 C0 1.79092 1.79086 0 4 0 C4.73292 0 5.4198 0.197126 6.01052 0.541252"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n13} data-layer={"236:3348/236:3349/236:3350/236:3352"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.77918 2.33806" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.45436 L1.45772 2.33806 L4.77918 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1.3589165210723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:3353": return (<Root {...rootAttributes} className={[s.n74,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3353"} data-name={"State=sceleton, view=general, selected=default, Hover=off"}></Root>);
case "236:3354": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3354"} data-name={"State=blue, view=scale, selected=default, Hover=off"}>
  <span className={s.n76} data-layer={"236:3354/236:3355"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3356": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3356"} data-name={"State=blue, view=scale, selected=default, Hover=on"}>
  <span className={s.n76} data-layer={"236:3356/236:3357"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3358": return (<Root {...rootAttributes} className={[s.n78,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3358"} data-name={"State=closed, view=scale, selected=default, Hover=off"}>
  <span className={s.n79} data-layer={"236:3358/236:3359"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3360": return (<Root {...rootAttributes} className={[s.n80,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3360"} data-name={"State=closed, view=scale, selected=default, Hover=on"}>
  <span className={s.n79} data-layer={"236:3360/236:3361"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3362": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3362"} data-name={"State=red, view=scale, selected=default, Hover=off"}>
  <span className={s.n81} data-layer={"236:3362/236:3363"} data-name={"Ellipse 3199"}></span>
</Root>);
case "236:3364": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3364"} data-name={"State=red, view=scale, selected=default, Hover=on"}>
  <span className={s.n81} data-layer={"236:3364/236:3365"} data-name={"Ellipse 3199"}></span>
</Root>);
case "236:3366": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3366"} data-name={"State=purpur, view=scale, selected=default, Hover=off"}>
  <span className={s.n82} data-layer={"236:3366/236:3367"} data-name={"Ellipse 3200"}></span>
</Root>);
case "236:3368": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3368"} data-name={"State=purpur, view=scale, selected=default, Hover=on"}>
  <span className={s.n82} data-layer={"236:3368/236:3369"} data-name={"Ellipse 3200"}></span>
</Root>);
case "236:3370": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3370"} data-name={"State=TB, view=scale, selected=default, Hover=off"}>
  <span className={s.n83} data-layer={"236:3370/236:3371"} data-name={"Ellipse 3202"}></span>
</Root>);
case "236:3372": return (<Root {...rootAttributes} className={[s.n84,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3372"} data-name={"State=TB, view=scale, selected=default, Hover=on"}>
  <span className={s.n83} data-layer={"236:3372/236:3373"} data-name={"Ellipse 3202"}></span>
</Root>);
case "236:3374": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3374"} data-name={"State=green, view=scale, selected=default, Hover=off"}>
  <span className={s.n85} data-layer={"236:3374/236:3375"} data-name={"Ellipse 3201"}></span>
</Root>);
case "236:3376": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3376"} data-name={"State=green, view=scale, selected=default, Hover=on"}>
  <span className={s.n85} data-layer={"236:3376/236:3377"} data-name={"Ellipse 3201"}></span>
</Root>);
case "236:3378": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3378"} data-name={"State=GOSB, view=scale, selected=default, Hover=off"}>
  <span className={s.n86} data-layer={"236:3378/236:3379"} data-name={"Ellipse 3203"}></span>
</Root>);
case "236:3380": return (<Root {...rootAttributes} className={[s.n84,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3380"} data-name={"State=GOSB, view=scale, selected=default, Hover=on"}>
  <span className={s.n86} data-layer={"236:3380/236:3381"} data-name={"Ellipse 3203"}></span>
</Root>);
case "236:3382": return (<Root {...rootAttributes} className={[s.n87,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3382"} data-name={"State=blue, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n88} data-layer={"236:3382/236:3383"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 16.0354 C32 29.0949 16 36.2 16 36.2 C16 36.2 0 29.0949 0 16.0354 C0 7.1793 7.16344 0 16 0 C24.8366 0 32 7.1793 32 16.0354 Z"} fill={"rgba(48,67,243,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n89} data-layer={"236:3382/236:3384"} data-name={"fill"}>
    <span className={s.n90} data-layer={"236:3382/236:3384/236:3385"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3382/236:3384/236:3385/236:3386"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3382/236:3384/236:3385/236:3387"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n88} data-layer={"236:3382/236:3388"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 16.0354 C32 29.0949 16 36.2 16 36.2 C16 36.2 0 29.0949 0 16.0354 C0 7.1793 7.16344 0 16 0 C24.8366 0 32 7.1793 32 16.0354 Z"} fill="none" stroke={"rgba(48,67,243,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3389": return (<Root {...rootAttributes} className={[s.n87,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3389"} data-name={"State=blue, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n88} data-layer={"236:3389/236:3390"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 16.0354 C32 29.0949 16 36.2 16 36.2 C16 36.2 0 29.0949 0 16.0354 C0 7.1793 7.16344 0 16 0 C24.8366 0 32 7.1793 32 16.0354 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n91} data-layer={"236:3389/236:3391"} data-name={"fill"}>
    <span className={s.n90} data-layer={"236:3389/236:3391/236:3392"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3389/236:3391/236:3392/236:3393"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3389/236:3391/236:3392/236:3394"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n88} data-layer={"236:3389/236:3395"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 16.0354 C32 29.0949 16 36.2 16 36.2 C16 36.2 0 29.0949 0 16.0354 C0 7.1793 7.16344 0 16 0 C24.8366 0 32 7.1793 32 16.0354 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3396": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3396"} data-name={"State=purpur, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n23} data-layer={"236:3396/236:3397"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(255,47,234,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n33} data-layer={"236:3396/236:3398"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3396/236:3398/236:3399"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3396/236:3398/236:3399/236:3400"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3396/236:3398/236:3399/236:3401"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3396/236:3402"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(255,47,234,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3403": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3403"} data-name={"State=purpur, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n23} data-layer={"236:3403/236:3404"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n92} data-layer={"236:3403/236:3405"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3403/236:3405/236:3406"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3403/236:3405/236:3406/236:3407"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3403/236:3405/236:3406/236:3408"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3403/236:3409"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3410": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3410"} data-name={"State=TB, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n23} data-layer={"236:3410/236:3411"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n93} data-layer={"236:3410/236:3412"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3410/236:3412/236:3413"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3410/236:3412/236:3413/236:3414"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3410/236:3412/236:3413/236:3415"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3410/236:3416"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3417": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3417"} data-name={"State=TB, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n23} data-layer={"236:3417/236:3418"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n93} data-layer={"236:3417/236:3419"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3417/236:3419/236:3420"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3417/236:3419/236:3420/236:3421"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3417/236:3419/236:3420/236:3422"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3417/236:3423"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3424": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3424"} data-name={"State=TB, view=general, selected=selected, Hover=off"}>
  <span className={s.n17} data-layer={"236:3424/236:3425"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill={"rgba(102,174,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n94} data-layer={"236:3424/236:3426"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"236:3424/236:3426/236:3427"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"236:3424/236:3426/236:3427/236:3428"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.0769 9.53875 C19.0769 14.8069 14.8064 19.0775 9.53846 19.0775 C4.27051 19.0775 0 14.8069 0 9.53875 C0 4.27065 4.27051 0 9.53846 0 C11.2862 0 12.9241 0.470069 14.3328 1.29068"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n21} data-layer={"236:3424/236:3426/236:3427/236:3429"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.46808 L3.4761 5.57538 L11.3965 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"236:3424/236:3430"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3431": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3431"} data-name={"State=TB, view=general, selected=selected, Hover=on"}>
  <span className={s.n17} data-layer={"236:3431/236:3432"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill={"rgba(102,174,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n94} data-layer={"236:3431/236:3433"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"236:3431/236:3433/236:3434"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"236:3431/236:3433/236:3434/236:3435"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.0769 9.53875 C19.0769 14.8069 14.8064 19.0775 9.53846 19.0775 C4.27051 19.0775 0 14.8069 0 9.53875 C0 4.27065 4.27051 0 9.53846 0 C11.2862 0 12.9241 0.470069 14.3328 1.29068"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n21} data-layer={"236:3431/236:3433/236:3434/236:3436"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.46808 L3.4761 5.57538 L11.3965 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"236:3431/236:3437"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3438": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3438"} data-name={"State=GOSB, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n23} data-layer={"236:3438/236:3439"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(33,160,56,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n95} data-layer={"236:3438/236:3440"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3438/236:3440/236:3441"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3438/236:3440/236:3441/236:3442"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3438/236:3440/236:3441/236:3443"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3438/236:3444"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={2.064516067504883} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3445": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3445"} data-name={"State=GOSB, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n23} data-layer={"236:3445/236:3446"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n96} data-layer={"236:3445/236:3447"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3445/236:3447/236:3448"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3445/236:3447/236:3448/236:3449"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3445/236:3447/236:3448/236:3450"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3445/236:3451"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={2.064516067504883} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3452": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3452"} data-name={"State=GOSB, view=general, selected=selected, Hover=off"}>
  <span className={s.n17} data-layer={"236:3452/236:3453"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill={"rgba(0,255,238,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n97} data-layer={"236:3452/236:3454"} data-name={"Frame 633171"}>
    <span className={s.n19} data-layer={"236:3452/236:3454/236:3455"} data-name={"Group 6913"}>
      <span className={s.n20} data-layer={"236:3452/236:3454/236:3455/236:3456"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.0769 9.53875 C19.0769 14.8069 14.8064 19.0775 9.53846 19.0775 C4.27051 19.0775 0 14.8069 0 9.53875 C0 4.27065 4.27051 0 9.53846 0 C11.2862 0 12.9241 0.470069 14.3328 1.29068"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n21} data-layer={"236:3452/236:3454/236:3455/236:3457"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.46808 L3.4761 5.57538 L11.3965 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n17} data-layer={"236:3452/236:3458"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3459": return (<Root {...rootAttributes} className={[s.n16,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3459"} data-name={"State=GOSB, view=general, selected=selected, Hover=on"}>
  <span className={s.n17} data-layer={"236:3459/236:3460"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill={"rgba(0,255,238,1)"} fillRule="nonzero"/><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n98} data-layer={"236:3459/236:3461"} data-name={"Group 6913"}>
    <span className={s.n20} data-layer={"236:3459/236:3461/236:3462"} data-name={"Ellipse 3197"}>
      <svg width="100%" height="100%" viewBox="0 0 19.07691 19.07751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.0769 9.53875 C19.0769 14.8069 14.8064 19.0775 9.53846 19.0775 C4.27051 19.0775 0 14.8069 0 9.53875 C0 4.27065 4.27051 0 9.53846 0 C11.2862 0 12.9241 0.470069 14.3328 1.29068"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n21} data-layer={"236:3459/236:3461/236:3463"} data-name={"Vector 3371"}>
      <svg width="100%" height="100%" viewBox="0 0 11.39651 5.57538" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.46808 L3.4761 5.57538 L11.3965 0"} fill="none" stroke={"rgba(33,160,56,1)"} strokeWidth={3.240492582321167} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n17} data-layer={"236:3459/236:3464"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 35.06738" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.5337 C32 28.1846 16 35.0674 16 35.0674 C16 35.0674 0 28.1846 0 15.5337 C0 6.95467 7.16344 0 16 0 C24.8366 0 32 6.95467 32 15.5337 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3465": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3465"} data-name={"State=green, view=for CS, selected=selected, Hover=off"}>
  <span className={s.n23} data-layer={"236:3465/236:3466"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(15,143,97,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n99} data-layer={"236:3465/236:3467"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3465/236:3467/236:3468"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3465/236:3467/236:3468/236:3469"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(15,143,97,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3465/236:3467/236:3468/236:3470"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(15,143,97,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3465/236:3471"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(15,143,97,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3472": return (<Root {...rootAttributes} className={[s.n22,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3472"} data-name={"State=green, view=for CS, selected=selected, Hover=on"}>
  <span className={s.n23} data-layer={"236:3472/236:3473"} data-name={"Ellipse 3204"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill={"rgba(191,237,255,1)"} fillRule="nonzero"/><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={1.0322580337524414} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n100} data-layer={"236:3472/236:3474"} data-name={"fill"}>
    <span className={s.n25} data-layer={"236:3472/236:3474/236:3475"} data-name={"Group 6913"}>
      <span className={s.n26} data-layer={"236:3472/236:3474/236:3475/236:3476"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 19.6923 19.69291" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.6923 9.84646 C19.6923 15.2845 15.284 19.6929 9.84615 19.6929 C4.40827 19.6929 0 15.2845 0 9.84646 C0 4.40841 4.40827 0 9.84615 0 C11.6503 0 13.341 0.485232 14.7951 1.33231"} fill="none" stroke={"rgba(15,143,97,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n27} data-layer={"236:3472/236:3474/236:3475/236:3477"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 11.76414 5.75523" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.57996 L3.58823 5.75523 L11.7641 0"} fill="none" stroke={"rgba(15,143,97,1)"} strokeWidth={3.345024585723877} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n23} data-layer={"236:3472/236:3478"} data-name={"Ellipse 3205"}>
    <svg width="100%" height="100%" viewBox="0 0 32 36" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32 15.9468 C32 28.9342 16 36 16 36 C16 36 0 28.9342 0 15.9468 C0 7.13963 7.16344 0 16 0 C24.8366 0 32 7.13963 32 15.9468 Z"} fill="none" stroke={"rgba(191,237,255,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:3479": return (<Root {...rootAttributes} className={[s.n101,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3479"} data-name={"State=blue, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n102} data-layer={"236:3479/236:3480"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3481": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3481"} data-name={"State=purpur, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n102} data-layer={"236:3481/236:3482"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3483": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3483"} data-name={"State=red, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n102} data-layer={"236:3483/236:3484"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3485": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3485"} data-name={"State=red, view=general, selected=legend, Hover=off"}></Root>);
case "236:3486": return (<Root {...rootAttributes} className={[s.n105,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3486"} data-name={"State=green, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n102} data-layer={"236:3486/236:3487"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3488": return (<Root {...rootAttributes} className={[s.n105,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3488"} data-name={"State=green, view=general, selected=legend, Hover=off"}></Root>);
case "236:3489": return (<Root {...rootAttributes} className={[s.n106,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3489"} data-name={"State=closed, view=general, selected=legend, Hover=off"}></Root>);
case "236:3490": return (<Root {...rootAttributes} className={[s.n107,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3490"} data-name={"State=TB, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n108} data-layer={"236:3490/236:3491"} data-name={"Ellipse 3198"}></span>
</Root>);
case "236:3492": return (<Root {...rootAttributes} className={[s.n107,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:3492"} data-name={"State=GOSB, view=for CS, selected=legend, Hover=off"}>
  <span className={s.n109} data-layer={"236:3492/236:3493"} data-name={"Ellipse 3198"}></span>
</Root>);
  default: return null;
  }
}
