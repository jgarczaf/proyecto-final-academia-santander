import { EventEmitter, JSX } from '../../../stencil-public-runtime';
/**
 * @slot default - Contenido del elemento de acordeón
 * @slot header-detail - Contenido a mostrar dentro de la cabecera
 */
export declare class AthAccordionItem {
    private hostId;
    private panelId;
    /**
     * Title of heading item
     */
    headingText: string;
    /**
     * Descriprion of heading item
     */
    description: string;
    /**
     * The accordion item is disabled
     */
    disabled: boolean;
    /**
     * The accordion item is expanded
     */
    expanded: boolean;
    /**
     * The accordion item aria-level
     */
    headingLevel: string;
    /**
     * The accordion item divider bottom
     */
    noDivider: boolean;
    /**
     * The code of the accordion item's icon
     */
    icon: string;
    handleDisabled(expanded: boolean): void;
    close(): Promise<void>;
    opened: EventEmitter<void>;
    private handleToggle;
    private handleKeydown;
    private getParentClassNames;
    private getPanelClassNames;
    private getHeaderClassNames;
    private getChevronClasses;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
