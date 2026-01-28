import { Host, h } from "@stencil/core";
import { ChipDismissSize } from "./chip-dismiss.model";
export class AthChipDismiss {
    el;
    /**
     * The button is disabled
     */
    disabled = false;
    /**
     * The icon to the left
     */
    icon;
    /**
     * The text in the chip
     */
    headingText;
    /**
     * The accesible label-dismiss attribute in chip dismiss
     */
    labelDismiss = 'Eliminar';
    /**
     * The size of the chip dismiss
     */
    size = ChipDismissSize.Medium;
    /**
     * Emitted when the x icon is clicked
     */
    athDismiss;
    handleDismiss = () => {
        if (!this.disabled) {
            this.athDismiss.emit();
        }
    };
    getSpanClassNames = () => ({
        'ath-chip-dismiss__container': true,
        [`ath-chip-dismiss__container--${this.size}`]: !!this.size,
        'ath-chip-dismiss__container--disabled': this.disabled,
    });
    renderIcon = () => {
        if (this.icon != 'null') {
            return h("ath-icon", { icon: this.icon, size: "xs", color: "inherit" });
        }
    };
    render() {
        return (h(Host, { key: '4e3bc349a6421e8d151038bb667f64eacaf21a20' }, h("span", { key: 'eb3af22c9d93e9fb92182ef129c45f8bb6f40b43', class: this.getSpanClassNames() }, this.icon && this.renderIcon(), h("span", { key: 'c503a8c58c655ee4e2fa2e429748339e5206594e', class: "ath-chip-dismiss__text" }, this.headingText), h("button", { key: '13f83107525800d78b58302cd2de1705210a3517', "aria-label": this.labelDismiss, disabled: this.disabled, class: "ath-chip-dismiss__button", type: "button", onClick: this.handleDismiss }, h("ath-icon", { key: '6c51fc213deedf205c17e3f7e1da4fececa5ea64', icon: "close_small", size: "xs", color: "inherit" })))));
    }
    static get is() { return "ath-chip-dismiss"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-dismiss.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-dismiss.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The button is disabled"
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
                    "text": "The icon to the left"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "The text in the chip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelDismiss": {
                "type": "string",
                "attribute": "label-dismiss",
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
                    "text": "The accesible label-dismiss attribute in chip dismiss"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Eliminar'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "ChipDismissSizes",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "ChipDismissSizes": {
                            "location": "import",
                            "path": "./chip-dismiss.model",
                            "id": "src/components/chip-dismiss/chip-dismiss.model.ts::ChipDismissSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the chip dismiss"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ChipDismissSize.Medium"
            }
        };
    }
    static get events() {
        return [{
                "method": "athDismiss",
                "name": "athDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the x icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=chip-dismiss.js.map
