import type { Components, JSX } from "../dist/types/components";

interface AthSlider extends Components.AthSlider, HTMLElement {}
export const AthSlider: {
    prototype: AthSlider;
    new (): AthSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
