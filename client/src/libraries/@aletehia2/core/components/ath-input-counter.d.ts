import type { Components, JSX } from "../dist/types/components";

interface AthInputCounter extends Components.AthInputCounter, HTMLElement {}
export const AthInputCounter: {
    prototype: AthInputCounter;
    new (): AthInputCounter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
