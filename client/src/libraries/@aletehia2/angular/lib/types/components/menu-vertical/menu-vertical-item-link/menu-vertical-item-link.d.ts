import { ComponentInterface } from '../../../stencil-public-runtime';
import { menuItemLinkTarget } from './menu-vertical-item-link.model';
export declare class AthMenuVerticalItemLink implements ComponentInterface {
    /**
     * Whether the link is selected
     */
    selected: boolean;
    /**
     * Whether the link is disabled
     */
    disabled: boolean;
    /**
     * Icon of the item
     **/
    icon: string;
    /**
     * Title of the link
     **/
    text: string;
    /**
     * Value of the item, in order to identify it.
     **/
    value: string;
    /**
     * URL of the link
     **/
    href: string;
    /**
     * target of the link: blank | self
     **/
    target: menuItemLinkTarget;
    /**
     * rel of the link
     **/
    rel: string;
    /**
     * The text that indicates that the link open a new window
     **/
    externalLabel: string;
}
