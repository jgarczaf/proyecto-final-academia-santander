import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { S as SegmentedControlTypes, a as SegmentedControlSizes, b as SegmentedControlColors, c as SegmentedControlFeedbackType } from './p-CH6TVzD2.js';
import { F as FcInputHelperText, a as FcInputFeedback } from './p-BjFwg_ag.js';
import './p-BnU0zKUi.js';
import './p-D0e48E4w.js';
import { F as FcInputLabel } from './p-DwGWQdqN.js';

const segmentedControlCss = ".ath-segmented-control{display:flex;justify-content:space-between;border:1px solid;border-radius:var(--ath-border-radius-segmented-control-group);width:100%;align-items:center;box-sizing:border-box}.ath-segmented-control.disabled{border-color:var(--ath-color-segmented-control-border-disabled)}:host .ath-input{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;flex-wrap:wrap;row-gap:var(--ath-spacing-input-row-gap);width:100%}:host .wrapper{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-addons-row-gap);align-self:stretch;width:100%}:host .ath-input__label{display:flex;flex-direction:row;align-items:flex-start;gap:var(--ath-spacing-label-col-gap);font-family:var(--ath-font-family-primary);color:var(--ath-color-fg-default);font-weight:var(--ath-font-weight-medium);font-size:var(--ath-font-size-input-label);line-height:var(--ath-font-line-height-input-label)}:host .ath-input__label__wrapper{display:flex;align-items:center;gap:var(--ath-spacing-label-required-col-gap)}:host .ath-input__label ath-icon{color:var(--ath-color-fg-default)}:host .ath-input__label .required{color:var(--ath-color-fg-feedback-danger);padding-left:4px}:host .ath-input__label ath-button{display:flex;flex-direction:row;align-items:center;justify-content:center;width:24px;height:24px}:host .ath-input__feedback{display:flex;align-items:flex-start;gap:var(--ath-spacing-feedback-text-col-gap);align-self:stretch;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-input__feedback--error{color:var(--ath-color-fg-feedback-danger)}:host .ath-input__feedback--success{color:var(--ath-color-fg-feedback-success)}:host .ath-input__feedback--warning{color:var(--ath-color-fg-feedback-warning)}:host .padding{display:flex;padding-top:var(--ath-spacing-feedback-text-padding-top);align-items:center}:host .ath-input__helper-text{display:flex;justify-content:flex-start;align-items:center;align-self:stretch;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.ath-segmented-control--primary{border-color:var(--ath-color-segmented-control-border-primary)}.ath-segmented-control--secondary{border-color:var(--ath-color-segmented-control-border-secondary)}.ath-segmented-control--sm{padding:var(--ath-spacing-segmented-control-group-padding-sm)}.ath-segmented-control--md{padding:var(--ath-spacing-segmented-control-group-padding-md)}.ath-segmented-control--lg{padding:var(--ath-spacing-segmented-control-group-padding-lg)}.ath-segmented-control--xl{padding:var(--ath-spacing-segmented-control-group-padding-xl)}";

