import { h } from "@stencil/core";
import { StepperOrientation, StepperSize } from "./stepper-model";
import { StepAlignment, StepRole, StepSize } from "./step/step-model";
let stepperSequence = 0;
export class AthStepper {
    hostId = ++stepperSequence;
    headingId = `tab-${this.hostId}`;
    timeoutProgressBarComp;
    el;
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
    athRole = StepRole.Button;
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
    orientation = StepperOrientation.Horizontal;
    /**
     * Indicates if the all the steps are read-only
     */
    readonly = false;
    /**
     * Indicates the size of the steps
     */
    size = StepperSize.Medium;
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
            stepElement.athRole = this.athRole || StepRole.Button;
            stepElement.alignment = this.orientation === StepperOrientation.Horizontal ? StepAlignment.Center : StepAlignment.Left;
            stepElement.athId = index;
            stepElement.size = !(this.size === StepperSize.Medium) ? StepSize.Sm : StepSize.Md;
            stepElement.total = steps.length;
        });
    };
    manageDividers = () => {
        const steps = Array.from(this.el.querySelectorAll('ath-step'));
        steps.forEach((stepElement, index) => {
            if (this.orientation === StepperOrientation.Horizontal) {
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
            progressBarArray.push(h("ath-progress-bar", { infinite: false, "label-alignment": "stack", max: 1, min: 0, value: 0 }));
        }
        return progressBarArray;
    }
    renderStepGroup = () => {
        return (h("div", { role: "list", class: "ath-step_group", "aria-labelledby": this.headingId }, h("slot", null)));
    };
    renderSteps = () => {
        if (this.orientation === StepperOrientation.Horizontal) {
            const progressBarArray = this.orientation === StepperOrientation.Horizontal ? this.renderProgressBar() : '';
            return (h("div", { class: "ath-step_steps" }, h("div", { class: "ath-step_progressbar" }, progressBarArray), this.renderStepGroup()));
        }
        else {
            return this.renderStepGroup();
        }
    };
    render() {
        return (h("section", { key: '2bcf469be6e8eb1b59f3ea16280068be1eb006c5' }, h("div", { key: 'e2a0b314d7c74ca91ead71599707f305dcb71ae9', class: this.getClassNames() }, this.headingText && (h("div", { key: 'f4d78bbc51853a7f5cc535719701e57c53eedff1', class: "ath-stepper_heading" }, this.headingIcon && (h("div", { key: '8dac9cafe960aa6276b048da011e58fded0aa159', class: "ath-stepper_heading-icon" }, h("ath-icon", { key: 'a5b41448c3c825499fab39da60fb564b76146a5d', icon: this.headingIcon, size: "lg", color: "primary", "aria-hidden": "true" }))), h("div", { key: '74db3972dd82fe74d056147b414cfc8ee983fefc', class: "ath-stepper_heading-text", id: this.headingId }, this.headingText))), this.renderSteps())));
    }
    static get is() { return "ath-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stepper.css"]
        };
    }
    static get properties() {
        return {
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "Indicates if the steps are interactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "collapseLabel": {
                "type": "string",
                "attribute": "collapse-label",
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
                    "text": "Indicates the custom accessible text for the chevron to collapse"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Colapsar paso [number]'"
            },
            "completedLabel": {
                "type": "string",
                "attribute": "completed-label",
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
                    "text": "Specifies the accessible text for the CHECK indicator of completion, which will be injected into the steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Completado'"
            },
            "athAriaLabel": {
                "type": "string",
                "attribute": "ath-aria-label",
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
                    "text": "Defines the accessible text for the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLiveMessage": {
                "type": "string",
                "attribute": "aria-live-message",
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
                    "text": "Defines the message for screen readers when changing the step. Only applied on non-interactive steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Paso actual [number]'"
            },
            "athRole": {
                "type": "string",
                "attribute": "ath-role",
                "mutable": false,
                "complexType": {
                    "original": "StepRoleType",
                    "resolved": "\"button\" | \"link\"",
                    "references": {
                        "StepRoleType": {
                            "location": "import",
                            "path": "./step/step-model",
                            "id": "src/components/stepper/step/step-model.ts::StepRoleType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the role of the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "StepRole.Button"
            },
            "errorLabel": {
                "type": "string",
                "attribute": "error-label",
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
                    "text": "Specifies the accessible text for the error indicator in steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Error'"
            },
            "expandLabel": {
                "type": "string",
                "attribute": "expand-label",
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
                    "text": "Indicates the custom accessible text for the chevron to expand"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Expandir paso [number]'"
            },
            "headingIcon": {
                "type": "string",
                "attribute": "heading-icon",
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
                    "text": "Indicates the icon to use in the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
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
                    "text": "Indicates the title of the stepper"
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
                    "original": "StepperOrientationType",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "StepperOrientationType": {
                            "location": "import",
                            "path": "./stepper-model",
                            "id": "src/components/stepper/stepper-model.ts::StepperOrientationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the orientation of the stepper"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "StepperOrientation.Horizontal"
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
                    "text": "Indicates if the all the steps are read-only"
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
                    "original": "StepperSizeType",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "StepperSizeType": {
                            "location": "import",
                            "path": "./stepper-model",
                            "id": "src/components/stepper/stepper-model.ts::StepperSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the size of the steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "StepperSize.Medium"
            },
            "startFrom": {
                "type": "number",
                "attribute": "start-from",
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
                    "text": "Indicates the number of the first step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            }
        };
    }
    static get events() {
        return [{
                "method": "athSelect",
                "name": "athSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "HTMLAthStepElement",
                    "resolved": "HTMLAthStepElement",
                    "references": {
                        "HTMLAthStepElement": {
                            "location": "global",
                            "id": "global::HTMLAthStepElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "athClick",
                "method": "manageSelectedStepId",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=stepper.js.map
