import type { Components, JSX } from "../types/components";

interface XEyes extends Components.XEyes, HTMLElement {}
export const XEyes: {
  prototype: XEyes;
  new (): XEyes;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
