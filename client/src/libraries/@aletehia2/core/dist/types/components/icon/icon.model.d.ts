import { ValueOf } from "../../utils/helper/index";
export type IconColorTypes = ValueOf<typeof IconColor>;
export declare const IconColor: {
    readonly Inherit: "inherit";
    readonly Default: "default";
    readonly Primary: "primary";
    readonly Accent: "accent";
    readonly Error: "error";
    readonly Success: "success";
    readonly Warning: "warning";
    readonly Info: "info";
    readonly Inverse: "inverse";
    readonly Disabled: "disabled";
};
