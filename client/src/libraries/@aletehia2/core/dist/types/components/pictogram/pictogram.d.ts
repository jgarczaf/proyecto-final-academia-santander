import { ComponentInterface } from '../../stencil-public-runtime';
import { PictogramSizeTypes } from './pictogram.model';
export declare class AthPictogram implements ComponentInterface {
    private theme;
    el: HTMLElement | null;
    /**
     * The pictogram name
     */
    name: string;
    /**
     * The size of the pictogram
     */
    size: PictogramSizeTypes;
    /**
     * The aria-label attribute of the pictogram
     */
    ariaLabel: string | null;
    /**
     * The aria-labelledby attribute of the pictogram
     */
    ariaLabelledby?: string;
    componentWillLoad(): void;
    private hasAriaLabel;
    private hasAriaLabelledBy;
    private getHostAttributes;
    private readonly classNames;
    render(): any;
}
