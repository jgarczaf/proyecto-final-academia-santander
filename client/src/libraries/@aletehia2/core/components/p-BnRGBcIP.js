import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { d as defineCustomElement$1 } from './p-DbpanEQL.js';

var CheckIconValue;
(function (CheckIconValue) {
    CheckIconValue["Check"] = "\n            <svg width=\"24px\" height=\"24px\" focusable=\"false\" aria-hidden=\"true\" >\n                <path\n                d=\"M18.3814 7.26903C18.7851 7.64592 18.8069 8.27871 18.43 8.68241L11.3146 16.3041C10.7355 16.9245 9.75749 16.9413 9.15743 16.3412L5.49209 12.6756C5.10158 12.2851 5.1016 11.6519 5.49213 11.2614C5.88267 10.8709 6.51583 10.8709 6.90634 11.2614L10.2058 14.5611L16.968 7.31759C17.3449 6.91389 17.9777 6.89215 18.3814 7.26903Z\"\n                fill=\"currentColor\"\n                />\n            </svg>\n      ";
})(CheckIconValue || (CheckIconValue = {}));

const dropdownOptionCss = ".sc-ath-dropdown-option-h .ath-dropdown-option-header.sc-ath-dropdown-option{--background:var(--ath-color-bg-alpha-default);--font-weight:var(--ath-font-weight-regular);--color:var(--ath-color-fg-default);--display-checked-ico:none}.sc-ath-dropdown-option-h .ath-dropdown-option-header.disabled.sc-ath-dropdown-option{--color:var(--ath-color-fg-disabled);pointer-events:none}.sc-ath-dropdown-option-h .ath-dropdown-option-header.sc-ath-dropdown-option:hover{--background:var(--ath-color-bg-alpha-hovered);--font-weight:var(--ath-font-weight-medium)}.sc-ath-dropdown-option-h .ath-dropdown-option-header.sc-ath-dropdown-option:active{--background:var(--ath-color-bg-alpha-pressed);--font-weight:var(--ath-font-weight-medium)}.sc-ath-dropdown-option-h .ath-dropdown-option-header.selected.sc-ath-dropdown-option{--background:var(--ath-color-input-dropdown-option-bg-selected-default);--color:var(--ath-color-fg-inverse-default);--display-checked-ico:inline-block}.sc-ath-dropdown-option-h .ath-dropdown-option-header.selected.sc-ath-dropdown-option:hover{--background:var(--ath-color-input-dropdown-option-bg-selected-hovered);--font-weight:var(--ath-font-weight-regular)}.sc-ath-dropdown-option-h .ath-dropdown-option-header.selected.sc-ath-dropdown-option:active{--background:var(--ath-color-input-dropdown-option-bg-selected-pressed);--font-weight:var(--ath-font-weight-regular)}.sc-ath-dropdown-option-h .ath-dropdown-option-header.sc-ath-dropdown-option:focus-visible{outline:none}.sc-ath-dropdown-option-h .ath-dropdown-option-header.optGroup.sc-ath-dropdown-option{--font-weight:var(--ath-font-weight-medium);pointer-events:none}.sc-ath-dropdown-option-h .ath-dropdown-option-header.active.sc-ath-dropdown-option{--box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset}.sc-ath-dropdown-option-h .ath-dropdown-option-header.active.selected.sc-ath-dropdown-option{--background:var(--ath-color-input-dropdown-option-bg-selected-default);--box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset, 0px 0px 0px 4px var(--ath-color-drop-shadow-focus) inset}.ath-dropdown-option.sc-ath-dropdown-option-h{display:flex;flex-direction:column;width:100%;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-input-dropdown-option);justify-content:center;align-self:stretch;border-radius:var(--ath-border-radius-input-dropdown-option);background:var(--ath-color-bg-alpha-default);align-items:center;font-style:normal;line-height:var(--ath-font-line-height-input-dropdown-option);cursor:pointer}.ath-dropdown-option--hidden.sc-ath-dropdown-option-h{display:none}.sc-ath-dropdown-option-h .ath-dropdown-option-header.sc-ath-dropdown-option{display:flex;justify-content:center;align-self:stretch;padding:var(--ath-spacing-input-dropdown-option-padding-y) var(--ath-spacing-input-dropdown-option-padding-x);gap:var(--ath-spacing-input-dropdown-option-col-gap);align-items:center;font-weight:var(--font-weight);border-radius:var(--ath-border-radius-input-dropdown-option);background:var(--background);color:var(--color);box-shadow:var(--box-shadow)}.sc-ath-dropdown-option-h .ath-dropdown-option__list.sc-ath-dropdown-option{padding:0;margin:0;gap:var(--ath-spacing-input-dropdown-option-group-row-gap);list-style:none;display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;width:100%}.sc-ath-dropdown-option-h span.sc-ath-dropdown-option{width:100%}.sc-ath-dropdown-option-h .option-checkbox.sc-ath-dropdown-option{appearance:none;-webkit-appearance:none;-moz-appearance:none;display:flex;min-width:24px;min-height:24px;max-height:24px;align-items:center;justify-content:center;border-radius:var(--ath-border-radius-checkbox);border:1px solid var(--ath-color-checkbox-border-default);background:var(--ath-color-checkbox-bg-default)}.sc-ath-dropdown-option-h .option-checkbox.sc-ath-dropdown-option svg.sc-ath-dropdown-option{display:none}.sc-ath-dropdown-option-h .option-checkbox.checked.sc-ath-dropdown-option{outline:none;border:none;color:var(--ath-color-input-dropdown-checkbox-icon-selected);border-radius:var(--ath-border-radius-checkbox);border:1px solid var(--ath-color-input-dropdown-checkbox-border-checked-selected);background:var(--ath-color-input-dropdown-checkbox-bg-checked-selected)}.sc-ath-dropdown-option-h .level.sc-ath-dropdown-option{width:16px}.sc-ath-dropdown-option-h.sc-ath-dropdown-option-s>[slot=left-asset],.sc-ath-dropdown-option-h .sc-ath-dropdown-option-s>[slot=left-asset],.sc-ath-dropdown-option-h.sc-ath-dropdown-option-s>[slot=right-asset],.sc-ath-dropdown-option-h .sc-ath-dropdown-option-s>[slot=right-asset]{display:flex}";

