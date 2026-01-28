import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { F as FcInputHelperText, a as FcInputFeedback } from './fc-helper-Cb62a4Uy.js';
import './icons-BnU0zKUi.js';
import './button.model-D0e48E4w.js';
import { F as FcInputLabel } from './fc-label-DNt7Tjhl.js';
import { C as CheckboxValue } from './checkbox.model-DynFLFRk.js';

var FeedbackType;
(function (FeedbackType) {
    FeedbackType["None"] = "none";
    FeedbackType["Error"] = "error";
    FeedbackType["Success"] = "success";
})(FeedbackType || (FeedbackType = {}));

const checkboxGroupCss = ":host{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary)}:host .ath-input__helper-text{display:flex;justify-content:flex-start;align-items:center;align-self:stretch;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-input__feedback{display:flex;align-items:flex-start;gap:var(--ath-spacing-feedback-text-col-gap);align-self:stretch;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-input__feedback--error{color:var(--ath-color-fg-feedback-danger)}:host .ath-input__feedback--success{color:var(--ath-color-fg-feedback-success)}:host .ath-input__feedback--warning{color:var(--ath-color-fg-feedback-warning)}:host .padding{display:flex;padding-top:var(--ath-spacing-feedback-text-padding-top);align-items:center}:host .ath-input__label{display:flex;flex-direction:row;align-items:flex-start;gap:var(--ath-spacing-label-col-gap);font-family:var(--ath-font-family-primary);color:var(--ath-color-fg-default);font-weight:var(--ath-font-weight-medium);font-size:var(--ath-font-size-input-label);line-height:var(--ath-font-line-height-input-label)}:host .ath-input__label__wrapper{display:flex;align-items:center;gap:var(--ath-spacing-label-required-col-gap)}:host .ath-input__label ath-icon{color:var(--ath-color-fg-default)}:host .ath-input__label .required{color:var(--ath-color-fg-feedback-danger);padding-left:4px}:host .ath-input__label ath-button{display:flex;flex-direction:row;align-items:center;justify-content:center;width:24px;height:24px}:host .ath-checkbox--group{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-checkbox-group-row-gap);border:none;margin:0px;padding:0px}:host .ath-checkbox--group__items{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-checkbox-group-row-gap);align-self:stretch}:host .ath-checkbox--group .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";

let checkboxGroupSequence = 0;
const AthCheckBoxGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athChecked = createEvent(this, "athChecked");
    }
    checkboxGroupId = `checkbox-group-${++checkboxGroupSequence}`;
    checkboxGroupHelperTextId = `${this.checkboxGroupId}-helper-text`;
    checkboxGroupFeedbackId = `${this.checkboxGroupId}-feedback`;
    srOnlyId = `${this.checkboxGroupId}-sr-only`;
    get el() { return getElement(this); }
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
};
AthCheckBoxGroup.style = checkboxGroupCss;

export { AthCheckBoxGroup as ath_checkbox_group };
//# sourceMappingURL=ath-checkbox-group.entry.js.map
