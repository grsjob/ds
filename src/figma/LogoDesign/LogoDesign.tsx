// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LogoDesign.module.css';
export const variants = [
  {
    "id": "227:1437",
    "name": "Size=30, Tema=on, System=ECS",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "ECS"
    }
  },
  {
    "id": "227:1446",
    "name": "Size=24, Tema=on, System=AI",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "AI"
    }
  },
  {
    "id": "227:1458",
    "name": "Size=30, Tema=on, System=AI",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "AI"
    }
  },
  {
    "id": "236:49110",
    "name": "Size=90, Tema=on, System=IURR",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "IURR"
    }
  },
  {
    "id": "236:49129",
    "name": "Size=60, Tema=on, System=IURR",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "IURR"
    }
  },
  {
    "id": "236:49148",
    "name": "Size=45, Tema=on, System=IURR",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "IURR"
    }
  },
  {
    "id": "236:49167",
    "name": "Size=30, Tema=on, System=IURR",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "IURR"
    }
  },
  {
    "id": "236:49186",
    "name": "Size=24, Tema=on, System=IURR",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "IURR"
    }
  },
  {
    "id": "236:49205",
    "name": "Size=60, Tema=off, System=IURR",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "IURR"
    }
  },
  {
    "id": "236:49220",
    "name": "Size=45, Tema=off, System=IURR",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "IURR"
    }
  },
  {
    "id": "236:49235",
    "name": "Size=30, Tema=off, System=IURR",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "IURR"
    }
  },
  {
    "id": "236:49250",
    "name": "Size=24, Tema=off, System=IURR",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "IURR"
    }
  },
  {
    "id": "236:49265",
    "name": "Size=45, Tema=on, System=StP",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "StP"
    }
  },
  {
    "id": "236:49273",
    "name": "Size=30, Tema=on, System=StP",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "StP"
    }
  },
  {
    "id": "236:49281",
    "name": "Size=90, Tema=on, System=StP",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "StP"
    }
  },
  {
    "id": "236:49289",
    "name": "Size=60, Tema=on, System=StP",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "StP"
    }
  },
  {
    "id": "236:49297",
    "name": "Size=60, Tema=off, System=StP",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "StP"
    }
  },
  {
    "id": "236:49304",
    "name": "Size=45, Tema=off, System=StP",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "StP"
    }
  },
  {
    "id": "236:49311",
    "name": "Size=30, Tema=off, System=StP",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "StP"
    }
  },
  {
    "id": "236:49318",
    "name": "Size=24, Tema=off, System=StP",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "StP"
    }
  },
  {
    "id": "236:49325",
    "name": "Size=90, Tema=on, System=VS",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "VS"
    }
  },
  {
    "id": "236:49347",
    "name": "Size=60, Tema=on, System=VS",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "VS"
    }
  },
  {
    "id": "236:49369",
    "name": "Size=45, Tema=on, System=VS",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "VS"
    }
  },
  {
    "id": "236:49391",
    "name": "Size=30, Tema=on, System=VS",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "VS"
    }
  },
  {
    "id": "236:49413",
    "name": "Size=60, Tema=off, System=VS",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "VS"
    }
  },
  {
    "id": "236:49419",
    "name": "Size=45, Tema=off, System=VS",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "VS"
    }
  },
  {
    "id": "236:49425",
    "name": "Size=30, Tema=off, System=VS",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "VS"
    }
  },
  {
    "id": "236:49431",
    "name": "Size=24, Tema=off, System=VS",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "VS"
    }
  },
  {
    "id": "236:49437",
    "name": "Size=60, Tema=off, System=UO",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "UO"
    }
  },
  {
    "id": "236:49443",
    "name": "Size=45, Tema=off, System=UO",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "UO"
    }
  },
  {
    "id": "236:49449",
    "name": "Size=30, Tema=off, System=UO",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "UO"
    }
  },
  {
    "id": "236:49455",
    "name": "Size=24, Tema=off, System=UO",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "UO"
    }
  },
  {
    "id": "236:49461",
    "name": "Size=90, Tema=on, System=UO",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "UO"
    }
  },
  {
    "id": "236:49473",
    "name": "Size=60, Tema=on, System=UO",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "UO"
    }
  },
  {
    "id": "236:49481",
    "name": "Size=45, Tema=on, System=UO",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "UO"
    }
  },
  {
    "id": "236:49489",
    "name": "Size=30, Tema=on, System=UO",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "UO"
    }
  },
  {
    "id": "236:49497",
    "name": "Size=90, Tema=on, System=RZ",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "RZ"
    }
  },
  {
    "id": "236:49511",
    "name": "Size=60, Tema=on, System=RZ",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "RZ"
    }
  },
  {
    "id": "236:49526",
    "name": "Size=45, Tema=on, System=RZ",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "RZ"
    }
  },
  {
    "id": "236:49541",
    "name": "Size=30, Tema=on, System=RZ",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "RZ"
    }
  },
  {
    "id": "236:49556",
    "name": "Size=60, Tema=off, System=RZ",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "RZ"
    }
  },
  {
    "id": "236:49562",
    "name": "Size=45, Tema=off, System=RZ",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "RZ"
    }
  },
  {
    "id": "236:49568",
    "name": "Size=30, Tema=off, System=RZ",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "RZ"
    }
  },
  {
    "id": "236:49574",
    "name": "Size=24, Tema=off, System=RZ",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "RZ"
    }
  },
  {
    "id": "236:49580",
    "name": "Size=90, Tema=on, System=O",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "O"
    }
  },
  {
    "id": "236:49608",
    "name": "Size=60, Tema=on, System=O",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "O"
    }
  },
  {
    "id": "236:49636",
    "name": "Size=45, Tema=on, System=O",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "O"
    }
  },
  {
    "id": "236:49664",
    "name": "Size=30, Tema=on, System=O",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "O"
    }
  },
  {
    "id": "236:49692",
    "name": "Size=60, Tema=off, System=O",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "O"
    }
  },
  {
    "id": "236:49703",
    "name": "Size=45, Tema=off, System=O",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "O"
    }
  },
  {
    "id": "236:49714",
    "name": "Size=30, Tema=off, System=O",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "O"
    }
  },
  {
    "id": "236:49725",
    "name": "Size=24, Tema=off, System=O",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "O"
    }
  },
  {
    "id": "236:49736",
    "name": "Size=90, Tema=on, System=KOS",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "KOS"
    }
  },
  {
    "id": "236:49746",
    "name": "Size=60, Tema=on, System=KOS",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "KOS"
    }
  },
  {
    "id": "236:49756",
    "name": "Size=45, Tema=on, System=KOS",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "KOS"
    }
  },
  {
    "id": "236:49766",
    "name": "Size=30, Tema=on, System=KOS",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "KOS"
    }
  },
  {
    "id": "236:49776",
    "name": "Size=60, Tema=off, System=KOS",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "KOS"
    }
  },
  {
    "id": "236:49782",
    "name": "Size=45, Tema=off, System=KOS",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "KOS"
    }
  },
  {
    "id": "236:49788",
    "name": "Size=30, Tema=off, System=KOS",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "KOS"
    }
  },
  {
    "id": "236:49794",
    "name": "Size=24, Tema=off, System=KOS",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "KOS"
    }
  },
  {
    "id": "236:49800",
    "name": "Size=90, Tema=on, System=IUFS",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "IUFS"
    }
  },
  {
    "id": "236:49856",
    "name": "Size=60, Tema=on, System=IUFS",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "IUFS"
    }
  },
  {
    "id": "236:49910",
    "name": "Size=45, Tema=on, System=IUFS",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "IUFS"
    }
  },
  {
    "id": "236:49964",
    "name": "Size=30, Tema=on, System=IUFS",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "IUFS"
    }
  },
  {
    "id": "236:50018",
    "name": "Size=60, Tema=off, System=IUFS",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "IUFS"
    }
  },
  {
    "id": "236:50068",
    "name": "Size=45, Tema=off, System=IUFS",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "IUFS"
    }
  },
  {
    "id": "236:50118",
    "name": "Size=24, Tema=off, System=IUFS",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "IUFS"
    }
  },
  {
    "id": "236:50169",
    "name": "Size=90, Tema=on, System=Geo",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "Geo"
    }
  },
  {
    "id": "236:50197",
    "name": "Size=60, Tema=on, System=Geo",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "Geo"
    }
  },
  {
    "id": "236:50242",
    "name": "Size=45, Tema=on, System=Geo",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "Geo"
    }
  },
  {
    "id": "236:50287",
    "name": "Size=30, Tema=on, System=Geo",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "Geo"
    }
  },
  {
    "id": "236:50332",
    "name": "Size=24, Tema=on, System=Geo",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "Geo"
    }
  },
  {
    "id": "236:50377",
    "name": "Size=60, Tema=off, System=Geo",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "Geo"
    }
  },
  {
    "id": "236:50385",
    "name": "Size=45, Tema=off, System=Geo",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "Geo"
    }
  },
  {
    "id": "236:50393",
    "name": "Size=30, Tema=off, System=Geo",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "Geo"
    }
  },
  {
    "id": "236:50401",
    "name": "Size=24, Tema=off, System=Geo",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "Geo"
    }
  },
  {
    "id": "236:50409",
    "name": "Size=90, Tema=on, System=ECS",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "ECS"
    }
  },
  {
    "id": "236:50418",
    "name": "Size=60, Tema=on, System=ECS",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "ECS"
    }
  },
  {
    "id": "236:50427",
    "name": "Size=45, Tema=on, System=ECS",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "ECS"
    }
  },
  {
    "id": "236:50436",
    "name": "Size=24, Tema=on, System=ECS",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "ECS"
    }
  },
  {
    "id": "236:50445",
    "name": "Size=60, Tema=off, System=ECS",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "ECS"
    }
  },
  {
    "id": "236:50453",
    "name": "Size=45, Tema=off, System=ECS",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "ECS"
    }
  },
  {
    "id": "236:50461",
    "name": "Size=30, Tema=off, System=ECS",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "ECS"
    }
  },
  {
    "id": "236:50469",
    "name": "Size=24, Tema=off, System=ECS",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "ECS"
    }
  },
  {
    "id": "236:50477",
    "name": "Size=90, Tema=on, System=ECS2",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50484",
    "name": "Size=60, Tema=on, System=ECS2",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50491",
    "name": "Size=45, Tema=on, System=ECS2",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50498",
    "name": "Size=30, Tema=on, System=ECS2",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50505",
    "name": "Size=24, Tema=on, System=ECS2",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50512",
    "name": "Size=60, Tema=off, System=ECS2",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50518",
    "name": "Size=45, Tema=off, System=ECS2",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50524",
    "name": "Size=30, Tema=off, System=ECS2",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50530",
    "name": "Size=24, Tema=off, System=ECS2",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "ECS2"
    }
  },
  {
    "id": "236:50536",
    "name": "Size=90, Tema=on, System=AI",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "AI"
    }
  },
  {
    "id": "236:50548",
    "name": "Size=60, Tema=on, System=AI",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "AI"
    }
  },
  {
    "id": "236:50560",
    "name": "Size=45, Tema=on, System=AI",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "AI"
    }
  },
  {
    "id": "236:50572",
    "name": "Size=60, Tema=off, System=AI",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "AI"
    }
  },
  {
    "id": "236:50580",
    "name": "Size=45, Tema=off, System=AI",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "AI"
    }
  },
  {
    "id": "236:50588",
    "name": "Size=24, Tema=off, System=AI",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "AI"
    }
  },
  {
    "id": "236:50596",
    "name": "Size=30, Tema=off, System=AI",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "AI"
    }
  },
  {
    "id": "236:50604",
    "name": "Size=90, Tema=on, System=ECS3",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50629",
    "name": "Size=60, Tema=on, System=ECS3",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50654",
    "name": "Size=45, Tema=on, System=ECS3",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50679",
    "name": "Size=30, Tema=on, System=ECS3",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50704",
    "name": "Size=24, Tema=on, System=ECS3",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50729",
    "name": "Size=60, Tema=off, System=ECS3",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50742",
    "name": "Size=45, Tema=off, System=ECS3",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50755",
    "name": "Size=30, Tema=off, System=ECS3",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50768",
    "name": "Size=24, Tema=off, System=ECS3",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "ECS3"
    }
  },
  {
    "id": "236:50781",
    "name": "Size=90, Tema=on, System=BT",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "BT"
    }
  },
  {
    "id": "236:50792",
    "name": "Size=60, Tema=on, System=BT",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "BT"
    }
  },
  {
    "id": "236:50803",
    "name": "Size=45, Tema=on, System=BT",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "BT"
    }
  },
  {
    "id": "236:50814",
    "name": "Size=30, Tema=on, System=BT",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "BT"
    }
  },
  {
    "id": "236:50825",
    "name": "Size=24, Tema=on, System=BT",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "BT"
    }
  },
  {
    "id": "236:50836",
    "name": "Size=60, Tema=off, System=BT",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "BT"
    }
  },
  {
    "id": "236:50844",
    "name": "Size=45, Tema=off, System=BT",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "BT"
    }
  },
  {
    "id": "236:50852",
    "name": "Size=30, Tema=off, System=BT",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "BT"
    }
  },
  {
    "id": "236:50860",
    "name": "Size=24, Tema=off, System=BT",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "BT"
    }
  },
  {
    "id": "236:50868",
    "name": "Size=90, Tema=on, System=IUCH",
    "props": {
      "Size": "90",
      "Tema": "on",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50880",
    "name": "Size=60, Tema=on, System=IUCH",
    "props": {
      "Size": "60",
      "Tema": "on",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50892",
    "name": "Size=45, Tema=on, System=IUCH",
    "props": {
      "Size": "45",
      "Tema": "on",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50904",
    "name": "Size=30, Tema=on, System=IUCH",
    "props": {
      "Size": "30",
      "Tema": "on",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50916",
    "name": "Size=24, Tema=on, System=IUCH",
    "props": {
      "Size": "24",
      "Tema": "on",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50928",
    "name": "Size=60, Tema=off, System=IUCH",
    "props": {
      "Size": "60",
      "Tema": "off",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50936",
    "name": "Size=45, Tema=off, System=IUCH",
    "props": {
      "Size": "45",
      "Tema": "off",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50944",
    "name": "Size=30, Tema=off, System=IUCH",
    "props": {
      "Size": "30",
      "Tema": "off",
      "System": "IUCH"
    }
  },
  {
    "id": "236:50952",
    "name": "Size=24, Tema=off, System=IUCH",
    "props": {
      "Size": "24",
      "Tema": "off",
      "System": "IUCH"
    }
  }
] as const;
export type LogoDesignVariant = typeof variants[number]["id"];
export interface LogoDesignDimensions {
  "Size"?: "24" | "30" | "45" | "60" | "90";
  "Tema"?: "off" | "on";
  "System"?: "AI" | "BT" | "ECS" | "ECS2" | "ECS3" | "Geo" | "IUCH" | "IUFS" | "IURR" | "KOS" | "O" | "RZ" | "StP" | "UO" | "VS";
}
export interface LogoDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LogoDesignVariant;
  variantProps?: LogoDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LogoDesignVariant) => void;
}
const transitions = {};
export function LogoDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LogoDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1437": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1437"} data-name={"Size=30, Tema=on, System=ECS"}>
  <span className={s.n1} data-layer={"227:1437/227:1438"} data-name={"Group 6918"}>
    <span className={s.n2} data-layer={"227:1437/227:1438/227:1439"} data-name={"Rectangle 3464327"}></span>
    <span className={s.n3} data-layer={"227:1437/227:1438/227:1440"} data-name={"Group 6914"}>
      <span className={s.n4} data-layer={"227:1437/227:1438/227:1440/227:1441"} data-name={"Vector 3375"}>
        <svg width="100%" height="100%" viewBox="0 0 10.1384 17.04271" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g5_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.56092 -0.6491 0.68585 -1.50009 0.44617 1.71134)"}><stop offset={0} stopColor={"rgba(0,226,247,1)"}/><stop offset={1} stopColor={"rgba(1,100,128,1)"}/></linearGradient><linearGradient id={`${uid}-g5_strokeGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.95701 1.0484 -1.0484 2.70431 0.40794 -0.76103)"}><stop offset={0} stopColor={"rgba(1,148,173,1)"}/><stop offset={1} stopColor={"rgba(17,225,224,1)"}/></linearGradient></defs><path d={"M9.18381 4.47139 L5.88727 1.22895 C5.21671 0.56939 4.12431 0.629 3.52949 1.35759 L0.72007 4.79883 C0.25437 5.36927 0 6.08306 0 6.81945 L0 14.78817 C0 15.88944 1.08808 16.66045 2.12709 16.29542 L9.07038 13.85608 C9.71022 13.63129 10.13841 13.02701 10.13841 12.34883 L10.13841 6.74929 C10.13841 5.89273 9.79448 5.07204 9.18381 4.47139 Z"} fill={`url(#${uid}-g5_fillGeometry0)`} fillRule="nonzero"/><path d={"M5.88727 1.22895 L5.6072 1.51369 L5.60721 1.51369 L5.88727 1.22895 Z M9.18381 4.47139 L8.90374 4.75613 L8.90374 4.75613 L9.18381 4.47139 Z M9.07038 13.85608 L9.20276 14.23289 L9.20276 14.23289 L9.07038 13.85608 Z M2.12709 16.29542 L1.99471 15.9186 L1.99471 15.9186 L2.12709 16.29542 Z M0.72007 4.79883 L0.41069 4.54625 L0.41069 4.54625 L0.72007 4.79883 Z M3.52949 1.35759 L3.83887 1.61017 L3.83887 1.61017 L3.52949 1.35759 Z M5.88727 1.22895 L5.60721 1.51369 L8.90374 4.75613 L9.18381 4.47139 L9.46387 4.18665 L6.16733 0.94421 L5.88727 1.22895 Z M10.13841 6.74929 L9.73902 6.74929 L9.73902 12.34883 L10.13841 12.34883 L10.5378 12.34883 L10.5378 6.74929 L10.13841 6.74929 Z M9.07038 13.85608 L8.938 13.47927 L1.99471 15.9186 L2.12709 16.29542 L2.25947 16.67223 L9.20276 14.23289 L9.07038 13.85608 Z M0 14.78817 L0.39939 14.78817 L0.39939 6.81945 L0 6.81945 L-0.39939 6.81945 L-0.39939 14.78817 L0 14.78817 Z M0.72007 4.79883 L1.02945 5.05141 L3.83887 1.61017 L3.52949 1.35759 L3.22011 1.10501 L0.41069 4.54625 L0.72007 4.79883 Z M0 6.81945 L0.39939 6.81945 C0.39939 6.17511 0.62196 5.55054 1.02945 5.05141 L0.72007 4.79883 L0.41069 4.54625 C-0.11323 5.18799 -0.39939 5.99101 -0.39939 6.81945 L0 6.81945 Z M2.12709 16.29542 L1.99471 15.9186 C1.21545 16.19238 0.39939 15.61412 0.39939 14.78817 L0 14.78817 L-0.39939 14.78817 C-0.39939 16.16476 0.9607 17.12852 2.25947 16.67223 L2.12709 16.29542 Z M10.13841 12.34883 L9.73902 12.34883 C9.73902 12.85747 9.41788 13.31067 8.938 13.47927 L9.07038 13.85608 L9.20276 14.23289 C10.00256 13.9519 10.5378 13.19656 10.5378 12.34883 L10.13841 12.34883 Z M9.18381 4.47139 L8.90374 4.75613 C9.43808 5.28169 9.73902 5.9998 9.73902 6.74929 L10.13841 6.74929 L10.5378 6.74929 C10.5378 5.78566 10.15088 4.86238 9.46387 4.18665 L9.18381 4.47139 Z M5.88727 1.22895 L6.16734 0.94421 C5.32914 0.11977 3.96363 0.19427 3.22011 1.10501 L3.52949 1.35759 L3.83887 1.61017 C4.28498 1.06372 5.10429 1.01902 5.6072 1.51369 L5.88727 1.22895 Z"} fill={`url(#${uid}-g5_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n5} data-layer={"227:1437/227:1438/227:1440/227:1442"} data-name={"Vector 3374"}>
        <svg width="100%" height="100%" viewBox="0 0 15.7763 20.79037" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g6_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.32187 -0.97149 0.97149 0.55898 -0.29792 0.66463)"}><stop offset={0} stopColor={"rgba(202,255,246,0.55)"}/><stop offset={1} stopColor={"rgba(0,166,138,0.55)"}/></linearGradient><linearGradient id={`${uid}-g6_strokeGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.22846 -1.09597 1.09597 -0.39677 -0.04609 1.61812)"}><stop offset={0} stopColor={"rgba(255,255,255,1)"}/><stop offset={1} stopColor={"rgba(5,155,129,1)"}/></linearGradient></defs><path d={"M5.71975 1.1818 L1.42475 4.59302 C0.67679 5.18708 0.23383 6.08461 0.21727 7.03963 L0.05209 16.56828 C0.02282 18.2567 1.31246 19.67636 2.99592 19.80891 L12.09171 20.5251 C13.92101 20.66913 15.49548 19.24631 15.53681 17.41182 L15.74047 8.37351 C15.76303 7.37214 15.31472 6.41815 14.52941 5.79644 L8.69755 1.17947 C7.82487 0.48858 6.59135 0.48955 5.71975 1.1818 Z"} fill={`url(#${uid}-g6_fillGeometry0)`} fillRule="nonzero"/><path d={"M1.42475 4.59302 L1.67314 4.90577 L1.67314 4.90577 L1.42475 4.59302 Z M5.71975 1.1818 L5.96815 1.49455 L5.96815 1.49455 L5.71975 1.1818 Z M8.69755 1.17947 L8.94546 0.86633 L8.94546 0.86633 L8.69755 1.17947 Z M14.52941 5.79644 L14.2815 6.10957 L14.2815 6.10957 L14.52941 5.79644 Z M15.74047 8.37351 L16.13976 8.38251 L16.13976 8.38251 L15.74047 8.37351 Z M15.53681 17.41182 L15.9361 17.42081 L15.9361 17.42081 L15.53681 17.41182 Z M12.09171 20.5251 L12.06036 20.92326 L12.06036 20.92326 L12.09171 20.5251 Z M2.99592 19.80891 L2.96457 20.20707 L2.96457 20.20707 L2.99592 19.80891 Z M0.05209 16.56828 L-0.34724 16.56136 L0.05209 16.56828 Z M0.21727 7.03963 L0.6166 7.04656 L0.21727 7.03963 Z M1.42475 4.59302 L1.67314 4.90577 L5.96815 1.49455 L5.71975 1.1818 L5.47136 0.86905 L1.17635 4.28027 L1.42475 4.59302 Z M8.69755 1.17947 L8.44965 1.4926 L14.2815 6.10957 L14.52941 5.79644 L14.77731 5.4833 L8.94546 0.86633 L8.69755 1.17947 Z M15.74047 8.37351 L15.34118 8.36451 L15.13753 17.40282 L15.53681 17.41182 L15.9361 17.42081 L16.13976 8.38251 L15.74047 8.37351 Z M12.09171 20.5251 L12.12306 20.12694 L3.02727 19.41076 L2.99592 19.80891 L2.96457 20.20707 L12.06036 20.92326 L12.09171 20.5251 Z M0.05209 16.56828 L0.45142 16.5752 L0.6166 7.04656 L0.21727 7.03963 L-0.18206 7.03271 L-0.34724 16.56136 L0.05209 16.56828 Z M2.99592 19.80891 L3.02727 19.41076 C1.55424 19.29477 0.42581 18.05257 0.45142 16.5752 L0.05209 16.56828 L-0.34724 16.56136 C-0.38017 18.46083 1.07068 20.05795 2.96457 20.20707 L2.99592 19.80891 Z M15.53681 17.41182 L15.13753 17.40282 C15.10136 19.00801 13.7237 20.25297 12.12306 20.12694 L12.09171 20.5251 L12.06036 20.92326 C14.11832 21.08529 15.8896 19.48462 15.9361 17.42081 L15.53681 17.41182 Z M14.52941 5.79644 L14.2815 6.10957 C14.96865 6.65357 15.36092 7.48832 15.34118 8.36451 L15.74047 8.37351 L16.13976 8.38251 C16.16514 7.25597 15.66078 6.18273 14.77731 5.4833 L14.52941 5.79644 Z M5.71975 1.1818 L5.96815 1.49455 C6.69448 0.91767 7.72241 0.91686 8.44965 1.4926 L8.69755 1.17947 L8.94546 0.86633 C7.92733 0.06029 6.48822 0.06142 5.47136 0.86905 L5.71975 1.1818 Z M1.42475 4.59302 L1.17635 4.28027 C0.3349 4.94859 -0.16343 5.95831 -0.18206 7.03271 L0.21727 7.03963 L0.6166 7.04656 C0.63109 6.21091 1.01868 5.42557 1.67314 4.90577 L1.42475 4.59302 Z"} fill={`url(#${uid}-g6_strokeGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n6} data-layer={"227:1437/227:1438/227:1440/227:1443"} data-name={"Group 6913"}>
        <span className={s.n7} data-layer={"227:1437/227:1438/227:1440/227:1443/227:1444"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 7.0878 7.0878" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.89044 3.5439 C7.89044 3.10061 7.53108 2.74125 7.0878 2.74125 C6.64451 2.74125 6.28515 3.10061 6.28515 3.5439 L7.0878 3.5439 L7.89044 3.5439 Z M4.92115 1.17307 C5.30418 1.3962 5.79558 1.26658 6.01871 0.88354 C6.24185 0.5005 6.11222 0.00911 5.72918 -0.21403 L5.32517 0.47952 L4.92115 1.17307 Z M7.0878 3.5439 L6.28515 3.5439 C6.28515 5.05785 5.05785 6.28515 3.5439 6.28515 L3.5439 7.0878 L3.5439 7.89044 C5.94443 7.89044 7.89044 5.94443 7.89044 3.5439 L7.0878 3.5439 Z M3.5439 7.0878 L3.5439 6.28515 C2.02995 6.28515 0.80265 5.05785 0.80265 3.5439 L0 3.5439 L-0.80265 3.5439 C-0.80265 5.94443 1.14337 7.89044 3.5439 7.89044 L3.5439 7.0878 Z M0 3.5439 L0.80265 3.5439 C0.80265 2.02995 2.02995 0.80265 3.5439 0.80265 L3.5439 0 L3.5439 -0.80265 C1.14337 -0.80265 -0.80265 1.14337 -0.80265 3.5439 L0 3.5439 Z M3.5439 0 L3.5439 0.80265 C4.0475 0.80265 4.51712 0.93771 4.92115 1.17307 L5.32517 0.47952 L5.72918 -0.21403 C5.08649 -0.58842 4.33899 -0.80265 3.5439 -0.80265 L3.5439 0 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n8} data-layer={"227:1437/227:1438/227:1440/227:1443/227:1445"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 4.23425 2.07147" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.4161 0.60216 C0.03702 0.37235 -0.45657 0.49336 -0.68637 0.87243 C-0.91617 1.25151 -0.79517 1.7451 -0.4161 1.9749 L0 1.28853 L0.4161 0.60216 Z M1.29151 2.07147 L0.87541 2.75784 L1.32429 3.02996 L1.75352 2.72781 L1.29151 2.07147 Z M4.69626 0.65634 C5.05875 0.40118 5.14575 -0.09953 4.89059 -0.46202 C4.63542 -0.8245 4.13472 -0.9115 3.77223 -0.65634 L4.23425 0 L4.69626 0.65634 Z M0 1.28853 L-0.4161 1.9749 L0.87541 2.75784 L1.29151 2.07147 L1.7076 1.3851 L0.4161 0.60216 L0 1.28853 Z M1.29151 2.07147 L1.75352 2.72781 L4.69626 0.65634 L4.23425 0 L3.77223 -0.65634 L0.82949 1.41513 L1.29151 2.07147 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "227:1446": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1446"} data-name={"Size=24, Tema=on, System=AI"}>
  <span className={s.n10} data-layer={"227:1446/227:1447"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n11} data-layer={"227:1446/227:1448"} data-name={"AI Agent"}>
    <span className={s.n12} data-layer={"227:1446/227:1448/227:1449"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 17.20053 17.20053" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g13_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(224,205,228,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient><linearGradient id={`${uid}-g13_strokeGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0 -1.19651 1.19651 -0 -0.43774 1.09826)"}><stop offset={0} stopColor={"rgba(0,242,255,0)"}/><stop offset={1} stopColor={"rgba(0,242,255,1)"}/></linearGradient></defs><path d={"M17.20053 7.14148 C17.20053 11.89128 13.35006 17.20053 8.60026 17.20053 C3.85047 17.20053 0 11.89128 0 7.14148 C0 2.39169 3.85047 0 8.60026 0 C13.35006 0 17.20053 2.39169 17.20053 7.14148 Z"} fill={`url(#${uid}-g13_fillGeometry0)`} fillRule="nonzero"/><path d={"M17.20053 7.14148 L16.90186 7.14148 C16.90186 9.44097 15.96735 11.89065 14.4495 13.76417 C12.93142 15.63798 10.85936 16.90186 8.60026 16.90186 L8.60026 17.20053 L8.60026 17.4992 C11.09096 17.4992 13.31904 16.10845 14.91364 14.14019 C16.50848 12.17163 17.4992 9.59179 17.4992 7.14148 L17.20053 7.14148 Z M8.60026 17.20053 L8.60026 16.90186 C6.34116 16.90186 4.26911 15.63798 2.75103 13.76417 C1.23318 11.89065 0.29867 9.44097 0.29867 7.14148 L0 7.14148 L-0.29867 7.14148 C-0.29867 9.59179 0.69205 12.17163 2.28689 14.14019 C3.88149 16.10845 6.10957 17.4992 8.60026 17.4992 L8.60026 17.20053 Z M0 7.14148 L0.29867 7.14148 C0.29867 4.85739 1.2197 3.16054 2.70053 2.02671 C4.1909 0.88558 6.27111 0.29867 8.60026 0.29867 L8.60026 0 L8.60026 -0.29867 C6.17962 -0.29867 3.9597 0.31027 2.33739 1.55243 C0.70554 2.80189 -0.29867 4.67578 -0.29867 7.14148 L0 7.14148 Z M8.60026 0 L8.60026 0.29867 C10.92942 0.29867 13.00963 0.88558 14.5 2.02671 C15.98083 3.16054 16.90186 4.85739 16.90186 7.14148 L17.20053 7.14148 L17.4992 7.14148 C17.4992 4.67578 16.49499 2.80189 14.86314 1.55243 C13.24083 0.31027 11.0209 -0.29867 8.60026 -0.29867 L8.60026 0 Z"} fill={`url(#${uid}-g13_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n13} data-layer={"227:1446/227:1448/227:1450"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 12.82323 5.97478" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.04323 1.64186 C0.0976 0.9934 0.60497 0.48541 1.25071 0.40485 C2.54682 0.24315 4.73757 0.00311 6.34282 0.00003 C7.99339 -0.00314 10.2501 0.24186 11.57201 0.40566 C12.21819 0.48573 12.7257 0.99382 12.78007 1.64267 C12.80465 1.93595 12.82323 2.24301 12.82323 2.50107 C12.82323 2.93704 12.78925 3.48492 12.7524 3.95082 C12.70517 4.54802 12.28127 5.04279 11.69844 5.1813 C10.40252 5.48927 8.06143 5.98083 6.34282 5.97472 C4.66896 5.96878 2.39352 5.48652 1.12241 5.18228 C0.54052 5.043 0.11814 4.54875 0.07095 3.95229 C0.03406 3.48607 0 2.93749 0 2.50107 C0 2.24277 0.01861 1.93539 0.04323 1.64186 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n14} data-layer={"227:1446/227:1448/227:1451"} data-name={"Frame 3587"}>
      <span className={s.n15} data-layer={"227:1446/227:1448/227:1451/227:1452"} data-name={"Ellipse 3185"}>
        <svg width="100%" height="100%" viewBox="0 0 1.48943 6.25521" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g16_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M1.48943 2.38927 C1.48943 4.52437 1.15601 6.25521 0.74472 6.25521 C0.33342 6.25521 0 4.52437 0 2.38927 C0 0.25418 0.33342 0 0.74472 0 C1.15601 0 1.48943 0.25418 1.48943 2.38927 Z"} fill={`url(#${uid}-g16_fillGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n16} data-layer={"227:1446/227:1448/227:1451/227:1453"} data-name={"Ellipse 3184"}>
        <svg width="100%" height="100%" viewBox="0 0 1.48943 6.25521" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g17_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M1.48943 2.38927 C1.48943 4.52437 1.15601 6.25521 0.74472 6.25521 C0.33342 6.25521 0 4.52437 0 2.38927 C0 0.25418 0.33342 0 0.74472 0 C1.15601 0 1.48943 0.25418 1.48943 2.38927 Z"} fill={`url(#${uid}-g17_fillGeometry0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n17} data-layer={"227:1446/227:1448/227:1454"} data-name={"Group 3588"}>
      <span className={s.n18} data-layer={"227:1446/227:1448/227:1454/227:1455"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 2.437 2.2377" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.437 0.99048 C2.437 1.66344 1.58536 2.39234 0.89433 2.20899 C0.62881 2.13853 0 1.66344 0 0.99048 C0 0.15907 0.54554 0 1.2185 0 C1.89146 0 2.437 0.31752 2.437 0.99048 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n19} data-layer={"227:1446/227:1448/227:1454/227:1456"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 2.43779 2.2377" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.43779 0.99048 C2.43779 1.66344 1.58587 2.39234 0.89462 2.20899 C0.62901 2.13853 0 1.66344 0 0.99048 C0 0.15907 0.54572 0 1.21889 0 C1.89207 0 2.43779 0.31752 2.43779 0.99048 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "227:1458": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1458"} data-name={"Size=30, Tema=on, System=AI"}>
  <span className={s.n21} data-layer={"227:1458/227:1459"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n22} data-layer={"227:1458/227:1460"} data-name={"AI Agent"}>
    <span className={s.n23} data-layer={"227:1458/227:1460/227:1461"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 21.50066 21.50066" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g24_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(224,205,228,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient><linearGradient id={`${uid}-g24_strokeGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0 -1.19651 1.19651 -0 -0.43774 1.09826)"}><stop offset={0} stopColor={"rgba(0,242,255,0)"}/><stop offset={1} stopColor={"rgba(0,242,255,1)"}/></linearGradient></defs><path d={"M21.50066 8.92685 C21.50066 14.8641 16.68757 21.50066 10.75033 21.50066 C4.81309 21.50066 0 14.8641 0 8.92685 C0 2.98961 4.81309 0 10.75033 0 C16.68757 0 21.50066 2.98961 21.50066 8.92685 Z"} fill={`url(#${uid}-g24_fillGeometry0)`} fillRule="nonzero"/><path d={"M21.50066 8.92685 L21.12732 8.92685 C21.12732 11.80122 19.95918 14.86331 18.06188 17.20521 C16.16427 19.54748 13.57421 21.12732 10.75033 21.12732 L10.75033 21.50066 L10.75033 21.874 C13.8637 21.874 16.6488 20.13556 18.64205 17.67524 C20.6356 15.21454 21.874 11.98973 21.874 8.92685 L21.50066 8.92685 Z M10.75033 21.50066 L10.75033 21.12732 C7.92646 21.12732 5.33639 19.54748 3.43878 17.20521 C1.54148 14.86331 0.37334 11.80122 0.37334 8.92685 L0 8.92685 L-0.37334 8.92685 C-0.37334 11.98973 0.86506 15.21454 2.85861 17.67524 C4.85186 20.13556 7.63696 21.874 10.75033 21.874 L10.75033 21.50066 Z M0 8.92685 L0.37334 8.92685 C0.37334 6.07174 1.52462 3.95068 3.37566 2.53339 C5.23862 1.10697 7.83889 0.37334 10.75033 0.37334 L10.75033 0 L10.75033 -0.37334 C7.72453 -0.37334 4.94963 0.38783 2.92173 1.94053 C0.88192 3.50236 -0.37334 5.84472 -0.37334 8.92685 L0 8.92685 Z M10.75033 0 L10.75033 0.37334 C13.66177 0.37334 16.26204 1.10697 18.125 2.53339 C19.97604 3.95068 21.12732 6.07174 21.12732 8.92685 L21.50066 8.92685 L21.874 8.92685 C21.874 5.84472 20.61874 3.50236 18.57893 1.94053 C16.55103 0.38783 13.77613 -0.37334 10.75033 -0.37334 L10.75033 0 Z"} fill={`url(#${uid}-g24_strokeGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n24} data-layer={"227:1458/227:1460/227:1462"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 16.02904 7.46847" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.05403 2.05233 C0.122 1.24174 0.75622 0.60676 1.56339 0.50606 C3.18353 0.30393 5.92197 0.00389 7.92852 0.00004 C9.99174 -0.00392 12.81263 0.30232 14.46501 0.50708 C15.27274 0.60717 15.90712 1.24227 15.97509 2.05333 C16.00582 2.41994 16.02904 2.80376 16.02904 3.12634 C16.02904 3.67129 15.98656 4.35615 15.94051 4.93853 C15.88147 5.68503 15.35159 6.30349 14.62305 6.47663 C13.00315 6.86159 10.07679 7.47603 7.92852 7.4684 C5.8362 7.46097 2.99191 6.85815 1.40301 6.47785 C0.67564 6.30375 0.14768 5.68594 0.08868 4.94036 C0.04257 4.35759 0 3.67187 0 3.12634 C0 2.80346 0.02327 2.41924 0.05403 2.05233 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n25} data-layer={"227:1458/227:1460/227:1463"} data-name={"Frame 3587"}>
      <span className={s.n26} data-layer={"227:1458/227:1460/227:1463/227:1464"} data-name={"Ellipse 3185"}>
        <svg width="100%" height="100%" viewBox="0 0 1.86179 7.81901" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g27_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M1.86179 2.98659 C1.86179 5.65546 1.44501 7.81901 0.9309 7.81901 C0.41678 7.81901 0 5.65546 0 2.98659 C0 0.31772 0.41678 0 0.9309 0 C1.44501 0 1.86179 0.31772 1.86179 2.98659 Z"} fill={`url(#${uid}-g27_fillGeometry0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n27} data-layer={"227:1458/227:1460/227:1463/227:1465"} data-name={"Ellipse 3184"}>
        <svg width="100%" height="100%" viewBox="0 0 1.86179 7.81901" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g28_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M1.86179 2.98659 C1.86179 5.65546 1.44501 7.81901 0.9309 7.81901 C0.41678 7.81901 0 5.65546 0 2.98659 C0 0.31772 0.41678 0 0.9309 0 C1.44501 0 1.86179 0.31772 1.86179 2.98659 Z"} fill={`url(#${uid}-g28_fillGeometry0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n28} data-layer={"227:1458/227:1460/227:1466"} data-name={"Group 3588"}>
      <span className={s.n29} data-layer={"227:1458/227:1460/227:1466/227:1467"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 3.04625 2.79712" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.04625 1.23811 C3.04625 2.0793 1.9817 2.99043 1.11791 2.76123 C0.78601 2.67317 0 2.0793 0 1.23811 C0 0.19884 0.68193 0 1.52313 0 C2.36433 0 3.04625 0.39691 3.04625 1.23811 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n30} data-layer={"227:1458/227:1460/227:1466/227:1468"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 3.04724 2.79712" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.04724 1.23811 C3.04724 2.0793 1.98234 2.99043 1.11827 2.76123 C0.78626 2.67317 0 2.0793 0 1.23811 C0 0.19884 0.68215 0 1.52362 0 C2.36509 0 3.04724 0.39691 3.04724 1.23811 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49110": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49110"} data-name={"Size=90, Tema=on, System=IURR"}>
  <span className={s.n32} data-layer={"236:49110/236:49111"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n33} data-layer={"236:49110/236:49117"} data-name={"logo"}>
    <span className={s.n34} data-layer={"236:49110/236:49117/236:49118"} data-name={"Ellipse 3191"}></span>
    <span className={s.n35} data-layer={"236:49110/236:49117/236:49119"} data-name={"Ellipse 3192"}></span>
    <span className={s.n36} data-layer={"236:49110/236:49117/236:49120"} data-name={"Rectangle 3464293"}></span>
    <span className={s.n37} data-layer={"236:49110/236:49117/236:49121"} data-name={"Rectangle 3464294"}></span>
    <span className={s.n38} data-layer={"236:49110/236:49117/236:49122"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n39} data-layer={"236:49110/236:49117/236:49123"} data-name={"Rectangle 3464296"}></span>
    <span className={s.n40} data-layer={"236:49110/236:49117/236:49124"} data-name={"Ellipse 3193"}></span>
    <span className={s.n41} data-layer={"236:49110/236:49117/236:49125"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n42} data-layer={"236:49110/236:49117/236:49126"} data-name={"Rectangle 3464298"}></span>
    <span className={s.n43} data-layer={"236:49110/236:49117/236:49127"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n44} data-layer={"236:49110/236:49117/236:49128"} data-name={"Rectangle 3464300"}></span>
  </span>
</Root>);
case "236:49129": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49129"} data-name={"Size=60, Tema=on, System=IURR"}>
  <span className={s.n46} data-layer={"236:49129/236:49130"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n47} data-layer={"236:49129/236:49136"} data-name={"logo"}>
    <span className={s.n48} data-layer={"236:49129/236:49136/236:49137"} data-name={"Ellipse 3191"}></span>
    <span className={s.n49} data-layer={"236:49129/236:49136/236:49138"} data-name={"Ellipse 3192"}></span>
    <span className={s.n50} data-layer={"236:49129/236:49136/236:49139"} data-name={"Rectangle 3464293"}></span>
    <span className={s.n51} data-layer={"236:49129/236:49136/236:49140"} data-name={"Rectangle 3464294"}></span>
    <span className={s.n52} data-layer={"236:49129/236:49136/236:49141"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n53} data-layer={"236:49129/236:49136/236:49142"} data-name={"Rectangle 3464296"}></span>
    <span className={s.n54} data-layer={"236:49129/236:49136/236:49143"} data-name={"Ellipse 3193"}></span>
    <span className={s.n55} data-layer={"236:49129/236:49136/236:49144"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n56} data-layer={"236:49129/236:49136/236:49145"} data-name={"Rectangle 3464298"}></span>
    <span className={s.n57} data-layer={"236:49129/236:49136/236:49146"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n58} data-layer={"236:49129/236:49136/236:49147"} data-name={"Rectangle 3464300"}></span>
  </span>
</Root>);
case "236:49148": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49148"} data-name={"Size=45, Tema=on, System=IURR"}>
  <span className={s.n60} data-layer={"236:49148/236:49149"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n61} data-layer={"236:49148/236:49155"} data-name={"logo"}>
    <span className={s.n62} data-layer={"236:49148/236:49155/236:49156"} data-name={"Ellipse 3191"}></span>
    <span className={s.n63} data-layer={"236:49148/236:49155/236:49157"} data-name={"Ellipse 3192"}></span>
    <span className={s.n64} data-layer={"236:49148/236:49155/236:49158"} data-name={"Rectangle 3464293"}></span>
    <span className={s.n65} data-layer={"236:49148/236:49155/236:49159"} data-name={"Rectangle 3464294"}></span>
    <span className={s.n66} data-layer={"236:49148/236:49155/236:49160"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n67} data-layer={"236:49148/236:49155/236:49161"} data-name={"Rectangle 3464296"}></span>
    <span className={s.n68} data-layer={"236:49148/236:49155/236:49162"} data-name={"Ellipse 3193"}></span>
    <span className={s.n69} data-layer={"236:49148/236:49155/236:49163"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n70} data-layer={"236:49148/236:49155/236:49164"} data-name={"Rectangle 3464298"}></span>
    <span className={s.n71} data-layer={"236:49148/236:49155/236:49165"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n72} data-layer={"236:49148/236:49155/236:49166"} data-name={"Rectangle 3464300"}></span>
  </span>
</Root>);
case "236:49167": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49167"} data-name={"Size=30, Tema=on, System=IURR"}>
  <span className={s.n73} data-layer={"236:49167/236:49168"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n74} data-layer={"236:49167/236:49174"} data-name={"logo"}>
    <span className={s.n75} data-layer={"236:49167/236:49174/236:49175"} data-name={"Ellipse 3191"}></span>
    <span className={s.n76} data-layer={"236:49167/236:49174/236:49176"} data-name={"Ellipse 3192"}></span>
    <span className={s.n77} data-layer={"236:49167/236:49174/236:49177"} data-name={"Rectangle 3464293"}></span>
    <span className={s.n78} data-layer={"236:49167/236:49174/236:49178"} data-name={"Rectangle 3464294"}></span>
    <span className={s.n79} data-layer={"236:49167/236:49174/236:49179"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n80} data-layer={"236:49167/236:49174/236:49180"} data-name={"Rectangle 3464296"}></span>
    <span className={s.n81} data-layer={"236:49167/236:49174/236:49181"} data-name={"Ellipse 3193"}></span>
    <span className={s.n82} data-layer={"236:49167/236:49174/236:49182"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n83} data-layer={"236:49167/236:49174/236:49183"} data-name={"Rectangle 3464298"}></span>
    <span className={s.n84} data-layer={"236:49167/236:49174/236:49184"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n85} data-layer={"236:49167/236:49174/236:49185"} data-name={"Rectangle 3464300"}></span>
  </span>
</Root>);
case "236:49186": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49186"} data-name={"Size=24, Tema=on, System=IURR"}>
  <span className={s.n86} data-layer={"236:49186/236:49187"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n87} data-layer={"236:49186/236:49193"} data-name={"logo"}>
    <span className={s.n88} data-layer={"236:49186/236:49193/236:49194"} data-name={"Ellipse 3191"}></span>
    <span className={s.n89} data-layer={"236:49186/236:49193/236:49195"} data-name={"Ellipse 3192"}></span>
    <span className={s.n90} data-layer={"236:49186/236:49193/236:49196"} data-name={"Rectangle 3464293"}></span>
    <span className={s.n91} data-layer={"236:49186/236:49193/236:49197"} data-name={"Rectangle 3464294"}></span>
    <span className={s.n92} data-layer={"236:49186/236:49193/236:49198"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n93} data-layer={"236:49186/236:49193/236:49199"} data-name={"Rectangle 3464296"}></span>
    <span className={s.n94} data-layer={"236:49186/236:49193/236:49200"} data-name={"Ellipse 3193"}></span>
    <span className={s.n95} data-layer={"236:49186/236:49193/236:49201"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n96} data-layer={"236:49186/236:49193/236:49202"} data-name={"Rectangle 3464298"}></span>
    <span className={s.n97} data-layer={"236:49186/236:49193/236:49203"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n98} data-layer={"236:49186/236:49193/236:49204"} data-name={"Rectangle 3464300"}></span>
  </span>
</Root>);
case "236:49205": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49205"} data-name={"Size=60, Tema=off, System=IURR"}>
  <span className={s.n99} data-layer={"236:49205/236:49206"} data-name={"Group 6893"}>
    <span className={s.n100} data-layer={"236:49205/236:49206/236:49207"} data-name={"Rectangle 3464300"}></span>
    <span className={s.n101} data-layer={"236:49205/236:49206/236:49208"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n102} data-layer={"236:49205/236:49206/236:49209"} data-name={"Ellipse 3192"}></span>
    <span className={s.n103} data-layer={"236:49205/236:49206/236:49210"} data-name={"Ellipse 3193"}>
      <svg width="100%" height="100%" viewBox="0 0 18.67332 24.22218" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 24.2222 C0 13.3082 7.28357 2.95692 18.6733 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.762852668762207} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n104} data-layer={"236:49205/236:49206/236:49211"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n105} data-layer={"236:49205/236:49206/236:49212"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n106} data-layer={"236:49205/236:49206/236:49213"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n107} data-layer={"236:49205/236:49206/236:49214"} data-name={"Rectangle 3464302"}></span>
    <span className={s.n108} data-layer={"236:49205/236:49206/236:49215"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 18.35019 15.43652" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(0.5 0.86603 -0.86603 0.5 16.67147 1.36035)"}><rect width={5.294703960418701} height={15.51403522491455} rx={5.556661128997803} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 -0 0 1 2.09725 -0.00033)"}><rect width={5.2949981689453125} height={10.690875053405762} rx={4.762852668762207} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 0 0 1 -0.00041 5.94629)"}><ellipse cx={4.745022296905518} cy={4.745022296905518} rx={4.745022296905518} ry={4.745022296905518} fill={"rgba(92,84,111,1)"}/></g></g></svg>
    </span>
  </span>
  <span className={s.n109} data-layer={"236:49205/236:49219"} data-name={"Rectangle 3464309"}></span>
</Root>);
case "236:49220": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49220"} data-name={"Size=45, Tema=off, System=IURR"}>
  <span className={s.n110} data-layer={"236:49220/236:49221"} data-name={"Group 6893"}>
    <span className={s.n111} data-layer={"236:49220/236:49221/236:49222"} data-name={"Rectangle 3464300"}></span>
    <span className={s.n112} data-layer={"236:49220/236:49221/236:49223"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n113} data-layer={"236:49220/236:49221/236:49224"} data-name={"Ellipse 3192"}></span>
    <span className={s.n114} data-layer={"236:49220/236:49221/236:49225"} data-name={"Ellipse 3193"}>
      <svg width="100%" height="100%" viewBox="0 0 14.00499 18.16664" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 18.1666 C0 9.98113 5.46268 2.21769 14.005 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.572139263153076} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n115} data-layer={"236:49220/236:49221/236:49226"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n116} data-layer={"236:49220/236:49221/236:49227"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n117} data-layer={"236:49220/236:49221/236:49228"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n118} data-layer={"236:49220/236:49221/236:49229"} data-name={"Rectangle 3464302"}></span>
    <span className={s.n119} data-layer={"236:49220/236:49221/236:49230"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 13.76246 11.57715" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(0.5 0.86603 -0.86603 0.5 12.5037 1.02084)"}><rect width={3.9710280895233154} height={11.635526657104492} rx={4.1674957275390625} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 -0 0 1 1.57304 0.00048)"}><rect width={3.9712486267089844} height={8.018156051635742} rx={3.572139263153076} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 0 0 1 -0.00024 4.45984)"}><ellipse cx={3.5587668418884277} cy={3.5587668418884277} rx={3.5587668418884277} ry={3.5587668418884277} fill={"rgba(92,84,111,1)"}/></g></g></svg>
    </span>
  </span>
  <span className={s.n120} data-layer={"236:49220/236:49234"} data-name={"Rectangle 3464309"}></span>
</Root>);
case "236:49235": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49235"} data-name={"Size=30, Tema=off, System=IURR"}>
  <span className={s.n121} data-layer={"236:49235/236:49236"} data-name={"Group 6893"}>
    <span className={s.n122} data-layer={"236:49235/236:49236/236:49237"} data-name={"Rectangle 3464300"}></span>
    <span className={s.n123} data-layer={"236:49235/236:49236/236:49238"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n124} data-layer={"236:49235/236:49236/236:49239"} data-name={"Ellipse 3192"}></span>
    <span className={s.n125} data-layer={"236:49235/236:49236/236:49240"} data-name={"Ellipse 3193"}>
      <svg width="100%" height="100%" viewBox="0 0 9.33666 12.11109" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 12.1111 C0 6.65408 3.64178 1.47846 9.33666 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.3814263343811035} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n126} data-layer={"236:49235/236:49236/236:49241"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n127} data-layer={"236:49235/236:49236/236:49242"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n128} data-layer={"236:49235/236:49236/236:49243"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n129} data-layer={"236:49235/236:49236/236:49244"} data-name={"Rectangle 3464302"}></span>
    <span className={s.n130} data-layer={"236:49235/236:49236/236:49245"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 9.17562 7.71875" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(0.5 0.86603 -0.86603 0.5 8.33606 0.67993)"}><rect width={2.6473519802093506} height={7.757017612457275} rx={2.7783308029174805} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 -0 0 1 1.04907 -0)"}><rect width={2.6474990844726562} height={5.345437526702881} rx={2.3814263343811035} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 0 0 1 -0.00012 2.97363)"}><ellipse cx={2.372511148452759} cy={2.372511148452759} rx={2.372511148452759} ry={2.372511148452759} fill={"rgba(92,84,111,1)"}/></g></g></svg>
    </span>
  </span>
  <span className={s.n131} data-layer={"236:49235/236:49249"} data-name={"Rectangle 3464309"}></span>
</Root>);
case "236:49250": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49250"} data-name={"Size=24, Tema=off, System=IURR"}>
  <span className={s.n132} data-layer={"236:49250/236:49251"} data-name={"Group 6893"}>
    <span className={s.n133} data-layer={"236:49250/236:49251/236:49252"} data-name={"Rectangle 3464300"}></span>
    <span className={s.n134} data-layer={"236:49250/236:49251/236:49253"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n135} data-layer={"236:49250/236:49251/236:49254"} data-name={"Ellipse 3192"}></span>
    <span className={s.n136} data-layer={"236:49250/236:49251/236:49255"} data-name={"Ellipse 3193"}>
      <svg width="100%" height="100%" viewBox="0 0 7.46933 9.68887" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 9.68887 C0 5.32327 2.91343 1.18277 7.46933 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.9051411151885986} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n137} data-layer={"236:49250/236:49251/236:49256"} data-name={"Rectangle 3464295"}></span>
    <span className={s.n138} data-layer={"236:49250/236:49251/236:49257"} data-name={"Rectangle 3464299"}></span>
    <span className={s.n139} data-layer={"236:49250/236:49251/236:49258"} data-name={"Rectangle 3464297"}></span>
    <span className={s.n140} data-layer={"236:49250/236:49251/236:49259"} data-name={"Rectangle 3464302"}></span>
    <span className={s.n141} data-layer={"236:49250/236:49251/236:49260"} data-name={"Union"}>
      <svg width="100%" height="100%" viewBox="0 0 7.34024 6.1748" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(0.5 0.86603 -0.86603 0.5 6.66885 0.54375)"}><rect width={2.1178815364837646} height={6.20561408996582} rx={2.2226645946502686} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 -0 0 1 0.83916 0)"}><rect width={2.117999315261841} height={4.276350021362305} rx={1.9051411151885986} fill={"rgba(92,84,111,1)"}/></g><g transform={"matrix(1 0 0 1 0.0001 2.37891)"}><ellipse cx={1.898008942604065} cy={1.898008942604065} rx={1.898008942604065} ry={1.898008942604065} fill={"rgba(92,84,111,1)"}/></g></g></svg>
    </span>
  </span>
  <span className={s.n142} data-layer={"236:49250/236:49264"} data-name={"Rectangle 3464309"}></span>
</Root>);
case "236:49265": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49265"} data-name={"Size=45, Tema=on, System=StP"}>
  <span className={s.n143} data-layer={"236:49265/236:49266"} data-name={"Group 3871"}>
    <span className={s.n144} data-layer={"236:49265/236:49266/236:49267"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n145} data-layer={"236:49265/236:49266/236:49268"} data-name={"Rectangle 3464249"}>
      <svg width="100%" height="100%" viewBox="0 0 17.79929 17.59713" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L17.7993 0 L17.7993 8.79857 M0 17.5971 L0 0 M8.89964 17.5971 L0 17.5971"} fill="none" stroke={"rgba(45,40,141,1)"} strokeWidth={1.5460054874420166} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n146} data-layer={"236:49265/236:49266/236:49269"} data-name={"Rectangle 3464233"}></span>
    <span className={s.n147} data-layer={"236:49265/236:49266/236:49270"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n148} data-layer={"236:49265/236:49266/236:49271"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 11.80734 11.80734" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.8073 0 L11.8073 11.8073 L0 11.8073 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n149} data-layer={"236:49265/236:49266/236:49272"} data-name={"Rectangle 3464251"}>
      <svg width="100%" height="100%" viewBox="0 0 15.55738 15.92731" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 15.9273 L7.77869 0 L15.5574 15.9273 L7.77869 14.3716 L0 15.9273 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 15.9273 L7.77869 0 L15.5574 15.9273 L7.77869 14.3716 L0 15.9273 Z"} fill="none" stroke={"rgba(235,235,235,1)"} strokeWidth={1.0854445695877075} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49273": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49273"} data-name={"Size=30, Tema=on, System=StP"}>
  <span className={s.n150} data-layer={"236:49273/236:49274"} data-name={"Group 3871"}>
    <span className={s.n151} data-layer={"236:49273/236:49274/236:49275"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n152} data-layer={"236:49273/236:49274/236:49276"} data-name={"Rectangle 3464249"}>
      <svg width="100%" height="100%" viewBox="0 0 11.86619 11.73142" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.8662 0 L11.8662 5.86571 M0 11.7314 L0 0 M5.9331 11.7314 L0 11.7314"} fill="none" stroke={"rgba(45,40,141,1)"} strokeWidth={1.030670404434204} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n153} data-layer={"236:49273/236:49274/236:49277"} data-name={"Rectangle 3464233"}></span>
    <span className={s.n154} data-layer={"236:49273/236:49274/236:49278"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n155} data-layer={"236:49273/236:49274/236:49279"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 7.87156 7.87156" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.87156 0 L7.87156 7.87156 L0 7.87156 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n156} data-layer={"236:49273/236:49274/236:49280"} data-name={"Rectangle 3464251"}>
      <svg width="100%" height="100%" viewBox="0 0 10.37159 10.6182" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 10.6182 L5.18579 0 L10.3716 10.6182 L5.18579 9.58104 L0 10.6182 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 10.6182 L5.18579 0 L10.3716 10.6182 L5.18579 9.58104 L0 10.6182 Z"} fill="none" stroke={"rgba(235,235,235,1)"} strokeWidth={0.7236297130584717} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49281": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49281"} data-name={"Size=90, Tema=on, System=StP"}>
  <span className={s.n157} data-layer={"236:49281/236:49282"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n158} data-layer={"236:49281/236:49283"} data-name={"Group 27"}>
    <span className={s.n159} data-layer={"236:49281/236:49283/236:49284"} data-name={"Rectangle 3464249"}>
      <svg width="100%" height="100%" viewBox="0 0 41.03567 40.56962" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L41.0357 0 L41.0357 20.2848 M0 40.5696 L0 0 M20.5178 40.5696 L0 40.5696"} fill="none" stroke={"rgba(45,40,141,1)"} strokeWidth={2.3684210777282715} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n160} data-layer={"236:49281/236:49283/236:49285"} data-name={"Rectangle 3464233"}></span>
    <span className={s.n161} data-layer={"236:49281/236:49283/236:49286"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n162} data-layer={"236:49281/236:49283/236:49287"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 18.94737 18.94737" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L18.9474 0 L18.9474 18.9474 L0 18.9474 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n163} data-layer={"236:49281/236:49288"} data-name={"Rectangle 3464251"}>
    <svg width="100%" height="100%" viewBox="0 0 33.94592 34.75309" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 34.7531 L16.973 0 L33.9459 34.7531 L16.973 31.3585 L0 34.7531 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 34.7531 L16.973 0 L33.9459 34.7531 L16.973 31.3585 L0 34.7531 Z"} fill="none" stroke={"rgba(235,235,235,1)"} strokeWidth={2.3684210777282715} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:49289": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49289"} data-name={"Size=60, Tema=on, System=StP"}>
  <span className={s.n164} data-layer={"236:49289/236:49290"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n165} data-layer={"236:49289/236:49291"} data-name={"Group 27"}>
    <span className={s.n166} data-layer={"236:49289/236:49291/236:49292"} data-name={"Rectangle 3464249"}>
      <svg width="100%" height="100%" viewBox="0 0 27.35711 27.04641" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L27.3571 0 L27.3571 13.5232 M0 27.0464 L0 0 M13.6786 27.0464 L0 27.0464"} fill="none" stroke={"rgba(45,40,141,1)"} strokeWidth={1.5789474248886108} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n167} data-layer={"236:49289/236:49291/236:49293"} data-name={"Rectangle 3464233"}></span>
    <span className={s.n168} data-layer={"236:49289/236:49291/236:49294"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n169} data-layer={"236:49289/236:49291/236:49295"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 12.63158 12.63158" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L12.6316 0 L12.6316 12.6316 L0 12.6316 L0 0 Z"} fill={"rgba(78,144,172,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n170} data-layer={"236:49289/236:49296"} data-name={"Rectangle 3464251"}>
    <svg width="100%" height="100%" viewBox="0 0 22.63062 23.16873" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 23.1687 L11.3153 0 L22.6306 23.1687 L11.3153 20.9057 L0 23.1687 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/><path d={"M0 23.1687 L11.3153 0 L22.6306 23.1687 L11.3153 20.9057 L0 23.1687 Z"} fill="none" stroke={"rgba(235,235,235,1)"} strokeWidth={1.5789474248886108} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:49297": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49297"} data-name={"Size=60, Tema=off, System=StP"}>
  <span className={s.n171} data-layer={"236:49297/236:49298"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n172} data-layer={"236:49297/236:49299"} data-name={"Rectangle 3464256"}>
    <svg width="100%" height="100%" viewBox="0 0 17.14933 19.8766" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.0292 0 L17.1493 0 M0 19.8766 L0 14.0292"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={6.654545783996582} strokeLinecap="round" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n173} data-layer={"236:49297/236:49300"} data-name={"Rectangle 3464257"}></span>
  <span className={s.n174} data-layer={"236:49297/236:49301"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n175} data-layer={"236:49297/236:49302"} data-name={"Rectangle 3464267"}></span>
  <span className={s.n176} data-layer={"236:49297/236:49303"} data-name={"Rectangle 3464260"}>
    <svg width="100%" height="100%" viewBox="0 0 22.84057 23.38368" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 23.3837 L11.4203 0 L22.8406 23.3837 L11.4211 19.6077 L0 23.3837 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49304": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49304"} data-name={"Size=45, Tema=off, System=StP"}>
  <span className={s.n177} data-layer={"236:49304/236:49305"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n178} data-layer={"236:49304/236:49306"} data-name={"Rectangle 3464256"}>
    <svg width="100%" height="100%" viewBox="0 0 12.86199 14.90745" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.5219 0 L12.862 0 M0 14.9074 L0 10.5219"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.990909099578857} strokeLinecap="round" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n179} data-layer={"236:49304/236:49307"} data-name={"Rectangle 3464257"}></span>
  <span className={s.n180} data-layer={"236:49304/236:49308"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n181} data-layer={"236:49304/236:49309"} data-name={"Rectangle 3464267"}></span>
  <span className={s.n182} data-layer={"236:49304/236:49310"} data-name={"Rectangle 3464260"}>
    <svg width="100%" height="100%" viewBox="0 0 17.13043 17.53776" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 17.5378 L8.56521 0 L17.1304 17.5378 L8.56584 14.7058 L0 17.5378 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49311": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49311"} data-name={"Size=30, Tema=off, System=StP"}>
  <span className={s.n183} data-layer={"236:49311/236:49312"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n184} data-layer={"236:49311/236:49313"} data-name={"Rectangle 3464256"}>
    <svg width="100%" height="100%" viewBox="0 0 8.57466 9.9383" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.0146 0 L8.57466 0 M0 9.9383 L0 7.0146"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.327272891998291} strokeLinecap="round" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n185} data-layer={"236:49311/236:49314"} data-name={"Rectangle 3464257"}></span>
  <span className={s.n186} data-layer={"236:49311/236:49315"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n187} data-layer={"236:49311/236:49316"} data-name={"Rectangle 3464267"}></span>
  <span className={s.n188} data-layer={"236:49311/236:49317"} data-name={"Rectangle 3464260"}>
    <svg width="100%" height="100%" viewBox="0 0 11.42029 11.69184" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 11.6918 L5.71014 0 L11.4203 11.6918 L5.71056 9.80386 L0 11.6918 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49318": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49318"} data-name={"Size=24, Tema=off, System=StP"}>
  <span className={s.n189} data-layer={"236:49318/236:49319"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n190} data-layer={"236:49318/236:49320"} data-name={"Rectangle 3464256"}>
    <svg width="100%" height="100%" viewBox="0 0 6.85973 7.95064" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.61168 0 L6.85973 0 M0 7.95064 L0 5.61168"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.661818265914917} strokeLinecap="round" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n191} data-layer={"236:49318/236:49321"} data-name={"Rectangle 3464257"}></span>
  <span className={s.n192} data-layer={"236:49318/236:49322"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n193} data-layer={"236:49318/236:49323"} data-name={"Rectangle 3464267"}></span>
  <span className={s.n194} data-layer={"236:49318/236:49324"} data-name={"Rectangle 3464260"}>
    <svg width="100%" height="100%" viewBox="0 0 9.13623 9.35347" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 9.35347 L4.56811 0 L9.13623 9.35347 L4.56845 7.84309 L0 9.35347 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49325": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49325"} data-name={"Size=90, Tema=on, System=VS"}>
  <span className={s.n195} data-layer={"236:49325/236:49326"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n196} data-layer={"236:49325/236:49327"} data-name={"Group 6898"}>
    <span className={s.n197} data-layer={"236:49325/236:49327/236:49328"} data-name={"Group 6896"}>
      <span className={s.n198} data-layer={"236:49325/236:49327/236:49328/236:49329"} data-name={"Rectangle 3464314"}>
        <svg width="100%" height="100%" viewBox="0 0 66.00945 28.60771" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g214_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(76,218,134,1)"}/><stop offset={1} stopColor={"rgba(43,197,125,1)"}/></linearGradient></defs><path d={"M15.5363 0 L50.4731 0 L66.0094 28.6077 L0 28.6077 L15.5363 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M15.5363 0 L50.4731 0 L66.0094 28.6077 L0 28.6077 L15.5363 0 Z"} fill="none" stroke={`url(#${uid}-g214_netstroke)`} strokeWidth={1.19510018825531} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n199} data-layer={"236:49325/236:49327/236:49328/236:49330"} data-name={"Group 6895"}>
        <span className={s.n200} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49331"} data-name={"Rectangle 3464312"}></span>
        <span className={s.n201} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49332"} data-name={"Rectangle 3464311"}></span>
        <span className={s.n202} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49333"} data-name={"Rectangle 3464236"}></span>
        <span className={s.n203} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49334"} data-name={"Rectangle 3464234"}></span>
        <span className={s.n204} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49335"} data-name={"Rectangle 3464315"}></span>
        <span className={s.n205} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49336"} data-name={"Rectangle 3464316"}></span>
        <span className={s.n206} data-layer={"236:49325/236:49327/236:49328/236:49330/236:49337"} data-name={"Rectangle 3464317"}></span>
      </span>
      <span className={s.n207} data-layer={"236:49325/236:49327/236:49328/236:49338"} data-name={"Rectangle 3464313"}>
        <svg width="100%" height="100%" viewBox="0 0 67.10067 37.59314" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g223_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(135,234,172,1)"}/><stop offset={1} stopColor={"rgba(40,195,124,1)"}/></linearGradient></defs><path d={"M67.1007 0 L67.1007 37.5931 L0 37.5931 L0 0 L19.1654 0 L19.1654 7.31628 L47.9353 7.31628 L47.9353 0 L67.1007 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M67.1007 0 L67.1007 37.5931 L0 37.5931 L0 0 L19.1654 0 L19.1654 7.31628 L47.9353 7.31628 L47.9353 0 L67.1007 0 Z"} fill="none" stroke={`url(#${uid}-g223_netstroke)`} strokeWidth={1.19510018825531} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n208} data-layer={"236:49325/236:49327/236:49328/236:49339"} data-name={"Rectangle 3464315"}></span>
      <span className={s.n209} data-layer={"236:49325/236:49327/236:49328/236:49340"} data-name={"Rectangle 3464316"}></span>
      <span className={s.n210} data-layer={"236:49325/236:49327/236:49328/236:49341"} data-name={"Rectangle 3464317"}></span>
    </span>
    <span className={s.n211} data-layer={"236:49325/236:49327/236:49342"} data-name={"Group 6897"}>
      <span className={s.n212} data-layer={"236:49325/236:49327/236:49342/236:49343"} data-name={"Ellipse 48"}></span>
      <span className={s.n213} data-layer={"236:49325/236:49327/236:49342/236:49344"} data-name={"Union"}>
        <svg width="100%" height="100%" viewBox="0 0 12.92969 12.92871" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(1 0 0 1 0.00025 5.07917)"}><rect width={12.929022789001465} height={2.770504951477051} rx={2.39020037651062} fill={"rgba(40,195,124,1)"}/></g><g transform={"matrix(-0 1 -1 -0 7.85009 -0.00001)"}><rect width={12.929022789001465} height={2.770504951477051} rx={2.39020037651062} fill={"rgba(40,195,124,1)"}/></g></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49347": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49347"} data-name={"Size=60, Tema=on, System=VS"}>
  <span className={s.n214} data-layer={"236:49347/236:49348"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n215} data-layer={"236:49347/236:49349"} data-name={"Group 6898"}>
    <span className={s.n216} data-layer={"236:49347/236:49349/236:49350"} data-name={"Group 6896"}>
      <span className={s.n217} data-layer={"236:49347/236:49349/236:49350/236:49351"} data-name={"Rectangle 3464314"}>
        <svg width="100%" height="100%" viewBox="0 0 44.00629 19.07181" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g234_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(76,218,134,1)"}/><stop offset={1} stopColor={"rgba(43,197,125,1)"}/></linearGradient></defs><path d={"M10.3575 0 L33.6488 0 L44.0063 19.0718 L0 19.0718 L10.3575 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M10.3575 0 L33.6488 0 L44.0063 19.0718 L0 19.0718 L10.3575 0 Z"} fill="none" stroke={`url(#${uid}-g234_netstroke)`} strokeWidth={0.7967334389686584} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n218} data-layer={"236:49347/236:49349/236:49350/236:49352"} data-name={"Group 6895"}>
        <span className={s.n219} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49353"} data-name={"Rectangle 3464312"}></span>
        <span className={s.n220} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49354"} data-name={"Rectangle 3464311"}></span>
        <span className={s.n221} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49355"} data-name={"Rectangle 3464236"}></span>
        <span className={s.n222} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49356"} data-name={"Rectangle 3464234"}></span>
        <span className={s.n223} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49357"} data-name={"Rectangle 3464315"}></span>
        <span className={s.n224} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49358"} data-name={"Rectangle 3464316"}></span>
        <span className={s.n225} data-layer={"236:49347/236:49349/236:49350/236:49352/236:49359"} data-name={"Rectangle 3464317"}></span>
      </span>
      <span className={s.n226} data-layer={"236:49347/236:49349/236:49350/236:49360"} data-name={"Rectangle 3464313"}>
        <svg width="100%" height="100%" viewBox="0 0 44.73378 25.06209" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g243_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(135,234,172,1)"}/><stop offset={1} stopColor={"rgba(40,195,124,1)"}/></linearGradient></defs><path d={"M44.7338 0 L44.7338 25.0621 L0 25.0621 L0 0 L12.7769 0 L12.7769 4.87752 L31.9569 4.87752 L31.9569 0 L44.7338 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M44.7338 0 L44.7338 25.0621 L0 25.0621 L0 0 L12.7769 0 L12.7769 4.87752 L31.9569 4.87752 L31.9569 0 L44.7338 0 Z"} fill="none" stroke={`url(#${uid}-g243_netstroke)`} strokeWidth={0.7967334389686584} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n227} data-layer={"236:49347/236:49349/236:49350/236:49361"} data-name={"Rectangle 3464315"}></span>
      <span className={s.n228} data-layer={"236:49347/236:49349/236:49350/236:49362"} data-name={"Rectangle 3464316"}></span>
      <span className={s.n229} data-layer={"236:49347/236:49349/236:49350/236:49363"} data-name={"Rectangle 3464317"}></span>
    </span>
    <span className={s.n230} data-layer={"236:49347/236:49349/236:49364"} data-name={"Group 6897"}>
      <span className={s.n231} data-layer={"236:49347/236:49349/236:49364/236:49365"} data-name={"Ellipse 48"}></span>
      <span className={s.n232} data-layer={"236:49347/236:49349/236:49364/236:49366"} data-name={"Union"}>
        <svg width="100%" height="100%" viewBox="0 0 8.61935 8.61935" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(1 0 0 1 -0.00047 3.38593)"}><rect width={8.619348526000977} height={1.8470033407211304} rx={1.593466877937317} fill={"rgba(40,195,124,1)"}/></g><g transform={"matrix(-0 1 -1 -0 5.23276 -0.00019)"}><rect width={8.619348526000977} height={1.8470033407211304} rx={1.593466877937317} fill={"rgba(40,195,124,1)"}/></g></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49369": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49369"} data-name={"Size=45, Tema=on, System=VS"}>
  <span className={s.n233} data-layer={"236:49369/236:49370"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n234} data-layer={"236:49369/236:49371"} data-name={"Group 6898"}>
    <span className={s.n235} data-layer={"236:49369/236:49371/236:49372"} data-name={"Group 6896"}>
      <span className={s.n236} data-layer={"236:49369/236:49371/236:49372/236:49373"} data-name={"Rectangle 3464314"}>
        <svg width="100%" height="100%" viewBox="0 0 33.00472 14.30385" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g254_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(76,218,134,1)"}/><stop offset={1} stopColor={"rgba(43,197,125,1)"}/></linearGradient></defs><path d={"M7.76815 0 L25.2366 0 L33.0047 14.3039 L0 14.3039 L7.76815 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M7.76815 0 L25.2366 0 L33.0047 14.3039 L0 14.3039 L7.76815 0 Z"} fill="none" stroke={`url(#${uid}-g254_netstroke)`} strokeWidth={0.597550094127655} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n237} data-layer={"236:49369/236:49371/236:49372/236:49374"} data-name={"Group 6895"}>
        <span className={s.n238} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49375"} data-name={"Rectangle 3464312"}></span>
        <span className={s.n239} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49376"} data-name={"Rectangle 3464311"}></span>
        <span className={s.n240} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49377"} data-name={"Rectangle 3464236"}></span>
        <span className={s.n241} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49378"} data-name={"Rectangle 3464234"}></span>
        <span className={s.n242} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49379"} data-name={"Rectangle 3464315"}></span>
        <span className={s.n243} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49380"} data-name={"Rectangle 3464316"}></span>
        <span className={s.n244} data-layer={"236:49369/236:49371/236:49372/236:49374/236:49381"} data-name={"Rectangle 3464317"}></span>
      </span>
      <span className={s.n245} data-layer={"236:49369/236:49371/236:49372/236:49382"} data-name={"Rectangle 3464313"}>
        <svg width="100%" height="100%" viewBox="0 0 33.55033 18.79657" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g263_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(135,234,172,1)"}/><stop offset={1} stopColor={"rgba(40,195,124,1)"}/></linearGradient></defs><path d={"M33.5503 0 L33.5503 18.7966 L0 18.7966 L0 0 L9.58268 0 L9.58268 3.65814 L23.9676 3.65814 L23.9676 0 L33.5503 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M33.5503 0 L33.5503 18.7966 L0 18.7966 L0 0 L9.58268 0 L9.58268 3.65814 L23.9676 3.65814 L23.9676 0 L33.5503 0 Z"} fill="none" stroke={`url(#${uid}-g263_netstroke)`} strokeWidth={0.597550094127655} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n246} data-layer={"236:49369/236:49371/236:49372/236:49383"} data-name={"Rectangle 3464315"}></span>
      <span className={s.n247} data-layer={"236:49369/236:49371/236:49372/236:49384"} data-name={"Rectangle 3464316"}></span>
      <span className={s.n248} data-layer={"236:49369/236:49371/236:49372/236:49385"} data-name={"Rectangle 3464317"}></span>
    </span>
    <span className={s.n249} data-layer={"236:49369/236:49371/236:49386"} data-name={"Group 6897"}>
      <span className={s.n250} data-layer={"236:49369/236:49371/236:49386/236:49387"} data-name={"Ellipse 48"}></span>
      <span className={s.n251} data-layer={"236:49369/236:49371/236:49386/236:49388"} data-name={"Union"}>
        <svg width="100%" height="100%" viewBox="0 0 6.46484 6.46484" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(1 0 0 1 0.00034 2.5398)"}><rect width={6.464511394500732} height={1.3852524757385254} rx={1.19510018825531} fill={"rgba(40,195,124,1)"}/></g><g transform={"matrix(-0 1 -1 -0 3.92526 0.00021)"}><rect width={6.464511394500732} height={1.3852524757385254} rx={1.19510018825531} fill={"rgba(40,195,124,1)"}/></g></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49391": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49391"} data-name={"Size=30, Tema=on, System=VS"}>
  <span className={s.n252} data-layer={"236:49391/236:49392"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n253} data-layer={"236:49391/236:49393"} data-name={"Group 6898"}>
    <span className={s.n254} data-layer={"236:49391/236:49393/236:49394"} data-name={"Group 6896"}>
      <span className={s.n255} data-layer={"236:49391/236:49393/236:49394/236:49395"} data-name={"Rectangle 3464314"}>
        <svg width="100%" height="100%" viewBox="0 0 22.00315 9.5359" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g274_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(76,218,134,1)"}/><stop offset={1} stopColor={"rgba(43,197,125,1)"}/></linearGradient></defs><path d={"M5.17877 0 L16.8244 0 L22.0031 9.5359 L0 9.5359 L5.17877 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M5.17877 0 L16.8244 0 L22.0031 9.5359 L0 9.5359 L5.17877 0 Z"} fill="none" stroke={`url(#${uid}-g274_netstroke)`} strokeWidth={0.3983667194843292} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n256} data-layer={"236:49391/236:49393/236:49394/236:49396"} data-name={"Group 6895"}>
        <span className={s.n257} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49397"} data-name={"Rectangle 3464312"}></span>
        <span className={s.n258} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49398"} data-name={"Rectangle 3464311"}></span>
        <span className={s.n259} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49399"} data-name={"Rectangle 3464236"}></span>
        <span className={s.n260} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49400"} data-name={"Rectangle 3464234"}></span>
        <span className={s.n261} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49401"} data-name={"Rectangle 3464315"}></span>
        <span className={s.n262} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49402"} data-name={"Rectangle 3464316"}></span>
        <span className={s.n263} data-layer={"236:49391/236:49393/236:49394/236:49396/236:49403"} data-name={"Rectangle 3464317"}></span>
      </span>
      <span className={s.n264} data-layer={"236:49391/236:49393/236:49394/236:49404"} data-name={"Rectangle 3464313"}>
        <svg width="100%" height="100%" viewBox="0 0 22.36689 12.53104" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g283_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(135,234,172,1)"}/><stop offset={1} stopColor={"rgba(40,195,124,1)"}/></linearGradient></defs><path d={"M22.3669 0 L22.3669 12.531 L0 12.531 L0 0 L6.38846 0 L6.38846 2.43876 L15.9784 2.43876 L15.9784 0 L22.3669 0 Z"} fill={"rgba(40,195,124,1)"} fillRule="nonzero"/><path d={"M22.3669 0 L22.3669 12.531 L0 12.531 L0 0 L6.38846 0 L6.38846 2.43876 L15.9784 2.43876 L15.9784 0 L22.3669 0 Z"} fill="none" stroke={`url(#${uid}-g283_netstroke)`} strokeWidth={0.3983667194843292} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n265} data-layer={"236:49391/236:49393/236:49394/236:49405"} data-name={"Rectangle 3464315"}></span>
      <span className={s.n266} data-layer={"236:49391/236:49393/236:49394/236:49406"} data-name={"Rectangle 3464316"}></span>
      <span className={s.n267} data-layer={"236:49391/236:49393/236:49394/236:49407"} data-name={"Rectangle 3464317"}></span>
    </span>
    <span className={s.n268} data-layer={"236:49391/236:49393/236:49408"} data-name={"Group 6897"}>
      <span className={s.n269} data-layer={"236:49391/236:49393/236:49408/236:49409"} data-name={"Ellipse 48"}></span>
      <span className={s.n270} data-layer={"236:49391/236:49393/236:49408/236:49410"} data-name={"Union"}>
        <svg width="100%" height="100%" viewBox="0 0 4.30967 4.30967" overflow="visible" aria-hidden="true"><defs></defs><g><g transform={"matrix(1 0 0 1 -0.00002 1.69269)"}><rect width={4.309674263000488} height={0.9235016703605652} rx={0.7967334389686584} fill={"rgba(40,195,124,1)"}/></g><g transform={"matrix(-0 1 -1 -0 2.61659 -0.00037)"}><rect width={4.309674263000488} height={0.9235016703605652} rx={0.7967334389686584} fill={"rgba(40,195,124,1)"}/></g></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49413": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49413"} data-name={"Size=60, Tema=off, System=VS"}>
  <span className={s.n171} data-layer={"236:49413/236:49414"} data-name={"Rectangle 3464321"}></span>
  <span className={s.n271} data-layer={"236:49413/236:49415"} data-name={"Group 6899"}>
    <span className={s.n272} data-layer={"236:49413/236:49415/236:49416"} data-name={"Rectangle 3464319"}>
      <svg width="100%" height="100%" viewBox="0 0 38.6162 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L38.6162 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={6.650000095367432} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n273} data-layer={"236:49413/236:49415/236:49417"} data-name={"Rectangle 3464320"}>
      <svg width="100%" height="100%" viewBox="0 0 29.61761 0.00625" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.00624602 L29.6174 -7.48295e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={6.650000095367432} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n274} data-layer={"236:49413/236:49415/236:49418"} data-name={"Rectangle 3464318"}>
      <svg width="100%" height="100%" viewBox="0 0 51.73 28.98172" overflow="visible" aria-hidden="true" focusable="false"><path d={"M51.73 0 L51.73 28.9817 L0 28.9817 L0 0 L14.7752 0 L14.7752 5.64035 L36.9548 5.64035 L36.9548 0 L51.73 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={6.650000095367432} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49419": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49419"} data-name={"Size=45, Tema=off, System=VS"}>
  <span className={s.n177} data-layer={"236:49419/236:49420"} data-name={"Rectangle 3464321"}></span>
  <span className={s.n275} data-layer={"236:49419/236:49421"} data-name={"Group 6899"}>
    <span className={s.n276} data-layer={"236:49419/236:49421/236:49422"} data-name={"Rectangle 3464319"}>
      <svg width="100%" height="100%" viewBox="0 0 28.96215 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L28.9621 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.987500190734863} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n277} data-layer={"236:49419/236:49421/236:49423"} data-name={"Rectangle 3464320"}>
      <svg width="100%" height="100%" viewBox="0 0 22.21321 0.00468" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.00468451 L22.213 -5.61221e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.987500190734863} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n278} data-layer={"236:49419/236:49421/236:49424"} data-name={"Rectangle 3464318"}>
      <svg width="100%" height="100%" viewBox="0 0 38.7975 21.73629" overflow="visible" aria-hidden="true" focusable="false"><path d={"M38.7975 0 L38.7975 21.7363 L0 21.7363 L0 0 L11.0814 0 L11.0814 4.23026 L27.7161 4.23026 L27.7161 0 L38.7975 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.987500190734863} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49425": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49425"} data-name={"Size=30, Tema=off, System=VS"}>
  <span className={s.n183} data-layer={"236:49425/236:49426"} data-name={"Rectangle 3464321"}></span>
  <span className={s.n279} data-layer={"236:49425/236:49427"} data-name={"Group 6899"}>
    <span className={s.n280} data-layer={"236:49425/236:49427/236:49428"} data-name={"Rectangle 3464319"}>
      <svg width="100%" height="100%" viewBox="0 0 19.3081 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L19.3081 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.325000286102295} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n281} data-layer={"236:49425/236:49427/236:49429"} data-name={"Rectangle 3464320"}>
      <svg width="100%" height="100%" viewBox="0 0 14.80881 0.00312" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.00312301 L14.8087 -3.74147e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.325000286102295} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n282} data-layer={"236:49425/236:49427/236:49430"} data-name={"Rectangle 3464318"}>
      <svg width="100%" height="100%" viewBox="0 0 25.865 14.49086" overflow="visible" aria-hidden="true" focusable="false"><path d={"M25.865 0 L25.865 14.4909 L0 14.4909 L0 0 L7.38759 0 L7.38759 2.82017 L18.4774 2.82017 L18.4774 0 L25.865 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.325000286102295} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49431": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49431"} data-name={"Size=24, Tema=off, System=VS"}>
  <span className={s.n189} data-layer={"236:49431/236:49432"} data-name={"Rectangle 3464321"}></span>
  <span className={s.n283} data-layer={"236:49431/236:49433"} data-name={"Group 6899"}>
    <span className={s.n284} data-layer={"236:49431/236:49433/236:49434"} data-name={"Rectangle 3464319"}>
      <svg width="100%" height="100%" viewBox="0 0 15.44648 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.4465 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.6600003242492676} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n285} data-layer={"236:49431/236:49433/236:49435"} data-name={"Rectangle 3464320"}>
      <svg width="100%" height="100%" viewBox="0 0 11.84704 0.0025" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.00249841 L11.847 -2.99318e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.6600003242492676} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n286} data-layer={"236:49431/236:49433/236:49436"} data-name={"Rectangle 3464318"}>
      <svg width="100%" height="100%" viewBox="0 0 20.692 11.59269" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.692 0 L20.692 11.5927 L0 11.5927 L0 0 L5.91007 0 L5.91007 2.25614 L14.7819 2.25614 L14.7819 0 L20.692 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.6600003242492676} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49437": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49437"} data-name={"Size=60, Tema=off, System=UO"}>
  <span className={s.n171} data-layer={"236:49437/236:49438"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n287} data-layer={"236:49437/236:49439"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n288} data-layer={"236:49437/236:49440"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n289} data-layer={"236:49437/236:49441"} data-name={"Rectangle 3464249"}></span>
  <span className={s.n290} data-layer={"236:49437/236:49442"} data-name={"+"}>
    <svg width="100%" height="100%" viewBox="0 0 12.90394 12.93466" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 8.11105 L0 4.82362 L4.79289 4.82362 L4.79289 0 L8.11105 0 L8.11105 4.82362 L12.9039 4.82362 L12.9039 8.11105 L8.11105 8.11105 L8.11105 12.9347 L4.79289 12.9347 L4.79289 8.11105 L0 8.11105 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49443": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49443"} data-name={"Size=45, Tema=off, System=UO"}>
  <span className={s.n177} data-layer={"236:49443/236:49444"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n291} data-layer={"236:49443/236:49445"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n292} data-layer={"236:49443/236:49446"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n293} data-layer={"236:49443/236:49447"} data-name={"Rectangle 3464249"}></span>
  <span className={s.n294} data-layer={"236:49443/236:49448"} data-name={"+"}>
    <svg width="100%" height="100%" viewBox="0 0 9.67796 9.701" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 6.08329 L0 3.61771 L3.59467 3.61771 L3.59467 0 L6.08329 0 L6.08329 3.61771 L9.67796 3.61771 L9.67796 6.08329 L6.08329 6.08329 L6.08329 9.701 L3.59467 9.701 L3.59467 6.08329 L0 6.08329 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49449": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49449"} data-name={"Size=30, Tema=off, System=UO"}>
  <span className={s.n183} data-layer={"236:49449/236:49450"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n295} data-layer={"236:49449/236:49451"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n296} data-layer={"236:49449/236:49452"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n297} data-layer={"236:49449/236:49453"} data-name={"Rectangle 3464249"}></span>
  <span className={s.n298} data-layer={"236:49449/236:49454"} data-name={"+"}>
    <svg width="100%" height="100%" viewBox="0 0 6.45197 6.46733" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 4.05552 L0 2.41181 L2.39645 2.41181 L2.39645 0 L4.05552 0 L4.05552 2.41181 L6.45197 2.41181 L6.45197 4.05552 L4.05552 4.05552 L4.05552 6.46733 L2.39645 6.46733 L2.39645 4.05552 L0 4.05552 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49455": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49455"} data-name={"Size=24, Tema=off, System=UO"}>
  <span className={s.n189} data-layer={"236:49455/236:49456"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n299} data-layer={"236:49455/236:49457"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n300} data-layer={"236:49455/236:49458"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n301} data-layer={"236:49455/236:49459"} data-name={"Rectangle 3464249"}></span>
  <span className={s.n302} data-layer={"236:49455/236:49460"} data-name={"+"}>
    <svg width="100%" height="100%" viewBox="0 0 5.16158 5.17387" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.24442 L0 1.92945 L1.91716 1.92945 L1.91716 0 L3.24442 0 L3.24442 1.92945 L5.16158 1.92945 L5.16158 3.24442 L3.24442 3.24442 L3.24442 5.17387 L1.91716 5.17387 L1.91716 3.24442 L0 3.24442 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49461": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49461"} data-name={"Size=90, Tema=on, System=UO"}>
  <span className={s.n303} data-layer={"236:49461/236:49462"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n304} data-layer={"236:49461/236:49463"} data-name={"Rectangle 3464237"}></span>
  <span className={s.n305} data-layer={"236:49461/236:49464"} data-name={"Rectangle 3464239"}></span>
  <span className={s.n306} data-layer={"236:49461/236:49465"} data-name={"Rectangle 3464240"}></span>
  <span className={s.n307} data-layer={"236:49461/236:49466"} data-name={"Rectangle 3464241"}></span>
  <span className={s.n308} data-layer={"236:49461/236:49467"} data-name={"Rectangle 3464242"}></span>
  <span className={s.n309} data-layer={"236:49461/236:49468"} data-name={"Rectangle 3464243"}></span>
  <span className={s.n310} data-layer={"236:49461/236:49469"} data-name={"Rectangle 3464244"}></span>
  <span className={s.n311} data-layer={"236:49461/236:49470"} data-name={"Rectangle 3464245"}></span>
  <span className={s.n312} data-layer={"236:49461/236:49471"} data-name={"Rectangle 3464246"}></span>
  <span className={s.n313} data-layer={"236:49461/236:49472"} data-name={"+"}>
    <svg width="100%" height="100%" viewBox="0 0 11.20605 11.23273" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 7.04381 L0 4.18893 L4.16225 4.18893 L4.16225 0 L7.04381 0 L7.04381 4.18893 L11.2061 4.18893 L11.2061 7.04381 L7.04381 7.04381 L7.04381 11.2327 L4.16225 11.2327 L4.16225 7.04381 L0 7.04381 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
  </span>
</Root>);
case "236:49473": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49473"} data-name={"Size=60, Tema=on, System=UO"}>
  <span className={s.n314} data-layer={"236:49473/236:49474"} data-name={"Group 31"}>
    <span className={s.n315} data-layer={"236:49473/236:49474/236:49475"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n316} data-layer={"236:49473/236:49474/236:49476"} data-name={"Rectangle 3464242"}></span>
    <span className={s.n317} data-layer={"236:49473/236:49474/236:49477"} data-name={"Rectangle 3464243"}></span>
    <span className={s.n318} data-layer={"236:49473/236:49474/236:49478"} data-name={"Rectangle 3464245"}></span>
    <span className={s.n319} data-layer={"236:49473/236:49474/236:49479"} data-name={"Rectangle 3464246"}></span>
    <span className={s.n320} data-layer={"236:49473/236:49474/236:49480"} data-name={"+"}>
      <svg width="100%" height="100%" viewBox="0 0 11.35547 11.3825" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 7.13772 L0 4.24478 L4.21775 4.24478 L4.21775 0 L7.13772 0 L7.13772 4.24478 L11.3555 4.24478 L11.3555 7.13772 L7.13772 7.13772 L7.13772 11.3825 L4.21775 11.3825 L4.21775 7.13772 L0 7.13772 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:49481": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49481"} data-name={"Size=45, Tema=on, System=UO"}>
  <span className={s.n143} data-layer={"236:49481/236:49482"} data-name={"Group 31"}>
    <span className={s.n321} data-layer={"236:49481/236:49482/236:49483"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n322} data-layer={"236:49481/236:49482/236:49484"} data-name={"Rectangle 3464242"}></span>
    <span className={s.n323} data-layer={"236:49481/236:49482/236:49485"} data-name={"Rectangle 3464243"}></span>
    <span className={s.n324} data-layer={"236:49481/236:49482/236:49486"} data-name={"Rectangle 3464245"}></span>
    <span className={s.n325} data-layer={"236:49481/236:49482/236:49487"} data-name={"Rectangle 3464246"}></span>
    <span className={s.n326} data-layer={"236:49481/236:49482/236:49488"} data-name={"+"}>
      <svg width="100%" height="100%" viewBox="0 0 8.5166 8.53688" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 5.35329 L0 3.18359 L3.16331 3.18359 L3.16331 0 L5.35329 0 L5.35329 3.18359 L8.5166 3.18359 L8.5166 5.35329 L5.35329 5.35329 L5.35329 8.53688 L3.16331 8.53688 L3.16331 5.35329 L0 5.35329 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:49489": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49489"} data-name={"Size=30, Tema=on, System=UO"}>
  <span className={s.n150} data-layer={"236:49489/236:49490"} data-name={"Group 31"}>
    <span className={s.n327} data-layer={"236:49489/236:49490/236:49491"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n328} data-layer={"236:49489/236:49490/236:49492"} data-name={"Rectangle 3464242"}></span>
    <span className={s.n329} data-layer={"236:49489/236:49490/236:49493"} data-name={"Rectangle 3464243"}></span>
    <span className={s.n330} data-layer={"236:49489/236:49490/236:49494"} data-name={"Rectangle 3464245"}></span>
    <span className={s.n331} data-layer={"236:49489/236:49490/236:49495"} data-name={"Rectangle 3464246"}></span>
    <span className={s.n332} data-layer={"236:49489/236:49490/236:49496"} data-name={"+"}>
      <svg width="100%" height="100%" viewBox="0 0 5.67773 5.69125" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.56886 L0 2.12239 L2.10887 2.12239 L2.10887 0 L3.56886 0 L3.56886 2.12239 L5.67773 2.12239 L5.67773 3.56886 L3.56886 3.56886 L3.56886 5.69125 L2.10887 5.69125 L2.10887 3.56886 L0 3.56886 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:49497": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49497"} data-name={"Size=90, Tema=on, System=RZ"}>
  <span className={s.n333} data-layer={"236:49497/236:49498"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n334} data-layer={"236:49497/236:49499"} data-name={"Group 30"}>
    <span className={s.n335} data-layer={"236:49497/236:49499/236:49500"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n336} data-layer={"236:49497/236:49499/236:49501"} data-name={"Group 29"}>
      <span className={s.n337} data-layer={"236:49497/236:49499/236:49501/236:49502"} data-name={"Rectangle 3464238"}></span>
      <span className={s.n338} data-layer={"236:49497/236:49499/236:49501/236:49503"} data-name={"Rectangle 3464242"}></span>
      <span className={s.n339} data-layer={"236:49497/236:49499/236:49501/236:49504"} data-name={"Rectangle 3464239"}></span>
      <span className={s.n340} data-layer={"236:49497/236:49499/236:49501/236:49505"} data-name={"Rectangle 3464243"}></span>
      <span className={s.n341} data-layer={"236:49497/236:49499/236:49501/236:49506"} data-name={"Rectangle 3464240"}></span>
      <span className={s.n342} data-layer={"236:49497/236:49499/236:49501/236:49507"} data-name={"Rectangle 3464244"}></span>
    </span>
  </span>
  <span className={s.n343} data-layer={"236:49497/236:49508"} data-name={"Rectangle 3464236"}></span>
  <span className={s.n344} data-layer={"236:49497/236:49509"} data-name={"Vector 2989"}>
    <svg width="100%" height="100%" viewBox="0 0 15.03862 8.9694" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.94759 L6.05629 8.9694 L15.0386 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.996842384338379} strokeLinecap="round" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:49511": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49511"} data-name={"Size=60, Tema=on, System=RZ"}>
  <span className={s.n345} data-layer={"236:49511/236:49512"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n346} data-layer={"236:49511/236:49513"} data-name={"Group 30"}>
    <span className={s.n347} data-layer={"236:49511/236:49513/236:49514"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n348} data-layer={"236:49511/236:49513/236:49515"} data-name={"Group 29"}>
      <span className={s.n349} data-layer={"236:49511/236:49513/236:49515/236:49516"} data-name={"Rectangle 3464238"}></span>
      <span className={s.n350} data-layer={"236:49511/236:49513/236:49515/236:49517"} data-name={"Rectangle 3464242"}></span>
      <span className={s.n351} data-layer={"236:49511/236:49513/236:49515/236:49518"} data-name={"Rectangle 3464239"}></span>
      <span className={s.n352} data-layer={"236:49511/236:49513/236:49515/236:49519"} data-name={"Rectangle 3464243"}></span>
      <span className={s.n353} data-layer={"236:49511/236:49513/236:49515/236:49520"} data-name={"Rectangle 3464240"}></span>
      <span className={s.n354} data-layer={"236:49511/236:49513/236:49515/236:49521"} data-name={"Rectangle 3464244"}></span>
    </span>
  </span>
  <span className={s.n355} data-layer={"236:49511/236:49522"} data-name={"Group 3865"}>
    <span className={s.n356} data-layer={"236:49511/236:49522/236:49523"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n357} data-layer={"236:49511/236:49522/236:49524"} data-name={"Vector 2989"}>
      <svg width="100%" height="100%" viewBox="0 0 9.22402 5.50143" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.80792 L3.71466 5.50143 L9.22402 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.838130235671997} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49526": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49526"} data-name={"Size=45, Tema=on, System=RZ"}>
  <span className={s.n358} data-layer={"236:49526/236:49527"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n359} data-layer={"236:49526/236:49528"} data-name={"Group 30"}>
    <span className={s.n360} data-layer={"236:49526/236:49528/236:49529"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n361} data-layer={"236:49526/236:49528/236:49530"} data-name={"Group 29"}>
      <span className={s.n362} data-layer={"236:49526/236:49528/236:49530/236:49531"} data-name={"Rectangle 3464238"}></span>
      <span className={s.n363} data-layer={"236:49526/236:49528/236:49530/236:49532"} data-name={"Rectangle 3464242"}></span>
      <span className={s.n364} data-layer={"236:49526/236:49528/236:49530/236:49533"} data-name={"Rectangle 3464239"}></span>
      <span className={s.n365} data-layer={"236:49526/236:49528/236:49530/236:49534"} data-name={"Rectangle 3464243"}></span>
      <span className={s.n366} data-layer={"236:49526/236:49528/236:49530/236:49535"} data-name={"Rectangle 3464240"}></span>
      <span className={s.n367} data-layer={"236:49526/236:49528/236:49530/236:49536"} data-name={"Rectangle 3464244"}></span>
    </span>
  </span>
  <span className={s.n368} data-layer={"236:49526/236:49537"} data-name={"Group 3865"}>
    <span className={s.n369} data-layer={"236:49526/236:49537/236:49538"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n370} data-layer={"236:49526/236:49537/236:49539"} data-name={"Vector 2989"}>
      <svg width="100%" height="100%" viewBox="0 0 6.91802 4.12607" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.35594 L2.786 4.12607 L6.91802 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.3785977363586426} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49541": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49541"} data-name={"Size=30, Tema=on, System=RZ"}>
  <span className={s.n371} data-layer={"236:49541/236:49542"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n372} data-layer={"236:49541/236:49543"} data-name={"Group 30"}>
    <span className={s.n373} data-layer={"236:49541/236:49543/236:49544"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n374} data-layer={"236:49541/236:49543/236:49545"} data-name={"Group 29"}>
      <span className={s.n375} data-layer={"236:49541/236:49543/236:49545/236:49546"} data-name={"Rectangle 3464238"}></span>
      <span className={s.n376} data-layer={"236:49541/236:49543/236:49545/236:49547"} data-name={"Rectangle 3464242"}></span>
      <span className={s.n377} data-layer={"236:49541/236:49543/236:49545/236:49548"} data-name={"Rectangle 3464239"}></span>
      <span className={s.n378} data-layer={"236:49541/236:49543/236:49545/236:49549"} data-name={"Rectangle 3464243"}></span>
      <span className={s.n379} data-layer={"236:49541/236:49543/236:49545/236:49550"} data-name={"Rectangle 3464240"}></span>
      <span className={s.n380} data-layer={"236:49541/236:49543/236:49545/236:49551"} data-name={"Rectangle 3464244"}></span>
    </span>
  </span>
  <span className={s.n381} data-layer={"236:49541/236:49552"} data-name={"Group 3865"}>
    <span className={s.n382} data-layer={"236:49541/236:49552/236:49553"} data-name={"Rectangle 3464236"}></span>
    <span className={s.n383} data-layer={"236:49541/236:49552/236:49554"} data-name={"Vector 2989"}>
      <svg width="100%" height="100%" viewBox="0 0 4.61201 2.75072" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.90396 L1.85733 2.75072 L4.61201 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9190651774406433} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49556": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49556"} data-name={"Size=60, Tema=off, System=RZ"}>
  <span className={s.n171} data-layer={"236:49556/236:49557"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n384} data-layer={"236:49556/236:49558"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n385} data-layer={"236:49556/236:49559"} data-name={"Rectangle 3464256"}></span>
  <span className={s.n386} data-layer={"236:49556/236:49560"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n387} data-layer={"236:49556/236:49561"} data-name={"Rectangle 3464257"}></span>
</Root>);
case "236:49562": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49562"} data-name={"Size=45, Tema=off, System=RZ"}>
  <span className={s.n177} data-layer={"236:49562/236:49563"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n388} data-layer={"236:49562/236:49564"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n389} data-layer={"236:49562/236:49565"} data-name={"Rectangle 3464256"}></span>
  <span className={s.n390} data-layer={"236:49562/236:49566"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n391} data-layer={"236:49562/236:49567"} data-name={"Rectangle 3464257"}></span>
</Root>);
case "236:49568": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49568"} data-name={"Size=30, Tema=off, System=RZ"}>
  <span className={s.n183} data-layer={"236:49568/236:49569"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n392} data-layer={"236:49568/236:49570"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n393} data-layer={"236:49568/236:49571"} data-name={"Rectangle 3464256"}></span>
  <span className={s.n394} data-layer={"236:49568/236:49572"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n395} data-layer={"236:49568/236:49573"} data-name={"Rectangle 3464257"}></span>
</Root>);
case "236:49574": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49574"} data-name={"Size=24, Tema=off, System=RZ"}>
  <span className={s.n189} data-layer={"236:49574/236:49575"} data-name={"Rectangle 3464255"}></span>
  <span className={s.n396} data-layer={"236:49574/236:49576"} data-name={"Rectangle 3464247"}></span>
  <span className={s.n397} data-layer={"236:49574/236:49577"} data-name={"Rectangle 3464256"}></span>
  <span className={s.n398} data-layer={"236:49574/236:49578"} data-name={"Rectangle 3464258"}></span>
  <span className={s.n399} data-layer={"236:49574/236:49579"} data-name={"Rectangle 3464257"}></span>
</Root>);
case "236:49580": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49580"} data-name={"Size=90, Tema=on, System=O"}>
  <span className={s.n400} data-layer={"236:49580/236:49581"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n401} data-layer={"236:49580/236:49582"} data-name={"Group 24"}>
    <span className={s.n402} data-layer={"236:49580/236:49582/236:49584"} data-name={"Group 23"}>
      <span className={s.n403} data-layer={"236:49580/236:49582/236:49584/236:49585"} data-name={"Rectangle 3464236"}></span>
      <span className={s.n404} data-layer={"236:49580/236:49582/236:49584/236:49586"} data-name={"Group 22"}>
        <span className={s.n405} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49587"} data-name={"Rectangle 3464237"}></span>
        <span className={s.n406} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49588"} data-name={"Rectangle 3464238"}></span>
        <span className={s.n407} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49589"} data-name={"Rectangle 3464242"}></span>
        <span className={s.n408} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49590"} data-name={"Rectangle 3464240"}></span>
        <span className={s.n409} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49591"} data-name={"Rectangle 3464244"}></span>
        <span className={s.n410} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49592"} data-name={"Rectangle 3464241"}></span>
        <span className={s.n411} data-layer={"236:49580/236:49582/236:49584/236:49586/236:49593"} data-name={"Rectangle 3464245"}></span>
      </span>
    </span>
    <span className={s.n412} data-layer={"236:49580/236:49582/236:49594"} data-name={"Frame 3536"}>
      <span className={s.n413} data-layer={"236:49580/236:49582/236:49594/236:49595"} data-name={"Rectangle 3464247"}></span>
      <span className={s.n414} data-layer={"236:49580/236:49582/236:49594/236:49596"} data-name={"Frame 24"}>
        <span className={s.n415} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49597"} data-name={"Frame 3533"}>
          <span className={s.n416} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49597/236:49598"} data-name={"Ellipse 50"}></span>
          <span className={s.n417} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49597/236:49599"} data-name={"Ellipse 51"}></span>
          <span className={s.n418} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49597/236:49600"} data-name={"Ellipse 52"}></span>
        </span>
        <span className={s.n419} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49605"} data-name={"Frame 3535"}>
          <span className={s.n420} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49605/236:49606"} data-name={"Rectangle 3464248"}></span>
          <span className={s.n421} data-layer={"236:49580/236:49582/236:49594/236:49596/236:49605/236:49607"} data-name={"Ellipse 52"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:49608": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49608"} data-name={"Size=60, Tema=on, System=O"}>
  <span className={s.n422} data-layer={"236:49608/236:49609"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n423} data-layer={"236:49608/236:49610"} data-name={"Group 24"}>
    <span className={s.n424} data-layer={"236:49608/236:49610/236:49612"} data-name={"Group 23"}>
      <span className={s.n425} data-layer={"236:49608/236:49610/236:49612/236:49613"} data-name={"Rectangle 3464236"}></span>
      <span className={s.n426} data-layer={"236:49608/236:49610/236:49612/236:49614"} data-name={"Group 22"}>
        <span className={s.n427} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49615"} data-name={"Rectangle 3464237"}></span>
        <span className={s.n428} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49616"} data-name={"Rectangle 3464238"}></span>
        <span className={s.n429} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49617"} data-name={"Rectangle 3464242"}></span>
        <span className={s.n430} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49618"} data-name={"Rectangle 3464240"}></span>
        <span className={s.n431} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49619"} data-name={"Rectangle 3464244"}></span>
        <span className={s.n432} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49620"} data-name={"Rectangle 3464241"}></span>
        <span className={s.n433} data-layer={"236:49608/236:49610/236:49612/236:49614/236:49621"} data-name={"Rectangle 3464245"}></span>
      </span>
    </span>
    <span className={s.n434} data-layer={"236:49608/236:49610/236:49622"} data-name={"Frame 3536"}>
      <span className={s.n435} data-layer={"236:49608/236:49610/236:49622/236:49623"} data-name={"Rectangle 3464247"}></span>
      <span className={s.n436} data-layer={"236:49608/236:49610/236:49622/236:49624"} data-name={"Frame 24"}>
        <span className={s.n437} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49625"} data-name={"Frame 3533"}>
          <span className={s.n438} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49625/236:49626"} data-name={"Ellipse 50"}></span>
          <span className={s.n439} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49625/236:49627"} data-name={"Ellipse 51"}></span>
          <span className={s.n440} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49625/236:49628"} data-name={"Ellipse 52"}></span>
        </span>
        <span className={s.n441} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49633"} data-name={"Frame 3535"}>
          <span className={s.n442} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49633/236:49634"} data-name={"Rectangle 3464248"}></span>
          <span className={s.n443} data-layer={"236:49608/236:49610/236:49622/236:49624/236:49633/236:49635"} data-name={"Ellipse 52"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:49636": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49636"} data-name={"Size=45, Tema=on, System=O"}>
  <span className={s.n444} data-layer={"236:49636/236:49637"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n445} data-layer={"236:49636/236:49638"} data-name={"Group 24"}>
    <span className={s.n446} data-layer={"236:49636/236:49638/236:49640"} data-name={"Group 23"}>
      <span className={s.n447} data-layer={"236:49636/236:49638/236:49640/236:49641"} data-name={"Rectangle 3464236"}></span>
      <span className={s.n448} data-layer={"236:49636/236:49638/236:49640/236:49642"} data-name={"Group 22"}>
        <span className={s.n449} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49643"} data-name={"Rectangle 3464237"}></span>
        <span className={s.n450} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49644"} data-name={"Rectangle 3464238"}></span>
        <span className={s.n451} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49645"} data-name={"Rectangle 3464242"}></span>
        <span className={s.n452} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49646"} data-name={"Rectangle 3464240"}></span>
        <span className={s.n453} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49647"} data-name={"Rectangle 3464244"}></span>
        <span className={s.n454} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49648"} data-name={"Rectangle 3464241"}></span>
        <span className={s.n455} data-layer={"236:49636/236:49638/236:49640/236:49642/236:49649"} data-name={"Rectangle 3464245"}></span>
      </span>
    </span>
    <span className={s.n456} data-layer={"236:49636/236:49638/236:49650"} data-name={"Frame 3536"}>
      <span className={s.n457} data-layer={"236:49636/236:49638/236:49650/236:49651"} data-name={"Rectangle 3464247"}></span>
      <span className={s.n458} data-layer={"236:49636/236:49638/236:49650/236:49652"} data-name={"Frame 24"}>
        <span className={s.n459} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49653"} data-name={"Frame 3533"}>
          <span className={s.n460} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49653/236:49654"} data-name={"Ellipse 50"}></span>
          <span className={s.n461} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49653/236:49655"} data-name={"Ellipse 51"}></span>
          <span className={s.n462} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49653/236:49656"} data-name={"Ellipse 52"}></span>
        </span>
        <span className={s.n463} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49661"} data-name={"Frame 3535"}>
          <span className={s.n464} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49661/236:49662"} data-name={"Rectangle 3464248"}></span>
          <span className={s.n465} data-layer={"236:49636/236:49638/236:49650/236:49652/236:49661/236:49663"} data-name={"Ellipse 52"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:49664": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49664"} data-name={"Size=30, Tema=on, System=O"}>
  <span className={s.n466} data-layer={"236:49664/236:49665"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n467} data-layer={"236:49664/236:49666"} data-name={"Group 24"}>
    <span className={s.n468} data-layer={"236:49664/236:49666/236:49668"} data-name={"Group 23"}>
      <span className={s.n469} data-layer={"236:49664/236:49666/236:49668/236:49669"} data-name={"Rectangle 3464236"}></span>
      <span className={s.n470} data-layer={"236:49664/236:49666/236:49668/236:49670"} data-name={"Group 22"}>
        <span className={s.n471} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49671"} data-name={"Rectangle 3464237"}></span>
        <span className={s.n472} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49672"} data-name={"Rectangle 3464238"}></span>
        <span className={s.n473} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49673"} data-name={"Rectangle 3464242"}></span>
        <span className={s.n474} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49674"} data-name={"Rectangle 3464240"}></span>
        <span className={s.n475} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49675"} data-name={"Rectangle 3464244"}></span>
        <span className={s.n476} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49676"} data-name={"Rectangle 3464241"}></span>
        <span className={s.n477} data-layer={"236:49664/236:49666/236:49668/236:49670/236:49677"} data-name={"Rectangle 3464245"}></span>
      </span>
    </span>
    <span className={s.n478} data-layer={"236:49664/236:49666/236:49678"} data-name={"Frame 3536"}>
      <span className={s.n479} data-layer={"236:49664/236:49666/236:49678/236:49679"} data-name={"Rectangle 3464247"}></span>
      <span className={s.n480} data-layer={"236:49664/236:49666/236:49678/236:49680"} data-name={"Frame 24"}>
        <span className={s.n481} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49681"} data-name={"Frame 3533"}>
          <span className={s.n482} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49681/236:49682"} data-name={"Ellipse 50"}></span>
          <span className={s.n483} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49681/236:49683"} data-name={"Ellipse 51"}></span>
          <span className={s.n484} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49681/236:49684"} data-name={"Ellipse 52"}></span>
        </span>
        <span className={s.n485} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49689"} data-name={"Frame 3535"}>
          <span className={s.n486} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49689/236:49690"} data-name={"Rectangle 3464248"}></span>
          <span className={s.n487} data-layer={"236:49664/236:49666/236:49678/236:49680/236:49689/236:49691"} data-name={"Ellipse 52"}></span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:49692": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49692"} data-name={"Size=60, Tema=off, System=O"}>
  <span className={s.n488} data-layer={"236:49692/236:49693"} data-name={"Line 17"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={6.478397846221924} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n489} data-layer={"236:49692/236:49694"} data-name={"Line 16"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={6.478397846221924} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n490} data-layer={"236:49692/236:49695"} data-name={"Rectangle 3464236"}>
    <svg width="100%" height="100%" viewBox="0 0 34.53947 40.74578" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L34.5395 0 L34.5395 10.3729 M0 40.7458 L0 0 M13.2697 40.7458 L0 40.7458"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={6.650000095367432} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n491} data-layer={"236:49692/236:49696"} data-name={"Rectangle 3464322"}></span>
  <span className={s.n492} data-layer={"236:49692/236:49697"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n493} data-layer={"236:49692/236:49698"} data-name={"Ellipse 50"}></span>
  <span className={s.n494} data-layer={"236:49692/236:49699"} data-name={"Ellipse 52"}></span>
  <span className={s.n495} data-layer={"236:49692/236:49700"} data-name={"Ellipse 51"}></span>
  <span className={s.n496} data-layer={"236:49692/236:49701"} data-name={"Line 15"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={6.478397846221924} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n171} data-layer={"236:49692/236:49702"} data-name={"Rectangle 3464323"}></span>
</Root>);
case "236:49703": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49703"} data-name={"Size=45, Tema=off, System=O"}>
  <span className={s.n497} data-layer={"236:49703/236:49704"} data-name={"Line 17"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={4.858798503875732} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n498} data-layer={"236:49703/236:49705"} data-name={"Line 16"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={4.858798503875732} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n499} data-layer={"236:49703/236:49706"} data-name={"Rectangle 3464236"}>
    <svg width="100%" height="100%" viewBox="0 0 25.90461 30.55934" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L25.9046 0 L25.9046 7.77967 M0 30.5593 L0 0 M9.9523 30.5593 L0 30.5593"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.987500190734863} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n500} data-layer={"236:49703/236:49707"} data-name={"Rectangle 3464322"}></span>
  <span className={s.n501} data-layer={"236:49703/236:49708"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n502} data-layer={"236:49703/236:49709"} data-name={"Ellipse 50"}></span>
  <span className={s.n503} data-layer={"236:49703/236:49710"} data-name={"Ellipse 52"}></span>
  <span className={s.n504} data-layer={"236:49703/236:49711"} data-name={"Ellipse 51"}></span>
  <span className={s.n505} data-layer={"236:49703/236:49712"} data-name={"Line 15"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={4.858798503875732} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n177} data-layer={"236:49703/236:49713"} data-name={"Rectangle 3464323"}></span>
</Root>);
case "236:49714": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49714"} data-name={"Size=30, Tema=off, System=O"}>
  <span className={s.n506} data-layer={"236:49714/236:49715"} data-name={"Line 17"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={3.239198923110962} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n507} data-layer={"236:49714/236:49716"} data-name={"Line 16"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={3.239198923110962} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n508} data-layer={"236:49714/236:49717"} data-name={"Rectangle 3464236"}>
    <svg width="100%" height="100%" viewBox="0 0 17.26974 20.37289" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L17.2697 0 L17.2697 5.18645 M0 20.3729 L0 0 M6.63487 20.3729 L0 20.3729"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.325000286102295} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n509} data-layer={"236:49714/236:49718"} data-name={"Rectangle 3464322"}></span>
  <span className={s.n510} data-layer={"236:49714/236:49719"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n511} data-layer={"236:49714/236:49720"} data-name={"Ellipse 50"}></span>
  <span className={s.n512} data-layer={"236:49714/236:49721"} data-name={"Ellipse 52"}></span>
  <span className={s.n513} data-layer={"236:49714/236:49722"} data-name={"Ellipse 51"}></span>
  <span className={s.n514} data-layer={"236:49714/236:49723"} data-name={"Line 15"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={3.239198923110962} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n183} data-layer={"236:49714/236:49724"} data-name={"Rectangle 3464323"}></span>
</Root>);
case "236:49725": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49725"} data-name={"Size=24, Tema=off, System=O"}>
  <span className={s.n515} data-layer={"236:49725/236:49726"} data-name={"Line 17"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={2.5913591384887695} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n516} data-layer={"236:49725/236:49727"} data-name={"Line 16"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={2.5913591384887695} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n517} data-layer={"236:49725/236:49728"} data-name={"Rectangle 3464236"}>
    <svg width="100%" height="100%" viewBox="0 0 13.81579 16.29831" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L13.8158 0 L13.8158 4.14916 M0 16.2983 L0 0 M5.3079 16.2983 L0 16.2983"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.6600003242492676} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n518} data-layer={"236:49725/236:49729"} data-name={"Rectangle 3464322"}></span>
  <span className={s.n519} data-layer={"236:49725/236:49730"} data-name={"Rectangle 3464248"}></span>
  <span className={s.n520} data-layer={"236:49725/236:49731"} data-name={"Ellipse 50"}></span>
  <span className={s.n521} data-layer={"236:49725/236:49732"} data-name={"Ellipse 52"}></span>
  <span className={s.n522} data-layer={"236:49725/236:49733"} data-name={"Ellipse 51"}></span>
  <span className={s.n523} data-layer={"236:49725/236:49734"} data-name={"Line 15"}>
    <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={2.5913591384887695} stroke={"rgba(92,84,111,1)"}/></svg>
  </span>
  <span className={s.n189} data-layer={"236:49725/236:49735"} data-name={"Rectangle 3464323"}></span>
</Root>);
case "236:49736": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49736"} data-name={"Size=90, Tema=on, System=KOS"}>
  <span className={s.n524} data-layer={"236:49736/236:49737"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n525} data-layer={"236:49736/236:49738"} data-name={"logo/KOS/icon/core"}>
    <span className={s.n526} data-layer={"236:49736/236:49738/236:49739"} data-name={"Group 3862"}>
      <span className={s.n527} data-layer={"236:49736/236:49738/236:49739/236:49740"} data-name={"Rectangle 3464178"}></span>
      <span className={s.n528} data-layer={"236:49736/236:49738/236:49739/236:49741"} data-name={"Ellipse 3157"}>
        <svg width="100%" height="100%" viewBox="0 0 66.94549 66.94549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M33.4727 66.9455 A33.47274398803711 33.47274398803711 0 1 1 66.9455 33.4727 L48.5815 33.4727 A15.108750097321945 15.108750097321945 0 1 0 33.4727 48.5815 Z"} fill={"rgba(50,140,131,1)"} fillRule="evenodd"/></svg>
      </span>
      <span className={s.n528} data-layer={"236:49736/236:49738/236:49739/236:49742"} data-name={"Ellipse 3160"}>
        <svg width="100%" height="100%" viewBox="0 0 66.94549 66.94549" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g595_netfill0`}><stop offset={0.33173078298568726} stopColor={"rgba(37,99,125,1)"}/><stop offset={0.5922114849090576} stopColor={"rgba(43,201,238,1)"}/><stop offset={0.9309722185134888} stopColor={"rgba(38,105,117,1)"}/></radialGradient></defs><path d={"M33.4727 66.9455 C26.8525 66.9455 20.3808 64.9823 14.8763 61.3043 C9.37172 57.6263 5.08143 52.3985 2.54796 46.2822 C0.0144876 40.1659 -0.648384 33.4356 0.64317 26.9425 C1.93472 20.4495 5.12269 14.4852 9.80394 9.80394 C14.4852 5.12269 20.4495 1.93472 26.9425 0.643169 C33.4356 -0.648384 40.1659 0.014489 46.2822 2.54796 C52.3986 5.08144 57.6263 9.37172 61.3043 14.8763 C64.9823 20.3809 66.9455 26.8525 66.9455 33.4728 L48.5815 33.4727 C48.5815 30.4845 47.6954 27.5634 46.0352 25.0788 C44.375 22.5942 42.0154 20.6576 39.2546 19.5141 C36.4939 18.3705 33.456 18.0713 30.5252 18.6543 C27.5944 19.2373 24.9022 20.6762 22.7892 22.7892 C20.6762 24.9022 19.2373 27.5944 18.6543 30.5252 C18.0713 33.456 18.3705 36.4938 19.5141 39.2546 C20.6576 42.0154 22.5942 44.375 25.0788 46.0352 C27.5634 47.6954 30.4845 48.5815 33.4727 48.5815 L33.4727 66.9455 Z"} fill={`url(#${uid}-g595_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n529} data-layer={"236:49736/236:49738/236:49739/236:49743"} data-name={"Rectangle 3464180"}>
        <svg width="100%" height="100%" viewBox="0 0 23.5903 16.25651" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.988197 0 L11.1313 0 L23.5903 12.5751 L23.5903 16.2565 L0 16.2565 L0.988197 0 Z"} fill={"rgba(0,0,0,0.25)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n530} data-layer={"236:49736/236:49738/236:49739/236:49744"} data-name={"Rectangle 3464177"}>
        <svg width="100%" height="100%" viewBox="0 0 33.47226 27.12667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L20.0251 0 L33.4723 13.5633 L20.055 27.1267 L0 27.1267 L0 0 Z"} fill={"rgba(38,105,117,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n531} data-layer={"236:49736/236:49738/236:49739/236:49745"} data-name={"Rectangle 3464173"}>
        <svg width="100%" height="100%" viewBox="0 0 35.53389 30.24782" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g598_netfill0`}><stop offset={0} stopColor={"rgba(186,235,253,1)"}/><stop offset={1} stopColor={"rgba(0,187,255,1)"}/></radialGradient></defs><path d={"M0 0 L30.2478 0 L30.2478 15.1239 L30.2478 25.8799 L35.5339 30.2478 L30.2478 30.2478 L0 30.2478 L0 0 Z"} fill={`url(#${uid}-g598_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49746": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49746"} data-name={"Size=60, Tema=on, System=KOS"}>
  <span className={s.n532} data-layer={"236:49746/236:49747"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n533} data-layer={"236:49746/236:49748"} data-name={"logo/KOS/icon/core"}>
    <span className={s.n534} data-layer={"236:49746/236:49748/236:49749"} data-name={"Group 3862"}>
      <span className={s.n535} data-layer={"236:49746/236:49748/236:49749/236:49750"} data-name={"Rectangle 3464178"}></span>
      <span className={s.n536} data-layer={"236:49746/236:49748/236:49749/236:49751"} data-name={"Ellipse 3157"}>
        <svg width="100%" height="100%" viewBox="0 0 44.63033 44.63033" overflow="visible" aria-hidden="true" focusable="false"><path d={"M22.3152 44.6303 A22.315162658691406 22.315162658691406 0 1 1 44.6303 22.3152 L32.3877 22.3152 A10.072500064881297 10.072500064881297 0 1 0 22.3152 32.3877 Z"} fill={"rgba(50,140,131,1)"} fillRule="evenodd"/></svg>
      </span>
      <span className={s.n536} data-layer={"236:49746/236:49748/236:49749/236:49752"} data-name={"Ellipse 3160"}>
        <svg width="100%" height="100%" viewBox="0 0 44.63033 44.63033" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g605_netfill0`}><stop offset={0.33173078298568726} stopColor={"rgba(37,99,125,1)"}/><stop offset={0.5922114849090576} stopColor={"rgba(43,201,238,1)"}/><stop offset={0.9309722185134888} stopColor={"rgba(38,105,117,1)"}/></radialGradient></defs><path d={"M22.3152 44.6303 C17.9016 44.6303 13.5872 43.3216 9.91752 40.8695 C6.24781 38.4175 3.38762 34.9324 1.69864 30.8548 C0.00965837 26.7772 -0.432256 22.2904 0.42878 17.9617 C1.28982 13.633 3.41513 9.65679 6.53596 6.53596 C9.65679 3.41513 13.633 1.28981 17.9617 0.428779 C22.2904 -0.432256 26.7772 0.00965931 30.8548 1.69864 C34.9324 3.38762 38.4175 6.24782 40.8695 9.91753 C43.3216 13.5872 44.6303 17.9016 44.6303 22.3152 L32.3877 22.3152 C32.3877 20.323 31.7969 18.3756 30.6901 16.7192 C29.5834 15.0628 28.0103 13.7718 26.1697 13.0094 C24.3292 12.247 22.304 12.0476 20.3501 12.4362 C18.3962 12.8249 16.6015 13.7842 15.1928 15.1928 C13.7842 16.6015 12.8249 18.3962 12.4362 20.3501 C12.0476 22.304 12.247 24.3292 13.0094 26.1697 C13.7717 28.0103 15.0628 29.5834 16.7192 30.6901 C18.3756 31.7969 20.323 32.3877 22.3152 32.3877 L22.3152 44.6303 Z"} fill={`url(#${uid}-g605_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n537} data-layer={"236:49746/236:49748/236:49749/236:49753"} data-name={"Rectangle 3464180"}>
        <svg width="100%" height="100%" viewBox="0 0 15.72686 10.83768" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.658798 0 L7.4209 0 L15.7269 8.38343 L15.7269 10.8377 L0 10.8377 L0.658798 0 Z"} fill={"rgba(0,0,0,0.25)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n538} data-layer={"236:49746/236:49748/236:49749/236:49754"} data-name={"Rectangle 3464177"}>
        <svg width="100%" height="100%" viewBox="0 0 22.31484 18.08445" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L13.3501 0 L22.3148 9.04222 L13.37 18.0844 L0 18.0844 L0 0 Z"} fill={"rgba(38,105,117,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n539} data-layer={"236:49746/236:49748/236:49749/236:49755"} data-name={"Rectangle 3464173"}>
        <svg width="100%" height="100%" viewBox="0 0 23.68926 20.16521" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g608_netfill0`}><stop offset={0} stopColor={"rgba(186,235,253,1)"}/><stop offset={1} stopColor={"rgba(0,187,255,1)"}/></radialGradient></defs><path d={"M0 0 L20.1652 0 L20.1652 10.0826 L20.1652 17.2533 L23.6893 20.1652 L20.1652 20.1652 L0 20.1652 L0 0 Z"} fill={`url(#${uid}-g608_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49756": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49756"} data-name={"Size=45, Tema=on, System=KOS"}>
  <span className={s.n540} data-layer={"236:49756/236:49757"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n541} data-layer={"236:49756/236:49758"} data-name={"logo/KOS/icon/core"}>
    <span className={s.n542} data-layer={"236:49756/236:49758/236:49759"} data-name={"Group 3862"}>
      <span className={s.n543} data-layer={"236:49756/236:49758/236:49759/236:49760"} data-name={"Rectangle 3464178"}></span>
      <span className={s.n544} data-layer={"236:49756/236:49758/236:49759/236:49761"} data-name={"Ellipse 3157"}>
        <svg width="100%" height="100%" viewBox="0 0 33.47274 33.47274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.7364 33.4727 A16.736371994018555 16.736371994018555 0 1 1 33.4727 16.7364 L24.2907 16.7364 A7.554375048660972 7.554375048660972 0 1 0 16.7364 24.2907 Z"} fill={"rgba(50,140,131,1)"} fillRule="evenodd"/></svg>
      </span>
      <span className={s.n544} data-layer={"236:49756/236:49758/236:49759/236:49762"} data-name={"Ellipse 3160"}>
        <svg width="100%" height="100%" viewBox="0 0 33.47274 33.47274" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g615_netfill0`}><stop offset={0.33173078298568726} stopColor={"rgba(37,99,125,1)"}/><stop offset={0.5922114849090576} stopColor={"rgba(43,201,238,1)"}/><stop offset={0.9309722185134888} stopColor={"rgba(38,105,117,1)"}/></radialGradient></defs><path d={"M16.7364 33.4727 C13.4262 33.4727 10.1904 32.4912 7.43814 30.6522 C4.68586 28.8131 2.54072 26.1993 1.27398 23.1411 C0.00724378 20.0829 -0.324192 16.7178 0.321585 13.4713 C0.967362 10.2247 2.56135 7.24259 4.90197 4.90197 C7.2426 2.56135 10.2247 0.967361 13.4713 0.321584 C16.7178 -0.324192 20.0829 0.00724448 23.1411 1.27398 C26.1993 2.54072 28.8131 4.68586 30.6522 7.43814 C32.4912 10.1904 33.4727 13.4262 33.4727 16.7364 L24.2907 16.7364 C24.2907 15.2423 23.8477 13.7817 23.0176 12.5394 C22.1875 11.2971 21.0077 10.3288 19.6273 9.75704 C18.2469 9.18527 16.728 9.03567 15.2626 9.32715 C13.7972 9.61864 12.4511 10.3381 11.3946 11.3946 C10.3381 12.4511 9.61864 13.7972 9.32715 15.2626 C9.03567 16.728 9.18527 18.2469 9.75704 19.6273 C10.3288 21.0077 11.2971 22.1875 12.5394 23.0176 C13.7817 23.8477 15.2423 24.2907 16.7364 24.2907 L16.7364 33.4727 Z"} fill={`url(#${uid}-g615_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n545} data-layer={"236:49756/236:49758/236:49759/236:49763"} data-name={"Rectangle 3464180"}>
        <svg width="100%" height="100%" viewBox="0 0 11.79515 8.12826" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.494098 0 L5.56567 0 L11.7951 6.28757 L11.7951 8.12826 L0 8.12826 L0.494098 0 Z"} fill={"rgba(0,0,0,0.25)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n546} data-layer={"236:49756/236:49758/236:49759/236:49764"} data-name={"Rectangle 3464177"}>
        <svg width="100%" height="100%" viewBox="0 0 16.73613 13.56334" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L10.0126 0 L16.7361 6.78167 L10.0275 13.5633 L0 13.5633 L0 0 Z"} fill={"rgba(38,105,117,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n547} data-layer={"236:49756/236:49758/236:49759/236:49765"} data-name={"Rectangle 3464173"}>
        <svg width="100%" height="100%" viewBox="0 0 17.76694 15.12391" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g618_netfill0`}><stop offset={0} stopColor={"rgba(186,235,253,1)"}/><stop offset={1} stopColor={"rgba(0,187,255,1)"}/></radialGradient></defs><path d={"M0 0 L15.1239 0 L15.1239 7.56196 L15.1239 12.94 L17.7669 15.1239 L15.1239 15.1239 L0 15.1239 L0 0 Z"} fill={`url(#${uid}-g618_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49766": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49766"} data-name={"Size=30, Tema=on, System=KOS"}>
  <span className={s.n548} data-layer={"236:49766/236:49767"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n549} data-layer={"236:49766/236:49768"} data-name={"logo/KOS/icon/core"}>
    <span className={s.n550} data-layer={"236:49766/236:49768/236:49769"} data-name={"Group 3862"}>
      <span className={s.n551} data-layer={"236:49766/236:49768/236:49769/236:49770"} data-name={"Rectangle 3464178"}></span>
      <span className={s.n552} data-layer={"236:49766/236:49768/236:49769/236:49771"} data-name={"Ellipse 3157"}>
        <svg width="100%" height="100%" viewBox="0 0 22.31516 22.31516" overflow="visible" aria-hidden="true" focusable="false"><path d={"M11.1576 22.3152 A11.157581329345703 11.157581329345703 0 1 1 22.3152 11.1576 L16.1938 11.1576 A5.036250032440648 5.036250032440648 0 1 0 11.1576 16.1938 Z"} fill={"rgba(50,140,131,1)"} fillRule="evenodd"/></svg>
      </span>
      <span className={s.n552} data-layer={"236:49766/236:49768/236:49769/236:49772"} data-name={"Ellipse 3160"}>
        <svg width="100%" height="100%" viewBox="0 0 22.31516 22.31516" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g625_netfill0`}><stop offset={0.33173078298568726} stopColor={"rgba(37,99,125,1)"}/><stop offset={0.5922114849090576} stopColor={"rgba(43,201,238,1)"}/><stop offset={0.9309722185134888} stopColor={"rgba(38,105,117,1)"}/></radialGradient></defs><path d={"M11.1576 22.3152 C8.95082 22.3152 6.79362 21.6608 4.95876 20.4348 C3.12391 19.2088 1.69381 17.4662 0.84932 15.4274 C0.00482918 13.3886 -0.216128 11.1452 0.21439 8.98084 C0.644908 6.81649 1.70756 4.82839 3.26798 3.26798 C4.8284 1.70756 6.81649 0.644907 8.98085 0.21439 C11.1452 -0.216128 13.3886 0.00482965 15.4274 0.849321 C17.4662 1.69381 19.2088 3.12391 20.4348 4.95876 C21.6608 6.79362 22.3152 8.95082 22.3152 11.1576 L16.1938 11.1576 C16.1938 10.1615 15.8985 9.1878 15.3451 8.35959 C14.7917 7.53138 14.0051 6.88588 13.0849 6.50469 C12.1646 6.12351 11.152 6.02378 10.1751 6.2181 C9.19812 6.41243 8.30075 6.89208 7.59642 7.59641 C6.89208 8.30075 6.41243 9.19812 6.2181 10.1751 C6.02378 11.152 6.12351 12.1646 6.50469 13.0849 C6.88587 14.0051 7.53138 14.7917 8.35959 15.3451 C9.1878 15.8985 10.1615 16.1938 11.1576 16.1938 L11.1576 22.3152 Z"} fill={`url(#${uid}-g625_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n553} data-layer={"236:49766/236:49768/236:49769/236:49773"} data-name={"Rectangle 3464180"}>
        <svg width="100%" height="100%" viewBox="0 0 7.86343 5.41884" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.329399 0 L3.71045 0 L7.86343 4.19171 L7.86343 5.41884 L0 5.41884 L0.329399 0 Z"} fill={"rgba(0,0,0,0.25)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n554} data-layer={"236:49766/236:49768/236:49769/236:49774"} data-name={"Rectangle 3464177"}>
        <svg width="100%" height="100%" viewBox="0 0 11.15742 9.04222" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.67504 0 L11.1574 4.52111 L6.68499 9.04222 L0 9.04222 L0 0 Z"} fill={"rgba(38,105,117,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n555} data-layer={"236:49766/236:49768/236:49769/236:49775"} data-name={"Rectangle 3464173"}>
        <svg width="100%" height="100%" viewBox="0 0 11.84463 10.08261" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g628_netfill0`}><stop offset={0} stopColor={"rgba(186,235,253,1)"}/><stop offset={1} stopColor={"rgba(0,187,255,1)"}/></radialGradient></defs><path d={"M0 0 L10.0826 0 L10.0826 5.0413 L10.0826 8.62664 L11.8446 10.0826 L10.0826 10.0826 L0 10.0826 L0 0 Z"} fill={`url(#${uid}-g628_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:49776": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49776"} data-name={"Size=60, Tema=off, System=KOS"}>
  <span className={s.n556} data-layer={"236:49776/236:49777"} data-name={"Group 6945"}>
    <span className={s.n536} data-layer={"236:49776/236:49777/236:49778"} data-name={"Ellipse 3160"}>
      <svg width="100%" height="100%" viewBox="0 0 44.63033 44.63033" overflow="visible" aria-hidden="true" focusable="false"><path d={"M22.3152 44.6303 C17.9016 44.6303 13.5872 43.3216 9.91752 40.8695 C6.24781 38.4175 3.38762 34.9324 1.69864 30.8548 C0.00965846 26.7772 -0.432256 22.2904 0.42878 17.9617 C1.28982 13.633 3.41513 9.65679 6.53596 6.53596 C9.65679 3.41513 13.633 1.28981 17.9617 0.428779 C22.2904 -0.432256 26.7772 0.00965929 30.8548 1.69864 C34.9324 3.38762 38.4175 6.24782 40.8695 9.91753 C43.3216 13.5872 44.6303 17.9016 44.6303 22.3152 L44.6303 32.5881"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n557} data-layer={"236:49776/236:49777/236:49779"} data-name={"Rectangle 3464177"}>
      <svg width="100%" height="100%" viewBox="0 0 24.1334 23.07468" overflow="visible" aria-hidden="true" focusable="false"><path d={"M13.37 23.0747 L0 23.0747 M13.3501 0 L24.1334 13.1004 L13.37 23.0747 M9.67504 0 L13.3501 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n558} data-layer={"236:49776/236:49777/236:49780"} data-name={"Rectangle 3464173"}>
      <svg width="100%" height="100%" viewBox="0 0 22.38551 19.59668" overflow="visible" aria-hidden="true" focusable="false"><path d={"M20.5533 17.5573 L22.3855 19.5967 L9.79834 19.5967 C4.38687 19.5967 0 15.2098 0 9.79834 C0 4.38687 4.38687 0 9.79834 0 C15.2098 0 19.5967 4.38687 19.5967 9.79834 L19.5967 12.6621 L19.5967 15.5259 C19.5967 16.3118 19.9475 17.0567 20.5533 17.5573 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:49776/236:49781"} data-name={"Rectangle 3464342"}></span>
</Root>);
case "236:49782": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49782"} data-name={"Size=45, Tema=off, System=KOS"}>
  <span className={s.n559} data-layer={"236:49782/236:49783"} data-name={"Group 6945"}>
    <span className={s.n560} data-layer={"236:49782/236:49783/236:49784"} data-name={"Ellipse 3160"}>
      <svg width="100%" height="100%" viewBox="0 0 33.47274 33.47274" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.7364 33.4727 C13.4262 33.4727 10.1904 32.4912 7.43814 30.6522 C4.68586 28.8131 2.54072 26.1993 1.27398 23.1411 C0.00724384 20.0829 -0.324192 16.7178 0.321585 13.4713 C0.967362 10.2247 2.56135 7.24259 4.90197 4.90197 C7.2426 2.56135 10.2247 0.96736 13.4713 0.321584 C16.7178 -0.324192 20.0829 0.00724447 23.1411 1.27398 C26.1993 2.54072 28.8131 4.68586 30.6522 7.43814 C32.4912 10.1904 33.4727 13.4262 33.4727 16.7364 L33.4727 24.4411"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n561} data-layer={"236:49782/236:49783/236:49785"} data-name={"Rectangle 3464177"}>
      <svg width="100%" height="100%" viewBox="0 0 18.10005 17.30601" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.0275 17.306 L0 17.306 M10.0126 0 L18.1 9.82528 L10.0275 17.306 M7.25628 0 L10.0126 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n562} data-layer={"236:49782/236:49783/236:49786"} data-name={"Rectangle 3464173"}>
      <svg width="100%" height="100%" viewBox="0 0 16.78913 14.69751" overflow="visible" aria-hidden="true" focusable="false"><path d={"M15.415 13.168 L16.7891 14.6975 L7.34876 14.6975 C3.29015 14.6975 0 11.4074 0 7.34875 C0 3.29015 3.29015 0 7.34876 0 C11.4074 0 14.6975 3.29015 14.6975 7.34875 L14.6975 9.49658 L14.6975 11.6444 C14.6975 12.2338 14.9606 12.7925 15.415 13.168 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:49782/236:49787"} data-name={"Rectangle 3464342"}></span>
</Root>);
case "236:49788": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49788"} data-name={"Size=30, Tema=off, System=KOS"}>
  <span className={s.n563} data-layer={"236:49788/236:49789"} data-name={"Group 6945"}>
    <span className={s.n552} data-layer={"236:49788/236:49789/236:49790"} data-name={"Ellipse 3160"}>
      <svg width="100%" height="100%" viewBox="0 0 22.31516 22.31516" overflow="visible" aria-hidden="true" focusable="false"><path d={"M11.1576 22.3152 C8.95082 22.3152 6.79362 21.6608 4.95876 20.4348 C3.12391 19.2088 1.69381 17.4662 0.84932 15.4274 C0.00482923 13.3886 -0.216128 11.1452 0.21439 8.98084 C0.644908 6.81649 1.70756 4.82839 3.26798 3.26798 C4.8284 1.70756 6.81649 0.644907 8.98085 0.21439 C11.1452 -0.216128 13.3886 0.00482965 15.4274 0.849321 C17.4662 1.69381 19.2088 3.12391 20.4348 4.95876 C21.6608 6.79362 22.3152 8.95082 22.3152 11.1576 L22.3151 16.2941"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n564} data-layer={"236:49788/236:49789/236:49791"} data-name={"Rectangle 3464177"}>
      <svg width="100%" height="100%" viewBox="0 0 12.0667 11.53734" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.68499 11.5373 L0 11.5373 M6.67504 0 L12.0667 6.55019 L6.68499 11.5373 M4.83752 0 L6.67504 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n565} data-layer={"236:49788/236:49789/236:49792"} data-name={"Rectangle 3464173"}>
      <svg width="100%" height="100%" viewBox="0 0 11.19275 9.79834" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.2767 8.77865 L11.1928 9.79834 L4.89917 9.79834 C2.19343 9.79834 0 7.60491 0 4.89917 C0 2.19343 2.19343 0 4.89917 0 C7.60491 0 9.79834 2.19343 9.79834 4.89917 L9.79834 6.33106 L9.79834 7.76294 C9.79834 8.1559 9.97373 8.52834 10.2767 8.77865 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:49788/236:49793"} data-name={"Rectangle 3464342"}></span>
</Root>);
case "236:49794": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49794"} data-name={"Size=24, Tema=off, System=KOS"}>
  <span className={s.n566} data-layer={"236:49794/236:49795"} data-name={"Group 6945"}>
    <span className={s.n567} data-layer={"236:49794/236:49795/236:49796"} data-name={"Ellipse 3160"}>
      <svg width="100%" height="100%" viewBox="0 0 17.85213 17.85213" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.92606 17.8521 C7.16066 17.8521 5.43489 17.3286 3.96701 16.3478 C2.49912 15.367 1.35505 13.9729 0.679456 12.3419 C0.00386338 10.7109 -0.172902 8.91616 0.171512 7.18468 C0.515926 5.45319 1.36605 3.86272 2.61438 2.61438 C3.86272 1.36605 5.45319 0.515926 7.18468 0.171512 C8.91616 -0.172902 10.7109 0.00386372 12.3419 0.679457 C13.9729 1.35505 15.367 2.49913 16.3478 3.96701 C17.3286 5.43489 17.8521 7.16066 17.8521 8.92607 L17.8521 13.0352"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n568} data-layer={"236:49794/236:49795/236:49797"} data-name={"Rectangle 3464177"}>
      <svg width="100%" height="100%" viewBox="0 0 9.65336 9.22987" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.34799 9.22987 L0 9.22987 M5.34003 0 L9.65336 5.24015 L5.34799 9.22987 M3.87002 0 L5.34003 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n569} data-layer={"236:49794/236:49795/236:49798"} data-name={"Rectangle 3464173"}>
      <svg width="100%" height="100%" viewBox="0 0 8.9542 7.83867" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.22132 7.02292 L8.9542 7.83867 L3.91934 7.83867 C1.75475 7.83867 0 6.08393 0 3.91934 C0 1.75475 1.75475 0 3.91934 0 C6.08393 0 7.83867 1.75475 7.83867 3.91934 L7.83867 5.06485 L7.83867 6.21035 C7.83867 6.52472 7.97898 6.82268 8.22132 7.02292 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:49794/236:49799"} data-name={"Rectangle 3464342"}></span>
</Root>);
case "236:49800": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49800"} data-name={"Size=90, Tema=on, System=IUFS"}>
  <span className={s.n570} data-layer={"236:49800/236:49801"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n571} data-layer={"236:49800/236:49807"} data-name={"Group 6892"}>
    <span className={s.n572} data-layer={"236:49800/236:49807/236:49808"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n573} data-layer={"236:49800/236:49807/236:49809"} data-name={"Group 6890"}>
      <span className={s.n574} data-layer={"236:49800/236:49807/236:49809/236:49810"} data-name={"Group 6888"}>
        <span className={s.n575} data-layer={"236:49800/236:49807/236:49809/236:49810/236:49811"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n576} data-layer={"236:49800/236:49807/236:49809/236:49810/236:49812"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n577} data-layer={"236:49800/236:49807/236:49809/236:49810/236:49813"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n578} data-layer={"236:49800/236:49807/236:49809/236:49810/236:49814"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n579} data-layer={"236:49800/236:49807/236:49809/236:49815"} data-name={"Group 6889"}>
        <span className={s.n580} data-layer={"236:49800/236:49807/236:49809/236:49815/236:49816"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n581} data-layer={"236:49800/236:49807/236:49809/236:49815/236:49817"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n582} data-layer={"236:49800/236:49807/236:49809/236:49815/236:49818"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n583} data-layer={"236:49800/236:49807/236:49809/236:49815/236:49819"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n584} data-layer={"236:49800/236:49807/236:49820"} data-name={"Group 6891"}>
      <span className={s.n585} data-layer={"236:49800/236:49807/236:49820/236:49821"} data-name={"Group 6888"}>
        <span className={s.n586} data-layer={"236:49800/236:49807/236:49820/236:49821/236:49822"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n587} data-layer={"236:49800/236:49807/236:49820/236:49821/236:49823"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n588} data-layer={"236:49800/236:49807/236:49820/236:49821/236:49824"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n589} data-layer={"236:49800/236:49807/236:49820/236:49821/236:49825"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n590} data-layer={"236:49800/236:49807/236:49820/236:49826"} data-name={"Group 6889"}>
        <span className={s.n591} data-layer={"236:49800/236:49807/236:49820/236:49826/236:49827"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n592} data-layer={"236:49800/236:49807/236:49820/236:49826/236:49828"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n593} data-layer={"236:49800/236:49807/236:49820/236:49826/236:49829"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n594} data-layer={"236:49800/236:49807/236:49820/236:49826/236:49830"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n595} data-layer={"236:49800/236:49807/236:49831"} data-name={"Ellipse 3196"}></span>
    <span className={s.n596} data-layer={"236:49800/236:49807/236:49832"} data-name={"Group 6908"}>
      <span className={s.n597} data-layer={"236:49800/236:49807/236:49832/236:49833"} data-name={"Rectangle 3464324"}>
        <svg width="100%" height="100%" viewBox="0 0 28.79054 21.5583" overflow="visible" aria-hidden="true" focusable="false"><path d={"M28.7905 0 L28.7905 21.5583 L0 21.5583 L0 0 L3.87565 0 M24.9149 0 L28.7905 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n598} data-layer={"236:49800/236:49807/236:49832/236:49834"} data-name={"Rectangle 3464325"}>
        <svg width="100%" height="100%" viewBox="0 0 31.0052 8.90729" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.53993 0 L24.4653 0 L31.0052 8.90729 M0 8.90729 L6.53993 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n599} data-layer={"236:49800/236:49807/236:49832/236:49835"} data-name={"Group 6911"}>
        <span className={s.n600} data-layer={"236:49800/236:49807/236:49832/236:49835/236:49836"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 14.48945 14.48945" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.4895 7.24473 C14.4895 11.2459 11.2459 14.4895 7.24473 14.4895 C3.24357 14.4895 0 11.2459 0 7.24473 C0 3.24357 3.24357 0 7.24473 0 C8.57218 0 9.81624 0.357019 10.8861 0.980275"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n601} data-layer={"236:49800/236:49807/236:49832/236:49835/236:49837"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 8.65599 4.23467" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.63412 L2.6402 4.23467 L8.65599 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n602} data-layer={"236:49800/236:49838"} data-name={"Group 6909"}>
    <span className={s.n603} data-layer={"236:49800/236:49838/236:49839"} data-name={"Vector 3355"}>
      <svg width="100%" height="100%" viewBox="0 0 4.07262 12.17704" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g687_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M4.07262 12.177 L4.07262 7.97196 L0 0"} fill="none" stroke={`url(#${uid}-g687_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n604} data-layer={"236:49800/236:49838/236:49840"} data-name={"Vector 3359"}>
      <svg width="100%" height="100%" viewBox="0 0 4.07262 11.71066" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g688_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M4.07262 11.7107 L4.07262 7.66664 L0 0"} fill="none" stroke={`url(#${uid}-g688_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n605} data-layer={"236:49800/236:49838/236:49841"} data-name={"Vector 3356"}>
      <svg width="100%" height="100%" viewBox="0 0 1.03526 11.551" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g689_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.551 L0 7.34592 L1.03526 -7.34218e-05"} fill="none" stroke={`url(#${uid}-g689_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n606} data-layer={"236:49800/236:49838/236:49842"} data-name={"Vector 3360"}>
      <svg width="100%" height="100%" viewBox="0 0 1.03526 11.1086" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g690_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.1086 L0 7.06458 L1.03526 -7.06098e-05"} fill="none" stroke={`url(#${uid}-g690_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n607} data-layer={"236:49800/236:49838/236:49843"} data-name={"Vector 3357"}>
      <svg width="100%" height="100%" viewBox="0 0 2.17755 12.13696" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g691_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.17755 12.137 L2.17755 7.93186 L0 0"} fill="none" stroke={`url(#${uid}-g691_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n608} data-layer={"236:49800/236:49838/236:49844"} data-name={"Vector 3361"}>
      <svg width="100%" height="100%" viewBox="0 0 2.17755 11.10865" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g692_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.17755 11.1086 L2.17755 7.25983 L0 0"} fill="none" stroke={`url(#${uid}-g692_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n609} data-layer={"236:49800/236:49838/236:49845"} data-name={"Vector 3358"}>
      <svg width="100%" height="100%" viewBox="0 0 2.58889 11.31759" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g693_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.3176 L0 7.11252 L2.58889 0"} fill="none" stroke={`url(#${uid}-g693_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n610} data-layer={"236:49800/236:49838/236:49846"} data-name={"Vector 3362"}>
      <svg width="100%" height="100%" viewBox="0 0 2.58889 11.10874" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g694_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.1087 L0 6.98127 L2.58889 0"} fill="none" stroke={`url(#${uid}-g694_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n611} data-layer={"236:49800/236:49838/236:49847"} data-name={"Vector 3363"}>
      <svg width="100%" height="100%" viewBox="0 0 4.07262 12.17704" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g695_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M4.07262 12.177 L4.07262 7.97196 L0 0"} fill="none" stroke={`url(#${uid}-g695_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n612} data-layer={"236:49800/236:49838/236:49848"} data-name={"Vector 3364"}>
      <svg width="100%" height="100%" viewBox="0 0 4.07262 11.71066" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g696_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M4.07262 11.7107 L4.07262 7.66664 L0 0"} fill="none" stroke={`url(#${uid}-g696_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n613} data-layer={"236:49800/236:49838/236:49849"} data-name={"Vector 3365"}>
      <svg width="100%" height="100%" viewBox="0 0 1.03526 11.551" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g697_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.551 L0 7.34592 L1.03526 -7.34218e-05"} fill="none" stroke={`url(#${uid}-g697_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n614} data-layer={"236:49800/236:49838/236:49850"} data-name={"Vector 3366"}>
      <svg width="100%" height="100%" viewBox="0 0 1.03526 11.1086" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g698_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.1086 L0 7.06458 L1.03526 -7.06098e-05"} fill="none" stroke={`url(#${uid}-g698_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n615} data-layer={"236:49800/236:49838/236:49851"} data-name={"Vector 3367"}>
      <svg width="100%" height="100%" viewBox="0 0 2.17755 12.13696" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g699_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.17755 12.137 L2.17755 7.93186 L0 0"} fill="none" stroke={`url(#${uid}-g699_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n616} data-layer={"236:49800/236:49838/236:49852"} data-name={"Vector 3368"}>
      <svg width="100%" height="100%" viewBox="0 0 2.17755 11.67212" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g700_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.17755 11.6721 L2.17755 7.62808 L0 0"} fill="none" stroke={`url(#${uid}-g700_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n617} data-layer={"236:49800/236:49838/236:49853"} data-name={"Vector 3369"}>
      <svg width="100%" height="100%" viewBox="0 0 2.58889 12.17697" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g701_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 12.177 L0 7.6526 L2.58889 0"} fill="none" stroke={`url(#${uid}-g701_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n618} data-layer={"236:49800/236:49838/236:49854"} data-name={"Vector 3370"}>
      <svg width="100%" height="100%" viewBox="0 0 2.58889 11.7103" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g702_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 11.7103 L0 7.35932 L2.58889 0"} fill="none" stroke={`url(#${uid}-g702_netstroke)`} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
  </span>
</Root>);
case "236:49856": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49856"} data-name={"Size=60, Tema=on, System=IUFS"}>
  <span className={s.n619} data-layer={"236:49856/236:49857"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n620} data-layer={"236:49856/236:49863"} data-name={"Group 6892"}>
    <span className={s.n621} data-layer={"236:49856/236:49863/236:49864"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n622} data-layer={"236:49856/236:49863/236:49865"} data-name={"Group 6890"}>
      <span className={s.n623} data-layer={"236:49856/236:49863/236:49865/236:49866"} data-name={"Group 6888"}>
        <span className={s.n624} data-layer={"236:49856/236:49863/236:49865/236:49866/236:49867"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n625} data-layer={"236:49856/236:49863/236:49865/236:49866/236:49868"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n626} data-layer={"236:49856/236:49863/236:49865/236:49866/236:49869"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n627} data-layer={"236:49856/236:49863/236:49865/236:49866/236:49870"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n628} data-layer={"236:49856/236:49863/236:49865/236:49871"} data-name={"Group 6889"}>
        <span className={s.n629} data-layer={"236:49856/236:49863/236:49865/236:49871/236:49872"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n630} data-layer={"236:49856/236:49863/236:49865/236:49871/236:49873"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n631} data-layer={"236:49856/236:49863/236:49865/236:49871/236:49874"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n632} data-layer={"236:49856/236:49863/236:49865/236:49871/236:49875"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n633} data-layer={"236:49856/236:49863/236:49876"} data-name={"Group 6891"}>
      <span className={s.n634} data-layer={"236:49856/236:49863/236:49876/236:49877"} data-name={"Group 6888"}>
        <span className={s.n635} data-layer={"236:49856/236:49863/236:49876/236:49877/236:49878"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n636} data-layer={"236:49856/236:49863/236:49876/236:49877/236:49879"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n637} data-layer={"236:49856/236:49863/236:49876/236:49877/236:49880"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n638} data-layer={"236:49856/236:49863/236:49876/236:49877/236:49881"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n639} data-layer={"236:49856/236:49863/236:49876/236:49882"} data-name={"Group 6889"}>
        <span className={s.n640} data-layer={"236:49856/236:49863/236:49876/236:49882/236:49883"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n641} data-layer={"236:49856/236:49863/236:49876/236:49882/236:49884"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n642} data-layer={"236:49856/236:49863/236:49876/236:49882/236:49885"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n643} data-layer={"236:49856/236:49863/236:49876/236:49882/236:49886"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n644} data-layer={"236:49856/236:49863/236:49887"} data-name={"Ellipse 3196"}></span>
    <span className={s.n645} data-layer={"236:49856/236:49863/236:49888"} data-name={"Group 6908"}>
      <span className={s.n646} data-layer={"236:49856/236:49863/236:49888/236:49889"} data-name={"Rectangle 3464324"}>
        <svg width="100%" height="100%" viewBox="0 0 19.16947 14.35406" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.1695 0 L19.1695 14.3541 L0 14.3541 L0 0 L2.58051 0 M16.589 0 L19.1695 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.2118616104125977} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n647} data-layer={"236:49856/236:49863/236:49888/236:49890"} data-name={"Rectangle 3464325"}>
        <svg width="100%" height="100%" viewBox="0 0 20.64404 5.9307" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.35445 0 L16.2896 0 L20.644 5.9307 M0 5.9307 L4.35445 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.2118616104125977} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n648} data-layer={"236:49856/236:49863/236:49888/236:49891"} data-name={"Group 6911"}>
        <span className={s.n649} data-layer={"236:49856/236:49863/236:49888/236:49891/236:49892"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 9.64809 9.64809" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.64809 4.82405 C9.64809 7.48829 7.48829 9.64809 4.82405 9.64809 C2.1598 9.64809 0 7.48829 0 4.82405 C0 2.1598 2.1598 0 4.82405 0 C5.70796 0 6.53634 0.237728 7.24876 0.652736"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.2118616104125977} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n650} data-layer={"236:49856/236:49863/236:49888/236:49891/236:49893"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 5.76377 2.81974" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.75398 L1.75803 2.81974 L5.76377 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.2118616104125977} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n651} data-layer={"236:49856/236:49894"} data-name={"Vector 3355"}>
    <svg width="100%" height="100%" viewBox="0 0 2.71508 8.11802" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g736_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.71508 8.11802 L2.71508 5.31464 L0 0"} fill="none" stroke={`url(#${uid}-g736_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n652} data-layer={"236:49856/236:49895"} data-name={"Vector 3359"}>
    <svg width="100%" height="100%" viewBox="0 0 2.71508 7.80711" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g737_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.71508 7.80711 L2.71508 5.11109 L0 0"} fill="none" stroke={`url(#${uid}-g737_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n653} data-layer={"236:49856/236:49896"} data-name={"Vector 3356"}>
    <svg width="100%" height="100%" viewBox="0 0 0.69017 7.70067" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g738_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.70067 L0 4.89728 L0.690174 -4.89479e-05"} fill="none" stroke={`url(#${uid}-g738_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n654} data-layer={"236:49856/236:49897"} data-name={"Vector 3360"}>
    <svg width="100%" height="100%" viewBox="0 0 0.69017 7.40573" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g739_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.40573 L0 4.70972 L0.690174 -4.70732e-05"} fill="none" stroke={`url(#${uid}-g739_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n655} data-layer={"236:49856/236:49898"} data-name={"Vector 3357"}>
    <svg width="100%" height="100%" viewBox="0 0 1.4517 8.09131" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g740_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.4517 8.09131 L1.4517 5.28791 L0 0"} fill="none" stroke={`url(#${uid}-g740_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n656} data-layer={"236:49856/236:49899"} data-name={"Vector 3361"}>
    <svg width="100%" height="100%" viewBox="0 0 1.4517 7.40576" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g741_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.4517 7.40576 L1.4517 4.83988 L0 0"} fill="none" stroke={`url(#${uid}-g741_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n657} data-layer={"236:49856/236:49900"} data-name={"Vector 3358"}>
    <svg width="100%" height="100%" viewBox="0 0 1.72593 7.54506" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g742_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.54506 L0 4.74168 L1.72593 0"} fill="none" stroke={`url(#${uid}-g742_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n658} data-layer={"236:49856/236:49901"} data-name={"Vector 3362"}>
    <svg width="100%" height="100%" viewBox="0 0 1.72593 7.40583" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g743_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.40583 L0 4.65418 L1.72593 0"} fill="none" stroke={`url(#${uid}-g743_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n659} data-layer={"236:49856/236:49902"} data-name={"Vector 3363"}>
    <svg width="100%" height="100%" viewBox="0 0 2.71508 8.11802" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g744_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.71508 8.11802 L2.71508 5.31464 L0 0"} fill="none" stroke={`url(#${uid}-g744_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n660} data-layer={"236:49856/236:49903"} data-name={"Vector 3364"}>
    <svg width="100%" height="100%" viewBox="0 0 2.71508 7.80711" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g745_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.71508 7.80711 L2.71508 5.11109 L0 0"} fill="none" stroke={`url(#${uid}-g745_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n661} data-layer={"236:49856/236:49904"} data-name={"Vector 3365"}>
    <svg width="100%" height="100%" viewBox="0 0 0.69017 7.70067" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g746_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.70067 L0 4.89728 L0.690174 -4.89479e-05"} fill="none" stroke={`url(#${uid}-g746_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n662} data-layer={"236:49856/236:49905"} data-name={"Vector 3366"}>
    <svg width="100%" height="100%" viewBox="0 0 0.69017 7.40573" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g747_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.40573 L0 4.70972 L0.690174 -4.70732e-05"} fill="none" stroke={`url(#${uid}-g747_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n663} data-layer={"236:49856/236:49906"} data-name={"Vector 3367"}>
    <svg width="100%" height="100%" viewBox="0 0 1.4517 8.09131" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g748_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.4517 8.09131 L1.4517 5.28791 L0 0"} fill="none" stroke={`url(#${uid}-g748_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n664} data-layer={"236:49856/236:49907"} data-name={"Vector 3368"}>
    <svg width="100%" height="100%" viewBox="0 0 1.4517 7.78141" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g749_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.4517 7.78141 L1.4517 5.08538 L0 0"} fill="none" stroke={`url(#${uid}-g749_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n665} data-layer={"236:49856/236:49908"} data-name={"Vector 3369"}>
    <svg width="100%" height="100%" viewBox="0 0 1.72593 8.11798" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g750_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 8.11798 L0 5.10173 L1.72593 0"} fill="none" stroke={`url(#${uid}-g750_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n666} data-layer={"236:49856/236:49909"} data-name={"Vector 3370"}>
    <svg width="100%" height="100%" viewBox="0 0 1.72593 7.80687" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g751_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 7.80687 L0 4.90622 L1.72593 0"} fill="none" stroke={`url(#${uid}-g751_netstroke)`} strokeWidth={1.3333333730697632} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:49910": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49910"} data-name={"Size=45, Tema=on, System=IUFS"}>
  <span className={s.n667} data-layer={"236:49910/236:49911"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n668} data-layer={"236:49910/236:49917"} data-name={"Group 6892"}>
    <span className={s.n669} data-layer={"236:49910/236:49917/236:49918"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n670} data-layer={"236:49910/236:49917/236:49919"} data-name={"Group 6890"}>
      <span className={s.n671} data-layer={"236:49910/236:49917/236:49919/236:49920"} data-name={"Group 6888"}>
        <span className={s.n672} data-layer={"236:49910/236:49917/236:49919/236:49920/236:49921"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n673} data-layer={"236:49910/236:49917/236:49919/236:49920/236:49922"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n674} data-layer={"236:49910/236:49917/236:49919/236:49920/236:49923"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n675} data-layer={"236:49910/236:49917/236:49919/236:49920/236:49924"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n676} data-layer={"236:49910/236:49917/236:49919/236:49925"} data-name={"Group 6889"}>
        <span className={s.n677} data-layer={"236:49910/236:49917/236:49919/236:49925/236:49926"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n678} data-layer={"236:49910/236:49917/236:49919/236:49925/236:49927"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n679} data-layer={"236:49910/236:49917/236:49919/236:49925/236:49928"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n680} data-layer={"236:49910/236:49917/236:49919/236:49925/236:49929"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n681} data-layer={"236:49910/236:49917/236:49930"} data-name={"Group 6891"}>
      <span className={s.n682} data-layer={"236:49910/236:49917/236:49930/236:49931"} data-name={"Group 6888"}>
        <span className={s.n683} data-layer={"236:49910/236:49917/236:49930/236:49931/236:49932"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n684} data-layer={"236:49910/236:49917/236:49930/236:49931/236:49933"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n685} data-layer={"236:49910/236:49917/236:49930/236:49931/236:49934"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n686} data-layer={"236:49910/236:49917/236:49930/236:49931/236:49935"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n687} data-layer={"236:49910/236:49917/236:49930/236:49936"} data-name={"Group 6889"}>
        <span className={s.n688} data-layer={"236:49910/236:49917/236:49930/236:49936/236:49937"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n689} data-layer={"236:49910/236:49917/236:49930/236:49936/236:49938"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n690} data-layer={"236:49910/236:49917/236:49930/236:49936/236:49939"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n691} data-layer={"236:49910/236:49917/236:49930/236:49936/236:49940"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n692} data-layer={"236:49910/236:49917/236:49941"} data-name={"Ellipse 3196"}></span>
    <span className={s.n693} data-layer={"236:49910/236:49917/236:49942"} data-name={"Group 6908"}>
      <span className={s.n694} data-layer={"236:49910/236:49917/236:49942/236:49943"} data-name={"Rectangle 3464324"}>
        <svg width="100%" height="100%" viewBox="0 0 14.12852 10.57941" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.1285 0 L14.1285 10.5794 L0 10.5794 L0 0 L1.90192 0 M12.2266 0 L14.1285 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.6302140951156616} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n695} data-layer={"236:49910/236:49917/236:49942/236:49944"} data-name={"Rectangle 3464325"}>
        <svg width="100%" height="100%" viewBox="0 0 15.21533 4.37112" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.20937 0 L12.006 0 L15.2153 4.37112 M0 4.37112 L3.20937 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.6302140951156616} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n696} data-layer={"236:49910/236:49917/236:49942/236:49945"} data-name={"Group 6911"}>
        <span className={s.n697} data-layer={"236:49910/236:49917/236:49942/236:49945/236:49946"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 7.11096 7.11096" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.11096 3.55548 C7.11096 5.51912 5.51912 7.11096 3.55548 7.11096 C1.59184 7.11096 0 5.51912 0 3.55548 C0 1.59184 1.59184 0 3.55548 0 C4.20695 0 4.8175 0.175214 5.34257 0.481088"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.6302140951156616} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n698} data-layer={"236:49910/236:49917/236:49942/236:49945/236:49947"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 4.24808 2.07824" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.29274 L1.29573 2.07824 L4.24808 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.6302140951156616} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
  <span className={s.n699} data-layer={"236:49910/236:49948"} data-name={"Vector 3355"}>
    <svg width="100%" height="100%" viewBox="0 0 2.03631 6.08852" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g785_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.03631 6.08852 L2.03631 3.98598 L0 0"} fill="none" stroke={`url(#${uid}-g785_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n700} data-layer={"236:49910/236:49949"} data-name={"Vector 3359"}>
    <svg width="100%" height="100%" viewBox="0 0 2.03631 5.85533" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g786_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.03631 5.85533 L2.03631 3.83332 L0 0"} fill="none" stroke={`url(#${uid}-g786_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n701} data-layer={"236:49910/236:49950"} data-name={"Vector 3356"}>
    <svg width="100%" height="100%" viewBox="0 0 0.51763 5.7755" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g787_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.7755 L0 3.67296 L0.51763 -3.67109e-05"} fill="none" stroke={`url(#${uid}-g787_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n702} data-layer={"236:49910/236:49951"} data-name={"Vector 3360"}>
    <svg width="100%" height="100%" viewBox="0 0 0.51763 5.5543" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g788_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.5543 L0 3.53229 L0.51763 -3.53049e-05"} fill="none" stroke={`url(#${uid}-g788_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n703} data-layer={"236:49910/236:49952"} data-name={"Vector 3357"}>
    <svg width="100%" height="100%" viewBox="0 0 1.08877 6.06848" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g789_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.08877 6.06848 L1.08877 3.96593 L0 0"} fill="none" stroke={`url(#${uid}-g789_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n704} data-layer={"236:49910/236:49953"} data-name={"Vector 3361"}>
    <svg width="100%" height="100%" viewBox="0 0 1.08877 5.55432" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g790_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.08877 5.55432 L1.08877 3.62991 L0 0"} fill="none" stroke={`url(#${uid}-g790_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n705} data-layer={"236:49910/236:49954"} data-name={"Vector 3358"}>
    <svg width="100%" height="100%" viewBox="0 0 1.29445 5.6588" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g791_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.6588 L0 3.55626 L1.29445 0"} fill="none" stroke={`url(#${uid}-g791_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n706} data-layer={"236:49910/236:49955"} data-name={"Vector 3362"}>
    <svg width="100%" height="100%" viewBox="0 0 1.29445 5.55437" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g792_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.55437 L0 3.49064 L1.29445 0"} fill="none" stroke={`url(#${uid}-g792_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n707} data-layer={"236:49910/236:49956"} data-name={"Vector 3363"}>
    <svg width="100%" height="100%" viewBox="0 0 2.03631 6.08852" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g793_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.03631 6.08852 L2.03631 3.98598 L0 0"} fill="none" stroke={`url(#${uid}-g793_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n708} data-layer={"236:49910/236:49957"} data-name={"Vector 3364"}>
    <svg width="100%" height="100%" viewBox="0 0 2.03631 5.85533" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g794_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M2.03631 5.85533 L2.03631 3.83332 L0 0"} fill="none" stroke={`url(#${uid}-g794_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n709} data-layer={"236:49910/236:49958"} data-name={"Vector 3365"}>
    <svg width="100%" height="100%" viewBox="0 0 0.51763 5.7755" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g795_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.7755 L0 3.67296 L0.51763 -3.67109e-05"} fill="none" stroke={`url(#${uid}-g795_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n710} data-layer={"236:49910/236:49959"} data-name={"Vector 3366"}>
    <svg width="100%" height="100%" viewBox="0 0 0.51763 5.5543" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g796_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.5543 L0 3.53229 L0.51763 -3.53049e-05"} fill="none" stroke={`url(#${uid}-g796_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n711} data-layer={"236:49910/236:49960"} data-name={"Vector 3367"}>
    <svg width="100%" height="100%" viewBox="0 0 1.08877 6.06848" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g797_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.08877 6.06848 L1.08877 3.96593 L0 0"} fill="none" stroke={`url(#${uid}-g797_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n712} data-layer={"236:49910/236:49961"} data-name={"Vector 3368"}>
    <svg width="100%" height="100%" viewBox="0 0 1.08877 5.83606" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g798_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.08877 5.83606 L1.08877 3.81404 L0 0"} fill="none" stroke={`url(#${uid}-g798_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n713} data-layer={"236:49910/236:49962"} data-name={"Vector 3369"}>
    <svg width="100%" height="100%" viewBox="0 0 1.29445 6.08848" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g799_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 6.08848 L0 3.8263 L1.29445 0"} fill="none" stroke={`url(#${uid}-g799_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n714} data-layer={"236:49910/236:49963"} data-name={"Vector 3370"}>
    <svg width="100%" height="100%" viewBox="0 0 1.29445 5.85515" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g800_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 5.85515 L0 3.67966 L1.29445 0"} fill="none" stroke={`url(#${uid}-g800_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:49964": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:49964"} data-name={"Size=30, Tema=on, System=IUFS"}>
  <span className={s.n715} data-layer={"236:49964/236:49965"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n716} data-layer={"236:49964/236:49971"} data-name={"Group 6892"}>
    <span className={s.n717} data-layer={"236:49964/236:49971/236:49972"} data-name={"Rectangle 3464301"}></span>
    <span className={s.n718} data-layer={"236:49964/236:49971/236:49973"} data-name={"Group 6890"}>
      <span className={s.n719} data-layer={"236:49964/236:49971/236:49973/236:49974"} data-name={"Group 6888"}>
        <span className={s.n720} data-layer={"236:49964/236:49971/236:49973/236:49974/236:49975"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n721} data-layer={"236:49964/236:49971/236:49973/236:49974/236:49976"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n722} data-layer={"236:49964/236:49971/236:49973/236:49974/236:49977"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n723} data-layer={"236:49964/236:49971/236:49973/236:49974/236:49978"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n724} data-layer={"236:49964/236:49971/236:49973/236:49979"} data-name={"Group 6889"}>
        <span className={s.n725} data-layer={"236:49964/236:49971/236:49973/236:49979/236:49980"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n726} data-layer={"236:49964/236:49971/236:49973/236:49979/236:49981"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n727} data-layer={"236:49964/236:49971/236:49973/236:49979/236:49982"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n728} data-layer={"236:49964/236:49971/236:49973/236:49979/236:49983"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n729} data-layer={"236:49964/236:49971/236:49984"} data-name={"Group 6891"}>
      <span className={s.n730} data-layer={"236:49964/236:49971/236:49984/236:49985"} data-name={"Group 6888"}>
        <span className={s.n731} data-layer={"236:49964/236:49971/236:49984/236:49985/236:49986"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n732} data-layer={"236:49964/236:49971/236:49984/236:49985/236:49987"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n733} data-layer={"236:49964/236:49971/236:49984/236:49985/236:49988"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n734} data-layer={"236:49964/236:49971/236:49984/236:49985/236:49989"} data-name={"Rectangle 3464308"}></span>
      </span>
      <span className={s.n735} data-layer={"236:49964/236:49971/236:49984/236:49990"} data-name={"Group 6889"}>
        <span className={s.n736} data-layer={"236:49964/236:49971/236:49984/236:49990/236:49991"} data-name={"Rectangle 3464305"}></span>
        <span className={s.n737} data-layer={"236:49964/236:49971/236:49984/236:49990/236:49992"} data-name={"Rectangle 3464306"}></span>
        <span className={s.n738} data-layer={"236:49964/236:49971/236:49984/236:49990/236:49993"} data-name={"Rectangle 3464307"}></span>
        <span className={s.n739} data-layer={"236:49964/236:49971/236:49984/236:49990/236:49994"} data-name={"Rectangle 3464308"}></span>
      </span>
    </span>
    <span className={s.n740} data-layer={"236:49964/236:49971/236:49995"} data-name={"Ellipse 3196"}></span>
  </span>
  <span className={s.n741} data-layer={"236:49964/236:49996"} data-name={"Group 6908"}>
    <span className={s.n742} data-layer={"236:49964/236:49996/236:49997"} data-name={"Rectangle 3464324"}>
      <svg width="100%" height="100%" viewBox="0 0 9.98577 7.47733" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.98577 0 L9.98577 7.47733 L0 7.47733 L0 0 L1.34424 0 M8.64153 0 L9.98577 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.1522042751312256} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n743} data-layer={"236:49964/236:49996/236:49998"} data-name={"Rectangle 3464325"}>
      <svg width="100%" height="100%" viewBox="0 0 10.75391 3.08942" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.26832 0 L8.48558 0 L10.7539 3.08942 M0 3.08942 L2.26832 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.1522042751312256} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n744} data-layer={"236:49964/236:49996/236:49999"} data-name={"Group 6911"}>
      <span className={s.n745} data-layer={"236:49964/236:49996/236:49999/236:50000"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 5.02589 5.02589" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.02589 2.51295 C5.02589 3.90081 3.90081 5.02589 2.51295 5.02589 C1.12508 5.02589 0 3.90081 0 2.51295 C0 1.12508 1.12508 0 2.51295 0 C2.97339 0 3.40492 0.123838 3.77603 0.340024"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.1522042751312256} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n746} data-layer={"236:49964/236:49996/236:49999/236:50001"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 3.00246 1.46886" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.913684 L0.915795 1.46886 L3.00246 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.1522042751312256} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n747} data-layer={"236:49964/236:50002"} data-name={"Vector 3355"}>
    <svg width="100%" height="100%" viewBox="0 0 1.35754 4.05901" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g834_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.35754 4.05901 L1.35754 2.65732 L0 0"} fill="none" stroke={`url(#${uid}-g834_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n748} data-layer={"236:49964/236:50003"} data-name={"Vector 3359"}>
    <svg width="100%" height="100%" viewBox="0 0 1.35754 3.90355" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g835_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.35754 3.90355 L1.35754 2.55555 L0 0"} fill="none" stroke={`url(#${uid}-g835_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n749} data-layer={"236:49964/236:50004"} data-name={"Vector 3356"}>
    <svg width="100%" height="100%" viewBox="0 0 0.34509 3.85033" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g836_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.85033 L0 2.44864 L0.345087 -2.44739e-05"} fill="none" stroke={`url(#${uid}-g836_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n750} data-layer={"236:49964/236:50005"} data-name={"Vector 3360"}>
    <svg width="100%" height="100%" viewBox="0 0 0.34509 3.70287" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g837_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.70287 L0 2.35486 L0.345087 -2.35366e-05"} fill="none" stroke={`url(#${uid}-g837_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n751} data-layer={"236:49964/236:50006"} data-name={"Vector 3357"}>
    <svg width="100%" height="100%" viewBox="0 0 0.72585 4.04565" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g838_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0.72585 4.04565 L0.72585 2.64395 L0 0"} fill="none" stroke={`url(#${uid}-g838_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n752} data-layer={"236:49964/236:50007"} data-name={"Vector 3361"}>
    <svg width="100%" height="100%" viewBox="0 0 0.72585 3.70288" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g839_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0.72585 3.70288 L0.72585 2.41994 L0 0"} fill="none" stroke={`url(#${uid}-g839_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n753} data-layer={"236:49964/236:50008"} data-name={"Vector 3358"}>
    <svg width="100%" height="100%" viewBox="0 0 0.86296 3.77253" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g840_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(218,218,218,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.77253 L0 2.37084 L0.862963 0"} fill="none" stroke={`url(#${uid}-g840_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n754} data-layer={"236:49964/236:50009"} data-name={"Vector 3362"}>
    <svg width="100%" height="100%" viewBox="0 0 0.86296 3.70291" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g841_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(244,244,244,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.70291 L0 2.32709 L0.862963 0"} fill="none" stroke={`url(#${uid}-g841_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n755} data-layer={"236:49964/236:50010"} data-name={"Vector 3363"}>
    <svg width="100%" height="100%" viewBox="0 0 1.35754 4.05901" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g842_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.35754 4.05901 L1.35754 2.65732 L0 0"} fill="none" stroke={`url(#${uid}-g842_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n756} data-layer={"236:49964/236:50011"} data-name={"Vector 3364"}>
    <svg width="100%" height="100%" viewBox="0 0 1.35754 3.90355" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g843_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(236,236,236,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M1.35754 3.90355 L1.35754 2.55555 L0 0"} fill="none" stroke={`url(#${uid}-g843_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n757} data-layer={"236:49964/236:50012"} data-name={"Vector 3365"}>
    <svg width="100%" height="100%" viewBox="0 0 0.34509 3.85033" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g844_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.85033 L0 2.44864 L0.345087 -2.44739e-05"} fill="none" stroke={`url(#${uid}-g844_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n758} data-layer={"236:49964/236:50013"} data-name={"Vector 3366"}>
    <svg width="100%" height="100%" viewBox="0 0 0.34509 3.70287" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g845_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(232,232,232,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.70287 L0 2.35486 L0.345087 -2.35366e-05"} fill="none" stroke={`url(#${uid}-g845_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n759} data-layer={"236:49964/236:50014"} data-name={"Vector 3367"}>
    <svg width="100%" height="100%" viewBox="0 0 0.72585 4.04565" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g846_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0.72585 4.04565 L0.72585 2.64395 L0 0"} fill="none" stroke={`url(#${uid}-g846_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n760} data-layer={"236:49964/236:50015"} data-name={"Vector 3368"}>
    <svg width="100%" height="100%" viewBox="0 0 0.72585 3.89071" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g847_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(231,231,231,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0.72585 3.89071 L0.72585 2.54269 L0 0"} fill="none" stroke={`url(#${uid}-g847_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n761} data-layer={"236:49964/236:50016"} data-name={"Vector 3369"}>
    <svg width="100%" height="100%" viewBox="0 0 0.86296 4.05899" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g848_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 4.05899 L0 2.55087 L0.862963 0"} fill="none" stroke={`url(#${uid}-g848_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n762} data-layer={"236:49964/236:50017"} data-name={"Vector 3370"}>
    <svg width="100%" height="100%" viewBox="0 0 0.86296 3.90343" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g849_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(225,225,225,1)"}/><stop offset={1} stopColor={"rgba(0,130,97,1)"}/></linearGradient></defs><path d={"M0 3.90343 L0 2.45311 L0.862963 0"} fill="none" stroke={`url(#${uid}-g849_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
</Root>);
case "236:50018": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50018"} data-name={"Size=60, Tema=off, System=IUFS"}>
  <span className={s.n171} data-layer={"236:50018/236:50019"} data-name={"7"}>
    <span className={s.n171} data-layer={"236:50018/236:50019/236:50020"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n620} data-layer={"236:50018/236:50019/236:50021"} data-name={"Group 6892"}>
      <span className={s.n763} data-layer={"236:50018/236:50019/236:50021/236:50022"} data-name={"Rectangle 3464301"}></span>
      <span className={s.n622} data-layer={"236:50018/236:50019/236:50021/236:50023"} data-name={"Group 6890"}>
        <span className={s.n623} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50024"} data-name={"Group 6888"}>
          <span className={s.n764} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50024/236:50025"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n765} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50024/236:50026"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n766} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50024/236:50027"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n767} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50024/236:50028"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n628} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50029"} data-name={"Group 6889"}>
          <span className={s.n768} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50029/236:50030"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n769} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50029/236:50031"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n770} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50029/236:50032"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n771} data-layer={"236:50018/236:50019/236:50021/236:50023/236:50029/236:50033"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
      <span className={s.n633} data-layer={"236:50018/236:50019/236:50021/236:50034"} data-name={"Group 6891"}>
        <span className={s.n634} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50035"} data-name={"Group 6888"}>
          <span className={s.n772} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50035/236:50036"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n773} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50035/236:50037"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n774} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50035/236:50038"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n775} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50035/236:50039"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n639} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50040"} data-name={"Group 6889"}>
          <span className={s.n764} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50040/236:50041"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n776} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50040/236:50042"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n777} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50040/236:50043"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n778} data-layer={"236:50018/236:50019/236:50021/236:50034/236:50040/236:50044"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
      <span className={s.n779} data-layer={"236:50018/236:50019/236:50021/236:50045"} data-name={"Group 6908"}>
        <span className={s.n780} data-layer={"236:50018/236:50019/236:50021/236:50045/236:50046"} data-name={"Rectangle 3464324"}>
          <svg width="100%" height="100%" viewBox="0 0 17.41726 13.04201" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.4173 0 L17.4173 13.042 L0 13.042 L0 0 L2.34463 0 M15.0726 0 L17.4173 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.544062614440918} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n781} data-layer={"236:50018/236:50019/236:50021/236:50045/236:50047"} data-name={"Rectangle 3464325"}>
          <svg width="100%" height="100%" viewBox="0 0 18.75705 5.3886" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.95643 0 L14.8006 0 L18.757 5.3886 M0 5.3886 L3.95643 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.544062614440918} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n782} data-layer={"236:50018/236:50019/236:50021/236:50045/236:50048"} data-name={"Group 6911"}>
          <span className={s.n783} data-layer={"236:50018/236:50019/236:50021/236:50045/236:50048/236:50049"} data-name={"Ellipse 3197"}>
            <svg width="100%" height="100%" viewBox="0 0 8.7662 8.7662" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.7662 4.3831 C8.7662 6.80382 6.80382 8.7662 4.3831 8.7662 C1.96238 8.7662 0 6.80382 0 4.3831 C0 1.96238 1.96238 0 4.3831 0 C5.18621 0 5.93888 0.215999 6.58617 0.593072"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.009683609008789} strokeLinecap="round" strokeLinejoin="miter"/></svg>
          </span>
          <span className={s.n784} data-layer={"236:50018/236:50019/236:50021/236:50045/236:50048/236:50050"} data-name={"Vector 3371"}>
            <svg width="100%" height="100%" viewBox="0 0 5.23692 2.562" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.59365 L1.59734 2.562 L5.23692 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.009683609008789} strokeLinecap="round" strokeLinejoin="miter"/></svg>
          </span>
        </span>
      </span>
    </span>
    <span className={s.n785} data-layer={"236:50018/236:50019/236:50051"} data-name={"Group 6894"}>
      <span className={s.n786} data-layer={"236:50018/236:50019/236:50051/236:50052"} data-name={"Vector 3355"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.80338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.80338 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n787} data-layer={"236:50018/236:50019/236:50051/236:50053"} data-name={"Vector 3359"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.69602" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.69602 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n788} data-layer={"236:50018/236:50019/236:50051/236:50054"} data-name={"Vector 3356"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.80338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.80338 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n789} data-layer={"236:50018/236:50019/236:50051/236:50055"} data-name={"Vector 3360"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.696" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.696 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n790} data-layer={"236:50018/236:50019/236:50051/236:50056"} data-name={"Vector 3357"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.8034" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.8034 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n791} data-layer={"236:50018/236:50019/236:50051/236:50057"} data-name={"Vector 3361"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.56588" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.56588 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n792} data-layer={"236:50018/236:50019/236:50051/236:50058"} data-name={"Vector 3358"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.80338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.80338 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n793} data-layer={"236:50018/236:50019/236:50051/236:50059"} data-name={"Vector 3362"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.75165" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.75165 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n794} data-layer={"236:50018/236:50019/236:50051/236:50060"} data-name={"Vector 3363"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.80338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.80338 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n795} data-layer={"236:50018/236:50019/236:50051/236:50061"} data-name={"Vector 3364"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.69602" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.69602 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n796} data-layer={"236:50018/236:50019/236:50051/236:50062"} data-name={"Vector 3365"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.80338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.80338 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n797} data-layer={"236:50018/236:50019/236:50051/236:50063"} data-name={"Vector 3366"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.696" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.696 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n798} data-layer={"236:50018/236:50019/236:50051/236:50064"} data-name={"Vector 3367"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.8034" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.8034 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n799} data-layer={"236:50018/236:50019/236:50051/236:50065"} data-name={"Vector 3368"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.69603" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.69603 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n800} data-layer={"236:50018/236:50019/236:50051/236:50066"} data-name={"Vector 3369"}>
        <svg width="100%" height="100%" viewBox="0 0 0 3.01625" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.01625 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n801} data-layer={"236:50018/236:50019/236:50051/236:50067"} data-name={"Vector 3370"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.90065" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.90065 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50068": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50068"} data-name={"Size=45, Tema=off, System=IUFS"}>
  <span className={s.n143} data-layer={"236:50068/236:50069"} data-name={"Group 6902"}>
    <span className={s.n177} data-layer={"236:50068/236:50069/236:50070"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n802} data-layer={"236:50068/236:50069/236:50071"} data-name={"Group 6892"}>
      <span className={s.n803} data-layer={"236:50068/236:50069/236:50071/236:50072"} data-name={"Rectangle 3464301"}></span>
      <span className={s.n804} data-layer={"236:50068/236:50069/236:50071/236:50073"} data-name={"Group 6890"}>
        <span className={s.n671} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50074"} data-name={"Group 6888"}>
          <span className={s.n805} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50074/236:50075"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n806} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50074/236:50076"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n807} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50074/236:50077"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n808} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50074/236:50078"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n676} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50079"} data-name={"Group 6889"}>
          <span className={s.n809} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50079/236:50080"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n806} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50079/236:50081"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n807} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50079/236:50082"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n808} data-layer={"236:50068/236:50069/236:50071/236:50073/236:50079/236:50083"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
      <span className={s.n810} data-layer={"236:50068/236:50069/236:50071/236:50084"} data-name={"Group 6891"}>
        <span className={s.n682} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50085"} data-name={"Group 6888"}>
          <span className={s.n811} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50085/236:50086"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n812} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50085/236:50087"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n813} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50085/236:50088"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n814} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50085/236:50089"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n687} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50090"} data-name={"Group 6889"}>
          <span className={s.n811} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50090/236:50091"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n812} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50090/236:50092"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n813} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50090/236:50093"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n814} data-layer={"236:50068/236:50069/236:50071/236:50084/236:50090/236:50094"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
    </span>
    <span className={s.n815} data-layer={"236:50068/236:50069/236:50095"} data-name={"Group 6894"}>
      <span className={s.n816} data-layer={"236:50068/236:50069/236:50095/236:50096"} data-name={"Vector 3355"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10254" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10254 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n817} data-layer={"236:50068/236:50069/236:50095/236:50097"} data-name={"Vector 3359"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.02201" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.02201 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n818} data-layer={"236:50068/236:50069/236:50095/236:50098"} data-name={"Vector 3356"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10254" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10254 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n819} data-layer={"236:50068/236:50069/236:50095/236:50099"} data-name={"Vector 3360"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.022" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.022 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n820} data-layer={"236:50068/236:50069/236:50095/236:50100"} data-name={"Vector 3357"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10255" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10255 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n821} data-layer={"236:50068/236:50069/236:50095/236:50101"} data-name={"Vector 3361"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.92441" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.92441 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n822} data-layer={"236:50068/236:50069/236:50095/236:50102"} data-name={"Vector 3358"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10253" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10253 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n823} data-layer={"236:50068/236:50069/236:50095/236:50103"} data-name={"Vector 3362"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.06373" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.06373 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n824} data-layer={"236:50068/236:50069/236:50095/236:50104"} data-name={"Vector 3363"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10254" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10254 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n825} data-layer={"236:50068/236:50069/236:50095/236:50105"} data-name={"Vector 3364"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.02201" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.02201 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n826} data-layer={"236:50068/236:50069/236:50095/236:50106"} data-name={"Vector 3365"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10254" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10254 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n827} data-layer={"236:50068/236:50069/236:50095/236:50107"} data-name={"Vector 3366"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.022" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.022 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n828} data-layer={"236:50068/236:50069/236:50095/236:50108"} data-name={"Vector 3367"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.10255" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.10255 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n829} data-layer={"236:50068/236:50069/236:50095/236:50109"} data-name={"Vector 3368"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.02202" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.02202 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n830} data-layer={"236:50068/236:50069/236:50095/236:50110"} data-name={"Vector 3369"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.26218" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.26218 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n831} data-layer={"236:50068/236:50069/236:50095/236:50111"} data-name={"Vector 3370"}>
        <svg width="100%" height="100%" viewBox="0 0 0 2.17549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.17549 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
    </span>
    <span className={s.n832} data-layer={"236:50068/236:50069/236:50112"} data-name={"Group 6908"}>
      <span className={s.n833} data-layer={"236:50068/236:50069/236:50112/236:50113"} data-name={"Rectangle 3464324"}>
        <svg width="100%" height="100%" viewBox="0 0 12.20648 9.14019" overflow="visible" aria-hidden="true" focusable="false"><path d={"M12.2065 0 L12.2065 9.14019 L0 9.14019 L0 0 L1.64318 0 M10.5633 0 L12.2065 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.7829468250274658} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n834} data-layer={"236:50068/236:50069/236:50112/236:50114"} data-name={"Rectangle 3464325"}>
        <svg width="100%" height="100%" viewBox="0 0 13.14544 3.77647" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.77277 0 L10.3727 0 L13.1454 3.77647 M0 3.77647 L2.77277 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.7829468250274658} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n835} data-layer={"236:50068/236:50069/236:50112/236:50115"} data-name={"Group 6911"}>
        <span className={s.n836} data-layer={"236:50068/236:50069/236:50112/236:50115/236:50116"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 6.14359 6.14359" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.14359 3.07179 C6.14359 4.7683 4.7683 6.14359 3.07179 6.14359 C1.37529 6.14359 0 4.7683 0 3.07179 C0 1.37529 1.37529 0 3.07179 0 C3.63464 0 4.16213 0.151378 4.61577 0.41564"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.4084398746490479} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n837} data-layer={"236:50068/236:50069/236:50112/236:50115/236:50117"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 3.67017 1.79552" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.11688 L1.11946 1.79552 L3.67017 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.4084398746490479} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50118": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50118"} data-name={"Size=24, Tema=off, System=IUFS"}>
  <span className={s.n189} data-layer={"236:50118/236:50119"} data-name={"9"}>
    <span className={s.n189} data-layer={"236:50118/236:50119/236:50120"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n838} data-layer={"236:50118/236:50119/236:50121"} data-name={"Group 6892"}>
      <span className={s.n839} data-layer={"236:50118/236:50119/236:50121/236:50122"} data-name={"Rectangle 3464301"}></span>
      <span className={s.n840} data-layer={"236:50118/236:50119/236:50121/236:50123"} data-name={"Group 6887"}>
        <span className={s.n841} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124"} data-name={"Group 6908"}>
          <span className={s.n842} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124/236:50125"} data-name={"Rectangle 3464324"}>
            <svg width="100%" height="100%" viewBox="0 0 7.08614 5.30609" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.08614 0 L7.08614 5.30609 L0 5.30609 L0 0 L0.953904 0 M6.13224 0 L7.08614 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.0350420475006104} strokeLinecap="round" strokeLinejoin="miter"/></svg>
          </span>
          <span className={s.n843} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124/236:50126"} data-name={"Rectangle 3464325"}>
            <svg width="100%" height="100%" viewBox="0 0 7.63123 2.19233" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.60966 0 L6.02158 0 L7.63123 2.19233 M0 2.19233 L1.60966 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.0350420475006104} strokeLinecap="round" strokeLinejoin="miter"/></svg>
          </span>
          <span className={s.n844} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124/236:50127"} data-name={"Group 6911"}>
            <span className={s.n845} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124/236:50127/236:50128"} data-name={"Ellipse 3197"}>
              <svg width="100%" height="100%" viewBox="0 0 3.56649 3.56649" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.56649 1.78325 C3.56649 2.76811 2.76811 3.56649 1.78325 3.56649 C0.798387 3.56649 0 2.76811 0 1.78325 C0 0.798387 0.798387 0 1.78325 0 C2.10999 0 2.41621 0.0878782 2.67956 0.241289"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={0.8176320195198059} strokeLinecap="round" strokeLinejoin="miter"/></svg>
            </span>
            <span className={s.n846} data-layer={"236:50118/236:50119/236:50121/236:50123/236:50124/236:50127/236:50129"} data-name={"Vector 3371"}>
              <svg width="100%" height="100%" viewBox="0 0 2.13062 1.04234" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0.648372 L0.64987 1.04234 L2.13062 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={0.8176320195198059} strokeLinecap="round" strokeLinejoin="miter"/></svg>
            </span>
          </span>
        </span>
      </span>
      <span className={s.n847} data-layer={"236:50118/236:50119/236:50121/236:50130"} data-name={"Group 6890"}>
        <span className={s.n848} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50131"} data-name={"Group 6888"}>
          <span className={s.n849} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50131/236:50132"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n850} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50131/236:50133"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n851} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50131/236:50134"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n852} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50131/236:50135"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n853} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50136"} data-name={"Group 6889"}>
          <span className={s.n854} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50136/236:50137"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n855} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50136/236:50138"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n856} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50136/236:50139"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n857} data-layer={"236:50118/236:50119/236:50121/236:50130/236:50136/236:50140"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
      <span className={s.n858} data-layer={"236:50118/236:50119/236:50121/236:50141"} data-name={"Group 6891"}>
        <span className={s.n859} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50142"} data-name={"Group 6888"}>
          <span className={s.n860} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50142/236:50143"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n861} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50142/236:50144"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n862} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50142/236:50145"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n863} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50142/236:50146"} data-name={"Rectangle 3464308"}></span>
        </span>
        <span className={s.n864} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50147"} data-name={"Group 6889"}>
          <span className={s.n865} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50147/236:50148"} data-name={"Rectangle 3464305"}></span>
          <span className={s.n866} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50147/236:50149"} data-name={"Rectangle 3464306"}></span>
          <span className={s.n851} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50147/236:50150"} data-name={"Rectangle 3464307"}></span>
          <span className={s.n852} data-layer={"236:50118/236:50119/236:50121/236:50141/236:50147/236:50151"} data-name={"Rectangle 3464308"}></span>
        </span>
      </span>
    </span>
    <span className={s.n867} data-layer={"236:50118/236:50119/236:50152"} data-name={"Group 6894"}>
      <span className={s.n868} data-layer={"236:50118/236:50119/236:50152/236:50153"} data-name={"Vector 3355"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12135" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12135 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n869} data-layer={"236:50118/236:50119/236:50152/236:50154"} data-name={"Vector 3359"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.07841" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.07841 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n870} data-layer={"236:50118/236:50119/236:50152/236:50155"} data-name={"Vector 3356"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12135" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12135 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n871} data-layer={"236:50118/236:50119/236:50152/236:50156"} data-name={"Vector 3360"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.0784" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.0784 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n872} data-layer={"236:50118/236:50119/236:50152/236:50157"} data-name={"Vector 3357"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12136" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12136 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n873} data-layer={"236:50118/236:50119/236:50152/236:50158"} data-name={"Vector 3361"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.02635" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.02635 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n874} data-layer={"236:50118/236:50119/236:50152/236:50159"} data-name={"Vector 3358"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12135" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12135 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n875} data-layer={"236:50118/236:50119/236:50152/236:50160"} data-name={"Vector 3362"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.10066" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.10066 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n876} data-layer={"236:50118/236:50119/236:50152/236:50161"} data-name={"Vector 3363"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12135" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12135 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n877} data-layer={"236:50118/236:50119/236:50152/236:50162"} data-name={"Vector 3364"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.07841" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.07841 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n878} data-layer={"236:50118/236:50119/236:50152/236:50163"} data-name={"Vector 3365"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12135" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12135 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n879} data-layer={"236:50118/236:50119/236:50152/236:50164"} data-name={"Vector 3366"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.0784" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.0784 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n880} data-layer={"236:50118/236:50119/236:50152/236:50165"} data-name={"Vector 3367"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.12136" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.12136 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n881} data-layer={"236:50118/236:50119/236:50152/236:50166"} data-name={"Vector 3368"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.07841" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.07841 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n882} data-layer={"236:50118/236:50119/236:50152/236:50167"} data-name={"Vector 3369"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.2065" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.2065 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n883} data-layer={"236:50118/236:50119/236:50152/236:50168"} data-name={"Vector 3370"}>
        <svg width="100%" height="100%" viewBox="0 0 0 1.16026" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.16026 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.6000001430511475} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50169": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50169"} data-name={"Size=90, Tema=on, System=Geo"}>
  <span className={s.n884} data-layer={"236:50169/236:50170"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n885} data-layer={"236:50169/236:50171"} data-name={"Group 3879"}>
    <span className={s.n886} data-layer={"236:50169/236:50171/236:50172"} data-name={"Group 3882"}>
      <span className={s.n887} data-layer={"236:50169/236:50171/236:50172/236:50173"} data-name={"Group 3878"}>
        <span className={s.n888} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50174"} data-name={"Vector 2994"}>
          <svg width="100%" height="100%" viewBox="0 0 62.54819 57.11865" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1006_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.80815 -0.22798 0.22798 0.67393 0.00158 0.35328)"}><stop offset={0} stopColor={"rgba(196,219,145,1)"}/><stop offset={1} stopColor={"rgba(147,209,10,1)"}/></linearGradient></defs><path d={"M0 57.1187 L0 6.94982 L18.2433 0 L43.4363 6.94982 L62.5482 0 L62.5482 51.9063 L43.4363 57.1187 L18.2433 51.9063 L0 57.1187 Z"} fill={`url(#${uid}-g1006_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n889} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50175"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 62.54842 32.82782" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.2454 0.427448 C17.5434 -0.0670431 18.9654 -0.134299 20.3044 0.235071 L41.4282 6.06199 C42.7346 6.42237 44.1209 6.36751 45.3945 5.90438 L60.1599 0.534646 C61.3208 0.112546 62.5483 0.972318 62.5484 2.20751 L62.5484 22.1689 L43.362 21.191 L18.2943 13.0032 L22.0271 25.8988 L0 32.8278 L0 9.06932 C0.000106164 7.5922 0.912504 6.26858 2.29287 5.74272 L16.2454 0.427448 Z"} fill={"rgba(243,239,217,1)"} fillRule="evenodd"/></svg>
        </span>
        <span className={s.n890} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50176"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 37.70347 21.42256" overflow="visible" aria-hidden="true" focusable="false"><path d={"M33.9907 3.74521 L37.7035 3.46613 L37.7035 13.6723 C37.7035 15.2777 36.629 16.685 35.0801 17.1074 L20.1 21.1923 C19.1084 21.4627 18.067 21.4956 17.0604 21.2874 L6.28793 19.0582 L0 11.7979 L21.0689 0 L33.9907 3.74521 Z"} fill={"rgba(233,233,226,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n891} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50177"} data-name={"Rectangle 3464255"}></span>
        <span className={s.n892} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50178"} data-name={"Rectangle 3464256"}></span>
        <span className={s.n893} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50179"} data-name={"Rectangle 3464257"}></span>
        <span className={s.n894} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50180"} data-name={"Rectangle 3464258"}></span>
        <span className={s.n895} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50181"} data-name={"Rectangle 3464259"}></span>
        <span className={s.n896} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50182"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 18.60673 56.20604" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18.6067 0.000112135 L18.6067 51.763 C17.9643 51.7517 17.3214 51.8354 16.6993 52.0131 L2.26847 56.1366 C1.13154 56.4612 0.000132733 55.6073 0 54.4249 L0 9.06919 C7.4463e-06 7.59196 0.91214 6.26816 2.29259 5.74227 L16.2452 0.427346 C17.0039 0.138363 17.8047 -0.00458615 18.6067 0.000112135 Z"} fill={"rgba(255,255,255,0.4)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n897} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50183"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 19.21447 56.17601" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.826 0.1087 C17.9869 -0.313422 19.2144 0.546336 19.2145 1.78156 L19.2145 48.4276 C19.2144 50.033 18.1395 51.4396 16.5907 51.862 L1.61086 55.9477 C1.08376 56.0914 0.542531 56.1672 0 56.176 L0 5.86783 C0.699216 5.84958 1.39531 5.71975 2.06051 5.47786 L16.826 0.1087 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n898} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50184"} data-name={"Vector 3000"}>
          <svg width="100%" height="100%" viewBox="0 0 62.5501 13.97982" overflow="visible" aria-hidden="true" focusable="false"><path d={"M18.5785 0.0180775 C18.1274 -0.582481 1.44134 13.98 0 13.9798 M62.5501 7.92541 C57.3606 7.92541 47.8419 8.78427 43.2233 9.12817 C40.3793 8.10364 18.825 0.346295 18.5785 0.0180775"} fill="none" stroke={"rgba(235,137,25,1)"} strokeWidth={2.373415470123291} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n899} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50185"} data-name={"Vector 3001"}>
          <svg width="100%" height="100%" viewBox="0 0 15.39036 16.61975" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.14379 3.89462 C5.46275 0.113558 7.39724 -0.853646 10.3869 0.7291 C13.3766 2.31185 18.1249 5.38944 13.3766 6.9722 C8.62828 8.55497 6.69379 8.6429 6.78172 12.424 C6.86966 16.205 0.274793 18.5792 0.0109985 14.4464 C-0.200037 11.1402 2.67826 6.03428 4.14379 3.89462 Z"} fill={"rgba(166,215,244,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n900} data-layer={"236:50169/236:50171/236:50172/236:50173/236:50186"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 24.72651 56.6018" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 C0.570137 0.00336351 1.14088 0.0801274 1.69722 0.233601 L22.8205 6.06121 C23.4446 6.23337 24.087 6.30874 24.7265 6.29205 L24.7265 56.6009 C24.2485 56.6087 23.7694 56.5648 23.298 56.4672 L1.20797 51.8965 C0.809011 51.814 0.404546 51.7699 0 51.7628 L0 0 Z"} fill={"rgba(0,0,0,0.3)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n901} data-layer={"236:50169/236:50171/236:50187"} data-name={"Group 3877"}>
      <span className={s.n902} data-layer={"236:50169/236:50171/236:50187/236:50188"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 30.53465 38.71417" overflow="visible" aria-hidden="true" focusable="false"><path d={"M15.2679 0 C19.3168 7.09337e-05 23.1994 1.59111 26.0625 4.4233 C28.9257 7.25565 30.5347 11.0977 30.5347 15.1033 C30.5346 25.6876 21.2772 34.4394 17.1797 37.7953 C16.5911 38.2773 16.2967 38.5189 15.8584 38.6423 C15.5179 38.7381 15.0168 38.7381 14.6763 38.6423 C14.2388 38.5191 13.9413 38.2755 13.3549 37.7953 C9.25733 34.4394 0 25.6864 0 15.1021 C2.21448e-05 11.0966 1.60901 7.25563 4.47214 4.4233 C7.33527 1.59107 11.2189 0 15.2679 0 Z M15.2679 7.73497 C12.0595 7.73497 9.45819 10.3368 9.45819 13.5461 C9.45819 16.7553 12.0595 19.3571 15.2679 19.3571 C18.4761 19.3568 21.0765 16.7551 21.0765 13.5461 C21.0765 10.337 18.4761 7.73528 15.2679 7.73497 Z"} fill={"rgba(255,100,11,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n903} data-layer={"236:50169/236:50171/236:50187/236:50189"} data-name={"Group 3875"}>
        <span className={s.n904} data-layer={"236:50169/236:50171/236:50187/236:50189/236:50190"} data-name={"Exclude"}>
          <svg width="100%" height="100%" viewBox="0 0 12.80481 12.80922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.4024 0 C9.93858 0 12.8048 2.86811 12.8048 6.40519 C12.8046 9.94206 9.93843 12.8092 6.4024 12.8092 C2.86643 12.8092 0.000244345 9.94202 0 6.40519 C0 2.86816 2.86628 6.88603e-05 6.4024 0 Z M6.4024 1.18937 C3.52248 1.18944 1.18813 3.52458 1.18791 6.40519 C1.18791 9.286 3.52235 11.6221 6.4024 11.6222 C9.28252 11.6222 11.6169 9.28604 11.6169 6.40519 C11.6167 3.52453 9.28238 1.18937 6.4024 1.18937 Z"} fill={"rgba(255,101,29,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n905} data-layer={"236:50169/236:50171/236:50187/236:50189/236:50191"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 6.40231 12.80944" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1023_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0 0)"}><path d={"M6.4024 0 C9.93858 0 12.8048 2.86811 12.8048 6.40519 C12.8046 9.94206 9.93843 12.8092 6.4024 12.8092 C2.86643 12.8092 0.000244345 9.94202 0 6.40519 C0 2.86816 2.86628 6.88603e-05 6.4024 0 Z M6.4024 1.18937 C3.52248 1.18944 1.18813 3.52458 1.18791 6.40519 C1.18791 9.286 3.52235 11.6221 6.4024 11.6222 C9.28252 11.6222 11.6169 9.28604 11.6169 6.40519 C11.6167 3.52453 9.28238 1.18937 6.4024 1.18937 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 6.40256 -1.80747)"}><rect width={9.3810453414917} height={18.16080665588379} rx={0} fill={"black"}/></g></mask></defs><g><rect width={6.402307510375977} height={12.809438705444336} fill={"rgba(218,0,26,1)"} mask={`url(#${uid}-bool1023_1)`}/></g></svg>
        </span>
      </span>
      <span className={s.n906} data-layer={"236:50169/236:50171/236:50187/236:50194"} data-name={"Subtract"}>
        <svg width="100%" height="100%" viewBox="0 0 15.26758 37.40677" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1024_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 -0.00031 -1.30741)"}><path d={"M0 0 C4.04885 7.09337e-05 7.93256 1.59111 10.7956 4.4233 C13.6585 7.25557 15.2675 11.0979 15.2676 15.1033 C15.2676 25.6872 6.01063 34.4392 1.91295 37.7953 C1.32463 38.2771 1.0296 38.5188 0.591634 38.6423 C0.42139 38.6902 0.21041 38.7143 0 38.7143 L0 19.356 L0.00116007 19.3571 C3.20903 19.3565 5.80961 16.7549 5.80961 13.5461 C5.80945 10.3374 3.20893 7.73559 0.00116007 7.73496 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 -6.4027 5.24063)"}><path d={"M6.4024 0 C9.93858 0 12.8048 2.86811 12.8048 6.40519 C12.8046 9.94206 9.93843 12.8092 6.4024 12.8092 C2.86643 12.8092 0.000244345 9.94202 0 6.40519 C0 2.86816 2.86628 6.88603e-05 6.4024 0 Z"} fill={"black"} fillRule="nonzero"/></g></mask></defs><g><rect width={15.267578125} height={37.406768798828125} fill={"rgba(255,48,11,1)"} mask={`url(#${uid}-bool1024_1)`}/></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50197": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50197"} data-name={"Size=60, Tema=on, System=Geo"}>
  <span className={s.n907} data-layer={"236:50197/236:50198"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n908} data-layer={"236:50197/236:50199"} data-name={"Group 3879"}>
    <span className={s.n909} data-layer={"236:50197/236:50199/236:50216"} data-name={"Mask group"}>
      <span className={s.n910} data-layer={"236:50197/236:50199/236:50216/236:50217"} data-name={"Vector 3002"}>
        <svg width="100%" height="100%" viewBox="0 0 40.76041 37.10651" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.3423e-05 4.6245 L11.9441 0 L28.4791 4.6245 L40.7604 0.527568 L40.7604 33.4858 L28.5984 37.1065 L12.0032 33.4858 L-1.3423e-05 36.7596 L-1.3423e-05 4.6245 Z"} fill={"rgba(217,217,217,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n911} data-layer={"236:50197/236:50199/236:50216/236:50218"} data-name={"Group 3878"}>
        <span className={s.n912} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50219"} data-name={"Vector 2994"}>
          <svg width="100%" height="100%" viewBox="0 0 41.69879 38.0791" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1031_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.80815 -0.22798 0.22798 0.67393 0.00158 0.35328)"}><stop offset={0} stopColor={"rgba(196,219,145,1)"}/><stop offset={1} stopColor={"rgba(147,209,10,1)"}/></linearGradient></defs><path d={"M0 38.0791 L0 4.63322 L12.1622 0 L28.9575 4.63322 L41.6988 0 L41.6988 34.6042 L28.9575 38.0791 L12.1622 34.6042 L0 38.0791 Z"} fill={`url(#${uid}-g1031_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n913} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50220"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 41.69895 22.1689" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8303 0.568655 C11.6956 0.238994 12.6436 0.194157 13.5363 0.440404 L27.6188 4.32502 C28.4897 4.56527 29.4139 4.5287 30.263 4.21994 C35.3156 2.38246 41.6989 2.04577e-06 41.6989 2.04577e-06 L41.6989 15.0629 L28.908 14.411 L12.1962 8.95248 L14.6847 17.5495 L0 22.1689 L0 6.3299 C7.07761e-05 5.34515 0.608336 4.46274 1.52858 4.11217 L10.8303 0.568655 Z"} fill={"rgba(243,239,217,0.8)"} fillRule="evenodd"/></svg>
        </span>
        <span className={s.n914} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50221"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 25.13564 14.2817" overflow="visible" aria-hidden="true" focusable="false"><path d={"M22.6604 2.49681 L25.1356 2.31075 L25.1356 9.11483 C25.1356 10.1851 24.4193 11.1233 23.3867 11.4049 L13.4 14.1282 C12.7389 14.3085 12.0446 14.3304 11.3736 14.1916 L4.19195 12.7055 L0 7.86528 L14.0459 0 L22.6604 2.49681 Z"} fill={"rgba(233,233,226,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n915} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50222"} data-name={"Rectangle 3464255"}></span>
        <span className={s.n916} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50223"} data-name={"Rectangle 3464256"}></span>
        <span className={s.n917} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50224"} data-name={"Rectangle 3464257"}></span>
        <span className={s.n918} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50225"} data-name={"Rectangle 3464258"}></span>
        <span className={s.n919} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50226"} data-name={"Rectangle 3464259"}></span>
        <span className={s.n920} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50227"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 12.40449 37.47069" overflow="visible" aria-hidden="true" focusable="false"><path d={"M12.4045 7.47564e-05 L12.4045 34.5086 C11.9762 34.5011 11.5476 34.5569 11.1329 34.6754 L1.51232 37.4244 C0.754359 37.6408 8.84888e-05 37.0715 0 36.2833 L0 6.04612 C4.9642e-06 5.06131 0.608093 4.17877 1.5284 3.82818 L10.8302 0.284897 C11.3359 0.092242 11.8698 -0.00305744 12.4045 7.47564e-05 Z"} fill={"rgba(255,255,255,0.4)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n921} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50228"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 12.80964 36.34106" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.46556 0.343868 C10.0956 -0.786687 12.7375 1.0222 12.8096 3.55708 L12.8096 31.1755 C12.8096 32.2457 12.093 33.1835 11.0605 33.4651 L1.07391 36.1889 C0.722509 36.2847 0.361687 36.3352 0 36.3411 L0 2.80227 C0.466144 2.79011 0.930209 2.70355 1.37368 2.54229 L7.46556 0.343868 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n922} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50229"} data-name={"Vector 3000"}>
          <svg width="100%" height="100%" viewBox="0 0 41.70007 9.31988" overflow="visible" aria-hidden="true" focusable="false"><path d={"M12.3857 0.0120517 C12.0849 -0.388321 0.960893 9.31999 0 9.31988 M41.7001 5.28361 C38.2404 5.28361 31.8946 5.85618 28.8155 6.08544 C26.9195 5.40243 12.55 0.230863 12.3857 0.0120517"} fill="none" stroke={"rgba(235,137,25,1)"} strokeWidth={1.5822769403457642} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n923} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50230"} data-name={"Vector 3001"}>
          <svg width="100%" height="100%" viewBox="0 0 10.26024 11.07983" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.76252 2.59641 C3.64183 0.0757052 4.93149 -0.569097 6.92461 0.486066 C8.91772 1.54123 12.0833 3.59296 8.91772 4.64814 C5.75219 5.70331 4.46253 5.76194 4.52115 8.28264 C4.57977 10.8033 0.183195 12.3861 0.00733233 9.63092 C-0.133358 7.42677 1.78551 4.02285 2.76252 2.59641 Z"} fill={"rgba(166,215,244,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n924} data-layer={"236:50197/236:50199/236:50216/236:50218/236:50231"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 16.4846 37.73356" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 C0.380057 0.00224185 0.760372 0.054121 1.13123 0.156418 L15.2137 4.04102 C15.6298 4.15582 16.0582 4.2058 16.4846 4.19464 L16.4846 37.733 C16.1659 37.7382 15.8465 37.71 15.5321 37.645 L0.805132 34.5983 C0.539188 34.5433 0.269667 34.5137 0 34.5089 L0 0 Z"} fill={"rgba(0,0,0,0.3)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n925} data-layer={"236:50197/236:50199/236:50232"} data-name={"Group 3877"}>
      <span className={s.n926} data-layer={"236:50197/236:50199/236:50232/236:50233"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 26.12758 33.12654" overflow="visible" aria-hidden="true" focusable="false"><path d={"M13.0643 0 C16.5288 6.06958e-05 19.8511 1.36147 22.3009 3.78488 C24.7508 6.20844 26.1276 9.49597 26.1276 12.9234 C26.1275 21.9801 18.2063 29.4688 14.7002 32.3403 C14.1965 32.7528 13.9446 32.9595 13.5695 33.0651 C13.2782 33.1471 12.8495 33.147 12.558 33.0651 C12.1837 32.9597 11.9292 32.7512 11.4274 32.3403 C7.92122 29.4687 0 21.9791 0 12.9224 C1.89487e-05 9.495 1.37678 6.20842 3.82667 3.78488 C6.27656 1.36143 9.59967 0 13.0643 0 Z M13.0643 6.61858 C10.3189 6.61858 8.09309 8.84492 8.09309 11.5909 C8.09309 14.337 10.3189 16.5633 13.0643 16.5633 C15.8094 16.563 18.0345 14.3368 18.0345 11.5909 C18.0345 8.84508 15.8094 6.61884 13.0643 6.61858 Z"} fill={"rgba(255,100,11,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n927} data-layer={"236:50197/236:50199/236:50232/236:50234"} data-name={"Group 3875"}>
        <span className={s.n928} data-layer={"236:50197/236:50199/236:50232/236:50234/236:50235"} data-name={"Exclude"}>
          <svg width="100%" height="100%" viewBox="0 0 10.95669 10.96046" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.47834 0 C8.50414 0 10.9567 2.45416 10.9567 5.48073 C10.9565 8.50712 8.50402 10.9605 5.47834 10.9605 C2.45272 10.9604 0.000209079 8.50709 0 5.48073 C0 2.45419 2.45259 5.89217e-05 5.47834 0 Z M5.47834 1.01771 C3.01408 1.01777 1.01665 3.01587 1.01646 5.48073 C1.01646 7.94575 3.01396 9.94468 5.47834 9.94474 C7.94277 9.94474 9.94023 7.94578 9.94023 5.48073 C9.94004 3.01584 7.94265 1.01771 5.47834 1.01771 Z"} fill={"rgba(255,101,29,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n929} data-layer={"236:50197/236:50199/236:50232/236:50234/236:50236"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 5.47852 10.96094" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1048_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0 0)"}><path d={"M5.47834 0 C8.50414 0 10.9567 2.45416 10.9567 5.48073 C10.9565 8.50712 8.50402 10.9605 5.47834 10.9605 C2.45272 10.9604 0.000209079 8.50709 0 5.48073 C0 2.45419 2.45259 5.89217e-05 5.47834 0 Z M5.47834 1.01771 C3.01408 1.01777 1.01665 3.01587 1.01646 5.48073 C1.01646 7.94575 3.01396 9.94468 5.47834 9.94474 C7.94277 9.94474 9.94023 7.94578 9.94023 5.48073 C9.94004 3.01584 7.94265 1.01771 5.47834 1.01771 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 5.47835 -1.54692)"}><rect width={8.027076721191406} height={15.539650917053223} rx={0} fill={"black"}/></g></mask></defs><g><rect width={5.478515625} height={10.9609375} fill={"rgba(218,0,26,1)"} mask={`url(#${uid}-bool1048_1)`}/></g></svg>
        </span>
      </span>
      <span className={s.n930} data-layer={"236:50197/236:50199/236:50232/236:50239"} data-name={"Subtract"}>
        <svg width="100%" height="100%" viewBox="0 0 13.06366 32.00765" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1049_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 -0.00024 -1.11858)"}><path d={"M0 0 C3.46448 6.06958e-05 6.78765 1.36147 9.23744 3.78488 C11.6872 6.20837 13.064 9.49612 13.064 12.9234 C13.064 21.9798 5.14311 29.4685 1.63685 32.3403 C1.13344 32.7526 0.881002 32.9594 0.506243 33.0651 C0.36057 33.1061 0.180042 33.1266 0 33.1266 L0 16.5623 L0.000992633 16.5633 C2.74587 16.5628 4.97111 14.3366 4.97111 11.5909 C4.97097 8.84536 2.74578 6.61911 0.000992633 6.61858 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 -5.47869 4.48418)"}><path d={"M5.47834 0 C8.50414 0 10.9567 2.45416 10.9567 5.48073 C10.9565 8.50712 8.50402 10.9605 5.47834 10.9605 C2.45272 10.9604 0.000209079 8.50709 0 5.48073 C0 2.45419 2.45259 5.89217e-05 5.47834 0 Z"} fill={"black"} fillRule="nonzero"/></g></mask></defs><g><rect width={13.063661575317383} height={32.00764846801758} fill={"rgba(255,48,11,1)"} mask={`url(#${uid}-bool1049_1)`}/></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50242": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50242"} data-name={"Size=45, Tema=on, System=Geo"}>
  <span className={s.n931} data-layer={"236:50242/236:50243"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n932} data-layer={"236:50242/236:50244"} data-name={"Group 3879"}>
    <span className={s.n933} data-layer={"236:50242/236:50244/236:50261"} data-name={"Mask group"}>
      <span className={s.n934} data-layer={"236:50242/236:50244/236:50261/236:50262"} data-name={"Vector 3002"}>
        <svg width="100%" height="100%" viewBox="0 0 30.5703 27.82989" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.00672e-05 3.46838 L8.95807 0 L21.3593 3.46838 L30.5703 0.395676 L30.5703 25.1143 L21.4488 27.8299 L9.00242 25.1143 L-1.00672e-05 27.5697 L-1.00672e-05 3.46838 Z"} fill={"rgba(217,217,217,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n935} data-layer={"236:50242/236:50244/236:50261/236:50263"} data-name={"Group 3878"}>
        <span className={s.n936} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50264"} data-name={"Vector 2994"}>
          <svg width="100%" height="100%" viewBox="0 0 31.27409 28.55932" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1056_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.80815 -0.22798 0.22798 0.67393 0.00158 0.35328)"}><stop offset={0} stopColor={"rgba(196,219,145,1)"}/><stop offset={1} stopColor={"rgba(147,209,10,1)"}/></linearGradient></defs><path d={"M0 28.5593 L0 3.47491 L9.12163 0 L21.7181 3.47491 L31.2741 0 L31.2741 25.9532 L21.7181 28.5593 L9.12163 25.9532 L0 28.5593 Z"} fill={`url(#${uid}-g1056_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n937} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50265"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 31.27421 16.62667" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.12269 0.426491 C8.77172 0.179246 9.48268 0.145618 10.1522 0.330303 L20.7141 3.24376 C21.3673 3.42395 22.0604 3.39652 22.6972 3.16496 C26.4867 1.78684 31.2742 1.53433e-06 31.2742 1.53433e-06 L31.2742 11.2972 L21.681 10.8083 L9.14715 6.71436 L11.0136 13.1622 L0 16.6267 L0 4.74743 C5.30821e-05 4.00887 0.456252 3.34706 1.14644 3.08412 L8.12269 0.426491 Z"} fill={"rgba(243,239,217,0.8)"} fillRule="evenodd"/></svg>
        </span>
        <span className={s.n938} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50266"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 18.85173 10.71128" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.9953 1.8726 L18.8517 1.73306 L18.8517 6.83613 C18.8517 7.63885 18.3145 8.34248 17.5401 8.55368 L10.05 10.5961 C9.5542 10.7314 9.03348 10.7478 8.53022 10.6437 L3.14397 9.52909 L0 5.89896 L10.5344 0 L16.9953 1.8726 Z"} fill={"rgba(233,233,226,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n939} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50267"} data-name={"Rectangle 3464255"}></span>
        <span className={s.n940} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50268"} data-name={"Rectangle 3464256"}></span>
        <span className={s.n941} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50269"} data-name={"Rectangle 3464257"}></span>
        <span className={s.n942} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50270"} data-name={"Rectangle 3464258"}></span>
        <span className={s.n943} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50271"} data-name={"Rectangle 3464259"}></span>
        <span className={s.n944} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50272"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 9.30336 28.10302" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.30336 5.60673e-05 L9.30336 25.8815 C8.98217 25.8759 8.66069 25.9177 8.34967 26.0065 L1.13424 28.0683 C0.565769 28.2306 6.63666e-05 27.8036 0 27.2124 L0 4.53459 C3.72315e-06 3.79598 0.45607 3.13408 1.1463 2.87114 L8.12261 0.213673 C8.50194 0.0691815 8.90236 -0.00229308 9.30336 5.60673e-05 Z"} fill={"rgba(255,255,255,0.4)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n945} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50273"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 9.60723 27.25579" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.59917 0.257901 C7.57169 -0.590015 9.55314 0.766652 9.60723 2.66781 L9.60723 23.3816 C9.60718 24.1843 9.06976 24.8876 8.29536 25.0988 L0.805431 27.1416 C0.541882 27.2135 0.271265 27.2514 0 27.2558 L0 2.1017 C0.349608 2.09258 0.697657 2.02766 1.03026 1.90672 L5.59917 0.257901 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n946} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50274"} data-name={"Vector 3000"}>
          <svg width="100%" height="100%" viewBox="0 0 31.27505 6.98991" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.28926 0.00903875 C9.0637 -0.291241 0.72067 6.98999 0 6.98991 M31.275 3.9627 C28.6803 3.9627 23.9209 4.39214 21.6117 4.56408 C20.1896 4.05182 9.41252 0.173147 9.28926 0.00903875"} fill="none" stroke={"rgba(235,137,25,1)"} strokeWidth={1.1867077350616455} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n947} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50275"} data-name={"Vector 3001"}>
          <svg width="100%" height="100%" viewBox="0 0 7.69518 8.30987" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.07189 1.94731 C2.73138 0.0567789 3.69862 -0.426823 5.19346 0.36455 C6.68829 1.15592 9.06244 2.69472 6.68829 3.4861 C4.31414 4.27749 3.3469 4.32145 3.39086 6.21198 C3.43483 8.10251 0.137397 9.28958 0.00549925 7.22319 C-0.100019 5.57008 1.33913 3.01714 2.07189 1.94731 Z"} fill={"rgba(166,215,244,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n948} data-layer={"236:50242/236:50244/236:50261/236:50263/236:50276"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 12.36345 28.30017" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 C0.285043 0.00168139 0.570279 0.0405908 0.848426 0.117313 L11.4103 3.03077 C11.7224 3.11686 12.0436 3.15435 12.3634 3.14598 L12.3634 28.2997 C12.1244 28.3036 11.8848 28.2825 11.6491 28.2337 L0.603849 25.9487 C0.404391 25.9075 0.202251 25.8852 0 25.8817 L0 0 Z"} fill={"rgba(0,0,0,0.3)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n949} data-layer={"236:50242/236:50244/236:50277"} data-name={"Group 3877"}>
      <span className={s.n950} data-layer={"236:50242/236:50244/236:50277/236:50278"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 19.59568 24.84491" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.79821 0 C12.3966 4.55218e-05 14.8883 1.0211 16.7257 2.83866 C18.5631 4.65633 19.5957 7.12198 19.5957 9.69255 C19.5956 16.4851 13.6547 22.1016 11.0251 24.2552 C10.6474 24.5646 10.4585 24.7196 10.1772 24.7988 C9.95866 24.8603 9.63709 24.8603 9.41853 24.7988 C9.13776 24.7197 8.94689 24.5634 8.57055 24.2552 C5.94091 22.1015 0 16.4843 0 9.6918 C1.42115e-05 7.12125 1.03258 4.65632 2.87 2.83866 C4.70742 1.02107 7.19975 0 9.79821 0 Z M9.79821 4.96393 C7.73918 4.96393 6.06982 6.63369 6.06982 8.69321 C6.06982 10.7527 7.73918 12.4225 9.79821 12.4225 C11.8571 12.4223 13.5259 10.7526 13.5259 8.69321 C13.5259 6.63381 11.8571 4.96413 9.79821 4.96393 Z"} fill={"rgba(255,100,11,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n951} data-layer={"236:50242/236:50244/236:50277/236:50279"} data-name={"Group 3875"}>
        <span className={s.n952} data-layer={"236:50242/236:50244/236:50277/236:50279/236:50280"} data-name={"Exclude"}>
          <svg width="100%" height="100%" viewBox="0 0 8.21751 8.22035" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.10876 0 C6.37811 0 8.21751 1.84062 8.21751 4.11055 C8.21736 6.38034 6.37801 8.22035 4.10876 8.22035 C1.83954 8.2203 0.000156809 6.38031 0 4.11055 C0 1.84065 1.83944 4.41913e-05 4.10876 0 Z M4.10876 0.763281 C2.26056 0.763325 0.762487 2.26191 0.762342 4.11055 C0.762342 5.95931 2.26047 7.45851 4.10876 7.45856 C5.95708 7.45856 7.45517 5.95934 7.45517 4.11055 C7.45503 2.26188 5.95699 0.763281 4.10876 0.763281 Z"} fill={"rgba(255,101,29,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n953} data-layer={"236:50242/236:50244/236:50277/236:50279/236:50281"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 4.1084 8.2207" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1073_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0 0)"}><path d={"M4.10876 0 C6.37811 0 8.21751 1.84062 8.21751 4.11055 C8.21736 6.38034 6.37801 8.22035 4.10876 8.22035 C1.83954 8.2203 0.000156809 6.38031 0 4.11055 C0 1.84065 1.83944 4.41913e-05 4.10876 0 Z M4.10876 0.763281 C2.26056 0.763325 0.762487 2.26191 0.762342 4.11055 C0.762342 5.95931 2.26047 7.45851 4.10876 7.45856 C5.95708 7.45856 7.45517 5.95934 7.45517 4.11055 C7.45503 2.26188 5.95699 0.763281 4.10876 0.763281 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 4.10883 -1.16003)"}><rect width={6.020307540893555} height={11.654738426208496} rx={0} fill={"black"}/></g></mask></defs><g><rect width={4.1083984375} height={8.220703125} fill={"rgba(218,0,26,1)"} mask={`url(#${uid}-bool1073_1)`}/></g></svg>
        </span>
      </span>
      <span className={s.n954} data-layer={"236:50242/236:50244/236:50277/236:50284"} data-name={"Subtract"}>
        <svg width="100%" height="100%" viewBox="0 0 9.79775 24.00574" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1074_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 -0.00012 -0.83887)"}><path d={"M0 0 C2.59836 4.55218e-05 5.09074 1.0211 6.92808 2.83866 C8.76538 4.65628 9.79798 7.12209 9.79803 9.69255 C9.79799 16.4848 3.85733 22.1014 1.22764 24.2552 C0.850083 24.5644 0.660751 24.7196 0.379682 24.7988 C0.270428 24.8296 0.135031 24.845 0 24.845 L0 12.4217 L0.000744475 12.4225 C2.0594 12.4221 3.72833 10.7525 3.72833 8.69321 C3.72823 6.63402 2.05934 4.96433 0.000744475 4.96393 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 -4.10901 3.3634)"}><path d={"M4.10876 0 C6.37811 0 8.21751 1.84062 8.21751 4.11055 C8.21736 6.38034 6.37801 8.22035 4.10876 8.22035 C1.83954 8.2203 0.000156809 6.38031 0 4.11055 C0 1.84065 1.83944 4.41913e-05 4.10876 0 Z"} fill={"black"} fillRule="nonzero"/></g></mask></defs><g><rect width={9.797746658325195} height={24.0057373046875} fill={"rgba(255,48,11,1)"} mask={`url(#${uid}-bool1074_1)`}/></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50287": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50287"} data-name={"Size=30, Tema=on, System=Geo"}>
  <span className={s.n955} data-layer={"236:50287/236:50288"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n956} data-layer={"236:50287/236:50289"} data-name={"Group 3879"}>
    <span className={s.n957} data-layer={"236:50287/236:50289/236:50306"} data-name={"Mask group"}>
      <span className={s.n958} data-layer={"236:50287/236:50289/236:50306/236:50307"} data-name={"Vector 3002"}>
        <svg width="100%" height="100%" viewBox="0 0 20.3802 18.55326" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-6.71148e-06 2.31225 L5.97204 0 L14.2395 2.31225 L20.3802 0.263784 L20.3802 16.7429 L14.2992 18.5533 L6.00161 16.7429 L-6.71148e-06 18.3798 L-6.71148e-06 2.31225 Z"} fill={"rgba(217,217,217,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n959} data-layer={"236:50287/236:50289/236:50306/236:50308"} data-name={"Group 3878"}>
        <span className={s.n960} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50309"} data-name={"Vector 2994"}>
          <svg width="100%" height="100%" viewBox="0 0 20.8494 19.03955" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1081_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.80815 -0.22798 0.22798 0.67393 0.00158 0.35328)"}><stop offset={0} stopColor={"rgba(196,219,145,1)"}/><stop offset={1} stopColor={"rgba(147,209,10,1)"}/></linearGradient></defs><path d={"M0 19.0395 L0 2.31661 L6.08109 0 L14.4788 2.31661 L20.8494 0 L20.8494 17.3021 L14.4788 19.0395 L6.08109 17.3021 L0 19.0395 Z"} fill={`url(#${uid}-g1081_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n961} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50310"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 20.84947 11.08445" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.41513 0.284327 C5.84781 0.119497 6.32179 0.0970785 6.76814 0.220202 L13.8094 2.16251 C14.2449 2.28263 14.707 2.26435 15.1315 2.10997 C17.6578 1.19123 20.8495 1.02289e-06 20.8495 1.02289e-06 L20.8495 7.53147 L14.454 7.20551 L6.0981 4.47624 L7.34237 8.77477 L0 11.0844 L0 3.16495 C3.53881e-05 2.67258 0.304168 2.23137 0.764291 2.05608 L5.41513 0.284327 Z"} fill={"rgba(243,239,217,0.8)"} fillRule="evenodd"/></svg>
        </span>
        <span className={s.n962} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50311"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 12.56782 7.14085" overflow="visible" aria-hidden="true" focusable="false"><path d={"M11.3302 1.2484 L12.5678 1.15538 L12.5678 4.55742 C12.5678 5.09257 12.2097 5.56165 11.6934 5.70246 L6.70001 7.0641 C6.36947 7.15425 6.02232 7.16521 5.68682 7.0958 L2.09598 6.35273 L0 3.93264 L7.02296 0 L11.3302 1.2484 Z"} fill={"rgba(233,233,226,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n963} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50312"} data-name={"Rectangle 3464255"}></span>
        <span className={s.n964} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50313"} data-name={"Rectangle 3464256"}></span>
        <span className={s.n965} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50314"} data-name={"Rectangle 3464257"}></span>
        <span className={s.n966} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50315"} data-name={"Rectangle 3464258"}></span>
        <span className={s.n967} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50316"} data-name={"Rectangle 3464259"}></span>
        <span className={s.n968} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50317"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 6.20224 18.73535" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.20224 3.73782e-05 L6.20224 17.2543 C5.98811 17.2506 5.77379 17.2785 5.56644 17.3377 L0.756158 18.7122 C0.377179 18.8204 4.42444e-05 18.5358 0 18.1416 L0 3.02306 C2.4821e-06 2.53065 0.304047 2.08939 0.764198 1.91409 L5.41508 0.142449 C5.66796 0.046121 5.93491 -0.00152872 6.20224 3.73782e-05 Z"} fill={"rgba(255,255,255,0.4)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n969} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50318"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 6.40482 18.17053" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.73278 0.171934 C5.0478 -0.393343 6.36876 0.511101 6.40482 1.77854 L6.40482 15.5877 C6.40479 16.1229 6.04651 16.5917 5.53024 16.7325 L0.536954 18.0944 C0.361255 18.1423 0.180844 18.1676 0 18.1705 L0 1.40113 C0.233072 1.39505 0.465105 1.35178 0.686838 1.27115 L3.73278 0.171934 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n970} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50319"} data-name={"Vector 3000"}>
          <svg width="100%" height="100%" viewBox="0 0 20.85003 4.65994" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.19284 0.00602583 C6.04247 -0.19416 0.480447 4.66 0 4.65994 M20.85 2.6418 C19.1202 2.6418 15.9473 2.92809 14.4078 3.04272 C13.4598 2.70121 6.27502 0.115432 6.19284 0.00602583"} fill="none" stroke={"rgba(235,137,25,1)"} strokeWidth={0.7911385297775269} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n971} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50320"} data-name={"Vector 3001"}>
          <svg width="100%" height="100%" viewBox="0 0 5.13012 5.53991" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.38126 1.29821 C1.82092 0.0378526 2.46575 -0.284549 3.4623 0.243033 C4.45886 0.770615 6.04163 1.79648 4.45886 2.32407 C2.87609 2.85166 2.23126 2.88097 2.26057 4.14132 C2.28989 5.40167 0.0915977 6.19305 0.00366617 4.81546 C-0.0666791 3.71339 0.892753 2.01143 1.38126 1.29821 Z"} fill={"rgba(166,215,244,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n972} data-layer={"236:50287/236:50289/236:50306/236:50308/236:50321"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 8.2423 18.86678" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 C0.190028 0.00112093 0.380186 0.0270605 0.565617 0.0782088 L7.60685 2.02051 C7.81492 2.07791 8.02908 2.1029 8.2423 2.09732 L8.2423 18.8665 C8.08293 18.8691 7.92323 18.855 7.76606 18.8225 L0.402566 17.2992 C0.269594 17.2716 0.134834 17.2568 0 17.2545 L0 0 Z"} fill={"rgba(0,0,0,0.3)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n973} data-layer={"236:50287/236:50289/236:50322"} data-name={"Group 3877"}>
      <span className={s.n974} data-layer={"236:50287/236:50289/236:50322/236:50323"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 13.06379 16.56327" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.53214 0 C8.26441 3.03479e-05 9.92553 0.680733 11.1505 1.89244 C12.3754 3.10422 13.0638 4.74798 13.0638 6.4617 C13.0638 10.9901 9.10314 14.7344 7.35009 16.1701 C7.09826 16.3764 6.9723 16.4797 6.78477 16.5325 C6.63911 16.5735 6.42473 16.5735 6.27902 16.5325 C6.09184 16.4798 5.96459 16.3756 5.7137 16.1701 C3.96061 14.7344 0 10.9895 0 6.4612 C9.47433e-06 4.7475 0.688389 3.10421 1.91334 1.89244 C3.13828 0.680714 4.79984 0 6.53214 0 Z M6.53214 3.30929 C5.15945 3.30929 4.04654 4.42246 4.04654 5.79547 C4.04654 7.16849 5.15945 8.28166 6.53214 8.28166 C7.90472 8.28152 9.01725 7.1684 9.01725 5.79547 C9.01725 4.42254 7.90472 3.30942 6.53214 3.30929 Z"} fill={"rgba(255,100,11,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n975} data-layer={"236:50287/236:50289/236:50322/236:50324"} data-name={"Group 3875"}>
        <span className={s.n976} data-layer={"236:50287/236:50289/236:50322/236:50324/236:50325"} data-name={"Exclude"}>
          <svg width="100%" height="100%" viewBox="0 0 5.47834 5.48023" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.73917 0 C4.25207 0 5.47834 1.22708 5.47834 2.74036 C5.47824 4.25356 4.25201 5.48023 2.73917 5.48023 C1.22636 5.4802 0.000104539 4.25354 0 2.74036 C0 1.2271 1.2263 2.94608e-05 2.73917 0 Z M2.73917 0.508854 C1.50704 0.508883 0.508325 1.50794 0.508228 2.74036 C0.508228 3.97287 1.50698 4.97234 2.73917 4.97237 C3.97139 4.97237 4.97011 3.97289 4.97011 2.74036 C4.97002 1.50792 3.97133 0.508854 2.73917 0.508854 Z"} fill={"rgba(255,101,29,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n977} data-layer={"236:50287/236:50289/236:50322/236:50324/236:50326"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 2.73926 5.48047" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1098_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0 0)"}><path d={"M2.73917 0 C4.25207 0 5.47834 1.22708 5.47834 2.74036 C5.47824 4.25356 4.25201 5.48023 2.73917 5.48023 C1.22636 5.4802 0.000104539 4.25354 0 2.74036 C0 1.2271 1.2263 2.94608e-05 2.73917 0 Z M2.73917 0.508854 C1.50704 0.508883 0.508325 1.50794 0.508228 2.74036 C0.508228 3.97287 1.50698 4.97234 2.73917 4.97237 C3.97139 4.97237 4.97011 3.97289 4.97011 2.74036 C4.97002 1.50792 3.97133 0.508854 2.73917 0.508854 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 2.73914 -0.77405)"}><rect width={4.013538360595703} height={7.769825458526611} rx={0} fill={"black"}/></g></mask></defs><g><rect width={2.7392578125} height={5.48046875} fill={"rgba(218,0,26,1)"} mask={`url(#${uid}-bool1098_1)`}/></g></svg>
        </span>
      </span>
      <span className={s.n978} data-layer={"236:50287/236:50289/236:50322/236:50329"} data-name={"Subtract"}>
        <svg width="100%" height="100%" viewBox="0 0 6.53223 16.00371" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1099_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 -0.00012 -0.55916)"}><path d={"M0 0 C1.73224 3.03479e-05 3.39382 0.680733 4.61872 1.89244 C5.84359 3.10418 6.53199 4.74806 6.53202 6.4617 C6.532 10.9899 2.57156 14.7343 0.818426 16.1701 C0.566722 16.3763 0.440501 16.4797 0.253121 16.5325 C0.180285 16.553 0.0900209 16.5633 0 16.5633 L0 8.28116 L0.000496317 8.28166 C1.37293 8.28139 2.48555 7.16832 2.48555 5.79547 C2.48549 4.42268 1.37289 3.30956 0.000496317 3.30929 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 -2.73938 2.24235)"}><path d={"M2.73917 0 C4.25207 0 5.47834 1.22708 5.47834 2.74036 C5.47824 4.25356 4.25201 5.48023 2.73917 5.48023 C1.22636 5.4802 0.000104539 4.25354 0 2.74036 C0 1.2271 1.2263 2.94608e-05 2.73917 0 Z"} fill={"black"} fillRule="nonzero"/></g></mask></defs><g><rect width={6.5322265625} height={16.003707885742188} fill={"rgba(255,48,11,1)"} mask={`url(#${uid}-bool1099_1)`}/></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50332": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50332"} data-name={"Size=24, Tema=on, System=Geo"}>
  <span className={s.n979} data-layer={"236:50332/236:50333"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n980} data-layer={"236:50332/236:50334"} data-name={"Group 3879"}>
    <span className={s.n981} data-layer={"236:50332/236:50334/236:50351"} data-name={"Mask group"}>
      <span className={s.n982} data-layer={"236:50332/236:50334/236:50351/236:50352"} data-name={"Vector 3002"}>
        <svg width="100%" height="100%" viewBox="0 0 16.30416 14.84261" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-5.36918e-06 1.8498 L4.77764 0 L11.3916 1.8498 L16.3042 0.211027 L16.3042 13.3943 L11.4393 14.8426 L4.80129 13.3943 L-5.36918e-06 14.7038 L-5.36918e-06 1.8498 Z"} fill={"rgba(217,217,217,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n983} data-layer={"236:50332/236:50334/236:50351/236:50353"} data-name={"Group 3878"}>
        <span className={s.n984} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50354"} data-name={"Vector 2994"}>
          <svg width="100%" height="100%" viewBox="0 0 16.67952 15.23164" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1106_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.80815 -0.22798 0.22798 0.67393 0.00158 0.35328)"}><stop offset={0} stopColor={"rgba(196,219,145,1)"}/><stop offset={1} stopColor={"rgba(147,209,10,1)"}/></linearGradient></defs><path d={"M0 15.2316 L0 1.85329 L4.86487 0 L11.583 1.85329 L16.6795 0 L16.6795 13.8417 L11.583 15.2316 L4.86487 13.8417 L0 15.2316 Z"} fill={`url(#${uid}-g1106_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n985} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50355"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 16.67958 8.86756" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.3321 0.227462 C4.67825 0.0955978 5.05743 0.0776628 5.41451 0.176162 L11.0475 1.73001 C11.3959 1.82611 11.7656 1.81148 12.1052 1.68798 C14.1262 0.952983 16.6796 8.18308e-07 16.6796 8.18308e-07 L16.6796 6.02518 L11.5632 5.76441 L4.87848 3.58099 L5.87389 7.01982 L0 8.86756 L0 2.53196 C2.83105e-05 2.13806 0.243334 1.7851 0.611433 1.64487 L4.3321 0.227462 Z"} fill={"rgba(243,239,217,0.8)"} fillRule="evenodd"/></svg>
        </span>
        <span className={s.n986} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50356"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 10.05426 5.71268" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.06418 0.998722 L10.0543 0.924301 L10.0543 3.64593 C10.0543 4.07405 9.76773 4.44932 9.35469 4.56197 L5.36 5.65128 C5.09557 5.7234 4.81786 5.73217 4.54945 5.67664 L1.67678 5.08218 L0 3.14611 L5.61837 0 L9.06418 0.998722 Z"} fill={"rgba(233,233,226,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n987} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50357"} data-name={"Rectangle 3464255"}></span>
        <span className={s.n988} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50358"} data-name={"Rectangle 3464256"}></span>
        <span className={s.n989} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50359"} data-name={"Rectangle 3464257"}></span>
        <span className={s.n990} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50360"} data-name={"Rectangle 3464258"}></span>
        <span className={s.n991} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50361"} data-name={"Rectangle 3464259"}></span>
        <span className={s.n992} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50362"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 4.96179 14.98828" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.96179 2.99026e-05 L4.96179 13.8035 C4.79049 13.8005 4.61904 13.8228 4.45316 13.8702 L0.604927 14.9698 C0.301743 15.0563 3.53955e-05 14.8286 0 14.5133 L0 2.41845 C1.98568e-06 2.02452 0.243237 1.67151 0.611358 1.53127 L4.33206 0.113959 C4.53437 0.0368968 4.74793 -0.00122297 4.96179 2.99026e-05 Z"} fill={"rgba(255,255,255,0.4)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n993} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50363"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 5.12386 14.53642" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.98623 0.137547 C4.03824 -0.314675 5.09501 0.408881 5.12386 1.42283 L5.12386 12.4702 C5.12383 12.8983 4.83721 13.2734 4.42419 13.386 L0.429563 14.4755 C0.289004 14.5139 0.144675 14.5341 0 14.5364 L0 1.12091 C0.186457 1.11604 0.372084 1.08142 0.54947 1.01692 L2.98623 0.137547 Z"} fill={"rgba(248,248,248,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n994} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50364"} data-name={"Vector 3000"}>
          <svg width="100%" height="100%" viewBox="0 0 16.68003 3.72795" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.95427 0.00482067 C4.83398 -0.155328 0.384357 3.728 0 3.72795 M16.68 2.11344 C15.2962 2.11344 12.7578 2.34247 11.5262 2.43418 C10.7678 2.16097 5.02001 0.0923453 4.95427 0.00482067"} fill="none" stroke={"rgba(235,137,25,1)"} strokeWidth={0.6329108476638794} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n995} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50365"} data-name={"Vector 3001"}>
          <svg width="100%" height="100%" viewBox="0 0 4.1041 4.43193" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.10501 1.03857 C1.45673 0.0302821 1.9726 -0.227639 2.76984 0.194427 C3.56709 0.616492 4.8333 1.43718 3.56709 1.85925 C2.30088 2.28133 1.78501 2.30477 1.80846 3.31306 C1.83191 4.32134 0.0732782 4.95444 0.00293293 3.85237 C-0.0533432 2.97071 0.714202 1.60914 1.10501 1.03857 Z"} fill={"rgba(166,215,244,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n996} data-layer={"236:50332/236:50334/236:50351/236:50353/236:50366"} data-name={"Intersect"}>
          <svg width="100%" height="100%" viewBox="0 0 6.59384 15.09342" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 C0.152023 0.000896741 0.304149 0.0216484 0.452494 0.062567 L6.08548 1.61641 C6.25194 1.66233 6.42327 1.68232 6.59384 1.67786 L6.59384 15.0932 C6.46634 15.0953 6.33858 15.084 6.21285 15.058 L0.322053 13.8393 C0.215675 13.8173 0.107867 13.8055 0 13.8036 L0 0 Z"} fill={"rgba(0,0,0,0.3)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n997} data-layer={"236:50332/236:50334/236:50367"} data-name={"Group 3877"}>
      <span className={s.n998} data-layer={"236:50332/236:50334/236:50367/236:50368"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 10.45103 13.25062" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.22571 0 C6.61153 2.42783e-05 7.94043 0.544586 8.92036 1.51395 C9.90033 2.48338 10.451 3.79839 10.451 5.16936 C10.451 8.79205 7.28252 11.7875 5.88007 12.9361 C5.67861 13.1011 5.57784 13.1838 5.42782 13.226 C5.31129 13.2588 5.13978 13.2588 5.02321 13.226 C4.87347 13.1839 4.77167 13.1005 4.57096 12.9361 C3.16849 11.7875 0 8.79163 0 5.16896 C7.57946e-06 3.798 0.550711 2.48337 1.53067 1.51395 C2.51063 0.544571 3.83987 0 5.22571 0 Z M5.22571 2.64743 C4.12756 2.64743 3.23723 3.53797 3.23723 4.63638 C3.23723 5.73479 4.12756 6.62533 5.22571 6.62533 C6.32378 6.62522 7.2138 5.73472 7.2138 4.63638 C7.2138 3.53803 6.32377 2.64754 5.22571 2.64743 Z"} fill={"rgba(255,100,11,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n999} data-layer={"236:50332/236:50334/236:50367/236:50369"} data-name={"Group 3875"}>
        <span className={s.n1000} data-layer={"236:50332/236:50334/236:50367/236:50369/236:50370"} data-name={"Exclude"}>
          <svg width="100%" height="100%" viewBox="0 0 4.38267 4.38419" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.19134 0 C3.40166 0 4.38267 0.981663 4.38267 2.19229 C4.38259 3.40285 3.40161 4.38419 2.19134 4.38419 C0.981088 4.38416 8.36315e-05 3.40283 0 2.19229 C0 0.981677 0.981036 2.35687e-05 2.19134 0 Z M2.19134 0.407083 C1.20563 0.407107 0.40666 1.20635 0.406583 2.19229 C0.406583 3.1783 1.20559 3.97787 2.19134 3.9779 C3.17711 3.9779 3.97609 3.17831 3.97609 2.19229 C3.97601 1.20633 3.17706 0.407083 2.19134 0.407083 Z"} fill={"rgba(255,101,29,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n1001} data-layer={"236:50332/236:50334/236:50367/236:50369/236:50371"} data-name={"Subtract"}>
          <svg width="100%" height="100%" viewBox="0 0 2.19141 4.38379" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1123_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0.0001 -0.00039)"}><path d={"M2.19134 0 C3.40166 0 4.38267 0.981663 4.38267 2.19229 C4.38259 3.40285 3.40161 4.38419 2.19134 4.38419 C0.981088 4.38416 8.36315e-05 3.40283 0 2.19229 C0 0.981677 0.981036 2.35687e-05 2.19134 0 Z M2.19134 0.407083 C1.20563 0.407107 0.40666 1.20635 0.406583 2.19229 C0.406583 3.1783 1.20559 3.97787 2.19134 3.9779 C3.17711 3.9779 3.97609 3.17831 3.97609 2.19229 C3.97601 1.20633 3.17706 0.407083 2.19134 0.407083 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 2.1915 -0.61992)"}><rect width={3.2108306884765625} height={6.215860366821289} rx={0} fill={"black"}/></g></mask></defs><g><rect width={2.19140625} height={4.3837890625} fill={"rgba(218,0,26,1)"} mask={`url(#${uid}-bool1123_1)`}/></g></svg>
        </span>
      </span>
      <span className={s.n1002} data-layer={"236:50332/236:50334/236:50367/236:50374"} data-name={"Subtract"}>
        <svg width="100%" height="100%" viewBox="0 0 5.22559 12.80265" overflow="visible" aria-hidden="true"><defs><mask id={`${uid}-bool1124_1`} maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000"><g transform={"matrix(1 0 0 1 0.0001 -0.44766)"}><path d={"M0 0 C1.38579 2.42783e-05 2.71506 0.544586 3.69498 1.51395 C4.67487 2.48335 5.22559 3.79845 5.22562 5.16936 C5.2256 8.79191 2.05725 11.7874 0.654741 12.9361 C0.453378 13.101 0.352401 13.1838 0.202497 13.226 C0.144228 13.2424 0.0720167 13.2507 0 13.2507 L0 6.62493 L0.000397053 6.62533 C1.09835 6.62511 1.98844 5.73466 1.98844 4.63638 C1.98839 3.53815 1.09831 2.64764 0.000397053 2.64743 L0 0 Z"} fill={"white"} fillRule="nonzero"/></g><g transform={"matrix(1 0 0 1 -2.19131 1.79375)"}><path d={"M2.19134 0 C3.40166 0 4.38267 0.981663 4.38267 2.19229 C4.38259 3.40285 3.40161 4.38419 2.19134 4.38419 C0.981088 4.38416 8.36315e-05 3.40283 0 2.19229 C0 0.981677 0.981036 2.35687e-05 2.19134 0 Z"} fill={"black"} fillRule="nonzero"/></g></mask></defs><g><rect width={5.2255859375} height={12.802651405334473} fill={"rgba(255,48,11,1)"} mask={`url(#${uid}-bool1124_1)`}/></g></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50377": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50377"} data-name={"Size=60, Tema=off, System=Geo"}>
  <span className={s.n1003} data-layer={"236:50377/236:50378"} data-name={"Group 6912"}>
    <span className={s.n1004} data-layer={"236:50377/236:50378/236:50379"} data-name={"Line 19"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={10.951114654541016} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1005} data-layer={"236:50377/236:50378/236:50380"} data-name={"Vector 3002"}>
      <svg width="100%" height="100%" viewBox="0 0 38.10674 34.79886" overflow="visible" aria-hidden="true" focusable="false"><path d={"M26.463 4.2341 L38.1067 0 L38.1067 31.6233 L26.463 34.7989 L11.1145 31.6233 L0 34.7989 L0 15.861 C0 15.861 2.1108 18.3969 3.58472 19.909 C5.10186 21.4653 7.66108 23.6983 7.66108 23.6983 C7.66108 23.6983 12.9114 19.3555 16.8086 13.5647 C20.7058 7.77387 19.3658 2.24224 19.3658 2.24224 L26.463 4.2341 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4.569286346435547} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1006} data-layer={"236:50377/236:50378/236:50381"} data-name={"Line 18"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={30.830440521240234} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1007} data-layer={"236:50377/236:50378/236:50382"} data-name={"Group 3877"}>
      <span className={s.n1008} data-layer={"236:50377/236:50378/236:50382/236:50383"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 23.87687 30.27293" overflow="visible" aria-hidden="true" focusable="false"><path d={"M11.9389 0 C15.105 5.54673e-05 18.141 1.24418 20.3798 3.45884 C22.6187 5.67363 23.8769 8.67796 23.8769 11.8101 C23.8768 20.0867 16.6379 26.9303 13.4339 29.5544 C12.9736 29.9313 12.7434 30.1202 12.4006 30.2168 C12.1344 30.2917 11.7426 30.2916 11.4762 30.2168 C11.1341 30.1204 10.9016 29.9299 10.443 29.5544 C7.23886 26.9302 0 20.0857 0 11.8092 C1.73164e-05 8.67707 1.25818 5.67361 3.49703 3.45884 C5.73588 1.24415 8.77273 0 11.9389 0 Z M11.9389 6.04843 C9.43001 6.04843 7.39593 8.08299 7.39593 10.5925 C7.39593 13.1019 9.43001 15.1365 11.9389 15.1365 C14.4476 15.1363 16.4809 13.1018 16.4809 10.5925 C16.4809 8.08314 14.4476 6.04868 11.9389 6.04843 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5.026214599609375} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:50377/236:50384"} data-name={"Rectangle 3464326"}></span>
</Root>);
case "236:50385": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50385"} data-name={"Size=45, Tema=off, System=Geo"}>
  <span className={s.n1009} data-layer={"236:50385/236:50386"} data-name={"Group 6912"}>
    <span className={s.n1010} data-layer={"236:50385/236:50386/236:50387"} data-name={"Line 19"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={8.213335990905762} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1011} data-layer={"236:50385/236:50386/236:50388"} data-name={"Vector 3002"}>
      <svg width="100%" height="100%" viewBox="0 0 28.58006 26.09914" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.8473 3.17557 L28.5801 0 L28.5801 23.7175 L19.8473 26.0991 L8.33587 23.7175 L0 26.0991 L0 11.8958 C0 11.8958 1.5831 13.7977 2.68854 14.9317 C3.8264 16.099 5.74581 17.7737 5.74581 17.7737 C5.74581 17.7737 9.68356 14.5166 12.6065 10.1735 C15.5293 5.8304 14.5244 1.68168 14.5244 1.68168 L19.8473 3.17557 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.42696475982666} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1012} data-layer={"236:50385/236:50386/236:50389"} data-name={"Line 18"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={23.12282943725586} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1013} data-layer={"236:50385/236:50386/236:50390"} data-name={"Group 3877"}>
      <span className={s.n1014} data-layer={"236:50385/236:50386/236:50390/236:50391"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 17.90766 22.7047" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.95417 0 C11.3287 4.16005e-05 13.6058 0.933139 15.2849 2.59413 C16.964 4.25522 17.9077 6.50847 17.9077 8.85761 C17.9076 15.065 12.4785 20.1977 10.0754 22.1658 C9.7302 22.4485 9.55753 22.5902 9.30047 22.6626 C9.10079 22.7188 8.80693 22.7187 8.60719 22.6626 C8.3506 22.5903 8.17618 22.4475 7.83226 22.1658 C5.42915 20.1976 0 15.0643 0 8.85693 C1.29873e-05 6.50781 0.943634 4.25521 2.62277 2.59413 C4.30191 0.933113 6.57955 0 8.95417 0 Z M8.95417 4.53632 C7.0725 4.53632 5.54694 6.06224 5.54694 7.94435 C5.54694 9.82646 7.0725 11.3524 8.95417 11.3524 C10.8357 11.3522 12.3607 9.82635 12.3607 7.94435 C12.3607 6.06236 10.8357 4.53651 8.95417 4.53632 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.7696609497070312} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:50385/236:50392"} data-name={"Rectangle 3464326"}></span>
</Root>);
case "236:50393": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50393"} data-name={"Size=30, Tema=off, System=Geo"}>
  <span className={s.n1015} data-layer={"236:50393/236:50394"} data-name={"Group 6912"}>
    <span className={s.n1016} data-layer={"236:50393/236:50394/236:50395"} data-name={"Line 19"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={5.475557327270508} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1017} data-layer={"236:50393/236:50394/236:50396"} data-name={"Vector 3002"}>
      <svg width="100%" height="100%" viewBox="0 0 19.05337 17.39943" overflow="visible" aria-hidden="true" focusable="false"><path d={"M13.2315 2.11705 L19.0534 0 L19.0534 15.8117 L13.2315 17.3994 L5.55725 15.8117 L0 17.3994 L0 7.93052 C0 7.93052 1.0554 9.19846 1.79236 9.95448 C2.55093 10.7327 3.83054 11.8491 3.83054 11.8491 C3.83054 11.8491 6.45571 9.67775 8.4043 6.78234 C10.3529 3.88693 9.68291 1.12112 9.68291 1.12112 L13.2315 2.11705 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.2846431732177734} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1018} data-layer={"236:50393/236:50394/236:50397"} data-name={"Line 18"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={15.4152193069458} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1019} data-layer={"236:50393/236:50394/236:50398"} data-name={"Group 3877"}>
      <span className={s.n1020} data-layer={"236:50393/236:50394/236:50398/236:50399"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 11.93844 15.13646" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.96945 0 C7.55249 2.77336e-05 9.07052 0.622092 10.1899 1.72942 C11.3094 2.83681 11.9384 4.33898 11.9384 5.90507 C11.9384 10.0434 8.31897 13.4651 6.71693 14.7772 C6.4868 14.9657 6.37169 15.0601 6.20031 15.1084 C6.0672 15.1458 5.87129 15.1458 5.73812 15.1084 C5.56707 15.0602 5.45079 14.965 5.22151 14.7772 C3.61943 13.4651 0 10.0429 0 5.90462 C8.65818e-06 4.33854 0.629089 2.83681 1.74852 1.72942 C2.86794 0.622075 4.38636 0 5.96945 0 Z M5.96945 3.02422 C4.715 3.02422 3.69796 4.0415 3.69796 5.29623 C3.69796 6.55097 4.715 7.56825 5.96945 7.56825 C7.22378 7.56813 8.24047 6.5509 8.24047 5.29623 C8.24047 4.04157 7.22378 3.02434 5.96945 3.02422 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5131072998046875} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:50393/236:50400"} data-name={"Rectangle 3464326"}></span>
</Root>);
case "236:50401": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50401"} data-name={"Size=24, Tema=off, System=Geo"}>
  <span className={s.n1021} data-layer={"236:50401/236:50402"} data-name={"Group 6912"}>
    <span className={s.n1022} data-layer={"236:50401/236:50402/236:50403"} data-name={"Line 19"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={4.380445957183838} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1023} data-layer={"236:50401/236:50402/236:50404"} data-name={"Vector 3002"}>
      <svg width="100%" height="100%" viewBox="0 0 15.2427 13.91954" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.5852 1.69364 L15.2427 0 L15.2427 12.6493 L10.5852 13.9195 L4.4458 12.6493 L0 13.9195 L0 6.34442 C0 6.34442 0.84432 7.35877 1.43389 7.96359 C2.04074 8.58614 3.06443 9.4793 3.06443 9.4793 C3.06443 9.4793 5.16457 7.7422 6.72344 5.42587 C8.28232 3.10955 7.74633 0.896898 7.74633 0.896898 L10.5852 1.69364 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.8277145624160767} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1024} data-layer={"236:50401/236:50402/236:50405"} data-name={"Line 18"}>
      <svg width="100%" height="100%" overflow="visible" aria-hidden="true"><line x2={12.332175254821777} stroke={"rgba(92,84,111,1)"}/></svg>
    </span>
    <span className={s.n1025} data-layer={"236:50401/236:50402/236:50406"} data-name={"Group 3877"}>
      <span className={s.n1026} data-layer={"236:50401/236:50402/236:50406/236:50407"} data-name={"Exclude"}>
        <svg width="100%" height="100%" viewBox="0 0 9.55075 12.10917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.77556 0 C6.04199 2.21869e-05 7.25642 0.497674 8.15194 1.38354 C9.04748 2.26945 9.55075 3.47118 9.55075 4.72406 C9.55073 8.03468 6.65518 10.7721 5.37354 11.8218 C5.18944 11.9725 5.09735 12.0481 4.96025 12.0867 C4.85376 12.1167 4.69703 12.1167 4.5905 12.0867 C4.45366 12.0482 4.36063 11.972 4.17721 11.8218 C2.89554 10.7721 0 8.0343 0 4.72369 C6.92655e-06 3.47083 0.503271 2.26944 1.39881 1.38354 C2.29435 0.49766 3.50909 0 4.77556 0 Z M4.77556 2.41937 C3.772 2.41937 2.95837 3.2332 2.95837 4.23699 C2.95837 5.24078 3.772 6.0546 4.77556 6.0546 C5.77903 6.0545 6.59238 5.24072 6.59238 4.23699 C6.59238 3.23326 5.77903 2.41947 4.77556 2.41937 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.010485887527466} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:50401/236:50408"} data-name={"Rectangle 3464326"}></span>
</Root>);
case "236:50409": return (<Root {...rootAttributes} className={[s.n1027,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50409"} data-name={"Size=90, Tema=on, System=ECS"}>
  <span className={s.n1028} data-layer={"236:50409/236:50410"} data-name={"Group 6915"}>
    <span className={s.n1029} data-layer={"236:50409/236:50410/236:50411"} data-name={"Rectangle 3464327"}></span>
    <span className={s.n1030} data-layer={"236:50409/236:50410/236:50412"} data-name={"Group 6914"}>
      <span className={s.n1031} data-layer={"236:50409/236:50410/236:50412/236:50413"} data-name={"Vector 3375"}>
        <svg width="100%" height="100%" viewBox="0 0 30.41521 51.12813" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1161_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.56092 -0.6491 0.68585 -1.50009 0.44617 1.71134)"}><stop offset={0} stopColor={"rgba(0,226,247,1)"}/><stop offset={1} stopColor={"rgba(1,100,128,1)"}/></linearGradient><linearGradient id={`${uid}-g1161_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.95701 1.0484 -1.0484 2.70431 0.40794 -0.76103)"}><stop offset={0} stopColor={"rgba(1,148,173,1)"}/><stop offset={1} stopColor={"rgba(17,225,224,1)"}/></linearGradient></defs><path d={"M13.9135 0 L30.4152 16.231 L30.4152 40.4426 L0 51.1281 L0 17.0425 L13.9135 0 Z"} fill={`url(#${uid}-g1161_netfill0)`} fillRule="nonzero"/><path d={"M13.9135 0 L30.4152 16.231 L30.4152 40.4426 L0 51.1281 L0 17.0425 L13.9135 0 Z"} fill="none" stroke={`url(#${uid}-g1161_netstroke)`} strokeWidth={1.7972517013549805} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1032} data-layer={"236:50409/236:50410/236:50412/236:50414"} data-name={"Vector 3374"}>
        <svg width="100%" height="100%" viewBox="0 0 47.32889 62.37109" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1162_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.32187 -0.97149 0.97149 0.55898 -0.29792 0.66463)"}><stop offset={0} stopColor={"rgba(202,255,246,0.55)"}/><stop offset={1} stopColor={"rgba(0,166,138,0.55)"}/></linearGradient><linearGradient id={`${uid}-g1162_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.22846 -1.09597 1.09597 -0.39677 -0.04609 1.61812)"}><stop offset={0} stopColor={"rgba(255,255,255,1)"}/><stop offset={1} stopColor={"rgba(5,155,129,1)"}/></linearGradient></defs><path d={"M0.730267 16.5938 L21.6232 0 L47.3289 20.3507 L46.3821 62.3711 L0 58.7191 L0.730267 16.5938 Z"} fill={`url(#${uid}-g1162_netfill0)`} fillRule="nonzero"/><path d={"M0.730267 16.5938 L21.6232 0 L47.3289 20.3507 L46.3821 62.3711 L0 58.7191 L0.730267 16.5938 Z"} fill="none" stroke={`url(#${uid}-g1162_netstroke)`} strokeWidth={1.7972517013549805} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1033} data-layer={"236:50409/236:50410/236:50412/236:50415"} data-name={"Group 6913"}>
        <span className={s.n1034} data-layer={"236:50409/236:50410/236:50412/236:50415/236:50416"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 21.26339 21.26339" overflow="visible" aria-hidden="true" focusable="false"><path d={"M21.2634 10.6317 C21.2634 16.5034 16.5034 21.2634 10.6317 21.2634 C4.75997 21.2634 0 16.5034 0 10.6317 C0 4.75997 4.75997 0 10.6317 0 C12.5797 0 14.4054 0.523928 15.9755 1.43856"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.611907482147217} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n1035} data-layer={"236:50409/236:50410/236:50412/236:50415/236:50417"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 12.70274 6.21442" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 3.86559 L3.87452 6.21442 L12.7027 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.611907482147217} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50418": return (<Root {...rootAttributes} className={[s.n1036,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50418"} data-name={"Size=60, Tema=on, System=ECS"}>
  <span className={s.n1037} data-layer={"236:50418/236:50419"} data-name={"Group 6916"}>
    <span className={s.n1038} data-layer={"236:50418/236:50419/236:50420"} data-name={"Rectangle 3464327"}></span>
    <span className={s.n1039} data-layer={"236:50418/236:50419/236:50421"} data-name={"Group 6914"}>
      <span className={s.n1040} data-layer={"236:50418/236:50419/236:50421/236:50422"} data-name={"Vector 3375"}>
        <svg width="100%" height="100%" viewBox="0 0 20.27681 34.08542" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1170_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.56092 -0.6491 0.68585 -1.50009 0.44617 1.71134)"}><stop offset={0} stopColor={"rgba(0,226,247,1)"}/><stop offset={1} stopColor={"rgba(1,100,128,1)"}/></linearGradient><linearGradient id={`${uid}-g1170_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.95701 1.0484 -1.0484 2.70431 0.40794 -0.76103)"}><stop offset={0} stopColor={"rgba(1,148,173,1)"}/><stop offset={1} stopColor={"rgba(17,225,224,1)"}/></linearGradient></defs><path d={"M9.27564 0 L20.2768 10.8206 L20.2768 26.9617 L0 34.0854 L0 11.3617 L9.27564 0 Z"} fill={`url(#${uid}-g1170_netfill0)`} fillRule="nonzero"/><path d={"M9.27564 0 L20.2768 10.8206 L20.2768 26.9617 L0 34.0854 L0 11.3617 L9.27564 0 Z"} fill="none" stroke={`url(#${uid}-g1170_netstroke)`} strokeWidth={1.1981678009033203} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1041} data-layer={"236:50418/236:50419/236:50421/236:50423"} data-name={"Vector 3374"}>
        <svg width="100%" height="100%" viewBox="0 0 31.55259 41.58073" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1171_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.32187 -0.97149 0.97149 0.55898 -0.29792 0.66463)"}><stop offset={0} stopColor={"rgba(202,255,246,0.55)"}/><stop offset={1} stopColor={"rgba(0,166,138,0.55)"}/></linearGradient><linearGradient id={`${uid}-g1171_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.22846 -1.09597 1.09597 -0.39677 -0.04609 1.61812)"}><stop offset={0} stopColor={"rgba(255,255,255,1)"}/><stop offset={1} stopColor={"rgba(5,155,129,1)"}/></linearGradient></defs><path d={"M0.486845 11.0625 L14.4155 0 L31.5526 13.5671 L30.9214 41.5807 L0 39.146 L0.486845 11.0625 Z"} fill={`url(#${uid}-g1171_netfill0)`} fillRule="nonzero"/><path d={"M0.486845 11.0625 L14.4155 0 L31.5526 13.5671 L30.9214 41.5807 L0 39.146 L0.486845 11.0625 Z"} fill="none" stroke={`url(#${uid}-g1171_netstroke)`} strokeWidth={1.1981678009033203} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1042} data-layer={"236:50418/236:50419/236:50421/236:50424"} data-name={"Group 6913"}>
        <span className={s.n1043} data-layer={"236:50418/236:50419/236:50421/236:50424/236:50425"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 14.17559 14.17559" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.1756 7.0878 C14.1756 11.0023 11.0023 14.1756 7.0878 14.1756 C3.17331 14.1756 0 11.0023 0 7.0878 C0 3.17331 3.17331 0 7.0878 0 C8.38649 0 9.60361 0.349286 10.6503 0.959041"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.4079384803771973} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n1044} data-layer={"236:50418/236:50419/236:50421/236:50424/236:50426"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 8.46849 4.14294" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.57706 L2.58301 4.14294 L8.46849 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.4079384803771973} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50427": return (<Root {...rootAttributes} className={[s.n1045,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50427"} data-name={"Size=45, Tema=on, System=ECS"}>
  <span className={s.n1046} data-layer={"236:50427/236:50428"} data-name={"Group 6917"}>
    <span className={s.n1047} data-layer={"236:50427/236:50428/236:50429"} data-name={"Rectangle 3464327"}></span>
    <span className={s.n1048} data-layer={"236:50427/236:50428/236:50430"} data-name={"Group 6914"}>
      <span className={s.n1049} data-layer={"236:50427/236:50428/236:50430/236:50431"} data-name={"Vector 3375"}>
        <svg width="100%" height="100%" viewBox="0 0 15.20761 25.56407" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1179_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.56092 -0.6491 0.68585 -1.50009 0.44617 1.71134)"}><stop offset={0} stopColor={"rgba(0,226,247,1)"}/><stop offset={1} stopColor={"rgba(1,100,128,1)"}/></linearGradient><linearGradient id={`${uid}-g1179_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.95701 1.0484 -1.0484 2.70431 0.40794 -0.76103)"}><stop offset={0} stopColor={"rgba(1,148,173,1)"}/><stop offset={1} stopColor={"rgba(17,225,224,1)"}/></linearGradient></defs><path d={"M6.95673 0 L15.2076 8.11548 L15.2076 20.2213 L0 25.5641 L0 8.52126 L6.95673 0 Z"} fill={`url(#${uid}-g1179_netfill0)`} fillRule="nonzero"/><path d={"M6.95673 0 L15.2076 8.11548 L15.2076 20.2213 L0 25.5641 L0 8.52126 L6.95673 0 Z"} fill="none" stroke={`url(#${uid}-g1179_netstroke)`} strokeWidth={1.1981678009033203} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1050} data-layer={"236:50427/236:50428/236:50430/236:50432"} data-name={"Vector 3374"}>
        <svg width="100%" height="100%" viewBox="0 0 23.66444 31.18555" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1180_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.32187 -0.97149 0.97149 0.55898 -0.29792 0.66463)"}><stop offset={0} stopColor={"rgba(202,255,246,0.55)"}/><stop offset={1} stopColor={"rgba(0,166,138,0.55)"}/></linearGradient><linearGradient id={`${uid}-g1180_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.22846 -1.09597 1.09597 -0.39677 -0.04609 1.61812)"}><stop offset={0} stopColor={"rgba(255,255,255,1)"}/><stop offset={1} stopColor={"rgba(5,155,129,1)"}/></linearGradient></defs><path d={"M0.365134 8.29691 L10.8116 0 L23.6644 10.1754 L23.191 31.1855 L0 29.3595 L0.365134 8.29691 Z"} fill={`url(#${uid}-g1180_netfill0)`} fillRule="nonzero"/><path d={"M0.365134 8.29691 L10.8116 0 L23.6644 10.1754 L23.191 31.1855 L0 29.3595 L0.365134 8.29691 Z"} fill="none" stroke={`url(#${uid}-g1180_netstroke)`} strokeWidth={1.1981678009033203} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1051} data-layer={"236:50427/236:50428/236:50430/236:50433"} data-name={"Group 6913"}>
        <span className={s.n1052} data-layer={"236:50427/236:50428/236:50430/236:50433/236:50434"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 10.63169 10.63169" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.6317 5.31585 C10.6317 8.25171 8.25171 10.6317 5.31585 10.6317 C2.37999 10.6317 0 8.25171 0 5.31585 C0 2.37999 2.37999 0 5.31585 0 C6.28987 0 7.20271 0.261964 7.98775 0.719281"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.4079384803771973} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n1053} data-layer={"236:50427/236:50428/236:50430/236:50433/236:50435"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 6.35137 3.10721" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.93279 L1.93726 3.10721 L6.35137 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.4079384803771973} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50436": return (<Root {...rootAttributes} className={[s.n1054,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50436"} data-name={"Size=24, Tema=on, System=ECS"}>
  <span className={s.n1055} data-layer={"236:50436/236:50437"} data-name={"Group 6918"}>
    <span className={s.n1056} data-layer={"236:50436/236:50437/236:50438"} data-name={"Rectangle 3464327"}></span>
    <span className={s.n1057} data-layer={"236:50436/236:50437/236:50439"} data-name={"Group 6914"}>
      <span className={s.n1058} data-layer={"236:50436/236:50437/236:50439/236:50440"} data-name={"Vector 3375"}>
        <svg width="100%" height="100%" viewBox="0 0 8.11072 13.63417" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1188_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.56092 -0.6491 0.68585 -1.50009 0.44617 1.71134)"}><stop offset={0} stopColor={"rgba(0,226,247,1)"}/><stop offset={1} stopColor={"rgba(1,100,128,1)"}/></linearGradient><linearGradient id={`${uid}-g1188_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.95701 1.0484 -1.0484 2.70431 0.40794 -0.76103)"}><stop offset={0} stopColor={"rgba(1,148,173,1)"}/><stop offset={1} stopColor={"rgba(17,225,224,1)"}/></linearGradient></defs><path d={"M3.71025 0 L8.11072 4.32825 L8.11072 10.7847 L0 13.6342 L0 4.54467 L3.71025 0 Z"} fill={`url(#${uid}-g1188_netfill0)`} fillRule="nonzero"/><path d={"M3.71025 0 L8.11072 4.32825 L8.11072 10.7847 L0 13.6342 L0 4.54467 L3.71025 0 Z"} fill="none" stroke={`url(#${uid}-g1188_netstroke)`} strokeWidth={0.6390228271484375} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1059} data-layer={"236:50436/236:50437/236:50439/236:50441"} data-name={"Vector 3374"}>
        <svg width="100%" height="100%" viewBox="0 0 12.62104 16.63229" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1189_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.32187 -0.97149 0.97149 0.55898 -0.29792 0.66463)"}><stop offset={0} stopColor={"rgba(202,255,246,0.55)"}/><stop offset={1} stopColor={"rgba(0,166,138,0.55)"}/></linearGradient><linearGradient id={`${uid}-g1189_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.22846 -1.09597 1.09597 -0.39677 -0.04609 1.61812)"}><stop offset={0} stopColor={"rgba(255,255,255,1)"}/><stop offset={1} stopColor={"rgba(5,155,129,1)"}/></linearGradient></defs><path d={"M0.194738 4.42502 L5.76618 0 L12.621 5.42686 L12.3686 16.6323 L0 15.6584 L0.194738 4.42502 Z"} fill={`url(#${uid}-g1189_netfill0)`} fillRule="nonzero"/><path d={"M0.194738 4.42502 L5.76618 0 L12.621 5.42686 L12.3686 16.6323 L0 15.6584 L0.194738 4.42502 Z"} fill="none" stroke={`url(#${uid}-g1189_netstroke)`} strokeWidth={0.6390228271484375} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1060} data-layer={"236:50436/236:50437/236:50439/236:50442"} data-name={"Group 6913"}>
        <span className={s.n1061} data-layer={"236:50436/236:50437/236:50439/236:50442/236:50443"} data-name={"Ellipse 3197"}>
          <svg width="100%" height="100%" viewBox="0 0 5.67024 5.67024" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.67024 2.83512 C5.67024 4.40091 4.40091 5.67024 2.83512 5.67024 C1.26933 5.67024 0 4.40091 0 2.83512 C0 1.26933 1.26933 0 2.83512 0 C3.3546 0 3.84144 0.139714 4.26013 0.383616"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.2842339277267456} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
        <span className={s.n1062} data-layer={"236:50436/236:50437/236:50439/236:50442/236:50444"} data-name={"Vector 3371"}>
          <svg width="100%" height="100%" viewBox="0 0 3.3874 1.65718" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.03082 L1.0332 1.65718 L3.3874 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.2842339277267456} strokeLinecap="round" strokeLinejoin="miter"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50445": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50445"} data-name={"Size=60, Tema=off, System=ECS"}>
  <span className={s.n1063} data-layer={"236:50445/236:50446"} data-name={"Group 6915"}>
    <span className={s.n1064} data-layer={"236:50445/236:50446/236:50447"} data-name={"Vector 3375"}>
      <svg width="100%" height="100%" viewBox="0 0 14.72076 30.52357" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.71959 0 L14.7208 10.8206 L14.7208 26.9617 L4.58236 30.5236 M0 4.76711 L3.71959 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1041} data-layer={"236:50445/236:50446/236:50448"} data-name={"Vector 3374"}>
      <svg width="100%" height="100%" viewBox="0 0 31.55259 41.58073" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.486845 11.0625 L14.4155 0 L31.5526 13.5671 L30.9214 41.5807 L0 39.146 L0.486845 11.0625 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1065} data-layer={"236:50445/236:50446/236:50449"} data-name={"Group 6913"}>
      <span className={s.n1066} data-layer={"236:50445/236:50446/236:50449/236:50450"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 14.06512 14.17559" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.0878 14.1756 C3.17331 14.1756 0 11.0023 0 7.0878 C0 3.17331 3.17331 0 7.0878 0 C7.86772 0 8.61821 0.12597 9.32006 0.358673 M14.0651 8.34113 C13.4733 11.6578 10.5746 14.1756 7.0878 14.1756"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1044} data-layer={"236:50445/236:50446/236:50449/236:50451"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 8.46849 4.14294" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 2.57706 L2.58301 4.14294 L8.46849 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={4} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:50445/236:50452"} data-name={"Rectangle 3464328"}></span>
</Root>);
case "236:50453": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50453"} data-name={"Size=45, Tema=off, System=ECS"}>
  <span className={s.n1067} data-layer={"236:50453/236:50454"} data-name={"Group 6915"}>
    <span className={s.n1068} data-layer={"236:50453/236:50454/236:50455"} data-name={"Vector 3375"}>
      <svg width="100%" height="100%" viewBox="0 0 11.04057 22.89268" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.78969 0 L11.0406 8.11548 L11.0406 20.2213 L3.43677 22.8927 M0 3.57533 L2.78969 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1069} data-layer={"236:50453/236:50454/236:50456"} data-name={"Vector 3374"}>
      <svg width="100%" height="100%" viewBox="0 0 23.66444 31.18555" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.365134 8.29691 L10.8116 0 L23.6644 10.1754 L23.191 31.1855 L0 29.3595 L0.365134 8.29691 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1070} data-layer={"236:50453/236:50454/236:50457"} data-name={"Group 6913"}>
      <span className={s.n1071} data-layer={"236:50453/236:50454/236:50457/236:50458"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 10.54884 10.63169" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.31585 10.6317 C2.37999 10.6317 0 8.25171 0 5.31585 C0 2.37999 2.37999 0 5.31585 0 C5.90079 0 6.46366 0.0944772 6.99004 0.269004 M10.5488 6.25584 C10.105 8.74335 7.93095 10.6317 5.31585 10.6317"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1072} data-layer={"236:50453/236:50454/236:50457/236:50459"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 6.35137 3.10721" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.93279 L1.93726 3.10721 L6.35137 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:50453/236:50460"} data-name={"Rectangle 3464328"}></span>
</Root>);
case "236:50461": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50461"} data-name={"Size=30, Tema=off, System=ECS"}>
  <span className={s.n1073} data-layer={"236:50461/236:50462"} data-name={"Group 6915"}>
    <span className={s.n1074} data-layer={"236:50461/236:50462/236:50463"} data-name={"Vector 3375"}>
      <svg width="100%" height="100%" viewBox="0 0 7.36038 15.26178" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.85979 0 L7.36038 5.41032 L7.36038 13.4809 L2.29118 15.2618 M0 2.38355 L1.85979 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1075} data-layer={"236:50461/236:50462/236:50464"} data-name={"Vector 3374"}>
      <svg width="100%" height="100%" viewBox="0 0 15.7763 20.79037" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.243422 5.53127 L7.20773 0 L15.7763 6.78357 L15.4607 20.7904 L0 19.573 L0.243422 5.53127 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1076} data-layer={"236:50461/236:50462/236:50465"} data-name={"Group 6913"}>
      <span className={s.n1077} data-layer={"236:50461/236:50462/236:50465/236:50466"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 7.03256 7.0878" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.5439 7.0878 C1.58666 7.0878 0 5.50114 0 3.5439 C0 1.58666 1.58666 0 3.5439 0 C3.93386 0 4.30911 0.0629848 4.66003 0.179336 M7.03256 4.17056 C6.73667 5.8289 5.2873 7.0878 3.5439 7.0878"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1078} data-layer={"236:50461/236:50462/236:50465/236:50467"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 4.23425 2.07147" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.28853 L1.29151 2.07147 L4.23425 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:50461/236:50468"} data-name={"Rectangle 3464328"}></span>
</Root>);
case "236:50469": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50469"} data-name={"Size=24, Tema=off, System=ECS"}>
  <span className={s.n1079} data-layer={"236:50469/236:50470"} data-name={"Group 6915"}>
    <span className={s.n1080} data-layer={"236:50469/236:50470/236:50471"} data-name={"Vector 3375"}>
      <svg width="100%" height="100%" viewBox="0 0 5.88831 12.20943" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.48784 0 L5.88831 4.32826 L5.88831 10.7847 L1.83294 12.2094 M0 1.90684 L1.48784 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1081} data-layer={"236:50469/236:50470/236:50472"} data-name={"Vector 3374"}>
      <svg width="100%" height="100%" viewBox="0 0 12.62104 16.63229" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.194738 4.42502 L5.76618 0 L12.621 5.42686 L12.3686 16.6323 L0 15.6584 L0.194738 4.42502 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1082} data-layer={"236:50469/236:50470/236:50473"} data-name={"Group 6913"}>
      <span className={s.n1083} data-layer={"236:50469/236:50470/236:50473/236:50474"} data-name={"Ellipse 3197"}>
        <svg width="100%" height="100%" viewBox="0 0 5.62605 5.67024" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.83512 5.67024 C1.26933 5.67024 0 4.40091 0 2.83512 C0 1.26933 1.26933 0 2.83512 0 C3.14709 0 3.44729 0.0503878 3.72802 0.143469 M5.62605 3.33645 C5.38933 4.66312 4.22984 5.67024 2.83512 5.67024"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.600000023841858} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1084} data-layer={"236:50469/236:50470/236:50473/236:50475"} data-name={"Vector 3371"}>
        <svg width="100%" height="100%" viewBox="0 0 3.3874 1.65718" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 1.03082 L1.0332 1.65718 L3.3874 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={1.600000023841858} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:50469/236:50476"} data-name={"Rectangle 3464328"}></span>
</Root>);
case "236:50477": return (<Root {...rootAttributes} className={[s.n1027,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50477"} data-name={"Size=90, Tema=on, System=ECS2"}>
  <span className={s.n1085} data-layer={"236:50477/236:50478"} data-name={"Group 6919"}>
    <span className={s.n1086} data-layer={"236:50477/236:50478/236:50479"} data-name={"Rectangle 3464329"}></span>
    <span className={s.n1087} data-layer={"236:50477/236:50478/236:50480"} data-name={"Group 3918"}>
      <span className={s.n1088} data-layer={"236:50477/236:50478/236:50480/236:50481"} data-name={"Rectangle 3464304"}></span>
      <span className={s.n1089} data-layer={"236:50477/236:50478/236:50480/236:50482"} data-name={"Rectangle 3464305"}>
        <svg width="100%" height="100%" viewBox="0 0 54.19043 35.08105" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1230_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.27585 0.81172 -0.52115 -0.16522 0.82244 0.09554)"}><stop offset={0} stopColor={"rgba(255,0,0,0.513)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.456)"}/></linearGradient><linearGradient id={`${uid}-g1230_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.27224 1.22724 -0.7993 0.19655 0.88064 -0.19202)"}><stop offset={0} stopColor={"rgba(255,66,0,0.7)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.4)"}/></linearGradient></defs><path d={"M2.09846 22.6197 L22.0644 2.13803 C24.8433 -0.712677 29.3489 -0.712676 32.1278 2.13803 L52.092 22.6179 C56.5746 27.2163 53.4 35.079 47.0606 35.0793 L7.13047 35.0811 C0.790743 35.0813 -2.3844 27.2184 2.09846 22.6197 Z"} fill={`url(#${uid}-g1230_netfill0)`} fillRule="nonzero"/><path d={"M2.09846 22.6197 L22.0644 2.13803 C24.8433 -0.712677 29.3489 -0.712676 32.1278 2.13803 L52.092 22.6179 C56.5746 27.2163 53.4 35.079 47.0606 35.0793 L7.13047 35.0811 C0.790743 35.0813 -2.3844 27.2184 2.09846 22.6197 Z"} fill="none" stroke={`url(#${uid}-g1230_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1090} data-layer={"236:50477/236:50478/236:50480/236:50483"} data-name={"Vector 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 16.66928 24.06473" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.46069 0 L0 11.5042 L5.28252 11.5042 L1.64345 24.0647 L16.6693 7.16067 L9.50854 7.16067 L13.0302 0 L4.46069 0 Z"} fill={"rgba(255,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50484": return (<Root {...rootAttributes} className={[s.n1036,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50484"} data-name={"Size=60, Tema=on, System=ECS2"}>
  <span className={s.n1091} data-layer={"236:50484/236:50485"} data-name={"Group 6920"}>
    <span className={s.n1092} data-layer={"236:50484/236:50485/236:50486"} data-name={"Rectangle 3464330"}></span>
    <span className={s.n1093} data-layer={"236:50484/236:50485/236:50487"} data-name={"Group 6908"}>
      <span className={s.n1094} data-layer={"236:50484/236:50485/236:50487/236:50488"} data-name={"Rectangle 3464304"}></span>
      <span className={s.n1095} data-layer={"236:50484/236:50485/236:50487/236:50489"} data-name={"Rectangle 3464305"}>
        <svg width="100%" height="100%" viewBox="0 0 36.12695 23.38737" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1237_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.27585 0.81172 -0.52115 -0.16522 0.82244 0.09554)"}><stop offset={0} stopColor={"rgba(255,0,0,0.513)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.456)"}/></linearGradient><linearGradient id={`${uid}-g1237_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.27224 1.22724 -0.7993 0.19655 0.88064 -0.19202)"}><stop offset={0} stopColor={"rgba(255,66,0,0.7)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.4)"}/></linearGradient></defs><path d={"M1.39897 15.0798 L14.7096 1.42535 C16.5622 -0.475118 19.5659 -0.475117 21.4185 1.42535 L34.728 15.0786 C37.7164 18.1442 35.6 23.386 31.3737 23.3862 L4.75365 23.3874 C0.527162 23.3876 -1.5896 18.1456 1.39897 15.0798 Z"} fill={`url(#${uid}-g1237_netfill0)`} fillRule="nonzero"/><path d={"M1.39897 15.0798 L14.7096 1.42535 C16.5622 -0.475118 19.5659 -0.475117 21.4185 1.42535 L34.728 15.0786 C37.7164 18.1442 35.6 23.386 31.3737 23.3862 L4.75365 23.3874 C0.527162 23.3876 -1.5896 18.1456 1.39897 15.0798 Z"} fill="none" stroke={`url(#${uid}-g1237_netstroke)`} strokeWidth={0.6666666865348816} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1096} data-layer={"236:50484/236:50485/236:50487/236:50490"} data-name={"Vector 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 11.11286 16.04316" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.9738 0 L0 7.66943 L3.52168 7.66943 L1.09564 16.0432 L11.1129 4.77378 L6.33902 4.77378 L8.68681 0 L2.9738 0 Z"} fill={"rgba(255,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50491": return (<Root {...rootAttributes} className={[s.n1045,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50491"} data-name={"Size=45, Tema=on, System=ECS2"}>
  <span className={s.n1097} data-layer={"236:50491/236:50492"} data-name={"Group 6921"}>
    <span className={s.n1098} data-layer={"236:50491/236:50492/236:50493"} data-name={"Rectangle 3464331"}></span>
    <span className={s.n1099} data-layer={"236:50491/236:50492/236:50494"} data-name={"Group 6909"}>
      <span className={s.n1100} data-layer={"236:50491/236:50492/236:50494/236:50495"} data-name={"Rectangle 3464304"}></span>
      <span className={s.n1101} data-layer={"236:50491/236:50492/236:50494/236:50496"} data-name={"Rectangle 3464305"}>
        <svg width="100%" height="100%" viewBox="0 0 27.09521 17.54053" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1244_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.27585 0.81172 -0.52115 -0.16522 0.82244 0.09554)"}><stop offset={0} stopColor={"rgba(255,0,0,0.513)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.456)"}/></linearGradient><linearGradient id={`${uid}-g1244_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.27224 1.22724 -0.7993 0.19655 0.88064 -0.19202)"}><stop offset={0} stopColor={"rgba(255,66,0,0.7)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.4)"}/></linearGradient></defs><path d={"M1.04923 11.3099 L11.0322 1.06901 C12.4217 -0.356339 14.6744 -0.356338 16.0639 1.06902 L26.046 11.309 C28.2873 13.6082 26.7 17.5395 23.5303 17.5396 L3.56523 17.5405 C0.395371 17.5407 -1.1922 13.6092 1.04923 11.3099 Z"} fill={`url(#${uid}-g1244_netfill0)`} fillRule="nonzero"/><path d={"M1.04923 11.3099 L11.0322 1.06901 C12.4217 -0.356339 14.6744 -0.356338 16.0639 1.06902 L26.046 11.309 C28.2873 13.6082 26.7 17.5395 23.5303 17.5396 L3.56523 17.5405 C0.395371 17.5407 -1.1922 13.6092 1.04923 11.3099 Z"} fill="none" stroke={`url(#${uid}-g1244_netstroke)`} strokeWidth={0.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1102} data-layer={"236:50491/236:50492/236:50494/236:50497"} data-name={"Vector 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 8.33464 12.03237" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.23035 0 L0 5.75208 L2.64126 5.75208 L0.821727 12.0324 L8.33464 3.58034 L4.75427 3.58034 L6.51511 0 L2.23035 0 Z"} fill={"rgba(255,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50498": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50498"} data-name={"Size=30, Tema=on, System=ECS2"}>
  <span className={s.n1103} data-layer={"236:50498/236:50499"} data-name={"Group 6922"}>
    <span className={s.n1104} data-layer={"236:50498/236:50499/236:50500"} data-name={"Rectangle 3464332"}></span>
    <span className={s.n1105} data-layer={"236:50498/236:50499/236:50501"} data-name={"Group 6910"}>
      <span className={s.n1106} data-layer={"236:50498/236:50499/236:50501/236:50502"} data-name={"Rectangle 3464304"}></span>
      <span className={s.n1107} data-layer={"236:50498/236:50499/236:50501/236:50503"} data-name={"Rectangle 3464305"}>
        <svg width="100%" height="100%" viewBox="0 0 18.06348 11.69368" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1251_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.27585 0.81172 -0.52115 -0.16522 0.82244 0.09554)"}><stop offset={0} stopColor={"rgba(255,0,0,0.513)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.456)"}/></linearGradient><linearGradient id={`${uid}-g1251_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.27224 1.22724 -0.7993 0.19655 0.88064 -0.19202)"}><stop offset={0} stopColor={"rgba(255,66,0,0.7)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.4)"}/></linearGradient></defs><path d={"M0.699487 7.5399 L7.3548 0.712676 C8.28111 -0.237559 9.78295 -0.237559 10.7093 0.712677 L17.364 7.5393 C18.8582 9.07211 17.8 11.693 15.6869 11.6931 L2.37682 11.6937 C0.263581 11.6938 -0.794801 9.07279 0.699487 7.5399 Z"} fill={`url(#${uid}-g1251_netfill0)`} fillRule="nonzero"/><path d={"M0.699487 7.5399 L7.3548 0.712676 C8.28111 -0.237559 9.78295 -0.237559 10.7093 0.712677 L17.364 7.5393 C18.8582 9.07211 17.8 11.693 15.6869 11.6931 L2.37682 11.6937 C0.263581 11.6938 -0.794801 9.07279 0.699487 7.5399 Z"} fill="none" stroke={`url(#${uid}-g1251_netstroke)`} strokeWidth={0.3333333432674408} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1108} data-layer={"236:50498/236:50499/236:50501/236:50504"} data-name={"Vector 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 5.55643 8.02158" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.4869 0 L0 3.83472 L1.76084 3.83472 L0.547818 8.02158 L5.55643 2.38689 L3.16951 2.38689 L4.34341 0 L1.4869 0 Z"} fill={"rgba(255,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50505": return (<Root {...rootAttributes} className={[s.n1054,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50505"} data-name={"Size=24, Tema=on, System=ECS2"}>
  <span className={s.n1109} data-layer={"236:50505/236:50506"} data-name={"Group 6922"}>
    <span className={s.n1110} data-layer={"236:50505/236:50506/236:50507"} data-name={"Rectangle 3464332"}></span>
    <span className={s.n1111} data-layer={"236:50505/236:50506/236:50508"} data-name={"Group 6910"}>
      <span className={s.n1112} data-layer={"236:50505/236:50506/236:50508/236:50509"} data-name={"Rectangle 3464304"}></span>
      <span className={s.n1113} data-layer={"236:50505/236:50506/236:50508/236:50510"} data-name={"Rectangle 3464305"}>
        <svg width="100%" height="100%" viewBox="0 0 14.45078 9.35495" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1258_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0.27585 0.81172 -0.52115 -0.16522 0.82244 0.09554)"}><stop offset={0} stopColor={"rgba(255,0,0,0.513)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.456)"}/></linearGradient><linearGradient id={`${uid}-g1258_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0.27224 1.22724 -0.7993 0.19655 0.88064 -0.19202)"}><stop offset={0} stopColor={"rgba(255,66,0,0.7)"}/><stop offset={1} stopColor={"rgba(255,255,255,0.4)"}/></linearGradient></defs><path d={"M0.55959 6.03192 L5.88384 0.570141 C6.62489 -0.190047 7.82636 -0.190047 8.56741 0.570141 L13.8912 6.03144 C15.0866 7.25769 14.24 9.35439 12.5495 9.35447 L1.90146 9.35495 C0.210865 9.35502 -0.635841 7.25823 0.55959 6.03192 Z"} fill={`url(#${uid}-g1258_netfill0)`} fillRule="nonzero"/><path d={"M0.55959 6.03192 L5.88384 0.570141 C6.62489 -0.190047 7.82636 -0.190047 8.56741 0.570141 L13.8912 6.03144 C15.0866 7.25769 14.24 9.35439 12.5495 9.35447 L1.90146 9.35495 C0.210865 9.35502 -0.635841 7.25823 0.55959 6.03192 Z"} fill="none" stroke={`url(#${uid}-g1258_netstroke)`} strokeWidth={0.2666666805744171} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1114} data-layer={"236:50505/236:50506/236:50508/236:50511"} data-name={"Vector 3343"}>
        <svg width="100%" height="100%" viewBox="0 0 4.44514 6.41726" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.18952 0 L0 3.06777 L1.40867 3.06777 L0.438254 6.41726 L4.44514 1.90951 L2.53561 1.90951 L3.47472 0 L1.18952 0 Z"} fill={"rgba(255,248,248,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50512": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50512"} data-name={"Size=60, Tema=off, System=ECS2"}>
  <span className={s.n1115} data-layer={"236:50512/236:50513"} data-name={"Group 6923"}>
    <span className={s.n1116} data-layer={"236:50512/236:50513/236:50514"} data-name={"Rectangle 3464304"}>
      <svg width="100%" height="100%" viewBox="0 0 26.30957 16.4248" overflow="visible" aria-hidden="true" focusable="false"><path d={"M26.3096 0.0183373 L26.3096 16.4248 L0 16.4248 L0 3.05422e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1117} data-layer={"236:50512/236:50513/236:50515"} data-name={"Rectangle 3464305"}>
      <svg width="100%" height="100%" viewBox="0 0 36.12695 21.54313" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.39897 13.8907 L14.7096 1.31295 C16.5622 -0.437652 19.5659 -0.437651 21.4185 1.31296 L34.728 13.8896 C37.7164 16.7134 35.6 21.5418 31.3737 21.542 M1.39897 13.8907 C-1.5896 16.7147 0.527162 21.5433 4.75365 21.5431"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1118} data-layer={"236:50512/236:50513/236:50516"} data-name={"Vector 3343"}>
      <svg width="100%" height="100%" viewBox="0 0 13.12686 18.95068" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.51274 0 L0 9.05938 L4.15992 9.05938 L1.2942 18.9507 L13.1269 5.63894 L7.48786 5.63894 L10.2611 0 L3.51274 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:50512/236:50517"} data-name={"Rectangle 3464333"}></span>
</Root>);
case "236:50518": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50518"} data-name={"Size=45, Tema=off, System=ECS2"}>
  <span className={s.n1119} data-layer={"236:50518/236:50519"} data-name={"Group 6923"}>
    <span className={s.n1120} data-layer={"236:50518/236:50519/236:50520"} data-name={"Rectangle 3464304"}>
      <svg width="100%" height="100%" viewBox="0 0 19.73218 13.01562" overflow="visible" aria-hidden="true" focusable="false"><path d={"M19.7322 0.0145312 L19.7322 13.0156 L0 13.0156 L0 2.42028e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1121} data-layer={"236:50518/236:50519/236:50521"} data-name={"Rectangle 3464305"}>
      <svg width="100%" height="100%" viewBox="0 0 27.09521 15.94971" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.04923 10.2841 L11.0322 0.972061 C12.4217 -0.324021 14.6744 -0.32402 16.0639 0.972062 L26.046 10.2833 C28.2873 12.374 26.7 15.9488 23.5303 15.9489 M1.04923 10.2841 C-1.1922 12.3749 0.395371 15.9498 3.56523 15.9497"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1122} data-layer={"236:50518/236:50519/236:50522"} data-name={"Vector 3343"}>
      <svg width="100%" height="100%" viewBox="0 0 9.84514 14.21301" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.63456 0 L0 6.79453 L3.11994 6.79453 L0.97065 14.213 L9.84514 4.22921 L5.61589 4.22921 L7.69585 0 L2.63456 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:50518/236:50523"} data-name={"Rectangle 3464333"}></span>
</Root>);
case "236:50524": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50524"} data-name={"Size=30, Tema=off, System=ECS2"}>
  <span className={s.n1123} data-layer={"236:50524/236:50525"} data-name={"Group 6923"}>
    <span className={s.n1124} data-layer={"236:50524/236:50525/236:50526"} data-name={"Rectangle 3464304"}>
      <svg width="100%" height="100%" viewBox="0 0 14.60876 9.50402" overflow="visible" aria-hidden="true" focusable="false"><path d={"M14.6088 0.0106107 L14.6088 9.50402 L0 9.50402 L0 1.76729e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.776320457458496} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1125} data-layer={"236:50524/236:50525/236:50527"} data-name={"Rectangle 3464305"}>
      <svg width="100%" height="100%" viewBox="0 0 20.06 10.6854" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.7768 6.88977 L8.16771 0.651226 C9.19641 -0.217076 10.8642 -0.217075 11.8929 0.651226 L19.2832 6.88923 C20.9426 8.28987 19.7674 10.6848 17.4207 10.6849 M0.7768 6.88977 C-0.882649 8.29049 0.292714 10.6855 2.63953 10.6854"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.776320457458496} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1126} data-layer={"236:50524/236:50525/236:50528"} data-name={"Vector 3343"}>
      <svg width="100%" height="100%" viewBox="0 0 7.28887 10.52263" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.9505 0 L0 5.03035 L2.30986 5.03035 L0.718623 10.5226 L7.28887 3.1311 L4.15774 3.1311 L5.69764 0 L1.9505 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:50524/236:50529"} data-name={"Rectangle 3464333"}></span>
</Root>);
case "236:50530": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50530"} data-name={"Size=24, Tema=off, System=ECS2"}>
  <span className={s.n1127} data-layer={"236:50530/236:50531"} data-name={"Group 6923"}>
    <span className={s.n1128} data-layer={"236:50530/236:50531/236:50532"} data-name={"Rectangle 3464304"}>
      <svg width="100%" height="100%" viewBox="0 0 12.70802 7.89741" overflow="visible" aria-hidden="true" focusable="false"><path d={"M12.708 0.00881697 L12.708 7.89741 L0 7.89741 L0 1.46853e-05"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.4150943756103516} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1129} data-layer={"236:50530/236:50531/236:50533"} data-name={"Rectangle 3464305"}>
      <svg width="100%" height="100%" viewBox="0 0 17.45 10.08133" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.675731 6.50028 L7.10502 0.614411 C7.99987 -0.204804 9.4507 -0.204803 10.3456 0.614411 L16.7743 6.49976 C18.2177 7.82123 17.1955 10.0807 15.1541 10.0808 M0.675731 6.50028 C-0.767808 7.82181 0.254629 10.0814 2.2961 10.0813"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.4150943756103516} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1130} data-layer={"236:50530/236:50531/236:50534"} data-name={"Vector 3343"}>
      <svg width="100%" height="100%" viewBox="0 0 6.34052 9.15354" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.69672 0 L0 4.37585 L2.00932 4.37585 L0.625123 9.15354 L6.34052 2.72372 L3.61678 2.72372 L4.95632 0 L1.69672 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:50530/236:50535"} data-name={"Rectangle 3464333"}></span>
</Root>);
case "236:50536": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50536"} data-name={"Size=90, Tema=on, System=AI"}>
  <span className={s.n1131} data-layer={"236:50536/236:50537"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1132} data-layer={"236:50536/236:50538"} data-name={"AI Agent"}>
    <span className={s.n1133} data-layer={"236:50536/236:50538/236:50539"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1287_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(224,205,228,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient><linearGradient id={`${uid}-g1287_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0 -1.19651 1.19651 -0 -0.43774 1.09826)"}><stop offset={0} stopColor={"rgba(0,242,255,0)"}/><stop offset={1} stopColor={"rgba(0,242,255,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g1287_netfill0)`} fillRule="nonzero"/><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill="none" stroke={`url(#${uid}-g1287_netstroke)`} strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1134} data-layer={"236:50536/236:50538/236:50540"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1135} data-layer={"236:50536/236:50538/236:50541"} data-name={"Frame 3587"}>
      <span className={s.n1136} data-layer={"236:50536/236:50538/236:50541/236:50542"} data-name={"Ellipse 3185"}>
        <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1290_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g1290_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1137} data-layer={"236:50536/236:50538/236:50541/236:50543"} data-name={"Ellipse 3184"}>
        <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1291_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g1291_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n1138} data-layer={"236:50536/236:50538/236:50544"} data-name={"Group 3588"}>
      <span className={s.n1139} data-layer={"236:50536/236:50538/236:50544/236:50545"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1140} data-layer={"236:50536/236:50538/236:50544/236:50546"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50548": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50548"} data-name={"Size=60, Tema=on, System=AI"}>
  <span className={s.n1141} data-layer={"236:50548/236:50549"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1142} data-layer={"236:50548/236:50550"} data-name={"AI Agent"}>
    <span className={s.n1143} data-layer={"236:50548/236:50550/236:50551"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 43.93332 43.93332" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1298_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(224,205,228,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient><linearGradient id={`${uid}-g1298_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0 -1.19651 1.19651 -0 -0.43774 1.09826)"}><stop offset={0} stopColor={"rgba(0,242,255,0)"}/><stop offset={1} stopColor={"rgba(0,242,255,1)"}/></linearGradient></defs><path d={"M43.9333 18.2407 C43.9333 30.3725 34.0985 43.9333 21.9667 43.9333 C9.83481 43.9333 0 30.3725 0 18.2407 C0 6.10881 9.83481 0 21.9667 0 C34.0985 0 43.9333 6.10881 43.9333 18.2407 Z"} fill={`url(#${uid}-g1298_netfill0)`} fillRule="nonzero"/><path d={"M43.9333 18.2407 C43.9333 30.3725 34.0985 43.9333 21.9667 43.9333 C9.83481 43.9333 0 30.3725 0 18.2407 C0 6.10881 9.83481 0 21.9667 0 C34.0985 0 43.9333 6.10881 43.9333 18.2407 Z"} fill="none" stroke={`url(#${uid}-g1298_netstroke)`} strokeWidth={0.762858510017395} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1144} data-layer={"236:50548/236:50550/236:50552"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 32.7529 15.26069" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.414 1.40302 C0.414 1.40302 10.0113 0.0119646 16.2007 7.77874e-05 C22.5268 -0.0120716 32.3389 1.40302 32.3389 1.40302 C32.3389 1.40302 32.7529 4.44137 32.7529 6.3882 C32.7529 8.82007 32.3389 12.6154 32.3389 12.6154 C32.3389 12.6154 22.5871 15.2832 16.2007 15.2605 C9.94972 15.2383 0.414 12.6154 0.414 12.6154 C0.414 12.6154 0 8.82007 0 6.3882 C0 4.44137 0.414 1.40302 0.414 1.40302 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1145} data-layer={"236:50548/236:50550/236:50553"} data-name={"Frame 3587"}>
      <span className={s.n1146} data-layer={"236:50548/236:50550/236:50553/236:50554"} data-name={"Ellipse 3185"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80429 15.97695" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1301_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M3.80429 6.10264 C3.80429 11.5561 2.95267 15.9769 1.90214 15.9769 C0.851618 15.9769 0 11.5561 0 6.10264 C0 0.649214 0.851618 0 1.90214 0 C2.95267 0 3.80429 0.649214 3.80429 6.10264 Z"} fill={`url(#${uid}-g1301_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1147} data-layer={"236:50548/236:50550/236:50553/236:50555"} data-name={"Ellipse 3184"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80429 15.97695" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1302_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M3.80429 6.10264 C3.80429 11.5561 2.95267 15.9769 1.90214 15.9769 C0.851618 15.9769 0 11.5561 0 6.10264 C0 0.649214 0.851618 0 1.90214 0 C2.95267 0 3.80429 0.649214 3.80429 6.10264 Z"} fill={`url(#${uid}-g1302_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n1148} data-layer={"236:50548/236:50550/236:50556"} data-name={"Group 3588"}>
      <span className={s.n1149} data-layer={"236:50548/236:50550/236:50556/236:50557"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 6.22456 5.71549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.22456 2.52988 C6.22456 4.24874 4.0493 6.11049 2.28428 5.64216 C1.60609 5.46221 0 4.24874 0 2.52988 C0 0.406292 1.39341 0 3.11228 0 C4.83114 0 6.22456 0.811016 6.22456 2.52988 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1150} data-layer={"236:50548/236:50550/236:50556/236:50558"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 6.22656 5.71549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.22656 2.52988 C6.22656 4.24874 4.05061 6.11049 2.28501 5.64216 C1.60661 5.46221 0 4.24874 0 2.52988 C0 0.406292 1.39386 0 3.11328 0 C4.8327 0 6.22656 0.811016 6.22656 2.52988 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50560": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50560"} data-name={"Size=45, Tema=on, System=AI"}>
  <span className={s.n1151} data-layer={"236:50560/236:50561"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1152} data-layer={"236:50560/236:50562"} data-name={"AI Agent"}>
    <span className={s.n1153} data-layer={"236:50560/236:50562/236:50563"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 32.48168 32.48168" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1309_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(224,205,228,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient><linearGradient id={`${uid}-g1309_netstroke`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(-0 -1.19651 1.19651 -0 -0.43774 1.09826)"}><stop offset={0} stopColor={"rgba(0,242,255,0)"}/><stop offset={1} stopColor={"rgba(0,242,255,1)"}/></linearGradient></defs><path d={"M32.4817 13.4861 C32.4817 22.4556 25.2104 32.4817 16.2408 32.4817 C7.27127 32.4817 0 22.4556 0 13.4861 C0 4.51649 7.27127 0 16.2408 0 C25.2104 0 32.4817 4.51649 32.4817 13.4861 Z"} fill={`url(#${uid}-g1309_netfill0)`} fillRule="nonzero"/><path d={"M32.4817 13.4861 C32.4817 22.4556 25.2104 32.4817 16.2408 32.4817 C7.27127 32.4817 0 22.4556 0 13.4861 C0 4.51649 7.27127 0 16.2408 0 C25.2104 0 32.4817 4.51649 32.4817 13.4861 Z"} fill="none" stroke={`url(#${uid}-g1309_netstroke)`} strokeWidth={0.5640121698379517} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1154} data-layer={"236:50560/236:50562/236:50564"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 24.21554 11.28284" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.306087 1.03731 C0.306087 1.03731 7.40179 0.00884594 11.9778 5.75114e-05 C16.655 -0.00892506 23.9095 1.03731 23.9095 1.03731 C23.9095 1.03731 24.2155 3.28368 24.2155 4.72306 C24.2155 6.52103 23.9095 9.32707 23.9095 9.32707 C23.9095 9.32707 16.6996 11.2995 11.9778 11.2827 C7.35623 11.2663 0.306087 9.32707 0.306087 9.32707 C0.306087 9.32707 0 6.52103 0 4.72306 C0 3.28368 0.306087 1.03731 0.306087 1.03731 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1155} data-layer={"236:50560/236:50562/236:50565"} data-name={"Frame 3587"}>
      <span className={s.n1156} data-layer={"236:50560/236:50562/236:50565/236:50566"} data-name={"Ellipse 3185"}>
        <svg width="100%" height="100%" viewBox="0 0 2.81266 11.8124" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1312_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M2.81266 4.51193 C2.81266 8.54387 2.18303 11.8124 1.40633 11.8124 C0.629636 11.8124 0 8.54387 0 4.51193 C0 0.47999 0.629636 0 1.40633 0 C2.18303 0 2.81266 0.47999 2.81266 4.51193 Z"} fill={`url(#${uid}-g1312_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1157} data-layer={"236:50560/236:50562/236:50565/236:50567"} data-name={"Ellipse 3184"}>
        <svg width="100%" height="100%" viewBox="0 0 2.81266 11.8124" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1313_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M2.81266 4.51193 C2.81266 8.54387 2.18303 11.8124 1.40633 11.8124 C0.629636 11.8124 0 8.54387 0 4.51193 C0 0.47999 0.629636 0 1.40633 0 C2.18303 0 2.81266 0.47999 2.81266 4.51193 Z"} fill={`url(#${uid}-g1313_netfill0)`} fillRule="nonzero"/></svg>
      </span>
    </span>
    <span className={s.n1158} data-layer={"236:50560/236:50562/236:50568"} data-name={"Group 3588"}>
      <span className={s.n1159} data-layer={"236:50560/236:50562/236:50568/236:50569"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 4.60207 4.22569" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.60207 1.87044 C4.60207 3.14127 2.99381 4.51773 1.68886 4.17147 C1.18745 4.03843 0 3.14127 0 1.87044 C0 0.300388 1.03021 0 2.30103 0 C3.57186 0 4.60207 0.599617 4.60207 1.87044 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1160} data-layer={"236:50560/236:50562/236:50568/236:50570"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 4.60355 4.22569" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.60355 1.87044 C4.60355 3.14127 2.99478 4.51773 1.6894 4.17147 C1.18783 4.03843 0 3.14127 0 1.87044 C0 0.300388 1.03054 0 2.30177 0 C3.57301 0 4.60355 0.599617 4.60355 1.87044 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
</Root>);
case "236:50572": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50572"} data-name={"Size=60, Tema=off, System=AI"}>
  <span className={s.n1161} data-layer={"236:50572/236:50573"} data-name={"Group 6947"}>
    <span className={s.n1162} data-layer={"236:50572/236:50573/236:50574"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 43.93332 43.93332" overflow="visible" aria-hidden="true" focusable="false"><path d={"M43.9333 18.2407 C43.9333 30.3725 34.0985 43.9333 21.9667 43.9333 C9.83481 43.9333 0 30.3725 0 18.2407 C0 6.10881 9.83481 0 21.9667 0 C34.0985 0 43.9333 6.10881 43.9333 18.2407 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1163} data-layer={"236:50572/236:50573/236:50575"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 30.36035 16.92676" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.383758 1.55619 C0.383758 1.55619 9.28003 0.0132709 15.0173 8.62798e-05 C20.8813 -0.0133896 29.9766 1.55619 29.9766 1.55619 C29.9766 1.55619 30.3604 4.92625 30.3604 7.08563 C30.3604 9.78299 29.9766 13.9927 29.9766 13.9927 C29.9766 13.9927 20.9372 16.9518 15.0173 16.9266 C9.22291 16.902 0.383758 13.9927 0.383758 13.9927 C0.383758 13.9927 0 9.78299 0 7.08563 C0 4.92625 0.383758 1.55619 0.383758 1.55619 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1164} data-layer={"236:50572/236:50573/236:50576"} data-name={"Group 3588"}>
      <span className={s.n1165} data-layer={"236:50572/236:50573/236:50576/236:50577"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 6.22456 5.71549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.22456 2.52988 C6.22456 4.24874 4.0493 6.11049 2.28428 5.64216 C1.60609 5.46221 0 4.24874 0 2.52988 C0 0.406292 1.39341 0 3.11228 0 C4.83114 0 6.22456 0.811016 6.22456 2.52988 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1166} data-layer={"236:50572/236:50573/236:50576/236:50578"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 6.22656 5.71549" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.22656 2.52988 C6.22656 4.24874 4.05061 6.11049 2.28501 5.64216 C1.60661 5.46221 0 4.24874 0 2.52988 C0 0.406292 1.39386 0 3.11328 0 C4.8327 0 6.22656 0.811016 6.22656 2.52988 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:50572/236:50579"} data-name={"Rectangle 3464343"}></span>
</Root>);
case "236:50580": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50580"} data-name={"Size=45, Tema=off, System=AI"}>
  <span className={s.n1167} data-layer={"236:50580/236:50581"} data-name={"Group 6947"}>
    <span className={s.n1168} data-layer={"236:50580/236:50581/236:50582"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 32.94999 32.94999" overflow="visible" aria-hidden="true" focusable="false"><path d={"M32.95 13.6805 C32.95 22.7794 25.5739 32.95 16.475 32.95 C7.37611 32.95 0 22.7794 0 13.6805 C0 4.58161 7.37611 0 16.475 0 C25.5739 0 32.95 4.58161 32.95 13.6805 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1169} data-layer={"236:50580/236:50581/236:50583"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 22.77026 12.69507" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.287818 1.16714 C0.287818 1.16714 6.96002 0.00995315 11.263 6.47098e-05 C15.661 -0.0100422 22.4824 1.16714 22.4824 1.16714 C22.4824 1.16714 22.7703 3.69469 22.7703 5.31422 C22.7703 7.33724 22.4824 10.4945 22.4824 10.4945 C22.4824 10.4945 15.7029 12.7138 11.263 12.6949 C6.91718 12.6765 0.287818 10.4945 0.287818 10.4945 C0.287818 10.4945 0 7.33724 0 5.31422 C0 3.69469 0.287818 1.16714 0.287818 1.16714 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1170} data-layer={"236:50580/236:50581/236:50584"} data-name={"Group 3588"}>
      <span className={s.n1171} data-layer={"236:50580/236:50581/236:50584/236:50585"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 4.66842 4.28662" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.66842 1.89741 C4.66842 3.18656 3.03698 4.58287 1.71321 4.23162 C1.20457 4.09666 0 3.18656 0 1.89741 C0 0.304719 1.04506 0 2.33421 0 C3.62336 0 4.66842 0.608262 4.66842 1.89741 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1172} data-layer={"236:50580/236:50581/236:50584/236:50586"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 4.66992 4.28662" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.66992 1.89741 C4.66992 3.18656 3.03795 4.58287 1.71376 4.23162 C1.20496 4.09666 0 3.18656 0 1.89741 C0 0.304719 1.0454 0 2.33496 0 C3.62452 0 4.66992 0.608262 4.66992 1.89741 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:50580/236:50587"} data-name={"Rectangle 3464343"}></span>
</Root>);
case "236:50588": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50588"} data-name={"Size=24, Tema=off, System=AI"}>
  <span className={s.n1173} data-layer={"236:50588/236:50589"} data-name={"Group 6947"}>
    <span className={s.n1174} data-layer={"236:50588/236:50589/236:50590"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 17.57333 17.57333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M17.5733 7.29626 C17.5733 12.149 13.6394 17.5733 8.78666 17.5733 C3.93392 17.5733 0 12.149 0 7.29626 C0 2.44352 3.93392 0 8.78666 0 C13.6394 0 17.5733 2.44352 17.5733 7.29626 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1175} data-layer={"236:50588/236:50589/236:50591"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 12.14414 6.7707" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.153503 0.622477 C0.153503 0.622477 3.71201 0.00530835 6.00691 3.45119e-05 C8.35251 -0.00535582 11.9906 0.622477 11.9906 0.622477 C11.9906 0.622477 12.1441 1.9705 12.1441 2.83425 C12.1441 3.9132 11.9906 5.59706 11.9906 5.59706 C11.9906 5.59706 8.37487 6.7807 6.00691 6.77064 C3.68916 6.76079 0.153503 5.59706 0.153503 5.59706 C0.153503 5.59706 0 3.9132 0 2.83425 C0 1.9705 0.153503 0.622477 0.153503 0.622477 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1176} data-layer={"236:50588/236:50589/236:50592"} data-name={"Group 3588"}>
      <span className={s.n1177} data-layer={"236:50588/236:50589/236:50592/236:50593"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 2.48982 2.2862" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.48982 1.01195 C2.48982 1.6995 1.61972 2.4442 0.913711 2.25686 C0.642437 2.18488 0 1.6995 0 1.01195 C0 0.162517 0.557366 0 1.24491 0 C1.93246 0 2.48982 0.324406 2.48982 1.01195 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1178} data-layer={"236:50588/236:50589/236:50592/236:50594"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 2.49062 2.2862" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.49062 1.01195 C2.49062 1.6995 1.62024 2.4442 0.914005 2.25686 C0.642644 2.18488 0 1.6995 0 1.01195 C0 0.162517 0.557545 0 1.24531 0 C1.93308 0 2.49062 0.324406 2.49062 1.01195 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:50588/236:50595"} data-name={"Rectangle 3464343"}></span>
</Root>);
case "236:50596": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50596"} data-name={"Size=30, Tema=off, System=AI"}>
  <span className={s.n1179} data-layer={"236:50596/236:50597"} data-name={"Group 6947"}>
    <span className={s.n1180} data-layer={"236:50596/236:50597/236:50598"} data-name={"Ellipse 3183"}>
      <svg width="100%" height="100%" viewBox="0 0 21.96666 21.96666" overflow="visible" aria-hidden="true" focusable="false"><path d={"M21.9667 9.12033 C21.9667 15.1863 17.0493 21.9667 10.9833 21.9667 C4.91741 21.9667 0 15.1863 0 9.12033 C0 3.05441 4.91741 0 10.9833 0 C17.0493 0 21.9667 3.05441 21.9667 9.12033 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1181} data-layer={"236:50596/236:50597/236:50599"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 15.18018 8.46338" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.191879 0.778096 C0.191879 0.778096 4.64001 0.00663543 7.50864 4.31399e-05 C10.4406 -0.00669478 14.9883 0.778096 14.9883 0.778096 C14.9883 0.778096 15.1802 2.46312 15.1802 3.54281 C15.1802 4.8915 14.9883 6.99633 14.9883 6.99633 C14.9883 6.99633 10.4686 8.47588 7.50864 8.4633 C4.61145 8.45099 0.191879 6.99633 0.191879 6.99633 C0.191879 6.99633 0 4.8915 0 3.54281 C0 2.46312 0.191879 0.778096 0.191879 0.778096 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1182} data-layer={"236:50596/236:50597/236:50600"} data-name={"Group 3588"}>
      <span className={s.n1183} data-layer={"236:50596/236:50597/236:50600/236:50601"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 3.11228 2.85775" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.11228 1.26494 C3.11228 2.12437 2.02465 3.05524 1.14214 2.82108 C0.803046 2.7311 0 2.12437 0 1.26494 C0 0.203146 0.696707 0 1.55614 0 C2.41557 0 3.11228 0.405508 3.11228 1.26494 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1184} data-layer={"236:50596/236:50597/236:50600/236:50602"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 3.11328 2.85775" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.11328 1.26494 C3.11328 2.12437 2.0253 3.05524 1.14251 2.82108 C0.803305 2.7311 0 2.12437 0 1.26494 C0 0.203146 0.696931 0 1.55664 0 C2.41635 0 3.11328 0.405508 3.11328 1.26494 Z"} fill={"rgba(255,255,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:50596/236:50603"} data-name={"Rectangle 3464343"}></span>
</Root>);
case "236:50604": return (<Root {...rootAttributes} className={[s.n1027,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50604"} data-name={"Size=90, Tema=on, System=ECS3"}>
  <span className={s.n1185} data-layer={"236:50604/236:50605"} data-name={"Group 6928"}>
    <span className={s.n1186} data-layer={"236:50604/236:50605/236:50606"} data-name={"Rectangle 3464335"}></span>
    <span className={s.n1187} data-layer={"236:50604/236:50605/236:50607"} data-name={"Group 6927"}>
      <span className={s.n1188} data-layer={"236:50604/236:50605/236:50607/236:50608"} data-name={"Rectangle 3464334"}>
        <svg width="100%" height="100%" viewBox="0 0 50.78613 61.79867" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1353_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(0,113,255,1)"}/><stop offset={1} stopColor={"rgba(0,186,255,1)"}/></linearGradient></defs><path d={"M43.8679 61.7987 L0 61.7987 L0 4.52815 L25.3931 -0.00020351 L25.3931 4.52815 L50.7861 4.52815 L50.7861 33.1634 L43.8679 33.1634 L43.8679 61.7987 Z"} fill={`url(#${uid}-g1353_netfill0)`} fillRule="nonzero"/><path d={"M43.8679 61.7987 L0 61.7987 L0 4.52815 L25.3931 -0.00020351 L25.3931 4.52815 L50.7861 4.52815 L50.7861 33.1634 L43.8679 33.1634 L43.8679 61.7987 Z"} fill="none" stroke={"rgba(0,97,224,0.48)"} strokeWidth={1} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1189} data-layer={"236:50604/236:50605/236:50607/236:50609"} data-name={"Group 6926"}>
        <span className={s.n1190} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50610"} data-name={"Group 3720"}>
          <span className={s.n1191} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50610/236:50611"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 23.27273 23.27273" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L23.2727 0 L23.2727 23.2727 L0 23.2727 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1192} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50610/236:50612"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 9.69697 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.69697 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M9.69697 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className={s.n1193} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50610/236:50613"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 0 9.69697" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 9.69697"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 9.69697"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1194} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50614"} data-name={"Group 6909"}>
          <span className={s.n1191} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50614/236:50615"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 23.27273 23.27273" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L23.2727 0 L23.2727 23.2727 L0 23.2727 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1195} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50614/236:50616"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1196} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50618"} data-name={"Group 6910"}>
          <span className={s.n1191} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50618/236:50619"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 23.27273 23.27273" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L23.2727 0 L23.2727 23.2727 L0 23.2727 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1197} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50618/236:50620"} data-name={"Group 6925"}>
            <span className={s.n1198} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50618/236:50620/236:50621"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1199} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50618/236:50620/236:50622"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
        <span className={s.n1200} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50624"} data-name={"Group 6908"}>
          <span className={s.n1191} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50624/236:50625"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 23.27273 23.27273" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L23.2727 0 L23.2727 23.2727 L0 23.2727 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1201} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50624/236:50626"} data-name={"Group 6924"}>
            <span className={s.n1202} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50624/236:50626/236:50627"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 9.69697 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.69697 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M9.69697 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1203} data-layer={"236:50604/236:50605/236:50607/236:50609/236:50624/236:50626/236:50628"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 9.69697" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 9.69697"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 9.69697"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={3.54909086227417} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50629": return (<Root {...rootAttributes} className={[s.n1036,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50629"} data-name={"Size=60, Tema=on, System=ECS3"}>
  <span className={s.n1204} data-layer={"236:50629/236:50630"} data-name={"Group 6929"}>
    <span className={s.n1205} data-layer={"236:50629/236:50630/236:50631"} data-name={"Rectangle 3464335"}></span>
    <span className={s.n1206} data-layer={"236:50629/236:50630/236:50632"} data-name={"Group 6927"}>
      <span className={s.n1207} data-layer={"236:50629/236:50630/236:50632/236:50633"} data-name={"Rectangle 3464334"}>
        <svg width="100%" height="100%" viewBox="0 0 33.85742 41.19912" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1376_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(0,113,255,1)"}/><stop offset={1} stopColor={"rgba(0,186,255,1)"}/></linearGradient></defs><path d={"M29.2453 41.1991 L0 41.1991 L0 3.01889 L16.9287 0 L16.9287 3.01889 L33.8574 3.01889 L33.8574 22.109 L29.2453 22.109 L29.2453 41.1991 Z"} fill={`url(#${uid}-g1376_netfill0)`} fillRule="nonzero"/><path d={"M29.2453 41.1991 L0 41.1991 L0 3.01889 L16.9287 0 L16.9287 3.01889 L33.8574 3.01889 L33.8574 22.109 L29.2453 22.109 L29.2453 41.1991 Z"} fill="none" stroke={"rgba(0,97,224,0.48)"} strokeWidth={0.6666666865348816} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1208} data-layer={"236:50629/236:50630/236:50632/236:50634"} data-name={"Group 6926"}>
        <span className={s.n1209} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50635"} data-name={"Group 3720"}>
          <span className={s.n1210} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50635/236:50636"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 15.51515 15.51515" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.5152 0 L15.5152 15.5152 L0 15.5152 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1211} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50635/236:50637"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6.46465 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.46465 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.46465 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className={s.n1212} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50635/236:50638"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 0 6.46465" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 6.46465"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 6.46465"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1213} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50639"} data-name={"Group 6909"}>
          <span className={s.n1210} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50639/236:50640"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 15.51515 15.51515" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.5152 0 L15.5152 15.5152 L0 15.5152 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1214} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50639/236:50641"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 4 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1215} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50643"} data-name={"Group 6910"}>
          <span className={s.n1210} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50643/236:50644"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 15.51515 15.51515" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.5152 0 L15.5152 15.5152 L0 15.5152 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1216} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50643/236:50645"} data-name={"Group 6925"}>
            <span className={s.n1217} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50643/236:50645/236:50646"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 4 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1218} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50643/236:50645/236:50647"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 4 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
        <span className={s.n1219} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50649"} data-name={"Group 6908"}>
          <span className={s.n1210} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50649/236:50650"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 15.51515 15.51515" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.5152 0 L15.5152 15.5152 L0 15.5152 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1220} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50649/236:50651"} data-name={"Group 6924"}>
            <span className={s.n1221} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50649/236:50651/236:50652"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 6.46465 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.46465 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.46465 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1222} data-layer={"236:50629/236:50630/236:50632/236:50634/236:50649/236:50651/236:50653"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 6.46465" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 6.46465"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 6.46465"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={2.366060733795166} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50654": return (<Root {...rootAttributes} className={[s.n1045,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50654"} data-name={"Size=45, Tema=on, System=ECS3"}>
  <span className={s.n1223} data-layer={"236:50654/236:50655"} data-name={"Group 6930"}>
    <span className={s.n1224} data-layer={"236:50654/236:50655/236:50656"} data-name={"Rectangle 3464335"}></span>
    <span className={s.n1225} data-layer={"236:50654/236:50655/236:50657"} data-name={"Group 6927"}>
      <span className={s.n1226} data-layer={"236:50654/236:50655/236:50657/236:50658"} data-name={"Rectangle 3464334"}>
        <svg width="100%" height="100%" viewBox="0 0 25.39307 30.89934" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1399_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(0,113,255,1)"}/><stop offset={1} stopColor={"rgba(0,186,255,1)"}/></linearGradient></defs><path d={"M21.934 30.8993 L0 30.8993 L0 2.26417 L12.6965 0 L12.6965 2.26417 L25.3931 2.26417 L25.3931 16.5818 L21.934 16.5818 L21.934 30.8993 Z"} fill={`url(#${uid}-g1399_netfill0)`} fillRule="nonzero"/><path d={"M21.934 30.8993 L0 30.8993 L0 2.26417 L12.6965 0 L12.6965 2.26417 L25.3931 2.26417 L25.3931 16.5818 L21.934 16.5818 L21.934 30.8993 Z"} fill="none" stroke={"rgba(0,97,224,0.48)"} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1227} data-layer={"236:50654/236:50655/236:50657/236:50659"} data-name={"Group 6926"}>
        <span className={s.n1228} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50660"} data-name={"Group 3720"}>
          <span className={s.n1229} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50660/236:50661"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 11.63636 11.63636" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.6364 0 L11.6364 11.6364 L0 11.6364 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1230} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50660/236:50662"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 4.84848 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.84848 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.84848 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className={s.n1231} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50660/236:50663"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 0 4.84848" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 4.84848"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 4.84848"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1232} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50664"} data-name={"Group 6909"}>
          <span className={s.n1229} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50664/236:50665"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 11.63636 11.63636" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.6364 0 L11.6364 11.6364 L0 11.6364 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1233} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50664/236:50666"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 3 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1234} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50668"} data-name={"Group 6910"}>
          <span className={s.n1229} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50668/236:50669"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 11.63636 11.63636" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.6364 0 L11.6364 11.6364 L0 11.6364 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1235} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50668/236:50670"} data-name={"Group 6925"}>
            <span className={s.n1236} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50668/236:50670/236:50671"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 3 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1237} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50668/236:50670/236:50672"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 3 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
        <span className={s.n1238} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50674"} data-name={"Group 6908"}>
          <span className={s.n1229} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50674/236:50675"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 11.63636 11.63636" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.6364 0 L11.6364 11.6364 L0 11.6364 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1239} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50674/236:50676"} data-name={"Group 6924"}>
            <span className={s.n1240} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50674/236:50676/236:50677"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 4.84848 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.84848 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.84848 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1241} data-layer={"236:50654/236:50655/236:50657/236:50659/236:50674/236:50676/236:50678"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 4.84848" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 4.84848"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 4.84848"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.7745455503463745} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50679": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50679"} data-name={"Size=30, Tema=on, System=ECS3"}>
  <span className={s.n1242} data-layer={"236:50679/236:50680"} data-name={"Group 6931"}>
    <span className={s.n1243} data-layer={"236:50679/236:50680/236:50681"} data-name={"Rectangle 3464335"}></span>
    <span className={s.n1244} data-layer={"236:50679/236:50680/236:50682"} data-name={"Group 6927"}>
      <span className={s.n1245} data-layer={"236:50679/236:50680/236:50682/236:50683"} data-name={"Rectangle 3464334"}>
        <svg width="100%" height="100%" viewBox="0 0 16.92871 20.59956" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1422_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(0,113,255,1)"}/><stop offset={1} stopColor={"rgba(0,186,255,1)"}/></linearGradient></defs><path d={"M14.6226 20.5996 L0 20.5996 L0 1.50945 L8.46436 0 L8.46436 1.50945 L16.9287 1.50945 L16.9287 11.0545 L14.6226 11.0545 L14.6226 20.5996 Z"} fill={`url(#${uid}-g1422_netfill0)`} fillRule="nonzero"/><path d={"M14.6226 20.5996 L0 20.5996 L0 1.50945 L8.46436 0 L8.46436 1.50945 L16.9287 1.50945 L16.9287 11.0545 L14.6226 11.0545 L14.6226 20.5996 Z"} fill="none" stroke={"rgba(0,97,224,0.48)"} strokeWidth={0.3333333432674408} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1246} data-layer={"236:50679/236:50680/236:50682/236:50684"} data-name={"Group 6926"}>
        <span className={s.n1247} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50685"} data-name={"Group 3720"}>
          <span className={s.n1248} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50685/236:50686"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.75758 7.75758" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.75758 0 L7.75758 7.75758 L0 7.75758 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1249} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50685/236:50687"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 3.23232 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.23232 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.23232 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className={s.n1250} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50685/236:50688"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 0 3.23232" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 3.23232"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 3.23232"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1251} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50689"} data-name={"Group 6909"}>
          <span className={s.n1248} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50689/236:50690"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.75758 7.75758" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.75758 0 L7.75758 7.75758 L0 7.75758 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1252} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50689/236:50691"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1253} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50693"} data-name={"Group 6910"}>
          <span className={s.n1254} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50693/236:50694"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.75758 7.75758" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.75758 0 L7.75758 7.75758 L0 7.75758 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1255} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50693/236:50695"} data-name={"Group 6925"}>
            <span className={s.n1256} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50693/236:50695/236:50696"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1257} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50693/236:50695/236:50697"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 2 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
        <span className={s.n1258} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50699"} data-name={"Group 6908"}>
          <span className={s.n1259} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50699/236:50700"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 7.75758 7.75758" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.75758 0 L7.75758 7.75758 L0 7.75758 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1260} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50699/236:50701"} data-name={"Group 6924"}>
            <span className={s.n1261} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50699/236:50701/236:50702"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 3.23232 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.23232 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.23232 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1262} data-layer={"236:50679/236:50680/236:50682/236:50684/236:50699/236:50701/236:50703"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 3.23232" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 3.23232"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 3.23232"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={1.183030366897583} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50704": return (<Root {...rootAttributes} className={[s.n1054,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50704"} data-name={"Size=24, Tema=on, System=ECS3"}>
  <span className={s.n1263} data-layer={"236:50704/236:50705"} data-name={"Group 6931"}>
    <span className={s.n1264} data-layer={"236:50704/236:50705/236:50706"} data-name={"Rectangle 3464335"}></span>
    <span className={s.n1265} data-layer={"236:50704/236:50705/236:50707"} data-name={"Group 6927"}>
      <span className={s.n1266} data-layer={"236:50704/236:50705/236:50707/236:50708"} data-name={"Rectangle 3464334"}>
        <svg width="100%" height="100%" viewBox="0 0 13.54297 16.47965" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1445_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 -0 1)"}><stop offset={0} stopColor={"rgba(0,113,255,1)"}/><stop offset={1} stopColor={"rgba(0,186,255,1)"}/></linearGradient></defs><path d={"M11.6981 16.4796 L0 16.4796 L0 1.20756 L6.77148 0 L6.77148 1.20756 L13.543 1.20756 L13.543 8.8436 L11.6981 8.8436 L11.6981 16.4796 Z"} fill={`url(#${uid}-g1445_netfill0)`} fillRule="nonzero"/><path d={"M11.6981 16.4796 L0 16.4796 L0 1.20756 L6.77148 0 L6.77148 1.20756 L13.543 1.20756 L13.543 8.8436 L11.6981 8.8436 L11.6981 16.4796 Z"} fill="none" stroke={"rgba(0,97,224,0.48)"} strokeWidth={0.2666666805744171} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1267} data-layer={"236:50704/236:50705/236:50707/236:50709"} data-name={"Group 6926"}>
        <span className={s.n1268} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50710"} data-name={"Group 3720"}>
          <span className={s.n1269} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50710/236:50711"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6.20606 6.20606" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.20606 0 L6.20606 6.20606 L0 6.20606 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1270} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50710/236:50712"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 2.58586 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.58586 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2.58586 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className={s.n1271} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50710/236:50713"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 0 2.58586" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 2.58586"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 2.58586"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1272} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50714"} data-name={"Group 6909"}>
          <span className={s.n1273} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50714/236:50715"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6.20606 6.20606" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.20606 0 L6.20606 6.20606 L0 6.20606 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1274} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50714/236:50716"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 1.6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M1.6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className={s.n1275} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50718"} data-name={"Group 6910"}>
          <span className={s.n1276} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50718/236:50719"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6.20606 6.20606" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.20606 0 L6.20606 6.20606 L0 6.20606 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1277} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50718/236:50720"} data-name={"Group 6925"}>
            <span className={s.n1278} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50718/236:50720/236:50721"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 1.6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M1.6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1279} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50718/236:50720/236:50722"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 1.6 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.6 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M1.6 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
        <span className={s.n1280} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50724"} data-name={"Group 6908"}>
          <span className={s.n1281} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50724/236:50725"} data-name={"Vector"}>
            <svg width="100%" height="100%" viewBox="0 0 6.20606 6.20606" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.20606 0 L6.20606 6.20606 L0 6.20606 L0 0 Z"} fill={"rgba(161,217,255,0.3)"} fillRule="nonzero"/></svg>
          </span>
          <span className={s.n1282} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50724/236:50726"} data-name={"Group 6924"}>
            <span className={s.n1283} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50724/236:50726/236:50727"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 2.58586 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.58586 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2.58586 0 L0 0"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={s.n1284} data-layer={"236:50704/236:50705/236:50707/236:50709/236:50724/236:50726/236:50728"} data-name={"Vector"}>
              <svg width="100%" height="100%" viewBox="0 0 0 2.58586" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 2.58586"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 2.58586"} fill="none" stroke={"rgba(255,255,255,1)"} strokeWidth={0.9464243054389954} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:50729": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50729"} data-name={"Size=60, Tema=off, System=ECS3"}>
  <span className={s.n1285} data-layer={"236:50729/236:50730"} data-name={"Group 6932"}>
    <span className={s.n1286} data-layer={"236:50729/236:50730/236:50731"} data-name={"Rectangle 3464334"}>
      <svg width="100%" height="100%" viewBox="0 0 33.55136 41.19912" overflow="visible" aria-hidden="true" focusable="false"><path d={"M33.5514 41.1991 L0 41.1991 L0 3.01889 L16.9287 0 L16.9287 4.01889 L33.5514 4.01889 L33.5514 7.56395 M33.5514 38.109 L33.5514 41.1991"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1287} data-layer={"236:50729/236:50730/236:50732"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8.75343 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.75343 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M8.75343 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1288} data-layer={"236:50729/236:50730/236:50733"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 8.75343" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 8.75343"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 8.75343"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1289} data-layer={"236:50729/236:50730/236:50734"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.03493 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.03493 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.03493 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1290} data-layer={"236:50729/236:50730/236:50735"} data-name={"Group 6925"}>
      <span className={s.n1291} data-layer={"236:50729/236:50730/236:50735/236:50736"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 6.03493 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.03493 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.03493 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1292} data-layer={"236:50729/236:50730/236:50735/236:50737"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 6.03493 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.03493 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.03493 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n1293} data-layer={"236:50729/236:50730/236:50738"} data-name={"Group 6924"}>
      <span className={s.n1294} data-layer={"236:50729/236:50730/236:50738/236:50739"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 9.75343 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M9.75343 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M9.75343 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1295} data-layer={"236:50729/236:50730/236:50738/236:50740"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 9.75343" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 9.75343"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 9.75343"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n171} data-layer={"236:50729/236:50741"} data-name={"Rectangle 3464336"}></span>
</Root>);
case "236:50742": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50742"} data-name={"Size=45, Tema=off, System=ECS3"}>
  <span className={s.n1296} data-layer={"236:50742/236:50743"} data-name={"Group 6932"}>
    <span className={s.n1297} data-layer={"236:50742/236:50743/236:50744"} data-name={"Rectangle 3464334"}>
      <svg width="100%" height="100%" viewBox="0 0 25.16352 30.89934" overflow="visible" aria-hidden="true" focusable="false"><path d={"M25.1635 30.8993 L0 30.8993 L0 2.26417 L12.6965 0 L12.6965 3.01417 L25.1635 3.01417 L25.1635 5.67296 M25.1635 28.5818 L25.1635 30.8993"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1298} data-layer={"236:50742/236:50743/236:50745"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.56507 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.56507 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M6.56507 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1299} data-layer={"236:50742/236:50743/236:50746"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 6.56507" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 6.56507"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 6.56507"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1300} data-layer={"236:50742/236:50743/236:50747"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.5262 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.5262 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.5262 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1301} data-layer={"236:50742/236:50743/236:50748"} data-name={"Group 6925"}>
      <span className={s.n1302} data-layer={"236:50742/236:50743/236:50748/236:50749"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 4.5262 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.5262 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.5262 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1303} data-layer={"236:50742/236:50743/236:50748/236:50750"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 4.5262 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.5262 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.5262 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n1304} data-layer={"236:50742/236:50743/236:50751"} data-name={"Group 6924"}>
      <span className={s.n1305} data-layer={"236:50742/236:50743/236:50751/236:50752"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 7.31507 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.31507 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M7.31507 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1306} data-layer={"236:50742/236:50743/236:50751/236:50753"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 7.31507" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 7.31507"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 7.31507"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n177} data-layer={"236:50742/236:50754"} data-name={"Rectangle 3464336"}></span>
</Root>);
case "236:50755": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50755"} data-name={"Size=30, Tema=off, System=ECS3"}>
  <span className={s.n1307} data-layer={"236:50755/236:50756"} data-name={"Group 6932"}>
    <span className={s.n1308} data-layer={"236:50755/236:50756/236:50757"} data-name={"Rectangle 3464334"}>
      <svg width="100%" height="100%" viewBox="0 0 16.77568 20.59956" overflow="visible" aria-hidden="true" focusable="false"><path d={"M16.7757 20.5996 L0 20.5996 L0 1.50945 L8.46436 0 L8.46436 2.00945 L16.7757 2.00945 L16.7757 3.78198 M16.7757 19.0545 L16.7757 20.5996"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1309} data-layer={"236:50755/236:50756/236:50758"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.37671 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.37671 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.37671 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1310} data-layer={"236:50755/236:50756/236:50759"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 4.37671" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 4.37671"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 4.37671"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1311} data-layer={"236:50755/236:50756/236:50760"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 3.01747 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.01747 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.01747 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1312} data-layer={"236:50755/236:50756/236:50761"} data-name={"Group 6925"}>
      <span className={s.n1313} data-layer={"236:50755/236:50756/236:50761/236:50762"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 3.01747 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.01747 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.01747 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1314} data-layer={"236:50755/236:50756/236:50761/236:50763"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 3.01747 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.01747 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.01747 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n1315} data-layer={"236:50755/236:50756/236:50764"} data-name={"Group 6924"}>
      <span className={s.n1316} data-layer={"236:50755/236:50756/236:50764/236:50765"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 4.87671 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.87671 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M4.87671 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1317} data-layer={"236:50755/236:50756/236:50764/236:50766"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 4.87671" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 4.87671"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 4.87671"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n183} data-layer={"236:50755/236:50767"} data-name={"Rectangle 3464336"}></span>
</Root>);
case "236:50768": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50768"} data-name={"Size=24, Tema=off, System=ECS3"}>
  <span className={s.n1318} data-layer={"236:50768/236:50769"} data-name={"Group 6932"}>
    <span className={s.n1319} data-layer={"236:50768/236:50769/236:50770"} data-name={"Rectangle 3464334"}>
      <svg width="100%" height="100%" viewBox="0 0 13.42054 16.47965" overflow="visible" aria-hidden="true" focusable="false"><path d={"M13.4205 16.4796 L0 16.4796 L0 1.20756 L6.77148 0 L6.77148 1.60756 L13.4205 1.60756 L13.4205 3.02558 M13.4205 15.2436 L13.4205 16.4796"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1320} data-layer={"236:50768/236:50769/236:50771"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 3.50137 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.50137 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.50137 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1321} data-layer={"236:50768/236:50769/236:50772"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 3.50137" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 3.50137"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 3.50137"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1322} data-layer={"236:50768/236:50769/236:50773"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 2.41397 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.41397 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2.41397 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
    <span className={s.n1323} data-layer={"236:50768/236:50769/236:50774"} data-name={"Group 6925"}>
      <span className={s.n1324} data-layer={"236:50768/236:50769/236:50774/236:50775"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.41397 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.41397 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2.41397 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1325} data-layer={"236:50768/236:50769/236:50774/236:50776"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 2.41397 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.41397 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M2.41397 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n1326} data-layer={"236:50768/236:50769/236:50777"} data-name={"Group 6924"}>
      <span className={s.n1327} data-layer={"236:50768/236:50769/236:50777/236:50778"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 3.90137 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.90137 0 L0 0"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M3.90137 0 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className={s.n1328} data-layer={"236:50768/236:50769/236:50777/236:50779"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 0 3.90137" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L0 3.90137"} fill={"rgba(0,187,255,1)"} fillRule="nonzero"/><path d={"M0 0 L0 3.90137"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n189} data-layer={"236:50768/236:50780"} data-name={"Rectangle 3464336"}></span>
</Root>);
case "236:50781": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50781"} data-name={"Size=90, Tema=on, System=BT"}>
  <span className={s.n1329} data-layer={"236:50781/236:50782"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1330} data-layer={"236:50781/236:50783"} data-name={"Group 3874"}>
    <span className={s.n1331} data-layer={"236:50781/236:50783/236:50784"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 59.39426 45.04638" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1519_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.57606 0.57606 -0 0.42394 0.78803)"}><stop offset={0} stopColor={"rgba(0,106,119,1)"}/><stop offset={1} stopColor={"rgba(0,145,154,1)"}/></linearGradient></defs><path d={"M59.3943 2.86964 L59.3943 45.0464 L0 45.0464 L0 0 L23.7602 0 L27.3514 2.86964 L59.3943 2.86964 Z"} fill={`url(#${uid}-g1519_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1332} data-layer={"236:50781/236:50783/236:50785"} data-name={"Rectangle 3464252"}></span>
    <span className={s.n1333} data-layer={"236:50781/236:50783/236:50786"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 63.07135 40.84422" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1521_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 0.89383 0 0.10617 1)"}><stop offset={0} stopColor={"rgba(0,196,208,1)"}/><stop offset={1} stopColor={"rgba(0,117,125,1)"}/></linearGradient></defs><path d={"M63.0713 7.76271 L63.0713 40.8442 L0 40.8442 L0 0 L25.2311 0 L36.4 7.76271 L63.0713 7.76271 Z"} fill={`url(#${uid}-g1521_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1334} data-layer={"236:50781/236:50783/236:50787"} data-name={"Group 3873"}>
      <span className={s.n1335} data-layer={"236:50781/236:50783/236:50787/236:50788"} data-name={"Rectangle 3464237"}></span>
      <span className={s.n1336} data-layer={"236:50781/236:50783/236:50787/236:50789"} data-name={"Ellipse 3161"}></span>
      <span className={s.n1337} data-layer={"236:50781/236:50783/236:50787/236:50790"} data-name={"Intersect"}>
        <svg width="100%" height="100%" viewBox="0 0 21.77526 10.5745" overflow="visible" aria-hidden="true" focusable="false"><path d={"M10.8871 0 C15.3856 0 19.3631 2.22987 21.7753 5.64433 C19.1197 8.66647 15.2264 10.5745 10.8871 10.5745 C6.54779 10.5744 2.65551 8.66562 0 5.64333 C2.41213 2.22943 6.38916 0.000108286 10.8871 0 Z"} fill={"rgba(0,111,122,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1338} data-layer={"236:50781/236:50783/236:50787/236:50791"} data-name={"Rectangle 3464238"}></span>
    </span>
  </span>
</Root>);
case "236:50792": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50792"} data-name={"Size=60, Tema=on, System=BT"}>
  <span className={s.n1339} data-layer={"236:50792/236:50793"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1340} data-layer={"236:50792/236:50794"} data-name={"Group 3874"}>
    <span className={s.n1341} data-layer={"236:50792/236:50794/236:50795"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 39.59617 30.03092" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1530_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.57606 0.57606 -0 0.42394 0.78803)"}><stop offset={0} stopColor={"rgba(0,106,119,1)"}/><stop offset={1} stopColor={"rgba(0,145,154,1)"}/></linearGradient></defs><path d={"M39.5962 1.91309 L39.5962 30.0309 L0 30.0309 L0 0 L15.8401 0 L18.2343 1.91309 L39.5962 1.91309 Z"} fill={`url(#${uid}-g1530_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1342} data-layer={"236:50792/236:50794/236:50796"} data-name={"Rectangle 3464252"}></span>
    <span className={s.n1343} data-layer={"236:50792/236:50794/236:50797"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 42.04756 27.22948" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1532_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 0.89383 0 0.10617 1)"}><stop offset={0} stopColor={"rgba(0,196,208,1)"}/><stop offset={1} stopColor={"rgba(0,117,125,1)"}/></linearGradient></defs><path d={"M42.0476 5.17514 L42.0476 27.2295 L0 27.2295 L0 0 L16.8208 0 L24.2667 5.17514 L42.0476 5.17514 Z"} fill={`url(#${uid}-g1532_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1344} data-layer={"236:50792/236:50794/236:50798"} data-name={"Group 3873"}>
      <span className={s.n1345} data-layer={"236:50792/236:50794/236:50798/236:50799"} data-name={"Rectangle 3464237"}></span>
      <span className={s.n1346} data-layer={"236:50792/236:50794/236:50798/236:50800"} data-name={"Ellipse 3161"}></span>
      <span className={s.n1347} data-layer={"236:50792/236:50794/236:50798/236:50801"} data-name={"Intersect"}>
        <svg width="100%" height="100%" viewBox="0 0 17.05872 8.28405" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.52897 0 C12.0531 0 15.1691 1.74688 17.0587 4.42176 C14.9783 6.7893 11.9284 8.28405 8.52897 8.28405 C5.12953 8.28398 2.08032 6.78864 0 4.42098 C1.88966 1.74653 5.00526 8.48312e-05 8.52897 0 Z"} fill={"rgba(0,111,122,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1348} data-layer={"236:50792/236:50794/236:50798/236:50802"} data-name={"Rectangle 3464238"}></span>
    </span>
  </span>
</Root>);
case "236:50803": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50803"} data-name={"Size=45, Tema=on, System=BT"}>
  <span className={s.n1349} data-layer={"236:50803/236:50804"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1350} data-layer={"236:50803/236:50805"} data-name={"Group 3874"}>
    <span className={s.n1351} data-layer={"236:50803/236:50805/236:50806"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 29.69713 22.52319" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1541_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.57606 0.57606 -0 0.42394 0.78803)"}><stop offset={0} stopColor={"rgba(0,106,119,1)"}/><stop offset={1} stopColor={"rgba(0,145,154,1)"}/></linearGradient></defs><path d={"M29.6971 1.43482 L29.6971 22.5232 L0 22.5232 L0 0 L11.8801 0 L13.6757 1.43482 L29.6971 1.43482 Z"} fill={`url(#${uid}-g1541_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1352} data-layer={"236:50803/236:50805/236:50807"} data-name={"Rectangle 3464252"}></span>
    <span className={s.n1353} data-layer={"236:50803/236:50805/236:50808"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 31.53567 20.42211" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1543_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 0.89383 0 0.10617 1)"}><stop offset={0} stopColor={"rgba(0,196,208,1)"}/><stop offset={1} stopColor={"rgba(0,117,125,1)"}/></linearGradient></defs><path d={"M31.5357 3.88135 L31.5357 20.4221 L0 20.4221 L0 0 L12.6156 0 L18.2 3.88135 L31.5357 3.88135 Z"} fill={`url(#${uid}-g1543_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1354} data-layer={"236:50803/236:50805/236:50809"} data-name={"Group 3873"}>
      <span className={s.n1355} data-layer={"236:50803/236:50805/236:50809/236:50810"} data-name={"Rectangle 3464237"}></span>
      <span className={s.n1356} data-layer={"236:50803/236:50805/236:50809/236:50811"} data-name={"Ellipse 3161"}></span>
      <span className={s.n1357} data-layer={"236:50803/236:50805/236:50809/236:50812"} data-name={"Intersect"}>
        <svg width="100%" height="100%" viewBox="0 0 12.79404 6.21304" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.39673 0 C9.0398 0 11.3768 1.31016 12.794 3.31632 C11.2338 5.09198 8.94627 6.21304 6.39673 6.21304 C3.84715 6.21298 1.56024 5.09148 0 3.31573 C1.41725 1.3099 3.75394 6.36234e-05 6.39673 0 Z"} fill={"rgba(0,111,122,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1358} data-layer={"236:50803/236:50805/236:50809/236:50813"} data-name={"Rectangle 3464238"}></span>
    </span>
  </span>
</Root>);
case "236:50814": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50814"} data-name={"Size=30, Tema=on, System=BT"}>
  <span className={s.n1359} data-layer={"236:50814/236:50815"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1360} data-layer={"236:50814/236:50816"} data-name={"Group 3874"}>
    <span className={s.n1361} data-layer={"236:50814/236:50816/236:50817"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 19.79809 15.01546" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1552_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.57606 0.57606 -0 0.42394 0.78803)"}><stop offset={0} stopColor={"rgba(0,106,119,1)"}/><stop offset={1} stopColor={"rgba(0,145,154,1)"}/></linearGradient></defs><path d={"M19.7981 0.956545 L19.7981 15.0155 L0 15.0155 L0 0 L7.92005 0 L9.11713 0.956545 L19.7981 0.956545 Z"} fill={`url(#${uid}-g1552_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1362} data-layer={"236:50814/236:50816/236:50818"} data-name={"Rectangle 3464252"}></span>
    <span className={s.n1363} data-layer={"236:50814/236:50816/236:50819"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 21.02378 13.61474" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1554_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 0.89383 0 0.10617 1)"}><stop offset={0} stopColor={"rgba(0,196,208,1)"}/><stop offset={1} stopColor={"rgba(0,117,125,1)"}/></linearGradient></defs><path d={"M21.0238 2.58757 L21.0238 13.6147 L0 13.6147 L0 0 L8.41038 0 L12.1333 2.58757 L21.0238 2.58757 Z"} fill={`url(#${uid}-g1554_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1364} data-layer={"236:50814/236:50816/236:50820"} data-name={"Group 3873"}>
      <span className={s.n1365} data-layer={"236:50814/236:50816/236:50820/236:50821"} data-name={"Rectangle 3464237"}></span>
      <span className={s.n1366} data-layer={"236:50814/236:50816/236:50820/236:50822"} data-name={"Ellipse 3161"}></span>
      <span className={s.n1367} data-layer={"236:50814/236:50816/236:50820/236:50823"} data-name={"Intersect"}>
        <svg width="100%" height="100%" viewBox="0 0 8.52936 4.14203" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.26448 0 C6.02653 0 7.58453 0.87344 8.52936 2.21088 C7.48917 3.39465 5.96418 4.14203 4.26448 4.14203 C2.56477 4.14199 1.04016 3.39432 0 2.21049 C0.944831 0.873265 2.50263 4.24156e-05 4.26448 0 Z"} fill={"rgba(0,111,122,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1368} data-layer={"236:50814/236:50816/236:50820/236:50824"} data-name={"Rectangle 3464238"}></span>
    </span>
  </span>
</Root>);
case "236:50825": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50825"} data-name={"Size=24, Tema=on, System=BT"}>
  <span className={s.n1369} data-layer={"236:50825/236:50826"} data-name={"Rectangle 3464235"}></span>
  <span className={s.n1370} data-layer={"236:50825/236:50827"} data-name={"Group 3874"}>
    <span className={s.n1371} data-layer={"236:50825/236:50827/236:50828"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 15.83847 12.01237" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1563_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.57606 0.57606 -0 0.42394 0.78803)"}><stop offset={0} stopColor={"rgba(0,106,119,1)"}/><stop offset={1} stopColor={"rgba(0,145,154,1)"}/></linearGradient></defs><path d={"M15.8385 0.765236 L15.8385 12.0124 L0 12.0124 L0 0 L6.33604 0 L7.29371 0.765236 L15.8385 0.765236 Z"} fill={`url(#${uid}-g1563_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1372} data-layer={"236:50825/236:50827/236:50829"} data-name={"Rectangle 3464252"}></span>
    <span className={s.n1373} data-layer={"236:50825/236:50827/236:50830"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 16.81903 10.89179" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1565_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 0.89383 0 0.10617 1)"}><stop offset={0} stopColor={"rgba(0,196,208,1)"}/><stop offset={1} stopColor={"rgba(0,117,125,1)"}/></linearGradient></defs><path d={"M16.819 2.07005 L16.819 10.8918 L0 10.8918 L0 0 L6.72831 0 L9.70667 2.07005 L16.819 2.07005 Z"} fill={`url(#${uid}-g1565_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n1374} data-layer={"236:50825/236:50827/236:50831"} data-name={"Group 3873"}>
      <span className={s.n1375} data-layer={"236:50825/236:50827/236:50831/236:50832"} data-name={"Rectangle 3464237"}></span>
      <span className={s.n1376} data-layer={"236:50825/236:50827/236:50831/236:50833"} data-name={"Ellipse 3161"}></span>
      <span className={s.n1377} data-layer={"236:50825/236:50827/236:50831/236:50834"} data-name={"Intersect"}>
        <svg width="100%" height="100%" viewBox="0 0 6.82349 3.31362" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.41159 0 C4.82123 0 6.06762 0.698752 6.82349 1.7687 C5.99134 2.71572 4.77134 3.31362 3.41159 3.31362 C2.05181 3.31359 0.832129 2.71546 0 1.76839 C0.755865 0.698612 2.0021 3.39325e-05 3.41159 0 Z"} fill={"rgba(0,111,122,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n1378} data-layer={"236:50825/236:50827/236:50831/236:50835"} data-name={"Rectangle 3464238"}></span>
    </span>
  </span>
</Root>);
case "236:50836": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50836"} data-name={"Size=60, Tema=off, System=BT"}>
  <span className={s.n1379} data-layer={"236:50836/236:50837"} data-name={"Group 6933"}>
    <span className={s.n1380} data-layer={"236:50836/236:50837/236:50838"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 39.59617 17.01546" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.8401 0 L18.2343 1.91309 L39.5962 1.91309 L39.5962 9.97201 M0 17.0155 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1381} data-layer={"236:50836/236:50837/236:50839"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 42.04756 24.23388" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 24.2339 L0 0 L16.8208 0 L24.2667 4.6058 L42.0476 4.6058 L42.0476 17.9798 M25.0238 24.2339 L0 24.2339"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1382} data-layer={"236:50836/236:50837/236:50840"} data-name={"Ellipse 3161"}></span>
    <span className={s.n1383} data-layer={"236:50836/236:50837/236:50841"} data-name={"Intersect"}>
      <svg width="100%" height="100%" viewBox="0 0 17.05872 8.28405" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.52897 0 C12.0531 0 15.1691 1.74688 17.0587 4.42176 C14.9783 6.7893 11.9284 8.28405 8.52897 8.28405 C5.12953 8.28398 2.08032 6.78864 0 4.42098 C1.88966 1.74653 5.00526 8.48312e-05 8.52897 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1384} data-layer={"236:50836/236:50837/236:50842"} data-name={"Rectangle 3464238"}></span>
  </span>
  <span className={s.n171} data-layer={"236:50836/236:50843"} data-name={"Rectangle 3464337"}></span>
</Root>);
case "236:50844": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50844"} data-name={"Size=45, Tema=off, System=BT"}>
  <span className={s.n1385} data-layer={"236:50844/236:50845"} data-name={"Group 6933"}>
    <span className={s.n1386} data-layer={"236:50844/236:50845/236:50846"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 29.69713 12.76159" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L11.8801 0 L13.6757 1.43482 L29.6971 1.43482 L29.6971 7.479 M0 12.7616 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1387} data-layer={"236:50844/236:50845/236:50847"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 31.53567 18.17541" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 18.1754 L0 0 L12.6156 0 L18.2 3.45435 L31.5357 3.45435 L31.5357 13.4848 M18.7678 18.1754 L0 18.1754"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1388} data-layer={"236:50844/236:50845/236:50848"} data-name={"Ellipse 3161"}></span>
    <span className={s.n1389} data-layer={"236:50844/236:50845/236:50849"} data-name={"Intersect"}>
      <svg width="100%" height="100%" viewBox="0 0 12.79404 6.21304" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.39673 0 C9.0398 0 11.3768 1.31016 12.794 3.31632 C11.2338 5.09198 8.94627 6.21304 6.39673 6.21304 C3.84715 6.21298 1.56024 5.09148 0 3.31573 C1.41725 1.3099 3.75394 6.36234e-05 6.39673 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1390} data-layer={"236:50844/236:50845/236:50850"} data-name={"Rectangle 3464238"}></span>
  </span>
  <span className={s.n177} data-layer={"236:50844/236:50851"} data-name={"Rectangle 3464337"}></span>
</Root>);
case "236:50852": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50852"} data-name={"Size=30, Tema=off, System=BT"}>
  <span className={s.n1391} data-layer={"236:50852/236:50853"} data-name={"Group 6933"}>
    <span className={s.n1392} data-layer={"236:50852/236:50853/236:50854"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 19.79809 8.50773" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L7.92005 0 L9.11714 0.956545 L19.7981 0.956545 L19.7981 4.986 M0 8.50773 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1393} data-layer={"236:50852/236:50853/236:50855"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 21.02378 12.11694" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 12.1169 L0 0 L8.41038 0 L12.1333 2.3029 L21.0238 2.3029 L21.0238 8.98989 M12.5119 12.1169 L0 12.1169"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1394} data-layer={"236:50852/236:50853/236:50856"} data-name={"Ellipse 3161"}></span>
    <span className={s.n1395} data-layer={"236:50852/236:50853/236:50857"} data-name={"Intersect"}>
      <svg width="100%" height="100%" viewBox="0 0 8.52936 4.14203" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.26448 0 C6.02653 0 7.58453 0.87344 8.52936 2.21088 C7.48917 3.39465 5.96418 4.14203 4.26448 4.14203 C2.56477 4.14199 1.04016 3.39432 0 2.21049 C0.944831 0.873265 2.50263 4.24156e-05 4.26448 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1396} data-layer={"236:50852/236:50853/236:50858"} data-name={"Rectangle 3464238"}></span>
  </span>
  <span className={s.n183} data-layer={"236:50852/236:50859"} data-name={"Rectangle 3464337"}></span>
</Root>);
case "236:50860": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50860"} data-name={"Size=24, Tema=off, System=BT"}>
  <span className={s.n1397} data-layer={"236:50860/236:50861"} data-name={"Group 6933"}>
    <span className={s.n1398} data-layer={"236:50860/236:50861/236:50862"} data-name={"Rectangle 3464237"}>
      <svg width="100%" height="100%" viewBox="0 0 15.83847 6.80618" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L6.33604 0 L7.29371 0.765236 L15.8385 0.765236 L15.8385 3.9888 M0 6.80618 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1399} data-layer={"236:50860/236:50861/236:50863"} data-name={"Rectangle 3464236"}>
      <svg width="100%" height="100%" viewBox="0 0 16.81903 9.69355" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 9.69355 L0 0 L6.72831 0 L9.70667 1.84232 L16.819 1.84232 L16.819 7.19191 M10.0095 9.69355 L0 9.69355"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1400} data-layer={"236:50860/236:50861/236:50864"} data-name={"Ellipse 3161"}></span>
    <span className={s.n1401} data-layer={"236:50860/236:50861/236:50865"} data-name={"Intersect"}>
      <svg width="100%" height="100%" viewBox="0 0 6.82349 3.31362" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.41159 0 C4.82123 0 6.06762 0.698752 6.82349 1.7687 C5.99134 2.71572 4.77134 3.31362 3.41159 3.31362 C2.05181 3.31359 0.832129 2.71546 0 1.76839 C0.755865 0.698612 2.0021 3.39325e-05 3.41159 0 Z"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
    </span>
    <span className={s.n1402} data-layer={"236:50860/236:50861/236:50866"} data-name={"Rectangle 3464238"}></span>
  </span>
  <span className={s.n189} data-layer={"236:50860/236:50867"} data-name={"Rectangle 3464337"}></span>
</Root>);
case "236:50868": return (<Root {...rootAttributes} className={[s.n31,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50868"} data-name={"Size=90, Tema=on, System=IUCH"}>
  <span className={s.n1403} data-layer={"236:50868/236:50869"} data-name={"Group 6937"}>
    <span className={s.n1404} data-layer={"236:50868/236:50869/236:50870"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n1405} data-layer={"236:50868/236:50869/236:50871"} data-name={"Group 6935"}>
      <span className={s.n1406} data-layer={"236:50868/236:50869/236:50871/236:50872"} data-name={"Rectangle 3464338"}></span>
      <span className={s.n1407} data-layer={"236:50868/236:50869/236:50871/236:50873"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1408} data-layer={"236:50868/236:50869/236:50871/236:50874"} data-name={"Rectangle 3464339"}></span>
      <span className={s.n1409} data-layer={"236:50868/236:50869/236:50871/236:50875"} data-name={"Group 6934"}>
        <span className={s.n1410} data-layer={"236:50868/236:50869/236:50871/236:50875/236:50876"} data-name={"Ellipse 3198"}></span>
        <span className={s.n1411} data-layer={"236:50868/236:50869/236:50871/236:50875/236:50877"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 19.33116 19.33116" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1612_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(173,235,149,1)"}/><stop offset={1} stopColor={"rgba(17,176,142,1)"}/></linearGradient></defs><path d={"M1.07288 13.9571 L1.07288 18.7899 Z"} fill={`url(#${uid}-g1612_netfill0)`} fillRule="nonzero"/><path d={"M19.3312 9.66558 C19.3312 15.001 15.001 19.3312 9.66558 19.3312 C4.33018 19.3312 1.07288 13.9571 1.07288 13.9571 L5.44172 13.9571 M0 9.66558 C0 4.33018 4.29152 0 9.66558 0 C16.1125 0 19.3312 5.37406 19.3312 5.37406 L19.3312 0.541272 M19.3312 5.37406 L15.0396 5.37406 M1.07288 13.9571 L1.07288 18.7899"} fill="none" stroke={"rgba(0,74,16,1)"} strokeWidth={3.2160024642944336} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n1412} data-layer={"236:50868/236:50869/236:50879"} data-name={"Rectangle 3464340"}></span>
  </span>
</Root>);
case "236:50880": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50880"} data-name={"Size=60, Tema=on, System=IUCH"}>
  <span className={s.n1413} data-layer={"236:50880/236:50881"} data-name={"Group 6936"}>
    <span className={s.n1414} data-layer={"236:50880/236:50881/236:50882"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n1415} data-layer={"236:50880/236:50881/236:50883"} data-name={"Group 6935"}>
      <span className={s.n1416} data-layer={"236:50880/236:50881/236:50883/236:50884"} data-name={"Rectangle 3464338"}></span>
      <span className={s.n1417} data-layer={"236:50880/236:50881/236:50883/236:50885"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1418} data-layer={"236:50880/236:50881/236:50883/236:50886"} data-name={"Rectangle 3464339"}></span>
      <span className={s.n1419} data-layer={"236:50880/236:50881/236:50883/236:50887"} data-name={"Group 6934"}>
        <span className={s.n1420} data-layer={"236:50880/236:50881/236:50883/236:50887/236:50888"} data-name={"Ellipse 3198"}></span>
        <span className={s.n1421} data-layer={"236:50880/236:50881/236:50883/236:50887/236:50889"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 12.88744 12.88744" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1623_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(173,235,149,1)"}/><stop offset={1} stopColor={"rgba(17,176,142,1)"}/></linearGradient></defs><path d={"M0.715253 9.30473 L0.715253 12.5266 Z"} fill={`url(#${uid}-g1623_netfill0)`} fillRule="nonzero"/><path d={"M12.8874 6.44372 C12.8874 10.0007 10.0007 12.8874 6.44372 12.8874 C2.88679 12.8874 0.715253 9.30473 0.715253 9.30473 L3.62781 9.30473 M0 6.44372 C0 2.88679 2.86101 0 6.44372 0 C10.7417 0 12.8874 3.58271 12.8874 3.58271 L12.8874 0.360848 M12.8874 3.58271 L10.0264 3.58271 M0.715253 9.30473 L0.715253 12.5266"} fill="none" stroke={"rgba(0,74,16,1)"} strokeWidth={2.1440017223358154} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n1422} data-layer={"236:50880/236:50881/236:50891"} data-name={"Rectangle 3464340"}></span>
  </span>
</Root>);
case "236:50892": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50892"} data-name={"Size=45, Tema=on, System=IUCH"}>
  <span className={s.n1423} data-layer={"236:50892/236:50893"} data-name={"Group 6938"}>
    <span className={s.n1424} data-layer={"236:50892/236:50893/236:50894"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n1425} data-layer={"236:50892/236:50893/236:50895"} data-name={"Group 6935"}>
      <span className={s.n1426} data-layer={"236:50892/236:50893/236:50895/236:50896"} data-name={"Rectangle 3464338"}></span>
      <span className={s.n1427} data-layer={"236:50892/236:50893/236:50895/236:50897"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1428} data-layer={"236:50892/236:50893/236:50895/236:50898"} data-name={"Rectangle 3464339"}></span>
      <span className={s.n1429} data-layer={"236:50892/236:50893/236:50895/236:50899"} data-name={"Group 6934"}>
        <span className={s.n1430} data-layer={"236:50892/236:50893/236:50895/236:50899/236:50900"} data-name={"Ellipse 3198"}></span>
        <span className={s.n1431} data-layer={"236:50892/236:50893/236:50895/236:50899/236:50901"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 9.6657 9.6657" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1634_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(173,235,149,1)"}/><stop offset={1} stopColor={"rgba(17,176,142,1)"}/></linearGradient></defs><path d={"M0.536446 6.97863 L0.536446 9.39506 Z"} fill={`url(#${uid}-g1634_netfill0)`} fillRule="nonzero"/><path d={"M9.6657 4.83285 C9.6657 7.50058 7.50058 9.6657 4.83285 9.6657 C2.16512 9.6657 0.536446 6.97863 0.536446 6.97863 L2.72089 6.97863 M0 4.83285 C0 2.16512 2.14578 0 4.83285 0 C8.05636 0 9.6657 2.68706 9.6657 2.68706 L9.6657 0.27064 M9.6657 2.68706 L7.51991 2.68706 M0.536446 6.97863 L0.536446 9.39506"} fill="none" stroke={"rgba(0,74,16,1)"} strokeWidth={1.6080209016799927} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n1432} data-layer={"236:50892/236:50893/236:50903"} data-name={"Rectangle 3464340"}></span>
  </span>
</Root>);
case "236:50904": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50904"} data-name={"Size=30, Tema=on, System=IUCH"}>
  <span className={s.n1433} data-layer={"236:50904/236:50905"} data-name={"Group 6939"}>
    <span className={s.n1434} data-layer={"236:50904/236:50905/236:50906"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n1435} data-layer={"236:50904/236:50905/236:50907"} data-name={"Group 6935"}>
      <span className={s.n1436} data-layer={"236:50904/236:50905/236:50907/236:50908"} data-name={"Rectangle 3464338"}></span>
      <span className={s.n1437} data-layer={"236:50904/236:50905/236:50907/236:50909"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1438} data-layer={"236:50904/236:50905/236:50907/236:50910"} data-name={"Rectangle 3464339"}></span>
      <span className={s.n1439} data-layer={"236:50904/236:50905/236:50907/236:50911"} data-name={"Group 6934"}>
        <span className={s.n1440} data-layer={"236:50904/236:50905/236:50907/236:50911/236:50912"} data-name={"Ellipse 3198"}></span>
        <span className={s.n1441} data-layer={"236:50904/236:50905/236:50907/236:50911/236:50913"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 6.4438 6.4438" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1645_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(173,235,149,1)"}/><stop offset={1} stopColor={"rgba(17,176,142,1)"}/></linearGradient></defs><path d={"M0.357631 4.65242 L0.357631 6.26337 Z"} fill={`url(#${uid}-g1645_netfill0)`} fillRule="nonzero"/><path d={"M6.4438 3.2219 C6.4438 5.00039 5.00039 6.4438 3.2219 6.4438 C1.44341 6.4438 0.357631 4.65242 0.357631 4.65242 L1.81393 4.65242 M0 3.2219 C0 1.44341 1.43052 0 3.2219 0 C5.37091 0 6.4438 1.79138 6.4438 1.79138 L6.4438 0.180426 M6.4438 1.79138 L5.01328 1.79138 M0.357631 4.65242 L0.357631 6.26337"} fill="none" stroke={"rgba(0,74,16,1)"} strokeWidth={1.0720138549804688} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n1442} data-layer={"236:50904/236:50905/236:50915"} data-name={"Rectangle 3464340"}></span>
  </span>
</Root>);
case "236:50916": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50916"} data-name={"Size=24, Tema=on, System=IUCH"}>
  <span className={s.n1443} data-layer={"236:50916/236:50917"} data-name={"Group 6939"}>
    <span className={s.n1444} data-layer={"236:50916/236:50917/236:50918"} data-name={"Rectangle 3464235"}></span>
    <span className={s.n1445} data-layer={"236:50916/236:50917/236:50919"} data-name={"Group 6935"}>
      <span className={s.n1446} data-layer={"236:50916/236:50917/236:50919/236:50920"} data-name={"Rectangle 3464338"}></span>
      <span className={s.n1447} data-layer={"236:50916/236:50917/236:50919/236:50921"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1448} data-layer={"236:50916/236:50917/236:50919/236:50922"} data-name={"Rectangle 3464339"}></span>
      <span className={s.n1449} data-layer={"236:50916/236:50917/236:50919/236:50923"} data-name={"Group 6934"}>
        <span className={s.n1450} data-layer={"236:50916/236:50917/236:50919/236:50923/236:50924"} data-name={"Ellipse 3198"}></span>
        <span className={s.n1451} data-layer={"236:50916/236:50917/236:50919/236:50923/236:50925"} data-name={"Vector"}>
          <svg width="100%" height="100%" viewBox="0 0 5.15504 5.15504" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g1656_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(173,235,149,1)"}/><stop offset={1} stopColor={"rgba(17,176,142,1)"}/></linearGradient></defs><path d={"M0.286105 3.72194 L0.286105 5.0107 Z"} fill={`url(#${uid}-g1656_netfill0)`} fillRule="nonzero"/><path d={"M5.15504 2.57752 C5.15504 4.00031 4.00031 5.15504 2.57752 5.15504 C1.15473 5.15504 0.286105 3.72194 0.286105 3.72194 L1.45114 3.72194 M0 2.57752 C0 1.15473 1.14442 0 2.57752 0 C4.29672 0 5.15504 1.4331 5.15504 1.4331 L5.15504 0.144341 M5.15504 1.4331 L4.01062 1.4331 M0.286105 3.72194 L0.286105 5.0107"} fill="none" stroke={"rgba(0,74,16,1)"} strokeWidth={0.8576111197471619} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </span>
    </span>
    <span className={s.n1452} data-layer={"236:50916/236:50917/236:50927"} data-name={"Rectangle 3464340"}></span>
  </span>
</Root>);
case "236:50928": return (<Root {...rootAttributes} className={[s.n45,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50928"} data-name={"Size=60, Tema=off, System=IUCH"}>
  <span className={s.n1453} data-layer={"236:50928/236:50929"} data-name={"Group 6941"}>
    <span className={s.n1454} data-layer={"236:50928/236:50929/236:50930"} data-name={"Group 6940"}>
      <span className={s.n1455} data-layer={"236:50928/236:50929/236:50930/236:50931"} data-name={"Rectangle 3464338"}>
        <svg width="100%" height="100%" viewBox="0 0 39.54101 39.54101" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L39.541 0 L39.541 15.7705 M0 39.541 L0 0 M19.7705 39.541 L0 39.541"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1456} data-layer={"236:50928/236:50929/236:50930/236:50932"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1457} data-layer={"236:50928/236:50929/236:50930/236:50933"} data-name={"Rectangle 3464339"}>
        <svg width="100%" height="100%" viewBox="0 0 25.28091 10.43408" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L25.2809 0 M12.3364 10.4341 L0 10.4341 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1458} data-layer={"236:50928/236:50929/236:50930/236:50934"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 17.47328 17.67432" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.63612 17.6743 C3.75801 17.6743 0.779886 12.7609 0.779886 12.7609 L4.77428 12.7609 M8.63612 0 C14.5305 0 17.4733 4.91346 17.4733 4.91346 L17.4733 0.494881 M17.4733 4.91346 L13.5496 4.91346 M0.779886 12.7609 L0.779886 17.1794 M0 6.948 C0.859416 2.97661 4.37569 0 8.63612 0 M17.2986 10.5931 C16.4835 14.631 12.9131 17.6743 8.63612 17.6743"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n171} data-layer={"236:50928/236:50929/236:50935"} data-name={"Rectangle 3464341"}></span>
  </span>
</Root>);
case "236:50936": return (<Root {...rootAttributes} className={[s.n59,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50936"} data-name={"Size=45, Tema=off, System=IUCH"}>
  <span className={s.n143} data-layer={"236:50936/236:50937"} data-name={"Group 6942"}>
    <span className={s.n1459} data-layer={"236:50936/236:50937/236:50938"} data-name={"Group 6940"}>
      <span className={s.n1460} data-layer={"236:50936/236:50937/236:50938/236:50939"} data-name={"Rectangle 3464338"}>
        <svg width="100%" height="100%" viewBox="0 0 29.65576 29.65576" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L29.6558 0 L29.6558 11.8279 M0 29.6558 L0 0 M14.8279 29.6558 L0 29.6558"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1461} data-layer={"236:50936/236:50937/236:50938/236:50940"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1462} data-layer={"236:50936/236:50937/236:50938/236:50941"} data-name={"Rectangle 3464339"}>
        <svg width="100%" height="100%" viewBox="0 0 18.96068 7.82556" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L18.9607 0 M9.25231 7.82556 L0 7.82556 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1463} data-layer={"236:50936/236:50937/236:50938/236:50942"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 13.10496 13.25574" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.47709 13.2557 C2.81851 13.2557 0.584914 9.57064 0.584914 9.57064 L3.58071 9.57064 M6.47709 0 C10.8979 0 13.105 3.68509 13.105 3.68509 L13.105 0.371161 M13.105 3.68509 L10.1622 3.68509 M0.584914 9.57064 L0.584914 12.8846 M0 5.211 C0.644562 2.23246 3.28177 0 6.47709 0 M12.9739 7.94483 C12.3626 10.9732 9.68479 13.2557 6.47709 13.2557"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={3.75} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n177} data-layer={"236:50936/236:50937/236:50943"} data-name={"Rectangle 3464341"}></span>
  </span>
</Root>);
case "236:50944": return (<Root {...rootAttributes} className={[s.n20,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50944"} data-name={"Size=30, Tema=off, System=IUCH"}>
  <span className={s.n150} data-layer={"236:50944/236:50945"} data-name={"Group 6943"}>
    <span className={s.n1464} data-layer={"236:50944/236:50945/236:50946"} data-name={"Group 6940"}>
      <span className={s.n1465} data-layer={"236:50944/236:50945/236:50946/236:50947"} data-name={"Rectangle 3464338"}>
        <svg width="100%" height="100%" viewBox="0 0 19.7705 19.7705" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L19.7705 0 L19.7705 7.88525 M0 19.7705 L0 0 M9.88525 19.7705 L0 19.7705"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1466} data-layer={"236:50944/236:50945/236:50946/236:50948"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1467} data-layer={"236:50944/236:50945/236:50946/236:50949"} data-name={"Rectangle 3464339"}>
        <svg width="100%" height="100%" viewBox="0 0 12.64046 5.21704" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L12.6405 0 M6.16821 5.21704 L0 5.21704 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1468} data-layer={"236:50944/236:50945/236:50946/236:50950"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 8.73664 8.83716" overflow="visible" aria-hidden="true" focusable="false"><path d={"M4.31806 8.83716 C1.879 8.83716 0.389943 6.38043 0.389943 6.38043 L2.38714 6.38043 M4.31806 0 C7.26525 0 8.73664 2.45673 8.73664 2.45673 L8.73664 0.24744 M8.73664 2.45673 L6.77479 2.45673 M0.389943 6.38043 L0.389943 8.58972 M0 3.474 C0.429708 1.48831 2.18785 0 4.31806 0 M8.64929 5.29656 C8.24175 7.31548 6.45653 8.83716 4.31806 8.83716"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n183} data-layer={"236:50944/236:50945/236:50951"} data-name={"Rectangle 3464341"}></span>
  </span>
</Root>);
case "236:50952": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:50952"} data-name={"Size=24, Tema=off, System=IUCH"}>
  <span className={s.n1469} data-layer={"236:50952/236:50953"} data-name={"Group 6944"}>
    <span className={s.n1470} data-layer={"236:50952/236:50953/236:50954"} data-name={"Group 6940"}>
      <span className={s.n1471} data-layer={"236:50952/236:50953/236:50954/236:50955"} data-name={"Rectangle 3464338"}>
        <svg width="100%" height="100%" viewBox="0 0 15.8164 15.8164" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L15.8164 0 L15.8164 6.3082 M0 15.8164 L0 0 M7.9082 15.8164 L0 15.8164"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1472} data-layer={"236:50952/236:50953/236:50954/236:50956"} data-name={"Ellipse 3199"}></span>
      <span className={s.n1473} data-layer={"236:50952/236:50953/236:50954/236:50957"} data-name={"Rectangle 3464339"}>
        <svg width="100%" height="100%" viewBox="0 0 10.11236 4.17363" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 0 L10.1124 0 M4.93457 4.17363 L0 4.17363 L0 0"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="miter"/></svg>
      </span>
      <span className={s.n1474} data-layer={"236:50952/236:50953/236:50954/236:50958"} data-name={"Vector"}>
        <svg width="100%" height="100%" viewBox="0 0 6.98931 7.06973" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.45445 7.06973 C1.5032 7.06973 0.311954 5.10434 0.311954 5.10434 L1.90971 5.10434 M3.45445 0 C5.8122 0 6.98931 1.96538 6.98931 1.96538 L6.98931 0.197952 M6.98931 1.96538 L5.41983 1.96538 M0.311954 5.10434 L0.311954 6.87177 M0 2.7792 C0.343766 1.19065 1.75028 0 3.45445 0 M6.91943 4.23724 C6.5934 5.85238 5.16522 7.06973 3.45445 7.06973"} fill="none" stroke={"rgba(92,84,111,1)"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </span>
    <span className={s.n189} data-layer={"236:50952/236:50953/236:50959"} data-name={"Rectangle 3464341"}></span>
  </span>
</Root>);
  default: return null;
  }
}
