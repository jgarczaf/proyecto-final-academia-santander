export interface BreadcrumbModel {
    /** Identificador único del ítem */
    id: string | number;
    /** Nombre del ítem que se muestra en el breadcrumb */
    name: string;
    /** URL del ítem al que se navega al hacer clic */
    url?: string;
    /** Icono asociado al ítem */
    icon?: string;
    /** Indica si el ítem está deshabilitado */
    disabled?: boolean;
}
export declare const defaultAthTextModel: Required<Pick<BreadcrumbModel, 'id' | 'name'>>;
