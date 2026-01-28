import { p as proxyCustomElement, H } from './p-D-i5s4zr.js';

const AthTab$1 = /*@__PURE__*/ proxyCustomElement(class AthTab extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Etiqueta accesible de la tab
     */
    label;
    /**
     * Si la tab está deshabilitada o no
     */
    disabled;
    /**
     * Código del icono en caso de que la tab deba llevar icono
     */
    icon;
    /**
     * Etiqueta accesible del icono
     */
    iconAriaLabel;
    /**
     * Ruta de navegación de la tab
     */
    navigationData;
    /**
     * Si la tab está seleccionada por defecto
     */
    selected;
    render() {
        return null;
    }
}, [258, "ath-tab", {
        "label": [1],
        "disabled": [4],
        "icon": [1],
        "iconAriaLabel": [1, "icon-aria-label"],
        "navigationData": [1, "navigation-data"],
        "selected": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthTab$1);
            }
            break;
    } });
}

const AthTab = AthTab$1;
const defineCustomElement = defineCustomElement$1;

export { AthTab, defineCustomElement };
//# sourceMappingURL=ath-tab.js.map

//# sourceMappingURL=ath-tab.js.map