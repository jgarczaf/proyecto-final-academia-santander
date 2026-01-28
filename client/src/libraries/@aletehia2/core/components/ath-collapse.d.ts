import type { Components, JSX } from "../dist/types/components";

interface AthCollapse extends Components.AthCollapse, HTMLElement {}
export const AthCollapse: {
    prototype: AthCollapse;
    new (): AthCollapse;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
