import { ValueOf } from "../../utils/helper/index";
export declare const CalendarTypes: {
    readonly Date: "date";
    readonly Month: "month";
    readonly Year: "year";
};
export declare const CalendarColors: {
    readonly Primary: "primary";
    readonly Accent: "accent";
};
export type CalendarType = ValueOf<typeof CalendarTypes>;
export type CalendarColor = ValueOf<typeof CalendarColors>;
