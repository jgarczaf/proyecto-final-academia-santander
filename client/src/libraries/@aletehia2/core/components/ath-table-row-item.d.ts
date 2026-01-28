import type { Components, JSX } from "../dist/types/components";

interface AthTableRowItem extends Components.AthTableRowItem, HTMLElement {}
export const AthTableRowItem: {
    prototype: AthTableRowItem;
    new (): AthTableRowItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
