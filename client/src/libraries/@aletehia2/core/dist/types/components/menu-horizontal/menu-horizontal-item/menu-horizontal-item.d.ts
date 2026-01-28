import { TargetTypes } from '../menu-horizontal.model';
export declare class AthMenuHorizontalItem {
    /**
     * The accessible text of the badge
     */
    badgeLabel: string;
    /**
     * The value of the badge
     */
    badgeValue: number;
    /**
     * The maximum value inside the badge
     */
    badgeMax: number;
    /**
     * Whether the item is disabled or not
     */
    disabled: boolean;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel: string;
    /**
     * The URL of the item
     */
    href: string;
    /**
     * The label of the item
     */
    label: string;
    /**
     * Whether the item is selected or not
     */
    selected: boolean;
    /**
     * Specifies the relationship of the linked URL
     */
    rel: string;
    /**
     * The target of the link
     */
    target: TargetTypes;
    value: any;
}
