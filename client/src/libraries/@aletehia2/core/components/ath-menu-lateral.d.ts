import type { Components, JSX } from "../dist/types/components";

interface AthMenuLateral extends Components.AthMenuLateral, HTMLElement {}
export const AthMenuLateral: {
    prototype: AthMenuLateral;
    new (): AthMenuLateral;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
