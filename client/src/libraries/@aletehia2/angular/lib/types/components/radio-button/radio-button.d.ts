import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { RadioButtonChangeDetail } from './radio-button.model';
export declare class AthRadioButton implements ComponentInterface {
    private radioButtonId;
    /**
     * Indicates if it is checked by default
     */
    checked: boolean;
    /**
     * Indicates if it is disabled
     */
    disabled: boolean;
    /**
     * Label text
     */
    label: string;
    /**
     * Indicates the name of the radioButton
     */
    name: string;
    /**
     * Indicates if it is read-only
     */
    readonly: boolean;
    /**
     * Indicates the value of the radioButton
     */
    value: string;
    /**
     * Accessible text (aria-label)
     */
    ariaLabel: string | null;
    /**
     * Emitted when the radio-button receives focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the radio-button loses focus
     */
    athBlur: EventEmitter<void>;
    /**
     * Emitted when there is a change in the input state
     */
    athChange: EventEmitter<RadioButtonChangeDetail>;
    unCheck(): Promise<void>;
    setFocus(): Promise<void>;
    setTabindex(tabIndex: any): Promise<void>;
    private elRadioButton;
    tabIndex: any;
    componentWillLoad(): Promise<void> | void;
    private handleFocus;
    private handleBlur;
    private handleClick;
    private handleChange;
    private handleKeyDown;
    private getLabelProps;
    private getInputClassNames;
    private getAriaAttributes;
    private getActionAttributes;
    private renderRadio;
    render(): any;
}
