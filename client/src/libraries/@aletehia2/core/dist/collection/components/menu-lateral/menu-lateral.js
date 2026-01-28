import { h, Host } from "@stencil/core";
import { MenuLateralItemType } from "./menu-lateral.model";
import { FcHelpDescription } from "../../sharedfc/tooltip/index";
let menuLateralSequence = 0;
export class AthMenuLateral {
    hostId = menuLateralSequence++;
    menuLateralId = `menu-lateral-${this.hostId}`;
    /**
     * (JSON) Object of items to generate
     */
    items;
    /**
     * Items generated
     */
    generatedMenuLateralItems = [];
    /**
     * Id of the hovered item
     */
    hoveredItemId = null;
    /**
     * Id of the focused item
     */
    focusedItemId = null;
    /**
     * Show focused item
     */
    showFocused = false;
    /**
     * Events
     */
    athSelected;
    el;
    // Items generation
    onItemsChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.generateMenuLateralItems();
        }
    }
    componentWillLoad() {
        this.generateMenuLateralItems();
    }
    generateMenuLateralItems() {
        const items = this.getItems();
        this.generatedMenuLateralItems = items.map((item, index) => ({
            id: `${this.menuLateralId}-item-${index}`,
            ariaLabel: item.ariaLabel || item.tooltipText,
            badgeLabel: item.badgeLabel,
            badgeMax: item.badgeMax,
            badgeValue: item.badgeValue,
            disabled: item.disabled,
            icon: item.icon,
            name: item.name,
            selected: item.selected === true,
            tooltipText: item.tooltipText,
            externalLabel: item.externalLabel,
            href: !item.disabled ? item.href : undefined,
            rel: item.rel,
            target: !!item.target ? `_${item.target}` : '_self',
            type: item.href != '' ? MenuLateralItemType.Link : MenuLateralItemType.Action,
        }));
    }
    getItems() {
        if (this.items) {
            const parsedItems = typeof this.items === 'string' ? this.parseItems(this.items) : [...this.items];
            return parsedItems;
        }
        return this.scanChildrenItems();
    }
    parseItems(value) {
        try {
            return value ? JSON.parse(value) : [];
        }
        catch (error) {
            console.error('Error parsing items:', error);
            return [];
        }
    }
    scanChildrenItems() {
        return Array.from(this.el.querySelectorAll('ath-menu-lateral-item-link, ath-menu-lateral-item-action')).map((item, index) => {
            const isLink = item.tagName.toLowerCase() === 'ath-menu-lateral-item-link';
            return {
                id: `menu-lateral-${this.hostId}-item-${index}`,
                ariaLabel: item.ariaLabel || item.tooltipText,
                badgeLabel: item.badgeLabel,
                badgeMax: item.badgeMax,
                badgeValue: item.badgeValue,
                disabled: item.disabled,
                icon: item.icon,
                name: item.name,
                selected: item.selected === true,
                tooltipText: item.tooltipText,
                ...(isLink
                    ? {
                        externalLabel: item.externalLabel,
                        href: !item.disabled ? item.href : undefined,
                        rel: item.rel,
                        target: item.target,
                        type: MenuLateralItemType.Link,
                    }
                    : {
                        type: MenuLateralItemType.Action,
                    }),
            };
        });
    }
    // Render Items
    renderMenuItem(item) {
        if (item.type === MenuLateralItemType.Action)
            return this.renderActionItem(item);
        if (item.type === MenuLateralItemType.Link)
            return this.renderLinkItem(item);
        return null;
    }
    renderActionItem = item => {
        return (h("div", { id: item.id, class: this.getMenuLateralItemButtonClassNames(item), role: "menuitem", "aria-label": item.ariaLabel, "aria-describedby": `${item.id}-desc`, "aria-disabled": item.disabled ? 'true' : 'false', "aria-current": item.selected.toString(), onMouseEnter: () => this.handleMouseEnter(item.id), onMouseLeave: this.handleMouseLeave, onClick: () => this.handleClick(item), tabindex: "-1" }, !!item.icon && this.renderIcon(item), h("div", { id: `${item.id}-desc`, class: "ath-visibility-hidden" }, item.badgeLabel)));
    };
    renderLinkItem = item => {
        return (h("a", { id: item.id, class: this.getMenuLateralItemButtonClassNames(item), role: "menuitem", "aria-label": item.ariaLabel, "aria-describedby": `${item.id}-desc`, "aria-disabled": item.disabled ? 'true' : 'false', "aria-current": item.selected && 'page', onMouseEnter: () => this.handleMouseEnter(item.id), onMouseLeave: this.handleMouseLeave, onClick: () => this.handleClick(item), href: item.href, target: item.target, rel: item.rel, tabindex: "-1" }, !!item.icon && this.renderIcon(item), h("div", { id: `${item.id}-desc`, class: "ath-visibility-hidden" }, h("span", null, item.badgeLabel), item.target === '_blank' && h("span", null, item.externalLabel))));
    };
    getMenuLateralItemButtonClassNames = item => ({
        'ath-menu-lateral__item-container': true,
        [`ath-menu-lateral__item-container--disabled`]: item.disabled,
        [`ath-menu-lateral__item-container--selected`]: item.selected,
        'ath-menu-lateral__item--focused': this.focusedItemId === item.id && this.showFocused,
    });
    renderIcon = item => h("ath-icon", { icon: item.icon, color: item.disabled ? 'disabled' : item.selected ? 'inverse' : 'primary', size: "sm" });
    // Interaction
    handleMenuItemKeyDown(event) {
        const index = this.generatedMenuLateralItems.findIndex(item => item.id === this.focusedItemId);
        let nextIndex = index;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                nextIndex = this.findNextEnabledIndex(index, 1);
                event.preventDefault();
                this.setFocusedItemId(this.generatedMenuLateralItems[nextIndex].id);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                nextIndex = this.findNextEnabledIndex(index, -1);
                event.preventDefault();
                this.setFocusedItemId(this.generatedMenuLateralItems[nextIndex].id);
                break;
            case 'Home':
                nextIndex = this.generatedMenuLateralItems.findIndex(item => !item.disabled);
                if (nextIndex !== -1) {
                    event.preventDefault();
                    this.setFocusedItemId(this.generatedMenuLateralItems[nextIndex].id);
                }
                break;
            case 'End':
                nextIndex = this.generatedMenuLateralItems.length - 1;
                while (nextIndex >= 0 && this.generatedMenuLateralItems[nextIndex].disabled) {
                    nextIndex--;
                }
                if (nextIndex >= 0) {
                    event.preventDefault();
                    this.setFocusedItemId(this.generatedMenuLateralItems[nextIndex].id);
                }
                break;
            case 'Enter':
            case ' ':
                if (index !== -1) {
                    const item = this.generatedMenuLateralItems[index];
                    if (item.type === MenuLateralItemType.Link && item.href && !item.disabled) {
                        const linkEl = this.el.shadowRoot.querySelector(`#${item.id}`);
                        if (linkEl) {
                            linkEl.click();
                        }
                    }
                    else {
                        this.handleClick(item);
                    }
                }
                break;
            default:
                break;
        }
    }
    findNextEnabledIndex(startIndex, direction) {
        const total = this.generatedMenuLateralItems.length;
        let idx = startIndex;
        for (let i = 0; i < total; i++) {
            idx = (idx + direction + total) % total;
            if (!this.generatedMenuLateralItems[idx].disabled) {
                return idx;
            }
        }
        return startIndex;
    }
    setFocusedItemId(id) {
        this.focusedItemId = id;
        this.hoveredItemId = null;
    }
    // Selection
    handleClick(item) {
        if (item.disabled)
            return;
        this.generatedMenuLateralItems = this.generatedMenuLateralItems.map(i => ({
            ...i,
            selected: i.id === item.id,
        }));
        this.emitSelectedEvent(item);
    }
    emitSelectedEvent(item) {
        this.athSelected.emit(item);
    }
    onSelectedItemIdChange(newValue) {
        this.generatedMenuLateralItems.map(item => {
            item.selected = item.id === newValue ? true : false;
        });
    }
    // Tooltip
    handleMouseEnter = (itemId) => {
        this.hoveredItemId = itemId;
        this.focusedItemId = null;
    };
    handleMouseLeave = () => {
        this.hoveredItemId = null;
        this.focusedItemId = null;
    };
    handleFocus = () => {
        this.showFocused = true;
        if (!this.focusedItemId && this.generatedMenuLateralItems.length > 0) {
            const firstEnabled = this.generatedMenuLateralItems.find(i => !i.disabled);
            if (firstEnabled)
                this.setFocusedItemId(firstEnabled.id);
        }
    };
    // Render
    render() {
        return (h(Host, { key: '8546b332f533e29fb44a544731c06200416c0e22' }, h("div", { key: 'b8fb9cd974b1699eeec867f7db444373c76a9879', role: "menubar", class: "ath-menu-lateral", tabindex: "0", "aria-activedescendant": this.focusedItemId, onKeyDown: e => this.handleMenuItemKeyDown(e), onFocus: this.handleFocus, onBlur: () => {
                this.showFocused = false;
            } }, this.generatedMenuLateralItems.map(item => (h("div", { class: "ath-menu-lateral__item-wrapper" }, h("div", { class: "ath-menu-lateral__item" }, item.badgeValue ? (h("ath-badge", { value: item.badgeValue, max: item.badgeMax, position: "top-right", "distance-x": -5, "distance-y": -4, color: item.disabled ? 'disabled' : 'accent' }, this.renderMenuItem(item))) : (this.renderMenuItem(item))), h("span", { class: ((this.hoveredItemId === item.id && !item.disabled) || this.focusedItemId === item.id) && item.tooltipText ? '' : 'ath-visibility-hidden' }, h(FcHelpDescription, { text: item.tooltipText, position: "bottom-right" }))))))));
    }
    static get is() { return "ath-menu-lateral"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-lateral.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-lateral.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "string",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "MenuLateralItem[] | string",
                    "resolved": "MenuLateralItem[] | string",
                    "references": {
                        "MenuLateralItem": {
                            "location": "import",
                            "path": "./menu-lateral.model",
                            "id": "src/components/menu-lateral/menu-lateral.model.ts::MenuLateralItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(JSON) Object of items to generate"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "generatedMenuLateralItems": {},
            "hoveredItemId": {},
            "focusedItemId": {},
            "showFocused": {}
        };
    }
    static get events() {
        return [{
                "method": "athSelected",
                "name": "athSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Events"
                },
                "complexType": {
                    "original": "{ item: HTMLAthMenuLateralItemActionElement | HTMLAthMenuLateralItemLinkElement }",
                    "resolved": "{ item: any; }",
                    "references": {
                        "HTMLAthMenuLateralItemActionElement": {
                            "location": "global",
                            "id": "global::HTMLAthMenuLateralItemActionElement"
                        },
                        "HTMLAthMenuLateralItemLinkElement": {
                            "location": "global",
                            "id": "global::HTMLAthMenuLateralItemLinkElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "onItemsChange"
            }, {
                "propName": "selectedItemId",
                "methodName": "onSelectedItemIdChange"
            }];
    }
}
//# sourceMappingURL=menu-lateral.js.map
