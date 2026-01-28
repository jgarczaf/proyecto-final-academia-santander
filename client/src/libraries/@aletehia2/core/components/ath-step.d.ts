import type { Components, JSX } from "../dist/types/components";

interface AthStep extends Components.AthStep, HTMLElement {}
export const AthStep: {
    prototype: AthStep;
    new (): AthStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
