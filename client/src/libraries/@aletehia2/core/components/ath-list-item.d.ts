import type { Components, JSX } from "../dist/types/components";

interface AthListItem extends Components.AthListItem, HTMLElement {}
export const AthListItem: {
    prototype: AthListItem;
    new (): AthListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
