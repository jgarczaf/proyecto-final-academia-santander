'use strict';

var index = require('./index--hWT2F8k.js');

const AccordionExpands = {
    All: 'all',
    One: 'one',
};

const accordionCss = ":host .ath-accordion{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-accordion-line-row-gap)}";

const AthAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Indica si se pueden abrir todos los elementos al mismo tiempo
     */
    expand = AccordionExpands.All;
    /**
     * Si es true, se muestra el divisor también en el último ítem.
     */
    noLastItemDivider = false;
    /**
     * Indica una etiqueta accesible para el acordeón
     */
    ariaLabel;
    expandedItems = []; // Array de índices de ítems expandidos.
    get el() { return index.getElement(this); }
    handleOpened(event) {
        this.refreshAccordionitems(event.target);
    }
    items = [];
    componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot');
        if (slot) {
            const assignedElements = slot.assignedElements({ flatten: true }).filter(el => el.tagName.toLowerCase() === 'ath-accordion-item');
            this.items = assignedElements;
            this.items.forEach((item, index) => {
                const isLast = index === this.items.length - 1;
                item.noDivider = isLast ? this.noLastItemDivider : false;
            });
        }
    }
    refreshAccordionitems(activeAccordionItem) {
        if (this.expand === AccordionExpands.One) {
            this.closeOtherAccordionItems(activeAccordionItem);
        }
    }
    closeOtherAccordionItems(activeAccordionItem) {
        this.items.forEach(item => {
            if (item !== activeAccordionItem && item.expanded) {
                item.close();
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '7f0ac4e0d7f27556cac9703426430b10033c74c7', role: "region" }, index.h("div", { key: '3f7ffb13fb6af6dc1542280504e59996fe2a5cc9', class: `ath-accordion` }, index.h("slot", { key: '91d19fc07e07ef3f1d1f49c0b389ef6f5704dfd7' }))));
    }
};
AthAccordion.style = accordionCss;

exports.ath_accordion = AthAccordion;
//# sourceMappingURL=ath-accordion.entry.cjs.js.map
