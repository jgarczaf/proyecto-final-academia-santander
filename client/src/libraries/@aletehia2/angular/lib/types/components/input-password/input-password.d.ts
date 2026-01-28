import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { InputPasswordAutocomplete } from './input-password.models';
export declare class AthInputPassword implements ComponentInterface {
    private inputId;
    private inputHintId;
    private inputFeedbackId;
    private inputEl;
    private initialValue;
    el: HTMLElement | null;
    internals: ElementInternals;
    /**
     * The size of the input
     */
    size: import("./input-password.models").InputSize;
    /**
     * Shows a counter
     */
    counter: boolean;
    /**
     * SThe label of the counter
     */
    counterLabel: string;
    /**
     * The name of the input. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * Represents the caption of the input
     */
    label: string;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder: string;
    /**
     * Message to help the user fills the input value
     */
    helperText: string;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback: import("./input-password.models").InputFeedbackType;
    /**
     * The message for the feedback.
     */
    feedbackText: import("./input-password.models").InputFeedbackType;
    /**
     * Specifies the maximum number of characters allowed in the input element
     */
    maxlength: number;
    /**
     * Specifies a regular expression that the input element's value is checked
     */
    pattern: string;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    hideRequired: boolean;
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter: boolean;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled: boolean;
    watchDisabled(): void;
    /**
     * If true, the user cannot modify the value.
     */
    readonly: boolean;
    /**
     * Whether the input will be autocompleted.
     */
    autocomplete: InputPasswordAutocomplete;
    /**
     * Whether the input is focused on page load.
     */
    autofocus: boolean;
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel: string;
    /**
     * Set tabindex
     */
    inputTabindex: string;
    /**
     * The text to be shown in the tooltip
     */
    tooltipText: string;
    /**
     * The max width to the text in the tooltip
     */
    tooltipWidth: any;
    /**
     * The accesible text to button Show Password
     */
    labelShowPassword: string;
    /**
     * The accesible text to button Hide Password
     */
    labelHidePassword: string;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    updateValue(): void;
    /**
     * Method to set the focus on the input element
     */
    setFocus(): Promise<void>;
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<void>;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<string>;
    /**
     * Emitted when the component is cleared
     */
    athClear: EventEmitter<string>;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<string>;
    showPassword: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    private setInputValue;
    private updateReadonly;
    private handleInput;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleShowHideButton;
    private doShowHide;
    private getLabelProps;
    private getInputProps;
    private getCounterProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private renderInput;
    render(): any;
}
