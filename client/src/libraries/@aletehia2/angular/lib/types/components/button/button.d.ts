import { JSX, EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { ButtonColors, ButtonSizes, ButtonTypes, ButtonIconPositions } from './button.model';
export declare class AthButton implements ComponentInterface {
    private showLeftIcon;
    private showRightIcon;
    el: HTMLElement | null;
    internals: ElementInternals;
    /**
     * The color variant of the button
     */
    color: ButtonColors;
    /**
     * The size of the buton
     */
    size: ButtonSizes;
    /**
     * The type of the button
     */
    type: ButtonTypes;
    /**
     * Whether the button has an icon and his position
     */
    iconPosition: ButtonIconPositions;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon: string;
    /**
     * The clear of the button (background and border color)
     */
    clear: boolean;
    /**
     * The button can be adapted to its container width
     */
    fullWidth: boolean;
    /**
     * The button is disabled
     */
    disabled: boolean;
    setFocus(): Promise<void>;
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
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private getHostClassNames;
    private getSpanClassNames;
    private getButtonStyle;
    private renderIcon;
    render(): JSX.Element;
}
