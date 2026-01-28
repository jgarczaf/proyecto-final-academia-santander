import { Host, h } from "@stencil/core";
import { AvatarSizes, AvatarTypes } from "./avatar.model";
export class AthAvatar {
    /**
     * Initials to display in the avatar.
     */
    initials;
    /**
     * Size of the avatar.
     */
    size = AvatarSizes.Medium;
    /**
     * Type of avatar (image or initials).
     */
    type;
    /**
     * Name used to generate initials if none are provided.
     */
    avatarName;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby;
    el;
    avatarClassType;
    getClassNames = () => ({
        'ath-avatar': true,
        [`ath-avatar--${this.size}`]: true,
    });
    hasImage() {
        return !!this.el.querySelector('img');
    }
    getInitials = () => {
        if (this.initials) {
            this.avatarClassType = 'initials';
            return h("span", { class: "ath-avatar--initials" }, this.initials.toUpperCase().slice(0, 2));
        }
        else if (this.avatarName) {
            this.avatarClassType = 'initials';
            const initials = this.avatarName
                .split(' ')
                .map(word => word.charAt(0).toUpperCase())
                .slice(0, 2)
                .join('');
            return h("span", { class: "ath-avatar--initials" }, initials);
        }
        return null;
    };
    renderContent = () => {
        // If type is defined and is image, Check for image
        if (this.type === AvatarTypes.Image && this.hasImage()) {
            this.avatarClassType = 'image';
            return h("slot", { name: "img" });
        }
        // If type is defined and is initials, check for initials
        if (this.type === AvatarTypes.Initials) {
            return this.getInitials() || this.renderDefaultImg();
        }
        // If type is undefined, check in priority order (image>initials).
        if (!this.type) {
            if (this.hasImage()) {
                this.avatarClassType = 'image';
                return h("slot", { name: "img" });
            }
            const initialsContent = this.getInitials();
            if (initialsContent) {
                return initialsContent;
            }
        }
        // Fallback to default image
        return this.renderDefaultImg();
    };
    componentDidLoad() {
        const athAvatar = this.el.shadowRoot.querySelector('.ath-avatar');
        athAvatar.classList.add('ath-avatar--' + (this.avatarClassType || 'default'));
    }
    renderDefaultImg = () => {
        const theme = document.body.dataset.theme || 'core';
        const assetsPath = `assets/images/pictograms/${theme}/`;
        return (h("svg", { focusable: "false", "aria-hidden": "true", viewBox: "0 0 32 32" }, h("use", { xlinkHref: `${assetsPath}illu_male.svg` })));
    };
    hasAriaLabel() {
        const ariaLabel = this.el.getAttribute('aria-label');
        return !!ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const ariaLabel = this.el.getAttribute('aria-label');
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        const currentAriaLabel = this.hasAriaLabel() ? ariaLabel.trim() : !!this.avatarName ? this.avatarName : undefined;
        return {
            'aria-label': currentAriaLabel,
            'role': hasLabel ? 'img' : !!this.avatarName ? 'img' : undefined,
        };
    }
    render() {
        return (h(Host, { key: 'a461eacaa264acc2d073916de2261053259c3479', ...this.getHostAttributes() }, h("div", { key: '59a5693d40e4c848c371acd05b125c660aaa9097', class: this.getClassNames() }, this.renderContent())));
    }
    static get is() { return "ath-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["avatar.css"]
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "AvatarSize": {
                            "location": "import",
                            "path": "./avatar.model",
                            "id": "src/components/avatar/avatar.model.ts::AvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the avatar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "AvatarSizes.Medium"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "AvatarType",
                    "resolved": "\"default\" | \"image\" | \"initials\"",
                    "references": {
                        "AvatarType": {
                            "location": "import",
                            "path": "./avatar.model",
                            "id": "src/components/avatar/avatar.model.ts::AvatarType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of avatar (image or initials)."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "avatarName": {
                "type": "string",
                "attribute": "avatar-name",
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
                    "text": "Name used to generate initials if none are provided."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabelledby": {
                "type": "string",
                "attribute": "aria-labelledby",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The aria-labelledby attribute of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=avatar.js.map
