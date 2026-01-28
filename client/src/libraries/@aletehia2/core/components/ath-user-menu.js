import { p as proxyCustomElement, H, h, d as createEvent, c as Host } from './p-D-i5s4zr.js';
import { a as AvatarSizes, d as defineCustomElement$4 } from './p-BU8ktV_8.js';
import { d as defineCustomElement$3 } from './p-DYao9a54.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const UserMenuTypes = {
    HideAvatar: 'hide-avatar',
};

const userMenuCss = ":host{display:inline-block;width:fit-content}:host .ath-user-menu{display:inline-flex;align-items:center;gap:var(--ath-spacing-user-menu-col-gap)}:host .ath-user-menu-container{width:100%;position:relative}:host .ath-user-menu-overlay{display:flex;padding:var(--ath-spacing-menu-button-overlay-padding);flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-menu-button-overlay-row-gap);position:absolute;right:0;top:4px;border-radius:var(--ath-border-radius-3xl);border:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default);background:var(--ath-color-menu-button-overlay-bg);z-index:1000}";

let userMenuSequence = 0;
const AthUserMenu$1 = /*@__PURE__*/ proxyCustomElement(class AthUserMenu extends H {
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
    get el() { return this; }
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
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athAction = createEvent(this, "athAction");
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
    static get watchers() { return {
        "open": ["watchOpenState"]
    }; }
    static get style() { return userMenuCss; }
}, [257, "ath-user-menu", {
        "initials": [1],
        "open": [1028],
        "srcImage": [1, "src-image"],
        "userName": [1, "user-name"],
        "type": [1]
    }, [[0, "athSelected", "onClick"], [0, "keydown", "handleKeyDown"]], {
        "open": ["watchOpenState"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-user-menu", "ath-avatar", "ath-button-link", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-user-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthUserMenu$1);
            }
            break;
        case "ath-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ath-button-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthUserMenu = AthUserMenu$1;
const defineCustomElement = defineCustomElement$1;

export { AthUserMenu, defineCustomElement };
//# sourceMappingURL=ath-user-menu.js.map

//# sourceMappingURL=ath-user-menu.js.map