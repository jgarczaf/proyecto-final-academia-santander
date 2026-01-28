import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { g as getHeading } from './p-wtmkpk46.js';
import { I as IconSize } from './p-BnU0zKUi.js';
import { B as ButtonIconPosition } from './p-D0e48E4w.js';
import { F as FcButtonComp } from './p-Dy-gUSQt.js';
import { d as defineCustomElement$2 } from './p-DbpanEQL.js';

const AlertColor = {
    Info: 'info',
    Danger: 'danger',
    Warning: 'warning',
    Success: 'success',
};
const AlertColorClose = {
    Danger: 'error'};
const AlertType = {
    Section: 'section',
};

const alertCss = ":host {\n  --col-gap: var(--ath-spacing-alert-col-gap);\n  --row-gap: var(--ath-spacing-alert-text-row-gap);\n}\n:host .ath-alert {\n  --padding: var(--ath-spacing-alert-padding);\n}\n:host .ath-alert__section {\n  --border-radius: var(--ath-border-radius-alert-default);\n  --align-items: flex-end;\n  --flex-direction: column;\n  --gap: var(--ath-spacing-alert-row-gap);\n}\n:host .ath-alert__page {\n  --border-radius: var(--ath-border-radius-alert-square);\n  --align-items: flex-start;\n  --gap: var(--ath-spacing-alert-col-gap);\n}\n:host .ath-alert__button {\n  --button-padding-right: var(--ath-spacing-alert-button-padding-right);\n}\n@container (max-width: 440px) {\n  :host .ath-alert__container ::slotted(ath-button[slot=button]) {\n    --button-width: 100%;\n  }\n  :host .ath-alert__container .ath-alert__wrapper {\n    --flex-direction: column;\n  }\n}\n:host .ath-alert--info {\n  --background-color: var(--ath-color-alert-bg-info);\n  --border-color: var(--ath-color-alert-border-info);\n  --font-color: var(--ath-color-alert-fg-info);\n}\n:host .ath-alert--info .ath-alert__close ath-button::part(button-styles) {\n  color: var(--ath-color-alert-button-close-info);\n  border: none;\n}\n:host .ath-alert--info .ath-alert__close ath-button:hover::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-hovered);\n}\n:host .ath-alert--info .ath-alert__close ath-button:active::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-pressed);\n}\n:host .ath-alert--success {\n  --background-color: var(--ath-color-alert-bg-success);\n  --border-color: var(--ath-color-alert-border-success);\n  --font-color: var(--ath-color-alert-fg-success);\n}\n:host .ath-alert--success .ath-alert__close ath-button::part(button-styles) {\n  color: var(--ath-color-alert-button-close-success);\n  border: none;\n}\n:host .ath-alert--success .ath-alert__close ath-button:hover::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-hovered);\n}\n:host .ath-alert--success .ath-alert__close ath-button:active::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-pressed);\n}\n:host .ath-alert--warning {\n  --background-color: var(--ath-color-alert-bg-warning);\n  --border-color: var(--ath-color-alert-border-warning);\n  --font-color: var(--ath-color-alert-fg-warning);\n}\n:host .ath-alert--warning .ath-alert__close ath-button::part(button-styles) {\n  color: var(--ath-color-alert-button-close-warning);\n  border: none;\n}\n:host .ath-alert--warning .ath-alert__close ath-button:hover::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-hovered);\n}\n:host .ath-alert--warning .ath-alert__close ath-button:active::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-pressed);\n}\n:host .ath-alert--danger {\n  --background-color: var(--ath-color-alert-bg-danger);\n  --border-color: var(--ath-color-alert-border-danger);\n  --font-color: var(--ath-color-alert-fg-danger);\n}\n:host .ath-alert--danger .ath-alert__close ath-button::part(button-styles) {\n  color: var(--ath-color-alert-button-close-danger);\n  border: none;\n}\n:host .ath-alert--danger .ath-alert__close ath-button:hover::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-hovered);\n}\n:host .ath-alert--danger .ath-alert__close ath-button:active::part(button-styles) {\n  background-color: var(--ath-color-bg-alpha-pressed);\n}\n\n:host .ath-button_comp--size-xs {\n  --button-padding: var(--ath-spacing-button-padding-around-xs);\n}\n:host .ath-button_comp--size-sm {\n  --button-padding: var(--ath-spacing-button-padding-around-xs);\n}\n:host .ath-button_comp--size-md {\n  --button-padding: var(--ath-spacing-button-padding-around-xs);\n}\n:host .ath-button_comp--size-lg {\n  --button-padding: var(--ath-spacing-button-padding-around-sm);\n}\n\n.ath-button_comp {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: var(--ath-border-radius-button);\n  border: none;\n  background: none;\n  padding: var(--button-padding);\n  outline: none;\n  transition: background 0.5s;\n  cursor: pointer;\n}\n.ath-button_comp:focus {\n  background: var(--ath-color-bg-alpha-focus);\n  box-shadow: 0px 0px 0px 2px var(--ath-color-border-focus);\n}\n.ath-button_comp:hover {\n  background: var(--ath-color-bg-alpha-hovered);\n}\n.ath-button_comp:active {\n  background: var(--ath-color-bg-alpha-pressed);\n  box-shadow: none;\n}\n.ath-button_comp--disabled {\n  pointer-events: none;\n  color: var(--ath-color-button-icon-disabled);\n}\n\n:host .ath-alert {\n  display: flex;\n  position: relative;\n  width: auto;\n  padding: var(--padding);\n  gap: var(--gap);\n  border: var(--ath-border-width-alert) solid var(--border-color);\n  background: var(--background-color);\n  color: var(--font-color);\n  border-radius: var(--border-radius);\n  flex-direction: var(--flex-direction);\n  align-items: var(--align-items);\n  font-family: var(--ath-font-family-body);\n  font-size: var(--ath-font-size-body-md);\n  font-style: normal;\n}\n:host .ath-alert__page {\n  border: none;\n  border-bottom: var(--ath-border-width-alert) solid var(--border-color);\n}\n:host .ath-alert__content {\n  display: flex;\n  align-items: flex-start;\n  align-self: stretch;\n  gap: var(--col-gap);\n}\n:host .ath-alert__icon {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n:host .ath-alert__wrapper {\n  display: flex;\n  flex-direction: var(--flex-direction);\n  align-items: flex-start;\n  justify-content: var(--justify-content);\n  gap: var(--row-gap);\n  flex: 1 0 0;\n  font-family: var(--ath-font-family-body);\n  font-size: var(--ath-font-size-body-md);\n  padding-top: var(--ath-spacing-alert-text-padding-top);\n  font-weight: var(--ath-font-weight-body-regular);\n  line-height: var(--ath-font-line-height-body);\n}\n:host .ath-alert__title {\n  padding-top: var(--ath-spacing-alert-title-padding-top);\n  gap: var(--ath-spacing-alert-title-padding-top);\n  font-family: var(--ath-font-family-heading);\n  font-weight: var(--ath-font-weight-heading);\n  line-height: var(--ath-font-line-height-heading-6);\n  font-size: var(--ath-font-size-heading-6);\n  margin: 0;\n}\n:host .ath-alert__description {\n  font-family: var(--ath-font-family-body);\n  font-size: var(--ath-font-size-body-md);\n  padding-top: var(--ath-spacing-alert-text-padding-top);\n  font-weight: var(--ath-font-weight-body-regular);\n  line-height: var(--ath-font-line-height-body);\n}\n:host .ath-alert__close {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  gap: 8px;\n}\n:host .ath-alert__button {\n  display: flex;\n  padding-right: var(--button-padding-right);\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n}\n:host .ath-alert__frame {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0;\n  gap: var(--row-gap);\n}\n:host .ath-alert__container {\n  container-type: inline-size;\n}\n:host ::slotted(ath-button[slot=button]) {\n  width: var(--button-width);\n  display: flex;\n  justify-content: center;\n}";

let tooltipSequence = 0;
const AthAlert$1 = /*@__PURE__*/ proxyCustomElement(class AthAlert extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
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
    get host() { return this; }
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
    static get watchers() { return {
        "isUrgent": ["updateAlertRole"],
        "hasButtonSlotElements": ["updateAlertRole"]
    }; }
    static get style() { return alertCss; }
}, [257, "ath-alert", {
        "type": [513],
        "color": [1],
        "description": [1],
        "headingText": [1, "heading-text"],
        "isUrgent": [4, "is-urgent"],
        "headingLevel": [2, "heading-level"],
        "hasClose": [4, "has-close"],
        "closeAriaLabel": [1, "close-aria-label"],
        "isVisible": [32],
        "alertRole": [32],
        "isSmall": [32]
    }, undefined, {
        "isUrgent": ["updateAlertRole"],
        "hasButtonSlotElements": ["updateAlertRole"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-alert", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthAlert$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthAlert = AthAlert$1;
const defineCustomElement = defineCustomElement$1;

export { AthAlert, defineCustomElement };
//# sourceMappingURL=ath-alert.js.map

//# sourceMappingURL=ath-alert.js.map