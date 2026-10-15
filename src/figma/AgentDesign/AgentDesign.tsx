// Generated from ецс.fig. Editable TSX; regenerate with npm run extract:tsx.
import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { textSlot, useDesignVariant, designAttributes } from '../runtime';
import s from './AgentDesign.module.css';
export const variants = [
  {
    "id": "227:2334",
    "name": "Action=Stage 1, Close=on, Shadow=on, size=on",
    "props": {
      "Action": "Stage 1",
      "Close": "on",
      "Shadow": "on",
      "size": "on"
    }
  },
  {
    "id": "227:2344",
    "name": "Action=Stage 1, Close=on, Shadow=off, size=on",
    "props": {
      "Action": "Stage 1",
      "Close": "on",
      "Shadow": "off",
      "size": "on"
    }
  },
  {
    "id": "227:2354",
    "name": "Action=Stage 1, Close=off, Shadow=on, size=on",
    "props": {
      "Action": "Stage 1",
      "Close": "off",
      "Shadow": "on",
      "size": "on"
    }
  },
  {
    "id": "227:2364",
    "name": "Action=Stage 1, Close=off, Shadow=off, size=on",
    "props": {
      "Action": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "size": "on"
    }
  },
  {
    "id": "227:2374",
    "name": "Action=Stage 2, Close=on, Shadow=on, size=on",
    "props": {
      "Action": "Stage 2",
      "Close": "on",
      "Shadow": "on",
      "size": "on"
    }
  },
  {
    "id": "227:2384",
    "name": "Action=Stage 2, Close=on, Shadow=off, size=on",
    "props": {
      "Action": "Stage 2",
      "Close": "on",
      "Shadow": "off",
      "size": "on"
    }
  },
  {
    "id": "227:2394",
    "name": "Action=Stage 2, Close=off, Shadow=on, size=on",
    "props": {
      "Action": "Stage 2",
      "Close": "off",
      "Shadow": "on",
      "size": "on"
    }
  },
  {
    "id": "227:2404",
    "name": "Action=Stage 2, Close=off, Shadow=off, size=on",
    "props": {
      "Action": "Stage 2",
      "Close": "off",
      "Shadow": "off",
      "size": "on"
    }
  },
  {
    "id": "227:2414",
    "name": "Action=Stage 1, Close=off, Shadow=off, size=off",
    "props": {
      "Action": "Stage 1",
      "Close": "off",
      "Shadow": "off",
      "size": "off"
    }
  }
] as const;
export type AgentDesignVariant = typeof variants[number]["id"];
export interface AgentDesignDimensions {
  "Action"?: "Stage 1" | "Stage 2";
  "Close"?: "off" | "on";
  "Shadow"?: "off" | "on";
  "size"?: "off" | "on";
}
export interface AgentDesignProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  as?: "span" | "button" | "div";
  disabled?: boolean;
  variant?: AgentDesignVariant;
  variantProps?: AgentDesignDimensions;
  text?: Record<string,ReactNode>;
  interactive?: boolean;
  onVariantChange?: (variant: AgentDesignVariant) => void;
}
const transitions = {"227:2334":{"ON_HOVER":"227:2374"},"227:2344":{"ON_HOVER":"227:2384"},"227:2354":{"ON_HOVER":"227:2394"},"227:2364":{"ON_HOVER":"227:2404"}};
export function AgentDesign({variant,variantProps,text,interactive=true,onVariantChange,className,as:Root="span",disabled,...attributes}: AgentDesignProps) {
  const uid=useId();
  const {current,handlers,disabled:variantDisabled}=useDesignVariant(variants,transitions,{variant,variantProps,interactive:interactive&&!disabled,onVariantChange});
  const rootAttributes=designAttributes(attributes,handlers,{className:[s.root,className].filter(Boolean).join(" "),disabled:disabled||variantDisabled,"data-figma-variant":current,...(Root==="button"?{type:"button" as const}:{})});
  switch(current) {
case "227:2334": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2334"} data-name={"Action=Stage 1, Close=on, Shadow=on, size=on"}>
  <span className={s.n1} data-layer={"227:2334/227:2335"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g2_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g2_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:2334/227:2336"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.14473 5.49724 C0.32679 3.32606 2.02555 1.62523 4.18759 1.3555 C8.52721 0.8141 15.86223 0.01042 21.23687 0.0001 C26.76328 -0.01051 34.31914 0.80979 38.74511 1.35823 C40.90865 1.62632 42.60786 3.32747 42.78993 5.49994 C42.87223 6.48191 42.93444 7.50998 42.93444 8.37403 C42.93444 9.83371 42.82066 11.66812 42.69729 13.22804 C42.53916 15.22757 41.11985 16.88415 39.16843 17.3479 C34.82947 18.37905 26.99108 20.02486 21.23687 20.00443 C15.63249 19.98452 8.01394 18.36984 3.75801 17.35118 C1.80974 16.88486 0.39556 15.23002 0.23754 13.23296 C0.11402 11.67198 0 9.83525 0 8.37403 C0 7.50919 0.06232 6.48003 0.14473 5.49724 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2334/227:2337"} data-name={"Frame 3587"}>
    <span className={s.n4} data-layer={"227:2334/227:2337/227:2338"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g5_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g5_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"227:2334/227:2337/227:2339"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g6_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g6_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n6} data-layer={"227:2334/227:2340"} data-name={"Group 3588"}>
    <span className={s.n7} data-layer={"227:2334/227:2340/227:2341"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n8} data-layer={"227:2334/227:2340/227:2342"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n9} data-layer={"227:2334/227:2343"} data-name={"Icon/control/16/var"}>
    <span className={s.n10} data-layer={"227:2334/227:2343/227:2267"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 C-1.06667 0.5891 -0.5891 1.06667 0 1.06667 L0 -1.06667 Z M8 1.06667 C8.5891 1.06667 9.06667 0.5891 9.06667 0 C9.06667 -0.5891 8.5891 -1.06667 8 -1.06667 L8 1.06667 Z M0 0 L0 1.06667 L8 1.06667 L8 0 L8 -1.06667 L0 -1.06667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"227:2334/227:2343/227:2268"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.06667 8 C-1.06667 8.5891 -0.5891 9.06667 0 9.06667 C0.5891 9.06667 1.06667 8.5891 1.06667 8 L-1.06667 8 Z M1.06667 0 C1.06667 -0.5891 0.5891 -1.06667 0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 L1.06667 0 Z M0 8 L1.06667 8 L1.06667 0 L0 0 L-1.06667 0 L-1.06667 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2344": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2344"} data-name={"Action=Stage 1, Close=on, Shadow=off, size=on"}>
  <span className={s.n1} data-layer={"227:2344/227:2345"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g14_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g14_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:2344/227:2346"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.14473 5.49724 C0.32679 3.32606 2.02555 1.62523 4.18759 1.3555 C8.52721 0.8141 15.86223 0.01042 21.23687 0.0001 C26.76328 -0.01051 34.31914 0.80979 38.74511 1.35823 C40.90865 1.62632 42.60786 3.32747 42.78993 5.49994 C42.87223 6.48191 42.93444 7.50998 42.93444 8.37403 C42.93444 9.83371 42.82066 11.66812 42.69729 13.22804 C42.53916 15.22757 41.11985 16.88415 39.16843 17.3479 C34.82947 18.37905 26.99108 20.02486 21.23687 20.00443 C15.63249 19.98452 8.01394 18.36984 3.75801 17.35118 C1.80974 16.88486 0.39556 15.23002 0.23754 13.23296 C0.11402 11.67198 0 9.83525 0 8.37403 C0 7.50919 0.06232 6.48003 0.14473 5.49724 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2344/227:2347"} data-name={"Frame 3587"}>
    <span className={s.n4} data-layer={"227:2344/227:2347/227:2348"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g17_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g17_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"227:2344/227:2347/227:2349"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g18_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g18_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n13} data-layer={"227:2344/227:2350"} data-name={"Group 3588"}>
    <span className={s.n14} data-layer={"227:2344/227:2350/227:2351"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n15} data-layer={"227:2344/227:2350/227:2352"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n9} data-layer={"227:2344/227:2353"} data-name={"Icon/control/16/var"}>
    <span className={s.n10} data-layer={"227:2344/227:2353/227:2267"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 C-1.06667 0.5891 -0.5891 1.06667 0 1.06667 L0 0 L0 -1.06667 Z M8 1.06667 C8.5891 1.06667 9.06667 0.5891 9.06667 0 C9.06667 -0.5891 8.5891 -1.06667 8 -1.06667 L8 0 L8 1.06667 Z M0 0 L0 1.06667 L8 1.06667 L8 0 L8 -1.06667 L0 -1.06667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"227:2344/227:2353/227:2268"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.06667 8 C-1.06667 8.5891 -0.5891 9.06667 0 9.06667 C0.5891 9.06667 1.06667 8.5891 1.06667 8 L0 8 L-1.06667 8 Z M1.06667 0 C1.06667 -0.5891 0.5891 -1.06667 0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 L0 0 L1.06667 0 Z M0 8 L1.06667 8 L1.06667 0 L0 0 L-1.06667 0 L-1.06667 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2354": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2354"} data-name={"Action=Stage 1, Close=off, Shadow=on, size=on"}>
  <span className={s.n1} data-layer={"227:2354/227:2355"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g26_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g26_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:2354/227:2356"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.14473 5.49724 C0.32679 3.32606 2.02555 1.62523 4.18759 1.3555 C8.52721 0.8141 15.86223 0.01042 21.23687 0.0001 C26.76328 -0.01051 34.31914 0.80979 38.74511 1.35823 C40.90865 1.62632 42.60786 3.32747 42.78993 5.49994 C42.87223 6.48191 42.93444 7.50998 42.93444 8.37403 C42.93444 9.83371 42.82066 11.66812 42.69729 13.22804 C42.53916 15.22757 41.11985 16.88415 39.16843 17.3479 C34.82947 18.37905 26.99108 20.02486 21.23687 20.00443 C15.63249 19.98452 8.01394 18.36984 3.75801 17.35118 C1.80974 16.88486 0.39556 15.23002 0.23754 13.23296 C0.11402 11.67198 0 9.83525 0 8.37403 C0 7.50919 0.06232 6.48003 0.14473 5.49724 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2354/227:2357"} data-name={"Frame 3587"}>
    <span className={s.n4} data-layer={"227:2354/227:2357/227:2358"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g29_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g29_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"227:2354/227:2357/227:2359"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g30_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g30_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n13} data-layer={"227:2354/227:2360"} data-name={"Group 3588"}>
    <span className={s.n14} data-layer={"227:2354/227:2360/227:2361"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n15} data-layer={"227:2354/227:2360/227:2362"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2364": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2364"} data-name={"Action=Stage 1, Close=off, Shadow=off, size=on"}>
  <span className={s.n1} data-layer={"227:2364/227:2365"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g35_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g35_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n2} data-layer={"227:2364/227:2366"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 20.00461" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.14473 5.49724 C0.32679 3.32606 2.02555 1.62523 4.18759 1.3555 C8.52721 0.8141 15.86223 0.01042 21.23687 0.0001 C26.76328 -0.01051 34.31914 0.80979 38.74511 1.35823 C40.90865 1.62632 42.60786 3.32747 42.78993 5.49994 C42.87223 6.48191 42.93444 7.50998 42.93444 8.37403 C42.93444 9.83371 42.82066 11.66812 42.69729 13.22804 C42.53916 15.22757 41.11985 16.88415 39.16843 17.3479 C34.82947 18.37905 26.99108 20.02486 21.23687 20.00443 C15.63249 19.98452 8.01394 18.36984 3.75801 17.35118 C1.80974 16.88486 0.39556 15.23002 0.23754 13.23296 C0.11402 11.67198 0 9.83525 0 8.37403 C0 7.50919 0.06232 6.48003 0.14473 5.49724 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2364/227:2367"} data-name={"Frame 3587"}>
    <span className={s.n4} data-layer={"227:2364/227:2367/227:2368"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g38_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g38_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n5} data-layer={"227:2364/227:2367/227:2369"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g39_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g39_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n13} data-layer={"227:2364/227:2370"} data-name={"Group 3588"}>
    <span className={s.n14} data-layer={"227:2364/227:2370/227:2371"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n15} data-layer={"227:2364/227:2370/227:2372"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2374": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2374"} data-name={"Action=Stage 2, Close=on, Shadow=on, size=on"}>
  <span className={s.n1} data-layer={"227:2374/227:2375"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g44_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g44_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n16} data-layer={"227:2374/227:2376"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.0701 4.65596 C0.23928 2.0448 2.59648 0.18866 5.20516 0.39245 C9.778 0.74968 16.77926 1.22027 21.82512 1.21058 C26.86739 1.2009 33.38163 0.75542 37.71359 0.40769 C40.32973 0.19769 42.69705 2.05641 42.8656 4.67554 C42.90749 5.32643 42.93444 5.96618 42.93444 6.53487 C42.93444 7.99455 42.82066 9.82895 42.69729 11.38888 C42.53916 13.38841 41.11985 15.04499 39.16843 15.50874 C34.82946 16.53989 26.99108 18.1857 21.23687 18.16526 C15.63249 18.14536 8.01394 16.53068 3.75801 15.51202 C1.80974 15.0457 0.39556 13.39086 0.23754 11.3938 C0.11402 9.83281 0 7.99608 0 6.53487 C0 5.96048 0.02749 5.3136 0.0701 4.65596 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2374/227:2377"} data-name={"Frame 3587"}>
    <span className={s.n17} data-layer={"227:2374/227:2377/227:2378"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g47_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g47_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n18} data-layer={"227:2374/227:2377/227:2379"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g48_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g48_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n19} data-layer={"227:2374/227:2380"} data-name={"Group 3588"}>
    <span className={s.n20} data-layer={"227:2374/227:2380/227:2381"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n21} data-layer={"227:2374/227:2380/227:2382"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n22} data-layer={"227:2374/227:2383"} data-name={"Icon/control/16/var"}>
    <span className={s.n10} data-layer={"227:2374/227:2383/227:2267"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 C-1.06667 0.5891 -0.5891 1.06667 0 1.06667 L0 0 L0 -1.06667 Z M8 1.06667 C8.5891 1.06667 9.06667 0.5891 9.06667 0 C9.06667 -0.5891 8.5891 -1.06667 8 -1.06667 L8 0 L8 1.06667 Z M0 0 L0 1.06667 L8 1.06667 L8 0 L8 -1.06667 L0 -1.06667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"227:2374/227:2383/227:2268"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.06667 8 C-1.06667 8.5891 -0.5891 9.06667 0 9.06667 C0.5891 9.06667 1.06667 8.5891 1.06667 8 L0 8 L-1.06667 8 Z M1.06667 0 C1.06667 -0.5891 0.5891 -1.06667 0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 L0 0 L1.06667 0 Z M0 8 L1.06667 8 L1.06667 0 L0 0 L-1.06667 0 L-1.06667 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2384": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2384"} data-name={"Action=Stage 2, Close=on, Shadow=off, size=on"}>
  <span className={s.n1} data-layer={"227:2384/227:2385"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g56_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g56_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n16} data-layer={"227:2384/227:2386"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.0701 4.65596 C0.23928 2.0448 2.59648 0.18866 5.20516 0.39245 C9.778 0.74968 16.77926 1.22027 21.82512 1.21058 C26.86739 1.2009 33.38163 0.75542 37.71359 0.40769 C40.32973 0.19769 42.69705 2.05641 42.8656 4.67554 C42.90749 5.32643 42.93444 5.96618 42.93444 6.53487 C42.93444 7.99455 42.82066 9.82895 42.69729 11.38888 C42.53916 13.38841 41.11985 15.04499 39.16843 15.50874 C34.82946 16.53989 26.99108 18.1857 21.23687 18.16526 C15.63249 18.14536 8.01394 16.53068 3.75801 15.51202 C1.80974 15.0457 0.39556 13.39086 0.23754 11.3938 C0.11402 9.83281 0 7.99608 0 6.53487 C0 5.96048 0.02749 5.3136 0.0701 4.65596 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2384/227:2387"} data-name={"Frame 3587"}>
    <span className={s.n17} data-layer={"227:2384/227:2387/227:2388"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g59_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g59_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n18} data-layer={"227:2384/227:2387/227:2389"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g60_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g60_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n23} data-layer={"227:2384/227:2390"} data-name={"Group 3588"}>
    <span className={s.n24} data-layer={"227:2384/227:2390/227:2391"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n25} data-layer={"227:2384/227:2390/227:2392"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n22} data-layer={"227:2384/227:2393"} data-name={"Icon/control/16/var"}>
    <span className={s.n10} data-layer={"227:2384/227:2393/227:2267"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 8 0" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 C-1.06667 0.5891 -0.5891 1.06667 0 1.06667 L0 0 L0 -1.06667 Z M8 1.06667 C8.5891 1.06667 9.06667 0.5891 9.06667 0 C9.06667 -0.5891 8.5891 -1.06667 8 -1.06667 L8 0 L8 1.06667 Z M0 0 L0 1.06667 L8 1.06667 L8 0 L8 -1.06667 L0 -1.06667 L0 0 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n11} data-layer={"227:2384/227:2393/227:2268"} data-name={"Vector"}>
      <svg width="100%" height="100%" viewBox="0 0 0 8" overflow="visible" aria-hidden="true" focusable="false"><path d={"M-1.06667 8 C-1.06667 8.5891 -0.5891 9.06667 0 9.06667 C0.5891 9.06667 1.06667 8.5891 1.06667 8 L0 8 L-1.06667 8 Z M1.06667 0 C1.06667 -0.5891 0.5891 -1.06667 0 -1.06667 C-0.5891 -1.06667 -1.06667 -0.5891 -1.06667 0 L0 0 L1.06667 0 Z M0 8 L1.06667 8 L1.06667 0 L0 0 L-1.06667 0 L-1.06667 8 L0 8 Z"} fill={"rgba(92,84,111,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2394": return (<Root {...rootAttributes} className={[s.n0,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2394"} data-name={"Action=Stage 2, Close=off, Shadow=on, size=on"}>
  <span className={s.n1} data-layer={"227:2394/227:2395"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g68_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g68_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n16} data-layer={"227:2394/227:2396"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.0701 4.65596 C0.23928 2.0448 2.59648 0.18866 5.20516 0.39245 C9.778 0.74968 16.77926 1.22027 21.82512 1.21058 C26.86739 1.2009 33.38163 0.75542 37.71359 0.40769 C40.32973 0.19769 42.69705 2.05641 42.8656 4.67554 C42.90749 5.32643 42.93444 5.96618 42.93444 6.53487 C42.93444 7.99455 42.82066 9.82895 42.69729 11.38888 C42.53916 13.38841 41.11985 15.04499 39.16843 15.50874 C34.82946 16.53989 26.99108 18.1857 21.23687 18.16526 C15.63249 18.14536 8.01394 16.53068 3.75801 15.51202 C1.80974 15.0457 0.39556 13.39086 0.23754 11.3938 C0.11402 9.83281 0 7.99608 0 6.53487 C0 5.96048 0.02749 5.3136 0.0701 4.65596 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2394/227:2397"} data-name={"Frame 3587"}>
    <span className={s.n17} data-layer={"227:2394/227:2397/227:2398"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g71_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g71_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n18} data-layer={"227:2394/227:2397/227:2399"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g72_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g72_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n23} data-layer={"227:2394/227:2400"} data-name={"Group 3588"}>
    <span className={s.n24} data-layer={"227:2394/227:2400/227:2401"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n25} data-layer={"227:2394/227:2400/227:2402"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2404": return (<Root {...rootAttributes} className={[s.n12,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2404"} data-name={"Action=Stage 2, Close=off, Shadow=off, size=on"}>
  <span className={s.n1} data-layer={"227:2404/227:2405"} data-name={"Ellipse 3183"}>
    <svg width="100%" height="100%" viewBox="0 0 57.59039 57.59039" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g77_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.67895 0.67895 0 -0 0.83948)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M57.5904 23.91094 C57.5904 39.81409 44.69835 57.5904 28.7952 57.5904 C12.89205 57.5904 0 39.81409 0 23.91094 C0 8.00779 12.89205 0 28.7952 0 C44.69835 0 57.5904 8.00779 57.5904 23.91094 Z"} fill={`url(#${uid}-g77_fillGeometry0)`} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n16} data-layer={"227:2404/227:2406"} data-name={"Rectangle 3615"}>
    <svg width="100%" height="100%" viewBox="0 0 42.93444 18.16545" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.0701 4.65596 C0.23928 2.0448 2.59648 0.18866 5.20516 0.39245 C9.778 0.74968 16.77926 1.22027 21.82512 1.21058 C26.86739 1.2009 33.38163 0.75542 37.71359 0.40769 C40.32973 0.19769 42.69705 2.05641 42.8656 4.67554 C42.90749 5.32643 42.93444 5.96618 42.93444 6.53487 C42.93444 7.99455 42.82066 9.82895 42.69729 11.38888 C42.53916 13.38841 41.11985 15.04499 39.16843 15.50874 C34.82946 16.53989 26.99108 18.1857 21.23687 18.16526 C15.63249 18.14536 8.01394 16.53068 3.75801 15.51202 C1.80974 15.0457 0.39556 13.39086 0.23754 11.3938 C0.11402 9.83281 0 7.99608 0 6.53487 C0 5.96048 0.02749 5.3136 0.0701 4.65596 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
  </span>
  <span className={s.n3} data-layer={"227:2404/227:2407"} data-name={"Frame 3587"}>
    <span className={s.n17} data-layer={"227:2404/227:2407/227:2408"} data-name={"Ellipse 3185"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g80_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g80_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n18} data-layer={"227:2404/227:2407/227:2409"} data-name={"Ellipse 3184"}>
      <svg width="100%" height="100%" viewBox="0 0 4.98688 20.94353" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g81_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -1 1 0 0 1)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M4.98688 7.9997 C4.98688 15.14838 3.87053 20.94353 2.49344 20.94353 C1.11635 20.94353 0 15.14838 0 7.9997 C0 0.85103 1.11635 0 2.49344 0 C3.87053 0 4.98688 0.85103 4.98688 7.9997 Z"} fill={`url(#${uid}-g81_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
  </span>
  <span className={s.n26} data-layer={"227:2404/227:2410"} data-name={"Group 3588"}>
    <span className={s.n27} data-layer={"227:2404/227:2410/227:2411"} data-name={"Ellipse 3186"}>
      <svg width="100%" height="100%" viewBox="0 0 8.15951 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.15951 3.31632 C8.15951 5.5695 5.30806 8.00999 2.99437 7.39607 C2.10536 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82657 0 4.07976 0 C6.33294 0 8.15951 1.06313 8.15951 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n28} data-layer={"227:2404/227:2410/227:2412"} data-name={"Ellipse 3187"}>
      <svg width="100%" height="100%" viewBox="0 0 8.16214 7.4922" overflow="visible" aria-hidden="true" focusable="false"><path d={"M8.16214 3.31632 C8.16214 5.5695 5.30977 8.00999 2.99533 7.39607 C2.10604 7.16018 0 5.5695 0 3.31632 C0 0.53259 1.82716 0 4.08107 0 C6.33499 0 8.16214 1.06313 8.16214 3.31632 Z"} fill={"rgba(59,248,255,1)"} fillRule="nonzero"/></svg>
    </span>
  </span>
</Root>);
case "227:2414": return (<Root {...rootAttributes} className={[s.n29,rootAttributes.className].filter(Boolean).join(" ")} data-layer={"227:2414"} data-name={"Action=Stage 1, Close=off, Shadow=off, size=off"}>
  <span className={s.n30} data-layer={"227:2414/227:2415"} data-name={"Group 3730"}>
    <span className={s.n31} data-layer={"227:2414/227:2415/227:2416"} data-name={"Rectangle 3618"}>
      <svg width="100%" height="100%" viewBox="0 0 26.98633 30" overflow="visible" aria-hidden="true" focusable="false"><defs><linearGradient id={`${uid}-g87_fillGeometry0`} x1="0" y1="0" x2="1" y2="0" gradientTransform={"matrix(0 -0.7483 0.71935 0 -0.22106 0.87415)"}><stop offset={0} stopColor={"rgba(217,217,217,1)"}/><stop offset={1} stopColor={"rgba(115,115,115,1)"}/></linearGradient></defs><path d={"M0 12.21158 C0 10.96098 0.54073 9.7767 1.47254 8.98648 L10.9657 0.9359 C12.43717 -0.31197 14.54915 -0.31197 16.02062 0.9359 L25.51379 8.98648 C26.4456 9.7767 26.98633 10.96098 26.98633 12.21158 L26.98633 25.839 C26.98633 28.13706 25.19547 30 22.98633 30 L4 30 C1.79086 30 0 28.13706 0 25.839 L0 12.21158 Z"} fill={`url(#${uid}-g87_fillGeometry0)`} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n32} data-layer={"227:2414/227:2415/227:2417"} data-name={"Rectangle 3615"}>
      <svg width="100%" height="100%" viewBox="0 0 20 9.69375" overflow="visible" aria-hidden="true" focusable="false"><path d={"M0.07306 2.59482 C0.15681 1.58379 0.94245 0.78771 1.9485 0.65713 C3.96973 0.39477 7.38814 0.00505 9.89269 0.00005 C12.46792 -0.0051 15.98917 0.39267 18.05061 0.65844 C19.0574 0.78823 19.84329 1.58448 19.92705 2.59613 C19.96814 3.09251 20 3.61887 20 4.05785 C20 4.78759 19.94358 5.71059 19.88406 6.48142 C19.8125 7.40799 19.16162 8.17973 18.2595 8.40296 C16.24116 8.9024 12.57928 9.70359 9.89269 9.69366 C7.27625 9.684 3.71739 8.89812 1.73744 8.40469 C0.83685 8.18025 0.18763 7.40919 0.11613 6.48382 C0.05653 5.7125 0 4.78834 0 4.05785 C0 3.61848 0.03191 3.09158 0.07306 2.59482 Z"} fill={"rgba(65,90,124,1)"} fillRule="nonzero"/></svg>
    </span>
    <span className={s.n33} data-layer={"227:2414/227:2415/227:2418"} data-name={"Group 3588"}>
      <span className={s.n34} data-layer={"227:2414/227:2415/227:2418/227:2419"} data-name={"Ellipse 3186"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80092 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80092 1.60701 C3.80092 2.69885 2.47264 3.88145 1.39486 3.58396 C0.98073 3.46965 0 2.69885 0 1.60701 C0 0.25808 0.85086 0 1.90046 0 C2.95005 0 3.80092 0.51517 3.80092 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
      <span className={s.n35} data-layer={"227:2414/227:2415/227:2418/227:2420"} data-name={"Ellipse 3187"}>
        <svg width="100%" height="100%" viewBox="0 0 3.80214 3.63054" overflow="visible" aria-hidden="true" focusable="false"><path d={"M3.80214 1.60701 C3.80214 2.69885 2.47343 3.88145 1.3953 3.58396 C0.98105 3.46965 0 2.69885 0 1.60701 C0 0.25808 0.85114 0 1.90107 0 C2.951 0 3.80214 0.51517 3.80214 1.60701 Z"} fill={"rgba(0,242,255,1)"} fillRule="nonzero"/></svg>
      </span>
    </span>
  </span>
  <span className={s.n36} data-layer={"227:2414/227:2421"} data-name={"Rectangle 3623"}></span>
</Root>);
  default: return null;
  }
}
