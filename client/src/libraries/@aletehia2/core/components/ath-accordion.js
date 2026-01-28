import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';

const AccordionExpands = {
    All: 'all',
    One: 'one',
};

const accordionCss = ":host .ath-accordion{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-accordion-line-row-gap)}";

const AthAccordion$1 = /*@__PURE__*/ proxyCustomElement(class AthAccordion extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
    get el() { return this; }
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
        return (h(Host, { key: '7f0ac4e0d7f27556cac9703426430b10033c74c7', role: "region" }, h("div", { key: '3f7ffb13fb6af6dc1542280504e59996fe2a5cc9', class: `ath-accordion` }, h("slot", { key: '91d19fc07e07ef3f1d1f49c0b389ef6f5704dfd7' }))));
    }
    static get style() { return accordionCss; }
}, [257, "ath-accordion", {
        "expand": [513],
        "noLastItemDivider": [4, "no-last-item-divider"],
        "ariaLabel": [1, "aria-label"],
        "expandedItems": [32]
    }, [[0, "opened", "handleOpened"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthAccordion$1);
            }
            break;
    } });
}

const AthAccordion = AthAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { AthAccordion, defineCustomElement };
//# sourceMappingURL=ath-accordion.js.map

//# sourceMappingURL=ath-accordion.js.map