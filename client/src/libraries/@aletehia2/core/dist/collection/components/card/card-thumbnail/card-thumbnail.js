import { h, Host } from "@stencil/core";
import { ThumbnailType } from "./card-thumbnail.model";
export class AthCardThumbnail {
    /**
     * Text for top tag
     **/
    topTag;
    /**
     * Text for bottom tag
     **/
    bottomTag;
    /**
     * type of thumnail
     **/
    type = ThumbnailType.Default;
    /**
     * text highlight
     **/
    highlightText;
    isFluid = false;
    isVertical = true;
    async updateTypeCard(isFluid, isVertical) {
        this.isFluid = isFluid;
        this.isVertical = isVertical;
    }
    getClassNames = () => ({
        'ath-card-thumbnail': true,
        'fluid': this.isFluid,
        'fixed': !this.isFluid,
        'horizontal': !this.isVertical,
        'vertical': this.isVertical,
    });
    renderTag(position) {
        const tagLabel = position === 'top' ? this.topTag : this.bottomTag;
        const color = position === 'top' ? 'secondary' : 'primary';
        return h("ath-tag", { "heading-text": tagLabel, color: color });
    }
    render() {
        return (h(Host, { key: '5d93e32ee850d658a18e5f764a7b948340ab2106' }, h("div", { key: '0ab1ee4c2ba54472b566167afdcd92779649155e', class: this.getClassNames() }, h("div", { key: '2a71d884bf23a0fa50487301d0773f21842ec19f', class: "ath-card-thumbnail_image" }, h("slot", { key: 'ff00041a0ad9e09739a1107d3a6987b32e3e61c3', name: "img-thumbnail" })), !!this.topTag && this.type === ThumbnailType.Default && h("div", { key: 'ce6995784c3dc4519e097c2074a1c975bcdcb428', class: "ath-card-thumbnail_top-tag" }, this.renderTag('top')), !!this.bottomTag && this.type === ThumbnailType.Default && h("div", { key: '64c222bcdb598ee92573e32b41cb2ea8d9a8e79f', class: "ath-card-thumbnail_bottom-tag" }, this.renderTag('bottom')), this.type === ThumbnailType.Highlight && h("div", { key: '2b6da865b4902e5fee4aea3c30b0f09c6abc8050', class: "ath-card-thumbnail_highlight" }, this.highlightText), this.type === ThumbnailType.Avatar && (h("div", { key: 'bfcc48529b5fe2cc6db2de352a166bc8b4923ff4', class: "ath-card-thumbnail_avatar" }, h("slot", { key: '1419a4be7d8671bf7b3af670ce72cb80ae1b7aec', name: "avatar" }))))));
    }
    static get is() { return "ath-card-thumbnail"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-thumbnail.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-thumbnail.css"]
        };
    }
    static get properties() {
        return {
            "topTag": {
                "type": "string",
                "attribute": "top-tag",
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
                    "text": "Text for top tag"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "bottomTag": {
                "type": "string",
                "attribute": "bottom-tag",
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
                    "text": "Text for bottom tag"
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
                    "original": "ThumbnailTypes",
                    "resolved": "\"avatar\" | \"default\" | \"highlight\"",
                    "references": {
                        "ThumbnailTypes": {
                            "location": "import",
                            "path": "./card-thumbnail.model",
                            "id": "src/components/card/card-thumbnail/card-thumbnail.model.ts::ThumbnailTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "type of thumnail"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ThumbnailType.Default"
            },
            "highlightText": {
                "type": "string",
                "attribute": "highlight-text",
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
                    "text": "text highlight"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isFluid": {},
            "isVertical": {}
        };
    }
    static get methods() {
        return {
            "updateTypeCard": {
                "complexType": {
                    "signature": "(isFluid: boolean, isVertical: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "isFluid",
                            "type": "boolean",
                            "docs": ""
                        }, {
                            "name": "isVertical",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=card-thumbnail.js.map
