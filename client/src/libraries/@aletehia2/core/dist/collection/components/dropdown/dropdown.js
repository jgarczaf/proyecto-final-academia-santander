import { Host, h } from "@stencil/core";
import { dropdownFeedbackType, dropdownSize } from "./dropdown.model";
import { FcInputElement, FcInputFeedback, FcInputHelperText, FcInputLabel, } from "../../sharedfc/input/index";
let dropdownSequence = 0;
export class AthDropdown {
    dropdownId = `dropdown-${++dropdownSequence}`;
    labelId = `${this.dropdownId}-label`;
    optionPanelId = `${this.dropdownId}-option-panel`;
    listBoxId = `${this.dropdownId}-list-box`;
    inputSearchId = `${this.dropdownId}-input-search`;
    helperId = `${this.dropdownId}-helper-text`;
    feedbackId = `${this.dropdownId}-feedback`;
    searchInputComponent;
    timeoutSearchInpComp;
    initialValue = '';
    el;
    internals;
    /**
     * Nombre accesible para el dropdown
     */
    dropdownAriaLabel;
    /**
     * The name of the combobox. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair
     */
    value;
    /**
     * Label dropdown
     */
    label;
    /**
     * Si dropdown es obligatorio
     */
    required = false;
    /**
     * If true, Do no show required mark for required input
     */
    hideRequired = false;
    /**
     * Tamaño dropdown
     */
    size = dropdownSize.Md;
    /**
     * Texto del tooltip
     */
    tooltipText;
    /**
     * Tipo feedback
     */
    feedback = dropdownFeedbackType.None;
    /**
     * Texto feedback
     */
    feedbackText;
    /**
     * Texto de ayuda
     */
    helperText;
    /**
     * Si dropdown es solo lectura
     */
    readonly = false;
    /**
     * Si dropdown esta deshabilitado
     */
    disabled = false;
    /**
     * Si dropdown es multiseleccion
     */
    multiselect = false;
    /**
     * Mostrar chips
     */
    showChips = false;
    /**
     * Ancho dropdown
     */
    width;
    /**
     * Altura del overlay del dropdown
     */
    overlayMaxHeight;
    /**
     * Si dropdown tiene bloque de busqueda
     */
    search = false;
    /**
     * Texto placeholder del bloque de busqueda
     */
    searchPlaceholder = '';
    /**
     * Texto placeholder del bloque de busqueda
     */
    searchAriaLabel = 'Buscar';
    /**
     * Si dropdown esta abierto
     */
    open = false;
    /**
     * Ancho del tooltip
     */
    tooltipWidth = 0;
    /**
     * Placeholder
     */
    placeholder;
    /**
     * texto cuando multiselect es true, showChips es false y se selecciona una opcion
     */
    nochipsText;
    /**
     * no result text
     */
    noresultText;
    /**
     * Text to announce the items found in search input
     */
    announceResultText = 'Hay [total] elementos en la lista';
    WatchValue(newValue) {
        if (this.lastValue !== newValue) {
            this.selectOptionByValue(newValue);
        }
    }
    /**
     * Emitted when option changed
     */
    athChange;
    /**
     * Emitted when the combobox gains focus
     */
    athFocus;
    /**
     * Emitted when the combobox loses focus
     */
    athBlur;
    placeHolder;
    selectedOptions = [];
    foundResults = true;
    activeId = '';
    index = 0;
    liveMessage = '';
    increaseIndex() {
        this.index = Math.min(this.optionList.length - 1, this.index + 1);
    }
    decreaseIndex() {
        this.index = Math.max(0, this.index - 1);
    }
    async handleClose() {
        clearTimeout(this.timeoutSearchInpComp);
        if (!this.open) {
            this.index = 0;
            this.firstOpenKey = true;
            this.cleanActivaOption();
        }
        else if (this.search) {
            requestAnimationFrame(() => {
                this.timeoutSearchInpComp = setTimeout(() => {
                    this.searchInputComponent?.focus();
                }, 0);
            });
        }
    }
    handleDismiss() {
        const chipLabel = this.selectedOptions[0].text;
        this.options.forEach(option => {
            if (option.text === chipLabel) {
                option.selected = false;
                this.submitSelected(option, true);
            }
        });
        if (this.selectedOptions.length > 0) {
            this.spanTextEl.innerHTML = this.addChips();
        }
        else {
            this.addDefaultPlaceholderText();
        }
        this.dropdownEl.focus();
    }
    checkForClickOutside(event) {
        if (this.el.contains(event.target))
            return;
        if (!this.dropdownEl)
            return;
        this.open = false;
        this.dropdownEl.setAttribute('aria-expanded', 'false');
    }
    handleSelected(event) {
        if (event.detail?.source !== 'user')
            return;
        this.submitSelected(event.target);
        if (!this.multiselect) {
            if (event.target.selected) {
                this.refreshList(event.target);
                this.spanTextEl.innerHTML = event.target.text;
            }
            else {
                this.addDefaultPlaceholderText();
            }
            this.open = false;
            this.dropdownEl.focus();
        }
        else {
            if (this.selectedOptions.length > 0) {
                this.spanTextEl.innerHTML = this.showChips ? this.addChips() : this.selectedOptions.length + ' ' + this.nochipsText;
            }
            else {
                this.addDefaultPlaceholderText();
            }
        }
    }
    options = [];
    optionList = [];
    spanTextEl;
    dropdownEl;
    firstOpenKey = true;
    lastValue;
    addChips = () => {
        const chipCount = this.selectedOptions.length > 1 ? `+${this.selectedOptions.length - 1}` : '';
        const chipSize = this.size === dropdownSize.Lg ? 'md' : 'sm';
        const icon = !!this.selectedOptions[0].icon ? "icon='" + this.selectedOptions[0].icon + "'" : undefined;
        return `<ath-chip-dismiss heading-text="${this.selectedOptions[0].text}" ${icon} size="${chipSize}"></ath-chip-dismiss><span>${chipCount}</span>`;
    };
    updateSelectedOptions(option, dismiss = false) {
        if (dismiss || this.selectedOptions.includes(option)) {
            this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
        }
        else if (!this.multiselect && this.selectedOptions.length > 0) {
            this.selectedOptions = [option];
        }
        else {
            this.selectedOptions = [...this.selectedOptions, option];
        }
    }
    submitSelected(option, dismiss = false) {
        this.updateSelectedOptions(option, dismiss);
        const valuesSelected = this.selectedOptions.map(obj => obj.value).join(',');
        this.lastValue = valuesSelected;
        this.value = valuesSelected;
        this.athChange.emit(this.selectedOptions);
        this.setInputValue(this.value);
    }
    selectOptionByValue(values) {
        this.unselectAllOptions(true);
        const valueList = values.split(',');
        valueList.forEach(value => {
            const index = this.optionList.findIndex(option => option.value === value);
            if (index > -1) {
                this.optionList[index].setSelected(true, { silent: true, source: 'programmatic' });
            }
        });
        this.setInputValue(values);
    }
    unselectAllOptions(silent = false) {
        this.optionList.forEach(option => {
            if (option.selected)
                option.setSelected(false, { silent, source: 'programmatic' });
        });
    }
    setInputValue(value) {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = event => {
        if (!this.firstOpenKey) {
            const related = event.relatedTarget ? event.relatedTarget.id : undefined;
            if (!this.search || related == undefined) {
                this.open = false;
            }
            else if (related == '') {
                this.open = false;
            }
        }
        this.athBlur.emit();
    };
    handleClick = event => {
        if (this.readonly)
            return;
        if (event.target.tagName.includes('ath-CHIP-DISMISS'))
            return;
        this.open = !this.open;
        this.dropdownEl.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    };
    navigationList(isArrowDown) {
        isArrowDown ? this.increaseIndex() : this.decreaseIndex();
        if (this.optionList[this.index].disabled || this.optionList[this.index].optionGroup) {
            isArrowDown ? this.increaseIndex() : this.decreaseIndex();
        }
        this.setActiveOption();
    }
    keydownFirstOption() {
        this.activeId = this.optionList[this.index].id;
        this.options[this.index].activeDropdownOption();
    }
    handleKeyDown = (key) => {
        const isArrowUp = key.code === 'ArrowUp';
        const isArrowDown = key.code === 'ArrowDown';
        if (isArrowUp || isArrowDown) {
            if (!this.firstOpenKey) {
                key.preventDefault();
                if (this.optionList.length > 0) {
                    this.navigationList(isArrowDown);
                }
            }
            else {
                this.firstOpenKey = false;
                this.open = true;
                this.keydownFirstOption();
            }
            this.dropdownEl.setAttribute('aria-activedescendant', this.activeId);
        }
        if (key.code === 'Enter' || key.code === 'Space') {
            if (!this.open) {
                this.firstOpenKey = false;
                this.open = !this.open;
                this.dropdownEl.setAttribute('aria-expanded', 'true');
                this.keydownFirstOption();
                this.dropdownEl.setAttribute('aria-activedescendant', this.activeId);
                if (this.search) {
                    this.searchInputComponent.setAttribute('aria-activedescendant', this.activeId);
                }
            }
            else {
                const selectionValue = this.multiselect ? !this.optionList[this.index].selected : true;
                this.optionList[this.index].setSelected(selectionValue, { source: 'user' });
                this.dropdownEl.focus();
            }
        }
        if (key.code === 'Escape') {
            this.open = false;
            this.dropdownEl.setAttribute('aria-expanded', 'false');
            this.dropdownEl.focus();
        }
    };
    handleInput = (ev) => {
        this.handleFilterChange(ev.target.value || '');
    };
    async cleanActivaOption() {
        this.optionList.forEach(option => {
            option.noActiveDropdownOption();
        });
    }
    async setActiveOption() {
        this.optionList.forEach((option, i) => {
            if (this.index === i) {
                option.activeDropdownOption();
                this.activeId = option.id;
                option.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
            else {
                option.noActiveDropdownOption();
            }
        });
    }
    handleKeyDownInput = (key) => {
        const isArrowUp = key.code === 'ArrowUp';
        const isArrowDown = key.code === 'ArrowDown';
        if (isArrowUp || isArrowDown) {
            key.preventDefault();
            if (this.optionList.length > 0) {
                this.navigationList(isArrowDown);
            }
            this.dropdownEl.setAttribute('aria-activedescendant', this.activeId);
            if (this.search) {
                this.searchInputComponent.setAttribute('aria-activedescendant', this.activeId);
            }
        }
        if (key.code === 'Escape') {
            this.open = false;
            this.dropdownEl.focus();
        }
        if (key.code === 'Enter') {
            this.optionList[this.index].selectOption();
        }
    };
    handleFilterChange(inputText) {
        let haveResults = false;
        if (inputText === '') {
            this.options.forEach(option => {
                option.filterFound();
            });
            this.optionList = this.options;
            haveResults = true;
        }
        else {
            this.optionList = [];
            this.options.forEach(option => {
                if (option.text.toLowerCase().includes(inputText.toLowerCase()) && !option.optionGroup) {
                    option.filterFound();
                    this.optionList.push(option);
                    haveResults = true;
                }
                else {
                    option.filterNotFound(inputText.toLowerCase());
                }
            });
        }
        this.index = 0;
        this.activeId = '';
        this.foundResults = haveResults;
        this.setActiveOption();
        this.announceMessage();
    }
    refeshListMultiselect() {
        this.options.forEach(option => {
            option.updateMultiselect();
        });
    }
    refreshList(activeOption) {
        this.optionList.forEach(option => {
            if (option !== activeOption && option.selected) {
                option.selected = false;
            }
        });
    }
    announceMessage() {
        if (this.foundResults) {
            const message = this.announceResultText.replace('[total]', String(this.optionList.length));
            this.liveMessage = message;
        }
        else {
            this.liveMessage = this.noresultText;
        }
    }
    getFieldClassNames = () => ({
        'ath-dropdown__wrapper--field': true,
        'readonly': this.readonly,
        'disabled': this.disabled,
        'error': this.feedback == dropdownFeedbackType.Error && !this.disabled,
        'open': this.open,
        [`size-${this.size}`]: true,
    });
    getTextClassNames = () => ({
        'ath-dropdown__field': true,
        'ath-dropdown__field-placeholder': this.selectedOptions.length === 0,
        'ath-dropdown__field-filled': this.selectedOptions.length > 0,
    });
    getListClassNames = () => ({
        'ath-dropdown-overlay--single-select': true,
        [`size-${this.size}`]: true,
        'hidden': !this.open,
    });
    ariaDescribedBy = () => {
        const descriptions = {};
        if (this.helperText != undefined)
            descriptions[this.helperId] = this.helperId;
        if (this.feedback != dropdownFeedbackType.None)
            descriptions[this.feedbackId] = this.feedbackId;
        return descriptions;
    };
    getAriaAttributes() {
        const describedByIds = Object.keys(this.ariaDescribedBy()).join(' ') == '' ? undefined : Object.keys(this.ariaDescribedBy()).join(' ');
        return {
            'aria-label': !!this.label ? undefined : this.dropdownAriaLabel,
            'aria-labelledby': !!this.label ? this.labelId : undefined,
            'aria-disabled': this.disabled,
            'aria-required': this.required,
            'aria-invalid': this.feedback === dropdownFeedbackType.Error ? 'true' : undefined,
            'aria-controls': this.search ? this.optionPanelId : this.listBoxId,
            'aria-describedby': describedByIds,
            'aria-expanded': this.open ? 'true' : 'false',
            'aria-haspopup': !this.search ? 'listbox' : 'dialog',
        };
    }
    getFeedbackProps = () => ({
        id: this.feedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    getHelperTextProps = () => {
        return {
            id: this.helperId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getLabelProps = () => ({
        htmlForId: this.dropdownId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: this.tooltipWidth,
    });
    renderDropdown = () => {
        const ariaAttributes = this.getAriaAttributes();
        const icon = this.open ? 'chevron_up' : 'chevron_down';
        const spanText = this.placeholder;
        return (h("span", { ref: (el) => (this.dropdownEl = el), role: "combobox", class: this.getFieldClassNames(), ...ariaAttributes, id: this.dropdownId, onClick: this.handleClick, tabIndex: this.disabled ? -1 : 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, "aria-activedescendant": this.open ? this.activeId : undefined }, h("span", { class: this.getTextClassNames(), ref: (el) => (this.spanTextEl = el) }, !this.placeHolder && spanText), h("ath-icon", { icon: icon, "aria-hidden": "true" })));
    };
    renderInputSearchNew = () => {
        const props = {
            inputId: this.inputSearchId,
            type: 'search',
            placeholder: this.searchPlaceholder,
            value: '',
            onKeyDown: this.handleKeyDownInput,
            onBlur: this.handleBlur,
            onInputRef: el => (this.searchInputComponent = el),
            onInput: this.handleInput,
            onFocus: () => { },
            onChange: () => { },
            inputAriaLabel: this.searchAriaLabel,
            ariaActiveDescendant: this.open ? this.activeId : undefined,
            size: 'md',
        };
        return h(FcInputElement, { ...props });
    };
    renderList = () => {
        const styleHeight = this.overlayMaxHeight ? { maxHeight: this.overlayMaxHeight } : { maxHeight: '236px' };
        return (h("div", { class: this.getListClassNames(), role: "dialog", id: this.optionPanelId, "aria-hidden": !this.open ? 'true' : undefined, "aria-labelledby": this.label ? this.labelId : undefined, "aria-label": this.dropdownAriaLabel ?? undefined, style: styleHeight }, this.search && (h("div", { class: "ath-input" }, h("div", { class: "wrapper" }, this.renderInputSearchNew()))), h("div", { class: "ath-dropdown-option-group ath-scroll", tabindex: "-1" }, h("div", { role: "listbox", class: "ath-dropdown-option__list", id: this.listBoxId, "aria-label": this.dropdownAriaLabel }, h("slot", null)), !this.foundResults && h("div", { class: "noResult" }, " ", this.noresultText, " "))));
    };
    renderAddons = () => {
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        return [
            !!this.helperText && h(FcInputHelperText, { ...helperTextProps }),
            this.feedback === 'error' && !this.disabled && !this.readonly && h(FcInputFeedback, { ...feedbackProps }),
        ];
    };
    addDefaultPlaceholderText() {
        this.spanTextEl.innerHTML = this.placeholder || '';
    }
    assignOptionIds() {
        let optionSecuence = 0;
        this.optionList.forEach(option => {
            if (option.id == '') {
                option.id = `${this.dropdownId}-option-${++optionSecuence}`;
            }
        });
    }
    componentWillLoad() {
        this.options = Array.from(this.el.querySelectorAll('ath-dropdown-option'));
        this.optionList = this.options;
        this.assignOptionIds();
        if (this.multiselect)
            this.refeshListMultiselect();
    }
    componentDidLoad() {
        this.initialValue = this.value;
        if (this.value) {
            this.selectOptionByValue(this.value);
        }
        else {
            const preSelected = this.optionList.filter(option => option.selected);
            if (preSelected.length) {
                this.selectedOptions = preSelected;
                this.lastValue = preSelected.map(o => o.value).join(',');
                this.value = this.lastValue;
                this.setInputValue(this.value);
                this.spanTextEl.innerHTML = this.multiselect ? (this.showChips ? this.addChips() : `${preSelected.length} ${this.nochipsText}`) : preSelected[0].text;
            }
            else {
                this.addDefaultPlaceholderText();
            }
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.athChange.emit(this.selectedOptions);
        this.setInputValue(this.initialValue);
    }
    disconnectedCallback() {
        clearTimeout(this.timeoutSearchInpComp);
    }
    render() {
        const style = this.width ? { width: this.width } : { width: '100%' };
        const labelProps = this.getLabelProps();
        return (h(Host, { key: 'e2df9fe1747fbe073e197762c53cf3ec23e6f81f' }, h("div", { key: '8a4729c1b0aeab6c71f8b0326530e867d6767d17', class: "ath-dropdown", style: style }, !!this.label && (h("div", { key: 'd169b0fb2ff6214d79b226d4e31f6c7048d13129', class: "ath-dropdown__label", id: this.labelId }, h(FcInputLabel, { key: 'c42d3b33f147091f3c52bab8c7d080f80da2df00', ...labelProps }))), h("div", { key: '2a7aa7144174e924b02c6c50a52824306ff18490', class: "ath-dropdown__wrapper" }, this.renderDropdown(), this.renderList(), this.renderAddons())), h("div", { key: 'ce3127d98653f972c9fb276342aa7c3fe6c40324', class: "sr-only", role: "status" }, this.liveMessage)));
    }
    static get is() { return "ath-dropdown"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
    static get properties() {
        return {
            "dropdownAriaLabel": {
                "type": "string",
                "attribute": "dropdown-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Nombre accesible para el dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the combobox. Submitted with the form as part of a name/value pair"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the form control. Submitted with the form as part of a name/value pair"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown es obligatorio"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hideRequired": {
                "type": "boolean",
                "attribute": "hide-required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, Do no show required mark for required input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "dropdownSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "dropdownSizes": {
                            "location": "import",
                            "path": "./dropdown.model",
                            "id": "src/components/dropdown/dropdown.model.ts::dropdownSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tama\u00F1o dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "dropdownSize.Md"
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto del tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "dropdownFeedbackTypes",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "dropdownFeedbackTypes": {
                            "location": "import",
                            "path": "./dropdown.model",
                            "id": "src/components/dropdown/dropdown.model.ts::dropdownFeedbackTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tipo feedback"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "dropdownFeedbackType.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto feedback"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto de ayuda"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown es solo lectura"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown esta deshabilitado"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "multiselect": {
                "type": "boolean",
                "attribute": "multiselect",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown es multiseleccion"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "showChips": {
                "type": "boolean",
                "attribute": "show-chips",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Mostrar chips"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ancho dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "overlayMaxHeight": {
                "type": "string",
                "attribute": "overlay-max-height",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Altura del overlay del dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "search": {
                "type": "boolean",
                "attribute": "search",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown tiene bloque de busqueda"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "searchPlaceholder": {
                "type": "string",
                "attribute": "search-placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto placeholder del bloque de busqueda"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "searchAriaLabel": {
                "type": "string",
                "attribute": "search-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto placeholder del bloque de busqueda"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Buscar'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Si dropdown esta abierto"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "tooltipWidth": {
                "type": "number",
                "attribute": "tooltip-width",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ancho del tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "nochipsText": {
                "type": "string",
                "attribute": "nochips-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "texto cuando multiselect es true, showChips es false y se selecciona una opcion"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "noresultText": {
                "type": "string",
                "attribute": "noresult-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "no result text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "announceResultText": {
                "type": "string",
                "attribute": "announce-result-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to announce the items found in search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Hay [total] elementos en la lista'"
            }
        };
    }
    static get states() {
        return {
            "placeHolder": {},
            "selectedOptions": {},
            "foundResults": {},
            "activeId": {},
            "index": {},
            "liveMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when option changed"
                },
                "complexType": {
                    "original": "ActionListItem[]",
                    "resolved": "ActionListItem[]",
                    "references": {
                        "ActionListItem": {
                            "location": "import",
                            "path": "./dropdown.model",
                            "id": "src/components/dropdown/dropdown.model.ts::ActionListItem"
                        }
                    }
                }
            }, {
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the combobox gains focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athBlur",
                "name": "athBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the combobox loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "WatchValue"
            }, {
                "propName": "open",
                "methodName": "handleClose"
            }];
    }
    static get listeners() {
        return [{
                "name": "athDismiss",
                "method": "handleDismiss",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "checkForClickOutside",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "optSelected",
                "method": "handleSelected",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=dropdown.js.map
