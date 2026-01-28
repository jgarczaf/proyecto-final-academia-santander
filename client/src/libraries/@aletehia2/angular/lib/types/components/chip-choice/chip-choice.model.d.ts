import { ValueOf } from "../../utils/helper/index";
export type ChipChoiceSizes = ValueOf<typeof ChipChoiceSize>;
export type ChipChoiceRoles = ValueOf<typeof ChipChoiceRole>;
export declare const ChipChoiceSize: {
    readonly Medium: "md";
    readonly Small: "sm";
};
export declare const ChipChoiceRole: {
    readonly Checkbox: "checkbox";
    readonly Radio: "radio";
};
