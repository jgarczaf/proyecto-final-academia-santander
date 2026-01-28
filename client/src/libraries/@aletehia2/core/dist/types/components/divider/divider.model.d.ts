import { ValueOf } from "../../utils/helper/index";
export declare const DividerOrientation: {
    readonly Horizontal: "horizontal";
    readonly Vertical: "vertical";
};
export declare const DividerSize: {
    readonly Medium: "md";
    readonly Small: "sm";
};
export declare const DividerColor: {
    readonly Bold: "bold";
    readonly Bolder: "bolder";
    readonly Boldest: "boldest";
};
export type DividerOrientationType = ValueOf<typeof DividerOrientation>;
export type DividerSizeType = ValueOf<typeof DividerSize>;
export type DividerColorType = ValueOf<typeof DividerColor>;
export declare const DIVIDER_DEFAULT_ORIENTATION: "horizontal";
export declare const DIVIDER_DEFAULT_SIZE: "md";
export declare const DIVIDER_DEFAULT_COLOR: "bold";
