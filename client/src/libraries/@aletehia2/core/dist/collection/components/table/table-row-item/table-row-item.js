import { Host, h } from "@stencil/core";
import { getCellRole, getCellStyles } from "../utils/table.utils";
import { TableColor, TableFrozen } from "../table.model";
export class AthTableRowItem {
    el;
    /** Column width (px, %, auto) */
    cellWidth = 'auto';
    /** If this cell is header of the row */
    isHeader = false;
    /**
     * If this cell contains interactive elements (menus, buttons, links, etc.).
     * When true, row click events will be prevented to avoid conflicts with cell interactions.
     */
    hasInteractivity = false;
    /** If this cell is fixed, created a first or last column fixed */
    frozen = TableFrozen.None;
    /** If true, no shadow will be applied to the frozen cell */
    noFrozenShadow = false;
    /** Cell alignment */
    alignment;
    /** Table size */
    size;
    /** Striped background */
    striped = false;
    /** Background color */
    color = TableColor.Primary;
    /** Marks this cell as an expander control (collapse/expand). Internal use by ath-table-row. */
    expander = false;
    /** Current expanded state (used when expander = true) */
    expanded = false;
    /** Aria-controls value for the expander button (ID of the collapsable content) */
    expanderAriaControls;
    /** Marks this cell as the first data cell of a child row (for indentation) */
    isChild = false;
    getClassNames = () => ({
        'ath-table-row-item': true,
        [`ath-table-row-item--${this.color}`]: !!this.color,
        [`ath-table-row-item--${this.alignment}`]: !!this.alignment,
        [`ath-table-row-item--${this.size}`]: !!this.size,
        [`ath-table-row-item--frozen-${this.frozen}`]: this.frozen !== TableFrozen.None,
        [`ath-table-row-item--${this.striped ? 'striped--' : ''}frozen-${this.frozen}--shadow`]: this.frozen !== TableFrozen.None && this.noFrozenShadow !== true,
        'ath-table-row-item--striped': this.striped,
        'ath-table-row-item--child': this.isChild,
    });
    onExpanderClick = (e) => {
        e.stopPropagation();
        const rowEl = this.el.closest('ath-table-row');
        if (!rowEl)
            return;
        if (!rowEl.hasChildren)
            return;
        rowEl.expanded = !rowEl.expanded;
    };
    render() {
        const rowEl = this.el?.closest('ath-table-row');
        const showButton = this.expander && rowEl && rowEl.hasChildren;
        return (h(Host, { key: '054388d972e82776d2a57a55867457248af15f6e', style: getCellStyles(this.cellWidth), class: this.getClassNames(), role: getCellRole(this.isHeader) }, showButton && (h("button", { key: '720ca0a8ef95d0c050b5b610d0d7e3e303cc0ef5', class: "ath-button_comp", "aria-controls": this.expanderAriaControls, "aria-label": rowEl.expanded ? 'Colapsar fila' : 'Expandir fila', "aria-expanded": String(!!rowEl.expanded), onClick: this.onExpanderClick }, h("ath-collapse-icon", { key: '892daf2c7ce9645e36fac844153f986874c74f7b', expanded: rowEl.expanded }))), this.isChild && h("div", { key: '79862675aa1a434edbf5f3edeecfcd88e2973764', class: "ath-table-row-item__child-spacing" }), h("slot", { key: '7dc7ea3d58ca4087983808289585cc1bcda26ae2' })));
    }
    static get is() { return "ath-table-row-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-row-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-row-item.css"]
        };
    }
    static get properties() {
        return {
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
            "isHeader": {
                "type": "boolean",
                "attribute": "is-header",
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
                    "text": "If this cell is header of the row"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "If this cell contains interactive elements (menus, buttons, links, etc.).\r\nWhen true, row click events will be prevented to avoid conflicts with cell interactions."
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
                    "text": "If this cell is fixed, created a first or last column fixed"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "TableFrozen.None"
            },
            "noFrozenShadow": {
                "type": "boolean",
                "attribute": "no-frozen-shadow",
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
                    "text": "If true, no shadow will be applied to the frozen cell"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Cell alignment"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Table size"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "striped": {
                "type": "boolean",
                "attribute": "striped",
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
                    "text": "Striped background"
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
                    "text": "Background color"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TableColor.Primary"
            },
            "expander": {
                "type": "boolean",
                "attribute": "expander",
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
                    "text": "Marks this cell as an expander control (collapse/expand). Internal use by ath-table-row."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "expanded": {
                "type": "boolean",
                "attribute": "expanded",
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
                    "text": "Current expanded state (used when expander = true)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "expanderAriaControls": {
                "type": "string",
                "attribute": "expander-aria-controls",
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
                    "text": "Aria-controls value for the expander button (ID of the collapsable content)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "isChild": {
                "type": "boolean",
                "attribute": "is-child",
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
                    "text": "Marks this cell as the first data cell of a child row (for indentation)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=table-row-item.js.map
