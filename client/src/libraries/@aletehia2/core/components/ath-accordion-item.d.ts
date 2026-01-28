import type { Components, JSX } from "../dist/types/components";

interface AthAccordionItem extends Components.AthAccordionItem, HTMLElement {}
export const AthAccordionItem: {
    prototype: AthAccordionItem;
    new (): AthAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
