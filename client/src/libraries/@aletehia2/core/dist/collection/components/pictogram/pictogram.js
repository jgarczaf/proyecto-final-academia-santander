import { Host, h, getAssetPath } from "@stencil/core";
import { PictogramSizeType } from "./pictogram.model";
export class AthPictogram {
    theme;
    el;
    /**
     * The pictogram name
     */
    name;
    /**
     * The size of the pictogram
     */
    size = PictogramSizeType.Medium;
    /**
     * The aria-label attribute of the pictogram
     */
    ariaLabel;
    /**
     * The aria-labelledby attribute of the pictogram
     */
    ariaLabelledby;
    componentWillLoad() {
        this.theme = document.body.dataset.theme || 'core';
    }
    hasAriaLabel() {
        return !!this.ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        return {
            'aria-hidden': !hasLabel ? 'true' : undefined,
            'aria-label': this.hasAriaLabel() ? this.ariaLabel.trim() : undefined,
            'aria-labelledby': this.hasAriaLabelledBy() ? this.ariaLabelledby.trim() : undefined,
            'role': hasLabel ? 'img' : undefined,
        };
    }
    classNames = () => ({
        'ath-pictogram': true,
        [`ath-pictogram--${this.size}`]: !!this.size,
    });
    render() {
        const assetsPath = getAssetPath(`assets/images/pictograms/${this.theme}`);
        console.log('assetsPath', assetsPath);
        return (h(Host, { key: '349d890869ea5b7b5f9b6a87adfb92be9dae3b42', ...this.getHostAttributes() }, h("div", { key: '37735e58245e09e9b6d1e6febeca517903032816', class: this.classNames() }, h("img", { key: '9b50d55e45de59c7fcb0062187f106aa0a8acf9b', src: `${assetsPath}/${this.name}.svg`, alt: "" }))));
    }
    static get is() { return "ath-pictogram"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pictogram.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pictogram.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "The pictogram name"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "PictogramSizeTypes",
                    "resolved": "\"2xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "PictogramSizeTypes": {
                            "location": "import",
                            "path": "./pictogram.model",
                            "id": "src/components/pictogram/pictogram.model.tsx::PictogramSizeTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the pictogram"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "PictogramSizeType.Medium"
            },
            "ariaLabel": {
                "type": "string",
                "attribute": "aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the pictogram"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabelledby": {
                "type": "string",
                "attribute": "aria-labelledby",
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
                    "text": "The aria-labelledby attribute of the pictogram"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=pictogram.js.map
