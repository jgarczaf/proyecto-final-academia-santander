import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { ButtonLinkColors, ButtonLinkSizes, ButtonLinkPositions } from './button-link.model';
export declare class AthButtonLink implements ComponentInterface {
    el: HTMLElement | null;
    /**
     * The color variant of the button-link
     */
    color: ButtonLinkColors;
    /**
     * The size of the buton-link
     */
    size: ButtonLinkSizes;
    /**
     * The code of the button-link's icon
     */
    icon: string;
    /**
     * Icon Position
     */
    iconPosition: ButtonLinkPositions;
    /**
     * The button-link is disabled
     */
    disabled: boolean;
    setFocus(): Promise<void>;
    /**
     * Emitted when the button-link is clicked
     */
    athClick: EventEmitter<void>;
    /**
     * Emitted when the button-link gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the button-link loses focus
     */
    athBlur: EventEmitter<void>;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private getHostClassNames;
    private getSpanClassNames;
    private renderIcon;
    render(): JSX.Element;
}
