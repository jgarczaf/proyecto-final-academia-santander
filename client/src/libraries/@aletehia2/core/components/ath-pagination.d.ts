import type { Components, JSX } from "../dist/types/components";

interface AthPagination extends Components.AthPagination, HTMLElement {}
export const AthPagination: {
    prototype: AthPagination;
    new (): AthPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
