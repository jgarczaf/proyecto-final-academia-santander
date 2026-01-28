import type { Components, JSX } from "../dist/types/components";

interface AthTableHeaderItem extends Components.AthTableHeaderItem, HTMLElement {}
export const AthTableHeaderItem: {
    prototype: AthTableHeaderItem;
    new (): AthTableHeaderItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
