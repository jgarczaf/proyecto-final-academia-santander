import type { Components, JSX } from "../dist/types/components";

interface AthMenuHorizontalItem extends Components.AthMenuHorizontalItem, HTMLElement {}
export const AthMenuHorizontalItem: {
    prototype: AthMenuHorizontalItem;
    new (): AthMenuHorizontalItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
