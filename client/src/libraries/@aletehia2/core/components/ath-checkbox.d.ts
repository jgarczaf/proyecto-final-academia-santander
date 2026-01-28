import type { Components, JSX } from "../dist/types/components";

interface AthCheckbox extends Components.AthCheckbox, HTMLElement {}
export const AthCheckbox: {
    prototype: AthCheckbox;
    new (): AthCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
