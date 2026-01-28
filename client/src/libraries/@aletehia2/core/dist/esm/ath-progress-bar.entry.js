import { r as registerInstance, a as getElement, h, H as Host } from './index-D2-yfY-d.js';

const ProgressBarLabelAlignment = {
    Stack: 'stack',
};

const progressBarCss = ":host{width:100%}:host .ath-progress-bar{display:flex}:host .ath-progress-bar-temporal{display:flex;justify-content:space-between}:host .ath-progress-bar-item{width:100%;height:var(--ath-sizing-progress-bar-item-height);border-radius:var(--ath-border-radius-slider-controller-trail);background:var(--ath-color-slider-controller-trail-bg-default);position:relative;overflow:hidden}:host .ath-progress-bar__filler{height:var(--ath-sizing-progress-bar-item-height);border-radius:var(--ath-border-radius-progress-bar-item-track);background:var(--ath-color-slider-controller-trail-bg-selected);width:calc(var(--progress-value, 0) * 1%);transition:width 0.3s ease}:host .ath-progress-bar__filler.infinite{animation:loading 1.5s linear infinite;position:absolute;width:75px}:host .ath-progress-bar-label{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-input-text);font-style:normal;font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-body)}:host .ath-progress-bar-label.left{text-align:left}:host .ath-progress-bar-label.right{margin-left:auto}:host .ath-progress-bar--stack{flex-direction:column;gap:var(--ath-spacing-progress-bar-stack-row-gap)}:host .ath-progress-bar--inline{gap:var(--ath-spacing-progress-bar-inline-col-gap);align-items:center;white-space:nowrap}@keyframes loading{0%{left:0%}100%{left:100%}}";

let inputCounterSeq = 0;
const AthProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * Infinite determines if the progress bar is a loop or not
     */
    infinite = false;
    /**
     * Text of the label left
     */
    labelLeft;
    /**
     * Text of the label right
     */
    labelRight;
    /**
     * Change label alignment
     */
    labelAlignment = ProgressBarLabelAlignment.Stack;
    /**
     * Number min of progress bar
     */
    min = 0;
    /**
     * Number max of progress bar
     */
    max = 100;
    /**
     * Value of the progress bar
     */
    value;
    /**
     * Value text of the progress bar
     */
    valueText;
    /**
     * Aria Label
     */
    athAriaLabel;
    /**
     * Calculate the percetage of value
     */
    get valuePercentage() {
        // Calcula el porcentaje relativo entre min y max
        const clampedValue = Math.max(this.min, Math.min(this.max, this.value));
        const range = this.max - this.min;
        if (range === 0)
            return 0;
        return ((clampedValue - this.min) / range) * 100;
    }
    //Generador de ID dinamicos para accesibilidad
    uniqueId = (() => {
        return (prefix) => {
            const normalized = prefix
                .replace(/\s+/g, '-') // espacios por guiones
                .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase a kebab-case
                .toLowerCase();
            return `${normalized}-${++inputCounterSeq}`;
        };
    })();
    getHostAtributtes = () => {
        return {
            'role': 'progressbar',
            'aria-valuenow': this.infinite ? undefined : this.value > this.max ? this.max : this.value < this.min ? this.min : this.value,
            'aria-valuemin': this.infinite ? undefined : this.min,
            'aria-valuemax': this.infinite ? undefined : this.max,
            'aria-valuetext': this.valueText ?? undefined,
            'aria-label': this.athAriaLabel || undefined,
        };
    };
    getClassNames = () => ({
        'ath-progress-bar': true,
        [`ath-progress-bar--${this.labelAlignment}`]: !!this.labelAlignment,
    });
    getFillerClassNames = () => ({
        'ath-progress-bar__filler': true,
        'infinite': this.infinite,
    });
    render() {
        // Genera los IDs solo si hay label
        const labelLeftId = this.labelLeft ? this.uniqueId(this.labelLeft) : undefined;
        const labelRightId = this.labelRight ? this.uniqueId(this.labelRight) : undefined;
        // Prepara aria-labelledby
        const ariaLabelledBy = !this.athAriaLabel && (labelLeftId || labelRightId) ? [labelLeftId, labelRightId].filter(Boolean).join(' ') : undefined;
        return (h(Host, { key: '7acef275ce7084c22220a6ed67524ac6426bce85' }, h("div", { key: '66b255d629b835f77472fbbbd5476654a792498e', class: this.getClassNames() }, this.labelLeft && this.labelAlignment === 'inline' && (h("span", { key: 'd52255cc6146668622e1a28c8a27b8da929a89b1', id: labelLeftId, class: "ath-progress-bar-label left" }, this.labelLeft)), h("div", { key: '62421dcc9455ba73adc3741732fb5c73aabc0ab6', ...this.getHostAtributtes(),
            'aria-labelledby': ariaLabelledBy, class: "ath-progress-bar-item", style: { '--progress-value': `${this.valuePercentage}` } }, h("div", { key: 'dea29edcde92aa63e0ba1de6deb03ec576cc71f9', class: this.getFillerClassNames() })), (this.labelLeft || this.labelRight) && this.labelAlignment === 'stack' && (h("div", { key: '16a198cea99c3b0c0af93872ef0578ee2bc03d71', class: "ath-progress-bar-temporal" }, this.labelLeft && (h("span", { key: 'b6b698676321a5509e9483616bee5b0f520d4a69', id: labelLeftId, class: "ath-progress-bar-label left" }, this.labelLeft)), this.labelRight && (h("span", { key: '06db84ee7b9b7da0c91cdc1ec02ac984869ca28f', id: labelRightId, class: "ath-progress-bar-label right" }, this.labelRight)))))));
    }
};
AthProgressBar.style = progressBarCss;

export { AthProgressBar as ath_progress_bar };
//# sourceMappingURL=ath-progress-bar.entry.js.map
