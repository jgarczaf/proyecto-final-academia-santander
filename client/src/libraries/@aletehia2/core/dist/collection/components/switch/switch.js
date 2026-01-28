import { Host, h } from "@stencil/core";
import { SwitchSvgIcons } from "./switch.model";
export class AthSwitch {
    /**
     * Determines if the switch is disabled and cannot be interacted with
     * @default false
     */
    disabled = false;
    /**
     * Controls the selected/unselected state of the switch
     * @default false
     */
    selected = false;
    /**
     * Makes the switch read-only, preventing user interaction while still being focusable
     * @default false
     */
    readonly = false;
    /**
     * Name to identify the switch
     */
    name;
    /**
     * Event emitted when the switch receives focus
     */
    athFocus;
    /**
     * Event emitted when the switch loses focus
     */
    athBlur;
    /**
     * Event emitted when the switch state changes
     */
    athChange;
    el;
    get isReadonly() {
        return !this.disabled && this.readonly;
    }
    getClassNames = () => ({
        'ath-switch': true,
        [`ath-switch__${this.selected ? 'selected' : 'unselected'}`]: true,
        'ath-switch__readonly': this.isReadonly,
        'ath-switch__disabled': this.disabled,
    });
    getSwitchControllerClassNames = () => ({
        'ath-switch-controller': true,
        'ath-switch-controller__readonly': this.isReadonly,
        [`ath-switch-controller__${this.selected ? 'selected' : 'unselected'}`]: true,
        'ath-switch-controller__disabled': this.disabled,
    });
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    handleClick = () => {
        this.changeStatus();
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.changeStatus();
        }
    }
    changeStatus() {
        if (this.disabled || this.readonly) {
            return;
        }
        this.selected = !this.selected;
        this.athChange.emit({ name: this.name, selected: this.selected });
    }
    getSwitchIcon = () => {
        return this.selected ? SwitchSvgIcons.Selected : SwitchSvgIcons.Unselected;
    };
    getHostAttributes = () => {
        return {
            'role': 'switch',
            'aria-disabled': this.disabled ? 'true' : 'false',
            'aria-checked': this.selected ? 'true' : 'false',
            'aria-readonly': this.isReadonly ? 'true' : 'false',
            'tabindex': this.disabled ? -1 : 0,
            'onFocus': this.handleFocus,
            'onBlur': this.handleBlur,
            'onClick': this.handleClick,
            'onKeyDown': event => this.handleKeyDown(event),
        };
    };
    render() {
        return (h(Host, { key: 'ea6402b614df85c002570150049b5a99bcf44b92', ...this.getHostAttributes() }, h("span", { key: '6e2889cc47e4fdab7c313fae0516011c23a7fb61', class: this.getClassNames() }, h("div", { key: 'd9d581c601d67c7f8e6198e64e4f371f17e99723', class: this.getSwitchControllerClassNames(), innerHTML: this.getSwitchIcon() }))));
    }
    static get is() { return "ath-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["switch.css"]
        };
    }
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
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Determines if the switch is disabled and cannot be interacted with"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Controls the selected/unselected state of the switch"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Makes the switch read-only, preventing user interaction while still being focusable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Name to identify the switch"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
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
                    "text": "Event emitted when the switch receives focus"
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
                    "text": "Event emitted when the switch loses focus"
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
                    "text": "Event emitted when the switch state changes"
                },
                "complexType": {
                    "original": "SwitchChangeDetail",
                    "resolved": "{ selected: boolean; name?: string; }",
                    "references": {
                        "SwitchChangeDetail": {
                            "location": "import",
                            "path": "./switch.model",
                            "id": "src/components/switch/switch.model.ts::SwitchChangeDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
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
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=switch.js.map
