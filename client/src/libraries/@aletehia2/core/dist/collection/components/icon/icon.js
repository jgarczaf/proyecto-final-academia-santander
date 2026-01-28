import { Host, h } from "@stencil/core";
import { IconSize } from "../../utils/helper";
import { IconColor } from "./icon.model";
export class AthIcon {
    theme;
    el;
    /**
     * The icon name
     */
    icon;
    /**
     * The size of the icon
     */
    size = IconSize.Medium;
    /**
     * Color del icon
     **/
    color;
    /**
     * The aria-label attribute of the icon
     */
    ariaLabel;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby;
    componentWillLoad() {
        this.theme = document.body.dataset.theme || 'core';
    }
    hasAriaLabel() {
        return !!this.ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        return {
            'aria-hidden': !hasLabel ? 'true' : undefined,
            'aria-label': this.hasAriaLabel() ? this.ariaLabel.trim() : undefined,
            'aria-labelledby': this.hasAriaLabelledBy() ? this.ariaLabelledby.trim() : undefined,
            'role': hasLabel ? 'img' : undefined,
        };
    }
    classNames = () => ({
        'ath-icon': true,
        [`ath-icon--${this.size}`]: !!this.size,
        [`ath-icon--${this.getColor()}`]: !!this.getColor(),
    });
    getColor() {
        if (this.color === IconColor.Inherit) {
            return undefined;
        }
        return this.color || IconColor.Default;
    }
    render() {
        const assetsPath = `assets/images/sprites/${this.theme}/sprites.svg`;
        return (h(Host, { key: '8bc0985fce43364c5f5a86e2d6d73d41ea9c337d', ...this.getHostAttributes() }, h("svg", { key: '1ae8487e6ecc7dfd48ec88973cb07c3321e032eb', width: "1em", height: "1em", focusable: "false", "aria-hidden": "true", class: this.classNames() }, h("use", { key: 'ddcd367d6772ae69e8c81e6722328220fed3b8a8', xlinkHref: `${assetsPath}#${this.icon}` }))));
    }
    static get is() { return "ath-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The icon name"
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
                    "original": "IconSizeTypes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "IconSizeTypes": {
                            "location": "import",
                            "path": "../../utils/helper",
                            "id": "src/utils/helper/index.ts::IconSizeTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "IconSize.Medium"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "IconColorTypes",
                    "resolved": "\"accent\" | \"default\" | \"disabled\" | \"error\" | \"info\" | \"inherit\" | \"inverse\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "IconColorTypes": {
                            "location": "import",
                            "path": "./icon.model",
                            "id": "src/components/icon/icon.model.ts::IconColorTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color del icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the icon"
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
//# sourceMappingURL=icon.js.map
