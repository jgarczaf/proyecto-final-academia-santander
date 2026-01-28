import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { SegmentedControlSize, SegmentedControlType, SegmentedControlColor, SegmentedControlFeedback, SegmentedControlItemChangeSelect } from './segmented-control.model';
export declare class AthSegmentedControl implements ComponentInterface {
    private hostId;
    private labelId;
    private helperTextId;
    private feedbackId;
    private requiredLabelId;
    private initialValue;
    htmlEl: HTMLElement | null;
    internals: ElementInternals;
    /**
     * Types of the segmented control
     **/
    type: SegmentedControlType;
    /**
     * Size of the segmented control
     **/
    size: SegmentedControlSize;
    /**
     * Color of the segmented control
     */
    color: SegmentedControlColor;
    /**
     * The segmented control is disabled
     */
    disabled: boolean;
    /**
     * Label text for the segmented control
     */
    label: string;
    /**
     * The name of the segmented control to use with forms
     */
    name: string;
    /**
     * Text to show when the label of segmented control its not visible
     */
    ariaLabel: string | null;
    /**
     * Helper text for the segmented control
     */
    helperText: string;
    /**
     * Type of feedback to show
     */
    feedback: SegmentedControlFeedback;
    /**
     * Feedback text
     */
    feedbackText: string;
    /**
     * Show if is required
     */
    required: boolean;
    /**
     * Show if is required in the label
     */
    hideRequired: boolean;
    /**
     * Show if is required in the label
     */
    requiredAriaLabel: any;
    /**
     * Show the tooltip text
     */
    tooltipText: string;
    /**
     * Show the width of the tooltip
     */
    tooltipWidth: number;
    /**
     * Set the value to select the checked ath-radio-button
     */
    value: string;
    watchValue(newValue: string): void;
    athChangeValue: EventEmitter<HTMLAthSegmentedControlItemElement>;
    componentWillLoad(): Promise<void> | void;
    /**
     * Call method to update the children props, and event listener
     */
    componentDidLoad(): void;
    /**
     * Update the segmented control items props
     */
    componentDidUpdate(): void;
    formResetCallback(): void;
    /**
     * Update the segmented control items props
     */
    handlePropsChange(): void;
    /**
     * Listen for selects in the segmented control items
     */
    handleValueChange(event: CustomEvent<SegmentedControlItemChangeSelect>): void;
    private selectSegmentedItemBySelected;
    private forceFirstTabFocusIfNoItemsSelected;
    private ensureSelection;
    private unSelect;
    handleKeyDown(event: KeyboardEvent): void;
    private getSegmentedControlItems;
    private getNextIndex;
    private updateChildrenProps;
    private selectSegmentedItemByValue;
    private getHelperTextProps;
    private getFeedbackProps;
    private getLabelProps;
    private getAriaDescribedBy;
    private getHostAttributes;
    private getClassNames;
    private isActionType;
    render(): any;
}
