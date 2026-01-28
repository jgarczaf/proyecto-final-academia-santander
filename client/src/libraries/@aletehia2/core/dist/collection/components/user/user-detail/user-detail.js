import { Host, h } from "@stencil/core";
import { UserDetailTypes } from "./user-detail.model";
let userDetailSequence = 0;
export class AthUserDetail {
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
    static get is() { return "ath-user-detail"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["user-detail.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["user-detail.css"]
        };
    }
    static get properties() {
        return {
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "If true, the user can click the button-link."
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
                    "text": "Avatar SRC image."
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
                    "text": "User Name."
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
                    "original": "UserDetailType",
                    "resolved": "\"default\" | \"hide-avatar\" | \"image\" | \"initials\"",
                    "references": {
                        "UserDetailType": {
                            "location": "import",
                            "path": "./user-detail.model",
                            "id": "src/components/user/user-detail/user-detail.model.ts::UserDetailType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of avatar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "undefined"
            },
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
                    "text": "User initials."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                    "text": "User Description."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "buttonAriaLabel": {
                "type": "string",
                "attribute": "button-aria-label",
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
                    "text": "The aria-label attribute of the button-link."
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
                    "text": "Emmitted when button-link is clicked."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "athClick",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=user-detail.js.map
