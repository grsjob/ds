// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './DropdownItemDesign.module.css';
export const variants = [
  {
    "id": "227:1327",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1330",
    "name": "Selected=off, Hover=on, discription=off, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1334",
    "name": "Selected=off, Hover=on, discription=off, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1337",
    "name": "Selected=off, Hover=on, discription=off, View=simpl, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1340",
    "name": "Selected=off, Hover=on, discription=on, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1343",
    "name": "Selected=on, Hover=on, discription=off, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1347",
    "name": "Selected=off, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1350",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "227:1354",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51798",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51802",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51806",
    "name": "Selected=off, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51811",
    "name": "Selected=off, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51816",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51820",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51824",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51828",
    "name": "Selected=off, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51832",
    "name": "Selected=off, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51837",
    "name": "Selected=off, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51842",
    "name": "Selected=off, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51847",
    "name": "Selected=off, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51852",
    "name": "Selected=off, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51859",
    "name": "Selected=off, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51866",
    "name": "Selected=off, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51871",
    "name": "Selected=off, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51876",
    "name": "Selected=off, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51881",
    "name": "Selected=off, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51886",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51890",
    "name": "Selected=off, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51894",
    "name": "Selected=off, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51898",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51902",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51906",
    "name": "Selected=off, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51910",
    "name": "Selected=off, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51914",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51918",
    "name": "Selected=off, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51922",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51925",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51928",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51931",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51934",
    "name": "Selected=off, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51937",
    "name": "Selected=off, Hover=off, discription=on, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51940",
    "name": "Selected=off, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:51943",
    "name": "Selected=off, Hover=on, discription=off, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51947",
    "name": "Selected=off, Hover=on, discription=off, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51952",
    "name": "Selected=off, Hover=on, discription=off, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51956",
    "name": "Selected=off, Hover=on, discription=off, View=chbox, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51960",
    "name": "Selected=off, Hover=on, discription=on, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51965",
    "name": "Selected=off, Hover=on, discription=on, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51970",
    "name": "Selected=off, Hover=on, discription=on, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51977",
    "name": "Selected=off, Hover=on, discription=on, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51982",
    "name": "Selected=off, Hover=on, discription=on, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51987",
    "name": "Selected=off, Hover=on, discription=off, View=lable, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51991",
    "name": "Selected=off, Hover=on, discription=off, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51995",
    "name": "Selected=off, Hover=on, discription=off, View=lable, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:51999",
    "name": "Selected=off, Hover=on, discription=off, View=radio, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52003",
    "name": "Selected=off, Hover=on, discription=off, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52006",
    "name": "Selected=off, Hover=on, discription=on, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52009",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52013",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52017",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52021",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52025",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52029",
    "name": "Selected=on, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52033",
    "name": "Selected=on, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52038",
    "name": "Selected=on, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52043",
    "name": "Selected=on, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52048",
    "name": "Selected=on, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52053",
    "name": "Selected=on, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52058",
    "name": "Selected=on, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52063",
    "name": "Selected=on, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52068",
    "name": "Selected=on, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52073",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52078",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=on, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "on"
    }
  },
  {
    "id": "228:52083",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52088",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52093",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52098",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=on, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "on"
    }
  },
  {
    "id": "228:52103",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52108",
    "name": "Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52113",
    "name": "Selected=off, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52118",
    "name": "Selected=off, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52123",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52130",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=on, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "on"
    }
  },
  {
    "id": "228:52137",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52144",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52151",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52158",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=on, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "on"
    }
  },
  {
    "id": "228:52165",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52172",
    "name": "Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52179",
    "name": "Selected=off, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52186",
    "name": "Selected=off, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "off",
      "Hover": "off",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52193",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52197",
    "name": "Selected=on, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52201",
    "name": "Selected=on, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52205",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52209",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52213",
    "name": "Selected=on, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52217",
    "name": "Selected=on, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52221",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52225",
    "name": "Selected=on, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52229",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52232",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52235",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52238",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52241",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52244",
    "name": "Selected=on, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52247",
    "name": "Selected=on, Hover=off, discription=on, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52250",
    "name": "Selected=on, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52253",
    "name": "Selected=on, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=on",
    "props": {
      "Selected": "on",
      "Hover": "off",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "on"
    }
  },
  {
    "id": "228:52256",
    "name": "Selected=on, Hover=on, discription=off, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52260",
    "name": "Selected=on, Hover=on, discription=off, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52264",
    "name": "Selected=on, Hover=on, discription=off, View=chbox, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chbox",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52268",
    "name": "Selected=on, Hover=on, discription=on, View=chbox, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chbox",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52273",
    "name": "Selected=on, Hover=on, discription=on, View=radio, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "radio",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52278",
    "name": "Selected=on, Hover=on, discription=on, View=chbox, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chbox",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52283",
    "name": "Selected=on, Hover=on, discription=on, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52288",
    "name": "Selected=on, Hover=on, discription=off, View=chevron, Size=L, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52293",
    "name": "Selected=on, Hover=on, discription=off, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52298",
    "name": "Selected=on, Hover=on, discription=off, View=chevron, Size=M, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52303",
    "name": "Selected=on, Hover=on, discription=off, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52308",
    "name": "Selected=off, Hover=on, discription=off, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "off",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52313",
    "name": "Selected=on, Hover=on, discription=on, View=chevron, Size=L, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52320",
    "name": "Selected=on, Hover=on, discription=on, View=chevron, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52327",
    "name": "Selected=on, Hover=on, discription=on, View=chevron, Size=M, Part=on, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "on",
      "Disable": "off"
    }
  },
  {
    "id": "228:52334",
    "name": "Selected=on, Hover=on, discription=on, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52341",
    "name": "Selected=off, Hover=on, discription=on, View=chevron, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "off",
      "Hover": "on",
      "discription": "on",
      "View": "chevron",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52348",
    "name": "Selected=on, Hover=on, discription=off, View=lable, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "lable",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52352",
    "name": "Selected=on, Hover=on, discription=off, View=radio, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52356",
    "name": "Selected=on, Hover=on, discription=off, View=lable, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "lable",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52360",
    "name": "Selected=on, Hover=on, discription=off, View=radio, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "radio",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52364",
    "name": "Selected=on, Hover=on, discription=off, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52367",
    "name": "Selected=on, Hover=on, discription=off, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52370",
    "name": "Selected=on, Hover=on, discription=off, View=simpl, Size=S, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "off",
      "View": "simpl",
      "Size": "S",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52373",
    "name": "Selected=on, Hover=on, discription=on, View=simpl, Size=L, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "simpl",
      "Size": "L",
      "Part": "off",
      "Disable": "off"
    }
  },
  {
    "id": "228:52376",
    "name": "Selected=on, Hover=on, discription=on, View=simpl, Size=M, Part=off, Disable=off",
    "props": {
      "Selected": "on",
      "Hover": "on",
      "discription": "on",
      "View": "simpl",
      "Size": "M",
      "Part": "off",
      "Disable": "off"
    }
  }
] as const;
export type DropdownItemDesignVariant = typeof variants[number]["id"];
export interface DropdownItemDesignDimensions {
  "Selected"?: "off" | "on";
  "Hover"?: "off" | "on";
  "discription"?: "off" | "on";
  "View"?: "chbox" | "chevron" | "lable" | "radio" | "simpl";
  "Size"?: "L" | "M" | "S";
  "Part"?: "off" | "on";
  "Disable"?: "off" | "on";
}
export interface DropdownItemDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: DropdownItemDesignVariant;
  variantProps?: DropdownItemDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: DropdownItemDesignVariant) => void;
}
const transitions = {"227:1327":{"ON_HOVER":"227:1334"},"227:1347":{"ON_HOVER":"227:1340"},"227:1350":{"ON_HOVER":"227:1330"},"227:1354":{"ON_HOVER":"227:1343"},"228:51798":{"ON_HOVER":"4294967295:4294967295"},"228:51806":{"ON_HOVER":"4294967295:4294967295"},"228:51816":{"ON_HOVER":"4294967295:4294967295"},"228:51824":{"ON_HOVER":"4294967295:4294967295"},"228:51832":{"ON_HOVER":"4294967295:4294967295"},"228:51842":{"ON_HOVER":"4294967295:4294967295"},"228:51852":{"ON_HOVER":"4294967295:4294967295"},"228:51866":{"ON_HOVER":"4294967295:4294967295"},"228:51876":{"ON_HOVER":"4294967295:4294967295"},"228:51890":{"ON_HOVER":"4294967295:4294967295"},"228:51898":{"ON_HOVER":"4294967295:4294967295"},"228:51906":{"ON_HOVER":"4294967295:4294967295"},"228:51914":{"ON_HOVER":"4294967295:4294967295"},"228:51925":{"ON_HOVER":"4294967295:4294967295"},"228:51931":{"ON_HOVER":"227:1337"},"228:51937":{"ON_HOVER":"4294967295:4294967295"},"228:52009":{"ON_HOVER":"4294967295:4294967295"},"228:52017":{"ON_HOVER":"4294967295:4294967295"},"228:52025":{"ON_HOVER":"4294967295:4294967295"},"228:52033":{"ON_HOVER":"4294967295:4294967295"},"228:52043":{"ON_HOVER":"4294967295:4294967295"},"228:52053":{"ON_HOVER":"4294967295:4294967295"},"228:52063":{"ON_HOVER":"4294967295:4294967295"},"228:52073":{"ON_HOVER":"4294967295:4294967295"},"228:52083":{"ON_HOVER":"4294967295:4294967295"},"228:52093":{"ON_HOVER":"4294967295:4294967295"},"228:52103":{"ON_HOVER":"4294967295:4294967295"},"228:52113":{"ON_HOVER":"4294967295:4294967295"},"228:52123":{"ON_HOVER":"4294967295:4294967295"},"228:52137":{"ON_HOVER":"4294967295:4294967295"},"228:52151":{"ON_HOVER":"4294967295:4294967295"},"228:52165":{"ON_HOVER":"4294967295:4294967295"},"228:52179":{"ON_HOVER":"4294967295:4294967295"},"228:52197":{"ON_HOVER":"4294967295:4294967295"},"228:52205":{"ON_HOVER":"4294967295:4294967295"},"228:52213":{"ON_HOVER":"4294967295:4294967295"},"228:52221":{"ON_HOVER":"4294967295:4294967295"},"228:52229":{"ON_HOVER":"4294967295:4294967295"},"228:52235":{"ON_HOVER":"4294967295:4294967295"},"228:52241":{"ON_HOVER":"4294967295:4294967295"},"228:52247":{"ON_HOVER":"4294967295:4294967295"},"228:52250":{"ON_HOVER":"4294967295:4294967295"}};
export function DropdownItemDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: DropdownItemDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1327": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1327"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n1} data-layer={"227:1327/227:1328"} data-name={"box"}>
    <span className={s.n2} data-layer={"227:1327/227:1328/227:1329"} data-name={"Label"}>
      {textSlot(text,"227:1327/227:1328/227:1329","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1330": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1330"} data-name={"Selected=off, Hover=on, discription=off, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"227:1330/227:1331"} data-name={"box"}>
    <span className={s.n5} data-layer={"227:1330/227:1331/227:1332"} data-name={"radio/var"}>
      <span className={s.n6} data-layer={"227:1330/227:1331/227:1332/227:1360"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n7} data-layer={"227:1330/227:1331/227:1333"} data-name={"Label"}>
      {textSlot(text,"227:1330/227:1331/227:1333","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1334": return (<Root {...rootAttributes} className={[s.n8,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1334"} data-name={"Selected=off, Hover=on, discription=off, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n1} data-layer={"227:1334/227:1335"} data-name={"box"}>
    <span className={s.n2} data-layer={"227:1334/227:1335/227:1336"} data-name={"Label"}>
      {textSlot(text,"227:1334/227:1335/227:1336","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1337": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1337"} data-name={"Selected=off, Hover=on, discription=off, View=simpl, Size=S, Part=off, Disable=off"}>
  <span className={s.n10} data-layer={"227:1337/227:1338"} data-name={"box"}>
    <span className={s.n11} data-layer={"227:1337/227:1338/227:1339"} data-name={"Label"}>
      {textSlot(text,"227:1337/227:1338/227:1339","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1340": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1340"} data-name={"Selected=off, Hover=on, discription=on, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n13} data-layer={"227:1340/227:1341"} data-name={"box"}>
    <span className={s.n14} data-layer={"227:1340/227:1341/227:1342"} data-name={"Label"}>
      {textSlot(text,"227:1340/227:1341/227:1342","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "227:1343": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1343"} data-name={"Selected=on, Hover=on, discription=off, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"227:1343/227:1344"} data-name={"box"}>
    <span className={s.n5} data-layer={"227:1343/227:1344/227:1345"} data-name={"radio/var"}>
      <span className={s.n19} data-layer={"227:1343/227:1344/227:1345/227:1366"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n20} data-layer={"227:1343/227:1344/227:1346"} data-name={"Label"}>
      {textSlot(text,"227:1343/227:1344/227:1346","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1347": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1347"} data-name={"Selected=off, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n13} data-layer={"227:1347/227:1348"} data-name={"box"}>
    <span className={s.n22} data-layer={"227:1347/227:1348/227:1349"} data-name={"Label"}>
      {textSlot(text,"227:1347/227:1348/227:1349","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n15}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "227:1350": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1350"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"227:1350/227:1351"} data-name={"box"}>
    <span className={s.n5} data-layer={"227:1350/227:1351/227:1352"} data-name={"radio/var"}>
      <span className={s.n24} data-layer={"227:1350/227:1351/227:1352/227:1362"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n7} data-layer={"227:1350/227:1351/227:1353"} data-name={"Label"}>
      {textSlot(text,"227:1350/227:1351/227:1353","Label","Value Value")}
    </span>
  </span>
</Root>);
case "227:1354": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1354"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"227:1354/227:1355"} data-name={"box"}>
    <span className={s.n5} data-layer={"227:1354/227:1355/227:1356"} data-name={"radio/var"}>
      <span className={s.n26} data-layer={"227:1354/227:1355/227:1356/227:1364"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n20} data-layer={"227:1354/227:1355/227:1357"} data-name={"Label"}>
      {textSlot(text,"227:1354/227:1355/227:1357","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51798": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51798"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"228:51798/228:51799"} data-name={"box"}>
    <span className={s.n27} data-layer={"228:51798/228:51799/228:51800"} data-name={"Chekbox/var"}></span>
    <span className={s.n7} data-layer={"228:51798/228:51799/228:51801"} data-name={"Label"}>
      {textSlot(text,"228:51798/228:51799/228:51801","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51802": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51802"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=on"}>
  <span className={s.n4} data-layer={"228:51802/228:51803"} data-name={"box"}>
    <span className={s.n28} data-layer={"228:51802/228:51803/228:51804"} data-name={"Chekbox/var"}></span>
    <span className={s.n29} data-layer={"228:51802/228:51803/228:51805"} data-name={"Label"}>
      {textSlot(text,"228:51802/228:51803/228:51805","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51806": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51806"} data-name={"Selected=off, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"228:51806/228:51807"} data-name={"box"}>
    <span className={s.n27} data-layer={"228:51806/228:51807/228:51808"} data-name={"Chekbox/var"}></span>
    <span className={s.n7} data-layer={"228:51806/228:51807/228:51809"} data-name={"Label"}>
      {textSlot(text,"228:51806/228:51807/228:51809","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:51806/228:51810"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:51806/228:51810/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:51811": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51811"} data-name={"Selected=off, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=on"}>
  <span className={s.n4} data-layer={"228:51811/228:51812"} data-name={"box"}>
    <span className={s.n28} data-layer={"228:51811/228:51812/228:51813"} data-name={"Chekbox/var"}></span>
    <span className={s.n29} data-layer={"228:51811/228:51812/228:51814"} data-name={"Label"}>
      {textSlot(text,"228:51811/228:51812/228:51814","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:51811/228:51815"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:51811/228:51815/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:51816": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51816"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n34} data-layer={"228:51816/228:51817"} data-name={"box"}>
    <span className={s.n35} data-layer={"228:51816/228:51817/228:51818"} data-name={"Chekbox/var"}></span>
    <span className={s.n36} data-layer={"228:51816/228:51817/228:51819"} data-name={"Label"}>
      {textSlot(text,"228:51816/228:51817/228:51819","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51820": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51820"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=on"}>
  <span className={s.n34} data-layer={"228:51820/228:51821"} data-name={"box"}>
    <span className={s.n37} data-layer={"228:51820/228:51821/228:51822"} data-name={"Chekbox/var"}></span>
    <span className={s.n38} data-layer={"228:51820/228:51821/228:51823"} data-name={"Label"}>
      {textSlot(text,"228:51820/228:51821/228:51823","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51824": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51824"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=off"}>
  <span className={s.n40} data-layer={"228:51824/228:51825"} data-name={"box"}>
    <span className={s.n41} data-layer={"228:51824/228:51825/228:51826"} data-name={"Chekbox/var"}></span>
    <span className={s.n42} data-layer={"228:51824/228:51825/228:51827"} data-name={"Label"}>
      {textSlot(text,"228:51824/228:51825/228:51827","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51828": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51828"} data-name={"Selected=off, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=on"}>
  <span className={s.n40} data-layer={"228:51828/228:51829"} data-name={"box"}>
    <span className={s.n43} data-layer={"228:51828/228:51829/228:51830"} data-name={"Chekbox/var"}></span>
    <span className={s.n44} data-layer={"228:51828/228:51829/228:51831"} data-name={"Label"}>
      {textSlot(text,"228:51828/228:51829/228:51831","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51832": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51832"} data-name={"Selected=off, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51832/228:51833"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51832/228:51833/228:51834"} data-name={"chbox"}>
      <span className={s.n48} data-layer={"228:51832/228:51833/228:51834/228:51835"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n49} data-layer={"228:51832/228:51833/228:51836"} data-name={"Label"}>
      {textSlot(text,"228:51832/228:51833/228:51836","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51837": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51837"} data-name={"Selected=off, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=on"}>
  <span className={s.n46} data-layer={"228:51837/228:51838"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51837/228:51838/228:51839"} data-name={"chbox"}>
      <span className={s.n50} data-layer={"228:51837/228:51838/228:51839/228:51840"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n49} data-layer={"228:51837/228:51838/228:51841"} data-name={"Label"}>
      {textSlot(text,"228:51837/228:51838/228:51841","Label",<><span className={s.n51}>{"Value Value\n"}</span><span className={s.n51}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51842": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51842"} data-name={"Selected=off, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51842/228:51843"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51842/228:51843/228:51844"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:51842/228:51843/228:51844/228:51845"} data-name={"radio/var"}>
        <span className={s.n24} data-layer={"228:51842/228:51843/228:51844/228:51845/227:1362"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n49} data-layer={"228:51842/228:51843/228:51846"} data-name={"Label"}>
      {textSlot(text,"228:51842/228:51843/228:51846","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51847": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51847"} data-name={"Selected=off, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=on"}>
  <span className={s.n46} data-layer={"228:51847/228:51848"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51847/228:51848/228:51849"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:51847/228:51848/228:51849/228:51850"} data-name={"radio/var"}>
        <span className={s.n53} data-layer={"228:51847/228:51848/228:51849/228:51850/228:3203"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n49} data-layer={"228:51847/228:51848/228:51851"} data-name={"Label"}>
      {textSlot(text,"228:51847/228:51848/228:51851","Label",<><span className={s.n51}>{"Value Value\n"}</span><span className={s.n51}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51852": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51852"} data-name={"Selected=off, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51852/228:51853"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51852/228:51853/228:51854"} data-name={"chbox"}>
      <span className={s.n48} data-layer={"228:51852/228:51853/228:51854/228:51855"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n49} data-layer={"228:51852/228:51853/228:51856"} data-name={"Label"}>
      {textSlot(text,"228:51852/228:51853/228:51856","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:51852/228:51857"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:51852/228:51857/228:51858"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:51852/228:51857/228:51858/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:51859": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51859"} data-name={"Selected=off, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=on"}>
  <span className={s.n46} data-layer={"228:51859/228:51860"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51859/228:51860/228:51861"} data-name={"chbox"}>
      <span className={s.n50} data-layer={"228:51859/228:51860/228:51861/228:51862"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n56} data-layer={"228:51859/228:51860/228:51863"} data-name={"Label"}>
      {textSlot(text,"228:51859/228:51860/228:51863","Label",<><span className={s.n51}>{"Value Value\n"}</span><span className={s.n51}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:51859/228:51864"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:51859/228:51864/228:51865"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:51859/228:51864/228:51865/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:51866": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51866"} data-name={"Selected=off, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:51866/228:51867"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51866/228:51867/228:51868"} data-name={"chbox"}>
      <span className={s.n60} data-layer={"228:51866/228:51867/228:51868/228:51869"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n61} data-layer={"228:51866/228:51867/228:51870"} data-name={"Label"}>
      {textSlot(text,"228:51866/228:51867/228:51870","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51871": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51871"} data-name={"Selected=off, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=on"}>
  <span className={s.n58} data-layer={"228:51871/228:51872"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51871/228:51872/228:51873"} data-name={"chbox"}>
      <span className={s.n62} data-layer={"228:51871/228:51872/228:51873/228:51874"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n61} data-layer={"228:51871/228:51872/228:51875"} data-name={"Label"}>
      {textSlot(text,"228:51871/228:51872/228:51875","Label",<><span className={s.n63}>{"Value Value\n"}</span><span className={s.n51}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51876": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51876"} data-name={"Selected=off, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:51876/228:51877"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51876/228:51877/228:51878"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:51876/228:51877/228:51878/228:51879"} data-name={"radio/var"}>
        <span className={s.n65} data-layer={"228:51876/228:51877/228:51878/228:51879/228:3201"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n61} data-layer={"228:51876/228:51877/228:51880"} data-name={"Label"}>
      {textSlot(text,"228:51876/228:51877/228:51880","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51881": return (<Root {...rootAttributes} className={[s.n57,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51881"} data-name={"Selected=off, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=on"}>
  <span className={s.n58} data-layer={"228:51881/228:51882"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51881/228:51882/228:51883"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:51881/228:51882/228:51883/228:51884"} data-name={"radio/var"}>
        <span className={s.n66} data-layer={"228:51881/228:51882/228:51883/228:51884/228:3205"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n61} data-layer={"228:51881/228:51882/228:51885"} data-name={"Label"}>
      {textSlot(text,"228:51881/228:51882/228:51885","Label",<><span className={s.n63}>{"Value Value\n"}</span><span className={s.n51}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51886": return (<Root {...rootAttributes} className={[s.n23,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51886"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=on"}>
  <span className={s.n4} data-layer={"228:51886/228:51887"} data-name={"box"}>
    <span className={s.n5} data-layer={"228:51886/228:51887/228:51888"} data-name={"radio/var"}>
      <span className={s.n53} data-layer={"228:51886/228:51887/228:51888/228:3203"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n29} data-layer={"228:51886/228:51887/228:51889"} data-name={"Label"}>
      {textSlot(text,"228:51886/228:51887/228:51889","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51890": return (<Root {...rootAttributes} className={[s.n67,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51890"} data-name={"Selected=off, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=off"}>
  <span className={s.n68} data-layer={"228:51890/228:51891"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:51890/228:51891/228:51892"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n70} data-layer={"228:51890/228:51891/228:51892/235:52290"} data-name={"Label"}>
        {textSlot(text,"228:51890/228:51891/228:51892/235:52290","Label","Lable")}
      </span>
    </span>
    <span className={s.n71} data-layer={"228:51890/228:51891/228:51893"} data-name={"Label"}>
      {textSlot(text,"228:51890/228:51891/228:51893","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51894": return (<Root {...rootAttributes} className={[s.n67,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51894"} data-name={"Selected=off, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=on"}>
  <span className={s.n68} data-layer={"228:51894/228:51895"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:51894/228:51895/228:51896"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n72} data-layer={"228:51894/228:51895/228:51896/235:52294"} data-name={"Label"}>
        {textSlot(text,"228:51894/228:51895/228:51896/235:52294","Label","Lable")}
      </span>
    </span>
    <span className={s.n73} data-layer={"228:51894/228:51895/228:51897"} data-name={"Label"}>
      {textSlot(text,"228:51894/228:51895/228:51897","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51898": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51898"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n34} data-layer={"228:51898/228:51899"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:51898/228:51899/228:51900"} data-name={"radio/var"}>
      <span className={s.n65} data-layer={"228:51898/228:51899/228:51900/228:3201"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n36} data-layer={"228:51898/228:51899/228:51901"} data-name={"Label"}>
      {textSlot(text,"228:51898/228:51899/228:51901","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51902": return (<Root {...rootAttributes} className={[s.n33,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51902"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=on"}>
  <span className={s.n34} data-layer={"228:51902/228:51903"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:51902/228:51903/228:51904"} data-name={"radio/var"}>
      <span className={s.n66} data-layer={"228:51902/228:51903/228:51904/228:3205"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n38} data-layer={"228:51902/228:51903/228:51905"} data-name={"Label"}>
      {textSlot(text,"228:51902/228:51903/228:51905","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51906": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51906"} data-name={"Selected=off, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=off"}>
  <span className={s.n76} data-layer={"228:51906/228:51907"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:51906/228:51907/228:51908"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n78} data-layer={"228:51906/228:51907/228:51908/227:654"} data-name={"Label"}>
        {textSlot(text,"228:51906/228:51907/228:51908/227:654","Label","Lable")}
      </span>
    </span>
    <span className={s.n79} data-layer={"228:51906/228:51907/228:51909"} data-name={"Label"}>
      {textSlot(text,"228:51906/228:51907/228:51909","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51910": return (<Root {...rootAttributes} className={[s.n75,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51910"} data-name={"Selected=off, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=on"}>
  <span className={s.n76} data-layer={"228:51910/228:51911"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:51910/228:51911/228:51912"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n80} data-layer={"228:51910/228:51911/228:51912/227:666"} data-name={"Label"}>
        {textSlot(text,"228:51910/228:51911/228:51912/227:666","Label","Lable")}
      </span>
    </span>
    <span className={s.n81} data-layer={"228:51910/228:51911/228:51913"} data-name={"Label"}>
      {textSlot(text,"228:51910/228:51911/228:51913","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51914": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51914"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=off"}>
  <span className={s.n40} data-layer={"228:51914/228:51915"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:51914/228:51915/228:51916"} data-name={"radio/var"}>
      <span className={s.n83} data-layer={"228:51914/228:51915/228:51916/228:3231"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n42} data-layer={"228:51914/228:51915/228:51917"} data-name={"Label"}>
      {textSlot(text,"228:51914/228:51915/228:51917","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51918": return (<Root {...rootAttributes} className={[s.n39,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51918"} data-name={"Selected=off, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=on"}>
  <span className={s.n40} data-layer={"228:51918/228:51919"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:51918/228:51919/228:51920"} data-name={"radio/var"}>
      <span className={s.n84} data-layer={"228:51918/228:51919/228:51920/228:3233"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n44} data-layer={"228:51918/228:51919/228:51921"} data-name={"Label"}>
      {textSlot(text,"228:51918/228:51919/228:51921","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51922": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51922"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=on"}>
  <span className={s.n1} data-layer={"228:51922/228:51923"} data-name={"box"}>
    <span className={s.n85} data-layer={"228:51922/228:51923/228:51924"} data-name={"Label"}>
      {textSlot(text,"228:51922/228:51923/228:51924","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51925": return (<Root {...rootAttributes} className={[s.n86,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51925"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n87} data-layer={"228:51925/228:51926"} data-name={"box"}>
    <span className={s.n88} data-layer={"228:51925/228:51926/228:51927"} data-name={"Label"}>
      {textSlot(text,"228:51925/228:51926/228:51927","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51928": return (<Root {...rootAttributes} className={[s.n86,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51928"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=on"}>
  <span className={s.n87} data-layer={"228:51928/228:51929"} data-name={"box"}>
    <span className={s.n89} data-layer={"228:51928/228:51929/228:51930"} data-name={"Label"}>
      {textSlot(text,"228:51928/228:51929/228:51930","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51931": return (<Root {...rootAttributes} className={[s.n90,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51931"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=off"}>
  <span className={s.n10} data-layer={"228:51931/228:51932"} data-name={"box"}>
    <span className={s.n11} data-layer={"228:51931/228:51932/228:51933"} data-name={"Label"}>
      {textSlot(text,"228:51931/228:51932/228:51933","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51934": return (<Root {...rootAttributes} className={[s.n90,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51934"} data-name={"Selected=off, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=on"}>
  <span className={s.n10} data-layer={"228:51934/228:51935"} data-name={"box"}>
    <span className={s.n91} data-layer={"228:51934/228:51935/228:51936"} data-name={"Label"}>
      {textSlot(text,"228:51934/228:51935/228:51936","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51937": return (<Root {...rootAttributes} className={[s.n92,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51937"} data-name={"Selected=off, Hover=off, discription=on, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n93} data-layer={"228:51937/228:51938"} data-name={"box"}>
    <span className={s.n94} data-layer={"228:51937/228:51938/228:51939"} data-name={"Label"}>
      {textSlot(text,"228:51937/228:51938/228:51939","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51940": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51940"} data-name={"Selected=off, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=on"}>
  <span className={s.n13} data-layer={"228:51940/228:51941"} data-name={"box"}>
    <span className={s.n22} data-layer={"228:51940/228:51941/228:51942"} data-name={"Label"}>
      {textSlot(text,"228:51940/228:51941/228:51942","Label",<><span className={s.n63}>{"Value Value\n"}</span><span className={s.n63}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51943": return (<Root {...rootAttributes} className={[s.n3,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51943"} data-name={"Selected=off, Hover=on, discription=off, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"228:51943/228:51944"} data-name={"box"}>
    <span className={s.n95} data-layer={"228:51943/228:51944/228:51945"} data-name={"Chekbox/var"}></span>
    <span className={s.n7} data-layer={"228:51943/228:51944/228:51946"} data-name={"Label"}>
      {textSlot(text,"228:51943/228:51944/228:51946","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51947": return (<Root {...rootAttributes} className={[s.n96,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51947"} data-name={"Selected=off, Hover=on, discription=off, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n4} data-layer={"228:51947/228:51948"} data-name={"box"}>
    <span className={s.n95} data-layer={"228:51947/228:51948/228:51949"} data-name={"Chekbox/var"}></span>
    <span className={s.n7} data-layer={"228:51947/228:51948/228:51950"} data-name={"Label"}>
      {textSlot(text,"228:51947/228:51948/228:51950","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:51947/228:51951"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:51947/228:51951/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:51952": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51952"} data-name={"Selected=off, Hover=on, discription=off, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n34} data-layer={"228:51952/228:51953"} data-name={"box"}>
    <span className={s.n98} data-layer={"228:51952/228:51953/228:51954"} data-name={"Chekbox/var"}></span>
    <span className={s.n36} data-layer={"228:51952/228:51953/228:51955"} data-name={"Label"}>
      {textSlot(text,"228:51952/228:51953/228:51955","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51956": return (<Root {...rootAttributes} className={[s.n99,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51956"} data-name={"Selected=off, Hover=on, discription=off, View=chbox, Size=S, Part=off, Disable=off"}>
  <span className={s.n40} data-layer={"228:51956/228:51957"} data-name={"box"}>
    <span className={s.n100} data-layer={"228:51956/228:51957/228:51958"} data-name={"Chekbox/var"}></span>
    <span className={s.n42} data-layer={"228:51956/228:51957/228:51959"} data-name={"Label"}>
      {textSlot(text,"228:51956/228:51957/228:51959","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51960": return (<Root {...rootAttributes} className={[s.n101,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51960"} data-name={"Selected=off, Hover=on, discription=on, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51960/228:51961"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51960/228:51961/228:51962"} data-name={"chbox"}>
      <span className={s.n102} data-layer={"228:51960/228:51961/228:51962/228:51963"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n49} data-layer={"228:51960/228:51961/228:51964"} data-name={"Label"}>
      {textSlot(text,"228:51960/228:51961/228:51964","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51965": return (<Root {...rootAttributes} className={[s.n101,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51965"} data-name={"Selected=off, Hover=on, discription=on, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51965/228:51966"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51965/228:51966/228:51967"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:51965/228:51966/228:51967/228:51968"} data-name={"radio/var"}>
        <span className={s.n6} data-layer={"228:51965/228:51966/228:51967/228:51968/227:1360"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n49} data-layer={"228:51965/228:51966/228:51969"} data-name={"Label"}>
      {textSlot(text,"228:51965/228:51966/228:51969","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51970": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51970"} data-name={"Selected=off, Hover=on, discription=on, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n46} data-layer={"228:51970/228:51971"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:51970/228:51971/228:51972"} data-name={"chbox"}>
      <span className={s.n102} data-layer={"228:51970/228:51971/228:51972/228:51973"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n49} data-layer={"228:51970/228:51971/228:51974"} data-name={"Label"}>
      {textSlot(text,"228:51970/228:51971/228:51974","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:51970/228:51975"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:51970/228:51975/228:51976"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:51970/228:51975/228:51976/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:51977": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51977"} data-name={"Selected=off, Hover=on, discription=on, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:51977/228:51978"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51977/228:51978/228:51979"} data-name={"chbox"}>
      <span className={s.n105} data-layer={"228:51977/228:51978/228:51979/228:51980"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n61} data-layer={"228:51977/228:51978/228:51981"} data-name={"Label"}>
      {textSlot(text,"228:51977/228:51978/228:51981","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51982": return (<Root {...rootAttributes} className={[s.n104,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51982"} data-name={"Selected=off, Hover=on, discription=on, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:51982/228:51983"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:51982/228:51983/228:51984"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:51982/228:51983/228:51984/228:51985"} data-name={"radio/var"}>
        <span className={s.n106} data-layer={"228:51982/228:51983/228:51984/228:51985/228:3199"} data-name={"Ellipse 49"}></span>
      </span>
    </span>
    <span className={s.n61} data-layer={"228:51982/228:51983/228:51986"} data-name={"Label"}>
      {textSlot(text,"228:51982/228:51983/228:51986","Label",<><span className={s.n15}>{"Val"}</span><span className={s.n15}>{"ue"}</span><span className={s.n15}>{" Val"}</span><span className={s.n15}>{"ue\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:51987": return (<Root {...rootAttributes} className={[s.n107,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51987"} data-name={"Selected=off, Hover=on, discription=off, View=lable, Size=L, Part=off, Disable=off"}>
  <span className={s.n68} data-layer={"228:51987/228:51988"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:51987/228:51988/228:51989"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n70} data-layer={"228:51987/228:51988/228:51989/235:52290"} data-name={"Label"}>
        {textSlot(text,"228:51987/228:51988/228:51989/235:52290","Label","Lable")}
      </span>
    </span>
    <span className={s.n71} data-layer={"228:51987/228:51988/228:51990"} data-name={"Label"}>
      {textSlot(text,"228:51987/228:51988/228:51990","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51991": return (<Root {...rootAttributes} className={[s.n97,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51991"} data-name={"Selected=off, Hover=on, discription=off, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n34} data-layer={"228:51991/228:51992"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:51991/228:51992/228:51993"} data-name={"radio/var"}>
      <span className={s.n106} data-layer={"228:51991/228:51992/228:51993/228:3199"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n36} data-layer={"228:51991/228:51992/228:51994"} data-name={"Label"}>
      {textSlot(text,"228:51991/228:51992/228:51994","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51995": return (<Root {...rootAttributes} className={[s.n108,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51995"} data-name={"Selected=off, Hover=on, discription=off, View=lable, Size=M, Part=off, Disable=off"}>
  <span className={s.n76} data-layer={"228:51995/228:51996"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:51995/228:51996/228:51997"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n78} data-layer={"228:51995/228:51996/228:51997/227:654"} data-name={"Label"}>
        {textSlot(text,"228:51995/228:51996/228:51997/227:654","Label","Lable")}
      </span>
    </span>
    <span className={s.n79} data-layer={"228:51995/228:51996/228:51998"} data-name={"Label"}>
      {textSlot(text,"228:51995/228:51996/228:51998","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:51999": return (<Root {...rootAttributes} className={[s.n99,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51999"} data-name={"Selected=off, Hover=on, discription=off, View=radio, Size=S, Part=off, Disable=off"}>
  <span className={s.n40} data-layer={"228:51999/228:52000"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:51999/228:52000/228:52001"} data-name={"radio/var"}>
      <span className={s.n109} data-layer={"228:51999/228:52000/228:52001/228:3239"} data-name={"Ellipse 49"}></span>
    </span>
    <span className={s.n42} data-layer={"228:51999/228:52000/228:52002"} data-name={"Label"}>
      {textSlot(text,"228:51999/228:52000/228:52002","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52003": return (<Root {...rootAttributes} className={[s.n110,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52003"} data-name={"Selected=off, Hover=on, discription=off, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n87} data-layer={"228:52003/228:52004"} data-name={"box"}>
    <span className={s.n88} data-layer={"228:52003/228:52004/228:52005"} data-name={"Label"}>
      {textSlot(text,"228:52003/228:52004/228:52005","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52006": return (<Root {...rootAttributes} className={[s.n111,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52006"} data-name={"Selected=off, Hover=on, discription=on, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n93} data-layer={"228:52006/228:52007"} data-name={"box"}>
    <span className={s.n94} data-layer={"228:52006/228:52007/228:52008"} data-name={"Label"}>
      {textSlot(text,"228:52006/228:52007/228:52008","Label",<><span className={s.n16}>{"Value Value\n"}</span><span className={s.n16}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52009": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52009"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"228:52009/228:52010"} data-name={"box"}>
    <span className={s.n112} data-layer={"228:52009/228:52010/228:52011"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52009/228:52010/228:52011/227:678"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n20} data-layer={"228:52009/228:52010/228:52012"} data-name={"Label"}>
      {textSlot(text,"228:52009/228:52010/228:52012","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52013": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52013"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=L, Part=off, Disable=on"}>
  <span className={s.n18} data-layer={"228:52013/228:52014"} data-name={"box"}>
    <span className={s.n114} data-layer={"228:52013/228:52014/228:52015"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52013/228:52014/228:52015/237:48840"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n115} data-layer={"228:52013/228:52014/228:52016"} data-name={"Label"}>
      {textSlot(text,"228:52013/228:52014/228:52016","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52017": return (<Root {...rootAttributes} className={[s.n116,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52017"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n117} data-layer={"228:52017/228:52018"} data-name={"box"}>
    <span className={s.n118} data-layer={"228:52017/228:52018/228:52019"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52017/228:52018/228:52019/227:680"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n120} data-layer={"228:52017/228:52018/228:52020"} data-name={"Label"}>
      {textSlot(text,"228:52017/228:52018/228:52020","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52021": return (<Root {...rootAttributes} className={[s.n116,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52021"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=M, Part=off, Disable=on"}>
  <span className={s.n117} data-layer={"228:52021/228:52022"} data-name={"box"}>
    <span className={s.n121} data-layer={"228:52021/228:52022/228:52023"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52021/228:52022/228:52023/237:48844"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n122} data-layer={"228:52021/228:52022/228:52024"} data-name={"Label"}>
      {textSlot(text,"228:52021/228:52022/228:52024","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52025": return (<Root {...rootAttributes} className={[s.n123,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52025"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=off"}>
  <span className={s.n124} data-layer={"228:52025/228:52026"} data-name={"box"}>
    <span className={s.n125} data-layer={"228:52025/228:52026/228:52027"} data-name={"Chekbox/var"}>
      <span className={s.n126} data-layer={"228:52025/228:52026/228:52027/227:694"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n127} data-layer={"228:52025/228:52026/228:52028"} data-name={"Label"}>
      {textSlot(text,"228:52025/228:52026/228:52028","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52029": return (<Root {...rootAttributes} className={[s.n123,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52029"} data-name={"Selected=on, Hover=off, discription=off, View=chbox, Size=S, Part=off, Disable=on"}>
  <span className={s.n124} data-layer={"228:52029/228:52030"} data-name={"box"}>
    <span className={s.n128} data-layer={"228:52029/228:52030/228:52031"} data-name={"Chekbox/var"}>
      <span className={s.n126} data-layer={"228:52029/228:52030/228:52031/237:48913"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n129} data-layer={"228:52029/228:52030/228:52032"} data-name={"Label"}>
      {textSlot(text,"228:52029/228:52030/228:52032","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52033": return (<Root {...rootAttributes} className={[s.n130,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52033"} data-name={"Selected=on, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52033/228:52034"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52033/228:52034/228:52035"} data-name={"chbox"}>
      <span className={s.n132} data-layer={"228:52033/228:52034/228:52035/228:52036"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52033/228:52034/228:52035/228:52036/227:678"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52033/228:52034/228:52037"} data-name={"Label"}>
      {textSlot(text,"228:52033/228:52034/228:52037","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52038": return (<Root {...rootAttributes} className={[s.n130,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52038"} data-name={"Selected=on, Hover=off, discription=on, View=chbox, Size=L, Part=off, Disable=on"}>
  <span className={s.n131} data-layer={"228:52038/228:52039"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52038/228:52039/228:52040"} data-name={"chbox"}>
      <span className={s.n135} data-layer={"228:52038/228:52039/228:52040/228:52041"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52038/228:52039/228:52040/228:52041/237:48840"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n136} data-layer={"228:52038/228:52039/228:52042"} data-name={"Label"}>
      {textSlot(text,"228:52038/228:52039/228:52042","Label",<><span className={s.n137}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52043": return (<Root {...rootAttributes} className={[s.n130,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52043"} data-name={"Selected=on, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52043/228:52044"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52043/228:52044/228:52045"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:52043/228:52044/228:52045/228:52046"} data-name={"radio/var"}>
        <span className={s.n26} data-layer={"228:52043/228:52044/228:52045/228:52046/227:1364"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52043/228:52044/228:52047"} data-name={"Label"}>
      {textSlot(text,"228:52043/228:52044/228:52047","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52048": return (<Root {...rootAttributes} className={[s.n130,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52048"} data-name={"Selected=on, Hover=off, discription=on, View=radio, Size=L, Part=off, Disable=on"}>
  <span className={s.n131} data-layer={"228:52048/228:52049"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52048/228:52049/228:52050"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:52048/228:52049/228:52050/228:52051"} data-name={"radio/var"}>
        <span className={s.n138} data-layer={"228:52048/228:52049/228:52050/228:52051/228:3217"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n136} data-layer={"228:52048/228:52049/228:52052"} data-name={"Label"}>
      {textSlot(text,"228:52048/228:52049/228:52052","Label",<><span className={s.n137}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52053": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52053"} data-name={"Selected=on, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52053/228:52054"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52053/228:52054/228:52055"} data-name={"chbox"}>
      <span className={s.n141} data-layer={"228:52053/228:52054/228:52055/228:52056"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52053/228:52054/228:52055/228:52056/227:680"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52053/228:52054/228:52057"} data-name={"Label"}>
      {textSlot(text,"228:52053/228:52054/228:52057","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52058": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52058"} data-name={"Selected=on, Hover=off, discription=on, View=chbox, Size=M, Part=off, Disable=on"}>
  <span className={s.n140} data-layer={"228:52058/228:52059"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52058/228:52059/228:52060"} data-name={"chbox"}>
      <span className={s.n144} data-layer={"228:52058/228:52059/228:52060/228:52061"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52058/228:52059/228:52060/228:52061/237:48844"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n145} data-layer={"228:52058/228:52059/228:52062"} data-name={"Label"}>
      {textSlot(text,"228:52058/228:52059/228:52062","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52063": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52063"} data-name={"Selected=on, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52063/228:52064"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52063/228:52064/228:52065"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:52063/228:52064/228:52065/228:52066"} data-name={"radio/var"}>
        <span className={s.n147} data-layer={"228:52063/228:52064/228:52065/228:52066/228:3215"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52063/228:52064/228:52067"} data-name={"Label"}>
      {textSlot(text,"228:52063/228:52064/228:52067","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52068": return (<Root {...rootAttributes} className={[s.n139,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52068"} data-name={"Selected=on, Hover=off, discription=on, View=radio, Size=M, Part=off, Disable=on"}>
  <span className={s.n140} data-layer={"228:52068/228:52069"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52068/228:52069/228:52070"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:52068/228:52069/228:52070/228:52071"} data-name={"radio/var"}>
        <span className={s.n148} data-layer={"228:52068/228:52069/228:52070/228:52071/228:3219"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n145} data-layer={"228:52068/228:52069/228:52072"} data-name={"Label"}>
      {textSlot(text,"228:52068/228:52069/228:52072","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52073": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52073"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=on, Disable=off"}>
  <span className={s.n18} data-layer={"228:52073/228:52074"} data-name={"box"}>
    <span className={s.n27} data-layer={"228:52073/228:52074/228:52075"} data-name={"Chekbox/var"}>
      <span className={s.n149} data-layer={"228:52073/228:52074/228:52075/237:48849"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n20} data-layer={"228:52073/228:52074/228:52076"} data-name={"Label"}>
      {textSlot(text,"228:52073/228:52074/228:52076","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52073/228:52077"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52073/228:52077/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52078": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52078"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=on, Disable=on"}>
  <span className={s.n18} data-layer={"228:52078/228:52079"} data-name={"box"}>
    <span className={s.n150} data-layer={"228:52078/228:52079/228:52080"} data-name={"Chekbox/var"}>
      <span className={s.n151} data-layer={"228:52078/228:52079/228:52080/237:48866"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n115} data-layer={"228:52078/228:52079/228:52081"} data-name={"Label"}>
      {textSlot(text,"228:52078/228:52079/228:52081","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52078/228:52082"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52078/228:52082/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52083": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52083"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"228:52083/228:52084"} data-name={"box"}>
    <span className={s.n112} data-layer={"228:52083/228:52084/228:52085"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52083/228:52084/228:52085/227:678"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n20} data-layer={"228:52083/228:52084/228:52086"} data-name={"Label"}>
      {textSlot(text,"228:52083/228:52084/228:52086","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52083/228:52087"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52083/228:52087/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52088": return (<Root {...rootAttributes} className={[s.n30,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52088"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=L, Part=off, Disable=on"}>
  <span className={s.n18} data-layer={"228:52088/228:52089"} data-name={"box"}>
    <span className={s.n114} data-layer={"228:52088/228:52089/228:52090"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52088/228:52089/228:52090/237:48840"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n115} data-layer={"228:52088/228:52089/228:52091"} data-name={"Label"}>
      {textSlot(text,"228:52088/228:52089/228:52091","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52088/228:52092"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52088/228:52092/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52093": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52093"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=on, Disable=off"}>
  <span className={s.n153} data-layer={"228:52093/228:52094"} data-name={"box"}>
    <span className={s.n35} data-layer={"228:52093/228:52094/228:52095"} data-name={"Chekbox/var"}>
      <span className={s.n154} data-layer={"228:52093/228:52094/228:52095/237:48856"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n120} data-layer={"228:52093/228:52094/228:52096"} data-name={"Label"}>
      {textSlot(text,"228:52093/228:52094/228:52096","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52093/232:55673"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52093/234:51872"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52093/231:57669"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52098": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52098"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=on, Disable=on"}>
  <span className={s.n153} data-layer={"228:52098/228:52099"} data-name={"box"}>
    <span className={s.n156} data-layer={"228:52098/228:52099/228:52100"} data-name={"Chekbox/var"}>
      <span className={s.n157} data-layer={"228:52098/228:52099/228:52100/237:48875"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n122} data-layer={"228:52098/228:52099/228:52101"} data-name={"Label"}>
      {textSlot(text,"228:52098/228:52099/228:52101","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52098/232:55675"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52098/234:51874"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52098/231:57671"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52103": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52103"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n153} data-layer={"228:52103/228:52104"} data-name={"box"}>
    <span className={s.n118} data-layer={"228:52103/228:52104/228:52105"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52103/228:52104/228:52105/227:680"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n120} data-layer={"228:52103/228:52104/228:52106"} data-name={"Label"}>
      {textSlot(text,"228:52103/228:52104/228:52106","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52103/232:55682"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52103/234:51879"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52103/231:57678"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52108": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52108"} data-name={"Selected=on, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=on"}>
  <span className={s.n153} data-layer={"228:52108/228:52109"} data-name={"box"}>
    <span className={s.n121} data-layer={"228:52108/228:52109/228:52110"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52108/228:52109/228:52110/237:48844"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n122} data-layer={"228:52108/228:52109/228:52111"} data-name={"Label"}>
      {textSlot(text,"228:52108/228:52109/228:52111","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52108/232:55679"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52108/234:51876"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52108/231:57675"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52113": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52113"} data-name={"Selected=off, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n158} data-layer={"228:52113/228:52114"} data-name={"box"}>
    <span className={s.n35} data-layer={"228:52113/228:52114/228:52115"} data-name={"Chekbox/var"}></span>
    <span className={s.n36} data-layer={"228:52113/228:52114/228:52116"} data-name={"Label"}>
      {textSlot(text,"228:52113/228:52114/228:52116","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52113/232:55685"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52113/234:51881"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52113/231:57681"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52118": return (<Root {...rootAttributes} className={[s.n152,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52118"} data-name={"Selected=off, Hover=off, discription=off, View=chevron, Size=M, Part=off, Disable=on"}>
  <span className={s.n158} data-layer={"228:52118/228:52119"} data-name={"box"}>
    <span className={s.n37} data-layer={"228:52118/228:52119/228:52120"} data-name={"Chekbox/var"}></span>
    <span className={s.n38} data-layer={"228:52118/228:52119/228:52121"} data-name={"Label"}>
      {textSlot(text,"228:52118/228:52119/228:52121","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52118/232:55674"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52118/234:51873"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52118/231:57670"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52123": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52123"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=on, Disable=off"}>
  <span className={s.n131} data-layer={"228:52123/228:52124"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52123/228:52124/228:52125"} data-name={"chbox"}>
      <span className={s.n48} data-layer={"228:52123/228:52124/228:52125/228:52126"} data-name={"Chekbox/var"}>
        <span className={s.n149} data-layer={"228:52123/228:52124/228:52125/228:52126/237:48849"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52123/228:52124/228:52127"} data-name={"Label"}>
      {textSlot(text,"228:52123/228:52124/228:52127","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52123/228:52128"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52123/228:52128/228:52129"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52123/228:52128/228:52129/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52130": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52130"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=on, Disable=on"}>
  <span className={s.n131} data-layer={"228:52130/228:52131"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52130/228:52131/228:52132"} data-name={"chbox"}>
      <span className={s.n159} data-layer={"228:52130/228:52131/228:52132/228:52133"} data-name={"Chekbox/var"}>
        <span className={s.n151} data-layer={"228:52130/228:52131/228:52132/228:52133/237:48866"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n136} data-layer={"228:52130/228:52131/228:52134"} data-name={"Label"}>
      {textSlot(text,"228:52130/228:52131/228:52134","Label",<><span className={s.n137}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52130/228:52135"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52130/228:52135/228:52136"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52130/228:52135/228:52136/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52137": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52137"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52137/228:52138"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52137/228:52138/228:52139"} data-name={"chbox"}>
      <span className={s.n132} data-layer={"228:52137/228:52138/228:52139/228:52140"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52137/228:52138/228:52139/228:52140/227:678"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52137/228:52138/228:52141"} data-name={"Label"}>
      {textSlot(text,"228:52137/228:52138/228:52141","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52137/228:52142"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52137/228:52142/228:52143"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52137/228:52142/228:52143/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52144": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52144"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=L, Part=off, Disable=on"}>
  <span className={s.n131} data-layer={"228:52144/228:52145"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52144/228:52145/228:52146"} data-name={"chbox"}>
      <span className={s.n135} data-layer={"228:52144/228:52145/228:52146/228:52147"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52144/228:52145/228:52146/228:52147/237:48840"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n136} data-layer={"228:52144/228:52145/228:52148"} data-name={"Label"}>
      {textSlot(text,"228:52144/228:52145/228:52148","Label",<><span className={s.n137}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52144/228:52149"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52144/228:52149/228:52150"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52144/228:52149/228:52150/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(207,207,207,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52151": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52151"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=on, Disable=off"}>
  <span className={s.n140} data-layer={"228:52151/228:52152"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52151/228:52152/228:52153"} data-name={"chbox"}>
      <span className={s.n60} data-layer={"228:52151/228:52152/228:52153/228:52154"} data-name={"Chekbox/var"}>
        <span className={s.n154} data-layer={"228:52151/228:52152/228:52153/228:52154/237:48856"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52151/228:52152/228:52155"} data-name={"Label"}>
      {textSlot(text,"228:52151/228:52152/228:52155","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52151/228:52156"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52151/228:52156/232:55681"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52151/228:52156/234:51878"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52151/228:52156/231:57677"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52158": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52158"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=on, Disable=on"}>
  <span className={s.n140} data-layer={"228:52158/228:52159"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52158/228:52159/228:52160"} data-name={"chbox"}>
      <span className={s.n162} data-layer={"228:52158/228:52159/228:52160/228:52161"} data-name={"Chekbox/var"}>
        <span className={s.n157} data-layer={"228:52158/228:52159/228:52160/228:52161/237:48875"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n145} data-layer={"228:52158/228:52159/228:52162"} data-name={"Label"}>
      {textSlot(text,"228:52158/228:52159/228:52162","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52158/228:52163"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52158/228:52163/232:55688"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52158/228:52163/234:51884"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52158/228:52163/231:57684"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52165": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52165"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52165/228:52166"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52165/228:52166/228:52167"} data-name={"chbox"}>
      <span className={s.n141} data-layer={"228:52165/228:52166/228:52167/228:52168"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52165/228:52166/228:52167/228:52168/227:680"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52165/228:52166/228:52169"} data-name={"Label"}>
      {textSlot(text,"228:52165/228:52166/228:52169","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52165/228:52170"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52165/228:52170/232:55680"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52165/228:52170/234:51877"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52165/228:52170/231:57676"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52172": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52172"} data-name={"Selected=on, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=on"}>
  <span className={s.n140} data-layer={"228:52172/228:52173"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52172/228:52173/228:52174"} data-name={"chbox"}>
      <span className={s.n144} data-layer={"228:52172/228:52173/228:52174/228:52175"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52172/228:52173/228:52174/228:52175/237:48844"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n145} data-layer={"228:52172/228:52173/228:52176"} data-name={"Label"}>
      {textSlot(text,"228:52172/228:52173/228:52176","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52172/228:52177"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52172/228:52177/232:55687"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52172/228:52177/234:51883"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52172/228:52177/231:57683"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52179": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52179"} data-name={"Selected=off, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:52179/228:52180"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52179/228:52180/228:52181"} data-name={"chbox"}>
      <span className={s.n60} data-layer={"228:52179/228:52180/228:52181/228:52182"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n163} data-layer={"228:52179/228:52180/228:52183"} data-name={"Label"}>
      {textSlot(text,"228:52179/228:52180/228:52183","Label",<><span className={s.n164}>{"Val"}</span><span className={s.n164}>{"ue"}</span><span className={s.n164}>{" Val"}</span><span className={s.n164}>{"ue\n"}</span><span className={s.n165}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52179/228:52184"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52179/228:52184/232:55684"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52179/228:52184/234:51880"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52179/228:52184/231:57680"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52186": return (<Root {...rootAttributes} className={[s.n160,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52186"} data-name={"Selected=off, Hover=off, discription=on, View=chevron, Size=M, Part=off, Disable=on"}>
  <span className={s.n58} data-layer={"228:52186/228:52187"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52186/228:52187/228:52188"} data-name={"chbox"}>
      <span className={s.n62} data-layer={"228:52186/228:52187/228:52188/228:52189"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n166} data-layer={"228:52186/228:52187/228:52190"} data-name={"Label"}>
      {textSlot(text,"228:52186/228:52187/228:52190","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n137}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52186/228:52191"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52186/228:52191/232:55694"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52186/228:52191/234:51889"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52186/228:52191/231:57690"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52193": return (<Root {...rootAttributes} className={[s.n25,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52193"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=L, Part=off, Disable=on"}>
  <span className={s.n18} data-layer={"228:52193/228:52194"} data-name={"box"}>
    <span className={s.n5} data-layer={"228:52193/228:52194/228:52195"} data-name={"radio/var"}>
      <span className={s.n138} data-layer={"228:52193/228:52194/228:52195/228:3217"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n115} data-layer={"228:52193/228:52194/228:52196"} data-name={"Label"}>
      {textSlot(text,"228:52193/228:52194/228:52196","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52197": return (<Root {...rootAttributes} className={[s.n167,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52197"} data-name={"Selected=on, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=off"}>
  <span className={s.n168} data-layer={"228:52197/228:52198"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:52197/228:52198/228:52199"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n70} data-layer={"228:52197/228:52198/228:52199/235:52290"} data-name={"Label"}>
        {textSlot(text,"228:52197/228:52198/228:52199/235:52290","Label","Lable")}
      </span>
    </span>
    <span className={s.n169} data-layer={"228:52197/228:52198/228:52200"} data-name={"Label"}>
      {textSlot(text,"228:52197/228:52198/228:52200","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52201": return (<Root {...rootAttributes} className={[s.n167,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52201"} data-name={"Selected=on, Hover=off, discription=off, View=lable, Size=L, Part=off, Disable=on"}>
  <span className={s.n168} data-layer={"228:52201/228:52202"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:52201/228:52202/228:52203"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n72} data-layer={"228:52201/228:52202/228:52203/235:52294"} data-name={"Label"}>
        {textSlot(text,"228:52201/228:52202/228:52203/235:52294","Label","Lable")}
      </span>
    </span>
    <span className={s.n170} data-layer={"228:52201/228:52202/228:52204"} data-name={"Label"}>
      {textSlot(text,"228:52201/228:52202/228:52204","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52205": return (<Root {...rootAttributes} className={[s.n116,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52205"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n117} data-layer={"228:52205/228:52206"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:52205/228:52206/228:52207"} data-name={"radio/var"}>
      <span className={s.n147} data-layer={"228:52205/228:52206/228:52207/228:3215"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n120} data-layer={"228:52205/228:52206/228:52208"} data-name={"Label"}>
      {textSlot(text,"228:52205/228:52206/228:52208","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52209": return (<Root {...rootAttributes} className={[s.n116,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52209"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=M, Part=off, Disable=on"}>
  <span className={s.n117} data-layer={"228:52209/228:52210"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:52209/228:52210/228:52211"} data-name={"radio/var"}>
      <span className={s.n148} data-layer={"228:52209/228:52210/228:52211/228:3219"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n122} data-layer={"228:52209/228:52210/228:52212"} data-name={"Label"}>
      {textSlot(text,"228:52209/228:52210/228:52212","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52213": return (<Root {...rootAttributes} className={[s.n171,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52213"} data-name={"Selected=on, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=off"}>
  <span className={s.n172} data-layer={"228:52213/228:52214"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:52213/228:52214/228:52215"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n78} data-layer={"228:52213/228:52214/228:52215/227:654"} data-name={"Label"}>
        {textSlot(text,"228:52213/228:52214/228:52215/227:654","Label","Lable")}
      </span>
    </span>
    <span className={s.n173} data-layer={"228:52213/228:52214/228:52216"} data-name={"Label"}>
      {textSlot(text,"228:52213/228:52214/228:52216","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52217": return (<Root {...rootAttributes} className={[s.n171,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52217"} data-name={"Selected=on, Hover=off, discription=off, View=lable, Size=M, Part=off, Disable=on"}>
  <span className={s.n172} data-layer={"228:52217/228:52218"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:52217/228:52218/228:52219"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n80} data-layer={"228:52217/228:52218/228:52219/227:666"} data-name={"Label"}>
        {textSlot(text,"228:52217/228:52218/228:52219/227:666","Label","Lable")}
      </span>
    </span>
    <span className={s.n174} data-layer={"228:52217/228:52218/228:52220"} data-name={"Label"}>
      {textSlot(text,"228:52217/228:52218/228:52220","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52221": return (<Root {...rootAttributes} className={[s.n123,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52221"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=off"}>
  <span className={s.n124} data-layer={"228:52221/228:52222"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:52221/228:52222/228:52223"} data-name={"radio/var"}>
      <span className={s.n175} data-layer={"228:52221/228:52222/228:52223/228:3241"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n127} data-layer={"228:52221/228:52222/228:52224"} data-name={"Label"}>
      {textSlot(text,"228:52221/228:52222/228:52224","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52225": return (<Root {...rootAttributes} className={[s.n123,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52225"} data-name={"Selected=on, Hover=off, discription=off, View=radio, Size=S, Part=off, Disable=on"}>
  <span className={s.n124} data-layer={"228:52225/228:52226"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:52225/228:52226/228:52227"} data-name={"radio/var"}>
      <span className={s.n176} data-layer={"228:52225/228:52226/228:52227/228:3243"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n129} data-layer={"228:52225/228:52226/228:52228"} data-name={"Label"}>
      {textSlot(text,"228:52225/228:52226/228:52228","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52229": return (<Root {...rootAttributes} className={[s.n177,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52229"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n178} data-layer={"228:52229/228:52230"} data-name={"box"}>
    <span className={s.n179} data-layer={"228:52229/228:52230/228:52231"} data-name={"Label"}>
      {textSlot(text,"228:52229/228:52230/228:52231","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52232": return (<Root {...rootAttributes} className={[s.n177,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52232"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=L, Part=off, Disable=on"}>
  <span className={s.n178} data-layer={"228:52232/228:52233"} data-name={"box"}>
    <span className={s.n180} data-layer={"228:52232/228:52233/228:52234"} data-name={"Label"}>
      {textSlot(text,"228:52232/228:52233/228:52234","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52235": return (<Root {...rootAttributes} className={[s.n181,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52235"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n182} data-layer={"228:52235/228:52236"} data-name={"box"}>
    <span className={s.n183} data-layer={"228:52235/228:52236/228:52237"} data-name={"Label"}>
      {textSlot(text,"228:52235/228:52236/228:52237","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52238": return (<Root {...rootAttributes} className={[s.n181,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52238"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=M, Part=off, Disable=on"}>
  <span className={s.n182} data-layer={"228:52238/228:52239"} data-name={"box"}>
    <span className={s.n184} data-layer={"228:52238/228:52239/228:52240"} data-name={"Label"}>
      {textSlot(text,"228:52238/228:52239/228:52240","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52241": return (<Root {...rootAttributes} className={[s.n185,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52241"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=off"}>
  <span className={s.n186} data-layer={"228:52241/228:52242"} data-name={"box"}>
    <span className={s.n187} data-layer={"228:52241/228:52242/228:52243"} data-name={"Label"}>
      {textSlot(text,"228:52241/228:52242/228:52243","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52244": return (<Root {...rootAttributes} className={[s.n185,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52244"} data-name={"Selected=on, Hover=off, discription=off, View=simpl, Size=S, Part=off, Disable=on"}>
  <span className={s.n186} data-layer={"228:52244/228:52245"} data-name={"box"}>
    <span className={s.n188} data-layer={"228:52244/228:52245/228:52246"} data-name={"Label"}>
      {textSlot(text,"228:52244/228:52245/228:52246","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52247": return (<Root {...rootAttributes} className={[s.n189,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52247"} data-name={"Selected=on, Hover=off, discription=on, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n190} data-layer={"228:52247/228:52248"} data-name={"box"}>
    <span className={s.n191} data-layer={"228:52247/228:52248/228:52249"} data-name={"Label"}>
      {textSlot(text,"228:52247/228:52248/228:52249","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52250": return (<Root {...rootAttributes} className={[s.n192,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52250"} data-name={"Selected=on, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n193} data-layer={"228:52250/228:52251"} data-name={"box"}>
    <span className={s.n194} data-layer={"228:52250/228:52251/228:52252"} data-name={"Label"}>
      {textSlot(text,"228:52250/228:52251/228:52252","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n143}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52253": return (<Root {...rootAttributes} className={[s.n192,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52253"} data-name={"Selected=on, Hover=off, discription=on, View=simpl, Size=M, Part=off, Disable=on"}>
  <span className={s.n193} data-layer={"228:52253/228:52254"} data-name={"box"}>
    <span className={s.n195} data-layer={"228:52253/228:52254/228:52255"} data-name={"Label"}>
      {textSlot(text,"228:52253/228:52254/228:52255","Label",<><span className={s.n146}>{"Value Value\n"}</span><span className={s.n146}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52256": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52256"} data-name={"Selected=on, Hover=on, discription=off, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"228:52256/228:52257"} data-name={"box"}>
    <span className={s.n196} data-layer={"228:52256/228:52257/228:52258"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52256/228:52257/228:52258/227:682"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n20} data-layer={"228:52256/228:52257/228:52259"} data-name={"Label"}>
      {textSlot(text,"228:52256/228:52257/228:52259","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52260": return (<Root {...rootAttributes} className={[s.n197,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52260"} data-name={"Selected=on, Hover=on, discription=off, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n117} data-layer={"228:52260/228:52261"} data-name={"box"}>
    <span className={s.n198} data-layer={"228:52260/228:52261/228:52262"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52260/228:52261/228:52262/227:684"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n120} data-layer={"228:52260/228:52261/228:52263"} data-name={"Label"}>
      {textSlot(text,"228:52260/228:52261/228:52263","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52264": return (<Root {...rootAttributes} className={[s.n199,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52264"} data-name={"Selected=on, Hover=on, discription=off, View=chbox, Size=S, Part=off, Disable=off"}>
  <span className={s.n124} data-layer={"228:52264/228:52265"} data-name={"box"}>
    <span className={s.n200} data-layer={"228:52264/228:52265/228:52266"} data-name={"Chekbox/var"}>
      <span className={s.n126} data-layer={"228:52264/228:52265/228:52266/227:696"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 5.3527 3.19248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15559 3.19248 L1.77955 3.57068 L2.15639 3.94538 L2.53244 3.56988 L2.15559 3.19248 Z M-0.00004 1.04914 L-0.37609 1.42734 L1.77955 3.57068 L2.15559 3.19248 L2.53164 2.81428 L0.376 0.67094 L-0.00004 1.04914 Z M2.15559 3.19248 L2.53244 3.56988 L5.72955 0.3774 L5.3527 0 L4.97585 -0.3774 L1.77874 2.81508 L2.15559 3.19248 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n127} data-layer={"228:52264/228:52265/228:52267"} data-name={"Label"}>
      {textSlot(text,"228:52264/228:52265/228:52267","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52268": return (<Root {...rootAttributes} className={[s.n201,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52268"} data-name={"Selected=on, Hover=on, discription=on, View=chbox, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52268/228:52269"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52268/228:52269/228:52270"} data-name={"chbox"}>
      <span className={s.n202} data-layer={"228:52268/228:52269/228:52270/228:52271"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52268/228:52269/228:52270/228:52271/227:682"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52268/228:52269/228:52272"} data-name={"Label"}>
      {textSlot(text,"228:52268/228:52269/228:52272","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52273": return (<Root {...rootAttributes} className={[s.n201,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52273"} data-name={"Selected=on, Hover=on, discription=on, View=radio, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52273/228:52274"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52273/228:52274/228:52275"} data-name={"chbox"}>
      <span className={s.n52} data-layer={"228:52273/228:52274/228:52275/228:52276"} data-name={"radio/var"}>
        <span className={s.n19} data-layer={"228:52273/228:52274/228:52275/228:52276/227:1366"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52273/228:52274/228:52277"} data-name={"Label"}>
      {textSlot(text,"228:52273/228:52274/228:52277","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52278": return (<Root {...rootAttributes} className={[s.n203,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52278"} data-name={"Selected=on, Hover=on, discription=on, View=chbox, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52278/228:52279"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52278/228:52279/228:52280"} data-name={"chbox"}>
      <span className={s.n204} data-layer={"228:52278/228:52279/228:52280/228:52281"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52278/228:52279/228:52280/228:52281/227:684"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52278/228:52279/228:52282"} data-name={"Label"}>
      {textSlot(text,"228:52278/228:52279/228:52282","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52283": return (<Root {...rootAttributes} className={[s.n203,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52283"} data-name={"Selected=on, Hover=on, discription=on, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52283/228:52284"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52283/228:52284/228:52285"} data-name={"chbox"}>
      <span className={s.n64} data-layer={"228:52283/228:52284/228:52285/228:52286"} data-name={"radio/var"}>
        <span className={s.n205} data-layer={"228:52283/228:52284/228:52285/228:52286/228:3229"} data-name={"Ellipse 48"}></span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52283/228:52284/228:52287"} data-name={"Label"}>
      {textSlot(text,"228:52283/228:52284/228:52287","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52288": return (<Root {...rootAttributes} className={[s.n96,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52288"} data-name={"Selected=on, Hover=on, discription=off, View=chevron, Size=L, Part=on, Disable=off"}>
  <span className={s.n18} data-layer={"228:52288/228:52289"} data-name={"box"}>
    <span className={s.n27} data-layer={"228:52288/228:52289/228:52290"} data-name={"Chekbox/var"}>
      <span className={s.n206} data-layer={"228:52288/228:52289/228:52290/237:48863"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n20} data-layer={"228:52288/228:52289/228:52291"} data-name={"Label"}>
      {textSlot(text,"228:52288/228:52289/228:52291","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52288/228:52292"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52288/228:52292/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52293": return (<Root {...rootAttributes} className={[s.n96,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52293"} data-name={"Selected=on, Hover=on, discription=off, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n18} data-layer={"228:52293/228:52294"} data-name={"box"}>
    <span className={s.n196} data-layer={"228:52293/228:52294/228:52295"} data-name={"Chekbox/var"}>
      <span className={s.n113} data-layer={"228:52293/228:52294/228:52295/227:682"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n20} data-layer={"228:52293/228:52294/228:52296"} data-name={"Label"}>
      {textSlot(text,"228:52293/228:52294/228:52296","Label","Value Value")}
    </span>
  </span>
  <span className={s.n31} data-layer={"228:52293/228:52297"} data-name={"icon/set/base"}>
    <span className={s.n32} data-layer={"228:52293/228:52297/227:487"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "228:52298": return (<Root {...rootAttributes} className={[s.n207,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52298"} data-name={"Selected=on, Hover=on, discription=off, View=chevron, Size=M, Part=on, Disable=off"}>
  <span className={s.n153} data-layer={"228:52298/228:52299"} data-name={"box"}>
    <span className={s.n35} data-layer={"228:52298/228:52299/228:52300"} data-name={"Chekbox/var"}>
      <span className={s.n208} data-layer={"228:52298/228:52299/228:52300/237:48872"} data-name={"Rectangle 1"}></span>
    </span>
    <span className={s.n120} data-layer={"228:52298/228:52299/228:52301"} data-name={"Label"}>
      {textSlot(text,"228:52298/228:52299/228:52301","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52298/232:55686"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52298/234:51882"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52298/231:57682"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52303": return (<Root {...rootAttributes} className={[s.n207,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52303"} data-name={"Selected=on, Hover=on, discription=off, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n153} data-layer={"228:52303/228:52304"} data-name={"box"}>
    <span className={s.n198} data-layer={"228:52303/228:52304/228:52305"} data-name={"Chekbox/var"}>
      <span className={s.n119} data-layer={"228:52303/228:52304/228:52305/227:684"} data-name={"Vector 2989"}>
        <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n120} data-layer={"228:52303/228:52304/228:52306"} data-name={"Label"}>
      {textSlot(text,"228:52303/228:52304/228:52306","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52303/232:55692"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52303/234:51887"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52303/231:57688"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52308": return (<Root {...rootAttributes} className={[s.n207,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52308"} data-name={"Selected=off, Hover=on, discription=off, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n158} data-layer={"228:52308/228:52309"} data-name={"box"}>
    <span className={s.n98} data-layer={"228:52308/228:52309/228:52310"} data-name={"Chekbox/var"}></span>
    <span className={s.n36} data-layer={"228:52308/228:52309/228:52311"} data-name={"Label"}>
      {textSlot(text,"228:52308/228:52309/228:52311","Label","Value Value")}
    </span>
  </span>
  <span className={s.n155} data-layer={"228:52308/232:55693"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52308/234:51888"} data-name={"icon/set/base"}></span>
  <span className={s.n155} data-layer={"228:52308/231:57689"} data-name={"icon/set/base"}></span>
</Root>);
case "228:52313": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52313"} data-name={"Selected=on, Hover=on, discription=on, View=chevron, Size=L, Part=on, Disable=off"}>
  <span className={s.n131} data-layer={"228:52313/228:52314"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52313/228:52314/228:52315"} data-name={"chbox"}>
      <span className={s.n48} data-layer={"228:52313/228:52314/228:52315/228:52316"} data-name={"Chekbox/var"}>
        <span className={s.n206} data-layer={"228:52313/228:52314/228:52315/228:52316/237:48863"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52313/228:52314/228:52317"} data-name={"Label"}>
      {textSlot(text,"228:52313/228:52314/228:52317","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52313/228:52318"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52313/228:52318/228:52319"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52313/228:52318/228:52319/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52320": return (<Root {...rootAttributes} className={[s.n103,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52320"} data-name={"Selected=on, Hover=on, discription=on, View=chevron, Size=L, Part=off, Disable=off"}>
  <span className={s.n131} data-layer={"228:52320/228:52321"} data-name={"box"}>
    <span className={s.n47} data-layer={"228:52320/228:52321/228:52322"} data-name={"chbox"}>
      <span className={s.n202} data-layer={"228:52320/228:52321/228:52322/228:52323"} data-name={"Chekbox/var"}>
        <span className={s.n113} data-layer={"228:52320/228:52321/228:52322/228:52323/227:682"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 7.13693 4.25664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.87412 4.25664 L2.37273 4.76091 L2.87519 5.26051 L3.37659 4.75984 L2.87412 4.25664 Z M-0.00006 1.39885 L-0.50145 1.90311 L2.37273 4.76091 L2.87412 4.25664 L3.37551 3.75237 L0.50133 0.89458 L-0.00006 1.39885 Z M2.87412 4.25664 L3.37659 4.75984 L7.6394 0.5032 L7.13693 0 L6.63447 -0.5032 L2.37165 3.75345 L2.87412 4.25664 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n133} data-layer={"228:52320/228:52321/228:52324"} data-name={"Label"}>
      {textSlot(text,"228:52320/228:52321/228:52324","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n55} data-layer={"228:52320/228:52325"} data-name={"sevron"}>
    <span className={s.n52} data-layer={"228:52320/228:52325/228:52326"} data-name={"icon/set/base"}>
      <span className={s.n32} data-layer={"228:52320/228:52325/228:52326/227:487"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.06667 2.78974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.5241 -0.85166 C0.05374 -1.14111 -0.56221 -0.99446 -0.85166 -0.5241 C-1.14111 -0.05374 -0.99446 0.56221 -0.5241 0.85166 L0 0 L0.5241 -0.85166 Z M4.53333 2.78974 L4.00924 3.6414 C4.33064 3.83919 4.73602 3.83919 5.05743 3.6414 L4.53333 2.78974 Z M9.59076 0.85166 C10.06112 0.56221 10.20778 -0.05374 9.91833 -0.5241 C9.62887 -0.99446 9.01293 -1.14111 8.54257 -0.85166 L9.06667 0 L9.59076 0.85166 Z M0 0 L-0.5241 0.85166 L4.00924 3.6414 L4.53333 2.78974 L5.05743 1.93809 L0.5241 -0.85166 L0 0 Z M4.53333 2.78974 L5.05743 3.6414 L9.59076 0.85166 L9.06667 0 L8.54257 -0.85166 L4.00924 1.93809 L4.53333 2.78974 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "228:52327": return (<Root {...rootAttributes} className={[s.n209,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52327"} data-name={"Selected=on, Hover=on, discription=on, View=chevron, Size=M, Part=on, Disable=off"}>
  <span className={s.n140} data-layer={"228:52327/228:52328"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52327/228:52328/228:52329"} data-name={"chbox"}>
      <span className={s.n60} data-layer={"228:52327/228:52328/228:52329/228:52330"} data-name={"Chekbox/var"}>
        <span className={s.n208} data-layer={"228:52327/228:52328/228:52329/228:52330/237:48872"} data-name={"Rectangle 1"}></span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52327/228:52328/228:52331"} data-name={"Label"}>
      {textSlot(text,"228:52327/228:52328/228:52331","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52327/228:52332"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52327/228:52332/232:55677"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52327/228:52332/234:51875"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52327/228:52332/231:57673"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52334": return (<Root {...rootAttributes} className={[s.n209,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52334"} data-name={"Selected=on, Hover=on, discription=on, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n140} data-layer={"228:52334/228:52335"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52334/228:52335/228:52336"} data-name={"chbox"}>
      <span className={s.n204} data-layer={"228:52334/228:52335/228:52336/228:52337"} data-name={"Chekbox/var"}>
        <span className={s.n119} data-layer={"228:52334/228:52335/228:52336/228:52337/227:684"} data-name={"Vector 2989"}>
          <svg width="100%" height="100%" viewBox="0 0 6.24482 3.72456" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.51486 3.72456 L2.07614 4.16579 L2.51579 4.60294 L2.95452 4.16486 L2.51486 3.72456 Z M-0.00005 1.22399 L-0.43877 1.66522 L2.07614 4.16579 L2.51486 3.72456 L2.95357 3.28333 L0.43867 0.78276 L-0.00005 1.22399 Z M2.51486 3.72456 L2.95452 4.16486 L6.68448 0.4403 L6.24482 0 L5.80516 -0.4403 L2.0752 3.28426 L2.51486 3.72456 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n142} data-layer={"228:52334/228:52335/228:52338"} data-name={"Label"}>
      {textSlot(text,"228:52334/228:52335/228:52338","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52334/228:52339"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52334/228:52339/232:55690"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52334/228:52339/234:51885"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52334/228:52339/231:57686"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52341": return (<Root {...rootAttributes} className={[s.n209,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52341"} data-name={"Selected=off, Hover=on, discription=on, View=chevron, Size=M, Part=off, Disable=off"}>
  <span className={s.n58} data-layer={"228:52341/228:52342"} data-name={"box"}>
    <span className={s.n59} data-layer={"228:52341/228:52342/228:52343"} data-name={"chbox"}>
      <span className={s.n105} data-layer={"228:52341/228:52342/228:52343/228:52344"} data-name={"Chekbox/var"}></span>
    </span>
    <span className={s.n163} data-layer={"228:52341/228:52342/228:52345"} data-name={"Label"}>
      {textSlot(text,"228:52341/228:52342/228:52345","Label",<><span className={s.n164}>{"Val"}</span><span className={s.n164}>{"ue"}</span><span className={s.n164}>{" Val"}</span><span className={s.n164}>{"ue\n"}</span><span className={s.n165}>{"Value Value"}</span></>)}
    </span>
  </span>
  <span className={s.n161} data-layer={"228:52341/228:52346"} data-name={"sevron"}>
    <span className={s.n64} data-layer={"228:52341/228:52346/232:55691"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52341/228:52346/234:51886"} data-name={"icon/set/base"}></span>
    <span className={s.n64} data-layer={"228:52341/228:52346/231:57687"} data-name={"icon/set/base"}></span>
  </span>
</Root>);
case "228:52348": return (<Root {...rootAttributes} className={[s.n210,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52348"} data-name={"Selected=on, Hover=on, discription=off, View=lable, Size=L, Part=off, Disable=off"}>
  <span className={s.n168} data-layer={"228:52348/228:52349"} data-name={"box"}>
    <span className={s.n69} data-layer={"228:52348/228:52349/228:52350"} data-name={"Lable/var/L/valeu"}>
      <span className={s.n70} data-layer={"228:52348/228:52349/228:52350/235:52290"} data-name={"Label"}>
        {textSlot(text,"228:52348/228:52349/228:52350/235:52290","Label","Lable")}
      </span>
    </span>
    <span className={s.n169} data-layer={"228:52348/228:52349/228:52351"} data-name={"Label"}>
      {textSlot(text,"228:52348/228:52349/228:52351","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52352": return (<Root {...rootAttributes} className={[s.n197,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52352"} data-name={"Selected=on, Hover=on, discription=off, View=radio, Size=M, Part=off, Disable=off"}>
  <span className={s.n117} data-layer={"228:52352/228:52353"} data-name={"box"}>
    <span className={s.n74} data-layer={"228:52352/228:52353/228:52354"} data-name={"radio/var"}>
      <span className={s.n205} data-layer={"228:52352/228:52353/228:52354/228:3229"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n120} data-layer={"228:52352/228:52353/228:52355"} data-name={"Label"}>
      {textSlot(text,"228:52352/228:52353/228:52355","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52356": return (<Root {...rootAttributes} className={[s.n211,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52356"} data-name={"Selected=on, Hover=on, discription=off, View=lable, Size=M, Part=off, Disable=off"}>
  <span className={s.n172} data-layer={"228:52356/228:52357"} data-name={"box"}>
    <span className={s.n77} data-layer={"228:52356/228:52357/228:52358"} data-name={"Lable/var/S/valeu"}>
      <span className={s.n78} data-layer={"228:52356/228:52357/228:52358/227:654"} data-name={"Label"}>
        {textSlot(text,"228:52356/228:52357/228:52358/227:654","Label","Lable")}
      </span>
    </span>
    <span className={s.n173} data-layer={"228:52356/228:52357/228:52359"} data-name={"Label"}>
      {textSlot(text,"228:52356/228:52357/228:52359","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52360": return (<Root {...rootAttributes} className={[s.n199,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52360"} data-name={"Selected=on, Hover=on, discription=off, View=radio, Size=S, Part=off, Disable=off"}>
  <span className={s.n124} data-layer={"228:52360/228:52361"} data-name={"box"}>
    <span className={s.n82} data-layer={"228:52360/228:52361/228:52362"} data-name={"radio/var"}>
      <span className={s.n212} data-layer={"228:52360/228:52361/228:52362/228:3249"} data-name={"Ellipse 48"}></span>
    </span>
    <span className={s.n127} data-layer={"228:52360/228:52361/228:52363"} data-name={"Label"}>
      {textSlot(text,"228:52360/228:52361/228:52363","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52364": return (<Root {...rootAttributes} className={[s.n213,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52364"} data-name={"Selected=on, Hover=on, discription=off, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n178} data-layer={"228:52364/228:52365"} data-name={"box"}>
    <span className={s.n179} data-layer={"228:52364/228:52365/228:52366"} data-name={"Label"}>
      {textSlot(text,"228:52364/228:52365/228:52366","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52367": return (<Root {...rootAttributes} className={[s.n214,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52367"} data-name={"Selected=on, Hover=on, discription=off, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n182} data-layer={"228:52367/228:52368"} data-name={"box"}>
    <span className={s.n183} data-layer={"228:52367/228:52368/228:52369"} data-name={"Label"}>
      {textSlot(text,"228:52367/228:52368/228:52369","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52370": return (<Root {...rootAttributes} className={[s.n215,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52370"} data-name={"Selected=on, Hover=on, discription=off, View=simpl, Size=S, Part=off, Disable=off"}>
  <span className={s.n186} data-layer={"228:52370/228:52371"} data-name={"box"}>
    <span className={s.n187} data-layer={"228:52370/228:52371/228:52372"} data-name={"Label"}>
      {textSlot(text,"228:52370/228:52371/228:52372","Label","Value Value")}
    </span>
  </span>
</Root>);
case "228:52373": return (<Root {...rootAttributes} className={[s.n216,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52373"} data-name={"Selected=on, Hover=on, discription=on, View=simpl, Size=L, Part=off, Disable=off"}>
  <span className={s.n190} data-layer={"228:52373/228:52374"} data-name={"box"}>
    <span className={s.n191} data-layer={"228:52373/228:52374/228:52375"} data-name={"Label"}>
      {textSlot(text,"228:52373/228:52374/228:52375","Label",<><span className={s.n134}>{"Value Value\n"}</span><span className={s.n134}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
case "228:52376": return (<Root {...rootAttributes} className={[s.n217,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:52376"} data-name={"Selected=on, Hover=on, discription=on, View=simpl, Size=M, Part=off, Disable=off"}>
  <span className={s.n193} data-layer={"228:52376/228:52377"} data-name={"box"}>
    <span className={s.n194} data-layer={"228:52376/228:52377/228:52378"} data-name={"Label"}>
      {textSlot(text,"228:52376/228:52377/228:52378","Label",<><span className={s.n143}>{"Value Value\n"}</span><span className={s.n143}>{"Value Value"}</span></>)}
    </span>
  </span>
</Root>);
  default: return null;
  }
}
