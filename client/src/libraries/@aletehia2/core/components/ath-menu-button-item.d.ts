import type { Components, JSX } from "../dist/types/components";

interface AthMenuButtonItem extends Components.AthMenuButtonItem, HTMLElement {}
export const AthMenuButtonItem: {
    prototype: AthMenuButtonItem;
    new (): AthMenuButtonItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
