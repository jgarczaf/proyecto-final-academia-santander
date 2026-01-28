import { h, Host } from "@stencil/core";
import { moveFocusToTab, focusTab } from "./focus-manager";
import { TabsTypes } from "./tabs.model";
import { FcButtonComp } from "../../sharedfc/input/index";
import { ButtonIconPosition } from "../button/button.model";
import { IconSize } from "../../utils/helper/index";
let tabsSequence = 0;
export class AthTabs {
    /**
     * Tipo de Tabs
     */
    type = TabsTypes.Underline;
    /**
     * Etiqueta accesible para la lista de tabs
     */
    listAriaLabel;
    /**
     * Lista de tabs a generar
     */
    items;
    selectedTabId;
    activeTabId;
    showLeftArrow = false;
    showRightArrow = false;
    el;
    hostId = ++tabsSequence;
    tabs = [];
    panelElements = [];
    firstEnabledTabId;
    lastEnabledTabId;
    tabGroup;
    resizeObserver;
    onItemsChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.generateTabs();
            this.detectFirstAndLastEnabledTab();
            this.detectSelectedTab();
            this.showSelectedPanel();
        }
    }
    componentWillLoad() {
        this.panelElements = Array.from(this.el.querySelectorAll('ath-panel'));
        this.generateTabs();
        this.detectFirstAndLastEnabledTab();
        this.detectSelectedTab();
        this.setPanelAtributes();
    }
    generateTabs() {
        const tabs = this.getTabs();
        this.tabs = tabs.map(tab => ({
            id: `tab-${this.hostId}-${tab.id}`,
            label: tab.label,
            disabled: tab.disabled,
            icon: tab.icon,
            iconAriaLabel: tab['icon-aria-label'],
            selected: tab.selected === true,
            panelId: '',
        }));
    }
    getTabs() {
        if (this.items) {
            const parsedItems = typeof this.items === 'string' ? this.parseItems(this.items) : [...this.items];
            return parsedItems;
        }
        return this.getTabElements();
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
    getTabElements() {
        return Array.from(this.el.querySelectorAll('ath-tab')).map(tab => ({
            id: tab.id,
            label: tab.label,
            disabled: tab.disabled,
            icon: tab.icon,
            iconAriaLabel: tab.iconAriaLabel,
            selected: tab.selected,
        }));
    }
    componentDidLoad() {
        this.showSelectedPanel();
        this.updateArrowsVisibility();
        this.resizeObserver = new ResizeObserver(() => {
            this.updateArrowsVisibility();
        });
        this.resizeObserver.observe(this.el);
        this.checkNumberOfPanels();
    }
    setPanelAtributes() {
        this.panelElements.map((_panel, index) => this.panelElements[index].setAttribute('hidden', 'true'));
        this.tabs.map((tab, index) => {
            if (this.panelElements[index]) {
                if (!this.panelElements[index].id) {
                    this.panelElements[index].setAttribute('id', `panel-${tab.id}`);
                }
                tab.panelId = this.panelElements[index].id;
                this.panelElements[index].setAttribute('aria-labelledby', tab.id);
            }
        });
    }
    detectFirstAndLastEnabledTab() {
        this.firstEnabledTabId = this.tabs.find(tab => !tab.disabled).id;
        this.lastEnabledTabId = this.tabs
            .slice()
            .reverse()
            .find(tab => !tab.disabled)?.id;
    }
    detectSelectedTab() {
        const selectedTab = this.tabs.find(tab => tab.selected);
        this.selectedTabId = selectedTab ? selectedTab.id : this.firstEnabledTabId;
    }
    showSelectedPanel() {
        const selectedPanelId = this.tabs.find(tab => tab.id === this.selectedTabId).panelId;
        this.panelElements.forEach(panel => {
            if (panel.id === selectedPanelId) {
                panel.removeAttribute('hidden');
            }
            else {
                panel.setAttribute('hidden', 'true');
            }
        });
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    handleTabClick = tab => {
        if (!tab.disabled) {
            this.selectedTabId = tab.id;
            this.showSelectedPanel();
        }
    };
    handleKeyUp = (event, tab) => {
        if (event.key === 'Enter' || event.key === ' ') {
            this.handleTabClick(tab);
        }
        else if (event.key === 'ArrowLeft') {
            if (this.activeTabId !== this.firstEnabledTabId) {
                const nextTabId = moveFocusToTab(this.tabs, -1, this.activeTabId);
                focusTab(nextTabId, this.el);
            }
        }
        else if (event.key === 'ArrowRight') {
            if (this.activeTabId !== this.lastEnabledTabId) {
                const nextTabId = moveFocusToTab(this.tabs, 1, this.activeTabId);
                focusTab(nextTabId, this.el);
            }
        }
        else if (event.key === 'Home') {
            if (this.activeTabId !== this.firstEnabledTabId) {
                focusTab(this.firstEnabledTabId, this.el);
            }
        }
        else if (event.key === 'End') {
            if (this.activeTabId !== this.lastEnabledTabId) {
                focusTab(this.lastEnabledTabId, this.el);
            }
        }
        this.activeTabId = document.activeElement.id;
    };
    scrollTabs(direction) {
        if (this.tabGroup) {
            const scrollAmount = 250;
            this.tabGroup.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            requestAnimationFrame(() => this.updateArrowsVisibility());
        }
    }
    updateArrowsVisibility = () => {
        if (this.tabGroup) {
            const maxScrollLeft = this.tabGroup.scrollWidth - this.tabGroup.clientWidth;
            this.showLeftArrow = this.tabGroup.scrollLeft > 0;
            this.showRightArrow = this.tabGroup.scrollLeft < maxScrollLeft - 5;
        }
    };
    checkNumberOfPanels = () => {
        {
            if (this.panelElements.length != this.tabs.length) {
                console.error(`AVISO: Hay una ${this.panelElements.length > this.tabs.length ? 'mayor' : 'menor'} cantidad de paneles (${this.panelElements.length}) que de tabs (${this.tabs.length}). Por favor, revíselo.`);
            }
        }
    };
    getHostClassNames() {
        return {
            'ath_tab-header': true,
            [`ath-tabs--${this.type}`]: !!this.type,
        };
    }
    getTabItemClassNames(tab) {
        return {
            'ath-tab__item': true,
            [`ath-tab__item--${this.type}`]: !!this.type,
            ['ath-tab__item--selected']: tab.id === this.selectedTabId,
            ['ath-tab__item--box--selected']: tab.id === this.selectedTabId && this.type === 'box',
            ['ath-tab__item--disabled']: tab.disabled,
        };
    }
    getTabListClassNames() {
        return {
            'ath-tab__list--box': this.type === 'box',
        };
    }
    render() {
        return (h(Host, { key: 'a491b7cca8c84987cd314aca0a8cbac579a131a2' }, h("div", { key: 'eb64d9410cc10310d4ba79bc0089e152b671d7c9', class: this.getHostClassNames() }, this.showLeftArrow && (h("div", { key: '1d30f97f7096558f1dd25251de536c4089561c71', class: "ath-tab-header__button ath-tab-header__button-left" }, h(FcButtonComp, { key: '8a27953c32cdc650041d4639b8433cc39d38ecb6', icon: "chevron_left", color: "default", iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Small, onClick: () => this.scrollTabs('left'), buttonAriaLabel: "Mostrar m\u00E1s pesta\u00F1as hacia la izquierda" }))), h("div", { key: '3e67a1d7b6950b2e858e174a0be4382047d31414', class: "ath-tab__group", ref: el => (this.tabGroup = el), onScroll: () => this.updateArrowsVisibility() }, h("ul", { key: 'b5ef42384789a804f316acd883edf7fc9834ba16', role: "tablist", "aria-label": this.listAriaLabel, class: this.getTabListClassNames() }, this.tabs.map(tab => (h("li", { role: "presentation", class: this.getTabListClassNames() }, h("span", { role: "tab", id: tab.id, "aria-controls": tab.panelId, "aria-selected": tab.id === this.selectedTabId ? 'true' : 'false', "aria-disabled": tab.disabled ? true : false, tabindex: tab.id === this.selectedTabId ? '0' : '-1', class: this.getTabItemClassNames(tab), onClick: () => this.handleTabClick(tab), onKeyUp: event => this.handleKeyUp(event, tab) }, tab.icon && h("ath-icon", { icon: tab.icon, size: "md", "aria-label": tab.iconAriaLabel }), tab.label)))))), this.showRightArrow && (h("div", { key: '1da92e8803c1fcef119221f39f1fec4fc5afd644', class: "ath-tab-header__button ath-tab-header__button-right" }, h(FcButtonComp, { key: 'd7a291d54a5e662294efb5c74bd890ab29b91157', icon: "chevron_right", color: "default", iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Small, onClick: () => this.scrollTabs('right'), buttonAriaLabel: "Mostrar m\u00E1s pesta\u00F1as hacia la derecha" })))), h("slot", { key: '5f2250a09f810204c004d22591474e1497ffbb70', name: "panel" })));
    }
    static get is() { return "ath-tabs"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tabs.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "TabsType",
                    "resolved": "\"box\" | \"underline\"",
                    "references": {
                        "TabsType": {
                            "location": "import",
                            "path": "./tabs.model",
                            "id": "src/components/tabs/tabs.model.ts::TabsType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tipo de Tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TabsTypes.Underline"
            },
            "listAriaLabel": {
                "type": "string",
                "attribute": "list-aria-label",
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
                    "text": "Etiqueta accesible para la lista de tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "items": {
                "type": "string",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "TabItem[] | string",
                    "resolved": "TabItem[] | string",
                    "references": {
                        "TabItem": {
                            "location": "import",
                            "path": "./tabs.model",
                            "id": "src/components/tabs/tabs.model.ts::TabItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Lista de tabs a generar"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedTabId": {},
            "activeTabId": {},
            "showLeftArrow": {},
            "showRightArrow": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "onItemsChange"
            }];
    }
}
//# sourceMappingURL=tabs.js.map
