import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { UserMenuType } from './user-menu.model';
export declare class AthUserMenu implements ComponentInterface {
    private hostId;
    private menuOverlayId;
    /**
     * Initials to display in the avatar.
     */
    initials: string;
    /**
     * Indica si user-menu esta abierto
     */
    open: boolean;
    /**
     * Define la src para imagen avatar
     */
    srcImage: string;
    /**
     * Define el nombre del usuario
     */
    userName: string;
    /**
     * Define el tipo de avatar
     */
    type: UserMenuType;
    /**
     * Emitted when an item is clicked
     */
    athAction: EventEmitter<{
        item: HTMLAthMenuButtonItemElement;
    }>;
    el: HTMLElement;
    private buttonLinkEl;
    private currentIndex;
    private firstTimeOpen;
    handleOutsideClick(event: MouseEvent): void;
    watchOpenState(): void;
    private handleClick;
    private toggleMenu;
    onClick(ev: CustomEvent): void;
    private getClassNames;
    handleKeyDown(ev: KeyboardEvent): void;
    private focusManager;
    private getNextIndex;
    private setFocusToAthButtonLink;
    private imgTag;
    private getOverlayClassNames;
    private getContainerClassNames;
    constructor();
    disconnectedCallback(): void;
    componentDidRender(): void;
    private getAvatarAttributes;
    render(): any;
}
