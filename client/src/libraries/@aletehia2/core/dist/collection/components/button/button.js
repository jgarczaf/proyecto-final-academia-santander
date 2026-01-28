import { h, Host } from "@stencil/core";
import { ButtonType, ButtonIconPosition, ButtonColor, ButtonSize } from "./button.model";
import { transformIconSize, IconType } from "../../utils/helper";
export class AthButton {
    showLeftIcon;
    showRightIcon;
    el;
    internals;
    /**
     * The color variant of the button
     */
    color = ButtonColor.Primary;
    /**
     * The size of the buton
     */
    size = ButtonSize.Medium;
    /**
     * The type of the button
     */
    type = ButtonType.Button;
    /**
     * Whether the button has an icon and his position
     */
    iconPosition = ButtonIconPosition.None;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The clear of the button (background and border color)
     */
    clear = false;
    /**
     * The button can be adapted to its container width
     */
    fullWidth = false;
    /**
     * The button is disabled
     */
    disabled = false;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    /**
     * Emitted when the button is clicked
     */
    athClick;
    /**
     * Emitted when the button gains focus
     */
    athFocus;
    /**
     * Emitted when the button loses focus
     */
    athBlur;
    componentWillLoad() {
        this.showLeftIcon = this.icon && (this.iconPosition === ButtonIconPosition.Left || this.iconPosition === ButtonIconPosition.IconOnly);
        this.showRightIcon = this.icon && this.iconPosition === ButtonIconPosition.Right;
    }
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
            if (this.type === ButtonType.Submit) {
                this.internals?.form && this.internals.form.requestSubmit();
            }
            if (this.type === ButtonType.Reset) {
                this.internals?.form && this.internals.form.reset();
            }
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
        'ath-button': true,
    });
    getSpanClassNames = () => ({
        'ath-button--container': true,
        [`ath-button--${this.size}`]: !!this.size,
        [`ath-button--solid`]: !this.clear,
        [`ath-button--clear`]: this.clear,
        [`ath-button--${this.color}`]: !!this.color,
        [`ath-button--icon-only`]: this.iconPosition === ButtonIconPosition.IconOnly,
        [`ath-button--disabled`]: this.disabled,
        [`ath-button--full-width`]: this.fullWidth,
    });
    getButtonStyle = () => ({
        width: this.fullWidth ? '100%' : 'auto',
    });
    renderIcon = () => {
        const isIconOnly = this.iconPosition === ButtonIconPosition.IconOnly;
        const iconSize = isIconOnly ? transformIconSize(IconType.ButtonIconOnly, this.size) : transformIconSize(IconType.Button, this.size);
        return h("ath-icon", { icon: this.icon, size: iconSize, color: "inherit" });
    };
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (h(Host, { key: '8fc2872696e2fa1458f54ba2191892ba645f86ff', role: "button", class: this.getHostClassNames(), tabindex: this.disabled ? '-1' : hostTabindex, onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false', style: this.getButtonStyle() }, h("span", { key: '79dbcf9c510d2927e62ec9c971154b1fbe361759', class: this.getSpanClassNames(), part: "button-styles" }, h("span", { key: 'ee797cd189d0bad80d0e5883b6549b606081d84b', class: "ath-button__inner" }, this.showLeftIcon && this.renderIcon(), this.iconPosition != 'icon-only' && h("slot", { key: 'a095aeb8301f29c0e688b47f9f6d997a58034fd3' }), this.showRightIcon && this.renderIcon()))));
    }
    static get is() { return "ath-button"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "ButtonColors",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "ButtonColors": {
                            "location": "import",
                            "path": "./button.model",
                            "id": "src/components/button/button.model.ts::ButtonColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color variant of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ButtonColor.Primary"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ButtonSizes": {
                            "location": "import",
                            "path": "./button.model",
                            "id": "src/components/button/button.model.ts::ButtonSizes"
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
                "defaultValue": "ButtonSize.Medium"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ButtonTypes",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "ButtonTypes": {
                            "location": "import",
                            "path": "./button.model",
                            "id": "src/components/button/button.model.ts::ButtonTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ButtonType.Button"
            },
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconPositions",
                    "resolved": "\"icon-only\" | \"left\" | \"none\" | \"right\"",
                    "references": {
                        "ButtonIconPositions": {
                            "location": "import",
                            "path": "./button.model",
                            "id": "src/components/button/button.model.ts::ButtonIconPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the button has an icon and his position"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ButtonIconPosition.None"
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
            "clear": {
                "type": "boolean",
                "attribute": "clear",
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
                    "text": "The clear of the button (background and border color)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fullWidth": {
                "type": "boolean",
                "attribute": "full-width",
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
                    "text": "The button can be adapted to its container width"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Emitted when the button is clicked"
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
                    "text": "Emitted when the button gains focus"
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
                    "text": "Emitted when the button loses focus"
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
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=button.js.map
