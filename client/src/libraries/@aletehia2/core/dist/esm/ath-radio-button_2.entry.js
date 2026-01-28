import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-D2-yfY-d.js';
import './icons-BnU0zKUi.js';
import './button.model-D0e48E4w.js';
import { F as FcInputLabel } from './fc-label-DNt7Tjhl.js';
import { g as getCellRole, a as getCellStyles } from './table.utils-Be-pvJST.js';
import { d as TableFrozen, a as TableColor } from './table.model-DH9nlGTF.js';

const radioButtonCss = ":host .ath-radiobutton{--border:1px solid var(--ath-color-radiobutton-border-default);--background:var(--ath-color-radiobutton-bg-default);--color:var(--ath-color-fg-default);--font-weight:var(--ath-font-weight-regular);--after-background-color:none}:host .ath-radiobutton--checked{--font-weight:var(--ath-font-weight-medium);--background:var(--ath-color-radiobutton-bg-default)}:host .ath-radiobutton--checked:not(.ath-radiobutton--read-only):not(.ath-radiobutton--disabled){--border:none;--after-box-shadow:0px 0px 0px 7px var(--ath-color-radiobutton-bg-checked);--after-background-color:var(--ath-color-radiobutton-bg-default)}:host .ath-radiobutton--read-only{cursor:not-allowed;--background:var(--ath-color-radiobutton-bg-readonly);--border:1px solid var(--ath-color-radiobutton-border-readonly);--color:var(--ath-color-fg-default)}:host .ath-radiobutton--read-only .ath-radiobutton-item{cursor:not-allowed}:host .ath-radiobutton--read-only .ath-input__label{cursor:not-allowed}:host .ath-radiobutton--read-only.ath-radiobutton--checked{--background:var(--ath-color-radiobutton-bg-readonly);--border:1px solid var(--ath-color-radiobutton-border-readonly);--after-background-color:var(--ath-color-radiobutton-bg-checked)}:host .ath-radiobutton--read-only.ath-radiobutton--checked .ath-radiobutton-item{cursor:not-allowed}:host .ath-radiobutton--read-only.ath-radiobutton--checked .ath-input__label{cursor:not-allowed}:host .ath-radiobutton--disabled{cursor:not-allowed;--background:var(--ath-color-radiobutton-bg-disabled-default);--border:1px solid var(--ath-color-radiobutton-border-disabled);--color:var(--ath-color-text---disabled, var(--ath-color-fg-disabled))}:host .ath-radiobutton--disabled .ath-radiobutton-item{cursor:not-allowed}:host .ath-radiobutton--disabled .ath-input__label{cursor:not-allowed}:host .ath-radiobutton--checked.ath-radiobutton--disabled{--border:none;--after-box-shadow:0px 0px 0px 7px var(--ath-color-radiobutton-bg-disabled-checked);--after-background-color:var(--ath-color-radiobutton-indicator-disabled)}:host .ath-radiobutton--checked.ath-radiobutton--disabled .ath-radiobutton-item{cursor:not-allowed}:host .ath-radiobutton{display:flex;align-items:flex-start;gap:var(--ath-spacing-radiobutton-col-gap);align-self:stretch}:host .ath-radiobutton:focus-visible{border:none;outline:none}:host .ath-radiobutton-item{height:var(--ath-sizing-radiobutton-height);width:var(--ath-sizing-radiobutton-width);max-height:var(--ath-sizing-radiobutton-height);max-width:var(--ath-sizing-radiobutton-width);min-height:var(--ath-sizing-radiobutton-height);min-width:var(--ath-sizing-radiobutton-width);border-radius:var(--ath-border-radius-radiobutton);box-sizing:border-box;cursor:pointer;background:var(--background);border:var(--border)}:host .ath-radiobutton-item:focus-visible{outline:none;box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus)}:host .ath-radiobutton{position:relative}:host .ath-radiobutton-item::after{position:absolute;top:12px;left:12px;transform:translate(-50%, -50%);content:\"\";width:10px;max-width:10px;height:10px;max-height:10px;border-radius:100%;background-color:var(--after-background-color);box-shadow:var(--after-box-shadow)}:host .ath-radiobutton .ath-input__label{color:var(--color);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-input-label);font-style:normal;font-weight:var(--font-weight);line-height:var(--ath-font-line-height-input-label)}";

