import type { Components, JSX } from "../dist/types/components";

interface AthButtonLink extends Components.AthButtonLink, HTMLElement {}
export const AthButtonLink: {
    prototype: AthButtonLink;
    new (): AthButtonLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
