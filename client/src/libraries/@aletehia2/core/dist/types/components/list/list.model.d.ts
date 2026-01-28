import { ValueOf } from "../../utils/helper/index";
export declare const ListSizes: {
    readonly ExtraSmall: "xs";
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
};
export declare const ListOrientation: {
    readonly Vertical: "vertical";
    readonly Horizontal: "horizontal";
};
export declare const ListLinkTarget: {
    readonly Self: "self";
    readonly Parent: "parent";
    readonly Blank: "blank";
    readonly Top: "top";
};
export type ListSizeType = ValueOf<typeof ListSizes>;
export type ListOrientationType = ValueOf<typeof ListOrientation>;
export type ListLinkTargetType = ValueOf<typeof ListLinkTarget>;
