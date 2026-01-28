import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { d as defineCustomElement$4 } from './p-BU8ktV_8.js';
import { d as defineCustomElement$3 } from './p-DYao9a54.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const UserDetailTypes = {
    HideAvatar: 'hide-avatar',
};

const userDetailCss = ":host .ath-user-detail{display:inline-flex;align-items:center;gap:var(--ath-spacing-user-detail-col-gap);font-family:var(--ath-font-family-body);font-style:normal;line-height:var(--ath-font-line-height-body)}:host .ath-user-detail__label{color:var(--ath-color-fg-default);font-size:var(--ath-font-size-body-md);font-weight:var(--ath-font-weight-medium)}:host .ath-user-detail__content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-user-detail-content-row-gap)}:host .ath-user-detail__content__description{color:var(--ath-color-fg-subtle);font-size:var(--ath-font-size-body-sm);font-weight:var(--ath-font-weight-body-regular)}";

let userDetailSequence = 0;
const AthUserDetail$1 = /*@__PURE__*/ proxyCustomElement(class AthUserDetail extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athAction = createEvent(this, "athAction");
    }
    userDetailId = `user-detail-${++userDetailSequence}`;
    descriptionId = `${this.userDetailId}-description`;
    /**
     * If true, the user can click the button-link.
     */
    clickable = false;
    /**
     * Avatar SRC image.
     */
    srcImage;
    /**
     * User Name.
     */
    userName;
    /**
     * Type of avatar.
     */
    type = undefined;
    /**
     * User initials.
     */
    initials;
    /**
     * User Description.
     */
    description;
    /**
     * The aria-label attribute of the button-link.
     */
    buttonAriaLabel;
    /**
     * Emmitted when button-link is clicked.
     */
    athAction;
    imgTag = () => {
        if (!!this.srcImage) {
            const src = this.srcImage;
            return h("img", { slot: "img", src: src, alt: this.userName });
        }
        else {
            return;
        }
    };
    handleClick(ev) {
        ev.stopPropagation();
        this.athAction.emit();
    }
    renderLabel = () => {
        if (this.clickable) {
            return (h("ath-button-link", { "icon-position": "right", icon: "edit_2", "aria-label": this.buttonAriaLabel }, this.userName));
        }
        else {
            return h("span", { class: "ath-user-detail__label" }, this.userName);
        }
    };
    getAttributes = () => ({
        'avatar-name': !!this.userName ? this.userName : undefined,
        'initials': !!this.initials ? this.initials.substring(0, 2) : undefined,
    });
    render() {
        const avatarAttributes = this.getAttributes();
        return (h(Host, { key: 'a0ba5c9fad5d8a82f441a5212195dffd6b57fdb4' }, h("div", { key: '5f73f42e1900bc7114c2984c65dacef69c8b1fbc', class: "ath-user-detail" }, this.type !== UserDetailTypes.HideAvatar && (h("ath-avatar", { key: 'f4b32dbab4cb10126d0f4204938d8b22c62a61cc', size: "lg", type: this.type, ...avatarAttributes }, this.imgTag())), h("div", { key: '11dc80f5065e4285868d055da7bb0fb63d0ceb67', class: "ath-user-detail__content" }, this.renderLabel(), !!this.description && (h("span", { key: '45417bffbd71c80e03e1677e3423cadd8b61aace', id: this.descriptionId, class: "ath-user-detail__content__description" }, this.description)), h("slot", { key: 'b360156998bb6eb41c1909949fc851701b4c54b0' })))));
    }
    static get style() { return userDetailCss; }
}, [257, "ath-user-detail", {
        "clickable": [4],
        "srcImage": [1, "src-image"],
        "userName": [1, "user-name"],
        "type": [1],
        "initials": [1],
        "description": [1],
        "buttonAriaLabel": [1, "button-aria-label"]
    }, [[0, "athClick", "handleClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-user-detail", "ath-avatar", "ath-button-link", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-user-detail":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthUserDetail$1);
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

const AthUserDetail = AthUserDetail$1;
const defineCustomElement = defineCustomElement$1;

export { AthUserDetail, defineCustomElement };
//# sourceMappingURL=ath-user-detail.js.map

//# sourceMappingURL=ath-user-detail.js.map