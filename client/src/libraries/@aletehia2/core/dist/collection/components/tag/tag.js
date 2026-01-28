import { Host, h } from "@stencil/core";
import { TAG_DEFAULT_COLOR, TAG_DEFAULT_SIZE } from "./tag.model";
export class AthTag {
    /**
     * Color del tag acompañando al propósito del mensaje
     **/
    color = TAG_DEFAULT_COLOR;
    /**
     * Tamaño del tag
     **/
    size = TAG_DEFAULT_SIZE;
    /**
     * Icono
     */
    icon;
    /**
     * Texto que se visualiza dentro del tag
     **/
    headingText;
    getClassNames = () => ({
        'ath-tag': true,
        [`ath-tag--${this.color}`]: !!this.color,
        [`ath-tag--${this.size}`]: !!this.size,
    });
    el;
    render() {
        return (h(Host, { key: '1ef4e33816098d44b8912f4ccae5cb7fc99c0c42' }, h("div", { key: '3f76640bec0682692ac5a2311b97ca27bef0420e', class: "ath-tag-container" }, h("span", { key: '771cbb51a6f4efce149f46b6b7eea940a12f5e5d', class: this.getClassNames() }, this.icon && h("ath-icon", { key: '0cfc2ff34ac3a7d23a984586c9364bb178af1364', size: "xs", icon: this.icon, color: "inherit" }), h("span", { key: '357c9a59640b8dd9260a994b35c8108cea500745' }, this.headingText ?? h("slot", { key: '6a912319c544f571a8320cf7b9aeb5c73f05ae18' }))))));
    }
    static get is() { return "ath-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tag.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "TagColorTypes",
                    "resolved": "\"accent\" | \"danger\" | \"disabled\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "TagColorTypes": {
                            "location": "import",
                            "path": "./tag.model",
                            "id": "src/components/tag/tag.model.ts::TagColorTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color del tag acompa\u00F1ando al prop\u00F3sito del mensaje"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "TAG_DEFAULT_COLOR"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "TagSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "TagSizes": {
                            "location": "import",
                            "path": "./tag.model",
                            "id": "src/components/tag/tag.model.ts::TagSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tama\u00F1o del tag"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "TAG_DEFAULT_SIZE"
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
                    "text": "Icono"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
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
                    "text": "Texto que se visualiza dentro del tag"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=tag.js.map
