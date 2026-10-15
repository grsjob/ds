// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './AgentDesign227_1903.module.css';
export const variants = [
  {
    "id": "227:1904",
    "name": "Animation=Stage 1, Close=off, Shadow=off, view=icon",
    "props": {
      "Animation": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "view": "icon"
    }
  },
  {
    "id": "227:1914",
    "name": "Animation=Stage 2, Close=off, Shadow=off, view=100%",
    "props": {
      "Animation": "Stage 2",
      "Close": "off",
      "Shadow": "off",
      "view": "100%"
    }
  },
  {
    "id": "236:52407",
    "name": "Animation=Stage 1, Close=on, Shadow=on, view=100%",
    "props": {
      "Animation": "Stage 1",
      "Close": "on",
      "Shadow": "on",
      "view": "100%"
    }
  },
  {
    "id": "236:52417",
    "name": "Animation=Stage 1, Close=on, Shadow=off, view=100%",
    "props": {
      "Animation": "Stage 1",
      "Close": "on",
      "Shadow": "off",
      "view": "100%"
    }
  },
  {
    "id": "236:52427",
    "name": "Animation=Stage 1, Close=off, Shadow=on, view=100%",
    "props": {
      "Animation": "Stage 1",
      "Close": "off",
      "Shadow": "on",
      "view": "100%"
    }
  },
  {
    "id": "236:52437",
    "name": "Animation=Stage 1, Close=off, Shadow=off, view=100%",
    "props": {
      "Animation": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "view": "100%"
    }
  },
  {
    "id": "236:52447",
    "name": "Animation=Stage 1, Close=off, Shadow=off, view=50%",
    "props": {
      "Animation": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "view": "50%"
    }
  },
  {
    "id": "236:52459",
    "name": "Animation=Stage 2, Close=off, Shadow=off, view=50%",
    "props": {
      "Animation": "Stage 2",
      "Close": "off",
      "Shadow": "off",
      "view": "50%"
    }
  },
  {
    "id": "236:52471",
    "name": "Animation=Stage 2, Close=on, Shadow=on, view=100%",
    "props": {
      "Animation": "Stage 2",
      "Close": "on",
      "Shadow": "on",
      "view": "100%"
    }
  },
  {
    "id": "236:52481",
    "name": "Animation=Stage 2, Close=on, Shadow=off, view=100%",
    "props": {
      "Animation": "Stage 2",
      "Close": "on",
      "Shadow": "off",
      "view": "100%"
    }
  },
  {
    "id": "236:52491",
    "name": "Animation=Stage 2, Close=off, Shadow=on, view=100%",
    "props": {
      "Animation": "Stage 2",
      "Close": "off",
      "Shadow": "on",
      "view": "100%"
    }
  },
  {
    "id": "236:52501",
    "name": "Animation=Stage 1, Close=off, Shadow=off, view=home",
    "props": {
      "Animation": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "view": "home"
    }
  },
  {
    "id": "236:52509",
    "name": "Animation=Stage 2, Close=off, Shadow=off, view=home",
    "props": {
      "Animation": "Stage 2",
      "Close": "off",
      "Shadow": "off",
      "view": "home"
    }
  }
] as const;
export type AgentDesign227_1903Variant = typeof variants[number]["id"];
export interface AgentDesign227_1903Dimensions {
  "Animation"?: "Stage 1" | "Stage 2";
  "Close"?: "off" | "on";
  "Shadow"?: "off" | "on";
  "view"?: "100%" | "50%" | "home" | "icon";
}
export interface AgentDesign227_1903Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: AgentDesign227_1903Variant;
  variantProps?: AgentDesign227_1903Dimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: AgentDesign227_1903Variant) => void;
}
const transitions = {"227:1904":{"ON_HOVER":"227:1914"},"236:52407":{"ON_HOVER":"4294967295:4294967295"},"236:52417":{"ON_HOVER":"4294967295:4294967295"},"236:52427":{"ON_HOVER":"4294967295:4294967295"},"236:52437":{"ON_HOVER":"227:1914"},"236:52447":{"ON_HOVER":"4294967295:4294967295"},"236:52501":{"ON_HOVER":"4294967295:4294967295"}};
export function AgentDesign227_1903({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: AgentDesign227_1903Props) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:1904": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1904"} data-name={"Animation=Stage 1, Close=off, Shadow=off, view=icon"}>
  <span className={s.n1} data-layer={"227:1904/227:1905"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 27.68325 27.68325" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g2_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M27.68325 11.4938 C27.68325 19.13832 21.48615 27.68325 13.84163 27.68325 C6.19711 27.68325 0 19.13832 0 11.4938 C0 3.84928 6.19711 0 13.84163 0 C21.48615 0 27.68325 3.84928 27.68325 11.4938 Z"} fill={`url(#${uid}-g2_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:1904/227:1906"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 20.63825 9.61606" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.06957 2.64248 C0.15708 1.59881 0.97367 0.78123 2.01294 0.65158 C4.09896 0.39133 7.62485 0.00501 10.2084 0.00005 C12.8649 -0.00505 16.49694 0.38926 18.62447 0.65289 C19.66447 0.78176 20.48127 1.59949 20.56879 2.64378 C20.60835 3.1158 20.63825 3.60999 20.63825 4.02533 C20.63825 4.72699 20.58356 5.60877 20.52425 6.35862 C20.44824 7.31978 19.76599 8.11608 18.82796 8.339 C16.74225 8.83467 12.9744 9.62579 10.2084 9.61597 C7.51442 9.6064 3.85224 8.83024 1.80645 8.34058 C0.86993 8.11642 0.19014 7.32095 0.11418 6.36098 C0.05481 5.61063 0 4.72773 0 4.02533 C0 3.60961 0.02996 3.1149 0.06957 2.64248 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:1904/227:1907"} data-name={"Frame 3587"}>
    <span className={s.n4} data-layer={"227:1904/227:1907/227:1908"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 2.39716 10.06739" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g5_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M2.39716 3.8454 C2.39716 7.28171 1.86053 10.06739 1.19858 10.06739 C0.53662 10.06739 0 7.28171 0 3.8454 C0 0.40908 0.53662 0 1.19858 0 C1.86053 0 2.39716 0.40908 2.39716 3.8454 Z"} fill={`url(#${uid}-g5_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"227:1904/227:1907/227:1909"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 2.39716 10.06739" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g6_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M2.39716 3.8454 C2.39716 7.28171 1.86053 10.06739 1.19858 10.06739 C0.53662 10.06739 0 7.28171 0 3.8454 C0 0.40908 0.53662 0 1.19858 0 C1.86053 0 2.39716 0.40908 2.39716 3.8454 Z"} fill={`url(#${uid}-g6_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n6} data-layer={"227:1904/227:1910"} data-name={"Group 3588"}>
    <span className={s.n7} data-layer={"227:1904/227:1910/227:1911"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 3.92221 3.60144" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.92221 1.59413 C3.92221 2.67722 2.55154 3.85034 1.43937 3.55523 C1.01203 3.44184 0 2.67722 0 1.59413 C0 0.25601 0.87802 0 1.96111 0 C3.0442 0 3.92221 0.51104 3.92221 1.59413 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:1904/227:1910/227:1912"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 3.92348 3.60144" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.92348 1.59413 C3.92348 2.67722 2.55237 3.85034 1.43983 3.55523 C1.01236 3.44184 0 2.67722 0 1.59413 C0 0.25601 0.8783 0 1.96174 0 C3.04518 0 3.92348 0.51104 3.92348 1.59413 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:1914": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:1914"} data-name={"Animation=Stage 2, Close=off, Shadow=off, view=100%"}>
  <span className={s.n10} data-layer={"227:1914/227:1915"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g11_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g11_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n11} data-layer={"227:1914/227:1916"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.0701 4.65596 C0.23928 2.0448 2.59648 0.18866 5.20516 0.39245 C9.778 0.74968 16.77926 1.22027 21.82512 1.21058 C26.86739 1.2009 33.38163 0.75542 37.71359 0.40769 C40.32973 0.19769 42.69705 2.05641 42.8656 4.67554 C42.90749 5.32643 42.93444 5.96618 42.93444 6.53487 C42.93444 7.99455 42.82066 9.82895 42.69729 11.38888 C42.53916 13.38841 41.11985 15.04499 39.16843 15.50874 C34.82946 16.53989 26.99108 18.1857 21.23687 18.16526 C15.63249 18.14536 8.01394 16.53068 3.75801 15.51202 C1.80974 15.0457 0.39556 13.39086 0.23754 11.3938 C0.11402 9.83281 0 7.99608 0 6.53487 C0 5.96048 0.02749 5.3136 0.0701 4.65596 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"227:1914/227:1917"} data-name={"hands"}>
    <span className={s.n13} data-layer={"227:1914/227:1917/227:1918"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g14_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g14_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n14} data-layer={"227:1914/227:1917/227:1919"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g15_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g15_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n15} data-layer={"227:1914/227:1920"} data-name={"eyes"}>
    <span className={s.n16} data-layer={"227:1914/227:1920/227:1921"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n17} data-layer={"227:1914/227:1920/227:1922"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52407": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52407"} data-name={"Animation=Stage 1, Close=on, Shadow=on, view=100%"}>
  <span className={s.n10} data-layer={"236:52407/236:52408"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g20_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g20_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n19} data-layer={"236:52407/236:52409"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52407/236:52410"} data-name={"hands"}>
    <span className={s.n20} data-layer={"236:52407/236:52410/236:52411"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g23_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g23_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n21} data-layer={"236:52407/236:52410/236:52412"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g24_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g24_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n22} data-layer={"236:52407/236:52413"} data-name={"eyes"}>
    <span className={s.n23} data-layer={"236:52407/236:52413/236:52414"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n24} data-layer={"236:52407/236:52413/236:52415"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n25} data-layer={"236:52407/236:52416"} data-name={"icon/set/base"}>
    <span className={s.n26} data-layer={"236:52407/236:52416/236:51887"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.73316 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M6.73316 0.66667 C7.10135 0.66667 7.39982 0.36819 7.39982 0 C7.39982 -0.36819 7.10135 -0.66667 6.73316 -0.66667 L6.73316 0 L6.73316 0.66667 Z M0 0 L0 0.66667 L6.73316 0.66667 L6.73316 0 L6.73316 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"236:52407/236:52416/236:51888"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 6.73316" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 6.73316 C-0.66667 7.10135 -0.36819 7.39982 0 7.39982 C0.36819 7.39982 0.66667 7.10135 0.66667 6.73316 L0 6.73316 L-0.66667 6.73316 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 6.73316 L0.66667 6.73316 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 6.73316 L0 6.73316 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52417": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52417"} data-name={"Animation=Stage 1, Close=on, Shadow=off, view=100%"}>
  <span className={s.n10} data-layer={"236:52417/236:52418"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g32_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g32_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n19} data-layer={"236:52417/236:52419"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52417/236:52420"} data-name={"hands"}>
    <span className={s.n20} data-layer={"236:52417/236:52420/236:52421"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g35_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g35_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n21} data-layer={"236:52417/236:52420/236:52422"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g36_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g36_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n28} data-layer={"236:52417/236:52423"} data-name={"eyes"}>
    <span className={s.n29} data-layer={"236:52417/236:52423/236:52424"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n30} data-layer={"236:52417/236:52423/236:52425"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n31} data-layer={"236:52417/236:52426"} data-name={"icon/set/base"}>
    <span className={s.n26} data-layer={"236:52417/236:52426/236:51887"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.73316 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M6.73316 0.66667 C7.10135 0.66667 7.39982 0.36819 7.39982 0 C7.39982 -0.36819 7.10135 -0.66667 6.73316 -0.66667 L6.73316 0 L6.73316 0.66667 Z M0 0 L0 0.66667 L6.73316 0.66667 L6.73316 0 L6.73316 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"236:52417/236:52426/236:51888"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 6.73316" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 6.73316 C-0.66667 7.10135 -0.36819 7.39982 0 7.39982 C0.36819 7.39982 0.66667 7.10135 0.66667 6.73316 L0 6.73316 L-0.66667 6.73316 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 6.73316 L0.66667 6.73316 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 6.73316 L0 6.73316 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52427": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52427"} data-name={"Animation=Stage 1, Close=off, Shadow=on, view=100%"}>
  <span className={s.n10} data-layer={"236:52427/236:52428"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g44_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g44_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n19} data-layer={"236:52427/236:52429"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52427/236:52430"} data-name={"hands"}>
    <span className={s.n20} data-layer={"236:52427/236:52430/236:52431"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g47_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g47_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n21} data-layer={"236:52427/236:52430/236:52432"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g48_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g48_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n28} data-layer={"236:52427/236:52433"} data-name={"eyes"}>
    <span className={s.n29} data-layer={"236:52427/236:52433/236:52434"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n30} data-layer={"236:52427/236:52433/236:52435"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52437": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52437"} data-name={"Animation=Stage 1, Close=off, Shadow=off, view=100%"}>
  <span className={s.n10} data-layer={"236:52437/236:52438"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g53_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g53_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n19} data-layer={"236:52437/236:52439"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52437/236:52440"} data-name={"hands"}>
    <span className={s.n20} data-layer={"236:52437/236:52440/236:52441"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g56_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g56_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n21} data-layer={"236:52437/236:52440/236:52442"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g57_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g57_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n28} data-layer={"236:52437/236:52443"} data-name={"eyes"}>
    <span className={s.n29} data-layer={"236:52437/236:52443/236:52444"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n30} data-layer={"236:52437/236:52443/236:52445"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52447": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52447"} data-name={"Animation=Stage 1, Close=off, Shadow=off, view=50%"}>
  <span className={s.n33} data-layer={"236:52447/236:52448"} data-name={"Frame 3731"}>
    <span className={s.n34} data-layer={"236:52447/236:52448/236:52449"} data-name={"agent"}>
      <span className={s.n35} data-layer={"236:52447/236:52448/236:52449/236:52450"} data-name={"Ellipse 3183"}>
        <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g64_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g64_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n36} data-layer={"236:52447/236:52448/236:52449/236:52451"} data-name={"Rectangle 3615"}>
        <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n37} data-layer={"236:52447/236:52448/236:52449/236:52452"} data-name={"Frame 3587"}>
        <span className={s.n38} data-layer={"236:52447/236:52448/236:52449/236:52452/236:52453"} data-name={"Ellipse 3185"}>
          <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g67_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851028 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851028 4.98688 7.9997 Z"} fill={`url(#${uid}-g67_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n39} data-layer={"236:52447/236:52448/236:52449/236:52452/236:52454"} data-name={"Ellipse 3184"}>
          <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g68_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851028 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851028 4.98688 7.9997 Z"} fill={`url(#${uid}-g68_netfill0)`} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n40} data-layer={"236:52447/236:52448/236:52449/236:52455"} data-name={"Group 3588"}>
        <span className={s.n41} data-layer={"236:52447/236:52448/236:52449/236:52455/236:52456"} data-name={"Ellipse 3186"}>
          <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n42} data-layer={"236:52447/236:52448/236:52449/236:52455/236:52457"} data-name={"Ellipse 3187"}>
          <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:52459": return (<Root {...rootAttributes} className={[s.n32,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52459"} data-name={"Animation=Stage 2, Close=off, Shadow=off, view=50%"}>
  <span className={s.n43} data-layer={"236:52459/236:52460"} data-name={"Frame 3731"}>
    <span className={s.n34} data-layer={"236:52459/236:52460/236:52461"} data-name={"agent"}>
      <span className={s.n35} data-layer={"236:52459/236:52460/236:52461/236:52462"} data-name={"Ellipse 3183"}>
        <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g75_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g75_netfill0)`} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n36} data-layer={"236:52459/236:52460/236:52461/236:52463"} data-name={"Rectangle 3615"}>
        <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 1.83916 C0.542696 1.83916 13.1235 0.015684 21.2369 0.000101968 C29.5295 -0.0158242 42.3917 1.83916 42.3917 1.83916 C42.3917 1.83916 42.9344 5.82201 42.9344 8.37403 C42.9344 11.5619 42.3917 16.537 42.3917 16.537 C42.3917 16.537 29.6085 20.0342 21.2369 20.0044 C13.0427 19.9753 0.542696 16.537 0.542696 16.537 C0.542696 16.537 0 11.5619 0 8.37403 C0 5.82201 0.542696 1.83916 0.542696 1.83916 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n37} data-layer={"236:52459/236:52460/236:52461/236:52464"} data-name={"Frame 3587"}>
        <span className={s.n38} data-layer={"236:52459/236:52460/236:52461/236:52464/236:52465"} data-name={"Ellipse 3185"}>
          <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g78_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851028 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851028 4.98688 7.9997 Z"} fill={`url(#${uid}-g78_netfill0)`} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n39} data-layer={"236:52459/236:52460/236:52461/236:52464/236:52466"} data-name={"Ellipse 3184"}>
          <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g79_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851028 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851028 4.98688 7.9997 Z"} fill={`url(#${uid}-g79_netfill0)`} fillRule="nonzero"/></svg>
        </span>
      </span>
      <span className={s.n40} data-layer={"236:52459/236:52460/236:52461/236:52467"} data-name={"Group 3588"}>
        <span className={s.n41} data-layer={"236:52459/236:52460/236:52461/236:52467/236:52468"} data-name={"Ellipse 3186"}>
          <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
        </span>
        <span className={s.n42} data-layer={"236:52459/236:52460/236:52461/236:52467/236:52469"} data-name={"Ellipse 3187"}>
          <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
        </span>
      </span>
    </span>
  </span>
</Root>);
case "236:52471": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52471"} data-name={"Animation=Stage 2, Close=on, Shadow=on, view=100%"}>
  <span className={s.n10} data-layer={"236:52471/236:52472"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g84_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g84_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n11} data-layer={"236:52471/236:52473"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 0 C0.542696 0 13.7117 1.22617 21.8251 1.21058 C30.1178 1.19466 42.3917 0 42.3917 0 C42.3917 0 42.9344 3.98285 42.9344 6.53487 C42.9344 9.72271 42.3917 14.6978 42.3917 14.6978 C42.3917 14.6978 29.6085 18.195 21.2369 18.1653 C13.0427 18.1362 0.542696 14.6978 0.542696 14.6978 C0.542696 14.6978 0 9.72271 0 6.53487 C0 3.98285 0.542696 0 0.542696 0 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52471/236:52474"} data-name={"hands"}>
    <span className={s.n13} data-layer={"236:52471/236:52474/236:52475"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g87_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g87_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n14} data-layer={"236:52471/236:52474/236:52476"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g88_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g88_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n44} data-layer={"236:52471/236:52477"} data-name={"eyes"}>
    <span className={s.n45} data-layer={"236:52471/236:52477/236:52478"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n46} data-layer={"236:52471/236:52477/236:52479"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n47} data-layer={"236:52471/236:52480"} data-name={"icon/set/base"}>
    <span className={s.n26} data-layer={"236:52471/236:52480/236:51887"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.73316 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M6.73316 0.66667 C7.10135 0.66667 7.39982 0.36819 7.39982 0 C7.39982 -0.36819 7.10135 -0.66667 6.73316 -0.66667 L6.73316 0 L6.73316 0.66667 Z M0 0 L0 0.66667 L6.73316 0.66667 L6.73316 0 L6.73316 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"236:52471/236:52480/236:51888"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 6.73316" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 6.73316 C-0.66667 7.10135 -0.36819 7.39982 0 7.39982 C0.36819 7.39982 0.66667 7.10135 0.66667 6.73316 L0 6.73316 L-0.66667 6.73316 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 6.73316 L0.66667 6.73316 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 6.73316 L0 6.73316 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52481": return (<Root {...rootAttributes} className={[s.n9,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52481"} data-name={"Animation=Stage 2, Close=on, Shadow=off, view=100%"}>
  <span className={s.n10} data-layer={"236:52481/236:52482"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g96_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g96_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n11} data-layer={"236:52481/236:52483"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 0 C0.542696 0 13.7117 1.22617 21.8251 1.21058 C30.1178 1.19466 42.3917 0 42.3917 0 C42.3917 0 42.9344 3.98285 42.9344 6.53487 C42.9344 9.72271 42.3917 14.6978 42.3917 14.6978 C42.3917 14.6978 29.6085 18.195 21.2369 18.1653 C13.0427 18.1362 0.542696 14.6978 0.542696 14.6978 C0.542696 14.6978 0 9.72271 0 6.53487 C0 3.98285 0.542696 0 0.542696 0 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52481/236:52484"} data-name={"hands"}>
    <span className={s.n13} data-layer={"236:52481/236:52484/236:52485"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g99_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g99_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n14} data-layer={"236:52481/236:52484/236:52486"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g100_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g100_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n48} data-layer={"236:52481/236:52487"} data-name={"eyes"}>
    <span className={s.n49} data-layer={"236:52481/236:52487/236:52488"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n50} data-layer={"236:52481/236:52487/236:52489"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n51} data-layer={"236:52481/236:52490"} data-name={"icon/set/base"}>
    <span className={s.n26} data-layer={"236:52481/236:52490/236:51887"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 6.73316 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 C-0.66667 0.36819 -0.36819 0.66667 0 0.66667 L0 0 L0 -0.66667 Z M6.73316 0.66667 C7.10135 0.66667 7.39982 0.36819 7.39982 0 C7.39982 -0.36819 7.10135 -0.66667 6.73316 -0.66667 L6.73316 0 L6.73316 0.66667 Z M0 0 L0 0.66667 L6.73316 0.66667 L6.73316 0 L6.73316 -0.66667 L0 -0.66667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n27} data-layer={"236:52481/236:52490/236:51888"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 6.73316" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-0.66667 6.73316 C-0.66667 7.10135 -0.36819 7.39982 0 7.39982 C0.36819 7.39982 0.66667 7.10135 0.66667 6.73316 L0 6.73316 L-0.66667 6.73316 Z M0.66667 0 C0.66667 -0.36819 0.36819 -0.66667 0 -0.66667 C-0.36819 -0.66667 -0.66667 -0.36819 -0.66667 0 L0 0 L0.66667 0 Z M0 6.73316 L0.66667 6.73316 L0.66667 0 L0 0 L-0.66667 0 L-0.66667 6.73316 L0 6.73316 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52491": return (<Root {...rootAttributes} className={[s.n18,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52491"} data-name={"Animation=Stage 2, Close=off, Shadow=on, view=100%"}>
  <span className={s.n10} data-layer={"236:52491/236:52492"} data-name={"body"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g108_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.9109 C57.5904 39.8141 44.6983 57.5904 28.7952 57.5904 C12.892 57.5904 0 39.8141 0 23.9109 C0 8.00779 12.892 0 28.7952 0 C44.6983 0 57.5904 8.00779 57.5904 23.9109 Z"} fill={`url(#${uid}-g108_netfill0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n11} data-layer={"236:52491/236:52493"} data-name={"window"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.542696 0 C0.542696 0 13.7117 1.22617 21.8251 1.21058 C30.1178 1.19466 42.3917 0 42.3917 0 C42.3917 0 42.9344 3.98285 42.9344 6.53487 C42.9344 9.72271 42.3917 14.6978 42.3917 14.6978 C42.3917 14.6978 29.6085 18.195 21.2369 18.1653 C13.0427 18.1362 0.542696 14.6978 0.542696 14.6978 C0.542696 14.6978 0 9.72271 0 6.53487 C0 3.98285 0.542696 0 0.542696 0 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n12} data-layer={"236:52491/236:52494"} data-name={"hands"}>
    <span className={s.n13} data-layer={"236:52491/236:52494/236:52495"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g111_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g111_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n14} data-layer={"236:52491/236:52494/236:52496"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g112_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.1484 3.87053 20.9435 2.49344 20.9435 C1.11635 20.9435 0 15.1484 0 7.9997 C0 0.851029 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.851029 4.98688 7.9997 Z"} fill={`url(#${uid}-g112_netfill0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n52} data-layer={"236:52491/236:52497"} data-name={"eyes"}>
    <span className={s.n45} data-layer={"236:52491/236:52497/236:52498"} data-name={"right eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n53} data-layer={"236:52491/236:52497/236:52499"} data-name={" left eye"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.532591 1.82716 0 4.08107 0 C6.33498 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "236:52501": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52501"} data-name={"Animation=Stage 1, Close=off, Shadow=off, view=home"}>
  <span className={s.n55} data-layer={"236:52501/236:52502"} data-name={"agent home"}>
    <span className={s.n56} data-layer={"236:52501/236:52502/236:52503"} data-name={"body"}>
      <svg width="100%" height="100%" viewBox="0 0 26.98633 30" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g118_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.7483 0.71935 0 -0.22106 0.87415)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M26.9863 12.2116 L26.9863 25.839 C26.9863 28.1371 25.1955 30 22.9863 30 L4 30 C1.79086 30 0 28.1371 0 25.839 L0 12.2116 C0 10.961 0.540728 9.7767 1.47254 8.98648 L10.9657 0.935899 C12.4372 -0.311966 14.5492 -0.311966 16.0206 0.935899 L25.5138 8.98648 C26.4456 9.7767 26.9863 10.961 26.9863 12.2116 Z"} fill={`url(#${uid}-g118_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n57} data-layer={"236:52501/236:52502/236:52504"} data-name={"window"}>
      <svg width="100%" height="100%" viewBox="0 0 20 9.69375" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.252802 0.891213 C0.252802 0.891213 6.11325 0.00760007 9.8927 4.94114e-05 C13.7556 -0.00766804 19.7472 0.891213 19.7472 0.891213 C19.7472 0.891213 20 2.8212 20 4.05785 C20 5.6026 19.7472 8.01343 19.7472 8.01343 C19.7472 8.01343 13.7924 9.70807 9.8927 9.69366 C6.07563 9.67956 0.252802 8.01343 0.252802 8.01343 C0.252802 8.01343 0 5.6026 0 4.05785 C0 2.8212 0.252802 0.891213 0.252802 0.891213 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n58} data-layer={"236:52501/236:52502/236:52505"} data-name={"eyes"}>
      <span className={s.n59} data-layer={"236:52501/236:52502/236:52505/236:52506"} data-name={"right eye"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80092 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80092 1.60701 C3.80092 2.69885 2.47264 3.88145 1.39486 3.58396 C0.980733 3.46965 0 2.69885 0 1.60701 C0 0.258081 0.850865 0 1.90046 0 C2.95005 0 3.80092 0.515166 3.80092 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n60} data-layer={"236:52501/236:52502/236:52505/236:52507"} data-name={" left eye"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80214 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80214 1.60701 C3.80214 2.69885 2.47343 3.88145 1.3953 3.58396 C0.981049 3.46965 0 2.69885 0 1.60701 C0 0.258081 0.851139 0 1.90107 0 C2.951 0 3.80214 0.515166 3.80214 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n61} data-layer={"236:52501/236:52508"} data-name={"frame"}></span>
</Root>);
case "236:52509": return (<Root {...rootAttributes} className={[s.n54,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"236:52509"} data-name={"Animation=Stage 2, Close=off, Shadow=off, view=home"}>
  <span className={s.n55} data-layer={"236:52509/236:52510"} data-name={"agent home"}>
    <span className={s.n56} data-layer={"236:52509/236:52510/236:52511"} data-name={"body"}>
      <svg width="100%" height="100%" viewBox="0 0 26.98633 30" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g126_netfill0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.7483 0.71935 0 -0.22106 0.87415)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M26.9863 12.2116 L26.9863 25.839 C26.9863 28.1371 25.1955 30 22.9863 30 L4 30 C1.79086 30 0 28.1371 0 25.839 L0 12.2116 C0 10.961 0.540728 9.7767 1.47254 8.98648 L10.9657 0.935899 C12.4372 -0.311966 14.5492 -0.311966 16.0206 0.935899 L25.5138 8.98648 C26.4456 9.7767 26.9863 10.961 26.9863 12.2116 Z"} fill={`url(#${uid}-g126_netfill0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n62} data-layer={"236:52509/236:52510/236:52512"} data-name={"window"}>
      <svg width="100%" height="100%" viewBox="0 0 20 12.64334" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.252802 4.89117 C0.252802 4.89117 6.11325 0.00755977 9.89269 9.1087e-06 C13.7556 -0.00770834 19.7472 4.89117 19.7472 4.89117 C19.7472 4.89117 20 6.82116 20 8.05781 C20 9.60256 19.7472 12.0134 19.7472 12.0134 C19.7472 12.0134 13.7924 12.6575 9.89269 12.6431 C6.07563 12.629 0.252802 12.0134 0.252802 12.0134 C0.252802 12.0134 0 9.60256 0 8.05781 C0 6.82116 0.252802 4.89117 0.252802 4.89117 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n63} data-layer={"236:52509/236:52510/236:52513"} data-name={"eyes"}>
      <span className={s.n64} data-layer={"236:52509/236:52510/236:52513/236:52514"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80092 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80092 1.60701 C3.80092 2.69885 2.47264 3.88145 1.39486 3.58396 C0.980733 3.46965 0 2.69885 0 1.60701 C0 0.258081 0.850865 0 1.90046 0 C2.95005 0 3.80092 0.515166 3.80092 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n65} data-layer={"236:52509/236:52510/236:52513/236:52515"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80214 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80214 1.60701 C3.80214 2.69885 2.47343 3.88145 1.3953 3.58396 C0.981049 3.46965 0 2.69885 0 1.60701 C0 0.258081 0.851139 0 1.90107 0 C2.951 0 3.80214 0.515166 3.80214 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n61} data-layer={"236:52509/236:52516"} data-name={"frame"}></span>
</Root>);
  default: return null;
  }
}
