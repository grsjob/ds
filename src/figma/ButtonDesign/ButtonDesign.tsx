// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './ButtonDesign.module.css';
export const variants = [
  {
    "id": "227:719",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:723",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:727",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:731",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:735",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:739",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:743",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:747",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:751",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:755",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:759",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:763",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:767",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "227:771",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:775",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:779",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:783",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:787",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:791",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "227:795",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "227:799",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:803",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:807",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:811",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:815",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:819",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:823",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:827",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:831",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "227:835",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:839",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:843",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "227:847",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:851",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:855",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "227:859",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:863",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "227:867",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "227:868",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:873",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "227:878",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "227:882",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "227:883",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:50697",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50701",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50705",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50709",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50713",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50717",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:50721",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50725",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50729",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50733",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50737",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50741",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50745",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50749",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50753",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50757",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50761",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50764",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:50768",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50773",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50778",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50783",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50788",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50793",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50798",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50803",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50808",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50813",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50818",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50823",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:50828",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50832",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50836",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50840",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50844",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50848",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50852",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50856",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50860",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50864",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50868",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50872",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50876",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50880",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50884",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50888",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50892",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50896",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:50900",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50904",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50908",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50912",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50916",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50920",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50924",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50928",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50932",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50936",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50940",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50944",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:50948",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:50949",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:50953",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:50957",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:50958",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:50962",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:50966",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:50970",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:50974",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:50978",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50982",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50986",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50990",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:50994",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:50998",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51002",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51006",
    "name": "state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51010",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "229:51014",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=default",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "default"
    }
  },
  {
    "id": "229:51018",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:51022",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:51026",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=disabled",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "disabled"
    }
  },
  {
    "id": "229:51030",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:51034",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:51038",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:51042",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=louder",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "louder"
    }
  },
  {
    "id": "229:51046",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51050",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51054",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51058",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=focusfault",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51062",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "229:51066",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=hover",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "hover"
    }
  },
  {
    "id": "229:51070",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51074",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51078",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51082",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=press",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "press"
    }
  },
  {
    "id": "229:51086",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51091",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51096",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51101",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51106",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51111",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51116",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51121",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51126",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51131",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51136",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51141",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51146",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51151",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51156",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51161",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51167",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51173",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51179",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51185",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51191",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51197",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51203",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51209",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51214",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51219",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51224",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51229",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51234",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51239",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51244",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51249",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51254",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51259",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51264",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51269",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51274",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51279",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51284",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51289",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51294",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51299",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51304",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51309",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51314",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51319",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51324",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51328",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51332",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51336",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51340",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51344",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51348",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51352",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51356",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51360",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51364",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51368",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51372",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51376",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51380",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51384",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51389",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51394",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51399",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51404",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51409",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51414",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51419",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51424",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51428",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51432",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51436",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51440",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51444",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51448",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51452",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51456",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51460",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51464",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51468",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51472",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51476",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51480",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51484",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51488",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51492",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51496",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51500",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51504",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51508",
    "name": "state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51512",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51516",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51520",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51524",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:51525",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51529",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51533",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:51534",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51538",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51542",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51546",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51550",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=default",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "default"
    }
  },
  {
    "id": "229:51554",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51558",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=off, action=sceleton",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "sceleton"
    }
  },
  {
    "id": "229:51559",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51563",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51567",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51571",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51575",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51579",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51583",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51587",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51591",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51595",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=disabled",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "disabled"
    }
  },
  {
    "id": "229:51599",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51604",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51609",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51614",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51619",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51624",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51629",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51634",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51639",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51644",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51649",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51654",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=louder",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "louder"
    }
  },
  {
    "id": "229:51659",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51663",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51667",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51671",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51675",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51679",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51683",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51687",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51691",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51695",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51699",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51703",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=focusfault",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "focusfault"
    }
  },
  {
    "id": "229:51707",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51711",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51715",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51719",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51723",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51727",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51731",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51735",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=hover",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "hover"
    }
  },
  {
    "id": "229:51739",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51743",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51747",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51751",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51755",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51759",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51763",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51767",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51771",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51775",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51779",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51783",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=press",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "press"
    }
  },
  {
    "id": "229:51787",
    "name": "state=secondary, size=L, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51791",
    "name": "state=secondary, size=M, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51795",
    "name": "state=secondary, size=S, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51799",
    "name": "state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51803",
    "name": "state=secondary, size=L, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51807",
    "name": "state=secondary, size=M, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51811",
    "name": "state=secondary, size=S, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51815",
    "name": "state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51819",
    "name": "state=secondary, size=L, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51823",
    "name": "state=secondary, size=M, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51827",
    "name": "state=secondary, size=S, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51831",
    "name": "state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "secondary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51835",
    "name": "state=icon button, size=L, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51839",
    "name": "state=icon button, size=M, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51843",
    "name": "state=icon button, size=S, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51847",
    "name": "state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button fill",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51851",
    "name": "state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button fill",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51855",
    "name": "state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button fill",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51859",
    "name": "state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=active",
    "props": {
      "state": "icon button fill",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "off",
      "action": "active"
    }
  },
  {
    "id": "229:51863",
    "name": "state=text button, size=L, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51868",
    "name": "state=text button, size=M, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51873",
    "name": "state=text button, size=S, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51878",
    "name": "state=text button, size=XS, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51883",
    "name": "state=text button, size=L, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51888",
    "name": "state=text button, size=M, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51893",
    "name": "state=text button, size=S, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51898",
    "name": "state=text button, size=XS, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "text button",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51903",
    "name": "state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51907",
    "name": "state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51911",
    "name": "state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51915",
    "name": "state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51919",
    "name": "state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51923",
    "name": "state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51927",
    "name": "state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "tertiary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51931",
    "name": "state=primary, size=L, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51935",
    "name": "state=primary, size=M, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51939",
    "name": "state=primary, size=S, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51943",
    "name": "state=primary, size=XS, Icon left=on, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "on",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51947",
    "name": "state=primary, size=L, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51951",
    "name": "state=primary, size=M, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51955",
    "name": "state=primary, size=S, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51959",
    "name": "state=primary, size=XS, Icon left=off, icon right=off, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "off",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51963",
    "name": "state=primary, size=L, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "L",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51967",
    "name": "state=primary, size=M, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "M",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51971",
    "name": "state=primary, size=S, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "S",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  },
  {
    "id": "229:51975",
    "name": "state=primary, size=XS, Icon left=off, icon right=on, text=on, action=active",
    "props": {
      "state": "primary",
      "size": "XS",
      "Icon left": "off",
      "icon right": "on",
      "text": "on",
      "action": "active"
    }
  }
] as const;
export type ButtonDesignVariant = typeof variants[number]["id"];
export interface ButtonDesignDimensions {
  "state"?: "icon button" | "icon button fill" | "primary" | "secondary" | "tertiary" | "text button";
  "size"?: "L" | "M" | "S" | "XS";
  "Icon left"?: "off" | "on";
  "icon right"?: "off" | "on";
  "text"?: "off" | "on";
  "action"?: "active" | "default" | "disabled" | "focusfault" | "hover" | "louder" | "press" | "sceleton";
}
export interface ButtonDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: ButtonDesignVariant;
  variantProps?: ButtonDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: ButtonDesignVariant) => void;
}
const transitions = {"227:719":{"ON_HOVER":"227:723"},"227:799":{"ON_HOVER":"227:743"},"227:803":{"ON_HOVER":"227:779"},"227:807":{"ON_HOVER":"227:735"},"227:811":{"ON_HOVER":"227:763"},"227:815":{"ON_HOVER":"227:759"},"227:819":{"ON_HOVER":"227:767"},"227:823":{"ON_HOVER":"227:739"},"227:827":{"ON_HOVER":"227:787"},"227:835":{"ON_HOVER":"227:771"},"227:839":{"ON_HOVER":"227:755"},"227:847":{"ON_HOVER":"227:751"},"227:851":{"ON_HOVER":"227:731"},"227:855":{"ON_HOVER":"227:747"},"227:859":{"ON_HOVER":"227:727"},"227:868":{"ON_HOVER":"227:873"},"227:878":{"ON_HOVER":"227:783"},"229:50697":{"ON_HOVER":"4294967295:4294967295"},"229:50701":{"ON_HOVER":"4294967295:4294967295"},"229:50705":{"ON_HOVER":"4294967295:4294967295"},"229:50709":{"ON_HOVER":"4294967295:4294967295"},"229:50713":{"ON_HOVER":"4294967295:4294967295"},"229:50717":{"ON_HOVER":"4294967295:4294967295"},"229:51010":{"ON_HOVER":"4294967295:4294967295"},"229:51014":{"ON_HOVER":"4294967295:4294967295"},"229:51086":{"ON_HOVER":"4294967295:4294967295"},"229:51091":{"ON_HOVER":"4294967295:4294967295"},"229:51096":{"ON_HOVER":"4294967295:4294967295"},"229:51101":{"ON_HOVER":"4294967295:4294967295"},"229:51106":{"ON_HOVER":"4294967295:4294967295"},"229:51111":{"ON_HOVER":"4294967295:4294967295"},"229:51116":{"ON_HOVER":"4294967295:4294967295"},"229:51324":{"ON_HOVER":"4294967295:4294967295"},"229:51328":{"ON_HOVER":"4294967295:4294967295"},"229:51332":{"ON_HOVER":"4294967295:4294967295"},"229:51336":{"ON_HOVER":"4294967295:4294967295"},"229:51340":{"ON_HOVER":"4294967295:4294967295"},"229:51344":{"ON_HOVER":"4294967295:4294967295"},"229:51348":{"ON_HOVER":"4294967295:4294967295"},"229:51516":{"ON_HOVER":"227:775"},"229:51520":{"ON_HOVER":"4294967295:4294967295"},"229:51524":{"ON_HOVER":"4294967295:4294967295"},"229:51525":{"ON_HOVER":"4294967295:4294967295"},"229:51529":{"ON_HOVER":"4294967295:4294967295"},"229:51533":{"ON_HOVER":"4294967295:4294967295"},"229:51534":{"ON_HOVER":"4294967295:4294967295"},"229:51538":{"ON_HOVER":"4294967295:4294967295"},"229:51542":{"ON_HOVER":"4294967295:4294967295"},"229:51546":{"ON_HOVER":"4294967295:4294967295"},"229:51550":{"ON_HOVER":"4294967295:4294967295"}};
export function ButtonDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="button",disabled,...attributes}: ButtonDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:719": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:719"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n1} data-layer={"227:719/227:720"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:719/227:720/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:719/227:720/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:719/227:720/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:719/227:720/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n6} data-layer={"227:719/227:721"} data-name={"Button"}>
    {textSlot(text,"227:719/227:721","Button","Button")}
  </span>
</Root>);
case "227:723": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:723"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n1} data-layer={"227:723/227:724"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:723/227:724/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:723/227:724/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:723/227:724/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:723/227:724/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n6} data-layer={"227:723/227:725"} data-name={"Button"}>
    {textSlot(text,"227:723/227:725","Button","Button")}
  </span>
</Root>);
case "227:727": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:727"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n9} data-layer={"227:727/227:728"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"227:727/227:728/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"227:727/227:728/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"227:727/227:728/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"227:727/227:728/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n14} data-layer={"227:727/227:729"} data-name={"Button"}>
    {textSlot(text,"227:727/227:729","Button","Button")}
  </span>
