import { ComponentInterface, JSX } from '../../stencil-public-runtime';
import { BadgeColorTypes, BadgePositions, BadgeTypes } from './badge.model';
export declare class AthBadge implements ComponentInterface {
    /**
     * The badge can display a value or be a decorative element
     **/
    type: BadgeTypes;
    /**
     * Badge color accompanying the purpose of the message
     **/
    color: BadgeColorTypes;
    /**
     * Value displayed within the badge if it is "numeric"
     **/
    value: number;
    /**
     * Value from which a + will be added once exceeded by the "value"
     **/
    max: number;
    /**
     *  Accessibility label describing the message
     **/
    label: any;
    /**
     * Positioning of the badge relative to the slot
     **/
    position: BadgePositions;
    /**
     * Custom horizontal distance of the badge from its default position
     **/
    distanceX: number;
    /**
     * Custom vertical distance of the badge from its default position
     **/
    distanceY: number;
    _position: BadgePositions;
    handlePosition(): void;
    private get maxValue();
    private getBadgeStyle;
    private getBadgeValue;
    private getClassNames;
    private setPosition;
    el: HTMLElement;
    componentWillLoad(): void;
    render(): JSX.Element;
}
