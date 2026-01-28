import { h, Host } from "@stencil/core";
import { CheckIconValue } from "./dropdownOption.model";
export class AthDropdownOption {
    /**
     * name option
     */
    name;
    /**
     * Valor del option
     */
    value;
    /**
     * texto del option
     */
    text;
    /**
     * Si esta selecionado
     */
    selected = false;
    /**
     * Si esta deshabilitado
     */
    disabled = false;
    /**
     * Permite agrupaciones
     */
    optionGroup;
    /**
     * icono para opcion
     */
    icon;
    /**
     * etiqueta accesible para la opcionseleccionada
     */
    selectedAriaLabel = 'seleccionada';
    isMultiselect = false;
    optSelected;
    hidden = false;
    haveOptionSlot = false;
    isIngroup = false;
    activeOption = false;
    async updateMultiselect() {
        this.isMultiselect = true;
    }
    async updateGroupOption() {
        this.isIngroup = true;
    }
    async activeDropdownOption() {
        this.activeOption = true;
    }
    async noActiveDropdownOption() {
        this.activeOption = false;
    }
    async filterNotFound(inputText) {
        this.hidden = true;
        if (this.haveOptionSlot) {
            this.optionsGroup.forEach(option => {
                if (option.text.toLowerCase().includes(inputText)) {
                    this.hidden = false;
                }
            });
        }
    }
    async setSelected(selected, opts) {
        if (this.disabled || this.optionGroup)
            return;
        if (this.selected === selected)
            return;
        this.selected = selected;
        if (!opts?.silent) {
            this.optSelected.emit({ source: opts?.source ?? 'programmatic' });
        }
    }
    async filterFound() {
        this.hidden = false;
    }
    async selectOption() {
        return this.setSelected(true, { source: 'programmatic' });
    }
    async unselectOption() {
        return this.setSelected(false, { source: 'programmatic' });
    }
    el;
    optionsGroup;
    getOptionClassNames = () => ({
        'ath-dropdown-option': true,
        'ath-dropdown-option--hidden': this.hidden,
    });
    addLevel() {
        this.optionsGroup.forEach(option => {
            option.updateGroupOption();
        });
    }
    getClassNames = () => ({
        'ath-dropdown-option-header': true,
        'disabled': this.disabled,
        'optGroup': this.optionGroup,
        'selected': this.selected,
        'active': this.activeOption,
    });
    getCheckboxClassNames = () => ({
        'option-checkbox': true,
        'checked': this.selected,
    });
    handleClick = () => {
        if (this.disabled || this.optionGroup)
            return;
        const selectedValue = this.isMultiselect ? !this.selected : true;
        this.setSelected(selectedValue, { silent: false, source: 'user' });
    };
    componentWillLoad() {
        this.optionsGroup = Array.from(this.el.querySelectorAll('ath-dropdown-option'));
        if (this.optionGroup) {
            this.addLevel();
            this.haveOptionSlot = true;
        }
    }
    render() {
        const checkboxIconHtml = this.selected ? CheckIconValue.Check : '';
        const id = this.el.getAttribute('id');
        const ariaLabelText = this.selected ? `${this.text} ${this.selectedAriaLabel}` : this.text;
        return (h(Host, { key: 'a661fe569f08a05c6467c07e9b1fdf880461de28', role: this.optionGroup ? 'group' : 'option', "aria-selected": !this.optionGroup ? this.selected : undefined, class: this.getOptionClassNames(), onClick: this.handleClick, "aria-label": ariaLabelText, "aria-labelledby": this.optionGroup ? id + '-text' : undefined }, h("div", { key: '7ebfab2a6878d5ea47609599d7d4fbc2ef24d483', class: this.getClassNames() }, this.isIngroup && h("div", { key: '5ea47e7f05285fce096b7b3bec5ab5ff2a608c06', class: "level" }), this.isMultiselect && !this.optionGroup && (h("div", { key: '589188088340908352f8f10ec83e5dc180d33229' }, h("div", { key: 'a63f04a02c7bbc3ba6db123172c701191ed1aa78', class: this.getCheckboxClassNames(), innerHTML: checkboxIconHtml }))), !!this.icon && h("ath-icon", { key: 'e7aa6b2475f38a74ee472e6f85443b467ee39910', icon: this.icon, color: this.selected ? 'inverse' : 'inherit' }), h("slot", { key: '6d40ef63158d603f4b514b349da5fafd7cdcea8a', name: "left-asset" }), h("span", { key: '264e50a7ca824f05a5eb272cbb6a63eaa1d320b4', id: id + '-text' }, " ", this.text), h("slot", { key: 'dd16830527849fd4d31802d594f2fd81ec312859', name: "right-asset" }), this.selected && !this.isMultiselect && h("ath-icon", { key: '57c999f068bb1a12863f7b6d570abd6cc0b6e0f4', icon: "check", color: "inverse" })), this.haveOptionSlot && (h("div", { key: '3d7471909153fc9c96709ddba8fafb7862bc2fc2', class: "ath-dropdown-option__list" }, h("slot", { key: '06e12622e93a3342004638b19fe837f6b54eedfe' })))));
    }
    static get is() { return "ath-dropdown-option"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdownOption.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdownOption.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "name option"
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
                    "text": "Valor del option"
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
                    "text": "texto del option"
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
                    "text": "Si esta selecionado"
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
                    "text": "Si esta deshabilitado"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "optionGroup": {
                "type": "boolean",
                "attribute": "option-group",
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
                    "text": "Permite agrupaciones"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "icono para opcion"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "selectedAriaLabel": {
                "type": "string",
                "attribute": "selected-aria-label",
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
                    "text": "etiqueta accesible para la opcionseleccionada"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'seleccionada'"
            }
        };
    }
    static get states() {
        return {
            "isMultiselect": {},
            "hidden": {},
            "haveOptionSlot": {},
            "isIngroup": {},
            "activeOption": {}
        };
    }
    static get events() {
        return [{
                "method": "optSelected",
                "name": "optSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ source: 'user' | 'programmatic' }",
                    "resolved": "{ source: \"user\" | \"programmatic\"; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "updateMultiselect": {
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
            "updateGroupOption": {
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
            "activeDropdownOption": {
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
            "noActiveDropdownOption": {
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
            "filterNotFound": {
                "complexType": {
                    "signature": "(inputText: any) => Promise<void>",
                    "parameters": [{
                            "name": "inputText",
                            "type": "any",
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
            "setSelected": {
                "complexType": {
                    "signature": "(selected: boolean, opts?: { silent?: boolean; source?: \"user\" | \"programmatic\"; }) => Promise<void>",
                    "parameters": [{
                            "name": "selected",
                            "type": "boolean",
                            "docs": ""
                        }, {
                            "name": "opts",
                            "type": "{ silent?: boolean; source?: \"user\" | \"programmatic\"; }",
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
            "filterFound": {
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
            "selectOption": {
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
            "unselectOption": {
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
//# sourceMappingURL=dropdownOption.js.map
