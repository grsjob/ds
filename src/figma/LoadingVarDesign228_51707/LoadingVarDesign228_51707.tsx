// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './LoadingVarDesign228_51707.module.css';
export const variants = [
  {
    "id": "228:51708",
    "name": "Progress=75%, Size=18",
    "props": {
      "Progress": "75%",
      "Size": "18"
    }
  },
  {
    "id": "228:51709",
    "name": "Progress=10%, Size=18",
    "props": {
      "Progress": "10%",
      "Size": "18"
    }
  },
  {
    "id": "228:51710",
    "name": "Progress=75%, Size=16",
    "props": {
      "Progress": "75%",
      "Size": "16"
    }
  },
  {
    "id": "228:51711",
    "name": "Progress=10%, Size=16",
    "props": {
      "Progress": "10%",
      "Size": "16"
    }
  },
  {
    "id": "228:51712",
    "name": "Progress=75%, Size=14",
    "props": {
      "Progress": "75%",
      "Size": "14"
    }
  },
  {
    "id": "228:51713",
    "name": "Progress=10%, Size=14",
    "props": {
      "Progress": "10%",
      "Size": "14"
    }
  },
  {
    "id": "228:51714",
    "name": "Progress=75%, Size=20",
    "props": {
      "Progress": "75%",
      "Size": "20"
    }
  },
  {
    "id": "228:51715",
    "name": "Progress=10%, Size=20",
    "props": {
      "Progress": "10%",
      "Size": "20"
    }
  }
] as const;
export type LoadingVarDesign228_51707Variant = typeof variants[number]["id"];
export interface LoadingVarDesign228_51707Dimensions {
  "Progress"?: "10%" | "75%";
  "Size"?: "14" | "16" | "18" | "20";
}
export interface LoadingVarDesign228_51707Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: LoadingVarDesign228_51707Variant;
  variantProps?: LoadingVarDesign228_51707Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: LoadingVarDesign228_51707Variant) => void;
}
const transitions = {};
export function LoadingVarDesign228_51707({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: LoadingVarDesign228_51707Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "228:51708": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51708"} data-name={"Progress=75%, Size=18"}>
  <span className={s.n1} data-layer={"228:51708/228:51716"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.75335e-14 7.2 A7.199999809265137 7.199999809265137 0 1 1 14.4 7.2 A7.199999809265137 7.199999809265137 0 1 1 2.75335e-14 7.2 Z M2.16 7.2 A5.0399997806549095 5.0399997806549095 0 1 0 12.24 7.2 A5.0399997806549095 5.0399997806549095 0 1 0 2.16 7.2 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.9980000257492065} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n2} data-layer={"228:51708/228:51717"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.75335e-14 7.2 A7.199999809265137 7.199999809265137 0 1 0 7.2 2.04281e-14 L7.2 2.16 A5.0399997806549095 5.0399997806549095 0 1 1 2.16 7.2 Z"} fill={"rgba(92,84,111,1)"} fillRule="evenodd"/></svg>
  </span>
  <span className={s.n3} data-layer={"228:51708/228:51718"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n4} data-layer={"228:51708/228:51719"} data-name={"Group 6887"}>
    <span className={s.n5} data-layer={"228:51708/228:51719/228:51720"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5.60625 5.60625" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.80201 5.60625 L0.60067 5.60625 C0.26905 5.60625 0 5.3372 0 5.00558 L0 0.60067 C0 0.26905 0.26905 0 0.60067 0 L1.80201 0 C2.13363 0 2.40268 0.26905 2.40268 0.60067 L2.40268 5.00558 C2.40268 5.3372 2.13363 5.60625 1.80201 5.60625 Z M5.60625 5.00558 L5.60625 0.60067 C5.60625 0.26905 5.3372 0 5.00558 0 L3.80424 0 C3.47262 0 3.20357 0.26905 3.20357 0.60067 L3.20357 5.00558 C3.20357 5.3372 3.47262 5.60625 3.80424 5.60625 L5.00558 5.60625 C5.3372 5.60625 5.60625 5.3372 5.60625 5.00558 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n6} data-layer={"228:51708/228:51719/228:51721"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51709": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51709"} data-name={"Progress=10%, Size=18"}>
  <span className={s.n2} data-layer={"228:51709/228:51722"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g9_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M7.2 8.88178e-16 A7.199999809265137 7.199999809265137 0 0 1 11.4321 1.37508 L10.1624 3.12256 A5.0399997806549095 5.0399997806549095 0 0 0 7.2 2.16 Z"} fill="none" stroke={`url(#${uid}-g9_arcstroke)`} strokeWidth={1.9980000257492065} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n1} data-layer={"228:51709/228:51723"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 14.4 14.4" overflow="visible" aria-hidden="true" focusable="false"><path d={"M7.2 8.88178e-16 A7.199999809265137 7.199999809265137 0 1 0 11.3818 1.33892 L10.1273 3.09724 A5.0399997806549095 5.0399997806549095 0 1 1 7.2 2.16 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.9980000257492065} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n3} data-layer={"228:51709/228:51724"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n4} data-layer={"228:51709/228:51725"} data-name={"Group 6887"}>
    <span className={s.n5} data-layer={"228:51709/228:51725/228:51726"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 5.60625 5.60625" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.80201 5.60625 L0.60067 5.60625 C0.26905 5.60625 0 5.3372 0 5.00558 L0 0.60067 C0 0.26905 0.26905 0 0.60067 0 L1.80201 0 C2.13363 0 2.40268 0.26905 2.40268 0.60067 L2.40268 5.00558 C2.40268 5.3372 2.13363 5.60625 1.80201 5.60625 Z M5.60625 5.00558 L5.60625 0.60067 C5.60625 0.26905 5.3372 0 5.00558 0 L3.80424 0 C3.47262 0 3.20357 0.26905 3.20357 0.60067 L3.20357 5.00558 C3.20357 5.3372 3.47262 5.60625 3.80424 5.60625 L5.00558 5.60625 C5.3372 5.60625 5.60625 5.3372 5.60625 5.00558 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n6} data-layer={"228:51709/228:51725/228:51727"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51710": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51710"} data-name={"Progress=75%, Size=16"}>
  <span className={s.n8} data-layer={"228:51710/228:51728"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.4 8.88178e-16 A6.399999618530273 6.399999618530273 0 1 0 12.8 6.4 L10.88 6.4 A4.479999656677251 4.479999656677251 0 1 1 6.4 1.92 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.7760000228881836} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n9} data-layer={"228:51710/228:51729"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g17_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M2.39808e-14 6.4 A6.399999618530273 6.399999618530273 0 1 0 6.4 1.86517e-14 L6.4 1.92 A4.479999656677251 4.479999656677251 0 1 1 1.92 6.4 Z"} fill="none" stroke={`url(#${uid}-g17_arcstroke)`} strokeWidth={1.7760000228881836} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n10} data-layer={"228:51710/228:51730"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n11} data-layer={"228:51710/228:51731"} data-name={"Group 6887"}>
    <span className={s.n12} data-layer={"228:51710/228:51731/228:51732"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98333 4.98333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.60179 4.98333 L0.533929 4.98333 C0.239155 4.98333 0 4.74418 0 4.4494 L0 0.533929 C0 0.239155 0.239155 0 0.533929 0 L1.60179 0 C1.89656 0 2.13571 0.239155 2.13571 0.533929 L2.13571 4.4494 C2.13571 4.74418 1.89656 4.98333 1.60179 4.98333 Z M4.98333 4.4494 L4.98333 0.533929 C4.98333 0.239155 4.74418 0 4.4494 0 L3.38155 0 C3.08677 0 2.84762 0.239155 2.84762 0.533929 L2.84762 4.4494 C2.84762 4.74418 3.08677 4.98333 3.38155 4.98333 L4.4494 4.98333 C4.74418 4.98333 4.98333 4.74418 4.98333 4.4494 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n13} data-layer={"228:51710/228:51731/228:51733"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51711": return (<Root {...rootAttributes} className={[s.n7,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51711"} data-name={"Progress=10%, Size=16"}>
  <span className={s.n8} data-layer={"228:51711/228:51734"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M6.4 8.88178e-16 A6.399999618530273 6.399999618530273 0 1 0 10.1563 1.21828 L9.02941 2.77279 A4.479999656677251 4.479999656677251 0 1 1 6.4 1.92 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.7760000228881836} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n9} data-layer={"228:51711/228:51735"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 12.8 12.8" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g24_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M6.4 8.88178e-16 A6.399999618530273 6.399999618530273 0 0 1 10.1618 1.22229 L9.03328 2.7756 A4.479999656677251 4.479999656677251 0 0 0 6.4 1.92 Z"} fill="none" stroke={`url(#${uid}-g24_arcstroke)`} strokeWidth={1.7760000228881836} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n10} data-layer={"228:51711/228:51736"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n11} data-layer={"228:51711/228:51737"} data-name={"Group 6887"}>
    <span className={s.n12} data-layer={"228:51711/228:51737/228:51738"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98333 4.98333" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.60179 4.98333 L0.533929 4.98333 C0.239155 4.98333 0 4.74418 0 4.4494 L0 0.533929 C0 0.239155 0.239155 0 0.533929 0 L1.60179 0 C1.89656 0 2.13571 0.239155 2.13571 0.533929 L2.13571 4.4494 C2.13571 4.74418 1.89656 4.98333 1.60179 4.98333 Z M4.98333 4.4494 L4.98333 0.533929 C4.98333 0.239155 4.74418 0 4.4494 0 L3.38155 0 C3.08677 0 2.84762 0.239155 2.84762 0.533929 L2.84762 4.4494 C2.84762 4.74418 3.08677 4.98333 3.38155 4.98333 L4.4494 4.98333 C4.74418 4.98333 4.98333 4.74418 4.98333 4.4494 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n13} data-layer={"228:51711/228:51737/228:51739"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51712": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51712"} data-name={"Progress=75%, Size=14"}>
  <span className={s.n15} data-layer={"228:51712/228:51740"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M5.6 8.88178e-16 A5.59999942779541 5.59999942779541 0 1 0 11.2 5.6 L9.52 5.6 A3.919999532699592 3.919999532699592 0 1 1 5.6 1.68 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.5540000200271606} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n16} data-layer={"228:51712/228:51741"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g31_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M2.13163e-14 5.6 A5.59999942779541 5.59999942779541 0 1 0 5.6 1.59872e-14 L5.6 1.68 A3.919999532699592 3.919999532699592 0 1 1 1.68 5.6 Z"} fill="none" stroke={`url(#${uid}-g31_arcstroke)`} strokeWidth={1.5540000200271606} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n17} data-layer={"228:51712/228:51742"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n18} data-layer={"228:51712/228:51743"} data-name={"Group 6887"}>
    <span className={s.n19} data-layer={"228:51712/228:51743/228:51744"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.36042 4.36042" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.40156 4.36042 L0.467187 4.36042 C0.209261 4.36042 0 4.15116 0 3.89323 L0 0.467187 C0 0.209261 0.209261 0 0.467187 0 L1.40156 0 C1.65949 0 1.86875 0.209261 1.86875 0.467187 L1.86875 3.89323 C1.86875 4.15116 1.65949 4.36042 1.40156 4.36042 Z M4.36042 3.89323 L4.36042 0.467187 C4.36042 0.209261 4.15116 0 3.89323 0 L2.95885 0 C2.70093 0 2.49167 0.209261 2.49167 0.467187 L2.49167 3.89323 C2.49167 4.15116 2.70093 4.36042 2.95885 4.36042 L3.89323 4.36042 C4.15116 4.36042 4.36042 4.15116 4.36042 3.89323 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n20} data-layer={"228:51712/228:51743/228:51745"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51713": return (<Root {...rootAttributes} className={[s.n14,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51713"} data-name={"Progress=10%, Size=14"}>
  <span className={s.n15} data-layer={"228:51713/228:51746"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.15938e-14 5.6 C-9.68273e-08 6.70757 0.328434 7.79028 0.94377 8.71119 C1.55911 9.63211 2.43371 10.3499 3.45697 10.7737 C4.48024 11.1976 5.60621 11.3085 6.6925 11.0924 C7.7788 10.8763 8.77662 10.343 9.5598 9.5598 C10.343 8.77662 10.8763 7.7788 11.0924 6.69251 C11.3085 5.60621 11.1976 4.48024 10.7737 3.45697 C10.3499 2.43371 9.63211 1.55911 8.71119 0.94377 C7.79028 0.328434 6.70758 8.36196e-08 5.6 1.59317e-14 L5.6 1.68 C6.3753 1.68 7.13319 1.9099 7.77783 2.34064 C8.42248 2.77137 8.92491 3.38359 9.22161 4.09988 C9.5183 4.81617 9.59593 5.60435 9.44468 6.36475 C9.29342 7.12516 8.92008 7.82364 8.37186 8.37186 C7.82364 8.92008 7.12516 9.29342 6.36475 9.44468 C5.60435 9.59593 4.81617 9.5183 4.09988 9.22161 C3.38359 8.92491 2.77137 8.42248 2.34064 7.77783 C1.9099 7.13319 1.68 6.3753 1.68 5.6 L2.15938e-14 5.6 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={1.5540000200271606} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n16} data-layer={"228:51713/228:51747"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 11.2 11.2" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g38_netstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M2.15938e-14 5.6 C-9.68273e-08 6.70757 0.328434 7.79028 0.94377 8.71119 C1.55911 9.63211 2.43371 10.3499 3.45697 10.7737 C4.48024 11.1976 5.60621 11.3085 6.6925 11.0924 C7.7788 10.8763 8.77662 10.343 9.5598 9.5598 C10.343 8.77662 10.8763 7.7788 11.0924 6.69251 C11.3085 5.60621 11.1976 4.48024 10.7737 3.45697 C10.3499 2.43371 9.63211 1.55911 8.71119 0.94377 C7.79028 0.328434 6.70758 8.36196e-08 5.6 1.59317e-14 L5.6 1.68 C6.3753 1.68 7.13319 1.9099 7.77783 2.34064 C8.42248 2.77137 8.92491 3.38359 9.22161 4.09988 C9.5183 4.81617 9.59593 5.60435 9.44468 6.36475 C9.29342 7.12516 8.92008 7.82364 8.37186 8.37186 C7.82364 8.92008 7.12516 9.29342 6.36475 9.44468 C5.60435 9.59593 4.81617 9.5183 4.09988 9.22161 C3.38359 8.92491 2.77137 8.42248 2.34064 7.77783 C1.9099 7.13319 1.68 6.3753 1.68 5.6 L2.15938e-14 5.6 Z"} fill="none" stroke={`url(#${uid}-g38_netstroke)`} strokeWidth={1.5540000200271606} strokeLinecap="butt" strokeLinejoin="miter"/></svg>
  </span>
  <span className={s.n17} data-layer={"228:51713/228:51748"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n18} data-layer={"228:51713/228:51749"} data-name={"Group 6887"}>
    <span className={s.n19} data-layer={"228:51713/228:51749/228:51750"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 4.36042 4.36042" overflow="visible" aria-hidden="true" focusable="false"><path d={"M1.40156 4.36042 L0.467187 4.36042 C0.209261 4.36042 0 4.15116 0 3.89323 L0 0.467187 C0 0.209261 0.209261 0 0.467187 0 L1.40156 0 C1.65949 0 1.86875 0.209261 1.86875 0.467187 L1.86875 3.89323 C1.86875 4.15116 1.65949 4.36042 1.40156 4.36042 Z M4.36042 3.89323 L4.36042 0.467187 C4.36042 0.209261 4.15116 0 3.89323 0 L2.95885 0 C2.70093 0 2.49167 0.209261 2.49167 0.467187 L2.49167 3.89323 C2.49167 4.15116 2.70093 4.36042 2.95885 4.36042 L3.89323 4.36042 C4.15116 4.36042 4.36042 4.15116 4.36042 3.89323 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n20} data-layer={"228:51713/228:51749/228:51751"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51714": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51714"} data-name={"Progress=75%, Size=20"}>
  <span className={s.n22} data-layer={"228:51714/228:51752"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 8.88178e-16 A8.0 8.0 0 1 1 8 16 A8.0 8.0 0 1 1 8 8.88178e-16 Z M8 2.4 A5.599999904632568 5.599999904632568 0 1 0 8 13.6 A5.599999904632568 5.599999904632568 0 1 0 8 2.4 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={2.2199997901916504} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n23} data-layer={"228:51714/228:51753"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g45_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M3.01981e-14 8 A8.0 8.0 0 1 0 8 2.30926e-14 L8 2.4 A5.599999904632568 5.599999904632568 0 1 1 2.4 8 Z"} fill="none" stroke={`url(#${uid}-g45_arcstroke)`} strokeWidth={2.2199997901916504} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n24} data-layer={"228:51714/228:51754"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n25} data-layer={"228:51714/228:51755"} data-name={"Group 6887"}>
    <span className={s.n26} data-layer={"228:51714/228:51755/228:51756"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.22917 6.22917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.00223 6.22917 L0.667411 6.22917 C0.298944 6.22917 0 5.93022 0 5.56176 L0 0.667411 C0 0.298944 0.298944 0 0.667411 0 L2.00223 0 C2.3707 0 2.66964 0.298944 2.66964 0.667411 L2.66964 5.56176 C2.66964 5.93022 2.3707 6.22917 2.00223 6.22917 Z M6.22917 5.56176 L6.22917 0.667411 C6.22917 0.298944 5.93022 0 5.56176 0 L4.22693 0 C3.85847 0 3.55952 0.298944 3.55952 0.667411 L3.55952 5.56176 C3.55952 5.93022 3.85847 6.22917 4.22693 6.22917 L5.56176 6.22917 C5.93022 6.22917 6.22917 5.93022 6.22917 5.56176 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"228:51714/228:51755/228:51757"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
case "228:51715": return (<Root {...rootAttributes} className={[s.n21,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"228:51715"} data-name={"Progress=10%, Size=20"}>
  <span className={s.n23} data-layer={"228:51715/228:51758"} data-name={"Ellipse 52"}>
    <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8 8.88178e-16 A8.0 8.0 0 1 0 12.6757 1.50864 L11.273 3.45605 A5.599999904632568 5.599999904632568 0 1 1 8 2.4 Z"} fill="none" stroke={"rgba(177,174,188,1)"} strokeWidth={2.2199997901916504} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n22} data-layer={"228:51715/228:51759"} data-name={"Ellipse 51"}>
    <svg width="100%" height="100%" viewBox="0 0 16 16" overflow="visible" aria-hidden="true" focusable="false"><defs><radialGradient id={`${uid}-g52_arcstroke`}><stop offset={0.4615384638309479} stopColor={"rgba(92,84,111,1)"}/><stop offset={0.5096153616905212} stopColor={"rgba(42,39,51,1)"}/></radialGradient></defs><path d={"M8 8.88178e-16 A8.0 8.0 0 0 1 12.7023 1.52787 L11.2916 3.46951 A5.599999904632568 5.599999904632568 0 0 0 8 2.4 Z"} fill="none" stroke={`url(#${uid}-g52_arcstroke)`} strokeWidth={2.2199997901916504} strokeLinecap="round"/></svg>
  </span>
  <span className={s.n24} data-layer={"228:51715/228:51760"} data-name={"Rectangle 3464198"}></span>
  <span className={s.n25} data-layer={"228:51715/228:51761"} data-name={"Group 6887"}>
    <span className={s.n26} data-layer={"228:51715/228:51761/228:51762"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.22917 6.22917" overflow="visible" aria-hidden="true" focusable="false"><path d={"M2.00223 6.22917 L0.667411 6.22917 C0.298944 6.22917 0 5.93022 0 5.56176 L0 0.667411 C0 0.298944 0.298944 0 0.667411 0 L2.00223 0 C2.3707 0 2.66964 0.298944 2.66964 0.667411 L2.66964 5.56176 C2.66964 5.93022 2.3707 6.22917 2.00223 6.22917 Z M6.22917 5.56176 L6.22917 0.667411 C6.22917 0.298944 5.93022 0 5.56176 0 L4.22693 0 C3.85847 0 3.55952 0.298944 3.55952 0.667411 L3.55952 5.56176 C3.55952 5.93022 3.85847 6.22917 4.22693 6.22917 L5.56176 6.22917 C5.93022 6.22917 6.22917 5.93022 6.22917 5.56176 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"228:51715/228:51761/228:51763"} data-name={"Rectangle 3464256"}></span>
  </span>
</Root>);
  default: return null;
  }
}
