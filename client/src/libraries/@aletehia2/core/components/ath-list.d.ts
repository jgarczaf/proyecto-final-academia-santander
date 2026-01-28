import type { Components, JSX } from "../dist/types/components";

interface AthList extends Components.AthList, HTMLElement {}
export const AthList: {
    prototype: AthList;
    new (): AthList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
