'use strict';

var index = require('./index--hWT2F8k.js');
var inputText_model = require('./input-text.model-Cymv4OQZ.js');
var icons = require('./icons-DfQaoUal.js');
var button_model = require('./button.model-5JSyxGxn.js');
var fcButtonComp = require('./fc-button-comp-BZ-Qb6nS.js');
var icon_model = require('./icon.model-C8aFOv1-.js');

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
        'id': inputText_model.attrString(props.inputId),
        'icon': inputText_model.attrString(props.icon),
        'iconPosition': inputText_model.attrString(props.iconPosition),
        'type': inputText_model.attrString(props.type === 'search' ? 'text' : props.type),
        'labelClearButton': inputText_model.attrString(props.buttonAriaLabel),
        'maxlength': inputText_model.attrNumber(props.maxlength),
        'disabled': props.disabled,
        'readonly': props.readonly && !props.disabled,
        'tabindex': props.disabled ? '-1' : props.tabindex,
        'autocomplete': inputText_model.attrString(props.autocomplete),
        'min': inputText_model.attrNumber(props.min),
        'max': inputText_model.attrNumber(props.max),
        'step': inputText_model.attrNumber(props.step),
        'name': inputText_model.attrString(props.name),
        'pattern': inputText_model.attrString(props.pattern),
        'placeholder': inputText_model.attrString(props.placeholder),
        'value': inputText_model.attrString(props.value, true),
        'aria-label': inputText_model.attrString(props.inputAriaLabel),
        'aria-labelledby': inputText_model.attrString(ariaLabelledBy),
        'aria-required': inputText_model.attrBoolean(props.required, false),
        'aria-invalid': inputText_model.attrBoolean(props.feedback === inputText_model.InputFeedbackTypes.Error, false),
        'aria-describedby': inputText_model.attrString(ariaDescribedBy, false),
        'aria-disabled': inputText_model.attrBoolean(props.disabled, false),
        'aria-readonly': inputText_model.attrBoolean(props.readonly, false),
        'aria-activedescendant': inputText_model.attrString(props.ariaActiveDescendant),
        'role': role,
        'aria-expanded': inputText_model.attrBoolean(props.ariaExpanded),
        'aria-controls': inputText_model.attrString(props.ariaControls),
        'aria-haspopup': inputText_model.attrString(props.ariaHaspopup),
    };
};
const getIconRight = (props) => {
    if (props.type === 'search') {
        return icons.Icons.Search;
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
    const iconButton = props.buttonIcon || icons.Icons.InputClearValue;
    const showButton = showInputButton(props);
    const inputUnitId = `${props.inputId}-unit`;
    return (index.h("div", { class: getInputContainerClass(props) }, !!props.icon && props.iconPosition === 'left' && index.h("ath-icon", { icon: props.icon, size: "md" }), index.h("input", { class: "ath-input__text--value", ref: (el) => props.onInputRef(el), ...inputAttributes, onInput: props.onInput, onFocus: props.onFocus, onBlur: props.onBlur, onChange: props.onChange, onKeyDown: props.onKeyDown }), !!props.unit && (index.h("span", { id: inputUnitId, class: getUnitClass(props) }, index.h("span", { "aria-hidden": "true" }, props.unit), " ", index.h("span", { class: "ath-visibility-hidden" }, props.unitAriaLabel || props.unit))), showButton && (index.h(fcButtonComp.FcButtonComp, { buttonAriaLabel: props.buttonAriaLabel, color: props.disabled ? icon_model.IconColor.Disabled : icon_model.IconColor.Default, disabled: props.disabled || props.readonly, icon: iconButton, iconPosition: button_model.ButtonIconPosition.IconOnly, size: icons.IconSize.Extrasmall, onClick: props.onClickButton })), iconRight && index.h("ath-icon", { icon: iconRight, size: icons.IconSize.Medium })));
};

exports.FcInputElement = FcInputElement;
//# sourceMappingURL=fc-input-element-C2syfyjo.js.map

//# sourceMappingURL=fc-input-element-C2syfyjo.js.map