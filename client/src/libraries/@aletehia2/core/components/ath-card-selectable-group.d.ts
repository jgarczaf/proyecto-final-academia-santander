import type { Components, JSX } from "../dist/types/components";

interface AthCardSelectableGroup extends Components.AthCardSelectableGroup, HTMLElement {}
export const AthCardSelectableGroup: {
    prototype: AthCardSelectableGroup;
    new (): AthCardSelectableGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
