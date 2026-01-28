import type { Components, JSX } from "../dist/types/components";

interface AthActionBar extends Components.AthActionBar, HTMLElement {}
export const AthActionBar: {
    prototype: AthActionBar;
    new (): AthActionBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
