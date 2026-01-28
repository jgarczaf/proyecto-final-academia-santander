import type { Components, JSX } from "../dist/types/components";

interface AthMenuButton extends Components.AthMenuButton, HTMLElement {}
export const AthMenuButton: {
    prototype: AthMenuButton;
    new (): AthMenuButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
