import { ComponentInterface, JSX, EventEmitter } from '../../../stencil-public-runtime';
import { FeedbackType, OrientationType } from './radio-button-group.model';
import { RadioButtonChangeDetail } from '../radio-button.model';
export declare class AthRadioButtonGroup implements ComponentInterface {
    private hostId;
    private labelId;
    private helperTextId;
    private feedbackId;
    private srOnlyId;
    private initialValue;
    private index;
    el: HTMLElement | null;
    internals: ElementInternals;
    /**
     * Indicates whether the group is disabled
     */
    disabled: boolean;
    /**
     * Indicates the Feedback type
     */
    feedback: FeedbackType;
    /**
     * Feedback text to be displayed
     */
    feedbackText: string;
    /**
     * Helper text to be displayed
     */
    helperText: string;
    /**
     * Label text
     */
    label: string;
    /**
     * Name attribute to apply to the whole group
     */
    name: string;
    /**
     * Indicates the orientation of the group
     */
    orientation: OrientationType;
    /**
     * Indicates whether the group is read-only
     */
    readonly: boolean;
    /**
     * Indicates whether to show the asterisk
     */
    showRequired: boolean;
    /**
     * Tooltip text
     */
    tooltipText: string;
    /**
     * Tooltip width
     */
    tooltipWidth: number;
    /**
     * Set the value to select the checked ath-radio-button
     */
    value: string;
    watchValue(newValue: string): void;
    /**
     * Accessible name for the group
     */
    ariaLabel: string | null;
    /**
     * Screen-reader-only text indicating the group is required
     */
    requiredAriaLabel: string;
    athChangeValue: EventEmitter<string>;
    handleNavigation(event: KeyboardEvent): void;
    handleValueChange(event: CustomEvent<RadioButtonChangeDetail>): void;
    componentDidLoad(): void;
    componentWillLoad(): Promise<void> | void;
    formResetCallback(): void;
    private checkRadioByValue;
    private getNextIndex;
    private uncheck;
    private ariaDescribedBy;
    private getAttributesGroup;
    private getFeedbackProps;
    private getHelperTextProps;
    private getLabelProps;
    private checkChecked;
    private setFocusFirstActiveRadio;
    /**
     * Propagate attributes from parent to children.
     * Set boolean attributes only for true.
     */
    private spreadProperties;
    private getGroupClassNames;
    render(): JSX.Element;
}
