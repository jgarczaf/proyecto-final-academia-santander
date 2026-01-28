export class AthTab {
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
    static get is() { return "ath-tab"; }
    static get encapsulation() { return "scoped"; }
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
                    "text": "Etiqueta accesible de la tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Si la tab est\u00E1 deshabilitada o no"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "C\u00F3digo del icono en caso de que la tab deba llevar icono"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "iconAriaLabel": {
                "type": "string",
                "attribute": "icon-aria-label",
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
                    "text": "Etiqueta accesible del icono"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "navigationData": {
                "type": "string",
                "attribute": "navigation-data",
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
                    "text": "Ruta de navegaci\u00F3n de la tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": "Si la tab est\u00E1 seleccionada por defecto"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=tab.js.map
