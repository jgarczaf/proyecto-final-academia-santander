import { Host, h } from "@stencil/core";
import { SegmentedControlTypes, SegmentedControlFeedbackType, SegmentedControlSizes, SegmentedControlColors, } from "./segmented-control.model";
import { FcInputFeedback, FcInputHelperText, FcInputLabel } from "../../sharedfc/input/index";
let segmentedControlSequence = 0;
export class AthSegmentedControl {
    hostId = `segmentedControl-${++segmentedControlSequence}`;
    labelId = `${this.hostId}-label`;
    helperTextId = `${this.hostId}-helper-text`;
    feedbackId = `${this.hostId}-feedback`;
    requiredLabelId = `${this.hostId}-req-label`;
    initialValue;
    htmlEl;
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
    static get is() { return "ath-segmented-control"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["segmented-control.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["segmented-control.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": true,
                "complexType": {
                    "original": "SegmentedControlType",
                    "resolved": "\"action\" | \"select\"",
                    "references": {
                        "SegmentedControlType": {
                            "location": "import",
                            "path": "./segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Types of the segmented control"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlTypes.Select"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "SegmentedControlSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "SegmentedControlSize": {
                            "location": "import",
                            "path": "./segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the segmented control"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlSizes.Medium"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": true,
                "complexType": {
                    "original": "SegmentedControlColor",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "SegmentedControlColor": {
                            "location": "import",
                            "path": "./segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color of the segmented control"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlColors.Primary"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "The segmented control is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Label text for the segmented control"
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
                    "text": "The name of the segmented control to use with forms"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": true,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to show when the label of segmented control its not visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
                    "text": "Helper text for the segmented control"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": true,
                "complexType": {
                    "original": "SegmentedControlFeedback",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "SegmentedControlFeedback": {
                            "location": "import",
                            "path": "./segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlFeedback"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of feedback to show"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlFeedbackType.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
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
                    "text": "Feedback text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                    "text": "Show if is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hideRequired": {
                "type": "boolean",
                "attribute": "hide-required",
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
                    "text": "Show if is required in the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "requiredAriaLabel": {
                "type": "any",
                "attribute": "required-aria-label",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show if is required in the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
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
                    "text": "Show the tooltip text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipWidth": {
                "type": "number",
                "attribute": "tooltip-width",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show the width of the tooltip"
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
                    "original": "HTMLAthSegmentedControlItemElement",
                    "resolved": "HTMLAthSegmentedControlItemElement",
                    "references": {
                        "HTMLAthSegmentedControlItemElement": {
                            "location": "global",
                            "id": "global::HTMLAthSegmentedControlItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "htmlEl"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
    static get listeners() {
        return [{
                "name": "athChange",
                "method": "handleValueChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=segmented-control.js.map
