import { h, Host } from "@stencil/core";
import { ModalSize, ModalAppearance } from "./modal.model";
import { FcButtonComp, FcPictogram } from "../../sharedfc/input/index";
import { ButtonIconPosition } from "../button/button.model";
import { IconSize } from "../../utils/helper/index";
import { getHeading } from "../../utils/helper/heading";
export class AthModal {
    el;
    /**
     * Indicates the illustration used when the prop isAlert is set to true
     */
    appearance = ModalAppearance.Error;
    /**
     * Indicates whether the modal should automatically focus the first interactive element
     */
    autofocus = true;
    /**
     * Indicates whether the modal should close when clicking outside
     */
    clickOutsideClose = false;
    /**
     * Indicates whether the modal will occupy the full screen
     */
    fullScreen = false;
    /**
     * Indicates whether the modal has a close (X) button
     */
    hasClose = true;
    /**
     * Indicates whether there is a divider between the header and the slots
     */
    hasDivider = false;
    /**
     * Indicates the heading level of the title
     */
    headingLevel = 2;
    /**
     * Indicates the title text
     */
    headingText;
    /**
     * Indicates whether the modal has role "Alert", and interrupts the screen reader flow
     */
    isAlert = false;
    /**
     * Indicates the maximum height of the modal
     */
    maxHeight;
    /**
     * Indicates the maximum width of the modal
     */
    maxWidth;
    /**
     * Indicates whether the modal is displayed by default
     */
    open = false;
    /**
     * Differentiates the modal size between sm and md
     */
    size = ModalSize.Medium;
    /**
     * Indicates the subtitle text
     */
    subtitleText;
    // ACCESSIBILITY
    /**
     * Accessible text for the close (X) button
     */
    closeAriaLabel;
    // EVENTS
    /**
     * Emitted when the modal is opened
     */
    athOpened;
    // EVENTS
    /**
     * Emitted when the modal is closed
     */
    athClosed;
    /**
     * Method to open the modal
     */
    async openModal() {
        this.open = true;
        this.previouslyFocusedElement = this.getDeepActiveElement();
        requestAnimationFrame(() => {
            this.focusableElements = this.findFocusableElements();
            if (this.autofocus) {
                this.focusFirstElement();
            }
            else {
                this.blurOuterElement();
            }
            this.athOpened.emit();
        });
    }
    /**
     * Method to close the modal
     */
    async closeModal() {
        this.open = false;
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
        this.athClosed.emit();
    }
    previouslyFocusedElement = null;
    focusableElements = [];
    handleKeyDown(e) {
        if (this.open) {
            if (e.key === 'Escape') {
                this.closeModal();
            }
            if (e.key === 'Tab') {
                if (this.focusableElements.length !== 0) {
                    this.trapFocus(e);
                }
                else {
                    e.preventDefault();
                }
            }
        }
    }
    findFocusableElements() {
        const results = new Set();
        const focusableSelector = [
            'button:not([disabled]):not([tabindex="-1"])',
            'a[href]:not([tabindex="-1"])',
            'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
            'select:not([disabled]):not([tabindex="-1"])',
            'textarea:not([disabled]):not([tabindex="-1"])',
            'details:not([tabindex="-1"])',
            'area[href]:not([tabindex="-1"])',
            '[contentEditable=true]:not([tabindex="-1"])',
            'iframe:not([tabindex="-1"])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(',');
        const visited = new WeakSet();
        const traverse = (node) => {
            if (!node || visited.has(node))
                return;
            visited.add(node);
            if (node instanceof HTMLElement) {
                const style = window.getComputedStyle(node);
                const isVisible = style.display !== 'none' && style.visibility !== 'hidden';
                if (isVisible && node.matches(focusableSelector)) {
                    results.add(node);
                }
                if (node.shadowRoot) {
                    traverse(node.shadowRoot);
                }
                const shadow = node.shadowRoot;
                if (shadow) {
                    shadow.querySelectorAll(focusableSelector).forEach(el => {
                        if (el instanceof HTMLElement && window.getComputedStyle(el).display !== 'none') {
                            results.add(el);
                        }
                    });
                }
            }
            node.childNodes.forEach(traverse);
            if (typeof HTMLSlotElement !== 'undefined' && node instanceof HTMLSlotElement) {
                node.assignedNodes({ flatten: true }).forEach(traverse);
            }
        };
        traverse(this.el.shadowRoot ?? this.el);
        return Array.from(results);
    }
    focusFirstElement = () => {
        if (this.focusableElements.length > 0) {
            if (this.focusableElements.length > 1 && this.hasClose) {
                this.focusableElements[1].focus();
            }
            else {
                this.focusableElements[0].focus();
            }
        }
    };
    blurOuterElement = () => {
        const modal = this.el.shadowRoot?.querySelector('.ath-modal');
        modal?.focus();
    };
    componentDidLoad() {
        if (this.open) {
            this.openModal();
        }
    }
    trapFocus = e => {
        if (this.focusableElements.length === 0)
            return;
        const first = this.focusableElements[0];
        const last = this.focusableElements[this.focusableElements.length - 1];
        const realActiveElement = this.getDeepActiveElement();
        if (e.shiftKey) {
            if (realActiveElement === first) {
                e.preventDefault();
                last.focus();
            }
        }
        else {
            if (realActiveElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    };
    getDeepActiveElement(doc = document) {
        let active = doc.activeElement;
        while (active?.shadowRoot && active.shadowRoot.activeElement) {
            active = active.shadowRoot.activeElement;
        }
        return active;
    }
    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget && this.clickOutsideClose) {
            this.closeModal();
        }
    };
    getAccesibilityAttributes = () => ({
        'role': this.isAlert ? 'alertdialog' : 'dialog',
        'aria-describedby': this.subtitleText ? 'subtitleTextId' : undefined,
        'aria-labelledby': this.headingText ? 'headlineTextId' : undefined,
        'aria-modal': 'true',
        'tabindex': '-1',
    });
    getDialogClassNames = () => ({
        'ath-modal': true,
        'ath-modal--fullscreen': this.fullScreen,
        [`ath-modal--${this.size}`]: !!this.size,
    });
    getHeaderClassNames = () => ({
        'ath-modal-header': true,
        'ath-modal-header--alert': this.isAlert,
    });
    getDialogStyle = () => ({
        maxHeight: this.maxHeight || 'unset',
        maxWidth: this.maxWidth || 'unset',
    });
    renderHeading = () => {
        const HeadingTitle = getHeading(this.headingLevel);
        return (h(HeadingTitle, { class: "ath-modal-header-text-title", id: "headlineTextId" }, this.headingText));
    };
    renderHeadingSubtitle = () => {
        return (h("div", { class: "ath-modal-header-text-subtitle", id: "subtitleTextId" }, this.subtitleText));
    };
    render() {
        if (!this.open) {
            return h(Host, null);
        }
        return (h(Host, null, h("div", { class: "backdrop", onClick: this.handleBackdropClick }, h("div", { ...this.getAccesibilityAttributes(), class: this.getDialogClassNames(), style: this.getDialogStyle() }, h("div", { class: this.getHeaderClassNames() }, this.isAlert && h(FcPictogram, { name: `illu_${this.appearance}_msg` }), h("div", { class: "ath-modal-header-text" }, this.headingText && this.renderHeading(), this.subtitleText && this.renderHeadingSubtitle()), this.hasClose && (h("div", { class: "ath-modal-header-close" }, h(FcButtonComp, { icon: "close_small", color: "default", iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Small, onClick: () => this.closeModal(), buttonAriaLabel: this.closeAriaLabel })))), this.hasDivider && h("ath-divider", null), h("div", { class: "scrollable-slot ath-scroll" }, h("slot", { name: "body" })), h("slot", { name: "footer" })))));
    }
    static get is() { return "ath-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "attribute": "appearance",
                "mutable": false,
                "complexType": {
                    "original": "ModalAppearanceType",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "ModalAppearanceType": {
                            "location": "import",
                            "path": "./modal.model",
                            "id": "src/components/modal/modal.model.ts::ModalAppearanceType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the illustration used when the prop isAlert is set to true"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ModalAppearance.Error"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
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
                    "text": "Indicates whether the modal should automatically focus the first interactive element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "clickOutsideClose": {
                "type": "boolean",
                "attribute": "click-outside-close",
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
                    "text": "Indicates whether the modal should close when clicking outside"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fullScreen": {
                "type": "boolean",
                "attribute": "full-screen",
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
                    "text": "Indicates whether the modal will occupy the full screen"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hasClose": {
                "type": "boolean",
                "attribute": "has-close",
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
                    "text": "Indicates whether the modal has a close (X) button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "hasDivider": {
                "type": "boolean",
                "attribute": "has-divider",
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
                    "text": "Indicates whether there is a divider between the header and the slots"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "headingLevel": {
                "type": "number",
                "attribute": "heading-level",
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
                    "text": "Indicates the heading level of the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "2"
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
                    "text": "Indicates the title text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "isAlert": {
                "type": "boolean",
                "attribute": "is-alert",
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
                    "text": "Indicates whether the modal has role \"Alert\", and interrupts the screen reader flow"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "maxHeight": {
                "type": "string",
                "attribute": "max-height",
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
                    "text": "Indicates the maximum height of the modal"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "maxWidth": {
                "type": "string",
                "attribute": "max-width",
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
                    "text": "Indicates the maximum width of the modal"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                    "text": "Indicates whether the modal is displayed by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ModalSizeType",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "ModalSizeType": {
                            "location": "import",
                            "path": "./modal.model",
                            "id": "src/components/modal/modal.model.ts::ModalSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Differentiates the modal size between sm and md"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ModalSize.Medium"
            },
            "subtitleText": {
                "type": "string",
                "attribute": "subtitle-text",
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
                    "text": "Indicates the subtitle text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "closeAriaLabel": {
                "type": "string",
                "attribute": "close-aria-label",
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
                    "text": "Accessible text for the close (X) button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athOpened",
                "name": "athOpened",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal is opened"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athClosed",
                "name": "athClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal is closed"
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
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Method to open the modal",
                    "tags": []
                }
            },
            "closeModal": {
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
                    "text": "Method to close the modal",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
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
//# sourceMappingURL=modal.js.map
