import { Host, h } from "@stencil/core";
import { ListOrientation, ListSizes } from "./list.model";
export class AthList {
    el;
    /** List spacings size*/
    size = ListSizes.Medium;
    /** Define the list orientation*/
    orientation = ListOrientation.Vertical;
    /** Define if the list contains dividers between items*/
    hasDivider;
    /** List state disabled, only works if clickable is true */
    disabled = false;
    /** List is clickable */
    clickable = false;
    slottedItems = [];
    getHostAttributes = () => ({
        role: 'list',
    });
    getListClassNames = () => ({
        'ath-list': true,
        [`ath-list--${this.orientation}`]: !!this.orientation,
        'disabled': this.disabled,
        'clickable': this.clickable,
    });
    componentWillLoad() {
        this.slottedItems = Array.from(this.el.querySelectorAll('ath-list-item'));
        this.slottedItems.forEach((item, index) => {
            item.hasDivider = !!this.hasDivider && this.hasDivider && index < this.slottedItems.length - 1;
            item.orientation = this.orientation;
            item.size = this.size;
            if (this.disabled) {
                item.disabled = this.disabled;
            }
            if (this.clickable) {
                item.clickable = this.clickable;
            }
        });
    }
    render() {
        return (h(Host, { key: 'a1c21273acc5a149d3d7242039dfde0fa4144d2f', class: this.getListClassNames(), ...this.getHostAttributes() }, h("slot", { key: 'f663c4203bb859fa7dc17522fe926f2106460268' })));
    }
    static get is() { return "ath-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ListSizeType",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ListSizeType": {
                            "location": "import",
                            "path": "./list.model",
                            "id": "src/components/list/list.model.ts::ListSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List spacings size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ListSizes.Medium"
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "ListOrientationType",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "ListOrientationType": {
                            "location": "import",
                            "path": "./list.model",
                            "id": "src/components/list/list.model.ts::ListOrientationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define the list orientation"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ListOrientation.Vertical"
            },
            "hasDivider": {
                "type": "boolean",
                "attribute": "has-divider",
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
                    "text": "Define if the list contains dividers between items"
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
                    "text": "List state disabled, only works if clickable is true"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "List is clickable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "slottedItems": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=list.js.map
