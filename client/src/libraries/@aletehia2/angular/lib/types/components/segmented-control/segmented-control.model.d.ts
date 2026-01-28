import { ValueOf } from "../../utils/helper/index";
export declare const SegmentedControlTypes: {
    readonly Select: "select";
    readonly Action: "action";
};
export declare const SegmentedControlSizes: {
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
    readonly Extralarge: "xl";
};
export declare const SegmentedControlColors: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
};
export declare const SegmentedControlFeedbackType: {
    readonly None: "none";
    readonly Error: "error";
};
export declare const SegmentedControlItemIconPositions: {
    readonly None: "none";
    readonly Left: "left";
    readonly Right: "right";
    readonly IconOnly: "icon-only";
};
export type SegmentedControlItemChangeSelect = {
    selected: boolean;
};
export type SegmentedControlType = ValueOf<typeof SegmentedControlTypes>;
export type SegmentedControlSize = ValueOf<typeof SegmentedControlSizes>;
export type SegmentedControlColor = ValueOf<typeof SegmentedControlColors>;
export type SegmentedControlFeedback = ValueOf<typeof SegmentedControlFeedbackType>;
export type SegmentedControlItemIconPosition = ValueOf<typeof SegmentedControlItemIconPositions>;
