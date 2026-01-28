import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';

const AthCardHeader$1 = /*@__PURE__*/ proxyCustomElement(class AthCardHeader extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Title of the card header
     **/
    headingText;
    /**
     * date of the card header
     **/
    date;
    /**
     * Overline of the card header
     **/
    overline;
    /**
     * Subtitle of the card
     **/
    subtitle;
}, [2, "ath-card-header", {
        "headingText": [1, "heading-text"],
        "date": [1],
        "overline": [1],
        "subtitle": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-card-header"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-card-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthCardHeader$1);
            }
            break;
    } });
}

const AthCardHeader = AthCardHeader$1;
const defineCustomElement = defineCustomElement$1;

export { AthCardHeader, defineCustomElement };
//# sourceMappingURL=ath-card-header.js.map

//# sourceMappingURL=ath-card-header.js.map