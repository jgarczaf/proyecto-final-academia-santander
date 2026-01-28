import type { Components, JSX } from "../dist/types/components";

interface AthPanel extends Components.AthPanel, HTMLElement {}
export const AthPanel: {
    prototype: AthPanel;
    new (): AthPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
