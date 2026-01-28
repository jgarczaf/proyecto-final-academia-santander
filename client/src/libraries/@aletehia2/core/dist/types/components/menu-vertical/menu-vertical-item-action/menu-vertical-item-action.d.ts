import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class AthMenuVerticalItemAction implements ComponentInterface {
    /**
     * Whether the item is disabled
     */
    disabled: boolean;
    /**
     * Icon of the item
     **/
    icon: string;
    /**
     * Whether an item with children is open by default.
     */
    open: boolean;
    /**
     * Whether the item is selected
     */
    selected: boolean;
    /**
     * Title of the item
     **/
    text: string;
    /**
     * Value of the item, in order to identify it.
     **/
    value: string;
}
