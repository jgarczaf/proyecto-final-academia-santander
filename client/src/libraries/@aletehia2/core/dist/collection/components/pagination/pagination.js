import { Host, h } from "@stencil/core";
import { FcPageButton } from "./page-button/fc-page-button";
export class AthPagination {
    BUTTON_WIDTH = 32 + 8; // Suma button + gap
    MOBILE_BREAKPOINT = 768;
    DEFAULT_ITEMS_SELECTOR = [5, 10, 15];
    /**
     * Hide the buttons to navigate to the first and last pages.
     */
    noEndButtons = false;
    /**
     * Hide the buttons to jump to the previous or next pages.
     */
    noJumpButtons = false;
    /**
     * Determines whether the item count message is displayed in the pagination.
     */
    noItemsCount = false;
    /**
     * Determines whether a dropdown is shown to select the number of items per page.
     */
    noItemsSelector = false;
    /**
     * Defines the selectable options for the number of items of the dropdown.
     */
    itemsSelector = '[5, 10, 15]';
    updateItemsSelector() {
        this.itemsSelectorArray = [];
        try {
            const parsedItems = JSON.parse(this.itemsSelector.replace(/'/g, '"'));
            parsedItems.forEach(element => {
                const parsedItem = typeof element === 'string' ? parseInt(element) : element;
                if (!isNaN(parsedItem)) {
                    this.itemsSelectorArray.push(parsedItem);
                }
            });
            if (this.itemsSelectorArray.length === 0) {
                this.itemsSelectorArray = this.DEFAULT_ITEMS_SELECTOR;
            }
        }
        catch (error) {
            console.error('Error parsing itemsSelector:', error);
            this.itemsSelectorArray = this.DEFAULT_ITEMS_SELECTOR;
        }
    }
    itemsSelectorArray = [];
    /**
     * Defines the number of items displayed per page in the pagination.
     */
    itemsPerPage;
    selectedItemsPerPage;
    /**
     * Current active page number in the pagination.
     */
    currentPage = 1;
    currentPageState;
    /**
     * Total number of items over all pages.
     */
    totalItems;
    /**
     * Total number of available pages (calculated internally).
     */
    totalPages = 1;
    /**
     * Determines whether the Pagination is disabled.
     */
    disabled = false;
    /**
     * ARIA label for the pagination component.
     */
    athAriaLabel = 'Paginación de resultados';
    /**
     * Event emitted when the page changes.
     * Emits the new page number as detail.
     */
    athPaginate;
    /**
     * Event emitted when the items per page changes.
     * Emits the new items per page as detail.
     */
    athItemsPerPageChange;
    paginationSize = 5;
    onTotalItemsChange() {
        this.recalculateTotalPages();
    }
    onItemsPerPageChangeWatch() {
        this.recalculateTotalPages();
    }
    onCurrentPageExternalChange() {
        this.ensureCurrentPageInRange();
        this.recalcResponsiveWindow();
    }
    onItemsPerPageExternalChange(newValue) {
        if (newValue !== this.selectedItemsPerPage) {
            this.selectedItemsPerPage = newValue;
            this.recalculateTotalPages();
        }
    }
    isMobileScreen = false;
    onResize() {
        this.isMobileScreen = window.innerWidth < this.MOBILE_BREAKPOINT;
        this.calculatePaginationSize();
    }
    componentWillLoad() {
        // Inicializar states desde props
        this.updateItemsSelector();
        this.selectedItemsPerPage = this.itemsPerPage ?? this.itemsSelectorArray[0] ?? 5;
        this.currentPageState = this.currentPage;
        if (typeof window !== 'undefined') {
            this.isMobileScreen = window.innerWidth < this.MOBILE_BREAKPOINT;
        }
    }
    componentDidLoad() {
        this.calculatePaginationSize();
        this.recalculateTotalPages(); // inicial
        this.ensureCurrentPageInRange();
    }
    recalcResponsiveWindow() {
        if (typeof window !== 'undefined' && window.innerWidth < this.MOBILE_BREAKPOINT) {
            this.calculatePaginationSize();
        }
    }
    recalculateTotalPages() {
        if (this.totalItems != null && this.selectedItemsPerPage) {
            const computed = Math.max(1, Math.ceil(this.totalItems / this.selectedItemsPerPage));
            if (computed !== this.totalPages) {
                this.totalPages = computed;
            }
            this.ensureCurrentPageInRange();
            this.recalcResponsiveWindow();
        }
    }
    ensureCurrentPageInRange() {
        if (this.totalPages == null || this.totalPages < 1)
            return;
        if (this.currentPageState > this.totalPages) {
            this.currentPageState = this.totalPages;
        }
        else if (this.currentPageState < 1) {
            this.currentPageState = 1;
        }
    }
    calculatePaginationSize() {
        const containerWidth = window.innerWidth;
        let totalButtons = 4; // * Botones fijos: anterior, siguiente y dos paginas (mínimo)
        const currentBlockStart = this.getBlockStart(this.currentPageState, this.paginationSize);
        const lastBlockStart = this.getBlockStart(this.totalPages, this.paginationSize);
        if (currentBlockStart === 1 && lastBlockStart !== 1) {
            totalButtons += 1; // * Añade jump button derecho
        }
        else if (currentBlockStart === lastBlockStart && lastBlockStart !== 1) {
            totalButtons += 1; // * Añade jump button izquierdo
        }
        else if (currentBlockStart !== 1 && currentBlockStart !== lastBlockStart) {
            totalButtons += 2; // * Añade ambos jump buttons
        }
        const availableWidth = containerWidth - totalButtons * this.BUTTON_WIDTH;
        const maxPagesByWidth = Math.max(Math.floor(availableWidth / this.BUTTON_WIDTH), 2);
        // Páginas visibles entre 2 y 5 y no más que totalPages
        this.paginationSize = Math.min(Math.max(2, Math.min(maxPagesByWidth, 5)), this.totalPages);
    }
    onAthPaginate(newPage) {
        if (newPage !== this.currentPageState) {
            this.currentPageState = newPage;
            this.athPaginate.emit(newPage);
        }
    }
    onAthItemsPerPageChange(newItemsPerPage) {
        if (newItemsPerPage !== this.selectedItemsPerPage) {
            this.selectedItemsPerPage = newItemsPerPage;
            this.recalculateTotalPages();
            // Solo emitir cambio de página si realmente cambia
            if (this.currentPageState !== 1) {
                this.currentPageState = 1;
                this.athPaginate.emit(1);
            }
            this.athItemsPerPageChange.emit(newItemsPerPage);
        }
    }
    getBlockStart(currentPage, paginationSize) {
        return Math.floor((currentPage - 1) / paginationSize) * paginationSize + 1;
    }
    getPaginationBlock(blockStart, totalPages, paginationSize) {
        const end = Math.min(blockStart + paginationSize - 1, totalPages);
        return Array.from({ length: end - blockStart + 1 }, (_, i) => blockStart + i);
    }
    pageButtonRefs = {};
    focusCurrentPageButton() {
        const btn = this.pageButtonRefs[this.currentPageState];
        if (btn?.focus) {
            btn.focus();
        }
    }
    onPrevBlock() {
        const blockStart = this.getBlockStart(this.currentPageState, this.paginationSize);
        if (blockStart > 1) {
            const newPage = blockStart - this.paginationSize;
            this.onAthPaginate(newPage);
            setTimeout(() => this.focusCurrentPageButton(), 0);
        }
    }
    onNextBlock() {
        const blockStart = this.getBlockStart(this.currentPageState, this.paginationSize);
        if (blockStart + this.paginationSize <= this.totalPages) {
            const newPage = blockStart + this.paginationSize;
            this.onAthPaginate(newPage);
            setTimeout(() => this.focusCurrentPageButton(), 0);
        }
    }
    generateNavigationButtons() {
        return (h("div", { class: "ath-pagination-page-control" }, h("ul", { class: "ath-pagination-page-control-list" }, !this.noEndButtons && (h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "first", clear: true, onAthClick: () => this.onAthPaginate(1), disabled: this.disabled || this.currentPageState === 1, "aria-label": "Primera p\u00E1gina" }))), h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "chevron_left", clear: true, onAthClick: () => this.onAthPaginate(this.currentPageState - 1), disabled: this.disabled || this.currentPageState <= 1, "aria-label": "Anterior" })), !this.noJumpButtons && this.currentPageState > 1 && this.getBlockStart(this.currentPageState, this.paginationSize) > 1 && (h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "menu_horizontal", clear: true, onAthClick: () => this.onPrevBlock(), disabled: this.disabled, "aria-label": "Bloque anterior" }))), this.getPaginationBlock(this.getBlockStart(this.currentPageState, this.paginationSize), this.totalPages, this.paginationSize).map(page => (h("li", null, h(FcPageButton, { ...this.getPageButtonProps(page), pageButtonRef: (el) => {
                if (el)
                    this.pageButtonRefs[page] = el;
            }, onClick: () => this.onAthPaginate(page) })))), !this.noJumpButtons &&
            this.currentPageState < this.totalPages &&
            this.getBlockStart(this.currentPageState, this.paginationSize) + this.paginationSize <= this.totalPages && (h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "menu_horizontal", clear: true, onAthClick: () => this.onNextBlock(), disabled: this.disabled, "aria-label": "Bloque siguiente" }))), h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "chevron_right", clear: true, onAthClick: () => this.onAthPaginate(this.currentPageState + 1), disabled: this.disabled || this.currentPageState === this.totalPages, "aria-label": "Siguiente" })), !this.noEndButtons && (h("li", null, h("ath-button", { size: "sm", color: "secondary", "icon-position": "icon-only", icon: "last", clear: true, onAthClick: () => this.onAthPaginate(this.totalPages), disabled: this.disabled || this.currentPageState === this.totalPages, "aria-label": "\u00DAltima p\u00E1gina" }))))));
    }
    generateItemsCount() {
        if (!this.noItemsCount && !this.isMobileScreen) {
            return (h("div", { class: "ath-pagination-items-count" }, h("span", null, (this.currentPageState - 1) * this.selectedItemsPerPage + 1, " - ", Math.min(this.currentPageState * this.selectedItemsPerPage, this.totalItems), " de ", this.totalItems, ' ', "elementos")));
        }
    }
    generateItemsSelector() {
        if (!this.noItemsSelector && !this.isMobileScreen) {
            return (h("div", { class: "ath-pagination-items-selector" }, h("ath-dropdown", { onAthChange: e => this.onItemsPerPageChange(e.detail), disabled: this.disabled }, this.itemsSelectorArray.map(items => (h("ath-dropdown-option", { text: `${items} elementos por página`, value: items.toString(), selected: items === this.selectedItemsPerPage }))))));
        }
    }
    getHostAttributes = () => {
        return {
            'aria-label': this.athAriaLabel,
        };
    };
    generateStructure() {
        return (h("nav", { class: "ath-pagination", ...this.getHostAttributes() }, this.generateNavigationButtons(), this.generateItemsCount(), this.generateItemsSelector()));
    }
    getPageButtonProps = (page) => ({
        selected: this.currentPageState === page && !this.disabled,
        disabled: this.disabled,
        pageNumber: page,
    });
    onItemsPerPageChange(e) {
        const selectedItems = e;
        if (selectedItems && selectedItems.length > 0) {
            const newItemsPerPage = parseInt(selectedItems[0].value, 10);
            if (newItemsPerPage && newItemsPerPage !== this.selectedItemsPerPage) {
                this.onAthItemsPerPageChange(newItemsPerPage);
            }
        }
    }
    render() {
        return h(Host, { key: 'bfd95602e0e7278c80591b6fc9fd9a0a2da24d3f' }, this.generateStructure());
    }
    static get is() { return "ath-pagination"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "noEndButtons": {
                "type": "boolean",
                "attribute": "no-end-buttons",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hide the buttons to navigate to the first and last pages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "noJumpButtons": {
                "type": "boolean",
                "attribute": "no-jump-buttons",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hide the buttons to jump to the previous or next pages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "noItemsCount": {
                "type": "boolean",
                "attribute": "no-items-count",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines whether the item count message is displayed in the pagination."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "noItemsSelector": {
                "type": "boolean",
                "attribute": "no-items-selector",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines whether a dropdown is shown to select the number of items per page."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "itemsSelector": {
                "type": "string",
                "attribute": "items-selector",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the selectable options for the number of items of the dropdown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'[5, 10, 15]'"
            },
            "itemsPerPage": {
                "type": "number",
                "attribute": "items-per-page",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the number of items displayed per page in the pagination."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current active page number in the pagination."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "1"
            },
            "totalItems": {
                "type": "number",
                "attribute": "total-items",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of items over all pages."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines whether the Pagination is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "athAriaLabel": {
                "type": "string",
                "attribute": "ath-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ARIA label for the pagination component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Paginaci\u00F3n de resultados'"
            }
        };
    }
    static get states() {
        return {
            "itemsSelectorArray": {},
            "selectedItemsPerPage": {},
            "currentPageState": {},
            "paginationSize": {},
            "isMobileScreen": {}
        };
    }
    static get events() {
        return [{
                "method": "athPaginate",
                "name": "athPaginate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the page changes.\r\nEmits the new page number as detail."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "athItemsPerPageChange",
                "name": "athItemsPerPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the items per page changes.\r\nEmits the new items per page as detail."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "itemsSelector",
                "methodName": "updateItemsSelector"
            }, {
                "propName": "totalItems",
                "methodName": "onTotalItemsChange"
            }, {
                "propName": "selectedItemsPerPage",
                "methodName": "onItemsPerPageChangeWatch"
            }, {
                "propName": "currentPageState",
                "methodName": "onCurrentPageExternalChange"
            }, {
                "propName": "itemsPerPage",
                "methodName": "onItemsPerPageExternalChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=pagination.js.map
