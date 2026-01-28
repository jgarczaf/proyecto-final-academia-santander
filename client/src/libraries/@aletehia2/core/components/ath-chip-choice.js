import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { C as ChipChoiceRole, a as ChipChoiceSize } from './p-Ck_3aICM.js';
import { t as transformIconSize, a as IconType } from './p-BnU0zKUi.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const chipChoiceCss = ":host .ath-chip-choice__container{--chip-border:1px solid var(--ath-color-border-alpha-boldest-default);--chip-color:var(--ath-color-fg-default);--chip-icon-color:var(--ath-color-icon-default);--chip-background:trasparent;--chip-box-shadow:none}:host .ath-chip-choice__container--sm{--chip-padding:calc(var(--ath-spacing-chip-choice-padding-y-sm) - 1px) calc(var(--ath-spacing-chip-choice-padding-x-sm) - 1px)}:host .ath-chip-choice__container--md{--chip-padding:calc(var(--ath-spacing-chip-choice-padding-md) - 1px)}:host .ath-chip-choice__container:hover:not(.ath-chip-choice__container--checked){--chip-background:var(--ath-color-bg-alpha-boldest-hovered);--chip-border:1px solid transparent;--chip-color:var(--ath-color-chip-choice-fg-hovered);--chip-icon-color:var(--ath-color-chip-choice-icon-hovered)}:host .ath-chip-choice__container:active:not(.ath-chip-choice__container--checked){--chip-background:var(--ath-color-bg-alpha-boldest-pressed);--chip-border:1px solid transparent;--chip-color:var(--ath-color-chip-choice-fg-pressed);--chip-icon-color:var(--ath-color-chip-choice-icon-pressed)}:host .ath-chip-choice__container--disabled{--chip-background:var(--ath-color-bg-alpha-disabled);--chip-color:var(--ath-color-fg-disabled);--chip-icon-color:var(--ath-color-icon-disabled);--chip-border:1px solid transparent;pointer-events:none}:host .ath-chip-choice__container--checked{--chip-background:var(--ath-color-chip-choice-bg-selected);--chip-border:1px solid transparent;--chip-color:var(--ath-color-chip-choice-fg-selected-default);--chip-icon-color:var(--ath-color-chip-choice-icon-selected-default)}:host(:focus-visible){outline:none}:host(:focus-visible) .ath-chip-choice__container{outline:none}:host(:focus-visible) .ath-chip-choice__container:not(.ath-chip-choice__container--checked){--chip-box-shadow:0px 0px 0px 2px var(--ath-color-border-focus);--chip-border:1px solid transparent}:host(:focus-visible) .ath-chip-choice__container--checked{--chip-box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus);--chip-color:var(--ath-color-chip-choice-fg-selected-focus);--chip-border:1px solid transparent}:host{display:inline-flex;width:fit-content}:host .ath-chip-choice__container{display:inline-flex;align-items:center;gap:var(--ath-spacing-chip-col-gap);border-radius:var(--ath-border-radius-chip);padding:var(--chip-padding);color:var(--chip-color);border:var(--chip-border);background:var(--chip-background);box-shadow:var(--chip-box-shadow);cursor:pointer;user-select:none}:host .ath-chip-choice__container ath-icon{color:var(--chip-icon-color)}:host .ath-chip-choice__text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;overflow:hidden;text-overflow:ellipsis;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-chip);font-style:normal;font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-chip)}";

