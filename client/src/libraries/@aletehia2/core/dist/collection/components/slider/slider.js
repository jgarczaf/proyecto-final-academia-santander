import { h, Host } from "@stencil/core";
import { FcInputLabel } from "../../sharedfc/input/label/fc-label";
import { SliderFeedbackErrorCounterTypes, SliderFeedbackTypes, SliderTypes } from "./slider.model";
import { FcInputHelperText } from "../../sharedfc/input/helper/fc-helper";
import { FcInputFeedback } from "../../sharedfc/input/feedback/fc-feedback";
import { FcHelpDescription } from "../../sharedfc/tooltip/index";
let sliderSequence = 0;
export class AthSlider {
    sliderId = `ath-slider-${sliderSequence++}`;
    sliderHintId;
    sliderFeedbackId;
    initialValue;
    internals;
    /**
     * The aria-label attribute of the first input-counter.
     */
    fromAriaLabel;
    /**
     * The aria-label attribute of the slider.
     */
    groupAriaLabel;
    /**
     * The aria-label attribute of the second input-counter.
     */
    toAriaLabel;
    /**
     * Detail text at the left of the slider
     */
    detailFirst;
    /**
     * Detail text at the right of the slider
     */
    detailLast;
    /**
     * If true, the user cannot interact with the slider and the inputs.
     */
    disabled = false;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown.
     */
    feedback = SliderFeedbackTypes.None;
    /**
     * The ath-input-counter width.
     */
    counterWidth = 'auto';
    /**
     * Feedback error for input counter if is from, to, both or none.
     */
    feedbackCounter = SliderFeedbackErrorCounterTypes.None;
    /**
     * The message for the feedback.
     */
    feedbackText;
    /**
     * Message to help the user fill the input value.
     */
    helperText;
    /**
     * Label slider
     */
    labelGroup;
    /**
     * Represents the maximum number of the input & slider.
     */
    max = 100;
    /**
     * Represents the minimum number of the input & slider.
     */
    min = 0;
    /**
     * The name of the slider. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * If true, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    showRequired = true;
    /**
     * Specifies the interval between legal numbers in an <input> element & slider.
     */
    step = 1;
    /**
     * If true show step marks.
     */
    stepped = false;
    /**
     * The type of slider. if range shows two handles to select between two numbers.
     */
    type = SliderTypes.Default;
    /**
     * Specifies text for tooltip.
     */
    tooltipText;
    /**
     * Specifies the unit for the input.
     */
    unit;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value = this.min.toString();
    /**
     * The aria-valuetext attribute for slider.
     */
    valueText;
    /**
     * Specifies the width for slider.
     */
    width;
    /**
     * Emitted when the value has changed.
     */
    athChange;
    /**
     * Emitted when the slider gains focus
     */
    athFocus;
    /**
     * Emitted when the slider loses focus
     */
    athBlur;
    isFocused = false;
    currentValue;
    updateCurrentValue() {
        this.checkValues();
        if (Array.isArray(this.currentValue)) {
            this.value = `[${this.currentValue.join(',')}]`;
        }
        else {
            this.value = this.currentValue.toString();
        }
        if (this.isFocused) {
            this.handleChange();
        }
    }
    updateValue() {
        this.parseValue();
        this.setInputValue(this.value);
    }
    sliderTrack;
    activeHandle;
    handleChange = () => this.athChange.emit(this.value);
    handleFocus = event => {
        event.stopPropagation();
        if (!this.isFocused) {
            this.isFocused = true;
            this.athFocus.emit();
            document.addEventListener('focusout', this.handleBlur);
        }
    };
    handleBlur = () => {
        this.isFocused = false;
        this.athBlur.emit();
        document.removeEventListener('focusout', this.handleBlur);
    };
    preventBlurSubcomponent = event => event.stopPropagation();
    checkNearPosition(event) {
        const rect = this.sliderTrack.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const percent = offsetX / rect.width;
        const newValue = Math.round((this.min + percent * (this.max - this.min)) / this.step) * this.step;
        if (this.type === SliderTypes.Range) {
            const leftHandleValue = this.currentValue[0];
            const rightHandleValue = this.currentValue[1];
            const leftDistance = Math.abs(newValue - leftHandleValue);
            const rightDistance = Math.abs(newValue - rightHandleValue);
            if (leftDistance < rightDistance) {
                this.currentValue = [Math.min(newValue, this.currentValue[1]), this.currentValue[1]];
                const handle1 = this.sliderTrack.querySelector('.ath-slider-handle-range');
                handle1.focus();
                this.activeHandle = 'handle1';
            }
            else {
                this.currentValue = [this.currentValue[0], Math.max(newValue, this.currentValue[0])];
                const handle2 = this.sliderTrack.querySelector('.ath-slider-handle-range2');
                handle2.focus();
                this.activeHandle = 'handle2';
            }
        }
        else {
            this.currentValue = Math.min(Math.max(newValue, this.min), this.max);
            const handle1 = this.sliderTrack.querySelector('.ath-slider-handle-range');
            handle1.focus();
            this.activeHandle = 'handle1';
        }
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        this.updateSliderPosition();
    }
    parseValue() {
        if (this.value && !this.value.includes('NaN')) {
            const parsedValue = JSON.parse(this.value);
            if ((Array.isArray(parsedValue) && this.type === SliderTypes.Range) || (!Array.isArray(parsedValue) && this.type === SliderTypes.Default)) {
                this.currentValue = parsedValue;
            }
            else if (!Array.isArray(parsedValue) && this.type === SliderTypes.Range) {
                this.currentValue = [parsedValue, this.max];
            }
        }
    }
    checkValues() {
        if (this.type === SliderTypes.Default) {
            if (+this.currentValue < this.min)
                this.currentValue = this.min;
            if (+this.currentValue > this.max)
                this.currentValue = this.max;
        }
        else {
            if (this.currentValue[0] < this.min)
                this.currentValue[0] = this.min;
            if (this.currentValue[0] > this.max)
                this.currentValue[0] = this.max;
            if (this.currentValue[1] > this.max)
                this.currentValue[1] = this.max;
            if (this.currentValue[1] < this.currentValue[0])
                this.currentValue[1] = this.currentValue[0];
        }
    }
    setInputValue(value) {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.parseValue();
        this.updateSliderPosition();
        this.setInputValue(this.value);
        this.handleChange();
    }
    componentWillLoad() {
        this.parseValue();
        this.sliderHintId = `${this.sliderId}-hint`;
        this.sliderFeedbackId = `${this.sliderId}-feedback`;
    }
    componentDidLoad() {
        this.initialValue = this.value;
        this.updateSliderPosition();
        if (this.stepped)
            this.checkStepsIsSelected();
    }
    handleathChangeListen(ev, input) {
        if (input === 'counter1') {
            if (this.type === SliderTypes.Range) {
                this.currentValue = [Number.parseInt(ev.detail), this.currentValue[1]];
                if (this.currentValue[0] > this.currentValue[1]) {
                    this.currentValue = [this.currentValue[1], this.currentValue[1]];
                }
            }
            else {
                this.currentValue = Number.parseInt(ev.detail);
            }
        }
        else {
            this.currentValue = [this.currentValue[0], Number.parseInt(ev.detail)];
            if (this.currentValue[1] < this.currentValue[0]) {
                this.currentValue = [this.currentValue[0], this.currentValue[0]];
            }
        }
        this.updateSliderPosition();
    }
    handleMouseMove = (event) => {
        this.calculateValue(event);
    };
    handleMouseUp = () => {
        this.activeHandle = null;
        const handle1 = this.sliderTrack.querySelector('.ath-slider-handle-range');
        handle1.blur();
        const handle2 = this.sliderTrack.querySelector('.ath-slider-handle-range2');
        if (handle2)
            handle2.blur();
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        this.handleChange();
    };
    handleMouseDown = (event) => {
        if (this.disabled || this.readonly)
            return;
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        if (target.classList.contains('ath-slider-handle-range')) {
            this.activeHandle = 'handle1';
        }
        else if (target.classList.contains('ath-slider-handle-range2')) {
            this.activeHandle = 'handle2';
        }
        else if (target.classList.contains('ath-slider__filler__steps') || target.classList.contains('ath-slider__filler__filled') || target.classList.contains('ath-slider__step')) {
            this.activeHandle = 'slider-track';
        }
        if (this.activeHandle != 'slider-track') {
            this.calculateValue(event);
            window.addEventListener('mousemove', this.handleMouseMove);
            window.addEventListener('mouseup', this.handleMouseUp);
        }
        else {
            this.checkNearPosition(event);
        }
    };
    calculateValue(event) {
        if (!this.sliderTrack || this.activeHandle === null)
            return;
        const rect = this.sliderTrack.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const percent = offsetX / rect.width;
        let newValue = Math.round((percent * (this.max - this.min)) / this.step) * this.step + this.min;
        if (this.activeHandle === 'handle1') {
            if (this.type === SliderTypes.Range) {
                this.currentValue = [Math.min(Math.max(newValue, this.min), this.currentValue[1]), this.currentValue[1]];
            }
            else {
                this.currentValue = Math.min(Math.max(newValue, this.min), this.max);
            }
        }
        else if (this.activeHandle === 'handle2') {
            if (this.type === SliderTypes.Range) {
                this.currentValue = [this.currentValue[0], Math.max(Math.min(newValue, this.max), this.currentValue[0])];
            }
        }
        this.updateSliderPosition();
    }
    updateSliderPosition() {
        const handle1 = this.sliderTrack.querySelector('.ath-slider-handle-range');
        const handle2 = this.sliderTrack.querySelector('.ath-slider-handle-range2');
        const trackBar = this.sliderTrack.querySelector('.ath-slider__filler__filled');
        if (this.type === SliderTypes.Range && this.currentValue instanceof Array) {
            const percentage1 = ((this.currentValue[0] - this.min) / (this.max - this.min)) * 100;
            const percentage2 = ((this.currentValue[1] - this.min) / (this.max - this.min)) * 100;
            if (trackBar) {
                trackBar.style.left = `${percentage1}%`;
                trackBar.style.width = `${percentage2 + 0.3 - percentage1}%`;
            }
            if (handle1) {
                handle1.style.left = `${percentage1}%`;
            }
            if (handle2) {
                handle2.style.left = `${percentage2}%`;
            }
        }
        else {
            const valueHandle1 = +this.currentValue;
            const percentage = ((valueHandle1 - this.min) / (this.max - this.min)) * 100;
            if (handle1) {
                handle1.style.left = `${percentage}%`;
            }
            if (trackBar) {
                trackBar.style.left = `0%`;
                trackBar.style.width = `${percentage}%`;
            }
        }
        if (this.stepped)
            this.checkStepsIsSelected();
    }
    getPreviousValue = (value) => {
        if (value > this.max) {
            return this.max;
        }
        const rest = (value - (this.min || 0)) % this.step;
        const previous = value - (rest === 0 ? this.step : rest);
        const currentValue = previous < this.min ? this.min : previous;
        return currentValue;
    };
    getNextValue = (value) => {
        if (value < this.min) {
            return this.min;
        }
        const rest = (value - (this.min || 0)) % this.step;
        const next = value + (this.step - rest);
        const currentValue = next > this.max ? +this.value : next < this.min ? this.min : next;
        return currentValue;
    };
    handleKeydown(event, handle) {
        if (this.disabled || this.readonly)
            return;
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
            if (handle === 'handle1') {
                if (this.type === SliderTypes.Range) {
                    if (this.currentValue[0] < this.currentValue[1]) {
                        this.currentValue = [this.getNextValue(this.currentValue[0]), this.currentValue[1]];
                    }
                }
                else {
                    if (+this.currentValue < this.max) {
                        this.currentValue = this.getNextValue(this.currentValue);
                    }
                }
            }
            else {
                if (+this.currentValue[1] < this.max) {
                    this.currentValue = [this.currentValue[0], this.getNextValue(this.currentValue[1])];
                }
            }
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
            if (handle === 'handle1') {
                if (this.type === SliderTypes.Range) {
                    if (this.currentValue[0] > this.min) {
                        this.currentValue = [this.getPreviousValue(this.currentValue[0]), this.currentValue[1]];
                    }
                }
                else {
                    if (+this.currentValue > this.min) {
                        this.currentValue = this.getPreviousValue(this.currentValue);
                    }
                }
            }
            else {
                if (this.currentValue[1] > this.currentValue[0]) {
                    this.currentValue = [this.currentValue[0], this.getPreviousValue(this.currentValue[1])];
                }
            }
        }
        this.updateSliderPosition();
    }
    getLabelProps = () => ({
        htmlForId: this.sliderId,
        label: this.labelGroup,
        tooltipText: this.tooltipText,
        required: this.required,
        showRequired: this.showRequired,
    });
    getHelperTextProps = () => {
        return {
            id: this.sliderHintId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.sliderFeedbackId,
        type: this.feedback,
        text: this.feedbackText,
    });
    getValueText(handle) {
        const valueText = !!this.valueText ? ' ' + this.valueText : '';
        const text = handle === 'handle1'
            ? this.type === SliderTypes.Range
                ? this.currentValue[0].toString() + valueText
                : this.currentValue.toString() + valueText
            : this.currentValue[1].toString() + valueText;
        return text;
    }
    getSliderHandleAttributes(handle) {
        const valuetext = this.getValueText(handle);
        return {
            'tabindex': this.disabled || this.readonly ? -1 : 0,
            'aria-label': `${handle === 'handle1' ? (this.type != 'range' ? this.valueText : this.fromAriaLabel) : this.toAriaLabel}`,
            'aria-valuemin': handle === 'handle1' ? this.min : this.currentValue[0],
            'aria-valuemax': handle === 'handle1' ? (this.type === SliderTypes.Range ? this.currentValue[1] : this.max) : this.max,
            'aria-valuenow': handle === 'handle1' ? (this.type === SliderTypes.Range ? this.currentValue[0] : this.currentValue) : this.currentValue[1],
            'aria-valuetext': valuetext,
            'aria-disabled': this.disabled ? 'true' : undefined,
            'aria-readonly': this.readonly ? 'true' : undefined,
            'role': 'slider',
        };
    }
    getContainerHandleClassNames = classname => ({
        [`${classname}__container`]: true,
        [`disabled`]: this.disabled,
    });
    renderSliderHandles(handle) {
        const style = handle === 'handle1' ? { left: '0%' } : { left: '100%' };
        const className = handle === 'handle1' ? 'ath-slider-handle-range' : 'ath-slider-handle-range2';
        const ariaAttributes = this.getSliderHandleAttributes(handle);
        const tooltipValue = handle === 'handle1' ? (this.type === SliderTypes.Range ? this.currentValue[0].toString() : this.currentValue.toString()) : this.currentValue[1].toString();
        const tooltipContent = tooltipValue.concat(!!this.unit ? ' ' + this.unit : '');
        return (h("span", { ...ariaAttributes, class: className, style: style, onFocus: this.handleFocus, onKeyDown: (event) => this.handleKeydown(event, handle) }, h("div", { role: "presentation", class: this.getContainerHandleClassNames(className) }, h(FcHelpDescription, { text: tooltipContent, position: "bottom", hasArrow: true }))));
    }
    checkStepsIsSelected() {
        const steps = this.sliderTrack.querySelectorAll('.ath-slider__step');
        const percentage1 = this.type === SliderTypes.Range ? ((this.currentValue[0] - this.min) / (this.max - this.min)) * 100 : ((+this.currentValue - this.min) / (this.max - this.min)) * 100;
        const percentage2 = ((this.currentValue[1] - this.min) / (this.max - this.min)) * 100;
        if (this.type === SliderTypes.Range) {
            steps.forEach(step => {
                const stepElement = step;
                const stepPercentage = Number.parseInt(stepElement.style.left.replace('%', ''));
                if (stepPercentage >= percentage1 && stepPercentage <= percentage2) {
                    stepElement.classList.add('ath-slider__step--selected');
                }
                else {
                    stepElement.classList.remove('ath-slider__step--selected');
                }
            });
        }
        else {
            steps.forEach(step => {
                const stepElement = step;
                const stepPercentage = Number.parseInt(stepElement.style.left.replace('%', ''));
                if (stepPercentage <= percentage1) {
                    stepElement.classList.add('ath-slider__step--selected');
                }
                else {
                    stepElement.classList.remove('ath-slider__step--selected');
                }
            });
        }
    }
    createSteps() {
        const stepsArray = [];
        const totalSteps = (this.max - this.min) / this.step;
        for (let i = 0; i <= totalSteps; i++) {
            const stepValue = this.min + i * this.step;
            const positionPercentage = ((stepValue - this.min) / (this.max - this.min)) * 100;
            if (i != 0 && i != totalSteps) {
                stepsArray.push(h("div", { class: "ath-slider__step", style: { left: `${positionPercentage}%` }, key: i }));
            }
        }
        return stepsArray;
    }
    renderSliderSteps() {
        const stepsArray = this.stepped ? this.createSteps() : '';
        return h("div", { class: "ath-slider__filler__steps" }, stepsArray);
    }
    ariaDescribedBy = () => {
        const descriptions = {};
        if (!!this.helperText)
            descriptions[this.sliderHintId] = this.sliderHintId;
        if (this.feedback != SliderFeedbackTypes.None)
            descriptions[this.sliderFeedbackId] = this.sliderFeedbackId;
        return descriptions;
    };
    getSliderAttributes() {
        const describedByIds = Object.keys(this.ariaDescribedBy()).join(' ') == '' ? undefined : Object.keys(this.ariaDescribedBy()).join(' ');
        return {
            'id': this.sliderId,
            'aria-label': !!this.labelGroup ? this.labelGroup : this.groupAriaLabel,
            'aria-invalid': this.feedback === SliderFeedbackTypes.Error ? 'true' : undefined,
            'aria-describedby': describedByIds,
            'aria-disabled': this.disabled ? 'true' : undefined,
            'role': 'group',
        };
    }
    getSliderClassNames = () => ({
        'ath-slider__filler': true,
        'ath-slider__filler--range': this.type === SliderTypes.Range,
        'ath-slider__filler--disabled': this.disabled,
        'ath-slider__filler--readonly': this.readonly,
    });
    renderSliderFiller() {
        const ariaAttributes = this.getSliderAttributes();
        return (h("div", { ...ariaAttributes, class: this.getSliderClassNames(), onMouseDown: this.handleMouseDown }, h("div", { class: "ath-slider__filler__filled" }), this.renderSliderSteps(), this.renderSliderHandles('handle1'), this.type === SliderTypes.Range && this.renderSliderHandles('handle2')));
    }
    manageFeedbackCounter(counter) {
        let feedback = SliderFeedbackTypes.None;
        if (this.feedback === SliderFeedbackTypes.Error) {
            if ((this.feedbackCounter === SliderFeedbackErrorCounterTypes.From || this.feedbackCounter === SliderFeedbackErrorCounterTypes.Both || this.type === SliderTypes.Default) &&
                counter === 'counter1') {
                feedback = SliderFeedbackTypes.Error;
            }
            else if ((this.feedbackCounter === SliderFeedbackErrorCounterTypes.To || this.feedbackCounter === SliderFeedbackErrorCounterTypes.Both) && counter === 'counter2') {
                feedback = SliderFeedbackTypes.Error;
            }
        }
        return feedback;
    }
    renderAthInputCounter(counter) {
        const describedByIds = Object.keys(this.ariaDescribedBy()).join(' ') == '' ? undefined : Object.keys(this.ariaDescribedBy()).join(' ');
        const value = counter === 'counter1' ? (this.type === SliderTypes.Range ? this.currentValue[0] : this.currentValue) : this.currentValue[1];
        const ariaLabel = counter === 'counter1' ? (this.type === SliderTypes.Default ? (!!this.groupAriaLabel ? this.groupAriaLabel : this.labelGroup) : this.fromAriaLabel) : this.toAriaLabel;
        const feedback = this.manageFeedbackCounter(counter);
        const min = counter === 'counter1' ? this.min : this.currentValue[0];
        const max = counter === 'counter1' ? (this.type === SliderTypes.Range ? this.currentValue[1] : this.max) : this.max;
        return (h("ath-input-counter", { style: { width: `${this.counterWidth}` }, value: value, min: min, max: max, step: this.step, onAthChange: ev => this.handleathChangeListen(ev, counter), feedback: feedback, "aria-describedby": describedByIds, inputAriaLabel: ariaLabel, unit: this.unit, disabled: this.disabled, readonly: this.readonly, name: this.name, size: "sm", onAthFocus: (event) => this.handleFocus(event), onAthBlur: (event) => this.preventBlurSubcomponent(event) }));
    }
    renderSlider() {
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const style = !!this.width ? { width: this.width } : { width: '100%' };
        return (h("div", { class: "ath-slider", ref: el => (this.sliderTrack = el), style: style }, h("div", { class: "ath-slider__header" }, !!this.labelGroup && h(FcInputLabel, { ...labelProps }), h("div", { class: "ath-slider__header-inputs" }, this.renderAthInputCounter('counter1'), this.type === SliderTypes.Range && this.renderAthInputCounter('counter2'))), h("div", { class: "ath-slider__slider" }, h("div", { class: "ath-slider__slider-wrapper" }, h("div", { class: "ath-slider__slider-wrapper__slider" }, this.renderSliderFiller()), !!this.detailFirst && !!this.detailLast && (h("div", { class: "ath-slider__slider-wrapper__details" }, h("span", null, this.detailFirst), h("span", null, this.detailLast)))), !!this.helperText && h(FcInputHelperText, { ...helperTextProps }), this.feedback !== SliderFeedbackTypes.None && !this.disabled && !this.readonly && h(FcInputFeedback, { ...feedbackProps }))));
    }
    render() {
        return h(Host, { key: 'd63360805e0548ce26339be5fc322e4c4d1c1090' }, this.renderSlider());
    }
    static get is() { return "ath-slider"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["slider.css"]
        };
    }
    static get properties() {
        return {
            "fromAriaLabel": {
                "type": "string",
                "attribute": "from-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the first input-counter."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "groupAriaLabel": {
                "type": "string",
                "attribute": "group-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "toAriaLabel": {
                "type": "string",
                "attribute": "to-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the second input-counter."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "detailFirst": {
                "type": "string",
                "attribute": "detail-first",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Detail text at the left of the slider"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "detailLast": {
                "type": "string",
                "attribute": "detail-last",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Detail text at the right of the slider"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user cannot interact with the slider and the inputs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "feedback": {
                "type": "string",
                "attribute": "feedback",
                "mutable": false,
                "complexType": {
                    "original": "SliderFeedbackType",
                    "resolved": "\"error\" | \"none\"",
                    "references": {
                        "SliderFeedbackType": {
                            "location": "import",
                            "path": "./slider.model",
                            "id": "src/components/slider/slider.model.ts::SliderFeedbackType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the feedback. If 'error' the error feedback will be shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SliderFeedbackTypes.None"
            },
            "counterWidth": {
                "type": "string",
                "attribute": "counter-width",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The ath-input-counter width."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "feedbackCounter": {
                "type": "string",
                "attribute": "feedback-counter",
                "mutable": false,
                "complexType": {
                    "original": "SliderFeedbackErrorCounterType",
                    "resolved": "\"both\" | \"from\" | \"none\" | \"to\"",
                    "references": {
                        "SliderFeedbackErrorCounterType": {
                            "location": "import",
                            "path": "./slider.model",
                            "id": "src/components/slider/slider.model.ts::SliderFeedbackErrorCounterType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Feedback error for input counter if is from, to, both or none."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SliderFeedbackErrorCounterTypes.None"
            },
            "feedbackText": {
                "type": "string",
                "attribute": "feedback-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The message for the feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message to help the user fill the input value."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelGroup": {
                "type": "string",
                "attribute": "label-group",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label slider"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Represents the maximum number of the input & slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "100"
            },
            "min": {
                "type": "number",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Represents the minimum number of the input & slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the slider. Submitted with the form as part of a name/value pair"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the user must fill in a value before submitting a form."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "showRequired": {
                "type": "boolean",
                "attribute": "show-required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the * asterisk will be show when required = true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "step": {
                "type": "number",
                "attribute": "step",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the interval between legal numbers in an <input> element & slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "stepped": {
                "type": "boolean",
                "attribute": "stepped",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true show step marks."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "SliderType",
                    "resolved": "\"default\" | \"range\"",
                    "references": {
                        "SliderType": {
                            "location": "import",
                            "path": "./slider.model",
                            "id": "src/components/slider/slider.model.ts::SliderType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of slider. if range shows two handles to select between two numbers."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SliderTypes.Default"
            },
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies text for tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "unit": {
                "type": "string",
                "attribute": "unit",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the unit for the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the form control. Submitted with the form as part of a name/value pair."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "this.min.toString()"
            },
            "valueText": {
                "type": "string",
                "attribute": "value-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-valuetext attribute for slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the width for slider."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isFocused": {},
            "currentValue": {}
        };
    }
    static get events() {
        return [{
                "method": "athChange",
                "name": "athChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "athFocus",
                "name": "athFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the slider gains focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "athBlur",
                "name": "athBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the slider loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "currentValue",
                "methodName": "updateCurrentValue"
            }, {
                "propName": "value",
                "methodName": "updateValue"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=slider.js.map
