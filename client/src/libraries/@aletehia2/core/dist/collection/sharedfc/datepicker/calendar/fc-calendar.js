import { h } from "@stencil/core";
import { FcDatepickerItem } from "../datepicker-item/fc-datepicker-item";
import { addDays, findNextValidDay, findPrevValidDay, getDateBetweenLimits, getWeekDaysInitials, getWeekDaysNamesFromInitials, getWeeks, isDisabledDate, WeekDays, weekStart, } from "../../../utils/date-utils";
export const FcCalendar = props => {
    const referenceDate = props.shownDate || props.selectedDate || props.selectedRangeStart || new Date();
    function onKeyDown(key, day) {
        let nextDate = null;
        let isNext = true;
        switch (key.code) {
            case 'ArrowDown':
                nextDate = addDays(day, 7);
                isNext = true;
                break;
            case 'ArrowUp':
                nextDate = addDays(day, -7);
                isNext = false;
                break;
            case 'ArrowLeft':
                nextDate = addDays(day, -1);
                isNext = false;
                break;
            case 'ArrowRight':
                nextDate = addDays(day, 1);
                isNext = true;
                break;
            case 'Enter':
            case 'Space':
                key.stopPropagation();
                key.preventDefault();
                if (!isDisabledDate(day, props.disabledDate || [], props.minDate, props.maxDate)) {
                    props.onDateSelect(null, day);
                }
                return;
            case 'Home':
                nextDate = weekStart(day);
                isNext = true;
                break;
            case 'End':
                nextDate = addDays(weekStart(day), 6);
                isNext = false;
                break;
            case 'PageUp':
                nextDate = new Date(day.getFullYear(), day.getMonth() - 1, day.getDate());
                isNext = false;
                break;
            case 'PageDown':
                nextDate = new Date(day.getFullYear(), day.getMonth() + 1, day.getDate());
                isNext = true;
                break;
            case 'Escape':
                key.stopPropagation();
                key.preventDefault();
                props.onExit();
                return;
            default:
                return;
        }
        key.stopPropagation();
        key.preventDefault();
        if (key.ctrlKey) {
            if (isNext) {
                props.onChangeShownDate(findNextValidDay(nextDate, props.disabledDate || [], props.minDate, props.maxDate));
            }
            else {
                props.onChangeShownDate(findPrevValidDay(nextDate, props.disabledDate || [], props.minDate, props.maxDate));
            }
        }
        else {
            props.onChangeShownDate(getDateBetweenLimits(nextDate, props.minDate, props.maxDate));
        }
    }
    const selectedDateString = props.selectedDate?.toDateString();
    const selectedRangeStartString = props.selectedRangeStart?.toDateString();
    const selectedRangeEndString = props.selectedRangeEnd?.toDateString();
    function isSelectedDay(day) {
        const dayString = day.toDateString();
        if (selectedDateString) {
            return dayString === selectedDateString;
        }
        if (selectedRangeStartString && !props.selectedRangeEnd) {
            return dayString === selectedRangeStartString;
        }
        if (selectedRangeEndString && !props.selectedRangeStart) {
            return dayString === selectedRangeEndString;
        }
        if (selectedRangeStartString && selectedRangeEndString && selectedRangeStartString === selectedRangeEndString) {
            return dayString === selectedRangeStartString;
        }
        return false;
    }
    function isMiddleDay(day) {
        return props.selectedRangeStart && props.selectedRangeEnd ? day > props.selectedRangeStart && day < props.selectedRangeEnd : false;
    }
    function isStartDay(day) {
        return selectedRangeStartString && !isSelectedDay(day) ? day.toDateString() === selectedRangeStartString : false;
    }
    function isEndDay(day) {
        return selectedRangeEndString && !isSelectedDay(day) ? day.toDateString() === selectedRangeEndString : false;
    }
    function isHighlighted(day) {
        if (props.highlightedWeekends && (day.getDay() == 6 || day.getDay() == 0)) {
            return true;
        }
        return props.highlightedDate?.some(d => d.toDateString() === day.toDateString());
    }
    return (h("table", { role: "grid", class: "fc-calendar" }, h("thead", { class: "fc-calendar__header-week" }, getWeekDaysInitials(props.firstDayOfTheWeek ?? WeekDays.Monday).map(day => (h("th", { scope: "col", class: "fc-calendar__header-week__day", "aria-label": getWeekDaysNamesFromInitials(day) }, day)))), h("tbody", { class: "fc-calendar__body-week w-full" }, getWeeks(referenceDate, props.firstDayOfTheWeek ?? WeekDays.Monday, 6).map((week) => (h("tr", { class: "fc-calendar__row-days" }, week.map(day => (h(FcDatepickerItem, { onDatepickerItemRef: el => {
            if (el && props.hasFocus && day.toDateString() === props.shownDate.toDateString()) {
                setTimeout(() => {
                    el.focus();
                }, 1);
            }
        }, onSelect: props.onDateSelect, onKeyDown: e => onKeyDown(e, day), value: day, type: 'day', isFocusable: day.toDateString() === referenceDate.toDateString(), isDisabled: isDisabledDate(day, props.disabledDate || [], props.minDate, props.maxDate), isOtherMonth: day.getMonth() !== referenceDate.getMonth(), isCurrent: day.toDateString() === (props.currentDate || new Date()).toDateString(), isSelected: isSelectedDay(day), isStart: isStartDay(day), isMiddle: isMiddleDay(day), isEnd: isEndDay(day), isHighlighted: isHighlighted(day), color: props.color, text: day.getDate().toString() })))))))));
};
//# sourceMappingURL=fc-calendar.js.map
