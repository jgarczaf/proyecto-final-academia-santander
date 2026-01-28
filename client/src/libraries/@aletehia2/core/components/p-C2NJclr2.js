import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { g as getCellStyles } from './p-Be7uKW1F.js';
import { a as TableColor } from './p-DH9nlGTF.js';

const tableHeaderItemCss = ":host{display:flex;align-content:center;flex-wrap:wrap;box-sizing:border-box;color:var(--ath-color-table-col-header-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-comp-md);font-weight:var(--ath-font-weight-medium);line-height:var(--ath-font-line-height-comp-md);padding:var(--padding-y) var(--ath-spacing-table-col-header-padding-x)}:host(:first-child){border-top-left-radius:var(--ath-border-radius-table-default)}:host(:last-child){border-top-right-radius:var(--ath-border-radius-table-default)}:host(.ath-table-header-item--left){text-align:left;justify-content:flex-start}:host(.ath-table-header-item--center){text-align:center;justify-content:center}:host(.ath-table-header-item--right){text-align:right;justify-content:flex-end}:host(.ath-table-header-item--primary){background:var(--ath-color-table-col-header-bg-primary)}:host(.ath-table-header-item--secondary){background:var(--ath-color-table-col-header-bg-secondary)}:host(.ath-table-header-item--frozen-first){position:sticky;left:0}:host(.ath-table-header-item--frozen-last){position:sticky;right:0}:host(.ath-table-header-item--lg){--padding-y:var(--ath-spacing-table-col-header-padding-y-lg)}:host(.ath-table-header-item--md){--padding-y:var(--ath-spacing-table-col-header-padding-y-md)}:host(.ath-table-header-item--sm){--padding-y:var(--ath-spacing-table-col-header-padding-y-sm)}";

const AthTableHeaderItem = /*@__PURE__*/ proxyCustomElement(class AthTableHeaderItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
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
    static get style() { return tableHeaderItemCss; }
}, [257, "ath-table-header-item", {
        "alignment": [1],
        "color": [1],
        "cellWidth": [1, "cell-width"],
        "frozen": [1],
        "hasInteractivity": [4, "has-interactivity"],
        "size": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-table-header-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-table-header-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthTableHeaderItem);
            }
            break;
    } });
}

export { AthTableHeaderItem as A, defineCustomElement as d };
//# sourceMappingURL=p-C2NJclr2.js.map

//# sourceMappingURL=p-C2NJclr2.js.map