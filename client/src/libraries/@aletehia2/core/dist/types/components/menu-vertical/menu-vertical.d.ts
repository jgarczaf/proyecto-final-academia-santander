import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { MenuVerticalAppearance } from './menu-vertical.model';
import { MenuItem } from './stories/menu-vertical.types';
export declare class AthMenuVertical implements ComponentInterface {
    private menuVerticalId;
    private menuLevelId;
    /**
     * Appearance of the menu
     */
    appearance: MenuVerticalAppearance;
    /**
     * Emitted when link or action Button is clicked
     */
    athSelected: EventEmitter<MenuItem>;
    el: HTMLElement;
    menuItems: MenuItem[];
    focusedItemId: string;
    private focusableItems;
    private mutationObserver;
    componentWillLoad(): void;
    private mapElementToMenuItem;
    private initializeOpenState;
    private cleanSelectedAttribute;
    private cleanOpenAttribute;
    private observeMutationTreeList;
    private findFirstFocusableItemId;
    componentDidLoad(): void;
    private buildMenuItemsAndInitialize;
    disconnectedCallback(): void;
    private renderMenu;
    private renderLevel1;
    private createMenu;
    private createAction;
    private createLink;
    private getTabIndex;
    private getLinkProp;
    private registerFocusableItem;
    private isItemSelected;
    private setFocusedItem;
    private handleClick;
    private handleClickOpen;
    private findItemById;
    private handleKeyDown;
    private deselectAll;
    private updateFocusableItems;
    private focusPrev;
    private focusNext;
    private getListClassNames;
    render(): any;
}
