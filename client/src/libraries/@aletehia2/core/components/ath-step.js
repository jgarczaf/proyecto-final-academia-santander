import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { S as StepRole, a as StepFeedback, b as StepAlignment, c as StepperSize, d as StepSize } from './p-Berczj9R.js';
import { I as IconSize } from './p-BnU0zKUi.js';
import { B as ButtonIconPosition } from './p-D0e48E4w.js';
import { F as FcButtonComp } from './p-Dy-gUSQt.js';
import { I as IconColor } from './p-hrbYB415.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const stepCss = ".ath-visibility-hidden,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}:host .ath-step{--bg-number:var(--ath-color-stepper-step-indicator-bg-default);--border-number:1px solid var(--ath-color-stepper-step-indicator-border-default);--color-number:var(--ath-color-stepper-step-indicator-fg-default);--border-radius-number:var(--ath-border-radius-stepper-step-indicator);--color-header:var(--ath-color-fg-default);--color-action:var(--ath-color-fg-primary-default)}:host .ath-step--clickable:hover:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected):not(.ath-step--error){--bg-number:var(--ath-color-stepper-step-indicator-bg-hovered);--border-number:1px solid var(--ath-color-stepper-step-indicator-border-hovered);--color-number:var(--ath-color-stepper-step-indicator-fg-hovered)}:host .ath-step--clickable:hover:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected) .header-text,:host .ath-step--clickable:hover:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected) .action-text{text-decoration-line:var(--ath-font-text-decoration-underline);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:auto;text-underline-offset:auto;text-underline-position:from-font}:host .ath-step--clickable:hover.ath-step--error:not(.ath-step--disabled){--border-radius-number:var(--ath-border-radius-stepper-step-indicator);--border-number:1px solid var(--ath-color-border-danger-hovered);--bg-number:var(--ath-color-bg-danger-hovered);--color-number:var(--ath-color-stepper-step-indicator-fg-hovered)}:host .ath-step--clickable:active:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected):not(.ath-step--error){--bg-number:var(--ath-color-stepper-step-indicator-bg-pressed);--border-number:1px solid var(--ath-color-stepper-step-indicator-border-pressed);--color-number:var(--ath-color-stepper-step-indicator-fg-pressed)}:host .ath-step--clickable:active:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected) .header-text,:host .ath-step--clickable:active:not(.ath-step--disabled):not(.ath-step--readonly):not(.ath-step--selected) .action-text{text-decoration-line:var(--ath-font-text-decoration-underline);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:auto;text-underline-offset:auto;text-underline-position:from-font}:host .ath-step--complete{--border-number:1px solid var(--ath-color-stepper-step-indicator-border-complete-default);--bg-number:var(--ath-color-stepper-step-indicator-bg-complete-default);--color-number:var(--ath-color-stepper-step-indicator-icon-complete-default)}:host .ath-step--complete.ath-step-wrapper-disabled{--border-number:1px solid var(--ath-color-border-alpha-boldest-disabled);--bg-number:none;--color-number:var(--ath-color-fg-disabled)}:host .ath-step--disabled{pointer-events:none;--border-number:1px solid var(--ath-color-border-alpha-boldest-disabled);--bg-number:none;--color-number:var(--ath-color-fg-disabled);--color-header:var(--ath-color-fg-disabled);--color-action:var(--ath-color-fg-disabled)}:host .ath-step--error{--border-number:1px solid var(--ath-color-border-danger-default);--bg-number:none;--color-number:var(--ath-color-stepper-step-indicator-fg-hovered);--color-header:var(--ath-color-fg-feedback-danger)}:host .ath-step--error:not(.ath-step--disabled):active .ath-step-wrapper{--border-radius-number:var(--ath-border-radius-stepper-step-indicator);--border-number:1px solid var(--ath-color-border-danger-pressed);--bg-number:var(--ath-color-bg-danger-pressed)}:host .ath-step--readonly{--color-action:var(--ath-color-fg-disabled)}:host .ath-step--readonly:not(.ath-step--selected):not(.ath-step--complete):not(.ath-step--error){--border-number:1px solid var(--ath-color-stepper-step-indicator-border-readonly);--bg-number:var(--ath-color-stepper-step-indicator-bg-readonly);--color-number:var(--ath-color-stepper-step-indicator-fg-readonly)}:host .ath-step--readonly.ath-step--complete{--border-number:1px solid var(--ath-color-stepper-step-indicator-border-complete-readonly);--bg-number:var(--ath-color-stepper-step-indicator-bg-complete-readonly);--color-number:var(--ath-color-stepper-step-indicator-icon-complete-readonly)}:host .ath-step--selected{--border-number:1px solid var(--ath-color-stepper-step-indicator-border-selected);--bg-number:var(--ath-color-stepper-step-indicator-bg-selected);--color-number:var(--ath-color-stepper-step-indicator-fg-selected)}:host .ath-step--selected.ath-step--error{--border-number:1px solid var(--ath-color-border-danger-default);--bg-number:var(--ath-color-border-danger-default)}:host .ath-button_comp--size-xs{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-sm{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-md{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-lg{--button-padding:var(--ath-spacing-button-padding-around-sm)}.ath-button_comp{display:inline-flex;justify-content:center;align-items:center;border-radius:var(--ath-border-radius-button);border:none;background:none;padding:var(--button-padding);outline:none;transition:background 0.5s;cursor:pointer}.ath-button_comp:focus{background:var(--ath-color-bg-alpha-focus);box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}.ath-button_comp:hover{background:var(--ath-color-bg-alpha-hovered)}.ath-button_comp:active{background:var(--ath-color-bg-alpha-pressed);box-shadow:none}.ath-button_comp--disabled{pointer-events:none;color:var(--ath-color-button-icon-disabled)}:host{width:100%}:host .ath-step{display:flex;gap:var(--ath-spacing-stepper-step-content-info-padding-col-gap)}:host .ath-step--left--md{min-height:80px;align-items:flex-start}:host .ath-step--left--md .ath-step-wrapper{flex-direction:row;align-items:flex-start;gap:var(--ath-spacing-stepper-step-left-col-gap-md)}:host .ath-step--left--md .ath-step__number{height:var(--ath-sizing-stepper-step-item-height-md);width:var(--ath-sizing-stepper-step-item-width-md);padding:var(--ath-spacing-stepper-step-indicator-padding-around-md);min-width:24px}:host .ath-step--left--md .ath-step__number .text{font-size:var(--ath-font-size-stepper-step-indicator-md);line-height:var(--ath-font-line-height-stepper-step-indicator-md)}:host .ath-step--left--md .ath-step-content{padding:var(--ath-spacing-stepper-step-content-info-padding-y-md) 0px;align-items:flex-start;text-align:left}:host .ath-step--left--md .ath-step_content-info{padding-top:var(--ath-spacing-stepper-step-content-padding-top-md);gap:var(--ath-spacing-stepper-step-content-row-gap)}:host .ath-step--left--md .ath-collapse-button{padding:var(--ath-spacing-stepper-step-content-info-padding-y-md) 0}:host .ath-step--left--sm{min-height:56px;align-items:flex-start}:host .ath-step--left--sm .ath-step-wrapper{flex-direction:row;align-items:flex-start;gap:var(--ath-spacing-stepper-step-left-col-gap-md)}:host .ath-step--left--sm .ath-step__number{height:var(--ath-sizing-stepper-step-item-height-sm);width:var(--ath-sizing-stepper-step-item-width-sm);padding:var(--ath-spacing-stepper-step-indicator-padding-around-sm);min-width:16px}:host .ath-step--left--sm .ath-step__number .text{font-size:var(--ath-font-size-stepper-step-indicator-sm);line-height:var(--ath-font-line-height-stepper-step-indicator-sm)}:host .ath-step--left--sm .ath-step-content{padding-bottom:var(--ath-spacing-stepper-step-content-info-padding-bottom-sm);align-items:flex-start;text-align:left}:host .ath-step--left--sm .ath-step_content-info{gap:var(--ath-spacing-stepper-step-content-row-gap)}:host .ath-step--center--md{min-height:80px;align-items:normal}:host .ath-step--center--md .ath-step-wrapper{flex-direction:column;align-items:center;gap:var(--ath-spacing-stepper-step-center-row-gap-md)}:host .ath-step--center--md .ath-step__number{height:var(--ath-sizing-stepper-step-item-height-md);width:var(--ath-sizing-stepper-step-item-width-md);padding:var(--ath-spacing-stepper-step-indicator-padding-around-md);min-width:24px}:host .ath-step--center--md .ath-step__number .text{font-size:var(--ath-font-size-stepper-step-indicator-md);line-height:var(--ath-font-line-height-stepper-step-indicator-md)}:host .ath-step--center--md .ath-step-content{align-items:center;text-align:center}:host .ath-step--center--md .ath-step_content-info{gap:var(--ath-spacing-stepper-step-content-row-gap)}:host .ath-step--center--md .ath-collapse-button{padding:var(--ath-spacing-stepper-step-content-info-padding-y-md) 0}:host .ath-step--center--sm{min-height:56px;align-items:normal}:host .ath-step--center--sm .ath-step-wrapper{flex-direction:column;align-items:center;gap:var(--ath-spacing-stepper-step-center-row-gap-md)}:host .ath-step--center--sm .ath-step__number{height:var(--ath-sizing-stepper-step-item-height-sm);width:var(--ath-sizing-stepper-step-item-width-sm);padding:var(--ath-spacing-stepper-step-indicator-padding-around-sm);min-width:16px}:host .ath-step--center--sm .ath-step__number .text{font-size:var(--ath-font-size-stepper-step-indicator-sm);line-height:var(--ath-font-line-height-stepper-step-indicator-sm)}:host .ath-step--center--sm .ath-step-content{padding-bottom:var(--ath-spacing-stepper-step-content-info-padding-bottom-sm);align-items:center;text-align:center}:host .ath-step--center--sm .ath-step_content-info{gap:var(--ath-spacing-stepper-step-content-row-gap)}:host .ath-step__number{display:flex;box-sizing:border-box;flex-direction:column;align-items:center;justify-content:center;background:var(--bg-number);border:var(--border-number);border-radius:var(--border-radius-number);color:var(--color-number)}:host .ath-step__number .text{text-align:center;font-family:var(--ath-font-family-primary);font-style:normal;font-weight:var(--ath-font-weight-medium)}:host .ath-step__divider{display:flex;padding-top:var(--ath-spacing-stepper-step-divider-padding-top);align-items:center;flex:1 0 0}:host .ath-step__divider .line{width:2px;height:100%;background-color:var(--ath-color-border-alpha-bolder-default)}:host .ath-step-indicator{display:flex;flex-direction:column;align-items:center;align-self:stretch}:host .ath-step-content{display:flex;align-items:flex-start;flex:1 0 0}:host .ath-step_content-info{display:flex;flex-direction:column;flex:1 0 0}:host .ath-step_content-info .header-text,:host .ath-step_content-info .action-text{align-self:stretch;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);line-height:var(--ath-font-line-height-body)}:host .ath-step_content-info .header-text{color:var(--color-header);font-style:normal;font-weight:var(--ath-font-weight-body-regular)}:host .ath-step_content-info .action-text{color:var(--color-action);font-style:normal;font-weight:var(--ath-font-weight-medium)}:host .ath-step-wrapper{display:flex;flex:1 0 0;align-self:stretch}:host .ath-step-wrapper:focus{border:none;outline:none}:host .ath-step-wrapper:focus-visible .ath-step-indicator .ath-step__number{box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus)}:host .ath-step--clickable{cursor:pointer}:host .ath-step--clickable.ath-step--disabled,:host .ath-step--clickable.ath-step--readonly,:host .ath-step--clickable.ath-step--selected{cursor:default}:host .ath-collapse-button{display:flex;align-items:center;gap:8px;transition:transform 0.3s ease-in-out}:host .ath-collapse-button--open{transform:rotate(-180deg)}.hidden{display:none}";

