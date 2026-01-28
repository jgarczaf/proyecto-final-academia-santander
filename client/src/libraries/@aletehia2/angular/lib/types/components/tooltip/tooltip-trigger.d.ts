import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { IconSizeTypes } from '../../utils/helper';
export declare class TooltipTrigger implements ComponentInterface {
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
     * The aria-label attribute of the icon
     */
    ariaLabel: string | null;
    /**
     * Emitted when the button is clicked
     */
    athClick: EventEmitter<void>;
    /**
     * Emitted when the button gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the button loses focus
     */
    athBlur: EventEmitter<void>;
    handleKeyDown(ev: KeyboardEvent): void;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private getHostClassNames;
    render(): JSX.Element;
}
