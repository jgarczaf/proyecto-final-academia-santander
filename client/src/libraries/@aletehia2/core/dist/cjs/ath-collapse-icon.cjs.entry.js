'use strict';

var index = require('./index--hWT2F8k.js');

const collapseIconCss = ":host(.ath-collapse-icon){display:flex}.ath-collapse-icon__chevron{transition:transform 0.3s ease-in-out}:host(.ath-collapse-icon--rotate) .ath-collapse-icon__chevron{transform:rotate(180deg)}";

const AthCollapseIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Current expanded state */
    expanded = false;
    getHostClasses = () => ({
        'ath-collapse-icon': true,
        'ath-collapse-icon--rotate': this.expanded,
    });
    render() {
        return (index.h(index.Host, { key: '14a04c95009512098c81a90425613e2c9a34dcd1', class: this.getHostClasses() }, index.h("ath-icon", { key: '131dd65cc8b362b8d6d4a36c2a4a26528c1d071b', class: "ath-collapse-icon__chevron", icon: "chevron_down" })));
    }
};
AthCollapseIcon.style = collapseIconCss;

exports.ath_collapse_icon = AthCollapseIcon;
//# sourceMappingURL=ath-collapse-icon.entry.cjs.js.map
