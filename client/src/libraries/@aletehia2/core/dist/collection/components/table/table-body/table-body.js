import { Host, h } from "@stencil/core";
export class AthTableBody {
    render() {
        return (h(Host, { key: '44f8ddbf66cf50619778b84a80046808199ccc12', slot: "body", role: "rowgroup" }, h("slot", { key: 'ab979e99fb3f2c7cc90884360e4a409b2ce70a89' })));
    }
    static get is() { return "ath-table-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-body.css"]
        };
    }
}
//# sourceMappingURL=table-body.js.map
