import type { Components, JSX } from "../dist/types/components";

interface AthIcon extends Components.AthIcon, HTMLElement {}
export const AthIcon: {
    prototype: AthIcon;
    new (): AthIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
