export type MenuButtonItemArgs = {
    'disabled': boolean;
    'icon': string;
    'name': string;
    'group-name': string;
    'text': string;
    'athSelected'?: (event: CustomEvent<void>) => void;
};
export declare const ordererArgs: MenuButtonItemArgs;
