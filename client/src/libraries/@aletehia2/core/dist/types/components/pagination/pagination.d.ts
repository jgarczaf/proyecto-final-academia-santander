import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class AthPagination implements ComponentInterface {
    private readonly BUTTON_WIDTH;
    private readonly MOBILE_BREAKPOINT;
    private readonly DEFAULT_ITEMS_SELECTOR;
    /**
     * Hide the buttons to navigate to the first and last pages.
     */
    noEndButtons: boolean;
    /**
     * Hide the buttons to jump to the previous or next pages.
     */
    noJumpButtons: boolean;
    /**
     * Determines whether the item count message is displayed in the pagination.
     */
    noItemsCount: boolean;
    /**
     * Determines whether a dropdown is shown to select the number of items per page.
     */
    noItemsSelector: boolean;
    /**
     * Defines the selectable options for the number of items of the dropdown.
     */
    itemsSelector: string;
    updateItemsSelector(): void;
    itemsSelectorArray: number[];
    /**
     * Defines the number of items displayed per page in the pagination.
     */
    itemsPerPage: number;
    selectedItemsPerPage: number;
    /**
     * Current active page number in the pagination.
     */
    currentPage: number;
    currentPageState: number;
    /**
     * Total number of items over all pages.
     */
    totalItems: number;
    /**
     * Total number of available pages (calculated internally).
     */
    private totalPages;
    /**
     * Determines whether the Pagination is disabled.
     */
    disabled: boolean;
    /**
     * ARIA label for the pagination component.
     */
    athAriaLabel: string;
    /**
     * Event emitted when the page changes.
     * Emits the new page number as detail.
     */
    athPaginate: EventEmitter<number>;
    /**
     * Event emitted when the items per page changes.
     * Emits the new items per page as detail.
     */
    athItemsPerPageChange: EventEmitter<number>;
    paginationSize: number;
    onTotalItemsChange(): void;
    onItemsPerPageChangeWatch(): void;
    onCurrentPageExternalChange(): void;
    onItemsPerPageExternalChange(newValue: number): void;
    isMobileScreen: boolean;
    onResize(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private recalcResponsiveWindow;
    private recalculateTotalPages;
    private ensureCurrentPageInRange;
    private calculatePaginationSize;
    private onAthPaginate;
    private onAthItemsPerPageChange;
    private getBlockStart;
    private getPaginationBlock;
    private pageButtonRefs;
    private focusCurrentPageButton;
    private onPrevBlock;
    private onNextBlock;
    private generateNavigationButtons;
    private generateItemsCount;
    private generateItemsSelector;
    private getHostAttributes;
    private generateStructure;
    private getPageButtonProps;
    private onItemsPerPageChange;
    render(): any;
}
