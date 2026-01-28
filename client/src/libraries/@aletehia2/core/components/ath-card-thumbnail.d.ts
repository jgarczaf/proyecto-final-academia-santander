import type { Components, JSX } from "../dist/types/components";

interface AthCardThumbnail extends Components.AthCardThumbnail, HTMLElement {}
export const AthCardThumbnail: {
    prototype: AthCardThumbnail;
    new (): AthCardThumbnail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
