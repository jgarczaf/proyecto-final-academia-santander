import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';

const tableBodyCss = ":host{display:flex;flex-direction:column;flex:1}";

const AthTableBody$1 = /*@__PURE__*/ proxyCustomElement(class AthTableBody extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '44f8ddbf66cf50619778b84a80046808199ccc12', slot: "body", role: "rowgroup" }, h("slot", { key: 'ab979e99fb3f2c7cc90884360e4a409b2ce70a89' })));
    }
    static get style() { return tableBodyCss; }
}, [257, "ath-table-body"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-table-body"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-table-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthTableBody$1);
            }
            break;
    } });
}

const AthTableBody = AthTableBody$1;
const defineCustomElement = defineCustomElement$1;

export { AthTableBody, defineCustomElement };
//# sourceMappingURL=ath-table-body.js.map

//# sourceMappingURL=ath-table-body.js.map