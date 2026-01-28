'use strict';

var index = require('./index--hWT2F8k.js');
var table_model = require('./table.model-p0DUkP1G.js');
var checkbox_model = require('./checkbox.model-B0t_jYPt.js');

const tableHeaderCss = ".ath-visibility-hidden,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}:host{display:flex;flex:1;border-bottom:var(--ath-border-width-sm) solid var(--ath-color-table-col-header-border)}:host>ath-table-header-item:first-of-type{border-top-left-radius:var(--ath-border-radius-table-default)}";

const AthTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athSelectAllChange = index.createEvent(this, "athSelectAllChange");
    }
    get el() { return index.getElement(this); }
    /** Selection mode (none | single | multiple) */
    selectable = table_model.TableSelectable.None;
    /** Enable clickable rows with action column */
    clickable = false;
    /** Header color */
    color = table_model.TableColor.Primary;
    /** Header size */
    size;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen = table_model.TableFrozen.None;
    /** Hides select all checkbox when selectable is multiple */
    noSelectAll = false;
    /** Current state of the select all checkbox (false | true | indeterminate) */
    selectAllState = checkbox_model.CheckboxValue.False;
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
        if (this.selectAllState === checkbox_model.CheckboxValue.False || this.selectAllState === checkbox_model.CheckboxValue.Indeterminate) {
            newState = checkbox_model.CheckboxValue.True;
            selectAll = true;
        }
        else {
            newState = checkbox_model.CheckboxValue.False;
            selectAll = false;
        }
        this.athSelectAllChange.emit({ selectAll, state: newState });
    };
    render() {
        return (index.h(index.Host, { key: 'f8ecc41ecaffe22bdcf6e7fed00b905a8ab7519b', slot: "header", role: "row" }, this.selectable !== table_model.TableSelectable.None && (index.h("ath-table-header-item", { key: '3e585d976939eed268d963a1e83c6b6eaa80b0f8', "data-ath-selection": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== table_model.TableFrozen.Last ? table_model.TableFrozen.First : undefined }, this.selectable === table_model.TableSelectable.Multiple && !this.noSelectAll ? (index.h("ath-checkbox", { value: this.selectAllState, ariaLabel: "Seleccionar todas las filas", onAthChange: this.handleSelectAllChange })) : (index.h("span", { class: "sr-only" }, "Columna de selecci\u00F3n")))), index.h("slot", { key: '8ce2932e3a00f9bc00ba360fb7f267aca1effab1' }), this.clickable && (index.h("ath-table-header-item", { key: 'f5122f2101816e03dfb2b7804bae508d380eada0', "data-ath-action": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size, frozen: this.frozen !== table_model.TableFrozen.First ? table_model.TableFrozen.Last : undefined }, index.h("span", { key: 'a6290589d75bb094770deb629e95b5fcb92ff1a7', class: "sr-only" }, "Columna de acci\u00F3n")))));
    }
};
AthTableHeader.style = tableHeaderCss;

exports.ath_table_header = AthTableHeader;
//# sourceMappingURL=ath-table-header.entry.cjs.js.map
