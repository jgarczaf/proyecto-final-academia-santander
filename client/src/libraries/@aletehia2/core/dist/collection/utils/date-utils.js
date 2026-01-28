export var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
export var WeekDaysInitials;
(function (WeekDaysInitials) {
    WeekDaysInitials["Sunday"] = "D";
    WeekDaysInitials["Monday"] = "L";
    WeekDaysInitials["Tuesday"] = "M";
    WeekDaysInitials["Wednesday"] = "X";
    WeekDaysInitials["Thursday"] = "J";
    WeekDaysInitials["Friday"] = "V";
    WeekDaysInitials["Saturday"] = "S";
})(WeekDaysInitials || (WeekDaysInitials = {}));
export function getWeekDaysInitials(firstWeekDay = WeekDays.Monday) {
    const weekDaysInitials = Object.values(WeekDaysInitials);
    return [...weekDaysInitials.slice(firstWeekDay), ...weekDaysInitials.slice(0, firstWeekDay)];
}
export var WeekDaysNames;
(function (WeekDaysNames) {
    WeekDaysNames["D"] = "Domingo";
    WeekDaysNames["L"] = "Lunes";
    WeekDaysNames["M"] = "Martes";
    WeekDaysNames["X"] = "Mi\u00E9rcoles";
    WeekDaysNames["J"] = "Jueves";
    WeekDaysNames["V"] = "Viernes";
    WeekDaysNames["S"] = "S\u00E1bado";
})(WeekDaysNames || (WeekDaysNames = {}));
export function getWeekDaysNamesFromInitials(initial) {
    return WeekDaysNames[initial];
}
export function getWeekDaysNamesFromDate(date) {
    const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    if (!date || isNaN(date.getTime())) {
        throw new Error('Invalid date provided');
    }
    return DAY_NAMES[date.getDay()];
}
export function weekStart(date, firstDayOfWeek = WeekDays.Monday) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
    d.setDate(d.getDate() - diff);
    return d;
}
export function monthStart(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
export function yearStart(date) {
    return new Date(date.getFullYear(), 0, 1);
}
export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}
export function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(date.getMonth() + months);
    return result;
}
export function addYears(date, years) {
    const result = new Date(date);
    result.setFullYear(date.getFullYear() + years);
    return result;
}
export function getMonthName(date) {
    try {
        const options = { month: 'long' };
        const monthName = new Intl.DateTimeFormat('es-ES', options).format(date);
        // Capitalize the first letter
        return monthName.charAt(0).toUpperCase() + monthName.slice(1);
    }
    catch (e) {
        console.error('Error getting month name:', date, e);
    }
}
export function getMonthNameShort(date) {
    const monthName = new Intl.DateTimeFormat('es-ES', { month: 'short' }).format(date);
    return monthName.toUpperCase().slice(0, 3); // Return the first 3 letters in uppercase
}
export function getWeeks(refDate, firstDayOfWeek = WeekDays.Monday, numberofWeeks = undefined) {
    const weeks = [];
    const firstDayOfTheMonth = new Date(refDate.getFullYear(), refDate.getMonth(), 1);
    let refDay = weekStart(firstDayOfTheMonth, firstDayOfWeek);
    if (numberofWeeks) {
        for (let i = 0; i < numberofWeeks; i++) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push(addDays(refDay, i));
            }
            weeks.push(week);
            refDay = addDays(refDay, 7);
        }
    }
    else {
        const currentMonth = refDate.getMonth();
        const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        while (refDay.getMonth() === currentMonth || refDay.getMonth() === prevMonth) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push(addDays(refDay, i));
            }
            weeks.push(week);
            refDay = addDays(refDay, 7);
        }
    }
    return weeks;
}
export function compareDates(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return d1.getTime() === d2.getTime();
}
export function compareMonths(month1, month2) {
    if (!month1 || !month2) {
        return false;
    }
    const m1 = new Date(month1.getFullYear(), month1.getMonth(), 1);
    const m2 = new Date(month2.getFullYear(), month2.getMonth(), 1);
    return m1.getTime() === m2.getTime();
}
export function compareYears(year1, year2) {
    if (!year1 || !year2) {
        return false;
    }
    const y1 = new Date(year1.getFullYear(), 0, 1);
    const y2 = new Date(year2.getFullYear(), 0, 1);
    return y1.getTime() === y2.getTime();
}
export function isCompleteMonth(month, collection, min = null, max = null) {
    if (!month) {
        return false;
    }
    let startMonth = monthStart(month);
    const endMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    if (min && endMonth < min) {
        return true;
    }
    if (max && startMonth > max) {
        return true;
    }
    if (!collection || collection.length === 0) {
        return false;
    }
    while (compareMonths(month, startMonth)) {
        if (!collection.some(d => compareDates(d, startMonth)) && !(min && startMonth < min) && !(max && startMonth > max)) {
            return false;
        }
        startMonth = addDays(startMonth, 1);
    }
    return true;
}
export function isCompleteYear(year, collection, min = null, max = null) {
    if (!year) {
        return false;
    }
    let startYear = yearStart(year);
    const endYear = new Date(year.getFullYear(), 11, 31);
    if (min && endYear < min) {
        return true;
    }
    if (max && startYear > max) {
        return true;
    }
    if (!collection || collection.length === 0) {
        return false;
    }
    while (compareYears(year, startYear)) {
        if (!collection.some(d => compareDates(d, startYear)) && !(min && startYear < min) && !(max && startYear > max)) {
            return false;
        }
        startYear = addDays(startYear, 1);
    }
    return true;
}
/**
 * Parses a date string according to the specified format and returns a Date object
 * @param dateStr The date string to parse
 * @param format The format of the date string (e.g., 'DD/MM/YYYY')
 * @returns A Date object representing the parsed date
 * @throws Error if the date string doesn't match the format or is invalid
 */
