import { Host, h } from "@stencil/core";
import { ButtonIconPosition } from "../button/button.model";
import { FcButtonComp } from "../../sharedfc/input/index";
import { CalendarColors, CalendarTypes } from "./calendar.model";
import { addMonths, addYears, formatDateToMonth, formatDateToString, formatDateToYear, getDateBetweenLimits, getMonthName, isDisabledDate, monthStart, yearStart, } from "../../utils/date-utils";
import { FcCalendar, FcCalendarMonth, FcCalendarYear } from "../../sharedfc/datepicker/index";
export class AthCalendar {
    /**
     * The color of the Calendar.
     */
    color = CalendarColors.Primary;
    /**
     * The type of the Calendar.
     */
    type = CalendarTypes.Date;
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
        if (this.min || !isNaN(new Date(this.min).getTime())) {
            try {
                this.minDate = new Date(this.min);
            }
            catch (error) {
                this.minDate = undefined;
            }
        }
        else {
            this.minDate = undefined;
        }
    }
    minDate;
    /**
     * The maximum date that can be selected.
     */
    max;
    updateMax() {
        if (this.max || !isNaN(new Date(this.max).getTime())) {
            try {
                this.maxDate = new Date(this.max);
            }
            catch (error) {
                this.maxDate = undefined;
            }
        }
        else {
            this.maxDate = undefined;
        }
    }
    maxDate;
    selected;
    updateSelected() {
        if (this.selected && !isNaN(new Date(this.selected).getTime())) {
            try {
                this.selectedDate = new Date(this.selected);
                this.athChange.emit(this.selected);
            }
            catch (error) {
                this.selectedDate = undefined;
                this.athChange.emit(undefined);
                return;
            }
        }
        else {
            this.selectedDate = undefined;
            this.athChange.emit(undefined);
        }
    }
    selectedDate;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange;
    showType = CalendarTypes.Date;
    shownDate = new Date();
    ariaLiveMessage = '';
    componentWillLoad() {
        this.showType = this.type;
        this.updateMin();
        this.updateMax();
        if (this.selected && !isNaN(new Date(this.selected).getTime())) {
            try {
                this.selectedDate = new Date(this.selected);
            }
            catch (error) {
                this.selectedDate = undefined;
            }
        }
        else {
            this.selectedDate = undefined;
        }
        this.updateDisabledDates();
        this.updateHighlightedDates();
        if (this.selectedDate) {
            this.shownDate = this.selectedDate;
        }
    }
    handleClickMonth = () => {
        this.showType = CalendarTypes.Month;
        this.setAriaLiveMessage('Vista de selección de mes abierta');
    };
    handleClickYear = () => {
        this.showType = CalendarTypes.Year;
        this.setAriaLiveMessage('Vista de selección de año abierta');
    };
    handleDaySelect = (_event, day) => {
        this.selected = day.toISOString();
        this.shownDate = day;
        this.setAriaLiveMessage(`Fecha seleccionada: ${formatDateToString(day, 'DD/MM/YYYY')}`);
    };
    handleMonthSelect = (_event, month) => {
        if (this.type === CalendarTypes.Month) {
            this.selected = month.toISOString();
            this.shownDate = month;
            return;
        }
        this.shownDate = getDateBetweenLimits(month, this.minDate, this.maxDate);
        this.showType = CalendarTypes.Date;
        this.setAriaLiveMessage(`Mes seleccionado: ${formatDateToMonth(month)}. Vista de calendario abierta`);
    };
    handleYearSelect = (_event, year) => {
        if (this.type === CalendarTypes.Year) {
            this.selected = year.toISOString();
            this.shownDate = year;
            this.setAriaLiveMessage(`Año seleccionado: ${formatDateToYear(year)}`);
            return;
        }
        this.shownDate = getDateBetweenLimits(year, this.minDate, this.maxDate);
        this.showType = CalendarTypes.Month;
        this.setAriaLiveMessage(`Año seleccionado: ${formatDateToYear(year)}. Vista de selección de mes abierta`);
    };
    handlePrevButton = () => {
        let navigationMessage = '';
        switch (this.showType) {
            case CalendarTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case CalendarTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case CalendarTypes.Year:
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
            case CalendarTypes.Date:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), this.shownDate.getMonth(), 0), [], this.minDate, this.maxDate);
            case CalendarTypes.Month:
                return isDisabledDate(new Date(this.shownDate.getFullYear(), 0, 0), [], this.minDate, this.maxDate);
            case CalendarTypes.Year:
                return isDisabledDate(addYears(new Date(this.shownDate.getFullYear(), 0, 0), -12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    handleNextButton = () => {
        let navigationMessage = '';
        switch (this.showType) {
            case CalendarTypes.Date:
                this.shownDate = getDateBetweenLimits(addMonths(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case CalendarTypes.Month:
                this.shownDate = getDateBetweenLimits(addYears(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case CalendarTypes.Year:
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
    getPrevButtonAriaLabel = () => {
        switch (this.showType) {
            case CalendarTypes.Date:
                return 'Mes anterior';
            case CalendarTypes.Month:
                return 'Año anterior';
            case CalendarTypes.Year:
                return 'Página de años anterior';
            default:
                return 'Mes anterior';
        }
    };
    isNextButtonDisabled = () => {
        switch (this.showType) {
            case CalendarTypes.Date:
                return isDisabledDate(addMonths(monthStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case CalendarTypes.Month:
                return isDisabledDate(addYears(yearStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case CalendarTypes.Year:
                return isDisabledDate(addYears(yearStart(this.shownDate), 12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    getNextButtonAriaLabel = () => {
        switch (this.showType) {
            case CalendarTypes.Date:
                return 'Mes siguiente';
            case CalendarTypes.Month:
                return 'Año siguiente';
            case CalendarTypes.Year:
                return 'Página de años siguiente';
            default:
                return 'Mes siguiente';
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
    setAriaLiveMessage = (message) => {
        this.ariaLiveMessage = message;
        setTimeout(() => (this.ariaLiveMessage = ''), 2000);
    };
    render() {
        return (h(Host, { key: 'be38718b82366d10add964f508474abefed26ac4' }, h("div", { key: '455cdfc1511bf324e2df0702bee4522676d1afd3', class: "ath-calendar" }, h("div", { key: '276cd27857fcd30759e2132f1f41749a9104f801', "aria-live": "polite", "aria-atomic": "true", class: "sr-only", role: "status" }, this.ariaLiveMessage), h("div", { key: 'b37d6e41faf8821ae32d93564f6a35b3d7660e58', class: "ath-calendar__header" }, h(FcButtonComp, { key: '15d1dde8e554530844100b22f59a1c6bd2f37e82', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_left", disabled: this.isPrevButtonDisabled(), onClick: this.handlePrevButton, buttonAriaLabel: this.getPrevButtonAriaLabel() }), h("div", { key: '7c23ea1cb57218fa4e620ce98149aaaef00b5ef8', class: "ath-calendar__header__date" }, this.showType !== 'year' && (h("ath-button", { key: 'ae5ad5261b8adbd0f1e0182c1ecdfa7241286fbb', clear: true, size: "sm", onAthClick: this.handleClickMonth, onKeyDown: e => this.handleKeyDownOverButton(e, 'month'), "aria-label": `Cambiar a vista de selección de mes. Mes seleccionado: ${this.shownDate ? getMonthName(this.shownDate) : this.selectedDate ? getMonthName(this.selectedDate) : getMonthName(new Date())}` }, this.shownDate ? getMonthName(this.shownDate) : this.selectedDate ? getMonthName(this.selectedDate) : getMonthName(new Date()))), h("ath-button", { key: 'be78dcfccf08ec652db769b71e0e7e9562f96ec0', clear: true, size: "sm", onAthClick: this.handleClickYear, onKeyDown: e => this.handleKeyDownOverButton(e, 'year'), "aria-label": `Cambiar a vista de selección de año. Año seleccionado: ${this.shownDate ? this.shownDate.getFullYear() : this.selectedDate ? this.selectedDate.getFullYear() : new Date().getFullYear()}` }, this.shownDate ? this.shownDate.getFullYear() : this.selectedDate ? this.selectedDate.getFullYear() : new Date().getFullYear())), h(FcButtonComp, { key: 'cd1f239ee368386a5a0c23368ce9faee1677ad37', size: "sm", color: "default", iconPosition: ButtonIconPosition.IconOnly, icon: "chevron_right", disabled: this.isNextButtonDisabled(), onClick: this.handleNextButton, buttonAriaLabel: this.getNextButtonAriaLabel() })), this.showType === 'date' && (h("div", { key: '80fcf523b7bd3b99d3462eaf4954337c2d183fb6', class: "ath-calendar__date" }, h(FcCalendar, { key: '84826a67549241f786c68c373e8323d2c8135bf6', shownDate: this.shownDate || this.selectedDate || new Date(), selectedDate: this.selectedDate, onDateSelect: this.handleDaySelect, currentDate: new Date(), color: this.color, hasFocus: true, disabledDate: this.disabledDatesAux, highlightedDate: this.highlightedDatesAux, highlightedWeekends: this.highlightedWeekends, minDate: this.minDate, maxDate: this.maxDate, onChangeShownDate: (date) => {
                this.shownDate = date;
            } }))), this.showType === 'month' && (h("div", { key: '8f672526e644ecd4548ec951d405c4cf201bb537', class: "ath-calendar__month" }, h(FcCalendarMonth, { key: 'ad5243d55695cfe7de18606694be791e79391142', shownMonth: this.shownDate || this.selectedDate || new Date(), selectedMonth: this.selectedDate, onMonthSelect: this.handleMonthSelect, currentMonth: new Date(), color: this.color, hasFocus: true, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minMonth: this.minDate, maxMonth: this.maxDate, onChangeShownMonth: (date) => {
                this.shownDate = date;
            } }))), this.showType === 'year' && (h("div", { key: 'cf3c3aa61de765ccaa245fe600db427e2c01fe3b', class: "ath-calendar__year" }, h(FcCalendarYear, { key: '60b9e85642ca24e697ae7f137c95013f8da8e26d', shownYear: this.shownDate || this.selectedDate || new Date(), selectedYear: this.selectedDate, onYearSelect: this.handleYearSelect, currentYear: new Date(), color: this.color, hasFocus: true, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minYear: this.minDate, maxYear: this.maxDate, onChangeShownYear: (date) => {
                this.shownDate = date;
            } }))))));
    }
    static get is() { return "ath-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["calendar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["calendar.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "CalendarColor",
                    "resolved": "\"accent\" | \"primary\"",
                    "references": {
                        "CalendarColor": {
                            "location": "import",
                            "path": "./calendar.model",
                            "id": "src/components/calendar/calendar.model.ts::CalendarColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the Calendar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CalendarColors.Primary"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "CalendarType",
                    "resolved": "\"date\" | \"month\" | \"year\"",
                    "references": {
                        "CalendarType": {
                            "location": "import",
                            "path": "./calendar.model",
                            "id": "src/components/calendar/calendar.model.ts::CalendarType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the Calendar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CalendarTypes.Date"
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
            "selected": {
                "type": "string",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "showType": {},
            "shownDate": {},
            "ariaLiveMessage": {}
        };
    }
    static get events() {
        return [{
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
    static get watchers() {
        return [{
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
                "propName": "selected",
                "methodName": "updateSelected"
            }];
    }
}
//# sourceMappingURL=calendar.js.map
