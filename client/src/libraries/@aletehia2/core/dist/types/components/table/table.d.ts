import { EventEmitter } from '../../stencil-public-runtime';
import { TableSizeType, TableColorType, TableFrozenType, TableStripingType, TableSelectableType, TableSelectionChangeEvent, TableClickEvent, TableSelectAllChangeEvent } from './table.model';
export declare class AthTable {
    el: HTMLElement;
    /** Row height */
    size: TableSizeType;
    /** Table color */
    color: TableColorType;
    /** Fix the first or last column */
    frozen: TableFrozenType;
    /** Enable zebra striping */
    striped: TableStripingType;
    /** Row selection mode */
    selectable: TableSelectableType;
    /** Enable clickable rows with action column */
    clickable: boolean;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll: boolean;
    /** Fired whenever row selection changes */
    athSelectionChange: EventEmitter<TableSelectionChangeEvent>;
    /** Fired when a clickable row is clicked */
    athTableClick: EventEmitter<TableClickEvent>;
    handleCollapseToggle(): void;
    handleSelectAllChange(event: CustomEvent<TableSelectAllChangeEvent>): void;
    /** Refresh the table. Useful when dynamically changing content */
    refresh(): Promise<void>;
    private initTimer;
    private headerEl;
    private headerItems;
    private rows;
    private selectionName;
    private getSelectAllState;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleSelectableChange(): void;
    handleClickableChange(): void;
    private collectChildren;
    /**
     * Re-groups DOM so that each parent row is followed by an ath-collapse that contains its child rows.
     * Child rows are determined by matching parentId to parent row's rowId.
     */
    private ensureParentChildStructure;
    private setColumnFixed;
    private interactiveTable;
    private updateChildrenProps;
    /** Marks only the final ath-table-row actually visible in the body (ignoring ath-collapse wrappers and hidden content) */
    private markLastRow;
    private onRowSelectionChange;
    private onRowClick;
    private emitSelectionChange;
    private hasHierarchy;
    private isInteractive;
    private getAttributes;
    private getHostClassNames;
    render(): any;
}
