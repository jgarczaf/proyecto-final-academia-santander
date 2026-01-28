import { h, Host } from "@stencil/core";
export class AthMenuButtonItem {
    el;
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
        return (h(Host, { key: 'c026ca056fb38ee5c8df4482f3a371b34b54efa6', role: "menuitem", onClick: this.handleClick, tabindex: this.itemTabIndex, "aria-disabled": !!this.disabled ? 'true' : 'false' }, h("div", { key: 'f83dfe904d193518ea1dd43dd06321872beeb56b', class: "_ath-menu-button-option" }, h("div", { key: '02d7530e984d2577e17187c14c22bd7becd4b97c', class: this.getMenuButtonOptionLevelClassNames() }, h("div", { key: '5d84080f9ae0103b63d65e469a5ffb588cedb17f', class: "menu-button-option" }, !!this.icon && h("ath-icon", { key: '6af3376c6e87469cc8bb3de07a17d36799cfe383', icon: this.icon }), h("div", { key: '927479829028e865aebf04b5151df146aa43e15d', class: "text" }, this.text))))));
    }
    static get is() { return "ath-menu-button-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-button-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-button-item.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "name option"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Weather the button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "groupName": {
                "type": "string",
                "attribute": "group-name",
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
                    "text": "The name of the grout the item belongs to"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "The icon of the menu-button-item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                    "text": "The text of the menu-button-item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "itemTabIndex": {
                "type": "number",
                "attribute": "item-tab-index",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "-1"
            }
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
                    "text": "Emitted when the item is clicked and triggers an action"
                },
                "complexType": {
                    "original": "HTMLAthMenuButtonItemElement",
                    "resolved": "HTMLAthMenuButtonItemElement",
                    "references": {
                        "HTMLAthMenuButtonItemElement": {
                            "location": "global",
                            "id": "global::HTMLAthMenuButtonItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=menu-button-item.js.map
