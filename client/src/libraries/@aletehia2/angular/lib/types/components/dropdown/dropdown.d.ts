import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { ActionListItem, dropdownFeedbackTypes, dropdownSizes } from './dropdown.model';
export declare class AthDropdown implements ComponentInterface {
    private dropdownId;
    private labelId;
    private optionPanelId;
    private listBoxId;
    private inputSearchId;
    private helperId;
    private feedbackId;
    private searchInputComponent;
    private timeoutSearchInpComp;
    private initialValue;
    el: HTMLElement;
    internals: ElementInternals;
    /**
     * Nombre accesible para el dropdown
     */
    dropdownAriaLabel: string;
    /**
     * The name of the combobox. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair
     */
    value: string;
    /**
     * Label dropdown
     */
    label?: string;
    /**
     * Si dropdown es obligatorio
     */
    required: boolean;
    /**
     * If true, Do no show required mark for required input
     */
    hideRequired: boolean;
    /**
     * Tamaño dropdown
     */
    size: dropdownSizes;
    /**
     * Texto del tooltip
     */
    tooltipText: string;
    /**
     * Tipo feedback
     */
    feedback: dropdownFeedbackTypes;
    /**
     * Texto feedback
     */
    feedbackText: string;
    /**
     * Texto de ayuda
     */
    helperText: string;
    /**
     * Si dropdown es solo lectura
     */
    readonly: boolean;
    /**
     * Si dropdown esta deshabilitado
     */
    disabled: boolean;
    /**
     * Si dropdown es multiseleccion
     */
    multiselect: boolean;
    /**
     * Mostrar chips
     */
    showChips: boolean;
    /**
     * Ancho dropdown
     */
    width: string;
    /**
     * Altura del overlay del dropdown
     */
    overlayMaxHeight: string;
    /**
     * Si dropdown tiene bloque de busqueda
     */
    search: boolean;
    /**
     * Texto placeholder del bloque de busqueda
     */
    searchPlaceholder: string;
    /**
     * Texto placeholder del bloque de busqueda
     */
    searchAriaLabel: string;
    /**
     * Si dropdown esta abierto
     */
    open: boolean;
    /**
     * Ancho del tooltip
     */
    tooltipWidth: number;
    /**
     * Placeholder
     */
    placeholder: string;
    /**
     * texto cuando multiselect es true, showChips es false y se selecciona una opcion
     */
    nochipsText: string;
    /**
     * no result text
     */
    noresultText: string;
    /**
     * Text to announce the items found in search input
     */
    announceResultText: string;
    WatchValue(newValue: string): void;
    /**
     * Emitted when option changed
     */
    athChange: EventEmitter<ActionListItem[]>;
    /**
     * Emitted when the combobox gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the combobox loses focus
     */
    athBlur: EventEmitter<void>;
    placeHolder?: any;
    selectedOptions: ActionListItem[];
    foundResults: boolean;
    activeId: string;
    index: number;
    liveMessage: string;
    private increaseIndex;
    private decreaseIndex;
    handleClose(): Promise<void>;
    handleDismiss(): void;
    checkForClickOutside(event: any): void;
    handleSelected(event: any): void;
    private options;
    private optionList;
    private spanTextEl;
    private dropdownEl;
    private firstOpenKey;
    private lastValue;
    private addChips;
    private updateSelectedOptions;
    private submitSelected;
    private selectOptionByValue;
    private unselectAllOptions;
    private setInputValue;
    private handleFocus;
    private handleBlur;
    private handleClick;
    private navigationList;
    private keydownFirstOption;
    private handleKeyDown;
    private handleInput;
    private cleanActivaOption;
    private setActiveOption;
    private handleKeyDownInput;
    private handleFilterChange;
    private refeshListMultiselect;
    private refreshList;
    private announceMessage;
    private getFieldClassNames;
    private getTextClassNames;
    private getListClassNames;
    private ariaDescribedBy;
    private getAriaAttributes;
    private getFeedbackProps;
    private getHelperTextProps;
    private getLabelProps;
    private renderDropdown;
    private renderInputSearchNew;
    private renderList;
    private renderAddons;
    private addDefaultPlaceholderText;
    private assignOptionIds;
    componentWillLoad(): Promise<void> | void;
    componentDidLoad(): void;
    formResetCallback(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
