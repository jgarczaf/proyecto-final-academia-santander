'use strict';

var index = require('./index--hWT2F8k.js');
var icons = require('./icons-DfQaoUal.js');

const linkSize = {
    Md: 'md'};
const linkTarget = {
    Blank: 'blank'};

const linkCss = ".sc-ath-link-h{display:flex;width:fit-content}.sc-ath-link-h .ath-link.sc-ath-link{text-decoration:none;display:flex;justify-content:center;align-items:center;gap:var(--ath-spacing-between-100);font-family:var(--ath-font-family-primary);font-style:normal;line-height:var(--ath-font-line-height-body);font-weight:var(--ath-font-weight-medium);border-radius:var(--ath-border-radius-2xs);text-decoration-style:solid;text-decoration-skip-ink:none;text-decoration-thickness:auto;text-underline-offset:auto;text-underline-position:from-font;cursor:pointer}.sc-ath-link-h .ath-link.sc-ath-link:focus-visible:not(.ath-link--disabled){outline:none;box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}.sc-ath-link-h .ath-link--disabled.sc-ath-link{pointer-events:none;color:var(--ath-color-fg-disabled)}.sc-ath-link-h .ath-link--underline.sc-ath-link{text-decoration-line:underline}.sc-ath-link-h .ath-link.sc-ath-link:not(.ath-link--disabled):not(:visited):not(:hover):not(:active){color:var(--ath-color-fg-primary-default)}.sc-ath-link-h .ath-link.sc-ath-link:visited:not(.ath-link--disabled){color:var(--ath-color-fg-primary-pressed)}.sc-ath-link-h .ath-link.sc-ath-link:hover:not(.ath-link--disabled){color:var(--ath-color-fg-primary-hovered)}.sc-ath-link-h .ath-link.sc-ath-link:active:not(.ath-link--disabled){color:var(--ath-color-fg-primary-pressed)}.sc-ath-link-h .ath-link--sm.sc-ath-link{font-size:var(--ath-font-size-body-sm)}.sc-ath-link-h .ath-link--md.sc-ath-link{font-size:var(--ath-font-size-body-md)}.sc-ath-link-h .ath-link--lg.sc-ath-link{font-size:var(--ath-font-size-body-lg)}";

const AthLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athClick = index.createEvent(this, "athClick");
        this.athFocus = index.createEvent(this, "athFocus");
        this.athBlur = index.createEvent(this, "athBlur");
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
    get el() { return index.getElement(this); }
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
        const iconSize = icons.transformIconSize(icons.IconType.Link, this.size);
        return index.h("ath-icon", { icon: this.icon, size: iconSize, "aria-label": this.iconAriaLabel, color: "inherit" });
    };
    render() {
        const target = '_' + this.linkTarget;
        const linkTabindex = this.el.getAttribute('tabindex') === '-1' || this.disabled ? '-1' : '0';
        return (index.h(index.Host, { key: 'f20a20fda5390be3dd41075af2ac1bfbaf90e5ef' }, index.h("a", { key: '30677497c8e32958f14a15fb0094d8e1fb0d6af4', class: this.getClassNames(), href: this.linkHref, target: target, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, tabindex: linkTabindex, "aria-label": this.setAriaLabel(this.ariaLabel), "aria-labelledby": this.ariaLabelledby, "aria-describedby": this.ariaDescribedby, "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("slot", { key: '228f5b6c4e313a65488b07f6a2bfb0e020a96c73' }), !!this.icon && this.renderIcon())));
    }
};
AthLink.style = linkCss;

exports.ath_link = AthLink;
//# sourceMappingURL=ath-link.entry.cjs.js.map
