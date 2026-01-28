import { UserMenuType } from '../user-menu.model';
export type UserMenuArgs = {
    'initials': string;
    'open': boolean;
    'defaultSlot': string;
    'src-image': string;
    'type': UserMenuType;
    'user-name': string;
    'athAction'?: (event: CustomEvent<void>) => void;
};
export declare const ordererArgs: Partial<UserMenuArgs>;
