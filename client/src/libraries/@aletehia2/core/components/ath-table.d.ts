import type { Components, JSX } from "../dist/types/components";

interface AthTable extends Components.AthTable, HTMLElement {}
export const AthTable: {
    prototype: AthTable;
    new (): AthTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
