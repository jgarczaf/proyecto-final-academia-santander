import { Host, h } from "@stencil/core";
import { ProgressBarLabelAlignment } from "./progress-bar.model";
let inputCounterSeq = 0;
export class AthProgressBar {
    el;
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
    static get is() { return "ath-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "infinite": {
                "type": "boolean",
                "attribute": "infinite",
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
                    "text": "Infinite determines if the progress bar is a loop or not"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "labelLeft": {
                "type": "string",
                "attribute": "label-left",
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
                    "text": "Text of the label left"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelRight": {
                "type": "string",
                "attribute": "label-right",
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
                    "text": "Text of the label right"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelAlignment": {
                "type": "string",
                "attribute": "label-alignment",
                "mutable": false,
                "complexType": {
                    "original": "ProgressBarLabelAlignmentType",
                    "resolved": "\"inline\" | \"stack\"",
                    "references": {
                        "ProgressBarLabelAlignmentType": {
                            "location": "import",
                            "path": "./progress-bar.model",
                            "id": "src/components/progress-bar/progress-bar.model.ts::ProgressBarLabelAlignmentType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Change label alignment"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ProgressBarLabelAlignment.Stack"
            },
            "min": {
                "type": "number",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number min of progress bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number max of progress bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "100"
            },
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the progress bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "valueText": {
                "type": "string",
                "attribute": "value-text",
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
                    "text": "Value text of the progress bar"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Aria Label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=progress-bar.js.map
