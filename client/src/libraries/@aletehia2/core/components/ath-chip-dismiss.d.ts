import type { Components, JSX } from "../dist/types/components";

interface AthChipDismiss extends Components.AthChipDismiss, HTMLElement {}
export const AthChipDismiss: {
    prototype: AthChipDismiss;
    new (): AthChipDismiss;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
