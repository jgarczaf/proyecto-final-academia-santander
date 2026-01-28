'use strict';

var index = require('./index--hWT2F8k.js');
var stepperModel = require('./stepper-model-C4yXUfNz.js');

const stepperCss = ":host .ath-stepper--horizontal{--stepper-direction:row;--group-gap:var(--ath-spacing-stepper-horizontal-col-gap)}:host .ath-stepper--vertical{--stepper-direction:column;--group-gap:var(--ath-spacing-stepper-vertical-row-gap)}:host .ath-stepper{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-stepper-row-gap)}:host .ath-stepper_heading{display:flex;align-items:center;gap:var(--ath-spacing-stepper-header-col-gap);align-self:stretch}:host .ath-stepper_heading-icon{display:flex;padding:var(--ath-spacing-stepper-header-icon-padding-around);align-items:center;gap:8px;border-radius:var(--ath-border-radius-stepper-header-icon);border:1px solid var(--ath-color-stepper-header-icon-border);background:var(--ath-color-stepper-header-icon-bg)}:host .ath-stepper_heading-text{flex:1 0 0;color:var(--ath-color-stepper-header-fg);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-heading-4);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-4)}:host .ath-stepper .ath-step_group{display:flex;flex-direction:var(--stepper-direction);align-items:flex-start;gap:var(--group-gap);align-self:stretch;margin:0px;padding:0px}:host .ath-stepper .ath-step_steps{display:flex;flex-direction:column;align-items:center;gap:var(--ath-spacing-stepper-step-group-row-gap);align-self:stretch}:host .ath-stepper .ath-step_progressbar{display:flex;align-items:flex-start;gap:var(--ath-spacing-stepper-step-group-progress-bar-col-gap);align-self:stretch}";

