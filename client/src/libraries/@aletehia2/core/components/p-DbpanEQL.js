import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { I as IconSize } from './p-BnU0zKUi.js';
import { I as IconColor } from './p-hrbYB415.js';

const iconCss = ":host .ath-icon--xs{--font-size:var(--ath-font-size-icon-xs)}:host .ath-icon--sm{--font-size:var(--ath-font-size-icon-sm)}:host .ath-icon--md{--font-size:var(--ath-font-size-icon-md)}:host .ath-icon--lg{--font-size:var(--ath-font-size-icon-lg)}:host .ath-icon--default{color:var(--ath-color-icon-default)}:host .ath-icon--primary{color:var(--ath-color-icon-primary-default)}:host .ath-icon--info{color:var(--ath-color-icon-feedback-info)}:host .ath-icon--accent{color:var(--ath-color-icon-accent-default)}:host .ath-icon--error{color:var(--ath-color-icon-feedback-danger)}:host .ath-icon--warning{color:var(--ath-color-icon-feedback-warning)}:host .ath-icon--success{color:var(--ath-color-icon-feedback-success)}:host .ath-icon--inverse{color:var(--ath-color-icon-inverse-default)}:host .ath-icon--disabled{color:var(--ath-color-icon-disabled)}:host{display:inline-flex;height:fit-content;width:fit-content}:host svg{font-size:var(--font-size)}";

const AthIcon = /*@__PURE__*/ proxyCustomElement(class AthIcon extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    theme;
    get el() { return this; }
    /**
     * The icon name
     */
    icon;
    /**
     * The size of the icon
     */
    size = IconSize.Medium;
    /**
     * Color del icon
     **/
    color;
    /**
     * The aria-label attribute of the icon
     */
    ariaLabel;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby;
    componentWillLoad() {
        this.theme = document.body.dataset.theme || 'core';
    }
    hasAriaLabel() {
        return !!this.ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        return {
            'aria-hidden': !hasLabel ? 'true' : undefined,
            'aria-label': this.hasAriaLabel() ? this.ariaLabel.trim() : undefined,
            'aria-labelledby': this.hasAriaLabelledBy() ? this.ariaLabelledby.trim() : undefined,
            'role': hasLabel ? 'img' : undefined,
        };
    }
    classNames = () => ({
        'ath-icon': true,
        [`ath-icon--${this.size}`]: !!this.size,
        [`ath-icon--${this.getColor()}`]: !!this.getColor(),
    });
    getColor() {
        if (this.color === IconColor.Inherit) {
            return undefined;
        }
        return this.color || IconColor.Default;
    }
    render() {
        const assetsPath = `assets/images/sprites/${this.theme}/sprites.svg`;
        return (h(Host, { key: '8bc0985fce43364c5f5a86e2d6d73d41ea9c337d', ...this.getHostAttributes() }, h("svg", { key: '1ae8487e6ecc7dfd48ec88973cb07c3321e032eb', width: "1em", height: "1em", focusable: "false", "aria-hidden": "true", class: this.classNames() }, h("use", { key: 'ddcd367d6772ae69e8c81e6722328220fed3b8a8', xlinkHref: `${assetsPath}#${this.icon}` }))));
    }
    static get style() { return iconCss; }
}, [257, "ath-icon", {
        "icon": [1],
        "size": [513],
        "color": [1],
        "ariaLabel": [1, "aria-label"],
        "ariaLabelledby": [1, "aria-labelledby"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthIcon);
            }
            break;
    } });
}

export { AthIcon as A, defineCustomElement as d };
//# sourceMappingURL=p-DbpanEQL.js.map

//# sourceMappingURL=p-DbpanEQL.js.map