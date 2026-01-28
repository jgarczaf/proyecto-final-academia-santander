import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { t as transformIconSize, a as IconType } from './p-BnU0zKUi.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const linkSize = {
    Md: 'md'};
const linkTarget = {
    Blank: 'blank'};

const linkCss = ".sc-ath-link-h{display:flex;width:fit-content}.sc-ath-link-h .ath-link.sc-ath-link{text-decoration:none;display:flex;justify-content:center;align-items:center;gap:var(--ath-spacing-between-100);font-family:var(--ath-font-family-primary);font-style:normal;line-height:var(--ath-font-line-height-body);font-weight:var(--ath-font-weight-medium);border-radius:var(--ath-border-radius-2xs);text-decoration-style:solid;text-decoration-skip-ink:none;text-decoration-thickness:auto;text-underline-offset:auto;text-underline-position:from-font;cursor:pointer}.sc-ath-link-h .ath-link.sc-ath-link:focus-visible:not(.ath-link--disabled){outline:none;box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}.sc-ath-link-h .ath-link--disabled.sc-ath-link{pointer-events:none;color:var(--ath-color-fg-disabled)}.sc-ath-link-h .ath-link--underline.sc-ath-link{text-decoration-line:underline}.sc-ath-link-h .ath-link.sc-ath-link:not(.ath-link--disabled):not(:visited):not(:hover):not(:active){color:var(--ath-color-fg-primary-default)}.sc-ath-link-h .ath-link.sc-ath-link:visited:not(.ath-link--disabled){color:var(--ath-color-fg-primary-pressed)}.sc-ath-link-h .ath-link.sc-ath-link:hover:not(.ath-link--disabled){color:var(--ath-color-fg-primary-hovered)}.sc-ath-link-h .ath-link.sc-ath-link:active:not(.ath-link--disabled){color:var(--ath-color-fg-primary-pressed)}.sc-ath-link-h .ath-link--sm.sc-ath-link{font-size:var(--ath-font-size-body-sm)}.sc-ath-link-h .ath-link--md.sc-ath-link{font-size:var(--ath-font-size-body-md)}.sc-ath-link-h .ath-link--lg.sc-ath-link{font-size:var(--ath-font-size-body-lg)}";

const AthLink$1 = /*@__PURE__*/ proxyCustomElement(class AthLink extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.athClick = createEvent(this, "athClick");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
    }
    /**
     * aria-describedby para link
     */
    ariaDescribedby;
    /**
     * aria-label para link
     */
    ariaLabel;
    /**
     * aria-labelledby para link
     */
    ariaLabelledby;
    /**
     * Indica si el link esta deshabilitado
     */
    disabled;
    /**
     * Indica el icono a usar
     */
    icon;
    /**
     * Indica el aria-label para icono
     */
    iconAriaLabel;
    /**
     * Url del destino
     */
    linkHref;
    /**
     * Target para indicar donde se abrira
     */
    linkTarget = linkTarget.Blank;
    /**
     * Tamaño link
     */
    size = linkSize.Md;
    /**
     * Opcion del subrayado
     */
    underline = true;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel;
    /**
     * Emitted when the link is clicked
     */
    athClick;
    /**
     * Emitted when the lin gains focus
     */
    athFocus;
    /**
     * Emitted when the link loses focus
     */
    athBlur;
    get el() { return this; }
    handleClick = () => {
        this.athClick.emit();
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    setAriaLabel(baseLabel) {
        let label = baseLabel?.trim() || '';
        if (this.linkTarget === linkTarget.Blank) {
            const extra = this.externalLabel || '(enlace externo)';
            label = label ? `${label} ${extra}` : extra;
        }
        else if (this.externalLabel) {
            label = label ? `${label} ${this.externalLabel}` : this.externalLabel;
        }
        return label;
    }
    getClassNames = () => ({
        'ath-link': true,
        [`ath-link--${this.size}`]: !!this.size,
        'ath-link--disabled': this.disabled,
        'ath-link--underline': this.icon ? this.underline : true,
    });
    renderIcon = () => {
        const iconSize = transformIconSize(IconType.Link, this.size);
        return h("ath-icon", { icon: this.icon, size: iconSize, "aria-label": this.iconAriaLabel, color: "inherit" });
    };
    render() {
        const target = '_' + this.linkTarget;
        const linkTabindex = this.el.getAttribute('tabindex') === '-1' || this.disabled ? '-1' : '0';
        return (h(Host, { key: 'f20a20fda5390be3dd41075af2ac1bfbaf90e5ef' }, h("a", { key: '30677497c8e32958f14a15fb0094d8e1fb0d6af4', class: this.getClassNames(), href: this.linkHref, target: target, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, tabindex: linkTabindex, "aria-label": this.setAriaLabel(this.ariaLabel), "aria-labelledby": this.ariaLabelledby, "aria-describedby": this.ariaDescribedby, "aria-disabled": this.disabled ? 'true' : 'false' }, h("slot", { key: '228f5b6c4e313a65488b07f6a2bfb0e020a96c73' }), !!this.icon && this.renderIcon())));
    }
    static get style() { return linkCss; }
}, [262, "ath-link", {
        "ariaDescribedby": [1, "aria-describedby"],
        "ariaLabel": [1, "aria-label"],
        "ariaLabelledby": [1, "aria-labelledby"],
        "disabled": [4],
        "icon": [1],
        "iconAriaLabel": [1, "icon-aria-label"],
        "linkHref": [1, "link-href"],
        "linkTarget": [1, "link-target"],
        "size": [1],
        "underline": [4],
        "externalLabel": [1, "external-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-link", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthLink$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthLink = AthLink$1;
const defineCustomElement = defineCustomElement$1;

export { AthLink, defineCustomElement };
//# sourceMappingURL=ath-link.js.map

//# sourceMappingURL=ath-link.js.map