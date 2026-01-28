import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { Alignments } from './menu-button.model';
import { ButtonColors, ButtonSizes } from "../button/button.model";
export declare class AthMenuButton implements ComponentInterface {
    private hostId;
    private overlayId;
    el: HTMLElement | null;
    /**
     * The overlay's position relative to the origin
     */
    alignment: Alignments;
    /**
     * Weather the button is focused by default
     */
    autofocus: boolean;
    /**
     * The clear of the button (background and border color)
     */
    clear: boolean;
    /**
     * The color variant of the button
     */
    color: ButtonColors;
    /**
     * The button is disabled
     */
    disabled: boolean;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon: string;
    /**
     * Wheather the menu is open by default
     */
    open: boolean;
    /**
     * The size of the button
     */
    size: ButtonSizes;
    /**
     * Altura del overlay del menu
     */
    overlayMaxHeight: string;
    /**
     * The accesible label of the menu-button
     */
    athAriaLabel: string;
    /**
     * Emitted when an item is clicked
     */
    athAction: EventEmitter<{
        item: HTMLAthMenuButtonItemElement;
    }>;
    private justOpen;
    clickOutside(ev: MouseEvent): void;
    private handleClick;
    componentDidLoad(): void;
    private setFocusToAthButton;
    private manageGroups;
    private groupBy;
    onClick(ev: CustomEvent): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private focusManager;
    private getButtonClassNames;
    private getOverlayClassNames;
    render(): JSX.Element;
}
