import type { Components, JSX } from "../dist/types/components";

interface AthStepper extends Components.AthStepper, HTMLElement {}
export const AthStepper: {
    prototype: AthStepper;
    new (): AthStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
