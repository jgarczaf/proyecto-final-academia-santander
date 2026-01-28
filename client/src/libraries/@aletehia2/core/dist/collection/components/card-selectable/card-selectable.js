import { Host, h } from "@stencil/core";
import { CardSelectableSize, CardSelectableType } from "./card-selectable.model";
let cardSelectableSequence = 0;
export class AthCardSelectable {
    hostId = `card-selectable-${++cardSelectableSequence}`;
    headlineId;
    subheadlineId;
    tagId;
    el;
    /**
     * Size of the card
     **/
    size = CardSelectableSize.Small;
    /**
     * headline of the card
     **/
    headingText;
    /**
     * subtitle of the card
     **/
    subtitle;
    /**
     * overline of the card
     **/
    overline;
    /**
     * type of card
     **/
    type = CardSelectableType.Single;
    /**
     * Indicates whether the card is selected
     **/
    selected = false;
    /**
     * Indicates whether the card is disabled
     **/
    disabled = false;
    /**
     * tag of the card
     **/
    tag;
    athChange;
    athFocus;
    athBlur;
    visualSelected = false;
    async select(firstLoad) {
        if (!this.disabled) {
            this.visualSelected = true;
            if (!firstLoad)
                this.el.focus();
        }
    }
    async unselect() {
        if (!this.disabled) {
            this.visualSelected = false;
            this.el.blur();
        }
    }
    handleClick = () => {
        if (this.disabled)
            return;
        this.selected = this.type === CardSelectableType.Single ? true : !this.selected;
        this.visualSelected = this.type === CardSelectableType.Single ? true : !this.selected;
        this.athChange.emit(this.el);
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleKeyDown = (ev) => {
        switch (ev.code) {
            case 'Space':
            case 'Enter':
                ev.preventDefault();
                this.handleClick();
                break;
            default:
                break;
        }
    };
    getHostAttributes = () => ({
        role: this.type === CardSelectableType.Single ? 'radio' : 'checkbox',
        tabindex: this.visualSelected && !this.disabled ? '0' : '-1',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onkeydown: this.handleKeyDown,
    });
    getAriaAttributes = () => {
        const describedBy = [this.tagId, this.subheadlineId].filter(Boolean).join(' ');
        return {
            'aria-labelledby': !!this.headingText ? this.headlineId : undefined,
            'aria-describedby': describedBy != '' ? describedBy : undefined,
            'aria-disabled': this.disabled ? 'true' : undefined,
            'aria-checked': this.selected ? 'true' : 'false',
        };
    };
    getCheckClassNames = () => ({
        'ath-card-selectable_check': true,
    });
    getCardClassNames = () => ({
        'ath-card-selectable': true,
        'ath-card-selectable--disabled': this.disabled,
        [`ath-card-selectable--${this.type}`]: true,
        [`ath-card-selectable--${this.size}`]: true,
        'ath-card-selectable--selected': this.selected,
        'ath-color-text--disabled': this.disabled,
    });
    componentWillLoad() {
        if (this.headingText)
            this.headlineId = `${this.hostId}-headline`;
        if (this.subtitle)
            this.subheadlineId = `${this.hostId}-subheadline`;
        if (this.tag)
            this.tagId = `${this.hostId}-tag`;
    }
    renderIcon = () => {
        const icon = this.type === CardSelectableType.Single ? 'check' : 'completed';
        const size = this.type === CardSelectableType.Single ? 'md' : 'sm';
        return h("ath-icon", { icon: icon, size: size, color: "inherit" });
    };
    render() {
        const tagColor = this.disabled ? 'disabled' : 'primary';
        return (h(Host, { key: '6d08a21002df084479058f8d93e45628a9329ed9', ...this.getHostAttributes(), ...this.getAriaAttributes() }, h("div", { key: 'd35fab7d32784832d7cadcf5df6b9d0c917c83cd', class: this.getCardClassNames() }, h("div", { key: '3fa24bf7b6c7776bb2d8fa23173f87181cb973b9', class: "ath-card-selectable_content" }, h("div", { key: '1d523271e83617df2ea4df86aace6ad74dace95d', class: "ath-card-selectable_header" }, h("div", { key: '749d37e6fdf65dd5a383c0eb766ae425467b90b4', class: "ath-card-selectable_headlines" }, !!this.tag && h("ath-tag", { key: '2760783944a8b7f36a262ca62721c1f5914e0814', id: this.tagId, size: "md", color: tagColor, headingText: this.tag }), !!this.overline && h("span", { key: '82d68ede238a760609d0e254d19c8aa337f1a90f', class: "ath-card-selectable_overline" }, this.overline), h("div", { key: '3662695148d2a6bc0f516ef4bd6202d026682131', class: "ath-card-selectable_wrapper" }, h("span", { key: '410680a9f1d9a8344cc5f6faeb9576f1e8d4e093', id: this.headlineId, class: "ath-card-selectable_headline" }, this.headingText), h("span", { key: '2a68821556b97af93d03aae8c3ff24417ec8e1c4', id: this.subheadlineId, class: "ath-card-selectable_subheadline" }, this.subtitle))), h("div", { key: '8654bef79dc43de589e67e0566e2b23ccf6df3be', class: this.getCheckClassNames() }, this.selected && this.renderIcon())), h("slot", { key: 'b3cd6aaf85513675066ed13264ab44de8f4a1ce6', name: "body" })))));
    }
    static get is() { return "ath-card-selectable"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-selectable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-selectable.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "CardSelectableSizes",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "CardSelectableSizes": {
                            "location": "import",
                            "path": "./card-selectable.model",
                            "id": "src/components/card-selectable/card-selectable.model.ts::CardSelectableSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CardSelectableSize.Small"
            },
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
                    "text": "headline of the card"
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
                    "text": "subtitle of the card"
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
                    "text": "overline of the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "CardSelectableTypes",
                    "resolved": "\"multiselect\" | \"single\"",
                    "references": {
                        "CardSelectableTypes": {
                            "location": "import",
                            "path": "./card-selectable.model",
                            "id": "src/components/card-selectable/card-selectable.model.ts::CardSelectableTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "type of card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CardSelectableType.Single"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates whether the card is selected"
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
                    "text": "Indicates whether the card is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "tag": {
                "type": "string",
                "attribute": "tag",
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
                    "text": "tag of the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "visualSelected": {}
        };
    }
    static get events() {
        return [{
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athBlur",
                "name": "athBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "select": {
                "complexType": {
                    "signature": "(firstLoad: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "firstLoad",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "unselect": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=card-selectable.js.map
