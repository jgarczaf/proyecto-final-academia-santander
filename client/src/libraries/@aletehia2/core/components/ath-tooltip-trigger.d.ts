import type { Components, JSX } from "../dist/types/components";

interface AthTooltipTrigger extends Components.AthTooltipTrigger, HTMLElement {}
export const AthTooltipTrigger: {
    prototype: AthTooltipTrigger;
    new (): AthTooltipTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
