import type { Components, JSX } from "../dist/types/components";

interface AthAvatar extends Components.AthAvatar, HTMLElement {}
export const AthAvatar: {
    prototype: AthAvatar;
    new (): AthAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
