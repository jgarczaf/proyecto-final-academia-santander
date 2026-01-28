import type { Components, JSX } from "../dist/types/components";

interface AthEmptyState extends Components.AthEmptyState, HTMLElement {}
export const AthEmptyState: {
    prototype: AthEmptyState;
    new (): AthEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
