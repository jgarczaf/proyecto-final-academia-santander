import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';
import { T as TargetType } from './p-CaXjjomC.js';

const AthMenuLateralItemLink$1 = /*@__PURE__*/ proxyCustomElement(class AthMenuLateralItemLink extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * The aria-label of the item
     */
    ariaLabel;
    /**
     * The accesible label of the badge
     */
    badgeLabel;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * The value inside the badge
     */
    badgeValue;
    /**
     * Weather the button is disabled
     */
    disabled = false;
    /**
     * The icon of the menu-button-item-link
     */
    icon;
    /**
     * The name of the item, usefull in order to identify the selected item
     */
    name;
    /**
     * Weather the button is selected
     */
    selected = false;
    /**
     * Tooltip text
     */
    tooltipText;
    /**
     * The text that indicates that the link open a new window
     */
    externalLabel = 'Se abre en una nueva ventana';
    /**
     * The URL of the link
     */
    href;
    /**
     * The rel of the link
     */
    rel;
    /**
     * The target of the link
     */
    target = TargetType.Self;
}, [2, "ath-menu-lateral-item-link", {
        "ariaLabel": [1, "aria-label"],
        "badgeLabel": [1, "badge-label"],
        "badgeMax": [2, "badge-max"],
        "badgeValue": [2, "badge-value"],
        "disabled": [4],
        "icon": [1],
        "name": [1],
        "selected": [4],
        "tooltipText": [1, "tooltip-text"],
        "externalLabel": [1, "external-label"],
        "href": [1],
        "rel": [1],
        "target": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-menu-lateral-item-link"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-menu-lateral-item-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthMenuLateralItemLink$1);
            }
            break;
    } });
}

const AthMenuLateralItemLink = AthMenuLateralItemLink$1;
const defineCustomElement = defineCustomElement$1;

export { AthMenuLateralItemLink, defineCustomElement };
//# sourceMappingURL=ath-menu-lateral-item-link.js.map

//# sourceMappingURL=ath-menu-lateral-item-link.js.map