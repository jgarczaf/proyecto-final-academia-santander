export declare class AthTab {
    /**
     * Etiqueta accesible de la tab
     */
    label: string;
    /**
     * Si la tab está deshabilitada o no
     */
    disabled: boolean;
    /**
     * Código del icono en caso de que la tab deba llevar icono
     */
    icon: string;
    /**
     * Etiqueta accesible del icono
     */
    iconAriaLabel: string;
    /**
     * Ruta de navegación de la tab
     */
    navigationData: string;
    /**
     * Si la tab está seleccionada por defecto
     */
    selected: boolean;
    render(): any;
}
