import type { Components, JSX } from "../dist/types/components";

interface AthModal extends Components.AthModal, HTMLElement {}
export const AthModal: {
    prototype: AthModal;
    new (): AthModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
