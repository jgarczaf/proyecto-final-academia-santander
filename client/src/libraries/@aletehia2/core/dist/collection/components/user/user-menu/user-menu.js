import { Host, h } from "@stencil/core";
import { UserMenuTypes } from "./user-menu.model";
import { AvatarSizes } from "../../avatar/avatar.model";
let userMenuSequence = 0;
export class AthUserMenu {
    hostId = `user-menu${++userMenuSequence}`;
    menuOverlayId = `${this.hostId}-overlay`;
    /**
     * Initials to display in the avatar.
     */
    initials;
    /**
     * Indica si user-menu esta abierto
     */
    open = false;
    /**
     * Define la src para imagen avatar
     */
    srcImage;
    /**
     * Define el nombre del usuario
     */
    userName;
    /**
     * Define el tipo de avatar
     */
    type = undefined;
    /**
     * Emitted when an item is clicked
     */
    athAction;
    el;
    buttonLinkEl;
    currentIndex = 0;
    firstTimeOpen = true;
    handleOutsideClick(event) {
        if (!this.el.contains(event.target)) {
            this.open = false;
        }
    }
    watchOpenState() {
        if (this.open) {
            document.addEventListener('mousedown', this.handleOutsideClick);
        }
        else {
            document.removeEventListener('mousedown', this.handleOutsideClick);
        }
    }
    handleClick = ev => {
        ev.stopPropagation();
        this.toggleMenu();
    };
    toggleMenu() {
        this.open = !this.open;
        this.buttonLinkEl.setAttribute('aria-expanded', String(this.open));
        if (!this.open) {
            this.firstTimeOpen = true;
        }
    }
    onClick(ev) {
        this.open = false;
        this.currentIndex = -1;
        this.buttonLinkEl.setAttribute('aria-expanded', 'false');
        this.firstTimeOpen = true;
        this.setFocusToAthButtonLink();
        if (ev.detail) {
            this.athAction.emit(ev.detail.target);
        }
        ev.stopPropagation();
    }
    getClassNames = () => ({
        'ath-user-menu': true,
    });
    handleKeyDown(ev) {
        if (ev.key === ' ' || ev.key === 'Enter') {
            ev.preventDefault();
        }
        if (ev.key === 'Escape' && this.open) {
            ev.preventDefault();
            this.open = false;
            this.buttonLinkEl.setAttribute('aria-expanded', 'false');
            this.firstTimeOpen = true;
            this.currentIndex = -1;
            this.setFocusToAthButtonLink();
        }
        if (ev.key === 'Tab' && this.open) {
            this.open = false;
            this.buttonLinkEl.setAttribute('aria-expanded', 'false');
            this.firstTimeOpen = true;
            this.currentIndex = -1;
        }
        this.focusManager(ev);
    }
    focusManager(ev) {
        const eventKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (eventKeys.includes(ev.key)) {
            const items = Array.from(this.el.querySelectorAll('ath-menu-button-item'));
            const totalItems = items.length;
            let nextIndex = this.currentIndex;
            if (items.length > 0) {
                if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                    !this.firstTimeOpen ? (nextIndex = this.getNextIndex(items, nextIndex, -1, totalItems)) : (nextIndex = this.getNextIndex(items, totalItems, -1, totalItems));
                }
                else if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                    !this.firstTimeOpen ? (nextIndex = this.getNextIndex(items, nextIndex, 1, totalItems)) : (nextIndex = 0);
                }
                else if (ev.key === 'Home') {
                    nextIndex = this.getNextIndex(items, -1, 1, totalItems);
                }
                else if (ev.key === 'End') {
                    nextIndex = this.getNextIndex(items, totalItems, -1, totalItems);
                }
                if (this.firstTimeOpen)
                    this.firstTimeOpen = false;
                this.currentIndex = nextIndex;
                const nextItem = items[nextIndex];
                items.forEach(item => {
                    item.itemTabIndex = item === nextItem ? 0 : -1;
                });
                nextItem.focus();
            }
        }
    }
    getNextIndex = (items, currentIndex, direction, totalItems) => {
        let newIndex = (currentIndex + direction + totalItems) % totalItems;
        while (items[newIndex].disabled) {
            newIndex = (newIndex + direction + totalItems) % totalItems;
        }
        return newIndex;
    };
    setFocusToAthButtonLink() {
        const athButtonLink = this.el.shadowRoot.querySelector('ath-button-link');
        athButtonLink.focus();
        return;
    }
    imgTag = () => {
        if (!!this.srcImage) {
            const src = this.srcImage;
            return h("img", { slot: "img", src: src, alt: this.userName });
        }
        else {
            return;
        }
    };
    getOverlayClassNames = () => ({
        'ath-user-menu-overlay': true,
    });
    getContainerClassNames = () => ({
        'ath-user-menu-container': true,
    });
    constructor() {
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }
    componentDidRender() {
        if (this.open) {
            const items = Array.from(this.el.querySelectorAll('ath-menu-button-item'));
            const firstItem = items.find(i => !i.hasAttribute('disabled'));
            if (firstItem) {
                items.forEach(item => {
                    item.itemTabIndex = item === firstItem ? 0 : -1;
                });
            }
        }
    }
    getAvatarAttributes = () => ({
        'avatar-name': !!this.userName ? this.userName : undefined,
        'initials': !!this.initials ? this.initials.substring(0, 2) : undefined,
        'type': this.type !== UserMenuTypes.HideAvatar ? this.type : undefined,
        'size': AvatarSizes.ExtraSmall,
    });
    render() {
        const icon = this.open ? 'chevron_up' : 'chevron_down';
        return (h(Host, { key: 'b5e1d387ec9b6163d607b5995648f459f05a0aa0' }, h("div", { key: '72cef12bf1137c536529219a2e30235041d58e0d', class: this.getClassNames() }, this.type !== UserMenuTypes.HideAvatar && h("ath-avatar", { key: 'ec2d9e43ac32624752dbcd5604d39f5afd20a511', ...this.getAvatarAttributes() }, this.imgTag()), h("ath-button-link", { key: '238bb58df7fb270c0ad994d7af2e451d76b72aed', ref: (el) => (this.buttonLinkEl = el), onAthClick: this.handleClick, size: "md", icon: icon, "icon-position": "right", "aria-controls": this.menuOverlayId, "aria-expanded": String(this.open), "aria-haspopup": "true" }, this.userName)), this.open && (h("div", { key: '0828e4e15576a2a5c15e3a8a292ae2deb3dd9e88', class: this.getContainerClassNames() }, h("div", { key: '16f11d69100003cb92cd791dcfdf25189014dc2a', class: this.getOverlayClassNames(), role: "menu", tabindex: "-1", id: this.menuOverlayId, "aria-hidden": this.open ? 'false' : 'true' }, h("slot", { key: '3e6e1a8f091ae2da60dc3cf0c30245527dd439d9' }))))));
    }
    static get is() { return "ath-user-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["user-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["user-menu.css"]
        };
    }
    static get properties() {
        return {
            "initials": {
                "type": "string",
                "attribute": "initials",
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
                    "text": "Initials to display in the avatar."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Indica si user-menu esta abierto"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "srcImage": {
                "type": "string",
                "attribute": "src-image",
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
                    "text": "Define la src para imagen avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "userName": {
                "type": "string",
                "attribute": "user-name",
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
                    "text": "Define el nombre del usuario"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "UserMenuType",
                    "resolved": "\"default\" | \"hide-avatar\" | \"image\" | \"initials\"",
                    "references": {
                        "UserMenuType": {
                            "location": "import",
                            "path": "./user-menu.model",
                            "id": "src/components/user/user-menu/user-menu.model.ts::UserMenuType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define el tipo de avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "undefined"
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
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpenState"
            }];
    }
    static get listeners() {
        return [{
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
//# sourceMappingURL=user-menu.js.map
