import type { Components, JSX } from "../dist/types/components";

interface AthRadioButton extends Components.AthRadioButton, HTMLElement {}
export const AthRadioButton: {
    prototype: AthRadioButton;
    new (): AthRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
