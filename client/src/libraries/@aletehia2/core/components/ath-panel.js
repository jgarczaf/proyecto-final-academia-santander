import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';

const panelCss = ".sc-ath-panel-h{width:100%}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel{display:flex;padding:var(--ath-spacing-tab-panel-padding-around);flex-direction:column;align-items:flex-start;align-self:stretch;gap:var(--ath-spacing-tab-panel-row-gap);box-sizing:border-box;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:var(--ath-spacing-tab-panel-header-row-gap);align-self:stretch}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel .title.sc-ath-panel{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-5);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-5);flex:1 0 0}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel .ath_tab__actions-group.sc-ath-panel{display:flex;justify-content:flex-end;align-items:center;gap:var(--ath-spacing-tab-panel-header-actions-row-gap)}";

const AthPanel$1 = /*@__PURE__*/ proxyCustomElement(class AthPanel extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
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
    static get style() { return panelCss; }
}, [262, "ath-panel", {
        "label": [1],
        "focusable": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthPanel$1);
            }
            break;
    } });
}

const AthPanel = AthPanel$1;
const defineCustomElement = defineCustomElement$1;

export { AthPanel, defineCustomElement };
//# sourceMappingURL=ath-panel.js.map

//# sourceMappingURL=ath-panel.js.map