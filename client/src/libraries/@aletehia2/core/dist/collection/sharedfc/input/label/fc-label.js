import { h } from "@stencil/core";
export const FcInputLabel = props => {
    const tooltipWidth = props.tooltipWidth || 0;
    return (h("div", { class: "ath-input__label" }, h("label", { id: props.id, htmlFor: props.htmlForId, class: "ath-input__label__wrapper" }, h("span", null, props.label), props.required && props.showRequired && (h("span", { "aria-hidden": "true", class: "required" }, "*"))), !!props.tooltipText && (h("ath-tooltip", { headingText: props.tooltipText, position: "top", "has-arrow": "true", color: "primary", "max-width": tooltipWidth }, h("ath-tooltip-trigger", { icon: "info", size: "md", "aria-label": props.tooltipText, onClick: ev => ev.stopPropagation(), onKeyDown: ev => ev.stopPropagation(), "aria-describedBy": props.htmlForId })))));
};
//# sourceMappingURL=fc-label.js.map
