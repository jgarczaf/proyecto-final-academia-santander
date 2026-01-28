export type MenuButtonArgs = {
    'alignment': string;
    'autofocus': boolean;
    'clear': boolean;
    'color': string;
    'disabled': boolean;
    'icon': string;
    'open': boolean;
    'size': string;
    'overlay-max-height': string;
    'ath-aria-label': string;
    'athAction'?: (event: CustomEvent<void>) => void;
};
export declare const ordererArgs: MenuButtonArgs;
