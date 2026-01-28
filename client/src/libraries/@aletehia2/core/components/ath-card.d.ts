import type { Components, JSX } from "../dist/types/components";

interface AthCard extends Components.AthCard, HTMLElement {}
export const AthCard: {
    prototype: AthCard;
    new (): AthCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
