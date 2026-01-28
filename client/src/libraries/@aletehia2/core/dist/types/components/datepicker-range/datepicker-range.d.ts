import { ComponentInterface, ComponentDidLoad, EventEmitter, ComponentWillLoad } from '../../stencil-public-runtime';
import { DatepickerRangeColor, DatepickerRangeFeedback, DatepickerRangeFocusState, DatepickerRangeSize, DatepickerRangeType } from './datepicker-range.model';
export declare class AthDatepickerRange implements ComponentInterface, ComponentDidLoad, ComponentWillLoad {
    private datepickerRangeId;
    private datepickerRangePopupId;
    private datepickerRangeHintId;
    private datepickerRangeHintSROnlyId;
    private datepickerRangeFeedbackId;
    private labelId;
    private inputElFrom;
    private inputFromId;
    private inputElTo;
    private inputToId;
    private returnInputFocus;
    private initialValue;
    private transitionTime;
    private overlayTimeout;
    private ariaLiveTimeout;
    element: HTMLElement;
    internals: ElementInternals;
    /**
     * Caption of the datepicker-range
     */
    label: string;
    /**
     * Caption of the range start of the datepicker-range
     */
    labelStart: string;
    /**
     * Caption of the datepicker-range
     */
    labelEnd: string;
    /**
     * Text to be shown in the tooltip
     */
    tooltipText: string;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback: DatepickerRangeFeedback;
    /**
     * The feedback message.
     */
    feedbackText: string;
    /**
     * Message to help the user fills the datepicker-range.
     */
    helperText: string;
    /**
     * Date format to be used in the datepicker-range. Only used when the type is 'date'.
     */
    format: string;
    placeholderStart: string;
    placeholderEnd: string;
    /**
     * The name of the datepicker-range. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * If true, the user must fill in a value of start range before submitting a form.
     */
    requiredStart: boolean;
    /**
     * If true, the user must fill in a value of end range before submitting a form.
     */
    requiredEnd: boolean;
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
     * The size of the datepicker-range.
     */
    size: DatepickerRangeSize;
    /**
     * The type of the datepicker-range.
     */
    type: DatepickerRangeType;
    /**
     * The color of the datepicker-range.
     */
    color: DatepickerRangeColor;
    /**
     * The aria-label attribute of the start input
     */
    inputAriaLabelStart: string;
    /**
     * The aria-label attribute of the end input
     */
    inputAriaLabelEnd: string;
    /**
     * If true, the side panel will be hidden.
     */
    hidePanel: boolean;
    /**
     * If true, all the weekends will be highlighted.
     */
    highlightedWeekends: boolean;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    updateValue(): void;
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter: boolean;
    private valueDateFrom;
    private valueDateTo;
    /**
     * Method to set the focus on the input element
     */
    setFocus(): Promise<void>;
    /**
     * Method to set the focus on the second input element
     */
    setFocusEnd(): Promise<void>;
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
    watchOpenState(): void;
    updateValueFrom(): void;
    updateValueTo(): void;
    disconnectedCallback(): void;
    open: boolean;
    renderOverlay: boolean;
    wrongDate: boolean;
    feedbackWrong: string;
    showType: DatepickerRangeType;
    inputValueFrom: string;
    inputValueTo: string;
    valueFrom: string;
    valueTo: string;
    shownDate: Date;
    focusState: DatepickerRangeFocusState;
    hasFocus: boolean;
    ariaLiveMessage: string;
    componentDidLoad(): void;
    componentWillLoad(): void;
    formResetCallback(): void;
    private hasChanged;
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
    private error;
    private today;
    private lastWeek;
    private isLastWeekDisabled;
    private lastMonth;
    private isLastMonthDisabled;
    private lastQuarter;
    private isLastQuarterDisabled;
    private lastYear;
    private isLastYearDisabled;
    private handleInput;
    private handleInputYear;
    private handleInputMonth;
    private handleInputFocus;
    private handleInputBlur;
    private handleOutsideClick;
    private handleInputChange;
    private handleInputChangeYear;
    private handleInputchangeMonth;
    private handleKeydownOverInput;
    private handleKeyDownOverButton;
    private handleOnExit;
    private setAriaLiveMessage;
    setAriaLiveDateSelect: (isFrom: boolean) => void;
    private getLabelProps;
    private getMaxLength;
    private getInputFromProps;
    private getInputToProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private getDialogClassNames;
    private getInputClassNames;
    private getPrevButtonAriaLabel;
    private getNextButtonAriaLabel;
    private setInputValue;
    private trapFocus;
    render(): any;
}
