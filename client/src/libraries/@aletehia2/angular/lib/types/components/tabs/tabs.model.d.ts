export type TabsType = 'underline' | 'box';
export declare const TabsTypes: {
    readonly Underline: "underline";
    readonly Box: "box";
};
export interface TabItem {
    id: string;
    label: string;
    disabled?: boolean;
    icon?: string;
    iconAriaLabel?: string;
    selected?: boolean;
}
