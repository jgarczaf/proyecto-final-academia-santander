import type { Components, JSX } from "../dist/types/components";

interface AthTableRow extends Components.AthTableRow, HTMLElement {}
export const AthTableRow: {
    prototype: AthTableRow;
    new (): AthTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
