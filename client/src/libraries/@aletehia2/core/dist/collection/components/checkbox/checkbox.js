import { Host, h } from "@stencil/core";
import { FeedbackType, CheckboxValue, CheckIconValue } from "./checkbox.model";
import { FcInputFeedback, FcInputHelperText, FcInputLabel } from "../../sharedfc/input/index";
let checkboxSequence = 0;
export class AthCheckBox {
    checkboxId = `checkbox-${++checkboxSequence}`;
    helperTextId = `${this.checkboxId}-helper-text`;
    feedbackId = `${this.checkboxId}-feedback`;
    /**
     * Name of the checkbox (necessary for forms)
     */
    name;
    /**
     * Value of the checkbox
     */
    value = CheckboxValue.False;
    /**
     * If the checkbox is checked by default
     */
    checked = false;
    /**
     * If the checkbox is indeterminate by default
     */
    indeterminate = false;
    /**
     * If it is disabled
     */
    disabled = false;
    /**
     * If it is required
     */
    required = false;
    /**
     * If the required character is shown in the label
     */
    hideRequired = false;
    /**
     * Label of the checkbox
     */
    label;
    /**
     * Accessible text when there is no visible label
     */
    ariaLabel;
    /**
     * Text below the checkbox (helper text)
     */
    helperText;
    /**
     * Type of feedback
     */
    feedback = FeedbackType.None;
    /**
     * Text of the feedback
     */
    feedbackText;
    /**
     * If it is read-only
     */
    readonly = false;
    /**
     * If the element is focused
     */
    autofocus = false;
    /**
     * Emitted when the checkbox gains focus
     */
    athFocus;
    /**
     * Emitted when the checkbox loses focus
     */
    athBlur;
    /**
     * Emitted when the checkbox change
     */
    athChange;
    watchValue(value) {
        this.setInputValue(value);
    }
    async setFocus() {
        if (!this.disabled) {
            const checkboxDiv = this.el.shadowRoot.querySelector('.ath-checkbox');
            checkboxDiv.focus();
        }
    }
    el;
    internals;
    elInput;
    initialValue;
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        requestAnimationFrame(() => {
            if (!this.el.contains(document.activeElement)) {
                this.athBlur.emit();
            }
        });
    };
    handleClick = () => {
        if (!this.disabled && !this.readonly) {
            this.toggleChecked();
            this.emitChangeEvent();
        }
        this.setFocus();
    };
    emitChangeEvent() {
        const selectedCheckboxEventDetail = {
            label: this.label,
            name: this.name,
            value: this.value,
        };
        this.athChange.emit(selectedCheckboxEventDetail);
    }
    toggleChecked() {
        this.value = this.value === CheckboxValue.True ? CheckboxValue.False : CheckboxValue.True;
    }
    handleKeyDown(event) {
        if (!this.readonly && (event.key === ' ' || event.key === 'Enter')) {
            event.preventDefault();
            this.handleClick();
        }
    }
    getLabelProps = () => ({
        htmlForId: this.checkboxId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
    });
    getInputClassNames = () => ({
        'ath-checkbox': true,
        'ath-checkbox--read-only': this.readonly && !this.disabled,
        'ath-checkbox--checked': this.value === CheckboxValue.True,
        'ath-checkbox--indeterminate': this.value === CheckboxValue.Indeterminate,
        'ath-checkbox--disabled': this.disabled,
    });
    getAriaAttributes() {
        const ariaDescribedBy = [];
        if (!!this.helperText) {
            ariaDescribedBy.push(this.helperTextId);
        }
        if (this.feedback !== FeedbackType.None) {
            ariaDescribedBy.push(this.feedbackId);
        }
        return {
            'aria-label': !!this.ariaLabel ? this.ariaLabel : undefined,
            'aria-disabled': this.disabled ? 'true' : 'false',
            'aria-required': this.required ? 'true' : 'false',
            'aria-invalid': this.feedback === FeedbackType.Error ? 'true' : undefined,
            'aria-describedby': ariaDescribedBy.join(' '),
            'aria-checked': this.value === CheckboxValue.Indeterminate ? 'mixed' : this.value,
        };
    }
    getActionAttributes() {
        return {
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onKeyDown: event => this.handleKeyDown(event),
            onClick: this.handleClick,
        };
    }
    getFeedbackProps = () => ({
        id: this.feedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    getHelperTextProps = () => {
        return {
            id: this.helperTextId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    checkValue() {
        if (this.value == CheckboxValue.True) {
            return CheckIconValue.Check;
        }
        else if (this.value == CheckboxValue.Indeterminate) {
            return CheckIconValue.Indeterminate;
        }
    }
    setInputValue(value) {
        const inputValue = value || 'false';
        if (this.elInput) {
            this.elInput.indeterminate = false;
            this.elInput.checked = false;
            if (inputValue === CheckboxValue.True) {
                this.elInput.checked = true;
            }
            else if (inputValue === CheckboxValue.Indeterminate) {
                this.elInput.indeterminate = true;
            }
        }
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(inputValue);
            this.internals.checkValidity();
        }
    }
    componentWillLoad() {
        if (this.checked)
            this.value = CheckboxValue.True;
        if (this.indeterminate)
            this.value = CheckboxValue.Indeterminate;
    }
    componentDidLoad() {
        this.initialValue = this.value;
        this.setInputValue(this.value);
        if (!!this.autofocus) {
            this.setFocus();
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.setInputValue(this.initialValue);
        this.emitChangeEvent();
    }
    render() {
        const ariaAttributes = this.getAriaAttributes();
        const actionAttributes = this.getActionAttributes();
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        return (h(Host, { key: '035b6caa488264c2cf126e7e27cdd3d20c65f974' }, h("div", { key: '4b12dc10581f951f1a48f524f72c7568113de4fd', role: "checkbox", class: this.getInputClassNames(), ...actionAttributes, ...ariaAttributes, tabindex: !!this.disabled ? '-1' : '0' }, h("div", { key: '6225e34548e7c787c62d36aeaa7baba22e8178bd', class: "ath-checkbox-indicator", id: this.checkboxId, innerHTML: this.checkValue(), tabindex: "-1" }), h("div", { key: 'd3ea0dd131ae83ff84df4b409046091a23ed70e5', class: "ath-checkbox__wrapper" }, h("input", { key: '448b93492ed9db789e929e6db637f3f006434299', ref: el => (this.elInput = el), type: "hidden", name: this.name, value: this.value, disabled: this.disabled }), !!this.label && h(FcInputLabel, { key: '2859a55189d7b805af1aade531a7f5e8e836c09c', ...labelProps }), !!this.helperText && h(FcInputHelperText, { key: 'f9ae5357864a75b1c379dceb948703257e59cae3', ...helperTextProps }), this.feedback === 'error' && !this.disabled && !this.readonly && h(FcInputFeedback, { key: 'd31347c025980ce41a0b39178ea933a8a6fbf331', ...feedbackProps })))));
    }
    static get is() { return "ath-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["checkbox.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Name of the checkbox (necessary for forms)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "CheckboxValues",
                    "resolved": "\"false\" | \"indeterminate\" | \"true\"",
                    "references": {
                        "CheckboxValues": {
                            "location": "import",
                            "path": "./checkbox.model",
                            "id": "src/components/checkbox/checkbox.model.ts::CheckboxValues"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the checkbox"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CheckboxValue.False"
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
                    "text": "If the checkbox is checked by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "indeterminate": {
                "type": "boolean",
                "attribute": "indeterminate",
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
                    "text": "If the checkbox is indeterminate by default"
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
                    "text": "If it is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                    "text": "If it is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hideRequired": {
                "type": "boolean",
                "attribute": "hide-required",
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
                    "text": "If the required character is shown in the label"
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
                    "text": "Label of the checkbox"
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
                    "text": "Accessible text when there is no visible label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
                    "text": "Text below the checkbox (helper text)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "FeedbackTypes",
                    "resolved": "\"error\" | \"none\" | \"success\"",
                    "references": {
                        "FeedbackTypes": {
                            "location": "import",
                            "path": "./checkbox.model",
                            "id": "src/components/checkbox/checkbox.model.ts::FeedbackTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of feedback"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "FeedbackType.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
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
                    "text": "Text of the feedback"
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
                    "text": "If it is read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
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
                    "text": "If the element is focused"
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
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the checkbox gains focus"
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
                    "text": "Emitted when the checkbox loses focus"
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
                    "text": "Emitted when the checkbox change"
                },
                "complexType": {
                    "original": "CheckboxChangeEventDetail",
                    "resolved": "CheckboxChangeEventDetail",
                    "references": {
                        "CheckboxChangeEventDetail": {
                            "location": "import",
                            "path": "./checkbox.model",
                            "id": "src/components/checkbox/checkbox.model.ts::CheckboxChangeEventDetail"
                        }
                    }
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
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
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
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=checkbox.js.map
