import { ComponentInterface } from '../../stencil-public-runtime';
import { TagColorTypes, TagSizes } from './tag.model';
export declare class AthTag implements ComponentInterface {
    /**
     * Color del tag acompañando al propósito del mensaje
     **/
    color: TagColorTypes;
    /**
     * Tamaño del tag
     **/
    size: TagSizes;
    /**
     * Icono
     */
    icon: string;
    /**
     * Texto que se visualiza dentro del tag
     **/
    headingText: string;
    private getClassNames;
    el: HTMLElement;
    render(): any;
}
