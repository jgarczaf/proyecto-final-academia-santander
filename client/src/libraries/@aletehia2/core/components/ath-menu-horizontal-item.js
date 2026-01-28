import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';
import { T as TargetType } from './p-CZK1O6EF.js';

const AthMenuHorizontalItem$1 = /*@__PURE__*/ proxyCustomElement(class AthMenuHorizontalItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * The accessible text of the badge
     */
    badgeLabel;
    /**
     * The value of the badge
     */
    badgeValue = undefined;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * Whether the item is disabled or not
     */
    disabled;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel = '(Se abre en una nueva ventana)';
    /**
     * The URL of the item
     */
    href;
    /**
     * The label of the item
     */
    label;
    /**
     * Whether the item is selected or not
     */
    selected;
    /**
     * Specifies the relationship of the linked URL
     */
    rel;
    /**
     * The target of the link
     */
    target = TargetType.Self;
    /*
     * Value of the item
     */
    value;
}, [2, "ath-menu-horizontal-item", {
        "badgeLabel": [1, "badge-label"],
        "badgeValue": [2, "badge-value"],
        "badgeMax": [2, "badge-max"],
        "disabled": [4],
        "externalLabel": [1, "external-label"],
        "href": [1],
        "label": [1],
        "selected": [516],
        "rel": [1],
        "target": [1],
        "value": [8]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-menu-horizontal-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-menu-horizontal-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthMenuHorizontalItem$1);
            }
            break;
    } });
}

const AthMenuHorizontalItem = AthMenuHorizontalItem$1;
const defineCustomElement = defineCustomElement$1;

export { AthMenuHorizontalItem, defineCustomElement };
//# sourceMappingURL=ath-menu-horizontal-item.js.map

//# sourceMappingURL=ath-menu-horizontal-item.js.map