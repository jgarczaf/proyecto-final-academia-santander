'use strict';

var index = require('./index--hWT2F8k.js');
var segmentedControl_model = require('./segmented-control.model-Da8taniO.js');
var icons = require('./icons-DfQaoUal.js');

const segmentedControlItemCss = ".ath-segmented-control-item--sm{font-size:var(--ath-font-size-segmented-control-sm);line-height:var(--ath-font-line-height-segmented-control-sm);padding:var(--ath-spacing-segmented-control-item-padding-y-sm) var(--ath-spacing-segmented-control-item-padding-x-sm)}.ath-segmented-control-item--sm.ath-segmented-control-item--icon-only{padding:var(--ath-spacing-segmented-control-item-padding-around-sm)}.ath-segmented-control-item--md{font-size:var(--ath-font-size-segmented-control-md);line-height:var(--ath-font-line-height-segmented-control-md);padding:var(--ath-spacing-segmented-control-item-padding-y-md) var(--ath-spacing-segmented-control-item-padding-x-md)}.ath-segmented-control-item--md.ath-segmented-control-item--icon-only{padding:var(--ath-spacing-segmented-control-item-padding-around-md)}.ath-segmented-control-item--lg{font-size:var(--ath-font-size-segmented-control-lg);line-height:var(--ath-font-line-height-segmented-control-lg);padding:var(--ath-spacing-segmented-control-item-padding-y-lg) var(--ath-spacing-segmented-control-item-padding-x-lg)}.ath-segmented-control-item--lg.ath-segmented-control-item--icon-only{padding:var(--ath-spacing-segmented-control-item-padding-around-lg)}.ath-segmented-control-item--xl{font-size:var(--ath-font-size-segmented-control-xl);line-height:var(--ath-font-line-height-segmented-control-xl);padding:var(--ath-spacing-segmented-control-item-padding-y-xl) var(--ath-spacing-segmented-control-item-padding-x-xl)}.ath-segmented-control-item--xl.ath-segmented-control-item--icon-only{padding:var(--ath-spacing-segmented-control-item-padding-around-xl)}.ath-segmented-control-item--primary{color:var(--ath-color-segmented-control-item-fg-primary-default)}.ath-segmented-control-item--primary:hover{background:var(--ath-color-segmented-control-item-bg-primary-hover);color:var(--ath-color-segmented-control-item-fg-primary-hover)}.ath-segmented-control-item--primary:hover .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-primary-hover)}.ath-segmented-control-item--primary:active{background:var(--ath-color-segmented-control-item-bg-primary-active);color:var(--ath-color-segmented-control-item-fg-primary-active)}.ath-segmented-control-item--primary:active .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-primary-active)}.ath-segmented-control-item--primary:default{color:var(--ath-color-segmented-control-item-fg-primary-default)}.ath-segmented-control-item--primary:default .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-primary-default)}.ath-segmented-control-item--primary.selected{background:var(--ath-color-segmented-control-item-bg-primary-selected);color:var(--ath-color-segmented-control-item-fg-primary-selected)}.ath-segmented-control-item--primary.selected .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-primary-selected)}:host(:focus-visible){outline:none}:host(:focus-visible) .ath-segmented-control-item--primary:not(:hover,.selected,.disabled){box-shadow:0px 0px 0px 2px var(--ath-color-border-focus);color:var(--ath-color-segmented-control-item-fg-primary-focus)}:host(:focus-visible) .ath-segmented-control-item--primary:not(:hover,.selected,.disabled) .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-primary-focus)}:host(:focus-visible) .ath-segmented-control-item--primary.selected{box-shadow:0 0 0 2px var(--ath-color-drop-shadow-focus), 0 0 0 4px var(--ath-color-border-focus)}.ath-segmented-control-item--secondary{color:var(--ath-color-segmented-control-item-fg-secondary-default)}.ath-segmented-control-item--secondary:hover{background:var(--ath-color-segmented-control-item-bg-secondary-hover);color:var(--ath-color-segmented-control-item-fg-secondary-hover)}.ath-segmented-control-item--secondary:hover .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-secondary-hover)}.ath-segmented-control-item--secondary:active{background:var(--ath-color-segmented-control-item-bg-secondary-active);color:var(--ath-color-segmented-control-item-fg-secondary-active)}.ath-segmented-control-item--secondary:active .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-secondary-active)}.ath-segmented-control-item--secondary:default{color:var(--ath-color-segmented-control-item-fg-secondary-default)}.ath-segmented-control-item--secondary:default .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-secondary-default)}.ath-segmented-control-item--secondary.selected{background:var(--ath-color-segmented-control-item-bg-secondary-selected);color:var(--ath-color-segmented-control-item-fg-secondary-selected)}.ath-segmented-control-item--secondary.selected .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-secondary-selected)}:host(:focus-visible){outline:none}:host(:focus-visible) .ath-segmented-control-item--secondary:not(:hover,.selected,.disabled){box-shadow:0px 0px 0px 2px var(--ath-color-border-focus);color:var(--ath-color-segmented-control-item-fg-secondary-focus)}:host(:focus-visible) .ath-segmented-control-item--secondary:not(:hover,.selected,.disabled) .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-secondary-focus)}:host(:focus-visible) .ath-segmented-control-item--secondary.selected{box-shadow:0 0 0 2px var(--ath-color-drop-shadow-focus), 0 0 0 4px var(--ath-color-border-focus)}.ath-segmented-control-item{display:flex;font-family:var(--ath-font-family-primary);font-weight:var(--ath-font-weight-medium);border-radius:var(--ath-border-radius-segmented-control-item);cursor:pointer;user-select:none;gap:var(--ath-spacing-segmented-control-item-col-gap);align-items:center;justify-content:center;font-style:normal;white-space:nowrap}.ath-segmented-control-item.disabled{border:var(--ath-color-segmented-control-border-disabled);background:var(--ath-color-segmented-control-item-bg-disabled-default);color:var(--ath-color-segmented-control-item-fg-disabled);cursor:not-allowed}.ath-segmented-control-item.disabled .ath-segmented-control-item__icon{color:var(--ath-color-segmented-control-item-icon-disabled)}.ath-segmented-control-item.disabled.selected{background:var(--ath-color-segmented-control-item-bg-disabled-selected);color:var(--ath-color-segmented-control-item-fg-disabled)}.ath-segmented-control-item.disabled.default{background:var(--ath-color-segmented-control-item-bg-disabled-default)}.ath-segmented-control-item--icon-right{flex-direction:row-reverse}";

const AthSegmentedControlItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athFocus = index.createEvent(this, "athFocus");
        this.athChange = index.createEvent(this, "athChange");
    }
    get htmlEl() { return index.getElement(this); }
    /**
     * Size of the segmented control item
     **/
    color = segmentedControl_model.SegmentedControlColors.Primary;
    /**
     * Size of the segmented control item
     **/
    size = segmentedControl_model.SegmentedControlSizes.Medium;
    /**
     * Icon position of the segmented control item
     */
    iconPosition = segmentedControl_model.SegmentedControlItemIconPositions.None;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The segmented control item is selected
     */
    selected = false;
    /**
     * The segmented control is disabled
     */
    disabled = false;
    /**
     * The type of the control
     */
    type = segmentedControl_model.SegmentedControlTypes.Select;
    /**
     * The value for a Segmented Control with type select (role radio)
     */
    value;
    /**
     * Emitted when the segmented control item is focus
     */
    athFocus;
    /**
     * Emitted when the segmented control item is selected
     */
    athChange;
    async unSelectItem() {
        this.selected = false;
        this.tabindex = -1;
    }
    async setFocus() {
        if (this.htmlEl) {
            this.htmlEl.focus();
        }
    }
    async setTabindex(index) {
        this.tabindex = index;
    }
    tabindex;
    handleKeyDown(event) {
        if (!this.disabled && (event.key === ' ' || event.key === 'Enter')) {
            event.preventDefault();
            this.handleClick();
        }
    }
    componentWillLoad() {
        this.tabindex = this.selected ? 0 : -1;
    }
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleClick = () => {
        if (!this.disabled && !this.selected) {
            this.selected = true;
            this.tabindex = 0;
            this.handleChange();
        }
    };
    handleChange = () => {
        const detail = {
            selected: this.selected,
        };
        this.athChange.emit(detail);
    };
    renderIcon = () => {
        const isIconOnly = this.iconPosition === segmentedControl_model.SegmentedControlItemIconPositions.IconOnly;
        const iconSize = isIconOnly ? icons.transformIconSize(icons.IconType.SegmentedControlItemIconOnly, this.size) : icons.transformIconSize(icons.IconType.SegmentedControlItem, this.size);
        return index.h("ath-icon", { class: "ath-segmented-control-item__icon", icon: this.icon, size: iconSize, color: "inherit" });
    };
    getHostAttributes = () => {
        const isAction = this.type === segmentedControl_model.SegmentedControlTypes.Action;
        const isSelect = this.type === segmentedControl_model.SegmentedControlTypes.Select;
        return {
            'role': isAction ? 'button' : 'radio',
            ...(isAction && { 'aria-pressed': this.selected ? 'true' : 'false' }),
            ...(isSelect && { 'aria-checked': this.selected ? 'true' : 'false' }),
            'tabindex': this.disabled ? -1 : this.tabindex,
            'onClick': this.handleClick,
            'onFocus': this.handleFocus,
            'aria-disabled': this.disabled ? 'true' : 'false',
        };
    };
    getClassNames = () => ({
        'ath-segmented-control-item': true,
        [`ath-segmented-control-item--${this.size}`]: !!this.size,
        [`ath-segmented-control-item--${this.color}`]: !!this.color,
        [`ath-segmented-control-item--icon-${this.iconPosition}`]: this.iconPosition !== segmentedControl_model.SegmentedControlItemIconPositions.None && this.iconPosition !== segmentedControl_model.SegmentedControlItemIconPositions.IconOnly,
        [`ath-segmented-control-item--${this.iconPosition}`]: this.iconPosition === segmentedControl_model.SegmentedControlItemIconPositions.IconOnly,
        'selected': this.selected,
        'disabled': this.disabled,
    });
    render() {
        return (index.h(index.Host, { key: 'b6c6f2d9a1f59fde88beea57680cf30847b79e18', ...this.getHostAttributes() }, index.h("div", { key: '1f684116d9dfe5fde869bee96803c9ac89c30716', class: this.getClassNames() }, this.icon && this.iconPosition !== segmentedControl_model.SegmentedControlItemIconPositions.None && this.renderIcon(), this.iconPosition != segmentedControl_model.SegmentedControlItemIconPositions.IconOnly && index.h("slot", { key: '70f8774c04b4a6927121310c2283b3b871094aa7' }))));
    }
};
AthSegmentedControlItem.style = segmentedControlItemCss;

exports.ath_segmented_control_item = AthSegmentedControlItem;
//# sourceMappingURL=ath-segmented-control-item.entry.cjs.js.map
