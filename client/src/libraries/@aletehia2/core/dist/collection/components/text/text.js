import { Host, h, } from "@stencil/core";
import { TextColor, defaultAthTextModel, CSS_VARS } from "./text.model";
export class AthText {
    /**
     * Texto dentro del componente
     **/
    content;
    /**
     * Número de líneas máximo a mostrar
     **/
    lines;
    /**
     * Mostrar tooltip con el contenido completo cuando el texto aparece truncado
     */
    withTooltip;
    /**
     * Número de columnas y espaciado que se muestran
     */
    columns;
    /**
     * Define semánticamente la jerarquías del texto: p, h1, h2, h3...
     */
    hierarchy = defaultAthTextModel.hierarchy;
    /**
     * Define color del texto: default, inverse, primary, accent, subtle
     */
    color = TextColor.Default;
    hostEl;
    pEl = null;
    /**
     * Estado interno para saber si el texto está truncado
     */
    isTruncated = true;
    getClassNames = () => ({
        'ath-text': true,
        'ath-text--container': true,
        [`ath-color-text--${this.color}`]: !!this.color,
    });
    getEffectiveLines() {
        const n = Number(this.lines);
        if (!isNaN(n) && n > 0) {
            return n;
        }
        return defaultAthTextModel.lines;
    }
    get inlineStyle() {
        const linesVal = this.getEffectiveLines();
        const css = {};
        if (linesVal && linesVal > 0) {
            css[CSS_VARS.LINES] = `${linesVal}`;
        }
        return css;
    }
    get normalizedColumns() {
        const def = defaultAthTextModel.columns;
        let cfg;
        if (typeof this.columns === 'string') {
            try {
                cfg = JSON.parse(this.columns);
            }
            catch {
                cfg = undefined;
            }
        }
        else {
            cfg = this.columns;
        }
        return {
            numColumns: cfg?.numColumns ?? def.numColumns,
            spacing: cfg?.spacing ?? def.spacing,
        };
    }
    get isTooltipEnabled() {
        return this.withTooltip === true;
    }
    scheduleTruncationUpdate() {
        requestAnimationFrame(() => this.updateTruncation());
    }
    componentDidLoad() {
        this.pEl = this.hostEl.shadowRoot?.querySelector('.ath-text');
        this.scheduleTruncationUpdate();
        window.addEventListener('resize', this.onResize);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.onResize);
    }
    onResize = () => {
        this.scheduleTruncationUpdate();
    };
    handleLinesChange() {
        this.scheduleTruncationUpdate();
    }
    handleContentChange() {
        this.scheduleTruncationUpdate();
    }
    handleColumnsChange() {
        this.scheduleTruncationUpdate();
    }
    handleTruncationChange() {
        this.scheduleTruncationUpdate();
    }
    updateTruncation() {
        if (!this.pEl) {
            this.isTruncated = false;
            return;
        }
        const truncated = this.pEl.scrollHeight > this.pEl.clientHeight + 1 ||
            this.pEl.scrollWidth > this.pEl.clientWidth + 1;
        if (truncated !== this.isTruncated) {
            this.isTruncated = truncated;
        }
    }
    render() {
        const { numColumns, spacing } = this.normalizedColumns;
        const textContent = this.content ?? h("slot", { key: '663a7aacb26dedc2fff066e33bb301bee2aafe59' });
        const tooltipText = this.content ?? '';
        const linesVal = Number(this.lines);
        const effectiveLines = !isNaN(linesVal) && linesVal > 0 ? linesVal : defaultAthTextModel.lines;
        const hasLines = effectiveLines > 0;
        const hasColumns = typeof numColumns === 'number' && numColumns > 1;
        const shouldUseColumns = hasColumns;
        const shouldClamp = hasLines && !hasColumns;
        const style = {
            ...this.inlineStyle,
        };
        if (shouldUseColumns) {
            style[CSS_VARS.COLUMNS] = String(numColumns);
            style[CSS_VARS.COLUMN_GAP] = spacing;
        }
        const Tag = (this.hierarchy || 'p');
        const textElement = (h(Tag, { key: '1c242d0642326705533f3ef5f17477b52934a042', class: {
                ...this.getClassNames(),
                'ath-text--columns': shouldUseColumns,
                'ath-text--clamp': shouldClamp,
            }, style: style }, textContent));
        const shouldShowTooltip = this.isTooltipEnabled && this.isTruncated;
        const content = shouldShowTooltip ? (h("ath-tooltip", { headingText: tooltipText, position: "bottom", trigger: "hover", maxWidth: 750 }, textElement)) : (textElement);
        return (h(Host, { key: 'f6b96440f40aeb9c3f99afeac8987ec4f75ec43c' }, h("div", { key: '68978d5aa5fd1f4df7f144ac8224ad224d11913c', class: "ath-text-container" }, content)));
    }
    static get is() { return "ath-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["text.css"]
        };
    }
    static get properties() {
        return {
            "content": {
                "type": "string",
                "attribute": "content",
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
                    "text": "Texto dentro del componente"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "lines": {
                "type": "number",
                "attribute": "lines",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "N\u00FAmero de l\u00EDneas m\u00E1ximo a mostrar"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "withTooltip": {
                "type": "boolean",
                "attribute": "with-tooltip",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Mostrar tooltip con el contenido completo cuando el texto aparece truncado"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "columns": {
                "type": "string",
                "attribute": "columns",
                "mutable": false,
                "complexType": {
                    "original": "AthTextColumns | string",
                    "resolved": "AthTextColumns | string",
                    "references": {
                        "AthTextColumns": {
                            "location": "import",
                            "path": "./text.model",
                            "id": "src/components/text/text.model.ts::AthTextColumns"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "N\u00FAmero de columnas y espaciado que se muestran"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hierarchy": {
                "type": "string",
                "attribute": "hierarchy",
                "mutable": false,
                "complexType": {
                    "original": "'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"p\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define sem\u00E1nticamente la jerarqu\u00EDas del texto: p, h1, h2, h3..."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "defaultAthTextModel.hierarchy"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "AthTextColor",
                    "resolved": "\"accent\" | \"default\" | \"disabled\" | \"inverse\" | \"primary\" | \"subtle\"",
                    "references": {
                        "AthTextColor": {
                            "location": "import",
                            "path": "./text.model",
                            "id": "src/components/text/text.model.ts::AthTextColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define color del texto: default, inverse, primary, accent, subtle"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "TextColor.Default"
            }
        };
    }
    static get states() {
        return {
            "isTruncated": {}
        };
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "lines",
                "methodName": "handleLinesChange"
            }, {
                "propName": "content",
                "methodName": "handleContentChange"
            }, {
                "propName": "columns",
                "methodName": "handleColumnsChange"
            }, {
                "propName": "hierarchy",
                "methodName": "handleTruncationChange"
            }];
    }
}
//# sourceMappingURL=text.js.map
