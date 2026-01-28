import { ComponentInterface } from '../../stencil-public-runtime';
import { DividerOrientationType, DividerColorType, DividerSizeType } from './divider.model';
export declare class AthDivider implements ComponentInterface {
    /**
     * Orientation of the divider
     **/
    orientation: DividerOrientationType;
    /**
     * Size of the divider
     **/
    size: DividerSizeType;
    /**
     * Color of the divider
     **/
    color: DividerColorType;
    private getAttributes;
    private getClassNames;
    render(): any;
}
