import { Host, h } from "@stencil/core";
import { TableSelectable, TableStriping, TableColor, TableFrozen, } from "../table.model";
import { IconSize } from "../../../utils/helper/index";
export class AthTableRow {
    el;
    /** Current selection state */
    selected = false;
    /** Apply zebra striping */
    striped = TableStriping.None;
    /** Selection mode (none | single | multiple) */
    selectable = TableSelectable.None;
    /** Enable clickable functionality */
    clickable = false;
    /** Aria label of row click button */
    clickableAriaLabel = 'Navegar';
    /** Row color */
    color = TableColor.Primary;
    /** Row size */
    size;
    /** Group name for radios in single mode */
    selectionGroupName;
    /** Optional row value to be included in selection events */
    value;
    /** Unique id for this row */
    rowId;
    /** Optional parent row id if this row is a child */
    parentId;
    /** Whether this row has children */
    hasChildren = false;
    /** Reserve space for expander column even if this row has no children. Internal use by ath-table */
    reserveExpander = false;
    /** Reserve space for clickable column. Internal use by ath-table */
    reserveClickable = false;
    /** Controls the expanded state for rows that have children */
    expanded = false;
    /** Indicates that this is the last visual row (no border). Internal use by ath-table */
    last = false;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen = TableFrozen.None;
    /** Emits when this row selection changes */
    athRowSelectionChange;
    /** Emits when this clickable row is clicked */
    athRowClick;
    handleZebraChange() {
        this.updateZebraClasses();
    }
    handleSelectedChanged() {
        this.syncControlsWithSelected();
    }
    handleExpandedChanged() {
        this.applyExpanderToFirstCell();
        this.emitExpansionEvents();
    }
    handleHierarchyFlagsChanged() {
        this.applyExpanderToFirstCell();
    }
    handlePseudoFocusKeyDown = (ev) => {
        if (this.clickable && ['Enter', 'Space'].includes(ev.code)) {
            ev.preventDefault();
            ev.stopPropagation();
            this.onActionClick();
        }
    };
    updateZebraClasses() {
        // Get index among siblings
        const parent = this.el.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children).filter(el => el.tagName.toLowerCase() === 'ath-table-row');
            const index = siblings.indexOf(this.el);
            const isEven = index % 2 === 0;
            const slottedCells = Array.from(this.el.querySelectorAll('ath-table-row-item'));
            const shadowCells = Array.from(this.el.shadowRoot?.querySelectorAll('ath-table-row-item') || []);
            const cells = [...shadowCells, ...slottedCells];
            if (this.striped === TableStriping.Rows) {
                cells.forEach(cell => {
                    cell.striped = isEven;
                });
            }
            else if (this.striped === TableStriping.Columns) {
                cells.forEach((cell, cellIndex) => {
                    const isOddCell = cellIndex % 2 !== 0;
                    cell.striped = isOddCell;
                });
            }
            else {
                cells.forEach(cell => {
                    cell.striped = false;
                });
            }
        }
    }
    componentDidRender() {
        this.applyExpanderToFirstCell();
        this.updateZebraClasses();
    }
    componentDidLoad() {
        this.updateZebraClasses();
        this.syncControlsWithSelected();
    }
    radioEl;
    checkboxEl;
    onRadioChange = (e) => {
        // ath-radio-button emits { checked, value }
        const detail = e.detail;
        if (detail && typeof detail.checked === 'boolean') {
            this.selected = !!detail.checked;
            this.athRowSelectionChange.emit({ selected: this.selected });
        }
    };
    onCheckboxChange = (e) => {
        // ath-checkbox emits { value: 'true' | 'false' }
        const detail = e.detail;
        const isTrue = detail && detail.value === 'true';
        this.selected = !!isTrue;
        this.athRowSelectionChange.emit({ selected: this.selected });
    };
    onActionClick = () => {
        this.athRowClick.emit({
            rowValue: this.value,
            rowId: this.rowId,
        });
    };
    syncControlsWithSelected() {
        if (this.selectable === TableSelectable.Single && this.radioEl) {
            if (this.selected) {
                this.radioEl.checked = true;
            }
            else if (typeof this.radioEl.unCheck === 'function') {
                this.radioEl.unCheck();
            }
            else {
                this.radioEl.checked = false;
            }
        }
        if (this.selectable === TableSelectable.Multiple && this.checkboxEl) {
            this.checkboxEl.value = this.selected ? 'true' : 'false';
        }
    }
    applyExpanderToFirstCell() {
        // Find first data cell (exclude selection cell)
        const cells = Array.from(this.el.querySelectorAll('ath-table-row-item'));
        if (!cells.length)
            return;
        const dataCell = cells.find(c => !c.hasAttribute('data-ath-selection')) || cells[0];
        if (!dataCell)
            return;
        const needsExpander = this.hasChildren || this.reserveExpander;
        if (!needsExpander) {
            dataCell.expander = false;
            return;
        }
        dataCell.expander = true;
        dataCell.expanded = this.expanded;
        dataCell.expanderAriaControls = this.rowId;
        dataCell.isChild = !!this.parentId;
    }
    emitExpansionEvents() {
        if (this.rowId) {
            const ev = new CustomEvent('athToggleCollapse', { detail: this.rowId, bubbles: true });
            window.dispatchEvent(ev);
        }
    }
    onSlotClick($event) {
        if (!this.clickable)
            return;
        // Prevent clicks on interactive elements inside the row from triggering the row click
        const path = $event.composedPath();
        const clickedCell = path.find(el => el.tagName && el.tagName.toLowerCase() === 'ath-table-row-item');
        if (clickedCell && clickedCell.hasInteractivity) {
            return;
        }
        this.onActionClick();
    }
    getAttributes = () => ({
        role: 'row',
    });
    getHostClassNames = () => ({
        'ath-table-row--last': this.last,
        'ath-table-row--clickable': this.clickable,
    });
    render() {
        return (h(Host, { key: 'b6ac0e12940d086575446f7f3ec6af8ed8a7ebb6', ...this.getAttributes(), class: this.getHostClassNames() }, this.clickable && (h("div", { key: '1b90b635aea863bd64b2ed21e44755c38e53f1ae', class: "ath-table-row__focus", tabIndex: 0, "aria-label": this.clickableAriaLabel, onKeyDown: this.handlePseudoFocusKeyDown, onClick: this.onActionClick })), this.selectable !== TableSelectable.None && (h("ath-table-row-item", { key: '619baec1abead3af8cf40ceff2381efcf027a4d8', "data-ath-selection": true, alignment: "center", cellWidth: "64px", frozen: this.frozen, noFrozenShadow: true, color: this.color, size: this.size }, this.selectable === TableSelectable.Single ? (h("ath-radio-button", { ref: el => (this.radioEl = el), name: this.selectionGroupName, ariaLabel: "Selecciona esta fila", checked: this.selected, onAthChange: this.onRadioChange })) : this.selectable === TableSelectable.Multiple ? (h("ath-checkbox", { ref: el => (this.checkboxEl = el), ariaLabel: "Selecciona esta fila", value: this.selected ? 'true' : 'false', onAthChange: this.onCheckboxChange })) : null)), !this.clickable ? (h("slot", null)) : (h("div", { class: "ath-table-row__wrapper", onClick: e => this.onSlotClick(e) }, h("slot", null))), this.reserveClickable && (h("ath-table-row-item", { key: '907244865a279350b647d8862a6a050453a6e486', "data-ath-action": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size }, this.clickable && h("ath-icon", { key: 'a7fe926c0cbe661289e27a4f4112e5585e517bde', icon: "arrow_right", color: "default", size: IconSize.Medium, title: this.clickableAriaLabel, onClick: () => this.onActionClick() })))));
    }
    static get is() { return "ath-table-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-row.css"]
        };
    }
    static get properties() {
        return {
            "selected": {
                "type": "boolean",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current selection state"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "striped": {
                "type": "string",
                "attribute": "striped",
                "mutable": false,
                "complexType": {
                    "original": "TableStripingType",
                    "resolved": "\"columns\" | \"none\" | \"rows\"",
                    "references": {
                        "TableStripingType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableStripingType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Apply zebra striping"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableStriping.None"
            },
            "selectable": {
                "type": "string",
                "attribute": "selectable",
                "mutable": false,
                "complexType": {
                    "original": "TableSelectableType",
                    "resolved": "\"multiple\" | \"none\" | \"single\"",
                    "references": {
                        "TableSelectableType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableSelectableType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selection mode (none | single | multiple)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableSelectable.None"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "Enable clickable functionality"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "clickableAriaLabel": {
                "type": "string",
                "attribute": "clickable-aria-label",
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
                    "text": "Aria label of row click button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Navegar'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "TableColorType",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "TableColorType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableColorType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Row color"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableColor.Primary"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "TableSizeType",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "TableSizeType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Row size"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "selectionGroupName": {
                "type": "string",
                "attribute": "selection-group-name",
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
                    "text": "Group name for radios in single mode"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional row value to be included in selection events"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "rowId": {
                "type": "string",
                "attribute": "row-id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Unique id for this row"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "parentId": {
                "type": "string",
                "attribute": "parent-id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional parent row id if this row is a child"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "hasChildren": {
                "type": "boolean",
                "attribute": "has-children",
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
                    "text": "Whether this row has children"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "reserveExpander": {
                "type": "boolean",
                "attribute": "reserve-expander",
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
                    "text": "Reserve space for expander column even if this row has no children. Internal use by ath-table"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "reserveClickable": {
                "type": "boolean",
                "attribute": "reserve-clickable",
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
                    "text": "Reserve space for clickable column. Internal use by ath-table"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "expanded": {
                "type": "boolean",
                "attribute": "expanded",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls the expanded state for rows that have children"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "last": {
                "type": "boolean",
                "attribute": "last",
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
                    "text": "Indicates that this is the last visual row (no border). Internal use by ath-table"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "frozen": {
                "type": "string",
                "attribute": "frozen",
                "mutable": false,
                "complexType": {
                    "original": "TableFrozenType",
                    "resolved": "\"first\" | \"last\" | \"none\"",
                    "references": {
                        "TableFrozenType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableFrozenType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If the row has a fixed column, specify if it's the first or last column"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableFrozen.None"
            }
        };
    }
    static get events() {
        return [{
                "method": "athRowSelectionChange",
                "name": "athRowSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when this row selection changes"
                },
                "complexType": {
                    "original": "TableRowSelectionChangeEvent",
                    "resolved": "{ selected: boolean; }",
                    "references": {
                        "TableRowSelectionChangeEvent": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableRowSelectionChangeEvent"
                        }
                    }
                }
            }, {
                "method": "athRowClick",
                "name": "athRowClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when this clickable row is clicked"
                },
                "complexType": {
                    "original": "TableRowClickEvent",
                    "resolved": "{ rowValue: any; rowId?: string; }",
                    "references": {
                        "TableRowClickEvent": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableRowClickEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "striped",
                "methodName": "handleZebraChange"
            }, {
                "propName": "selected",
                "methodName": "handleSelectedChanged"
            }, {
                "propName": "expanded",
                "methodName": "handleExpandedChanged"
            }, {
                "propName": "hasChildren",
                "methodName": "handleHierarchyFlagsChanged"
            }, {
                "propName": "reserveExpander",
                "methodName": "handleHierarchyFlagsChanged"
            }];
    }
}
//# sourceMappingURL=table-row.js.map
