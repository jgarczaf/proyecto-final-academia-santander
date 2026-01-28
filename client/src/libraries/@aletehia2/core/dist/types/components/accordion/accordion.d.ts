import { JSX } from '../../stencil-public-runtime';
import { AccordionExpand } from './accordion.model';
export declare class AthAccordion {
    /**
     * Indica si se pueden abrir todos los elementos al mismo tiempo
     */
    expand: AccordionExpand;
    /**
     * Si es true, se muestra el divisor también en el último ítem.
     */
    noLastItemDivider: boolean;
    /**
     * Indica una etiqueta accesible para el acordeón
     */
    ariaLabel: string | null;
    expandedItems: number[];
    el: HTMLElement;
    handleOpened(event: any): void;
    private items;
    componentDidLoad(): void;
    private refreshAccordionitems;
    private closeOtherAccordionItems;
    render(): JSX.Element;
}