export function formatDate(dateStr, format) {
    if (!dateStr || !format) {
        throw new Error('Date string and format are required');
    }
    // Split the format and date strings into parts
    const formatDelimiters = format.match(/[^A-Za-z0-9]/g) || ['/'];
    const dateDelimiters = dateStr.match(/[^0-9]/g) || formatDelimiters;
    // Create regex patterns for splitting both strings
    const formatRegex = new RegExp(`[${formatDelimiters.join('')}]`);
    const dateRegex = new RegExp(`[${dateDelimiters.join('')}]`);
    const formatParts = format.split(formatRegex);
    const dateParts = dateStr.split(dateRegex);
    if (formatParts.length !== dateParts.length) {
        throw new Error('Date string does not match the specified format');
    }
    let day = 1, month = 0, year = new Date().getFullYear();
    // Map each part of the date to its corresponding component
    formatParts.forEach((part, index) => {
        if (index < dateParts.length && dateParts[index]) {
            const value = parseInt(dateParts[index], 10);
            if (isNaN(value)) {
                throw new Error(`Invalid numeric value in date string: ${dateParts[index]}`);
            }
            const formatPart = part.toLowerCase();
            if (formatPart.startsWith('d')) {
                day = value;
            }
            else if (formatPart.startsWith('m')) {
                month = value - 1; // JavaScript months are 0-indexed
            }
            else if (formatPart.startsWith('y') || formatPart.startsWith('a')) {
                year = value;
                if (formatPart.length === 2 && dateParts[index].length <= 2) {
                    year = value + (value < 50 ? 2000 : 1900);
                }
            }
        }
    });
    const parsedDate = new Date(year, month, day);
    // Check if the date is valid and matches the input
    if (isNaN(parsedDate.getTime()) || parsedDate.getFullYear() !== year || parsedDate.getMonth() !== month || parsedDate.getDate() !== day) {
        throw new Error('Invalid date');
    }
    return parsedDate;
}
/**
 * Formats a Date object into a string according to the specified format
 * @param date The Date object to format
 * @param format The desired format (e.g., 'DD/MM/YYYY')
 * @returns A formatted date string
 */
