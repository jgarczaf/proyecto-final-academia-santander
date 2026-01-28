import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { linkSizes, linkTargets } from './link.model';
export declare class AthLink implements ComponentInterface {
    /**
     * aria-describedby para link
     */
    ariaDescribedby: string;
    /**
     * aria-label para link
     */
    ariaLabel: string | null;
    /**
     * aria-labelledby para link
     */
    ariaLabelledby: string | null;
    /**
     * Indica si el link esta deshabilitado
     */
    disabled: boolean;
    /**
     * Indica el icono a usar
     */
    icon: string;
    /**
     * Indica el aria-label para icono
     */
    iconAriaLabel: string;
    /**
     * Url del destino
     */
    linkHref: string;
    /**
     * Target para indicar donde se abrira
     */
    linkTarget: linkTargets;
    /**
     * Tamaño link
     */
    size: linkSizes;
    /**
     * Opcion del subrayado
     */
    underline: boolean;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel?: string;
    /**
     * Emitted when the link is clicked
     */
    athClick: EventEmitter<void>;
    /**
     * Emitted when the lin gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the link loses focus
     */
    athBlur: EventEmitter<void>;
    el: HTMLElement;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private setAriaLabel;
    private getClassNames;
    private renderIcon;
    render(): JSX.Element;
}
