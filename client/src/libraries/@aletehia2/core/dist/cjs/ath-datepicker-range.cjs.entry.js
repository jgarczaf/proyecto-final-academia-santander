'use strict';

var index = require('./index--hWT2F8k.js');
var fcCalendarYear = require('./fc-calendar-year-Btiz3_EO.js');
var fcHelper = require('./fc-helper-BCPKCNc3.js');
var fcInputElement = require('./fc-input-element-C2syfyjo.js');
require('./icons-DfQaoUal.js');
var fcLabel = require('./fc-label-C5PYDIHS.js');
var fcButtonComp = require('./fc-button-comp-BZ-Qb6nS.js');
var button_model = require('./button.model-5JSyxGxn.js');
require('./input-text.model-Cymv4OQZ.js');
require('./icon.model-C8aFOv1-.js');

const DatepickerRangeSizes = {
    Medium: 'md'};
const DatepickerRangeTypes = {
    Date: 'date',
    Month: 'month',
    Year: 'year',
};
const DatepickerRangeColors = {
    Primary: 'primary'};
const DatepickerRangeFeedbacks = {
    None: 'none',
    Error: 'error',
};
var DatepickerRangeFocusState;
(function (DatepickerRangeFocusState) {
    DatepickerRangeFocusState[DatepickerRangeFocusState["Start"] = 0] = "Start";
    DatepickerRangeFocusState[DatepickerRangeFocusState["End"] = 1] = "End";
    DatepickerRangeFocusState[DatepickerRangeFocusState["None"] = 2] = "None";
})(DatepickerRangeFocusState || (DatepickerRangeFocusState = {}));

