export class AthMenuVerticalItemAction {
    /**
     * Whether the item is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Whether an item with children is open by default.
     */
    open = false;
    /**
     * Whether the item is selected
     */
    selected = false;
    /**
     * Title of the item
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
    static get is() { return "ath-menu-vertical-item-action"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
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
                    "text": "Whether the item is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Icon of the item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                    "text": "Whether an item with children is open by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Whether the item is selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                    "text": "Title of the item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "Value of the item, in order to identify it."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=menu-vertical-item-action.js.map
