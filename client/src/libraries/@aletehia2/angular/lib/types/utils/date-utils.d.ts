export declare enum WeekDays {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare enum WeekDaysInitials {
    Sunday = "D",
    Monday = "L",
    Tuesday = "M",
    Wednesday = "X",
    Thursday = "J",
    Friday = "V",
    Saturday = "S"
}
export declare function getWeekDaysInitials(firstWeekDay?: WeekDays): WeekDaysInitials[];
export declare enum WeekDaysNames {
    'D' = "Domingo",
    'L' = "Lunes",
    'M' = "Martes",
    'X' = "Mi\u00E9rcoles",
    'J' = "Jueves",
    'V' = "Viernes",
    'S' = "S\u00E1bado"
}
export declare function getWeekDaysNamesFromInitials(initial: WeekDaysInitials): string;
export declare function getWeekDaysNamesFromDate(date: Date): string;
export declare function weekStart(date: Date, firstDayOfWeek?: WeekDays): Date;
export declare function monthStart(date: Date): Date;
export declare function yearStart(date: Date): Date;
export declare function addDays(date: Date, days: number): Date;
export declare function addMonths(date: Date, months: number): Date;
export declare function addYears(date: Date, years: number): Date;
export declare function getMonthName(date: Date): string;
export declare function getMonthNameShort(date: Date): string;
export declare function getWeeks(refDate: Date, firstDayOfWeek?: WeekDays, numberofWeeks?: number): Date[][];
export declare function compareDates(date1: Date, date2: Date): boolean;
export declare function compareMonths(month1: Date, month2: Date): boolean;
export declare function compareYears(year1: Date, year2: Date): boolean;
export declare function isCompleteMonth(month: Date, collection: Date[], min?: Date, max?: Date): boolean;
export declare function isCompleteYear(year: Date, collection: Date[], min?: Date, max?: Date): boolean;
/**
 * Parses a date string according to the specified format and returns a Date object
 * @param dateStr The date string to parse
 * @param format The format of the date string (e.g., 'DD/MM/YYYY')
 * @returns A Date object representing the parsed date
 * @throws Error if the date string doesn't match the format or is invalid
 */
export declare function formatDate(dateStr: string, format: string): Date;
/**
 * Formats a Date object into a string according to the specified format
 * @param date The Date object to format
 * @param format The desired format (e.g., 'DD/MM/YYYY')
 * @returns A formatted date string
 */
export declare function formatDateToString(date: Date, format: string): string;
export declare function formatDateToISO(date: Date): string;
export declare function formatDateToAriaLabel(date: Date, type?: 'day' | 'month' | 'year'): string;
export declare function formatDateToMonth(date: Date): string;
export declare function formatDateToYear(date: Date): string;
export declare function isDisabledDate(day: Date, disabledDates: Date[], minDate?: Date, maxDate?: Date): boolean;
export declare function getDateBetweenLimits(date: Date, min?: Date, max?: Date): Date | null;
export declare function findNextValidDay(date: Date, disabledDates: Date[], min?: Date, max?: Date): Date | null;
export declare function findPrevValidDay(date: Date, disabledDates: Date[], min?: Date, max?: Date): Date | null;
export declare function isValidRange(startRange: Date, endRange: Date, disabledDates: Date[], min?: Date, max?: Date): boolean;
export declare function getValueRangeObject(valueFrom: string, valueTo: string): {
    start: string;
    end: string;
};
export declare function getValueRangeString(valueFrom: string, valueTo: string): string;
export declare function getSROnlyHelperText(): string;
