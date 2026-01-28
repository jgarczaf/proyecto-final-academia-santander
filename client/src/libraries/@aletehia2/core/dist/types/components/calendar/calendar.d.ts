import { ComponentInterface, ComponentWillLoad, EventEmitter } from '../../stencil-public-runtime';
import { CalendarColor, CalendarType } from './calendar.model';
export declare class AthCalendar implements ComponentInterface, ComponentWillLoad {
    /**
     * The color of the Calendar.
     */
    color: CalendarColor;
    /**
     * The type of the Calendar.
     */
    type: CalendarType;
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
    selected?: string;
    updateSelected(): void;
    private selectedDate;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<string>;
    showType: CalendarType;
    shownDate: Date;
    ariaLiveMessage: string;
    componentWillLoad(): void;
    private handleClickMonth;
    private handleClickYear;
    private handleDaySelect;
    private handleMonthSelect;
    private handleYearSelect;
    private handlePrevButton;
    private isPrevButtonDisabled;
    private handleNextButton;
    private getPrevButtonAriaLabel;
    private isNextButtonDisabled;
    private getNextButtonAriaLabel;
    private handleKeyDownOverButton;
    private setAriaLiveMessage;
    render(): any;
}
