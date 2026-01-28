import { menuItemLinkTargets } from "./menu-vertical-item-link.model";
export class AthMenuVerticalItemLink {
    /**
     * Whether the link is selected
     */
    selected = false;
    /**
     * Whether the link is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Title of the link
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
    /**
     * URL of the link
     **/
    href;
    /**
     * target of the link: blank | self
     **/
    target = menuItemLinkTargets.Blank;
    /**
     * rel of the link
     **/
    rel;
    /**
     * The text that indicates that the link open a new window
     **/
    externalLabel = 'Se abre en una nueva ventana';
    static get is() { return "ath-menu-vertical-item-link"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
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
                    "text": "Whether the link is selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Whether the link is disabled"
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
                    "text": "Title of the link"
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
                    "text": "URL of the link"
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
                    "original": "menuItemLinkTarget",
                    "resolved": "\"blank\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "menuItemLinkTarget": {
                            "location": "import",
                            "path": "./menu-vertical-item-link.model",
                            "id": "src/components/menu-vertical/menu-vertical-item-link/menu-vertical-item-link.model.ts::menuItemLinkTarget"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "target of the link: blank | self"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "menuItemLinkTargets.Blank"
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
                    "text": "rel of the link"
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
                    "text": "The text that indicates that the link open a new window"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Se abre en una nueva ventana'"
            }
        };
    }
}
//# sourceMappingURL=menu-vertical-item-link.js.map
