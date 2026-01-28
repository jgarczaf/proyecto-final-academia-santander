import type { Components, JSX } from "../dist/types/components";

interface AthProgressBar extends Components.AthProgressBar, HTMLElement {}
export const AthProgressBar: {
    prototype: AthProgressBar;
    new (): AthProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