let stepperSequence = 0;
const AthStepper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athSelect = index.createEvent(this, "athSelect");
    }
    hostId = ++stepperSequence;
    headingId = `tab-${this.hostId}`;
    timeoutProgressBarComp;
    get el() { return index.getElement(this); }
    /**
     * Indicates if the steps are interactive
     */
    clickable = true;
    /**
     * Indicates the custom accessible text for the chevron to collapse
     */
    collapseLabel = 'Colapsar paso [number]';
    /**
     * Specifies the accessible text for the CHECK indicator of completion, which will be injected into the steps
     */
    completedLabel = 'Completado';
    /**
     * Defines the accessible text for the step
     */
    athAriaLabel;
    /**
     * Defines the message for screen readers when changing the step. Only applied on non-interactive steps
     */
    ariaLiveMessage = 'Paso actual [number]';
    /**
     * Indicates the role of the step
     */
    athRole = stepperModel.StepRole.Button;
    /**
     * Specifies the accessible text for the error indicator in steps
     */
    errorLabel = 'Error';
    /**
     * Indicates the custom accessible text for the chevron to expand
     */
    expandLabel = 'Expandir paso [number]';
    /**
     * Indicates the icon to use in the title
     */
    headingIcon;
    /**
     * Indicates the title of the stepper
     */
    headingText;
    /**
     * Indicates the orientation of the stepper
     */
    orientation = stepperModel.StepperOrientation.Horizontal;
    /**
     * Indicates if the all the steps are read-only
     */
    readonly = false;
    /**
     * Indicates the size of the steps
     */
    size = stepperModel.StepperSize.Medium;
    /**
     * Indicates the number of the first step
     */
    startFrom = 1;
    athSelect;
    componentWillLoad() {
        this.injectToSteps();
    }
    componentDidLoad() {
        this.manageDividers();
        this.manageProgressBar();
    }
    getValidAriaValue(value) {
        return value && value.trim() !== '' ? value : undefined;
    }
    injectToSteps = () => {
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        steps.forEach((stepElement, index) => {
            if (this.clickable) {
                stepElement.clickable = this.clickable;
            }
            if (this.collapseLabel) {
                stepElement.collapseLabel = this.collapseLabel;
            }
            if (!stepElement.completedLabel && this.completedLabel) {
                stepElement.completedLabel = this.completedLabel;
            }
            if (this.errorLabel) {
                stepElement.errorLabel = this.errorLabel;
            }
            if (this.expandLabel) {
                stepElement.expandLabel = this.expandLabel;
            }
            if (this.readonly) {
                stepElement.readonly = this.readonly;
            }
            if (!stepElement.number) {
                stepElement.number = this.startFrom + index;
            }
            if (!stepElement.athAriaLabel) {
                stepElement.athAriaLabel = this.getValidAriaValue(this.athAriaLabel);
            }
            if (!stepElement.ariaLiveMessage) {
                stepElement.ariaLiveMessage = this.getValidAriaValue(this.ariaLiveMessage);
            }
            stepElement.athRole = this.athRole || stepperModel.StepRole.Button;
            stepElement.alignment = this.orientation === stepperModel.StepperOrientation.Horizontal ? stepperModel.StepAlignment.Center : stepperModel.StepAlignment.Left;
            stepElement.athId = index;
            stepElement.size = !(this.size === stepperModel.StepperSize.Medium) ? stepperModel.StepSize.Sm : stepperModel.StepSize.Md;
            stepElement.total = steps.length;
        });
    };
    manageDividers = () => {
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        steps.forEach((stepElement, index) => {
            if (this.orientation === stepperModel.StepperOrientation.Horizontal) {
                if (index < steps.length - 1) {
                    const div = document.createElement('div');
                    div.innerHTML = '<ath-divider></ath-divider>';
                    div.role = 'listitem';
                    div.style.width = '100%';
                    div.style.transform = 'translateY(24px)';
                    stepElement.insertAdjacentElement('afterend', div);
                    if (this.readonly) {
                        div.style.visibility = 'hidden';
                        div.style.opacity = '0';
                    }
                }
            }
            else {
                const line = steps[index].shadowRoot.querySelector('.line');
                if (line) {
                    if (this.readonly) {
                        line.classList.add('hidden');
                    }
                    else {
                        if (index + 1 === steps.length) {
                            line.classList.add('hidden');
                        }
                    }
                }
            }
        });
    };
    checkDetailData(ev) {
        if (ev.detail != null || ev.detail != undefined) {
            if (ev.detail || ev.detail == 0) {
                return true;
            }
        }
        return false;
    }
    manageSelectedStepId(ev) {
        if (this.checkDetailData(ev)) {
            const stepPosition = ev.detail;
            this.manageSelection(stepPosition);
            const steps = Array.from(this.el.querySelectorAll('ath-step'));
            this.athSelect.emit(steps[stepPosition]);
            this.manageProgressBar();
            ev.stopPropagation();
        }
    }
    disconnectedCallback() {
        if (this.timeoutProgressBarComp)
            clearTimeout(this.timeoutProgressBarComp);
    }
    manageProgressBar() {
        if (this.timeoutProgressBarComp)
            clearTimeout(this.timeoutProgressBarComp);
        const progressBars = Array.from(this.el.shadowRoot.querySelectorAll('ath-progress-bar'));
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        const stepIndex = steps.findIndex(item => item.selected === true);
        let progress = 0;
        progressBars.forEach((progressElement, index) => {
            progressElement.athAriaLabel = `Progreso del paso ${index + 1} de ${steps.length}`;
            if (index <= stepIndex) {
                progressElement.valueText = index === stepIndex ? 'Actual' : this.completedLabel;
                if (progressElement.value !== 1) {
                    this.timeoutProgressBarComp = setTimeout(() => {
                        progressElement.value = 1;
                    }, 240 * progress);
                    ++progress;
                }
            }
            else {
                progressElement.value = 0;
                progressElement.valueText = 'Pendiente';
            }
        });
    }
    manageSelection = id => {
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        steps.forEach(stepElement => {
            stepElement.selected = false;
        });
        steps[id].selected = true;
    };
    getClassNames = () => ({
        'ath-stepper': true,
        [`ath-stepper--${this.orientation}`]: !!this.orientation,
    });
    renderProgressBar() {
        const progressBarArray = [];
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        const totalSteps = steps.length - 1;
        for (let i = 0; i <= totalSteps; i++) {
            progressBarArray.push(index.h("ath-progress-bar", { infinite: false, "label-alignment": "stack", max: 1, min: 0, value: 0 }));
        }
        return progressBarArray;
    }
    renderStepGroup = () => {
        return (index.h("div", { role: "list", class: "ath-step_group", "aria-labelledby": this.headingId }, index.h("slot", null)));
    };
    renderSteps = () => {
        if (this.orientation === stepperModel.StepperOrientation.Horizontal) {
            const progressBarArray = this.orientation === stepperModel.StepperOrientation.Horizontal ? this.renderProgressBar() : '';
            return (index.h("div", { class: "ath-step_steps" }, index.h("div", { class: "ath-step_progressbar" }, progressBarArray), this.renderStepGroup()));
        }
        else {
            return this.renderStepGroup();
        }
    };
    render() {
        return (index.h("section", { key: '2bcf469be6e8eb1b59f3ea16280068be1eb006c5' }, index.h("div", { key: 'e2a0b314d7c74ca91ead71599707f305dcb71ae9', class: this.getClassNames() }, this.headingText && (index.h("div", { key: 'f4d78bbc51853a7f5cc535719701e57c53eedff1', class: "ath-stepper_heading" }, this.headingIcon && (index.h("div", { key: '8dac9cafe960aa6276b048da011e58fded0aa159', class: "ath-stepper_heading-icon" }, index.h("ath-icon", { key: 'a5b41448c3c825499fab39da60fb564b76146a5d', icon: this.headingIcon, size: "lg", color: "primary", "aria-hidden": "true" }))), index.h("div", { key: '74db3972dd82fe74d056147b414cfc8ee983fefc', class: "ath-stepper_heading-text", id: this.headingId }, this.headingText))), this.renderSteps())));
    }
};
AthStepper.style = stepperCss;

exports.ath_stepper = AthStepper;
//# sourceMappingURL=ath-stepper.entry.cjs.js.map
