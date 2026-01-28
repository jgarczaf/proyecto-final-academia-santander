import { ComponentInterface } from '../../stencil-public-runtime';
import { AthTextColor, AthTextColumns } from './text.model';
export declare class AthText implements ComponentInterface {
    /**
     * Texto dentro del componente
     **/
    content: string;
    /**
     * Número de líneas máximo a mostrar
     **/
    lines?: number;
    /**
     * Mostrar tooltip con el contenido completo cuando el texto aparece truncado
     */
    withTooltip?: boolean;
    /**
     * Número de columnas y espaciado que se muestran
     */
    columns?: AthTextColumns | string;
    /**
     * Define semánticamente la jerarquías del texto: p, h1, h2, h3...
     */
    hierarchy: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Define color del texto: default, inverse, primary, accent, subtle
     */
    color: AthTextColor;
    hostEl: HTMLElement;
    private pEl;
    /**
     * Estado interno para saber si el texto está truncado
     */
    private isTruncated;
    private getClassNames;
    private getEffectiveLines;
    private get inlineStyle();
    private get normalizedColumns();
    private get isTooltipEnabled();
    private scheduleTruncationUpdate;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private onResize;
    handleLinesChange(): void;
    handleContentChange(): void;
    handleColumnsChange(): void;
    handleTruncationChange(): void;
    private updateTruncation;
    render(): any;
}
