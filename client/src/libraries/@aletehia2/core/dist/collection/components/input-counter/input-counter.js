import { Host, h } from "@stencil/core";
import { InputCounterFeedbackTypes, InputCounterSizes } from "./input-counter.model";
import { IconType, transformIconSize } from "../../utils/helper/index";
import { FcInputFeedback, FcInputHelperText, FcInputLabel, FcInputElement, } from "../../sharedfc/input/index";
let inputCounterSequence = 0;
export class AthInputCounter {
    inputId = `ath-input-count-${inputCounterSequence++}`;
    labelId = `${this.inputId}-label`;
    inputHintId = `${this.inputId}-hint`;
    inputFeedbackId = `${this.inputId}-feedback`;
    inputEl;
    initialValue;
    el;
    internals;
    /**
     * If true, the controls are not visible.
     */
    hideControls = false;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown.
     */
    feedback = InputCounterFeedbackTypes.None;
    /**
     * The message for the feedback.
     */
    feedbackText;
    /**
     * Message to help the user fill the input value.
     */
    helperText;
    /**
     * The aria-label attribute of the input.
     */
    inputAriaLabel;
    /**
     * Represents the caption of the input.
     */
    label;
    /**
     * Represents the maximum number of the input.
     */
    max;
    /**
     * Represents the minimum number of the input.
     */
    min;
    /**
     * The name of the input. Submitted with the form as part of a name/value pair.
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
     * If true, the * asterisk will be hidden when the input is required.
     */
    hideRequired = false;
    /**
     * Specifies the size of the input.
     */
    size = InputCounterSizes.Medium;
    /**
     * Specifies the interval between legal numbers in an <input> element.
     */
    step = 1;
    /**
     * Specifies text for tooltip.
     */
    tooltipText;
    /**
     * Specifies width for tooltip.
     */
    tooltipWidth;
    /**
     * Specifies the unit for the input.
     */
    unit;
    /**
     * Specifies the accesible unit for the input.
     */
    unitAriaLabel;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value;
    /**
     * Emitted when the input gains focus.
     */
    athFocus;
    /**
     * Emitted when the input loses focus.
     */
    athBlur;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange;
    /**
     * Emitted every time the value is updated by introducing a change.
     */
    athInput;
    watchDisabled() {
        this.updateReadonly();
    }
    updateValue() {
        this.value = this.value ?? '';
        if (this.inputEl && this.value !== this.inputEl.value) {
            this.inputEl.value = this.value || '';
            this.setInputValue(this.value);
        }
    }
    componentDidLoad() {
        this.setInputValue(this.value);
        this.inputEl.value = this.value;
    }
    componentWillLoad() {
        this.updateReadonly();
        this.value = this.value ?? '';
        this.initialValue = this.value;
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.setInputValue(this.initialValue);
        this.handleInput();
    }
    setInputValue(value) {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    updateReadonly() {
        if (this.disabled) {
            this.readonly = false;
        }
    }
    handleDown = () => this.setValue(this.getPreviousValue());
    handleUp = () => this.setValue(this.getNextValue());
    setValue(value) {
        this.value = value;
        this.inputEl.value = this.value;
        this.athInput.emit(this.value);
        this.athChange.emit(this.value);
    }
    getPreviousValue = () => {
        if (+this.value > this.max) {
            return this.max.toString();
        }
        const rest = (+this.value - (this.min || 0)) % this.step;
        const previous = +this.value - (rest === 0 ? this.step : rest);
        const value = previous < this.min ? this.min : previous;
        return value.toString();
    };
    getNextValue = () => {
        if (+this.value < this.min) {
            return this.min.toString();
        }
        const rest = (+this.value - (this.min || 0)) % this.step;
        const next = +this.value + (this.step - rest);
        const value = next > this.max ? +this.value : next < this.min ? this.min : next;
        return value.toString();
    };
    getInputProps = () => ({
        inputId: this.inputId,
        type: 'number',
        name: this.name,
        placeholder: this.placeholder,
        value: this.value,
        required: this.required,
        disabled: this.disabled,
        readonly: this.readonly,
        min: this.min,
        max: this.max,
        step: this.step,
        inputAriaLabel: this.inputAriaLabel,
        labelId: this.labelId,
        helperText: this.helperText,
        feedback: this.feedback === InputCounterFeedbackTypes.None ? undefined : this.feedback,
        feedbackText: this.feedbackText,
        size: this.size,
        unit: this.unit,
        unitAriaLabel: this.unitAriaLabel,
        onInput: () => this.handleInput(),
        onFocus: () => this.handleFocus(),
        onBlur: () => this.handleBlur(),
        onChange: () => this.handleChange(),
        onInputRef: (el) => (this.inputEl = el),
    });
    handleInput = () => {
        this.value = this.inputEl.value;
        this.athInput.emit(this.value.toString());
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
        id: this.labelId,
        htmlForId: this.inputId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
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
    handleButtonClick = type => {
        if (!this.disabled && !this.readonly) {
            if (this.value === '' || this.value === undefined)
                this.value = '0';
            if (type === 'add') {
                this.handleUp();
            }
            else {
                this.handleDown();
            }
        }
    };
    renderButton = icon => {
        const size = transformIconSize(IconType.Input, this.size);
        let actionDisabled = false;
        const disabled = this.disabled || this.readonly;
        if (icon === 'add' && this.max && +this.value >= this.max) {
            actionDisabled = true;
        }
        else if (icon === 'remove' && (this.min || this.min == 0) && +this.value <= this.min) {
            actionDisabled = true;
        }
        return (h("ath-button", { tabindex: "-1", size: size, icon: icon, iconPosition: "icon-only", color: "secondary", disabled: disabled || actionDisabled, onClick: () => this.handleButtonClick(icon), "aria-hidden": "true", onMouseDown: (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
            }, onFocus: (ev) => {
                ev.preventDefault();
            } }));
    };
    renderInput = () => {
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const inputProps = this.getInputProps();
        return (h("div", { class: "ath-input-counter" }, !!this.label && h(FcInputLabel, { ...labelProps }), h("div", { class: "ath-input-counter__wrapper" }, h("div", { class: "ath-input-counter__counter" }, !this.hideControls && this.renderButton('remove'), h("div", { class: "ath-input" }, h(FcInputElement, { ...inputProps })), !this.hideControls && this.renderButton('add')), !!this.helperText && h(FcInputHelperText, { ...helperTextProps }), this.feedback !== InputCounterFeedbackTypes.None && !this.disabled && !this.readonly && h(FcInputFeedback, { ...feedbackProps }))));
    };
    render() {
        return h(Host, { key: 'd7bee3b857ba3205dddb49dff643467728878f67' }, this.renderInput());
    }
    static get is() { return "ath-input-counter"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["input-counter.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-counter.css"]
        };
    }
    static get properties() {
        return {
            "hideControls": {
                "type": "boolean",
                "attribute": "hide-controls",
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
                    "text": "If true, the controls are not visible."
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
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "InputCounterFeedbackType",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "InputCounterFeedbackType": {
                            "location": "import",
                            "path": "./input-counter.model",
                            "id": "src/components/input-counter/input-counter.model.ts::InputCounterFeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the feedback. If 'error' the error feedback will be shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "InputCounterFeedbackTypes.None"
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
                    "text": "The message for the feedback."
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
                    "text": "Message to help the user fill the input value."
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
                    "text": "The aria-label attribute of the input."
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
                    "text": "Represents the caption of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                    "text": "Represents the maximum number of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "number",
                "attribute": "min",
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
                    "text": "Represents the minimum number of the input."
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
                    "text": "The name of the input. Submitted with the form as part of a name/value pair."
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
                    "text": "If true, the * asterisk will be hidden when the input is required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "InputCounterSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "InputCounterSize": {
                            "location": "import",
                            "path": "./input-counter.model",
                            "id": "src/components/input-counter/input-counter.model.ts::InputCounterSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the size of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "InputCounterSizes.Medium"
            },
            "step": {
                "type": "number",
                "attribute": "step",
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
                    "text": "Specifies the interval between legal numbers in an <input> element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
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
                    "text": "Specifies text for tooltip."
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
                    "text": "Specifies width for tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "unit": {
                "type": "string",
                "attribute": "unit",
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
                    "text": "Specifies the unit for the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "unitAriaLabel": {
                "type": "string",
                "attribute": "unit-aria-label",
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
                    "text": "Specifies the accesible unit for the input."
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
    static get events() {
        return [{
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input gains focus."
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
                    "text": "Emitted when the input loses focus."
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
                    "text": "Emitted every time the value is updated by introducing a change."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
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
//# sourceMappingURL=input-counter.js.map
