export type UserDetailArgs = {
    'button-aria-label': string;
    'clickable': boolean;
    'description': string;
    'initials': string;
    'src-image': string;
    'type': string;
    'user-name': string;
    'defaultSlot': string;
    'athAction': (event: CustomEvent<void>) => void;
};
export declare const ordererArgs: Partial<UserDetailArgs>;
