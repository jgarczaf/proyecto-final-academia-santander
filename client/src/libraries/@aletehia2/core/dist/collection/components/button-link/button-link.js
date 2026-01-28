import { h, Host } from "@stencil/core";
import { ButtonLinkColor, ButtonLinkSize, ButtonLinkPosition } from "./button-link.model";
import { transformIconSize, IconType } from "../../utils/helper";
export class AthButtonLink {
    el;
    /**
     * The color variant of the button-link
     */
    color = ButtonLinkColor.Primary;
    /**
     * The size of the buton-link
     */
    size = ButtonLinkSize.Medium;
    /**
     * The code of the button-link's icon
     */
    icon;
    /**
     * Icon Position
     */
    iconPosition = ButtonLinkPosition.Left;
    /**
     * The button-link is disabled
     */
    disabled = false;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    /**
     * Emitted when the button-link is clicked
     */
    athClick;
    /**
     * Emitted when the button-link gains focus
     */
    athFocus;
    /**
     * Emitted when the button-link loses focus
     */
    athBlur;
    componentDidLoad() {
        if (this.el.hasAttribute('autofocus') && this.el.getAttribute('autofocus') !== 'false') {
            this.setFocus();
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            this.handleClick();
        }
    }
    handleClick = ( /**event: Event*/) => {
        if (!this.disabled) {
            this.athClick.emit();
        }
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    getHostClassNames = () => ({
        'ath-button-link': true,
    });
    getSpanClassNames = () => ({
        'ath-button-link--container': true,
        [`ath-button-link--disabled`]: this.disabled,
        [`ath-button-link--${this.size}`]: !!this.size,
        [`ath-button-link--${this.color}`]: !!this.color,
    });
    renderIcon = () => {
        const iconSize = transformIconSize(IconType.ButtonLink, this.size);
        return h("ath-icon", { icon: this.icon, color: "inherit", size: iconSize });
    };
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (h(Host, { key: '0198f0b8c0d485c210f878994ddd42b8385bc024', role: "button", class: this.getHostClassNames(), tabindex: this.disabled ? '-1' : hostTabindex, onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false' }, h("span", { key: 'f8dc664dbda30fa37e65db2d0047b2758d6b5974', class: this.getSpanClassNames(), part: "button-link-styles" }, h("span", { key: '3baf1047389aa42b71e0e453b9222f37bb56b408', class: "ath-button-link__inner" }, this.icon && this.iconPosition === ButtonLinkPosition.Left && this.renderIcon(), h("slot", { key: 'b23b89609695c86b96e1b82ff9c37d0002e66a73' }), this.icon && this.iconPosition === ButtonLinkPosition.Right && this.renderIcon()))));
    }
    static get is() { return "ath-button-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["button-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button-link.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "ButtonLinkColors",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "ButtonLinkColors": {
                            "location": "import",
                            "path": "./button-link.model",
                            "id": "src/components/button-link/button-link.model.ts::ButtonLinkColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color variant of the button-link"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ButtonLinkColor.Primary"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonLinkSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ButtonLinkSizes": {
                            "location": "import",
                            "path": "./button-link.model",
                            "id": "src/components/button-link/button-link.model.ts::ButtonLinkSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the buton-link"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ButtonLinkSize.Medium"
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
                    "text": "The code of the button-link's icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "ButtonLinkPositions",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "ButtonLinkPositions": {
                            "location": "import",
                            "path": "./button-link.model",
                            "id": "src/components/button-link/button-link.model.ts::ButtonLinkPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon Position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ButtonLinkPosition.Left"
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
                    "text": "The button-link is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "athClick",
                "name": "athClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button-link is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button-link gains focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athBlur",
                "name": "athBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button-link loses focus"
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
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=button-link.js.map
