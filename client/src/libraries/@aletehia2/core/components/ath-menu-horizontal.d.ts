import type { Components, JSX } from "../dist/types/components";

interface AthMenuHorizontal extends Components.AthMenuHorizontal, HTMLElement {}
export const AthMenuHorizontal: {
    prototype: AthMenuHorizontal;
    new (): AthMenuHorizontal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
