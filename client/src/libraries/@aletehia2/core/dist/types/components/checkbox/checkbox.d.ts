import { ComponentInterface, EventEmitter, JSX } from '../../stencil-public-runtime';
import { FeedbackTypes, CheckboxValues, CheckboxChangeEventDetail } from './checkbox.model';
export declare class AthCheckBox implements ComponentInterface {
    private checkboxId;
    private helperTextId;
    private feedbackId;
    /**
     * Name of the checkbox (necessary for forms)
     */
    name: string;
    /**
     * Value of the checkbox
     */
    value: CheckboxValues;
    /**
     * If the checkbox is checked by default
     */
    checked: boolean;
    /**
     * If the checkbox is indeterminate by default
     */
    indeterminate: boolean;
    /**
     * If it is disabled
     */
    disabled: boolean;
    /**
     * If it is required
     */
    required: boolean;
    /**
     * If the required character is shown in the label
     */
    hideRequired: boolean;
    /**
     * Label of the checkbox
     */
    label: string;
    /**
     * Accessible text when there is no visible label
     */
    ariaLabel: string | null;
    /**
     * Text below the checkbox (helper text)
     */
    helperText: string;
    /**
     * Type of feedback
     */
    feedback: FeedbackTypes;
    /**
     * Text of the feedback
     */
    feedbackText: string;
    /**
     * If it is read-only
     */
    readonly: boolean;
    /**
     * If the element is focused
     */
    autofocus: boolean;
    /**
     * Emitted when the checkbox gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the checkbox loses focus
     */
    athBlur: EventEmitter<void>;
    /**
     * Emitted when the checkbox change
     */
    athChange: EventEmitter<CheckboxChangeEventDetail>;
    watchValue(value: any): void;
    setFocus(): Promise<void>;
    el: HTMLElement | null;
    internals: ElementInternals;
    private elInput;
    private initialValue;
    private handleFocus;
    private handleBlur;
    private handleClick;
    private emitChangeEvent;
    private toggleChecked;
    private handleKeyDown;
    private getLabelProps;
    private getInputClassNames;
    private getAriaAttributes;
    private getActionAttributes;
    private getFeedbackProps;
    private getHelperTextProps;
    private checkValue;
    private setInputValue;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    render(): JSX.Element;
}
