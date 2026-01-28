import { Host, h } from "@stencil/core";
import { BADGE_DEFAULT_COLOR, BADGE_DEFAULT_TYPE, MAX_VALUE } from "./badge.model";
export class AthBadge {
    /**
     * The badge can display a value or be a decorative element
     **/
    type = BADGE_DEFAULT_TYPE;
    /**
     * Badge color accompanying the purpose of the message
     **/
    color = BADGE_DEFAULT_COLOR;
    /**
     * Value displayed within the badge if it is "numeric"
     **/
    value = 0;
    /**
     * Value from which a + will be added once exceeded by the "value"
     **/
    max = MAX_VALUE;
    /**
     *  Accessibility label describing the message
     **/
    label;
    /**
     * Positioning of the badge relative to the slot
     **/
    position;
    /**
     * Custom horizontal distance of the badge from its default position
     **/
    distanceX = 0;
    /**
     * Custom vertical distance of the badge from its default position
     **/
    distanceY = 0;
    _position;
    handlePosition() {
        this.setPosition();
    }
    get maxValue() {
        return this.max > MAX_VALUE ? MAX_VALUE : this.max;
    }
    getBadgeStyle = () => ({
        transform: `translate(${this.distanceX}px, ${this.distanceY}px)`,
    });
    getBadgeValue = () => (this.maxValue < this.value ? `+${this.maxValue}` : `${this.value}`);
    getClassNames = () => ({
        'ath-badge': true,
        [`ath-badge--${this.type}`]: !!this.type,
        [`ath-badge--${this._position}`]: !!this._position,
        [`ath-badge--${this.color}`]: !!this.color,
    });
    setPosition = () => {
        if (this.type === 'dot') {
            this._position = this.position || 'right';
        }
        else {
            this._position = this.position || 'top-right';
        }
    };
    el;
    componentWillLoad() {
        this.setPosition();
        const children = this.el.children;
        if (children.length > 1) {
            console.warn('<ath-badge> sólo acepta un elemento como slot.');
        }
    }
    render() {
        return (h(Host, { key: '73dc8b6ab27a346db0f4549ecd89ec9bb1eec9a3' }, h("div", { key: 'e101aa100ea455a3b7ac4173bf05d7e4e20efad9', class: "ath-badge--container" }, h("slot", { key: '9e288c7dc02ebcec7188e0403d5a5f7f25d49185' }), h("span", { key: '268174be716b550b501964cbf82b0126e74b4396', class: this.getClassNames(), style: this.getBadgeStyle() }, this.type == 'numeric' && this.getBadgeValue()), h("div", { key: 'df4dae3de75825b20816113aaaaabcf19fbbcefb', class: "sr-only" }, this.label))));
    }
    static get is() { return "ath-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["badge.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "BadgeTypes",
                    "resolved": "\"dot\" | \"numeric\"",
                    "references": {
                        "BadgeTypes": {
                            "location": "import",
                            "path": "./badge.model",
                            "id": "src/components/badge/badge.model.ts::BadgeTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The badge can display a value or be a decorative element"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "BADGE_DEFAULT_TYPE"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "BadgeColorTypes",
                    "resolved": "\"accent\" | \"danger\" | \"disabled\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "BadgeColorTypes": {
                            "location": "import",
                            "path": "./badge.model",
                            "id": "src/components/badge/badge.model.ts::BadgeColorTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Badge color accompanying the purpose of the message"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "BADGE_DEFAULT_COLOR"
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
                    "text": "Value displayed within the badge if it is \"numeric\""
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
                    "text": "Value from which a + will be added once exceeded by the \"value\""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "MAX_VALUE"
            },
            "label": {
                "type": "any",
                "attribute": "label",
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
                    "text": "Accessibility label describing the message"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "BadgePositions",
                    "resolved": "\"right\" | \"top-right\"",
                    "references": {
                        "BadgePositions": {
                            "location": "import",
                            "path": "./badge.model",
                            "id": "src/components/badge/badge.model.ts::BadgePositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Positioning of the badge relative to the slot"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "distanceX": {
                "type": "number",
                "attribute": "distance-x",
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
                    "text": "Custom horizontal distance of the badge from its default position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "distanceY": {
                "type": "number",
                "attribute": "distance-y",
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
                    "text": "Custom vertical distance of the badge from its default position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "_position": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "handlePosition"
            }, {
                "propName": "position",
                "methodName": "handlePosition"
            }];
    }
}
//# sourceMappingURL=badge.js.map
