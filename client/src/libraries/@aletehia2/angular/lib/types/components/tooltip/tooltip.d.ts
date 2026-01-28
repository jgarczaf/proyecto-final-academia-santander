import { ComponentInterface, JSX } from '../../stencil-public-runtime';
import { TooltipColors, TooltipPositions, TooltipTriggers } from './tooltip.model';
export declare class AthTooltip implements ComponentInterface {
    private hostId;
    private tooltipId;
    /**
     * Whether the tooltip has an arrow
     */
    hasArrow: boolean;
    /**
     * The position of the tooltip
     */
    position: TooltipPositions;
    /**
     * The variant of the tooltip
     */
    color: TooltipColors;
    /**
     * Whether the tooltip has a maximum width, and if so, the maximum width
     */
    maxWidth: number;
    /**
     * The action that will show the tooltip
     */
    trigger: TooltipTriggers;
    /**
     * The text in the tooltip
     */
    headingText: string;
    isVisible: boolean;
    el: HTMLElement;
    handleFocus(): void;
    handleBlur(): void;
    handleClick(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private showTooltip;
    private calculateTooltipPosition;
    private hideTooltip;
    private classNames;
    componentDidLoad(): void;
    render(): JSX.Element;
}
