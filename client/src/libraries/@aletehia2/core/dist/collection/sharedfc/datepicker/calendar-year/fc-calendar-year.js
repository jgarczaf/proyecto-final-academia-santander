import { h } from "@stencil/core";
import { FcDatepickerItem } from "../datepicker-item/fc-datepicker-item";
import { compareYears, yearStart, addYears, isCompleteYear, findNextValidDay, findPrevValidDay, getDateBetweenLimits, } from "../../../utils/date-utils";
export const FcCalendarYear = props => {
    const referenceDate = yearStart(props.shownYear || props.selectedYear || new Date());
    let startYear = new Date(new Date().getFullYear() - 7, 0, 1);
    function getYears() {
        let endYear = new Date(new Date().getFullYear() + 4, 0, 1);
        const years = [];
        let row = [];
        while (startYear > referenceDate || endYear < referenceDate) {
            if (startYear > referenceDate) {
                startYear = addYears(startYear, -12);
                endYear = addYears(endYear, -12);
            }
            else {
                startYear = addYears(startYear, 12);
                endYear = addYears(endYear, 12);
            }
        }
        for (let index = 0; index < 12; index++) {
            row.push(new Date(startYear.getFullYear() + index, 0, 1));
            if (index % 3 === 2) {
                years.push(row);
                row = []; // Clear the array for the next row
            }
        }
        return years;
    }
    function isSelectedYear(year) {
        if (props.selectedYear) {
            return compareYears(year, props.selectedYear);
        }
        if (props.selectedRangeStart && !props.selectedRangeEnd) {
            return compareYears(year, props.selectedRangeStart);
        }
        if (props.selectedRangeEnd && !props.selectedRangeStart) {
            return compareYears(year, props.selectedRangeEnd);
        }
        if (props.selectedRangeStart && props.selectedRangeEnd && compareYears(props.selectedRangeStart, props.selectedRangeEnd)) {
            return compareYears(year, props.selectedRangeStart);
        }
        return false;
    }
    function isMiddleYear(year) {
        return props.selectedRangeStart && props.selectedRangeEnd ? year > props.selectedRangeStart && year < props.selectedRangeEnd : false;
    }
    function isStartYear(year) {
        return props.selectedRangeStart && !isSelectedYear(year) ? compareYears(year, props.selectedRangeStart) : false;
    }
    function isEndYear(year) {
        return props.selectedRangeEnd && !isSelectedYear(year) ? compareYears(year, props.selectedRangeEnd) : false;
    }
    function isDisabledYear(year) {
        return (isCompleteYear(year, props.disabledDates, props.minYear, props.maxYear) ||
            (props.disabledYears && props.disabledYears.some(d => compareYears(year, d))));
    }
    function isHighlightedYear(year) {
        return (isCompleteYear(year, props.highlightedDates) || (props.highlightedYears && props.highlightedYears.some(d => compareYears(year, d))));
    }
    function onKeyDown(key, year) {
        let nextDate = null;
        let isNext = true;
        switch (key.code) {
            case 'ArrowDown':
                nextDate = addYears(year, 3);
                isNext = true;
                break;
            case 'ArrowUp':
                nextDate = addYears(year, -3);
                isNext = false;
                break;
            case 'ArrowLeft':
                nextDate = addYears(year, -1);
                isNext = false;
                break;
            case 'ArrowRight':
                nextDate = addYears(year, 1);
                isNext = true;
                break;
            case 'Enter':
            case 'Space':
                key.stopPropagation();
                key.preventDefault();
                if (!isDisabledYear(year)) {
                    props.onYearSelect(null, getDateBetweenLimits(year, props.minYear, props.maxYear));
                }
                return;
            case 'Home':
                nextDate = new Date(Math.floor((year.getFullYear() - startYear.getFullYear()) / 3) * 3 + startYear.getFullYear(), 0, 1);
                isNext = true;
                break;
            case 'End':
                nextDate = new Date(Math.floor((year.getFullYear() - startYear.getFullYear()) / 3) * 3 + startYear.getFullYear() + 2, 0, 1);
                isNext = false;
                break;
            case 'PageUp':
                nextDate = addYears(year, -12);
                isNext = false;
                break;
            case 'PageDown':
                nextDate = addYears(year, 12);
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
                props.onChangeShownYear(findNextValidDay(nextDate, props.disabledYears || [], props.minYear, props.maxYear));
            }
            else {
                props.onChangeShownYear(findPrevValidDay(nextDate, props.disabledYears || [], props.minYear, props.maxYear));
            }
        }
        else {
            props.onChangeShownYear(getDateBetweenLimits(nextDate, props.minYear, props.maxYear));
        }
    }
    return (h("table", { role: "grid", class: "fc-calendar-year" }, h("tbody", { class: "fc-calendar-year__rows" }, getYears().map((row) => (h("tr", { class: "fc-calendar-year__row-years" }, row.map(year => (h(FcDatepickerItem, { onDatepickerItemRef: el => {
            if (el && compareYears(year, props.shownYear)) {
                if (props.hasFocus)
                    setTimeout(() => {
                        el.focus();
                    }, 1);
            }
        }, onSelect: props.onYearSelect, onKeyDown: e => onKeyDown(e, year), value: year, type: 'year', isFocusable: compareYears(year, referenceDate), isDisabled: isDisabledYear(year), isCurrent: compareYears(year, props.currentYear), isSelected: isSelectedYear(year), isStart: isStartYear(year), isMiddle: isMiddleYear(year), isEnd: isEndYear(year), isHighlighted: isHighlightedYear(year), color: props.color, text: `${year.getFullYear()}` })))))))));
};
//# sourceMappingURL=fc-calendar-year.js.map
