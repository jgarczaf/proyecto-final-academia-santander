import type { Components, JSX } from "../dist/types/components";

interface AthSectionTitle extends Components.AthSectionTitle, HTMLElement {}
export const AthSectionTitle: {
    prototype: AthSectionTitle;
    new (): AthSectionTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
