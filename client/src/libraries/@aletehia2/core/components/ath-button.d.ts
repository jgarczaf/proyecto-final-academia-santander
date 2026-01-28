import type { Components, JSX } from "../dist/types/components";

interface AthButton extends Components.AthButton, HTMLElement {}
export const AthButton: {
    prototype: AthButton;
    new (): AthButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
