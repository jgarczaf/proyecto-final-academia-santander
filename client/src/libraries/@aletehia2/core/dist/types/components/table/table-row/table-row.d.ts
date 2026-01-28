import { EventEmitter } from '../../../stencil-public-runtime';
import { TableSelectableType, TableStripingType, TableColorType, TableSizeType, TableRowClickEvent, TableFrozenType, TableRowSelectionChangeEvent } from '../table.model';
export declare class AthTableRow {
    el: HTMLElement;
    /** Current selection state */
    selected: boolean;
    /** Apply zebra striping */
    striped: TableStripingType;
    /** Selection mode (none | single | multiple) */
    selectable: TableSelectableType;
    /** Enable clickable functionality */
    clickable: boolean;
    /** Aria label of row click button */
    clickableAriaLabel: string;
    /** Row color */
    color: TableColorType;
    /** Row size */
    size: TableSizeType;
    /** Group name for radios in single mode */
    selectionGroupName: string;
    /** Optional row value to be included in selection events */
    value: any;
    /** Unique id for this row */
    rowId?: string;
    /** Optional parent row id if this row is a child */
    parentId?: string;
    /** Whether this row has children */
    hasChildren: boolean;
    /** Reserve space for expander column even if this row has no children. Internal use by ath-table */
    reserveExpander: boolean;
    /** Reserve space for clickable column. Internal use by ath-table */
    reserveClickable: boolean;
    /** Controls the expanded state for rows that have children */
    expanded: boolean;
    /** Indicates that this is the last visual row (no border). Internal use by ath-table */
    last: boolean;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen: TableFrozenType;
    /** Emits when this row selection changes */
    athRowSelectionChange: EventEmitter<TableRowSelectionChangeEvent>;
    /** Emits when this clickable row is clicked */
    athRowClick: EventEmitter<TableRowClickEvent>;
    handleZebraChange(): void;
    handleSelectedChanged(): void;
    handleExpandedChanged(): void;
    handleHierarchyFlagsChanged(): void;
    private handlePseudoFocusKeyDown;
    private updateZebraClasses;
    componentDidRender(): void;
    componentDidLoad(): void;
    private radioEl?;
    private checkboxEl?;
    private onRadioChange;
    private onCheckboxChange;
    private onActionClick;
    private syncControlsWithSelected;
    private applyExpanderToFirstCell;
    private emitExpansionEvents;
    private onSlotClick;
    private getAttributes;
    private getHostClassNames;
    render(): any;
}
