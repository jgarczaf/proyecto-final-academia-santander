import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class AthMenuLateralItemLink implements ComponentInterface {
    /**
     * The aria-label of the item
     */
    ariaLabel: string | null;
    /**
     * The accesible label of the badge
     */
    badgeLabel: string;
    /**
     * The maximum value inside the badge
     */
    badgeMax: number;
    /**
     * The value inside the badge
     */
    badgeValue: number;
    /**
     * Weather the button is disabled
     */
    disabled: boolean;
    /**
     * The icon of the menu-button-item-link
     */
    icon: string;
    /**
     * The name of the item, usefull in order to identify the selected item
     */
    name: string;
    /**
     * Weather the button is selected
     */
    selected: boolean;
    /**
     * Tooltip text
     */
    tooltipText: string;
    /**
     * The text that indicates that the link open a new window
     */
    externalLabel: string;
    /**
     * The URL of the link
     */
    href: string;
    /**
     * The rel of the link
     */
    rel: string;
    /**
     * The target of the link
     */
    target: "self";
}
