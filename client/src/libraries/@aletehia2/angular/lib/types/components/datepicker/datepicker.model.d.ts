import { ValueOf } from "../../utils/helper/index";
export declare const DatepickerSizes: {
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
};
export declare const DatepickerTypes: {
    readonly Date: "date";
    readonly Month: "month";
    readonly Year: "year";
};
export declare const DatepickerColors: {
    readonly Primary: "primary";
    readonly Accent: "accent";
};
export declare const DatepickerFeedbacks: {
    readonly None: "none";
    readonly Error: "error";
};
export type DatepickerSize = ValueOf<typeof DatepickerSizes>;
export type DatepickerType = ValueOf<typeof DatepickerTypes>;
export type DatepickerColor = ValueOf<typeof DatepickerColors>;
export type DatepickerFeedback = ValueOf<typeof DatepickerFeedbacks>;
