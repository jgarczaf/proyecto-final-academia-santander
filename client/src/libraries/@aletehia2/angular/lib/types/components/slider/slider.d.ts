import { EventEmitter } from '../../stencil-public-runtime';
import { SliderFeedbackErrorCounterType, SliderFeedbackType, SliderType } from './slider.model';
export declare class AthSlider {
    private sliderId;
    private sliderHintId;
    private sliderFeedbackId;
    private initialValue;
    internals: ElementInternals;
    /**
     * The aria-label attribute of the first input-counter.
     */
    fromAriaLabel: string;
    /**
     * The aria-label attribute of the slider.
     */
    groupAriaLabel: string;
    /**
     * The aria-label attribute of the second input-counter.
     */
    toAriaLabel: string;
    /**
     * Detail text at the left of the slider
     */
    detailFirst: string;
    /**
     * Detail text at the right of the slider
     */
    detailLast: string;
    /**
     * If true, the user cannot interact with the slider and the inputs.
     */
    disabled: boolean;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown.
     */
    feedback: SliderFeedbackType;
    /**
     * The ath-input-counter width.
     */
    counterWidth: string;
    /**
     * Feedback error for input counter if is from, to, both or none.
     */
    feedbackCounter: SliderFeedbackErrorCounterType;
    /**
     * The message for the feedback.
     */
    feedbackText: string;
    /**
     * Message to help the user fill the input value.
     */
    helperText: string;
    /**
     * Label slider
     */
    labelGroup: string;
    /**
     * Represents the maximum number of the input & slider.
     */
    max: number;
    /**
     * Represents the minimum number of the input & slider.
     */
    min: number;
    /**
     * The name of the slider. Submitted with the form as part of a name/value pair
     */
    name: string;
    /**
     * If true, the user cannot modify the value.
     */
    readonly: boolean;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required: boolean;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    showRequired: boolean;
    /**
     * Specifies the interval between legal numbers in an <input> element & slider.
     */
    step: number;
    /**
     * If true show step marks.
     */
    stepped: boolean;
    /**
     * The type of slider. if range shows two handles to select between two numbers.
     */
    type: SliderType;
    /**
     * Specifies text for tooltip.
     */
    tooltipText: string;
    /**
     * Specifies the unit for the input.
     */
    unit: string;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value: string;
    /**
     * The aria-valuetext attribute for slider.
     */
    valueText: string;
    /**
     * Specifies the width for slider.
     */
    width: string;
    /**
     * Emitted when the value has changed.
     */
    athChange: EventEmitter<string>;
    /**
     * Emitted when the slider gains focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Emitted when the slider loses focus
     */
    athBlur: EventEmitter<void>;
    isFocused: boolean;
    currentValue: number | number[];
    updateCurrentValue(): void;
    updateValue(): void;
    private sliderTrack;
    private activeHandle;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private preventBlurSubcomponent;
    private checkNearPosition;
    private parseValue;
    private checkValues;
    private setInputValue;
    formResetCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private handleathChangeListen;
    private handleMouseMove;
    private handleMouseUp;
    private handleMouseDown;
    private calculateValue;
    private updateSliderPosition;
    private getPreviousValue;
    private getNextValue;
    private handleKeydown;
    private getLabelProps;
    private getHelperTextProps;
    private getFeedbackProps;
    private getValueText;
    private getSliderHandleAttributes;
    private getContainerHandleClassNames;
    private renderSliderHandles;
    private checkStepsIsSelected;
    private createSteps;
    private renderSliderSteps;
    private ariaDescribedBy;
    private getSliderAttributes;
    private getSliderClassNames;
    private renderSliderFiller;
    private manageFeedbackCounter;
    private renderAthInputCounter;
    private renderSlider;
    render(): any;
}