const AthChipChoice$1 = /*@__PURE__*/ proxyCustomElement(class AthChipChoice extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athChange = createEvent(this, "athChange");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
        this.internals = this.attachInternals();
    }
    initialValue;
    get el() { return this; }
    internals;
    /**
     * Indica si el chip esta seleccionado
     */
    selected = false;
    /**
     * Indica si el chip esta deshabilitado
     */
    disabled = false;
    /**
     * Indica el nombre del icono a usar
     */
    icon;
    /**
     * Texto del chip
     */
    label;
    /**
     * The chip name for HTML Form API
     */
    name;
    /**
     * The role of the chip
     */
    role = ChipChoiceRole.Checkbox;
    /**
     * Indica el tamaño del chip (sm/md)
     */
    size = ChipChoiceSize.Medium;
    /**
     * The chip value for HTML Form API
     */
    value;
    watchSelectedHandler(newValue) {
        if (this.isCheckbox() && !this.disabled) {
            this.visualSelected = newValue;
            this.el.focus();
            this.setInputValue();
        }
    }
    athChange;
    athFocus;
    athBlur;
    visualSelected = false;
    async select() {
        if (!this.disabled) {
            this.visualSelected = true;
            this.el.focus();
        }
    }
    async unselect() {
        if (!this.disabled) {
            this.visualSelected = false;
            this.el.blur();
        }
    }
    handleKeydown(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            this.toogleValueChip();
            e.stopPropagation();
        }
    }
    handleMouseDown(e) {
        if (this.disabled) {
            e.preventDefault();
        }
    }
    componentDidLoad() {
        if (!this.value) {
            this.value = this.label;
        }
        this.initialValue = this.selected;
        if (this.isCheckbox() && !this.disabled) {
            this.setInputValue();
        }
    }
    formResetCallback() {
        if (this.isCheckbox() && !this.disabled) {
            this.setValueChip(this.initialValue);
        }
    }
    isCheckbox() {
        return this.role === ChipChoiceRole.Checkbox;
    }
    handleClick = () => {
        this.toogleValueChip();
        this.select();
    };
    handleFocus = () => {
        if (!this.disabled) {
            this.athFocus.emit();
        }
    };
    handleBlur = () => {
        if (!this.disabled) {
            this.athBlur.emit();
        }
    };
    toogleValueChip() {
        this.setValueChip(!this.selected);
    }
    setValueChip(value) {
        if (!this.disabled && this.selected !== value) {
            this.selected = value;
            this.athChange.emit(this.el);
            this.setInputValue();
        }
    }
    setInputValue() {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals?.setFormValue(this.selected ? this.value : undefined);
            this.internals?.checkValidity();
        }
    }
    getHostAttributes = () => {
        return {
            'tabindex': this.visualSelected && !this.disabled ? '0' : '-1',
            'aria-disabled': this.disabled ? 'true' : undefined,
            'aria-checked': this.selected ? 'true' : 'false',
            'onClick': this.handleClick,
            'onFocus': this.handleFocus,
            'onBlur': this.handleBlur,
        };
    };
    getHostClassNames = () => ({
        'ath-chip-choice': true,
    });
    getContainerClassNames = () => ({
        'ath-chip-choice__container': true,
        [`ath-chip-choice__container--${this.size}`]: true,
        'ath-chip-choice__container--disabled': this.disabled,
        [`ath-chip-choice__container--checked`]: this.selected && !this.disabled,
    });
    renderIcon = () => {
        return h("ath-icon", { icon: this.icon, size: transformIconSize(IconType.Chipchoice, this.size), color: "inherit" });
    };
    render() {
        return (h(Host, { key: '5969f3fd3f8c0f7136d462f9b683553b836d3145', ...this.getHostAttributes(), class: this.getHostClassNames() }, h("span", { key: 'a4c47f1547de3bab87a3d4bc2101748afb2a2d71', class: this.getContainerClassNames() }, !!this.icon && this.renderIcon(), h("span", { key: 'f38573a8caf29ce20765b27c94ac15e0ed351e30', class: "ath-chip-choice__text" }, this.label))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "selected": ["watchSelectedHandler"]
    }; }
    static get style() { return chipChoiceCss; }
}, [321, "ath-chip-choice", {
        "selected": [1540],
        "disabled": [4],
        "icon": [1],
        "label": [1],
        "name": [1],
        "role": [513],
        "size": [1],
        "value": [1],
        "visualSelected": [32],
        "select": [64],
        "unselect": [64]
    }, [[0, "keydown", "handleKeydown"], [1, "mousedown", "handleMouseDown"]], {
        "selected": ["watchSelectedHandler"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-chip-choice", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-chip-choice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthChipChoice$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthChipChoice = AthChipChoice$1;
const defineCustomElement = defineCustomElement$1;

export { AthChipChoice, defineCustomElement };
//# sourceMappingURL=ath-chip-choice.js.map

//# sourceMappingURL=ath-chip-choice.js.map