import { r as registerInstance, a as getElement, h, H as Host } from './index-D2-yfY-d.js';

const TextColor = {
    Default: 'default'};
const defaultAthTextModel = {
    lines: 0,
    columns: {
        numColumns: 1,
        spacing: '16px',
    },
    hierarchy: 'p',
};
const CSS_VARS = {
    LINES: '--text-lines',
    COLUMNS: '--ath-text-columns',
    COLUMN_GAP: '--ath-text-column-gap',
};

const textCss = ":host :host(.ath-text--default){--color:var(--ath-color-text--default)}:host :host(.ath-text--inverse){--color:var(--ath-color-text--inverse)}:host :host(.ath-text--primary){--color:var(--ath-color-text--primary)}:host :host(.ath-text--accent){--color:var(--ath-color-text--accent)}:host :host(.ath-text--subtle){--color:var(--ath-color-text--subtle)}:host :host(.ath-text--disabled){--color:var(--ath-color-text--disabled)}:host{--ath-text-line-height:1.4;--ath-text-font-size:12px;--ath-text-font-size-p:12px;--ath-text-font-size-h1:24px;--ath-text-font-size-h2:22px;--ath-text-font-size-h3:20px;--ath-text-font-size-h4:18px;--ath-text-font-size-h5:16px;--ath-text-font-size-h6:14px;--ath-text-font-weight-p:400;--ath-text-font-weight-h1:700;--ath-text-font-weight-h2:650;--ath-text-font-weight-h3:600}:host{display:inline-block;width:100%}:host .ath-text-container{display:block;width:100%}:host .ath-text-container .ath-text{margin:0;padding:0;font-size:var(--ath-text-font-size, 12px);line-height:var(--ath-text-line-height, 1.4);word-break:break-word}:host .ath-text-container .ath-text--clamp{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:var(--text-lines, 2);line-clamp:var(--text-lines, 2)}:host .ath-text-container .ath-text--columns{column-count:var(--ath-text-columns, 1);column-gap:var(--ath-text-column-gap, 1.5rem);column-fill:balance;gap:var(--ath-text-column-gap, 1rem);-webkit-box-orient:initial;overflow:visible}:host .ath-text-container .story__row{display:flex;gap:16px;align-items:flex-start;justify-content:center}:host([hierarchy=p]) .ath-text{font-size:var(--ath-text-font-size-p);font-weight:var(--ath-text-font-weight-p)}:host([hierarchy=h1]) .ath-text{font-size:var(--ath-text-font-size-h1);font-weight:var(--ath-text-font-weight-h1)}:host([hierarchy=h2]) .ath-text{font-size:var(--ath-text-font-size-h2);font-weight:var(--ath-text-font-weight-h2)}:host([hierarchy=h3]) .ath-text{font-size:var(--ath-text-font-size-h3);font-weight:var(--ath-text-font-weight-h3)}:host([hierarchy=h4]) .ath-text{font-size:var(--ath-text-font-size-h4);font-weight:var(--ath-text-font-weight-h4)}:host([hierarchy=h5]) .ath-text{font-size:var(--ath-text-font-size-h5);font-weight:var(--ath-text-font-weight-h5)}:host([hierarchy=h6]) .ath-text{font-size:var(--ath-text-font-size-h6);font-weight:var(--ath-text-font-weight-h6)}";

const AthText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
    get hostEl() { return getElement(this); }
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
    static get watchers() { return {
        "lines": ["handleLinesChange"],
        "content": ["handleContentChange"],
        "columns": ["handleColumnsChange"],
        "hierarchy": ["handleTruncationChange"]
    }; }
};
AthText.style = textCss;

export { AthText as ath_text };
//# sourceMappingURL=ath-text.entry.js.map
