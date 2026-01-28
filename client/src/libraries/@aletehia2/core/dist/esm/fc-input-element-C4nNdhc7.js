import { h } from './index-D2-yfY-d.js';
import { e as attrString, d as attrBoolean, f as attrNumber, a as InputFeedbackTypes } from './input-text.model-BV9c4BOf.js';
import { I as IconSize, b as Icons } from './icons-BnU0zKUi.js';
import { B as ButtonIconPosition } from './button.model-D0e48E4w.js';
import { F as FcButtonComp } from './fc-button-comp-Bdbs4R8s.js';
import { I as IconColor } from './icon.model-hrbYB415.js';

const getInputContainerClass = (props) => ({
    'ath-input__field': true,
    [`ath-input__field--${props.feedback}`]: !!props.feedback,
    'ath-input__field--readonly': props.readonly,
    'ath-input__field--disabled': props.disabled,
    [`ath-input__field--size-${props.size}`]: !!props.size,
});
const getUnitClass = (props) => ({
    'ath-input--unit': true,
    [`ath-input--unit--disabled`]: props.disabled,
});
const getAriaDescribedBy = (props) => {
    const inputHintId = props.helperId ?? `${props.inputId}-hint`;
    const inputHintSROnlyId = props.helperIdSROnly ?? `${props.inputId}-hintSROnly`;
    const inputFeedbackId = props.feedbackId ?? `${props.inputId}-feedback`;
    const descriptions = {};
    if (!!props.helperText)
        descriptions[inputHintId] = inputHintId;
    if (!!props.helperTextSROnly)
        descriptions[inputHintSROnlyId] = inputHintSROnlyId;
    if (props.feedback != 'none' && !!props.feedbackText)
        descriptions[inputFeedbackId] = inputFeedbackId;
    return descriptions;
};
const getInputAttributes = (props) => {
    const inputUnitId = `${props.inputId}-unit`;
    const ariaDescribedBy = Object.keys(getAriaDescribedBy(props)).join(' ') == '' ? undefined : Object.keys(getAriaDescribedBy(props)).join(' ');
    const ariaLabelledBy = props.unit && props.labelId ? `${props.labelId} ${props.inputId} ${inputUnitId}` : '';
    const role = props.role ?? undefined;
    return {
        'id': attrString(props.inputId),
        'icon': attrString(props.icon),
        'iconPosition': attrString(props.iconPosition),
        'type': attrString(props.type === 'search' ? 'text' : props.type),
        'labelClearButton': attrString(props.buttonAriaLabel),
        'maxlength': attrNumber(props.maxlength),
        'disabled': props.disabled,
        'readonly': props.readonly && !props.disabled,
        'tabindex': props.disabled ? '-1' : props.tabindex,
        'autocomplete': attrString(props.autocomplete),
        'min': attrNumber(props.min),
        'max': attrNumber(props.max),
        'step': attrNumber(props.step),
        'name': attrString(props.name),
        'pattern': attrString(props.pattern),
        'placeholder': attrString(props.placeholder),
        'value': attrString(props.value, true),
        'aria-label': attrString(props.inputAriaLabel),
        'aria-labelledby': attrString(ariaLabelledBy),
        'aria-required': attrBoolean(props.required, false),
        'aria-invalid': attrBoolean(props.feedback === InputFeedbackTypes.Error, false),
        'aria-describedby': attrString(ariaDescribedBy, false),
        'aria-disabled': attrBoolean(props.disabled, false),
        'aria-readonly': attrBoolean(props.readonly, false),
        'aria-activedescendant': attrString(props.ariaActiveDescendant),
        'role': role,
        'aria-expanded': attrBoolean(props.ariaExpanded),
        'aria-controls': attrString(props.ariaControls),
        'aria-haspopup': attrString(props.ariaHaspopup),
    };
};
const getIconRight = (props) => {
    if (props.type === 'search') {
        return Icons.Search;
    }
    return props.iconPosition === 'right' && props.icon ? props.icon : undefined;
};
const isEmptyValue = (value) => {
    return (value || '').trim().length === 0;
};
const showInputButton = (props) => {
    if (!props.hasButton) {
        return false;
    }
    if (isEmptyValue(props.value) && !props.showButtonWhenEmpty) {
        return false;
    }
    if (props.disabled && !props.showButtonWhenDisabled) {
        return false;
    }
    if (props.readonly && !props.showButtonWhenReadonly) {
        return false;
    }
    return true;
};
const FcInputElement = props => {
    const inputAttributes = getInputAttributes(props);
    const iconRight = getIconRight(props);
    const iconButton = props.buttonIcon || Icons.InputClearValue;
    const showButton = showInputButton(props);
    const inputUnitId = `${props.inputId}-unit`;
    return (h("div", { class: getInputContainerClass(props) }, !!props.icon && props.iconPosition === 'left' && h("ath-icon", { icon: props.icon, size: "md" }), h("input", { class: "ath-input__text--value", ref: (el) => props.onInputRef(el), ...inputAttributes, onInput: props.onInput, onFocus: props.onFocus, onBlur: props.onBlur, onChange: props.onChange, onKeyDown: props.onKeyDown }), !!props.unit && (h("span", { id: inputUnitId, class: getUnitClass(props) }, h("span", { "aria-hidden": "true" }, props.unit), " ", h("span", { class: "ath-visibility-hidden" }, props.unitAriaLabel || props.unit))), showButton && (h(FcButtonComp, { buttonAriaLabel: props.buttonAriaLabel, color: props.disabled ? IconColor.Disabled : IconColor.Default, disabled: props.disabled || props.readonly, icon: iconButton, iconPosition: ButtonIconPosition.IconOnly, size: IconSize.Extrasmall, onClick: props.onClickButton })), iconRight && h("ath-icon", { icon: iconRight, size: IconSize.Medium })));
};

export { FcInputElement as F };
//# sourceMappingURL=fc-input-element-C4nNdhc7.js.map

//# sourceMappingURL=fc-input-element-C4nNdhc7.js.map