import type { Components, JSX } from "../dist/types/components";

interface AthUserMenu extends Components.AthUserMenu, HTMLElement {}
export const AthUserMenu: {
    prototype: AthUserMenu;
    new (): AthUserMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
