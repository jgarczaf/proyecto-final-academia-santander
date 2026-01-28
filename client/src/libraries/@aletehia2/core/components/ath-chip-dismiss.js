import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { C as ChipDismissSize } from './p-CT2ZlU4F.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const chipDismissCss = ":host .ath-chip-dismiss__container{--color:initial}:host .ath-chip-dismiss__container--sm{gap:var(--ath-spacing-chip-dismiss-col-gap-sm);--padding:calc(var(--ath-spacing-chip-dismiss-padding-y-sm) - 1px) var(--ath-spacing-chip-dismiss-padding-x-sm)}:host .ath-chip-dismiss__container--md{gap:var(--ath-spacing-chip-col-gap);--padding:calc(var(--ath-spacing-chip-dismiss-padding-y-md) - 1px) var(--ath-spacing-chip-dismiss-padding-x-md)}:host{display:inline-flex;height:fit-content;width:fit-content}:host .ath-chip-dismiss__container{display:inline-flex;align-items:center;padding:var(--padding);border-radius:var(--ath-border-radius-chip);background:var(--ath-color-chip-dismiss-bg);color:var(--ath-color-chip-dismiss-fg)}:host .ath-chip-dismiss__container--disabled{background:var(--ath-color-bg-alpha-disabled);color:var(--ath-color-fg-disabled)}:host .ath-chip-dismiss__container .ath-chip-dismiss__text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;overflow:hidden;text-overflow:ellipsis;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-chip);font-style:normal;font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-chip)}:host .ath-chip-dismiss__container .ath-chip-dismiss__button{display:flex;background-color:transparent;border:none;flex-direction:column;justify-content:center;align-items:center;padding:0px;border-radius:var(--ath-border-radius-chip-dismiss-button);color:var(--ath-color-chip-dismiss-button-icon-default);cursor:pointer}:host .ath-chip-dismiss__container .ath-chip-dismiss__button:hover:enabled{background:var(--ath-color-chip-dismiss-button-bg-hovered);color:var(--ath-color-icon-default)}:host .ath-chip-dismiss__container .ath-chip-dismiss__button:active:enabled{background:var(--ath-color-chip-dismiss-button-bg-pressed);color:var(--ath-color-icon-default)}:host .ath-chip-dismiss__container .ath-chip-dismiss__button:focus:enabled:not(:active),:host .ath-chip-dismiss__container .ath-chip-dismiss__button:focus-visible:enabled:not(:active){box-shadow:0px 0px 0px 2px var(--ath-color-border-inverse-focus);outline:none}:host .ath-chip-dismiss__container .ath-chip-dismiss__button:disabled{border-radius:var(--ath-border-radius-xs);background:var(--ath-color-bg-alpha-default);color:var(--ath-color-fg-disabled);cursor:none}";

const AthChipDismiss$1 = /*@__PURE__*/ proxyCustomElement(class AthChipDismiss extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athDismiss = createEvent(this, "athDismiss");
    }
    get el() { return this; }
    /**
     * The button is disabled
     */
    disabled = false;
    /**
     * The icon to the left
     */
    icon;
    /**
     * The text in the chip
     */
    headingText;
    /**
     * The accesible label-dismiss attribute in chip dismiss
     */
    labelDismiss = 'Eliminar';
    /**
     * The size of the chip dismiss
     */
    size = ChipDismissSize.Medium;
    /**
     * Emitted when the x icon is clicked
     */
    athDismiss;
    handleDismiss = () => {
        if (!this.disabled) {
            this.athDismiss.emit();
        }
    };
    getSpanClassNames = () => ({
        'ath-chip-dismiss__container': true,
        [`ath-chip-dismiss__container--${this.size}`]: !!this.size,
        'ath-chip-dismiss__container--disabled': this.disabled,
    });
    renderIcon = () => {
        if (this.icon != 'null') {
            return h("ath-icon", { icon: this.icon, size: "xs", color: "inherit" });
        }
    };
    render() {
        return (h(Host, { key: '4e3bc349a6421e8d151038bb667f64eacaf21a20' }, h("span", { key: 'eb3af22c9d93e9fb92182ef129c45f8bb6f40b43', class: this.getSpanClassNames() }, this.icon && this.renderIcon(), h("span", { key: 'c503a8c58c655ee4e2fa2e429748339e5206594e', class: "ath-chip-dismiss__text" }, this.headingText), h("button", { key: '13f83107525800d78b58302cd2de1705210a3517', "aria-label": this.labelDismiss, disabled: this.disabled, class: "ath-chip-dismiss__button", type: "button", onClick: this.handleDismiss }, h("ath-icon", { key: '6c51fc213deedf205c17e3f7e1da4fececa5ea64', icon: "close_small", size: "xs", color: "inherit" })))));
    }
    static get style() { return chipDismissCss; }
}, [257, "ath-chip-dismiss", {
        "disabled": [4],
        "icon": [1],
        "headingText": [1, "heading-text"],
        "labelDismiss": [1, "label-dismiss"],
        "size": [1025]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-chip-dismiss", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-chip-dismiss":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthChipDismiss$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthChipDismiss = AthChipDismiss$1;
const defineCustomElement = defineCustomElement$1;

export { AthChipDismiss, defineCustomElement };
//# sourceMappingURL=ath-chip-dismiss.js.map

//# sourceMappingURL=ath-chip-dismiss.js.map