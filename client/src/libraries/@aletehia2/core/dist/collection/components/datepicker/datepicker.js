import { Host, h, } from "@stencil/core";
import { FcCalendar, FcCalendarMonth, FcCalendarYear } from "../../sharedfc/datepicker/index";
import { DatepickerColors, DatepickerFeedbacks, DatepickerSizes, DatepickerTypes } from "./datepicker.model";
import { addMonths, addYears, formatDate, formatDateToMonth, formatDateToString, formatDateToYear, getDateBetweenLimits, getMonthName, getSROnlyHelperText, isDisabledDate, monthStart, yearStart, } from "../../utils/date-utils";
import { FcButtonComp, FcInputElement, FcInputFeedback, FcInputHelperText, FcInputLabel, } from "../../sharedfc/input/index";
import { ButtonIconPosition } from "../button/button.model";
let inputSequence = 0;
export class AthDatepicker {
    inputId = `ath-input-${inputSequence++}`;
    datepickerpopupId = `datepicker-popup-${inputSequence++}`;
    inputHintId;
    inputHintSROnlyId;
    inputFeedbackId;
    inputEl;
    returnInputFocus = false;
    initialValue;
    transitionTime = 300;
    overlayTimeout = null;
    dateResetTimeout = null;
    element;
    internals;
    /**
     * Caption of the datepicker
     */
    label;
    /**
     * Text to be shown in the tooltip
     */
    tooltipText;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback = DatepickerFeedbacks.None;
    /**
     * The feedback message.
     */
    feedbackText;
    /**
     * Message to help the user fills the datepicker.
     */
    helperText;
    /**
     * Date format to be used in the datepicker. Only used when the type is 'date'.
     */
    format = 'DD/MM/YYYY';
    /*
     * Instructional text that shows before the datepicker has a value.
     */
    placeholder;
    /**
     * The name of the datepicker. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
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
     * If true, all the weekends will be highlighted.
     */
    highlightedWeekends = false;
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
     * The size of the datepicker.
     */
    size = DatepickerSizes.Medium;
    /**
     * The type of the datepicker.
     */
    type = DatepickerTypes.Date;
    /**
     * The color of the datepicker.
     */
    color = DatepickerColors.Primary;
    /**
     * The aria-label attribute of the input
     */
    inputAriaLabel;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value;
    updateValue() {
        if (this.value) {
            try {
                this.valueDate = new Date(this.value);
            }
            catch (error) {
                this.valueDate = undefined;
                return;
            }
            this.setInputValue(this.value);
            switch (this.type) {
                case DatepickerTypes.Year:
                    this.inputValue = this.valueDate ? formatDateToYear(this.valueDate) : '';
                    break;
                case DatepickerTypes.Month:
                    this.inputValue = this.valueDate ? formatDateToMonth(this.valueDate) : '';
                    break;
                default:
                    this.inputValue = this.valueDate ? formatDateToString(this.valueDate, this.format) : '';
                    break;
            }
            if (this.inputEl) {
                this.inputEl.value = this.inputValue;
            }
        }
        else {
            this.valueDate = undefined;
            this.setInputValue(undefined);
            this.inputValue = '';
        }
    }
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter = false;
    valueDate;
    /**
     * Method to set the focus on the input element
     */
    async setFocus() {
        if (this.inputEl) {
            this.inputEl.focus();
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
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput;
    watchOpenState() {
        // Clear any existing timeout to prevent conflicts
        if (this.overlayTimeout !== null) {
            clearTimeout(this.overlayTimeout);
            this.overlayTimeout = null;
        }
        if (this.open) {
            this.renderOverlay = true;
            setTimeout(() => {
                document.addEventListener('mousedown', this.handleOutsideClick);
            }, 0);
        }
        else {
            this.overlayTimeout = setTimeout(() => {
                this.renderOverlay = false;
                this.overlayTimeout = null;
            }, this.transitionTime);
            document.removeEventListener('mousedown', this.handleOutsideClick);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
        clearTimeout(this.overlayTimeout);
        clearTimeout(this.dateResetTimeout);
    }
    open = false;
    renderOverlay = false;
    wrongDate = false;
    feedbackWrong = '';
    showType = DatepickerTypes.Date;
    inputValue;
    shownDate = new Date();
    hasFocus = false;
    ariaLiveMessage = '';
    componentDidLoad() {
        this.inputHintId = `${this.inputId}-hint`;
        this.inputHintSROnlyId = `${this.inputId}-hintSROnly`;
        this.inputFeedbackId = `${this.inputId}-feedback`;
        this.initialValue = this.value;
        this.setInputValue(this.value);
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
        if (this.valueDate) {
            this.shownDate = this.valueDate;
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.updateValue();
        this.athChange.emit(this.value);
    }
    handleDaySelect = (_event, day) => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        this.value = day.toISOString();
        this.athChange.emit(this.value);
        this.shownDate = day;
        this.inputValue = formatDateToString(day, this.format);
        this.open = false;
        this.wrongDate = false;
        this.feedbackWrong = '';
        this.setAriaLiveMessage(`Fecha seleccionada: ${formatDateToString(day, this.format)}`);
        this.setFocus();
    };
    handleMonthSelect = (_event, month) => {
        if (this.type === DatepickerTypes.Month) {
            this.returnInputFocus = true;
            this.hasFocus = false;
            this.value = month.toISOString();
            this.athChange.emit(this.value);
            this.shownDate = month;
            this.inputValue = formatDateToMonth(month);
            this.open = false;
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.setAriaLiveMessage(`Mes seleccionado: ${formatDateToMonth(month)}`);
            this.setFocus();
            return;
        }
        this.shownDate = getDateBetweenLimits(month, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerTypes.Date;
        this.setAriaLiveMessage(`Mes seleccionado: ${formatDateToMonth(month)}. Vista de calendario abierta`);
    };
    handleYearSelect = (_event, year) => {
        if (this.type === DatepickerTypes.Year) {
            this.returnInputFocus = true;
            this.hasFocus = false;
            this.value = year.toISOString();
            this.athChange.emit(this.value);
            this.shownDate = year;
            this.inputValue = formatDateToYear(year);
            this.open = false;
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.setAriaLiveMessage(`Año seleccionado: ${formatDateToYear(year)}`);
            this.setFocus();
            return;
        }
        this.shownDate = getDateBetweenLimits(year, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerTypes.Month;
        this.setAriaLiveMessage(`Año seleccionado: ${formatDateToYear(year)}. Vista de selección de mes abierta`);
    };
    handleClickMonth = () => {
        this.hasFocus = true;
        this.showType = DatepickerTypes.Month;
        this.setAriaLiveMessage('Vista de selección de mes abierta');
    };
    handleClickYear = () => {
        this.showType = DatepickerTypes.Year;
        this.hasFocus = true;
        this.setAriaLiveMessage('Vista de selección de año abierta');
    };
    handlePrevButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerTypes.Year:
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
            case DatepickerTypes.Date:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), this.shownDate.getMonth(), 0), [], this.minDate, this.maxDate);
            case DatepickerTypes.Month:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), 0, 0), [], this.minDate, this.maxDate);
            case DatepickerTypes.Year:
                return isDisabledDate(addYears(new Date(this.shownDate.getFullYear(), 0, 0), -12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    handleNextButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerTypes.Year:
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
            case DatepickerTypes.Date:
                return isDisabledDate(addMonths(monthStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerTypes.Month:
                return isDisabledDate(addYears(yearStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerTypes.Year:
                return isDisabledDate(addYears(yearStart(this.shownDate), 12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    reset = () => {
        this.value = undefined;
        this.inputValue = '';
        this.shownDate = new Date();
        this.showType = this.type;
        this.athChange.emit(this.value);
    };
    handleInput = (e) => {
        // If this is a deletion, just update the value
        if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
            this.inputValue = this.inputEl.value;
            this.athInput.emit(this.inputEl.value);
            return;
        }
        if (this.type === DatepickerTypes.Year) {
            this.handleInputYear(e);
            return;
        }
        if (this.type === DatepickerTypes.Month) {
            this.handleInputMonth(e);
            return;
        }
        // Extract only digits with dynamic limit based on format
        const formatParts = this.format.split(/[^A-Za-z]/);
        const separators = this.format.match(/[^A-Za-z0-9]/g) || ['/'];
        const maxDigits = formatParts.reduce((total, part) => total + part.length, 0);
        const digits = this.inputEl.value.replace(/\D/g, '').substring(0, maxDigits);
        if (separators.includes(e.data) && e.data === this.format[this.inputEl.value.length - 1]) {
            this.athInput.emit(this.inputEl.value);
            return;
        }
        // Block non-numeric input
        if (e.data && isNaN(Number(e.data))) {
            this.inputEl.value = this.inputValue ?? '';
            this.athInput.emit(this.inputEl.value);
            return;
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
        this.inputEl.value = formatted;
        this.inputValue = formatted;
        this.athInput.emit(this.inputEl.value);
    };
    handleInputYear = (e) => {
        if (e.data && isNaN(Number(e.data))) {
            this.inputEl.value = this.inputValue ?? '';
            this.athInput.emit(this.inputEl.value);
            return;
        }
        if (Number(this.inputEl.value) > 9999) {
            this.inputEl.value = this.inputValue;
        }
        this.inputValue = this.inputEl.value;
        this.athInput.emit(this.inputEl.value);
    };
    handleInputMonth = (e) => {
        if (e.data && isNaN(Number(e.data)) && e.data !== '/') {
            this.inputEl.value = this.inputValue ?? '';
            this.athInput.emit(this.inputEl.value);
            return;
        }
        if (Number(this.inputEl.value) > 12) {
            this.inputEl.value = this.inputValue.padStart(2, '0') + '/' + e.data;
        }
        if (e.data === '/') {
            if (this.inputValue && this.inputValue.length <= 2 && this.inputValue.length > 0) {
                this.inputEl.value = this.inputValue.padStart(2, '0') + e.data;
            }
            else {
                this.inputEl.value = this.inputValue ?? '';
                this.athInput.emit(this.inputEl.value);
            }
        }
        this.inputValue = this.inputEl.value;
        this.athInput.emit(this.inputEl.value);
    };
    handleInputFocus = () => {
        if (!this.returnInputFocus && !this.readonly) {
            this.open = true;
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
            document.removeEventListener('mousedown', this.handleOutsideClick);
            return;
        }
        // Use composedPath to detect if the click was inside the component
        const path = e.composedPath();
        const clickedInComponent = path.includes(this.element);
        if (!clickedInComponent) {
            this.open = false;
            setTimeout(() => {
                this.shownDate = this.valueDate ?? new Date();
            }, 200);
            this.returnInputFocus = false;
            this.setAriaLiveMessage('Calendario cerrado');
            this.athBlur.emit();
        }
    };
    handleInputChange = () => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        if (this.inputValue == '') {
            this.value = undefined;
            return;
        }
        if (this.type === DatepickerTypes.Year) {
            this.value = new Date(Number(this.inputValue), 0, 1).toISOString();
            this.athChange.emit(this.value);
            this.shownDate = new Date(Number(this.inputValue), 0, 1);
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.open = false;
            return;
        }
        else if (this.type === DatepickerTypes.Month) {
            this.value = new Date(Number(this.inputValue.split('/')[1]), Number(this.inputValue.split('/')[0]) - 1, 1).toISOString();
            this.athChange.emit(this.value);
            this.shownDate = new Date(Number(this.inputValue.split('/')[1]), Number(this.inputValue.split('/')[0]) - 1, 1);
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.open = false;
            return;
        }
        try {
            const result = formatDate(this.inputValue, this.format);
            if ((this.min && new Date(this.min) && result < new Date(this.min)) ||
                (this.max && new Date(this.max) && result > new Date(this.max)) ||
                this.disabledDatesAux.some(date => date.getTime() === result.getTime())) {
                this.wrongDate = true;
                this.feedbackWrong = this.feedbackText;
                this.value = undefined;
                this.athChange.emit(this.value);
                this.shownDate = new Date();
                this.inputValue = '';
                this.open = false;
                return;
            }
            this.value = result.toISOString();
            this.athChange.emit(this.value);
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.shownDate = result;
        }
        catch (error) {
            this.wrongDate = true;
            this.feedbackWrong = 'Fecha inexistente';
            this.value = undefined;
            this.athChange.emit(this.value);
            this.shownDate = new Date();
            this.inputValue = '';
            this.setAriaLiveMessage('Error: Fecha inexistente o inválida');
        }
        this.open = false;
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
                const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-overlay');
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
                setTimeout(() => {
                    this.shownDate = this.valueDate ?? new Date();
                }, 200);
            }
            if (!this.open)
                this.athBlur.emit();
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
        setTimeout(() => {
            this.setFocus();
        }, 1);
        this.open = false;
        // Clear any existing date reset timeout
        if (this.dateResetTimeout) {
            clearTimeout(this.dateResetTimeout);
        }
        this.dateResetTimeout = setTimeout(() => {
            this.shownDate = this.valueDate ?? new Date();
            this.dateResetTimeout = null;
        }, 200);
        this.setAriaLiveMessage('Calendario cerrado, foco devuelto al campo de entrada');
    };
    setAriaLiveMessage = (message) => {
        this.ariaLiveMessage = message;
        setTimeout(() => (this.ariaLiveMessage = ''), 2000);
    };
    getLabelProps = () => ({
        htmlForId: this.inputId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: 200,
    });
    getMaxLength = () => {
        switch (this.type) {
            case DatepickerTypes.Year:
                return 4;
            case DatepickerTypes.Month:
                return 7; // Format: MM/YYYY
            default:
                return this.format.length;
        }
    };
    getInputProps = () => ({
        inputId: this.inputId,
        icon: 'calendar',
        iconPosition: 'right',
        type: this.type === DatepickerTypes.Year ? 'number' : 'text',
        autocomplete: 'off',
        name: this.name,
        pattern: '',
        placeholder: this.placeholder,
        value: this.inputValue,
        required: this.required,
        disabled: this.disabled,
        readonly: this.readonly,
        maxlength: this.getMaxLength(),
        inputAriaLabel: this.inputAriaLabel,
        hasButton: false,
        helperText: this.helperText,
        helperTextSROnly: getSROnlyHelperText(),
        feedback: this.wrongDate ? DatepickerFeedbacks.Error : this.feedback,
        feedbackText: this.wrongDate ? this.feedbackWrong : this.feedbackText,
        tabindex: '0',
        size: this.size,
        onKeyDown: e => this.handleKeydownOverInput(e),
        onInput: e => this.handleInput(e),
        onFocus: () => this.handleInputFocus(),
        onBlur: () => this.handleInputBlur(),
        onChange: () => this.handleInputChange(),
        onInputRef: (el) => (this.inputEl = el),
        role: 'combobox',
        ariaExpanded: this.open,
        ariaControls: this.open ? this.datepickerpopupId : undefined,
        ariaHaspopup: 'grid',
    });
    getHelperTextProps = () => {
        return {
            id: this.inputHintId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.inputFeedbackId,
        type: this.wrongDate ? DatepickerFeedbacks.Error : this.feedback,
        text: this.wrongDate ? this.feedbackWrong : this.feedbackText,
    });
    getDialogClassNames = () => ({
        'ath-datepicker-overlay': true,
        [`size-${this.size}${!!this.label ? '__label' : ''}`]: true,
        'is-active': this.open,
    });
    getPrevButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerTypes.Date:
                return 'Mes anterior';
            case DatepickerTypes.Month:
                return 'Año anterior';
            case DatepickerTypes.Year:
                return 'Página de años anterior';
            default:
                return 'Mes anterior';
        }
    };
    getNextButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerTypes.Date:
                return 'Mes siguiente';
            case DatepickerTypes.Month:
                return 'Año siguiente';
            case DatepickerTypes.Year:
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
        const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-overlay');
        if (!overlay)
            return;
        const focusableElements = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        const firstElement = focusableElements[0];
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
            if (this.element.shadowRoot.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    };
    render() {
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const inputProps = this.getInputProps();
        return (h(Host, { key: '60343874e23611b4447d42a5f32cbcec5ffe02d3' }, h("div", { key: '38bf1196cad96cc84f41b7188b73b1b4031ef3ec', class: "ath-datepicker", onKeyDown: e => {
                if (e.key === 'Escape') {
                    this.returnInputFocus = true;
                    this.hasFocus = false;
                    setTimeout(() => {
                        this.setFocus();
                    }, 1);
                    this.open = false;
                    setTimeout(() => {
                        this.shownDate = this.valueDate ?? new Date();
                    }, 200);
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.trapFocus(e);
                }
            } }, h("div", { key: '16a173d5e11c1b8bd9fb8022b764fb20d4864694', class: "ath-input", onClick: e => {
                e.preventDefault();
                setTimeout(() => {
                    this.setFocus();
                }, 1);
            } }, !!this.label && h(FcInputLabel, { key: 'c85e6c3666f5c3fc333b45507f745454722abe10', ...labelProps }), h("div", { key: '01ce76a1003b201aebd63a3d9d58eb40a9814410', class: "wrapper" }, h(FcInputElement, { key: '7e12172f7d159244a85d2427a9e536c63f7579aa', ...inputProps }), !!this.helperText && !this.open && h(FcInputHelperText, { key: 'c685842b7d7fe133860911fb7b013e2c6479994e', ...helperTextProps }), h("div", { key: '6bc796cf75dc83ef8d40c0e02e41dcd90d54eab5', class: "sr-only", id: this.inputHintSROnlyId }, h("span", { key: 'cd03023074464322f913015bf9a3ea6f8778519e' }, getSROnlyHelperText())), ((this.feedback !== DatepickerFeedbacks.None && !this.disabled && !this.readonly && !this.open) || this.wrongDate) && (h(FcInputFeedback, { key: '82ffcad21dd0e6ea2a7911a813f8419951902ca7', ...feedbackProps })))), h("div", { key: '3f5e5687113574b258b2a25458651c8f2060ddec', "aria-live": "polite", "aria-atomic": "true", class: "sr-only", role: "status" }, this.ariaLiveMessage), this.renderOverlay && (h("div", { key: '4d9a5bc12f1c7e12f4ae80e5cb136323a65bf0c1', class: this.getDialogClassNames(), id: this.datepickerpopupId }, h("div", { key: '1c6648bebb11d45eadc2a1cd360151132ebbc3e9', class: "ath-datepicker-calendar-date" }, h("div", { key: '132d62998cd0013a2c20f603fac8153a1c026d83', class: "ath-datepicker-calendar-date__header" }, h(FcButtonComp, { key: 'd8545211845d257679023fab565eb1ee75c7f0e5', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_left", disabled: this.isPrevButtonDisabled(), onClick: this.handlePrevButton, buttonAriaLabel: this.getPrevButtonAriaLabel() }), h("div", { key: 'bf1e99bede0886956fd435bc34eb4d0cc7d649d9', class: "ath-datepicker-calendar-date__header__date" }, this.showType !== 'year' && (h("ath-button", { key: 'a8ac7d911744d9428514a03d445e961456536c74', clear: true, size: "sm", onAthClick: this.handleClickMonth, onKeyDown: e => this.handleKeyDownOverButton(e, 'month'), "aria-label": `Cambiar a vista de selección de mes. Mes seleccionado: ${this.shownDate ? getMonthName(this.shownDate) : this.valueDate ? getMonthName(this.valueDate) : getMonthName(new Date())}` }, this.shownDate ? getMonthName(this.shownDate) : this.valueDate ? getMonthName(this.valueDate) : getMonthName(new Date()))), h("ath-button", { key: '0b4febfe29fc64e72cb98a771bdb0da172bed197', clear: true, size: "sm", onAthClick: this.handleClickYear, onKeyDown: e => this.handleKeyDownOverButton(e, 'year'), "aria-label": `Cambiar a vista de selección de año. Año seleccionado: ${this.shownDate ? this.shownDate.getFullYear() : this.valueDate ? this.valueDate.getFullYear() : new Date().getFullYear()}` }, this.shownDate ? this.shownDate.getFullYear() : this.valueDate ? this.valueDate.getFullYear() : new Date().getFullYear())), h(FcButtonComp, { key: '9ef9487e6a25ae2c83eaff1a39b25a4d2961f9ff', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_right", disabled: this.isNextButtonDisabled(), onClick: this.handleNextButton, buttonAriaLabel: this.getNextButtonAriaLabel() })), this.showType === 'date' && (h("div", { key: '74a5276f0f9bcddd60ae77ac6e785af3df3e2433', class: "ath-datepicker-calendar-date__date" }, h(FcCalendar, { key: '86c3b0ba1913ba546f88978e56cbe95f89e78cda', shownDate: this.shownDate || this.valueDate || new Date(), selectedDate: this.valueDate, hasFocus: this.hasFocus, onDateSelect: this.handleDaySelect, currentDate: new Date(), color: this.color, disabledDate: this.disabledDatesAux, highlightedDate: this.highlightedDatesAux, highlightedWeekends: this.highlightedWeekends, minDate: this.minDate, maxDate: this.maxDate, onChangeShownDate: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'month' && (h("div", { key: '0a1f99e0a50127fd49e04800bc6b26a41692eadf', class: "ath-datepicker-calendar-date__month" }, h(FcCalendarMonth, { key: '1999c52136da23a16fe388e9ae90d8bc28d503e1', shownMonth: this.shownDate || this.valueDate || new Date(), selectedMonth: this.valueDate, hasFocus: this.hasFocus, onMonthSelect: this.handleMonthSelect, currentMonth: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minMonth: this.minDate, maxMonth: this.maxDate, onChangeShownMonth: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'year' && (h("div", { key: 'fc056c8f0dceb444576f4f32430260847d3d035f', class: "ath-datepicker-calendar-date__year" }, h(FcCalendarYear, { key: 'a6dbfdff28f6978233617b9300305146710a6107', shownYear: this.shownDate || this.valueDate || new Date(), selectedYear: this.valueDate, hasFocus: this.hasFocus, onYearSelect: this.handleYearSelect, currentYear: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minYear: this.minDate, maxYear: this.maxDate, onChangeShownYear: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), h("div", { key: '37f91da28018c7cc490926e100b91d17e77f9342', class: "ath-datepicker-calendar-date__footer" }, h("ath-button", { key: 'bb8fb4ba5551cbff5c6bf7a2cce7f3c663ef4945', clear: true, size: "sm", tabIndex: 0, iconPosition: "left", icon: "reload_double", onAthClick: this.reset }, "Restablecer"))))))));
    }
    static get is() { return "ath-datepicker"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["datepicker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["datepicker.css"]
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
                    "text": "Caption of the datepicker"
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
                    "original": "DatepickerFeedback",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "DatepickerFeedback": {
                            "location": "import",
                            "path": "./datepicker.model",
                            "id": "src/components/datepicker/datepicker.model.ts::DatepickerFeedback"
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
                "defaultValue": "DatepickerFeedbacks.None"
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
                    "text": "Message to help the user fills the datepicker."
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
                    "text": "Date format to be used in the datepicker. Only used when the type is 'date'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'DD/MM/YYYY'"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "The name of the datepicker. Submitted with the form as part of a name/value pair"
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
                    "original": "DatepickerSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "DatepickerSize": {
                            "location": "import",
                            "path": "./datepicker.model",
                            "id": "src/components/datepicker/datepicker.model.ts::DatepickerSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the datepicker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerSizes.Medium"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerType",
                    "resolved": "\"date\" | \"month\" | \"year\"",
                    "references": {
                        "DatepickerType": {
                            "location": "import",
                            "path": "./datepicker.model",
                            "id": "src/components/datepicker/datepicker.model.ts::DatepickerType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the datepicker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerTypes.Date"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerColor",
                    "resolved": "\"accent\" | \"primary\"",
                    "references": {
                        "DatepickerColor": {
                            "location": "import",
                            "path": "./datepicker.model",
                            "id": "src/components/datepicker/datepicker.model.ts::DatepickerColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the datepicker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "DatepickerColors.Primary"
            },
            "inputAriaLabel": {
                "type": "string",
                "attribute": "input-aria-label",
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
                    "text": "The aria-label attribute of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
            "inputValue": {},
            "shownDate": {},
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
            }, {
                "method": "athInput",
                "name": "athInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted every time the value is updated by introducing a change"
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
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=datepicker.js.map
