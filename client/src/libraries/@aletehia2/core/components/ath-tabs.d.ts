import type { Components, JSX } from "../dist/types/components";

interface AthTabs extends Components.AthTabs, HTMLElement {}
export const AthTabs: {
    prototype: AthTabs;
    new (): AthTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
