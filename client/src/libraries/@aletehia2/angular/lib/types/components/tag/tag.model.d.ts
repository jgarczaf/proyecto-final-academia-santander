import { ValueOf } from "../../utils/helper/index";
export type TagColorTypes = ValueOf<typeof TagColor>;
export type TagSizes = ValueOf<typeof TagSize>;
export declare const TagColor: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Accent: "accent";
    readonly Danger: "danger";
    readonly Success: "success";
    readonly Warning: "warning";
    readonly Disabled: "disabled";
};
export declare const TagSize: {
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
};
export declare const TAG_DEFAULT_COLOR: "primary";
export declare const TAG_DEFAULT_SIZE: "md";