let radioButtonSequence = 0;
const AthRadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
        this.athChange = createEvent(this, "athChange");
    }
    radioButtonId = `radio-button-${++radioButtonSequence}`;
    /**
     * Indicates if it is checked by default
     */
    checked = false;
    /**
     * Indicates if it is disabled
     */
    disabled = false;
    /**
     * Label text
     */
    label;
    /**
     * Indicates the name of the radioButton
     */
    name;
    /**
     * Indicates if it is read-only
     */
    readonly = false;
    /**
     * Indicates the value of the radioButton
     */
    value;
    // ACCESIBILIDAD
    /**
     * Accessible text (aria-label)
     */
    ariaLabel;
    // EVENTOS
    /**
     * Emitted when the radio-button receives focus
     */
    athFocus;
    /**
     * Emitted when the radio-button loses focus
     */
    athBlur;
    /**
     * Emitted when there is a change in the input state
     */
    athChange;
    async unCheck() {
        this.checked = false;
    }
    async setFocus() {
        this.elRadioButton.focus();
        this.handleClick();
    }
    async setTabindex(tabIndex) {
        this.tabIndex = tabIndex;
    }
    elRadioButton;
    tabIndex;
    componentWillLoad() {
        this.tabIndex = this.checked ? 0 : -1;
    }
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleClick = () => {
        if (!this.disabled && !this.readonly && !this.checked) {
            this.checked = true;
            this.tabIndex = 0;
            this.handleChange();
        }
    };
    handleChange = () => {
        const detail = {
            checked: this.checked,
            value: this.value,
        };
        this.athChange.emit(detail);
    };
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick();
        }
    }
    getLabelProps = () => ({
        htmlForId: this.radioButtonId,
        label: this.label,
    });
    getInputClassNames = () => ({
        'ath-radiobutton': true,
        'ath-radiobutton--read-only': this.readonly && !this.disabled,
        'ath-radiobutton--checked': this.checked,
        'ath-radiobutton--disabled': this.disabled,
    });
    getAriaAttributes() {
        return {
            'role': 'radio',
            'aria-disabled': this.disabled ? 'true' : 'false',
            'aria-label': this.ariaLabel ? this.ariaLabel : this.label,
            'aria-checked': this.checked ? 'true' : 'false',
            'ref': (el) => (this.elRadioButton = el),
        };
    }
    getActionAttributes() {
        return {
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            onKeyDown: event => this.handleKeyDown(event),
        };
    }
    renderRadio = () => {
        const ariaAttributes = this.getAriaAttributes();
        const actionAttributes = this.getActionAttributes();
        const labelProps = this.getLabelProps();
        return (h("div", { class: this.getInputClassNames() }, h("span", { tabindex: this.disabled ? -1 : this.tabIndex, ...ariaAttributes, class: "ath-radiobutton-item", id: this.radioButtonId, ...actionAttributes }), !!this.label && (h("span", { onClick: this.handleClick }, h(FcInputLabel, { ...labelProps })))));
    };
    render() {
        return h(Host, { key: '649079e1b9c1340f17528c29ae2f39840f86495b' }, " ", this.renderRadio(), " ");
    }
};
AthRadioButton.style = radioButtonCss;

const tableRowItemCss = ":host(.ath-table-row-item--left){text-align:left;justify-content:flex-start}:host(.ath-table-row-item--center){text-align:center;justify-content:center}:host(.ath-table-row-item--right){text-align:right;justify-content:flex-end}:host(.ath-table-row-item--primary){background:var(--ath-box-shadow-table-row-item-primary-color)}:host(.ath-table-row-item--secondary){background:var(--ath-box-shadow-table-row-item-secondary-color)}:host(.ath-table-row-item--sm){--padding-y:var(--ath-spacing-table-row-item-padding-y-sm)}:host(.ath-table-row-item--md){--padding-y:var(--ath-spacing-table-row-item-padding-y-md)}:host(.ath-table-row-item--lg){--padding-y:var(--ath-spacing-table-row-item-padding-y-lg)}:host(.ath-table-row-item--frozen-first){position:sticky;left:0}:host(.ath-table-row-item--frozen-last){position:sticky;right:0}:host(.ath-table-row-item--frozen-first--shadow)::after{content:\"\";position:absolute;pointer-events:none;width:8px;height:100%;top:0;right:0;background:linear-gradient(270deg, var(--ath-color-table-row-item-gradient-default-2) 0%, var(--ath-color-table-row-item-gradient-default-1) 100%);border-left:1px solid var(--ath-color-table-row-item-border-x)}:host(.ath-table-row-item--striped--frozen-first--shadow)::after{content:\"\";position:absolute;pointer-events:none;width:8px;height:100%;top:0;right:0;background:linear-gradient(270deg, var(--ath-color-table-row-item-gradient-striped-2) 0%, var(--ath-color-table-row-item-gradient-striped-1) 100%);border-left:1px solid var(--ath-color-table-row-item-border-x)}:host(.ath-table-row-item--frozen-last--shadow)::before{content:\"\";position:absolute;pointer-events:none;width:8px;height:100%;top:0;left:0;background:linear-gradient(270deg, var(--ath-color-table-row-item-gradient-default-1) 0%, var(--ath-color-table-row-item-gradient-default-2) 100%);border-right:1px solid var(--ath-color-table-row-item-border-x)}:host(.ath-table-row-item--striped--frozen-last--shadow)::before{content:\"\";position:absolute;pointer-events:none;width:8px;height:100%;top:0;left:0;background:linear-gradient(270deg, var(--ath-color-table-row-item-gradient-striped-1) 0%, var(--ath-color-table-row-item-gradient-striped-2) 100%);border-right:1px solid var(--ath-color-table-row-item-border-x)}:host{display:flex;height:100%;align-items:center;box-sizing:border-box;padding:var(--padding-y) var(--ath-spacing-table-row-item-padding-x);gap:var(--ath-spacing-table-row-item-col-gap);font-family:var(--ath-font-family-body);color:var(--ath-color-table-row-item-fg-default);font-size:var(--ath-font-size-comp-md);font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-comp-md)}:host(.ath-table-row-item--striped){box-shadow:inset 0 0 0 99999px var(--ath-color-table-row-item-bg-striped)}.ath-table-row-item__child-spacing{padding-left:calc(var(--ath-spacing-table-row-item-padding-y-lg) - var(--ath-spacing-table-row-item-col-gap))}.ath-button_comp{display:inline-flex;justify-content:center;align-items:center;border-radius:var(--ath-border-radius-button);border:none;background:none;padding:var(--button-padding);outline:none;transition:background 0.5s;cursor:pointer}.ath-button_comp:focus{background:var(--ath-color-bg-alpha-focus);box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}.ath-button_comp:hover{background:var(--ath-color-bg-alpha-hovered)}.ath-button_comp:active{background:var(--ath-color-bg-alpha-pressed);box-shadow:none}.ath-button_comp--disabled{pointer-events:none;color:var(--ath-color-button-icon-disabled)}";

const AthTableRowItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** Column width (px, %, auto) */
    cellWidth = 'auto';
    /** If this cell is header of the row */
    isHeader = false;
    /**
     * If this cell contains interactive elements (menus, buttons, links, etc.).
     * When true, row click events will be prevented to avoid conflicts with cell interactions.
     */
    hasInteractivity = false;
    /** If this cell is fixed, created a first or last column fixed */
    frozen = TableFrozen.None;
    /** If true, no shadow will be applied to the frozen cell */
    noFrozenShadow = false;
    /** Cell alignment */
    alignment;
    /** Table size */
    size;
    /** Striped background */
    striped = false;
    /** Background color */
    color = TableColor.Primary;
    /** Marks this cell as an expander control (collapse/expand). Internal use by ath-table-row. */
    expander = false;
    /** Current expanded state (used when expander = true) */
    expanded = false;
    /** Aria-controls value for the expander button (ID of the collapsable content) */
    expanderAriaControls;
    /** Marks this cell as the first data cell of a child row (for indentation) */
    isChild = false;
    getClassNames = () => ({
        'ath-table-row-item': true,
        [`ath-table-row-item--${this.color}`]: !!this.color,
        [`ath-table-row-item--${this.alignment}`]: !!this.alignment,
        [`ath-table-row-item--${this.size}`]: !!this.size,
        [`ath-table-row-item--frozen-${this.frozen}`]: this.frozen !== TableFrozen.None,
        [`ath-table-row-item--${this.striped ? 'striped--' : ''}frozen-${this.frozen}--shadow`]: this.frozen !== TableFrozen.None && this.noFrozenShadow !== true,
        'ath-table-row-item--striped': this.striped,
        'ath-table-row-item--child': this.isChild,
    });
    onExpanderClick = (e) => {
        e.stopPropagation();
        const rowEl = this.el.closest('ath-table-row');
        if (!rowEl)
            return;
        if (!rowEl.hasChildren)
            return;
        rowEl.expanded = !rowEl.expanded;
    };
    render() {
        const rowEl = this.el?.closest('ath-table-row');
        const showButton = this.expander && rowEl && rowEl.hasChildren;
        return (h(Host, { key: '054388d972e82776d2a57a55867457248af15f6e', style: getCellStyles(this.cellWidth), class: this.getClassNames(), role: getCellRole(this.isHeader) }, showButton && (h("button", { key: '720ca0a8ef95d0c050b5b610d0d7e3e303cc0ef5', class: "ath-button_comp", "aria-controls": this.expanderAriaControls, "aria-label": rowEl.expanded ? 'Colapsar fila' : 'Expandir fila', "aria-expanded": String(!!rowEl.expanded), onClick: this.onExpanderClick }, h("ath-collapse-icon", { key: '892daf2c7ce9645e36fac844153f986874c74f7b', expanded: rowEl.expanded }))), this.isChild && h("div", { key: '79862675aa1a434edbf5f3edeecfcd88e2973764', class: "ath-table-row-item__child-spacing" }), h("slot", { key: '7dc7ea3d58ca4087983808289585cc1bcda26ae2' })));
    }
};
AthTableRowItem.style = tableRowItemCss;

export { AthRadioButton as ath_radio_button, AthTableRowItem as ath_table_row_item };
//# sourceMappingURL=ath-radio-button.ath-table-row-item.entry.js.map
