export type AthTextColor = 'default' | 'inverse' | 'primary' | 'accent' | 'subtle' | 'disabled';
export declare const TextColor: {
    readonly Default: "default";
    readonly Inverse: "inverse";
    readonly Primary: "primary";
    readonly Accent: "accent";
    readonly Subtle: "subtle";
    readonly Disabled: "disabled";
};
export interface AthTextModel {
    /** Número máximo de líneas a mostrar. Si no se especifica, se usa el valor por defecto. */
    lines?: number;
    /** Texto del componente (alternativa al slot). */
    content?: string;
    /** Mostrar tooltip con el texto completo si está truncado. */
    withTooltip?: boolean;
    /** Número de columnas que se muestra */
    columns?: AthTextColumns;
    /** Define semánticamente la jerarquías del texto: p, h1, h2, h3, h4, h5, h6 */
    hierarchy?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Color semántico del texto. */
    color?: AthTextColor;
}
export interface AthTextColumns {
    numColumns: number;
    spacing?: string;
}
export declare const defaultAthTextModel: Required<Pick<AthTextModel, 'lines' | 'color' | 'withTooltip' | 'columns' | 'hierarchy'>>;
export declare const CSS_VARS: {
    readonly COLOR: "--color";
    readonly LINES: "--text-lines";
    readonly COLUMNS: "--ath-text-columns";
    readonly COLUMN_GAP: "--ath-text-column-gap";
};
