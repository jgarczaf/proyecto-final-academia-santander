import type { Components, JSX } from "../dist/types/components";

interface AthInputPassword extends Components.AthInputPassword, HTMLElement {}
export const AthInputPassword: {
    prototype: AthInputPassword;
    new (): AthInputPassword;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
