import type { Components, JSX } from "../dist/types/components";

interface AthTag extends Components.AthTag, HTMLElement {}
export const AthTag: {
    prototype: AthTag;
    new (): AthTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