</Root>);
case "227:731": return (<Root {...rootAttributes} className={[s.n15,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:731"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n16} data-layer={"227:731/227:733"} data-name={"Button"}>
    {textSlot(text,"227:731/227:733","Button","Button")}
  </span>
</Root>);
case "227:735": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:735"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n18} data-layer={"227:735/227:737"} data-name={"Button"}>
    {textSlot(text,"227:735/227:737","Button","Button")}
  </span>
</Root>);
case "227:739": return (<Root {...rootAttributes} className={[s.n19,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:739"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n20} data-layer={"227:739/227:741"} data-name={"Button"}>
    {textSlot(text,"227:739/227:741","Button","Button")}
  </span>
</Root>);
case "227:743": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:743"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n22} data-layer={"227:743/227:745"} data-name={"Button"}>
    {textSlot(text,"227:743/227:745","Button","Button")}
  </span>
</Root>);
case "227:747": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:747"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n24} data-layer={"227:747/227:748"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"227:747/227:748/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"227:747/227:748/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"227:747/227:748/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"227:747/227:748/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:751": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:751"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n30} data-layer={"227:751/227:752"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"227:751/227:752/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"227:751/227:752/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"227:751/227:752/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"227:751/227:752/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:755": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:755"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n36} data-layer={"227:755/227:756"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:755/227:756/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:755/227:756/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:755/227:756/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:755/227:756/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:759": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:759"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n38} data-layer={"227:759/227:760"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"227:759/227:760/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"227:759/227:760/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"227:759/227:760/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"227:759/227:760/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:763": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:763"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n30} data-layer={"227:763/227:764"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"227:763/227:764/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"227:763/227:764/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"227:763/227:764/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"227:763/227:764/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:767": return (<Root {...rootAttributes} className={[s.n35,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:767"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n36} data-layer={"227:767/227:768"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:767/227:768/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:767/227:768/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:767/227:768/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:767/227:768/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:771": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:771"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n20} data-layer={"227:771/227:773"} data-name={"Button"}>
    {textSlot(text,"227:771/227:773","Button","Button")}
  </span>
</Root>);
case "227:775": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:775"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n41} data-layer={"227:775/227:776"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"227:775/227:776/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"227:775/227:776/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"227:775/227:776/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"227:775/227:776/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n43} data-layer={"227:775/227:777"} data-name={"Button"}>
    {textSlot(text,"227:775/227:777","Button","Button")}
  </span>
</Root>);
case "227:779": return (<Root {...rootAttributes} className={[s.n44,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:779"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n45} data-layer={"227:779/227:781"} data-name={"Button"}>
    {textSlot(text,"227:779/227:781","Button","Button")}
  </span>
</Root>);
case "227:783": return (<Root {...rootAttributes} className={[s.n46,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:783"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n47} data-layer={"227:783/227:785"} data-name={"Button"}>
    {textSlot(text,"227:783/227:785","Button","Button")}
  </span>
</Root>);
case "227:787": return (<Root {...rootAttributes} className={[s.n48,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:787"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n49} data-layer={"227:787/227:789"} data-name={"Button"}>
    {textSlot(text,"227:787/227:789","Button","Button")}
  </span>
</Root>);
case "227:791": return (<Root {...rootAttributes} className={[s.n50,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:791"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n36} data-layer={"227:791/227:792"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:791/227:792/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:791/227:792/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"227:791/227:792/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:791/227:792/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:795": return (<Root {...rootAttributes} className={[s.n52,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:795"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n36} data-layer={"227:795/227:796"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:795/227:796/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:795/227:796/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"227:795/227:796/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:795/227:796/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:799": return (<Root {...rootAttributes} className={[s.n53,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:799"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n22} data-layer={"227:799/227:801"} data-name={"Button"}>
    {textSlot(text,"227:799/227:801","Button","Button")}
  </span>
</Root>);
case "227:803": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:803"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n45} data-layer={"227:803/227:805"} data-name={"Button"}>
    {textSlot(text,"227:803/227:805","Button","Button")}
  </span>
</Root>);
case "227:807": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:807"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n18} data-layer={"227:807/227:809"} data-name={"Button"}>
    {textSlot(text,"227:807/227:809","Button","Button")}
  </span>
</Root>);
case "227:811": return (<Root {...rootAttributes} className={[s.n56,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:811"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n30} data-layer={"227:811/227:812"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"227:811/227:812/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"227:811/227:812/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"227:811/227:812/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"227:811/227:812/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:815": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:815"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n38} data-layer={"227:815/227:816"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"227:815/227:816/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"227:815/227:816/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"227:815/227:816/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"227:815/227:816/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:819": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:819"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n36} data-layer={"227:819/227:820"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:819/227:820/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:819/227:820/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:819/227:820/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:819/227:820/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:823": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:823"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n20} data-layer={"227:823/227:825"} data-name={"Button"}>
    {textSlot(text,"227:823/227:825","Button","Button")}
  </span>
</Root>);
case "227:827": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:827"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n49} data-layer={"227:827/227:829"} data-name={"Button"}>
    {textSlot(text,"227:827/227:829","Button","Button")}
  </span>
</Root>);
case "227:831": return (<Root {...rootAttributes} className={[s.n61,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:831"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n62} data-layer={"227:831/227:833"} data-name={"Button"}>
    {textSlot(text,"227:831/227:833","Button","Button")}
  </span>
</Root>);
case "227:835": return (<Root {...rootAttributes} className={[s.n61,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:835"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n20} data-layer={"227:835/227:837"} data-name={"Button"}>
    {textSlot(text,"227:835/227:837","Button","Button")}
  </span>
</Root>);
case "227:839": return (<Root {...rootAttributes} className={[s.n63,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:839"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n36} data-layer={"227:839/227:840"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"227:839/227:840/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"227:839/227:840/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"227:839/227:840/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"227:839/227:840/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:843": return (<Root {...rootAttributes} className={[s.n64,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:843"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n38} data-layer={"227:843/227:844"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"227:843/227:844/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"227:843/227:844/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n65} data-layer={"227:843/227:844/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"227:843/227:844/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:847": return (<Root {...rootAttributes} className={[s.n66,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:847"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n30} data-layer={"227:847/227:848"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"227:847/227:848/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"227:847/227:848/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"227:847/227:848/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"227:847/227:848/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:851": return (<Root {...rootAttributes} className={[s.n67,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:851"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n16} data-layer={"227:851/227:853"} data-name={"Button"}>
    {textSlot(text,"227:851/227:853","Button","Button")}
  </span>
</Root>);
case "227:855": return (<Root {...rootAttributes} className={[s.n68,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:855"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n24} data-layer={"227:855/227:856"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"227:855/227:856/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"227:855/227:856/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"227:855/227:856/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"227:855/227:856/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "227:859": return (<Root {...rootAttributes} className={[s.n69,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:859"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n9} data-layer={"227:859/227:860"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"227:859/227:860/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"227:859/227:860/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"227:859/227:860/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"227:859/227:860/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n14} data-layer={"227:859/227:861"} data-name={"Button"}>
    {textSlot(text,"227:859/227:861","Button","Button")}
  </span>
</Root>);
case "227:863": return (<Root {...rootAttributes} className={[s.n70,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:863"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n71} data-layer={"227:863/227:865"} data-name={"Button"}>
    {textSlot(text,"227:863/227:865","Button","Button")}
  </span>
</Root>);
case "227:867": return (<Root {...rootAttributes} className={[s.n72,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:867"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "227:868": return (<Root {...rootAttributes} className={[s.n73,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:868"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n74} data-layer={"227:868/227:869"} data-name={"left, right icon & text"}>
    <span className={s.n75} data-layer={"227:868/227:869/227:871"} data-name={"Button"}>
      {textSlot(text,"227:868/227:869/227:871","Button","Button")}
    </span>
  </span>
</Root>);
case "227:873": return (<Root {...rootAttributes} className={[s.n73,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:873"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n76} data-layer={"227:873/227:874"} data-name={"left, right icon & text"}>
    <span className={s.n75} data-layer={"227:873/227:874/227:876"} data-name={"Button"}>
      {textSlot(text,"227:873/227:874/227:876","Button","Button")}
    </span>
  </span>
</Root>);
case "227:878": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:878"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n47} data-layer={"227:878/227:880"} data-name={"Button"}>
    {textSlot(text,"227:878/227:880","Button","Button")}
  </span>
</Root>);
case "227:882": return (<Root {...rootAttributes} className={[s.n78,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:882"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "227:883": return (<Root {...rootAttributes} className={[s.n79,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:883"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:50697": return (<Root {...rootAttributes} className={[s.n80,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50697"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n41} data-layer={"229:50697/229:50698"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50697/229:50698/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50697/229:50698/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50697/229:50698/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50697/229:50698/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n81} data-layer={"229:50697/229:50699"} data-name={"Button"}>
    {textSlot(text,"229:50697/229:50699","Button","Button")}
  </span>
</Root>);
case "229:50701": return (<Root {...rootAttributes} className={[s.n82,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50701"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n83} data-layer={"229:50701/229:50702"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50701/229:50702/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50701/229:50702/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50701/229:50702/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50701/229:50702/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n84} data-layer={"229:50701/229:50703"} data-name={"Button"}>
    {textSlot(text,"229:50701/229:50703","Button","Button")}
  </span>
</Root>);
case "229:50705": return (<Root {...rootAttributes} className={[s.n80,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50705"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n16} data-layer={"229:50705/229:50707"} data-name={"Button"}>
    {textSlot(text,"229:50705/229:50707","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:50705/229:50708"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50705/229:50708/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50705/229:50708/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50705/229:50708/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50705/229:50708/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50709": return (<Root {...rootAttributes} className={[s.n82,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50709"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n18} data-layer={"229:50709/229:50711"} data-name={"Button"}>
    {textSlot(text,"229:50709/229:50711","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:50709/229:50712"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50709/229:50712/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50709/229:50712/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50709/229:50712/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50709/229:50712/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50713": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50713"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n20} data-layer={"229:50713/229:50715"} data-name={"Button"}>
    {textSlot(text,"229:50713/229:50715","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:50713/229:50716"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50713/229:50716/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50713/229:50716/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50713/229:50716/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50713/229:50716/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50717": return (<Root {...rootAttributes} className={[s.n69,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50717"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n22} data-layer={"229:50717/229:50719"} data-name={"Button"}>
    {textSlot(text,"229:50717/229:50719","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:50717/229:50720"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50717/229:50720/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50717/229:50720/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50717/229:50720/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50717/229:50720/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50721": return (<Root {...rootAttributes} className={[s.n89,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50721"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n41} data-layer={"229:50721/229:50722"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50721/229:50722/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50721/229:50722/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:50721/229:50722/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50721/229:50722/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n91} data-layer={"229:50721/229:50723"} data-name={"Button"}>
    {textSlot(text,"229:50721/229:50723","Button","Button")}
  </span>
</Root>);
case "229:50725": return (<Root {...rootAttributes} className={[s.n92,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50725"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n83} data-layer={"229:50725/229:50726"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50725/229:50726/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50725/229:50726/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:50725/229:50726/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50725/229:50726/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n94} data-layer={"229:50725/229:50727"} data-name={"Button"}>
    {textSlot(text,"229:50725/229:50727","Button","Button")}
  </span>
</Root>);
case "229:50729": return (<Root {...rootAttributes} className={[s.n95,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50729"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n1} data-layer={"229:50729/229:50730"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50729/229:50730/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50729/229:50730/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"229:50729/229:50730/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50729/229:50730/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n96} data-layer={"229:50729/229:50731"} data-name={"Button"}>
    {textSlot(text,"229:50729/229:50731","Button","Button")}
  </span>
</Root>);
case "229:50733": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50733"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n9} data-layer={"229:50733/229:50734"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50733/229:50734/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50733/229:50734/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:50733/229:50734/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50733/229:50734/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n99} data-layer={"229:50733/229:50735"} data-name={"Button"}>
    {textSlot(text,"229:50733/229:50735","Button","Button")}
  </span>
</Root>);
case "229:50737": return (<Root {...rootAttributes} className={[s.n100,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50737"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n101} data-layer={"229:50737/229:50739"} data-name={"Button"}>
    {textSlot(text,"229:50737/229:50739","Button","Button")}
  </span>
</Root>);
case "229:50741": return (<Root {...rootAttributes} className={[s.n102,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50741"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n71} data-layer={"229:50741/229:50743"} data-name={"Button"}>
    {textSlot(text,"229:50741/229:50743","Button","Button")}
  </span>
</Root>);
case "229:50745": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50745"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n104} data-layer={"229:50745/229:50747"} data-name={"Button"}>
    {textSlot(text,"229:50745/229:50747","Button","Button")}
  </span>
</Root>);
case "229:50749": return (<Root {...rootAttributes} className={[s.n105,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50749"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n106} data-layer={"229:50749/229:50751"} data-name={"Button"}>
    {textSlot(text,"229:50749/229:50751","Button","Button")}
  </span>
</Root>);
case "229:50753": return (<Root {...rootAttributes} className={[s.n89,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50753"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n101} data-layer={"229:50753/229:50755"} data-name={"Button"}>
    {textSlot(text,"229:50753/229:50755","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:50753/229:50756"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50753/229:50756/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50753/229:50756/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:50753/229:50756/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50753/229:50756/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50757": return (<Root {...rootAttributes} className={[s.n92,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50757"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n71} data-layer={"229:50757/229:50759"} data-name={"Button"}>
    {textSlot(text,"229:50757/229:50759","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:50757/229:50760"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50757/229:50760/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50757/229:50760/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:50757/229:50760/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50757/229:50760/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50761": return (<Root {...rootAttributes} className={[s.n95,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50761"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n104} data-layer={"229:50761/229:50762"} data-name={"Button"}>
    {textSlot(text,"229:50761/229:50762","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:50761/229:50763"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50761/229:50763/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50761/229:50763/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"229:50761/229:50763/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50761/229:50763/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50764": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50764"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n106} data-layer={"229:50764/229:50766"} data-name={"Button"}>
    {textSlot(text,"229:50764/229:50766","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:50764/229:50767"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50764/229:50767/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50764/229:50767/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:50764/229:50767/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50764/229:50767/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50768": return (<Root {...rootAttributes} className={[s.n80,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50768"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n41} data-layer={"229:50768/229:50769"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50768/229:50769/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50768/229:50769/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50768/229:50769/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50768/229:50769/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n107} data-layer={"229:50768/229:50771"} data-name={"spinner"}>
    <span className={s.n108} data-layer={"229:50768/229:50771/229:50772"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:50768/229:50771/229:50772/227:1708"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g285_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g285_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:50768/229:50771/229:50772/227:1709"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50773": return (<Root {...rootAttributes} className={[s.n110,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50773"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n83} data-layer={"229:50773/229:50774"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50773/229:50774/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50773/229:50774/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50773/229:50774/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50773/229:50774/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n111} data-layer={"229:50773/229:50776"} data-name={"spinner"}>
    <span className={s.n112} data-layer={"229:50773/229:50776/229:50777"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:50773/229:50776/229:50777/227:1717"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g295_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g295_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:50773/229:50776/229:50777/227:1718"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50778": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50778"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n1} data-layer={"229:50778/229:50779"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50778/229:50779/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50778/229:50779/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50778/229:50779/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50778/229:50779/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n114} data-layer={"229:50778/229:50781"} data-name={"spinner"}>
    <span className={s.n115} data-layer={"229:50778/229:50781/229:50782"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:50778/229:50781/229:50782/227:1714"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g305_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g305_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:50778/229:50781/229:50782/227:1715"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50783": return (<Root {...rootAttributes} className={[s.n117,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50783"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n118} data-layer={"229:50783/229:50784"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50783/229:50784/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50783/229:50784/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50783/229:50784/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50783/229:50784/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n119} data-layer={"229:50783/229:50786"} data-name={"spinner"}>
    <span className={s.n120} data-layer={"229:50783/229:50786/229:50787"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:50783/229:50786/229:50787/227:1711"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g315_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g315_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:50783/229:50786/229:50787/227:1712"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50788": return (<Root {...rootAttributes} className={[s.n67,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50788"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n122} data-layer={"229:50788/229:50791"} data-name={"spinner"}>
    <span className={s.n123} data-layer={"229:50788/229:50791/229:50792"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:50788/229:50791/229:50792/227:1708"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g320_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g320_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:50788/229:50791/229:50792/227:1709"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50793": return (<Root {...rootAttributes} className={[s.n55,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50793"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n124} data-layer={"229:50793/229:50796"} data-name={"spinner"}>
    <span className={s.n125} data-layer={"229:50793/229:50796/229:50797"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:50793/229:50796/229:50797/227:1717"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g325_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g325_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:50793/229:50796/229:50797/227:1718"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50798": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50798"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n126} data-layer={"229:50798/229:50801"} data-name={"spinner"}>
    <span className={s.n127} data-layer={"229:50798/229:50801/229:50802"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:50798/229:50801/229:50802/227:1714"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g330_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g330_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:50798/229:50801/229:50802/227:1715"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50803": return (<Root {...rootAttributes} className={[s.n53,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50803"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n128} data-layer={"229:50803/229:50806"} data-name={"spinner"}>
    <span className={s.n129} data-layer={"229:50803/229:50806/229:50807"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:50803/229:50806/229:50807/227:1711"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g335_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g335_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:50803/229:50806/229:50807/227:1712"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:50808": return (<Root {...rootAttributes} className={[s.n80,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50808"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n130} data-layer={"229:50808/229:50810"} data-name={"spinner"}>
    <span className={s.n108} data-layer={"229:50808/229:50810/229:50811"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:50808/229:50810/229:50811/227:1708"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g340_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g340_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:50808/229:50810/229:50811/227:1709"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n85} data-layer={"229:50808/229:50812"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50808/229:50812/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50808/229:50812/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50808/229:50812/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50808/229:50812/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50813": return (<Root {...rootAttributes} className={[s.n82,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50813"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n131} data-layer={"229:50813/229:50815"} data-name={"spinner"}>
    <span className={s.n132} data-layer={"229:50813/229:50815/229:50816"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:50813/229:50815/229:50816/227:1717"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g350_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g350_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:50813/229:50815/229:50816/227:1718"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n86} data-layer={"229:50813/229:50817"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50813/229:50817/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50813/229:50817/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50813/229:50817/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50813/229:50817/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50818": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50818"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n133} data-layer={"229:50818/229:50820"} data-name={"spinner"}>
    <span className={s.n115} data-layer={"229:50818/229:50820/229:50821"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:50818/229:50820/229:50821/227:1714"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g360_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g360_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:50818/229:50820/229:50821/227:1715"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n87} data-layer={"229:50818/229:50822"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50818/229:50822/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50818/229:50822/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50818/229:50822/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50818/229:50822/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50823": return (<Root {...rootAttributes} className={[s.n69,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50823"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n134} data-layer={"229:50823/229:50825"} data-name={"spinner"}>
    <span className={s.n135} data-layer={"229:50823/229:50825/229:50826"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:50823/229:50825/229:50826/227:1711"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g370_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g370_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:50823/229:50825/229:50826/227:1712"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n88} data-layer={"229:50823/229:50827"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50823/229:50827/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50823/229:50827/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50823/229:50827/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50823/229:50827/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50828": return (<Root {...rootAttributes} className={[s.n136,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50828"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n41} data-layer={"229:50828/229:50829"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50828/229:50829/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50828/229:50829/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50828/229:50829/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50828/229:50829/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n81} data-layer={"229:50828/229:50830"} data-name={"Button"}>
    {textSlot(text,"229:50828/229:50830","Button","Button")}
  </span>
</Root>);
case "229:50832": return (<Root {...rootAttributes} className={[s.n137,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50832"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n83} data-layer={"229:50832/229:50833"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50832/229:50833/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50832/229:50833/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50832/229:50833/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50832/229:50833/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n84} data-layer={"229:50832/229:50834"} data-name={"Button"}>
    {textSlot(text,"229:50832/229:50834","Button","Button")}
  </span>
</Root>);
case "229:50836": return (<Root {...rootAttributes} className={[s.n138,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50836"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n1} data-layer={"229:50836/229:50837"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50836/229:50837/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50836/229:50837/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50836/229:50837/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50836/229:50837/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n6} data-layer={"229:50836/229:50838"} data-name={"Button"}>
    {textSlot(text,"229:50836/229:50838","Button","Button")}
  </span>
</Root>);
case "229:50840": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50840"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n9} data-layer={"229:50840/229:50841"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50840/229:50841/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50840/229:50841/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50840/229:50841/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50840/229:50841/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n14} data-layer={"229:50840/229:50842"} data-name={"Button"}>
    {textSlot(text,"229:50840/229:50842","Button","Button")}
  </span>
</Root>);
case "229:50844": return (<Root {...rootAttributes} className={[s.n140,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50844"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n16} data-layer={"229:50844/229:50846"} data-name={"Button"}>
    {textSlot(text,"229:50844/229:50846","Button","Button")}
  </span>
</Root>);
case "229:50848": return (<Root {...rootAttributes} className={[s.n141,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50848"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n18} data-layer={"229:50848/229:50850"} data-name={"Button"}>
    {textSlot(text,"229:50848/229:50850","Button","Button")}
  </span>
</Root>);
case "229:50852": return (<Root {...rootAttributes} className={[s.n142,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50852"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n20} data-layer={"229:50852/229:50854"} data-name={"Button"}>
    {textSlot(text,"229:50852/229:50854","Button","Button")}
  </span>
</Root>);
case "229:50856": return (<Root {...rootAttributes} className={[s.n143,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50856"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n22} data-layer={"229:50856/229:50858"} data-name={"Button"}>
    {textSlot(text,"229:50856/229:50858","Button","Button")}
  </span>
</Root>);
case "229:50860": return (<Root {...rootAttributes} className={[s.n136,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50860"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n16} data-layer={"229:50860/229:50862"} data-name={"Button"}>
    {textSlot(text,"229:50860/229:50862","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:50860/229:50863"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50860/229:50863/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50860/229:50863/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50860/229:50863/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50860/229:50863/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50864": return (<Root {...rootAttributes} className={[s.n137,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50864"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n18} data-layer={"229:50864/229:50866"} data-name={"Button"}>
    {textSlot(text,"229:50864/229:50866","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:50864/229:50867"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50864/229:50867/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50864/229:50867/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50864/229:50867/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50864/229:50867/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50868": return (<Root {...rootAttributes} className={[s.n138,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50868"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n20} data-layer={"229:50868/229:50870"} data-name={"Button"}>
    {textSlot(text,"229:50868/229:50870","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:50868/229:50871"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50868/229:50871/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50868/229:50871/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50868/229:50871/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50868/229:50871/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50872": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50872"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n22} data-layer={"229:50872/229:50874"} data-name={"Button"}>
    {textSlot(text,"229:50872/229:50874","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:50872/229:50875"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50872/229:50875/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50872/229:50875/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50872/229:50875/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50872/229:50875/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50876": return (<Root {...rootAttributes} className={[s.n144,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50876"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n41} data-layer={"229:50876/229:50877"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50876/229:50877/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50876/229:50877/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50876/229:50877/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50876/229:50877/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n81} data-layer={"229:50876/229:50878"} data-name={"Button"}>
    {textSlot(text,"229:50876/229:50878","Button","Button")}
  </span>
</Root>);
case "229:50880": return (<Root {...rootAttributes} className={[s.n145,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50880"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n83} data-layer={"229:50880/229:50881"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50880/229:50881/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50880/229:50881/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50880/229:50881/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50880/229:50881/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n84} data-layer={"229:50880/229:50882"} data-name={"Button"}>
    {textSlot(text,"229:50880/229:50882","Button","Button")}
  </span>
</Root>);
case "229:50884": return (<Root {...rootAttributes} className={[s.n144,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50884"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n16} data-layer={"229:50884/229:50886"} data-name={"Button"}>
    {textSlot(text,"229:50884/229:50886","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:50884/229:50887"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50884/229:50887/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50884/229:50887/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50884/229:50887/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50884/229:50887/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50888": return (<Root {...rootAttributes} className={[s.n145,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50888"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n18} data-layer={"229:50888/229:50890"} data-name={"Button"}>
    {textSlot(text,"229:50888/229:50890","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:50888/229:50891"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50888/229:50891/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50888/229:50891/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50888/229:50891/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50888/229:50891/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50892": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50892"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n20} data-layer={"229:50892/229:50894"} data-name={"Button"}>
    {textSlot(text,"229:50892/229:50894","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:50892/229:50895"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50892/229:50895/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50892/229:50895/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50892/229:50895/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50892/229:50895/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50896": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50896"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n22} data-layer={"229:50896/229:50898"} data-name={"Button"}>
    {textSlot(text,"229:50896/229:50898","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:50896/229:50899"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50896/229:50899/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50896/229:50899/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50896/229:50899/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50896/229:50899/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50900": return (<Root {...rootAttributes} className={[s.n146,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50900"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n41} data-layer={"229:50900/229:50901"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50900/229:50901/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50900/229:50901/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50900/229:50901/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50900/229:50901/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n81} data-layer={"229:50900/229:50902"} data-name={"Button"}>
    {textSlot(text,"229:50900/229:50902","Button","Button")}
  </span>
</Root>);
case "229:50904": return (<Root {...rootAttributes} className={[s.n147,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50904"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n83} data-layer={"229:50904/229:50905"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50904/229:50905/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50904/229:50905/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50904/229:50905/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50904/229:50905/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n84} data-layer={"229:50904/229:50906"} data-name={"Button"}>
    {textSlot(text,"229:50904/229:50906","Button","Button")}
  </span>
</Root>);
case "229:50908": return (<Root {...rootAttributes} className={[s.n148,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50908"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n1} data-layer={"229:50908/229:50909"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50908/229:50909/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50908/229:50909/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50908/229:50909/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50908/229:50909/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n6} data-layer={"229:50908/229:50910"} data-name={"Button"}>
    {textSlot(text,"229:50908/229:50910","Button","Button")}
  </span>
</Root>);
case "229:50912": return (<Root {...rootAttributes} className={[s.n149,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50912"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n9} data-layer={"229:50912/229:50913"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50912/229:50913/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50912/229:50913/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50912/229:50913/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50912/229:50913/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n14} data-layer={"229:50912/229:50914"} data-name={"Button"}>
    {textSlot(text,"229:50912/229:50914","Button","Button")}
  </span>
</Root>);
case "229:50916": return (<Root {...rootAttributes} className={[s.n150,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50916"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n16} data-layer={"229:50916/229:50918"} data-name={"Button"}>
    {textSlot(text,"229:50916/229:50918","Button","Button")}
  </span>
</Root>);
case "229:50920": return (<Root {...rootAttributes} className={[s.n151,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50920"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n18} data-layer={"229:50920/229:50922"} data-name={"Button"}>
    {textSlot(text,"229:50920/229:50922","Button","Button")}
  </span>
</Root>);
case "229:50924": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50924"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n20} data-layer={"229:50924/229:50926"} data-name={"Button"}>
    {textSlot(text,"229:50924/229:50926","Button","Button")}
  </span>
</Root>);
case "229:50928": return (<Root {...rootAttributes} className={[s.n153,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50928"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n22} data-layer={"229:50928/229:50930"} data-name={"Button"}>
    {textSlot(text,"229:50928/229:50930","Button","Button")}
  </span>
</Root>);
case "229:50932": return (<Root {...rootAttributes} className={[s.n146,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50932"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n16} data-layer={"229:50932/229:50934"} data-name={"Button"}>
    {textSlot(text,"229:50932/229:50934","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:50932/229:50935"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50932/229:50935/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50932/229:50935/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50932/229:50935/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50932/229:50935/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50936": return (<Root {...rootAttributes} className={[s.n147,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50936"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n18} data-layer={"229:50936/229:50938"} data-name={"Button"}>
    {textSlot(text,"229:50936/229:50938","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:50936/229:50939"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50936/229:50939/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50936/229:50939/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50936/229:50939/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50936/229:50939/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50940": return (<Root {...rootAttributes} className={[s.n148,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50940"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n20} data-layer={"229:50940/229:50942"} data-name={"Button"}>
    {textSlot(text,"229:50940/229:50942","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:50940/229:50943"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50940/229:50943/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50940/229:50943/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50940/229:50943/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50940/229:50943/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50944": return (<Root {...rootAttributes} className={[s.n149,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50944"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n22} data-layer={"229:50944/229:50946"} data-name={"Button"}>
    {textSlot(text,"229:50944/229:50946","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:50944/229:50947"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50944/229:50947/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50944/229:50947/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50944/229:50947/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50944/229:50947/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50948": return (<Root {...rootAttributes} className={[s.n154,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50948"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:50949": return (<Root {...rootAttributes} className={[s.n155,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50949"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n24} data-layer={"229:50949/229:50950"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50949/229:50950/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50949/229:50950/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:50949/229:50950/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50949/229:50950/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50953": return (<Root {...rootAttributes} className={[s.n156,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50953"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n30} data-layer={"229:50953/229:50954"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50953/229:50954/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50953/229:50954/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:50953/229:50954/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50953/229:50954/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50957": return (<Root {...rootAttributes} className={[s.n157,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50957"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:50958": return (<Root {...rootAttributes} className={[s.n158,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50958"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n38} data-layer={"229:50958/229:50959"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50958/229:50959/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50958/229:50959/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:50958/229:50959/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50958/229:50959/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50962": return (<Root {...rootAttributes} className={[s.n68,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50962"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n24} data-layer={"229:50962/229:50965"} data-name={"Spinner/var"}>
    <span className={s.n109} data-layer={"229:50962/229:50965/227:1708"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g569_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g569_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n28} data-layer={"229:50962/229:50965/227:1709"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:50966": return (<Root {...rootAttributes} className={[s.n66,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50966"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n30} data-layer={"229:50966/229:50969"} data-name={"Spinner/var"}>
    <span className={s.n113} data-layer={"229:50966/229:50969/227:1717"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g573_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g573_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n34} data-layer={"229:50966/229:50969/227:1718"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:50970": return (<Root {...rootAttributes} className={[s.n63,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50970"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n36} data-layer={"229:50970/229:50973"} data-name={"Spinner/var"}>
    <span className={s.n116} data-layer={"229:50970/229:50973/227:1714"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g577_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g577_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"229:50970/229:50973/227:1715"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:50974": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50974"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n38} data-layer={"229:50974/229:50977"} data-name={"Spinner/var"}>
    <span className={s.n121} data-layer={"229:50974/229:50977/227:1711"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g581_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g581_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n13} data-layer={"229:50974/229:50977/227:1712"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:50978": return (<Root {...rootAttributes} className={[s.n159,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50978"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n24} data-layer={"229:50978/229:50979"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50978/229:50979/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50978/229:50979/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50978/229:50979/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50978/229:50979/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50982": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50982"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n30} data-layer={"229:50982/229:50983"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50982/229:50983/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50982/229:50983/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50982/229:50983/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50982/229:50983/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50986": return (<Root {...rootAttributes} className={[s.n161,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50986"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n36} data-layer={"229:50986/229:50987"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:50986/229:50987/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:50986/229:50987/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:50986/229:50987/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:50986/229:50987/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50990": return (<Root {...rootAttributes} className={[s.n162,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50990"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n38} data-layer={"229:50990/229:50991"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:50990/229:50991/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:50990/229:50991/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:50990/229:50991/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:50990/229:50991/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50994": return (<Root {...rootAttributes} className={[s.n163,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50994"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n24} data-layer={"229:50994/229:50995"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:50994/229:50995/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:50994/229:50995/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:50994/229:50995/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:50994/229:50995/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:50998": return (<Root {...rootAttributes} className={[s.n164,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:50998"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n30} data-layer={"229:50998/229:50999"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:50998/229:50999/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:50998/229:50999/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:50998/229:50999/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:50998/229:50999/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51002": return (<Root {...rootAttributes} className={[s.n165,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51002"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n36} data-layer={"229:51002/229:51003"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51002/229:51003/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51002/229:51003/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:51002/229:51003/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51002/229:51003/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51006": return (<Root {...rootAttributes} className={[s.n166,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51006"} data-name={"state=icon button, size=XS, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n38} data-layer={"229:51006/229:51007"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51006/229:51007/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51006/229:51007/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:51006/229:51007/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51006/229:51007/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51010": return (<Root {...rootAttributes} className={[s.n167,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51010"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n24} data-layer={"229:51010/229:51011"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51010/229:51011/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51010/229:51011/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:51010/229:51011/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51010/229:51011/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51014": return (<Root {...rootAttributes} className={[s.n168,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51014"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=default"}>
  <span className={s.n38} data-layer={"229:51014/229:51015"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51014/229:51015/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51014/229:51015/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:51014/229:51015/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51014/229:51015/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51018": return (<Root {...rootAttributes} className={[s.n169,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51018"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n24} data-layer={"229:51018/229:51019"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51018/229:51019/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51018/229:51019/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:51018/229:51019/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51018/229:51019/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51022": return (<Root {...rootAttributes} className={[s.n170,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51022"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n30} data-layer={"229:51022/229:51023"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51022/229:51023/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51022/229:51023/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:51022/229:51023/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51022/229:51023/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51026": return (<Root {...rootAttributes} className={[s.n171,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51026"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=disabled"}>
  <span className={s.n38} data-layer={"229:51026/229:51027"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51026/229:51027/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51026/229:51027/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:51026/229:51027/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51026/229:51027/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51030": return (<Root {...rootAttributes} className={[s.n167,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51030"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n24} data-layer={"229:51030/229:51033"} data-name={"Spinner/var"}>
    <span className={s.n109} data-layer={"229:51030/229:51033/227:1708"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g663_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g663_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n28} data-layer={"229:51030/229:51033/227:1709"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:51034": return (<Root {...rootAttributes} className={[s.n56,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51034"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n30} data-layer={"229:51034/229:51037"} data-name={"Spinner/var"}>
    <span className={s.n113} data-layer={"229:51034/229:51037/227:1717"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g667_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g667_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n34} data-layer={"229:51034/229:51037/227:1718"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:51038": return (<Root {...rootAttributes} className={[s.n58,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51038"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n36} data-layer={"229:51038/229:51041"} data-name={"Spinner/var"}>
    <span className={s.n116} data-layer={"229:51038/229:51041/227:1714"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g671_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g671_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"229:51038/229:51041/227:1715"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:51042": return (<Root {...rootAttributes} className={[s.n168,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51042"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=louder"}>
  <span className={s.n38} data-layer={"229:51042/229:51045"} data-name={"Spinner/var"}>
    <span className={s.n121} data-layer={"229:51042/229:51045/227:1711"} data-name={"Ellipse 51"}>
      <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g675_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g675_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n13} data-layer={"229:51042/229:51045/227:1712"} data-name={"Rectangle 3464198"}></span>
  </span>
</Root>);
case "229:51046": return (<Root {...rootAttributes} className={[s.n172,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51046"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n24} data-layer={"229:51046/229:51047"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51046/229:51047/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51046/229:51047/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:51046/229:51047/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51046/229:51047/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51050": return (<Root {...rootAttributes} className={[s.n173,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51050"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n30} data-layer={"229:51050/229:51051"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51050/229:51051/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51050/229:51051/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:51050/229:51051/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51050/229:51051/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51054": return (<Root {...rootAttributes} className={[s.n174,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51054"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n36} data-layer={"229:51054/229:51055"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51054/229:51055/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51054/229:51055/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:51054/229:51055/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51054/229:51055/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51058": return (<Root {...rootAttributes} className={[s.n175,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51058"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=focusfault"}>
  <span className={s.n38} data-layer={"229:51058/229:51059"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51058/229:51059/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51058/229:51059/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:51058/229:51059/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51058/229:51059/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51062": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51062"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n24} data-layer={"229:51062/229:51063"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51062/229:51063/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51062/229:51063/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:51062/229:51063/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51062/229:51063/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51066": return (<Root {...rootAttributes} className={[s.n37,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51066"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=hover"}>
  <span className={s.n38} data-layer={"229:51066/229:51067"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51066/229:51067/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51066/229:51067/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:51066/229:51067/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51066/229:51067/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51070": return (<Root {...rootAttributes} className={[s.n163,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51070"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n24} data-layer={"229:51070/229:51071"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51070/229:51071/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51070/229:51071/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"229:51070/229:51071/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51070/229:51071/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51074": return (<Root {...rootAttributes} className={[s.n164,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51074"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n30} data-layer={"229:51074/229:51075"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51074/229:51075/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51074/229:51075/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n33} data-layer={"229:51074/229:51075/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51074/229:51075/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51078": return (<Root {...rootAttributes} className={[s.n165,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51078"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n36} data-layer={"229:51078/229:51079"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51078/229:51079/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51078/229:51079/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n4} data-layer={"229:51078/229:51079/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51078/229:51079/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51082": return (<Root {...rootAttributes} className={[s.n166,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51082"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=press"}>
  <span className={s.n38} data-layer={"229:51082/229:51083"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51082/229:51083/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51082/229:51083/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n12} data-layer={"229:51082/229:51083/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51082/229:51083/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51086": return (<Root {...rootAttributes} className={[s.n176,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51086"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n177} data-layer={"229:51086/229:51087"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51086/229:51087/229:51088"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51086/229:51087/229:51088/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51086/229:51087/229:51088/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51086/229:51087/229:51088/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51086/229:51087/229:51088/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51086/229:51087/229:51088/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n182} data-layer={"229:51086/229:51087/229:51089"} data-name={"Button"}>
      {textSlot(text,"229:51086/229:51087/229:51089","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51091": return (<Root {...rootAttributes} className={[s.n183,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51091"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n184} data-layer={"229:51091/229:51092"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51091/229:51092/232:55962"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51091/229:51092/234:51911"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51091/229:51092/231:57958"} data-name={"icon/set/base"}></span>
    <span className={s.n185} data-layer={"229:51091/229:51092/229:51094"} data-name={"Button"}>
      {textSlot(text,"229:51091/229:51092/229:51094","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51096": return (<Root {...rootAttributes} className={[s.n186,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51096"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n187} data-layer={"229:51096/229:51097"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51096/229:51097/232:55716"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51096/229:51097/234:51897"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51096/229:51097/231:57712"} data-name={"icon/set/base"}></span>
    <span className={s.n188} data-layer={"229:51096/229:51097/229:51099"} data-name={"Button"}>
      {textSlot(text,"229:51096/229:51097/229:51099","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51101": return (<Root {...rootAttributes} className={[s.n189,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51101"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n190} data-layer={"229:51101/229:51102"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51101/229:51102/232:55699"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51101/229:51102/234:51892"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51101/229:51102/231:57695"} data-name={"icon/set/base"}></span>
    <span className={s.n191} data-layer={"229:51101/229:51102/229:51104"} data-name={"Button"}>
      {textSlot(text,"229:51101/229:51102/229:51104","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51106": return (<Root {...rootAttributes} className={[s.n192,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51106"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n193} data-layer={"229:51106/229:51107"} data-name={"left, right icon & text"}>
    <span className={s.n194} data-layer={"229:51106/229:51107/229:51109"} data-name={"Button"}>
      {textSlot(text,"229:51106/229:51107/229:51109","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51111": return (<Root {...rootAttributes} className={[s.n195,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51111"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n196} data-layer={"229:51111/229:51112"} data-name={"left, right icon & text"}>
    <span className={s.n197} data-layer={"229:51111/229:51112/229:51114"} data-name={"Button"}>
      {textSlot(text,"229:51111/229:51112/229:51114","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51116": return (<Root {...rootAttributes} className={[s.n198,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51116"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n199} data-layer={"229:51116/229:51117"} data-name={"left, right icon & text"}>
    <span className={s.n200} data-layer={"229:51116/229:51117/229:51119"} data-name={"Button"}>
      {textSlot(text,"229:51116/229:51117/229:51119","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51121": return (<Root {...rootAttributes} className={[s.n176,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51121"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n201} data-layer={"229:51121/229:51122"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51121/229:51122/229:51123"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51121/229:51122/229:51123/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51121/229:51122/229:51123/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51121/229:51122/229:51123/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51121/229:51122/229:51123/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51121/229:51122/229:51123/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n202} data-layer={"229:51121/229:51122/229:51124"} data-name={"Button"}>
      {textSlot(text,"229:51121/229:51122/229:51124","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51126": return (<Root {...rootAttributes} className={[s.n183,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51126"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n203} data-layer={"229:51126/229:51127"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51126/229:51127/232:55963"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51126/229:51127/234:51912"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51126/229:51127/231:57959"} data-name={"icon/set/base"}></span>
    <span className={s.n204} data-layer={"229:51126/229:51127/229:51129"} data-name={"Button"}>
      {textSlot(text,"229:51126/229:51127/229:51129","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51131": return (<Root {...rootAttributes} className={[s.n186,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51131"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n205} data-layer={"229:51131/229:51132"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51131/229:51132/232:55717"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51131/229:51132/234:51898"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51131/229:51132/231:57713"} data-name={"icon/set/base"}></span>
    <span className={s.n206} data-layer={"229:51131/229:51132/229:51134"} data-name={"Button"}>
      {textSlot(text,"229:51131/229:51132/229:51134","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51136": return (<Root {...rootAttributes} className={[s.n189,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51136"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n207} data-layer={"229:51136/229:51137"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51136/229:51137/232:55698"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51136/229:51137/234:51891"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51136/229:51137/231:57694"} data-name={"icon/set/base"}></span>
    <span className={s.n208} data-layer={"229:51136/229:51137/229:51139"} data-name={"Button"}>
      {textSlot(text,"229:51136/229:51137/229:51139","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51141": return (<Root {...rootAttributes} className={[s.n192,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51141"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n209} data-layer={"229:51141/229:51142"} data-name={"left, right icon & text"}>
    <span className={s.n210} data-layer={"229:51141/229:51142/229:51144"} data-name={"Button"}>
      {textSlot(text,"229:51141/229:51142/229:51144","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51146": return (<Root {...rootAttributes} className={[s.n195,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51146"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n211} data-layer={"229:51146/229:51147"} data-name={"left, right icon & text"}>
    <span className={s.n212} data-layer={"229:51146/229:51147/229:51149"} data-name={"Button"}>
      {textSlot(text,"229:51146/229:51147/229:51149","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51151": return (<Root {...rootAttributes} className={[s.n198,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51151"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n213} data-layer={"229:51151/229:51152"} data-name={"left, right icon & text"}>
    <span className={s.n214} data-layer={"229:51151/229:51152/229:51154"} data-name={"Button"}>
      {textSlot(text,"229:51151/229:51152/229:51154","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51156": return (<Root {...rootAttributes} className={[s.n215,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51156"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n216} data-layer={"229:51156/229:51157"} data-name={"left, right icon & text"}>
    <span className={s.n217} data-layer={"229:51156/229:51157/229:51159"} data-name={"Button"}>
      {textSlot(text,"229:51156/229:51157/229:51159","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51161": return (<Root {...rootAttributes} className={[s.n176,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51161"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n177} data-layer={"229:51161/229:51162"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51161/229:51162/229:51163"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51161/229:51162/229:51163/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51161/229:51162/229:51163/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51161/229:51162/229:51163/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51161/229:51162/229:51163/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51161/229:51162/229:51163/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n218} data-layer={"229:51161/229:51162/229:51164"} data-name={"spinner"}>
      <span className={s.n123} data-layer={"229:51161/229:51162/229:51164/229:51165"} data-name={"Spinner/var"}>
        <span className={s.n109} data-layer={"229:51161/229:51162/229:51164/229:51165/227:1708"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g822_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g822_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n28} data-layer={"229:51161/229:51162/229:51164/229:51165/227:1709"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51167": return (<Root {...rootAttributes} className={[s.n219,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51167"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n220} data-layer={"229:51167/229:51168"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51167/229:51168/232:55964"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51167/229:51168/234:51913"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51167/229:51168/231:57960"} data-name={"icon/set/base"}></span>
    <span className={s.n221} data-layer={"229:51167/229:51168/229:51170"} data-name={"spinner"}>
      <span className={s.n222} data-layer={"229:51167/229:51168/229:51170/229:51171"} data-name={"Spinner/var"}>
        <span className={s.n113} data-layer={"229:51167/229:51168/229:51170/229:51171/227:1717"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g831_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g831_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n34} data-layer={"229:51167/229:51168/229:51170/229:51171/227:1718"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51173": return (<Root {...rootAttributes} className={[s.n223,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51173"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n224} data-layer={"229:51173/229:51174"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51173/229:51174/232:55721"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51173/229:51174/234:51902"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51173/229:51174/231:57717"} data-name={"icon/set/base"}></span>
    <span className={s.n225} data-layer={"229:51173/229:51174/229:51176"} data-name={"spinner"}>
      <span className={s.n127} data-layer={"229:51173/229:51174/229:51176/229:51177"} data-name={"Spinner/var"}>
        <span className={s.n116} data-layer={"229:51173/229:51174/229:51176/229:51177/227:1714"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g840_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g840_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n5} data-layer={"229:51173/229:51174/229:51176/229:51177/227:1715"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51179": return (<Root {...rootAttributes} className={[s.n226,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51179"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n227} data-layer={"229:51179/229:51180"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51179/229:51180/232:55700"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51179/229:51180/234:51893"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51179/229:51180/231:57696"} data-name={"icon/set/base"}></span>
    <span className={s.n228} data-layer={"229:51179/229:51180/229:51182"} data-name={"spinner"}>
      <span className={s.n129} data-layer={"229:51179/229:51180/229:51182/229:51183"} data-name={"Spinner/var"}>
        <span className={s.n121} data-layer={"229:51179/229:51180/229:51182/229:51183/227:1711"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g849_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g849_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n13} data-layer={"229:51179/229:51180/229:51182/229:51183/227:1712"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51185": return (<Root {...rootAttributes} className={[s.n192,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51185"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n193} data-layer={"229:51185/229:51186"} data-name={"left, right icon & text"}>
    <span className={s.n229} data-layer={"229:51185/229:51186/229:51188"} data-name={"spinner"}>
      <span className={s.n123} data-layer={"229:51185/229:51186/229:51188/229:51189"} data-name={"Spinner/var"}>
        <span className={s.n109} data-layer={"229:51185/229:51186/229:51188/229:51189/227:1708"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g855_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g855_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n28} data-layer={"229:51185/229:51186/229:51188/229:51189/227:1709"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51191": return (<Root {...rootAttributes} className={[s.n230,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51191"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n231} data-layer={"229:51191/229:51192"} data-name={"left, right icon & text"}>
    <span className={s.n232} data-layer={"229:51191/229:51192/229:51194"} data-name={"spinner"}>
      <span className={s.n222} data-layer={"229:51191/229:51192/229:51194/229:51195"} data-name={"Spinner/var"}>
        <span className={s.n113} data-layer={"229:51191/229:51192/229:51194/229:51195/227:1717"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g861_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g861_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n34} data-layer={"229:51191/229:51192/229:51194/229:51195/227:1718"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51197": return (<Root {...rootAttributes} className={[s.n233,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51197"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n234} data-layer={"229:51197/229:51198"} data-name={"left, right icon & text"}>
    <span className={s.n235} data-layer={"229:51197/229:51198/229:51200"} data-name={"spinner"}>
      <span className={s.n127} data-layer={"229:51197/229:51198/229:51200/229:51201"} data-name={"Spinner/var"}>
        <span className={s.n116} data-layer={"229:51197/229:51198/229:51200/229:51201/227:1714"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g867_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g867_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n5} data-layer={"229:51197/229:51198/229:51200/229:51201/227:1715"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51203": return (<Root {...rootAttributes} className={[s.n236,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51203"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n237} data-layer={"229:51203/229:51204"} data-name={"left, right icon & text"}>
    <span className={s.n238} data-layer={"229:51203/229:51204/229:51206"} data-name={"spinner"}>
      <span className={s.n129} data-layer={"229:51203/229:51204/229:51206/229:51207"} data-name={"Spinner/var"}>
        <span className={s.n121} data-layer={"229:51203/229:51204/229:51206/229:51207/227:1711"} data-name={"Ellipse 51"}>
          <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g873_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g873_strokeGeometry0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n13} data-layer={"229:51203/229:51204/229:51206/229:51207/227:1712"} data-name={"Rectangle 3464198"}></span>
      </span>
    </span>
  </span>
</Root>);
case "229:51209": return (<Root {...rootAttributes} className={[s.n239,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51209"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n177} data-layer={"229:51209/229:51210"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51209/229:51210/229:51211"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51209/229:51210/229:51211/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51209/229:51210/229:51211/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51209/229:51210/229:51211/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51209/229:51210/229:51211/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51209/229:51210/229:51211/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n182} data-layer={"229:51209/229:51210/229:51212"} data-name={"Button"}>
      {textSlot(text,"229:51209/229:51210/229:51212","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51214": return (<Root {...rootAttributes} className={[s.n240,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51214"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n184} data-layer={"229:51214/229:51215"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51214/229:51215/232:55965"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51214/229:51215/234:51914"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51214/229:51215/231:57961"} data-name={"icon/set/base"}></span>
    <span className={s.n185} data-layer={"229:51214/229:51215/229:51217"} data-name={"Button"}>
      {textSlot(text,"229:51214/229:51215/229:51217","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51219": return (<Root {...rootAttributes} className={[s.n241,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51219"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n187} data-layer={"229:51219/229:51220"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51219/229:51220/232:55719"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51219/229:51220/234:51900"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51219/229:51220/231:57715"} data-name={"icon/set/base"}></span>
    <span className={s.n188} data-layer={"229:51219/229:51220/229:51222"} data-name={"Button"}>
      {textSlot(text,"229:51219/229:51220/229:51222","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51224": return (<Root {...rootAttributes} className={[s.n242,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51224"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n190} data-layer={"229:51224/229:51225"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51224/229:51225/232:55697"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51224/229:51225/234:51890"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51224/229:51225/231:57693"} data-name={"icon/set/base"}></span>
    <span className={s.n191} data-layer={"229:51224/229:51225/229:51227"} data-name={"Button"}>
      {textSlot(text,"229:51224/229:51225/229:51227","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51229": return (<Root {...rootAttributes} className={[s.n243,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51229"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n193} data-layer={"229:51229/229:51230"} data-name={"left, right icon & text"}>
    <span className={s.n194} data-layer={"229:51229/229:51230/229:51232"} data-name={"Button"}>
      {textSlot(text,"229:51229/229:51230/229:51232","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51234": return (<Root {...rootAttributes} className={[s.n244,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51234"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n196} data-layer={"229:51234/229:51235"} data-name={"left, right icon & text"}>
    <span className={s.n197} data-layer={"229:51234/229:51235/229:51237"} data-name={"Button"}>
      {textSlot(text,"229:51234/229:51235/229:51237","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51239": return (<Root {...rootAttributes} className={[s.n245,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51239"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n199} data-layer={"229:51239/229:51240"} data-name={"left, right icon & text"}>
    <span className={s.n200} data-layer={"229:51239/229:51240/229:51242"} data-name={"Button"}>
      {textSlot(text,"229:51239/229:51240/229:51242","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51244": return (<Root {...rootAttributes} className={[s.n246,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51244"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n74} data-layer={"229:51244/229:51245"} data-name={"left, right icon & text"}>
    <span className={s.n75} data-layer={"229:51244/229:51245/229:51247"} data-name={"Button"}>
      {textSlot(text,"229:51244/229:51245/229:51247","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51249": return (<Root {...rootAttributes} className={[s.n247,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51249"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n248} data-layer={"229:51249/229:51250"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51249/229:51250/229:51251"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51249/229:51250/229:51251/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51249/229:51250/229:51251/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51249/229:51250/229:51251/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51249/229:51250/229:51251/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51249/229:51250/229:51251/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n182} data-layer={"229:51249/229:51250/229:51252"} data-name={"Button"}>
      {textSlot(text,"229:51249/229:51250/229:51252","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51254": return (<Root {...rootAttributes} className={[s.n249,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51254"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n250} data-layer={"229:51254/229:51255"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51254/229:51255/232:55968"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51254/229:51255/234:51917"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51254/229:51255/231:57964"} data-name={"icon/set/base"}></span>
    <span className={s.n185} data-layer={"229:51254/229:51255/229:51257"} data-name={"Button"}>
      {textSlot(text,"229:51254/229:51255/229:51257","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51259": return (<Root {...rootAttributes} className={[s.n251,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51259"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n252} data-layer={"229:51259/229:51260"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51259/229:51260/232:55722"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51259/229:51260/234:51903"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51259/229:51260/231:57718"} data-name={"icon/set/base"}></span>
    <span className={s.n188} data-layer={"229:51259/229:51260/229:51262"} data-name={"Button"}>
      {textSlot(text,"229:51259/229:51260/229:51262","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51264": return (<Root {...rootAttributes} className={[s.n253,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51264"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n254} data-layer={"229:51264/229:51265"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51264/229:51265/232:55701"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51264/229:51265/234:51894"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51264/229:51265/231:57697"} data-name={"icon/set/base"}></span>
    <span className={s.n191} data-layer={"229:51264/229:51265/229:51267"} data-name={"Button"}>
      {textSlot(text,"229:51264/229:51265/229:51267","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51269": return (<Root {...rootAttributes} className={[s.n255,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51269"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n256} data-layer={"229:51269/229:51270"} data-name={"left, right icon & text"}>
    <span className={s.n194} data-layer={"229:51269/229:51270/229:51272"} data-name={"Button"}>
      {textSlot(text,"229:51269/229:51270/229:51272","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51274": return (<Root {...rootAttributes} className={[s.n257,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51274"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n258} data-layer={"229:51274/229:51275"} data-name={"left, right icon & text"}>
    <span className={s.n197} data-layer={"229:51274/229:51275/229:51277"} data-name={"Button"}>
      {textSlot(text,"229:51274/229:51275/229:51277","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51279": return (<Root {...rootAttributes} className={[s.n259,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51279"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n260} data-layer={"229:51279/229:51280"} data-name={"left, right icon & text"}>
    <span className={s.n200} data-layer={"229:51279/229:51280/229:51282"} data-name={"Button"}>
      {textSlot(text,"229:51279/229:51280/229:51282","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51284": return (<Root {...rootAttributes} className={[s.n247,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51284"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n261} data-layer={"229:51284/229:51285"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51284/229:51285/229:51286"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51284/229:51285/229:51286/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51284/229:51285/229:51286/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51284/229:51285/229:51286/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51284/229:51285/229:51286/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51284/229:51285/229:51286/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n182} data-layer={"229:51284/229:51285/229:51287"} data-name={"Button"}>
      {textSlot(text,"229:51284/229:51285/229:51287","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51289": return (<Root {...rootAttributes} className={[s.n249,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51289"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n262} data-layer={"229:51289/229:51290"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51289/229:51290/232:55967"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51289/229:51290/234:51916"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51289/229:51290/231:57963"} data-name={"icon/set/base"}></span>
    <span className={s.n185} data-layer={"229:51289/229:51290/229:51292"} data-name={"Button"}>
      {textSlot(text,"229:51289/229:51290/229:51292","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51294": return (<Root {...rootAttributes} className={[s.n251,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51294"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n263} data-layer={"229:51294/229:51295"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51294/229:51295/232:55720"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51294/229:51295/234:51901"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51294/229:51295/231:57716"} data-name={"icon/set/base"}></span>
    <span className={s.n188} data-layer={"229:51294/229:51295/229:51297"} data-name={"Button"}>
      {textSlot(text,"229:51294/229:51295/229:51297","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51299": return (<Root {...rootAttributes} className={[s.n253,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51299"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n264} data-layer={"229:51299/229:51300"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51299/229:51300/232:55702"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51299/229:51300/234:51895"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51299/229:51300/231:57698"} data-name={"icon/set/base"}></span>
    <span className={s.n191} data-layer={"229:51299/229:51300/229:51302"} data-name={"Button"}>
      {textSlot(text,"229:51299/229:51300/229:51302","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51304": return (<Root {...rootAttributes} className={[s.n255,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51304"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n265} data-layer={"229:51304/229:51305"} data-name={"left, right icon & text"}>
    <span className={s.n194} data-layer={"229:51304/229:51305/229:51307"} data-name={"Button"}>
      {textSlot(text,"229:51304/229:51305/229:51307","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51309": return (<Root {...rootAttributes} className={[s.n257,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51309"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n266} data-layer={"229:51309/229:51310"} data-name={"left, right icon & text"}>
    <span className={s.n197} data-layer={"229:51309/229:51310/229:51312"} data-name={"Button"}>
      {textSlot(text,"229:51309/229:51310/229:51312","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51314": return (<Root {...rootAttributes} className={[s.n259,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51314"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n267} data-layer={"229:51314/229:51315"} data-name={"left, right icon & text"}>
    <span className={s.n200} data-layer={"229:51314/229:51315/229:51317"} data-name={"Button"}>
      {textSlot(text,"229:51314/229:51315/229:51317","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51319": return (<Root {...rootAttributes} className={[s.n73,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51319"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n268} data-layer={"229:51319/229:51320"} data-name={"left, right icon & text"}>
    <span className={s.n75} data-layer={"229:51319/229:51320/229:51322"} data-name={"Button"}>
      {textSlot(text,"229:51319/229:51320/229:51322","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51324": return (<Root {...rootAttributes} className={[s.n269,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51324"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n41} data-layer={"229:51324/229:51325"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51324/229:51325/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n81} data-layer={"229:51324/229:51326"} data-name={"Button"}>
    {textSlot(text,"229:51324/229:51326","Button","Button")}
  </span>
</Root>);
case "229:51328": return (<Root {...rootAttributes} className={[s.n271,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51328"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n83} data-layer={"229:51328/232:55875"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51328/234:51904"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51328/231:57871"} data-name={"icon/set/base"}></span>
  <span className={s.n84} data-layer={"229:51328/229:51330"} data-name={"Button"}>
    {textSlot(text,"229:51328/229:51330","Button","Button")}
  </span>
</Root>);
case "229:51332": return (<Root {...rootAttributes} className={[s.n272,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51332"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n1} data-layer={"229:51332/229:51333"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51332/229:51333/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51332/229:51333/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n6} data-layer={"229:51332/229:51334"} data-name={"Button"}>
    {textSlot(text,"229:51332/229:51334","Button","Button")}
  </span>
</Root>);
case "229:51336": return (<Root {...rootAttributes} className={[s.n274,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51336"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n9} data-layer={"229:51336/232:56121"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51336/234:51918"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51336/231:58117"} data-name={"icon/set/base"}></span>
  <span className={s.n14} data-layer={"229:51336/229:51338"} data-name={"Button"}>
    {textSlot(text,"229:51336/229:51338","Button","Button")}
  </span>
</Root>);
case "229:51340": return (<Root {...rootAttributes} className={[s.n275,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51340"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n276} data-layer={"229:51340/229:51342"} data-name={"Button"}>
    {textSlot(text,"229:51340/229:51342","Button","Button")}
  </span>
</Root>);
case "229:51344": return (<Root {...rootAttributes} className={[s.n277,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51344"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n18} data-layer={"229:51344/229:51346"} data-name={"Button"}>
    {textSlot(text,"229:51344/229:51346","Button","Button")}
  </span>
</Root>);
case "229:51348": return (<Root {...rootAttributes} className={[s.n278,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51348"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n22} data-layer={"229:51348/229:51350"} data-name={"Button"}>
    {textSlot(text,"229:51348/229:51350","Button","Button")}
  </span>
</Root>);
case "229:51352": return (<Root {...rootAttributes} className={[s.n269,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51352"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n41} data-layer={"229:51352/229:51353"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51352/229:51353/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n91} data-layer={"229:51352/229:51354"} data-name={"Button"}>
    {textSlot(text,"229:51352/229:51354","Button","Button")}
  </span>
</Root>);
case "229:51356": return (<Root {...rootAttributes} className={[s.n271,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51356"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n83} data-layer={"229:51356/232:55880"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51356/234:51909"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51356/231:57876"} data-name={"icon/set/base"}></span>
  <span className={s.n94} data-layer={"229:51356/229:51358"} data-name={"Button"}>
    {textSlot(text,"229:51356/229:51358","Button","Button")}
  </span>
</Root>);
case "229:51360": return (<Root {...rootAttributes} className={[s.n272,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51360"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n1} data-layer={"229:51360/229:51361"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51360/229:51361/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51360/229:51361/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n96} data-layer={"229:51360/229:51362"} data-name={"Button"}>
    {textSlot(text,"229:51360/229:51362","Button","Button")}
  </span>
</Root>);
case "229:51364": return (<Root {...rootAttributes} className={[s.n274,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51364"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n9} data-layer={"229:51364/232:56127"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51364/234:51924"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51364/231:58123"} data-name={"icon/set/base"}></span>
  <span className={s.n99} data-layer={"229:51364/229:51366"} data-name={"Button"}>
    {textSlot(text,"229:51364/229:51366","Button","Button")}
  </span>
</Root>);
case "229:51368": return (<Root {...rootAttributes} className={[s.n279,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51368"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n280} data-layer={"229:51368/229:51370"} data-name={"Button"}>
    {textSlot(text,"229:51368/229:51370","Button","Button")}
  </span>
</Root>);
case "229:51372": return (<Root {...rootAttributes} className={[s.n277,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51372"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n71} data-layer={"229:51372/229:51374"} data-name={"Button"}>
    {textSlot(text,"229:51372/229:51374","Button","Button")}
  </span>
</Root>);
case "229:51376": return (<Root {...rootAttributes} className={[s.n281,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51376"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n104} data-layer={"229:51376/229:51378"} data-name={"Button"}>
    {textSlot(text,"229:51376/229:51378","Button","Button")}
  </span>
</Root>);
case "229:51380": return (<Root {...rootAttributes} className={[s.n278,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51380"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n106} data-layer={"229:51380/229:51382"} data-name={"Button"}>
    {textSlot(text,"229:51380/229:51382","Button","Button")}
  </span>
</Root>);
case "229:51384": return (<Root {...rootAttributes} className={[s.n269,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51384"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n41} data-layer={"229:51384/229:51385"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51384/229:51385/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n282} data-layer={"229:51384/229:51387"} data-name={"spinner"}>
    <span className={s.n123} data-layer={"229:51384/229:51387/229:51388"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:51384/229:51387/229:51388/227:1708"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1046_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g1046_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:51384/229:51387/229:51388/227:1709"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51389": return (<Root {...rootAttributes} className={[s.n283,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51389"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n83} data-layer={"229:51389/232:55877"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51389/234:51906"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51389/231:57873"} data-name={"icon/set/base"}></span>
  <span className={s.n284} data-layer={"229:51389/229:51392"} data-name={"spinner"}>
    <span className={s.n222} data-layer={"229:51389/229:51392/229:51393"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:51389/229:51392/229:51393/227:1717"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1054_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g1054_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:51389/229:51392/229:51393/227:1718"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51394": return (<Root {...rootAttributes} className={[s.n272,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51394"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n1} data-layer={"229:51394/229:51395"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51394/229:51395/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51394/229:51395/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n285} data-layer={"229:51394/229:51397"} data-name={"spinner"}>
    <span className={s.n127} data-layer={"229:51394/229:51397/229:51398"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:51394/229:51397/229:51398/227:1714"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1062_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g1062_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:51394/229:51397/229:51398/227:1715"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51399": return (<Root {...rootAttributes} className={[s.n274,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51399"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n9} data-layer={"229:51399/232:56123"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51399/234:51920"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51399/231:58119"} data-name={"icon/set/base"}></span>
  <span className={s.n286} data-layer={"229:51399/229:51402"} data-name={"spinner"}>
    <span className={s.n129} data-layer={"229:51399/229:51402/229:51403"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:51399/229:51402/229:51403/227:1711"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1070_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g1070_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:51399/229:51402/229:51403/227:1712"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51404": return (<Root {...rootAttributes} className={[s.n279,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51404"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n287} data-layer={"229:51404/229:51407"} data-name={"spinner"}>
    <span className={s.n123} data-layer={"229:51404/229:51407/229:51408"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:51404/229:51407/229:51408/227:1708"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1075_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g1075_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:51404/229:51407/229:51408/227:1709"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51409": return (<Root {...rootAttributes} className={[s.n288,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51409"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n289} data-layer={"229:51409/229:51412"} data-name={"spinner"}>
    <span className={s.n222} data-layer={"229:51409/229:51412/229:51413"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:51409/229:51412/229:51413/227:1717"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1080_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g1080_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:51409/229:51412/229:51413/227:1718"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51414": return (<Root {...rootAttributes} className={[s.n281,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51414"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n126} data-layer={"229:51414/229:51417"} data-name={"spinner"}>
    <span className={s.n127} data-layer={"229:51414/229:51417/229:51418"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:51414/229:51417/229:51418/227:1714"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1085_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g1085_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:51414/229:51417/229:51418/227:1715"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51419": return (<Root {...rootAttributes} className={[s.n290,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51419"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n128} data-layer={"229:51419/229:51422"} data-name={"spinner"}>
    <span className={s.n129} data-layer={"229:51419/229:51422/229:51423"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:51419/229:51422/229:51423/227:1711"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1090_strokeGeometry0`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g1090_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:51419/229:51422/229:51423/227:1712"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51424": return (<Root {...rootAttributes} className={[s.n291,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51424"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n41} data-layer={"229:51424/229:51425"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51424/229:51425/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n81} data-layer={"229:51424/229:51426"} data-name={"Button"}>
    {textSlot(text,"229:51424/229:51426","Button","Button")}
  </span>
</Root>);
case "229:51428": return (<Root {...rootAttributes} className={[s.n292,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51428"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n83} data-layer={"229:51428/232:55876"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51428/234:51905"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51428/231:57872"} data-name={"icon/set/base"}></span>
  <span className={s.n84} data-layer={"229:51428/229:51430"} data-name={"Button"}>
    {textSlot(text,"229:51428/229:51430","Button","Button")}
  </span>
</Root>);
case "229:51432": return (<Root {...rootAttributes} className={[s.n293,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51432"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n1} data-layer={"229:51432/229:51433"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51432/229:51433/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51432/229:51433/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n6} data-layer={"229:51432/229:51434"} data-name={"Button"}>
    {textSlot(text,"229:51432/229:51434","Button","Button")}
  </span>
</Root>);
case "229:51436": return (<Root {...rootAttributes} className={[s.n294,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51436"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n9} data-layer={"229:51436/232:56124"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51436/234:51921"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51436/231:58120"} data-name={"icon/set/base"}></span>
  <span className={s.n14} data-layer={"229:51436/229:51438"} data-name={"Button"}>
    {textSlot(text,"229:51436/229:51438","Button","Button")}
  </span>
</Root>);
case "229:51440": return (<Root {...rootAttributes} className={[s.n295,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51440"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n276} data-layer={"229:51440/229:51442"} data-name={"Button"}>
    {textSlot(text,"229:51440/229:51442","Button","Button")}
  </span>
</Root>);
case "229:51444": return (<Root {...rootAttributes} className={[s.n296,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51444"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n18} data-layer={"229:51444/229:51446"} data-name={"Button"}>
    {textSlot(text,"229:51444/229:51446","Button","Button")}
  </span>
</Root>);
case "229:51448": return (<Root {...rootAttributes} className={[s.n297,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51448"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n20} data-layer={"229:51448/229:51450"} data-name={"Button"}>
    {textSlot(text,"229:51448/229:51450","Button","Button")}
  </span>
</Root>);
case "229:51452": return (<Root {...rootAttributes} className={[s.n298,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51452"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n22} data-layer={"229:51452/229:51454"} data-name={"Button"}>
    {textSlot(text,"229:51452/229:51454","Button","Button")}
  </span>
</Root>);
case "229:51456": return (<Root {...rootAttributes} className={[s.n299,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51456"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n41} data-layer={"229:51456/229:51457"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51456/229:51457/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n81} data-layer={"229:51456/229:51458"} data-name={"Button"}>
    {textSlot(text,"229:51456/229:51458","Button","Button")}
  </span>
</Root>);
case "229:51460": return (<Root {...rootAttributes} className={[s.n300,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51460"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n83} data-layer={"229:51460/232:55878"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51460/234:51907"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51460/231:57874"} data-name={"icon/set/base"}></span>
  <span className={s.n84} data-layer={"229:51460/229:51462"} data-name={"Button"}>
    {textSlot(text,"229:51460/229:51462","Button","Button")}
  </span>
</Root>);
case "229:51464": return (<Root {...rootAttributes} className={[s.n301,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51464"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n1} data-layer={"229:51464/229:51465"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51464/229:51465/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51464/229:51465/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n6} data-layer={"229:51464/229:51466"} data-name={"Button"}>
    {textSlot(text,"229:51464/229:51466","Button","Button")}
  </span>
</Root>);
case "229:51468": return (<Root {...rootAttributes} className={[s.n302,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51468"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n9} data-layer={"229:51468/232:56126"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51468/234:51923"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51468/231:58122"} data-name={"icon/set/base"}></span>
  <span className={s.n14} data-layer={"229:51468/229:51470"} data-name={"Button"}>
    {textSlot(text,"229:51468/229:51470","Button","Button")}
  </span>
</Root>);
case "229:51472": return (<Root {...rootAttributes} className={[s.n303,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51472"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n276} data-layer={"229:51472/229:51474"} data-name={"Button"}>
    {textSlot(text,"229:51472/229:51474","Button","Button")}
  </span>
</Root>);
case "229:51476": return (<Root {...rootAttributes} className={[s.n304,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51476"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n18} data-layer={"229:51476/229:51478"} data-name={"Button"}>
    {textSlot(text,"229:51476/229:51478","Button","Button")}
  </span>
</Root>);
case "229:51480": return (<Root {...rootAttributes} className={[s.n305,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51480"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n22} data-layer={"229:51480/229:51482"} data-name={"Button"}>
    {textSlot(text,"229:51480/229:51482","Button","Button")}
  </span>
</Root>);
case "229:51484": return (<Root {...rootAttributes} className={[s.n306,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51484"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n41} data-layer={"229:51484/229:51485"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51484/229:51485/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n81} data-layer={"229:51484/229:51486"} data-name={"Button"}>
    {textSlot(text,"229:51484/229:51486","Button","Button")}
  </span>
</Root>);
case "229:51488": return (<Root {...rootAttributes} className={[s.n307,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51488"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n83} data-layer={"229:51488/232:55879"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51488/234:51908"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51488/231:57875"} data-name={"icon/set/base"}></span>
  <span className={s.n84} data-layer={"229:51488/229:51490"} data-name={"Button"}>
    {textSlot(text,"229:51488/229:51490","Button","Button")}
  </span>
</Root>);
case "229:51492": return (<Root {...rootAttributes} className={[s.n308,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51492"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n1} data-layer={"229:51492/229:51493"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51492/229:51493/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51492/229:51493/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n6} data-layer={"229:51492/229:51494"} data-name={"Button"}>
    {textSlot(text,"229:51492/229:51494","Button","Button")}
  </span>
</Root>);
case "229:51496": return (<Root {...rootAttributes} className={[s.n309,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51496"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n9} data-layer={"229:51496/232:56122"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51496/234:51919"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51496/231:58118"} data-name={"icon/set/base"}></span>
  <span className={s.n14} data-layer={"229:51496/229:51498"} data-name={"Button"}>
    {textSlot(text,"229:51496/229:51498","Button","Button")}
  </span>
</Root>);
case "229:51500": return (<Root {...rootAttributes} className={[s.n310,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51500"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n276} data-layer={"229:51500/229:51502"} data-name={"Button"}>
    {textSlot(text,"229:51500/229:51502","Button","Button")}
  </span>
</Root>);
case "229:51504": return (<Root {...rootAttributes} className={[s.n311,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51504"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n18} data-layer={"229:51504/229:51506"} data-name={"Button"}>
    {textSlot(text,"229:51504/229:51506","Button","Button")}
  </span>
</Root>);
case "229:51508": return (<Root {...rootAttributes} className={[s.n312,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51508"} data-name={"state=tertiary, size=S, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n20} data-layer={"229:51508/229:51510"} data-name={"Button"}>
    {textSlot(text,"229:51508/229:51510","Button","Button")}
  </span>
</Root>);
case "229:51512": return (<Root {...rootAttributes} className={[s.n313,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51512"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n22} data-layer={"229:51512/229:51514"} data-name={"Button"}>
    {textSlot(text,"229:51512/229:51514","Button","Button")}
  </span>
</Root>);
case "229:51516": return (<Root {...rootAttributes} className={[s.n314,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51516"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n41} data-layer={"229:51516/229:51517"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51516/229:51517/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51516/229:51517/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51516/229:51517/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51516/229:51517/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n43} data-layer={"229:51516/229:51518"} data-name={"Button"}>
    {textSlot(text,"229:51516/229:51518","Button","Button")}
  </span>
</Root>);
case "229:51520": return (<Root {...rootAttributes} className={[s.n315,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51520"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n83} data-layer={"229:51520/229:51521"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51520/229:51521/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51520/229:51521/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51520/229:51521/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51520/229:51521/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n317} data-layer={"229:51520/229:51522"} data-name={"Button"}>
    {textSlot(text,"229:51520/229:51522","Button","Button")}
  </span>
</Root>);
case "229:51524": return (<Root {...rootAttributes} className={[s.n318,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51524"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:51525": return (<Root {...rootAttributes} className={[s.n319,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51525"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n1} data-layer={"229:51525/229:51526"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51525/229:51526/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51525/229:51526/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51525/229:51526/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51525/229:51526/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n321} data-layer={"229:51525/229:51527"} data-name={"Button"}>
    {textSlot(text,"229:51525/229:51527","Button","Button")}
  </span>
</Root>);
case "229:51529": return (<Root {...rootAttributes} className={[s.n322,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51529"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=default"}>
  <span className={s.n9} data-layer={"229:51529/229:51530"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51529/229:51530/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51529/229:51530/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51529/229:51530/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51529/229:51530/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n324} data-layer={"229:51529/229:51531"} data-name={"Button"}>
    {textSlot(text,"229:51529/229:51531","Button","Button")}
  </span>
</Root>);
case "229:51533": return (<Root {...rootAttributes} className={[s.n325,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51533"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:51534": return (<Root {...rootAttributes} className={[s.n326,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51534"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=default"}>
  <span className={s.n327} data-layer={"229:51534/229:51536"} data-name={"Button"}>
    {textSlot(text,"229:51534/229:51536","Button","Button")}
  </span>
</Root>);
case "229:51538": return (<Root {...rootAttributes} className={[s.n314,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51538"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n327} data-layer={"229:51538/229:51540"} data-name={"Button"}>
    {textSlot(text,"229:51538/229:51540","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51538/229:51541"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51538/229:51541/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51538/229:51541/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51538/229:51541/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51538/229:51541/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51542": return (<Root {...rootAttributes} className={[s.n315,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51542"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n45} data-layer={"229:51542/229:51544"} data-name={"Button"}>
    {textSlot(text,"229:51542/229:51544","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51542/229:51545"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51542/229:51545/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51542/229:51545/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51542/229:51545/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51542/229:51545/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51546": return (<Root {...rootAttributes} className={[s.n319,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51546"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n47} data-layer={"229:51546/229:51548"} data-name={"Button"}>
    {textSlot(text,"229:51546/229:51548","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51546/229:51549"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51546/229:51549/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51546/229:51549/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51546/229:51549/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51546/229:51549/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51550": return (<Root {...rootAttributes} className={[s.n322,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51550"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=default"}>
  <span className={s.n49} data-layer={"229:51550/229:51552"} data-name={"Button"}>
    {textSlot(text,"229:51550/229:51552","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51550/229:51553"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51550/229:51553/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51550/229:51553/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51550/229:51553/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51550/229:51553/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51554": return (<Root {...rootAttributes} className={[s.n328,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51554"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n41} data-layer={"229:51554/229:51555"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51554/229:51555/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51554/229:51555/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:51554/229:51555/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51554/229:51555/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n91} data-layer={"229:51554/229:51556"} data-name={"Button"}>
    {textSlot(text,"229:51554/229:51556","Button","Button")}
  </span>
</Root>);
case "229:51558": return (<Root {...rootAttributes} className={[s.n329,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51558"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=off, action=sceleton"}></Root>);
case "229:51559": return (<Root {...rootAttributes} className={[s.n330,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51559"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n83} data-layer={"229:51559/229:51560"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51559/229:51560/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51559/229:51560/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:51559/229:51560/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51559/229:51560/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n94} data-layer={"229:51559/229:51561"} data-name={"Button"}>
    {textSlot(text,"229:51559/229:51561","Button","Button")}
  </span>
</Root>);
case "229:51563": return (<Root {...rootAttributes} className={[s.n331,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51563"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n1} data-layer={"229:51563/229:51564"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51563/229:51564/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51563/229:51564/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"229:51563/229:51564/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51563/229:51564/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n96} data-layer={"229:51563/229:51565"} data-name={"Button"}>
    {textSlot(text,"229:51563/229:51565","Button","Button")}
  </span>
</Root>);
case "229:51567": return (<Root {...rootAttributes} className={[s.n332,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51567"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=disabled"}>
  <span className={s.n9} data-layer={"229:51567/229:51568"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51567/229:51568/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51567/229:51568/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:51567/229:51568/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51567/229:51568/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n99} data-layer={"229:51567/229:51569"} data-name={"Button"}>
    {textSlot(text,"229:51567/229:51569","Button","Button")}
  </span>
</Root>);
case "229:51571": return (<Root {...rootAttributes} className={[s.n333,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51571"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n101} data-layer={"229:51571/229:51573"} data-name={"Button"}>
    {textSlot(text,"229:51571/229:51573","Button","Button")}
  </span>
</Root>);
case "229:51575": return (<Root {...rootAttributes} className={[s.n334,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51575"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n104} data-layer={"229:51575/229:51577"} data-name={"Button"}>
    {textSlot(text,"229:51575/229:51577","Button","Button")}
  </span>
</Root>);
case "229:51579": return (<Root {...rootAttributes} className={[s.n335,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51579"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=disabled"}>
  <span className={s.n106} data-layer={"229:51579/229:51581"} data-name={"Button"}>
    {textSlot(text,"229:51579/229:51581","Button","Button")}
  </span>
</Root>);
case "229:51583": return (<Root {...rootAttributes} className={[s.n328,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51583"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n101} data-layer={"229:51583/229:51585"} data-name={"Button"}>
    {textSlot(text,"229:51583/229:51585","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51583/229:51586"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51583/229:51586/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51583/229:51586/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n90} data-layer={"229:51583/229:51586/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51583/229:51586/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51587": return (<Root {...rootAttributes} className={[s.n330,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51587"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n71} data-layer={"229:51587/229:51589"} data-name={"Button"}>
    {textSlot(text,"229:51587/229:51589","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51587/229:51590"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51587/229:51590/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51587/229:51590/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n93} data-layer={"229:51587/229:51590/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51587/229:51590/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51591": return (<Root {...rootAttributes} className={[s.n331,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51591"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n104} data-layer={"229:51591/229:51593"} data-name={"Button"}>
    {textSlot(text,"229:51591/229:51593","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51591/229:51594"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51591/229:51594/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51591/229:51594/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n51} data-layer={"229:51591/229:51594/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51591/229:51594/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51595": return (<Root {...rootAttributes} className={[s.n332,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51595"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=disabled"}>
  <span className={s.n106} data-layer={"229:51595/229:51597"} data-name={"Button"}>
    {textSlot(text,"229:51595/229:51597","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51595/229:51598"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51595/229:51598/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51595/229:51598/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n98} data-layer={"229:51595/229:51598/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51595/229:51598/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51599": return (<Root {...rootAttributes} className={[s.n336,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51599"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n41} data-layer={"229:51599/229:51600"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51599/229:51600/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51599/229:51600/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51599/229:51600/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51599/229:51600/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n337} data-layer={"229:51599/229:51602"} data-name={"spinner"}>
    <span className={s.n338} data-layer={"229:51599/229:51602/229:51603"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:51599/229:51602/229:51603/227:1720"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1302_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g1302_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:51599/229:51602/229:51603/227:1721"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51604": return (<Root {...rootAttributes} className={[s.n339,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51604"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n83} data-layer={"229:51604/229:51605"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51604/229:51605/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51604/229:51605/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51604/229:51605/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51604/229:51605/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n111} data-layer={"229:51604/229:51607"} data-name={"spinner"}>
    <span className={s.n112} data-layer={"229:51604/229:51607/229:51608"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:51604/229:51607/229:51608/227:1723"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1312_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g1312_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:51604/229:51607/229:51608/227:1724"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51609": return (<Root {...rootAttributes} className={[s.n319,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51609"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n1} data-layer={"229:51609/229:51610"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51609/229:51610/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51609/229:51610/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51609/229:51610/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51609/229:51610/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n114} data-layer={"229:51609/229:51612"} data-name={"spinner"}>
    <span className={s.n115} data-layer={"229:51609/229:51612/229:51613"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:51609/229:51612/229:51613/227:1726"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1322_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g1322_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:51609/229:51612/229:51613/227:1727"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51614": return (<Root {...rootAttributes} className={[s.n322,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51614"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=louder"}>
  <span className={s.n9} data-layer={"229:51614/229:51615"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51614/229:51615/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51614/229:51615/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51614/229:51615/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51614/229:51615/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n340} data-layer={"229:51614/229:51617"} data-name={"spinner"}>
    <span className={s.n135} data-layer={"229:51614/229:51617/229:51618"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:51614/229:51617/229:51618/227:1729"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1332_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g1332_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:51614/229:51617/229:51618/227:1730"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51619": return (<Root {...rootAttributes} className={[s.n326,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51619"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n122} data-layer={"229:51619/229:51622"} data-name={"spinner"}>
    <span className={s.n123} data-layer={"229:51619/229:51622/229:51623"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:51619/229:51622/229:51623/227:1720"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1337_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g1337_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:51619/229:51622/229:51623/227:1721"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51624": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51624"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n124} data-layer={"229:51624/229:51627"} data-name={"spinner"}>
    <span className={s.n125} data-layer={"229:51624/229:51627/229:51628"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:51624/229:51627/229:51628/227:1723"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1342_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g1342_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:51624/229:51627/229:51628/227:1724"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51629": return (<Root {...rootAttributes} className={[s.n77,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51629"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n126} data-layer={"229:51629/229:51632"} data-name={"spinner"}>
    <span className={s.n127} data-layer={"229:51629/229:51632/229:51633"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:51629/229:51632/229:51633/227:1726"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1347_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g1347_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:51629/229:51632/229:51633/227:1727"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51634": return (<Root {...rootAttributes} className={[s.n60,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51634"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=louder"}>
  <span className={s.n128} data-layer={"229:51634/229:51637"} data-name={"spinner"}>
    <span className={s.n129} data-layer={"229:51634/229:51637/229:51638"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:51634/229:51637/229:51638/227:1729"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1352_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g1352_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:51634/229:51637/229:51638/227:1730"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
</Root>);
case "229:51639": return (<Root {...rootAttributes} className={[s.n314,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51639"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n130} data-layer={"229:51639/229:51641"} data-name={"spinner"}>
    <span className={s.n108} data-layer={"229:51639/229:51641/229:51642"} data-name={"Spinner/var"}>
      <span className={s.n109} data-layer={"229:51639/229:51641/229:51642/227:1720"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1357_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 8 L0 5.78 L-2.22 5.78 L-2.22 8 L0 8 Z M15.84628 9.56072 L13.66894 9.12762 L15.84628 9.56072 Z M12.44456 1.34824 L11.2112 3.19411 L12.44456 1.34824 Z M8 0 L8 -2.22 L5.78 -2.22 L5.78 -0 L8 0 Z M8 2.4 L5.78 2.4 L5.78 4.62 L8 4.62 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 L13.17373 5.85697 Z M13.4924 9.09251 L15.66974 9.52561 L13.4924 9.09251 Z M9.09251 13.4924 L8.6594 11.31505 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 L5.85697 13.17373 Z M3.34377 11.11119 L1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L4.62 8 L4.62 5.78 L2.4 5.78 L2.4 8 Z M0 8 L-2.22 8 C-2.22 10.02132 -1.62061 11.99726 -0.49762 13.67793 L1.34824 12.44456 L3.19411 11.2112 C2.55899 10.26068 2.22 9.14318 2.22 8 L0 8 Z M1.34824 12.44456 L-0.49762 13.67793 C0.62537 15.3586 2.22151 16.66852 4.08897 17.44205 L4.93853 15.39104 L5.78809 13.34002 C4.73193 12.90255 3.82922 12.16171 3.19411 11.2112 L1.34824 12.44456 Z M4.93853 15.39104 L4.08897 17.44205 C5.95644 18.21558 8.01134 18.41797 9.99382 18.02363 L9.56072 15.84628 L9.12762 13.66894 C8.00641 13.89196 6.84425 13.7775 5.78809 13.34002 L4.93853 15.39104 Z M9.56072 15.84628 L9.99382 18.02363 C11.97631 17.62929 13.79734 16.65592 15.22663 15.22663 L13.65685 13.65685 L12.08708 12.08708 C11.27873 12.89542 10.24883 13.44592 9.12762 13.66894 L9.56072 15.84628 Z M13.65685 13.65685 L15.22663 15.22663 C16.65592 13.79734 17.62928 11.97631 18.02363 9.99382 L15.84628 9.56072 L13.66894 9.12762 C13.44592 10.24883 12.89542 11.27873 12.08708 12.08708 L13.65685 13.65685 Z M15.84628 9.56072 L18.02363 9.99382 C18.41797 8.01134 18.21558 5.95644 17.44205 4.08898 L15.39104 4.93853 L13.34002 5.78809 C13.7775 6.84425 13.89196 8.00641 13.66894 9.12762 L15.84628 9.56072 Z M15.39104 4.93853 L17.44205 4.08898 C16.66852 2.22152 15.3586 0.62537 13.67793 -0.49762 L12.44456 1.34824 L11.2112 3.19411 C12.16171 3.82922 12.90255 4.73193 13.34002 5.78809 L15.39104 4.93853 Z M12.44456 1.34824 L13.67793 -0.49762 C11.99726 -1.62061 10.02133 -2.22 8 -2.22 L8 0 L8 2.22 C9.14318 2.22 10.26068 2.55899 11.2112 3.19411 L12.44456 1.34824 Z M8 0 L5.78 -0 L5.78 2.4 L8 2.4 L10.22 2.4 L10.22 0 L8 0 Z M8 2.4 L8 4.62 C8.6685 4.62 9.32199 4.81823 9.87783 5.18963 L11.11119 3.34377 L12.34456 1.49791 C11.05857 0.63864 9.54665 0.18 8 0.18 L8 2.4 Z M11.11119 3.34377 L9.87783 5.18963 C10.43367 5.56103 10.86689 6.08892 11.12271 6.70653 L13.17373 5.85697 L15.22474 5.00742 C14.63286 3.5785 13.63055 2.35718 12.34456 1.49791 L11.11119 3.34377 Z M13.17373 5.85697 L11.12271 6.70653 C11.37854 7.32414 11.44547 8.00375 11.31505 8.65941 L13.4924 9.09251 L15.66974 9.52561 C15.97148 8.00868 15.81662 6.43633 15.22474 5.00742 L13.17373 5.85697 Z M13.4924 9.09251 L11.31505 8.65941 C11.18464 9.31506 10.86272 9.91732 10.39002 10.39002 L11.9598 11.9598 L13.52957 13.52958 C14.62322 12.43593 15.368 11.04254 15.66974 9.52561 L13.4924 9.09251 Z M11.9598 11.9598 L10.39002 10.39002 C9.91732 10.86272 9.31506 11.18464 8.6594 11.31505 L9.09251 13.4924 L9.52561 15.66974 C11.04254 15.368 12.43593 14.62322 13.52957 13.52958 L11.9598 11.9598 Z M9.09251 13.4924 L8.6594 11.31505 C8.00375 11.44547 7.32414 11.37854 6.70653 11.12271 L5.85697 13.17373 L5.00741 15.22474 C6.43633 15.81662 8.00867 15.97148 9.52561 15.66974 L9.09251 13.4924 Z M5.85697 13.17373 L6.70653 11.12271 C6.08892 10.86689 5.56103 10.43367 5.18963 9.87783 L3.34377 11.11119 L1.49791 12.34456 C2.35718 13.63055 3.5785 14.63286 5.00741 15.22474 L5.85697 13.17373 Z M3.34377 11.11119 L5.18963 9.87783 C4.81823 9.32199 4.62 8.6685 4.62 8 L2.4 8 L0.18 8 C0.18 9.54665 0.63863 11.05857 1.49791 12.34456 L3.34377 11.11119 Z M2.4 8 L2.4 5.78 L0 5.78 L0 8 L-0 10.22 L2.4 10.22 L2.4 8 Z"} fill={`url(#${uid}-g1357_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n28} data-layer={"229:51639/229:51641/229:51642/227:1721"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n85} data-layer={"229:51639/229:51643"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51639/229:51643/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51639/229:51643/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51639/229:51643/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51639/229:51643/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51644": return (<Root {...rootAttributes} className={[s.n315,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51644"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n131} data-layer={"229:51644/229:51646"} data-name={"spinner"}>
    <span className={s.n132} data-layer={"229:51644/229:51646/229:51647"} data-name={"Spinner/var"}>
      <span className={s.n113} data-layer={"229:51644/229:51646/229:51647/227:1723"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1367_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 7.2 L0 5.202 L-1.998 5.202 L-1.998 7.2 L0 7.2 Z M1.21342 11.2001 L2.87469 10.09008 L1.21342 11.2001 Z M8.60465 14.26165 L8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L10.09008 2.8747 L10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L7.2 -1.998 L5.202 -1.998 L5.202 -0 L7.2 0 Z M7.2 2.16 L5.202 2.16 L5.202 4.158 L7.2 4.158 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 L10.00007 3.00939 Z M12.14316 8.18326 L10.18355 7.79346 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 L10.76382 10.76382 Z M5.27128 11.85635 L4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L4.158 7.2 L4.158 5.202 L2.16 5.202 L2.16 7.2 Z M0 7.2 L-1.998 7.2 C-1.998 9.01919 -1.45855 10.79753 -0.44786 12.31013 L1.21342 11.2001 L2.87469 10.09008 C2.30309 9.23461 1.998 8.22886 1.998 7.2 L0 7.2 Z M1.21342 11.2001 L-0.44786 12.31013 C0.56283 13.82274 1.99936 15.00167 3.68008 15.69784 L4.44468 13.85193 L5.20928 12.00602 C4.25874 11.61229 3.4463 10.94554 2.87469 10.09008 L1.21342 11.2001 Z M4.44468 13.85193 L3.68008 15.69784 C5.36079 16.39402 7.2102 16.57617 8.99444 16.22126 L8.60465 14.26165 L8.21486 12.30204 C7.20577 12.50276 6.15982 12.39975 5.20928 12.00602 L4.44468 13.85193 Z M8.60465 14.26165 L8.99444 16.22126 C10.77868 15.86636 12.4176 14.99033 13.70397 13.70397 L12.29117 12.29117 L10.87837 10.87837 C10.15086 11.60588 9.22395 12.10132 8.21486 12.30204 L8.60465 14.26165 Z M12.29117 12.29117 L13.70397 13.70397 C14.99033 12.41761 15.86636 10.77868 16.22126 8.99444 L14.26165 8.60465 L12.30204 8.21486 C12.10132 9.22395 11.60588 10.15086 10.87837 10.87837 L12.29117 12.29117 Z M14.26165 8.60465 L16.22126 8.99444 C16.57617 7.2102 16.39402 5.36079 15.69784 3.68008 L13.85193 4.44468 L12.00602 5.20928 C12.39975 6.15982 12.50276 7.20577 12.30204 8.21486 L14.26165 8.60465 Z M13.85193 4.44468 L15.69784 3.68008 C15.00167 1.99936 13.82274 0.56283 12.31013 -0.44786 L11.20011 1.21342 L10.09008 2.8747 C10.94554 3.4463 11.61229 4.25874 12.00602 5.20928 L13.85193 4.44468 Z M11.20011 1.21342 L12.31013 -0.44786 C10.79753 -1.45855 9.01919 -1.998 7.2 -1.998 L7.2 0 L7.2 1.998 C8.22886 1.998 9.23461 2.30309 10.09008 2.8747 L11.20011 1.21342 Z M7.2 0 L5.202 -0 L5.202 2.16 L7.2 2.16 L9.198 2.16 L9.198 0 L7.2 0 Z M7.2 2.16 L7.2 4.158 C7.80165 4.158 8.38979 4.33641 8.89004 4.67067 L10.00007 3.00939 L11.1101 1.34812 C9.95271 0.57477 8.59199 0.162 7.2 0.162 L7.2 2.16 Z M10.00007 3.00939 L8.89004 4.67067 C9.3903 5.00493 9.7802 5.48002 10.01044 6.03588 L11.85635 5.27128 L13.70226 4.50667 C13.16957 3.22065 12.2675 2.12146 11.1101 1.34812 L10.00007 3.00939 Z M11.85635 5.27128 L10.01044 6.03588 C10.24068 6.59173 10.30093 7.20337 10.18355 7.79346 L12.14316 8.18326 L14.10277 8.57305 C14.37433 7.20781 14.23495 5.7927 13.70226 4.50667 L11.85635 5.27128 Z M12.14316 8.18326 L10.18355 7.79346 C10.06617 8.38356 9.77645 8.92559 9.35102 9.35102 L10.76382 10.76382 L12.17662 12.17662 C13.1609 11.19234 13.8312 9.93828 14.10277 8.57305 L12.14316 8.18326 Z M10.76382 10.76382 L9.35102 9.35102 C8.92559 9.77645 8.38355 10.06617 7.79346 10.18355 L8.18325 12.14316 L8.57304 14.10277 C9.93828 13.8312 11.19234 13.1609 12.17662 12.17662 L10.76382 10.76382 Z M8.18325 12.14316 L7.79346 10.18355 C7.20337 10.30093 6.59173 10.24068 6.03588 10.01044 L5.27128 11.85635 L4.50667 13.70226 C5.7927 14.23495 7.20781 14.37433 8.57304 14.10277 L8.18325 12.14316 Z M5.27128 11.85635 L6.03588 10.01044 C5.48002 9.7802 5.00493 9.3903 4.67067 8.89004 L3.00939 10.00007 L1.34812 11.1101 C2.12146 12.2675 3.22065 13.16957 4.50667 13.70226 L5.27128 11.85635 Z M3.00939 10.00007 L4.67067 8.89004 C4.33641 8.38979 4.158 7.80165 4.158 7.2 L2.16 7.2 L0.162 7.2 C0.162 8.59198 0.57477 9.95271 1.34812 11.1101 L3.00939 10.00007 Z M2.16 7.2 L2.16 5.202 L0 5.202 L0 7.2 L-0 9.198 L2.16 9.198 L2.16 7.2 Z"} fill={`url(#${uid}-g1367_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n34} data-layer={"229:51644/229:51646/229:51647/227:1724"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n86} data-layer={"229:51644/229:51648"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51644/229:51648/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51644/229:51648/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51644/229:51648/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51644/229:51648/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51649": return (<Root {...rootAttributes} className={[s.n319,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51649"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n133} data-layer={"229:51649/229:51651"} data-name={"spinner"}>
    <span className={s.n115} data-layer={"229:51649/229:51651/229:51652"} data-name={"Spinner/var"}>
      <span className={s.n116} data-layer={"229:51649/229:51651/229:51652/227:1726"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1377_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 6.4 L0 4.624 L-1.776 4.624 L-1.776 6.4 L0 6.4 Z M1.07859 9.95565 L2.55528 8.96896 L1.07859 9.95565 Z M7.64858 12.67702 L7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 L12.67702 7.64858 Z M12.31283 3.95083 L10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L6.4 -1.776 L4.624 -1.776 L4.624 -0 L6.4 0 Z M6.4 1.92 L4.624 1.92 L4.624 3.696 L6.4 3.696 L6.4 1.92 Z M10.53898 4.68558 L8.89817 5.36522 L10.53898 4.68558 Z M9.56784 9.56784 L8.31202 8.31202 L9.56784 9.56784 Z M4.68558 10.53898 L5.36522 8.89817 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 L2.67502 8.88895 Z M1.92 6.4 L3.696 6.4 L3.696 4.624 L1.92 4.624 L1.92 6.4 Z M0 6.4 L-1.776 6.4 C-1.776 8.01706 -1.29649 9.59781 -0.3981 10.94234 L1.07859 9.95565 L2.55528 8.96896 C2.04719 8.20854 1.776 7.31454 1.776 6.4 L0 6.4 Z M1.07859 9.95565 L-0.3981 10.94234 C0.50029 12.28688 1.77721 13.33482 3.27118 13.95364 L3.95083 12.31283 L4.63047 10.67202 C3.78555 10.32204 3.06338 9.72937 2.55528 8.96896 L1.07859 9.95565 Z M3.95083 12.31283 L3.27118 13.95364 C4.76515 14.57246 6.40907 14.73437 7.99506 14.4189 L7.64858 12.67702 L7.3021 10.93515 C6.40513 11.11357 5.4754 11.022 4.63047 10.67202 L3.95083 12.31283 Z M7.64858 12.67702 L7.99506 14.4189 C9.58105 14.10343 11.03787 13.32474 12.1813 12.1813 L10.92548 10.92548 L9.66966 9.66966 C9.02298 10.31634 8.19907 10.75673 7.3021 10.93515 L7.64858 12.67702 Z M10.92548 10.92548 L12.1813 12.1813 C13.32474 11.03787 14.10343 9.58105 14.4189 7.99506 L12.67702 7.64858 L10.93515 7.3021 C10.75673 8.19907 10.31634 9.02298 9.66966 9.66966 L10.92548 10.92548 Z M12.67702 7.64858 L14.4189 7.99506 C14.73437 6.40907 14.57246 4.76515 13.95364 3.27118 L12.31283 3.95083 L10.67202 4.63047 C11.022 5.4754 11.11357 6.40513 10.93515 7.3021 L12.67702 7.64858 Z M12.31283 3.95083 L13.95364 3.27118 C13.33482 1.77721 12.28688 0.5003 10.94234 -0.3981 L9.95565 1.07859 L8.96896 2.55528 C9.72937 3.06338 10.32204 3.78555 10.67202 4.63047 L12.31283 3.95083 Z M9.95565 1.07859 L10.94234 -0.3981 C9.59781 -1.29649 8.01706 -1.776 6.4 -1.776 L6.4 0 L6.4 1.776 C7.31454 1.776 8.20854 2.04719 8.96896 2.55528 L9.95565 1.07859 Z M6.4 0 L4.624 -0 L4.624 1.92 L6.4 1.92 L8.176 1.92 L8.176 0 L6.4 0 Z M6.4 1.92 L6.4 3.696 C6.9348 3.696 7.45759 3.85459 7.90226 4.15171 L8.88895 2.67502 L9.87565 1.19833 C8.84685 0.51091 7.63732 0.144 6.4 0.144 L6.4 1.92 Z M8.88895 2.67502 L7.90226 4.15171 C8.34693 4.44883 8.69351 4.87113 8.89817 5.36522 L10.53898 4.68558 L12.17979 4.00593 C11.70629 2.8628 10.90444 1.88574 9.87565 1.19833 L8.88895 2.67502 Z M10.53898 4.68558 L8.89817 5.36522 C9.10283 5.85932 9.15638 6.403 9.05204 6.92752 L10.79392 7.274 L12.53579 7.62049 C12.77718 6.40694 12.65329 5.14907 12.17979 4.00593 L10.53898 4.68558 Z M10.79392 7.274 L9.05204 6.92752 C8.94771 7.45205 8.69018 7.93386 8.31202 8.31202 L9.56784 9.56784 L10.82366 10.82366 C11.69858 9.94874 12.2944 8.83403 12.53579 7.62049 L10.79392 7.274 Z M9.56784 9.56784 L8.31202 8.31202 C7.93385 8.69018 7.45205 8.94771 6.92752 9.05204 L7.274 10.79392 L7.62048 12.53579 C8.83403 12.2944 9.94874 11.69858 10.82366 10.82366 L9.56784 9.56784 Z M7.274 10.79392 L6.92752 9.05204 C6.403 9.15638 5.85931 9.10283 5.36522 8.89817 L4.68558 10.53898 L4.00593 12.17979 C5.14907 12.65329 6.40694 12.77718 7.62048 12.53579 L7.274 10.79392 Z M4.68558 10.53898 L5.36522 8.89817 C4.87113 8.69351 4.44883 8.34693 4.15171 7.90226 L2.67502 8.88895 L1.19833 9.87565 C1.88574 10.90444 2.8628 11.70629 4.00593 12.17979 L4.68558 10.53898 Z M2.67502 8.88895 L4.15171 7.90226 C3.85459 7.45759 3.696 6.9348 3.696 6.4 L1.92 6.4 L0.144 6.4 C0.144 7.63732 0.51091 8.84685 1.19833 9.87565 L2.67502 8.88895 Z M1.92 6.4 L1.92 4.624 L0 4.624 L0 6.4 L-0 8.176 L1.92 8.176 L1.92 6.4 Z"} fill={`url(#${uid}-g1377_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"229:51649/229:51651/229:51652/227:1727"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n87} data-layer={"229:51649/229:51653"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51649/229:51653/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51649/229:51653/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51649/229:51653/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51649/229:51653/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51654": return (<Root {...rootAttributes} className={[s.n322,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51654"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=louder"}>
  <span className={s.n134} data-layer={"229:51654/229:51656"} data-name={"spinner"}>
    <span className={s.n135} data-layer={"229:51654/229:51656/229:51657"} data-name={"Spinner/var"}>
      <span className={s.n121} data-layer={"229:51654/229:51656/229:51657/227:1729"} data-name={"Ellipse 51"}>
        <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g1387_strokeGeometry0`}><stop offset={0.3509615361690521} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(143,139,154,1)"}/></radialGradient></defs><path d={"M0 5.6 L0 4.046 L-1.554 4.046 L-1.554 5.6 L0 5.6 Z M0.94377 8.71119 L2.23587 7.84784 L0.94377 8.71119 Z M9.5598 9.5598 L8.46095 8.46095 L9.5598 9.5598 Z M10.77372 3.45697 L12.20943 2.86228 L10.77372 3.45697 Z M8.71119 0.94377 L7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L5.6 -1.554 L4.046 -1.554 L4.046 -0 L5.6 0 Z M5.6 1.68 L4.046 1.68 L4.046 3.234 L5.6 3.234 L5.6 1.68 Z M9.22161 4.09988 L10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 L9.44468 6.36475 Z M8.37186 8.37186 L9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 L6.36475 9.44468 Z M2.34064 7.77783 L3.63274 6.91448 L2.34064 7.77783 Z M1.68 5.6 L3.234 5.6 L3.234 4.046 L1.68 4.046 L1.68 5.6 Z M0 5.6 L-1.554 5.6 C-1.554 7.01493 -1.13443 8.39808 -0.34833 9.57455 L0.94377 8.71119 L2.23587 7.84784 C1.79129 7.18247 1.554 6.40022 1.554 5.6 L0 5.6 Z M0.94377 8.71119 L-0.34833 9.57455 C0.43776 10.75102 1.55506 11.66796 2.86228 12.20943 L3.45697 10.77372 L4.05166 9.33802 C3.31235 9.03178 2.68045 8.5132 2.23587 7.84784 L0.94377 8.71119 Z M3.45697 10.77372 L2.86228 12.20943 C4.1695 12.7509 5.60793 12.89258 6.99568 12.61654 L6.6925 11.0924 L6.38933 9.56826 C5.60449 9.72437 4.79097 9.64425 4.05166 9.33802 L3.45697 10.77372 Z M6.6925 11.0924 L6.99568 12.61654 C8.38342 12.3405 9.65814 11.65915 10.65864 10.65864 L9.5598 9.5598 L8.46095 8.46095 C7.89511 9.0268 7.17418 9.41214 6.38933 9.56826 L6.6925 11.0924 Z M9.5598 9.5598 L10.65864 10.65864 C11.65915 9.65814 12.3405 8.38342 12.61654 6.99568 L11.0924 6.69251 L9.56826 6.38934 C9.41214 7.17418 9.0268 7.89511 8.46095 8.46095 L9.5598 9.5598 Z M11.0924 6.69251 L12.61654 6.99568 C12.89258 5.60794 12.7509 4.16951 12.20943 2.86228 L10.77372 3.45697 L9.33802 4.05166 C9.64425 4.79097 9.72437 5.60449 9.56826 6.38934 L11.0924 6.69251 Z M10.77372 3.45697 L12.20943 2.86228 C11.66796 1.55506 10.75102 0.43776 9.57455 -0.34833 L8.71119 0.94377 L7.84784 2.23587 C8.5132 2.68045 9.03178 3.31235 9.33802 4.05166 L10.77372 3.45697 Z M8.71119 0.94377 L9.57455 -0.34833 C8.39808 -1.13443 7.01493 -1.554 5.6 -1.554 L5.6 0 L5.6 1.554 C6.40022 1.554 7.18248 1.79129 7.84784 2.23587 L8.71119 0.94377 Z M5.6 0 L4.046 -0 L4.046 1.68 L5.6 1.68 L7.154 1.68 L7.154 0 L5.6 0 Z M5.6 1.68 L5.6 3.234 C6.06795 3.234 6.52539 3.37276 6.91448 3.63274 L7.77783 2.34064 L8.64119 1.04854 C7.741 0.44704 6.68265 0.126 5.6 0.126 L5.6 1.68 Z M7.77783 2.34064 L6.91448 3.63274 C7.30357 3.89272 7.60682 4.26224 7.7859 4.69457 L9.22161 4.09988 L10.65732 3.50519 C10.243 2.50495 9.54139 1.65003 8.64119 1.04854 L7.77783 2.34064 Z M9.22161 4.09988 L7.7859 4.69457 C7.96497 5.1269 8.01183 5.60262 7.92054 6.06158 L9.44468 6.36475 L10.96882 6.66792 C11.18003 5.60607 11.07163 4.50543 10.65732 3.50519 L9.22161 4.09988 Z M9.44468 6.36475 L7.92054 6.06158 C7.82924 6.52054 7.6039 6.94212 7.27301 7.27301 L8.37186 8.37186 L9.4707 9.4707 C10.23625 8.70515 10.7576 7.72978 10.96882 6.66792 L9.44468 6.36475 Z M8.37186 8.37186 L7.27301 7.27301 C6.94212 7.6039 6.52054 7.82924 6.06158 7.92054 L6.36475 9.44468 L6.66792 10.96882 C7.72978 10.7576 8.70515 10.23625 9.4707 9.4707 L8.37186 8.37186 Z M6.36475 9.44468 L6.06158 7.92054 C5.60262 8.01183 5.1269 7.96497 4.69457 7.7859 L4.09988 9.22161 L3.50519 10.65732 C4.50543 11.07163 5.60607 11.18003 6.66792 10.96882 L6.36475 9.44468 Z M4.09988 9.22161 L4.69457 7.7859 C4.26224 7.60682 3.89272 7.30357 3.63274 6.91448 L2.34064 7.77783 L1.04853 8.64119 C1.65003 9.54138 2.50495 10.243 3.50519 10.65732 L4.09988 9.22161 Z M2.34064 7.77783 L3.63274 6.91448 C3.37276 6.52539 3.234 6.06795 3.234 5.6 L1.68 5.6 L0.126 5.6 C0.126 6.68265 0.44704 7.741 1.04853 8.64119 L2.34064 7.77783 Z M1.68 5.6 L1.68 4.046 L0 4.046 L0 5.6 L-0 7.154 L1.68 7.154 L1.68 5.6 Z"} fill={`url(#${uid}-g1387_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n13} data-layer={"229:51654/229:51656/229:51657/227:1730"} data-name={"Rectangle 3464198"}></span>
    </span>
  </span>
  <span className={s.n88} data-layer={"229:51654/229:51658"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51654/229:51658/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51654/229:51658/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51654/229:51658/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51654/229:51658/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51659": return (<Root {...rootAttributes} className={[s.n341,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51659"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n41} data-layer={"229:51659/229:51660"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51659/229:51660/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51659/229:51660/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51659/229:51660/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51659/229:51660/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n43} data-layer={"229:51659/229:51661"} data-name={"Button"}>
    {textSlot(text,"229:51659/229:51661","Button","Button")}
  </span>
</Root>);
case "229:51663": return (<Root {...rootAttributes} className={[s.n342,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51663"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n83} data-layer={"229:51663/229:51664"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51663/229:51664/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51663/229:51664/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51663/229:51664/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51663/229:51664/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n317} data-layer={"229:51663/229:51665"} data-name={"Button"}>
    {textSlot(text,"229:51663/229:51665","Button","Button")}
  </span>
</Root>);
case "229:51667": return (<Root {...rootAttributes} className={[s.n343,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51667"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n1} data-layer={"229:51667/229:51668"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51667/229:51668/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51667/229:51668/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51667/229:51668/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51667/229:51668/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n321} data-layer={"229:51667/229:51669"} data-name={"Button"}>
    {textSlot(text,"229:51667/229:51669","Button","Button")}
  </span>
</Root>);
case "229:51671": return (<Root {...rootAttributes} className={[s.n344,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51671"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=focusfault"}>
  <span className={s.n9} data-layer={"229:51671/229:51672"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51671/229:51672/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51671/229:51672/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51671/229:51672/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51671/229:51672/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n324} data-layer={"229:51671/229:51673"} data-name={"Button"}>
    {textSlot(text,"229:51671/229:51673","Button","Button")}
  </span>
</Root>);
case "229:51675": return (<Root {...rootAttributes} className={[s.n345,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51675"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n327} data-layer={"229:51675/229:51677"} data-name={"Button"}>
    {textSlot(text,"229:51675/229:51677","Button","Button")}
  </span>
</Root>);
case "229:51679": return (<Root {...rootAttributes} className={[s.n346,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51679"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n45} data-layer={"229:51679/229:51681"} data-name={"Button"}>
    {textSlot(text,"229:51679/229:51681","Button","Button")}
  </span>
</Root>);
case "229:51683": return (<Root {...rootAttributes} className={[s.n347,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51683"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n47} data-layer={"229:51683/229:51685"} data-name={"Button"}>
    {textSlot(text,"229:51683/229:51685","Button","Button")}
  </span>
</Root>);
case "229:51687": return (<Root {...rootAttributes} className={[s.n348,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51687"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=focusfault"}>
  <span className={s.n49} data-layer={"229:51687/229:51689"} data-name={"Button"}>
    {textSlot(text,"229:51687/229:51689","Button","Button")}
  </span>
</Root>);
case "229:51691": return (<Root {...rootAttributes} className={[s.n341,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51691"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n327} data-layer={"229:51691/229:51693"} data-name={"Button"}>
    {textSlot(text,"229:51691/229:51693","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51691/229:51694"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51691/229:51694/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51691/229:51694/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51691/229:51694/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51691/229:51694/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51695": return (<Root {...rootAttributes} className={[s.n342,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51695"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n45} data-layer={"229:51695/229:51697"} data-name={"Button"}>
    {textSlot(text,"229:51695/229:51697","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51695/229:51698"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51695/229:51698/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51695/229:51698/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51695/229:51698/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51695/229:51698/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51699": return (<Root {...rootAttributes} className={[s.n343,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51699"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n47} data-layer={"229:51699/229:51701"} data-name={"Button"}>
    {textSlot(text,"229:51699/229:51701","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51699/229:51702"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51699/229:51702/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51699/229:51702/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51699/229:51702/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51699/229:51702/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51703": return (<Root {...rootAttributes} className={[s.n344,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51703"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=focusfault"}>
  <span className={s.n49} data-layer={"229:51703/229:51705"} data-name={"Button"}>
    {textSlot(text,"229:51703/229:51705","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51703/229:51706"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51703/229:51706/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51703/229:51706/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51703/229:51706/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51703/229:51706/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51707": return (<Root {...rootAttributes} className={[s.n349,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51707"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n83} data-layer={"229:51707/229:51708"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51707/229:51708/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51707/229:51708/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51707/229:51708/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51707/229:51708/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n317} data-layer={"229:51707/229:51709"} data-name={"Button"}>
    {textSlot(text,"229:51707/229:51709","Button","Button")}
  </span>
</Root>);
case "229:51711": return (<Root {...rootAttributes} className={[s.n350,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51711"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n1} data-layer={"229:51711/229:51712"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51711/229:51712/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51711/229:51712/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51711/229:51712/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51711/229:51712/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n321} data-layer={"229:51711/229:51713"} data-name={"Button"}>
    {textSlot(text,"229:51711/229:51713","Button","Button")}
  </span>
</Root>);
case "229:51715": return (<Root {...rootAttributes} className={[s.n351,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51715"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=hover"}>
  <span className={s.n9} data-layer={"229:51715/229:51716"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51715/229:51716/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51715/229:51716/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51715/229:51716/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51715/229:51716/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n324} data-layer={"229:51715/229:51717"} data-name={"Button"}>
    {textSlot(text,"229:51715/229:51717","Button","Button")}
  </span>
</Root>);
case "229:51719": return (<Root {...rootAttributes} className={[s.n352,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51719"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=hover"}>
  <span className={s.n327} data-layer={"229:51719/229:51721"} data-name={"Button"}>
    {textSlot(text,"229:51719/229:51721","Button","Button")}
  </span>
</Root>);
case "229:51723": return (<Root {...rootAttributes} className={[s.n40,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51723"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n327} data-layer={"229:51723/229:51725"} data-name={"Button"}>
    {textSlot(text,"229:51723/229:51725","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51723/229:51726"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51723/229:51726/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51723/229:51726/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n353} data-layer={"229:51723/229:51726/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51723/229:51726/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51727": return (<Root {...rootAttributes} className={[s.n349,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51727"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n45} data-layer={"229:51727/229:51729"} data-name={"Button"}>
    {textSlot(text,"229:51727/229:51729","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51727/229:51730"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51727/229:51730/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51727/229:51730/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n354} data-layer={"229:51727/229:51730/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51727/229:51730/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51731": return (<Root {...rootAttributes} className={[s.n350,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51731"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n47} data-layer={"229:51731/229:51733"} data-name={"Button"}>
    {textSlot(text,"229:51731/229:51733","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51731/229:51734"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51731/229:51734/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51731/229:51734/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n355} data-layer={"229:51731/229:51734/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51731/229:51734/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51735": return (<Root {...rootAttributes} className={[s.n351,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51735"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=hover"}>
  <span className={s.n49} data-layer={"229:51735/229:51737"} data-name={"Button"}>
    {textSlot(text,"229:51735/229:51737","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51735/229:51738"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51735/229:51738/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51735/229:51738/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n356} data-layer={"229:51735/229:51738/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51735/229:51738/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51739": return (<Root {...rootAttributes} className={[s.n357,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51739"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n41} data-layer={"229:51739/229:51740"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51739/229:51740/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51739/229:51740/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51739/229:51740/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51739/229:51740/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n43} data-layer={"229:51739/229:51741"} data-name={"Button"}>
    {textSlot(text,"229:51739/229:51741","Button","Button")}
  </span>
</Root>);
case "229:51743": return (<Root {...rootAttributes} className={[s.n358,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51743"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n83} data-layer={"229:51743/229:51744"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51743/229:51744/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51743/229:51744/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51743/229:51744/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51743/229:51744/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n317} data-layer={"229:51743/229:51745"} data-name={"Button"}>
    {textSlot(text,"229:51743/229:51745","Button","Button")}
  </span>
</Root>);
case "229:51747": return (<Root {...rootAttributes} className={[s.n359,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51747"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n1} data-layer={"229:51747/229:51748"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51747/229:51748/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51747/229:51748/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51747/229:51748/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51747/229:51748/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n321} data-layer={"229:51747/229:51749"} data-name={"Button"}>
    {textSlot(text,"229:51747/229:51749","Button","Button")}
  </span>
</Root>);
case "229:51751": return (<Root {...rootAttributes} className={[s.n360,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51751"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=press"}>
  <span className={s.n9} data-layer={"229:51751/229:51752"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51751/229:51752/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51751/229:51752/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51751/229:51752/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51751/229:51752/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n324} data-layer={"229:51751/229:51753"} data-name={"Button"}>
    {textSlot(text,"229:51751/229:51753","Button","Button")}
  </span>
</Root>);
case "229:51755": return (<Root {...rootAttributes} className={[s.n361,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51755"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n327} data-layer={"229:51755/229:51757"} data-name={"Button"}>
    {textSlot(text,"229:51755/229:51757","Button","Button")}
  </span>
</Root>);
case "229:51759": return (<Root {...rootAttributes} className={[s.n362,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51759"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n45} data-layer={"229:51759/229:51761"} data-name={"Button"}>
    {textSlot(text,"229:51759/229:51761","Button","Button")}
  </span>
</Root>);
case "229:51763": return (<Root {...rootAttributes} className={[s.n363,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51763"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n47} data-layer={"229:51763/229:51765"} data-name={"Button"}>
    {textSlot(text,"229:51763/229:51765","Button","Button")}
  </span>
</Root>);
case "229:51767": return (<Root {...rootAttributes} className={[s.n364,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51767"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=press"}>
  <span className={s.n49} data-layer={"229:51767/229:51769"} data-name={"Button"}>
    {textSlot(text,"229:51767/229:51769","Button","Button")}
  </span>
</Root>);
case "229:51771": return (<Root {...rootAttributes} className={[s.n357,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51771"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n327} data-layer={"229:51771/229:51773"} data-name={"Button"}>
    {textSlot(text,"229:51771/229:51773","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51771/229:51774"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51771/229:51774/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51771/229:51774/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n42} data-layer={"229:51771/229:51774/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51771/229:51774/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51775": return (<Root {...rootAttributes} className={[s.n358,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51775"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n45} data-layer={"229:51775/229:51777"} data-name={"Button"}>
    {textSlot(text,"229:51775/229:51777","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51775/229:51778"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51775/229:51778/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51775/229:51778/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n316} data-layer={"229:51775/229:51778/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51775/229:51778/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51779": return (<Root {...rootAttributes} className={[s.n359,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51779"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n47} data-layer={"229:51779/229:51781"} data-name={"Button"}>
    {textSlot(text,"229:51779/229:51781","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51779/229:51782"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51779/229:51782/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51779/229:51782/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n320} data-layer={"229:51779/229:51782/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51779/229:51782/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51783": return (<Root {...rootAttributes} className={[s.n360,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51783"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=press"}>
  <span className={s.n49} data-layer={"229:51783/229:51785"} data-name={"Button"}>
    {textSlot(text,"229:51783/229:51785","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51783/229:51786"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51783/229:51786/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51783/229:51786/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n323} data-layer={"229:51783/229:51786/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51783/229:51786/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51787": return (<Root {...rootAttributes} className={[s.n365,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51787"} data-name={"state=secondary, size=L, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n41} data-layer={"229:51787/229:51788"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51787/229:51788/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51787/229:51788/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n366} data-layer={"229:51787/229:51788/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51787/229:51788/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n367} data-layer={"229:51787/229:51789"} data-name={"Button"}>
    {textSlot(text,"229:51787/229:51789","Button","Button")}
  </span>
</Root>);
case "229:51791": return (<Root {...rootAttributes} className={[s.n368,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51791"} data-name={"state=secondary, size=M, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n83} data-layer={"229:51791/229:51792"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51791/229:51792/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51791/229:51792/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n369} data-layer={"229:51791/229:51792/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51791/229:51792/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n370} data-layer={"229:51791/229:51793"} data-name={"Button"}>
    {textSlot(text,"229:51791/229:51793","Button","Button")}
  </span>
</Root>);
case "229:51795": return (<Root {...rootAttributes} className={[s.n371,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51795"} data-name={"state=secondary, size=S, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n1} data-layer={"229:51795/229:51796"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51795/229:51796/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51795/229:51796/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n372} data-layer={"229:51795/229:51796/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51795/229:51796/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n373} data-layer={"229:51795/229:51797"} data-name={"Button"}>
    {textSlot(text,"229:51795/229:51797","Button","Button")}
  </span>
</Root>);
case "229:51799": return (<Root {...rootAttributes} className={[s.n374,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51799"} data-name={"state=secondary, size=XS, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n9} data-layer={"229:51799/229:51800"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51799/229:51800/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51799/229:51800/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n65} data-layer={"229:51799/229:51800/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51799/229:51800/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n375} data-layer={"229:51799/229:51801"} data-name={"Button"}>
    {textSlot(text,"229:51799/229:51801","Button","Button")}
  </span>
</Root>);
case "229:51803": return (<Root {...rootAttributes} className={[s.n376,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51803"} data-name={"state=secondary, size=L, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n377} data-layer={"229:51803/229:51805"} data-name={"Button"}>
    {textSlot(text,"229:51803/229:51805","Button","Button")}
  </span>
</Root>);
case "229:51807": return (<Root {...rootAttributes} className={[s.n378,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51807"} data-name={"state=secondary, size=M, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n379} data-layer={"229:51807/229:51809"} data-name={"Button"}>
    {textSlot(text,"229:51807/229:51809","Button","Button")}
  </span>
</Root>);
case "229:51811": return (<Root {...rootAttributes} className={[s.n380,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51811"} data-name={"state=secondary, size=S, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n62} data-layer={"229:51811/229:51813"} data-name={"Button"}>
    {textSlot(text,"229:51811/229:51813","Button","Button")}
  </span>
</Root>);
case "229:51815": return (<Root {...rootAttributes} className={[s.n381,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51815"} data-name={"state=secondary, size=XS, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n382} data-layer={"229:51815/229:51817"} data-name={"Button"}>
    {textSlot(text,"229:51815/229:51817","Button","Button")}
  </span>
</Root>);
case "229:51819": return (<Root {...rootAttributes} className={[s.n365,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51819"} data-name={"state=secondary, size=L, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n377} data-layer={"229:51819/229:51821"} data-name={"Button"}>
    {textSlot(text,"229:51819/229:51821","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51819/229:51822"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51819/229:51822/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51819/229:51822/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n366} data-layer={"229:51819/229:51822/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51819/229:51822/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51823": return (<Root {...rootAttributes} className={[s.n368,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51823"} data-name={"state=secondary, size=M, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n379} data-layer={"229:51823/229:51825"} data-name={"Button"}>
    {textSlot(text,"229:51823/229:51825","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51823/229:51826"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51823/229:51826/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51823/229:51826/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n369} data-layer={"229:51823/229:51826/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51823/229:51826/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51827": return (<Root {...rootAttributes} className={[s.n371,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51827"} data-name={"state=secondary, size=S, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n62} data-layer={"229:51827/229:51829"} data-name={"Button"}>
    {textSlot(text,"229:51827/229:51829","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51827/229:51830"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51827/229:51830/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51827/229:51830/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n372} data-layer={"229:51827/229:51830/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51827/229:51830/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51831": return (<Root {...rootAttributes} className={[s.n374,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51831"} data-name={"state=secondary, size=XS, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n382} data-layer={"229:51831/229:51833"} data-name={"Button"}>
    {textSlot(text,"229:51831/229:51833","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51831/229:51834"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51831/229:51834/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51831/229:51834/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n65} data-layer={"229:51831/229:51834/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51831/229:51834/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51835": return (<Root {...rootAttributes} className={[s.n383,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51835"} data-name={"state=icon button, size=L, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n24} data-layer={"229:51835/229:51836"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51835/229:51836/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51835/229:51836/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n366} data-layer={"229:51835/229:51836/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51835/229:51836/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51839": return (<Root {...rootAttributes} className={[s.n384,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51839"} data-name={"state=icon button, size=M, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n30} data-layer={"229:51839/229:51840"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51839/229:51840/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51839/229:51840/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n369} data-layer={"229:51839/229:51840/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51839/229:51840/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51843": return (<Root {...rootAttributes} className={[s.n385,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51843"} data-name={"state=icon button, size=S, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n36} data-layer={"229:51843/229:51844"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51843/229:51844/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51843/229:51844/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n372} data-layer={"229:51843/229:51844/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51843/229:51844/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51847": return (<Root {...rootAttributes} className={[s.n383,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51847"} data-name={"state=icon button fill, size=L, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n24} data-layer={"229:51847/229:51848"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51847/229:51848/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51847/229:51848/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n366} data-layer={"229:51847/229:51848/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51847/229:51848/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51851": return (<Root {...rootAttributes} className={[s.n384,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51851"} data-name={"state=icon button fill, size=M, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n30} data-layer={"229:51851/229:51852"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51851/229:51852/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51851/229:51852/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n369} data-layer={"229:51851/229:51852/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51851/229:51852/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51855": return (<Root {...rootAttributes} className={[s.n385,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51855"} data-name={"state=icon button fill, size=S, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n36} data-layer={"229:51855/229:51856"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51855/229:51856/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51855/229:51856/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n372} data-layer={"229:51855/229:51856/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51855/229:51856/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51859": return (<Root {...rootAttributes} className={[s.n64,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51859"} data-name={"state=icon button fill, size=XS, Icon left=off, icon right=off, text=off, action=active"}>
  <span className={s.n38} data-layer={"229:51859/229:51860"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51859/229:51860/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51859/229:51860/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n65} data-layer={"229:51859/229:51860/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51859/229:51860/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51863": return (<Root {...rootAttributes} className={[s.n247,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51863"} data-name={"state=text button, size=L, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n386} data-layer={"229:51863/229:51864"} data-name={"left, right icon & text"}>
    <span className={s.n28} data-layer={"229:51863/229:51864/229:51865"} data-name={"icon/set/base"}>
      <span className={s.n178} data-layer={"229:51863/229:51864/229:51865/227:530"} data-name={"Group 3706"}>
        <span className={s.n179} data-layer={"229:51863/229:51864/229:51865/227:530/227:531"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.03481 1.54917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.65512 -1.06457 C0.06717 -1.42639 -0.70276 -1.24307 -1.06457 -0.65512 C-1.42639 -0.06717 -1.24307 0.70276 -0.65512 1.06457 L0 0 L0.65512 -1.06457 Z M2.51741 1.54917 L1.86228 2.61375 C2.26404 2.86098 2.77077 2.86098 3.17253 2.61375 L2.51741 1.54917 Z M5.68993 1.06457 C6.27788 0.70276 6.4612 -0.06717 6.09938 -0.65512 C5.73757 -1.24307 4.96764 -1.42639 4.37969 -1.06457 L5.03481 0 L5.68993 1.06457 Z M0 0 L-0.65512 1.06457 L1.86228 2.61375 L2.51741 1.54917 L3.17253 0.4846 L0.65512 -1.06457 L0 0 Z M2.51741 1.54917 L3.17253 2.61375 L5.68993 1.06457 L5.03481 0 L4.37969 -1.06457 L1.86228 0.4846 L2.51741 1.54917 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n180} data-layer={"229:51863/229:51864/229:51865/227:530/227:532"} data-name={"Rectangle 3597"}>
          <svg width="100%" height="100%" viewBox="0 0 3.12012 11.3974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.12012 1.11 C3.73315 1.11 4.23012 0.61304 4.23012 0 C4.23012 -0.61304 3.73315 -1.11 3.12012 -1.11 L3.12012 0 L3.12012 1.11 Z M3.12012 12.5074 C3.73315 12.5074 4.23012 12.01044 4.23012 11.3974 C4.23012 10.78436 3.73315 10.2874 3.12012 10.2874 L3.12012 11.3974 L3.12012 12.5074 Z M1.25 0 L1.25 1.11 L3.12012 1.11 L3.12012 0 L3.12012 -1.11 L1.25 -1.11 L1.25 0 Z M3.12012 11.3974 L3.12012 10.2874 L1.25 10.2874 L1.25 11.3974 L1.25 12.5074 L3.12012 12.5074 L3.12012 11.3974 Z M0 10.1474 L1.11 10.1474 L1.11 1.25 L0 1.25 L-1.11 1.25 L-1.11 10.1474 L0 10.1474 Z M1.25 11.3974 L1.25 10.2874 C1.17268 10.2874 1.11 10.22472 1.11 10.1474 L0 10.1474 L-1.11 10.1474 C-1.11 11.45079 -0.05339 12.5074 1.25 12.5074 L1.25 11.3974 Z M1.25 0 L1.25 -1.11 C-0.05339 -1.11 -1.11 -0.05339 -1.11 1.25 L0 1.25 L1.11 1.25 C1.11 1.17268 1.17268 1.11 1.25 1.11 L1.25 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n181} data-layer={"229:51863/229:51864/229:51865/227:530/227:533"} data-name={"Vector 2991"}>
          <svg width="100%" height="100%" viewBox="0 0 6.15082 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.15082 1.11 C6.76385 1.11 7.26082 0.61304 7.26082 0 C7.26082 -0.61304 6.76385 -1.11 6.15082 -1.11 L6.15082 0 L6.15082 1.11 Z M0 0 L0 1.11 L6.15082 1.11 L6.15082 0 L6.15082 -1.11 L0 -1.11 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n28} data-layer={"229:51863/229:51864/229:51865/227:534"} data-name={"Rectangle 3598"}></span>
    </span>
    <span className={s.n387} data-layer={"229:51863/229:51864/229:51866"} data-name={"Button"}>
      {textSlot(text,"229:51863/229:51864/229:51866","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51868": return (<Root {...rootAttributes} className={[s.n249,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51868"} data-name={"state=text button, size=M, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n388} data-layer={"229:51868/229:51869"} data-name={"left, right icon & text"}>
    <span className={s.n34} data-layer={"229:51868/229:51869/232:55966"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51868/229:51869/234:51915"} data-name={"icon/set/base"}></span>
    <span className={s.n34} data-layer={"229:51868/229:51869/231:57962"} data-name={"icon/set/base"}></span>
    <span className={s.n389} data-layer={"229:51868/229:51869/229:51871"} data-name={"Button"}>
      {textSlot(text,"229:51868/229:51869/229:51871","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51873": return (<Root {...rootAttributes} className={[s.n251,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51873"} data-name={"state=text button, size=S, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n390} data-layer={"229:51873/229:51874"} data-name={"left, right icon & text"}>
    <span className={s.n5} data-layer={"229:51873/229:51874/232:55718"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51873/229:51874/234:51899"} data-name={"icon/set/base"}></span>
    <span className={s.n5} data-layer={"229:51873/229:51874/231:57714"} data-name={"icon/set/base"}></span>
    <span className={s.n391} data-layer={"229:51873/229:51874/229:51876"} data-name={"Button"}>
      {textSlot(text,"229:51873/229:51874/229:51876","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51878": return (<Root {...rootAttributes} className={[s.n253,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51878"} data-name={"state=text button, size=XS, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n392} data-layer={"229:51878/229:51879"} data-name={"left, right icon & text"}>
    <span className={s.n13} data-layer={"229:51878/229:51879/232:55703"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51878/229:51879/234:51896"} data-name={"icon/set/base"}></span>
    <span className={s.n13} data-layer={"229:51878/229:51879/231:57699"} data-name={"icon/set/base"}></span>
    <span className={s.n393} data-layer={"229:51878/229:51879/229:51881"} data-name={"Button"}>
      {textSlot(text,"229:51878/229:51879/229:51881","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51883": return (<Root {...rootAttributes} className={[s.n255,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51883"} data-name={"state=text button, size=L, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n394} data-layer={"229:51883/229:51884"} data-name={"left, right icon & text"}>
    <span className={s.n395} data-layer={"229:51883/229:51884/229:51886"} data-name={"Button"}>
      {textSlot(text,"229:51883/229:51884/229:51886","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51888": return (<Root {...rootAttributes} className={[s.n257,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51888"} data-name={"state=text button, size=M, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n396} data-layer={"229:51888/229:51889"} data-name={"left, right icon & text"}>
    <span className={s.n397} data-layer={"229:51888/229:51889/229:51891"} data-name={"Button"}>
      {textSlot(text,"229:51888/229:51889/229:51891","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51893": return (<Root {...rootAttributes} className={[s.n259,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51893"} data-name={"state=text button, size=S, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n398} data-layer={"229:51893/229:51894"} data-name={"left, right icon & text"}>
    <span className={s.n399} data-layer={"229:51893/229:51894/229:51896"} data-name={"Button"}>
      {textSlot(text,"229:51893/229:51894/229:51896","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51898": return (<Root {...rootAttributes} className={[s.n73,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51898"} data-name={"state=text button, size=XS, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n400} data-layer={"229:51898/229:51899"} data-name={"left, right icon & text"}>
    <span className={s.n401} data-layer={"229:51898/229:51899/229:51901"} data-name={"Button"}>
      {textSlot(text,"229:51898/229:51899/229:51901","Button","Button")}
    </span>
  </span>
</Root>);
case "229:51903": return (<Root {...rootAttributes} className={[s.n402,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51903"} data-name={"state=tertiary, size=L, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n41} data-layer={"229:51903/229:51904"} data-name={"icon/set/base"}>
    <span className={s.n270} data-layer={"229:51903/229:51904/227:223"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75 9.08504" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.26518 8.28692 C3.26518 8.89995 3.76214 9.39692 4.37518 9.39692 C4.98821 9.39692 5.48518 8.89995 5.48518 8.28692 L4.37518 8.28692 L3.26518 8.28692 Z M5.48518 0 C5.48518 -0.61304 4.98821 -1.11 4.37518 -1.11 C3.76214 -1.11 3.26518 -0.61304 3.26518 0 L4.37518 0 L5.48518 0 Z M0.61687 5.24579 C0.10721 4.90511 -0.58212 5.04209 -0.92281 5.55174 C-1.26349 6.06139 -1.12652 6.75073 -0.61687 7.09141 L0 6.1686 L0.61687 5.24579 Z M4.36289 9.08504 L3.74603 10.00785 L4.36122 10.41908 L4.97744 10.0094 L4.36289 9.08504 Z M9.36454 7.09272 C9.87505 6.75332 10.01376 6.06433 9.67436 5.55382 C9.33496 5.04331 8.64597 4.9046 8.13546 5.24401 L8.75 6.16837 L9.36454 7.09272 Z M4.37518 8.28692 L5.48518 8.28692 L5.48518 0 L4.37518 0 L3.26518 0 L3.26518 8.28692 L4.37518 8.28692 Z M0 6.1686 L-0.61687 7.09141 L3.74603 10.00785 L4.36289 9.08504 L4.97976 8.16223 L0.61687 5.24579 L0 6.1686 Z M4.36289 9.08504 L4.97744 10.0094 L9.36454 7.09272 L8.75 6.16837 L8.13546 5.24401 L3.74835 8.16069 L4.36289 9.08504 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n367} data-layer={"229:51903/229:51905"} data-name={"Button"}>
    {textSlot(text,"229:51903/229:51905","Button","Button")}
  </span>
</Root>);
case "229:51907": return (<Root {...rootAttributes} className={[s.n403,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51907"} data-name={"state=tertiary, size=M, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n83} data-layer={"229:51907/232:55881"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51907/234:51910"} data-name={"icon/set/base"}></span>
  <span className={s.n83} data-layer={"229:51907/231:57877"} data-name={"icon/set/base"}></span>
  <span className={s.n370} data-layer={"229:51907/229:51909"} data-name={"Button"}>
    {textSlot(text,"229:51907/229:51909","Button","Button")}
  </span>
</Root>);
case "229:51911": return (<Root {...rootAttributes} className={[s.n404,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51911"} data-name={"state=tertiary, size=S, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n1} data-layer={"229:51911/229:51912"} data-name={"icon/set/base"}>
    <span className={s.n5} data-layer={"229:51911/229:51912/227:205"} data-name={"01"}>
      <span className={s.n273} data-layer={"229:51911/229:51912/227:205/227:206"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7 7.26803" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.62514 6.62953 C2.62514 7.11278 3.01689 7.50453 3.50014 7.50453 C3.98339 7.50453 4.37514 7.11278 4.37514 6.62953 L3.50014 6.62953 L2.62514 6.62953 Z M4.37514 0 C4.37514 -0.48325 3.98339 -0.875 3.50014 -0.875 C3.01689 -0.875 2.62514 -0.48325 2.62514 0 L3.50014 0 L4.37514 0 Z M0.48627 4.20744 C0.08451 3.93889 -0.45888 4.04686 -0.72744 4.44862 C-0.996 4.85037 -0.88802 5.39376 -0.48627 5.66232 L0 4.93488 L0.48627 4.20744 Z M3.49032 7.26803 L3.00405 7.99547 L3.48899 8.31964 L3.97475 7.9967 L3.49032 7.26803 Z M7.48444 5.66335 C7.88686 5.39581 7.99621 4.85268 7.72866 4.45026 C7.46111 4.04783 6.91799 3.93848 6.51556 4.20603 L7 4.93469 L7.48444 5.66335 Z M3.50014 6.62953 L4.37514 6.62953 L4.37514 0 L3.50014 0 L2.62514 0 L2.62514 6.62953 L3.50014 6.62953 Z M0 4.93488 L-0.48627 5.66232 L3.00405 7.99547 L3.49032 7.26803 L3.97658 6.5406 L0.48627 4.20744 L0 4.93488 Z M3.49032 7.26803 L3.97475 7.9967 L7.48444 5.66335 L7 4.93469 L6.51556 4.20603 L3.00588 6.53937 L3.49032 7.26803 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n373} data-layer={"229:51911/229:51913"} data-name={"Button"}>
    {textSlot(text,"229:51911/229:51913","Button","Button")}
  </span>
</Root>);
case "229:51915": return (<Root {...rootAttributes} className={[s.n405,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51915"} data-name={"state=tertiary, size=XS, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n9} data-layer={"229:51915/232:56125"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51915/234:51922"} data-name={"icon/set/base"}></span>
  <span className={s.n9} data-layer={"229:51915/231:58121"} data-name={"icon/set/base"}></span>
  <span className={s.n375} data-layer={"229:51915/229:51917"} data-name={"Button"}>
    {textSlot(text,"229:51915/229:51917","Button","Button")}
  </span>
</Root>);
case "229:51919": return (<Root {...rootAttributes} className={[s.n406,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51919"} data-name={"state=tertiary, size=L, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n407} data-layer={"229:51919/229:51921"} data-name={"Button"}>
    {textSlot(text,"229:51919/229:51921","Button","Button")}
  </span>
</Root>);
case "229:51923": return (<Root {...rootAttributes} className={[s.n277,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51923"} data-name={"state=tertiary, size=M, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n379} data-layer={"229:51923/229:51925"} data-name={"Button"}>
    {textSlot(text,"229:51923/229:51925","Button","Button")}
  </span>
</Root>);
case "229:51927": return (<Root {...rootAttributes} className={[s.n278,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51927"} data-name={"state=tertiary, size=XS, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n382} data-layer={"229:51927/229:51929"} data-name={"Button"}>
    {textSlot(text,"229:51927/229:51929","Button","Button")}
  </span>
</Root>);
case "229:51931": return (<Root {...rootAttributes} className={[s.n408,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51931"} data-name={"state=primary, size=L, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n41} data-layer={"229:51931/229:51932"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51931/229:51932/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51931/229:51932/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n409} data-layer={"229:51931/229:51932/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51931/229:51932/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n410} data-layer={"229:51931/229:51933"} data-name={"Button"}>
    {textSlot(text,"229:51931/229:51933","Button","Button")}
  </span>
</Root>);
case "229:51935": return (<Root {...rootAttributes} className={[s.n411,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51935"} data-name={"state=primary, size=M, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n83} data-layer={"229:51935/229:51936"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51935/229:51936/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51935/229:51936/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n412} data-layer={"229:51935/229:51936/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51935/229:51936/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n413} data-layer={"229:51935/229:51937"} data-name={"Button"}>
    {textSlot(text,"229:51935/229:51937","Button","Button")}
  </span>
</Root>);
case "229:51939": return (<Root {...rootAttributes} className={[s.n414,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51939"} data-name={"state=primary, size=S, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n1} data-layer={"229:51939/229:51940"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51939/229:51940/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51939/229:51940/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n415} data-layer={"229:51939/229:51940/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51939/229:51940/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n416} data-layer={"229:51939/229:51941"} data-name={"Button"}>
    {textSlot(text,"229:51939/229:51941","Button","Button")}
  </span>
</Root>);
case "229:51943": return (<Root {...rootAttributes} className={[s.n417,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51943"} data-name={"state=primary, size=XS, Icon left=on, icon right=off, text=on, action=active"}>
  <span className={s.n9} data-layer={"229:51943/229:51944"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51943/229:51944/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51943/229:51944/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n418} data-layer={"229:51943/229:51944/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51943/229:51944/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
  <span className={s.n419} data-layer={"229:51943/229:51945"} data-name={"Button"}>
    {textSlot(text,"229:51943/229:51945","Button","Button")}
  </span>
</Root>);
case "229:51947": return (<Root {...rootAttributes} className={[s.n420,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51947"} data-name={"state=primary, size=L, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n421} data-layer={"229:51947/229:51949"} data-name={"Button"}>
    {textSlot(text,"229:51947/229:51949","Button","Button")}
  </span>
</Root>);
case "229:51951": return (<Root {...rootAttributes} className={[s.n422,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51951"} data-name={"state=primary, size=M, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n423} data-layer={"229:51951/229:51953"} data-name={"Button"}>
    {textSlot(text,"229:51951/229:51953","Button","Button")}
  </span>
</Root>);
case "229:51955": return (<Root {...rootAttributes} className={[s.n424,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51955"} data-name={"state=primary, size=S, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n425} data-layer={"229:51955/229:51957"} data-name={"Button"}>
    {textSlot(text,"229:51955/229:51957","Button","Button")}
  </span>
</Root>);
case "229:51959": return (<Root {...rootAttributes} className={[s.n426,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51959"} data-name={"state=primary, size=XS, Icon left=off, icon right=off, text=on, action=active"}>
  <span className={s.n427} data-layer={"229:51959/229:51961"} data-name={"Button"}>
    {textSlot(text,"229:51959/229:51961","Button","Button")}
  </span>
</Root>);
case "229:51963": return (<Root {...rootAttributes} className={[s.n408,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51963"} data-name={"state=primary, size=L, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n421} data-layer={"229:51963/229:51965"} data-name={"Button"}>
    {textSlot(text,"229:51963/229:51965","Button","Button")}
  </span>
  <span className={s.n85} data-layer={"229:51963/229:51966"} data-name={"icon/set/base"}>
    <span className={s.n25} data-layer={"229:51963/229:51966/227:184"} data-name={"Frame 3398"}>
      <span className={s.n26} data-layer={"229:51963/229:51966/227:184/227:185"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.71095 3.711" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.92606 4.49588 C3.35953 4.92937 4.06235 4.92937 4.49583 4.49589 C4.92932 4.06241 4.92932 3.3596 4.49584 2.92612 L3.71095 3.711 L2.92606 4.49588 Z M0 0 L-0.78489 0.78488 L2.92606 4.49588 L3.71095 3.711 L4.49584 2.92612 L0.78489 -0.78488 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n409} data-layer={"229:51963/229:51966/227:184/227:186"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n28} data-layer={"229:51963/229:51966/227:187"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51967": return (<Root {...rootAttributes} className={[s.n411,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51967"} data-name={"state=primary, size=M, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n423} data-layer={"229:51967/229:51969"} data-name={"Button"}>
    {textSlot(text,"229:51967/229:51969","Button","Button")}
  </span>
  <span className={s.n86} data-layer={"229:51967/229:51970"} data-name={"icon/set/base"}>
    <span className={s.n31} data-layer={"229:51967/229:51970/227:213"} data-name={"Frame 3398"}>
      <span className={s.n32} data-layer={"229:51967/229:51970/227:213/227:214"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 3.33985 3.3399" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.70345 3.97629 C3.05492 4.32776 3.62477 4.32777 3.97625 3.9763 C4.32772 3.62483 4.32772 3.05498 3.97625 2.70351 L3.33985 3.3399 L2.70345 3.97629 Z M0 0 L-0.6364 0.63639 L2.70345 3.97629 L3.33985 3.3399 L3.97625 2.70351 L0.6364 -0.63639 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n412} data-layer={"229:51967/229:51970/227:213/227:215"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n34} data-layer={"229:51967/229:51970/227:216"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51971": return (<Root {...rootAttributes} className={[s.n414,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51971"} data-name={"state=primary, size=S, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n425} data-layer={"229:51971/229:51973"} data-name={"Button"}>
    {textSlot(text,"229:51971/229:51973","Button","Button")}
  </span>
  <span className={s.n87} data-layer={"229:51971/229:51974"} data-name={"icon/set/base"}>
    <span className={s.n2} data-layer={"229:51971/229:51974/227:208"} data-name={"Frame 3398"}>
      <span className={s.n3} data-layer={"229:51971/229:51974/227:208/227:209"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.96876 2.9688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26165 3.6759 C2.65217 4.06643 3.28533 4.06643 3.67586 3.67591 C4.06639 3.28539 4.06639 2.65222 3.67587 2.2617 L2.96876 2.9688 L2.26165 3.6759 Z M0 0 L-0.70711 0.7071 L2.26165 3.6759 L2.96876 2.9688 L3.67587 2.2617 L0.70711 -0.7071 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n415} data-layer={"229:51971/229:51974/227:208/227:210"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n5} data-layer={"229:51971/229:51974/227:211"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
case "229:51975": return (<Root {...rootAttributes} className={[s.n417,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"229:51975"} data-name={"state=primary, size=XS, Icon left=off, icon right=on, text=on, action=active"}>
  <span className={s.n427} data-layer={"229:51975/229:51977"} data-name={"Button"}>
    {textSlot(text,"229:51975/229:51977","Button","Button")}
  </span>
  <span className={s.n88} data-layer={"229:51975/229:51978"} data-name={"icon/set/base"}>
    <span className={s.n10} data-layer={"229:51975/229:51978/227:218"} data-name={"Frame 3398"}>
      <span className={s.n11} data-layer={"229:51975/229:51978/227:218/227:219"} data-name={"Vector 2990"}>
        <svg width="100%" height="100%" viewBox="0 0 2.59766 2.5977" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.97894 3.21641 C2.32065 3.55812 2.87467 3.55813 3.21638 3.21642 C3.55809 2.87472 3.55809 2.3207 3.21639 1.97898 L2.59767 2.5977 L1.97894 3.21641 Z M0 0 L-0.61872 0.61871 L1.97894 3.21641 L2.59767 2.5977 L3.21639 1.97898 L0.61872 -0.61871 L0 0 Z"} fill={"rgba(130,205,237,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n418} data-layer={"229:51975/229:51978/227:218/227:220"} data-name={"Ellipse 44"}></span>
    </span>
    <span className={s.n13} data-layer={"229:51975/229:51978/227:221"} data-name={"Rectangle 3464242"}></span>
  </span>
</Root>);
  default: return null;
  }
}
