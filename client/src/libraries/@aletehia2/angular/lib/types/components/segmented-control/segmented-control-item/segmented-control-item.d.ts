import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { SegmentedControlSize, SegmentedControlColor, SegmentedControlItemChangeSelect, SegmentedControlItemIconPosition, SegmentedControlType } from '../segmented-control.model';
export declare class AthSegmentedControlItem implements ComponentInterface {
    htmlEl: HTMLElement;
    /**
     * Size of the segmented control item
     **/
    color: SegmentedControlColor;
    /**
     * Size of the segmented control item
     **/
    size: SegmentedControlSize;
    /**
     * Icon position of the segmented control item
     */
    iconPosition: SegmentedControlItemIconPosition;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon: string;
    /**
     * The segmented control item is selected
     */
    selected: boolean;
    /**
     * The segmented control is disabled
     */
    disabled: boolean;
    /**
     * The type of the control
     */
    type: SegmentedControlType;
    /**
     * The value for a Segmented Control with type select (role radio)
     */
    value: string;
    /**
     * Emitted when the segmented control item is focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the segmented control item is selected
     */
    athChange: EventEmitter<SegmentedControlItemChangeSelect>;
    unSelectItem(): Promise<void>;
    setFocus(): Promise<void>;
    setTabindex(index: number): Promise<void>;
    tabindex: number;
    handleKeyDown(event: KeyboardEvent): void;
    componentWillLoad(): Promise<void> | void;
    private handleFocus;
    private handleClick;
    private handleChange;
    private renderIcon;
    private getHostAttributes;
    private getClassNames;
    render(): any;
}
