'use strict';

var index = require('./index--hWT2F8k.js');

const menuButtonItemCss = ".sc-ath-menu-button-item-h{display:flex;width:100%;cursor:pointer}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item{align-items:flex-start;border-radius:var(--ath-border-radius-menu-button-option);background:var(--ath-color-bg-alpha-default);width:100%}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item .sc-ath-menu-button-item:hover{border-radius:var(--ath-border-radius-menu-button-option);background:var(--ath-color-bg-alpha-hovered)}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item .sc-ath-menu-button-item:active{background:var(--ath-color-bg-alpha-pressed);border:none}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item{color:var(--ath-color-fg-default)}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level--disabled.sc-ath-menu-button-item{background:var(--ath-color-bg-alpha-default);color:var(--ath-color-fg-disabled);cursor:default}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level--disabled.sc-ath-menu-button-item .sc-ath-menu-button-item:hover{background:unset}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item .menu-button-option.sc-ath-menu-button-item{display:flex;padding:var(--ath-spacing-menu-button-option-padding-y) var(--ath-spacing-menu-button-option-padding-x);align-items:flex-start;gap:var(--ath-spacing-menu-button-option-col-gap);justify-content:space-between}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item .menu-button-option.sc-ath-menu-button-item .text.sc-ath-menu-button-item{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-menu-button-option);font-style:normal;font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-menu-button-option);white-space:nowrap;flex-grow:1}.sc-ath-menu-button-item-h ._ath-menu-button-option.sc-ath-menu-button-item .ath-menu-button-option__level.sc-ath-menu-button-item .menu-button-option.sc-ath-menu-button-item .sc-ath-menu-button-item:hover{background:unset}.sc-ath-menu-button-item-h:focus-visible{outline:none;border-radius:var(--ath-border-radius-menu-button-option);box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset;background:unset}";

const AthMenuButtonItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athSelected = index.createEvent(this, "athSelected");
    }
    get el() { return index.getElement(this); }
    /**
     * name option
     */
    name;
    /**
     * Weather the button is disabled
     */
    disabled;
    /**
     * The name of the grout the item belongs to
     */
    groupName;
    /**
     * The icon of the menu-button-item
     */
    icon;
    /**
     * The text of the menu-button-item
     */
    text;
    itemTabIndex = -1;
    /**
     * Emitted when the item is clicked and triggers an action
     */
    athSelected;
    handleClick = ev => {
        if (!this.disabled) {
            ev.stopPropagation();
            this.athSelected.emit(ev);
        }
    };
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            ev.preventDefault();
            this.handleClick(ev);
        }
    }
    getMenuButtonOptionLevelClassNames = () => ({
        'ath-menu-button-option__level': true,
        [`ath-menu-button-option__level--disabled`]: this.disabled,
    });
    render() {
        return (index.h(index.Host, { key: 'c026ca056fb38ee5c8df4482f3a371b34b54efa6', role: "menuitem", onClick: this.handleClick, tabindex: this.itemTabIndex, "aria-disabled": !!this.disabled ? 'true' : 'false' }, index.h("div", { key: 'f83dfe904d193518ea1dd43dd06321872beeb56b', class: "_ath-menu-button-option" }, index.h("div", { key: '02d7530e984d2577e17187c14c22bd7becd4b97c', class: this.getMenuButtonOptionLevelClassNames() }, index.h("div", { key: '5d84080f9ae0103b63d65e469a5ffb588cedb17f', class: "menu-button-option" }, !!this.icon && index.h("ath-icon", { key: '6af3376c6e87469cc8bb3de07a17d36799cfe383', icon: this.icon }), index.h("div", { key: '927479829028e865aebf04b5151df146aa43e15d', class: "text" }, this.text))))));
    }
};
AthMenuButtonItem.style = menuButtonItemCss;

exports.ath_menu_button_item = AthMenuButtonItem;
//# sourceMappingURL=ath-menu-button-item.entry.cjs.js.map
