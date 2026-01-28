import type { Components, JSX } from "../dist/types/components";

interface AthChipChoice extends Components.AthChipChoice, HTMLElement {}
export const AthChipChoice: {
    prototype: AthChipChoice;
    new (): AthChipChoice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
