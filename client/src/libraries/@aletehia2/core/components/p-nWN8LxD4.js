import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { b as Icons } from './p-BnU0zKUi.js';
import { d as defineCustomElement$1 } from './p-DbpanEQL.js';

const tooltipCss = "[size=xs].sc-ath-tooltip-trigger-h{display:block;height:16px}[size=sm].sc-ath-tooltip-trigger-h{display:block;height:20px}[size=md].sc-ath-tooltip-trigger-h{display:block;height:24px}[size=lg].sc-ath-tooltip-trigger-h{display:block;height:32px}.sc-ath-tooltip-trigger-h .ath-tooltip--primary.sc-ath-tooltip-trigger{--background-color:var(--ath-color-tooltip-bg-primary);--color:var(--ath-color-tooltip-fg)}.sc-ath-tooltip-trigger-h .ath-tooltip--secondary.sc-ath-tooltip-trigger{--background-color:var(--ath-color-tooltip-bg-secondary);--color:var(--ath-color-tooltip-fg)}.sc-ath-tooltip-trigger-h{width:fit-content}.sc-ath-tooltip-trigger-h .ath-tooltip-container.sc-ath-tooltip-trigger{position:relative;text-align:center;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:100%;width:fit-content;height:fit-content}.sc-ath-tooltip-trigger-h .ath-tooltip.sc-ath-tooltip-trigger{--tooltip-arrow-translation:12px;line-height:150%;position:absolute;color:var(--color);background-color:var(--background-color);border-radius:var(--ath-border-radius-tooltip);font-size:var(--ath-font-size-body-md);text-align:center;white-space:nowrap;z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3s ease;visibility:hidden;max-width:var(--max-width);white-space:normal;width:max-content;padding-top:var(--ath-spacing-tooltip-padding-y);padding-right:var(--ath-spacing-tooltip-padding-x);padding-bottom:var(--ath-spacing-tooltip-padding-y);padding-left:var(--ath-spacing-tooltip-padding-x)}.sc-ath-tooltip-trigger-h .ath-tooltip--visible.sc-ath-tooltip-trigger{opacity:1;pointer-events:auto;visibility:visible}.sc-ath-tooltip-trigger-h .ath-tooltip--clickable.sc-ath-tooltip-trigger:hover{opacity:1;pointer-events:auto;visibility:visible;cursor:pointer}.sc-ath-tooltip-trigger-h .ath-tooltip.sc-ath-tooltip-trigger::after{content:\"\";position:absolute;width:11.3px;height:11.3px;transform:rotate(45deg);background-color:var(--background-color)}.sc-ath-tooltip-trigger-h .ath-tooltip--no-arrow.sc-ath-tooltip-trigger::after{display:none}.sc-ath-tooltip-trigger-h .ath-tooltip--top.sc-ath-tooltip-trigger::after{bottom:-5px;right:calc(50% - 6px);border-radius:0px 0px 2px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip--right.sc-ath-tooltip-trigger::after{top:50%;left:-9px;border-radius:0px 0px 0px 2px;transform:rotate(45deg) translateY(-50%)}.sc-ath-tooltip-trigger-h .ath-tooltip--bottom.sc-ath-tooltip-trigger::after{top:-5px;right:calc(50% - 6px);border-radius:2px 0px 0px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip--left.sc-ath-tooltip-trigger::after{top:50%;right:-2px;border-radius:0px 2px 0px 0px;transform:rotate(45deg) translateY(-50%)}.sc-ath-tooltip-trigger-h .ath-tooltip--top-left.sc-ath-tooltip-trigger::after{bottom:-5px;right:calc(2px + var(--tooltip-arrow-translation));border-radius:0px 0px 2px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip--top-right.sc-ath-tooltip-trigger::after{bottom:-5px;left:calc(2px + var(--tooltip-arrow-translation));border-radius:0px 0px 2px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip--bottom-left.sc-ath-tooltip-trigger::after{top:-5px;right:calc(2px + var(--tooltip-arrow-translation));border-radius:2px 0px 0px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip--bottom-right.sc-ath-tooltip-trigger::after{top:-5px;left:calc(2px + var(--tooltip-arrow-translation));border-radius:2px 0px 0px 0px}.sc-ath-tooltip-trigger-h .ath-tooltip-trigger.sc-ath-tooltip-trigger{display:flex;cursor:pointer}.sc-ath-tooltip-trigger-h .ath-tooltip-trigger.sc-ath-tooltip-trigger .ath-tooltip-container.sc-ath-tooltip-trigger{display:flex}.sc-ath-tooltip-trigger-h:focus,.sc-ath-tooltip-trigger-h:focus-visible{border-radius:var(--ath-border-radius-tooltip-trigger);box-shadow:0px 0px 0px 2px var(--ath-color-border-focus);display:block;outline:none}";

const TooltipTrigger = /*@__PURE__*/ proxyCustomElement(class TooltipTrigger extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.athClick = createEvent(this, "athClick");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
    }
    get el() { return this; }
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
    static get style() { return tooltipCss; }
}, [258, "ath-tooltip-trigger", {
        "icon": [1],
        "size": [513],
        "ariaLabel": [1, "aria-label"]
    }, [[0, "click", "handleKeyDown"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-tooltip-trigger", "ath-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-tooltip-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TooltipTrigger);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { TooltipTrigger as T, defineCustomElement as d };
//# sourceMappingURL=p-nWN8LxD4.js.map

//# sourceMappingURL=p-nWN8LxD4.js.map