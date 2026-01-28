import { ValueOf } from "../../../utils/helper/index";
export declare const UserDetailTypes: {
    readonly Default: "default";
    readonly Initials: "initials";
    readonly Image: "image";
    readonly HideAvatar: "hide-avatar";
};
export type UserDetailType = ValueOf<typeof UserDetailTypes>;
