import type { Components, JSX } from "../dist/types/components";

interface AthAccordion extends Components.AthAccordion, HTMLElement {}
export const AthAccordion: {
    prototype: AthAccordion;
    new (): AthAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
