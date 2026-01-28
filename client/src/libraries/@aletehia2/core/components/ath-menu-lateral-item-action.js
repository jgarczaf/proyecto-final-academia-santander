import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';

const AthMenuLateralItemAction$1 = /*@__PURE__*/ proxyCustomElement(class AthMenuLateralItemAction extends H {
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
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * The accesible label of the badge
     */
    badgeLabel;
    /**
     * The value inside the badge
     */
    badgeValue;
    /**
     * Weather the button is disabled
     */
    disabled = false;
    /**
     * The icon of the menu-button-item-action
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
}, [2, "ath-menu-lateral-item-action", {
        "ariaLabel": [1, "aria-label"],
        "badgeMax": [2, "badge-max"],
        "badgeLabel": [1, "badge-label"],
        "badgeValue": [2, "badge-value"],
        "disabled": [4],
        "icon": [1],
        "name": [1],
        "selected": [4],
        "tooltipText": [1, "tooltip-text"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-menu-lateral-item-action"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-menu-lateral-item-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthMenuLateralItemAction$1);
            }
            break;
    } });
}

const AthMenuLateralItemAction = AthMenuLateralItemAction$1;
const defineCustomElement = defineCustomElement$1;

export { AthMenuLateralItemAction, defineCustomElement };
//# sourceMappingURL=ath-menu-lateral-item-action.js.map

//# sourceMappingURL=ath-menu-lateral-item-action.js.map