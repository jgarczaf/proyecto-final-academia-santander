import type { Components, JSX } from "../dist/types/components";

interface AthTooltip extends Components.AthTooltip, HTMLElement {}
export const AthTooltip: {
    prototype: AthTooltip;
    new (): AthTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
