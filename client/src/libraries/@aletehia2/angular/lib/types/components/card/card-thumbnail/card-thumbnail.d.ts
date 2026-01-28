import { ComponentInterface, JSX } from '../../../stencil-public-runtime';
import { ThumbnailTypes } from './card-thumbnail.model';
export declare class AthCardThumbnail implements ComponentInterface {
    /**
     * Text for top tag
     **/
    topTag: string;
    /**
     * Text for bottom tag
     **/
    bottomTag: string;
    /**
     * type of thumnail
     **/
    type: ThumbnailTypes;
    /**
     * text highlight
     **/
    highlightText: string;
    isFluid: boolean;
    isVertical: boolean;
    updateTypeCard(isFluid: boolean, isVertical: boolean): Promise<void>;
    private getClassNames;
    private renderTag;
    render(): JSX.Element;
}
