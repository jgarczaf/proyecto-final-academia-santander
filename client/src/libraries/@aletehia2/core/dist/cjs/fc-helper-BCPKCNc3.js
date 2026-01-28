'use strict';

var index = require('./index--hWT2F8k.js');

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
    return (!!props.text && (index.h("div", { class: getFeedbackClass(), "aria-live": "polite", id: props.id }, index.h("ath-icon", { icon: iconName, color: iconColor, size: "sm" }), index.h("span", { class: "padding" }, props.text))));
};

const FcInputHelperText = props => {
    return (index.h("div", { class: "ath-input__helper-text", id: props.id }, index.h("span", null, props.text)));
};

exports.FcInputFeedback = FcInputFeedback;
exports.FcInputHelperText = FcInputHelperText;
//# sourceMappingURL=fc-helper-BCPKCNc3.js.map

//# sourceMappingURL=fc-helper-BCPKCNc3.js.map