const datepickerRangeCss = ".ath-visibility-hidden,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}:host .ath-input__field--size-sm{--input-padding-x:var(--ath-spacing-input-field-padding-x-sm);--input-padding-y:var(--ath-spacing-input-field-padding-y-sm)}:host .ath-input__field--size-md{--input-padding-x:var(--ath-spacing-input-field-padding-x-md);--input-padding-y:var(--ath-spacing-input-field-padding-y-md)}:host .ath-input__field--size-lg{--input-padding-x:var(--ath-spacing-input-field-padding-x-lg);--input-padding-y:var(--ath-spacing-input-field-padding-y-lg)}:host .ath-button_comp--size-xs{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-sm{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-md{--button-padding:var(--ath-spacing-button-padding-around-xs)}:host .ath-button_comp--size-lg{--button-padding:var(--ath-spacing-button-padding-around-sm)}:host .ath-datepicker-item{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1 0 0;border-radius:var(--ath-border-radius-input-datepicker-cell);user-select:none;cursor:pointer;text-align:center;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);font-style:normal;font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-comp-md);color:var(--ath-color-input-datepicker-option-fg-default)}:host .ath-datepicker-item.is-day{width:40px;height:40px}:host .ath-datepicker-item.is-month{width:64px;height:48px}:host .ath-datepicker-item.is-year{width:68px;height:48px}:host .ath-datepicker-item:focus-visible{outline:none}:host .ath-datepicker-item:focus-visible .ath-datepicker-item-content{box-shadow:0 0 0 2px var(--ath-color-border-focus);border:1px solid var(--ath-color-border-inverse-focus)}:host .ath-datepicker-item:focus-visible:hover .ath-datepicker-item-content,:host .ath-datepicker-item:focus-visible:active .ath-datepicker-item-content,:host .ath-datepicker-item:focus-visible.is-selected .ath-datepicker-item-content{box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus)}:host .ath-datepicker-item.is-start{border-radius:var(--ath-border-radius-input-datepicker-cell) 0 0 var(--ath-border-radius-input-datepicker-cell);background:var(--ath-color-input-datepicker-option-bg-primary-selected-range-default)}:host .ath-datepicker-item.is-middle{border-radius:0}:host .ath-datepicker-item.is-middle::before{content:\"\";position:absolute;z-index:-1;background:var(--ath-color-input-datepicker-option-bg-primary-selected-range-default)}:host .ath-datepicker-item.is-middle.is-day::before{width:42px;height:42px}:host .ath-datepicker-item.is-middle.is-month::before{width:66px;height:50px}:host .ath-datepicker-item.is-middle.is-year::before{width:70px;height:50px}:host .ath-datepicker-item.is-end{border-radius:0 var(--ath-border-radius-input-datepicker-cell) var(--ath-border-radius-input-datepicker-cell) 0;z-index:-1;background:var(--ath-color-input-datepicker-option-bg-primary-selected-range-default)}:host .ath-datepicker-item.is-start.is-accent{background:var(--ath-color-input-datepicker-option-bg-accent-selected-range-default)}:host .ath-datepicker-item.is-middle.is-accent::before{background:var(--ath-color-input-datepicker-option-bg-accent-selected-range-default)}:host .ath-datepicker-item.is-end.is-accent{z-index:-1;background:var(--ath-color-input-datepicker-option-bg-accent-selected-range-default)}:host .ath-datepicker-item .ath-datepicker-item-content{width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:var(--ath-border-radius-input-datepicker-cell)}.ath-datepicker-item.is-day :host .ath-datepicker-item .ath-datepicker-item-content{padding:var(--ath-spacing-input-datepicker-calendar-cell-padding-date)}.ath-datepicker-item.is-month :host .ath-datepicker-item .ath-datepicker-item-content{padding:var(--ath-spacing-input-datepicker-calendar-cell-padding-month)}.ath-datepicker-item.is-year :host .ath-datepicker-item .ath-datepicker-item-content{padding:var(--ath-spacing-input-datepicker-calendar-cell-padding-year)}:host .ath-datepicker-item .ath-datepicker-item-content:hover{background:var(--ath-color-bg-alpha-hovered)}:host .ath-datepicker-item .ath-datepicker-item-content.is-highlighted{color:var(--ath-color-fg-accent-default)}:host .ath-datepicker-item .ath-datepicker-item-content.is-highlighted:hover{color:var(--ath-color-fg-accent-hovered)}:host .ath-datepicker-item .ath-datepicker-item-content.is-highlighted:active{color:var(--ath-color-fg-accent-pressed)}:host .ath-datepicker-item .ath-datepicker-item-content.is-other-month{color:var(--ath-color-fg-disabled)}:host .ath-datepicker-item .ath-datepicker-item-content:active{background:var(--ath-color-bg-alpha-pressed)}:host .ath-datepicker-item .ath-datepicker-item-content.is-current{outline:2px solid var(--ath-color-input-datepicker-option-border-primary-current);outline-offset:1px}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected{background:var(--ath-color-input-datepicker-option-bg-primary-selected-default);color:var(--ath-color-input-datepicker-option-fg-selected-hovered)}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected:hover{color:var(--ath-color-input-datepicker-option-fg-selected-hovered);background:var(--ath-color-input-datepicker-option-bg-primary-selected-hovered)}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected:active{color:var(--ath-color-input-datepicker-option-fg-selected-hovered);background:var(--ath-color-input-datepicker-option-bg-primary-selected-pressed)}:host .ath-datepicker-item .ath-datepicker-item-content.is-current.is-accent{outline:2px solid var(--ath-color-input-datepicker-option-border-accent-current);outline-offset:1px}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected.is-accent{background:var(--ath-color-input-datepicker-option-bg-accent-selected-default)}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected.is-accent:hover{background:var(--ath-color-input-datepicker-option-bg-accent-selected-hovered)}:host .ath-datepicker-item .ath-datepicker-item-content.is-selected.is-accent:active{background:var(--ath-color-input-datepicker-option-bg-accent-selected-pressed)}:host .ath-datepicker-item .ath-datepicker-item-content.is-disabled{cursor:not-allowed;color:var(--ath-color-fg-disabled);background:transparent}:host .fc-calendar{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap);align-self:stretch}:host .fc-calendar__header-week{display:flex;align-items:center;align-self:stretch}:host .fc-calendar__header-week__day{display:flex;padding:8px;flex-direction:column;text-align:center;flex:1 0 0;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-overline);font-size:var(--ath-font-size-overline);font-style:normal;font-weight:var(--ath-font-weight-overline);line-height:var(--ath-font-line-height-overline)}:host .fc-calendar__body-week{display:flex;flex-direction:column;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap)}:host .fc-calendar__row-days{justify-content:space-around;display:flex;align-items:center;align-self:stretch}:host .fc-calendar .w-full{width:100%}:host .fc-calendar-month{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap);width:200px;height:192px;min-width:200px;justify-content:center;align-items:center;justify-items:center}:host .fc-calendar-month__rows{display:flex;flex-direction:column;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap)}:host .fc-calendar-month__row-months{justify-content:space-around;display:flex;align-items:center;align-self:stretch}:host .fc-calendar-year{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap);width:200px;height:192px;min-width:200px;justify-content:center;align-items:center;justify-items:center}:host .fc-calendar-year__rows{display:flex;flex-direction:column;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap)}:host .fc-calendar-year__row-years{justify-content:space-around;display:flex;align-items:center;align-self:stretch}:host .ath-input{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;flex-wrap:wrap;row-gap:var(--ath-spacing-input-row-gap);width:100%}:host .wrapper{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-addons-row-gap);align-self:stretch;width:100%}:host .ath-input .ath-input__field{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:var(--ath-spacing-input-field-col-gap);align-self:stretch;border:1px solid var(--ath-color-input-border-default);border-radius:var(--input-border-radius);background:var(--ath-color-input-bg-default);padding:calc(var(--input-padding-y) - 1px) calc(var(--input-padding-x) - 1px)}:host .ath-input .ath-input__field:focus-within:not(:has(>button:focus)){box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset;border:1px solid transparent;border-radius:var(--input-border-radius)}:host .ath-input .ath-input__field--error{border-color:var(--ath-color-border-danger-default)}:host .ath-input .ath-input__field--success{border-color:var(--ath-color-border-success-default)}:host .ath-input .ath-input__field--warning{border-color:var(--ath-color-border-warning-default)}:host .ath-input .ath-input__field--readonly{border:1px solid transparent;position:relative;background:none}:host .ath-input .ath-input__field--readonly::after{content:\"\";position:absolute;bottom:1px;width:100%;height:1px;background-color:var(--ath-color-input-border-default)}:host .ath-input .ath-input__field--readonly{border-radius:var(--ath-border-radius-input-readonly)}:host .ath-input .ath-input__field--readonly:focus-within{border:1px solid transparent}:host .ath-input .ath-input__field--readonly:focus-within::after{background-color:transparent}:host .ath-input .ath-input__field--readonly .ath-input__text--value{color:var(--ath-color-fg-default)}:host .ath-input .ath-input__field--disabled{background:var(--ath-color-bg-alpha-disabled);border-color:var(--ath-color-border-alpha-disabled)}:host .ath-input__text--value{flex:1 0 0;overflow:hidden;color:var(--ath-color-fg-default);text-overflow:ellipsis;font-family:var(--ath-font-family-primary);font-weight:var(--ath-font-weight-regular);font-size:var(--ath-font-size-input-text);line-height:var(--ath-font-line-height-input-text);border:none;width:100%;background-color:transparent;padding:0px var(--ath-spacing-input-text-padding-x)}:host .ath-input__text--value:focus{outline:1px solid transparent;border:none}:host .ath-input--unit{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-input-text);font-weight:var(--ath-font-weight-regular);line-height:var(--ath-font-line-height-input-text)}:host .ath-input--unit--disabled{color:var(--ath-color-fg-disabled)}:host input[type=password]::-ms-reveal,:host input[type=password]::-ms-clear{display:none}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host input[type=number]{-moz-appearance:textfield;appearance:textfield}:host .ath-visibility-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}:host .ath-button_comp{display:inline-flex;justify-content:center;align-items:center;border-radius:var(--ath-border-radius-button);border:none;background:none;padding:var(--button-padding);outline:none;transition:background 0.5s;cursor:pointer}:host .ath-button_comp:focus{background:var(--ath-color-bg-alpha-focus);box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}:host .ath-button_comp:hover{background:var(--ath-color-bg-alpha-hovered)}:host .ath-button_comp:active{background:var(--ath-color-bg-alpha-pressed);box-shadow:none}:host .ath-button_comp--disabled{pointer-events:none;color:var(--ath-color-button-icon-disabled)}:host .ath-input__label{display:flex;flex-direction:row;align-items:flex-start;gap:var(--ath-spacing-label-col-gap);font-family:var(--ath-font-family-primary);color:var(--ath-color-fg-default);font-weight:var(--ath-font-weight-medium);font-size:var(--ath-font-size-input-label);line-height:var(--ath-font-line-height-input-label)}:host .ath-input__label__wrapper{display:flex;align-items:center;gap:var(--ath-spacing-label-required-col-gap)}:host .ath-input__label ath-icon{color:var(--ath-color-fg-default)}:host .ath-input__label .required{color:var(--ath-color-fg-feedback-danger);padding-left:4px}:host .ath-input__label ath-button{display:flex;flex-direction:row;align-items:center;justify-content:center;width:24px;height:24px}:host .ath-input__helper-text{display:flex;justify-content:flex-start;align-items:center;align-self:stretch;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-input__feedback{display:flex;align-items:flex-start;gap:var(--ath-spacing-feedback-text-col-gap);align-self:stretch;font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}:host .ath-input__feedback--error{color:var(--ath-color-fg-feedback-danger)}:host .ath-input__feedback--success{color:var(--ath-color-fg-feedback-success)}:host .ath-input__feedback--warning{color:var(--ath-color-fg-feedback-warning)}:host .padding{display:flex;padding-top:var(--ath-spacing-feedback-text-padding-top);align-items:center}:host{--input-border-radius:var(--ath-border-radius-input-default)}:host .ath-datepicker-range{border:none;margin:0px;padding:0px;position:relative}:host .ath-datepicker-range__input-group{display:flex;align-items:flex-start;gap:var(--ath-spacing-input-datepicker-field-col-gap, 8px);align-self:stretch}:host .ath-datepicker-range-overlay{display:flex;flex-direction:row;z-index:2;opacity:0;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;min-width:288px;position:absolute}:host .ath-datepicker-range-overlay.size-sm{top:72px}:host .ath-datepicker-range-overlay.size-sm__label{top:104px}:host .ath-datepicker-range-overlay.size-md{top:80px}:host .ath-datepicker-range-overlay.size-md__label{top:112px}:host .ath-datepicker-range-overlay.size-lg{top:88px}:host .ath-datepicker-range-overlay.size-lg__label{top:120px}:host .ath-datepicker-range-overlay{border-radius:var(--ath-border-radius-input-datepicker-overlay);border:1px solid var(--ath-color-input-datepicker-overlay-border);background:var(--ath-color-input-bg-default)}:host .ath-datepicker-range-overlay.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date{display:flex;padding:var(--ath-spacing-input-datepicker-calendar-overlay-padding-around);flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-input-datepicker-calendar-overlay-row-gap);align-self:stretch}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__header{display:flex;width:288px;justify-content:center;align-items:center;gap:var(--ath-spacing-input-datepicker-calendar-header-col-gap)}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__header__date{display:flex;justify-content:center;align-items:center;gap:var(--ath-spacing-input-datepicker-calendar-header-date-col-gap);flex:1 0 0}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__date{display:contents}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__month,:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__year{display:flex;width:100%;height:286px;flex-direction:column;justify-content:center;align-items:center;gap:var(--ath-spacing-input-datepicker-calendar-cell-group-row-gap)}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__panel{display:flex;background:var(--ath-color-bg-surface-secondary-subtler);border-radius:0 var(--ath-border-radius-input-datepicker-overlay) var(--ath-border-radius-input-datepicker-overlay) 0;max-width:200px;padding:var(--ath-spacing-around-400);flex-direction:column;justify-content:space-between;align-items:flex-start;align-self:stretch}:host .ath-datepicker-range-overlay .ath-datepicker-range-calendar-date__panel-shortcuts{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-around-300, 24px);align-self:stretch}:host .ath-datepicker-range .ath-focused-input.ath-input .ath-input__field{box-shadow:0px 0px 0px 2px var(--ath-color-border-focus) inset;border:1px solid transparent;border-radius:var(--input-border-radius)}";

