import { h } from "@stencil/core";
import { FcDatepickerItem } from "../datepicker-item/fc-datepicker-item";
import { monthStart, compareMonths, getMonthNameShort, addMonths, isCompleteMonth, getDateBetweenLimits, findNextValidDay, findPrevValidDay, } from "../../../utils/date-utils";
export const FcCalendarMonth = props => {
    const referenceDate = monthStart(props.shownMonth || props.selectedMonth || new Date());
    function getMonths() {
        const months = [];
        let row = [];
        for (let index = 0; index < 12; index++) {
            row.push(new Date(new Date(referenceDate.getFullYear(), index, 1)));
            if (index % 3 === 2) {
                months.push(row);
                row = []; // Clear the array for the next row
            }
        }
        return months;
    }
    function isDisabledMonth(month) {
        return (isCompleteMonth(month, props.disabledDates, props.minMonth, props.maxMonth) ||
            (props.disabledMonths && props.disabledMonths.some(d => compareMonths(month, d))));
    }
    function isHighlightedMonth(month) {
        return (isCompleteMonth(month, props.highlightedDates) ||
            (props.highlightedMonths && props.highlightedMonths.some(d => compareMonths(month, d))));
    }
    function isSelectedMonth(month) {
        if (props.selectedMonth) {
            return compareMonths(month, props.selectedMonth);
        }
        if (props.selectedRangeStart && !props.selectedRangeEnd) {
            return compareMonths(month, props.selectedRangeStart);
        }
        if (props.selectedRangeEnd && !props.selectedRangeStart) {
            return compareMonths(month, props.selectedRangeEnd);
        }
        if (props.selectedRangeStart && props.selectedRangeEnd && compareMonths(props.selectedRangeStart, props.selectedRangeEnd)) {
            return compareMonths(month, props.selectedRangeStart);
        }
        return false;
    }
    function isMiddleMonth(month) {
        return props.selectedRangeStart && props.selectedRangeEnd ? month > props.selectedRangeStart && month < props.selectedRangeEnd : false;
    }
    function isStartMonth(month) {
        return props.selectedRangeStart && !isSelectedMonth(month) ? compareMonths(month, props.selectedRangeStart) : false;
    }
    function isEndMonth(month) {
        return props.selectedRangeEnd && !isSelectedMonth(month) ? compareMonths(month, props.selectedRangeEnd) : false;
    }
    function onKeyDown(key, month) {
        let nextDate = null;
        let isNext = true;
        switch (key.code) {
            case 'ArrowDown':
                nextDate = addMonths(month, 3);
                isNext = true;
                break;
            case 'ArrowUp':
                nextDate = addMonths(month, -3);
                isNext = false;
                break;
            case 'ArrowLeft':
                nextDate = addMonths(month, -1);
                isNext = false;
                break;
            case 'ArrowRight':
                nextDate = addMonths(month, 1);
                isNext = true;
                break;
            case 'Enter':
            case 'Space':
                key.stopPropagation();
                key.preventDefault();
                if (!isDisabledMonth(month)) {
                    props.onMonthSelect(null, getDateBetweenLimits(month, props.minMonth, props.maxMonth));
                }
                return;
            case 'Home':
                nextDate = new Date(month.getFullYear(), Math.floor(month.getMonth() / 3) * 3, 1);
                isNext = true;
                break;
            case 'End':
                nextDate = new Date(month.getFullYear(), Math.floor(month.getMonth() / 3) * 3 + 2, 1);
                isNext = false;
                break;
            case 'PageUp':
                nextDate = addMonths(month, -12);
                isNext = false;
                break;
            case 'PageDown':
                nextDate = addMonths(month, 12);
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
                props.onChangeShownMonth(findNextValidDay(nextDate, props.disabledMonths || [], props.minMonth, props.maxMonth));
            }
            else {
                props.onChangeShownMonth(findPrevValidDay(nextDate, props.disabledMonths || [], props.minMonth, props.maxMonth));
            }
        }
        else {
            props.onChangeShownMonth(getDateBetweenLimits(nextDate, props.minMonth, props.maxMonth));
        }
    }
    return (h("table", { role: "grid", class: "fc-calendar-month" }, h("tbody", { class: "fc-calendar-month__rows" }, getMonths().map((row) => (h("tr", { class: "fc-calendar-month__row-months" }, row.map(month => (h(FcDatepickerItem, { onDatepickerItemRef: el => {
            if (el && compareMonths(month, props.shownMonth)) {
                if (props.hasFocus) {
                    setTimeout(() => {
                        el.focus();
                    }, 1);
                }
            }
        }, onSelect: props.onMonthSelect, onKeyDown: e => onKeyDown(e, month), value: month, type: 'month', isFocusable: compareMonths(month, referenceDate), isDisabled: isDisabledMonth(month), isCurrent: compareMonths(month, props.currentMonth), isSelected: isSelectedMonth(month), isStart: isStartMonth(month), isMiddle: isMiddleMonth(month), isEnd: isEndMonth(month), isHighlighted: isHighlightedMonth(month), color: props.color, text: getMonthNameShort(month) })))))))));
};
//# sourceMappingURL=fc-calendar-month.js.map
