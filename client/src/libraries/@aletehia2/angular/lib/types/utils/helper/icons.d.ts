import { ValueOf } from "./index";
export declare const IconSize: {
    readonly Large: "lg";
    readonly Medium: "md";
    readonly Small: "sm";
    readonly Extrasmall: "xs";
};
export type IconSizeTypes = ValueOf<typeof IconSize>;
export declare enum Icons {
    Add = "add",
    InputClearValue = "close",
    DropDown = "chevron-down",
    Minimize = "minimize",
    PasswordHide = "eye-close",
    PasswordView = "eye",
    Search = "search",
    Info = "info"
}
export declare enum IconType {
    Button = "button",
    ButtonComp = "buttonComp",
    ButtonExpandable = "buttonExpandable",
    ButtonLink = "buttonLink",
    ButtonIconOnly = "iconOnly",
    Link = "link",
    Feedback = "feedback",
    Input = "input",
    Label = "label",
    Message = "message",
    Combobox = "combobox",
    Chipchoice = "chipchoice",
    SegmentedControlItem = "segmentedControlItem",
    SegmentedControlItemIconOnly = "segmentedControlItemIconOnly"
}
export declare function transformIconSize(type: string, size: string): IconSizeTypes;
