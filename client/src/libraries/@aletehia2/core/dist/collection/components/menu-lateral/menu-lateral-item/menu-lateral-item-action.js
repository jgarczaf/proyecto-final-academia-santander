export class AthMenuLateralItemAction {
    /**
     * The aria-label of the item
     */
    ariaLabel;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * The accesible label of the badge
     */
    badgeLabel;
    /**
     * The value inside the badge
     */
    badgeValue;
    /**
     * Weather the button is disabled
     */
    disabled = false;
    /**
     * The icon of the menu-button-item-action
     */
    icon;
    /**
     * The name of the item, usefull in order to identify the selected item
     */
    name;
    /**
     * Weather the button is selected
     */
    selected = false;
    /**
     * Tooltip text
     */
    tooltipText;
    static get is() { return "ath-menu-lateral-item-action"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
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
                    "text": "The aria-label of the item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "The accesible label of the badge"
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
                    "text": "The value inside the badge"
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
                    "text": "Weather the button is disabled"
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
                    "text": "The icon of the menu-button-item-action"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "The name of the item, usefull in order to identify the selected item"
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
                    "text": "Weather the button is selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
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
                    "text": "Tooltip text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=menu-lateral-item-action.js.map
