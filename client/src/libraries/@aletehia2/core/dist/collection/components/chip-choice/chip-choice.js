import { Host, h } from "@stencil/core";
import { ChipChoiceSize, ChipChoiceRole } from "./chip-choice.model";
import { IconType, transformIconSize } from "../../utils/helper/index";
export class AthChipChoice {
    initialValue;
    el;
    internals;
    /**
     * Indica si el chip esta seleccionado
     */
    selected = false;
    /**
     * Indica si el chip esta deshabilitado
     */
    disabled = false;
    /**
     * Indica el nombre del icono a usar
     */
    icon;
    /**
     * Texto del chip
     */
    label;
    /**
     * The chip name for HTML Form API
     */
    name;
    /**
     * The role of the chip
     */
    role = ChipChoiceRole.Checkbox;
    /**
     * Indica el tamaño del chip (sm/md)
     */
    size = ChipChoiceSize.Medium;
    /**
     * The chip value for HTML Form API
     */
    value;
    watchSelectedHandler(newValue) {
        if (this.isCheckbox() && !this.disabled) {
            this.visualSelected = newValue;
            this.el.focus();
            this.setInputValue();
        }
    }
    athChange;
    athFocus;
    athBlur;
    visualSelected = false;
    async select() {
        if (!this.disabled) {
            this.visualSelected = true;
            this.el.focus();
        }
    }
    async unselect() {
        if (!this.disabled) {
            this.visualSelected = false;
            this.el.blur();
        }
    }
    handleKeydown(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            this.toogleValueChip();
            e.stopPropagation();
        }
    }
    handleMouseDown(e) {
        if (this.disabled) {
            e.preventDefault();
        }
    }
    componentDidLoad() {
        if (!this.value) {
            this.value = this.label;
        }
        this.initialValue = this.selected;
        if (this.isCheckbox() && !this.disabled) {
            this.setInputValue();
        }
    }
    formResetCallback() {
        if (this.isCheckbox() && !this.disabled) {
            this.setValueChip(this.initialValue);
        }
    }
    isCheckbox() {
        return this.role === ChipChoiceRole.Checkbox;
    }
    handleClick = () => {
        this.toogleValueChip();
        this.select();
    };
    handleFocus = () => {
        if (!this.disabled) {
            this.athFocus.emit();
        }
    };
    handleBlur = () => {
        if (!this.disabled) {
            this.athBlur.emit();
        }
    };
    toogleValueChip() {
        this.setValueChip(!this.selected);
    }
    setValueChip(value) {
        if (!this.disabled && this.selected !== value) {
            this.selected = value;
            this.athChange.emit(this.el);
            this.setInputValue();
        }
    }
    setInputValue() {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals?.setFormValue(this.selected ? this.value : undefined);
            this.internals?.checkValidity();
        }
    }
    getHostAttributes = () => {
        return {
            'tabindex': this.visualSelected && !this.disabled ? '0' : '-1',
            'aria-disabled': this.disabled ? 'true' : undefined,
            'aria-checked': this.selected ? 'true' : 'false',
            'onClick': this.handleClick,
            'onFocus': this.handleFocus,
            'onBlur': this.handleBlur,
        };
    };
    getHostClassNames = () => ({
        'ath-chip-choice': true,
    });
    getContainerClassNames = () => ({
        'ath-chip-choice__container': true,
        [`ath-chip-choice__container--${this.size}`]: true,
        'ath-chip-choice__container--disabled': this.disabled,
        [`ath-chip-choice__container--checked`]: this.selected && !this.disabled,
    });
    renderIcon = () => {
        return h("ath-icon", { icon: this.icon, size: transformIconSize(IconType.Chipchoice, this.size), color: "inherit" });
    };
    render() {
        return (h(Host, { key: '5969f3fd3f8c0f7136d462f9b683553b836d3145', ...this.getHostAttributes(), class: this.getHostClassNames() }, h("span", { key: 'a4c47f1547de3bab87a3d4bc2101748afb2a2d71', class: this.getContainerClassNames() }, !!this.icon && this.renderIcon(), h("span", { key: 'f38573a8caf29ce20765b27c94ac15e0ed351e30', class: "ath-chip-choice__text" }, this.label))));
    }
    static get is() { return "ath-chip-choice"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-choice.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-choice.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Indica si el chip esta seleccionado"
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
                    "text": "Indica si el chip esta deshabilitado"
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
                    "text": "Indica el nombre del icono a usar"
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
                    "text": "Texto del chip"
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
                    "text": "The chip name for HTML Form API"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "role": {
                "type": "string",
                "attribute": "role",
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
                    "text": "The role of the chip"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "ChipChoiceRole.Checkbox"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ChipChoiceSizes",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "ChipChoiceSizes": {
                            "location": "import",
                            "path": "./chip-choice.model",
                            "id": "src/components/chip-choice/chip-choice.model.ts::ChipChoiceSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indica el tama\u00F1o del chip (sm/md)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ChipChoiceSize.Medium"
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
                    "text": "The chip value for HTML Form API"
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
    static get watchers() {
        return [{
                "propName": "selected",
                "methodName": "watchSelectedHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mousedown",
                "method": "handleMouseDown",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=chip-choice.js.map
