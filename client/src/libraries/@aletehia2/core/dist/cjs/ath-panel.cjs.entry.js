'use strict';

var index = require('./index--hWT2F8k.js');

const panelCss = ".sc-ath-panel-h{width:100%}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel{display:flex;padding:var(--ath-spacing-tab-panel-padding-around);flex-direction:column;align-items:flex-start;align-self:stretch;gap:var(--ath-spacing-tab-panel-row-gap);box-sizing:border-box;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:var(--ath-spacing-tab-panel-header-row-gap);align-self:stretch}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel .title.sc-ath-panel{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-5);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-5);flex:1 0 0}.sc-ath-panel-h .ath-tab-panel.sc-ath-panel .ath-tab-panel__header.sc-ath-panel .ath_tab__actions-group.sc-ath-panel{display:flex;justify-content:flex-end;align-items:center;gap:var(--ath-spacing-tab-panel-header-actions-row-gap)}";

const AthPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '9d12796489d447a7837ed5fdb0b68356ddff03b1', role: "tabpanel", tabindex: this.focusable ? '0' : '-1' }, index.h("div", { key: '7cc5295deedc44187a0a913cc3c8b8c689eae9be', class: "ath-tab-panel" }, index.h("div", { key: '914a5cdd2eb263ddbcc36c77171a071e4cba70d1', class: "ath-tab-panel__header" }, this.label && index.h("div", { key: 'c3512bc3a44bf44222b9e4fcc02bd0d37dc2038c', class: "title" }, this.label), index.h("div", { key: '9d9d7d517c869cb63dd4d4e2bd8555e193b764a2', class: "ath_tab__actions-group" }, index.h("slot", { key: '2a3fb867e0af313eb38d1a018fb22a594b717c88', name: "actions" }))), index.h("slot", { key: '8d633d910464581a87538bb07b57730a9265ef64' }))));
    }
};
AthPanel.style = panelCss;

exports.ath_panel = AthPanel;
//# sourceMappingURL=ath-panel.entry.cjs.js.map
