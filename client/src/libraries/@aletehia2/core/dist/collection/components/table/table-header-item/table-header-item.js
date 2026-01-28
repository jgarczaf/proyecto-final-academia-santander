import { Host, h } from "@stencil/core";
import { getCellStyles } from "../utils/table.utils";
import { TableColor } from "../table.model";
export class AthTableHeaderItem {
    /** Column alignment */
    alignment;
    /** Item color */
    color = TableColor.Primary;
    /** Column width (px, %, auto) */
    cellWidth = 'auto';
    /** If this column is fixed */
    frozen;
    /**
     * If this column contains interactive elements (menus, buttons, links, etc.).
     * This property will be passed down to all row items in the same column.
     */
    hasInteractivity = false;
    /** Item size */
    size;
    getHostClassNames = () => ({
        'ath-table-header-item': true,
        [`ath-table-header-item--${this.alignment}`]: !!this.alignment,
        [`ath-table-header-item--${this.color}`]: !!this.color,
        [`ath-table-header-item--frozen-${this.frozen}`]: !!this.frozen,
        [`ath-table-header-item--${this.size}`]: !!this.size,
    });
    getAttributes = () => ({
        role: 'columnheader',
    });
    render() {
        return (h(Host, { key: 'd28a3de664f7ba97f95487161d8ef86c7a3f2a07', style: getCellStyles(this.cellWidth), class: this.getHostClassNames(), ...this.getAttributes() }, h("slot", { key: '64a611c2024c6614135a89d19fcc5d2a24df5988' })));
    }
    static get is() { return "ath-table-header-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-header-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-header-item.css"]
        };
    }
    static get properties() {
        return {
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "TableAlignmentType",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "TableAlignmentType": {
                            "location": "import",
                            "path": "../table.model",
                            "id": "src/components/table/table.model.ts::TableAlignmentType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column alignment"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Item color"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableColor.Primary"
            },
            "cellWidth": {
                "type": "string",
                "attribute": "cell-width",
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
                    "text": "Column width (px, %, auto)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
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
                    "text": "If this column is fixed"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasInteractivity": {
                "type": "boolean",
                "attribute": "has-interactivity",
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
                    "text": "If this column contains interactive elements (menus, buttons, links, etc.).\r\nThis property will be passed down to all row items in the same column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Item size"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=table-header-item.js.map
