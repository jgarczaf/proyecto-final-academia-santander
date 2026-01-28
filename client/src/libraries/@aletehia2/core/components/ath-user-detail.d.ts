import type { Components, JSX } from "../dist/types/components";

interface AthUserDetail extends Components.AthUserDetail, HTMLElement {}
export const AthUserDetail: {
    prototype: AthUserDetail;
    new (): AthUserDetail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
