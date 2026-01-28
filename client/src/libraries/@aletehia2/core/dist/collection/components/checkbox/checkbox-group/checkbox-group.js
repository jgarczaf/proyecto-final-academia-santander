import { Host, h } from "@stencil/core";
import { FeedbackType } from "./checkbox-group.model";
import { FcInputFeedback, FcInputHelperText, FcInputLabel } from "../../../sharedfc/input/index";
import { CheckboxValue } from "../checkbox.model";
let checkboxGroupSequence = 0;
export class AthCheckBoxGroup {
    checkboxGroupId = `checkbox-group-${++checkboxGroupSequence}`;
    checkboxGroupHelperTextId = `${this.checkboxGroupId}-helper-text`;
    checkboxGroupFeedbackId = `${this.checkboxGroupId}-feedback`;
    srOnlyId = `${this.checkboxGroupId}-sr-only`;
    el;
    /**
     * Indica si esta deshabilitado
     */
    disabled = false;
    /**
     * Indica el tipo de feedback
     */
    feedback = FeedbackType.None;
    /**
     * Texto feedback
     */
    feedbackText;
    /**
     * Texto ayuda
     */
    helperText;
    /**
     * Texto para el Label
     */
    label;
    /**
     * Atributo name a aplicar a todo el grupo
     */
    name;
    /**
     * Indica si es solo lectura
     */
    readonly = false;
    /**
     * Indica si se muestra el asterisco
     */
    showRequired = false;
    /**
     * Indica el texto del tooltip
     */
    tooltipText;
    /**
     * Indica el ancho de la burbuja tooltip
     */
    tooltipWidth = 0;
    // ACCESSIBILITY
    /**
     * Texto oculto para lectores de pantalla indicando que el grupo es requerido
     */
    requiredAriaLabel;
    // EVENTS
    /**
     * Emite el array de checkboxes seleccionados
     */
    athChecked;
    componentDidLoad() {
        this.spreadProperties();
        this.initializeSelectedCheckboxes();
    }
    /**
     * Propagate attributes from parent to children.
     * Set boolean attributes only for true.
     */
    spreadProperties() {
        const checkboxes = this.el.querySelectorAll('ath-checkbox');
        checkboxes.forEach((checkbox) => {
            if (this.readonly) {
                checkbox.readonly = true;
            }
            if (this.disabled) {
                checkbox.disabled = true;
            }
            if (this.name !== undefined) {
                checkbox.name = this.name;
            }
        });
    }
    selectedCheckboxes = [];
    initializeSelectedCheckboxes() {
        const checkboxes = Array.from(this.el.querySelectorAll('ath-checkbox'));
        checkboxes.forEach(checkbox => {
            const checkboxElement = checkbox;
            const label = checkboxElement.getAttribute('label');
            const name = checkboxElement.getAttribute('name');
            const value = checkboxElement.getAttribute('value');
            if (value === CheckboxValue.True) {
                this.selectedCheckboxes.push({ label: label, name: name, value: value });
            }
        });
    }
    handleChildCheckboxChange(event) {
        event.stopPropagation();
        this.updateSelectedCheckboxes(event.detail);
    }
    updateSelectedCheckboxes(checkboxChangeEventDetail) {
        const { label, name, value } = checkboxChangeEventDetail;
        const index = this.selectedCheckboxes.findIndex(selected => selected.label === label);
        if (index === -1) {
            this.selectedCheckboxes.push({ label, name, value });
        }
        else {
            this.selectedCheckboxes.splice(index, 1);
        }
        this.athChecked.emit(this.selectedCheckboxes);
    }
    ariaDescribedBy = () => {
        const descriptions = {};
        if (this.helperText != undefined)
            descriptions[this.checkboxGroupHelperTextId] = this.checkboxGroupHelperTextId;
        if (this.feedback != FeedbackType.None)
            descriptions[this.checkboxGroupFeedbackId] = this.checkboxGroupFeedbackId;
        return descriptions;
    };
    getAttributesGroup() {
        const describedByIds = Object.keys(this.ariaDescribedBy()).length !== 0 ? Object.keys(this.ariaDescribedBy()).join(' ') : undefined;
        const ariaLabelledByIds = this.showRequired ? `${this.checkboxGroupId} ${this.srOnlyId}` : this.checkboxGroupId;
        return {
            'role': 'group',
            'id': this.checkboxGroupId,
            'name': this.name,
            'aria-label': !!this.label ? this.label : undefined,
            'aria-labelledby': ariaLabelledByIds,
            'aria-describedby': describedByIds,
            'aria-invalid': this.feedback === FeedbackType.Error ? 'true' : undefined,
        };
    }
    getFeedbackProps = () => ({
        id: this.checkboxGroupFeedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    getHelperTextProps = () => {
        return {
            id: this.checkboxGroupHelperTextId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getLabelProps = () => ({
        htmlForId: this.checkboxGroupId,
        label: this.label,
        showRequired: this.showRequired,
        required: this.showRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    render() {
        const ariaAttributes = this.getAttributesGroup();
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        return (h(Host, { key: '837db2a62381b01cbeca0867b5bb61391d203b52' }, h("fieldset", { key: '224a654002e3ece417df960464625133a394c826', class: "ath-checkbox--group", ...ariaAttributes }, !!this.label && h(FcInputLabel, { key: '047864d0d2340c2ef34cd164b800523c38f3d6a6', ...labelProps }), this.showRequired && (h("div", { key: '0f09d12b13ee9218d20ba44bf5a85052b45702d1', id: this.srOnlyId, class: "sr-only" }, this.requiredAriaLabel)), h("div", { key: '81839ee0e8d0a16c22ba6f287fb45c84ad6c2b5c', class: "ath-checkbox--group__items" }, h("slot", { key: 'f0cb21b24ea3a93bca190737e25278579692c860' })), this.helperText && h(FcInputHelperText, { key: '95b3a6f309db7673080614c2a792b5ada4000098', ...helperTextProps }), this.feedback === 'error' && !this.disabled && !this.readonly && h(FcInputFeedback, { key: 'cfdda04d375d2f0349e6972829a8ba606de5baa7', ...feedbackProps }))));
    }
    static get is() { return "ath-checkbox-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["checkbox-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["checkbox-group.css"]
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
                    "text": "Indica si esta deshabilitado"
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
                    "original": "FeedbackTypes",
                    "resolved": "\"error\" | \"none\" | \"success\"",
                    "references": {
                        "FeedbackTypes": {
                            "location": "import",
                            "path": "./checkbox-group.model",
                            "id": "src/components/checkbox/checkbox-group/checkbox-group.model.ts::FeedbackTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indica el tipo de feedback"
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
                    "text": "Texto feedback"
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
                    "text": "Texto ayuda"
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
                    "text": "Texto para el Label"
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
                    "text": "Atributo name a aplicar a todo el grupo"
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
                    "text": "Indica si es solo lectura"
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
                    "text": "Indica si se muestra el asterisco"
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
                    "text": "Indica el texto del tooltip"
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
                    "text": "Indica el ancho de la burbuja tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
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
                    "text": "Texto oculto para lectores de pantalla indicando que el grupo es requerido"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athChecked",
                "name": "athChecked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emite el array de checkboxes seleccionados"
                },
                "complexType": {
                    "original": "CheckboxChangeEventDetail[]",
                    "resolved": "CheckboxChangeEventDetail[]",
                    "references": {
                        "CheckboxChangeEventDetail": {
                            "location": "import",
                            "path": "../checkbox.model",
                            "id": "src/components/checkbox/checkbox.model.ts::CheckboxChangeEventDetail"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "athChange",
                "method": "handleChildCheckboxChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=checkbox-group.js.map
