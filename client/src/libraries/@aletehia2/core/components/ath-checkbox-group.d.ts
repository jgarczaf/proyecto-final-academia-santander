import type { Components, JSX } from "../dist/types/components";

interface AthCheckboxGroup extends Components.AthCheckboxGroup, HTMLElement {}
export const AthCheckboxGroup: {
    prototype: AthCheckboxGroup;
    new (): AthCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
