'use strict';

var index = require('./index--hWT2F8k.js');

const FcInputLabel = props => {
    const tooltipWidth = props.tooltipWidth || 0;
    return (index.h("div", { class: "ath-input__label" }, index.h("label", { id: props.id, htmlFor: props.htmlForId, class: "ath-input__label__wrapper" }, index.h("span", null, props.label), props.required && props.showRequired && (index.h("span", { "aria-hidden": "true", class: "required" }, "*"))), !!props.tooltipText && (index.h("ath-tooltip", { headingText: props.tooltipText, position: "top", "has-arrow": "true", color: "primary", "max-width": tooltipWidth }, index.h("ath-tooltip-trigger", { icon: "info", size: "md", "aria-label": props.tooltipText, onClick: ev => ev.stopPropagation(), onKeyDown: ev => ev.stopPropagation(), "aria-describedBy": props.htmlForId })))));
};

exports.FcInputLabel = FcInputLabel;
//# sourceMappingURL=fc-label-C5PYDIHS.js.map

//# sourceMappingURL=fc-label-C5PYDIHS.js.map