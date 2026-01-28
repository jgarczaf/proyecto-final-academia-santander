'use strict';

var index = require('./index--hWT2F8k.js');

const UserDetailTypes = {
    HideAvatar: 'hide-avatar',
};

const userDetailCss = ":host .ath-user-detail{display:inline-flex;align-items:center;gap:var(--ath-spacing-user-detail-col-gap);font-family:var(--ath-font-family-body);font-style:normal;line-height:var(--ath-font-line-height-body)}:host .ath-user-detail__label{color:var(--ath-color-fg-default);font-size:var(--ath-font-size-body-md);font-weight:var(--ath-font-weight-medium)}:host .ath-user-detail__content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-user-detail-content-row-gap)}:host .ath-user-detail__content__description{color:var(--ath-color-fg-subtle);font-size:var(--ath-font-size-body-sm);font-weight:var(--ath-font-weight-body-regular)}";

let userDetailSequence = 0;
const AthUserDetail = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athAction = index.createEvent(this, "athAction");
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
            return index.h("img", { slot: "img", src: src, alt: this.userName });
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
            return (index.h("ath-button-link", { "icon-position": "right", icon: "edit_2", "aria-label": this.buttonAriaLabel }, this.userName));
        }
        else {
            return index.h("span", { class: "ath-user-detail__label" }, this.userName);
        }
    };
    getAttributes = () => ({
        'avatar-name': !!this.userName ? this.userName : undefined,
        'initials': !!this.initials ? this.initials.substring(0, 2) : undefined,
    });
    render() {
        const avatarAttributes = this.getAttributes();
        return (index.h(index.Host, { key: 'a0ba5c9fad5d8a82f441a5212195dffd6b57fdb4' }, index.h("div", { key: '5f73f42e1900bc7114c2984c65dacef69c8b1fbc', class: "ath-user-detail" }, this.type !== UserDetailTypes.HideAvatar && (index.h("ath-avatar", { key: 'f4b32dbab4cb10126d0f4204938d8b22c62a61cc', size: "lg", type: this.type, ...avatarAttributes }, this.imgTag())), index.h("div", { key: '11dc80f5065e4285868d055da7bb0fb63d0ceb67', class: "ath-user-detail__content" }, this.renderLabel(), !!this.description && (index.h("span", { key: '45417bffbd71c80e03e1677e3423cadd8b61aace', id: this.descriptionId, class: "ath-user-detail__content__description" }, this.description)), index.h("slot", { key: 'b360156998bb6eb41c1909949fc851701b4c54b0' })))));
    }
};
AthUserDetail.style = userDetailCss;

exports.ath_user_detail = AthUserDetail;
//# sourceMappingURL=ath-user-detail.entry.cjs.js.map
