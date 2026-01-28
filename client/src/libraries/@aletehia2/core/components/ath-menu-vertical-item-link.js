import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';

const menuItemLinkTargets = {
    Blank: 'blank'};

const AthMenuVerticalItemLink$1 = /*@__PURE__*/ proxyCustomElement(class AthMenuVerticalItemLink extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Whether the link is selected
     */
    selected = false;
    /**
     * Whether the link is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Title of the link
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
    /**
     * URL of the link
     **/
    href;
    /**
     * target of the link: blank | self
     **/
    target = menuItemLinkTargets.Blank;
    /**
     * rel of the link
     **/
    rel;
    /**
     * The text that indicates that the link open a new window
     **/
    externalLabel = 'Se abre en una nueva ventana';
}, [2, "ath-menu-vertical-item-link", {
        "selected": [4],
        "disabled": [4],
        "icon": [1],
        "text": [1],
        "value": [1],
        "href": [1],
        "target": [1],
        "rel": [1],
        "externalLabel": [1, "external-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-menu-vertical-item-link"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-menu-vertical-item-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthMenuVerticalItemLink$1);
            }
            break;
    } });
}

const AthMenuVerticalItemLink = AthMenuVerticalItemLink$1;
const defineCustomElement = defineCustomElement$1;

export { AthMenuVerticalItemLink, defineCustomElement };
//# sourceMappingURL=ath-menu-vertical-item-link.js.map

//# sourceMappingURL=ath-menu-vertical-item-link.js.map