import { h } from "@stencil/core";
import { attrBoolean, attrNumber, attrString } from "../../../utils/helper/index";
import { InputFeedbackTypes } from "../../../components/input-text/input-text.model";
const getInputTextareaContainerClass = (props) => ({
    'ath-input__field': true,
    'ath-input__field--textarea': true,
    [`ath-input__field--${props.feedback}`]: !!props.feedback,
    'ath-input__field--readonly': props.readonly,
    'ath-input__field--disabled': props.disabled,
    [`ath-input__field--size-${props.size}`]: !!props.size,
});
const getTabindex = (props) => {
    return !!props.disabled ? '-1' : props.tabindex;
};
const getInputTextareaAttributes = (props) => {
    const inputHintId = `${props.inputId}-hint`;
    const inputFeedbackId = `${props.inputId}-feedback`;
    const ariaDescribedBy = (props.helperText ? inputHintId : '') + ' ' + (props.feedback ? inputFeedbackId : '');
    return {
        'id': attrString(props.inputId),
        'maxlength': attrNumber(props.maxlength),
        'disabled': props.disabled,
        'readonly': props.readonly && !props.disabled,
        'tabindex': attrString(getTabindex(props)),
        'autocomplete': attrString(props.autocomplete),
        'name': attrString(props.name),
        'placeholder': attrString(props.placeholder),
        'value': attrString(props.value),
        'cols': props.cols,
        'rows': props.rows,
        'aria-label': attrString(props.inputAriaLabel),
        'aria-required': attrBoolean(props.required, false),
        'aria-invalid': attrBoolean(props.feedback === InputFeedbackTypes.Error, false),
        'aria-describedby': attrString(ariaDescribedBy.trim(), false),
        'aria-disabled': attrBoolean(props.disabled, false),
        'aria-readonly': attrBoolean(props.readonly, false),
    };
};
export const FcInputTextareaElement = props => {
    const inputAttributes = getInputTextareaAttributes(props);
    return (h("div", { class: getInputTextareaContainerClass(props) }, h("textarea", { class: "ath-input__text--value", ref: (el) => props.onInputRef(el), ...inputAttributes, onInput: props.onInput, onFocus: props.onFocus, onBlur: props.onBlur, onChange: props.onChange })));
};
//# sourceMappingURL=fc-input-textarea-element.js.map
