import { h } from './p-D-i5s4zr.js';
import { t as transformIconSize, a as IconType } from './p-BnU0zKUi.js';

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
    return (h("button", { class: getButtonClass(), disabled: props.disabled, "aria-label": props.buttonAriaLabel, onClick: handleClick, onFocus: props.onFocus, onBlur: props.onBlur, tabIndex: Number(buttonTabIndex) }, props.icon && h("ath-icon", { icon: props.icon, size: transformIconSize(IconType.ButtonComp, props.size), color: props.disabled ? 'disabled' : props.color })));
};

export { FcButtonComp as F };
//# sourceMappingURL=p-Dy-gUSQt.js.map

//# sourceMappingURL=p-Dy-gUSQt.js.map