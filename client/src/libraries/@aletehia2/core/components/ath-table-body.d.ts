import type { Components, JSX } from "../dist/types/components";

interface AthTableBody extends Components.AthTableBody, HTMLElement {}
export const AthTableBody: {
    prototype: AthTableBody;
    new (): AthTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
