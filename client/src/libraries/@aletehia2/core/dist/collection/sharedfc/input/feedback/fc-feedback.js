import { h } from "@stencil/core";
const feedBackIcons = {
    none: null,
    error: { icon: 'error_solid', color: 'error' },
    success: { icon: 'check_2_solid', color: 'success' },
    warning: { icon: 'exclamation_solid', color: 'warning' },
};
export const FcInputFeedback = props => {
    const iconName = feedBackIcons[props.type].icon;
    const iconColor = feedBackIcons[props.type].color;
    const getFeedbackClass = () => ({
        'ath-input__feedback': true,
        [`ath-input__feedback--${props.type}`]: !!props.type,
    });
    return (!!props.text && (h("div", { class: getFeedbackClass(), "aria-live": "polite", id: props.id }, h("ath-icon", { icon: iconName, color: iconColor, size: "sm" }), h("span", { class: "padding" }, props.text))));
};
//# sourceMappingURL=fc-feedback.js.map
