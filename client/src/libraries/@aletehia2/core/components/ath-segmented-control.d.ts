import type { Components, JSX } from "../dist/types/components";

interface AthSegmentedControl extends Components.AthSegmentedControl, HTMLElement {}
export const AthSegmentedControl: {
    prototype: AthSegmentedControl;
    new (): AthSegmentedControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
