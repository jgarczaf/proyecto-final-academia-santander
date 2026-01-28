import { ComponentInterface, JSX } from '../../stencil-public-runtime';
import { AlertColors, AlertTypes } from './alert.model';
export declare class AthAlert implements ComponentInterface {
    private hostId;
    private titleId;
    private descriptionId;
    /**
     * Tipo de alert
     */
    type: AlertTypes;
    /**
     * The color of the message
     */
    color: AlertColors;
    /**
     * Descripcion del alert
     */
    description?: string;
    /**
     * Titulo del alert
     */
    headingText?: string;
    /**
     * Titulo del alert
     */
    isUrgent?: boolean;
    /**
     * Nivel de heading del título
     */
    headingLevel: number;
    /**
     * Has button close
     */
    hasClose: boolean;
    /**
     * Close button aria-label
     */
    closeAriaLabel: string;
    isVisible: boolean;
    alertRole: string;
    isSmall: boolean;
    updateAlertRole(): void;
    private host;
    private hasButtonSlotElements;
    private closeAlert;
    private getRole;
    private resizeObserver;
    private getAttributes;
    private getClassNames;
    private getIcon;
    private renderIcon;
    private getIconColor;
    private renderCloseButton;
    private renderDivIcon;
    private renderDivCloseButton;
    private renderDivTitle;
    private renderDivDescription;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentDidRender(): void;
    private renderSection;
    private renderPage;
    componentWillLoad(): void | Promise<void>;
    render(): JSX.Element;
}
