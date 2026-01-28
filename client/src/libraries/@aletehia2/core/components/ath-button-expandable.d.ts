import type { Components, JSX } from "../dist/types/components";

interface AthButtonExpandable extends Components.AthButtonExpandable, HTMLElement {}
export const AthButtonExpandable: {
    prototype: AthButtonExpandable;
    new (): AthButtonExpandable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
