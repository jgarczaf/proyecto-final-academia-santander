import { JSX } from '../../stencil-public-runtime';
export declare class AthBreadcrumb {
    /** Opciones normalizadas del breadcrumb */
    private _options;
    /**
     * Si es true y el breadcrumb tiene más de 4 elementos,
     * el breadcrumb se renderiza colapsado.
     *
     * Al hacer click en "..." este valor se alterna.
     */
    collapsed: boolean;
    /** Separador entre los enlaces del breadcrumb */
    separator: string;
    /**
     * Lista de enlaces del breadcrumb.
     * Normalmente se recibe como un string JSON desde HTML.
     */
    options: any;
    /**
     * Definición de un aria-label personalizado para el breadcrumb
     */
    athAriaLabel?: string;
    /**
     * Observa cambios en la prop options y la normaliza
     * a un array de BreadcrumbModel
     */
    watchOptions(): void;
    /** Ciclo de vida ejecutado antes del primer render */
    componentWillLoad(): void;
    /** Maneja el click en el botón "..." para expandir/colapsar */
    private _handleClick;
    /**
     * Parsea las opciones del breadcrumb.
     * Soporta:
     * - Array
     * - String JSON
     * - Objeto con claves numéricas
     */
    private parseOptions;
    /**
     * Renderiza los enlaces del breadcrumb.
     * - Si hay más de 4 elementos y collapsed es true:
     *   se muestran solo el primero y el último, con un botón "..."
     * - En caso contrario, se muestran todos los enlaces
     */
    private _renderLinks;
    /** Render principal del componente */
    render(): JSX.Element;
}
