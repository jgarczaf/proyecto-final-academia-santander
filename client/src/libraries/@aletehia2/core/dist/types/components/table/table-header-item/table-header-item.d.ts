import { TableFrozenType, TableAlignmentType, TableSizeType, TableColorType } from '../table.model';
export declare class AthTableHeaderItem {
    /** Column alignment */
    alignment: TableAlignmentType;
    /** Item color */
    color: TableColorType;
    /** Column width (px, %, auto) */
    cellWidth: string;
    /** If this column is fixed */
    frozen: TableFrozenType;
    /**
     * If this column contains interactive elements (menus, buttons, links, etc.).
     * This property will be passed down to all row items in the same column.
     */
    hasInteractivity: boolean;
    /** Item size */
    size: TableSizeType;
    private getHostClassNames;
    private getAttributes;
    render(): any;
}
