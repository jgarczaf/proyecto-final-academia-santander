import { Host, h } from "@stencil/core";
import { DIVIDER_DEFAULT_ORIENTATION, DIVIDER_DEFAULT_SIZE, DIVIDER_DEFAULT_COLOR } from "./divider.model";
export class AthDivider {
    /**
     * Orientation of the divider
     **/
    orientation = DIVIDER_DEFAULT_ORIENTATION;
    /**
     * Size of the divider
     **/
    size = DIVIDER_DEFAULT_SIZE;
    /**
     * Color of the divider
     **/
    color = DIVIDER_DEFAULT_COLOR;
    getAttributes = () => ({
        'role': 'separator',
        'aria-orientation': this.orientation,
    });
    getClassNames = () => ({
        'ath-divider': true,
        [`ath-divider--orientation-${this.orientation}`]: !!this.orientation,
        [`ath-divider--size-${this.size}`]: !!this.size,
        [`ath-divider--color-${this.color}`]: !!this.color,
    });
    render() {
        return (h(Host, { key: '29c0c6955490f30e48ae4016c22475eaa3ad294f', ...this.getAttributes() }, h("div", { key: '9a7d28bf41fc9ff8086e5c8eef312ddbf6259fe0', class: this.getClassNames() })));
    }
    static get is() { return "ath-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["divider.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "DividerOrientationType",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "DividerOrientationType": {
                            "location": "import",
                            "path": "./divider.model",
                            "id": "src/components/divider/divider.model.ts::DividerOrientationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Orientation of the divider"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DIVIDER_DEFAULT_ORIENTATION"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "DividerSizeType",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "DividerSizeType": {
                            "location": "import",
                            "path": "./divider.model",
                            "id": "src/components/divider/divider.model.ts::DividerSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the divider"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DIVIDER_DEFAULT_SIZE"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "DividerColorType",
                    "resolved": "\"bold\" | \"bolder\" | \"boldest\"",
                    "references": {
                        "DividerColorType": {
                            "location": "import",
                            "path": "./divider.model",
                            "id": "src/components/divider/divider.model.ts::DividerColorType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color of the divider"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DIVIDER_DEFAULT_COLOR"
            }
        };
    }
}
//# sourceMappingURL=divider.js.map
