export type LinkTargetTypes = 'self' | 'blank';
export type MenuLateralItemTypes = 'action' | 'link';
export declare const TargetType: {
    readonly Blank: "blank";
    readonly Self: "self";
};
export declare const MenuLateralItemType: {
    readonly Action: "action";
    readonly Link: "link";
};
export type MenuLateralItem = {
    ariaLabel?: string;
    badgeLabel?: string;
    badgeMax?: number;
    badgeValue?: number;
    disabled?: boolean;
    icon?: string;
    name: string;
    selected?: boolean;
    tooltipText?: string;
    externalLabel?: string;
    href?: string;
    rel?: string;
    target?: LinkTargetTypes;
    type?: MenuLateralItemTypes;
};
export type MenuLateralItemVM = {
    id: string;
    ariaLabel?: string;
    badgeLabel?: string;
    badgeMax?: number;
    badgeValue?: number;
    disabled?: boolean;
    icon?: string;
    name: string;
    selected?: boolean;
    tooltipText?: string;
    externalLabel?: string;
    href?: string;
    rel?: string;
    target?: string;
    type: MenuLateralItemTypes;
};
