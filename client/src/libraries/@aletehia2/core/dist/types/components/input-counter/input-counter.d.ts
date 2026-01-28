import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { InputCounterFeedbackType, InputCounterSize } from './input-counter.model';
export declare class AthInputCounter implements ComponentInterface {
    private inputId;
    private labelId;
    private inputHintId;
    private inputFeedbackId;
    private inputEl;
    private initialValue;
    el: HTMLElement | null;
    internals: ElementInternals;
    /**
     * If true, the controls are not visible.
     */
    hideControls: boolean;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled: boolean;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown.
     */
    feedback: InputCounterFeedbackType;
    /**
     * The message for the feedback.
     */
    feedbackText: string;
    /**
     * Message to help the user fill the input value.
     */
    helperText: string;
    /**
     * The aria-label attribute of the input.
     */
    inputAriaLabel: string;
    /**
     * Represents the caption of the input.
     */
    label: string;
    /**
     * Represents the maximum number of the input.
     */
    max: number;
    /**
     * Represents the minimum number of the input.
     */
    min: number;
    /**
     * The name of the input. Submitted with the form as part of a name/value pair.
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
     * If true, the * asterisk will be hidden when the input is required.
     */
    hideRequired: boolean;
    /**
     * Specifies the size of the input.
     */
    size: InputCounterSize;
    /**
     * Specifies the interval between legal numbers in an <input> element.
     */
    step: number;
    /**
     * Specifies text for tooltip.
     */
    tooltipText: string;
    /**
     * Specifies width for tooltip.
     */
    tooltipWidth: number;
    /**
     * Specifies the unit for the input.
     */
    unit: string;
    /**
     * Specifies the accesible unit for the input.
     */
    unitAriaLabel: string;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    /**
     * Emitted when the input gains focus.
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the input loses focus.
     */
    athBlur: EventEmitter<void>;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<string>;
    /**
     * Emitted every time the value is updated by introducing a change.
     */
    athInput: EventEmitter<string>;
    watchDisabled(): void;
    updateValue(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    formResetCallback(): void;
    private setInputValue;
    private updateReadonly;
    private handleDown;
    private handleUp;
    private setValue;
    private getPreviousValue;
    private getNextValue;
    private getInputProps;
    private handleInput;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private getLabelProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private handleButtonClick;
    private renderButton;
    private renderInput;
    render(): any;
}
