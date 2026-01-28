import type { Components, JSX } from "../dist/types/components";

interface AthCalendar extends Components.AthCalendar, HTMLElement {}
export const AthCalendar: {
    prototype: AthCalendar;
    new (): AthCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
