import { ComponentInterface, JSX } from '../../stencil-public-runtime';
import { IconSizeTypes } from '../../utils/helper';
import { IconColorTypes } from './icon.model';
export declare class AthIcon implements ComponentInterface {
    private theme;
    el: HTMLElement | null;
    /**
     * The icon name
     */
    icon: string;
    /**
     * The size of the icon
     */
    size: IconSizeTypes;
    /**
     * Color del icon
     **/
    color: IconColorTypes;
    /**
     * The aria-label attribute of the icon
     */
    ariaLabel: string | null;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby?: string;
    componentWillLoad(): void;
    private hasAriaLabel;
    private hasAriaLabelledBy;
    private getHostAttributes;
    private readonly classNames;
    private getColor;
    render(): JSX.Element;
}
