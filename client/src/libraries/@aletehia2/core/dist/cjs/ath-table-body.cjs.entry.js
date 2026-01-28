'use strict';

var index = require('./index--hWT2F8k.js');

const tableBodyCss = ":host{display:flex;flex-direction:column;flex:1}";

const AthTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '44f8ddbf66cf50619778b84a80046808199ccc12', slot: "body", role: "rowgroup" }, index.h("slot", { key: 'ab979e99fb3f2c7cc90884360e4a409b2ce70a89' })));
    }
};
AthTableBody.style = tableBodyCss;

exports.ath_table_body = AthTableBody;
//# sourceMappingURL=ath-table-body.entry.cjs.js.map
