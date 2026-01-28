import type { Components, JSX } from "../dist/types/components";

interface AthText extends Components.AthText, HTMLElement {}
export const AthText: {
    prototype: AthText;
    new (): AthText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
