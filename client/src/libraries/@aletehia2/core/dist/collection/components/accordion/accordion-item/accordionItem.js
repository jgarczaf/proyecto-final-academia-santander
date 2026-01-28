import { h, Host } from "@stencil/core";
let accordionItemsequence = 0;
/**
 * @slot default - Contenido del elemento de acordeón
 * @slot header-detail - Contenido a mostrar dentro de la cabecera
 */
export class AthAccordionItem {
    hostId = `item-${++accordionItemsequence}`;
    panelId = `panel-${this.hostId}`;
    /**
     * Title of heading item
     */
    headingText;
    /**
     * Descriprion of heading item
     */
    description;
    /**
     * The accordion item is disabled
     */
    disabled = false;
    /**
     * The accordion item is expanded
     */
    expanded = false;
    /**
     * The accordion item aria-level
     */
    headingLevel = '2';
    /**
     * The accordion item divider bottom
     */
    noDivider = false;
    /**
     * The code of the accordion item's icon
     */
    icon;
    handleDisabled(expanded) {
        if (expanded) {
            this.opened.emit();
        }
    }
    async close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    opened;
    handleToggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.handleToggle();
        }
    }
    getParentClassNames = () => ({
        'ath-accordion-item': true,
        'ath-accordion-item-divider': !this.noDivider,
    });
    getPanelClassNames = () => ({
        'ath-accordion-item--panel': true,
        'expanded': this.expanded && !this.disabled,
    });
    getHeaderClassNames = () => ({
        'ath-accordion-item--header': true,
        'disabled': this.disabled,
    });
    getChevronClasses = () => ({
        'ath-accordion-item--chevron': true,
        [`ath-accordion-item--chevron-rotate`]: !!this.expanded,
    });
    async componentWillLoad() {
        if (this.disabled) {
            this.expanded = false;
        }
    }
    render() {
        return (h(Host, { key: '68046b3579d868429680fa8b88d95889cab97ff1' }, h("div", { key: '2f4945ca774128a3bb1bb75ef858f59cfdf6a92c', class: this.getParentClassNames() }, h("div", { key: 'a37518c1536834a9b98a481023af4b1eb450d1d9', role: "button", "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.panelId, "aria-disabled": this.disabled ? 'true' : 'false', tabindex: this.disabled ? '-1' : '0', onClick: () => this.handleToggle(), onKeyDown: event => this.handleKeydown(event), class: this.getHeaderClassNames() }, h("span", { key: 'b1bd2a4986485e331b417106f0c11f80aaea8d75', id: this.hostId, class: `ath-accordion-item--header__button`, role: "heading", "aria-level": this.headingLevel }, h("div", { key: 'e63c41426a534ac2b89f99a2196a2cd887758f7f', class: "ath-accordion-item--header__wrapper" }, h("div", { key: 'd432b26354dab48dc59bdc5579892b995ba88d6d', class: "ath-accordion-item--header__content" }, this.icon && h("ath-icon", { key: '9c972ccb46b96d4a0cba41c4aabdec7527cf874b', icon: this.icon }), h("div", { key: 'e1a9d0f175342206802fa40e217d311d1f78f221', class: "ath-accordion-item--header__text" }, this.headingText && h("span", { key: '6df9e776aad70740bd3c16a692957ef3216d4e3e', class: "ath-accordion-item--header__title" }, this.headingText), this.description && h("span", { key: 'cd6684b9c5a1dc904dfb676510b8335654cb9a80', class: "ath-accordion-item--header__subtitle" }, this.description))), h("slot", { key: '2be30b5d415d7b5dbbb2d796c2fe6e7aff81aca0', name: "header-detail" }), h("div", { key: '87c03dc120f04234c288840d8c2c94e1b22198c3', class: this.getChevronClasses() }, h("ath-icon", { key: '8de9485de25b812b3ac64fd360dfafc8db61b62b', icon: "chevron_down" }))))), h("div", { key: 'a59a2d0803d4020e6f731e0977dd4b35ae5cb1d8', id: this.panelId, class: this.getPanelClassNames() }, h("slot", { key: '38c4b3d0b657e635341d17e5213d545504e90cfc' })))));
    }
    static get is() { return "ath-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["accordionItem.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["accordionItem.css"]
        };
    }
    static get properties() {
        return {
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
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
                    "text": "Title of heading item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                    "text": "Descriprion of heading item"
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
                    "text": "The accordion item is disabled"
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
                    "text": "The accordion item is expanded"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "headingLevel": {
                "type": "string",
                "attribute": "heading-level",
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
                    "text": "The accordion item aria-level"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'2'"
            },
            "noDivider": {
                "type": "boolean",
                "attribute": "no-divider",
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
                    "text": "The accordion item divider bottom"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "The code of the accordion item's icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "opened",
                "name": "opened",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "handleDisabled"
            }];
    }
}
//# sourceMappingURL=accordionItem.js.map