const AthDropdownOption = /*@__PURE__*/ proxyCustomElement(class AthDropdownOption extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.optSelected = createEvent(this, "optSelected");
    }
    /**
     * name option
     */
    name;
    /**
     * Valor del option
     */
    value;
    /**
     * texto del option
     */
    text;
    /**
     * Si esta selecionado
     */
    selected = false;
    /**
     * Si esta deshabilitado
     */
    disabled = false;
    /**
     * Permite agrupaciones
     */
    optionGroup;
    /**
     * icono para opcion
     */
    icon;
    /**
     * etiqueta accesible para la opcionseleccionada
     */
    selectedAriaLabel = 'seleccionada';
    isMultiselect = false;
    optSelected;
    hidden = false;
    haveOptionSlot = false;
    isIngroup = false;
    activeOption = false;
    async updateMultiselect() {
        this.isMultiselect = true;
    }
    async updateGroupOption() {
        this.isIngroup = true;
    }
    async activeDropdownOption() {
        this.activeOption = true;
    }
    async noActiveDropdownOption() {
        this.activeOption = false;
    }
    async filterNotFound(inputText) {
        this.hidden = true;
        if (this.haveOptionSlot) {
            this.optionsGroup.forEach(option => {
                if (option.text.toLowerCase().includes(inputText)) {
                    this.hidden = false;
                }
            });
        }
    }
    async setSelected(selected, opts) {
        if (this.disabled || this.optionGroup)
            return;
        if (this.selected === selected)
            return;
        this.selected = selected;
        if (!opts?.silent) {
            this.optSelected.emit({ source: opts?.source ?? 'programmatic' });
        }
    }
    async filterFound() {
        this.hidden = false;
    }
    async selectOption() {
        return this.setSelected(true, { source: 'programmatic' });
    }
    async unselectOption() {
        return this.setSelected(false, { source: 'programmatic' });
    }
    get el() { return this; }
    optionsGroup;
    getOptionClassNames = () => ({
        'ath-dropdown-option': true,
        'ath-dropdown-option--hidden': this.hidden,
    });
    addLevel() {
        this.optionsGroup.forEach(option => {
            option.updateGroupOption();
        });
    }
    getClassNames = () => ({
        'ath-dropdown-option-header': true,
        'disabled': this.disabled,
        'optGroup': this.optionGroup,
        'selected': this.selected,
        'active': this.activeOption,
    });
    getCheckboxClassNames = () => ({
        'option-checkbox': true,
        'checked': this.selected,
    });
    handleClick = () => {
        if (this.disabled || this.optionGroup)
            return;
        const selectedValue = this.isMultiselect ? !this.selected : true;
        this.setSelected(selectedValue, { silent: false, source: 'user' });
    };
    componentWillLoad() {
        this.optionsGroup = Array.from(this.el.querySelectorAll('ath-dropdown-option'));
        if (this.optionGroup) {
            this.addLevel();
            this.haveOptionSlot = true;
        }
    }
    render() {
        const checkboxIconHtml = this.selected ? CheckIconValue.Check : '';
        const id = this.el.getAttribute('id');
        const ariaLabelText = this.selected ? `${this.text} ${this.selectedAriaLabel}` : this.text;
        return (h(Host, { key: 'a661fe569f08a05c6467c07e9b1fdf880461de28', role: this.optionGroup ? 'group' : 'option', "aria-selected": !this.optionGroup ? this.selected : undefined, class: this.getOptionClassNames(), onClick: this.handleClick, "aria-label": ariaLabelText, "aria-labelledby": this.optionGroup ? id + '-text' : undefined }, h("div", { key: '7ebfab2a6878d5ea47609599d7d4fbc2ef24d483', class: this.getClassNames() }, this.isIngroup && h("div", { key: '5ea47e7f05285fce096b7b3bec5ab5ff2a608c06', class: "level" }), this.isMultiselect && !this.optionGroup && (h("div", { key: '589188088340908352f8f10ec83e5dc180d33229' }, h("div", { key: 'a63f04a02c7bbc3ba6db123172c701191ed1aa78', class: this.getCheckboxClassNames(), innerHTML: checkboxIconHtml }))), !!this.icon && h("ath-icon", { key: 'e7aa6b2475f38a74ee472e6f85443b467ee39910', icon: this.icon, color: this.selected ? 'inverse' : 'inherit' }), h("slot", { key: '6d40ef63158d603f4b514b349da5fafd7cdcea8a', name: "left-asset" }), h("span", { key: '264e50a7ca824f05a5eb272cbb6a63eaa1d320b4', id: id + '-text' }, " ", this.text), h("slot", { key: 'dd16830527849fd4d31802d594f2fd81ec312859', name: "right-asset" }), this.selected && !this.isMultiselect && h("ath-icon", { key: '57c999f068bb1a12863f7b6d570abd6cc0b6e0f4', icon: "check", color: "inverse" })), this.haveOptionSlot && (h("div", { key: '3d7471909153fc9c96709ddba8fafb7862bc2fc2', class: "ath-dropdown-option__list" }, h("slot", { key: '06e12622e93a3342004638b19fe837f6b54eedfe' })))));
    }
    static get style() { return dropdownOptionCss; }
}, [262, "ath-dropdown-option", {
        "name": [1],
        "value": [1],
        "text": [1],
        "selected": [1028],
        "disabled": [4],
        "optionGroup": [4, "option-group"],
        "icon": [1],
        "selectedAriaLabel": [1, "selected-aria-label"],
        "isMultiselect": [32],
        "hidden": [32],
        "haveOptionSlot": [32],
        "isIngroup": [32],
        "activeOption": [32],
        "updateMultiselect": [64],
        "updateGroupOption": [64],
        "activeDropdownOption": [64],
        "noActiveDropdownOption": [64],
        "filterNotFound": [64],
        "setSelected": [64],
        "filterFound": [64],
        "selectOption": [64],
        "unselectOption": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-dropdown-option", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-dropdown-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthDropdownOption);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AthDropdownOption as A, defineCustomElement as d };
//# sourceMappingURL=p-BnRGBcIP.js.map

//# sourceMappingURL=p-BnRGBcIP.js.map