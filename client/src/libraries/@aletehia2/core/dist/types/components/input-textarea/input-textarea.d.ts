import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { InputSize } from './input-textarea.models';
export declare class AthInputTextarea implements ComponentInterface {
    private inputId;
    private inputHintId;
    private inputFeedbackId;
    private inputEl;
    private initialValue;
    el: HTMLElement | null;
    internals: ElementInternals;
    /**
     * Whether the input will be autocompleted.
     */
    autocomplete: string;
    /**
     * Whether the input is focused on page load.
     */
    autofocus: boolean;
    /**
     * Shows a counter
     */
    counter: boolean;
    /**
     * SThe label of the counter
     */
    counterLabel: string;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled: boolean;
    watchDisabled(): void;
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel: string;
    /**
     * Set tabindex
     */
    inputTabindex: string;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback: import("./input-textarea.models").InputFeedbackType;
    /**
     * The feedback message.
     */
    feedbackText: string;
    /**
     * Message to help the user fills the input value
     */
    helperText: string;
    /**
     * Represents the caption of the input
     */
    label: string;
    /**
     * Specifies the maximum number of characters allowed in the input element
     */
    maxlength: number;
    /**
     * The name of the input. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder: string;
    /**
     * If true, the user cannot modify the value.
     */
    readonly: boolean;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * Number of visible rows.
     */
    rows: number;
    /**
     * The size of the input
     */
    size: InputSize;
    /**
     * If true, the * asterisk will be hidden when required = true.
     */
    hideRequired: boolean;
    /**
     * The text to be shown in the tooltip
     */
    tooltipText: string;
    /**
     * The max width to the text in the tooltip
     */
    tooltipWidth: number;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    updateValue(): void;
    /**
     * The max width to the text in the tooltip
     */
    width: string;
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
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<string>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    private setInputValue;
    private updateReadonly;
    private handleInput;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private getLabelProps;
    private getInputTextAreaProps;
    private getCounterProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private renderInput;
    render(): any;
}
