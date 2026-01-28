import { h } from './index-D2-yfY-d.js';

const feedBackIcons = {
    none: null,
    error: { icon: 'error_solid', color: 'error' },
    success: { icon: 'check_2_solid', color: 'success' },
    warning: { icon: 'exclamation_solid', color: 'warning' },
};
const FcInputFeedback = props => {
    const iconName = feedBackIcons[props.type].icon;
    const iconColor = feedBackIcons[props.type].color;
    const getFeedbackClass = () => ({
        'ath-input__feedback': true,
        [`ath-input__feedback--${props.type}`]: !!props.type,
    });
    return (!!props.text && (h("div", { class: getFeedbackClass(), "aria-live": "polite", id: props.id }, h("ath-icon", { icon: iconName, color: iconColor, size: "sm" }), h("span", { class: "padding" }, props.text))));
};

const FcInputHelperText = props => {
    return (h("div", { class: "ath-input__helper-text", id: props.id }, h("span", null, props.text)));
};

export { FcInputHelperText as F, FcInputFeedback as a };
//# sourceMappingURL=fc-helper-Cb62a4Uy.js.map

//# sourceMappingURL=fc-helper-Cb62a4Uy.js.map