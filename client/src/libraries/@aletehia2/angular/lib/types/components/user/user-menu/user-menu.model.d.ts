import { ValueOf } from "../../../utils/helper/index";
export declare const UserMenuTypes: {
    readonly Default: "default";
    readonly Initials: "initials";
    readonly Image: "image";
    readonly HideAvatar: "hide-avatar";
};
export type UserMenuType = ValueOf<typeof UserMenuTypes>;
