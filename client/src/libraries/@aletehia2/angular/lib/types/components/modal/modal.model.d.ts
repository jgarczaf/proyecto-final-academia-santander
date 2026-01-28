import { ValueOf } from "../../utils/helper/index";
export declare const ModalAppearance: {
    readonly Error: "error";
    readonly Info: "info";
    readonly Success: "success";
    readonly Warning: "warning";
};
export declare const ModalSize: {
    readonly Small: "sm";
    readonly Medium: "md";
};
export type ModalAppearanceType = ValueOf<typeof ModalAppearance>;
export type ModalSizeType = ValueOf<typeof ModalSize>;
