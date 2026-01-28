import { h, Host } from "@stencil/core";
import { Icons } from "../../utils/helper";
export class TooltipTrigger {
    el;
    /**
     * The icon name
     */
    icon = Icons.Info;
    /**
     * The size of the icon
     */
    size = 'md';
    /**
     * The aria-label attribute of the icon
     */
    ariaLabel = 'Más información';
    /**
     * Emitted when the button is clicked
     */
    athClick;
    /**
     * Emitted when the button gains focus
     */
    athFocus;
    /**
     * Emitted when the button loses focus
     */
    athBlur;
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            this.handleClick();
            ev.stopPropagation();
        }
    }
    handleClick = ( /**event: Event*/) => {
        this.athClick.emit();
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    getHostClassNames = () => ({
        'ath-tooltip-trigger': true,
    });
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (h(Host, { key: 'cc6a8bb7d8a665c2c6f4526884e08461d16e2e35', role: "button", class: this.getHostClassNames(), onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-label": this.el.ariaLabel ?? this.ariaLabel, tabIndex: hostTabindex }, h("ath-icon", { key: 'a586e4637e5a725df27a2a23fb94d1ec7c0a013f', icon: this.icon, size: this.size })));
    }
    static get is() { return "ath-tooltip-trigger"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "Icons.Info"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "IconSizeTypes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "IconSizeTypes": {
                            "location": "import",
                            "path": "../../utils/helper",
                            "id": "src/utils/helper/index.ts::IconSizeTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'md'"
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
                    "text": "The aria-label attribute of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'M\u00E1s informaci\u00F3n'"
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
                    "text": "Emitted when the button is clicked"
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
                    "text": "Emitted when the button gains focus"
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
                    "text": "Emitted when the button loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=tooltip-trigger.js.map
