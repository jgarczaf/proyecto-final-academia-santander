import { r as registerInstance, a as getElement, h, H as Host } from './index-D2-yfY-d.js';

const TagColor = {
    Primary: 'primary'};
const TagSize = {
    Medium: 'md'};
const TAG_DEFAULT_COLOR = TagColor.Primary;
const TAG_DEFAULT_SIZE = TagSize.Medium;

const tagCss = ":host .ath-tag--primary{background-color:var(--ath-color-tag-bg-primary);color:var(--ath-color-tag-fg-primary)}:host .ath-tag--secondary{background-color:var(--ath-color-tag-bg-secondary);color:var(--ath-color-tag-fg-secondary)}:host .ath-tag--accent{background-color:var(--ath-color-bg-accent-default);color:var(--ath-color-tag-fg-accent)}:host .ath-tag--danger{background-color:var(--ath-color-bg-danger-default);color:var(--ath-color-tag-fg-danger)}:host .ath-tag--warning{background-color:var(--ath-color-bg-warning-default);color:var(--ath-color-tag-fg-warning)}:host .ath-tag--success{background-color:var(--ath-color-bg-success-default);color:var(--ath-color-tag-fg-success)}:host .ath-tag--disabled{background-color:var(--ath-color-bg-alpha-disabled);color:var(--ath-color-fg-disabled)}:host .ath-tag--sm{font-size:var(--ath-font-size-comp-sm);padding:var(--ath-spacing-tag-padding-y-sm) var(--ath-spacing-tag-padding-x);line-height:var(--ath-font-line-height-comp-sm)}:host .ath-tag--md{font-size:var(--ath-font-size-comp-md);padding:var(--ath-spacing-tag-padding-y-sm) var(--ath-spacing-tag-padding-x);line-height:var(--ath-font-line-height-comp-md)}:host .ath-tag--lg{font-size:var(--ath-font-size-comp-md);padding:var(--ath-spacing-tag-padding-y-md) var(--ath-spacing-tag-padding-x);line-height:var(--ath-font-line-height-comp-md)}:host{display:inline-block}:host .ath-tag{display:flex;align-items:center;font-family:var(--ath-font-family-primary);font-weight:var(--ath-font-weight-medium);gap:var(--ath-spacing-tag-col-gap);border-radius:var(--ath-border-radius-tag)}:host .ath-tag--container{display:flex;align-items:center}";

const AthTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Color del tag acompañando al propósito del mensaje
     **/
    color = TAG_DEFAULT_COLOR;
    /**
     * Tamaño del tag
     **/
    size = TAG_DEFAULT_SIZE;
    /**
     * Icono
     */
    icon;
    /**
     * Texto que se visualiza dentro del tag
     **/
    headingText;
    getClassNames = () => ({
        'ath-tag': true,
        [`ath-tag--${this.color}`]: !!this.color,
        [`ath-tag--${this.size}`]: !!this.size,
    });
    get el() { return getElement(this); }
    render() {
        return (h(Host, { key: '1ef4e33816098d44b8912f4ccae5cb7fc99c0c42' }, h("div", { key: '3f76640bec0682692ac5a2311b97ca27bef0420e', class: "ath-tag-container" }, h("span", { key: '771cbb51a6f4efce149f46b6b7eea940a12f5e5d', class: this.getClassNames() }, this.icon && h("ath-icon", { key: '0cfc2ff34ac3a7d23a984586c9364bb178af1364', size: "xs", icon: this.icon, color: "inherit" }), h("span", { key: '357c9a59640b8dd9260a994b35c8108cea500745' }, this.headingText ?? h("slot", { key: '6a912319c544f571a8320cf7b9aeb5c73f05ae18' }))))));
    }
};
AthTag.style = tagCss;

export { AthTag as ath_tag };
//# sourceMappingURL=ath-tag.entry.js.map
