import type { Components, JSX } from "../dist/types/components";

interface AthLink extends Components.AthLink, HTMLElement {}
export const AthLink: {
    prototype: AthLink;
    new (): AthLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
