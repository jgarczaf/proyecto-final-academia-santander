import type { Components, JSX } from "../dist/types/components";

interface AthDatepicker extends Components.AthDatepicker, HTMLElement {}
export const AthDatepicker: {
    prototype: AthDatepicker;
    new (): AthDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
