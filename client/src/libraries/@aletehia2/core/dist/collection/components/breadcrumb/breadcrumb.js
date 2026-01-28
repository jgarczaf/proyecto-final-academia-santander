import { Host, h } from "@stencil/core";
export class AthBreadcrumb {
    /** Opciones normalizadas del breadcrumb */
    _options = [];
    /**
     * Si es true y el breadcrumb tiene más de 4 elementos,
     * el breadcrumb se renderiza colapsado.
     *
     * Al hacer click en "..." este valor se alterna.
     */
    collapsed = false;
    /** Separador entre los enlaces del breadcrumb */
    separator = '/';
    /**
     * Lista de enlaces del breadcrumb.
     * Normalmente se recibe como un string JSON desde HTML.
     */
    options;
    /**
     * Definición de un aria-label personalizado para el breadcrumb
     */
    athAriaLabel;
    /**
     * Observa cambios en la prop options y la normaliza
     * a un array de BreadcrumbModel
     */
    watchOptions() {
        this._options = this.parseOptions(this.options);
    }
    // @Watch('collapsed')
    // watchCollapsed(newValue: boolean): void {
    //   console.log('collapsed changed to', newValue);
    // }
    /** Ciclo de vida ejecutado antes del primer render */
    componentWillLoad() {
        this.watchOptions();
    }
    /** Maneja el click en el botón "..." para expandir/colapsar */
    _handleClick = () => {
        this.collapsed = !this.collapsed;
    };
    /**
     * Parsea las opciones del breadcrumb.
     * Soporta:
     * - Array
     * - String JSON
     * - Objeto con claves numéricas
     */
    parseOptions(input) {
        if (input == null)
            return [];
        // Si ya es un array
        if (Array.isArray(input)) {
            return input.map((it) => ({
                ...it,
                url: it.url ?? '#',
            }));
        }
        // Si es un string JSON
        if (typeof input === 'string') {
            try {
                return this.parseOptions(JSON.parse(input));
            }
            catch {
                return [];
            }
        }
        // Si es un objeto (posiblemente con claves "0", "1", "2", ...)
        if (typeof input === 'object') {
            const keys = Object.keys(input);
            const numericKeys = keys.every((k) => /^[0-9]+$/.test(k));
            const values = numericKeys
                ? keys
                    .map((k) => Number(k))
                    .sort((a, b) => a - b)
                    .map((n) => input[String(n)])
                : Object.values(input);
            return values.map((it) => ({
                ...it,
                url: it.url ?? '#',
            }));
        }
        return [];
    }
    /**
     * Renderiza los enlaces del breadcrumb.
     * - Si hay más de 4 elementos y collapsed es true:
     *   se muestran solo el primero y el último, con un botón "..."
     * - En caso contrario, se muestran todos los enlaces
     */
    _renderLinks(options) {
        const lastIndex = options.length - 1;
        const canCollapse = options.length > 4 && this.collapsed === true;
        const middleIndex = Math.floor(lastIndex / 2);
        // Renderizado normal (sin colapsar)
        if (!canCollapse) {
            return options.map((option, i) => (h("div", { class: "ath-breadcrumb__container-link" }, h("a", { href: option.url, id: `link--${option.id}`, ...(i === lastIndex ? { 'aria-current': 'page' } : {}) }, option.icon && (h("span", { class: "ath-breadcrumb__icon" }, h("ath-icon", { icon: option.icon, size: 'sm' }))), option.name), i === lastIndex ? '' : (h("span", { class: "ath-breadcrumb__separator" }, this.separator)))));
        }
        // Renderizado colapsado
        return options.map((option, i) => {
            const isFirst = i === 0;
            const isLast = i === lastIndex;
            return (h("div", null, isFirst || isLast ? (h("div", { class: "ath-breadcrumb__container-link hidden--false" }, h("a", { href: option.url, id: `link--${option.id}`, ...(isLast ? { 'aria-current': 'page' } : {}) }, option.name), isLast ? '' : (h("span", { class: "ath-breadcrumb__separator" }, this.separator)))) : (h("div", { class: `ath-breadcrumb__container-link hidden--${this.collapsed}` }, h("a", { href: option.url, id: `link--${option.id}` }, option.name), h("span", { class: "ath-breadcrumb__separator" }, this.separator))), i === middleIndex ? (h("div", { class: `ath-breadcrumb__button hidden--${!this.collapsed}` }, h("button", { type: "button", "aria-label": "Mostrar ruta completa del breadcrumb", onClick: this._handleClick }, "..."), h("span", { class: "ath-breadcrumb__separator" }, this.separator))) : ('')));
        });
    }
    /** Render principal del componente */
    render() {
        return (h(Host, { key: '10b97ac11e6119bc76c86aa46f40f8d5da930dae' }, h("nav", { key: '61a1188ddd9b99e8a3aed4ac9a8d215a7558d403', class: "ath-breadcrumb", "aria-label": this.athAriaLabel ?? 'Breadcrumb' }, this._renderLinks(this._options))));
    }
    static get is() { return "ath-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb.css"]
        };
    }
    static get properties() {
        return {
            "collapsed": {
                "type": "boolean",
                "attribute": "collapsed",
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
                    "text": "Si es true y el breadcrumb tiene m\u00E1s de 4 elementos,\r\nel breadcrumb se renderiza colapsado.\r\n\r\nAl hacer click en \"...\" este valor se alterna."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "separator": {
                "type": "string",
                "attribute": "separator",
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
                    "text": "Separador entre los enlaces del breadcrumb"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'/'"
            },
            "options": {
                "type": "any",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Lista de enlaces del breadcrumb.\r\nNormalmente se recibe como un string JSON desde HTML."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "athAriaLabel": {
                "type": "string",
                "attribute": "ath-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Definici\u00F3n de un aria-label personalizado para el breadcrumb"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "watchOptions"
            }];
    }
}
//# sourceMappingURL=breadcrumb.js.map
