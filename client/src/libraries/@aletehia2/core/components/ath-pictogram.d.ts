import type { Components, JSX } from "../dist/types/components";

interface AthPictogram extends Components.AthPictogram, HTMLElement {}
export const AthPictogram: {
    prototype: AthPictogram;
    new (): AthPictogram;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
