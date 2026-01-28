import type { Components, JSX } from "../dist/types/components";

interface AthTab extends Components.AthTab, HTMLElement {}
export const AthTab: {
    prototype: AthTab;
    new (): AthTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
