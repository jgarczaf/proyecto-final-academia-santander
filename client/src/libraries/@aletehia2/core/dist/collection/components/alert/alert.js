import { Host, h } from "@stencil/core";
import { AlertColor, AlertColorClose, AlertType } from "./alert.model";
import { getHeading } from "../../utils/helper/heading";
import { FcButtonComp } from "../../sharedfc/input/index";
import { IconSize } from "../../utils/helper/index";
import { ButtonIconPosition } from "../button/button.model";
let tooltipSequence = 0;
export class AthAlert {
    hostId = ++tooltipSequence;
    titleId = `alert-title-${this.hostId}`;
    descriptionId = `alert-description-${this.hostId}`;
    /**
     * Tipo de alert
     */
    type = AlertType.Section;
    /**
     * The color of the message
     */
    color = AlertColor.Info;
    /**
     * Descripcion del alert
     */
    description;
    /**
     * Titulo del alert
     */
    headingText;
    /**
     * Titulo del alert
     */
    isUrgent = false;
    /**
     * Nivel de heading del título
     */
    headingLevel = 6;
    /**
     * Has button close
     */
    hasClose = true;
    /**
     * Close button aria-label
     */
    closeAriaLabel = 'Cerrar alerta';
    isVisible = true;
    alertRole;
    isSmall = false;
    updateAlertRole() {
        this.alertRole = this.getRole();
    }
    host;
    hasButtonSlotElements = true;
    closeAlert = () => {
        this.isVisible = false; // Hide the alert when close button is clicked
    };
    getRole = () => (this.isUrgent ? 'alert' : 'status');
    resizeObserver;
    getAttributes = () => ({
        'aria-hidden': !this.isVisible ? 'true' : 'false',
        'role': this.alertRole,
        'aria-labelledby': this.headingText ? this.titleId : undefined,
        'aria-describedby': this.description ? this.descriptionId : undefined,
    });
    getClassNames = () => ({
        'ath-alert': true,
        [`ath-alert--${this.color}`]: !!this.color,
        'ath-alert--hidden': !this.isVisible,
        [`ath-alert__${this.type}`]: !!this.type,
    });
    getIcon = () => {
        if (this.color == AlertColor.Info) {
            return 'info_solid';
        }
        else if (this.color == AlertColor.Warning) {
            return 'exclamation_solid';
        }
        else if (this.color == AlertColor.Success) {
            return 'check_2_solid';
        }
        else {
            return 'error_solid';
        }
    };
    renderIcon = () => {
        return h("ath-icon", { size: "md", icon: this.getIcon(), color: "inherit" });
    };
    getIconColor = () => {
        if (this.color === AlertColor.Danger) {
            return AlertColorClose.Danger;
        }
        return this.color;
    };
    renderCloseButton = () => {
        return (h(FcButtonComp, { icon: "close_small", color: this.getIconColor(), iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Extrasmall, onClick: this.closeAlert, buttonAriaLabel: this.closeAriaLabel }));
    };
    renderDivIcon = () => {
        return h("div", { class: "ath-alert__icon" }, this.renderIcon());
    };
    renderDivCloseButton = () => {
        return h("div", { class: "ath-alert__close" }, this.renderCloseButton());
    };
    renderDivTitle = () => {
        const HeadingTitle = getHeading(this.headingLevel);
        return (h(HeadingTitle, { class: "ath-alert__title", id: this.titleId }, this.headingText));
    };
    renderDivDescription = () => {
        return (h("div", { class: "ath-alert__description", id: this.descriptionId }, this.description));
    };
    componentDidLoad() {
        const container = this.host.shadowRoot.querySelector('.ath-alert__container');
        if (container) {
            this.resizeObserver = new ResizeObserver(([entry]) => {
                this.isSmall = entry.contentRect.width < 440;
            });
            this.resizeObserver.observe(container);
        }
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
    }
    componentDidRender() {
        const buttonSlot = this.host.shadowRoot?.querySelector('slot[name="button"]');
        if (buttonSlot) {
            const assignedElements = buttonSlot.assignedElements();
            assignedElements.forEach(el => {
                if (el.tagName.toLowerCase() === 'ath-button') {
                    el.fullWidth = this.isSmall;
                }
            });
        }
    }
    renderSection = () => (h("div", { class: "ath-alert__container" }, h("div", { class: this.getClassNames() }, h("div", { class: "ath-alert__content" }, this.renderDivIcon(), h("div", { class: "ath-alert__wrapper" }, this.headingText && this.renderDivTitle(), this.description && this.renderDivDescription(), h("slot", null)), this.hasClose && this.renderDivCloseButton()), this.hasButtonSlotElements && h("slot", { name: "button" }))));
    renderPage = () => (h("div", { class: "ath-alert__container" }, h("div", { class: this.getClassNames() }, this.renderDivIcon(), h("div", { class: "ath-alert__wrapper" }, h("div", { class: "ath-alert__frame" }, this.headingText && this.renderDivTitle(), this.description && this.renderDivDescription(), h("slot", null)), this.hasButtonSlotElements && (h("div", { class: "ath-alert__button" }, h("slot", { name: "button" })))), this.hasClose && this.renderDivCloseButton())));
    componentWillLoad() {
        this.hasButtonSlotElements = !!this.host.querySelector('[slot="button"]');
        this.updateAlertRole();
    }
    render() {
        if (this.type === 'section') {
            return h(Host, { ...this.getAttributes() }, this.isVisible && this.renderSection());
        }
        else {
            return h(Host, { ...this.getAttributes() }, this.isVisible && this.renderPage());
        }
    }
    static get is() { return "ath-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "AlertTypes",
                    "resolved": "\"page\" | \"section\"",
                    "references": {
                        "AlertTypes": {
                            "location": "import",
                            "path": "./alert.model",
                            "id": "src/components/alert/alert.model.ts::AlertTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tipo de alert"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "AlertType.Section"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "AlertColors",
                    "resolved": "\"danger\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "AlertColors": {
                            "location": "import",
                            "path": "./alert.model",
                            "id": "src/components/alert/alert.model.ts::AlertColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "AlertColor.Info"
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                    "text": "Descripcion del alert"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Titulo del alert"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "isUrgent": {
                "type": "boolean",
                "attribute": "is-urgent",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Titulo del alert"
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
                    "text": "Nivel de heading del t\u00EDtulo"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "6"
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
                    "text": "Has button close"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
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
                    "text": "Close button aria-label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Cerrar alerta'"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "alertRole": {},
            "isSmall": {}
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "isUrgent",
                "methodName": "updateAlertRole"
            }, {
                "propName": "hasButtonSlotElements",
                "methodName": "updateAlertRole"
            }];
    }
}
//# sourceMappingURL=alert.js.map
