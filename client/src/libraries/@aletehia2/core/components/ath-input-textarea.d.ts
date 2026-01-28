import type { Components, JSX } from "../dist/types/components";

interface AthInputTextarea extends Components.AthInputTextarea, HTMLElement {}
export const AthInputTextarea: {
    prototype: AthInputTextarea;
    new (): AthInputTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
