import type { Components, JSX } from "../dist/types/components";

interface AthMenuVertical extends Components.AthMenuVertical, HTMLElement {}
export const AthMenuVertical: {
    prototype: AthMenuVertical;
    new (): AthMenuVertical;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
