import { ValueOf } from "../../utils/helper/index";
export declare const SectionTitleColor: {
    readonly Accent: "accent";
    readonly Primary: "primary";
};
export declare const SectionTitleOption: {
    readonly Default: "default";
    readonly Icon: "icon";
    readonly Pictogram: "pictogram";
};
export declare const HeadingSize: {
    readonly Sm: "sm";
    readonly Md: "md";
    readonly Lg: "lg";
};
export type SectionTitleColorType = ValueOf<typeof SectionTitleColor>;
export type SectionTitleOptionType = ValueOf<typeof SectionTitleOption>;
export type HeadingSizes = ValueOf<typeof HeadingSize>;