let stepSequence = 0;
const AthStep$1 = /*@__PURE__*/ proxyCustomElement(class AthStep extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athClick = createEvent(this, "athClick");
    }
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
    get el() { return this; }
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
    static get style() { return stepCss; }
}, [257, "ath-step", {
        "actionText": [1, "action-text"],
        "alignment": [1],
        "clickable": [4],
        "collapseLabel": [1, "collapse-label"],
        "completedLabel": [1, "completed-label"],
        "disabled": [4],
        "athAriaLabel": [1, "ath-aria-label"],
        "ariaLiveMessage": [1, "aria-live-message"],
        "athId": [2, "ath-id"],
        "athRole": [1025, "ath-role"],
        "errorLabel": [1, "error-label"],
        "expandLabel": [1, "expand-label"],
        "feedback": [1],
        "headingText": [1, "heading-text"],
        "isCollapsable": [4, "is-collapsable"],
        "isComplete": [4, "is-complete"],
        "isExpanded": [1028, "is-expanded"],
        "number": [2],
        "readonly": [4],
        "selected": [4],
        "size": [1537],
        "total": [2],
        "isHover": [32],
        "buttonAriaLive": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-step", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-step":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthStep$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthStep = AthStep$1;
const defineCustomElement = defineCustomElement$1;

export { AthStep, defineCustomElement };
//# sourceMappingURL=ath-step.js.map

//# sourceMappingURL=ath-step.js.map