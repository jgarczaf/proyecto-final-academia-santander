import { Host, h } from "@stencil/core";
import { FcInputLabel } from "../../sharedfc/input/index";
let radioButtonSequence = 0;
export class AthRadioButton {
    radioButtonId = `radio-button-${++radioButtonSequence}`;
    /**
     * Indicates if it is checked by default
     */
    checked = false;
    /**
     * Indicates if it is disabled
     */
    disabled = false;
    /**
     * Label text
     */
    label;
    /**
     * Indicates the name of the radioButton
     */
    name;
    /**
     * Indicates if it is read-only
     */
    readonly = false;
    /**
     * Indicates the value of the radioButton
     */
    value;
    // ACCESIBILIDAD
    /**
     * Accessible text (aria-label)
     */
    ariaLabel;
    // EVENTOS
    /**
     * Emitted when the radio-button receives focus
     */
    athFocus;
    /**
     * Emitted when the radio-button loses focus
     */
    athBlur;
    /**
     * Emitted when there is a change in the input state
     */
    athChange;
    async unCheck() {
        this.checked = false;
    }
    async setFocus() {
        this.elRadioButton.focus();
        this.handleClick();
    }
    async setTabindex(tabIndex) {
        this.tabIndex = tabIndex;
    }
    elRadioButton;
    tabIndex;
    componentWillLoad() {
        this.tabIndex = this.checked ? 0 : -1;
    }
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleClick = () => {
        if (!this.disabled && !this.readonly && !this.checked) {
            this.checked = true;
            this.tabIndex = 0;
            this.handleChange();
        }
    };
    handleChange = () => {
        const detail = {
            checked: this.checked,
            value: this.value,
        };
        this.athChange.emit(detail);
    };
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick();
        }
    }
    getLabelProps = () => ({
        htmlForId: this.radioButtonId,
        label: this.label,
    });
    getInputClassNames = () => ({
        'ath-radiobutton': true,
        'ath-radiobutton--read-only': this.readonly && !this.disabled,
        'ath-radiobutton--checked': this.checked,
        'ath-radiobutton--disabled': this.disabled,
    });
    getAriaAttributes() {
        return {
            'role': 'radio',
            'aria-disabled': this.disabled ? 'true' : 'false',
            'aria-label': this.ariaLabel ? this.ariaLabel : this.label,
            'aria-checked': this.checked ? 'true' : 'false',
            'ref': (el) => (this.elRadioButton = el),
        };
    }
    getActionAttributes() {
        return {
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            onKeyDown: event => this.handleKeyDown(event),
        };
    }
    renderRadio = () => {
        const ariaAttributes = this.getAriaAttributes();
        const actionAttributes = this.getActionAttributes();
        const labelProps = this.getLabelProps();
        return (h("div", { class: this.getInputClassNames() }, h("span", { tabindex: this.disabled ? -1 : this.tabIndex, ...ariaAttributes, class: "ath-radiobutton-item", id: this.radioButtonId, ...actionAttributes }), !!this.label && (h("span", { onClick: this.handleClick }, h(FcInputLabel, { ...labelProps })))));
    };
    render() {
        return h(Host, { key: '649079e1b9c1340f17528c29ae2f39840f86495b' }, " ", this.renderRadio(), " ");
    }
    static get is() { return "ath-radio-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["radio-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio-button.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
                    "text": "Indicates if it is checked by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "Indicates if it is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Label text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "Indicates the name of the radioButton"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                    "text": "Indicates if it is read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "Indicates the value of the radioButton"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Accessible text (aria-label)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "tabIndex": {}
        };
    }
    static get events() {
        return [{
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the radio-button receives focus"
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
                    "text": "Emitted when the radio-button loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when there is a change in the input state"
                },
                "complexType": {
                    "original": "RadioButtonChangeDetail",
                    "resolved": "{ checked: boolean; value: string; }",
                    "references": {
                        "RadioButtonChangeDetail": {
                            "location": "import",
                            "path": "./radio-button.model",
                            "id": "src/components/radio-button/radio-button.model.ts::RadioButtonChangeDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "unCheck": {
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
            },
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
            },
            "setTabindex": {
                "complexType": {
                    "signature": "(tabIndex: any) => Promise<void>",
                    "parameters": [{
                            "name": "tabIndex",
                            "type": "any",
                            "docs": ""
                        }],
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
}
//# sourceMappingURL=radio-button.js.map
