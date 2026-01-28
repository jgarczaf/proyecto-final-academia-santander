import { JSX, ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { StepAlignmentType, StepFeedbackType, StepRoleType, StepSizeType } from './step-model';
export declare class AthStep implements ComponentInterface {
    private hostId;
    private titleId;
    private panelId;
    /**
     * Defines the action text
     */
    actionText: string;
    /**
     * Indicates the alignment of the step
     */
    alignment: StepAlignmentType;
    /**
     * Indicates if the step is interactive
     */
    clickable: boolean;
    /**
     * Defines the accessible text for the chevron when its function is to collapse
     */
    collapseLabel: string;
    /**
     * Defines the accessible text for the completed state
     */
    completedLabel: string;
    /**
     * Indicates if the step is disabled
     */
    disabled: boolean;
    /**
     * Defines the accessible text for the step
     */
    athAriaLabel: string;
    /**
     * Defines the accessible message announced when the step changes to selected.Only applied on non-interactive steps
     */
    ariaLiveMessage: string;
    /**
     * Identifies the step by its position in the list
     */
    athId: number;
    /**
     * Indicates if the step is a button or a link
     */
    athRole: StepRoleType;
    /**
     * Specifies the accessible text for the error indicator
     */
    errorLabel: string;
    /**
     * Indicates the custom accessible text for the chevron to expand
     */
    expandLabel: string;
    /**
     * Indicates if the step contains an error
     */
    feedback: StepFeedbackType;
    /**
     * Defines the title of the step
     */
    headingText: string;
    /**
     * Indicates if the step is collapsable
     */
    isCollapsable: boolean;
    /**
     * Indicates if the step is completed
     */
    isComplete: boolean;
    /**
     * Indicates if the slot is expanded
     */
    isExpanded: boolean;
    /**
     * Indicates the number of the step
     */
    number: number;
    /**
     * Indicates that the step is read-only
     */
    readonly: boolean;
    /**
     * Indicates that the step is in progress
     */
    selected: boolean;
    /**
     * Sets the size of the step
     */
    size: StepSizeType;
    /**
     * Indicates the total number of steps in the stepper
     */
    total: number;
    athClick: EventEmitter<number>;
    el: HTMLElement;
    isHover: boolean;
    buttonAriaLive: string;
    private isActionVisible;
    private buttonAriaLabel;
    private finalcollapseLabel;
    private finalexpandLabel;
    private getValidAriaValue;
    componentWillLoad(): Promise<void> | void;
    componentWillUpdate(): Promise<void> | void;
    private getClassNames;
    private renderIndicator;
    private renderContent;
    private collapseButton;
    private handleClick;
    private handleKeyDown;
    private handleCollapse;
    private getStepAria;
    private getChevronAriaLabels;
    render(): JSX.Element;
}
