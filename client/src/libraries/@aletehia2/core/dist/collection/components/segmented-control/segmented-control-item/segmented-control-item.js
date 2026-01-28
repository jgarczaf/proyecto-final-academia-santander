import { Host, h } from "@stencil/core";
import { SegmentedControlItemIconPositions, SegmentedControlTypes, SegmentedControlColors, SegmentedControlSizes, } from "../segmented-control.model";
import { transformIconSize, IconType } from "../../../utils/helper";
export class AthSegmentedControlItem {
    htmlEl;
    /**
     * Size of the segmented control item
     **/
    color = SegmentedControlColors.Primary;
    /**
     * Size of the segmented control item
     **/
    size = SegmentedControlSizes.Medium;
    /**
     * Icon position of the segmented control item
     */
    iconPosition = SegmentedControlItemIconPositions.None;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The segmented control item is selected
     */
    selected = false;
    /**
     * The segmented control is disabled
     */
    disabled = false;
    /**
     * The type of the control
     */
    type = SegmentedControlTypes.Select;
    /**
     * The value for a Segmented Control with type select (role radio)
     */
    value;
    /**
     * Emitted when the segmented control item is focus
     */
    athFocus;
    /**
     * Emitted when the segmented control item is selected
     */
    athChange;
    async unSelectItem() {
        this.selected = false;
        this.tabindex = -1;
    }
    async setFocus() {
        if (this.htmlEl) {
            this.htmlEl.focus();
        }
    }
    async setTabindex(index) {
        this.tabindex = index;
    }
    tabindex;
    handleKeyDown(event) {
        if (!this.disabled && (event.key === ' ' || event.key === 'Enter')) {
            event.preventDefault();
            this.handleClick();
        }
    }
    componentWillLoad() {
        this.tabindex = this.selected ? 0 : -1;
    }
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleClick = () => {
        if (!this.disabled && !this.selected) {
            this.selected = true;
            this.tabindex = 0;
            this.handleChange();
        }
    };
    handleChange = () => {
        const detail = {
            selected: this.selected,
        };
        this.athChange.emit(detail);
    };
    renderIcon = () => {
        const isIconOnly = this.iconPosition === SegmentedControlItemIconPositions.IconOnly;
        const iconSize = isIconOnly ? transformIconSize(IconType.SegmentedControlItemIconOnly, this.size) : transformIconSize(IconType.SegmentedControlItem, this.size);
        return h("ath-icon", { class: "ath-segmented-control-item__icon", icon: this.icon, size: iconSize, color: "inherit" });
    };
    getHostAttributes = () => {
        const isAction = this.type === SegmentedControlTypes.Action;
        const isSelect = this.type === SegmentedControlTypes.Select;
        return {
            'role': isAction ? 'button' : 'radio',
            ...(isAction && { 'aria-pressed': this.selected ? 'true' : 'false' }),
            ...(isSelect && { 'aria-checked': this.selected ? 'true' : 'false' }),
            'tabindex': this.disabled ? -1 : this.tabindex,
            'onClick': this.handleClick,
            'onFocus': this.handleFocus,
            'aria-disabled': this.disabled ? 'true' : 'false',
        };
    };
    getClassNames = () => ({
        'ath-segmented-control-item': true,
        [`ath-segmented-control-item--${this.size}`]: !!this.size,
        [`ath-segmented-control-item--${this.color}`]: !!this.color,
        [`ath-segmented-control-item--icon-${this.iconPosition}`]: this.iconPosition !== SegmentedControlItemIconPositions.None && this.iconPosition !== SegmentedControlItemIconPositions.IconOnly,
        [`ath-segmented-control-item--${this.iconPosition}`]: this.iconPosition === SegmentedControlItemIconPositions.IconOnly,
        'selected': this.selected,
        'disabled': this.disabled,
    });
    render() {
        return (h(Host, { key: 'b6c6f2d9a1f59fde88beea57680cf30847b79e18', ...this.getHostAttributes() }, h("div", { key: '1f684116d9dfe5fde869bee96803c9ac89c30716', class: this.getClassNames() }, this.icon && this.iconPosition !== SegmentedControlItemIconPositions.None && this.renderIcon(), this.iconPosition != SegmentedControlItemIconPositions.IconOnly && h("slot", { key: '70f8774c04b4a6927121310c2283b3b871094aa7' }))));
    }
    static get is() { return "ath-segmented-control-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["segmented-control-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["segmented-control-item.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "SegmentedControlColor",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "SegmentedControlColor": {
                            "location": "import",
                            "path": "../segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the segmented control item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlColors.Primary"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "SegmentedControlSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "SegmentedControlSize": {
                            "location": "import",
                            "path": "../segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the segmented control item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlSizes.Medium"
            },
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "SegmentedControlItemIconPosition",
                    "resolved": "\"icon-only\" | \"left\" | \"none\" | \"right\"",
                    "references": {
                        "SegmentedControlItemIconPosition": {
                            "location": "import",
                            "path": "../segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlItemIconPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon position of the segmented control item"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "SegmentedControlItemIconPositions.None"
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
                    "text": "The code of the button's icon (used with iconPosition)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "The segmented control item is selected"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                    "text": "The segmented control is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "SegmentedControlType",
                    "resolved": "\"action\" | \"select\"",
                    "references": {
                        "SegmentedControlType": {
                            "location": "import",
                            "path": "../segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the control"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SegmentedControlTypes.Select"
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
                    "text": "The value for a Segmented Control with type select (role radio)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "tabindex": {}
        };
    }
    static get events() {
        return [{
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the segmented control item is focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the segmented control item is selected"
                },
                "complexType": {
                    "original": "SegmentedControlItemChangeSelect",
                    "resolved": "{ selected: boolean; }",
                    "references": {
                        "SegmentedControlItemChangeSelect": {
                            "location": "import",
                            "path": "../segmented-control.model",
                            "id": "src/components/segmented-control/segmented-control.model.ts::SegmentedControlItemChangeSelect"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "unSelectItem": {
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
            },
            "setFocus": {
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
            },
            "setTabindex": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
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
            }
        };
    }
    static get elementRef() { return "htmlEl"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=segmented-control-item.js.map
