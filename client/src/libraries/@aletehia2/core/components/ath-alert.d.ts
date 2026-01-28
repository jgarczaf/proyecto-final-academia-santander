import type { Components, JSX } from "../dist/types/components";

interface AthAlert extends Components.AthAlert, HTMLElement {}
export const AthAlert: {
    prototype: AthAlert;
    new (): AthAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
