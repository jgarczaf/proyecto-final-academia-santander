import type { Components, JSX } from "../dist/types/components";

interface AthBadge extends Components.AthBadge, HTMLElement {}
export const AthBadge: {
    prototype: AthBadge;
    new (): AthBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
