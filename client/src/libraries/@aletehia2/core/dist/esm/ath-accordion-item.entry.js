import { r as registerInstance, c as createEvent, h, H as Host } from './index-D2-yfY-d.js';

const accordionItemCss = ":host{align-self:stretch}:host .ath-accordion-item{flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--ath-spacing-accordion-item-row-gap);align-self:stretch;background:var(--ath-color-bg-alpha-default)}:host .ath-accordion-item-divider{border-bottom:1px solid var(--ath-color-border-alpha-bolder-default)}:host .ath-accordion-item--header{align-self:stretch;border-left:2px solid transparent;cursor:pointer;padding:var(--ath-spacing-accordion-item-header-padding-y) var(--ath-spacing-accordion-item-header-padding-x)}:host .ath-accordion-item--header:focus-visible{box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset;outline:none}:host .ath-accordion-item--header.disabled{opacity:0.5;pointer-events:none}:host .ath-accordion-item--header:hover{border-left:2px solid var(--ath-color-border-alpha-boldest-default);background:var(--ath-color-bg-alpha-hovered);transition:0.5s}:host .ath-accordion-item--header__button{display:flex;flex-direction:column;align-items:flex-start}:host .ath-accordion-item--header__button:focus-visible{outline:none}:host .ath-accordion-item--header__wrapper{display:flex;align-items:center;gap:var(--ath-spacing-accordion-item-header-col-gap);align-self:stretch}:host .ath-accordion-item--header__content{display:flex;align-items:flex-start;gap:var(--ath-spacing-accordion-item-header-icon-col-gap);flex:1 0 0}:host .ath-accordion-item--header__text{display:flex;padding-top:var(--ath-spacing-accordion-item-header-text-padding-top);flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-accordion-item-header-text-row-gap);flex:1 0 0}:host .ath-accordion-item--header__title{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-heading-6);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-6)}:host .ath-accordion-item--header__subtitle{color:var(--ath-color-accordion-item-header-text-description);font-family:var(--ath-font-family-body);font-size:var(--ath-font-size-body-md);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-accordion-item--panel{display:flex;padding:0;padding-left:var(--ath-spacing-accordion-item-content-padding-y);flex-direction:column;align-items:flex-start;align-self:stretch;overflow:hidden;max-height:0;transition:max-height 0.5s ease, padding 0.5s ease}:host .ath-accordion-item--panel.expanded{overflow:visible;max-height:fit-content;padding:var(--ath-spacing-accordion-item-content-padding-y) var(--ath-spacing-accordion-item-content-padding-x)}:host .ath-accordion-item--chevron ath-icon{color:var(--ath-color-fg-default);transition:transform 0.3s ease-in-out}:host .ath-accordion-item--chevron-rotate ath-icon{transform:rotate(180deg)}:host ::slotted([slot=header-detail]){display:flex;flex-direction:column;gap:var(--ath-spacing-accordion-item-header-text-row-gap);color:var(--ath-color-fg-default);padding:8px;justify-content:center;align-self:stretch}";

let accordionItemsequence = 0;
const AthAccordionItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.opened = createEvent(this, "opened");
    }
    hostId = `item-${++accordionItemsequence}`;
    panelId = `panel-${this.hostId}`;
    /**
     * Title of heading item
     */
    headingText;
    /**
     * Descriprion of heading item
     */
    description;
    /**
     * The accordion item is disabled
     */
    disabled = false;
    /**
     * The accordion item is expanded
     */
    expanded = false;
    /**
     * The accordion item aria-level
     */
    headingLevel = '2';
    /**
     * The accordion item divider bottom
     */
    noDivider = false;
    /**
     * The code of the accordion item's icon
     */
    icon;
    handleDisabled(expanded) {
        if (expanded) {
            this.opened.emit();
        }
    }
    async close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    opened;
    handleToggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.handleToggle();
        }
    }
    getParentClassNames = () => ({
        'ath-accordion-item': true,
        'ath-accordion-item-divider': !this.noDivider,
    });
    getPanelClassNames = () => ({
        'ath-accordion-item--panel': true,
        'expanded': this.expanded && !this.disabled,
    });
    getHeaderClassNames = () => ({
        'ath-accordion-item--header': true,
        'disabled': this.disabled,
    });
    getChevronClasses = () => ({
        'ath-accordion-item--chevron': true,
        [`ath-accordion-item--chevron-rotate`]: !!this.expanded,
    });
    async componentWillLoad() {
        if (this.disabled) {
            this.expanded = false;
        }
    }
    render() {
        return (h(Host, { key: '68046b3579d868429680fa8b88d95889cab97ff1' }, h("div", { key: '2f4945ca774128a3bb1bb75ef858f59cfdf6a92c', class: this.getParentClassNames() }, h("div", { key: 'a37518c1536834a9b98a481023af4b1eb450d1d9', role: "button", "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.panelId, "aria-disabled": this.disabled ? 'true' : 'false', tabindex: this.disabled ? '-1' : '0', onClick: () => this.handleToggle(), onKeyDown: event => this.handleKeydown(event), class: this.getHeaderClassNames() }, h("span", { key: 'b1bd2a4986485e331b417106f0c11f80aaea8d75', id: this.hostId, class: `ath-accordion-item--header__button`, role: "heading", "aria-level": this.headingLevel }, h("div", { key: 'e63c41426a534ac2b89f99a2196a2cd887758f7f', class: "ath-accordion-item--header__wrapper" }, h("div", { key: 'd432b26354dab48dc59bdc5579892b995ba88d6d', class: "ath-accordion-item--header__content" }, this.icon && h("ath-icon", { key: '9c972ccb46b96d4a0cba41c4aabdec7527cf874b', icon: this.icon }), h("div", { key: 'e1a9d0f175342206802fa40e217d311d1f78f221', class: "ath-accordion-item--header__text" }, this.headingText && h("span", { key: '6df9e776aad70740bd3c16a692957ef3216d4e3e', class: "ath-accordion-item--header__title" }, this.headingText), this.description && h("span", { key: 'cd6684b9c5a1dc904dfb676510b8335654cb9a80', class: "ath-accordion-item--header__subtitle" }, this.description))), h("slot", { key: '2be30b5d415d7b5dbbb2d796c2fe6e7aff81aca0', name: "header-detail" }), h("div", { key: '87c03dc120f04234c288840d8c2c94e1b22198c3', class: this.getChevronClasses() }, h("ath-icon", { key: '8de9485de25b812b3ac64fd360dfafc8db61b62b', icon: "chevron_down" }))))), h("div", { key: 'a59a2d0803d4020e6f731e0977dd4b35ae5cb1d8', id: this.panelId, class: this.getPanelClassNames() }, h("slot", { key: '38c4b3d0b657e635341d17e5213d545504e90cfc' })))));
    }
    static get watchers() { return {
        "expanded": ["handleDisabled"]
    }; }
};
AthAccordionItem.style = accordionItemCss;

export { AthAccordionItem as ath_accordion_item };
//# sourceMappingURL=ath-accordion-item.entry.js.map
