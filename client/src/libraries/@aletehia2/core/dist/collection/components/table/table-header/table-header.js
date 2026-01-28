import { Host, h } from "@stencil/core";
import { TableSelectable, TableColor, TableFrozen } from "../table.model";
import { CheckboxValue } from "../../checkbox/checkbox.model";
export class AthTableHeader {
    el;
    /** Selection mode (none | single | multiple) */
    selectable = TableSelectable.None;
    /** Enable clickable rows with action column */
    clickable = false;
    /** Header color */
    color = TableColor.Primary;
    /** Header size */
    size;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen = TableFrozen.None;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll = false;
    /** Current state of the select all checkbox (false | true | indeterminate) */
    selectAllState = CheckboxValue.False;
    /** Total number of selectable rows (used for determining indeterminate state) */
    totalRows = 0;
    /** Number of currently selected rows (used for determining indeterminate state) */
    selectedRows = 0;
    /** Fired when select all checkbox state changes */
    athSelectAllChange;
    componentDidLoad() {
        // Set default widths if needed
        const items = this.el.querySelectorAll('ath-table-header-item');
        if (items.length) {
            Array.from(items).forEach(item => {
                if (item.cellWidth === 'auto' || item.cellWidth === '') {
                    item.cellWidth = `${100 / items.length}%`;
                }
            });
        }
    }
    handleSelectAllChange = () => {
        let newState;
        let selectAll;
        if (this.selectAllState === CheckboxValue.False || this.selectAllState === CheckboxValue.Indeterminate) {
            newState = CheckboxValue.True;
            selectAll = true;
        }
        else {
            newState = CheckboxValue.False;
            selectAll = false;
        }
        this.athSelectAllChange.emit({ selectAll, state: newState });
    };
    render() {
        return (h(Host, { key: 'f8ecc41ecaffe22bdcf6e7fed00b905a8ab7519b', slot: "header", role: "row" }, this.selectable !== TableSelectable.None && (h("ath-table-header-item", { key: '3e585d976939eed268d963a1e83c6b6eaa80b0f8', "data-ath-selection": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== TableFrozen.Last ? TableFrozen.First : undefined }, this.selectable === TableSelectable.Multiple && !this.noSelectAll ? (h("ath-checkbox", { value: this.selectAllState, ariaLabel: "Seleccionar todas las filas", onAthChange: this.handleSelectAllChange })) : (h("span", { class: "sr-only" }, "Columna de selecci\u00F3n")))), h("slot", { key: '8ce2932e3a00f9bc00ba360fb7f267aca1effab1' }), this.clickable && (h("ath-table-header-item", { key: 'f5122f2101816e03dfb2b7804bae508d380eada0', "data-ath-action": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== TableFrozen.First ? TableFrozen.Last : undefined }, h("span", { key: 'a6290589d75bb094770deb629e95b5fcb92ff1a7', class: "sr-only" }, "Columna de acci\u00F3n")))));
    }
    static get is() { return "ath-table-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-header.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Enable clickable rows with action column"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Header color"
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
                    "text": "Header size"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
            },
            "noSelectAll": {
                "type": "boolean",
                "attribute": "no-select-all",
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
                    "text": "Hides select all checkbox when selectable is multiple"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "selectAllState": {
                "type": "string",
                "attribute": "select-all-state",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxValues",
                    "resolved": "\"false\" | \"indeterminate\" | \"true\"",
                    "references": {
                        "CheckboxValues": {
                            "location": "import",
                            "path": "../../checkbox/checkbox.model",
                            "id": "src/components/checkbox/checkbox.model.ts::CheckboxValues"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current state of the select all checkbox (false | true | indeterminate)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CheckboxValue.False"
            },
            "totalRows": {
                "type": "number",
                "attribute": "total-rows",
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
                    "text": "Total number of selectable rows (used for determining indeterminate state)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "selectedRows": {
                "type": "number",
                "attribute": "selected-rows",
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
                    "text": "Number of currently selected rows (used for determining indeterminate state)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "athSelectAllChange",
                "name": "athSelectAllChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when select all checkbox state changes"
                },
                "complexType": {
                    "original": "TableSelectAllChangeEvent",
                    "resolved": "{ selectAll: boolean; state: CheckboxValues; }",
                    "references": {
                        "TableSelectAllChangeEvent": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableSelectAllChangeEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=table-header.js.map
