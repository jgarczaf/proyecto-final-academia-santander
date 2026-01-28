import { ValueOf } from '../../utils/helper/index';
export declare const ActionBarAlignments: {
    readonly Left: "left";
    readonly Center: "center";
    readonly Right: "right";
    readonly Justify: "justify";
};
export declare const ActionBarSizes: {
    readonly Large: "lg";
    readonly Medium: "md";
    readonly Small: "sm";
};
export type ActionBarAlignment = ValueOf<typeof ActionBarAlignments>;
export type ActionBarSize = ValueOf<typeof ActionBarSizes>;
