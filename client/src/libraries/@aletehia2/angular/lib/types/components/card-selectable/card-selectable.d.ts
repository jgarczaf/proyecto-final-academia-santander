import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { CardSelectableSizes, CardSelectableTypes } from './card-selectable.model';
export declare class AthCardSelectable implements ComponentInterface {
    private hostId;
    private headlineId;
    private subheadlineId;
    private tagId;
    el: HTMLAthCardSelectableElement;
    /**
     * Size of the card
     **/
    size: CardSelectableSizes;
    /**
     * headline of the card
     **/
    headingText: string;
    /**
     * subtitle of the card
     **/
    subtitle: string;
    /**
     * overline of the card
     **/
    overline: string;
    /**
     * type of card
     **/
    type: CardSelectableTypes;
    /**
     * Indicates whether the card is selected
     **/
    selected: boolean;
    /**
     * Indicates whether the card is disabled
     **/
    disabled: boolean;
    /**
     * tag of the card
     **/
    tag: string;
    athChange: EventEmitter<any>;
    athFocus: EventEmitter<void>;
    athBlur: EventEmitter<void>;
    visualSelected: boolean;
    select(firstLoad: boolean): Promise<void>;
    unselect(): Promise<void>;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private handleKeyDown;
    private getHostAttributes;
    private getAriaAttributes;
    private getCheckClassNames;
    private getCardClassNames;
    componentWillLoad(): Promise<void> | void;
    private renderIcon;
    render(): any;
}
