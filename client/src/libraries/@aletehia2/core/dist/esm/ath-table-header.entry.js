import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { c as TableSelectable, a as TableColor, d as TableFrozen } from './table.model-DH9nlGTF.js';
import { C as CheckboxValue } from './checkbox.model-DynFLFRk.js';

const tableHeaderCss = ".ath-visibility-hidden,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}:host{display:flex;flex:1;border-bottom:var(--ath-border-width-sm) solid var(--ath-color-table-col-header-border)}:host>ath-table-header-item:first-of-type{border-top-left-radius:var(--ath-border-radius-table-default)}";

const AthTableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athSelectAllChange = createEvent(this, "athSelectAllChange");
    }
    get el() { return getElement(this); }
    /** Selection mode (none | single | multiple) */
    selectable = TableSelectable.None;
    /** Enable clickable rows with action column */
    clickable = false;
    /** Header color */
    color = TableColor.Primary;
    /** Header size */
    size;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen = TableFrozen.None;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll = false;
    /** Current state of the select all checkbox (false | true | indeterminate) */
    selectAllState = CheckboxValue.False;
    /** Total number of selectable rows (used for determining indeterminate state) */
    totalRows = 0;
    /** Number of currently selected rows (used for determining indeterminate state) */
    selectedRows = 0;
    /** Fired when select all checkbox state changes */
    athSelectAllChange;
    componentDidLoad() {
        // Set default widths if needed
        const items = this.el.querySelectorAll('ath-table-header-item');
        if (items.length) {
            Array.from(items).forEach(item => {
                if (item.cellWidth === 'auto' || item.cellWidth === '') {
                    item.cellWidth = `${100 / items.length}%`;
                }
            });
        }
    }
    handleSelectAllChange = () => {
        let newState;
        let selectAll;
        if (this.selectAllState === CheckboxValue.False || this.selectAllState === CheckboxValue.Indeterminate) {
            newState = CheckboxValue.True;
            selectAll = true;
        }
        else {
            newState = CheckboxValue.False;
            selectAll = false;
        }
        this.athSelectAllChange.emit({ selectAll, state: newState });
    };
    render() {
        return (h(Host, { key: 'f8ecc41ecaffe22bdcf6e7fed00b905a8ab7519b', slot: "header", role: "row" }, this.selectable !== TableSelectable.None && (h("ath-table-header-item", { key: '3e585d976939eed268d963a1e83c6b6eaa80b0f8', "data-ath-selection": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== TableFrozen.Last ? TableFrozen.First : undefined }, this.selectable === TableSelectable.Multiple && !this.noSelectAll ? (h("ath-checkbox", { value: this.selectAllState, ariaLabel: "Seleccionar todas las filas", onAthChange: this.handleSelectAllChange })) : (h("span", { class: "sr-only" }, "Columna de selecci\u00F3n")))), h("slot", { key: '8ce2932e3a00f9bc00ba360fb7f267aca1effab1' }), this.clickable && (h("ath-table-header-item", { key: 'f5122f2101816e03dfb2b7804bae508d380eada0', "data-ath-action": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== TableFrozen.First ? TableFrozen.Last : undefined }, h("span", { key: 'a6290589d75bb094770deb629e95b5fcb92ff1a7', class: "sr-only" }, "Columna de acci\u00F3n")))));
    }
};
AthTableHeader.style = tableHeaderCss;

export { AthTableHeader as ath_table_header };
//# sourceMappingURL=ath-table-header.entry.js.map
