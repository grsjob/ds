// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './CardObjectCastVarDesign227_4136.module.css';
export const variants = [
  {
    "id": "227:4137",
    "name": "State=default, CS=on",
    "props": {
      "State": "default",
      "CS": "on"
    }
  },
  {
    "id": "227:4150",
    "name": "State=default, CS=off",
    "props": {
      "State": "default",
      "CS": "off"
    }
  },
  {
    "id": "227:4163",
    "name": "State=hover, CS=on",
    "props": {
      "State": "hover",
      "CS": "on"
    }
  },
  {
    "id": "227:4176",
    "name": "State=hover, CS=off",
    "props": {
      "State": "hover",
      "CS": "off"
    }
  },
  {
    "id": "227:4195",
    "name": "State=disable, CS=on",
    "props": {
      "State": "disable",
      "CS": "on"
    }
  },
  {
    "id": "227:4208",
    "name": "State=disable, CS=off",
    "props": {
      "State": "disable",
      "CS": "off"
    }
  },
  {
    "id": "227:4221",
    "name": "State=sceleton, CS=off",
    "props": {
      "State": "sceleton",
      "CS": "off"
    }
  }
] as const;
export type CardObjectCastVarDesign227_4136Variant = typeof variants[number]["id"];
export interface CardObjectCastVarDesign227_4136Dimensions {
  "State"?: "default" | "disable" | "hover" | "sceleton";
  "CS"?: "off" | "on";
}
export interface CardObjectCastVarDesign227_4136Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: CardObjectCastVarDesign227_4136Variant;
  variantProps?: CardObjectCastVarDesign227_4136Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: CardObjectCastVarDesign227_4136Variant) => void;
}
const transitions = {"227:4137":{"ON_HOVER":"227:4163"},"227:4150":{"ON_HOVER":"227:4176"}};
export function CardObjectCastVarDesign227_4136({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: CardObjectCastVarDesign227_4136Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:4137": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4137"} data-name={"State=default, CS=on"}>
  <span className={s.n1} data-layer={"227:4137/227:4138"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4137/227:4138/227:4139"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:4137/227:4138/227:4139/227:4141"} data-name={"Text"}>
        {textSlot(text,"227:4137/227:4138/227:4139/227:4141","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:4137/227:4138/227:4139/227:4142"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4143"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4143/227:651"} data-name={"Label"}>
            {textSlot(text,"227:4137/227:4138/227:4139/227:4142/227:4143/227:651","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4144"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4144/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4137/227:4138/227:4139/227:4142/227:4144/227:654","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4145"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4137/227:4138/227:4139/227:4142/227:4145/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4137/227:4138/227:4139/227:4142/227:4145/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4137/227:4138/227:4146"} data-name={"Text"}>
      <span className={s.n11} data-layer={"227:4137/227:4138/227:4146/227:4147"} data-name={"Text"}>
        {textSlot(text,"227:4137/227:4138/227:4146/227:4147","Text","Information text information text information ")}
      </span>
      <span className={s.n12} data-layer={"227:4137/227:4138/227:4146/227:4148"} data-name={"Text"}>
        {textSlot(text,"227:4137/227:4138/227:4146/227:4148","Text","Information text information text information text")}
      </span>
    </span>
  </span>
</Root>);
case "227:4150": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4150"} data-name={"State=default, CS=off"}>
  <span className={s.n1} data-layer={"227:4150/227:4151"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4150/227:4151/227:4152"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:4150/227:4151/227:4152/227:4154"} data-name={"Text"}>
        {textSlot(text,"227:4150/227:4151/227:4152/227:4154","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:4150/227:4151/227:4152/227:4155"} data-name={"Lable"}>
        <span className={s.n13} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4156"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n14} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4156/227:657"} data-name={"Label"}>
            {textSlot(text,"227:4150/227:4151/227:4152/227:4155/227:4156/227:657","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4157"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4157/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4150/227:4151/227:4152/227:4155/227:4157/227:654","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4158"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4150/227:4151/227:4152/227:4155/227:4158/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4150/227:4151/227:4152/227:4155/227:4158/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4150/227:4151/227:4159"} data-name={"Text"}>
      <span className={s.n15} data-layer={"227:4150/227:4151/227:4159/227:4160"} data-name={"Text"}>
        {textSlot(text,"227:4150/227:4151/227:4159/227:4160","Text","Information text information text information text")}
      </span>
      <span className={s.n16} data-layer={"227:4150/227:4151/227:4159/227:4161"} data-name={"Text"}>
        {textSlot(text,"227:4150/227:4151/227:4159/227:4161","Text","Information text information text information ")}
      </span>
    </span>
  </span>
</Root>);
case "227:4163": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4163"} data-name={"State=hover, CS=on"}>
  <span className={s.n1} data-layer={"227:4163/227:4164"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4163/227:4164/227:4165"} data-name={"headline"}>
      <span className={s.n3} data-layer={"227:4163/227:4164/227:4165/227:4167"} data-name={"Text"}>
        {textSlot(text,"227:4163/227:4164/227:4165/227:4167","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:4163/227:4164/227:4165/227:4168"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4169"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n6} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4169/227:651"} data-name={"Label"}>
            {textSlot(text,"227:4163/227:4164/227:4165/227:4168/227:4169/227:651","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4170"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4170/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4163/227:4164/227:4165/227:4168/227:4170/227:654","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4171"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4163/227:4164/227:4165/227:4168/227:4171/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4163/227:4164/227:4165/227:4168/227:4171/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4163/227:4164/227:4172"} data-name={"Text"}>
      <span className={s.n15} data-layer={"227:4163/227:4164/227:4172/227:4173"} data-name={"Text"}>
        {textSlot(text,"227:4163/227:4164/227:4172/227:4173","Text","Information text information text information text")}
      </span>
      <span className={s.n16} data-layer={"227:4163/227:4164/227:4172/227:4174"} data-name={"Text"}>
        {textSlot(text,"227:4163/227:4164/227:4172/227:4174","Text","Information text information text information ")}
      </span>
    </span>
  </span>
</Root>);
case "227:4176": return (<Root {...rootAttributes} className={[s.n17,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4176"} data-name={"State=hover, CS=off"}>
  <span className={s.n1} data-layer={"227:4176/227:4177"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4176/227:4177/227:4178"} data-name={"headline"}>
      <span className={s.n18} data-layer={"227:4176/227:4177/227:4178/227:4180"} data-name={"Primitives/text/var"}>
        <span className={s.n18} data-layer={"227:4176/227:4177/227:4178/227:4180/227:4181"} data-name={"content"}>
          <span className={s.n3} data-layer={"227:4176/227:4177/227:4178/227:4180/227:4181/227:4182"} data-name={"Text"}>
            {textSlot(text,"227:4176/227:4177/227:4178/227:4180/227:4181/227:4182","Text","000_0000_0000")}
          </span>
        </span>
      </span>
      <span className={s.n4} data-layer={"227:4176/227:4177/227:4178/227:4187"} data-name={"Lable"}>
        <span className={s.n13} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4188"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n14} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4188/227:657"} data-name={"Label"}>
            {textSlot(text,"227:4176/227:4177/227:4178/227:4187/227:4188/227:657","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4189"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4189/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4176/227:4177/227:4178/227:4187/227:4189/227:654","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4190"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n8} data-layer={"227:4176/227:4177/227:4178/227:4187/227:4190/227:654"} data-name={"Label"}>
            {textSlot(text,"227:4176/227:4177/227:4178/227:4187/227:4190/227:654","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4176/227:4177/227:4191"} data-name={"Text"}>
      <span className={s.n15} data-layer={"227:4176/227:4177/227:4191/227:4192"} data-name={"Text"}>
        {textSlot(text,"227:4176/227:4177/227:4191/227:4192","Text","Information text information text information text")}
      </span>
      <span className={s.n16} data-layer={"227:4176/227:4177/227:4191/227:4193"} data-name={"Text"}>
        {textSlot(text,"227:4176/227:4177/227:4191/227:4193","Text","Information text information text information ")}
      </span>
    </span>
  </span>
</Root>);
case "227:4195": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4195"} data-name={"State=disable, CS=on"}>
  <span className={s.n1} data-layer={"227:4195/227:4196"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4195/227:4196/227:4197"} data-name={"headline"}>
      <span className={s.n19} data-layer={"227:4195/227:4196/227:4197/227:4199"} data-name={"Text"}>
        {textSlot(text,"227:4195/227:4196/227:4197/227:4199","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:4195/227:4196/227:4197/227:4200"} data-name={"Lable"}>
        <span className={s.n5} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4201"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4201/227:663"} data-name={"Label"}>
            {textSlot(text,"227:4195/227:4196/227:4197/227:4200/227:4201/227:663","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4202"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4202/227:666"} data-name={"Label"}>
            {textSlot(text,"227:4195/227:4196/227:4197/227:4200/227:4202/227:666","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4203"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4195/227:4196/227:4197/227:4200/227:4203/227:666"} data-name={"Label"}>
            {textSlot(text,"227:4195/227:4196/227:4197/227:4200/227:4203/227:666","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4195/227:4196/227:4204"} data-name={"Text"}>
      <span className={s.n21} data-layer={"227:4195/227:4196/227:4204/227:4205"} data-name={"Text"}>
        {textSlot(text,"227:4195/227:4196/227:4204/227:4205","Text","Information text information text information ")}
      </span>
      <span className={s.n22} data-layer={"227:4195/227:4196/227:4204/227:4206"} data-name={"Text"}>
        {textSlot(text,"227:4195/227:4196/227:4204/227:4206","Text","Information text information text information text")}
      </span>
    </span>
  </span>
</Root>);
case "227:4208": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4208"} data-name={"State=disable, CS=off"}>
  <span className={s.n1} data-layer={"227:4208/227:4209"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4208/227:4209/227:4210"} data-name={"headline"}>
      <span className={s.n19} data-layer={"227:4208/227:4209/227:4210/227:4212"} data-name={"Text"}>
        {textSlot(text,"227:4208/227:4209/227:4210/227:4212","Text","000_0000_0000")}
      </span>
      <span className={s.n4} data-layer={"227:4208/227:4209/227:4210/227:4213"} data-name={"Lable"}>
        <span className={s.n13} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4214"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4214/227:669"} data-name={"Label"}>
            {textSlot(text,"227:4208/227:4209/227:4210/227:4213/227:4214/227:669","Label","Lable")}
          </span>
        </span>
        <span className={s.n7} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4215"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4215/227:666"} data-name={"Label"}>
            {textSlot(text,"227:4208/227:4209/227:4210/227:4213/227:4215/227:666","Label","Lable")}
          </span>
        </span>
        <span className={s.n9} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4216"} data-name={"Lable/var/S/valeu"}>
          <span className={s.n20} data-layer={"227:4208/227:4209/227:4210/227:4213/227:4216/227:666"} data-name={"Label"}>
            {textSlot(text,"227:4208/227:4209/227:4210/227:4213/227:4216/227:666","Label","Lable")}
          </span>
        </span>
      </span>
    </span>
    <span className={s.n10} data-layer={"227:4208/227:4209/227:4217"} data-name={"Text"}>
      <span className={s.n23} data-layer={"227:4208/227:4209/227:4217/227:4218"} data-name={"Text"}>
        {textSlot(text,"227:4208/227:4209/227:4217/227:4218","Text","Information text information text information text")}
      </span>
      <span className={s.n24} data-layer={"227:4208/227:4209/227:4217/227:4219"} data-name={"Text"}>
        {textSlot(text,"227:4208/227:4209/227:4217/227:4219","Text","Information text information text information ")}
      </span>
    </span>
  </span>
</Root>);
case "227:4221": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:4221"} data-name={"State=sceleton, CS=off"}>
  <span className={s.n1} data-layer={"227:4221/227:4222"} data-name={"container"}>
    <span className={s.n2} data-layer={"227:4221/227:4222/227:4223"} data-name={"headline"}>
      <span className={s.n25} data-layer={"227:4221/227:4222/227:4223/227:4225"} data-name={"Rectangle 3464285"}></span>
      <span className={s.n4} data-layer={"227:4221/227:4222/227:4223/227:4226"} data-name={"Lable"}>
        <span className={s.n26} data-layer={"227:4221/227:4222/227:4223/227:4226/227:4227"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n27} data-layer={"227:4221/227:4222/227:4223/227:4226/227:4228"} data-name={"Lable/var/S/valeu"}></span>
        <span className={s.n28} data-layer={"227:4221/227:4222/227:4223/227:4226/227:4229"} data-name={"Lable/var/S/valeu"}></span>
      </span>
    </span>
    <span className={s.n29} data-layer={"227:4221/227:4222/227:4230"} data-name={"Text"}>
      <span className={s.n30} data-layer={"227:4221/227:4222/227:4230/227:4231"} data-name={"Rectangle 3464285"}></span>
      <span className={s.n31} data-layer={"227:4221/227:4222/227:4230/227:4232"} data-name={"Rectangle 3464286"}></span>
    </span>
  </span>
</Root>);
  default: return null;
  }
}
