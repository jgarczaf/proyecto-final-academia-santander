import type { Components, JSX } from "../dist/types/components";

interface AthMenuVerticalItemLink extends Components.AthMenuVerticalItemLink, HTMLElement {}
export const AthMenuVerticalItemLink: {
    prototype: AthMenuVerticalItemLink;
    new (): AthMenuVerticalItemLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
