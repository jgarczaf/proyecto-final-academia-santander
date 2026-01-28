export type ButtonColors = 'primary' | 'secondary';
export type ButtonSizes = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonIconPositions = 'none' | 'left' | 'right' | 'icon-only';
export type ButtonFills = 'solid' | 'clear';
export declare const ButtonColor: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
};
export declare const ButtonSize: {
    readonly Large: "lg";
    readonly Medium: "md";
    readonly Small: "sm";
    readonly Extrasmall: "xs";
};
export declare const ButtonType: {
    readonly Submit: "submit";
    readonly Button: "button";
    readonly Reset: "reset";
};
export declare const ButtonFill: {
    readonly Solid: "solid";
    readonly Clear: "clear";
};
export declare enum ButtonIconPosition {
    None = "none",
    Left = "left",
    Right = "right",
    IconOnly = "icon-only"
}
