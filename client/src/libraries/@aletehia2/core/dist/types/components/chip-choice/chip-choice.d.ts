import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { ChipChoiceSizes } from './chip-choice.model';
export declare class AthChipChoice implements ComponentInterface {
    private initialValue;
    el: HTMLElement;
    internals: ElementInternals;
    /**
     * Indica si el chip esta seleccionado
     */
    selected: boolean;
    /**
     * Indica si el chip esta deshabilitado
     */
    disabled: boolean;
    /**
     * Indica el nombre del icono a usar
     */
    icon: string;
    /**
     * Texto del chip
     */
    label: string;
    /**
     * The chip name for HTML Form API
     */
    name: string;
    /**
     * The role of the chip
     */
    role: string | null;
    /**
     * Indica el tamaño del chip (sm/md)
     */
    size: ChipChoiceSizes;
    /**
     * The chip value for HTML Form API
     */
    value: string;
    watchSelectedHandler(newValue: boolean): void;
    athChange: EventEmitter<any>;
    athFocus: EventEmitter<void>;
    athBlur: EventEmitter<void>;
    visualSelected: boolean;
    select(): Promise<void>;
    unselect(): Promise<void>;
    handleKeydown(e: KeyboardEvent): void;
    handleMouseDown(e: MouseEvent): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    private isCheckbox;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private toogleValueChip;
    private setValueChip;
    private setInputValue;
    private getHostAttributes;
    private getHostClassNames;
    private getContainerClassNames;
    private renderIcon;
    render(): any;
}
