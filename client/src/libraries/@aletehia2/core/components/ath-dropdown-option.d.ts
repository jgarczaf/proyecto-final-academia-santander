import type { Components, JSX } from "../dist/types/components";

interface AthDropdownOption extends Components.AthDropdownOption, HTMLElement {}
export const AthDropdownOption: {
    prototype: AthDropdownOption;
    new (): AthDropdownOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
