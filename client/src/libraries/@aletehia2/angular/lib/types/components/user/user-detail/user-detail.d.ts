import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { UserDetailType } from './user-detail.model';
export declare class AthUserDetail implements ComponentInterface {
    private userDetailId;
    private descriptionId;
    /**
     * If true, the user can click the button-link.
     */
    clickable: boolean;
    /**
     * Avatar SRC image.
     */
    srcImage: string;
    /**
     * User Name.
     */
    userName: string;
    /**
     * Type of avatar.
     */
    type: UserDetailType;
    /**
     * User initials.
     */
    initials: string;
    /**
     * User Description.
     */
    description: string;
    /**
     * The aria-label attribute of the button-link.
     */
    buttonAriaLabel: string;
    /**
     * Emmitted when button-link is clicked.
     */
    athAction: EventEmitter<void>;
    private imgTag;
    handleClick(ev: any): void;
    private renderLabel;
    private getAttributes;
    render(): any;
}
