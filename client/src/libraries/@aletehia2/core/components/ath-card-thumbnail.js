import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { d as defineCustomElement$3 } from './p-DbpanEQL.js';
import { d as defineCustomElement$2 } from './p-B4i4aRdS.js';

var ThumbnailType;
(function (ThumbnailType) {
    ThumbnailType["Default"] = "default";
    ThumbnailType["Highlight"] = "highlight";
    ThumbnailType["Avatar"] = "avatar";
})(ThumbnailType || (ThumbnailType = {}));

const cardThumbnailCss = ":host{--object-fit:cover}:host .fluid{--object-fit:fill}:host .vertical{--thumbanail-min-width:402px;--thumbanail-min-height:226.132px;--img-position:absolute;--img-top:50%;--img-left:50%;--img-transform:translate(-50%, -50%);--img-width:100%}:host .vertical:not(.fixed){--aspect-ratio:16/9}:host .horizontal{--thumbanail-min-height:226px;--thumbanail-min-width:345px;--img-position:absolute;--img-top:50%;--img-left:50%;--img-transform:translate(-50%, -50%);--img-width:auto}:host .horizontal:not(.fixed){--thumbanail-min-width:226px;--aspect-ratio:1/1}:host{display:flex;width:100%;height:100%}:host .ath-card-thumbnail{aspect-ratio:var(--aspect-ratio);width:100%;height:100%;position:relative}:host .ath-card-thumbnail_highlight{display:flex;padding:var(--ath-spacing-card-thumbnail-highlight-padding-around);justify-content:center;align-items:flex-start;top:0px;width:100%;position:absolute;background:var(--ath-color-card-thumbnail-highlight-bg);color:var(--ath-color-card-thumbnail-highlight-fg);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-heading-4);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-4);box-sizing:border-box}:host .ath-card-thumbnail_image{min-width:var(--thumbanail-min-width);min-height:var(--thumbanail-min-height);width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;flex-shrink:0;position:relative;overflow:hidden}:host .ath-card-thumbnail_avatar{display:flex;width:var(--ath-sizing-card-thumbnail-avatar-width);height:var(--ath-sizing-card-thumbnail-avatar-height);flex-direction:column;justify-content:center;align-items:center;overflow:auto;position:absolute;left:24px;bottom:-13.488px;border-radius:1600px}:host .ath-card-thumbnail_bottom-tag{display:flex;padding:var(--ath-spacing-tag-padding-y-sm) var(--ath-spacing-tag-padding-x);align-items:center;gap:var(--ath-spacing-tag-col-gap);position:absolute;left:24px;bottom:24.132px}:host .ath-card-thumbnail_top-tag{display:flex;padding:var(--ath-spacing-tag-padding-y-sm) var(--ath-spacing-tag-padding-x);justify-content:flex-end;align-items:flex-start;gap:var(--ath-spacing-tag-col-gap);position:absolute;right:24px;top:24px}:host ::slotted([slot=img-thumbnail]){position:var(--img-position);object-fit:var(--object-fit);top:var(--img-top);left:var(--img-left);transform:var(--img-transform);width:var(--img-width);height:100%}";

const AthCardThumbnail$1 = /*@__PURE__*/ proxyCustomElement(class AthCardThumbnail extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
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
    static get style() { return cardThumbnailCss; }
}, [257, "ath-card-thumbnail", {
        "topTag": [1, "top-tag"],
        "bottomTag": [1, "bottom-tag"],
        "type": [1],
        "highlightText": [1, "highlight-text"],
        "isFluid": [32],
        "isVertical": [32],
        "updateTypeCard": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-card-thumbnail", "ath-icon", "ath-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-card-thumbnail":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthCardThumbnail$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ath-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthCardThumbnail = AthCardThumbnail$1;
const defineCustomElement = defineCustomElement$1;

export { AthCardThumbnail, defineCustomElement };
//# sourceMappingURL=ath-card-thumbnail.js.map

//# sourceMappingURL=ath-card-thumbnail.js.map