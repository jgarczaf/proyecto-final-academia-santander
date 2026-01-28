import { Host, h } from "@stencil/core";
import { InputFeedbackTypes, InputSizes } from "./input-password.models";
import { FcInputCounter, FcInputElement, FcInputFeedback, FcInputHelperText, FcInputLabel, } from "../../sharedfc/input/index";
let inputPasswordSequence = 0;
export class AthInputPassword {
    inputId = `ath-input-pass-${inputPasswordSequence++}`;
    inputHintId;
    inputFeedbackId;
    inputEl;
    initialValue;
    el;
    internals;
    /**
     * The size of the input
     */
    size = InputSizes.Medium;
    /**
     * Shows a counter
     */
    counter;
    /**
     * SThe label of the counter
     */
    counterLabel = '[length] de [max] caracteres. Quedan [rest]';
    /**
     * The name of the input. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * Represents the caption of the input
     */
    label;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder;
    /**
     * Message to help the user fills the input value
     */
    helperText;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback = InputFeedbackTypes.None;
    /**
     * The message for the feedback.
     */
    feedbackText = InputFeedbackTypes.Error;
    /**
     * Specifies the maximum number of characters allowed in the input element
     */
    maxlength;
    /**
     * Specifies a regular expression that the input element's value is checked
     */
    pattern;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    hideRequired = false;
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter = false;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled = false;
    watchDisabled() {
        this.updateReadonly();
    }
    /**
     * If true, the user cannot modify the value.
     */
    readonly = false;
    /**
     * Whether the input will be autocompleted.
     */
    autocomplete;
    /**
     * Whether the input is focused on page load.
     */
    autofocus;
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel;
    /**
     * Set tabindex
     */
    inputTabindex = '0';
    /**
     * The text to be shown in the tooltip
     */
    tooltipText;
    /**
     * The max width to the text in the tooltip
     */
    tooltipWidth;
    /**
     * The accesible text to button Show Password
     */
    labelShowPassword = 'Ver password';
    /**
     * The accesible text to button Hide Password
     */
    labelHidePassword = 'Ocultar password';
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value;
    updateValue() {
        if (this.inputEl) {
            this.setInputValue(this.value);
        }
    }
    /**
     * Method to set the focus on the input element
     */
    async setFocus() {
        if (this.inputEl) {
            this.inputEl.focus();
        }
    }
    /**
     * Emitted when the input gains focus
     */
    athFocus;
    /**
     * Emitted when the input loses focus
     */
    athBlur;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange;
    /**
     * Emitted when the component is cleared
     */
    athClear;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput;
    showPassword = false;
    componentWillLoad() {
        this.inputHintId = `${this.inputId}-hint`;
        this.inputFeedbackId = `${this.inputId}-feedback`;
        this.updateReadonly();
    }
    componentDidLoad() {
        this.initialValue = this.value || '';
        this.setInputValue(this.initialValue);
        if (this.autofocus) {
            this.setFocus();
        }
    }
    formResetCallback() {
        this.inputEl.value = this.initialValue || '';
        this.handleInput();
        this.handleChange();
    }
    setInputValue(value) {
        const inputValue = value || '';
        if (this.inputEl.value !== inputValue) {
            this.inputEl.value = inputValue;
        }
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(inputValue);
            this.internals.checkValidity();
        }
    }
    updateReadonly() {
        if (this.disabled) {
            this.readonly = false;
        }
    }
    handleInput = () => {
        this.value = this.inputEl.value;
        this.athInput.emit(this.value);
        if (this.value === '') {
            this.athClear.emit();
        }
    };
    handleChange = () => {
        this.athChange.emit(this.inputEl.value);
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleKeydown = (event) => {
        if (event.code === 'Enter') {
            this.submitOnEnter && this.internals.form && this.internals.form.requestSubmit();
        }
    };
    handleShowHideButton = () => {
        this.doShowHide();
        this.setFocus();
    };
    doShowHide = () => {
        this.showPassword = !this.showPassword;
    };
    getLabelProps = () => ({
        htmlForId: this.inputId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    getInputProps = () => ({
        inputId: this.inputId,
        type: this.showPassword ? 'text' : 'password',
        autocomplete: this.autocomplete,
        name: this.name,
        pattern: this.pattern,
        placeholder: this.placeholder,
        value: this.value,
        required: this.required,
        disabled: this.disabled,
        readonly: this.readonly,
        maxlength: this.maxlength,
        inputAriaLabel: this.inputAriaLabel,
        hasButton: true,
        buttonIcon: this.showPassword ? 'hide' : 'show',
        buttonAriaLabel: this.showPassword ? this.labelHidePassword : this.labelShowPassword,
        showButtonWhenDisabled: true,
        showButtonWhenEmpty: true,
        showButtonWhenReadonly: true,
        helperText: this.helperText,
        feedback: this.feedback,
        feedbackText: this.feedbackText,
        tabindex: this.inputTabindex,
        size: this.size,
        onKeyDown: e => this.handleKeydown(e),
        onInput: () => this.handleInput(),
        onFocus: () => this.handleFocus(),
        onBlur: () => this.handleBlur(),
        onChange: () => this.handleChange(),
        onClickButton: () => this.handleShowHideButton(),
        onInputRef: (el) => (this.inputEl = el),
    });
    getCounterProps = () => ({
        accesibleLabel: this.counterLabel,
        value: this.value,
        maxlength: this.maxlength,
    });
    getHelperTextProps = () => {
        return {
            id: this.inputHintId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.inputFeedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    renderInput = () => {
        const labelProps = this.getLabelProps();
        const counterProps = this.getCounterProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const inputProps = this.getInputProps();
        return (h("div", { class: "ath-input" }, !!this.label && h(FcInputLabel, { ...labelProps }), h("div", { class: "wrapper" }, h(FcInputElement, { ...inputProps }), this.counter && h(FcInputCounter, { ...counterProps }), !!this.helperText && h(FcInputHelperText, { ...helperTextProps }), this.feedback !== InputFeedbackTypes.None && !this.disabled && !this.readonly && h(FcInputFeedback, { ...feedbackProps }))));
    };
    render() {
        return h(Host, { key: 'cd3ba9c26ba545247ca7f840dc643edd44eccef3' }, this.renderInput());
    }
    static get is() { return "ath-input-password"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["input-password.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-password.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "\"lg\" | \"md\" | \"sm\"",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "InputSize": {
                            "location": "global",
                            "id": "global::InputSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "InputSizes.Medium"
            },
            "counter": {
                "type": "boolean",
                "attribute": "counter",
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
                    "text": "Shows a counter"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "counterLabel": {
                "type": "string",
                "attribute": "counter-label",
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
                    "text": "SThe label of the counter"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'[length] de [max] caracteres. Quedan [rest]'"
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
                    "text": "The name of the input. Submitted with the form as part of a name/value pair"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Represents the caption of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "Instructional text that shows before the input has a value."
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
                    "text": "Message to help the user fills the input value"
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
                    "original": "\"error\" | \"success\" | \"warning\" | \"none\"",
                    "resolved": "\"error\" | \"none\" | \"success\" | \"warning\"",
                    "references": {
                        "InputFeedbackType": {
                            "location": "global",
                            "id": "global::InputFeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the feedback. If 'error' the error feedback will be shown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "InputFeedbackTypes.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
                "mutable": false,
                "complexType": {
                    "original": "\"error\" | \"success\" | \"warning\" | \"none\"",
                    "resolved": "\"error\" | \"none\" | \"success\" | \"warning\"",
                    "references": {
                        "InputFeedbackType": {
                            "location": "global",
                            "id": "global::InputFeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The message for the feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "InputFeedbackTypes.Error"
            },
            "maxlength": {
                "type": "number",
                "attribute": "maxlength",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the maximum number of characters allowed in the input element"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "pattern": {
                "type": "string",
                "attribute": "pattern",
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
                    "text": "Specifies a regular expression that the input element's value is checked"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "If true, the user must fill in a value before submitting a form."
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
                    "text": "If true, the * asterisk will be show when required = true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "submitOnEnter": {
                "type": "boolean",
                "attribute": "submit-on-enter",
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
                    "text": "If true, submit the form when pressing Enter in the input field and the input is inside a form"
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
                    "text": "If true, the user cannot interact with the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                    "text": "If true, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "autocomplete": {
                "type": "string",
                "attribute": "autocomplete",
                "mutable": false,
                "complexType": {
                    "original": "InputPasswordAutocomplete",
                    "resolved": "\"current-password\" | \"new-password\"",
                    "references": {
                        "InputPasswordAutocomplete": {
                            "location": "import",
                            "path": "./input-password.models",
                            "id": "src/components/input-password/input-password.models.ts::InputPasswordAutocomplete"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the input will be autocompleted."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Whether the input is focused on page load."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "inputAriaLabel": {
                "type": "string",
                "attribute": "input-aria-label",
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
                    "text": "The aria-label attribute of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "inputTabindex": {
                "type": "string",
                "attribute": "input-tabindex",
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
                    "text": "Set tabindex"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'0'"
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
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
                    "text": "The text to be shown in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipWidth": {
                "type": "any",
                "attribute": "tooltip-width",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The max width to the text in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelShowPassword": {
                "type": "string",
                "attribute": "label-show-password",
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
                    "text": "The accesible text to button Show Password"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Ver password'"
            },
            "labelHidePassword": {
                "type": "string",
                "attribute": "label-hide-password",
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
                    "text": "The accesible text to button Hide Password"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Ocultar password'"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the form control. Submitted with the form as part of a name/value pair."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "showPassword": {}
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
                    "text": "Emitted when the input gains focus"
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
                    "text": "Emitted when the input loses focus"
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
                    "text": "Emitted when the value has changed.\r\nThis event doesn't fire until the control loses focus."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "athClear",
                "name": "athClear",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the component is cleared"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "athInput",
                "name": "athInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted every time the value is updated by introducing a change"
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
                    "text": "Method to set the focus on the input element",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }, {
                "propName": "value",
                "methodName": "updateValue"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=input-password.js.map
