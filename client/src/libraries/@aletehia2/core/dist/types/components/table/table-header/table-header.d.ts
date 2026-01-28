import { EventEmitter } from '../../../stencil-public-runtime';
import { TableSelectableType, TableColorType, TableSizeType, TableFrozenType } from '../table.model';
import { CheckboxValues } from '../../checkbox/checkbox.model';
import { TableSelectAllChangeEvent } from '../table.model';
export declare class AthTableHeader {
    el: HTMLElement;
    /** Selection mode (none | single | multiple) */
    selectable: TableSelectableType;
    /** Enable clickable rows with action column */
    clickable: boolean;
    /** Header color */
    color: TableColorType;
    /** Header size */
    size: TableSizeType;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen: TableFrozenType;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll: boolean;
    /** Current state of the select all checkbox (false | true | indeterminate) */
    selectAllState: CheckboxValues;
    /** Total number of selectable rows (used for determining indeterminate state) */
    totalRows: number;
    /** Number of currently selected rows (used for determining indeterminate state) */
    selectedRows: number;
    /** Fired when select all checkbox state changes */
    athSelectAllChange: EventEmitter<TableSelectAllChangeEvent>;
    componentDidLoad(): void;
    private handleSelectAllChange;
    render(): any;
}
