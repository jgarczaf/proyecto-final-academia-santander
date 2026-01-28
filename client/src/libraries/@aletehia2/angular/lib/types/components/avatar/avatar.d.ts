import { ComponentInterface } from '../../stencil-public-runtime';
import { AvatarSize, AvatarType } from './avatar.model';
export declare class AthAvatar implements ComponentInterface {
    /**
     * Initials to display in the avatar.
     */
    initials: string;
    /**
     * Size of the avatar.
     */
    size: AvatarSize;
    /**
     * Type of avatar (image or initials).
     */
    type: AvatarType;
    /**
     * Name used to generate initials if none are provided.
     */
    avatarName: string;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby?: string;
    el: HTMLElement;
    private avatarClassType;
    private getClassNames;
    private hasImage;
    private getInitials;
    private renderContent;
    componentDidLoad(): void;
    private renderDefaultImg;
    private hasAriaLabel;
    private hasAriaLabelledBy;
    private getHostAttributes;
    render(): any;
}
