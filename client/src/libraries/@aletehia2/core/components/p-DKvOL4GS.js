import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { d as defineCustomElement$1 } from './p-DbpanEQL.js';

const collapseIconCss = ":host(.ath-collapse-icon){display:flex}.ath-collapse-icon__chevron{transition:transform 0.3s ease-in-out}:host(.ath-collapse-icon--rotate) .ath-collapse-icon__chevron{transform:rotate(180deg)}";

const AthCollapseIcon = /*@__PURE__*/ proxyCustomElement(class AthCollapseIcon extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /** Current expanded state */
    expanded = false;
    getHostClasses = () => ({
        'ath-collapse-icon': true,
        'ath-collapse-icon--rotate': this.expanded,
    });
    render() {
        return (h(Host, { key: '14a04c95009512098c81a90425613e2c9a34dcd1', class: this.getHostClasses() }, h("ath-icon", { key: '131dd65cc8b362b8d6d4a36c2a4a26528c1d071b', class: "ath-collapse-icon__chevron", icon: "chevron_down" })));
    }
    static get style() { return collapseIconCss; }
}, [257, "ath-collapse-icon", {
        "expanded": [1540]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-collapse-icon", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-collapse-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthCollapseIcon);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AthCollapseIcon as A, defineCustomElement as d };
//# sourceMappingURL=p-DKvOL4GS.js.map

//# sourceMappingURL=p-DKvOL4GS.js.map