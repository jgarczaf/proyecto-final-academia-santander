import type { Components, JSX } from "../dist/types/components";

interface AthTableHeader extends Components.AthTableHeader, HTMLElement {}
export const AthTableHeader: {
    prototype: AthTableHeader;
    new (): AthTableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
