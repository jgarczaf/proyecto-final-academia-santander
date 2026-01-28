import type { Components, JSX } from "../dist/types/components";

interface AthInputText extends Components.AthInputText, HTMLElement {}
export const AthInputText: {
    prototype: AthInputText;
    new (): AthInputText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
