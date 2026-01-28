import { Host, h, } from "@stencil/core";
import { FcCalendar, FcCalendarMonth, FcCalendarYear } from "../../sharedfc/datepicker/index";
import { DatepickerRangeColors, DatepickerRangeFeedbacks, DatepickerRangeFocusState, DatepickerRangeSizes, DatepickerRangeTypes, } from "./datepicker-range.model";
import { addDays, addMonths, addYears, formatDate, formatDateToISO, formatDateToMonth, formatDateToString, formatDateToYear, getDateBetweenLimits, getMonthName, getSROnlyHelperText, getValueRangeString, isDisabledDate, monthStart, yearStart, } from "../../utils/date-utils";
import { FcButtonComp, FcInputElement, FcInputFeedback, FcInputHelperText, FcInputLabel, } from "../../sharedfc/input/index";
import { ButtonIconPosition } from "../button/button.model";
let datepickerRangeSequence = 0;
let inputToSequence = 0;
let inputFromSequence = 0;
export class AthDatepickerRange {
    datepickerRangeId = `ath-datepicker-range-${datepickerRangeSequence++}`;
    datepickerRangePopupId = `ath-datepicker-range-popup-${datepickerRangeSequence++}`;
    datepickerRangeHintId = `${this.datepickerRangeId}-hint`;
    datepickerRangeHintSROnlyId = `${this.datepickerRangeId}-hintSROnly`;
    datepickerRangeFeedbackId = `${this.datepickerRangeId}-feedback`;
    labelId = `${this.datepickerRangeId}-label`;
    inputElFrom;
    inputFromId = `ath-input-from-${inputFromSequence++}`;
    inputElTo;
    inputToId = `ath-input-to-${inputToSequence++}`;
    returnInputFocus = false;
    initialValue;
    transitionTime = 300;
    overlayTimeout = null;
    ariaLiveTimeout = null;
    element;
    internals;
    /**
     * Caption of the datepicker-range
     */
    label;
    /**
     * Caption of the range start of the datepicker-range
     */
    labelStart;
    /**
     * Caption of the datepicker-range
     */
    labelEnd;
    /**
     * Text to be shown in the tooltip
     */
    tooltipText;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback = DatepickerRangeFeedbacks.None;
    /**
     * The feedback message.
     */
    feedbackText;
    /**
     * Message to help the user fills the datepicker-range.
     */
    helperText;
    /**
     * Date format to be used in the datepicker-range. Only used when the type is 'date'.
     */
    format = 'DD/MM/YYYY';
    /*
     * Instructional text that shows before the datepicker-range start has a value.
     */
    placeholderStart;
    /*
     * Instructional text that shows before the datepicker-range end has a value.
     */
    placeholderEnd;
    /**
     * The name of the datepicker-range. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * If true, the user must fill in a value of start range before submitting a form.
     */
    requiredStart = false;
    /**
     * If true, the user must fill in a value of end range before submitting a form.
     */
    requiredEnd = false;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    hideRequired = false;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled = false;
    watchDisabled() {
        if (this.disabled)
            this.readonly = false;
    }
    /**
     * If true, the user cannot modify the value.
     */
    readonly = false;
    /**
     * Whether the datepicker is focused on page load.
     */
    autofocus;
    /**
     * List of days which are shown as disabled.
     */
    disabledDates;
    updateDisabledDates() {
        this.disabledDatesAux = [];
        try {
            const parsedDates = JSON.parse(this.disabledDates.replace(/'/g, '"'));
            parsedDates.forEach(element => {
                const parsedDate = typeof element === 'string' ? new Date(element) : element;
                if (!isNaN(parsedDate.getTime())) {
                    this.disabledDatesAux.push(parsedDate);
                }
            });
        }
        catch (error) {
            this.disabledDatesAux = [];
        }
    }
    disabledDatesAux;
    /**
     * List of days which are shown as highlighted.
     */
    highlightedDates;
    updateHighlightedDates() {
        this.highlightedDatesAux = [];
        try {
            const parsedDates = JSON.parse(this.highlightedDates.replace(/'/g, '"'));
            parsedDates.forEach(element => {
                const parsedDate = typeof element === 'string' ? new Date(element) : element;
                if (!isNaN(parsedDate.getTime())) {
                    this.highlightedDatesAux.push(parsedDate);
                }
            });
        }
        catch (error) {
            this.highlightedDatesAux = [];
        }
    }
    highlightedDatesAux;
    /**
     * The minimum date that can be selected.
     */
    min;
    updateMin() {
        if (this.min) {
            try {
                this.minDate = new Date(this.min);
            }
            catch (error) {
                this.minDate = undefined;
            }
        }
    }
    minDate;
    /**
     * The maximum date that can be selected.
     */
    max;
    updateMax() {
        if (this.max) {
            try {
                this.maxDate = new Date(this.max);
            }
            catch (error) {
                this.maxDate = undefined;
            }
        }
    }
    maxDate;
    /**
     * The size of the datepicker-range.
     */
    size = DatepickerRangeSizes.Medium;
    /**
     * The type of the datepicker-range.
     */
    type = DatepickerRangeTypes.Date;
    /**
     * The color of the datepicker-range.
     */
    color = DatepickerRangeColors.Primary;
    /**
     * The aria-label attribute of the start input
     */
    inputAriaLabelStart;
    /**
     * The aria-label attribute of the end input
     */
    inputAriaLabelEnd;
    /**
     * If true, the side panel will be hidden.
     */
    hidePanel = false;
    /**
     * If true, all the weekends will be highlighted.
     */
    highlightedWeekends = false;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value;
    updateValue() {
        if (this.value) {
            try {
                const cleanValue = this.value.replace(/['" \[\]]/g, '');
                const parsedDates = cleanValue.split(',');
                if (parsedDates.length !== 2) {
                    return;
                }
                const from = !isNaN(new Date(parsedDates[0]).getTime()) ? parsedDates[0] : undefined;
                const to = !isNaN(new Date(parsedDates[1]).getTime()) ? parsedDates[1] : undefined;
                this.valueFrom = from;
                if (from != undefined && to != undefined && from > to) {
                    this.valueTo = undefined;
                    console.error('Rango inválido'); // Se muestra el error por consola ya que es fallo del desarrollador
                }
                else {
                    this.valueTo = to;
                }
            }
            catch (error) {
                this.valueFrom = undefined;
                this.valueTo = undefined;
                this.updateValueFrom();
                this.updateValueTo();
                this.setInputValue(this.value);
                return;
            }
        }
        else {
            this.valueFrom = undefined;
            this.valueTo = undefined;
        }
        this.updateValueFrom();
        this.updateValueTo();
        this.setInputValue(this.value);
    }
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter = false;
    valueDateFrom;
    valueDateTo;
    /**
     * Method to set the focus on the input element
     */
    async setFocus() {
        if (this.inputElFrom) {
            this.inputElFrom.focus();
        }
    }
    /**
     * Method to set the focus on the second input element
     */
    async setFocusEnd() {
        if (this.inputElTo && this.element?.isConnected) {
            this.inputElTo.focus();
        }
    }
    /**
     * Emitted when the input gains focus
     */
    athFocus;
    /**
     * Emitted when the input loses focus
     */
    athBlur;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange;
    // @Event() athChange: EventEmitter<{ start: string; end: string }>;
    watchOpenState() {
        if (this.overlayTimeout !== null) {
            clearTimeout(this.overlayTimeout);
            this.overlayTimeout = null;
        }
        if (this.open) {
            this.renderOverlay = true;
            document.addEventListener('mousedown', this.handleOutsideClick);
        }
        else {
            this.overlayTimeout = setTimeout(() => {
                this.renderOverlay = false;
                this.overlayTimeout = null;
            }, this.transitionTime);
        }
    }
    updateValueFrom() {
        if (this.valueFrom) {
            try {
                this.valueDateFrom = new Date(this.valueFrom);
            }
            catch (error) {
                this.valueDateFrom = undefined;
                return;
            }
            switch (this.type) {
                case DatepickerRangeTypes.Year:
                    this.inputValueFrom = this.valueDateFrom ? formatDateToYear(this.valueDateFrom) : '';
                    break;
                case DatepickerRangeTypes.Month:
                    this.inputValueFrom = this.valueDateFrom ? formatDateToMonth(this.valueDateFrom) : '';
                    break;
                default:
                    this.inputValueFrom = this.valueDateFrom ? formatDateToString(this.valueDateFrom, this.format) : '';
                    break;
            }
            if (this.inputElFrom) {
                this.inputElFrom.value = this.inputValueFrom;
            }
        }
        else {
            this.valueDateFrom = undefined;
            this.inputValueFrom = '';
        }
    }
    updateValueTo() {
        if (this.valueTo) {
            try {
                this.valueDateTo = new Date(this.valueTo);
            }
            catch (error) {
                this.valueDateTo = undefined;
                return;
            }
            switch (this.type) {
                case DatepickerRangeTypes.Year:
                    this.inputValueTo = this.valueDateTo ? formatDateToYear(this.valueDateTo) : '';
                    break;
                case DatepickerRangeTypes.Month:
                    this.inputValueTo = this.valueDateTo ? formatDateToMonth(this.valueDateTo) : '';
                    break;
                default:
                    this.inputValueTo = this.valueDateTo ? formatDateToString(this.valueDateTo, this.format) : '';
                    break;
            }
            if (this.inputElTo) {
                this.inputElTo.value = this.inputValueTo;
            }
        }
        else {
            this.valueDateTo = undefined;
            this.inputValueTo = '';
        }
    }
    disconnectedCallback() {
        if (this.ariaLiveTimeout) {
            clearTimeout(this.ariaLiveTimeout);
            this.ariaLiveTimeout = null;
        }
        if (this.overlayTimeout) {
            clearTimeout(this.overlayTimeout);
            this.overlayTimeout = null;
        }
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }
    open = false;
    renderOverlay = false;
    wrongDate = false;
    feedbackWrong = '';
    showType = DatepickerRangeTypes.Date;
    inputValueFrom;
    inputValueTo;
    valueFrom;
    valueTo;
    shownDate = new Date();
    focusState = DatepickerRangeFocusState.None;
    hasFocus = false;
    ariaLiveMessage = '';
    componentDidLoad() {
        this.initialValue = this.value;
        if (this.autofocus) {
            this.setFocus();
        }
    }
    componentWillLoad() {
        this.showType = this.type;
        this.updateMin();
        this.updateMax();
        this.updateValue();
        this.updateDisabledDates();
        this.updateHighlightedDates();
        if (this.valueDateFrom) {
            this.shownDate = this.valueDateFrom;
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.updateValue();
        this.hasChanged();
    }
    hasChanged = () => {
        this.value = getValueRangeString(this.valueFrom, this.valueTo);
        this.setInputValue(this.value);
        this.athChange.emit(this.value);
    };
    handleDaySelect = (_event, day) => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        if (this.focusState !== DatepickerRangeFocusState.End) {
            this.valueFrom = formatDateToISO(day);
            if (this.valueTo && this.valueDateTo < day) {
                this.valueTo = undefined;
            }
            this.setAriaLiveDateSelect(true);
            this.setFocusEnd();
        }
        else {
            if (this.valueDateFrom > day) {
                this.valueFrom = formatDateToISO(day);
                this.valueTo = undefined;
                this.setAriaLiveDateSelect(true);
            }
            else {
                this.valueTo = formatDateToISO(day);
                this.setFocusEnd();
                this.open = false;
                this.setAriaLiveDateSelect(false);
            }
        }
        this.hasChanged();
        this.shownDate = day;
        this.wrongDate = false;
        this.feedbackWrong = '';
    };
    handleMonthSelect = (_event, month) => {
        if (this.type === DatepickerRangeTypes.Month) {
            this.handleDaySelect(_event, month);
            return;
        }
        this.shownDate = getDateBetweenLimits(month, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Date;
        this.setAriaLiveMessage(`Mes seleccionado: ${formatDateToMonth(month)}. Vista de calendario abierta`);
    };
    handleYearSelect = (_event, year) => {
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleDaySelect(_event, year);
            return;
        }
        this.shownDate = getDateBetweenLimits(year, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Month;
        this.setAriaLiveMessage(`Año seleccionado: ${formatDateToYear(year)}. Vista de selección de mes abierta`);
    };
    handleClickMonth = () => {
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Month;
        this.setAriaLiveMessage('Vista de selección de mes abierta');
    };
    handleClickYear = () => {
        this.showType = DatepickerRangeTypes.Year;
        this.hasFocus = true;
        this.setAriaLiveMessage('Vista de selección de año abierta');
    };
    handlePrevButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Year:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, -12), this.minDate, this.maxDate);
                navigationMessage = `Navegando a la página que contiene los años ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10)} - ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10) + 9}`;
                break;
            default:
                break;
        }
        if (navigationMessage) {
            this.setAriaLiveMessage(navigationMessage);
        }
    };
    isPrevButtonDisabled = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), this.shownDate.getMonth(), 0), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Month:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), 0, 0), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Year:
                return isDisabledDate(addYears(new Date(this.shownDate.getFullYear(), 0, 0), -12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    handleNextButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Year:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, 12), this.minDate, this.maxDate);
                navigationMessage = `Navegando a la página que contiene los años ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10)} - ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10) + 9}`;
                break;
            default:
                break;
        }
        if (navigationMessage) {
            this.setAriaLiveMessage(navigationMessage);
        }
    };
    isNextButtonDisabled = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return isDisabledDate(addMonths(monthStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Month:
                return isDisabledDate(addYears(yearStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Year:
                return isDisabledDate(addYears(yearStart(this.shownDate), 12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    reset = () => {
        this.value = undefined;
        this.valueFrom = undefined;
        this.valueTo = undefined;
        this.inputValueFrom = '';
        this.inputValueTo = '';
        this.valueDateFrom = undefined;
        this.valueDateTo = undefined;
        this.shownDate = new Date();
        this.showType = this.type;
        this.hasChanged();
    };
    error = (msg) => {
        this.wrongDate = true;
        this.feedbackWrong = msg;
        this.reset();
        this.open = false;
    };
    today = () => {
        this.shownDate = new Date();
        this.showType = this.type;
    };
    lastWeek = () => {
        const from = addDays(new Date(), -7);
        this.valueFrom = formatDateToISO(from);
        this.valueTo = formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastWeekDisabled = () => {
        const from = addDays(new Date(), -7);
        return isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || isDisabledDate(new Date(), this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastMonth = () => {
        const from = addMonths(new Date(), -1);
        this.valueFrom = formatDateToISO(from);
        this.valueTo = formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastMonthDisabled = () => {
        const from = this.type === DatepickerRangeTypes.Date ? addMonths(new Date(), -1) : monthStart(addMonths(new Date(), -1));
        const to = this.type === DatepickerRangeTypes.Date ? new Date() : monthStart(new Date());
        return isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastQuarter = () => {
        const from = addMonths(new Date(), -3);
        this.valueFrom = formatDateToISO(from);
        this.valueTo = formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastQuarterDisabled = () => {
        const from = this.type === DatepickerRangeTypes.Date ? addMonths(new Date(), -3) : monthStart(addMonths(new Date(), -3));
        const to = this.type === DatepickerRangeTypes.Date ? new Date() : monthStart(new Date());
        return isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastYear = () => {
        const from = addYears(new Date(), -1);
        this.valueFrom = formatDateToISO(from);
        this.valueTo = formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastYearDisabled = () => {
        let from;
        let to;
        switch (this.type) {
            case DatepickerRangeTypes.Date:
                from = addYears(new Date(), -1);
                to = new Date();
                break;
            case DatepickerRangeTypes.Month:
                from = monthStart(addYears(new Date(), -1));
                to = monthStart(new Date());
                break;
            case DatepickerRangeTypes.Year:
                from = yearStart(addYears(new Date(), -1));
                to = yearStart(new Date());
                break;
        }
        return isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    handleInput = (e, isFrom) => {
        // If this is a deletion, just update the value
        if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
            if (isFrom) {
                this.inputValueFrom = this.inputElFrom.value;
            }
            else {
                this.inputValueTo = this.inputElTo.value;
            }
            return;
        }
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleInputYear(e, isFrom);
            return;
        }
        if (this.type === DatepickerRangeTypes.Month) {
            this.handleInputMonth(e, isFrom);
            return;
        }
        // Extract only digits with dynamic limit based on format
        const formatParts = this.format.split(/[^A-Za-z]/);
        const separators = this.format.match(/[^A-Za-z0-9]/g) || ['/'];
        const maxDigits = formatParts.reduce((total, part) => total + part.length, 0);
        let digits;
        if (isFrom) {
            digits = this.inputElFrom.value.replace(/\D/g, '').substring(0, maxDigits);
            if (separators.includes(e.data) && e.data === this.format[this.inputElFrom.value.length - 1]) {
                return;
            }
            // Block non-numeric input
            if (e.data && isNaN(Number(e.data))) {
                this.inputElFrom.value = this.inputValueFrom ?? '';
                return;
            }
        }
        else {
            digits = this.inputElTo.value.replace(/\D/g, '').substring(0, maxDigits);
            if (separators.includes(e.data) && e.data === this.format[this.inputElTo.value.length - 1]) {
                return;
            }
            // Block non-numeric input
            if (e.data && isNaN(Number(e.data))) {
                this.inputElTo.value = this.inputValueFrom ?? '';
                return;
            }
        }
        // Format according to the provided format property
        let formatted = '';
        if (digits.length > 0) {
            // Parse the format to determine separator positions and date part lengths
            let digitIndex = 0;
            let formattedIndex = 0;
            // Apply each part of the format (e.g., DD, MM, YYYY)
            formatParts.forEach((part, i) => {
                const partLength = part.length;
                // Extract the corresponding digits for this part
                const partDigits = digits.substring(digitIndex, digitIndex + partLength);
                // Only proceed if we have digits for this part
                if (partDigits.length > 0) {
                    // Add part to formatted string
                    formatted += partDigits;
                    digitIndex += partDigits.length;
                    formattedIndex += partDigits.length;
                    // Add separator if there are more parts and we have digits for the next part
                    if (i < formatParts.length - 1 && digitIndex < digits.length) {
                        formatted += separators[Math.min(i, separators.length - 1)];
                        formattedIndex += 1;
                    }
                }
            });
        }
        if (isFrom) {
            this.inputElFrom.value = formatted;
            this.inputValueFrom = formatted;
        }
        else {
            this.inputElTo.value = formatted;
            this.inputValueTo = formatted;
        }
    };
    handleInputYear = (e, isFrom) => {
        if (e.data && isNaN(Number(e.data))) {
            if (isFrom) {
                this.inputElFrom.value = this.inputValueFrom ?? '';
            }
            else {
                this.inputElTo.value = this.inputValueTo ?? '';
            }
            return;
        }
        if (isFrom && Number(this.inputElFrom.value) > 9999) {
            this.inputElFrom.value = this.inputValueFrom;
            this.inputValueFrom = this.inputElFrom.value;
        }
        if (!isFrom && Number(this.inputElTo.value) > 9999) {
            this.inputElTo.value = this.inputValueTo;
            this.inputValueTo = this.inputElTo.value;
        }
        if (isFrom) {
            this.inputValueFrom = this.inputElFrom.value;
        }
        else {
            this.inputValueTo = this.inputElTo.value;
        }
    };
    handleInputMonth = (e, isFrom) => {
        if (isFrom) {
            if (e.data && isNaN(Number(e.data)) && e.data !== '/') {
                this.inputElFrom.value = this.inputValueFrom ?? '';
                return;
            }
            if (Number(this.inputElFrom.value) > 12) {
                this.inputElFrom.value = this.inputValueFrom.padStart(2, '0') + '/' + e.data;
            }
            if (e.data === '/') {
                if (this.inputValueFrom && this.inputValueFrom.length <= 2 && this.inputValueFrom.length > 0) {
                    this.inputElFrom.value = this.inputValueFrom.padStart(2, '0') + e.data;
                }
                else {
                    this.inputElFrom.value = this.inputValueFrom ?? '';
                }
            }
            this.inputValueFrom = this.inputElFrom.value;
        }
        else {
            if (e.data && isNaN(Number(e.data)) && e.data !== '/') {
                this.inputElTo.value = this.inputValueTo ?? '';
                return;
            }
            if (Number(this.inputElTo.value) > 12) {
                this.inputElTo.value = this.inputValueTo.padStart(2, '0') + '/' + e.data;
            }
            if (e.data === '/') {
                if (this.inputValueTo && this.inputValueTo.length <= 2 && this.inputValueTo.length > 0) {
                    this.inputElTo.value = this.inputValueTo.padStart(2, '0') + e.data;
                }
                else {
                    this.inputElTo.value = this.inputValueTo ?? '';
                }
            }
            this.inputValueTo = this.inputElTo.value;
        }
    };
    handleInputFocus = (isFrom) => {
        this.focusState = isFrom ? DatepickerRangeFocusState.Start : DatepickerRangeFocusState.End;
        if (!this.returnInputFocus && !this.readonly) {
            this.open = true;
            if (isFrom) {
                this.shownDate = this.valueDateFrom ?? this.valueDateTo ?? new Date();
            }
            else {
                this.shownDate = this.valueDateTo ?? this.valueDateFrom ?? new Date();
            }
            this.setAriaLiveMessage('Calendario abierto. Use las teclas de flecha para navegar.');
        }
        this.returnInputFocus = false;
        this.athFocus.emit();
    };
    handleInputBlur = () => {
        this.returnInputFocus = false;
    };
    handleOutsideClick = (e) => {
        if (!this.open) {
            this.focusState = DatepickerRangeFocusState.None;
            document.removeEventListener('mousedown', this.handleOutsideClick);
            return;
        }
        // Use composedPath to detect if the click was inside the component
        const path = e.composedPath();
        const clickedInComponent = path.includes(this.element);
        if (!clickedInComponent) {
            this.focusState = DatepickerRangeFocusState.None;
            this.open = false;
            this.returnInputFocus = false;
            this.setAriaLiveMessage('Calendario cerrado');
            this.athBlur.emit();
        }
    };
    handleInputChange = (isFrom) => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        if (isFrom && this.inputValueFrom == '') {
            this.valueFrom = undefined;
            this.hasChanged();
            return;
        }
        if (!isFrom && this.inputValueTo == '') {
            this.valueTo = undefined;
            this.hasChanged();
            return;
        }
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleInputChangeYear(isFrom);
            return;
        }
        else if (this.type === DatepickerRangeTypes.Month) {
            this.handleInputchangeMonth(isFrom);
            return;
        }
        try {
            const result = isFrom ? formatDate(this.inputValueFrom, this.format) : formatDate(this.inputValueTo, this.format);
            if (isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
                this.error(this.feedbackText);
                return;
            }
            if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
                this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
                return;
            }
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.shownDate = result;
            if (isFrom) {
                this.valueDateFrom = result;
                this.valueFrom = formatDateToISO(result);
                this.inputElTo.focus();
            }
            else {
                this.valueDateTo = result;
                this.valueTo = formatDateToISO(result);
                if (this.valueFrom) {
                    this.open = false;
                }
            }
            this.setAriaLiveDateSelect(isFrom);
            this.hasChanged();
        }
        catch (error) {
            this.error('Fecha inexistente');
            this.setAriaLiveMessage('Error: Fecha inexistente o inválida');
        }
    };
    handleInputChangeYear = (isFrom) => {
        try {
            const result = isFrom ? new Date(Number(this.inputValueFrom), 0, 1) : new Date(Number(this.inputValueTo), 0, 1);
            if (isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
                this.error(this.feedbackText);
                return;
            }
            if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
                this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
                return;
            }
            if (isFrom) {
                this.valueFrom = formatDateToISO(result);
            }
            else {
                this.valueTo = formatDateToISO(result);
                if (this.valueFrom) {
                    this.open = false;
                }
            }
            this.setAriaLiveDateSelect(isFrom);
            this.hasChanged();
            this.shownDate = result;
            this.wrongDate = false;
            this.feedbackWrong = '';
        }
        catch (error) {
            this.error('Fecha inexistente');
            this.setAriaLiveMessage('Error: Fecha inexistente o inválida');
        }
    };
    handleInputchangeMonth = (isFrom) => {
        const result = isFrom
            ? new Date(Number(this.inputValueFrom.split('/')[1]), Number(this.inputValueFrom.split('/')[0]) - 1, 1)
            : new Date(Number(this.inputValueTo.split('/')[1]), Number(this.inputValueTo.split('/')[0]) - 1, 1);
        if (isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
            this.error(this.feedbackText);
            return;
        }
        if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
            this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
            return;
        }
        if (isFrom) {
            this.valueFrom = formatDateToISO(result);
        }
        else {
            this.valueTo = formatDateToISO(result);
            if (this.valueFrom) {
                this.open = false;
            }
        }
        this.setAriaLiveDateSelect(isFrom);
        this.hasChanged();
        this.wrongDate = false;
        this.feedbackWrong = '';
        this.shownDate = result;
    };
    handleKeydownOverInput = (event) => {
        if (event.code === 'ArrowDown' && !this.disabled && !this.readonly) {
            event.preventDefault();
            event.stopPropagation();
            this.setAriaLiveMessage('Calendario abierto. Use las teclas de flecha para navegar.');
            if (!this.open) {
                this.open = true;
            }
            else {
                const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-range-overlay');
                if (!overlay)
                    return;
                const focusableElements = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
                focusableElements[0].focus();
            }
        }
        else if (event.code === 'Enter') {
            this.submitOnEnter && this.internals.form && this.internals.form.requestSubmit();
        }
        else if (event.code === 'Tab') {
            if (event.shiftKey) {
                this.open = false;
            }
            if (!this.open && ((this.focusState !== DatepickerRangeFocusState.Start && event.shiftKey) || (this.focusState === DatepickerRangeFocusState.End && !event.shiftKey))) {
                this.focusState = DatepickerRangeFocusState.None;
                this.athBlur.emit();
            }
        }
    };
    handleKeyDownOverButton = (key, type) => {
        let variation = 0;
        switch (key.code) {
            case 'ArrowDown':
            case 'ArrowRight':
                key.stopPropagation();
                key.preventDefault();
                variation = 1;
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                key.stopPropagation();
                key.preventDefault();
                variation = -1;
                break;
            case 'PageUp':
                key.stopPropagation();
                key.preventDefault();
                variation = -12;
                break;
            case 'PageDown':
                key.stopPropagation();
                key.preventDefault();
                variation = 12;
                break;
        }
        if (variation !== 0) {
            this.hasFocus = false;
            switch (type) {
                case 'year':
                    this.shownDate = getDateBetweenLimits(addYears(this.shownDate, variation), this.minDate, this.maxDate);
                    break;
                case 'month':
                    this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, variation), this.minDate, this.maxDate);
                    break;
            }
        }
    };
    handleOnExit = () => {
        this.hasFocus = false;
        this.returnInputFocus = true;
        this.setFocus();
        this.open = false;
        this.shownDate = this.valueDateFrom ?? new Date();
        this.setAriaLiveMessage('Calendario cerrado, foco devuelto al campo de entrada');
    };
    setAriaLiveMessage = (message) => {
        const duration = 2000;
        if (this.ariaLiveTimeout) {
            clearTimeout(this.ariaLiveTimeout);
            this.ariaLiveTimeout = null;
        }
        this.ariaLiveMessage = message;
        this.ariaLiveTimeout = setTimeout(() => {
            this.ariaLiveMessage = '';
            this.ariaLiveTimeout = null;
        }, duration);
    };
    setAriaLiveDateSelect = (isFrom) => {
        switch (this.type) {
            case DatepickerRangeTypes.Year:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Año de inicio seleccionado: ${formatDateToYear(this.valueDateFrom)}. Seleccione año de fin:`
                        : `Rango seleccionado: ${formatDateToYear(this.valueDateFrom)}-${formatDateToYear(this.valueDateTo)}. Seleccione otro año si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Año de inicio sin seleccionar. Año de fin seleccionado: ${formatDateToYear(this.valueDateTo)}`
                        : `Rango seleccionado: ${formatDateToYear(this.valueDateFrom)}-${formatDateToYear(this.valueDateTo)}.`);
                }
                return;
            case DatepickerRangeTypes.Month:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Mes de inicio seleccionado: ${formatDateToMonth(this.valueDateFrom)}. Seleccione mes de fin:`
                        : `Rango seleccionado: ${formatDateToMonth(this.valueDateFrom)}-${formatDateToMonth(this.valueDateTo)}. Seleccione otro mes si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Mes de inicio sin seleccionar. Mes de fin seleccionado: ${formatDateToMonth(this.valueDateTo)}`
                        : `Rango seleccionado: ${formatDateToMonth(this.valueDateFrom)}-${formatDateToMonth(this.valueDateTo)}.`);
                }
                return;
            default:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Fecha de inicio seleccionada: ${formatDateToString(this.valueDateFrom, this.format)}. Seleccione la fecha de fin:`
                        : `Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}. Seleccione otro día si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Fecha de inicio sin seleccionar. Fecha de fin seleccionada: ${formatDateToString(this.valueDateTo, this.format)}`
                        : `Rango seleccionado: ${formatDateToString(this.valueDateFrom, this.format)}-${formatDateToString(this.valueDateTo, this.format)}.`);
                }
        }
    };
    getLabelProps = () => ({
        htmlForId: this.datepickerRangeId,
        id: this.labelId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: 200,
    });
    getMaxLength = () => {
        switch (this.type) {
            case DatepickerRangeTypes.Year:
                return 4;
            case DatepickerRangeTypes.Month:
                return 7; // Format: MM/YYYY
            default:
                return this.format.length;
        }
    };
    getInputFromProps = () => ({
        inputId: this.inputFromId,
        icon: 'calendar',
        iconPosition: 'right',
        type: this.type === DatepickerRangeTypes.Year ? 'number' : 'text',
        autocomplete: 'off',
        name: this.name,
        pattern: '',
        placeholder: this.placeholderStart,
        value: this.inputValueFrom,
        required: this.required || this.requiredStart,
        disabled: this.disabled,
        readonly: !this.disabled && this.readonly,
        maxlength: this.getMaxLength(),
        inputAriaLabel: this.inputAriaLabelStart,
        hasButton: false,
        tabindex: '0',
        size: this.size,
        role: 'combobox',
        ariaExpanded: this.open,
        ariaControls: this.open ? this.datepickerRangePopupId : undefined,
        ariaHaspopup: 'grid',
        helperText: this.helperText,
        helperId: this.datepickerRangeHintId,
        helperTextSROnly: getSROnlyHelperText(),
        helperIdSROnly: this.datepickerRangeHintSROnlyId,
        feedback: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        feedbackText: this.wrongDate ? this.feedbackWrong : this.feedbackText,
        feedbackId: this.datepickerRangeFeedbackId,
        onKeyDown: e => this.handleKeydownOverInput(e),
        onInput: e => this.handleInput(e, true),
        onFocus: () => this.handleInputFocus(true),
        onBlur: () => this.handleInputBlur(),
        onChange: () => this.handleInputChange(true),
        onInputRef: (el) => (this.inputElFrom = el),
    });
    getInputToProps = () => ({
        inputId: this.inputToId,
        icon: 'calendar',
        iconPosition: 'right',
        type: this.type === DatepickerRangeTypes.Year ? 'number' : 'text',
        autocomplete: 'off',
        name: this.name,
        pattern: '',
        placeholder: this.placeholderEnd,
        value: this.inputValueTo,
        required: this.required || this.requiredEnd,
        disabled: this.disabled,
        readonly: !this.disabled && this.readonly,
        maxlength: this.getMaxLength(),
        inputAriaLabel: this.inputAriaLabelEnd,
        hasButton: false,
        tabindex: '0',
        size: this.size,
        role: 'combobox',
        ariaExpanded: this.open,
        ariaControls: this.open ? this.datepickerRangePopupId : undefined,
        ariaHaspopup: 'grid',
        helperText: this.helperText,
        helperId: this.datepickerRangeHintId,
        helperTextSROnly: getSROnlyHelperText(),
        helperIdSROnly: this.datepickerRangeHintSROnlyId,
        feedback: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        feedbackText: this.wrongDate ? this.feedbackWrong : this.feedbackText,
        feedbackId: this.datepickerRangeFeedbackId,
        onKeyDown: e => this.handleKeydownOverInput(e),
        onInput: e => this.handleInput(e, false),
        onFocus: () => this.handleInputFocus(false),
        onBlur: () => this.handleInputBlur(),
        onChange: () => this.handleInputChange(false),
        onInputRef: (el) => (this.inputElTo = el),
    });
    getHelperTextProps = () => {
        return {
            id: this.datepickerRangeHintId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.datepickerRangeFeedbackId,
        type: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        text: this.wrongDate ? this.feedbackWrong : this.feedbackText,
    });
    getDialogClassNames = () => ({
        'ath-datepicker-range-overlay': true,
        [`size-${this.size}${!!this.label ? '__label' : ''}`]: true,
        'is-active': this.open,
    });
    getInputClassNames = (isFrom) => ({
        'ath-input': true,
        'ath-focused-input': isFrom ? this.focusState === DatepickerRangeFocusState.Start : this.focusState === DatepickerRangeFocusState.End,
    });
    getPrevButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return 'Mes anterior';
            case DatepickerRangeTypes.Month:
                return 'Año anterior';
            case DatepickerRangeTypes.Year:
                return 'Página de años anterior';
            default:
                return 'Mes anterior';
        }
    };
    getNextButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return 'Mes siguiente';
            case DatepickerRangeTypes.Month:
                return 'Año siguiente';
            case DatepickerRangeTypes.Year:
                return 'Página de años siguiente';
            default:
                return 'Mes siguiente';
        }
    };
    setInputValue(value) {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    trapFocus = (e) => {
        if (!this.open || e.key !== 'Tab')
            return;
        const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-range-overlay');
        if (!overlay)
            return;
        const focusableElements = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        const firstElement = focusableElements[0]['disabled'] ? focusableElements[1] : focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            // Tab hacia atrás
            if (this.element.shadowRoot.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            }
        }
        else {
            // Tab hacia adelante
            if (this.element.shadowRoot.activeElement === lastElement || this.element.shadowRoot.activeElement.nodeName === 'INPUT') {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    };
    render() {
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const inputFromProps = this.getInputFromProps();
        const inputToProps = this.getInputToProps();
        return (h(Host, { key: '9c4eefd65cd5ecc51dd5566e45aa78ea2d3dac8a' }, h("fieldset", { key: '5ccbc04fc3963441ccb2b5ab856e642cba51e4d5', role: "group", id: this.datepickerRangeId, name: this.name, "aria-labelledby": !!this.label ? this.labelId : undefined, "aria-invalid": this.wrongDate || this.feedback === DatepickerRangeFeedbacks.Error ? 'true' : undefined, class: "ath-datepicker-range", onKeyDown: e => {
                if (e.key === 'Escape') {
                    this.returnInputFocus = true;
                    this.hasFocus = false;
                    if (this.focusState === DatepickerRangeFocusState.Start) {
                        this.setFocus();
                    }
                    else if (this.focusState === DatepickerRangeFocusState.End) {
                        this.setFocusEnd();
                    }
                    this.open = false;
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.trapFocus(e);
                }
            } }, h("div", { key: '9e246481236142e395778947bbcbaa8058782365', class: "wrapper" }, !!this.label && h(FcInputLabel, { key: '68b23f8135bca05dda3781c686a63bb41260c7da', ...labelProps }), h("div", { key: '121300f75ddd8f7f0e59d113f4e324ef4a9f751f', class: "ath-datepicker-range__input-group" }, h("div", { key: '22a6a4edf710bf5ea3c5ae40daa0f934977aab6f', class: this.getInputClassNames(true), onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                this.setFocus();
            } }, h(FcInputLabel, { key: 'cdbb8033e3f08ad3b629557d179009d36a1d5eb4', htmlForId: this.inputFromId, label: this.labelStart ?? 'Desde', required: this.required || this.requiredStart, showRequired: !this.hideRequired }), h(FcInputElement, { key: '0f1bccf3167d6195962e89595870b3dc9b565f70', ...inputFromProps })), h("div", { key: 'dad778b58f6a66ec48780f8aed9d4e587d8a8d0f', class: this.getInputClassNames(false), onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                this.setFocusEnd();
            } }, h(FcInputLabel, { key: '938c0246158ea3e47cfde608b52d1a405bc6cc8d', htmlForId: this.inputToId, label: this.labelEnd ?? 'Hasta', required: this.required || this.requiredEnd, showRequired: !this.hideRequired }), h(FcInputElement, { key: '5fae51a7d091273c372bf8ce8654f3c219cfc00d', ...inputToProps }))), !!this.helperText && !this.open && h(FcInputHelperText, { key: 'de6f3463fa5eb47e14c8eb57cc8ace5154c57b7c', ...helperTextProps }), h("div", { key: '4bdf3133c64d7460fc28f6408131b100233c16d3', class: "sr-only", id: this.datepickerRangeHintSROnlyId }, h("span", { key: '76e4fb740370f295d9dfd39dc27dde2267c92e18' }, getSROnlyHelperText())), ((this.feedback !== DatepickerRangeFeedbacks.None && !this.disabled && !this.readonly && !this.open) || this.wrongDate) && (h(FcInputFeedback, { key: '1eb60f49229baa244e2df4a7f90268d4bb3c6030', ...feedbackProps }))), h("div", { key: '92651ca83a3b2c06e24a7fa5ada796064fa8f76c', "aria-live": "polite", "aria-atomic": "true", class: "sr-only", role: "status" }, this.ariaLiveMessage), this.renderOverlay && (h("div", { key: 'c8392404149c4f8a212ba70380e98a75a52f3341', class: this.getDialogClassNames(), id: this.datepickerRangePopupId }, h("div", { key: 'fc3eb670ec5cf98963e729ba6a938f6fc7a55405', class: "ath-datepicker-range-calendar-date" }, h("div", { key: 'b71f915c4825d27fe8bb77cbac4af7d031a0cd46', class: "ath-datepicker-range-calendar-date__header" }, h(FcButtonComp, { key: '4d72d1bec47826b1b9962abd4cdc0ec022b9c503', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_left", onClick: this.handlePrevButton, disabled: this.isPrevButtonDisabled(), buttonAriaLabel: this.getPrevButtonAriaLabel() }), h("div", { key: '469cfc1a1a25f12cada9bed7832c6837f9bf8ac5', class: "ath-datepicker-range-calendar-date__header__date" }, this.showType !== 'year' && (h("ath-button", { key: '8f3bd489a2fc5723ea6cfddbc42c187e01a571d6', clear: true, size: "sm", onAthClick: this.handleClickMonth, onKeyDown: e => this.handleKeyDownOverButton(e, 'month'), "aria-label": `Cambiar a vista de selección de mes. Mes seleccionado: ${this.shownDate ? getMonthName(this.shownDate) : this.valueDateFrom ? getMonthName(this.valueDateFrom) : getMonthName(new Date())}` }, this.shownDate ? getMonthName(this.shownDate) : this.valueDateFrom ? getMonthName(this.valueDateFrom) : getMonthName(new Date()))), h("ath-button", { key: 'df868da01332b218fe65e3dba0991345bcc7852c', clear: true, size: "sm", onAthClick: this.handleClickYear, onKeyDown: e => this.handleKeyDownOverButton(e, 'year'), "aria-label": `Cambiar a vista de selección de año. Año seleccionado: ${this.shownDate ? this.shownDate.getFullYear() : this.valueDateFrom ? this.valueDateFrom.getFullYear() : new Date().getFullYear()}` }, this.shownDate ? this.shownDate.getFullYear() : this.valueDateFrom ? this.valueDateFrom.getFullYear() : new Date().getFullYear())), h(FcButtonComp, { key: 'ca1e6c2bb07c0dcc2f52cc301632850ebe902a53', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_right", disabled: this.isNextButtonDisabled(), onClick: this.handleNextButton, buttonAriaLabel: this.getNextButtonAriaLabel() })), this.showType === 'date' && (h("div", { key: 'f51820d4ed33f3610d8918539e3970c94ed29d88', class: "ath-datepicker-range-calendar-date__date" }, h(FcCalendar, { key: '78d03f666c52cc47d0bf9a2d93b0ae0f85009c76', shownDate: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onDateSelect: this.handleDaySelect, currentDate: new Date(), color: this.color, disabledDate: this.disabledDatesAux, highlightedDate: this.highlightedDatesAux, highlightedWeekends: this.highlightedWeekends, minDate: this.minDate, maxDate: this.maxDate, onChangeShownDate: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'month' && (h("div", { key: 'd245996911fe9f9a29f3bf06b00f88d0faa8bedc', class: "ath-datepicker-range-calendar-date__month" }, h(FcCalendarMonth, { key: '5b186336e943f819bb9cd9e434aa0de7b0fb6795', shownMonth: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onMonthSelect: this.handleMonthSelect, currentMonth: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minMonth: this.minDate, maxMonth: this.maxDate, onChangeShownMonth: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'year' && (h("div", { key: 'dd889f20866257c0ca1470418973368d37b44afd', class: "ath-datepicker-range-calendar-date__year" }, h(FcCalendarYear, { key: 'd5449d071ee4937fcadd77314df210e01631213e', shownYear: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onYearSelect: this.handleYearSelect, currentYear: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minYear: this.minDate, maxYear: this.maxDate, onChangeShownYear: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit })))), !this.hidePanel && (h("div", { key: 'ec092137fc328c3958d02d541d7e75ffa65e2dbb', class: "ath-datepicker-range-calendar-date__panel" }, h("div", { key: '9427da194d3395cb44dd01d659d3bd822616237b', class: "ath-datepicker-range-calendar-date__panel-shortcuts" }, h("ath-button-link", { key: '45cb3ccaa33bb24377eee63efa61cf05151cdf87', onAthClick: this.today, "aria-label": "Ir a hoy" }, "Hoy"), this.type === DatepickerRangeTypes.Date && (h("ath-button-link", { key: '62c8aa756ad8bbfaedd8a5bafcb55a7d1f8f666f', disabled: this.isLastWeekDisabled(), onAthClick: this.lastWeek, "aria-label": "Seleccionar la \u00FAltima semana" }, "\u00DAltima semana")), this.type !== DatepickerRangeTypes.Year && (h("ath-button-link", { key: 'c2b628a4923fa8d88146b764c11e34f48d5a7bc1', disabled: this.isLastMonthDisabled(), onAthClick: this.lastMonth, "aria-label": "Seleccionar el \u00FAltimo mes" }, "\u00DAltimo mes")), this.type !== DatepickerRangeTypes.Year && (h("ath-button-link", { key: '8835e3ee32ec3696d37941d5d215e6993cca8837', disabled: this.isLastQuarterDisabled(), onAthClick: this.lastQuarter, "aria-label": "Seleccionar el \u00FAltimo trimestre" }, "\u00DAltimo trimestre")), h("ath-button-link", { key: '5ef6cb9eb33e8ad5606303c964e2d0d86fcf4e16', disabled: this.isLastYearDisabled(), onAthClick: this.lastYear, "aria-label": "Seleccionar el \u00FAltimo a\u00F1o" }, "\u00DAltimo a\u00F1o")), h("ath-button-link", { key: 'f203e648e057a0d43da582c08f941d02fe9a35ae', onAthClick: this.reset }, "Restablecer"))))))));
    }
    static get is() { return "ath-datepicker-range"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["datepicker-range.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["datepicker-range.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Caption of the datepicker-range"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelStart": {
                "type": "string",
                "attribute": "label-start",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Caption of the range start of the datepicker-range"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelEnd": {
                "type": "string",
                "attribute": "label-end",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Caption of the datepicker-range"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to be shown in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerRangeFeedback",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "DatepickerRangeFeedback": {
                            "location": "import",
                            "path": "./datepicker-range.model",
                            "id": "src/components/datepicker-range/datepicker-range.model.ts::DatepickerRangeFeedback"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the feedback. If 'error' the error feedback will be shown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerRangeFeedbacks.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The feedback message."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message to help the user fills the datepicker-range."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "format": {
                "type": "string",
                "attribute": "format",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Date format to be used in the datepicker-range. Only used when the type is 'date'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'DD/MM/YYYY'"
            },
            "placeholderStart": {
                "type": "string",
                "attribute": "placeholder-start",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "placeholderEnd": {
                "type": "string",
                "attribute": "placeholder-end",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the datepicker-range. Submitted with the form as part of a name/value pair"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user must fill in a value before submitting a form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "requiredStart": {
                "type": "boolean",
                "attribute": "required-start",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user must fill in a value of start range before submitting a form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "requiredEnd": {
                "type": "boolean",
                "attribute": "required-end",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user must fill in a value of end range before submitting a form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hideRequired": {
                "type": "boolean",
                "attribute": "hide-required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the * asterisk will be show when required = true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user cannot interact with the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the datepicker is focused on page load."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabledDates": {
                "type": "string",
                "attribute": "disabled-dates",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of days which are shown as disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "highlightedDates": {
                "type": "string",
                "attribute": "highlighted-dates",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of days which are shown as highlighted."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "string",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum date that can be selected."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "string",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum date that can be selected."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerRangeSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "DatepickerRangeSize": {
                            "location": "import",
                            "path": "./datepicker-range.model",
                            "id": "src/components/datepicker-range/datepicker-range.model.ts::DatepickerRangeSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the datepicker-range."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerRangeSizes.Medium"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerRangeType",
                    "resolved": "\"date\" | \"month\" | \"year\"",
                    "references": {
                        "DatepickerRangeType": {
                            "location": "import",
                            "path": "./datepicker-range.model",
                            "id": "src/components/datepicker-range/datepicker-range.model.ts::DatepickerRangeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the datepicker-range."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerRangeTypes.Date"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerRangeColor",
                    "resolved": "\"accent\" | \"primary\"",
                    "references": {
                        "DatepickerRangeColor": {
                            "location": "import",
                            "path": "./datepicker-range.model",
                            "id": "src/components/datepicker-range/datepicker-range.model.ts::DatepickerRangeColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the datepicker-range."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerRangeColors.Primary"
            },
            "inputAriaLabelStart": {
                "type": "string",
                "attribute": "input-aria-label-start",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the start input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "inputAriaLabelEnd": {
                "type": "string",
                "attribute": "input-aria-label-end",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the end input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hidePanel": {
                "type": "boolean",
                "attribute": "hide-panel",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the side panel will be hidden."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "highlightedWeekends": {
                "type": "boolean",
                "attribute": "highlighted-weekends",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, all the weekends will be highlighted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the form control. Submitted with the form as part of a name/value pair."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "submitOnEnter": {
                "type": "boolean",
                "attribute": "submit-on-enter",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, submit the form when pressing Enter in the input field and the input is inside a form"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "renderOverlay": {},
            "wrongDate": {},
            "feedbackWrong": {},
            "showType": {},
            "inputValueFrom": {},
            "inputValueTo": {},
            "valueFrom": {},
            "valueTo": {},
            "shownDate": {},
            "focusState": {},
            "hasFocus": {},
            "ariaLiveMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input gains focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athBlur",
                "name": "athBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed.\r\nThis event doesn't fire until the control loses focus."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setFocus": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Method to set the focus on the input element",
                    "tags": []
                }
            },
            "setFocusEnd": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Method to set the focus on the second input element",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }, {
                "propName": "disabledDates",
                "methodName": "updateDisabledDates"
            }, {
                "propName": "highlightedDates",
                "methodName": "updateHighlightedDates"
            }, {
                "propName": "min",
                "methodName": "updateMin"
            }, {
                "propName": "max",
                "methodName": "updateMax"
            }, {
                "propName": "value",
                "methodName": "updateValue"
            }, {
                "propName": "open",
                "methodName": "watchOpenState"
            }, {
                "propName": "valueFrom",
                "methodName": "updateValueFrom"
            }, {
                "propName": "valueTo",
                "methodName": "updateValueTo"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=datepicker-range.js.map