let datepickerRangeSequence = 0;
let inputToSequence = 0;
let inputFromSequence = 0;
const AthDatepickerRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athFocus = index.createEvent(this, "athFocus");
        this.athBlur = index.createEvent(this, "athBlur");
        this.athChange = index.createEvent(this, "athChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    datepickerRangeId = `ath-datepicker-range-${datepickerRangeSequence++}`;
    datepickerRangePopupId = `ath-datepicker-range-popup-${datepickerRangeSequence++}`;
    datepickerRangeHintId = `${this.datepickerRangeId}-hint`;
    datepickerRangeHintSROnlyId = `${this.datepickerRangeId}-hintSROnly`;
    datepickerRangeFeedbackId = `${this.datepickerRangeId}-feedback`;
    labelId = `${this.datepickerRangeId}-label`;
    inputElFrom;
    inputFromId = `ath-input-from-${inputFromSequence++}`;
    inputElTo;
    inputToId = `ath-input-to-${inputToSequence++}`;
    returnInputFocus = false;
    initialValue;
    transitionTime = 300;
    overlayTimeout = null;
    ariaLiveTimeout = null;
    get element() { return index.getElement(this); }
    internals;
    /**
     * Caption of the datepicker-range
     */
    label;
    /**
     * Caption of the range start of the datepicker-range
     */
    labelStart;
    /**
     * Caption of the datepicker-range
     */
    labelEnd;
    /**
     * Text to be shown in the tooltip
     */
    tooltipText;
    /**
     * The type of the feedback. If 'error' the error feedback will be shown
     */
    feedback = DatepickerRangeFeedbacks.None;
    /**
     * The feedback message.
     */
    feedbackText;
    /**
     * Message to help the user fills the datepicker-range.
     */
    helperText;
    /**
     * Date format to be used in the datepicker-range. Only used when the type is 'date'.
     */
    format = 'DD/MM/YYYY';
    /*
     * Instructional text that shows before the datepicker-range start has a value.
     */
    placeholderStart;
    /*
     * Instructional text that shows before the datepicker-range end has a value.
     */
    placeholderEnd;
    /**
     * The name of the datepicker-range. Submitted with the form as part of a name/value pair
     */
    name;
    /**
     * If true, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * If true, the user must fill in a value of start range before submitting a form.
     */
    requiredStart = false;
    /**
     * If true, the user must fill in a value of end range before submitting a form.
     */
    requiredEnd = false;
    /**
     * If true, the * asterisk will be show when required = true.
     */
    hideRequired = false;
    /**
     * If true, the user cannot interact with the input.
     */
    disabled = false;
    watchDisabled() {
        if (this.disabled)
            this.readonly = false;
    }
    /**
     * If true, the user cannot modify the value.
     */
    readonly = false;
    /**
     * Whether the datepicker is focused on page load.
     */
    autofocus;
    /**
     * List of days which are shown as disabled.
     */
    disabledDates;
    updateDisabledDates() {
        this.disabledDatesAux = [];
        try {
            const parsedDates = JSON.parse(this.disabledDates.replace(/'/g, '"'));
            parsedDates.forEach(element => {
                const parsedDate = typeof element === 'string' ? new Date(element) : element;
                if (!isNaN(parsedDate.getTime())) {
                    this.disabledDatesAux.push(parsedDate);
                }
            });
        }
        catch (error) {
            this.disabledDatesAux = [];
        }
    }
    disabledDatesAux;
    /**
     * List of days which are shown as highlighted.
     */
    highlightedDates;
    updateHighlightedDates() {
        this.highlightedDatesAux = [];
        try {
            const parsedDates = JSON.parse(this.highlightedDates.replace(/'/g, '"'));
            parsedDates.forEach(element => {
                const parsedDate = typeof element === 'string' ? new Date(element) : element;
                if (!isNaN(parsedDate.getTime())) {
                    this.highlightedDatesAux.push(parsedDate);
                }
            });
        }
        catch (error) {
            this.highlightedDatesAux = [];
        }
    }
    highlightedDatesAux;
    /**
     * The minimum date that can be selected.
     */
    min;
    updateMin() {
        if (this.min) {
            try {
                this.minDate = new Date(this.min);
            }
            catch (error) {
                this.minDate = undefined;
            }
        }
    }
    minDate;
    /**
     * The maximum date that can be selected.
     */
    max;
    updateMax() {
        if (this.max) {
            try {
                this.maxDate = new Date(this.max);
            }
            catch (error) {
                this.maxDate = undefined;
            }
        }
    }
    maxDate;
    /**
     * The size of the datepicker-range.
     */
    size = DatepickerRangeSizes.Medium;
    /**
     * The type of the datepicker-range.
     */
    type = DatepickerRangeTypes.Date;
    /**
     * The color of the datepicker-range.
     */
    color = DatepickerRangeColors.Primary;
    /**
     * The aria-label attribute of the start input
     */
    inputAriaLabelStart;
    /**
     * The aria-label attribute of the end input
     */
    inputAriaLabelEnd;
    /**
     * If true, the side panel will be hidden.
     */
    hidePanel = false;
    /**
     * If true, all the weekends will be highlighted.
     */
    highlightedWeekends = false;
    /**
     * Current value of the form control. Submitted with the form as part of a name/value pair.
     */
    value;
    updateValue() {
        if (this.value) {
            try {
                const cleanValue = this.value.replace(/['" \[\]]/g, '');
                const parsedDates = cleanValue.split(',');
                if (parsedDates.length !== 2) {
                    return;
                }
                const from = !isNaN(new Date(parsedDates[0]).getTime()) ? parsedDates[0] : undefined;
                const to = !isNaN(new Date(parsedDates[1]).getTime()) ? parsedDates[1] : undefined;
                this.valueFrom = from;
                if (from != undefined && to != undefined && from > to) {
                    this.valueTo = undefined;
                    console.error('Rango inválido'); // Se muestra el error por consola ya que es fallo del desarrollador
                }
                else {
                    this.valueTo = to;
                }
            }
            catch (error) {
                this.valueFrom = undefined;
                this.valueTo = undefined;
                this.updateValueFrom();
                this.updateValueTo();
                this.setInputValue(this.value);
                return;
            }
        }
        else {
            this.valueFrom = undefined;
            this.valueTo = undefined;
        }
        this.updateValueFrom();
        this.updateValueTo();
        this.setInputValue(this.value);
    }
    /**
     * If true, submit the form when pressing Enter in the input field and the input is inside a form
     */
    submitOnEnter = false;
    valueDateFrom;
    valueDateTo;
    /**
     * Method to set the focus on the input element
     */
    async setFocus() {
        if (this.inputElFrom) {
            this.inputElFrom.focus();
        }
    }
    /**
     * Method to set the focus on the second input element
     */
    async setFocusEnd() {
        if (this.inputElTo && this.element?.isConnected) {
            this.inputElTo.focus();
        }
    }
    /**
     * Emitted when the input gains focus
     */
    athFocus;
    /**
     * Emitted when the input loses focus
     */
    athBlur;
    /**
     * Emitted when the value has changed.
     * This event doesn't fire until the control loses focus.
     */
    athChange;
    // @Event() athChange: EventEmitter<{ start: string; end: string }>;
    watchOpenState() {
        if (this.overlayTimeout !== null) {
            clearTimeout(this.overlayTimeout);
            this.overlayTimeout = null;
        }
        if (this.open) {
            this.renderOverlay = true;
            document.addEventListener('mousedown', this.handleOutsideClick);
        }
        else {
            this.overlayTimeout = setTimeout(() => {
                this.renderOverlay = false;
                this.overlayTimeout = null;
            }, this.transitionTime);
        }
    }
    updateValueFrom() {
        if (this.valueFrom) {
            try {
                this.valueDateFrom = new Date(this.valueFrom);
            }
            catch (error) {
                this.valueDateFrom = undefined;
                return;
            }
            switch (this.type) {
                case DatepickerRangeTypes.Year:
                    this.inputValueFrom = this.valueDateFrom ? fcCalendarYear.formatDateToYear(this.valueDateFrom) : '';
                    break;
                case DatepickerRangeTypes.Month:
                    this.inputValueFrom = this.valueDateFrom ? fcCalendarYear.formatDateToMonth(this.valueDateFrom) : '';
                    break;
                default:
                    this.inputValueFrom = this.valueDateFrom ? fcCalendarYear.formatDateToString(this.valueDateFrom, this.format) : '';
                    break;
            }
            if (this.inputElFrom) {
                this.inputElFrom.value = this.inputValueFrom;
            }
        }
        else {
            this.valueDateFrom = undefined;
            this.inputValueFrom = '';
        }
    }
    updateValueTo() {
        if (this.valueTo) {
            try {
                this.valueDateTo = new Date(this.valueTo);
            }
            catch (error) {
                this.valueDateTo = undefined;
                return;
            }
            switch (this.type) {
                case DatepickerRangeTypes.Year:
                    this.inputValueTo = this.valueDateTo ? fcCalendarYear.formatDateToYear(this.valueDateTo) : '';
                    break;
                case DatepickerRangeTypes.Month:
                    this.inputValueTo = this.valueDateTo ? fcCalendarYear.formatDateToMonth(this.valueDateTo) : '';
                    break;
                default:
                    this.inputValueTo = this.valueDateTo ? fcCalendarYear.formatDateToString(this.valueDateTo, this.format) : '';
                    break;
            }
            if (this.inputElTo) {
                this.inputElTo.value = this.inputValueTo;
            }
        }
        else {
            this.valueDateTo = undefined;
            this.inputValueTo = '';
        }
    }
    disconnectedCallback() {
        if (this.ariaLiveTimeout) {
            clearTimeout(this.ariaLiveTimeout);
            this.ariaLiveTimeout = null;
        }
        if (this.overlayTimeout) {
            clearTimeout(this.overlayTimeout);
            this.overlayTimeout = null;
        }
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }
    open = false;
    renderOverlay = false;
    wrongDate = false;
    feedbackWrong = '';
    showType = DatepickerRangeTypes.Date;
    inputValueFrom;
    inputValueTo;
    valueFrom;
    valueTo;
    shownDate = new Date();
    focusState = DatepickerRangeFocusState.None;
    hasFocus = false;
    ariaLiveMessage = '';
    componentDidLoad() {
        this.initialValue = this.value;
        if (this.autofocus) {
            this.setFocus();
        }
    }
    componentWillLoad() {
        this.showType = this.type;
        this.updateMin();
        this.updateMax();
        this.updateValue();
        this.updateDisabledDates();
        this.updateHighlightedDates();
        if (this.valueDateFrom) {
            this.shownDate = this.valueDateFrom;
        }
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.updateValue();
        this.hasChanged();
    }
    hasChanged = () => {
        this.value = fcCalendarYear.getValueRangeString(this.valueFrom, this.valueTo);
        this.setInputValue(this.value);
        this.athChange.emit(this.value);
    };
    handleDaySelect = (_event, day) => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        if (this.focusState !== DatepickerRangeFocusState.End) {
            this.valueFrom = fcCalendarYear.formatDateToISO(day);
            if (this.valueTo && this.valueDateTo < day) {
                this.valueTo = undefined;
            }
            this.setAriaLiveDateSelect(true);
            this.setFocusEnd();
        }
        else {
            if (this.valueDateFrom > day) {
                this.valueFrom = fcCalendarYear.formatDateToISO(day);
                this.valueTo = undefined;
                this.setAriaLiveDateSelect(true);
            }
            else {
                this.valueTo = fcCalendarYear.formatDateToISO(day);
                this.setFocusEnd();
                this.open = false;
                this.setAriaLiveDateSelect(false);
            }
        }
        this.hasChanged();
        this.shownDate = day;
        this.wrongDate = false;
        this.feedbackWrong = '';
    };
    handleMonthSelect = (_event, month) => {
        if (this.type === DatepickerRangeTypes.Month) {
            this.handleDaySelect(_event, month);
            return;
        }
        this.shownDate = fcCalendarYear.getDateBetweenLimits(month, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Date;
        this.setAriaLiveMessage(`Mes seleccionado: ${fcCalendarYear.formatDateToMonth(month)}. Vista de calendario abierta`);
    };
    handleYearSelect = (_event, year) => {
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleDaySelect(_event, year);
            return;
        }
        this.shownDate = fcCalendarYear.getDateBetweenLimits(year, this.minDate, this.maxDate);
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Month;
        this.setAriaLiveMessage(`Año seleccionado: ${fcCalendarYear.formatDateToYear(year)}. Vista de selección de mes abierta`);
    };
    handleClickMonth = () => {
        this.hasFocus = true;
        this.showType = DatepickerRangeTypes.Month;
        this.setAriaLiveMessage('Vista de selección de mes abierta');
    };
    handleClickYear = () => {
        this.showType = DatepickerRangeTypes.Year;
        this.hasFocus = true;
        this.setAriaLiveMessage('Vista de selección de año abierta');
    };
    handlePrevButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addMonths(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${fcCalendarYear.getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Month:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addYears(this.shownDate, -1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Year:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addYears(this.shownDate, -12), this.minDate, this.maxDate);
                navigationMessage = `Navegando a la página que contiene los años ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10)} - ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10) + 9}`;
                break;
        }
        if (navigationMessage) {
            this.setAriaLiveMessage(navigationMessage);
        }
    };
    isPrevButtonDisabled = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return fcCalendarYear.isDisabledDate(new Date(this.shownDate.getFullYear(), this.shownDate.getMonth(), 0), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Month:
                return fcCalendarYear.isDisabledDate(new Date(this.shownDate.getFullYear(), 0, 0), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Year:
                return fcCalendarYear.isDisabledDate(fcCalendarYear.addYears(new Date(this.shownDate.getFullYear(), 0, 0), -12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    handleNextButton = () => {
        this.hasFocus = false;
        let navigationMessage = '';
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addMonths(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando a ${fcCalendarYear.getMonthName(this.shownDate)} ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Month:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addYears(this.shownDate, 1), this.minDate, this.maxDate);
                navigationMessage = `Navegando al año ${this.shownDate.getFullYear()}`;
                break;
            case DatepickerRangeTypes.Year:
                this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addYears(this.shownDate, 12), this.minDate, this.maxDate);
                navigationMessage = `Navegando a la página que contiene los años ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10)} - ${this.shownDate.getFullYear() - (this.shownDate.getFullYear() % 10) + 9}`;
                break;
        }
        if (navigationMessage) {
            this.setAriaLiveMessage(navigationMessage);
        }
    };
    isNextButtonDisabled = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return fcCalendarYear.isDisabledDate(fcCalendarYear.addMonths(fcCalendarYear.monthStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Month:
                return fcCalendarYear.isDisabledDate(fcCalendarYear.addYears(fcCalendarYear.yearStart(this.shownDate), 1), [], this.minDate, this.maxDate);
            case DatepickerRangeTypes.Year:
                return fcCalendarYear.isDisabledDate(fcCalendarYear.addYears(fcCalendarYear.yearStart(this.shownDate), 12), [], this.minDate, this.maxDate);
            default:
                return false;
        }
    };
    reset = () => {
        this.value = undefined;
        this.valueFrom = undefined;
        this.valueTo = undefined;
        this.inputValueFrom = '';
        this.inputValueTo = '';
        this.valueDateFrom = undefined;
        this.valueDateTo = undefined;
        this.shownDate = new Date();
        this.showType = this.type;
        this.hasChanged();
    };
    error = (msg) => {
        this.wrongDate = true;
        this.feedbackWrong = msg;
        this.reset();
        this.open = false;
    };
    today = () => {
        this.shownDate = new Date();
        this.showType = this.type;
    };
    lastWeek = () => {
        const from = fcCalendarYear.addDays(new Date(), -7);
        this.valueFrom = fcCalendarYear.formatDateToISO(from);
        this.valueTo = fcCalendarYear.formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastWeekDisabled = () => {
        const from = fcCalendarYear.addDays(new Date(), -7);
        return fcCalendarYear.isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || fcCalendarYear.isDisabledDate(new Date(), this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastMonth = () => {
        const from = fcCalendarYear.addMonths(new Date(), -1);
        this.valueFrom = fcCalendarYear.formatDateToISO(from);
        this.valueTo = fcCalendarYear.formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastMonthDisabled = () => {
        const from = this.type === DatepickerRangeTypes.Date ? fcCalendarYear.addMonths(new Date(), -1) : fcCalendarYear.monthStart(fcCalendarYear.addMonths(new Date(), -1));
        const to = this.type === DatepickerRangeTypes.Date ? new Date() : fcCalendarYear.monthStart(new Date());
        return fcCalendarYear.isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || fcCalendarYear.isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastQuarter = () => {
        const from = fcCalendarYear.addMonths(new Date(), -3);
        this.valueFrom = fcCalendarYear.formatDateToISO(from);
        this.valueTo = fcCalendarYear.formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastQuarterDisabled = () => {
        const from = this.type === DatepickerRangeTypes.Date ? fcCalendarYear.addMonths(new Date(), -3) : fcCalendarYear.monthStart(fcCalendarYear.addMonths(new Date(), -3));
        const to = this.type === DatepickerRangeTypes.Date ? new Date() : fcCalendarYear.monthStart(new Date());
        return fcCalendarYear.isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || fcCalendarYear.isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    lastYear = () => {
        const from = fcCalendarYear.addYears(new Date(), -1);
        this.valueFrom = fcCalendarYear.formatDateToISO(from);
        this.valueTo = fcCalendarYear.formatDateToISO(new Date());
        this.setAriaLiveMessage(`Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}.`);
    };
    isLastYearDisabled = () => {
        let from;
        let to;
        switch (this.type) {
            case DatepickerRangeTypes.Date:
                from = fcCalendarYear.addYears(new Date(), -1);
                to = new Date();
                break;
            case DatepickerRangeTypes.Month:
                from = fcCalendarYear.monthStart(fcCalendarYear.addYears(new Date(), -1));
                to = fcCalendarYear.monthStart(new Date());
                break;
            case DatepickerRangeTypes.Year:
                from = fcCalendarYear.yearStart(fcCalendarYear.addYears(new Date(), -1));
                to = fcCalendarYear.yearStart(new Date());
                break;
        }
        return fcCalendarYear.isDisabledDate(from, this.disabledDatesAux, this.minDate, this.maxDate) || fcCalendarYear.isDisabledDate(to, this.disabledDatesAux, this.minDate, this.maxDate);
    };
    handleInput = (e, isFrom) => {
        // If this is a deletion, just update the value
        if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
            if (isFrom) {
                this.inputValueFrom = this.inputElFrom.value;
            }
            else {
                this.inputValueTo = this.inputElTo.value;
            }
            return;
        }
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleInputYear(e, isFrom);
            return;
        }
        if (this.type === DatepickerRangeTypes.Month) {
            this.handleInputMonth(e, isFrom);
            return;
        }
        // Extract only digits with dynamic limit based on format
        const formatParts = this.format.split(/[^A-Za-z]/);
        const separators = this.format.match(/[^A-Za-z0-9]/g) || ['/'];
        const maxDigits = formatParts.reduce((total, part) => total + part.length, 0);
        let digits;
        if (isFrom) {
            digits = this.inputElFrom.value.replace(/\D/g, '').substring(0, maxDigits);
            if (separators.includes(e.data) && e.data === this.format[this.inputElFrom.value.length - 1]) {
                return;
            }
            // Block non-numeric input
            if (e.data && isNaN(Number(e.data))) {
                this.inputElFrom.value = this.inputValueFrom ?? '';
                return;
            }
        }
        else {
            digits = this.inputElTo.value.replace(/\D/g, '').substring(0, maxDigits);
            if (separators.includes(e.data) && e.data === this.format[this.inputElTo.value.length - 1]) {
                return;
            }
            // Block non-numeric input
            if (e.data && isNaN(Number(e.data))) {
                this.inputElTo.value = this.inputValueFrom ?? '';
                return;
            }
        }
        // Format according to the provided format property
        let formatted = '';
        if (digits.length > 0) {
            // Parse the format to determine separator positions and date part lengths
            let digitIndex = 0;
            // Apply each part of the format (e.g., DD, MM, YYYY)
            formatParts.forEach((part, i) => {
                const partLength = part.length;
                // Extract the corresponding digits for this part
                const partDigits = digits.substring(digitIndex, digitIndex + partLength);
                // Only proceed if we have digits for this part
                if (partDigits.length > 0) {
                    // Add part to formatted string
                    formatted += partDigits;
                    digitIndex += partDigits.length;
                    // Add separator if there are more parts and we have digits for the next part
                    if (i < formatParts.length - 1 && digitIndex < digits.length) {
                        formatted += separators[Math.min(i, separators.length - 1)];
                    }
                }
            });
        }
        if (isFrom) {
            this.inputElFrom.value = formatted;
            this.inputValueFrom = formatted;
        }
        else {
            this.inputElTo.value = formatted;
            this.inputValueTo = formatted;
        }
    };
    handleInputYear = (e, isFrom) => {
        if (e.data && isNaN(Number(e.data))) {
            if (isFrom) {
                this.inputElFrom.value = this.inputValueFrom ?? '';
            }
            else {
                this.inputElTo.value = this.inputValueTo ?? '';
            }
            return;
        }
        if (isFrom && Number(this.inputElFrom.value) > 9999) {
            this.inputElFrom.value = this.inputValueFrom;
            this.inputValueFrom = this.inputElFrom.value;
        }
        if (!isFrom && Number(this.inputElTo.value) > 9999) {
            this.inputElTo.value = this.inputValueTo;
            this.inputValueTo = this.inputElTo.value;
        }
        if (isFrom) {
            this.inputValueFrom = this.inputElFrom.value;
        }
        else {
            this.inputValueTo = this.inputElTo.value;
        }
    };
    handleInputMonth = (e, isFrom) => {
        if (isFrom) {
            if (e.data && isNaN(Number(e.data)) && e.data !== '/') {
                this.inputElFrom.value = this.inputValueFrom ?? '';
                return;
            }
            if (Number(this.inputElFrom.value) > 12) {
                this.inputElFrom.value = this.inputValueFrom.padStart(2, '0') + '/' + e.data;
            }
            if (e.data === '/') {
                if (this.inputValueFrom && this.inputValueFrom.length <= 2 && this.inputValueFrom.length > 0) {
                    this.inputElFrom.value = this.inputValueFrom.padStart(2, '0') + e.data;
                }
                else {
                    this.inputElFrom.value = this.inputValueFrom ?? '';
                }
            }
            this.inputValueFrom = this.inputElFrom.value;
        }
        else {
            if (e.data && isNaN(Number(e.data)) && e.data !== '/') {
                this.inputElTo.value = this.inputValueTo ?? '';
                return;
            }
            if (Number(this.inputElTo.value) > 12) {
                this.inputElTo.value = this.inputValueTo.padStart(2, '0') + '/' + e.data;
            }
            if (e.data === '/') {
                if (this.inputValueTo && this.inputValueTo.length <= 2 && this.inputValueTo.length > 0) {
                    this.inputElTo.value = this.inputValueTo.padStart(2, '0') + e.data;
                }
                else {
                    this.inputElTo.value = this.inputValueTo ?? '';
                }
            }
            this.inputValueTo = this.inputElTo.value;
        }
    };
    handleInputFocus = (isFrom) => {
        this.focusState = isFrom ? DatepickerRangeFocusState.Start : DatepickerRangeFocusState.End;
        if (!this.returnInputFocus && !this.readonly) {
            this.open = true;
            if (isFrom) {
                this.shownDate = this.valueDateFrom ?? this.valueDateTo ?? new Date();
            }
            else {
                this.shownDate = this.valueDateTo ?? this.valueDateFrom ?? new Date();
            }
            this.setAriaLiveMessage('Calendario abierto. Use las teclas de flecha para navegar.');
        }
        this.returnInputFocus = false;
        this.athFocus.emit();
    };
    handleInputBlur = () => {
        this.returnInputFocus = false;
    };
    handleOutsideClick = (e) => {
        if (!this.open) {
            this.focusState = DatepickerRangeFocusState.None;
            document.removeEventListener('mousedown', this.handleOutsideClick);
            return;
        }
        // Use composedPath to detect if the click was inside the component
        const path = e.composedPath();
        const clickedInComponent = path.includes(this.element);
        if (!clickedInComponent) {
            this.focusState = DatepickerRangeFocusState.None;
            this.open = false;
            this.returnInputFocus = false;
            this.setAriaLiveMessage('Calendario cerrado');
            this.athBlur.emit();
        }
    };
    handleInputChange = (isFrom) => {
        this.returnInputFocus = true;
        this.hasFocus = false;
        if (isFrom && this.inputValueFrom == '') {
            this.valueFrom = undefined;
            this.hasChanged();
            return;
        }
        if (!isFrom && this.inputValueTo == '') {
            this.valueTo = undefined;
            this.hasChanged();
            return;
        }
        if (this.type === DatepickerRangeTypes.Year) {
            this.handleInputChangeYear(isFrom);
            return;
        }
        else if (this.type === DatepickerRangeTypes.Month) {
            this.handleInputchangeMonth(isFrom);
            return;
        }
        try {
            const result = isFrom ? fcCalendarYear.formatDate(this.inputValueFrom, this.format) : fcCalendarYear.formatDate(this.inputValueTo, this.format);
            if (fcCalendarYear.isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
                this.error(this.feedbackText);
                return;
            }
            if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
                this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
                return;
            }
            this.wrongDate = false;
            this.feedbackWrong = '';
            this.shownDate = result;
            if (isFrom) {
                this.valueDateFrom = result;
                this.valueFrom = fcCalendarYear.formatDateToISO(result);
                this.inputElTo.focus();
            }
            else {
                this.valueDateTo = result;
                this.valueTo = fcCalendarYear.formatDateToISO(result);
                if (this.valueFrom) {
                    this.open = false;
                }
            }
            this.setAriaLiveDateSelect(isFrom);
            this.hasChanged();
        }
        catch (error) {
            this.error('Fecha inexistente');
            this.setAriaLiveMessage('Error: Fecha inexistente o inválida');
        }
    };
    handleInputChangeYear = (isFrom) => {
        try {
            const result = isFrom ? new Date(Number(this.inputValueFrom), 0, 1) : new Date(Number(this.inputValueTo), 0, 1);
            if (fcCalendarYear.isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
                this.error(this.feedbackText);
                return;
            }
            if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
                this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
                return;
            }
            if (isFrom) {
                this.valueFrom = fcCalendarYear.formatDateToISO(result);
            }
            else {
                this.valueTo = fcCalendarYear.formatDateToISO(result);
                if (this.valueFrom) {
                    this.open = false;
                }
            }
            this.setAriaLiveDateSelect(isFrom);
            this.hasChanged();
            this.shownDate = result;
            this.wrongDate = false;
            this.feedbackWrong = '';
        }
        catch (error) {
            this.error('Fecha inexistente');
            this.setAriaLiveMessage('Error: Fecha inexistente o inválida');
        }
    };
    handleInputchangeMonth = (isFrom) => {
        const result = isFrom
            ? new Date(Number(this.inputValueFrom.split('/')[1]), Number(this.inputValueFrom.split('/')[0]) - 1, 1)
            : new Date(Number(this.inputValueTo.split('/')[1]), Number(this.inputValueTo.split('/')[0]) - 1, 1);
        if (fcCalendarYear.isDisabledDate(result, this.disabledDatesAux, this.minDate, this.maxDate)) {
            this.error(this.feedbackText);
            return;
        }
        if ((isFrom && result > this.valueDateTo) || (!isFrom && result < this.valueDateFrom)) {
            this.error('La fecha de inicio debe ser anterior a la fecha de finalización.');
            return;
        }
        if (isFrom) {
            this.valueFrom = fcCalendarYear.formatDateToISO(result);
        }
        else {
            this.valueTo = fcCalendarYear.formatDateToISO(result);
            if (this.valueFrom) {
                this.open = false;
            }
        }
        this.setAriaLiveDateSelect(isFrom);
        this.hasChanged();
        this.wrongDate = false;
        this.feedbackWrong = '';
        this.shownDate = result;
    };
    handleKeydownOverInput = (event) => {
        if (event.code === 'ArrowDown' && !this.disabled && !this.readonly) {
            event.preventDefault();
            event.stopPropagation();
            this.setAriaLiveMessage('Calendario abierto. Use las teclas de flecha para navegar.');
            if (!this.open) {
                this.open = true;
            }
            else {
                const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-range-overlay');
                if (!overlay)
                    return;
                const focusableElements = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
                focusableElements[0].focus();
            }
        }
        else if (event.code === 'Enter') {
            this.submitOnEnter && this.internals.form && this.internals.form.requestSubmit();
        }
        else if (event.code === 'Tab') {
            if (event.shiftKey) {
                this.open = false;
            }
            if (!this.open && ((this.focusState !== DatepickerRangeFocusState.Start && event.shiftKey) || (this.focusState === DatepickerRangeFocusState.End && !event.shiftKey))) {
                this.focusState = DatepickerRangeFocusState.None;
                this.athBlur.emit();
            }
        }
    };
    handleKeyDownOverButton = (key, type) => {
        let variation = 0;
        switch (key.code) {
            case 'ArrowDown':
            case 'ArrowRight':
                key.stopPropagation();
                key.preventDefault();
                variation = 1;
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                key.stopPropagation();
                key.preventDefault();
                variation = -1;
                break;
            case 'PageUp':
                key.stopPropagation();
                key.preventDefault();
                variation = -12;
                break;
            case 'PageDown':
                key.stopPropagation();
                key.preventDefault();
                variation = 12;
                break;
        }
        if (variation !== 0) {
            this.hasFocus = false;
            switch (type) {
                case 'year':
                    this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addYears(this.shownDate, variation), this.minDate, this.maxDate);
                    break;
                case 'month':
                    this.shownDate = fcCalendarYear.getDateBetweenLimits(fcCalendarYear.addMonths(this.shownDate, variation), this.minDate, this.maxDate);
                    break;
            }
        }
    };
    handleOnExit = () => {
        this.hasFocus = false;
        this.returnInputFocus = true;
        this.setFocus();
        this.open = false;
        this.shownDate = this.valueDateFrom ?? new Date();
        this.setAriaLiveMessage('Calendario cerrado, foco devuelto al campo de entrada');
    };
    setAriaLiveMessage = (message) => {
        const duration = 2000;
        if (this.ariaLiveTimeout) {
            clearTimeout(this.ariaLiveTimeout);
            this.ariaLiveTimeout = null;
        }
        this.ariaLiveMessage = message;
        this.ariaLiveTimeout = setTimeout(() => {
            this.ariaLiveMessage = '';
            this.ariaLiveTimeout = null;
        }, duration);
    };
    setAriaLiveDateSelect = (isFrom) => {
        switch (this.type) {
            case DatepickerRangeTypes.Year:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Año de inicio seleccionado: ${fcCalendarYear.formatDateToYear(this.valueDateFrom)}. Seleccione año de fin:`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToYear(this.valueDateFrom)}-${fcCalendarYear.formatDateToYear(this.valueDateTo)}. Seleccione otro año si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Año de inicio sin seleccionar. Año de fin seleccionado: ${fcCalendarYear.formatDateToYear(this.valueDateTo)}`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToYear(this.valueDateFrom)}-${fcCalendarYear.formatDateToYear(this.valueDateTo)}.`);
                }
                return;
            case DatepickerRangeTypes.Month:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Mes de inicio seleccionado: ${fcCalendarYear.formatDateToMonth(this.valueDateFrom)}. Seleccione mes de fin:`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToMonth(this.valueDateFrom)}-${fcCalendarYear.formatDateToMonth(this.valueDateTo)}. Seleccione otro mes si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Mes de inicio sin seleccionar. Mes de fin seleccionado: ${fcCalendarYear.formatDateToMonth(this.valueDateTo)}`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToMonth(this.valueDateFrom)}-${fcCalendarYear.formatDateToMonth(this.valueDateTo)}.`);
                }
                return;
            default:
                if (isFrom) {
                    this.setAriaLiveMessage(this.valueDateTo === undefined
                        ? `Fecha de inicio seleccionada: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}. Seleccione la fecha de fin:`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}. Seleccione otro día si desea modificar la fecha de fin`);
                }
                else {
                    this.setAriaLiveMessage(this.valueDateFrom === undefined
                        ? `Fecha de inicio sin seleccionar. Fecha de fin seleccionada: ${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}`
                        : `Rango seleccionado: ${fcCalendarYear.formatDateToString(this.valueDateFrom, this.format)}-${fcCalendarYear.formatDateToString(this.valueDateTo, this.format)}.`);
                }
        }
    };
    getLabelProps = () => ({
        htmlForId: this.datepickerRangeId,
        id: this.labelId,
        label: this.label,
        required: this.required,
        showRequired: !this.hideRequired,
        tooltipText: this.tooltipText,
        tooltipWidth: 200,
    });
    getMaxLength = () => {
        switch (this.type) {
            case DatepickerRangeTypes.Year:
                return 4;
            case DatepickerRangeTypes.Month:
                return 7; // Format: MM/YYYY
            default:
                return this.format.length;
        }
    };
    getInputFromProps = () => ({
        inputId: this.inputFromId,
        icon: 'calendar',
        iconPosition: 'right',
        type: this.type === DatepickerRangeTypes.Year ? 'number' : 'text',
        autocomplete: 'off',
        name: this.name,
        pattern: '',
        placeholder: this.placeholderStart,
        value: this.inputValueFrom,
        required: this.required || this.requiredStart,
        disabled: this.disabled,
        readonly: !this.disabled && this.readonly,
        maxlength: this.getMaxLength(),
        inputAriaLabel: this.inputAriaLabelStart,
        hasButton: false,
        tabindex: '0',
        size: this.size,
        role: 'combobox',
        ariaExpanded: this.open,
        ariaControls: this.open ? this.datepickerRangePopupId : undefined,
        ariaHaspopup: 'grid',
        helperText: this.helperText,
        helperId: this.datepickerRangeHintId,
        helperTextSROnly: fcCalendarYear.getSROnlyHelperText(),
        helperIdSROnly: this.datepickerRangeHintSROnlyId,
        feedback: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        feedbackText: this.wrongDate ? this.feedbackWrong : this.feedbackText,
        feedbackId: this.datepickerRangeFeedbackId,
        onKeyDown: e => this.handleKeydownOverInput(e),
        onInput: e => this.handleInput(e, true),
        onFocus: () => this.handleInputFocus(true),
        onBlur: () => this.handleInputBlur(),
        onChange: () => this.handleInputChange(true),
        onInputRef: (el) => (this.inputElFrom = el),
    });
    getInputToProps = () => ({
        inputId: this.inputToId,
        icon: 'calendar',
        iconPosition: 'right',
        type: this.type === DatepickerRangeTypes.Year ? 'number' : 'text',
        autocomplete: 'off',
        name: this.name,
        pattern: '',
        placeholder: this.placeholderEnd,
        value: this.inputValueTo,
        required: this.required || this.requiredEnd,
        disabled: this.disabled,
        readonly: !this.disabled && this.readonly,
        maxlength: this.getMaxLength(),
        inputAriaLabel: this.inputAriaLabelEnd,
        hasButton: false,
        tabindex: '0',
        size: this.size,
        role: 'combobox',
        ariaExpanded: this.open,
        ariaControls: this.open ? this.datepickerRangePopupId : undefined,
        ariaHaspopup: 'grid',
        helperText: this.helperText,
        helperId: this.datepickerRangeHintId,
        helperTextSROnly: fcCalendarYear.getSROnlyHelperText(),
        helperIdSROnly: this.datepickerRangeHintSROnlyId,
        feedback: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        feedbackText: this.wrongDate ? this.feedbackWrong : this.feedbackText,
        feedbackId: this.datepickerRangeFeedbackId,
        onKeyDown: e => this.handleKeydownOverInput(e),
        onInput: e => this.handleInput(e, false),
        onFocus: () => this.handleInputFocus(false),
        onBlur: () => this.handleInputBlur(),
        onChange: () => this.handleInputChange(false),
        onInputRef: (el) => (this.inputElTo = el),
    });
    getHelperTextProps = () => {
        return {
            id: this.datepickerRangeHintId,
            text: !!this.helperText ? this.helperText.trim() : '',
        };
    };
    getFeedbackProps = () => ({
        id: this.datepickerRangeFeedbackId,
        type: this.wrongDate ? DatepickerRangeFeedbacks.Error : this.feedback,
        text: this.wrongDate ? this.feedbackWrong : this.feedbackText,
    });
    getDialogClassNames = () => ({
        'ath-datepicker-range-overlay': true,
        [`size-${this.size}${!!this.label ? '__label' : ''}`]: true,
        'is-active': this.open,
    });
    getInputClassNames = (isFrom) => ({
        'ath-input': true,
        'ath-focused-input': isFrom ? this.focusState === DatepickerRangeFocusState.Start : this.focusState === DatepickerRangeFocusState.End,
    });
    getPrevButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return 'Mes anterior';
            case DatepickerRangeTypes.Month:
                return 'Año anterior';
            case DatepickerRangeTypes.Year:
                return 'Página de años anterior';
            default:
                return 'Mes anterior';
        }
    };
    getNextButtonAriaLabel = () => {
        switch (this.showType) {
            case DatepickerRangeTypes.Date:
                return 'Mes siguiente';
            case DatepickerRangeTypes.Month:
                return 'Año siguiente';
            case DatepickerRangeTypes.Year:
                return 'Página de años siguiente';
            default:
                return 'Mes siguiente';
        }
    };
    setInputValue(value) {
        if (this.internals && 'setFormValue' in this.internals) {
            this.internals.setFormValue(value);
            this.internals.checkValidity();
        }
    }
    trapFocus = (e) => {
        if (!this.open || e.key !== 'Tab')
            return;
        const overlay = this.element.shadowRoot?.querySelector('.ath-datepicker-range-overlay');
        if (!overlay)
            return;
        const focusableElements = Array.from(overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        const firstElement = focusableElements[0]['disabled'] ? focusableElements[1] : focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            // Tab hacia atrás
            if (this.element.shadowRoot.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            }
        }
        else {
            // Tab hacia adelante
            if (this.element.shadowRoot.activeElement === lastElement || this.element.shadowRoot.activeElement.nodeName === 'INPUT') {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    };
    render() {
        const labelProps = this.getLabelProps();
        const helperTextProps = this.getHelperTextProps();
        const feedbackProps = this.getFeedbackProps();
        const inputFromProps = this.getInputFromProps();
        const inputToProps = this.getInputToProps();
        return (index.h(index.Host, { key: '9c4eefd65cd5ecc51dd5566e45aa78ea2d3dac8a' }, index.h("fieldset", { key: '5ccbc04fc3963441ccb2b5ab856e642cba51e4d5', role: "group", id: this.datepickerRangeId, name: this.name, "aria-labelledby": !!this.label ? this.labelId : undefined, "aria-invalid": this.wrongDate || this.feedback === DatepickerRangeFeedbacks.Error ? 'true' : undefined, class: "ath-datepicker-range", onKeyDown: e => {
                if (e.key === 'Escape') {
                    this.returnInputFocus = true;
                    this.hasFocus = false;
                    if (this.focusState === DatepickerRangeFocusState.Start) {
                        this.setFocus();
                    }
                    else if (this.focusState === DatepickerRangeFocusState.End) {
                        this.setFocusEnd();
                    }
                    this.open = false;
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.trapFocus(e);
                }
            } }, index.h("div", { key: '9e246481236142e395778947bbcbaa8058782365', class: "wrapper" }, !!this.label && index.h(fcLabel.FcInputLabel, { key: '68b23f8135bca05dda3781c686a63bb41260c7da', ...labelProps }), index.h("div", { key: '121300f75ddd8f7f0e59d113f4e324ef4a9f751f', class: "ath-datepicker-range__input-group" }, index.h("div", { key: '22a6a4edf710bf5ea3c5ae40daa0f934977aab6f', class: this.getInputClassNames(true), onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                this.setFocus();
            } }, index.h(fcLabel.FcInputLabel, { key: 'cdbb8033e3f08ad3b629557d179009d36a1d5eb4', htmlForId: this.inputFromId, label: this.labelStart ?? 'Desde', required: this.required || this.requiredStart, showRequired: !this.hideRequired }), index.h(fcInputElement.FcInputElement, { key: '0f1bccf3167d6195962e89595870b3dc9b565f70', ...inputFromProps })), index.h("div", { key: 'dad778b58f6a66ec48780f8aed9d4e587d8a8d0f', class: this.getInputClassNames(false), onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                this.setFocusEnd();
            } }, index.h(fcLabel.FcInputLabel, { key: '938c0246158ea3e47cfde608b52d1a405bc6cc8d', htmlForId: this.inputToId, label: this.labelEnd ?? 'Hasta', required: this.required || this.requiredEnd, showRequired: !this.hideRequired }), index.h(fcInputElement.FcInputElement, { key: '5fae51a7d091273c372bf8ce8654f3c219cfc00d', ...inputToProps }))), !!this.helperText && !this.open && index.h(fcHelper.FcInputHelperText, { key: 'de6f3463fa5eb47e14c8eb57cc8ace5154c57b7c', ...helperTextProps }), index.h("div", { key: '4bdf3133c64d7460fc28f6408131b100233c16d3', class: "sr-only", id: this.datepickerRangeHintSROnlyId }, index.h("span", { key: '76e4fb740370f295d9dfd39dc27dde2267c92e18' }, fcCalendarYear.getSROnlyHelperText())), ((this.feedback !== DatepickerRangeFeedbacks.None && !this.disabled && !this.readonly && !this.open) || this.wrongDate) && (index.h(fcHelper.FcInputFeedback, { key: '1eb60f49229baa244e2df4a7f90268d4bb3c6030', ...feedbackProps }))), index.h("div", { key: '92651ca83a3b2c06e24a7fa5ada796064fa8f76c', "aria-live": "polite", "aria-atomic": "true", class: "sr-only", role: "status" }, this.ariaLiveMessage), this.renderOverlay && (index.h("div", { key: 'c8392404149c4f8a212ba70380e98a75a52f3341', class: this.getDialogClassNames(), id: this.datepickerRangePopupId }, index.h("div", { key: 'fc3eb670ec5cf98963e729ba6a938f6fc7a55405', class: "ath-datepicker-range-calendar-date" }, index.h("div", { key: 'b71f915c4825d27fe8bb77cbac4af7d031a0cd46', class: "ath-datepicker-range-calendar-date__header" }, index.h(fcButtonComp.FcButtonComp, { key: '4d72d1bec47826b1b9962abd4cdc0ec022b9c503', size: "sm", color: "default", iconPosition: button_model.ButtonIconPosition.IconOnly, icon: "chevron_left", onClick: this.handlePrevButton, disabled: this.isPrevButtonDisabled(), buttonAriaLabel: this.getPrevButtonAriaLabel() }), index.h("div", { key: '469cfc1a1a25f12cada9bed7832c6837f9bf8ac5', class: "ath-datepicker-range-calendar-date__header__date" }, this.showType !== 'year' && (index.h("ath-button", { key: '8f3bd489a2fc5723ea6cfddbc42c187e01a571d6', clear: true, size: "sm", onAthClick: this.handleClickMonth, onKeyDown: e => this.handleKeyDownOverButton(e, 'month'), "aria-label": `Cambiar a vista de selección de mes. Mes seleccionado: ${this.shownDate ? fcCalendarYear.getMonthName(this.shownDate) : this.valueDateFrom ? fcCalendarYear.getMonthName(this.valueDateFrom) : fcCalendarYear.getMonthName(new Date())}` }, this.shownDate ? fcCalendarYear.getMonthName(this.shownDate) : this.valueDateFrom ? fcCalendarYear.getMonthName(this.valueDateFrom) : fcCalendarYear.getMonthName(new Date()))), index.h("ath-button", { key: 'df868da01332b218fe65e3dba0991345bcc7852c', clear: true, size: "sm", onAthClick: this.handleClickYear, onKeyDown: e => this.handleKeyDownOverButton(e, 'year'), "aria-label": `Cambiar a vista de selección de año. Año seleccionado: ${this.shownDate ? this.shownDate.getFullYear() : this.valueDateFrom ? this.valueDateFrom.getFullYear() : new Date().getFullYear()}` }, this.shownDate ? this.shownDate.getFullYear() : this.valueDateFrom ? this.valueDateFrom.getFullYear() : new Date().getFullYear())), index.h(fcButtonComp.FcButtonComp, { key: 'ca1e6c2bb07c0dcc2f52cc301632850ebe902a53', size: "sm", color: "default", iconPosition: button_model.ButtonIconPosition.IconOnly, icon: "chevron_right", disabled: this.isNextButtonDisabled(), onClick: this.handleNextButton, buttonAriaLabel: this.getNextButtonAriaLabel() })), this.showType === 'date' && (index.h("div", { key: 'f51820d4ed33f3610d8918539e3970c94ed29d88', class: "ath-datepicker-range-calendar-date__date" }, index.h(fcCalendarYear.FcCalendar, { key: '78d03f666c52cc47d0bf9a2d93b0ae0f85009c76', shownDate: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onDateSelect: this.handleDaySelect, currentDate: new Date(), color: this.color, disabledDate: this.disabledDatesAux, highlightedDate: this.highlightedDatesAux, highlightedWeekends: this.highlightedWeekends, minDate: this.minDate, maxDate: this.maxDate, onChangeShownDate: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'month' && (index.h("div", { key: 'd245996911fe9f9a29f3bf06b00f88d0faa8bedc', class: "ath-datepicker-range-calendar-date__month" }, index.h(fcCalendarYear.FcCalendarMonth, { key: '5b186336e943f819bb9cd9e434aa0de7b0fb6795', shownMonth: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onMonthSelect: this.handleMonthSelect, currentMonth: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minMonth: this.minDate, maxMonth: this.maxDate, onChangeShownMonth: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit }))), this.showType === 'year' && (index.h("div", { key: 'dd889f20866257c0ca1470418973368d37b44afd', class: "ath-datepicker-range-calendar-date__year" }, index.h(fcCalendarYear.FcCalendarYear, { key: 'd5449d071ee4937fcadd77314df210e01631213e', shownYear: this.shownDate || this.valueDateFrom || new Date(), selectedRangeStart: this.valueDateFrom, selectedRangeEnd: this.valueDateTo, hasFocus: this.hasFocus, onYearSelect: this.handleYearSelect, currentYear: new Date(), color: this.color, disabledDates: this.disabledDatesAux, highlightedDates: this.highlightedDatesAux, minYear: this.minDate, maxYear: this.maxDate, onChangeShownYear: (date) => {
                this.shownDate = date;
                this.hasFocus = true;
            }, onExit: this.handleOnExit })))), !this.hidePanel && (index.h("div", { key: 'ec092137fc328c3958d02d541d7e75ffa65e2dbb', class: "ath-datepicker-range-calendar-date__panel" }, index.h("div", { key: '9427da194d3395cb44dd01d659d3bd822616237b', class: "ath-datepicker-range-calendar-date__panel-shortcuts" }, index.h("ath-button-link", { key: '45cb3ccaa33bb24377eee63efa61cf05151cdf87', onAthClick: this.today, "aria-label": "Ir a hoy" }, "Hoy"), this.type === DatepickerRangeTypes.Date && (index.h("ath-button-link", { key: '62c8aa756ad8bbfaedd8a5bafcb55a7d1f8f666f', disabled: this.isLastWeekDisabled(), onAthClick: this.lastWeek, "aria-label": "Seleccionar la \u00FAltima semana" }, "\u00DAltima semana")), this.type !== DatepickerRangeTypes.Year && (index.h("ath-button-link", { key: 'c2b628a4923fa8d88146b764c11e34f48d5a7bc1', disabled: this.isLastMonthDisabled(), onAthClick: this.lastMonth, "aria-label": "Seleccionar el \u00FAltimo mes" }, "\u00DAltimo mes")), this.type !== DatepickerRangeTypes.Year && (index.h("ath-button-link", { key: '8835e3ee32ec3696d37941d5d215e6993cca8837', disabled: this.isLastQuarterDisabled(), onAthClick: this.lastQuarter, "aria-label": "Seleccionar el \u00FAltimo trimestre" }, "\u00DAltimo trimestre")), index.h("ath-button-link", { key: '5ef6cb9eb33e8ad5606303c964e2d0d86fcf4e16', disabled: this.isLastYearDisabled(), onAthClick: this.lastYear, "aria-label": "Seleccionar el \u00FAltimo a\u00F1o" }, "\u00DAltimo a\u00F1o")), index.h("ath-button-link", { key: 'f203e648e057a0d43da582c08f941d02fe9a35ae', onAthClick: this.reset }, "Restablecer"))))))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": ["watchDisabled"],
        "disabledDates": ["updateDisabledDates"],
        "highlightedDates": ["updateHighlightedDates"],
        "min": ["updateMin"],
        "max": ["updateMax"],
        "value": ["updateValue"],
        "open": ["watchOpenState"],
        "valueFrom": ["updateValueFrom"],
        "valueTo": ["updateValueTo"]
    }; }
};
AthDatepickerRange.style = datepickerRangeCss;

exports.ath_datepicker_range = AthDatepickerRange;
//# sourceMappingURL=ath-datepicker-range.entry.cjs.js.map
