import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class AthMenuLateralItemAction implements ComponentInterface {
    /**
     * The aria-label of the item
     */
    ariaLabel: string | null;
    /**
     * The maximum value inside the badge
     */
    badgeMax: number;
    /**
     * The accesible label of the badge
     */
    badgeLabel: string;
    /**
     * The value inside the badge
     */
    badgeValue: number;
    /**
     * Weather the button is disabled
     */
    disabled: boolean;
    /**
     * The icon of the menu-button-item-action
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
}
