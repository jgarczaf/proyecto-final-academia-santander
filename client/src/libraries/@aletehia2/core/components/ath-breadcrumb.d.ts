import type { Components, JSX } from "../dist/types/components";

interface AthBreadcrumb extends Components.AthBreadcrumb, HTMLElement {}
export const AthBreadcrumb: {
    prototype: AthBreadcrumb;
    new (): AthBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
