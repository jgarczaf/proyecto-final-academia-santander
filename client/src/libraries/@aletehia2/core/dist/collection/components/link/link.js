import { h, Host } from "@stencil/core";
import { linkSize, linkTarget } from "./link.model";
import { IconType, transformIconSize } from "../../utils/helper/index";
export class AthLink {
    /**
     * aria-describedby para link
     */
    ariaDescribedby;
    /**
     * aria-label para link
     */
    ariaLabel;
    /**
     * aria-labelledby para link
     */
    ariaLabelledby;
    /**
     * Indica si el link esta deshabilitado
     */
    disabled;
    /**
     * Indica el icono a usar
     */
    icon;
    /**
     * Indica el aria-label para icono
     */
    iconAriaLabel;
    /**
     * Url del destino
     */
    linkHref;
    /**
     * Target para indicar donde se abrira
     */
    linkTarget = linkTarget.Blank;
    /**
     * Tamaño link
     */
    size = linkSize.Md;
    /**
     * Opcion del subrayado
     */
    underline = true;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel;
    /**
     * Emitted when the link is clicked
     */
    athClick;
    /**
     * Emitted when the lin gains focus
     */
    athFocus;
    /**
     * Emitted when the link loses focus
     */
    athBlur;
    el;
    handleClick = () => {
        this.athClick.emit();
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    setAriaLabel(baseLabel) {
        let label = baseLabel?.trim() || '';
        if (this.linkTarget === linkTarget.Blank) {
            const extra = this.externalLabel || '(enlace externo)';
            label = label ? `${label} ${extra}` : extra;
        }
        else if (this.externalLabel) {
            label = label ? `${label} ${this.externalLabel}` : this.externalLabel;
        }
        return label;
    }
    getClassNames = () => ({
        'ath-link': true,
        [`ath-link--${this.size}`]: !!this.size,
        'ath-link--disabled': this.disabled,
        'ath-link--underline': this.icon ? this.underline : true,
    });
    renderIcon = () => {
        const iconSize = transformIconSize(IconType.Link, this.size);
        return h("ath-icon", { icon: this.icon, size: iconSize, "aria-label": this.iconAriaLabel, color: "inherit" });
    };
    render() {
        const target = '_' + this.linkTarget;
        const linkTabindex = this.el.getAttribute('tabindex') === '-1' || this.disabled ? '-1' : '0';
        return (h(Host, { key: 'f20a20fda5390be3dd41075af2ac1bfbaf90e5ef' }, h("a", { key: '30677497c8e32958f14a15fb0094d8e1fb0d6af4', class: this.getClassNames(), href: this.linkHref, target: target, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, tabindex: linkTabindex, "aria-label": this.setAriaLabel(this.ariaLabel), "aria-labelledby": this.ariaLabelledby, "aria-describedby": this.ariaDescribedby, "aria-disabled": this.disabled ? 'true' : 'false' }, h("slot", { key: '228f5b6c4e313a65488b07f6a2bfb0e020a96c73' }), !!this.icon && this.renderIcon())));
    }
    static get is() { return "ath-link"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["link.css"]
        };
    }
    static get properties() {
        return {
            "ariaDescribedby": {
                "type": "string",
                "attribute": "aria-describedby",
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
                    "text": "aria-describedby para link"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "text": "aria-label para link"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabelledby": {
                "type": "string",
                "attribute": "aria-labelledby",
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
                    "text": "aria-labelledby para link"
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
                    "text": "Indica si el link esta deshabilitado"
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
                    "text": "Indica el icono a usar"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "iconAriaLabel": {
                "type": "string",
                "attribute": "icon-aria-label",
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
                    "text": "Indica el aria-label para icono"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "linkHref": {
                "type": "string",
                "attribute": "link-href",
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
                    "text": "Url del destino"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "linkTarget": {
                "type": "string",
                "attribute": "link-target",
                "mutable": false,
                "complexType": {
                    "original": "linkTargets",
                    "resolved": "\"blank\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "linkTargets": {
                            "location": "import",
                            "path": "./link.model",
                            "id": "src/components/link/link.model.ts::linkTargets"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Target para indicar donde se abrira"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "linkTarget.Blank"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "linkSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "linkSizes": {
                            "location": "import",
                            "path": "./link.model",
                            "id": "src/components/link/link.model.ts::linkSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tama\u00F1o link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "linkSize.Md"
            },
            "underline": {
                "type": "boolean",
                "attribute": "underline",
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
                    "text": "Opcion del subrayado"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional text to be appended to the aria-label to indicate that this is an external link"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athClick",
                "name": "athClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when the lin gains focus"
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
                    "text": "Emitted when the link loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=link.js.map
