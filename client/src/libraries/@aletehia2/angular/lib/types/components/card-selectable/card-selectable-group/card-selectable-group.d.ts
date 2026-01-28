import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { CardSelectableGroupSizes } from './card-selectable-group.model';
export declare class AthCardSelectableGroup implements ComponentInterface {
    el: HTMLAthCardSelectableGroupElement;
    /**
     * Indicates whether the card selectable group is disabled
     **/
    disabled: boolean;
    /**
     * Indicates whether the group is multi selection
     **/
    multiple: boolean;
    /**
     * Size for the cards
     */
    size: CardSelectableGroupSizes;
    athValueChanged: EventEmitter<HTMLAthCardSelectableElement[]>;
    private cards;
    private selectedCard;
    private firstEnabledCard;
    private lastEnabledCard;
    private firstTimeLoad;
    handleKeyDown(e: KeyboardEvent): void;
    handleChange(e: CustomEvent): void;
    private emitCheckedCards;
    private removePreviousCheckedCards;
    private moveNextCard;
    private movePreviousCard;
    private getFirstEnabledCard;
    private getLastEnabledCard;
    private getFirstCheckedCard;
    private selectFocusCard;
    private loadCards;
    private getCards;
    private propagateAttributes;
    private propagateAttribute;
    componentDidLoad(): void;
    render(): any;
}
