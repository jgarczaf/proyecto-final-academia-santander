import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { b as TableStriping, c as TableSelectable, a as TableColor, d as TableFrozen } from './p-DH9nlGTF.js';
import { I as IconSize } from './p-BnU0zKUi.js';
import { d as defineCustomElement$6 } from './p-Bw6_WJxi.js';
import { d as defineCustomElement$5 } from './p-DKvOL4GS.js';
import { d as defineCustomElement$4 } from './p-DbpanEQL.js';
import { d as defineCustomElement$3 } from './p-D069kkyZ.js';
import { d as defineCustomElement$2 } from './p-CYal6sLi.js';

const tableRowCss = ":host{display:flex;align-items:center;border-bottom:var(--ath-border-width-xs) solid var(--ath-color-table-row-item-border);transition:border-bottom-color 0.5s ease;position:relative}:host .ath-table-row__wrapper{display:contents}:host .ath-table-row__focus{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;background:transparent;border:none;outline:none;cursor:pointer;pointer-events:none}:host .ath-table-row__focus:focus-visible{outline:none;box-shadow:0 0 0 2px var(--ath-color-drop-shadow-focus), 0 0 0 4px var(--ath-color-border-focus);border-radius:2px}:host .ath-table-row__focus:focus{pointer-events:auto}:host(.ath-table-row--last){border-bottom-color:transparent}:host(.ath-table-row--last)>::slotted(:first-child),:host(.ath-table-row--last) .ath-table-row__wrapper>::slotted(:first-child){border-bottom-left-radius:var(--ath-border-radius-table-default)}:host(.ath-table-row--last)>ath-table-row-item[data-ath-selection]{border-bottom-left-radius:var(--ath-border-radius-table-default)}:host(.ath-table-row--last)>ath-table-row-item[data-ath-selection]~::slotted(*),:host(.ath-table-row--last)>ath-table-row-item[data-ath-selection]~.ath-table-row__wrapper>::slotted(*){border-bottom-left-radius:initial}:host(.ath-table-row--last)>::slotted(:last-child),:host(.ath-table-row--last)>ath-table-row-item[data-ath-action]{border-bottom-right-radius:var(--ath-border-radius-table-default)}:host(.ath-table-row--clickable){cursor:pointer}:host(.ath-table-row--clickable:hover){border-color:var(--ath-color-table-row-clickable-border-hovered);border-width:var(--ath-border-width-table-row-clickable-hover);box-shadow:var(--ath-box-shadow-table-row-clickable-hovered-offset-x) var(--ath-box-shadow-table-row-clickable-hovered-offset-y) var(--ath-box-shadow-table-row-clickable-hovered-blur) var(--ath-box-shadow-table-row-clickable-hovered-color);transition:box-shadow 0.2s ease, border-color 0.2s ease, border-width 0.2s ease;z-index:1}:host(.ath-table-row--clickable:active){border-color:var(--ath-color-table-row-clickable-border-pressed);border-width:var(--ath-border-width-table-row-clickable-active);box-shadow:var(--ath-box-shadow-table-row-clickable-pressed-offset-x) var(--ath-box-shadow-table-row-clickable-pressed-offset-y) var(--ath-box-shadow-table-row-clickable-pressed-blur) var(--ath-box-shadow-table-row-clickable-pressed-color);transition:box-shadow 0.1s ease, border-color 0.1s ease, border-width 0.1s ease;z-index:1}:host(.ath-table-row--last.ath-table-row--clickable:hover),:host(.ath-table-row--last.ath-table-row--clickable:active){border-color:transparent;border-width:var(--ath-border-width-xs);border-bottom-left-radius:var(--ath-border-radius-table-default);border-bottom-right-radius:var(--ath-border-radius-table-default)}";

