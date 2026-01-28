import { TargetType } from "../menu-horizontal.model";
export class AthMenuHorizontalItem {
    /**
     * The accessible text of the badge
     */
    badgeLabel;
    /**
     * The value of the badge
     */
    badgeValue = undefined;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * Whether the item is disabled or not
     */
    disabled;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel = '(Se abre en una nueva ventana)';
    /**
     * The URL of the item
     */
    href;
    /**
     * The label of the item
     */
    label;
    /**
     * Whether the item is selected or not
     */
    selected;
    /**
     * Specifies the relationship of the linked URL
     */
    rel;
    /**
     * The target of the link
     */
    target = TargetType.Self;
    /*
     * Value of the item
     */
    value;
    static get is() { return "ath-menu-horizontal-item"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "badgeLabel": {
                "type": "string",
                "attribute": "badge-label",
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
                    "text": "The accessible text of the badge"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "badgeValue": {
                "type": "number",
                "attribute": "badge-value",
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
                    "text": "The value of the badge"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "undefined"
            },
            "badgeMax": {
                "type": "number",
                "attribute": "badge-max",
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
                    "text": "The maximum value inside the badge"
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
                    "text": "Whether the item is disabled or not"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "externalLabel": {
                "type": "string",
                "attribute": "external-label",
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
                    "text": "Additional text to be appended to the aria-label to indicate that this is an external link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'(Se abre en una nueva ventana)'"
            },
            "href": {
                "type": "string",
                "attribute": "href",
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
                    "text": "The URL of the item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "The label of the item"
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
                    "text": "Whether the item is selected or not"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "rel": {
                "type": "string",
                "attribute": "rel",
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
                    "text": "Specifies the relationship of the linked URL"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
                "mutable": false,
                "complexType": {
                    "original": "TargetTypes",
                    "resolved": "\"blank\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "TargetTypes": {
                            "location": "import",
                            "path": "../menu-horizontal.model",
                            "id": "src/components/menu-horizontal/menu-horizontal.model.ts::TargetTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The target of the link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TargetType.Self"
            },
            "value": {
                "type": "any",
                "attribute": "value",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=menu-horizontal-item.js.map
