import type { Components, JSX } from "../dist/types/components";

interface AthDivider extends Components.AthDivider, HTMLElement {}
export const AthDivider: {
    prototype: AthDivider;
    new (): AthDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
