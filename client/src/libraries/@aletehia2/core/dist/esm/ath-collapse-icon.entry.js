import { r as registerInstance, h, H as Host } from './index-D2-yfY-d.js';

const collapseIconCss = ":host(.ath-collapse-icon){display:flex}.ath-collapse-icon__chevron{transition:transform 0.3s ease-in-out}:host(.ath-collapse-icon--rotate) .ath-collapse-icon__chevron{transform:rotate(180deg)}";

const AthCollapseIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
AthCollapseIcon.style = collapseIconCss;

export { AthCollapseIcon as ath_collapse_icon };
//# sourceMappingURL=ath-collapse-icon.entry.js.map
