import { ValueOf } from "../../utils/helper/index";
export declare const EmptyStateType: {
    readonly Empty: "empty";
    readonly SearchNoResults: "search-no-results";
    readonly Error: "error";
    readonly Loading: "loading";
};
export declare const HeadingSize: {
    readonly Sm: "sm";
    readonly Md: "md";
    readonly Lg: "lg";
};
export type EmptyStateTypes = ValueOf<typeof EmptyStateType>;
export type HeadingSizes = ValueOf<typeof HeadingSize>;