const AthTableRow$1 = /*@__PURE__*/ proxyCustomElement(class AthTableRow extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athRowSelectionChange = createEvent(this, "athRowSelectionChange");
        this.athRowClick = createEvent(this, "athRowClick");
    }
    get el() { return this; }
    /** Current selection state */
    selected = false;
    /** Apply zebra striping */
    striped = TableStriping.None;
    /** Selection mode (none | single | multiple) */
    selectable = TableSelectable.None;
    /** Enable clickable functionality */
    clickable = false;
    /** Aria label of row click button */
    clickableAriaLabel = 'Navegar';
    /** Row color */
    color = TableColor.Primary;
    /** Row size */
    size;
    /** Group name for radios in single mode */
    selectionGroupName;
    /** Optional row value to be included in selection events */
    value;
    /** Unique id for this row */
    rowId;
    /** Optional parent row id if this row is a child */
    parentId;
    /** Whether this row has children */
    hasChildren = false;
    /** Reserve space for expander column even if this row has no children. Internal use by ath-table */
    reserveExpander = false;
    /** Reserve space for clickable column. Internal use by ath-table */
    reserveClickable = false;
    /** Controls the expanded state for rows that have children */
    expanded = false;
    /** Indicates that this is the last visual row (no border). Internal use by ath-table */
    last = false;
    /** If the row has a fixed column, specify if it's the first or last column */
    frozen = TableFrozen.None;
    /** Emits when this row selection changes */
    athRowSelectionChange;
    /** Emits when this clickable row is clicked */
    athRowClick;
    handleZebraChange() {
        this.updateZebraClasses();
    }
    handleSelectedChanged() {
        this.syncControlsWithSelected();
    }
    handleExpandedChanged() {
        this.applyExpanderToFirstCell();
        this.emitExpansionEvents();
    }
    handleHierarchyFlagsChanged() {
        this.applyExpanderToFirstCell();
    }
    handlePseudoFocusKeyDown = (ev) => {
        if (this.clickable && ['Enter', 'Space'].includes(ev.code)) {
            ev.preventDefault();
            ev.stopPropagation();
            this.onActionClick();
        }
    };
    updateZebraClasses() {
        // Get index among siblings
        const parent = this.el.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children).filter(el => el.tagName.toLowerCase() === 'ath-table-row');
            const index = siblings.indexOf(this.el);
            const isEven = index % 2 === 0;
            const slottedCells = Array.from(this.el.querySelectorAll('ath-table-row-item'));
            const shadowCells = Array.from(this.el.shadowRoot?.querySelectorAll('ath-table-row-item') || []);
            const cells = [...shadowCells, ...slottedCells];
            if (this.striped === TableStriping.Rows) {
                cells.forEach(cell => {
                    cell.striped = isEven;
                });
            }
            else if (this.striped === TableStriping.Columns) {
                cells.forEach((cell, cellIndex) => {
                    const isOddCell = cellIndex % 2 !== 0;
                    cell.striped = isOddCell;
                });
            }
            else {
                cells.forEach(cell => {
                    cell.striped = false;
                });
            }
        }
    }
    componentDidRender() {
        this.applyExpanderToFirstCell();
        this.updateZebraClasses();
    }
    componentDidLoad() {
        this.updateZebraClasses();
        this.syncControlsWithSelected();
    }
    radioEl;
    checkboxEl;
    onRadioChange = (e) => {
        // ath-radio-button emits { checked, value }
        const detail = e.detail;
        if (detail && typeof detail.checked === 'boolean') {
            this.selected = !!detail.checked;
            this.athRowSelectionChange.emit({ selected: this.selected });
        }
    };
    onCheckboxChange = (e) => {
        // ath-checkbox emits { value: 'true' | 'false' }
        const detail = e.detail;
        const isTrue = detail && detail.value === 'true';
        this.selected = !!isTrue;
        this.athRowSelectionChange.emit({ selected: this.selected });
    };
    onActionClick = () => {
        this.athRowClick.emit({
            rowValue: this.value,
            rowId: this.rowId,
        });
    };
    syncControlsWithSelected() {
        if (this.selectable === TableSelectable.Single && this.radioEl) {
            if (this.selected) {
                this.radioEl.checked = true;
            }
            else if (typeof this.radioEl.unCheck === 'function') {
                this.radioEl.unCheck();
            }
            else {
                this.radioEl.checked = false;
            }
        }
        if (this.selectable === TableSelectable.Multiple && this.checkboxEl) {
            this.checkboxEl.value = this.selected ? 'true' : 'false';
        }
    }
    applyExpanderToFirstCell() {
        // Find first data cell (exclude selection cell)
        const cells = Array.from(this.el.querySelectorAll('ath-table-row-item'));
        if (!cells.length)
            return;
        const dataCell = cells.find(c => !c.hasAttribute('data-ath-selection')) || cells[0];
        if (!dataCell)
            return;
        const needsExpander = this.hasChildren || this.reserveExpander;
        if (!needsExpander) {
            dataCell.expander = false;
            return;
        }
        dataCell.expander = true;
        dataCell.expanded = this.expanded;
        dataCell.expanderAriaControls = this.rowId;
        dataCell.isChild = !!this.parentId;
    }
    emitExpansionEvents() {
        if (this.rowId) {
            const ev = new CustomEvent('athToggleCollapse', { detail: this.rowId, bubbles: true });
            window.dispatchEvent(ev);
        }
    }
    onSlotClick($event) {
        if (!this.clickable)
            return;
        // Prevent clicks on interactive elements inside the row from triggering the row click
        const path = $event.composedPath();
        const clickedCell = path.find(el => el.tagName && el.tagName.toLowerCase() === 'ath-table-row-item');
        if (clickedCell && clickedCell.hasInteractivity) {
            return;
        }
        this.onActionClick();
    }
    getAttributes = () => ({
        role: 'row',
    });
    getHostClassNames = () => ({
        'ath-table-row--last': this.last,
        'ath-table-row--clickable': this.clickable,
    });
    render() {
        return (h(Host, { key: 'b6ac0e12940d086575446f7f3ec6af8ed8a7ebb6', ...this.getAttributes(), class: this.getHostClassNames() }, this.clickable && (h("div", { key: '1b90b635aea863bd64b2ed21e44755c38e53f1ae', class: "ath-table-row__focus", tabIndex: 0, "aria-label": this.clickableAriaLabel, onKeyDown: this.handlePseudoFocusKeyDown, onClick: this.onActionClick })), this.selectable !== TableSelectable.None && (h("ath-table-row-item", { key: '619baec1abead3af8cf40ceff2381efcf027a4d8', "data-ath-selection": true, alignment: "center", cellWidth: "64px", frozen: this.frozen, noFrozenShadow: true, color: this.color, size: this.size }, this.selectable === TableSelectable.Single ? (h("ath-radio-button", { ref: el => (this.radioEl = el), name: this.selectionGroupName, ariaLabel: "Selecciona esta fila", checked: this.selected, onAthChange: this.onRadioChange })) : this.selectable === TableSelectable.Multiple ? (h("ath-checkbox", { ref: el => (this.checkboxEl = el), ariaLabel: "Selecciona esta fila", value: this.selected ? 'true' : 'false', onAthChange: this.onCheckboxChange })) : null)), !this.clickable ? (h("slot", null)) : (h("div", { class: "ath-table-row__wrapper", onClick: e => this.onSlotClick(e) }, h("slot", null))), this.reserveClickable && (h("ath-table-row-item", { key: '907244865a279350b647d8862a6a050453a6e486', "data-ath-action": true, alignment: "center", cellWidth: "64px", color: this.color, size: this.size }, this.clickable && h("ath-icon", { key: 'a7fe926c0cbe661289e27a4f4112e5585e517bde', icon: "arrow_right", color: "default", size: IconSize.Medium, title: this.clickableAriaLabel, onClick: () => this.onActionClick() })))));
    }
    static get watchers() { return {
        "striped": ["handleZebraChange"],
        "selected": ["handleSelectedChanged"],
        "expanded": ["handleExpandedChanged"],
        "hasChildren": ["handleHierarchyFlagsChanged"],
        "reserveExpander": ["handleHierarchyFlagsChanged"]
    }; }
    static get style() { return tableRowCss; }
}, [257, "ath-table-row", {
        "selected": [1540],
        "striped": [1],
        "selectable": [1],
        "clickable": [4],
        "clickableAriaLabel": [1, "clickable-aria-label"],
        "color": [1],
        "size": [1],
        "selectionGroupName": [1, "selection-group-name"],
        "value": [8],
        "rowId": [1, "row-id"],
        "parentId": [513, "parent-id"],
        "hasChildren": [4, "has-children"],
        "reserveExpander": [4, "reserve-expander"],
        "reserveClickable": [4, "reserve-clickable"],
        "expanded": [1540],
        "last": [4],
        "frozen": [1]
    }, undefined, {
        "striped": ["handleZebraChange"],
        "selected": ["handleSelectedChanged"],
        "expanded": ["handleExpandedChanged"],
        "hasChildren": ["handleHierarchyFlagsChanged"],
        "reserveExpander": ["handleHierarchyFlagsChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-table-row", "ath-checkbox", "ath-collapse-icon", "ath-icon", "ath-radio-button", "ath-table-row-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-table-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthTableRow$1);
            }
            break;
        case "ath-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ath-collapse-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ath-radio-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ath-table-row-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthTableRow = AthTableRow$1;
const defineCustomElement = defineCustomElement$1;

export { AthTableRow, defineCustomElement };
//# sourceMappingURL=ath-table-row.js.map

//# sourceMappingURL=ath-table-row.js.map