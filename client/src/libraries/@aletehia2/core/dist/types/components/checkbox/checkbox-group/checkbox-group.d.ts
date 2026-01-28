import { ComponentInterface, JSX, EventEmitter } from '../../../stencil-public-runtime';
import { FeedbackTypes } from './checkbox-group.model';
import { CheckboxChangeEventDetail } from '../checkbox.model';
export declare class AthCheckBoxGroup implements ComponentInterface {
    private checkboxGroupId;
    private checkboxGroupHelperTextId;
    private checkboxGroupFeedbackId;
    private srOnlyId;
    el: HTMLElement | null;
    /**
     * Indica si esta deshabilitado
     */
    disabled: boolean;
    /**
     * Indica el tipo de feedback
     */
    feedback: FeedbackTypes;
    /**
     * Texto feedback
     */
    feedbackText: string;
    /**
     * Texto ayuda
     */
    helperText: string;
    /**
     * Texto para el Label
     */
    label: string;
    /**
     * Atributo name a aplicar a todo el grupo
     */
    name: string;
    /**
     * Indica si es solo lectura
     */
    readonly: boolean;
    /**
     * Indica si se muestra el asterisco
     */
    showRequired: boolean;
    /**
     * Indica el texto del tooltip
     */
    tooltipText: string;
    /**
     * Indica el ancho de la burbuja tooltip
     */
    tooltipWidth: number;
    /**
     * Texto oculto para lectores de pantalla indicando que el grupo es requerido
     */
    requiredAriaLabel: string;
    /**
     * Emite el array de checkboxes seleccionados
     */
    athChecked: EventEmitter<CheckboxChangeEventDetail[]>;
    componentDidLoad(): void;
    /**
     * Propagate attributes from parent to children.
     * Set boolean attributes only for true.
     */
    private spreadProperties;
    private selectedCheckboxes;
    private initializeSelectedCheckboxes;
    handleChildCheckboxChange(event: CustomEvent<CheckboxChangeEventDetail>): void;
    private updateSelectedCheckboxes;
    private ariaDescribedBy;
    private getAttributesGroup;
    private getFeedbackProps;
    private getHelperTextProps;
    private getLabelProps;
    render(): JSX.Element;
}
