export class AthCardHeader {
    /**
     * Title of the card header
     **/
    headingText;
    /**
     * date of the card header
     **/
    date;
    /**
     * Overline of the card header
     **/
    overline;
    /**
     * Subtitle of the card
     **/
    subtitle;
    static get is() { return "ath-card-header"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
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
                    "text": "Title of the card header"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "date": {
                "type": "string",
                "attribute": "date",
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
                    "text": "date of the card header"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "overline": {
                "type": "string",
                "attribute": "overline",
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
                    "text": "Overline of the card header"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
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
                    "text": "Subtitle of the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=card-header.js.map
