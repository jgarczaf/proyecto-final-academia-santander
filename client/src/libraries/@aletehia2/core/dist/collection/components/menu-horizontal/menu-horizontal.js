import { h, Host } from "@stencil/core";
import { FcButtonComp } from "../../sharedfc/input/index";
import { ButtonIconPosition } from "../button/button.model";
import { IconSize } from "../../utils/helper/index";
import { moveFocusToItem } from "./focus-manager";
import { focusItem } from "./focus-manager";
import { TargetType } from "./menu-horizontal.model";
let menuHorizontalSequence = 0;
export class AthMenuHorizontal {
    /**
     * The accessible label for the menu
     */
    athAriaLabel;
    /**
     * Whether the menu has a divider below
     */
    hasDivider = true;
    /**
     * Items to generate using the imperative way
     */
    items;
    /**
     * Emitted when an item is selected with the MenuHorizontalItem object
     */
    athSelected;
    selectedMenuHorizontalItemId;
    activeMenuHorizontalItemId;
    showArrows = false;
    isLeftArrowHidden = false;
    isRightArrowHidden = false;
    el;
    hostId = ++menuHorizontalSequence;
    menuHorizontalItems = [];
    firstEnabledItemId;
    lastEnabledItemId;
    itemGroup;
    resizeObserver;
    onItemsChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.generateItems();
            this.detectFirstAndLastEnabledTab();
            this.detectSelectedItem();
        }
    }
    componentWillLoad() {
        this.generateItems();
        this.detectFirstAndLastEnabledTab();
        this.detectSelectedItem();
        this.activeMenuHorizontalItemId = this.selectedMenuHorizontalItemId; // init
    }
    // Items generation
    generateItems() {
        const items = this.getItemsFromAnySource();
        this.menuHorizontalItems = items.map((item, i) => ({
            badgeLabel: item.badgeLabel,
            badgeMax: item.badgeMax,
            badgeValue: item.badgeValue,
            disabled: item.disabled,
            externalLabel: item.externalLabel,
            href: item.href,
            id: `menu-horizontal-${this.hostId}-${i}`,
            label: item.label,
            rel: item.rel,
            selected: item.selected,
            target: !!item.target ? item.target : TargetType.Self,
            value: item.value,
        }));
    }
    getItemsFromAnySource() {
        if (this.items) {
            const parsedItems = typeof this.items === 'string' ? this.getItemsFromImperative(this.items) : [...this.items];
            return parsedItems;
        }
        return this.getItemsFromDOM();
    }
    getItemsFromImperative(value) {
        try {
            return value ? JSON.parse(value) : [];
        }
        catch (error) {
            console.error('Error parsing items:', error);
            return [];
        }
    }
    getDOMElements() {
        return Array.from(this.el.querySelectorAll('ath-menu-horizontal-item'));
    }
    getItemsFromDOM() {
        return this.getDOMElements().map((item, i) => ({
            badgeLabel: item.badgeLabel,
            badgeMax: item.badgeMax,
            badgeValue: item.badgeValue,
            disabled: item.disabled,
            externalLabel: item.externalLabel,
            href: item.href,
            id: `menu-horizontal-${this.hostId}-${i}`,
            label: item.label,
            rel: item.rel,
            selected: item.selected,
            target: !!item.target ? item.target : TargetType.Self,
            value: item.value,
        }));
    }
    detectFirstAndLastEnabledTab() {
        const firstEnabled = this.menuHorizontalItems.find(item => !item.disabled);
        this.firstEnabledItemId = firstEnabled ? firstEnabled.id : undefined;
        const lastEnabled = this.menuHorizontalItems
            .slice()
            .reverse()
            .find(item => !item.disabled);
        this.lastEnabledItemId = lastEnabled ? lastEnabled.id : undefined;
    }
    detectSelectedItem() {
        const selectedItem = this.menuHorizontalItems.find(item => item.selected);
        this.selectedMenuHorizontalItemId = selectedItem ? selectedItem.id : this.firstEnabledItemId;
        const elements = this.getDOMElements();
        elements.forEach((element, index) => {
            element.selected = this.menuHorizontalItems[index]?.id === this.selectedMenuHorizontalItemId;
        });
    }
    // Arrows visibility
    componentDidLoad() {
        this.updateArrowsVisibility();
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => {
                this.updateArrowsVisibility();
            });
            if (this.itemGroup) {
                this.resizeObserver.observe(this.itemGroup);
            }
        }
    }
    updateArrowsVisibility = () => {
        if (this.itemGroup) {
            const hasOverflow = this.itemGroup.scrollWidth > this.itemGroup.clientWidth;
            this.showArrows = hasOverflow;
            this.isLeftArrowHidden = this.itemGroup.scrollLeft <= 0;
            const maxScrollLeft = this.itemGroup.scrollWidth - this.itemGroup.clientWidth;
            this.isRightArrowHidden = this.itemGroup.scrollLeft >= maxScrollLeft - 2;
        }
    };
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    // Interaction
    handleItemFocus = (event) => {
        const target = event.target;
        if (target && this.itemGroup) {
            target.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        }
    };
    handleItemClick = (e, item) => {
        if (item.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.selectedMenuHorizontalItemId = item.id;
        // Update items array
        this.menuHorizontalItems.forEach(menuItem => {
            menuItem.selected = menuItem.id === item.id;
        });
        // Update DOM elements if they exist
        const elements = this.getDOMElements();
        elements.forEach(element => {
            element.selected = false;
        });
        const selectedIndex = parseInt(item.id.split('-').pop());
        if (elements[selectedIndex]) {
            elements[selectedIndex].selected = true;
        }
        this.emitSelectedEvent(item);
    };
    handleKeyDown = (event, item) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleItemClick(event, item);
            return;
        }
        else if (event.key === 'ArrowLeft') {
            if (this.activeMenuHorizontalItemId !== this.firstEnabledItemId) {
                const nextTabId = moveFocusToItem(this.menuHorizontalItems, -1, this.activeMenuHorizontalItemId);
                focusItem(nextTabId, this.el);
            }
        }
        else if (event.key === 'ArrowRight') {
            if (this.activeMenuHorizontalItemId !== this.lastEnabledItemId) {
                const nextTabId = moveFocusToItem(this.menuHorizontalItems, 1, this.activeMenuHorizontalItemId);
                focusItem(nextTabId, this.el);
            }
        }
        else if (event.key === 'Home') {
            if (this.activeMenuHorizontalItemId !== this.firstEnabledItemId) {
                focusItem(this.firstEnabledItemId, this.el);
            }
        }
        else if (event.key === 'End') {
            if (this.activeMenuHorizontalItemId !== this.lastEnabledItemId) {
                focusItem(this.lastEnabledItemId, this.el);
            }
        }
        const activeElement = document.activeElement;
        this.activeMenuHorizontalItemId = activeElement && activeElement.id ? activeElement.id : undefined;
    };
    emitSelectedEvent(item) {
        this.athSelected.emit(item);
    }
    scrollItems(direction) {
        if (this.itemGroup) {
            const scrollFactor = 0.9;
            const scrollAmount = this.itemGroup.clientWidth * scrollFactor < 250 ? 250 : this.itemGroup.clientWidth * scrollFactor;
            this.itemGroup.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            requestAnimationFrame(() => this.updateArrowsVisibility());
        }
    }
    getHostClassNames() {
        return {
            'ath-menu-horizontal': true,
            'ath-menu-horizontal--has-divider': this.hasDivider,
            'ath-items': true,
        };
    }
    getMenuHorizontalItemItemClassNames(item) {
        return {
            'ath-menu-horizontal-item': true,
            ['ath-menu-horizontal-item--selected']: item.id === this.selectedMenuHorizontalItemId,
            ['ath-menu-horizontal-item--disabled']: item.disabled,
        };
    }
    renderLabel = item => {
        if (item.badgeValue) {
            return (h("ath-badge", { label: item.badgeLabel, position: "right", value: item.badgeValue, max: item.badgeMax, color: item.disabled ? 'disabled' : 'accent' }, item.label));
        }
        else
            return item.label;
    };
    render() {
        return (h(Host, { key: 'e604afad2f73baed70a7cf3f4b052d9907dfbbe0' }, h("div", { key: 'be2c2e45191e8e6db827065f50d4b8a13792d155', class: this.getHostClassNames() }, this.showArrows && !this.isLeftArrowHidden && (h("div", { key: 'df042365d7a1af0f831f29befb02f28a7d9399d3', class: "ath-menu-horizontal__button ath-menu-horizontal__button-left", "aria-hidden": "true" }, h(FcButtonComp, { key: '6365524247d274beffac5f7e1a1f6e0942ddb517', icon: "chevron_left", color: "default", iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Small, onClick: () => this.scrollItems('left'), "aria-hidden": "true", tabindex: -1 }))), h("nav", { key: '9d595f5b1f58da4e3e2a5193343c5f11ec45b41a', class: "ath-menu-horizontal--item-group", ref: el => (this.itemGroup = el), onScroll: () => this.updateArrowsVisibility() }, h("ul", { key: '42146685284d907fa5e1b51985bf66973ff15d9e', class: "ath-menu-horizontal--item-group--list", role: "menubar", "aria-label": this.athAriaLabel }, this.menuHorizontalItems.map((item, i) => (h("li", { class: {
                'last-item--padding-right': i === this.menuHorizontalItems.length - 1,
                'ath-menu-horizontal--item-group--list--item': true,
            }, role: "none" }, h("a", { role: "menuitem", id: item.id, href: item.href, target: `_${item.target}`, "aria-disabled": item.disabled ? 'true' : 'false', tabindex: item.id === this.selectedMenuHorizontalItemId ? '0' : '-1', "aria-current": item.id === this.selectedMenuHorizontalItemId ? 'page' : undefined, class: this.getMenuHorizontalItemItemClassNames(item), onClick: e => this.handleItemClick(e, item), onKeyDown: event => this.handleKeyDown(event, item), onFocus: this.handleItemFocus }, h("div", { class: "ath-menu-horizontal-item--content" }, h("span", { class: "ath-menu-horizontal-label" }, this.renderLabel(item)), item.id === this.selectedMenuHorizontalItemId && item.id === this.activeMenuHorizontalItemId && h("span", { class: "sr-only" }, " seleccionado")), item.target === 'blank' && h("span", { class: "sr-only ath-external-label" }, ' ' + item.externalLabel), h("div", { class: { 'ath-menu-horizontal-item--indicator': this.selectedMenuHorizontalItemId === item.id } }))))))), this.showArrows && !this.isRightArrowHidden && (h("div", { key: '887898198af9b634e36fae391d82641b128baa63', class: "ath-menu-horizontal__button ath-menu-horizontal__button-right", "aria-hidden": "true" }, h(FcButtonComp, { key: '264f27a99fd4f3ded1cba0ca677bdfc064255f7e', icon: "chevron_right", color: "default", iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Small, onClick: () => this.scrollItems('right'), buttonAriaLabel: "Mostrar m\u00E1s pesta\u00F1as hacia la derecha", "aria-hidden": "true", tabindex: -1 }))))));
    }
    static get is() { return "ath-menu-horizontal"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-horizontal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-horizontal.css"]
        };
    }
    static get properties() {
        return {
            "athAriaLabel": {
                "type": "string",
                "attribute": "ath-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The accessible label for the menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasDivider": {
                "type": "boolean",
                "attribute": "has-divider",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the menu has a divider below"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "items": {
                "type": "string",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "MenuHorizontalItem[] | string",
                    "resolved": "MenuHorizontalItem[] | string",
                    "references": {
                        "MenuHorizontalItem": {
                            "location": "import",
                            "path": "./menu-horizontal-item/menu-horizontal-item.model",
                            "id": "src/components/menu-horizontal/menu-horizontal-item/menu-horizontal-item.model.ts::MenuHorizontalItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Items to generate using the imperative way"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedMenuHorizontalItemId": {},
            "activeMenuHorizontalItemId": {},
            "showArrows": {},
            "isLeftArrowHidden": {},
            "isRightArrowHidden": {}
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
                    "text": "Emitted when an item is selected with the MenuHorizontalItem object"
                },
                "complexType": {
                    "original": "MenuHorizontalItem",
                    "resolved": "{ badgeLabel?: string; badgeMax?: number; badgeValue?: number; disabled?: boolean; externalLabel?: string; href?: string; id: string; label: string; rel?: string; selected?: boolean; target?: TargetTypes; value?: any; }",
                    "references": {
                        "MenuHorizontalItem": {
                            "location": "import",
                            "path": "./menu-horizontal-item/menu-horizontal-item.model",
                            "id": "src/components/menu-horizontal/menu-horizontal-item/menu-horizontal-item.model.ts::MenuHorizontalItem"
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
            }];
    }
}
//# sourceMappingURL=menu-horizontal.js.map
