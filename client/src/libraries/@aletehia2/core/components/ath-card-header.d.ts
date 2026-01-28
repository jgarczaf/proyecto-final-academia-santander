import type { Components, JSX } from "../dist/types/components";

interface AthCardHeader extends Components.AthCardHeader, HTMLElement {}
export const AthCardHeader: {
    prototype: AthCardHeader;
    new (): AthCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
