import { Host, h } from "@stencil/core";
import { IconType, transformIconSize } from "../../utils/helper/index";
import { ButtonExpandableSizesTypes } from "./button-expandable.model";
export class AthButtonExpandable {
    el;
    /**
     * The size of the buton
     */
    size = ButtonExpandableSizesTypes.Large;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The button is disabled
     */
    disabled = false;
    isExpanded = false;
    athToggleCollapse;
    collapseTarget;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    handleCollapseStateChange(event) {
        if (event.detail.id === this.collapseTarget) {
            this.isExpanded = event.detail.isExpanded;
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code) && !this.disabled) {
            ev.preventDefault();
            this.handleCollapse();
        }
    }
    handleCollapse = () => {
        this.isExpanded = !this.isExpanded;
        this.athToggleCollapse.emit(this.collapseTarget);
    };
    getHostClassNames = () => ({
        'ath-button-expandable': true,
    });
    getSpanClassNames = () => ({
        'ath-button-expandable--container': true,
        [`ath-button-expandable--${this.size}`]: !!this.size,
        [`ath-button-expandable--disabled`]: this.disabled,
    });
    getChevronClasses = () => ({
        'ath-button-expandable--chevron': true,
        [`ath-button-expandable--chevron-rotate`]: !this.isExpanded,
    });
    getAttributes = () => ({
        'role': 'button',
        'tabindex': this.disabled ? '-1' : this.el.getAttribute('tabindex') === '-1' ? '-1' : '0',
        'aria-controls': !this.disabled && this.collapseTarget ? this.collapseTarget : undefined,
        'aria-expanded': !this.disabled && this.collapseTarget ? `${this.isExpanded}` : undefined,
        'aria-disabled': this.disabled ? 'true' : 'false',
        'onClick': this.disabled ? undefined : this.handleCollapse,
        'onMouseDown': e => {
            if (this.disabled)
                e.preventDefault();
        },
    });
    renderIcon = icon => {
        return h("ath-icon", { icon: icon, size: transformIconSize(IconType.ButtonExpandable, this.size), color: this.disabled ? 'disabled' : 'default' });
    };
    render() {
        return (h(Host, { key: 'faaf0dc92d1e94e5c133963373731a0d56074765', class: this.getHostClassNames(), ...this.getAttributes() }, h("span", { key: 'ceba8888df59955d0fc3227a473df51e09a636df', class: this.getSpanClassNames() }, this.icon && this.renderIcon(this.icon), h("span", { key: '64ecb5be015571bb4d19b4d64cb4a9bc19765ccc', class: "ath-button-expandable--text" }, h("slot", { key: '730ca476a633e2c78e268c9541a5c834b74f231b' })), h("div", { key: 'b9eb2f5149f7e054f6b12fae1d3bcb726ea65f22', class: this.getChevronClasses() }, this.renderIcon('chevron_up')))));
    }
    static get is() { return "ath-button-expandable"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["button-expandable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button-expandable.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonExpandableSizesType",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonExpandableSizesType": {
                            "location": "import",
                            "path": "./button-expandable.model",
                            "id": "src/components/button-expandable/button-expandable.model.ts::ButtonExpandableSizesType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the buton"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ButtonExpandableSizesTypes.Large"
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
                    "text": "The code of the button's icon (used with iconPosition)"
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
                    "text": "The button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "collapseTarget": {
                "type": "string",
                "attribute": "collapse-target",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
    static get events() {
        return [{
                "method": "athToggleCollapse",
                "name": "athToggleCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setFocus": {
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
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "athCollapseState",
                "method": "handleCollapseStateChange",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=button-expandable.js.map
