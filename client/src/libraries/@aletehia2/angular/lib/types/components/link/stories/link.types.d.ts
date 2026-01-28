export type LinkArgs = {
    'aria-describedby': string;
    'aria-label': string;
    'aria-labelledby': string;
    'defaultSlot'?: string;
    'disabled': boolean;
    'icon': string;
    'icon-aria-label': string;
    'link-href': string;
    'link-target': string;
    'size': string;
    'underline': boolean;
    'athClick'?: (event: CustomEvent<void>) => void;
    'athFocus'?: (event: CustomEvent<void>) => void;
    'athBlur'?: (event: CustomEvent<void>) => void;
};
export declare const ordererArgs: Partial<LinkArgs>;
