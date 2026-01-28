import { ComponentInterface, JSX, EventEmitter } from '../../stencil-public-runtime';
import { CardOrientations, CardSizes } from './card.model';
export declare class AthCard implements ComponentInterface {
    private hostId;
    private titleId;
    private subtitleId;
    private bodyId;
    private dateId;
    private tagId;
    /**
     * Size of the card
     **/
    size: CardSizes;
    /**
     * Orientation Card
     **/
    orientation: CardOrientations;
    /**
     * Card is clickable
     **/
    clickable: boolean;
    /**
     * if Card thumbnail is fluid
     */
    fluid: boolean;
    /**
     * ancho de la card
     */
    width: string;
    /**
     * ancho máximo de la card
     */
    maxWidth: string;
    /**
     * ancho máximo de la card
     */
    ariaLabelledBy: string;
    /**
     * Emitted when card is clicked
     */
    athClick: EventEmitter<void>;
    /**
     * Emitted when card gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when card loses focus
     */
    athBlur: EventEmitter<void>;
    el: HTMLElement;
    private ArticleEl;
    private header;
    private isHeaderSlotted;
    constructor();
    private handleClick;
    private handleFocus;
    private handleBlur;
    private getClassNames;
    private getImgClassNames;
    private getTagClassNames;
    private getWrapperClassNames;
    private getThumbnailClassNames;
    private getAriaAttributes;
    private getHostAttributes;
    private renderIcon;
    private isSlotted;
    private emptySlot;
    private fillHeaderinterface;
    componentWillLoad(): void;
    componentDidLoad(): void;
    renderHeader: () => any;
    render(): JSX.Element;
}
