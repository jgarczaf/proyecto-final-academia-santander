import { h, Host } from "@stencil/core";
import { Alignment } from "./menu-button.model";
import { ButtonColor, ButtonSize } from "../button/button.model";
let menuButtonSequence = 0;
export class AthMenuButton {
    hostId = ++menuButtonSequence;
    overlayId = `menu-button--overlay-${this.hostId}`;
    el;
    /**
     * The overlay's position relative to the origin
     */
    alignment = Alignment.Left;
    /**
     * Weather the button is focused by default
     */
    autofocus;
    /**
     * The clear of the button (background and border color)
     */
    clear;
    /**
     * The color variant of the button
     */
    color = ButtonColor.Primary;
    /**
     * The button is disabled
     */
    disabled;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon = 'placeholder';
    /**
     * Wheather the menu is open by default
     */
    open;
    /**
     * The size of the button
     */
    size = ButtonSize.Medium;
    /**
     * Altura del overlay del menu
     */
    overlayMaxHeight;
    // ACCESSIBILITY
    /**
     * The accesible label of the menu-button
     */
    athAriaLabel;
    /**
     * Emitted when an item is clicked
     */
    athAction;
    justOpen = false;
    clickOutside(ev) {
        const path = ev.composedPath();
        if (!path.includes(this.el)) {
            this.open = false;
        }
    }
    handleClick = ev => {
        ev.stopPropagation();
        this.open = !this.open;
        this.justOpen = !this.justOpen;
        if (!this.disabled && this.open) {
            const items = Array.from(this.el.querySelectorAll('ath-menu-button-item'));
            const firstItem = items.find(i => !i.hasAttribute('disabled'));
            if (firstItem) {
                items.forEach(item => {
                    item.itemTabIndex = item === firstItem ? 0 : -1;
                });
                firstItem.focus();
            }
        }
    };
    componentDidLoad() {
        if (this.autofocus && !this.disabled) {
            this.setFocusToAthButton();
        }
        if (this.open && !this.disabled) {
            this.setFocusToAthButton();
        }
        const children = Array.from(this.el.querySelectorAll('ath-menu-button-item'));
        children.map(item => (item.tabIndex = -1));
        const htmlChildren = children.map(child => child);
        this.manageGroups(htmlChildren);
    }
    setFocusToAthButton() {
        const athButton = this.el.shadowRoot.querySelector('ath-button');
        athButton.focus();
    }
    manageGroups(children) {
        const groups = this.groupBy(children, item => item.getAttribute('group-name'));
        const allItemsArray = Array.from(children);
        const globalFirstItem = allItemsArray[0];
        const globalLastItem = allItemsArray[allItemsArray.length - 1];
        let previousGroupName = null;
        for (const group in groups) {
            const groupItems = groups[group];
            const firstItem = groupItems[0];
            const lastItem = groupItems[groupItems.length - 1];
            if (firstItem && lastItem) {
                const separator = document.createElement('ath-divider');
                separator.setAttribute('style', 'width: 100%');
                // SEPARATORS - Before the first item of the group
                if (firstItem !== globalFirstItem && previousGroupName !== group && firstItem.parentNode) {
                    const previousSibling = firstItem.previousElementSibling;
                    if (!previousSibling || !previousSibling.matches('ath-divider')) {
                        firstItem.parentNode.insertBefore(separator.cloneNode(true), firstItem);
                    }
                }
                // SEPARATORS - After the last item if it's not global last
                if (lastItem !== globalLastItem && lastItem.parentNode) {
                    lastItem.parentNode.insertBefore(separator.cloneNode(true), lastItem.nextSibling);
                }
                // GROUPS
                const groupContainer = document.createElement('div');
                groupContainer.setAttribute('role', 'group');
                groupContainer.setAttribute('aria-label', group);
                groupContainer.setAttribute('style', 'display: contents;');
                firstItem.parentNode.insertBefore(groupContainer, firstItem);
                groupItems.forEach(item => {
                    groupContainer.appendChild(item);
                });
                previousGroupName = group;
            }
        }
    }
    groupBy(array, keyGetter) {
        return array.reduce((result, current) => {
            const key = keyGetter(current);
            if (key) {
                if (!result[key]) {
                    result[key] = [];
                }
                result[key].push(current);
            }
            return result;
        }, {});
    }
    onClick(ev) {
        this.open = false;
        this.justOpen = false;
        this.setFocusToAthButton();
        if (ev.detail) {
            this.athAction.emit(ev.detail.target);
        }
        ev.stopPropagation();
    }
    handleKeyDown(ev) {
        if (ev.key === 'Escape' && this.open) {
            ev.preventDefault();
            this.open = false;
            this.setFocusToAthButton();
        }
        if (ev.key === 'Tab' && this.open) {
            this.open = false;
        }
        this.focusManager(ev);
    }
    focusManager(ev) {
        const items = Array.from(this.el.querySelectorAll('ath-menu-button-item')).filter(item => !item.hasAttribute('disabled'));
        const currentElement = document.activeElement;
        const currentIndex = items.indexOf(currentElement);
        let nextIndex;
        if (ev.key === 'ArrowDown') {
            ev.preventDefault();
            nextIndex = (currentIndex + 1) % items.length;
        }
        else if (ev.key === 'ArrowUp') {
            ev.preventDefault();
            if (currentIndex === -1) {
                nextIndex = items.length - 1;
            }
            else {
                nextIndex = (currentIndex - 1 + items.length) % items.length;
            }
        }
        else if (ev.key === 'Home') {
            ev.preventDefault();
            nextIndex = 0;
        }
        else if (ev.key === 'End') {
            ev.preventDefault();
            nextIndex = items.length - 1;
        }
        if (nextIndex !== undefined) {
            items.forEach((item, index) => {
                item.itemTabIndex = index === nextIndex ? 0 : -1;
            });
            items[nextIndex].focus();
        }
    }
    getButtonClassNames = () => ({
        'ath-menu-button-disabled': !!this.disabled,
    });
    getOverlayClassNames = () => ({
        'ath-menu-button-overlay': true,
        [`position--${this.alignment}`]: !!this.alignment,
    });
    render() {
        const styleHeight = this.overlayMaxHeight ? { maxHeight: this.overlayMaxHeight } : { maxHeight: '236px' };
        return (h(Host, { key: '0a9a0494d967dbb6246610c8b777d73b0c33d0cb' }, h("div", { key: '92b4aca13fe8777363003ebe1ef3fae47c7577b6', class: "ath-menu-button-container" }, h("div", { key: '615a3b48960031510834929c54e8c08114340c3e' }, h("ath-button", { key: 'a6857ff552e75e65b045265326cec90d897b0656', id: "button-menu", autofocus: !!this.autofocus, icon: this.icon, "icon-position": "icon-only", clear: this.clear, color: this.color, disabled: this.disabled, size: this.size, onAthClick: this.handleClick, "aria-controls": this.overlayId, "aria-expanded": !!this.open ? 'true' : 'false', "aria-haspopup": "true", class: this.getButtonClassNames(), "aria-label": this.athAriaLabel })), this.open && !this.disabled && (h("div", { key: '52a7974a390eefe8b92ad5757ee678673df56e1f', style: styleHeight, class: this.getOverlayClassNames(), id: this.overlayId, role: "menu", tabindex: "-1" }, h("div", { key: '868e41290b06bbd370dea4b52813a5be939ebe81', class: "ath-scroll ath-menu-button-overlay-wrapper" }, h("slot", { key: '2a3ef70d33fa5de66239b6517290b0a0bc56c15e' })))))));
    }
    static get is() { return "ath-menu-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-button.css"]
        };
    }
    static get properties() {
        return {
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "Alignments",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "Alignments": {
                            "location": "import",
                            "path": "./menu-button.model",
                            "id": "src/components/menu-button/menu-button.model.ts::Alignments"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The overlay's position relative to the origin"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "Alignment.Left"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
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
                    "text": "Weather the button is focused by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "clear": {
                "type": "boolean",
                "attribute": "clear",
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
                    "text": "The clear of the button (background and border color)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "ButtonColors",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "ButtonColors": {
                            "location": "import",
                            "path": "components/button/button.model",
                            "id": "src/components/button/button.model.ts::ButtonColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color variant of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ButtonColor.Primary"
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
                    "text": "The button is disabled"
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
                    "text": "The code of the button's icon (used with iconPosition)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'placeholder'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Wheather the menu is open by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ButtonSizes": {
                            "location": "import",
                            "path": "components/button/button.model",
                            "id": "src/components/button/button.model.ts::ButtonSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ButtonSize.Medium"
            },
            "overlayMaxHeight": {
                "type": "string",
                "attribute": "overlay-max-height",
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
                    "text": "Altura del overlay del menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "The accesible label of the menu-button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athAction",
                "name": "athAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when an item is clicked"
                },
                "complexType": {
                    "original": "{ item: HTMLAthMenuButtonItemElement }",
                    "resolved": "{ item: HTMLAthMenuButtonItemElement; }",
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
                "name": "click",
                "method": "clickOutside",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "athSelected",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=menu-button.js.map