let segmentedControlSequence = 0;
const AthSegmentedControl$1 = /*@__PURE__*/ proxyCustomElement(class AthSegmentedControl extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athChangeValue = createEvent(this, "athChangeValue");
        this.internals = this.attachInternals();
    }
    hostId = `segmentedControl-${++segmentedControlSequence}`;
    labelId = `${this.hostId}-label`;
    helperTextId = `${this.hostId}-helper-text`;
    feedbackId = `${this.hostId}-feedback`;
    requiredLabelId = `${this.hostId}-req-label`;
    initialValue;
    get htmlEl() { return this; }
    internals;
    /**
     * Types of the segmented control
     **/
    type = SegmentedControlTypes.Select;
    /**
     * Size of the segmented control
     **/
    size = SegmentedControlSizes.Medium;
    /**
     * Color of the segmented control
     */
    color = SegmentedControlColors.Primary;
    /**
     * The segmented control is disabled
     */
    disabled = false;
    /**
     * Label text for the segmented control
     */
    label;
    /**
     * The name of the segmented control to use with forms
     */
    name;
    /**
     * Text to show when the label of segmented control its not visible
     */
    ariaLabel;
    /**
     * Helper text for the segmented control
     */
    helperText;
    /**
     * Type of feedback to show
     */
    feedback = SegmentedControlFeedbackType.None;
    /**
     * Feedback text
     */
    feedbackText;
    /**
     * Show if is required
     */
    required = false;
    /**
     * Show if is required in the label
     */
    hideRequired = false;
    /**
     * Show if is required in the label
     */
    requiredAriaLabel;
    /**
     * Show the tooltip text
     */
    tooltipText;
    /**
     * Show the width of the tooltip
     */
    tooltipWidth = 0;
    /**
     * Set the value to select the checked ath-radio-button
     */
    value;
    watchValue(newValue) {
        this.selectSegmentedItemByValue(newValue);
    }
    athChangeValue;
    componentWillLoad() {
        this.initialValue = this.value;
        if (this.value == null) {
            const items = Array.from(this.htmlEl.querySelectorAll('ath-segmented-control-item'));
            const preselected = items.find(i => i.selected);
            if (preselected) {
                this.value = preselected.value;
            }
        }
    }
    /**
     * Call method to update the children props, and event listener
     */
    componentDidLoad() {
        this.updateChildrenProps();
        if (this.value) {
            this.selectSegmentedItemByValue(this.value);
        }
        else {
            this.selectSegmentedItemBySelected();
            this.forceFirstTabFocusIfNoItemsSelected();
        }
        // For action type, ensure there's always a selected option
        // Use requestAnimationFrame to ensure child components are fully rendered
        if (this.type === SegmentedControlTypes.Action) {
            requestAnimationFrame(() => {
                this.ensureSelection();
            });
        }
    }
    /**
     * Update the segmented control items props
     */
    componentDidUpdate() {
        this.updateChildrenProps();
        // For action type, ensure selection after updates
        if (this.type === SegmentedControlTypes.Action) {
            requestAnimationFrame(() => {
                this.ensureSelection();
            });
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.selectSegmentedItemByValue(this.initialValue);
    }
    /**
     * Update the segmented control items props
     */
    handlePropsChange() {
        this.updateChildrenProps();
    }
    /**
     * Listen for selects in the segmented control items
     */
    handleValueChange(event) {
        const selectedItem = event.target;
        // Prevent having no selection once user has made a selection
        const segmentedControlItems = this.getSegmentedControlItems();
        const selectedItems = segmentedControlItems.filter(item => item.selected);
        // If no items are selected after this change, revert the change
        if (selectedItems.length === 0) {
            selectedItem.selected = true;
            return;
        }
        // Unselect other items (radio button behavior)
        this.unSelect(selectedItem);
        this.value = selectedItem.value;
        this.athChangeValue.emit(selectedItem);
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(this.value);
            this.internals.checkValidity();
        }
    }
    selectSegmentedItemBySelected() {
        const segmentedControlItems = this.getSegmentedControlItems();
        const selectedItem = segmentedControlItems.find(item => item.selected);
        if (!selectedItem) {
            return false;
        }
        this.value = selectedItem.value;
        this.initialValue = this.value;
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(this.value);
            this.internals.checkValidity();
        }
        return true;
    }
    forceFirstTabFocusIfNoItemsSelected() {
        const segmentedControlItems = this.getSegmentedControlItems();
        const selectedItem = segmentedControlItems.find(item => item.selected);
        const firstItemEnabled = segmentedControlItems.find(item => !item.disabled);
        const firstItem = segmentedControlItems.length > 0 ? segmentedControlItems[0] : undefined;
        const focusItem = !selectedItem && (firstItemEnabled ?? firstItem);
        if (focusItem) {
            focusItem.setTabindex(0);
            return true;
        }
        return false;
    }
    ensureSelection() {
        if (!this.htmlEl)
            return;
        const segmentedControlItems = this.getSegmentedControlItems();
        const hasSelected = segmentedControlItems.some(item => item.selected);
        // If no item is selected, select the first one (for action type)
        if (!hasSelected && segmentedControlItems.length > 0) {
            const firstItem = segmentedControlItems[0];
            if (firstItem) {
                firstItem.selected = true;
            }
        }
    }
    unSelect(selectedItem) {
        const segmentedControlItems = this.getSegmentedControlItems();
        segmentedControlItems.forEach(item => {
            if (item !== selectedItem) {
                item.unSelectItem();
            }
        });
    }
    handleKeyDown(event) {
        const navigationKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (navigationKeys.includes(event.key)) {
            event.preventDefault();
            const items = this.getSegmentedControlItems();
            const currentIndex = items.findIndex(item => item === document.activeElement);
            if (currentIndex === -1)
                return;
            let nextIndex = currentIndex;
            const totalItems = items.length;
            switch (event.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    nextIndex = this.getNextIndex(items, currentIndex, -1, totalItems);
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                    nextIndex = this.getNextIndex(items, currentIndex, 1, totalItems);
                    break;
                case 'Home':
                    nextIndex = this.getNextIndex(items, -1, 1, totalItems);
                    break;
                case 'End':
                    nextIndex = this.getNextIndex(items, totalItems, -1, totalItems);
                    break;
            }
            const nextItem = items[nextIndex];
            if (nextItem) {
                nextItem.setFocus();
            }
        }
    }
    getSegmentedControlItems() {
        return Array.from(this.htmlEl.querySelectorAll('ath-segmented-control-item'));
    }
    getNextIndex(items, currentIndex, direction, totalItems) {
        let newIndex = (currentIndex + direction + totalItems) % totalItems;
        const itemsArray = items;
        // Skip disabled items
        while (itemsArray[newIndex]?.disabled) {
            newIndex = (newIndex + direction + totalItems) % totalItems;
        }
        return newIndex;
    }
    updateChildrenProps() {
        if (!this.htmlEl)
            return;
        const items = this.htmlEl.querySelectorAll('ath-segmented-control-item');
        items.forEach(item => {
            if (this.color)
                item.color = this.color;
            if (this.size)
                item.size = this.size;
            if (this.disabled)
                item.disabled = this.disabled;
            if (this.type)
                item.type = this.type;
        });
    }
    selectSegmentedItemByValue(value) {
        const items = this.getSegmentedControlItems();
        const selectedItem = items.find(item => item.value === value);
        if (selectedItem) {
            selectedItem.selected = true;
            if (!selectedItem.disabled)
                selectedItem.setFocus();
        }
        this.unSelect(selectedItem);
        this.forceFirstTabFocusIfNoItemsSelected();
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    getHelperTextProps = () => {
        return {
            id: this.helperTextId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.feedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    getLabelProps = () => ({
        id: this.labelId,
        htmlForId: undefined,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    getAriaDescribedBy = () => {
        const descriptions = [];
        if (this.helperText !== undefined) {
            descriptions.push(this.helperTextId);
        }
        if (this.feedback !== SegmentedControlFeedbackType.None) {
            descriptions.push(this.feedbackId);
        }
        return descriptions.length > 0 ? descriptions.join(' ') : undefined;
    };
    getHostAttributes = () => {
        const ariaLabelledByIds = !this.hideRequired ? `${this.labelId} ${this.requiredLabelId}` : this.labelId;
        const ariaDescribedByIds = this.getAriaDescribedBy();
        return {
            'role': this.isActionType() ? 'group' : 'radiogroup',
            'aria-labelledby': ariaLabelledByIds,
            'aria-describedby': ariaDescribedByIds,
            'aria-required': !this.isActionType() && this.required ? 'true' : undefined,
        };
    };
    getClassNames = () => ({
        'ath-segmented-control': true,
        [`ath-segmented-control--${this.color}`]: !!this.color,
        [`ath-segmented-control--${this.size}`]: !!this.size,
        [`ath-segmented-control--${this.type}`]: !!this.type,
        'disabled': this.disabled,
    });
    isActionType() {
        return this.type === SegmentedControlTypes.Action;
    }
    render() {
        const labelProps = this.getLabelProps();
        const feedbackProps = this.getFeedbackProps();
        const helperTextProps = this.getHelperTextProps();
        const isActionType = this.type === SegmentedControlTypes.Action;
        return (h(Host, { key: 'e823ddaf095f5283ac46828174b4d1ff4aabee17' }, h("div", { key: 'bbf102e872503262fa9a6b4d876c9d37e7f0a632', ...this.getHostAttributes(), class: "ath-input" }, !isActionType && !!this.label && h(FcInputLabel, { key: 'd0c1c31cf60e3813529d6c0839af013fbe3a44e4', ...labelProps }), this.required && !this.hideRequired && (h("div", { key: '593f9eb97a7adeadfd09b3f9cf18b53899241896', id: this.requiredLabelId, class: "sr-only" }, this.requiredAriaLabel)), h("div", { key: '58b07390ff69473c80f442798c4a99a0e26dca92', class: "wrapper" }, h("div", { key: '42aa735aa80b398d794e0927d9eaf35676137eea', class: this.getClassNames() }, h("slot", { key: 'ddc73a02d5e61dcde47fd2cfcf27e862ccd35805' })), !isActionType && this.helperText && h(FcInputHelperText, { key: '35884c334cf6f115b5cf03bdcd273e9e6e3c860f', ...helperTextProps }), !isActionType && this.feedback === 'error' && !this.disabled && h(FcInputFeedback, { key: 'f43727535db0557efd9bd2e637d2e21a267cdc04', ...feedbackProps })))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["watchValue"]
    }; }
    static get style() { return segmentedControlCss; }
}, [321, "ath-segmented-control", {
        "type": [1025],
        "size": [1025],
        "color": [1025],
        "disabled": [1028],
        "label": [1025],
        "name": [1],
        "ariaLabel": [1025, "aria-label"],
        "helperText": [1025, "helper-text"],
        "feedback": [1025],
        "feedbackText": [1025, "feedback-text"],
        "required": [1028],
        "hideRequired": [1028, "hide-required"],
        "requiredAriaLabel": [1032, "required-aria-label"],
        "tooltipText": [1025, "tooltip-text"],
        "tooltipWidth": [1026, "tooltip-width"],
        "value": [1025]
    }, [[0, "athChange", "handleValueChange"], [0, "keydown", "handleKeyDown"]], {
        "value": ["watchValue"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-segmented-control"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-segmented-control":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthSegmentedControl$1);
            }
            break;
    } });
}

const AthSegmentedControl = AthSegmentedControl$1;
const defineCustomElement = defineCustomElement$1;

export { AthSegmentedControl, defineCustomElement };
//# sourceMappingURL=ath-segmented-control.js.map

//# sourceMappingURL=ath-segmented-control.js.map