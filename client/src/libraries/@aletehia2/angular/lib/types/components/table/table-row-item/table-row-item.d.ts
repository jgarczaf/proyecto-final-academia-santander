import { TableColorType, TableAlignmentType, TableFrozenType, TableSizeType } from '../table.model';
export declare class AthTableRowItem {
    el: HTMLElement;
    /** Column width (px, %, auto) */
    cellWidth: string;
    /** If this cell is header of the row */
    isHeader: boolean;
    /**
     * If this cell contains interactive elements (menus, buttons, links, etc.).
     * When true, row click events will be prevented to avoid conflicts with cell interactions.
     */
    hasInteractivity: boolean;
    /** If this cell is fixed, created a first or last column fixed */
    frozen: TableFrozenType;
    /** If true, no shadow will be applied to the frozen cell */
    noFrozenShadow: boolean;
    /** Cell alignment */
    alignment: TableAlignmentType;
    /** Table size */
    size: TableSizeType;
    /** Striped background */
    striped: boolean;
    /** Background color */
    color: TableColorType;
    /** Marks this cell as an expander control (collapse/expand). Internal use by ath-table-row. */
    expander: boolean;
    /** Current expanded state (used when expander = true) */
    expanded: boolean;
    /** Aria-controls value for the expander button (ID of the collapsable content) */
    expanderAriaControls: string;
    /** Marks this cell as the first data cell of a child row (for indentation) */
    isChild: boolean;
    private getClassNames;
    private onExpanderClick;
    render(): any;
}
