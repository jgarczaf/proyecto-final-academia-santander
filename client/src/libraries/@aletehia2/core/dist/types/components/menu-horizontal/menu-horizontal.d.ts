import { EventEmitter } from '../../stencil-public-runtime';
import { MenuHorizontalItem } from './menu-horizontal-item/menu-horizontal-item.model';
export declare class AthMenuHorizontal {
    /**
     * The accessible label for the menu
     */
    athAriaLabel: string;
    /**
     * Whether the menu has a divider below
     */
    hasDivider: boolean;
    /**
     * Items to generate using the imperative way
     */
    items: MenuHorizontalItem[] | string;
    /**
     * Emitted when an item is selected with the MenuHorizontalItem object
     */
    athSelected: EventEmitter<MenuHorizontalItem>;
    selectedMenuHorizontalItemId: string;
    activeMenuHorizontalItemId: string;
    showArrows: boolean;
    isLeftArrowHidden: boolean;
    isRightArrowHidden: boolean;
    el: HTMLElement;
    private hostId;
    private menuHorizontalItems;
    private firstEnabledItemId;
    private lastEnabledItemId;
    private itemGroup;
    private resizeObserver;
    onItemsChange(newValue: MenuHorizontalItem[] | string, oldValue: MenuHorizontalItem[] | string): void;
    componentWillLoad(): void;
    private generateItems;
    private getItemsFromAnySource;
    private getItemsFromImperative;
    private getDOMElements;
    private getItemsFromDOM;
    private detectFirstAndLastEnabledTab;
    private detectSelectedItem;
    componentDidLoad(): void;
    private updateArrowsVisibility;
    disconnectedCallback(): void;
    private handleItemFocus;
    private handleItemClick;
    private handleKeyDown;
    private emitSelectedEvent;
    private scrollItems;
    private getHostClassNames;
    private getMenuHorizontalItemItemClassNames;
    private renderLabel;
    render(): any;
}
