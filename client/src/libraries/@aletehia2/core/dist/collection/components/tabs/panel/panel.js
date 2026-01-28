import { h, Host } from "@stencil/core";
export class AthPanel {
    /**
     * Etiqueta accesible para el panel
     */
    label;
    /**
     * Si el panel puede recibir el foco o no
     */
    focusable = false;
    render() {
        return (h(Host, { key: '9d12796489d447a7837ed5fdb0b68356ddff03b1', role: "tabpanel", tabindex: this.focusable ? '0' : '-1' }, h("div", { key: '7cc5295deedc44187a0a913cc3c8b8c689eae9be', class: "ath-tab-panel" }, h("div", { key: '914a5cdd2eb263ddbcc36c77171a071e4cba70d1', class: "ath-tab-panel__header" }, this.label && h("div", { key: 'c3512bc3a44bf44222b9e4fcc02bd0d37dc2038c', class: "title" }, this.label), h("div", { key: '9d9d7d517c869cb63dd4d4e2bd8555e193b764a2', class: "ath_tab__actions-group" }, h("slot", { key: '2a3fb867e0af313eb38d1a018fb22a594b717c88', name: "actions" }))), h("slot", { key: '8d633d910464581a87538bb07b57730a9265ef64' }))));
    }
    static get is() { return "ath-panel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["panel.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Etiqueta accesible para el panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "focusable": {
                "type": "boolean",
                "attribute": "focusable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si el panel puede recibir el foco o no"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=panel.js.map
