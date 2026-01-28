'use strict';

var index = require('./index--hWT2F8k.js');
var table_utils = require('./table.utils-BobB9ZU6.js');
var table_model = require('./table.model-p0DUkP1G.js');

const tableHeaderItemCss = ":host{display:flex;align-content:center;flex-wrap:wrap;box-sizing:border-box;color:var(--ath-color-table-col-header-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-comp-md);font-weight:var(--ath-font-weight-medium);line-height:var(--ath-font-line-height-comp-md);padding:var(--padding-y) var(--ath-spacing-table-col-header-padding-x)}:host(:first-child){border-top-left-radius:var(--ath-border-radius-table-default)}:host(:last-child){border-top-right-radius:var(--ath-border-radius-table-default)}:host(.ath-table-header-item--left){text-align:left;justify-content:flex-start}:host(.ath-table-header-item--center){text-align:center;justify-content:center}:host(.ath-table-header-item--right){text-align:right;justify-content:flex-end}:host(.ath-table-header-item--primary){background:var(--ath-color-table-col-header-bg-primary)}:host(.ath-table-header-item--secondary){background:var(--ath-color-table-col-header-bg-secondary)}:host(.ath-table-header-item--frozen-first){position:sticky;left:0}:host(.ath-table-header-item--frozen-last){position:sticky;right:0}:host(.ath-table-header-item--lg){--padding-y:var(--ath-spacing-table-col-header-padding-y-lg)}:host(.ath-table-header-item--md){--padding-y:var(--ath-spacing-table-col-header-padding-y-md)}:host(.ath-table-header-item--sm){--padding-y:var(--ath-spacing-table-col-header-padding-y-sm)}";

const AthTableHeaderItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Column alignment */
    alignment;
    /** Item color */
    color = table_model.TableColor.Primary;
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
        return (index.h(index.Host, { key: 'd28a3de664f7ba97f95487161d8ef86c7a3f2a07', style: table_utils.getCellStyles(this.cellWidth), class: this.getHostClassNames(), ...this.getAttributes() }, index.h("slot", { key: '64a611c2024c6614135a89d19fcc5d2a24df5988' })));
    }
};
AthTableHeaderItem.style = tableHeaderItemCss;

exports.ath_table_header_item = AthTableHeaderItem;
//# sourceMappingURL=ath-table-header-item.entry.cjs.js.map
