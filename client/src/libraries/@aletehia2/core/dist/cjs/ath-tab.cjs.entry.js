'use strict';

var index = require('./index--hWT2F8k.js');

const AthTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
};

exports.ath_tab = AthTab;
//# sourceMappingURL=ath-tab.entry.cjs.js.map
