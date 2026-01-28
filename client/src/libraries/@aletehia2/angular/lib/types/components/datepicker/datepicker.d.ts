import { ComponentInterface, ComponentDidLoad, EventEmitter, ComponentWillLoad } from '../../stencil-public-runtime';
import { DatepickerColor, DatepickerFeedback, DatepickerSize, DatepickerType } from './datepicker.model';
export declare class AthDatepicker implements ComponentInterface, ComponentDidLoad, ComponentWillLoad {
    private inputId;
    private datepickerpopupId;
    private inputHintId;
    private inputHintSROnlyId;
    private inputFeedbackId;
    private inputEl;
    private returnInputFocus;
    private initialValue;
    private transitionTime;
    private overlayTimeout;
    private dateResetTimeout;
    element: HTMLElement;
    internals: ElementInternals;
    /**
     * Caption of the datepicker
     */
    label: string;
    /**
     * Text to be shown in the tooltip
     */
    tooltipText: string;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback: DatepickerFeedback;
    /**
     * The feedback message.
     */
    feedbackText: string;
    /**
     * Message to help the user fills the datepicker.
     */
    helperText: string;
    /**
     * Date format to be used in the datepicker. Only used when the type is 'date'.
     */
    format: string;
    placeholder: string;
    /**
     * The name of the datepicker. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    hideRequired: boolean;
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
     * Whether the datepicker is focused on page load.
     */
    autofocus: boolean;
    /**
     * List of days which are shown as disabled.
     */
    disabledDates: string;
    updateDisabledDates(): void;
    private disabledDatesAux;
    /**
     * List of days which are shown as highlighted.
     */
    highlightedDates: string;
    updateHighlightedDates(): void;
    private highlightedDatesAux;
    /**
     * If true, all the weekends will be highlighted.
     */
    highlightedWeekends: boolean;
    /**
     * The minimum date that can be selected.
     */
    min?: string;
    updateMin(): void;
    private minDate;
    /**
     * The maximum date that can be selected.
     */
    max?: string;
    updateMax(): void;
    private maxDate;
    /**
     * The size of the datepicker.
     */
    size: DatepickerSize;
    /**
     * The type of the datepicker.
     */
    type: DatepickerType;
    /**
     * The color of the datepicker.
     */
    color: DatepickerColor;
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel: string;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    updateValue(): void;
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter: boolean;
    private valueDate;
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
    watchOpenState(): void;
    disconnectedCallback(): void;
    open: boolean;
    renderOverlay: boolean;
    wrongDate: boolean;
    feedbackWrong: string;
    showType: DatepickerType;
    inputValue: string;
    shownDate: Date;
    hasFocus: boolean;
    ariaLiveMessage: string;
    componentDidLoad(): void;
    componentWillLoad(): void;
    formResetCallback(): void;
    private handleDaySelect;
    private handleMonthSelect;
    private handleYearSelect;
    private handleClickMonth;
    private handleClickYear;
    private handlePrevButton;
    private isPrevButtonDisabled;
    private handleNextButton;
    private isNextButtonDisabled;
    private reset;
    private handleInput;
    private handleInputYear;
    private handleInputMonth;
    private handleInputFocus;
    private handleInputBlur;
    private handleOutsideClick;
    private handleInputChange;
    private handleKeydownOverInput;
    private handleKeyDownOverButton;
    private handleOnExit;
    private setAriaLiveMessage;
    private getLabelProps;
    private getMaxLength;
    private getInputProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private getDialogClassNames;
    private getPrevButtonAriaLabel;
    private getNextButtonAriaLabel;
    private setInputValue;
    private trapFocus;
    render(): any;
}
