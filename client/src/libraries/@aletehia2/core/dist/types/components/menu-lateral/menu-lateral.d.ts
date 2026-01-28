import { JSX, EventEmitter } from '../../stencil-public-runtime';
import { MenuLateralItem } from './menu-lateral.model';
import { MenuLateralItemVM } from './menu-lateral.model';
export declare class AthMenuLateral {
    private hostId;
    private menuLateralId;
    /**
     * (JSON) Object of items to generate
     */
    items: MenuLateralItem[] | string;
    /**
     * Items generated
     */
    generatedMenuLateralItems: MenuLateralItemVM[];
    /**
     * Id of the hovered item
     */
    hoveredItemId: string;
    /**
     * Id of the focused item
     */
    focusedItemId: string;
    /**
     * Show focused item
     */
    showFocused: boolean;
    /**
     * Events
     */
    athSelected: EventEmitter<{
        item: HTMLAthMenuLateralItemActionElement | HTMLAthMenuLateralItemLinkElement;
    }>;
    el: HTMLElement;
    onItemsChange(newValue: MenuLateralItem[] | string, oldValue: MenuLateralItem[] | string): void;
    componentWillLoad(): void;
    private generateMenuLateralItems;
    private getItems;
    private parseItems;
    private scanChildrenItems;
    private renderMenuItem;
    private renderActionItem;
    private renderLinkItem;
    private getMenuLateralItemButtonClassNames;
    private renderIcon;
    private handleMenuItemKeyDown;
    private findNextEnabledIndex;
    private setFocusedItemId;
    private handleClick;
    private emitSelectedEvent;
    onSelectedItemIdChange(newValue: string): void;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    render(): JSX.Element;
}
