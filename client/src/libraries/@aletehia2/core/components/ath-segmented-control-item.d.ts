import type { Components, JSX } from "../dist/types/components";

interface AthSegmentedControlItem extends Components.AthSegmentedControlItem, HTMLElement {}
export const AthSegmentedControlItem: {
    prototype: AthSegmentedControlItem;
    new (): AthSegmentedControlItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
