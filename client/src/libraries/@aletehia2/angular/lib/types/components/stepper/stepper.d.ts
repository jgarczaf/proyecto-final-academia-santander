import { JSX, ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { StepperOrientationType, StepperSizeType } from './stepper-model';
import { StepRoleType } from './step/step-model';
export declare class AthStepper implements ComponentInterface {
    private hostId;
    private headingId;
    private timeoutProgressBarComp;
    el: HTMLElement;
    /**
     * Indicates if the steps are interactive
     */
    clickable: boolean;
    /**
     * Indicates the custom accessible text for the chevron to collapse
     */
    collapseLabel: string;
    /**
     * Specifies the accessible text for the CHECK indicator of completion, which will be injected into the steps
     */
    completedLabel: string;
    /**
     * Defines the accessible text for the step
     */
    athAriaLabel: string;
    /**
     * Defines the message for screen readers when changing the step. Only applied on non-interactive steps
     */
    ariaLiveMessage: string;
    /**
     * Indicates the role of the step
     */
    athRole: StepRoleType;
    /**
     * Specifies the accessible text for the error indicator in steps
     */
    errorLabel: string;
    /**
     * Indicates the custom accessible text for the chevron to expand
     */
    expandLabel: string;
    /**
     * Indicates the icon to use in the title
     */
    headingIcon: string;
    /**
     * Indicates the title of the stepper
     */
    headingText: string;
    /**
     * Indicates the orientation of the stepper
     */
    orientation: StepperOrientationType;
    /**
     * Indicates if the all the steps are read-only
     */
    readonly: boolean;
    /**
     * Indicates the size of the steps
     */
    size: StepperSizeType;
    /**
     * Indicates the number of the first step
     */
    startFrom: number;
    athSelect: EventEmitter<HTMLAthStepElement>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private getValidAriaValue;
    private injectToSteps;
    private manageDividers;
    private checkDetailData;
    manageSelectedStepId(ev: CustomEvent<number>): void;
    disconnectedCallback(): void;
    private manageProgressBar;
    private manageSelection;
    private getClassNames;
    private renderProgressBar;
    private renderStepGroup;
    private renderSteps;
    render(): JSX.Element;
}
