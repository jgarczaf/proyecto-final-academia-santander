export type dropdownSizes = 'lg' | 'md' | 'sm';
export type dropdownFeedbackTypes = 'none' | 'error';
export declare enum dropdownSize {
    Lg = "lg",
    Md = "md",
    Sm = "sm"
}
export declare enum dropdownFeedbackType {
    None = "none",
    Error = "error"
}
export interface ActionListItem {
    text: string;
    value: string;
    selected: boolean;
    disabled: boolean;
    optionGroup: boolean;
    icon: string;
}