export function formatDateToString(date, format) {
    if (!date || isNaN(date.getTime())) {
        throw new Error('Invalid date object');
    }
    if (!format) {
        throw new Error('Format string is required');
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let result = format;
    if (result.includes('YYYY')) {
        result = result.replace('YYYY', year.toString().padStart(4, '0'));
    }
    else if (result.includes('YY')) {
        result = result.replace('YY', (year % 100).toString().padStart(2, '0'));
    }
    if (result.includes('MM')) {
        result = result.replace('MM', month.toString().padStart(2, '0'));
    }
    else if (result.includes('M')) {
        result = result.replace('M', month.toString());
    }
    if (result.includes('DD')) {
        result = result.replace('DD', day.toString().padStart(2, '0'));
    }
    else if (result.includes('D')) {
        result = result.replace('D', day.toString());
    }
    return result;
}
export function formatDateToISO(date) {
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    return `${date.getFullYear()}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`;
}
export function formatDateToAriaLabel(date, type = 'day') {
    switch (type) {
        case 'month':
            return `${getMonthName(date)}, ${date.getFullYear()}`;
        case 'year':
            return `${date.getFullYear()}`;
        default:
            return `${getWeekDaysNamesFromDate(date)}, ${date.getDate()} de ${getMonthName(date)}, ${date.getFullYear()}`;
    }
}
export function formatDateToMonth(date) {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}
export function formatDateToYear(date) {
    return date.getFullYear().toString();
}
export function isDisabledDate(day, disabledDates, minDate = null, maxDate = null) {
    return (disabledDates?.some(d => d.toDateString() === day.toDateString()) ||
        (minDate != undefined && day < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) ||
        (maxDate != undefined && day > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())));
}
export function getDateBetweenLimits(date, min = null, max = null) {
    if (!date) {
        return null;
    }
    if (min && date < min) {
        return min;
    }
    if (max && date > max) {
        return max;
    }
    return date;
}
export function findNextValidDay(date, disabledDates, min = null, max = null) {
    if (!date) {
        return null;
    }
    if ((!disabledDates || disabledDates.length === 0) && !min && !max) {
        return date;
    }
    let nextDate = new Date(date);
    while (!max || nextDate <= max) {
        if (!isDisabledDate(nextDate, disabledDates, min, max)) {
            return nextDate;
        }
        if (max && nextDate > max) {
            return max;
        }
        nextDate.setDate(nextDate.getDate() + 1);
    }
    return null;
}
export function findPrevValidDay(date, disabledDates, min = null, max = null) {
    if (!date) {
        return null;
    }
    if ((!disabledDates || disabledDates.length === 0) && !min && !max) {
        return date;
    }
    let prevDate = new Date(date);
    while (!min || prevDate >= min) {
        if (!isDisabledDate(prevDate, disabledDates, min, max)) {
            return prevDate;
        }
        if (min && prevDate < min) {
            return min;
        }
        prevDate.setDate(prevDate.getDate() - 1);
    }
    return null;
}
export function isValidRange(startRange, endRange, disabledDates, min = null, max = null) {
    if (!startRange || !endRange || (min && startRange < min) || (max && endRange > max)) {
        return false;
    }
    if (disabledDates && disabledDates.length > 0) {
        return !disabledDates.some(disabledDate => disabledDate >= startRange && disabledDate <= endRange);
    }
    return true;
}
export function getValueRangeObject(valueFrom, valueTo) {
    return {
        start: valueFrom,
        end: valueTo,
    };
}
export function getValueRangeString(valueFrom, valueTo) {
    return `['${valueFrom ?? ''}','${valueTo ?? ''}']`;
}
export function getSROnlyHelperText() {
    return 'Presiona flecha abajo para abrir el calendario y Escape para cerrarlo.';
}
//# sourceMappingURL=date-utils.js.map
