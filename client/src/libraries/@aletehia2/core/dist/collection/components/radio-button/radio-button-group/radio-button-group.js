import { Host, h } from "@stencil/core";
import { FeedbackTypes, OrientationTypes } from "./radio-button-group.model";
import { FcInputFeedback, FcInputHelperText, FcInputLabel } from "../../../sharedfc/input/index";
let radioButtonGroupSequence = 0;
export class AthRadioButtonGroup {
    hostId = `radio-button-group-${++radioButtonGroupSequence}`;
    labelId = `${this.hostId}-label`;
    helperTextId = `${this.hostId}-helper-text`;
    feedbackId = `${this.hostId}-feedback`;
    srOnlyId = `${this.hostId}-sr-only`;
    initialValue;
    index = 0;
    el;
    internals;
    /**
     * Indicates whether the group is disabled
     */
    disabled = false;
    /**
     * Indicates the Feedback type
     */
    feedback = FeedbackTypes.None;
    /**
     * Feedback text to be displayed
     */
    feedbackText;
    /**
     * Helper text to be displayed
     */
    helperText;
    /**
     * Label text
     */
    label;
    /**
     * Name attribute to apply to the whole group
     */
    name;
    /**
     * Indicates the orientation of the group
     */
    orientation = OrientationTypes.Vertical;
    /**
     * Indicates whether the group is read-only
     */
    readonly = false;
    /**
     * Indicates whether to show the asterisk
     */
    showRequired = false;
    /**
     * Tooltip text
     */
    tooltipText;
    /**
     * Tooltip width
     */
    tooltipWidth = 0;
    /**
     * Set the value to select the checked ath-radio-button
     */
    value;
    watchValue(newValue) {
        this.checkRadioByValue(newValue);
    }
    // ACCESSIBILITY
    /**
     * Accessible name for the group
     */
    ariaLabel;
    /**
     * Screen-reader-only text indicating the group is required
     */
    requiredAriaLabel;
    //EVENTS
    /*
     * Emitted when any radio button changes its value
     */
    athChangeValue;
    handleNavigation(event) {
        const eventKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (eventKeys.includes(event.key)) {
            event.preventDefault();
            const radioButtons = Array.from(this.el.querySelectorAll('ath-radio-button'));
            const totalButtons = radioButtons.length;
            let nextIndex = this.index;
            if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                nextIndex = this.getNextIndex(radioButtons, nextIndex, -1, totalButtons);
            }
            else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                nextIndex = this.getNextIndex(radioButtons, nextIndex, 1, totalButtons);
            }
            else if (event.key === 'Home') {
                nextIndex = this.getNextIndex(radioButtons, -1, 1, totalButtons);
            }
            else if (event.key === 'End') {
                nextIndex = this.getNextIndex(radioButtons, 1, -1, totalButtons);
            }
            this.index = nextIndex;
            const nextRadioButton = radioButtons[nextIndex];
            if (typeof nextRadioButton.setFocus === 'function') {
                nextRadioButton.setFocus();
            }
        }
    }
    handleValueChange(event) {
        const target = event.target;
        this.checkRadioByValue(target.value);
        this.athChangeValue.emit(event.detail.value);
    }
    componentDidLoad() {
        this.spreadProperties();
        if (this.value) {
            this.checkRadioByValue(this.value);
        }
        else {
            this.checkChecked();
        }
    }
    componentWillLoad() {
        this.initialValue = this.value;
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.index = 0;
        this.checkRadioByValue(this.initialValue);
    }
    checkRadioByValue(value) {
        const radioButtons = Array.from(this.el.querySelectorAll('ath-radio-button'));
        const index = radioButtons.findIndex(radio => radio.value === value);
        if (index > -1) {
            const radioButton = radioButtons[index];
            this.uncheck(radioButton);
            radioButton.setTabindex(0);
            radioButton.setFocus();
        }
        else {
            this.uncheck(null);
            this.setFocusFirstActiveRadio();
            this.athChangeValue.emit(value);
        }
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    getNextIndex = (radioButtons, currentIndex, direction, totalButtons) => {
        let newIndex = (currentIndex + direction + totalButtons) % totalButtons;
        while (radioButtons[newIndex].disabled) {
            newIndex = (newIndex + direction + totalButtons) % totalButtons;
        }
        return newIndex;
    };
    uncheck(activeRadioButton) {
        const radioButtons = Array.from(this.el.querySelectorAll('ath-radio-button'));
        radioButtons.forEach(item => {
            const radioButtonElement = item;
            if (item !== activeRadioButton && radioButtonElement.checked) {
                radioButtonElement.unCheck();
                radioButtonElement.setTabindex(-1);
            }
        });
    }
    ariaDescribedBy = () => {
        const descriptions = {};
        if (this.helperText != undefined)
            descriptions[this.helperTextId] = this.helperTextId;
        if (this.feedback != FeedbackTypes.None)
            descriptions[this.feedbackId] = this.feedbackId;
        return descriptions;
    };
    getAttributesGroup() {
        const describedByIds = Object.keys(this.ariaDescribedBy()).join(' ');
        const ariaLabelledByIds = this.showRequired ? `${this.labelId} ${this.srOnlyId}` : this.labelId;
        return {
            'role': 'radiogroup',
            'id': this.hostId,
            'name': this.name,
            'aria-label': this.ariaLabel,
            'aria-labelledby': ariaLabelledByIds,
            'aria-describedby': describedByIds,
            'aria-invalid': this.feedback === FeedbackTypes.Error ? 'true' : undefined,
            'aria-required': this.showRequired ? 'true' : undefined,
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
    getLabelProps = () => ({
        id: this.labelId,
        htmlForId: undefined,
        label: this.label,
        required: this.showRequired,
        showRequired: this.showRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    checkChecked() {
        const radioButtons = Array.from(this.el.querySelectorAll('ath-radio-button'));
        let firstChecked = false;
        radioButtons.forEach((radioButtonElement, index) => {
            if (radioButtonElement.checked && !firstChecked && !radioButtonElement.disabled) {
                firstChecked = true;
                this.index = index;
                this.value = radioButtonElement.value;
            }
        });
        if (!firstChecked) {
            this.setFocusFirstActiveRadio();
        }
    }
    setFocusFirstActiveRadio() {
        const radioButtons = Array.from(this.el.querySelectorAll('ath-radio-button'));
        const firstEnabledIndex = radioButtons.findIndex(rb => !rb.disabled);
        if (firstEnabledIndex !== -1) {
            const firstEnabled = radioButtons[firstEnabledIndex];
            firstEnabled.setTabindex(0);
            this.index = firstEnabledIndex;
        }
    }
    /**
     * Propagate attributes from parent to children.
     * Set boolean attributes only for true.
     */
    spreadProperties() {
        const radioButtons = this.el.querySelectorAll('ath-radio-button');
        radioButtons.forEach(radioButton => {
            const radioButtonElement = radioButton;
            if (this.readonly) {
                radioButtonElement.readonly = true;
            }
            if (this.disabled) {
                radioButtonElement.disabled = true;
            }
            if (this.name !== undefined) {
                radioButtonElement.name = this.name;
            }
        });
    }
    getGroupClassNames = () => ({
        'ath-radiobutton__group': true,
        [`ath-radiobutton__group-${this.orientation}`]: true,
    });
    render() {
        const ariaAttributes = this.getAttributesGroup();
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        return (h(Host, { key: '9df73742cad0f46464ad696b4001dfa2e6ce75c0' }, h("fieldset", { key: '59e331dffdb0b9642a4dacc7dea97fb536eb703e', class: "ath-radiobutton-group", ...ariaAttributes }, !!this.label && h(FcInputLabel, { key: 'c09ca8161b31e04237f91a8bf4254512dfb5b4a1', ...labelProps }), this.showRequired && (h("div", { key: 'd570e1f1ada36938dee4a8f40af1991cfad3da8b', id: this.srOnlyId, class: "sr-only" }, this.requiredAriaLabel)), h("div", { key: '3159347425a1a5d3268e4042f0a676fc84b6917f', class: this.getGroupClassNames() }, h("slot", { key: 'dcb57ddcae288cc6e14991b685891cb0f926c932' })), !!this.helperText && h(FcInputHelperText, { key: 'fa404eb0386547b0c30b032f9bff9350a14b2f04', ...helperTextProps }), this.feedback === 'error' && !this.disabled && !this.readonly && h(FcInputFeedback, { key: 'd69f81573e0576a6a1a1ad430396d0b8d1f032fb', ...feedbackProps }))));
    }
    static get is() { return "ath-radio-button-group"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["radio-button-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio-button-group.css"]
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
                    "text": "Indicates whether the group is disabled"
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
                    "original": "FeedbackType",
                    "resolved": "\"error\" | \"none\" | \"success\"",
                    "references": {
                        "FeedbackType": {
                            "location": "import",
                            "path": "./radio-button-group.model",
                            "id": "src/components/radio-button/radio-button-group/radio-button-group.model.ts::FeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the Feedback type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "FeedbackTypes.None"
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
                    "text": "Feedback text to be displayed"
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
                    "text": "Helper text to be displayed"
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
                    "text": "Name attribute to apply to the whole group"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "OrientationType",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "OrientationType": {
                            "location": "import",
                            "path": "./radio-button-group.model",
                            "id": "src/components/radio-button/radio-button-group/radio-button-group.model.ts::OrientationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the orientation of the group"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "OrientationTypes.Vertical"
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
                    "text": "Indicates whether the group is read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "showRequired": {
                "type": "boolean",
                "attribute": "show-required",
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
                    "text": "Indicates whether to show the asterisk"
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
                    "text": "Tooltip text"
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
                    "text": "Tooltip width"
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
                    "text": "Set the value to select the checked ath-radio-button"
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
                    "text": "Accessible name for the group"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "requiredAriaLabel": {
                "type": "string",
                "attribute": "required-aria-label",
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
                    "text": "Screen-reader-only text indicating the group is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athChangeValue",
                "name": "athChangeValue",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleNavigation",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "athChange",
                "method": "handleValueChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=radio-button-group.js.map
