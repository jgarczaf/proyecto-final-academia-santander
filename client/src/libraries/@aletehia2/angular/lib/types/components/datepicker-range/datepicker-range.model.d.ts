import { ValueOf } from "../../utils/helper/index";
export declare const DatepickerRangeSizes: {
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
};
export declare const DatepickerRangeTypes: {
    readonly Date: "date";
    readonly Month: "month";
    readonly Year: "year";
};
export declare const DatepickerRangeColors: {
    readonly Primary: "primary";
    readonly Accent: "accent";
};
export declare const DatepickerRangeFeedbacks: {
    readonly None: "none";
    readonly Error: "error";
};
export declare enum DatepickerRangeFocusState {
    Start = 0,
    End = 1,
    None = 2
}
export type DatepickerRangeSize = ValueOf<typeof DatepickerRangeSizes>;
export type DatepickerRangeType = ValueOf<typeof DatepickerRangeTypes>;
export type DatepickerRangeColor = ValueOf<typeof DatepickerRangeColors>;
export type DatepickerRangeFeedback = ValueOf<typeof DatepickerRangeFeedbacks>;
