import { Host, h } from "@stencil/core";
import { InputFeedbackTypes, InputSizes } from "./input-textarea.models";
import { FcInputCounter, FcInputTextareaElement, FcInputFeedback, FcInputHelperText, FcInputLabel, } from "../../sharedfc/input/index";
let inputTextareaSequence = 0;
export class AthInputTextarea {
    inputId = `ath-input-textarea-${inputTextareaSequence++}`;
    inputHintId;
    inputFeedbackId;
    inputEl;
    initialValue;
    el;
    internals;
    /**
     * Whether the input will be autocompleted.
     */
    autocomplete;
    /**
     * Whether the input is focused on page load.
     */
    autofocus;
    /**
     * Shows a counter
     */
    counter;
    /**
     * SThe label of the counter
     */
    counterLabel = '[length] de [max] caracteres. Quedan [rest]';
    /**
     * If true, the user cannot interact with the input.
     */
    disabled = false;
    watchDisabled() {
        this.updateReadonly();
    }
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel;
    /**
     * Set tabindex
     */
    inputTabindex = '0';
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback = InputFeedbackTypes.None;
    /**
     * The feedback message.
     */
    feedbackText;
    /**
     * Message to help the user fills the input value
     */
    helperText;
    /**
     * Represents the caption of the input
     */
    label;
    /**
     * Specifies the maximum number of characters allowed in the input element
     */
    maxlength;
    /**
     * The name of the input. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder;
    /**
     * If true, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * Number of visible rows.
     */
    rows;
    /**
     * The size of the input
     */
    size = InputSizes.Medium;
    /**
     * If true, the * asterisk will be hidden when required = true.
     */
    hideRequired = false;
    /**
     * The text to be shown in the tooltip
     */
    tooltipText;
    /**
     * The max width to the text in the tooltip
     */
    tooltipWidth = 0;
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
     * The max width to the text in the tooltip
     */
    width;
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
     * Emitted every time the value is updated by introducing a change
     */
    athInput;
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
    getLabelProps = () => ({
        htmlForId: this.inputId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    getInputTextAreaProps = () => ({
        autocomplete: this.autocomplete,
        disabled: this.disabled,
        feedback: this.feedback,
        feedbackText: this.feedbackText,
        helperText: this.helperText,
        inputAriaLabel: this.inputAriaLabel,
        inputId: this.inputId,
        maxlength: this.maxlength,
        name: this.name,
        placeholder: this.placeholder,
        readonly: this.readonly,
        required: this.required,
        rows: this.rows,
        size: this.size,
        tabindex: this.inputTabindex,
        value: this.value,
        onInput: () => this.handleInput(),
        onFocus: () => this.handleFocus(),
        onBlur: () => this.handleBlur(),
        onChange: () => this.handleChange(),
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
        const inputTextareaProps = this.getInputTextAreaProps();
        return (h("div", { class: "ath-input", style: this.width ? { width: this.width } : undefined }, !!this.label && h(FcInputLabel, { ...labelProps }), h("div", { class: "wrapper" }, h(FcInputTextareaElement, { ...inputTextareaProps }), this.counter && h(FcInputCounter, { ...counterProps }), !!this.helperText && h(FcInputHelperText, { ...helperTextProps }), this.feedback !== InputFeedbackTypes.None && !this.disabled && !this.readonly && h(FcInputFeedback, { ...feedbackProps }))));
    };
    render() {
        return h(Host, { key: '465eeeb591db9c2a3ffa108cffb023b30fa473bb' }, this.renderInput());
    }
    static get is() { return "ath-input-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["input-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-textarea.css"]
        };
    }
    static get properties() {
        return {
            "autocomplete": {
                "type": "string",
                "attribute": "autocomplete",
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
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "\"error\" | \"none\"",
                    "resolved": "\"error\" | \"none\"",
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The feedback message."
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
            "rows": {
                "type": "number",
                "attribute": "rows",
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
                    "text": "Number of visible rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "InputSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "InputSize": {
                            "location": "import",
                            "path": "./input-textarea.models",
                            "id": "src/components/input-textarea/input-textarea.models.ts::InputSize"
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
                    "text": "If true, the * asterisk will be hidden when required = true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                "type": "number",
                "attribute": "tooltip-width",
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
                    "text": "The max width to the text in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
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
            },
            "width": {
                "type": "string",
                "attribute": "width",
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
                    "text": "The max width to the text in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
//# sourceMappingURL=input-textarea.js.map
