'use strict';

var index = require('./index--hWT2F8k.js');
var icons = require('./icons-DfQaoUal.js');

const FcButtonComp = props => {
    const getButtonClass = () => ({
        'ath-button_comp': true,
        [`ath-button_comp--size-${props.size}`]: !!props.size,
        'ath-button_comp--disabled': !!props.disabled,
    });
    const handleClick = (e) => {
        if (!props.disabled && !props.readonly && props.onClick) {
            e.stopPropagation();
            props.onClick();
        }
    };
    const buttonTabIndex = props.disabled ? '-1' : (props.tabindex ?? '0');
    return (index.h("button", { class: getButtonClass(), disabled: props.disabled, "aria-label": props.buttonAriaLabel, onClick: handleClick, onFocus: props.onFocus, onBlur: props.onBlur, tabIndex: Number(buttonTabIndex) }, props.icon && index.h("ath-icon", { icon: props.icon, size: icons.transformIconSize(icons.IconType.ButtonComp, props.size), color: props.disabled ? 'disabled' : props.color })));
};

exports.FcButtonComp = FcButtonComp;
//# sourceMappingURL=fc-button-comp-BZ-Qb6nS.js.map

//# sourceMappingURL=fc-button-comp-BZ-Qb6nS.js.map