import { r as registerInstance, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { I as IconSize } from './icons-BnU0zKUi.js';
import { I as IconColor } from './icon.model-hrbYB415.js';

const iconCss = ":host .ath-icon--xs{--font-size:var(--ath-font-size-icon-xs)}:host .ath-icon--sm{--font-size:var(--ath-font-size-icon-sm)}:host .ath-icon--md{--font-size:var(--ath-font-size-icon-md)}:host .ath-icon--lg{--font-size:var(--ath-font-size-icon-lg)}:host .ath-icon--default{color:var(--ath-color-icon-default)}:host .ath-icon--primary{color:var(--ath-color-icon-primary-default)}:host .ath-icon--info{color:var(--ath-color-icon-feedback-info)}:host .ath-icon--accent{color:var(--ath-color-icon-accent-default)}:host .ath-icon--error{color:var(--ath-color-icon-feedback-danger)}:host .ath-icon--warning{color:var(--ath-color-icon-feedback-warning)}:host .ath-icon--success{color:var(--ath-color-icon-feedback-success)}:host .ath-icon--inverse{color:var(--ath-color-icon-inverse-default)}:host .ath-icon--disabled{color:var(--ath-color-icon-disabled)}:host{display:inline-flex;height:fit-content;width:fit-content}:host svg{font-size:var(--font-size)}";

const AthIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    theme;
    get el() { return getElement(this); }
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
};
AthIcon.style = iconCss;

export { AthIcon as ath_icon };
//# sourceMappingURL=ath-icon.entry.js.map
