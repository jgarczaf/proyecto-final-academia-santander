import { h, Host } from "@stencil/core";
import { AccordionExpands } from "./accordion.model";
export class AthAccordion {
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
    el; // Referencia al elemento base del componente.
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
    static get is() { return "ath-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordion.css"]
        };
    }
    static get properties() {
        return {
            "expand": {
                "type": "string",
                "attribute": "expand",
                "mutable": false,
                "complexType": {
                    "original": "AccordionExpand",
                    "resolved": "\"all\" | \"one\"",
                    "references": {
                        "AccordionExpand": {
                            "location": "import",
                            "path": "./accordion.model",
                            "id": "src/components/accordion/accordion.model.ts::AccordionExpand"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indica si se pueden abrir todos los elementos al mismo tiempo"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "AccordionExpands.All"
            },
            "noLastItemDivider": {
                "type": "boolean",
                "attribute": "no-last-item-divider",
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
                    "text": "Si es true, se muestra el divisor tambi\u00E9n en el \u00FAltimo \u00EDtem."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indica una etiqueta accesible para el acorde\u00F3n"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "expandedItems": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "opened",
                "method": "handleOpened",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=accordion.js.map
