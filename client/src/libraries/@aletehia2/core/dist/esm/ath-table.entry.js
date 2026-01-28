import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { T as TableSize, a as TableColor, b as TableStriping, c as TableSelectable, d as TableFrozen } from './table.model-DH9nlGTF.js';
import { C as CheckboxValue } from './checkbox.model-DynFLFRk.js';

const tableCss = ":host(.ath-table){display:flex;flex-direction:column;width:100%;min-width:min-content;border-radius:var(--ath-border-radius-table-default)}:host(.ath-table) .ath-table__header{display:flex;flex:0 0 auto}:host(.ath-table) .ath-table__body{display:flex;flex:1 1 auto}:host(.ath-table) .ath-table__footer{flex:0 0 auto}:host(:focus),:host(:focus-visible){box-shadow:0px 0px 0px 2px var(--ath-color-border-focus);display:block;outline:none}:host(.ath-table--primary){background:var(--ath-color-table-bg-primary)}:host(.ath-table--secondary){background:var(--ath-color-table-bg-secondary)}";

const AthTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athSelectionChange = createEvent(this, "athSelectionChange");
        this.athTableClick = createEvent(this, "athTableClick");
    }
    get el() { return getElement(this); }
    /** Row height */
    size = TableSize.Small;
    /** Table color */
    color = TableColor.Primary;
    /** Fix the first or last column */
    frozen;
    /** Enable zebra striping */
    striped = TableStriping.None;
    /** Row selection mode */
    selectable = TableSelectable.None;
    /** Enable clickable rows with action column */
    clickable = false;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll = false;
    /** Fired whenever row selection changes */
    athSelectionChange;
    /** Fired when a clickable row is clicked */
    athTableClick;
    // Recalculate last row when any collapse is toggled
    handleCollapseToggle() {
        requestAnimationFrame(() => this.markLastRow());
    }
    // Handle select all change event
    handleSelectAllChange(event) {
        const { selectAll } = event.detail;
        this.rows.forEach(row => {
            row.selected = selectAll;
        });
        this.emitSelectionChange();
    }
    /** Refresh the table. Useful when dynamically changing content */
    async refresh() {
        this.collectChildren();
    }
    // Using a timer to defer DOM operations to avoid lifecycle warnings
    initTimer;
    headerEl;
    headerItems = [];
    rows = [];
    selectionName = `ath-table-selection-${Math.random().toString(36).slice(2)}`;
    getSelectAllState() {
        if (!this.rows || this.rows.length === 0) {
            return CheckboxValue.False;
        }
        const selectedCount = this.rows.filter(row => row.selected).length;
        const totalCount = this.rows.length;
        if (selectedCount === 0) {
            return CheckboxValue.False;
        }
        else if (selectedCount === totalCount) {
            return CheckboxValue.True;
        }
        else {
            return CheckboxValue.Indeterminate;
        }
    }
    componentDidLoad() {
        // Use setTimeout to defer DOM operations to next tick after render is complete
        this.initTimer = window.setTimeout(() => {
            this.collectChildren();
        }, 0);
    }
    disconnectedCallback() {
        // Clear the timer if the component is removed
        if (this.initTimer) {
            clearTimeout(this.initTimer);
        }
    }
    handleSelectableChange() {
        this.collectChildren();
    }
    handleClickableChange() {
        this.collectChildren();
    }
    collectChildren() {
        // Find header items
        this.headerEl = this.el.querySelector('ath-table-header');
        if (this.headerEl) {
            this.headerEl.selectable = this.selectable;
            this.headerEl.clickable = this.clickable;
            this.headerEl.noSelectAll = this.noSelectAll;
            if (this.color)
                this.headerEl.color = this.color;
            if (this.size)
                this.headerEl.size = this.size;
            if (this.frozen)
                this.headerEl.frozen = this.frozen;
        }
        // Find rows
        const rowsContainer = this.el.querySelector('ath-table-body');
        if (rowsContainer) {
            this.rows = Array.from(rowsContainer.querySelectorAll('ath-table-row'));
            // Determine if any row has hierarchical props
            const hasHierarchy = this.rows.some(r => r.hasChildren || r.parentId);
            // Ensure a collapse container exists after each parent row to host children
            this.ensureParentChildStructure(rowsContainer);
            this.rows.forEach(row => {
                row.selectable = this.selectable;
                row.selectionGroupName = this.selectionName;
                row.reserveClickable = this.clickable;
                row.reserveExpander = hasHierarchy && !row.hasChildren;
                if (this.color)
                    row.color = this.color;
                if (this.size)
                    row.size = this.size;
                row.removeEventListener('athRowSelectionChange', this.onRowSelectionChange);
                row.addEventListener('athRowSelectionChange', this.onRowSelectionChange);
                row.removeEventListener('athRowClick', this.onRowClick);
                row.addEventListener('athRowClick', this.onRowClick);
            });
        }
        this.updateChildrenProps();
    }
    /**
     * Re-groups DOM so that each parent row is followed by an ath-collapse that contains its child rows.
     * Child rows are determined by matching parentId to parent row's rowId.
     */
    ensureParentChildStructure(container) {
        // Collect current rows flat
        const allRows = Array.from(container.querySelectorAll('ath-table-row'));
        if (!allRows.length)
            return;
        // Map existing collapse containers by parent id
        const existingCollapses = new Map();
        Array.from(container.querySelectorAll('ath-collapse')).forEach(col => {
            const id = col.id;
            if (id)
                existingCollapses.set(id, col);
        });
        // First, move all child rows to a staging fragment so we can re-insert under parents
        const fragment = document.createDocumentFragment();
        allRows.forEach(r => fragment.appendChild(r));
        container.textContent = '';
        // Group rows
        const parents = allRows.filter(r => r.hasChildren && !!r.rowId);
        const children = allRows.filter(r => !!r.parentId);
        const childrenByParent = new Map();
        children.forEach(ch => {
            const pid = ch.parentId;
            if (!pid)
                return;
            const list = childrenByParent.get(pid) || [];
            list.push(ch);
            childrenByParent.set(pid, list);
        });
        const appendElement = (element) => container.appendChild(element);
        // Rows that are neither parent nor child should remain in original order relative to parents.
        for (const row of allRows) {
            const isParent = row.hasChildren && !!row.rowId;
            const isChild = !!row.parentId;
            if (isChild) {
                // Child will be appended inside corresponding collapse later; skip here
                continue;
            }
            if (!isParent) {
                appendElement(row);
                continue;
            }
            // Append parent row
            appendElement(row);
            // Create or reuse ath-collapse for this parent
            const collapseId = row.rowId;
            let collapseEl = existingCollapses.get(collapseId);
            if (!collapseEl) {
                collapseEl = document.createElement('ath-collapse');
                collapseEl.id = collapseId;
                // Show only if parent is expanded
                collapseEl.show = !!row.expanded;
            }
            // Append collapse after parent
            appendElement(collapseEl);
            // Ensure collapse content wrapper
            const parentChildren = childrenByParent.get(collapseId) || [];
            parentChildren.forEach(ch => {
                collapseEl.appendChild(ch);
            });
        }
        // Append any leftover children without parents
        const orphanChildren = children.filter(ch => !parents.find(p => p.rowId === ch.parentId));
        orphanChildren.forEach(orphan => appendElement(orphan));
    }
    setColumnFixed = items => {
        if (this.frozen === TableFrozen.First && items.length > 0) {
            items[0].frozen = this.frozen;
            if (this.selectable !== TableSelectable.None) {
                items[0].style.left = '60px';
            }
        }
        if (this.frozen === TableFrozen.Last && items.length > 0) {
            items[items.length - 1].frozen = this.frozen;
        }
    };
    interactiveTable;
    updateChildrenProps() {
        // Skip if we don't have items yet
        if (!this.headerItems || !this.rows)
            return;
        if (this.headerEl) {
            // Always refresh header items (ensures late-rendered selection column is included)
            this.headerItems = Array.from(this.headerEl.querySelectorAll('ath-table-header-item'));
        }
        const columnStyles = this.headerItems.map(header => ({
            alignment: header.alignment,
            cellWidth: header.cellWidth,
            hasInteractivity: header.hasInteractivity,
        }));
        this.headerItems.forEach(headerCell => {
            if (this.color)
                headerCell.color = this.color;
            if (this.size)
                headerCell.size = this.size;
        });
        this.setColumnFixed(this.headerItems);
        this.rows.forEach(row => {
            // Row properties
            if (this.striped)
                row.striped = this.striped;
            if (this.frozen)
                row.frozen = this.frozen;
            // Ensure single-mode exclusivity (only one row selected)
            if (this.selectable === TableSelectable.Single) {
                const selectedRows = this.rows.filter(r => r.selected);
                if (selectedRows.length > 1) {
                    // Keep the first, unselect the rest
                    selectedRows.slice(1).forEach(r => (r.selected = false));
                }
            }
            // Cell properties
            const cells = Array.from(row.querySelectorAll('ath-table-row-item'));
            cells.forEach((cell, index) => {
                const { alignment, cellWidth, hasInteractivity } = columnStyles[index] || {};
                if (cellWidth)
                    cell.cellWidth = cellWidth;
                if (alignment)
                    cell.alignment = alignment;
                if (hasInteractivity) {
                    cell.hasInteractivity = hasInteractivity;
                    this.interactiveTable = true;
                }
                if (this.selectable !== TableSelectable.None || this.clickable || this.interactiveTable) {
                    cell.role = 'gridcell';
                }
                if (this.color)
                    cell.color = this.color;
                if (this.size)
                    cell.size = this.size;
            });
            this.setColumnFixed(cells);
        });
        this.markLastRow();
        // Update header select all state after all processing
        if (this.headerEl && this.selectable === TableSelectable.Multiple) {
            this.headerEl.selectAllState = this.getSelectAllState();
            this.headerEl.totalRows = this.rows.length;
            this.headerEl.selectedRows = this.rows.filter(row => row.selected).length;
        }
    }
    /** Marks only the final ath-table-row actually visible in the body (ignoring ath-collapse wrappers and hidden content) */
    markLastRow() {
        if (!this.rows || !this.rows.length)
            return;
        // Reset previous flags
        this.rows.forEach(r => (r.last = false));
        const body = this.el.querySelector('ath-table-body');
        if (!body)
            return;
        // Collect rows in DOM order inside body (which may include rows nested in ath-collapse containers)
        const orderedRows = Array.from(body.querySelectorAll('ath-table-row'));
        // Find the last one that is not inside a collapsed (hidden) ath-collapse
        for (let i = orderedRows.length - 1; i >= 0; i--) {
            const row = orderedRows[i];
            const collapseParent = row.closest('ath-collapse');
            if (collapseParent) {
                // Determine visibility based on owning parent row expanded state instead of collapse.show (which lingers until animation ends)
                const parentRowId = collapseParent.id;
                if (parentRowId) {
                    const parentRow = this.rows.find(r => r.rowId === parentRowId);
                    if (parentRow && !parentRow.expanded) {
                        // Parent is collapsed (or collapsing animation in progress) -> skip these child rows
                        continue;
                    }
                }
            }
            row.last = true;
            break;
        }
    }
    onRowSelectionChange = (e) => {
        const rowEl = e.target;
        if (this.selectable === TableSelectable.Single) {
            // Deselect others
            this.rows.forEach(r => (r.selected = r === rowEl));
        }
        this.emitSelectionChange();
    };
    onRowClick = (e) => {
        const rowEl = e.target;
        let rowIndex = this.rows.indexOf(rowEl);
        // If indexOf fails, try to find by rowId or by DOM position
        if (rowIndex === -1) {
            if (rowEl.rowId) {
                rowIndex = this.rows.findIndex(r => r.rowId === rowEl.rowId);
            }
            else {
                // Find by DOM position as fallback
                const allRows = Array.from(this.el.querySelectorAll('ath-table-row'));
                rowIndex = allRows.indexOf(rowEl);
            }
        }
        this.athTableClick.emit({
            rowIndex: rowIndex >= 0 ? rowIndex : -1,
            rowValue: rowEl.value,
            rowId: rowEl.rowId,
        });
    };
    emitSelectionChange() {
        const selectedIndexes = [];
        const selectedValues = [];
        this.rows.forEach((rowEl, index) => {
            if (rowEl.selected) {
                selectedIndexes.push(index);
                selectedValues.push(rowEl.value);
            }
        });
        // Update header select all state
        if (this.headerEl && this.selectable === TableSelectable.Multiple) {
            this.headerEl.selectAllState = this.getSelectAllState();
            this.headerEl.totalRows = this.rows.length;
            this.headerEl.selectedRows = selectedIndexes.length;
        }
        this.athSelectionChange.emit({ selectedIndexes, selectedValues });
    }
    hasHierarchy() {
        return this.rows?.some(r => r.hasChildren || r.parentId) ?? false;
    }
    isInteractive() {
        return this.clickable || this.selectable !== TableSelectable.None || this.interactiveTable;
    }
    getAttributes = () => ({
        role: this.hasHierarchy() ? 'treegrid' : this.isInteractive() ? 'grid' : 'table',
        tabindex: this.el.getAttribute('tabindex') || '0',
    });
    getHostClassNames = () => ({
        'ath-table': true,
        [`ath-table--${this.color}`]: !!this.color,
    });
    render() {
        return (h(Host, { key: '036c192ab5f070f5e8f3f56383c17b95c067fba1', ...this.getAttributes(), class: this.getHostClassNames() }, h("div", { key: 'af1e8bfecbfa86ee2be4beb4f3629f44ff73a98f', class: "ath-table__header", role: "rowgroup" }, h("slot", { key: '3906703c67215d78d2a76e30cb72a5c185db1de1', name: "header" })), h("div", { key: 'ecf0ca5b5963e01607cb75a21e71d40af4bf82ee', class: "ath-table__body" }, h("slot", { key: '3d017696be65f60fab85f82a92a265f3ac37c6e7', name: "body" })), h("div", { key: 'af80677570df37ef91da0e26fe485a9125f103c2', class: "ath-table__footer" }, h("slot", { key: '3b4b9c81e21dca325747face982b6d41e6d08e1c', name: "footer" }))));
    }
    static get watchers() { return {
        "selectable": ["handleSelectableChange"],
        "clickable": ["handleClickableChange"]
    }; }
};
AthTable.style = tableCss;

export { AthTable as ath_table };
//# sourceMappingURL=ath-table.entry.js.map
