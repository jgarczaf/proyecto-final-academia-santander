import { ValueOf } from "../../utils/helper/index";
import { CheckboxValues } from '../checkbox/checkbox.model';
export type TableSelectionChangeEvent = {
    selectedIndexes: number[];
    selectedValues: any[];
};
export type TableRowSelectionChangeEvent = {
    selected: boolean;
};
export type TableClickEvent = {
    rowIndex: number;
    rowValue: any;
    rowId?: string;
};
export type TableRowClickEvent = {
    rowValue: any;
    rowId?: string;
};
export type TableSelectAllChangeEvent = {
    selectAll: boolean;
    state: CheckboxValues;
};
export declare const TableSize: {
    readonly Small: "sm";
    readonly Medium: "md";
    readonly Large: "lg";
};
export declare const TableColor: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
};
export declare const TableFrozen: {
    readonly None: "none";
    readonly First: "first";
    readonly Last: "last";
};
export declare const TableAlignment: {
    readonly Left: "left";
    readonly Center: "center";
    readonly Right: "right";
};
export declare const TableStriping: {
    readonly None: "none";
    readonly Rows: "rows";
    readonly Columns: "columns";
};
export declare const TableSelectable: {
    readonly None: "none";
    readonly Single: "single";
    readonly Multiple: "multiple";
};
export type TableSizeType = ValueOf<typeof TableSize>;
export type TableColorType = ValueOf<typeof TableColor>;
export type TableFrozenType = ValueOf<typeof TableFrozen>;
export type TableAlignmentType = ValueOf<typeof TableAlignment>;
export type TableStripingType = ValueOf<typeof TableStriping>;
export type TableSelectableType = ValueOf<typeof TableSelectable>;
