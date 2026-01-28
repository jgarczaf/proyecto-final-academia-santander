import { JSX, EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
export declare class AthDropdownOption implements ComponentInterface {
    /**
     * name option
     */
    name: string;
    /**
     * Valor del option
     */
    value: string;
    /**
     * texto del option
     */
    text: string;
    /**
     * Si esta selecionado
     */
    selected: boolean;
    /**
     * Si esta deshabilitado
     */
    disabled: boolean;
    /**
     * Permite agrupaciones
     */
    optionGroup: boolean;
    /**
     * icono para opcion
     */
    icon: string;
    /**
     * etiqueta accesible para la opcionseleccionada
     */
    selectedAriaLabel: string;
    isMultiselect: boolean;
    optSelected: EventEmitter<{
        source: 'user' | 'programmatic';
    }>;
    hidden: boolean;
    haveOptionSlot: boolean;
    isIngroup: boolean;
    activeOption: boolean;
    updateMultiselect(): Promise<void>;
    updateGroupOption(): Promise<void>;
    activeDropdownOption(): Promise<void>;
    noActiveDropdownOption(): Promise<void>;
    filterNotFound(inputText: any): Promise<void>;
    setSelected(selected: boolean, opts?: {
        silent?: boolean;
        source?: 'user' | 'programmatic';
    }): Promise<void>;
    filterFound(): Promise<void>;
    selectOption(): Promise<void>;
    unselectOption(): Promise<void>;
    el: HTMLElement;
    private optionsGroup;
    private getOptionClassNames;
    private addLevel;
    private getClassNames;
    private getCheckboxClassNames;
    private handleClick;
    componentWillLoad(): Promise<void> | void;
    render(): JSX.Element;
}
