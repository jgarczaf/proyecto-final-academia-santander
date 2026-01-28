import type { Components, JSX } from "../dist/types/components";

interface AthSwitch extends Components.AthSwitch, HTMLElement {}
export const AthSwitch: {
    prototype: AthSwitch;
    new (): AthSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
