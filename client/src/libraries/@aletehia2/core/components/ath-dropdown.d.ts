import type { Components, JSX } from "../dist/types/components";

interface AthDropdown extends Components.AthDropdown, HTMLElement {}
export const AthDropdown: {
    prototype: AthDropdown;
    new (): AthDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
