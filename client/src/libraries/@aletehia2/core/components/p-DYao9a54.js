import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { t as transformIconSize, a as IconType } from './p-BnU0zKUi.js';
import { d as defineCustomElement$1 } from './p-DbpanEQL.js';

const ButtonLinkColor = {
    Primary: 'primary'};
const ButtonLinkPosition = {
    Left: 'left',
    Right: 'right',
};
const ButtonLinkSize = {
    Medium: 'md'};

const buttonLinkCss = ".ath-button-link__inner:hover{text-decoration-line:underline}.ath-button-link__inner:active{text-decoration-line:underline;color:var(--ath-color-fg-primary-pressed)}.ath-button-link--disabled .ath-button-link__inner:hover{text-decoration-line:none}:host{display:inline-flex;user-select:none}:host .ath-button-link--container{display:inline-flex;font-family:var(--ath-font-family-primary);font-size:var(--font-size);font-weight:var(--ath-font-weight-medium);line-height:var(--ath-font-line-height-body);border-radius:var(--ath-border-radius-2xs);outline:none;transition:background 0.5s;cursor:pointer}:host .ath-button-link--container .ath-button-link__inner{display:inline-flex;justify-content:center;align-items:center;gap:var(--ath-spacing-between-100)}:host .ath-button-link--container.ath-button-link--disabled{box-shadow:none;color:var(--ath-color-fg-disabled);pointer-events:none}:host[disabled]:not([disabled=false]),:host[disabled=true]{cursor:not-allowed}:host(:focus:not(:active)),:host(:focus-visible:not(:active)){outline:none}:host(:focus:not(:active)) .ath-button-link--container,:host(:focus-visible:not(:active)) .ath-button-link--container{outline:2px solid var(--ath-color-border-focus);outline-offset:2px;color:var(--ath-color-fg-primary-default)}:host(:focus:not(:active)) .ath-button-link--container .ath-button-link__inner,:host(:focus-visible:not(:active)) .ath-button-link--container .ath-button-link__inner{text-decoration-line:underline}.ath-button-link--sm{--font-size:var(--ath-font-size-comp-sm)}.ath-button-link--md{--font-size:var(--ath-font-size-comp-md)}.ath-button-link--lg{--font-size:var(--ath-font-size-comp-lg)}:host .ath-button-link--primary:not(.ath-button-link--disabled){color:var(--ath-color-fg-primary-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled){color:var(--ath-color-fg-default)}:host .ath-button-link--primary:not(.ath-button-link--disabled) :hover{color:var(--ath-color-fg-primary-hovered)}:host .ath-button-link--primary:not(.ath-button-link--disabled){color:var(--ath-color-fg-primary-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled){color:var(--ath-color-fg-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled) :hover{color:var(--ath-color-fg-primary-hovered)}";

const AthButtonLink = /*@__PURE__*/ proxyCustomElement(class AthButtonLink extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athClick = createEvent(this, "athClick");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
    }
    get el() { return this; }
    /**
     * The color variant of the button-link
     */
    color = ButtonLinkColor.Primary;
    /**
     * The size of the buton-link
     */
    size = ButtonLinkSize.Medium;
    /**
     * The code of the button-link's icon
     */
    icon;
    /**
     * Icon Position
     */
    iconPosition = ButtonLinkPosition.Left;
    /**
     * The button-link is disabled
     */
    disabled = false;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    /**
     * Emitted when the button-link is clicked
     */
    athClick;
    /**
     * Emitted when the button-link gains focus
     */
    athFocus;
    /**
     * Emitted when the button-link loses focus
     */
    athBlur;
    componentDidLoad() {
        if (this.el.hasAttribute('autofocus') && this.el.getAttribute('autofocus') !== 'false') {
            this.setFocus();
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            this.handleClick();
        }
    }
    handleClick = ( /**event: Event*/) => {
        if (!this.disabled) {
            this.athClick.emit();
        }
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    getHostClassNames = () => ({
        'ath-button-link': true,
    });
    getSpanClassNames = () => ({
        'ath-button-link--container': true,
        [`ath-button-link--disabled`]: this.disabled,
        [`ath-button-link--${this.size}`]: !!this.size,
        [`ath-button-link--${this.color}`]: !!this.color,
    });
    renderIcon = () => {
        const iconSize = transformIconSize(IconType.ButtonLink, this.size);
        return h("ath-icon", { icon: this.icon, color: "inherit", size: iconSize });
    };
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (h(Host, { key: '0198f0b8c0d485c210f878994ddd42b8385bc024', role: "button", class: this.getHostClassNames(), tabindex: this.disabled ? '-1' : hostTabindex, onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false' }, h("span", { key: 'f8dc664dbda30fa37e65db2d0047b2758d6b5974', class: this.getSpanClassNames(), part: "button-link-styles" }, h("span", { key: '3baf1047389aa42b71e0e453b9222f37bb56b408', class: "ath-button-link__inner" }, this.icon && this.iconPosition === ButtonLinkPosition.Left && this.renderIcon(), h("slot", { key: 'b23b89609695c86b96e1b82ff9c37d0002e66a73' }), this.icon && this.iconPosition === ButtonLinkPosition.Right && this.renderIcon()))));
    }
    static get style() { return buttonLinkCss; }
}, [257, "ath-button-link", {
        "color": [513],
        "size": [513],
        "icon": [1],
        "iconPosition": [1, "icon-position"],
        "disabled": [4],
        "setFocus": [64]
    }, [[0, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-button-link", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-button-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthButtonLink);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AthButtonLink as A, defineCustomElement as d };
//# sourceMappingURL=p-DYao9a54.js.map

//# sourceMappingURL=p-DYao9a54.js.map