import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '../types/components';
import type { CheckboxChangeEventDetail as IAthCheckboxCheckboxChangeEventDetail } from '../types/components';
import type { CheckboxChangeEventDetail as IAthCheckboxGroupCheckboxChangeEventDetail } from '../types/components';
import type { ActionListItem as IAthDropdownActionListItem } from '../types/components';
import type { MenuHorizontalItem as IAthMenuHorizontalMenuHorizontalItem } from '../types/components';
import type { MenuItem as IAthMenuVerticalMenuItem } from '../types/components';
import type { RadioButtonChangeDetail as IAthRadioButtonRadioButtonChangeDetail } from '../types/components';
import type { SegmentedControlItemChangeSelect as IAthSegmentedControlItemSegmentedControlItemChangeSelect } from '../types/components';
import type { SwitchChangeDetail as IAthSwitchSwitchChangeDetail } from '../types/components';
import type { TableSelectionChangeEvent as IAthTableTableSelectionChangeEvent } from '../types/components';
import type { TableClickEvent as IAthTableTableClickEvent } from '../types/components';
import type { TableSelectAllChangeEvent as IAthTableHeaderTableSelectAllChangeEvent } from '../types/components';
import type { TableRowSelectionChangeEvent as IAthTableRowTableRowSelectionChangeEvent } from '../types/components';
import type { TableRowClickEvent as IAthTableRowTableRowClickEvent } from '../types/components';
import * as i0 from "@angular/core";
export declare class AthAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthAccordion, "ath-accordion", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "expand": { "alias": "expand"; "required": false; }; "noLastItemDivider": { "alias": "noLastItemDivider"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthAccordion extends Components.AthAccordion {
}
export declare class AthAccordionItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthAccordionItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthAccordionItem, "ath-accordion-item", never, { "description": { "alias": "description"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "noDivider": { "alias": "noDivider"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthAccordionItem extends Components.AthAccordionItem {
    opened: EventEmitter<CustomEvent<void>>;
}
export declare class AthActionBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthActionBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthActionBar, "ath-action-bar", never, { "alignment": { "alias": "alignment"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthActionBar extends Components.AthActionBar {
}
export declare class AthAlert {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthAlert, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthAlert, "ath-alert", never, { "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "color": { "alias": "color"; "required": false; }; "description": { "alias": "description"; "required": false; }; "hasClose": { "alias": "hasClose"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "isUrgent": { "alias": "isUrgent"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthAlert extends Components.AthAlert {
}
export declare class AthAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthAvatar, "ath-avatar", never, { "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; "avatarName": { "alias": "avatarName"; "required": false; }; "initials": { "alias": "initials"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthAvatar extends Components.AthAvatar {
}
export declare class AthBadge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthBadge, "ath-badge", never, { "color": { "alias": "color"; "required": false; }; "distanceX": { "alias": "distanceX"; "required": false; }; "distanceY": { "alias": "distanceY"; "required": false; }; "label": { "alias": "label"; "required": false; }; "max": { "alias": "max"; "required": false; }; "position": { "alias": "position"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthBadge extends Components.AthBadge {
}
export declare class AthBreadcrumb {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthBreadcrumb, "ath-breadcrumb", never, { "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; "options": { "alias": "options"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthBreadcrumb extends Components.AthBreadcrumb {
}
export declare class AthButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthButton, "ath-button", never, { "clear": { "alias": "clear"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthButton extends Components.AthButton {
    /**
     * Emitted when the button is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthButtonExpandable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthButtonExpandable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthButtonExpandable, "ath-button-expandable", never, { "collapseTarget": { "alias": "collapseTarget"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthButtonExpandable extends Components.AthButtonExpandable {
    athToggleCollapse: EventEmitter<CustomEvent<string>>;
}
export declare class AthButtonLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthButtonLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthButtonLink, "ath-button-link", never, { "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthButtonLink extends Components.AthButtonLink {
    /**
     * Emitted when the button-link is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button-link gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button-link loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthCalendar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCalendar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCalendar, "ath-calendar", never, { "color": { "alias": "color"; "required": false; }; "disabledDates": { "alias": "disabledDates"; "required": false; }; "highlightedDates": { "alias": "highlightedDates"; "required": false; }; "highlightedWeekends": { "alias": "highlightedWeekends"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCalendar extends Components.AthCalendar {
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
}
export declare class AthCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCard, "ath-card", never, { "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCard extends Components.AthCard {
    /**
     * Emitted when card is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when card gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when card loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthCardHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCardHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCardHeader, "ath-card-header", never, { "date": { "alias": "date"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "overline": { "alias": "overline"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCardHeader extends Components.AthCardHeader {
}
export declare class AthCardSelectable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCardSelectable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCardSelectable, "ath-card-selectable", never, { "disabled": { "alias": "disabled"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "overline": { "alias": "overline"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "tag": { "alias": "tag"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCardSelectable extends Components.AthCardSelectable {
    athChange: EventEmitter<CustomEvent<any>>;
    athFocus: EventEmitter<CustomEvent<void>>;
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthCardSelectableGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCardSelectableGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCardSelectableGroup, "ath-card-selectable-group", never, { "disabled": { "alias": "disabled"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCardSelectableGroup extends Components.AthCardSelectableGroup {
    athValueChanged: EventEmitter<CustomEvent<HTMLAthCardSelectableElement[]>>;
}
export declare class AthCardThumbnail {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCardThumbnail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCardThumbnail, "ath-card-thumbnail", never, { "bottomTag": { "alias": "bottomTag"; "required": false; }; "highlightText": { "alias": "highlightText"; "required": false; }; "topTag": { "alias": "topTag"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCardThumbnail extends Components.AthCardThumbnail {
}
export declare class AthCheckbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCheckbox, "ath-checkbox", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCheckbox extends Components.AthCheckbox {
    /**
     * Emitted when the checkbox gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the checkbox loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the checkbox change
     */
    athChange: EventEmitter<CustomEvent<IAthCheckboxCheckboxChangeEventDetail>>;
}
export declare class AthCheckboxGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCheckboxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCheckboxGroup, "ath-checkbox-group", never, { "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "requiredAriaLabel": { "alias": "requiredAriaLabel"; "required": false; }; "showRequired": { "alias": "showRequired"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCheckboxGroup extends Components.AthCheckboxGroup {
    /**
     * Emite el array de checkboxes seleccionados
     */
    athChecked: EventEmitter<CustomEvent<IAthCheckboxGroupCheckboxChangeEventDetail[]>>;
}
export declare class AthChipChoice {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthChipChoice, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthChipChoice, "ath-chip-choice", never, { "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "role": { "alias": "role"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthChipChoice extends Components.AthChipChoice {
    athChange: EventEmitter<CustomEvent<any>>;
    athFocus: EventEmitter<CustomEvent<void>>;
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthChipChoiceGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthChipChoiceGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthChipChoiceGroup, "ath-chip-choice-group", never, { "disabled": { "alias": "disabled"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthChipChoiceGroup extends Components.AthChipChoiceGroup {
    /**
     * Event to emit the current chips checked
     */
    athChangeValue: EventEmitter<CustomEvent<HTMLAthChipChoiceElement[]>>;
}
export declare class AthChipDismiss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthChipDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthChipDismiss, "ath-chip-dismiss", never, { "disabled": { "alias": "disabled"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "labelDismiss": { "alias": "labelDismiss"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthChipDismiss extends Components.AthChipDismiss {
    /**
     * Emitted when the x icon is clicked
     */
    athDismiss: EventEmitter<CustomEvent<void>>;
}
export declare class AthChipDismissGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthChipDismissGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthChipDismissGroup, "ath-chip-dismiss-group", never, { "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthChipDismissGroup extends Components.AthChipDismissGroup {
}
export declare class AthCollapse {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCollapse, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCollapse, "ath-collapse", never, { "show": { "alias": "show"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCollapse extends Components.AthCollapse {
    /**
     * Event to emit if the component is expanded or collapsed.
     */
    athCollapseState: EventEmitter<CustomEvent<{
        id: string;
        isExpanded: boolean;
    }>>;
}
export declare class AthCollapseIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthCollapseIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthCollapseIcon, "ath-collapse-icon", never, { "expanded": { "alias": "expanded"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthCollapseIcon extends Components.AthCollapseIcon {
}
export declare class AthDatepicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthDatepicker, "ath-datepicker", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledDates": { "alias": "disabledDates"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "format": { "alias": "format"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "highlightedDates": { "alias": "highlightedDates"; "required": false; }; "highlightedWeekends": { "alias": "highlightedWeekends"; "required": false; }; "inputAriaLabel": { "alias": "inputAriaLabel"; "required": false; }; "label": { "alias": "label"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "submitOnEnter": { "alias": "submitOnEnter"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthDatepicker extends Components.AthDatepicker {
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<CustomEvent<string>>;
}
export declare class AthDatepickerRange {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthDatepickerRange, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthDatepickerRange, "ath-datepicker-range", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledDates": { "alias": "disabledDates"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "format": { "alias": "format"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hidePanel": { "alias": "hidePanel"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "highlightedDates": { "alias": "highlightedDates"; "required": false; }; "highlightedWeekends": { "alias": "highlightedWeekends"; "required": false; }; "inputAriaLabelEnd": { "alias": "inputAriaLabelEnd"; "required": false; }; "inputAriaLabelStart": { "alias": "inputAriaLabelStart"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelEnd": { "alias": "labelEnd"; "required": false; }; "labelStart": { "alias": "labelStart"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholderEnd": { "alias": "placeholderEnd"; "required": false; }; "placeholderStart": { "alias": "placeholderStart"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredEnd": { "alias": "requiredEnd"; "required": false; }; "requiredStart": { "alias": "requiredStart"; "required": false; }; "size": { "alias": "size"; "required": false; }; "submitOnEnter": { "alias": "submitOnEnter"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthDatepickerRange extends Components.AthDatepickerRange {
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
}
export declare class AthDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthDivider, "ath-divider", never, { "color": { "alias": "color"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthDivider extends Components.AthDivider {
}
export declare class AthDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthDropdown, "ath-dropdown", never, { "announceResultText": { "alias": "announceResultText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "dropdownAriaLabel": { "alias": "dropdownAriaLabel"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "label": { "alias": "label"; "required": false; }; "multiselect": { "alias": "multiselect"; "required": false; }; "name": { "alias": "name"; "required": false; }; "nochipsText": { "alias": "nochipsText"; "required": false; }; "noresultText": { "alias": "noresultText"; "required": false; }; "open": { "alias": "open"; "required": false; }; "overlayMaxHeight": { "alias": "overlayMaxHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "search": { "alias": "search"; "required": false; }; "searchAriaLabel": { "alias": "searchAriaLabel"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "showChips": { "alias": "showChips"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "value": { "alias": "value"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthDropdown extends Components.AthDropdown {
    /**
     * Emitted when option changed
     */
    athChange: EventEmitter<CustomEvent<IAthDropdownActionListItem[]>>;
    /**
     * Emitted when the combobox gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the combobox loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthDropdownOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthDropdownOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthDropdownOption, "ath-dropdown-option", never, { "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "name": { "alias": "name"; "required": false; }; "optionGroup": { "alias": "optionGroup"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "selectedAriaLabel": { "alias": "selectedAriaLabel"; "required": false; }; "text": { "alias": "text"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthDropdownOption extends Components.AthDropdownOption {
    optSelected: EventEmitter<CustomEvent<{
        source: 'user' | 'programmatic';
    }>>;
}
export declare class AthEmptyState {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthEmptyState, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthEmptyState, "ath-empty-state", never, { "description": { "alias": "description"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingSize": { "alias": "headingSize"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "hideImage": { "alias": "hideImage"; "required": false; }; "loadingLabel": { "alias": "loadingLabel"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthEmptyState extends Components.AthEmptyState {
}
export declare class AthIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthIcon, "ath-icon", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; "color": { "alias": "color"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthIcon extends Components.AthIcon {
}
export declare class AthInputCounter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthInputCounter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthInputCounter, "ath-input-counter", never, { "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideControls": { "alias": "hideControls"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "inputAriaLabel": { "alias": "inputAriaLabel"; "required": false; }; "label": { "alias": "label"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "unitAriaLabel": { "alias": "unitAriaLabel"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthInputCounter extends Components.AthInputCounter {
    /**
     * Emitted when the input gains focus.
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus.
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted every time the value is updated by introducing a change.
     */
    athInput: EventEmitter<CustomEvent<string>>;
}
export declare class AthInputPassword {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthInputPassword, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthInputPassword, "ath-input-password", never, { "autocomplete": { "alias": "autocomplete"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "counterLabel": { "alias": "counterLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "inputAriaLabel": { "alias": "inputAriaLabel"; "required": false; }; "inputTabindex": { "alias": "inputTabindex"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelHidePassword": { "alias": "labelHidePassword"; "required": false; }; "labelShowPassword": { "alias": "labelShowPassword"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "submitOnEnter": { "alias": "submitOnEnter"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthInputPassword extends Components.AthInputPassword {
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the component is cleared
     */
    athClear: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<CustomEvent<string>>;
}
export declare class AthInputText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthInputText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthInputText, "ath-input-text", never, { "autocomplete": { "alias": "autocomplete"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonAriaLabel": { "alias": "clearButtonAriaLabel"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "counterLabel": { "alias": "counterLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "hasClear": { "alias": "hasClear"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "inputAriaLabel": { "alias": "inputAriaLabel"; "required": false; }; "inputTabindex": { "alias": "inputTabindex"; "required": false; }; "label": { "alias": "label"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "submitOnEnter": { "alias": "submitOnEnter"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthInputText extends Components.AthInputText {
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the component is cleared
     */
    athClear: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<CustomEvent<string>>;
}
export declare class AthInputTextarea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthInputTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthInputTextarea, "ath-input-textarea", never, { "autocomplete": { "alias": "autocomplete"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "counterLabel": { "alias": "counterLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "inputAriaLabel": { "alias": "inputAriaLabel"; "required": false; }; "inputTabindex": { "alias": "inputTabindex"; "required": false; }; "label": { "alias": "label"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "value": { "alias": "value"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthInputTextarea extends Components.AthInputTextarea {
    /**
     * Emitted when the input gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value has changed.
  This event doesn't fire until the control loses focus.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted every time the value is updated by introducing a change
     */
    athInput: EventEmitter<CustomEvent<string>>;
}
export declare class AthLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthLink, "ath-link", never, { "ariaDescribedby": { "alias": "ariaDescribedby"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "externalLabel": { "alias": "externalLabel"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconAriaLabel": { "alias": "iconAriaLabel"; "required": false; }; "linkHref": { "alias": "linkHref"; "required": false; }; "linkTarget": { "alias": "linkTarget"; "required": false; }; "size": { "alias": "size"; "required": false; }; "underline": { "alias": "underline"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthLink extends Components.AthLink {
    /**
     * Emitted when the link is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the lin gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the link loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthList, "ath-list", never, { "clickable": { "alias": "clickable"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hasDivider": { "alias": "hasDivider"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthList extends Components.AthList {
}
export declare class AthListItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthListItem, "ath-list-item", never, { "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "description": { "alias": "description"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "externalLabel": { "alias": "externalLabel"; "required": false; }; "hasDivider": { "alias": "hasDivider"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "href": { "alias": "href"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "target": { "alias": "target"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipMaxWidth": { "alias": "tooltipMaxWidth"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthListItem extends Components.AthListItem {
    /**
     * Emitted when listItem is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
}
export declare class AthMenuButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuButton, "ath-menu-button", never, { "alignment": { "alias": "alignment"; "required": false; }; "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "clear": { "alias": "clear"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "overlayMaxHeight": { "alias": "overlayMaxHeight"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuButton extends Components.AthMenuButton {
    /**
     * Emitted when an item is clicked
     */
    athAction: EventEmitter<CustomEvent<{
        item: HTMLAthMenuButtonItemElement;
    }>>;
}
export declare class AthMenuButtonItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuButtonItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuButtonItem, "ath-menu-button-item", never, { "disabled": { "alias": "disabled"; "required": false; }; "groupName": { "alias": "groupName"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "itemTabIndex": { "alias": "itemTabIndex"; "required": false; }; "name": { "alias": "name"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuButtonItem extends Components.AthMenuButtonItem {
    /**
     * Emitted when the item is clicked and triggers an action
     */
    athSelected: EventEmitter<CustomEvent<HTMLAthMenuButtonItemElement>>;
}
export declare class AthMenuHorizontal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuHorizontal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuHorizontal, "ath-menu-horizontal", never, { "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "hasDivider": { "alias": "hasDivider"; "required": false; }; "items": { "alias": "items"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuHorizontal extends Components.AthMenuHorizontal {
    /**
     * Emitted when an item is selected with the MenuHorizontalItem object
     */
    athSelected: EventEmitter<CustomEvent<IAthMenuHorizontalMenuHorizontalItem>>;
}
export declare class AthMenuHorizontalItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuHorizontalItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuHorizontalItem, "ath-menu-horizontal-item", never, { "badgeLabel": { "alias": "badgeLabel"; "required": false; }; "badgeMax": { "alias": "badgeMax"; "required": false; }; "badgeValue": { "alias": "badgeValue"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "externalLabel": { "alias": "externalLabel"; "required": false; }; "href": { "alias": "href"; "required": false; }; "label": { "alias": "label"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "target": { "alias": "target"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuHorizontalItem extends Components.AthMenuHorizontalItem {
}
export declare class AthMenuLateral {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuLateral, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuLateral, "ath-menu-lateral", never, { "items": { "alias": "items"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuLateral extends Components.AthMenuLateral {
    /**
     * Events
     */
    athSelected: EventEmitter<CustomEvent<{
        item: HTMLAthMenuLateralItemActionElement | HTMLAthMenuLateralItemLinkElement;
    }>>;
}
export declare class AthMenuLateralItemAction {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuLateralItemAction, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuLateralItemAction, "ath-menu-lateral-item-action", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "badgeLabel": { "alias": "badgeLabel"; "required": false; }; "badgeMax": { "alias": "badgeMax"; "required": false; }; "badgeValue": { "alias": "badgeValue"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "name": { "alias": "name"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuLateralItemAction extends Components.AthMenuLateralItemAction {
}
export declare class AthMenuLateralItemLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuLateralItemLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuLateralItemLink, "ath-menu-lateral-item-link", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "badgeLabel": { "alias": "badgeLabel"; "required": false; }; "badgeMax": { "alias": "badgeMax"; "required": false; }; "badgeValue": { "alias": "badgeValue"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "externalLabel": { "alias": "externalLabel"; "required": false; }; "href": { "alias": "href"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "name": { "alias": "name"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "target": { "alias": "target"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuLateralItemLink extends Components.AthMenuLateralItemLink {
}
export declare class AthMenuVertical {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuVertical, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuVertical, "ath-menu-vertical", never, { "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuVertical extends Components.AthMenuVertical {
    /**
     * Emitted when link or action Button is clicked
     */
    athSelected: EventEmitter<CustomEvent<IAthMenuVerticalMenuItem>>;
}
export declare class AthMenuVerticalItemAction {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuVerticalItemAction, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuVerticalItemAction, "ath-menu-vertical-item-action", never, { "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "text": { "alias": "text"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuVerticalItemAction extends Components.AthMenuVerticalItemAction {
}
export declare class AthMenuVerticalItemLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthMenuVerticalItemLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthMenuVerticalItemLink, "ath-menu-vertical-item-link", never, { "disabled": { "alias": "disabled"; "required": false; }; "externalLabel": { "alias": "externalLabel"; "required": false; }; "href": { "alias": "href"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "target": { "alias": "target"; "required": false; }; "text": { "alias": "text"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthMenuVerticalItemLink extends Components.AthMenuVerticalItemLink {
}
export declare class AthModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthModal, "ath-modal", never, { "appearance": { "alias": "appearance"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "clickOutsideClose": { "alias": "clickOutsideClose"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "fullScreen": { "alias": "fullScreen"; "required": false; }; "hasClose": { "alias": "hasClose"; "required": false; }; "hasDivider": { "alias": "hasDivider"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "isAlert": { "alias": "isAlert"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "open": { "alias": "open"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtitleText": { "alias": "subtitleText"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthModal extends Components.AthModal {
    /**
     * Emitted when the modal is opened
     */
    athOpened: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the modal is closed
     */
    athClosed: EventEmitter<CustomEvent<void>>;
}
export declare class AthPagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthPagination, "ath-pagination", never, { "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "currentPage": { "alias": "currentPage"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "itemsSelector": { "alias": "itemsSelector"; "required": false; }; "noEndButtons": { "alias": "noEndButtons"; "required": false; }; "noItemsCount": { "alias": "noItemsCount"; "required": false; }; "noItemsSelector": { "alias": "noItemsSelector"; "required": false; }; "noJumpButtons": { "alias": "noJumpButtons"; "required": false; }; "totalItems": { "alias": "totalItems"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthPagination extends Components.AthPagination {
    /**
     * Event emitted when the page changes.
  Emits the new page number as detail.
     */
    athPaginate: EventEmitter<CustomEvent<number>>;
    /**
     * Event emitted when the items per page changes.
  Emits the new items per page as detail.
     */
    athItemsPerPageChange: EventEmitter<CustomEvent<number>>;
}
export declare class AthPanel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthPanel, "ath-panel", never, { "focusable": { "alias": "focusable"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthPanel extends Components.AthPanel {
}
export declare class AthPictogram {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthPictogram, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthPictogram, "ath-pictogram", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthPictogram extends Components.AthPictogram {
}
export declare class AthProgressBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthProgressBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthProgressBar, "ath-progress-bar", never, { "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "infinite": { "alias": "infinite"; "required": false; }; "labelAlignment": { "alias": "labelAlignment"; "required": false; }; "labelLeft": { "alias": "labelLeft"; "required": false; }; "labelRight": { "alias": "labelRight"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "value": { "alias": "value"; "required": false; }; "valueText": { "alias": "valueText"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthProgressBar extends Components.AthProgressBar {
}
export declare class AthRadioButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthRadioButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthRadioButton, "ath-radio-button", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthRadioButton extends Components.AthRadioButton {
    /**
     * Emitted when the radio-button receives focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the radio-button loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when there is a change in the input state
     */
    athChange: EventEmitter<CustomEvent<IAthRadioButtonRadioButtonChangeDetail>>;
}
export declare class AthRadioButtonGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthRadioButtonGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthRadioButtonGroup, "ath-radio-button-group", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "requiredAriaLabel": { "alias": "requiredAriaLabel"; "required": false; }; "showRequired": { "alias": "showRequired"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthRadioButtonGroup extends Components.AthRadioButtonGroup {
    athChangeValue: EventEmitter<CustomEvent<string>>;
}
export declare class AthSectionTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthSectionTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthSectionTitle, "ath-section-title", never, { "collapsable": { "alias": "collapsable"; "required": false; }; "collapseTarget": { "alias": "collapseTarget"; "required": false; }; "color": { "alias": "color"; "required": false; }; "headingLevel": { "alias": "headingLevel"; "required": false; }; "headingOverline": { "alias": "headingOverline"; "required": false; }; "headingSize": { "alias": "headingSize"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "overline": { "alias": "overline"; "required": false; }; "pictogram": { "alias": "pictogram"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipLabel": { "alias": "tooltipLabel"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthSectionTitle extends Components.AthSectionTitle {
    /**
     * Emitted when the 'Collapse' component collapses or expands.
     */
    athToggleCollapse: EventEmitter<CustomEvent<string>>;
}
export declare class AthSegmentedControl {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthSegmentedControl, "ath-segmented-control", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "hideRequired": { "alias": "hideRequired"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredAriaLabel": { "alias": "requiredAriaLabel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipWidth": { "alias": "tooltipWidth"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthSegmentedControl extends Components.AthSegmentedControl {
    athChangeValue: EventEmitter<CustomEvent<HTMLAthSegmentedControlItemElement>>;
}
export declare class AthSegmentedControlItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthSegmentedControlItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthSegmentedControlItem, "ath-segmented-control-item", never, { "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthSegmentedControlItem extends Components.AthSegmentedControlItem {
    /**
     * Emitted when the segmented control item is focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the segmented control item is selected
     */
    athChange: EventEmitter<CustomEvent<IAthSegmentedControlItemSegmentedControlItemChangeSelect>>;
}
export declare class AthSlider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthSlider, "ath-slider", never, { "counterWidth": { "alias": "counterWidth"; "required": false; }; "detailFirst": { "alias": "detailFirst"; "required": false; }; "detailLast": { "alias": "detailLast"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "feedbackCounter": { "alias": "feedbackCounter"; "required": false; }; "feedbackText": { "alias": "feedbackText"; "required": false; }; "fromAriaLabel": { "alias": "fromAriaLabel"; "required": false; }; "groupAriaLabel": { "alias": "groupAriaLabel"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "labelGroup": { "alias": "labelGroup"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showRequired": { "alias": "showRequired"; "required": false; }; "step": { "alias": "step"; "required": false; }; "stepped": { "alias": "stepped"; "required": false; }; "toAriaLabel": { "alias": "toAriaLabel"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "type": { "alias": "type"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "value": { "alias": "value"; "required": false; }; "valueText": { "alias": "valueText"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthSlider extends Components.AthSlider {
    /**
     * Emitted when the value has changed.
     */
    athChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the slider gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the slider loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthStep {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthStep, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthStep, "ath-step", never, { "actionText": { "alias": "actionText"; "required": false; }; "alignment": { "alias": "alignment"; "required": false; }; "ariaLiveMessage": { "alias": "ariaLiveMessage"; "required": false; }; "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "athId": { "alias": "athId"; "required": false; }; "athRole": { "alias": "athRole"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "collapseLabel": { "alias": "collapseLabel"; "required": false; }; "completedLabel": { "alias": "completedLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "errorLabel": { "alias": "errorLabel"; "required": false; }; "expandLabel": { "alias": "expandLabel"; "required": false; }; "feedback": { "alias": "feedback"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "isCollapsable": { "alias": "isCollapsable"; "required": false; }; "isComplete": { "alias": "isComplete"; "required": false; }; "isExpanded": { "alias": "isExpanded"; "required": false; }; "number": { "alias": "number"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "total": { "alias": "total"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthStep extends Components.AthStep {
    athClick: EventEmitter<CustomEvent<number>>;
}
export declare class AthStepper {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthStepper, "ath-stepper", never, { "ariaLiveMessage": { "alias": "ariaLiveMessage"; "required": false; }; "athAriaLabel": { "alias": "athAriaLabel"; "required": false; }; "athRole": { "alias": "athRole"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "collapseLabel": { "alias": "collapseLabel"; "required": false; }; "completedLabel": { "alias": "completedLabel"; "required": false; }; "errorLabel": { "alias": "errorLabel"; "required": false; }; "expandLabel": { "alias": "expandLabel"; "required": false; }; "headingIcon": { "alias": "headingIcon"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "size": { "alias": "size"; "required": false; }; "startFrom": { "alias": "startFrom"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthStepper extends Components.AthStepper {
    athSelect: EventEmitter<CustomEvent<HTMLAthStepElement>>;
}
export declare class AthSwitch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthSwitch, "ath-switch", never, { "disabled": { "alias": "disabled"; "required": false; }; "name": { "alias": "name"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthSwitch extends Components.AthSwitch {
    /**
     * Event emitted when the switch receives focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the switch loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the switch state changes
     */
    athChange: EventEmitter<CustomEvent<IAthSwitchSwitchChangeDetail>>;
}
export declare class AthTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTab, "ath-tab", never, { "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconAriaLabel": { "alias": "iconAriaLabel"; "required": false; }; "label": { "alias": "label"; "required": false; }; "navigationData": { "alias": "navigationData"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTab extends Components.AthTab {
}
export declare class AthTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTable, "ath-table", never, { "clickable": { "alias": "clickable"; "required": false; }; "color": { "alias": "color"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "noSelectAll": { "alias": "noSelectAll"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "size": { "alias": "size"; "required": false; }; "striped": { "alias": "striped"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTable extends Components.AthTable {
    /**
     * Fired whenever row selection changes
     */
    athSelectionChange: EventEmitter<CustomEvent<IAthTableTableSelectionChangeEvent>>;
    /**
     * Fired when a clickable row is clicked
     */
    athTableClick: EventEmitter<CustomEvent<IAthTableTableClickEvent>>;
}
export declare class AthTableBody {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTableBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTableBody, "ath-table-body", never, {}, {}, never, ["*"], false, never>;
}
export declare interface AthTableBody extends Components.AthTableBody {
}
export declare class AthTableHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTableHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTableHeader, "ath-table-header", never, { "clickable": { "alias": "clickable"; "required": false; }; "color": { "alias": "color"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "noSelectAll": { "alias": "noSelectAll"; "required": false; }; "selectAllState": { "alias": "selectAllState"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "selectedRows": { "alias": "selectedRows"; "required": false; }; "size": { "alias": "size"; "required": false; }; "totalRows": { "alias": "totalRows"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTableHeader extends Components.AthTableHeader {
    /**
     * Fired when select all checkbox state changes
     */
    athSelectAllChange: EventEmitter<CustomEvent<IAthTableHeaderTableSelectAllChangeEvent>>;
}
export declare class AthTableHeaderItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTableHeaderItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTableHeaderItem, "ath-table-header-item", never, { "alignment": { "alias": "alignment"; "required": false; }; "cellWidth": { "alias": "cellWidth"; "required": false; }; "color": { "alias": "color"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "hasInteractivity": { "alias": "hasInteractivity"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTableHeaderItem extends Components.AthTableHeaderItem {
}
export declare class AthTableRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTableRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTableRow, "ath-table-row", never, { "clickable": { "alias": "clickable"; "required": false; }; "clickableAriaLabel": { "alias": "clickableAriaLabel"; "required": false; }; "color": { "alias": "color"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "hasChildren": { "alias": "hasChildren"; "required": false; }; "last": { "alias": "last"; "required": false; }; "parentId": { "alias": "parentId"; "required": false; }; "reserveClickable": { "alias": "reserveClickable"; "required": false; }; "reserveExpander": { "alias": "reserveExpander"; "required": false; }; "rowId": { "alias": "rowId"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "selectionGroupName": { "alias": "selectionGroupName"; "required": false; }; "size": { "alias": "size"; "required": false; }; "striped": { "alias": "striped"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTableRow extends Components.AthTableRow {
    /**
     * Emits when this row selection changes
     */
    athRowSelectionChange: EventEmitter<CustomEvent<IAthTableRowTableRowSelectionChangeEvent>>;
    /**
     * Emits when this clickable row is clicked
     */
    athRowClick: EventEmitter<CustomEvent<IAthTableRowTableRowClickEvent>>;
}
export declare class AthTableRowItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTableRowItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTableRowItem, "ath-table-row-item", never, { "alignment": { "alias": "alignment"; "required": false; }; "cellWidth": { "alias": "cellWidth"; "required": false; }; "color": { "alias": "color"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "expander": { "alias": "expander"; "required": false; }; "expanderAriaControls": { "alias": "expanderAriaControls"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "hasInteractivity": { "alias": "hasInteractivity"; "required": false; }; "isChild": { "alias": "isChild"; "required": false; }; "isHeader": { "alias": "isHeader"; "required": false; }; "noFrozenShadow": { "alias": "noFrozenShadow"; "required": false; }; "size": { "alias": "size"; "required": false; }; "striped": { "alias": "striped"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTableRowItem extends Components.AthTableRowItem {
}
export declare class AthTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTabs, "ath-tabs", never, { "items": { "alias": "items"; "required": false; }; "listAriaLabel": { "alias": "listAriaLabel"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTabs extends Components.AthTabs {
}
export declare class AthTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTag, "ath-tag", never, { "color": { "alias": "color"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTag extends Components.AthTag {
}
export declare class AthText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthText, "ath-text", never, { "color": { "alias": "color"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "content": { "alias": "content"; "required": false; }; "hierarchy": { "alias": "hierarchy"; "required": false; }; "lines": { "alias": "lines"; "required": false; }; "withTooltip": { "alias": "withTooltip"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthText extends Components.AthText {
}
export declare class AthTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTooltip, "ath-tooltip", never, { "color": { "alias": "color"; "required": false; }; "hasArrow": { "alias": "hasArrow"; "required": false; }; "headingText": { "alias": "headingText"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "position": { "alias": "position"; "required": false; }; "trigger": { "alias": "trigger"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTooltip extends Components.AthTooltip {
}
export declare class AthTooltipTrigger {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthTooltipTrigger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthTooltipTrigger, "ath-tooltip-trigger", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthTooltipTrigger extends Components.AthTooltipTrigger {
    /**
     * Emitted when the button is clicked
     */
    athClick: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button gains focus
     */
    athFocus: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the button loses focus
     */
    athBlur: EventEmitter<CustomEvent<void>>;
}
export declare class AthUserDetail {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthUserDetail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthUserDetail, "ath-user-detail", never, { "buttonAriaLabel": { "alias": "buttonAriaLabel"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "description": { "alias": "description"; "required": false; }; "initials": { "alias": "initials"; "required": false; }; "srcImage": { "alias": "srcImage"; "required": false; }; "type": { "alias": "type"; "required": false; }; "userName": { "alias": "userName"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthUserDetail extends Components.AthUserDetail {
    /**
     * Emmitted when button-link is clicked.
     */
    athAction: EventEmitter<CustomEvent<void>>;
}
export declare class AthUserMenu {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AthUserMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AthUserMenu, "ath-user-menu", never, { "initials": { "alias": "initials"; "required": false; }; "open": { "alias": "open"; "required": false; }; "srcImage": { "alias": "srcImage"; "required": false; }; "type": { "alias": "type"; "required": false; }; "userName": { "alias": "userName"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface AthUserMenu extends Components.AthUserMenu {
    /**
     * Emitted when an item is clicked
     */
    athAction: EventEmitter<CustomEvent<{
        item: HTMLAthMenuButtonItemElement;
    }>>;
}
