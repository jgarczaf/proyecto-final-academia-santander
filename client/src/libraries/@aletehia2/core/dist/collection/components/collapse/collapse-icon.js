import { Host, h } from "@stencil/core";
export class AthCollapseIcon {
    /** Current expanded state */
    expanded = false;
    getHostClasses = () => ({
        'ath-collapse-icon': true,
        'ath-collapse-icon--rotate': this.expanded,
    });
    render() {
        return (h(Host, { key: '14a04c95009512098c81a90425613e2c9a34dcd1', class: this.getHostClasses() }, h("ath-icon", { key: '131dd65cc8b362b8d6d4a36c2a4a26528c1d071b', class: "ath-collapse-icon__chevron", icon: "chevron_down" })));
    }
    static get is() { return "ath-collapse-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["collapse-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["collapse-icon.css"]
        };
    }
    static get properties() {
        return {
            "expanded": {
                "type": "boolean",
                "attribute": "expanded",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current expanded state"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=collapse-icon.js.map
