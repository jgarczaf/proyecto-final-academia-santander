import { h, Host } from "@stencil/core";
import { StepAlignment, StepFeedback, StepSize, StepRole } from "./step-model";
import { IconSize } from "../../../utils/helper/index";
import { FcButtonComp } from "../../../sharedfc/input/index";
import { ButtonIconPosition } from "../../button/button.model";
import { IconColor } from "../../icon/icon.model";
import { StepperSize } from "../stepper-model";
let stepSequence = 0;
export class AthStep {
    hostId = `step-${++stepSequence}`;
    titleId = `title-${this.hostId}`;
    panelId = `panel-${this.hostId}`;
    /**
     * Defines the action text
     */
    actionText;
    /**
     * Indicates the alignment of the step
     */
    alignment;
    /**
     * Indicates if the step is interactive
     */
    clickable;
    /**
     * Defines the accessible text for the chevron when its function is to collapse
     */
    collapseLabel;
    /**
     * Defines the accessible text for the completed state
     */
    completedLabel;
    /**
     * Indicates if the step is disabled
     */
    disabled = false;
    /**
     * Defines the accessible text for the step
     */
    athAriaLabel;
    /**
     * Defines the accessible message announced when the step changes to selected.Only applied on non-interactive steps
     */
    ariaLiveMessage;
    /**
     * Identifies the step by its position in the list
     */
    athId;
    /**
     * Indicates if the step is a button or a link
     */
    athRole = StepRole.Button;
    /**
     * Specifies the accessible text for the error indicator
     */
    errorLabel;
    /**
     * Indicates the custom accessible text for the chevron to expand
     */
    expandLabel;
    /**
     * Indicates if the step contains an error
     */
    feedback = StepFeedback.None;
    /**
     * Defines the title of the step
     */
    headingText;
    /**
     * Indicates if the step is collapsable
     */
    isCollapsable = false;
    /**
     * Indicates if the step is completed
     */
    isComplete = false;
    /**
     * Indicates if the slot is expanded
     */
    isExpanded = false;
    /**
     * Indicates the number of the step
     */
    number;
    /**
     * Indicates that the step is read-only
     */
    readonly = false;
    /**
     * Indicates that the step is in progress
     */
    selected;
    /**
     * Sets the size of the step
     */
    size;
    /**
     * Indicates the total number of steps in the stepper
     */
    total;
    athClick;
    el;
    isHover;
    buttonAriaLive;
    isActionVisible;
    buttonAriaLabel;
    finalcollapseLabel;
    finalexpandLabel;
    getValidAriaValue(value) {
        return value && value.trim() !== '' ? value : undefined;
    }
    componentWillLoad() {
        this.isActionVisible = this.actionText && this.clickable && !this.disabled && !this.readonly && !this.selected;
        this.getStepAria('label');
        this.getStepAria('live');
        this.getChevronAriaLabels();
    }
    componentWillUpdate() {
        this.isActionVisible = this.actionText && this.clickable && !this.disabled && !this.readonly && !this.selected;
    }
    getClassNames = () => ({
        'ath-step': true,
        [`ath-step--${this.alignment}--${this.size}`]: !!this.alignment && !!this.size,
        [`ath-step--complete`]: this.isComplete === true,
        [`ath-step--disabled`]: this.disabled === true,
        [`ath-step--error`]: this.feedback === StepFeedback.Error && !this.disabled,
        [`ath-step--readonly`]: this.readonly === true,
        [`ath-step--selected`]: this.selected === true,
        [`ath-step--clickable`]: this.clickable === true,
    });
    renderIndicator = () => {
        const iconSize = this.size === StepperSize.Medium ? IconSize.Medium : IconSize.Extrasmall;
        return (h("div", { class: "ath-step-indicator" }, h("div", { class: "ath-step__number" }, this.isComplete ? (h("ath-icon", { icon: "completed", color: !this.disabled ? IconColor.Inverse : IconColor.Disabled, size: iconSize })) : this.feedback === StepFeedback.Error ? (h("ath-icon", { icon: "failed", color: this.disabled ? IconColor.Disabled : this.selected || this.isHover ? IconColor.Inverse : IconColor.Error, size: iconSize })) : (h("div", { class: "text" }, this.number || 0))), this.alignment === StepAlignment.Left && (h("div", { class: "ath-step__divider" }, h("div", { class: "line" })))));
    };
    renderContent = () => {
        return (h("div", { class: "ath-step-content" }, h("div", { class: "ath-step_content-info" }, h("div", { class: "header-text", id: this.titleId }, this.headingText), this.isActionVisible && h("div", { class: "action-text" }, this.actionText), h("div", { "aria-labelledby": this.titleId, "aria-hidden": !this.isExpanded ? 'true' : 'false', class: this.alignment === StepAlignment.Left && !this.isExpanded && 'ath-visibility-hidden', id: this.panelId }, h("slot", null)))));
    };
    collapseButton = () => {
        const size = this.size === StepSize.Sm ? 'xs' : 'md';
        return (h("div", { class: {
                'ath-collapse-button': true,
                'ath-collapse-button--open': this.isExpanded,
            } }, h(FcButtonComp, { icon: "chevron_down", color: this.disabled ? IconColor.Disabled : IconColor.Default, iconPosition: ButtonIconPosition.IconOnly, size: size, onClick: this.handleCollapse, buttonAriaLabel: this.isExpanded ? this.finalcollapseLabel : this.finalexpandLabel, "aria-controls": this.isCollapsable ? this.panelId : undefined, "aria-expanded": this.isExpanded, disabled: this.disabled })));
    };
    handleClick = () => {
        if (this.isActionVisible) {
            this.athClick.emit(this.athId);
        }
    };
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleClick();
        }
    }
    handleCollapse = () => {
        this.isExpanded = !this.isExpanded;
    };
    getStepAria(labelType) {
        const ariaProperty = labelType === 'label' ? this.athAriaLabel : this.ariaLiveMessage;
        const replacements = {
            '[number]': this.number ? this.number.toString() : '',
            '[total]': this.total ? this.total.toString() : '',
            '[heading-text]': this.headingText ? this.headingText : '',
            '[action-text]': this.actionText ? this.actionText : '',
            '[completed]': this.completedLabel ? this.completedLabel : '',
            '[error]': this.errorLabel ? this.errorLabel : '',
        };
        let statelessButtonAria;
        if (ariaProperty) {
            statelessButtonAria = ariaProperty.replace(/\[number\]|\[total\]|\[heading-text\]|\[action-text\]|\[completed\]|\[error\]/g, match => replacements[match]);
        }
        let stateButtonAria = statelessButtonAria;
        if (ariaProperty && ariaProperty.includes('[state-label]')) {
            if (this.isComplete && this.completedLabel) {
                stateButtonAria = statelessButtonAria.replace('[state-label]', this.completedLabel);
            }
            else if (this.feedback === StepFeedback.Error && this.errorLabel) {
                stateButtonAria = statelessButtonAria.replace('[state-label]', this.errorLabel);
            }
            else {
                stateButtonAria = statelessButtonAria.replace('[state-label]', '');
            }
        }
        if (labelType === 'label') {
            this.buttonAriaLabel = stateButtonAria;
        }
        else {
            this.buttonAriaLive = stateButtonAria;
        }
    }
    getChevronAriaLabels = () => {
        if (this.collapseLabel) {
            this.finalcollapseLabel = this.collapseLabel.replace('[number]', this.number.toString()).replace('[heading-text]', this.headingText);
        }
        if (this.expandLabel) {
            this.finalexpandLabel = this.expandLabel.replace('[number]', this.number.toString()).replace('[heading-text]', this.headingText);
        }
    };
    render() {
        return (h(Host, { key: '06d388c9ffc61f42bf8fb461e3fadbbd3d2cd30e', role: "listitem" }, h("div", { key: 'f334f996a5d671196a2bd77b6797c8432118cd17', class: this.getClassNames(), onMouseEnter: () => {
                if (!this.disabled && this.clickable) {
                    this.isHover = true;
                }
            }, onMouseLeave: () => {
                this.isHover = false;
            } }, h("div", { key: '593e93c500a10409d85e085026a36a4747462a36', class: "ath-step-wrapper", tabindex: this.isActionVisible ? 0 : -1, onClick: this.handleClick, onKeyDown: e => this.handleKeyDown(e), role: this.isActionVisible ? this.athRole : undefined, "aria-current": this.selected ? 'step' : undefined, "aria-describedby": this.getValidAriaValue(this.panelId), "aria-disabled": this.disabled, "aria-label": this.isActionVisible ? this.getValidAriaValue(this.buttonAriaLabel) : undefined }, this.renderIndicator(), this.renderContent(), !this.isActionVisible && (h("div", { key: '55960e14c1489aade3cfb9588e232dfd2176f508', class: "ath-visibility-hidden", role: "status", "aria-live": "polite", "aria-atomic": "true" }, this.selected && this.getValidAriaValue(this.buttonAriaLive)))), this.isCollapsable && this.alignment === StepAlignment.Left && this.collapseButton())));
    }
    static get is() { return "ath-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["step.css"]
        };
    }
    static get properties() {
        return {
            "actionText": {
                "type": "string",
                "attribute": "action-text",
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
                    "text": "Defines the action text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "StepAlignmentType",
                    "resolved": "\"center\" | \"left\"",
                    "references": {
                        "StepAlignmentType": {
                            "location": "import",
                            "path": "./step-model",
                            "id": "src/components/stepper/step/step-model.ts::StepAlignmentType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the alignment of the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "Indicates if the step is interactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Defines the accessible text for the chevron when its function is to collapse"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Defines the accessible text for the completed state"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Indicates if the step is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Defines the accessible message announced when the step changes to selected.Only applied on non-interactive steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "athId": {
                "type": "number",
                "attribute": "ath-id",
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
                    "text": "Identifies the step by its position in the list"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "athRole": {
                "type": "string",
                "attribute": "ath-role",
                "mutable": true,
                "complexType": {
                    "original": "StepRoleType",
                    "resolved": "\"button\" | \"link\"",
                    "references": {
                        "StepRoleType": {
                            "location": "import",
                            "path": "./step-model",
                            "id": "src/components/stepper/step/step-model.ts::StepRoleType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates if the step is a button or a link"
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
                    "text": "Specifies the accessible text for the error indicator"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "reflect": false
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "StepFeedbackType",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "StepFeedbackType": {
                            "location": "import",
                            "path": "./step-model",
                            "id": "src/components/stepper/step/step-model.ts::StepFeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates if the step contains an error"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "StepFeedback.None"
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
                    "text": "Defines the title of the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "isCollapsable": {
                "type": "boolean",
                "attribute": "is-collapsable",
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
                    "text": "Indicates if the step is collapsable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "isComplete": {
                "type": "boolean",
                "attribute": "is-complete",
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
                    "text": "Indicates if the step is completed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "isExpanded": {
                "type": "boolean",
                "attribute": "is-expanded",
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
                    "text": "Indicates if the slot is expanded"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "number": {
                "type": "number",
                "attribute": "number",
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
                    "text": "Indicates the number of the step"
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
                    "text": "Indicates that the step is read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": "Indicates that the step is in progress"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "StepSizeType",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "StepSizeType": {
                            "location": "import",
                            "path": "./step-model",
                            "id": "src/components/stepper/step/step-model.ts::StepSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the size of the step"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "total": {
                "type": "number",
                "attribute": "total",
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
                    "text": "Indicates the total number of steps in the stepper"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isHover": {},
            "buttonAriaLive": {}
        };
    }
    static get events() {
        return [{
                "method": "athClick",
                "name": "athClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=step.js.map
