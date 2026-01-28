import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';

const AthMenuVerticalItemAction$1 = /*@__PURE__*/ proxyCustomElement(class AthMenuVerticalItemAction extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Whether the item is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Whether an item with children is open by default.
     */
    open = false;
    /**
     * Whether the item is selected
     */
    selected = false;
    /**
     * Title of the item
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
}, [2, "ath-menu-vertical-item-action", {
        "disabled": [4],
        "icon": [1],
        "open": [4],
        "selected": [4],
        "text": [1],
        "value": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-menu-vertical-item-action"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-menu-vertical-item-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthMenuVerticalItemAction$1);
            }
            break;
    } });
}

const AthMenuVerticalItemAction = AthMenuVerticalItemAction$1;
const defineCustomElement = defineCustomElement$1;

export { AthMenuVerticalItemAction, defineCustomElement };
//# sourceMappingURL=ath-menu-vertical-item-action.js.map

//# sourceMappingURL=ath-menu-vertical-item-action.js.map