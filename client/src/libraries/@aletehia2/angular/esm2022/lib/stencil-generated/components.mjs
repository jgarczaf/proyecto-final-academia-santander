import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
let AthAccordion = class AthAccordion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAccordion, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthAccordion, selector: "ath-accordion", inputs: { ariaLabel: "ariaLabel", expand: "expand", noLastItemDivider: "noLastItemDivider" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthAccordion = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'expand', 'noLastItemDivider']
    })
], AthAccordion);
export { AthAccordion };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-accordion',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'expand', 'noLastItemDivider'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthAccordionItem = class AthAccordionItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['opened']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAccordionItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthAccordionItem, selector: "ath-accordion-item", inputs: { description: "description", disabled: "disabled", expanded: "expanded", headingLevel: "headingLevel", headingText: "headingText", icon: "icon", noDivider: "noDivider" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthAccordionItem = __decorate([
    ProxyCmp({
        inputs: ['description', 'disabled', 'expanded', 'headingLevel', 'headingText', 'icon', 'noDivider'],
        methods: ['close']
    })
], AthAccordionItem);
export { AthAccordionItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAccordionItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-accordion-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['description', 'disabled', 'expanded', 'headingLevel', 'headingText', 'icon', 'noDivider'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthActionBar = class AthActionBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthActionBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthActionBar, selector: "ath-action-bar", inputs: { alignment: "alignment", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthActionBar = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'size']
    })
], AthActionBar);
export { AthActionBar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthActionBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-action-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthAlert = class AthAlert {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAlert, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthAlert, selector: "ath-alert", inputs: { closeAriaLabel: "closeAriaLabel", color: "color", description: "description", hasClose: "hasClose", headingLevel: "headingLevel", headingText: "headingText", isUrgent: "isUrgent", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthAlert = __decorate([
    ProxyCmp({
        inputs: ['closeAriaLabel', 'color', 'description', 'hasClose', 'headingLevel', 'headingText', 'isUrgent', 'type']
    })
], AthAlert);
export { AthAlert };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAlert, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-alert',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['closeAriaLabel', 'color', 'description', 'hasClose', 'headingLevel', 'headingText', 'isUrgent', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthAvatar = class AthAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthAvatar, selector: "ath-avatar", inputs: { ariaLabelledby: "ariaLabelledby", avatarName: "avatarName", initials: "initials", size: "size", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthAvatar = __decorate([
    ProxyCmp({
        inputs: ['ariaLabelledby', 'avatarName', 'initials', 'size', 'type']
    })
], AthAvatar);
export { AthAvatar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-avatar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabelledby', 'avatarName', 'initials', 'size', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthBadge = class AthBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthBadge, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthBadge, selector: "ath-badge", inputs: { color: "color", distanceX: "distanceX", distanceY: "distanceY", label: "label", max: "max", position: "position", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthBadge = __decorate([
    ProxyCmp({
        inputs: ['color', 'distanceX', 'distanceY', 'label', 'max', 'position', 'type', 'value']
    })
], AthBadge);
export { AthBadge };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthBadge, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-badge',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'distanceX', 'distanceY', 'label', 'max', 'position', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthBreadcrumb = class AthBreadcrumb {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthBreadcrumb, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthBreadcrumb, selector: "ath-breadcrumb", inputs: { athAriaLabel: "athAriaLabel", collapsed: "collapsed", options: "options", separator: "separator" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthBreadcrumb = __decorate([
    ProxyCmp({
        inputs: ['athAriaLabel', 'collapsed', 'options', 'separator']
    })
], AthBreadcrumb);
export { AthBreadcrumb };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthBreadcrumb, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-breadcrumb',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['athAriaLabel', 'collapsed', 'options', 'separator'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthButton = class AthButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthButton, selector: "ath-button", inputs: { clear: "clear", color: "color", disabled: "disabled", fullWidth: "fullWidth", icon: "icon", iconPosition: "iconPosition", size: "size", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthButton = __decorate([
    ProxyCmp({
        inputs: ['clear', 'color', 'disabled', 'fullWidth', 'icon', 'iconPosition', 'size', 'type'],
        methods: ['setFocus']
    })
], AthButton);
export { AthButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clear', 'color', 'disabled', 'fullWidth', 'icon', 'iconPosition', 'size', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthButtonExpandable = class AthButtonExpandable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athToggleCollapse']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButtonExpandable, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthButtonExpandable, selector: "ath-button-expandable", inputs: { collapseTarget: "collapseTarget", disabled: "disabled", icon: "icon", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthButtonExpandable = __decorate([
    ProxyCmp({
        inputs: ['collapseTarget', 'disabled', 'icon', 'size'],
        methods: ['setFocus']
    })
], AthButtonExpandable);
export { AthButtonExpandable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButtonExpandable, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-button-expandable',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapseTarget', 'disabled', 'icon', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthButtonLink = class AthButtonLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButtonLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthButtonLink, selector: "ath-button-link", inputs: { color: "color", disabled: "disabled", icon: "icon", iconPosition: "iconPosition", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthButtonLink = __decorate([
    ProxyCmp({
        inputs: ['color', 'disabled', 'icon', 'iconPosition', 'size'],
        methods: ['setFocus']
    })
], AthButtonLink);
export { AthButtonLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthButtonLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-button-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'disabled', 'icon', 'iconPosition', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCalendar = class AthCalendar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCalendar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCalendar, selector: "ath-calendar", inputs: { color: "color", disabledDates: "disabledDates", highlightedDates: "highlightedDates", highlightedWeekends: "highlightedWeekends", max: "max", min: "min", selected: "selected", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCalendar = __decorate([
    ProxyCmp({
        inputs: ['color', 'disabledDates', 'highlightedDates', 'highlightedWeekends', 'max', 'min', 'selected', 'type']
    })
], AthCalendar);
export { AthCalendar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCalendar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-calendar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'disabledDates', 'highlightedDates', 'highlightedWeekends', 'max', 'min', 'selected', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCard = class AthCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCard, selector: "ath-card", inputs: { ariaLabelledBy: "ariaLabelledBy", clickable: "clickable", fluid: "fluid", maxWidth: "maxWidth", orientation: "orientation", size: "size", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCard = __decorate([
    ProxyCmp({
        inputs: ['ariaLabelledBy', 'clickable', 'fluid', 'maxWidth', 'orientation', 'size', 'width']
    })
], AthCard);
export { AthCard };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabelledBy', 'clickable', 'fluid', 'maxWidth', 'orientation', 'size', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCardHeader = class AthCardHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCardHeader, selector: "ath-card-header", inputs: { date: "date", headingText: "headingText", overline: "overline", subtitle: "subtitle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCardHeader = __decorate([
    ProxyCmp({
        inputs: ['date', 'headingText', 'overline', 'subtitle']
    })
], AthCardHeader);
export { AthCardHeader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-card-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['date', 'headingText', 'overline', 'subtitle'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCardSelectable = class AthCardSelectable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChange', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardSelectable, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCardSelectable, selector: "ath-card-selectable", inputs: { disabled: "disabled", headingText: "headingText", overline: "overline", selected: "selected", size: "size", subtitle: "subtitle", tag: "tag", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCardSelectable = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'headingText', 'overline', 'selected', 'size', 'subtitle', 'tag', 'type'],
        methods: ['select', 'unselect']
    })
], AthCardSelectable);
export { AthCardSelectable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardSelectable, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-card-selectable',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'headingText', 'overline', 'selected', 'size', 'subtitle', 'tag', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCardSelectableGroup = class AthCardSelectableGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athValueChanged']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardSelectableGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCardSelectableGroup, selector: "ath-card-selectable-group", inputs: { disabled: "disabled", multiple: "multiple", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCardSelectableGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'multiple', 'size']
    })
], AthCardSelectableGroup);
export { AthCardSelectableGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardSelectableGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-card-selectable-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'multiple', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCardThumbnail = class AthCardThumbnail {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardThumbnail, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCardThumbnail, selector: "ath-card-thumbnail", inputs: { bottomTag: "bottomTag", highlightText: "highlightText", topTag: "topTag", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCardThumbnail = __decorate([
    ProxyCmp({
        inputs: ['bottomTag', 'highlightText', 'topTag', 'type'],
        methods: ['updateTypeCard']
    })
], AthCardThumbnail);
export { AthCardThumbnail };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCardThumbnail, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-card-thumbnail',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['bottomTag', 'highlightText', 'topTag', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCheckbox = class AthCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCheckbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCheckbox, selector: "ath-checkbox", inputs: { ariaLabel: "ariaLabel", autofocus: "autofocus", checked: "checked", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideRequired: "hideRequired", indeterminate: "indeterminate", label: "label", name: "name", readonly: "readonly", required: "required", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCheckbox = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'autofocus', 'checked', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'indeterminate', 'label', 'name', 'readonly', 'required', 'value'],
        methods: ['setFocus']
    })
], AthCheckbox);
export { AthCheckbox };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-checkbox',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'autofocus', 'checked', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'indeterminate', 'label', 'name', 'readonly', 'required', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCheckboxGroup = class AthCheckboxGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChecked']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCheckboxGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCheckboxGroup, selector: "ath-checkbox-group", inputs: { disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", label: "label", name: "name", readonly: "readonly", requiredAriaLabel: "requiredAriaLabel", showRequired: "showRequired", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCheckboxGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'feedback', 'feedbackText', 'helperText', 'label', 'name', 'readonly', 'requiredAriaLabel', 'showRequired', 'tooltipText', 'tooltipWidth']
    })
], AthCheckboxGroup);
export { AthCheckboxGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCheckboxGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-checkbox-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'feedback', 'feedbackText', 'helperText', 'label', 'name', 'readonly', 'requiredAriaLabel', 'showRequired', 'tooltipText', 'tooltipWidth'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthChipChoice = class AthChipChoice {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChange', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipChoice, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthChipChoice, selector: "ath-chip-choice", inputs: { disabled: "disabled", icon: "icon", label: "label", name: "name", role: "role", selected: "selected", size: "size", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthChipChoice = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'icon', 'label', 'name', 'role', 'selected', 'size', 'value'],
        methods: ['select', 'unselect']
    })
], AthChipChoice);
export { AthChipChoice };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipChoice, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-chip-choice',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'icon', 'label', 'name', 'role', 'selected', 'size', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthChipChoiceGroup = class AthChipChoiceGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChangeValue']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipChoiceGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthChipChoiceGroup, selector: "ath-chip-choice-group", inputs: { disabled: "disabled", multiple: "multiple", name: "name", size: "size", value: "value", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthChipChoiceGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'multiple', 'name', 'size', 'value', 'width']
    })
], AthChipChoiceGroup);
export { AthChipChoiceGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipChoiceGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-chip-choice-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'multiple', 'name', 'size', 'value', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthChipDismiss = class AthChipDismiss {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athDismiss']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipDismiss, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthChipDismiss, selector: "ath-chip-dismiss", inputs: { disabled: "disabled", headingText: "headingText", icon: "icon", labelDismiss: "labelDismiss", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthChipDismiss = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'headingText', 'icon', 'labelDismiss', 'size']
    })
], AthChipDismiss);
export { AthChipDismiss };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipDismiss, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-chip-dismiss',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'headingText', 'icon', 'labelDismiss', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthChipDismissGroup = class AthChipDismissGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipDismissGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthChipDismissGroup, selector: "ath-chip-dismiss-group", inputs: { disabled: "disabled", size: "size", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthChipDismissGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'size', 'width']
    })
], AthChipDismissGroup);
export { AthChipDismissGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthChipDismissGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-chip-dismiss-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'size', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCollapse = class AthCollapse {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athCollapseState']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCollapse, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCollapse, selector: "ath-collapse", inputs: { show: "show" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCollapse = __decorate([
    ProxyCmp({
        inputs: ['show']
    })
], AthCollapse);
export { AthCollapse };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCollapse, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-collapse',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['show'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthCollapseIcon = class AthCollapseIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCollapseIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthCollapseIcon, selector: "ath-collapse-icon", inputs: { expanded: "expanded" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthCollapseIcon = __decorate([
    ProxyCmp({
        inputs: ['expanded']
    })
], AthCollapseIcon);
export { AthCollapseIcon };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthCollapseIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-collapse-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['expanded'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthDatepicker = class AthDatepicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange', 'athInput']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDatepicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthDatepicker, selector: "ath-datepicker", inputs: { autofocus: "autofocus", color: "color", disabled: "disabled", disabledDates: "disabledDates", feedback: "feedback", feedbackText: "feedbackText", format: "format", helperText: "helperText", hideRequired: "hideRequired", highlightedDates: "highlightedDates", highlightedWeekends: "highlightedWeekends", inputAriaLabel: "inputAriaLabel", label: "label", max: "max", min: "min", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", size: "size", submitOnEnter: "submitOnEnter", tooltipText: "tooltipText", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthDatepicker = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'color', 'disabled', 'disabledDates', 'feedback', 'feedbackText', 'format', 'helperText', 'hideRequired', 'highlightedDates', 'highlightedWeekends', 'inputAriaLabel', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'type', 'value'],
        methods: ['setFocus']
    })
], AthDatepicker);
export { AthDatepicker };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDatepicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-datepicker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autofocus', 'color', 'disabled', 'disabledDates', 'feedback', 'feedbackText', 'format', 'helperText', 'hideRequired', 'highlightedDates', 'highlightedWeekends', 'inputAriaLabel', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthDatepickerRange = class AthDatepickerRange {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDatepickerRange, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthDatepickerRange, selector: "ath-datepicker-range", inputs: { autofocus: "autofocus", color: "color", disabled: "disabled", disabledDates: "disabledDates", feedback: "feedback", feedbackText: "feedbackText", format: "format", helperText: "helperText", hidePanel: "hidePanel", hideRequired: "hideRequired", highlightedDates: "highlightedDates", highlightedWeekends: "highlightedWeekends", inputAriaLabelEnd: "inputAriaLabelEnd", inputAriaLabelStart: "inputAriaLabelStart", label: "label", labelEnd: "labelEnd", labelStart: "labelStart", max: "max", min: "min", name: "name", placeholderEnd: "placeholderEnd", placeholderStart: "placeholderStart", readonly: "readonly", required: "required", requiredEnd: "requiredEnd", requiredStart: "requiredStart", size: "size", submitOnEnter: "submitOnEnter", tooltipText: "tooltipText", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthDatepickerRange = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'color', 'disabled', 'disabledDates', 'feedback', 'feedbackText', 'format', 'helperText', 'hidePanel', 'hideRequired', 'highlightedDates', 'highlightedWeekends', 'inputAriaLabelEnd', 'inputAriaLabelStart', 'label', 'labelEnd', 'labelStart', 'max', 'min', 'name', 'placeholderEnd', 'placeholderStart', 'readonly', 'required', 'requiredEnd', 'requiredStart', 'size', 'submitOnEnter', 'tooltipText', 'type', 'value'],
        methods: ['setFocus', 'setFocusEnd']
    })
], AthDatepickerRange);
export { AthDatepickerRange };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDatepickerRange, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-datepicker-range',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autofocus', 'color', 'disabled', 'disabledDates', 'feedback', 'feedbackText', 'format', 'helperText', 'hidePanel', 'hideRequired', 'highlightedDates', 'highlightedWeekends', 'inputAriaLabelEnd', 'inputAriaLabelStart', 'label', 'labelEnd', 'labelStart', 'max', 'min', 'name', 'placeholderEnd', 'placeholderStart', 'readonly', 'required', 'requiredEnd', 'requiredStart', 'size', 'submitOnEnter', 'tooltipText', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthDivider = class AthDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDivider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthDivider, selector: "ath-divider", inputs: { color: "color", orientation: "orientation", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthDivider = __decorate([
    ProxyCmp({
        inputs: ['color', 'orientation', 'size']
    })
], AthDivider);
export { AthDivider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDivider, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-divider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'orientation', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthDropdown = class AthDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChange', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthDropdown, selector: "ath-dropdown", inputs: { announceResultText: "announceResultText", disabled: "disabled", dropdownAriaLabel: "dropdownAriaLabel", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideRequired: "hideRequired", label: "label", multiselect: "multiselect", name: "name", nochipsText: "nochipsText", noresultText: "noresultText", open: "open", overlayMaxHeight: "overlayMaxHeight", placeholder: "placeholder", readonly: "readonly", required: "required", search: "search", searchAriaLabel: "searchAriaLabel", searchPlaceholder: "searchPlaceholder", showChips: "showChips", size: "size", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", value: "value", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthDropdown = __decorate([
    ProxyCmp({
        inputs: ['announceResultText', 'disabled', 'dropdownAriaLabel', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'label', 'multiselect', 'name', 'nochipsText', 'noresultText', 'open', 'overlayMaxHeight', 'placeholder', 'readonly', 'required', 'search', 'searchAriaLabel', 'searchPlaceholder', 'showChips', 'size', 'tooltipText', 'tooltipWidth', 'value', 'width']
    })
], AthDropdown);
export { AthDropdown };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-dropdown',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['announceResultText', 'disabled', 'dropdownAriaLabel', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'label', 'multiselect', 'name', 'nochipsText', 'noresultText', 'open', 'overlayMaxHeight', 'placeholder', 'readonly', 'required', 'search', 'searchAriaLabel', 'searchPlaceholder', 'showChips', 'size', 'tooltipText', 'tooltipWidth', 'value', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthDropdownOption = class AthDropdownOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['optSelected']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDropdownOption, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthDropdownOption, selector: "ath-dropdown-option", inputs: { disabled: "disabled", icon: "icon", name: "name", optionGroup: "optionGroup", selected: "selected", selectedAriaLabel: "selectedAriaLabel", text: "text", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthDropdownOption = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'icon', 'name', 'optionGroup', 'selected', 'selectedAriaLabel', 'text', 'value'],
        methods: ['updateMultiselect', 'updateGroupOption', 'activeDropdownOption', 'noActiveDropdownOption', 'filterNotFound', 'setSelected', 'filterFound', 'selectOption', 'unselectOption']
    })
], AthDropdownOption);
export { AthDropdownOption };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthDropdownOption, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-dropdown-option',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'icon', 'name', 'optionGroup', 'selected', 'selectedAriaLabel', 'text', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthEmptyState = class AthEmptyState {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthEmptyState, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthEmptyState, selector: "ath-empty-state", inputs: { description: "description", headingLevel: "headingLevel", headingSize: "headingSize", headingText: "headingText", hideImage: "hideImage", loadingLabel: "loadingLabel", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthEmptyState = __decorate([
    ProxyCmp({
        inputs: ['description', 'headingLevel', 'headingSize', 'headingText', 'hideImage', 'loadingLabel', 'type']
    })
], AthEmptyState);
export { AthEmptyState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthEmptyState, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-empty-state',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['description', 'headingLevel', 'headingSize', 'headingText', 'hideImage', 'loadingLabel', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthIcon = class AthIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthIcon, selector: "ath-icon", inputs: { ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby", color: "color", icon: "icon", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthIcon = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'ariaLabelledby', 'color', 'icon', 'size']
    })
], AthIcon);
export { AthIcon };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'ariaLabelledby', 'color', 'icon', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthInputCounter = class AthInputCounter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange', 'athInput']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputCounter, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthInputCounter, selector: "ath-input-counter", inputs: { disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideControls: "hideControls", hideRequired: "hideRequired", inputAriaLabel: "inputAriaLabel", label: "label", max: "max", min: "min", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", size: "size", step: "step", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", unit: "unit", unitAriaLabel: "unitAriaLabel", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthInputCounter = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'feedback', 'feedbackText', 'helperText', 'hideControls', 'hideRequired', 'inputAriaLabel', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'step', 'tooltipText', 'tooltipWidth', 'unit', 'unitAriaLabel', 'value']
    })
], AthInputCounter);
export { AthInputCounter };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputCounter, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-input-counter',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'feedback', 'feedbackText', 'helperText', 'hideControls', 'hideRequired', 'inputAriaLabel', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'step', 'tooltipText', 'tooltipWidth', 'unit', 'unitAriaLabel', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthInputPassword = class AthInputPassword {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange', 'athClear', 'athInput']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputPassword, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthInputPassword, selector: "ath-input-password", inputs: { autocomplete: "autocomplete", autofocus: "autofocus", counter: "counter", counterLabel: "counterLabel", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideRequired: "hideRequired", inputAriaLabel: "inputAriaLabel", inputTabindex: "inputTabindex", label: "label", labelHidePassword: "labelHidePassword", labelShowPassword: "labelShowPassword", maxlength: "maxlength", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", size: "size", submitOnEnter: "submitOnEnter", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthInputPassword = __decorate([
    ProxyCmp({
        inputs: ['autocomplete', 'autofocus', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'inputAriaLabel', 'inputTabindex', 'label', 'labelHidePassword', 'labelShowPassword', 'maxlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'tooltipWidth', 'value'],
        methods: ['setFocus']
    })
], AthInputPassword);
export { AthInputPassword };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputPassword, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-input-password',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autocomplete', 'autofocus', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'inputAriaLabel', 'inputTabindex', 'label', 'labelHidePassword', 'labelShowPassword', 'maxlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'tooltipWidth', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthInputText = class AthInputText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange', 'athClear', 'athInput']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputText, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthInputText, selector: "ath-input-text", inputs: { autocomplete: "autocomplete", autofocus: "autofocus", clearButtonAriaLabel: "clearButtonAriaLabel", counter: "counter", counterLabel: "counterLabel", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", hasClear: "hasClear", helperText: "helperText", hideRequired: "hideRequired", icon: "icon", iconPosition: "iconPosition", inputAriaLabel: "inputAriaLabel", inputTabindex: "inputTabindex", label: "label", maxlength: "maxlength", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", size: "size", submitOnEnter: "submitOnEnter", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthInputText = __decorate([
    ProxyCmp({
        inputs: ['autocomplete', 'autofocus', 'clearButtonAriaLabel', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'hasClear', 'helperText', 'hideRequired', 'icon', 'iconPosition', 'inputAriaLabel', 'inputTabindex', 'label', 'maxlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'tooltipWidth', 'type', 'value'],
        methods: ['setFocus']
    })
], AthInputText);
export { AthInputText };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputText, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-input-text',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autocomplete', 'autofocus', 'clearButtonAriaLabel', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'hasClear', 'helperText', 'hideRequired', 'icon', 'iconPosition', 'inputAriaLabel', 'inputTabindex', 'label', 'maxlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'submitOnEnter', 'tooltipText', 'tooltipWidth', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthInputTextarea = class AthInputTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange', 'athInput']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputTextarea, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthInputTextarea, selector: "ath-input-textarea", inputs: { autocomplete: "autocomplete", autofocus: "autofocus", counter: "counter", counterLabel: "counterLabel", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideRequired: "hideRequired", inputAriaLabel: "inputAriaLabel", inputTabindex: "inputTabindex", label: "label", maxlength: "maxlength", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", rows: "rows", size: "size", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", value: "value", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthInputTextarea = __decorate([
    ProxyCmp({
        inputs: ['autocomplete', 'autofocus', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'inputAriaLabel', 'inputTabindex', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'tooltipText', 'tooltipWidth', 'value', 'width'],
        methods: ['setFocus']
    })
], AthInputTextarea);
export { AthInputTextarea };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthInputTextarea, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-input-textarea',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autocomplete', 'autofocus', 'counter', 'counterLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'inputAriaLabel', 'inputTabindex', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'tooltipText', 'tooltipWidth', 'value', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthLink = class AthLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthLink, selector: "ath-link", inputs: { ariaDescribedby: "ariaDescribedby", ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby", disabled: "disabled", externalLabel: "externalLabel", icon: "icon", iconAriaLabel: "iconAriaLabel", linkHref: "linkHref", linkTarget: "linkTarget", size: "size", underline: "underline" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthLink = __decorate([
    ProxyCmp({
        inputs: ['ariaDescribedby', 'ariaLabel', 'ariaLabelledby', 'disabled', 'externalLabel', 'icon', 'iconAriaLabel', 'linkHref', 'linkTarget', 'size', 'underline']
    })
], AthLink);
export { AthLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaDescribedby', 'ariaLabel', 'ariaLabelledby', 'disabled', 'externalLabel', 'icon', 'iconAriaLabel', 'linkHref', 'linkTarget', 'size', 'underline'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthList = class AthList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthList, selector: "ath-list", inputs: { clickable: "clickable", disabled: "disabled", hasDivider: "hasDivider", orientation: "orientation", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthList = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'disabled', 'hasDivider', 'orientation', 'size']
    })
], AthList);
export { AthList };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthList, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'disabled', 'hasDivider', 'orientation', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthListItem = class AthListItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthListItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthListItem, selector: "ath-list-item", inputs: { athAriaLabel: "athAriaLabel", clickable: "clickable", description: "description", disabled: "disabled", externalLabel: "externalLabel", hasDivider: "hasDivider", headingLevel: "headingLevel", headingText: "headingText", href: "href", orientation: "orientation", rel: "rel", size: "size", subtitle: "subtitle", target: "target", tooltip: "tooltip", tooltipMaxWidth: "tooltipMaxWidth" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthListItem = __decorate([
    ProxyCmp({
        inputs: ['athAriaLabel', 'clickable', 'description', 'disabled', 'externalLabel', 'hasDivider', 'headingLevel', 'headingText', 'href', 'orientation', 'rel', 'size', 'subtitle', 'target', 'tooltip', 'tooltipMaxWidth']
    })
], AthListItem);
export { AthListItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-list-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['athAriaLabel', 'clickable', 'description', 'disabled', 'externalLabel', 'hasDivider', 'headingLevel', 'headingText', 'href', 'orientation', 'rel', 'size', 'subtitle', 'target', 'tooltip', 'tooltipMaxWidth'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuButton = class AthMenuButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athAction']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuButton, selector: "ath-menu-button", inputs: { alignment: "alignment", athAriaLabel: "athAriaLabel", autofocus: "autofocus", clear: "clear", color: "color", disabled: "disabled", icon: "icon", open: "open", overlayMaxHeight: "overlayMaxHeight", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuButton = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'athAriaLabel', 'autofocus', 'clear', 'color', 'disabled', 'icon', 'open', 'overlayMaxHeight', 'size']
    })
], AthMenuButton);
export { AthMenuButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'athAriaLabel', 'autofocus', 'clear', 'color', 'disabled', 'icon', 'open', 'overlayMaxHeight', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuButtonItem = class AthMenuButtonItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelected']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuButtonItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuButtonItem, selector: "ath-menu-button-item", inputs: { disabled: "disabled", groupName: "groupName", icon: "icon", itemTabIndex: "itemTabIndex", name: "name", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuButtonItem = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'groupName', 'icon', 'itemTabIndex', 'name', 'text']
    })
], AthMenuButtonItem);
export { AthMenuButtonItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuButtonItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-button-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'groupName', 'icon', 'itemTabIndex', 'name', 'text'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuHorizontal = class AthMenuHorizontal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelected']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuHorizontal, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuHorizontal, selector: "ath-menu-horizontal", inputs: { athAriaLabel: "athAriaLabel", hasDivider: "hasDivider", items: "items" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuHorizontal = __decorate([
    ProxyCmp({
        inputs: ['athAriaLabel', 'hasDivider', 'items']
    })
], AthMenuHorizontal);
export { AthMenuHorizontal };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuHorizontal, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-horizontal',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['athAriaLabel', 'hasDivider', 'items'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuHorizontalItem = class AthMenuHorizontalItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuHorizontalItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuHorizontalItem, selector: "ath-menu-horizontal-item", inputs: { badgeLabel: "badgeLabel", badgeMax: "badgeMax", badgeValue: "badgeValue", disabled: "disabled", externalLabel: "externalLabel", href: "href", label: "label", rel: "rel", selected: "selected", target: "target", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuHorizontalItem = __decorate([
    ProxyCmp({
        inputs: ['badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'externalLabel', 'href', 'label', 'rel', 'selected', 'target', 'value']
    })
], AthMenuHorizontalItem);
export { AthMenuHorizontalItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuHorizontalItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-horizontal-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'externalLabel', 'href', 'label', 'rel', 'selected', 'target', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuLateral = class AthMenuLateral {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelected']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateral, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuLateral, selector: "ath-menu-lateral", inputs: { items: "items" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuLateral = __decorate([
    ProxyCmp({
        inputs: ['items']
    })
], AthMenuLateral);
export { AthMenuLateral };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateral, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-lateral',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['items'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuLateralItemAction = class AthMenuLateralItemAction {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateralItemAction, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuLateralItemAction, selector: "ath-menu-lateral-item-action", inputs: { ariaLabel: "ariaLabel", badgeLabel: "badgeLabel", badgeMax: "badgeMax", badgeValue: "badgeValue", disabled: "disabled", icon: "icon", name: "name", selected: "selected", tooltipText: "tooltipText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuLateralItemAction = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'icon', 'name', 'selected', 'tooltipText']
    })
], AthMenuLateralItemAction);
export { AthMenuLateralItemAction };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateralItemAction, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-lateral-item-action',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'icon', 'name', 'selected', 'tooltipText'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuLateralItemLink = class AthMenuLateralItemLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateralItemLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuLateralItemLink, selector: "ath-menu-lateral-item-link", inputs: { ariaLabel: "ariaLabel", badgeLabel: "badgeLabel", badgeMax: "badgeMax", badgeValue: "badgeValue", disabled: "disabled", externalLabel: "externalLabel", href: "href", icon: "icon", name: "name", rel: "rel", selected: "selected", target: "target", tooltipText: "tooltipText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuLateralItemLink = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'externalLabel', 'href', 'icon', 'name', 'rel', 'selected', 'target', 'tooltipText']
    })
], AthMenuLateralItemLink);
export { AthMenuLateralItemLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuLateralItemLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-lateral-item-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'badgeLabel', 'badgeMax', 'badgeValue', 'disabled', 'externalLabel', 'href', 'icon', 'name', 'rel', 'selected', 'target', 'tooltipText'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuVertical = class AthMenuVertical {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelected']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVertical, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuVertical, selector: "ath-menu-vertical", inputs: { appearance: "appearance" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuVertical = __decorate([
    ProxyCmp({
        inputs: ['appearance']
    })
], AthMenuVertical);
export { AthMenuVertical };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVertical, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-vertical',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuVerticalItemAction = class AthMenuVerticalItemAction {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVerticalItemAction, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuVerticalItemAction, selector: "ath-menu-vertical-item-action", inputs: { disabled: "disabled", icon: "icon", open: "open", selected: "selected", text: "text", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuVerticalItemAction = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'icon', 'open', 'selected', 'text', 'value']
    })
], AthMenuVerticalItemAction);
export { AthMenuVerticalItemAction };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVerticalItemAction, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-vertical-item-action',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'icon', 'open', 'selected', 'text', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthMenuVerticalItemLink = class AthMenuVerticalItemLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVerticalItemLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthMenuVerticalItemLink, selector: "ath-menu-vertical-item-link", inputs: { disabled: "disabled", externalLabel: "externalLabel", href: "href", icon: "icon", rel: "rel", selected: "selected", target: "target", text: "text", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthMenuVerticalItemLink = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'externalLabel', 'href', 'icon', 'rel', 'selected', 'target', 'text', 'value']
    })
], AthMenuVerticalItemLink);
export { AthMenuVerticalItemLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthMenuVerticalItemLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-menu-vertical-item-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'externalLabel', 'href', 'icon', 'rel', 'selected', 'target', 'text', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthModal = class AthModal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athOpened', 'athClosed']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthModal, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthModal, selector: "ath-modal", inputs: { appearance: "appearance", autofocus: "autofocus", clickOutsideClose: "clickOutsideClose", closeAriaLabel: "closeAriaLabel", fullScreen: "fullScreen", hasClose: "hasClose", hasDivider: "hasDivider", headingLevel: "headingLevel", headingText: "headingText", isAlert: "isAlert", maxHeight: "maxHeight", maxWidth: "maxWidth", open: "open", size: "size", subtitleText: "subtitleText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthModal = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'autofocus', 'clickOutsideClose', 'closeAriaLabel', 'fullScreen', 'hasClose', 'hasDivider', 'headingLevel', 'headingText', 'isAlert', 'maxHeight', 'maxWidth', 'open', 'size', 'subtitleText'],
        methods: ['openModal', 'closeModal']
    })
], AthModal);
export { AthModal };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthModal, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-modal',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'autofocus', 'clickOutsideClose', 'closeAriaLabel', 'fullScreen', 'hasClose', 'hasDivider', 'headingLevel', 'headingText', 'isAlert', 'maxHeight', 'maxWidth', 'open', 'size', 'subtitleText'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthPagination = class AthPagination {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athPaginate', 'athItemsPerPageChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPagination, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthPagination, selector: "ath-pagination", inputs: { athAriaLabel: "athAriaLabel", currentPage: "currentPage", disabled: "disabled", itemsPerPage: "itemsPerPage", itemsSelector: "itemsSelector", noEndButtons: "noEndButtons", noItemsCount: "noItemsCount", noItemsSelector: "noItemsSelector", noJumpButtons: "noJumpButtons", totalItems: "totalItems" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthPagination = __decorate([
    ProxyCmp({
        inputs: ['athAriaLabel', 'currentPage', 'disabled', 'itemsPerPage', 'itemsSelector', 'noEndButtons', 'noItemsCount', 'noItemsSelector', 'noJumpButtons', 'totalItems']
    })
], AthPagination);
export { AthPagination };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPagination, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-pagination',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['athAriaLabel', 'currentPage', 'disabled', 'itemsPerPage', 'itemsSelector', 'noEndButtons', 'noItemsCount', 'noItemsSelector', 'noJumpButtons', 'totalItems'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthPanel = class AthPanel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthPanel, selector: "ath-panel", inputs: { focusable: "focusable", label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthPanel = __decorate([
    ProxyCmp({
        inputs: ['focusable', 'label']
    })
], AthPanel);
export { AthPanel };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-panel',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['focusable', 'label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthPictogram = class AthPictogram {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPictogram, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthPictogram, selector: "ath-pictogram", inputs: { ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby", name: "name", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthPictogram = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'ariaLabelledby', 'name', 'size']
    })
], AthPictogram);
export { AthPictogram };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthPictogram, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-pictogram',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'ariaLabelledby', 'name', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthProgressBar = class AthProgressBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthProgressBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthProgressBar, selector: "ath-progress-bar", inputs: { athAriaLabel: "athAriaLabel", infinite: "infinite", labelAlignment: "labelAlignment", labelLeft: "labelLeft", labelRight: "labelRight", max: "max", min: "min", value: "value", valueText: "valueText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthProgressBar = __decorate([
    ProxyCmp({
        inputs: ['athAriaLabel', 'infinite', 'labelAlignment', 'labelLeft', 'labelRight', 'max', 'min', 'value', 'valueText']
    })
], AthProgressBar);
export { AthProgressBar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthProgressBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-progress-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['athAriaLabel', 'infinite', 'labelAlignment', 'labelLeft', 'labelRight', 'max', 'min', 'value', 'valueText'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthRadioButton = class AthRadioButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthRadioButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthRadioButton, selector: "ath-radio-button", inputs: { ariaLabel: "ariaLabel", checked: "checked", disabled: "disabled", label: "label", name: "name", readonly: "readonly", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthRadioButton = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'checked', 'disabled', 'label', 'name', 'readonly', 'value'],
        methods: ['unCheck', 'setFocus', 'setTabindex']
    })
], AthRadioButton);
export { AthRadioButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthRadioButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-radio-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'checked', 'disabled', 'label', 'name', 'readonly', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthRadioButtonGroup = class AthRadioButtonGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChangeValue']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthRadioButtonGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthRadioButtonGroup, selector: "ath-radio-button-group", inputs: { ariaLabel: "ariaLabel", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", label: "label", name: "name", orientation: "orientation", readonly: "readonly", requiredAriaLabel: "requiredAriaLabel", showRequired: "showRequired", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthRadioButtonGroup = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'label', 'name', 'orientation', 'readonly', 'requiredAriaLabel', 'showRequired', 'tooltipText', 'tooltipWidth', 'value']
    })
], AthRadioButtonGroup);
export { AthRadioButtonGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthRadioButtonGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-radio-button-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'disabled', 'feedback', 'feedbackText', 'helperText', 'label', 'name', 'orientation', 'readonly', 'requiredAriaLabel', 'showRequired', 'tooltipText', 'tooltipWidth', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthSectionTitle = class AthSectionTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athToggleCollapse']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSectionTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthSectionTitle, selector: "ath-section-title", inputs: { collapsable: "collapsable", collapseTarget: "collapseTarget", color: "color", headingLevel: "headingLevel", headingOverline: "headingOverline", headingSize: "headingSize", headingText: "headingText", icon: "icon", overline: "overline", pictogram: "pictogram", tooltip: "tooltip", tooltipLabel: "tooltipLabel", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthSectionTitle = __decorate([
    ProxyCmp({
        inputs: ['collapsable', 'collapseTarget', 'color', 'headingLevel', 'headingOverline', 'headingSize', 'headingText', 'icon', 'overline', 'pictogram', 'tooltip', 'tooltipLabel', 'type']
    })
], AthSectionTitle);
export { AthSectionTitle };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSectionTitle, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-section-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsable', 'collapseTarget', 'color', 'headingLevel', 'headingOverline', 'headingSize', 'headingText', 'icon', 'overline', 'pictogram', 'tooltip', 'tooltipLabel', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthSegmentedControl = class AthSegmentedControl {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChangeValue']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSegmentedControl, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthSegmentedControl, selector: "ath-segmented-control", inputs: { ariaLabel: "ariaLabel", color: "color", disabled: "disabled", feedback: "feedback", feedbackText: "feedbackText", helperText: "helperText", hideRequired: "hideRequired", label: "label", name: "name", required: "required", requiredAriaLabel: "requiredAriaLabel", size: "size", tooltipText: "tooltipText", tooltipWidth: "tooltipWidth", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthSegmentedControl = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'color', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'label', 'name', 'required', 'requiredAriaLabel', 'size', 'tooltipText', 'tooltipWidth', 'type', 'value']
    })
], AthSegmentedControl);
export { AthSegmentedControl };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSegmentedControl, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-segmented-control',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'color', 'disabled', 'feedback', 'feedbackText', 'helperText', 'hideRequired', 'label', 'name', 'required', 'requiredAriaLabel', 'size', 'tooltipText', 'tooltipWidth', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthSegmentedControlItem = class AthSegmentedControlItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSegmentedControlItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthSegmentedControlItem, selector: "ath-segmented-control-item", inputs: { color: "color", disabled: "disabled", icon: "icon", iconPosition: "iconPosition", selected: "selected", size: "size", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthSegmentedControlItem = __decorate([
    ProxyCmp({
        inputs: ['color', 'disabled', 'icon', 'iconPosition', 'selected', 'size', 'type', 'value'],
        methods: ['unSelectItem', 'setFocus', 'setTabindex']
    })
], AthSegmentedControlItem);
export { AthSegmentedControlItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSegmentedControlItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-segmented-control-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'disabled', 'icon', 'iconPosition', 'selected', 'size', 'type', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthSlider = class AthSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athChange', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthSlider, selector: "ath-slider", inputs: { counterWidth: "counterWidth", detailFirst: "detailFirst", detailLast: "detailLast", disabled: "disabled", feedback: "feedback", feedbackCounter: "feedbackCounter", feedbackText: "feedbackText", fromAriaLabel: "fromAriaLabel", groupAriaLabel: "groupAriaLabel", helperText: "helperText", labelGroup: "labelGroup", max: "max", min: "min", name: "name", readonly: "readonly", required: "required", showRequired: "showRequired", step: "step", stepped: "stepped", toAriaLabel: "toAriaLabel", tooltipText: "tooltipText", type: "type", unit: "unit", value: "value", valueText: "valueText", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthSlider = __decorate([
    ProxyCmp({
        inputs: ['counterWidth', 'detailFirst', 'detailLast', 'disabled', 'feedback', 'feedbackCounter', 'feedbackText', 'fromAriaLabel', 'groupAriaLabel', 'helperText', 'labelGroup', 'max', 'min', 'name', 'readonly', 'required', 'showRequired', 'step', 'stepped', 'toAriaLabel', 'tooltipText', 'type', 'unit', 'value', 'valueText', 'width']
    })
], AthSlider);
export { AthSlider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['counterWidth', 'detailFirst', 'detailLast', 'disabled', 'feedback', 'feedbackCounter', 'feedbackText', 'fromAriaLabel', 'groupAriaLabel', 'helperText', 'labelGroup', 'max', 'min', 'name', 'readonly', 'required', 'showRequired', 'step', 'stepped', 'toAriaLabel', 'tooltipText', 'type', 'unit', 'value', 'valueText', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthStep = class AthStep {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthStep, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthStep, selector: "ath-step", inputs: { actionText: "actionText", alignment: "alignment", ariaLiveMessage: "ariaLiveMessage", athAriaLabel: "athAriaLabel", athId: "athId", athRole: "athRole", clickable: "clickable", collapseLabel: "collapseLabel", completedLabel: "completedLabel", disabled: "disabled", errorLabel: "errorLabel", expandLabel: "expandLabel", feedback: "feedback", headingText: "headingText", isCollapsable: "isCollapsable", isComplete: "isComplete", isExpanded: "isExpanded", number: "number", readonly: "readonly", selected: "selected", size: "size", total: "total" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthStep = __decorate([
    ProxyCmp({
        inputs: ['actionText', 'alignment', 'ariaLiveMessage', 'athAriaLabel', 'athId', 'athRole', 'clickable', 'collapseLabel', 'completedLabel', 'disabled', 'errorLabel', 'expandLabel', 'feedback', 'headingText', 'isCollapsable', 'isComplete', 'isExpanded', 'number', 'readonly', 'selected', 'size', 'total']
    })
], AthStep);
export { AthStep };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthStep, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-step',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['actionText', 'alignment', 'ariaLiveMessage', 'athAriaLabel', 'athId', 'athRole', 'clickable', 'collapseLabel', 'completedLabel', 'disabled', 'errorLabel', 'expandLabel', 'feedback', 'headingText', 'isCollapsable', 'isComplete', 'isExpanded', 'number', 'readonly', 'selected', 'size', 'total'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthStepper = class AthStepper {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelect']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthStepper, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthStepper, selector: "ath-stepper", inputs: { ariaLiveMessage: "ariaLiveMessage", athAriaLabel: "athAriaLabel", athRole: "athRole", clickable: "clickable", collapseLabel: "collapseLabel", completedLabel: "completedLabel", errorLabel: "errorLabel", expandLabel: "expandLabel", headingIcon: "headingIcon", headingText: "headingText", orientation: "orientation", readonly: "readonly", size: "size", startFrom: "startFrom" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthStepper = __decorate([
    ProxyCmp({
        inputs: ['ariaLiveMessage', 'athAriaLabel', 'athRole', 'clickable', 'collapseLabel', 'completedLabel', 'errorLabel', 'expandLabel', 'headingIcon', 'headingText', 'orientation', 'readonly', 'size', 'startFrom']
    })
], AthStepper);
export { AthStepper };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthStepper, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-stepper',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLiveMessage', 'athAriaLabel', 'athRole', 'clickable', 'collapseLabel', 'completedLabel', 'errorLabel', 'expandLabel', 'headingIcon', 'headingText', 'orientation', 'readonly', 'size', 'startFrom'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthSwitch = class AthSwitch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athFocus', 'athBlur', 'athChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSwitch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthSwitch, selector: "ath-switch", inputs: { disabled: "disabled", name: "name", readonly: "readonly", selected: "selected" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthSwitch = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'name', 'readonly', 'selected'],
        methods: ['setFocus']
    })
], AthSwitch);
export { AthSwitch };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-switch',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'name', 'readonly', 'selected'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTab = class AthTab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTab, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTab, selector: "ath-tab", inputs: { disabled: "disabled", icon: "icon", iconAriaLabel: "iconAriaLabel", label: "label", navigationData: "navigationData", selected: "selected" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTab = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'icon', 'iconAriaLabel', 'label', 'navigationData', 'selected']
    })
], AthTab);
export { AthTab };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTab, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-tab',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'icon', 'iconAriaLabel', 'label', 'navigationData', 'selected'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTable = class AthTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelectionChange', 'athTableClick']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTable, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTable, selector: "ath-table", inputs: { clickable: "clickable", color: "color", frozen: "frozen", noSelectAll: "noSelectAll", selectable: "selectable", size: "size", striped: "striped" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTable = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'color', 'frozen', 'noSelectAll', 'selectable', 'size', 'striped'],
        methods: ['refresh']
    })
], AthTable);
export { AthTable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'color', 'frozen', 'noSelectAll', 'selectable', 'size', 'striped'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTableBody = class AthTableBody {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableBody, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTableBody, selector: "ath-table-body", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTableBody = __decorate([
    ProxyCmp({})
], AthTableBody);
export { AthTableBody };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableBody, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table-body',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTableHeader = class AthTableHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athSelectAllChange']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTableHeader, selector: "ath-table-header", inputs: { clickable: "clickable", color: "color", frozen: "frozen", noSelectAll: "noSelectAll", selectAllState: "selectAllState", selectable: "selectable", selectedRows: "selectedRows", size: "size", totalRows: "totalRows" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTableHeader = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'color', 'frozen', 'noSelectAll', 'selectAllState', 'selectable', 'selectedRows', 'size', 'totalRows']
    })
], AthTableHeader);
export { AthTableHeader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'color', 'frozen', 'noSelectAll', 'selectAllState', 'selectable', 'selectedRows', 'size', 'totalRows'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTableHeaderItem = class AthTableHeaderItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableHeaderItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTableHeaderItem, selector: "ath-table-header-item", inputs: { alignment: "alignment", cellWidth: "cellWidth", color: "color", frozen: "frozen", hasInteractivity: "hasInteractivity", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTableHeaderItem = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'cellWidth', 'color', 'frozen', 'hasInteractivity', 'size']
    })
], AthTableHeaderItem);
export { AthTableHeaderItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableHeaderItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table-header-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'cellWidth', 'color', 'frozen', 'hasInteractivity', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTableRow = class AthTableRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athRowSelectionChange', 'athRowClick']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableRow, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTableRow, selector: "ath-table-row", inputs: { clickable: "clickable", clickableAriaLabel: "clickableAriaLabel", color: "color", expanded: "expanded", frozen: "frozen", hasChildren: "hasChildren", last: "last", parentId: "parentId", reserveClickable: "reserveClickable", reserveExpander: "reserveExpander", rowId: "rowId", selectable: "selectable", selected: "selected", selectionGroupName: "selectionGroupName", size: "size", striped: "striped", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTableRow = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'clickableAriaLabel', 'color', 'expanded', 'frozen', 'hasChildren', 'last', 'parentId', 'reserveClickable', 'reserveExpander', 'rowId', 'selectable', 'selected', 'selectionGroupName', 'size', 'striped', 'value']
    })
], AthTableRow);
export { AthTableRow };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table-row',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'clickableAriaLabel', 'color', 'expanded', 'frozen', 'hasChildren', 'last', 'parentId', 'reserveClickable', 'reserveExpander', 'rowId', 'selectable', 'selected', 'selectionGroupName', 'size', 'striped', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTableRowItem = class AthTableRowItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableRowItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTableRowItem, selector: "ath-table-row-item", inputs: { alignment: "alignment", cellWidth: "cellWidth", color: "color", expanded: "expanded", expander: "expander", expanderAriaControls: "expanderAriaControls", frozen: "frozen", hasInteractivity: "hasInteractivity", isChild: "isChild", isHeader: "isHeader", noFrozenShadow: "noFrozenShadow", size: "size", striped: "striped" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTableRowItem = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'cellWidth', 'color', 'expanded', 'expander', 'expanderAriaControls', 'frozen', 'hasInteractivity', 'isChild', 'isHeader', 'noFrozenShadow', 'size', 'striped']
    })
], AthTableRowItem);
export { AthTableRowItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTableRowItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-table-row-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'cellWidth', 'color', 'expanded', 'expander', 'expanderAriaControls', 'frozen', 'hasInteractivity', 'isChild', 'isHeader', 'noFrozenShadow', 'size', 'striped'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTabs = class AthTabs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTabs, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTabs, selector: "ath-tabs", inputs: { items: "items", listAriaLabel: "listAriaLabel", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTabs = __decorate([
    ProxyCmp({
        inputs: ['items', 'listAriaLabel', 'type']
    })
], AthTabs);
export { AthTabs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-tabs',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['items', 'listAriaLabel', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTag = class AthTag {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTag, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTag, selector: "ath-tag", inputs: { color: "color", headingText: "headingText", icon: "icon", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTag = __decorate([
    ProxyCmp({
        inputs: ['color', 'headingText', 'icon', 'size']
    })
], AthTag);
export { AthTag };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTag, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-tag',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'headingText', 'icon', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthText = class AthText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthText, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthText, selector: "ath-text", inputs: { color: "color", columns: "columns", content: "content", hierarchy: "hierarchy", lines: "lines", withTooltip: "withTooltip" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthText = __decorate([
    ProxyCmp({
        inputs: ['color', 'columns', 'content', 'hierarchy', 'lines', 'withTooltip']
    })
], AthText);
export { AthText };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthText, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-text',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'columns', 'content', 'hierarchy', 'lines', 'withTooltip'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTooltip = class AthTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTooltip, selector: "ath-tooltip", inputs: { color: "color", hasArrow: "hasArrow", headingText: "headingText", maxWidth: "maxWidth", position: "position", trigger: "trigger" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTooltip = __decorate([
    ProxyCmp({
        inputs: ['color', 'hasArrow', 'headingText', 'maxWidth', 'position', 'trigger']
    })
], AthTooltip);
export { AthTooltip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'hasArrow', 'headingText', 'maxWidth', 'position', 'trigger'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthTooltipTrigger = class AthTooltipTrigger {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athClick', 'athFocus', 'athBlur']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTooltipTrigger, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthTooltipTrigger, selector: "ath-tooltip-trigger", inputs: { ariaLabel: "ariaLabel", icon: "icon", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthTooltipTrigger = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel', 'icon', 'size']
    })
], AthTooltipTrigger);
export { AthTooltipTrigger };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthTooltipTrigger, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-tooltip-trigger',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel', 'icon', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthUserDetail = class AthUserDetail {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athAction']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthUserDetail, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthUserDetail, selector: "ath-user-detail", inputs: { buttonAriaLabel: "buttonAriaLabel", clickable: "clickable", description: "description", initials: "initials", srcImage: "srcImage", type: "type", userName: "userName" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthUserDetail = __decorate([
    ProxyCmp({
        inputs: ['buttonAriaLabel', 'clickable', 'description', 'initials', 'srcImage', 'type', 'userName']
    })
], AthUserDetail);
export { AthUserDetail };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthUserDetail, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-user-detail',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['buttonAriaLabel', 'clickable', 'description', 'initials', 'srcImage', 'type', 'userName'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let AthUserMenu = class AthUserMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['athAction']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthUserMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AthUserMenu, selector: "ath-user-menu", inputs: { initials: "initials", open: "open", srcImage: "srcImage", type: "type", userName: "userName" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
AthUserMenu = __decorate([
    ProxyCmp({
        inputs: ['initials', 'open', 'srcImage', 'type', 'userName']
    })
], AthUserMenu);
export { AthUserMenu };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AthUserMenu, decorators: [{
            type: Component,
            args: [{
                    selector: 'ath-user-menu',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['initials', 'open', 'srcImage', 'type', 'userName'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudC1saWJyYXJ5L3NyYy9saWIvc3RlbmNpbC1nZW5lcmF0ZWQvY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFFeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFlaEUsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtJQUV2QixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOytHQUxVLFlBQVk7bUdBQVosWUFBWSxtSkFKYiwyQkFBMkI7O0FBSTFCLFlBQVk7SUFWeEIsUUFBUSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztLQUNyRCxDQUFDO0dBUVcsWUFBWSxDQU14QjtTQU5ZLFlBQVk7NEZBQVosWUFBWTtrQkFQeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztpQkFDckQ7O0FBd0JNLElBQU0sZ0JBQWdCLEdBQXRCLE1BQU0sZ0JBQWdCO0lBRTNCLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFU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QUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx1RUFBdUU7b0JBQ3ZFLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO2lCQUNwRzs7QUE2Qk0sSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztJQUV0QixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7K0dBTlUsV0FBVzttR0FBWCxXQUFXLCtKQUpaLDJCQUEyQjs7QUFJMUIsV0FBVztJQVZ2QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0tBQzdELENBQUM7R0FRVyxXQUFXLENBT3ZCO1NBUFksV0FBVzs0RkFBWCxXQUFXO2tCQVB2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUVBQXVFO29CQUN2RSxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO2lCQUM3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gJy4vYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL3R5cGVzL2NvbXBvbmVudHMnXG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdleHBhbmQnLCAnbm9MYXN0SXRlbURpdmlkZXInXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1hY2NvcmRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdleHBhbmQnLCAnbm9MYXN0SXRlbURpdmlkZXInXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQWNjb3JkaW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQWNjb3JkaW9uIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhBY2NvcmRpb24ge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXhwYW5kZWQnLCAnaGVhZGluZ0xldmVsJywgJ2hlYWRpbmdUZXh0JywgJ2ljb24nLCAnbm9EaXZpZGVyJ10sXG4gIG1ldGhvZHM6IFsnY2xvc2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1hY2NvcmRpb24taXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXhwYW5kZWQnLCAnaGVhZGluZ0xldmVsJywgJ2hlYWRpbmdUZXh0JywgJ2ljb24nLCAnbm9EaXZpZGVyJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEFjY29yZGlvbkl0ZW0ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydvcGVuZWQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQWNjb3JkaW9uSXRlbSBleHRlbmRzIENvbXBvbmVudHMuQXRoQWNjb3JkaW9uSXRlbSB7XG5cbiAgb3BlbmVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhbGlnbm1lbnQnLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWFjdGlvbi1iYXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEFjdGlvbkJhciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aEFjdGlvbkJhciBleHRlbmRzIENvbXBvbmVudHMuQXRoQWN0aW9uQmFyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Nsb3NlQXJpYUxhYmVsJywgJ2NvbG9yJywgJ2Rlc2NyaXB0aW9uJywgJ2hhc0Nsb3NlJywgJ2hlYWRpbmdMZXZlbCcsICdoZWFkaW5nVGV4dCcsICdpc1VyZ2VudCcsICd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtYWxlcnQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Nsb3NlQXJpYUxhYmVsJywgJ2NvbG9yJywgJ2Rlc2NyaXB0aW9uJywgJ2hhc0Nsb3NlJywgJ2hlYWRpbmdMZXZlbCcsICdoZWFkaW5nVGV4dCcsICdpc1VyZ2VudCcsICd0eXBlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEFsZXJ0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQWxlcnQgZXh0ZW5kcyBDb21wb25lbnRzLkF0aEFsZXJ0IHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbGxlZGJ5JywgJ2F2YXRhck5hbWUnLCAnaW5pdGlhbHMnLCAnc2l6ZScsICd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtYXZhdGFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhTGFiZWxsZWRieScsICdhdmF0YXJOYW1lJywgJ2luaXRpYWxzJywgJ3NpemUnLCAndHlwZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhBdmF0YXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhBdmF0YXIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aEF2YXRhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkaXN0YW5jZVgnLCAnZGlzdGFuY2VZJywgJ2xhYmVsJywgJ21heCcsICdwb3NpdGlvbicsICd0eXBlJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtYmFkZ2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc3RhbmNlWCcsICdkaXN0YW5jZVknLCAnbGFiZWwnLCAnbWF4JywgJ3Bvc2l0aW9uJywgJ3R5cGUnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQmFkZ2Uge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhCYWRnZSBleHRlbmRzIENvbXBvbmVudHMuQXRoQmFkZ2Uge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXRoQXJpYUxhYmVsJywgJ2NvbGxhcHNlZCcsICdvcHRpb25zJywgJ3NlcGFyYXRvciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWJyZWFkY3J1bWInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F0aEFyaWFMYWJlbCcsICdjb2xsYXBzZWQnLCAnb3B0aW9ucycsICdzZXBhcmF0b3InXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQnJlYWRjcnVtYiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aEJyZWFkY3J1bWIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aEJyZWFkY3J1bWIge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY2xlYXInLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZnVsbFdpZHRoJywgJ2ljb24nLCAnaWNvblBvc2l0aW9uJywgJ3NpemUnLCAndHlwZSddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjbGVhcicsICdjb2xvcicsICdkaXNhYmxlZCcsICdmdWxsV2lkdGgnLCAnaWNvbicsICdpY29uUG9zaXRpb24nLCAnc2l6ZScsICd0eXBlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEJ1dHRvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENsaWNrJywgJ2F0aEZvY3VzJywgJ2F0aEJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhCdXR0b24ge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAgKi9cbiAgYXRoQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBnYWlucyBmb2N1c1xuICAgKi9cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sbGFwc2VUYXJnZXQnLCAnZGlzYWJsZWQnLCAnaWNvbicsICdzaXplJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1idXR0b24tZXhwYW5kYWJsZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY29sbGFwc2VUYXJnZXQnLCAnZGlzYWJsZWQnLCAnaWNvbicsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEJ1dHRvbkV4cGFuZGFibGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhUb2dnbGVDb2xsYXBzZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhCdXR0b25FeHBhbmRhYmxlIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhCdXR0b25FeHBhbmRhYmxlIHtcblxuICBhdGhUb2dnbGVDb2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdpY29uJywgJ2ljb25Qb3NpdGlvbicsICdzaXplJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1idXR0b24tbGluaycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY29sb3InLCAnZGlzYWJsZWQnLCAnaWNvbicsICdpY29uUG9zaXRpb24nLCAnc2l6ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhCdXR0b25MaW5rIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoQ2xpY2snLCAnYXRoRm9jdXMnLCAnYXRoQmx1ciddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhCdXR0b25MaW5rIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhCdXR0b25MaW5rIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgYnV0dG9uLWxpbmsgaXMgY2xpY2tlZFxuICAgKi9cbiAgYXRoQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbi1saW5rIGdhaW5zIGZvY3VzXG4gICAqL1xuICBhdGhGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgYnV0dG9uLWxpbmsgbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkRGF0ZXMnLCAnaGlnaGxpZ2h0ZWREYXRlcycsICdoaWdobGlnaHRlZFdlZWtlbmRzJywgJ21heCcsICdtaW4nLCAnc2VsZWN0ZWQnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNhbGVuZGFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZERhdGVzJywgJ2hpZ2hsaWdodGVkRGF0ZXMnLCAnaGlnaGxpZ2h0ZWRXZWVrZW5kcycsICdtYXgnLCAnbWluJywgJ3NlbGVjdGVkJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQ2FsZW5kYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhDaGFuZ2UnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aENhbGVuZGFyIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG5UaGlzIGV2ZW50IGRvZXNuJ3QgZmlyZSB1bnRpbCB0aGUgY29udHJvbCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcmlhTGFiZWxsZWRCeScsICdjbGlja2FibGUnLCAnZmx1aWQnLCAnbWF4V2lkdGgnLCAnb3JpZW50YXRpb24nLCAnc2l6ZScsICd3aWR0aCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNhcmQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbGxlZEJ5JywgJ2NsaWNrYWJsZScsICdmbHVpZCcsICdtYXhXaWR0aCcsICdvcmllbnRhdGlvbicsICdzaXplJywgJ3dpZHRoJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aENhcmQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhDbGljaycsICdhdGhGb2N1cycsICdhdGhCbHVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aENhcmQgZXh0ZW5kcyBDb21wb25lbnRzLkF0aENhcmQge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIGNhcmQgaXMgY2xpY2tlZFxuICAgKi9cbiAgYXRoQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gY2FyZCBnYWlucyBmb2N1c1xuICAgKi9cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gY2FyZCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGF0ZScsICdoZWFkaW5nVGV4dCcsICdvdmVybGluZScsICdzdWJ0aXRsZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNhcmQtaGVhZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkYXRlJywgJ2hlYWRpbmdUZXh0JywgJ292ZXJsaW5lJywgJ3N1YnRpdGxlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aENhcmRIZWFkZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDYXJkSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhDYXJkSGVhZGVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2hlYWRpbmdUZXh0JywgJ292ZXJsaW5lJywgJ3NlbGVjdGVkJywgJ3NpemUnLCAnc3VidGl0bGUnLCAndGFnJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWydzZWxlY3QnLCAndW5zZWxlY3QnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1jYXJkLXNlbGVjdGFibGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2hlYWRpbmdUZXh0JywgJ292ZXJsaW5lJywgJ3NlbGVjdGVkJywgJ3NpemUnLCAnc3VidGl0bGUnLCAndGFnJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQ2FyZFNlbGVjdGFibGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhDaGFuZ2UnLCAnYXRoRm9jdXMnLCAnYXRoQmx1ciddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDYXJkU2VsZWN0YWJsZSBleHRlbmRzIENvbXBvbmVudHMuQXRoQ2FyZFNlbGVjdGFibGUge1xuXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ211bHRpcGxlJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1jYXJkLXNlbGVjdGFibGUtZ3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ211bHRpcGxlJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQ2FyZFNlbGVjdGFibGVHcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aFZhbHVlQ2hhbmdlZCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDYXJkU2VsZWN0YWJsZUdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhDYXJkU2VsZWN0YWJsZUdyb3VwIHtcblxuICBhdGhWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQXRoQ2FyZFNlbGVjdGFibGVFbGVtZW50W10+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYm90dG9tVGFnJywgJ2hpZ2hsaWdodFRleHQnLCAndG9wVGFnJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWyd1cGRhdGVUeXBlQ2FyZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNhcmQtdGh1bWJuYWlsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydib3R0b21UYWcnLCAnaGlnaGxpZ2h0VGV4dCcsICd0b3BUYWcnLCAndHlwZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhDYXJkVGh1bWJuYWlsIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQ2FyZFRodW1ibmFpbCBleHRlbmRzIENvbXBvbmVudHMuQXRoQ2FyZFRodW1ibmFpbCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcmlhTGFiZWwnLCAnYXV0b2ZvY3VzJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZmVlZGJhY2snLCAnZmVlZGJhY2tUZXh0JywgJ2hlbHBlclRleHQnLCAnaGlkZVJlcXVpcmVkJywgJ2luZGV0ZXJtaW5hdGUnLCAnbGFiZWwnLCAnbmFtZScsICdyZWFkb25seScsICdyZXF1aXJlZCcsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtY2hlY2tib3gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdoaWRlUmVxdWlyZWQnLCAnaW5kZXRlcm1pbmF0ZScsICdsYWJlbCcsICduYW1lJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aENoZWNrYm94IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoRm9jdXMnLCAnYXRoQmx1cicsICdhdGhDaGFuZ2UnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IENoZWNrYm94Q2hhbmdlRXZlbnREZXRhaWwgYXMgSUF0aENoZWNrYm94Q2hlY2tib3hDaGFuZ2VFdmVudERldGFpbCB9IGZyb20gJy4uL3R5cGVzL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnRzLkF0aENoZWNrYm94IHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3ggZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3ggY2hhbmdlXG4gICAqL1xuICBhdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJQXRoQ2hlY2tib3hDaGVja2JveENoYW5nZUV2ZW50RGV0YWlsPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2xhYmVsJywgJ25hbWUnLCAncmVhZG9ubHknLCAncmVxdWlyZWRBcmlhTGFiZWwnLCAnc2hvd1JlcXVpcmVkJywgJ3Rvb2x0aXBUZXh0JywgJ3Rvb2x0aXBXaWR0aCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNoZWNrYm94LWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdsYWJlbCcsICduYW1lJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkQXJpYUxhYmVsJywgJ3Nob3dSZXF1aXJlZCcsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQ2hlY2tib3hHcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENoZWNrZWQnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IENoZWNrYm94Q2hhbmdlRXZlbnREZXRhaWwgYXMgSUF0aENoZWNrYm94R3JvdXBDaGVja2JveENoYW5nZUV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vdHlwZXMvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDaGVja2JveEdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhDaGVja2JveEdyb3VwIHtcbiAgLyoqXG4gICAqIEVtaXRlIGVsIGFycmF5IGRlIGNoZWNrYm94ZXMgc2VsZWNjaW9uYWRvc1xuICAgKi9cbiAgYXRoQ2hlY2tlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhDaGVja2JveEdyb3VwQ2hlY2tib3hDaGFuZ2VFdmVudERldGFpbFtdPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2ljb24nLCAnbGFiZWwnLCAnbmFtZScsICdyb2xlJywgJ3NlbGVjdGVkJywgJ3NpemUnLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWydzZWxlY3QnLCAndW5zZWxlY3QnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1jaGlwLWNob2ljZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaWNvbicsICdsYWJlbCcsICduYW1lJywgJ3JvbGUnLCAnc2VsZWN0ZWQnLCAnc2l6ZScsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhDaGlwQ2hvaWNlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoQ2hhbmdlJywgJ2F0aEZvY3VzJywgJ2F0aEJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQ2hpcENob2ljZSBleHRlbmRzIENvbXBvbmVudHMuQXRoQ2hpcENob2ljZSB7XG5cbiAgYXRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG5cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG5cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdzaXplJywgJ3ZhbHVlJywgJ3dpZHRoJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtY2hpcC1jaG9pY2UtZ3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ211bHRpcGxlJywgJ25hbWUnLCAnc2l6ZScsICd2YWx1ZScsICd3aWR0aCddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhDaGlwQ2hvaWNlR3JvdXAge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhDaGFuZ2VWYWx1ZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDaGlwQ2hvaWNlR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkF0aENoaXBDaG9pY2VHcm91cCB7XG4gIC8qKlxuICAgKiBFdmVudCB0byBlbWl0IHRoZSBjdXJyZW50IGNoaXBzIGNoZWNrZWRcbiAgICovXG4gIGF0aENoYW5nZVZhbHVlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEF0aENoaXBDaG9pY2VFbGVtZW50W10+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaGVhZGluZ1RleHQnLCAnaWNvbicsICdsYWJlbERpc21pc3MnLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNoaXAtZGlzbWlzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaGVhZGluZ1RleHQnLCAnaWNvbicsICdsYWJlbERpc21pc3MnLCAnc2l6ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhDaGlwRGlzbWlzcyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aERpc21pc3MnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoQ2hpcERpc21pc3MgZXh0ZW5kcyBDb21wb25lbnRzLkF0aENoaXBEaXNtaXNzIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgeCBpY29uIGlzIGNsaWNrZWRcbiAgICovXG4gIGF0aERpc21pc3M6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3NpemUnLCAnd2lkdGgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1jaGlwLWRpc21pc3MtZ3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3NpemUnLCAnd2lkdGgnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoQ2hpcERpc21pc3NHcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aENoaXBEaXNtaXNzR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkF0aENoaXBEaXNtaXNzR3JvdXAge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnc2hvdyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNvbGxhcHNlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydzaG93J10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aENvbGxhcHNlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoQ29sbGFwc2VTdGF0ZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhDb2xsYXBzZSBleHRlbmRzIENvbXBvbmVudHMuQXRoQ29sbGFwc2Uge1xuICAvKipcbiAgICogRXZlbnQgdG8gZW1pdCBpZiB0aGUgY29tcG9uZW50IGlzIGV4cGFuZGVkIG9yIGNvbGxhcHNlZC5cbiAgICovXG4gIGF0aENvbGxhcHNlU3RhdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IGlkOiBzdHJpbmc7IGlzRXhwYW5kZWQ6IGJvb2xlYW4gfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydleHBhbmRlZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWNvbGxhcHNlLWljb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2V4cGFuZGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aENvbGxhcHNlSWNvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aENvbGxhcHNlSWNvbiBleHRlbmRzIENvbXBvbmVudHMuQXRoQ29sbGFwc2VJY29uIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2F1dG9mb2N1cycsICdjb2xvcicsICdkaXNhYmxlZCcsICdkaXNhYmxlZERhdGVzJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdmb3JtYXQnLCAnaGVscGVyVGV4dCcsICdoaWRlUmVxdWlyZWQnLCAnaGlnaGxpZ2h0ZWREYXRlcycsICdoaWdobGlnaHRlZFdlZWtlbmRzJywgJ2lucHV0QXJpYUxhYmVsJywgJ2xhYmVsJywgJ21heCcsICdtaW4nLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzaXplJywgJ3N1Ym1pdE9uRW50ZXInLCAndG9vbHRpcFRleHQnLCAndHlwZScsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtZGF0ZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b2ZvY3VzJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkRGF0ZXMnLCAnZmVlZGJhY2snLCAnZmVlZGJhY2tUZXh0JywgJ2Zvcm1hdCcsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdoaWdobGlnaHRlZERhdGVzJywgJ2hpZ2hsaWdodGVkV2Vla2VuZHMnLCAnaW5wdXRBcmlhTGFiZWwnLCAnbGFiZWwnLCAnbWF4JywgJ21pbicsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3NpemUnLCAnc3VibWl0T25FbnRlcicsICd0b29sdGlwVGV4dCcsICd0eXBlJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aERhdGVwaWNrZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhGb2N1cycsICdhdGhCbHVyJywgJ2F0aENoYW5nZScsICdhdGhJbnB1dCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhEYXRlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhEYXRlcGlja2VyIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG5UaGlzIGV2ZW50IGRvZXNuJ3QgZmlyZSB1bnRpbCB0aGUgY29udHJvbCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xuICAvKipcbiAgICogRW1pdHRlZCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBpcyB1cGRhdGVkIGJ5IGludHJvZHVjaW5nIGEgY2hhbmdlXG4gICAqL1xuICBhdGhJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvZm9jdXMnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWREYXRlcycsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnZm9ybWF0JywgJ2hlbHBlclRleHQnLCAnaGlkZVBhbmVsJywgJ2hpZGVSZXF1aXJlZCcsICdoaWdobGlnaHRlZERhdGVzJywgJ2hpZ2hsaWdodGVkV2Vla2VuZHMnLCAnaW5wdXRBcmlhTGFiZWxFbmQnLCAnaW5wdXRBcmlhTGFiZWxTdGFydCcsICdsYWJlbCcsICdsYWJlbEVuZCcsICdsYWJlbFN0YXJ0JywgJ21heCcsICdtaW4nLCAnbmFtZScsICdwbGFjZWhvbGRlckVuZCcsICdwbGFjZWhvbGRlclN0YXJ0JywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3JlcXVpcmVkRW5kJywgJ3JlcXVpcmVkU3RhcnQnLCAnc2l6ZScsICdzdWJtaXRPbkVudGVyJywgJ3Rvb2x0aXBUZXh0JywgJ3R5cGUnLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWydzZXRGb2N1cycsICdzZXRGb2N1c0VuZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWRhdGVwaWNrZXItcmFuZ2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9mb2N1cycsICdjb2xvcicsICdkaXNhYmxlZCcsICdkaXNhYmxlZERhdGVzJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdmb3JtYXQnLCAnaGVscGVyVGV4dCcsICdoaWRlUGFuZWwnLCAnaGlkZVJlcXVpcmVkJywgJ2hpZ2hsaWdodGVkRGF0ZXMnLCAnaGlnaGxpZ2h0ZWRXZWVrZW5kcycsICdpbnB1dEFyaWFMYWJlbEVuZCcsICdpbnB1dEFyaWFMYWJlbFN0YXJ0JywgJ2xhYmVsJywgJ2xhYmVsRW5kJywgJ2xhYmVsU3RhcnQnLCAnbWF4JywgJ21pbicsICduYW1lJywgJ3BsYWNlaG9sZGVyRW5kJywgJ3BsYWNlaG9sZGVyU3RhcnQnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAncmVxdWlyZWRFbmQnLCAncmVxdWlyZWRTdGFydCcsICdzaXplJywgJ3N1Ym1pdE9uRW50ZXInLCAndG9vbHRpcFRleHQnLCAndHlwZScsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhEYXRlcGlja2VyUmFuZ2Uge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhGb2N1cycsICdhdGhCbHVyJywgJ2F0aENoYW5nZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhEYXRlcGlja2VyUmFuZ2UgZXh0ZW5kcyBDb21wb25lbnRzLkF0aERhdGVwaWNrZXJSYW5nZSB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGlucHV0IGdhaW5zIGZvY3VzXG4gICAqL1xuICBhdGhGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuVGhpcyBldmVudCBkb2Vzbid0IGZpcmUgdW50aWwgdGhlIGNvbnRyb2wgbG9zZXMgZm9jdXMuXG4gICAqL1xuICBhdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnb3JpZW50YXRpb24nLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWRpdmlkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ29yaWVudGF0aW9uJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoRGl2aWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aERpdmlkZXIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aERpdmlkZXIge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYW5ub3VuY2VSZXN1bHRUZXh0JywgJ2Rpc2FibGVkJywgJ2Ryb3Bkb3duQXJpYUxhYmVsJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdsYWJlbCcsICdtdWx0aXNlbGVjdCcsICduYW1lJywgJ25vY2hpcHNUZXh0JywgJ25vcmVzdWx0VGV4dCcsICdvcGVuJywgJ292ZXJsYXlNYXhIZWlnaHQnLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VhcmNoJywgJ3NlYXJjaEFyaWFMYWJlbCcsICdzZWFyY2hQbGFjZWhvbGRlcicsICdzaG93Q2hpcHMnLCAnc2l6ZScsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndmFsdWUnLCAnd2lkdGgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1kcm9wZG93bicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYW5ub3VuY2VSZXN1bHRUZXh0JywgJ2Rpc2FibGVkJywgJ2Ryb3Bkb3duQXJpYUxhYmVsJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdsYWJlbCcsICdtdWx0aXNlbGVjdCcsICduYW1lJywgJ25vY2hpcHNUZXh0JywgJ25vcmVzdWx0VGV4dCcsICdvcGVuJywgJ292ZXJsYXlNYXhIZWlnaHQnLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VhcmNoJywgJ3NlYXJjaEFyaWFMYWJlbCcsICdzZWFyY2hQbGFjZWhvbGRlcicsICdzaG93Q2hpcHMnLCAnc2l6ZScsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndmFsdWUnLCAnd2lkdGgnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoRHJvcGRvd24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhDaGFuZ2UnLCAnYXRoRm9jdXMnLCAnYXRoQmx1ciddKTtcbiAgfVxufVxuXG5cbmltcG9ydCB0eXBlIHsgQWN0aW9uTGlzdEl0ZW0gYXMgSUF0aERyb3Bkb3duQWN0aW9uTGlzdEl0ZW0gfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aERyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhEcm9wZG93biB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gb3B0aW9uIGNoYW5nZWRcbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhEcm9wZG93bkFjdGlvbkxpc3RJdGVtW10+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgY29tYm9ib3ggZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBjb21ib2JveCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaWNvbicsICduYW1lJywgJ29wdGlvbkdyb3VwJywgJ3NlbGVjdGVkJywgJ3NlbGVjdGVkQXJpYUxhYmVsJywgJ3RleHQnLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWyd1cGRhdGVNdWx0aXNlbGVjdCcsICd1cGRhdGVHcm91cE9wdGlvbicsICdhY3RpdmVEcm9wZG93bk9wdGlvbicsICdub0FjdGl2ZURyb3Bkb3duT3B0aW9uJywgJ2ZpbHRlck5vdEZvdW5kJywgJ3NldFNlbGVjdGVkJywgJ2ZpbHRlckZvdW5kJywgJ3NlbGVjdE9wdGlvbicsICd1bnNlbGVjdE9wdGlvbiddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWRyb3Bkb3duLW9wdGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaWNvbicsICduYW1lJywgJ29wdGlvbkdyb3VwJywgJ3NlbGVjdGVkJywgJ3NlbGVjdGVkQXJpYUxhYmVsJywgJ3RleHQnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoRHJvcGRvd25PcHRpb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydvcHRTZWxlY3RlZCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhEcm9wZG93bk9wdGlvbiBleHRlbmRzIENvbXBvbmVudHMuQXRoRHJvcGRvd25PcHRpb24ge1xuXG4gIG9wdFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyBzb3VyY2U6ICd1c2VyJyB8ICdwcm9ncmFtbWF0aWMnIH0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnaGVhZGluZ0xldmVsJywgJ2hlYWRpbmdTaXplJywgJ2hlYWRpbmdUZXh0JywgJ2hpZGVJbWFnZScsICdsb2FkaW5nTGFiZWwnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWVtcHR5LXN0YXRlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkZXNjcmlwdGlvbicsICdoZWFkaW5nTGV2ZWwnLCAnaGVhZGluZ1NpemUnLCAnaGVhZGluZ1RleHQnLCAnaGlkZUltYWdlJywgJ2xvYWRpbmdMYWJlbCcsICd0eXBlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEVtcHR5U3RhdGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhFbXB0eVN0YXRlIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhFbXB0eVN0YXRlIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdhcmlhTGFiZWxsZWRieScsICdjb2xvcicsICdpY29uJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhTGFiZWwnLCAnYXJpYUxhYmVsbGVkYnknLCAnY29sb3InLCAnaWNvbicsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aEljb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhJY29uIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhJY29uIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2hpZGVDb250cm9scycsICdoaWRlUmVxdWlyZWQnLCAnaW5wdXRBcmlhTGFiZWwnLCAnbGFiZWwnLCAnbWF4JywgJ21pbicsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3NpemUnLCAnc3RlcCcsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndW5pdCcsICd1bml0QXJpYUxhYmVsJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtaW5wdXQtY291bnRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZmVlZGJhY2snLCAnZmVlZGJhY2tUZXh0JywgJ2hlbHBlclRleHQnLCAnaGlkZUNvbnRyb2xzJywgJ2hpZGVSZXF1aXJlZCcsICdpbnB1dEFyaWFMYWJlbCcsICdsYWJlbCcsICdtYXgnLCAnbWluJywgJ25hbWUnLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2l6ZScsICdzdGVwJywgJ3Rvb2x0aXBUZXh0JywgJ3Rvb2x0aXBXaWR0aCcsICd1bml0JywgJ3VuaXRBcmlhTGFiZWwnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoSW5wdXRDb3VudGVyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoRm9jdXMnLCAnYXRoQmx1cicsICdhdGhDaGFuZ2UnLCAnYXRoSW5wdXQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoSW5wdXRDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhJbnB1dENvdW50ZXIge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBnYWlucyBmb2N1cy5cbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuVGhpcyBldmVudCBkb2Vzbid0IGZpcmUgdW50aWwgdGhlIGNvbnRyb2wgbG9zZXMgZm9jdXMuXG4gICAqL1xuICBhdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgdmFsdWUgaXMgdXBkYXRlZCBieSBpbnRyb2R1Y2luZyBhIGNoYW5nZS5cbiAgICovXG4gIGF0aElucHV0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8c3RyaW5nPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY291bnRlcicsICdjb3VudGVyTGFiZWwnLCAnZGlzYWJsZWQnLCAnZmVlZGJhY2snLCAnZmVlZGJhY2tUZXh0JywgJ2hlbHBlclRleHQnLCAnaGlkZVJlcXVpcmVkJywgJ2lucHV0QXJpYUxhYmVsJywgJ2lucHV0VGFiaW5kZXgnLCAnbGFiZWwnLCAnbGFiZWxIaWRlUGFzc3dvcmQnLCAnbGFiZWxTaG93UGFzc3dvcmQnLCAnbWF4bGVuZ3RoJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzaXplJywgJ3N1Ym1pdE9uRW50ZXInLCAndG9vbHRpcFRleHQnLCAndG9vbHRpcFdpZHRoJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1pbnB1dC1wYXNzd29yZCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9mb2N1cycsICdjb3VudGVyJywgJ2NvdW50ZXJMYWJlbCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdoaWRlUmVxdWlyZWQnLCAnaW5wdXRBcmlhTGFiZWwnLCAnaW5wdXRUYWJpbmRleCcsICdsYWJlbCcsICdsYWJlbEhpZGVQYXNzd29yZCcsICdsYWJlbFNob3dQYXNzd29yZCcsICdtYXhsZW5ndGgnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3NpemUnLCAnc3VibWl0T25FbnRlcicsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoSW5wdXRQYXNzd29yZCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aEZvY3VzJywgJ2F0aEJsdXInLCAnYXRoQ2hhbmdlJywgJ2F0aENsZWFyJywgJ2F0aElucHV0J10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aElucHV0UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnRzLkF0aElucHV0UGFzc3dvcmQge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBnYWlucyBmb2N1c1xuICAgKi9cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzXG4gICAqL1xuICBhdGhCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cblRoaXMgZXZlbnQgZG9lc24ndCBmaXJlIHVudGlsIHRoZSBjb250cm9sIGxvc2VzIGZvY3VzLlxuICAgKi9cbiAgYXRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8c3RyaW5nPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjbGVhcmVkXG4gICAqL1xuICBhdGhDbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xuICAvKipcbiAgICogRW1pdHRlZCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBpcyB1cGRhdGVkIGJ5IGludHJvZHVjaW5nIGEgY2hhbmdlXG4gICAqL1xuICBhdGhJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvY29tcGxldGUnLCAnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uQXJpYUxhYmVsJywgJ2NvdW50ZXInLCAnY291bnRlckxhYmVsJywgJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoYXNDbGVhcicsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdpY29uJywgJ2ljb25Qb3NpdGlvbicsICdpbnB1dEFyaWFMYWJlbCcsICdpbnB1dFRhYmluZGV4JywgJ2xhYmVsJywgJ21heGxlbmd0aCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2l6ZScsICdzdWJtaXRPbkVudGVyJywgJ3Rvb2x0aXBUZXh0JywgJ3Rvb2x0aXBXaWR0aCcsICd0eXBlJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1pbnB1dC10ZXh0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvY29tcGxldGUnLCAnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uQXJpYUxhYmVsJywgJ2NvdW50ZXInLCAnY291bnRlckxhYmVsJywgJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoYXNDbGVhcicsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdpY29uJywgJ2ljb25Qb3NpdGlvbicsICdpbnB1dEFyaWFMYWJlbCcsICdpbnB1dFRhYmluZGV4JywgJ2xhYmVsJywgJ21heGxlbmd0aCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2l6ZScsICdzdWJtaXRPbkVudGVyJywgJ3Rvb2x0aXBUZXh0JywgJ3Rvb2x0aXBXaWR0aCcsICd0eXBlJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aElucHV0VGV4dCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aEZvY3VzJywgJ2F0aEJsdXInLCAnYXRoQ2hhbmdlJywgJ2F0aENsZWFyJywgJ2F0aElucHV0J10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aElucHV0VGV4dCBleHRlbmRzIENvbXBvbmVudHMuQXRoSW5wdXRUZXh0IHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG5UaGlzIGV2ZW50IGRvZXNuJ3QgZmlyZSB1bnRpbCB0aGUgY29udHJvbCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY2xlYXJlZFxuICAgKi9cbiAgYXRoQ2xlYXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgdmFsdWUgaXMgdXBkYXRlZCBieSBpbnRyb2R1Y2luZyBhIGNoYW5nZVxuICAgKi9cbiAgYXRoSW5wdXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9mb2N1cycsICdjb3VudGVyJywgJ2NvdW50ZXJMYWJlbCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdoaWRlUmVxdWlyZWQnLCAnaW5wdXRBcmlhTGFiZWwnLCAnaW5wdXRUYWJpbmRleCcsICdsYWJlbCcsICdtYXhsZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdyb3dzJywgJ3NpemUnLCAndG9vbHRpcFRleHQnLCAndG9vbHRpcFdpZHRoJywgJ3ZhbHVlJywgJ3dpZHRoJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1pbnB1dC10ZXh0YXJlYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9mb2N1cycsICdjb3VudGVyJywgJ2NvdW50ZXJMYWJlbCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdoaWRlUmVxdWlyZWQnLCAnaW5wdXRBcmlhTGFiZWwnLCAnaW5wdXRUYWJpbmRleCcsICdsYWJlbCcsICdtYXhsZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdyb3dzJywgJ3NpemUnLCAndG9vbHRpcFRleHQnLCAndG9vbHRpcFdpZHRoJywgJ3ZhbHVlJywgJ3dpZHRoJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aElucHV0VGV4dGFyZWEge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhGb2N1cycsICdhdGhCbHVyJywgJ2F0aENoYW5nZScsICdhdGhJbnB1dCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhJbnB1dFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhJbnB1dFRleHRhcmVhIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG5UaGlzIGV2ZW50IGRvZXNuJ3QgZmlyZSB1bnRpbCB0aGUgY29udHJvbCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xuICAvKipcbiAgICogRW1pdHRlZCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBpcyB1cGRhdGVkIGJ5IGludHJvZHVjaW5nIGEgY2hhbmdlXG4gICAqL1xuICBhdGhJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcmlhRGVzY3JpYmVkYnknLCAnYXJpYUxhYmVsJywgJ2FyaWFMYWJlbGxlZGJ5JywgJ2Rpc2FibGVkJywgJ2V4dGVybmFsTGFiZWwnLCAnaWNvbicsICdpY29uQXJpYUxhYmVsJywgJ2xpbmtIcmVmJywgJ2xpbmtUYXJnZXQnLCAnc2l6ZScsICd1bmRlcmxpbmUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1saW5rJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhRGVzY3JpYmVkYnknLCAnYXJpYUxhYmVsJywgJ2FyaWFMYWJlbGxlZGJ5JywgJ2Rpc2FibGVkJywgJ2V4dGVybmFsTGFiZWwnLCAnaWNvbicsICdpY29uQXJpYUxhYmVsJywgJ2xpbmtIcmVmJywgJ2xpbmtUYXJnZXQnLCAnc2l6ZScsICd1bmRlcmxpbmUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoTGluayB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENsaWNrJywgJ2F0aEZvY3VzJywgJ2F0aEJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTGluayBleHRlbmRzIENvbXBvbmVudHMuQXRoTGluayB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxuICAgKi9cbiAgYXRoQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGxpbiBnYWlucyBmb2N1c1xuICAgKi9cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGxpbmsgbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdkaXNhYmxlZCcsICdoYXNEaXZpZGVyJywgJ29yaWVudGF0aW9uJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjbGlja2FibGUnLCAnZGlzYWJsZWQnLCAnaGFzRGl2aWRlcicsICdvcmllbnRhdGlvbicsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aExpc3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhMaXN0IGV4dGVuZHMgQ29tcG9uZW50cy5BdGhMaXN0IHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2F0aEFyaWFMYWJlbCcsICdjbGlja2FibGUnLCAnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXh0ZXJuYWxMYWJlbCcsICdoYXNEaXZpZGVyJywgJ2hlYWRpbmdMZXZlbCcsICdoZWFkaW5nVGV4dCcsICdocmVmJywgJ29yaWVudGF0aW9uJywgJ3JlbCcsICdzaXplJywgJ3N1YnRpdGxlJywgJ3RhcmdldCcsICd0b29sdGlwJywgJ3Rvb2x0aXBNYXhXaWR0aCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLWxpc3QtaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXRoQXJpYUxhYmVsJywgJ2NsaWNrYWJsZScsICdkZXNjcmlwdGlvbicsICdkaXNhYmxlZCcsICdleHRlcm5hbExhYmVsJywgJ2hhc0RpdmlkZXInLCAnaGVhZGluZ0xldmVsJywgJ2hlYWRpbmdUZXh0JywgJ2hyZWYnLCAnb3JpZW50YXRpb24nLCAncmVsJywgJ3NpemUnLCAnc3VidGl0bGUnLCAndGFyZ2V0JywgJ3Rvb2x0aXAnLCAndG9vbHRpcE1heFdpZHRoJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aExpc3RJdGVtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoQ2xpY2snXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLkF0aExpc3RJdGVtIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiBsaXN0SXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBhdGhDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2F0aEFyaWFMYWJlbCcsICdhdXRvZm9jdXMnLCAnY2xlYXInLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnaWNvbicsICdvcGVuJywgJ292ZXJsYXlNYXhIZWlnaHQnLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLW1lbnUtYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhbGlnbm1lbnQnLCAnYXRoQXJpYUxhYmVsJywgJ2F1dG9mb2N1cycsICdjbGVhcicsICdjb2xvcicsICdkaXNhYmxlZCcsICdpY29uJywgJ29wZW4nLCAnb3ZlcmxheU1heEhlaWdodCcsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVCdXR0b24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhBY3Rpb24nXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTWVudUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuQXRoTWVudUJ1dHRvbiB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBhdGhBY3Rpb246IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IGl0ZW06IEhUTUxBdGhNZW51QnV0dG9uSXRlbUVsZW1lbnQgfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdncm91cE5hbWUnLCAnaWNvbicsICdpdGVtVGFiSW5kZXgnLCAnbmFtZScsICd0ZXh0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtbWVudS1idXR0b24taXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZ3JvdXBOYW1lJywgJ2ljb24nLCAnaXRlbVRhYkluZGV4JywgJ25hbWUnLCAndGV4dCddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhNZW51QnV0dG9uSXRlbSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aFNlbGVjdGVkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aE1lbnVCdXR0b25JdGVtIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhNZW51QnV0dG9uSXRlbSB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIGl0ZW0gaXMgY2xpY2tlZCBhbmQgdHJpZ2dlcnMgYW4gYWN0aW9uXG4gICAqL1xuICBhdGhTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxBdGhNZW51QnV0dG9uSXRlbUVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXRoQXJpYUxhYmVsJywgJ2hhc0RpdmlkZXInLCAnaXRlbXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1tZW51LWhvcml6b250YWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F0aEFyaWFMYWJlbCcsICdoYXNEaXZpZGVyJywgJ2l0ZW1zJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVIb3Jpem9udGFsIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoU2VsZWN0ZWQnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IE1lbnVIb3Jpem9udGFsSXRlbSBhcyBJQXRoTWVudUhvcml6b250YWxNZW51SG9yaXpvbnRhbEl0ZW0gfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aE1lbnVIb3Jpem9udGFsIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhNZW51SG9yaXpvbnRhbCB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gYW4gaXRlbSBpcyBzZWxlY3RlZCB3aXRoIHRoZSBNZW51SG9yaXpvbnRhbEl0ZW0gb2JqZWN0XG4gICAqL1xuICBhdGhTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhNZW51SG9yaXpvbnRhbE1lbnVIb3Jpem9udGFsSXRlbT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWRnZUxhYmVsJywgJ2JhZGdlTWF4JywgJ2JhZGdlVmFsdWUnLCAnZGlzYWJsZWQnLCAnZXh0ZXJuYWxMYWJlbCcsICdocmVmJywgJ2xhYmVsJywgJ3JlbCcsICdzZWxlY3RlZCcsICd0YXJnZXQnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1tZW51LWhvcml6b250YWwtaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFkZ2VMYWJlbCcsICdiYWRnZU1heCcsICdiYWRnZVZhbHVlJywgJ2Rpc2FibGVkJywgJ2V4dGVybmFsTGFiZWwnLCAnaHJlZicsICdsYWJlbCcsICdyZWwnLCAnc2VsZWN0ZWQnLCAndGFyZ2V0JywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVIb3Jpem9udGFsSXRlbSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aE1lbnVIb3Jpem9udGFsSXRlbSBleHRlbmRzIENvbXBvbmVudHMuQXRoTWVudUhvcml6b250YWxJdGVtIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2l0ZW1zJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtbWVudS1sYXRlcmFsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydpdGVtcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhNZW51TGF0ZXJhbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aFNlbGVjdGVkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aE1lbnVMYXRlcmFsIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhNZW51TGF0ZXJhbCB7XG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIGF0aFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyBpdGVtOiBIVE1MQXRoTWVudUxhdGVyYWxJdGVtQWN0aW9uRWxlbWVudCB8IEhUTUxBdGhNZW51TGF0ZXJhbEl0ZW1MaW5rRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdiYWRnZUxhYmVsJywgJ2JhZGdlTWF4JywgJ2JhZGdlVmFsdWUnLCAnZGlzYWJsZWQnLCAnaWNvbicsICduYW1lJywgJ3NlbGVjdGVkJywgJ3Rvb2x0aXBUZXh0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtbWVudS1sYXRlcmFsLWl0ZW0tYWN0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhTGFiZWwnLCAnYmFkZ2VMYWJlbCcsICdiYWRnZU1heCcsICdiYWRnZVZhbHVlJywgJ2Rpc2FibGVkJywgJ2ljb24nLCAnbmFtZScsICdzZWxlY3RlZCcsICd0b29sdGlwVGV4dCddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhNZW51TGF0ZXJhbEl0ZW1BY3Rpb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhNZW51TGF0ZXJhbEl0ZW1BY3Rpb24gZXh0ZW5kcyBDb21wb25lbnRzLkF0aE1lbnVMYXRlcmFsSXRlbUFjdGlvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcmlhTGFiZWwnLCAnYmFkZ2VMYWJlbCcsICdiYWRnZU1heCcsICdiYWRnZVZhbHVlJywgJ2Rpc2FibGVkJywgJ2V4dGVybmFsTGFiZWwnLCAnaHJlZicsICdpY29uJywgJ25hbWUnLCAncmVsJywgJ3NlbGVjdGVkJywgJ3RhcmdldCcsICd0b29sdGlwVGV4dCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLW1lbnUtbGF0ZXJhbC1pdGVtLWxpbmsnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdiYWRnZUxhYmVsJywgJ2JhZGdlTWF4JywgJ2JhZGdlVmFsdWUnLCAnZGlzYWJsZWQnLCAnZXh0ZXJuYWxMYWJlbCcsICdocmVmJywgJ2ljb24nLCAnbmFtZScsICdyZWwnLCAnc2VsZWN0ZWQnLCAndGFyZ2V0JywgJ3Rvb2x0aXBUZXh0J10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVMYXRlcmFsSXRlbUxpbmsge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhNZW51TGF0ZXJhbEl0ZW1MaW5rIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhNZW51TGF0ZXJhbEl0ZW1MaW5rIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1tZW51LXZlcnRpY2FsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcHBlYXJhbmNlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVWZXJ0aWNhbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aFNlbGVjdGVkJ10pO1xuICB9XG59XG5cblxuaW1wb3J0IHR5cGUgeyBNZW51SXRlbSBhcyBJQXRoTWVudVZlcnRpY2FsTWVudUl0ZW0gfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aE1lbnVWZXJ0aWNhbCBleHRlbmRzIENvbXBvbmVudHMuQXRoTWVudVZlcnRpY2FsIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiBsaW5rIG9yIGFjdGlvbiBCdXR0b24gaXMgY2xpY2tlZFxuICAgKi9cbiAgYXRoU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJQXRoTWVudVZlcnRpY2FsTWVudUl0ZW0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaWNvbicsICdvcGVuJywgJ3NlbGVjdGVkJywgJ3RleHQnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1tZW51LXZlcnRpY2FsLWl0ZW0tYWN0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdpY29uJywgJ29wZW4nLCAnc2VsZWN0ZWQnLCAndGV4dCcsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhNZW51VmVydGljYWxJdGVtQWN0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTWVudVZlcnRpY2FsSXRlbUFjdGlvbiBleHRlbmRzIENvbXBvbmVudHMuQXRoTWVudVZlcnRpY2FsSXRlbUFjdGlvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdleHRlcm5hbExhYmVsJywgJ2hyZWYnLCAnaWNvbicsICdyZWwnLCAnc2VsZWN0ZWQnLCAndGFyZ2V0JywgJ3RleHQnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1tZW51LXZlcnRpY2FsLWl0ZW0tbGluaycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZXh0ZXJuYWxMYWJlbCcsICdocmVmJywgJ2ljb24nLCAncmVsJywgJ3NlbGVjdGVkJywgJ3RhcmdldCcsICd0ZXh0JywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aE1lbnVWZXJ0aWNhbEl0ZW1MaW5rIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTWVudVZlcnRpY2FsSXRlbUxpbmsgZXh0ZW5kcyBDb21wb25lbnRzLkF0aE1lbnVWZXJ0aWNhbEl0ZW1MaW5rIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnYXV0b2ZvY3VzJywgJ2NsaWNrT3V0c2lkZUNsb3NlJywgJ2Nsb3NlQXJpYUxhYmVsJywgJ2Z1bGxTY3JlZW4nLCAnaGFzQ2xvc2UnLCAnaGFzRGl2aWRlcicsICdoZWFkaW5nTGV2ZWwnLCAnaGVhZGluZ1RleHQnLCAnaXNBbGVydCcsICdtYXhIZWlnaHQnLCAnbWF4V2lkdGgnLCAnb3BlbicsICdzaXplJywgJ3N1YnRpdGxlVGV4dCddLFxuICBtZXRob2RzOiBbJ29wZW5Nb2RhbCcsICdjbG9zZU1vZGFsJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtbW9kYWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnYXV0b2ZvY3VzJywgJ2NsaWNrT3V0c2lkZUNsb3NlJywgJ2Nsb3NlQXJpYUxhYmVsJywgJ2Z1bGxTY3JlZW4nLCAnaGFzQ2xvc2UnLCAnaGFzRGl2aWRlcicsICdoZWFkaW5nTGV2ZWwnLCAnaGVhZGluZ1RleHQnLCAnaXNBbGVydCcsICdtYXhIZWlnaHQnLCAnbWF4V2lkdGgnLCAnb3BlbicsICdzaXplJywgJ3N1YnRpdGxlVGV4dCddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhNb2RhbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aE9wZW5lZCcsICdhdGhDbG9zZWQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoTW9kYWwgZXh0ZW5kcyBDb21wb25lbnRzLkF0aE1vZGFsIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgbW9kYWwgaXMgb3BlbmVkXG4gICAqL1xuICBhdGhPcGVuZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIG1vZGFsIGlzIGNsb3NlZFxuICAgKi9cbiAgYXRoQ2xvc2VkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhdGhBcmlhTGFiZWwnLCAnY3VycmVudFBhZ2UnLCAnZGlzYWJsZWQnLCAnaXRlbXNQZXJQYWdlJywgJ2l0ZW1zU2VsZWN0b3InLCAnbm9FbmRCdXR0b25zJywgJ25vSXRlbXNDb3VudCcsICdub0l0ZW1zU2VsZWN0b3InLCAnbm9KdW1wQnV0dG9ucycsICd0b3RhbEl0ZW1zJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtcGFnaW5hdGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXRoQXJpYUxhYmVsJywgJ2N1cnJlbnRQYWdlJywgJ2Rpc2FibGVkJywgJ2l0ZW1zUGVyUGFnZScsICdpdGVtc1NlbGVjdG9yJywgJ25vRW5kQnV0dG9ucycsICdub0l0ZW1zQ291bnQnLCAnbm9JdGVtc1NlbGVjdG9yJywgJ25vSnVtcEJ1dHRvbnMnLCAndG90YWxJdGVtcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhQYWdpbmF0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoUGFnaW5hdGUnLCAnYXRoSXRlbXNQZXJQYWdlQ2hhbmdlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFBhZ2luYXRpb24gZXh0ZW5kcyBDb21wb25lbnRzLkF0aFBhZ2luYXRpb24ge1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwYWdlIGNoYW5nZXMuXG5FbWl0cyB0aGUgbmV3IHBhZ2UgbnVtYmVyIGFzIGRldGFpbC5cbiAgICovXG4gIGF0aFBhZ2luYXRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8bnVtYmVyPj47XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGl0ZW1zIHBlciBwYWdlIGNoYW5nZXMuXG5FbWl0cyB0aGUgbmV3IGl0ZW1zIHBlciBwYWdlIGFzIGRldGFpbC5cbiAgICovXG4gIGF0aEl0ZW1zUGVyUGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PG51bWJlcj4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydmb2N1c2FibGUnLCAnbGFiZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1wYW5lbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZm9jdXNhYmxlJywgJ2xhYmVsJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aFBhbmVsIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoUGFuZWwgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFBhbmVsIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdhcmlhTGFiZWxsZWRieScsICduYW1lJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1waWN0b2dyYW0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdhcmlhTGFiZWxsZWRieScsICduYW1lJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoUGljdG9ncmFtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoUGljdG9ncmFtIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhQaWN0b2dyYW0ge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXRoQXJpYUxhYmVsJywgJ2luZmluaXRlJywgJ2xhYmVsQWxpZ25tZW50JywgJ2xhYmVsTGVmdCcsICdsYWJlbFJpZ2h0JywgJ21heCcsICdtaW4nLCAndmFsdWUnLCAndmFsdWVUZXh0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtcHJvZ3Jlc3MtYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdGhBcmlhTGFiZWwnLCAnaW5maW5pdGUnLCAnbGFiZWxBbGlnbm1lbnQnLCAnbGFiZWxMZWZ0JywgJ2xhYmVsUmlnaHQnLCAnbWF4JywgJ21pbicsICd2YWx1ZScsICd2YWx1ZVRleHQnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoUHJvZ3Jlc3NCYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhQcm9ncmVzc0JhciBleHRlbmRzIENvbXBvbmVudHMuQXRoUHJvZ3Jlc3NCYXIge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXJpYUxhYmVsJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnbGFiZWwnLCAnbmFtZScsICdyZWFkb25seScsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3VuQ2hlY2snLCAnc2V0Rm9jdXMnLCAnc2V0VGFiaW5kZXgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1yYWRpby1idXR0b24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2xhYmVsJywgJ25hbWUnLCAncmVhZG9ubHknLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoUmFkaW9CdXR0b24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhGb2N1cycsICdhdGhCbHVyJywgJ2F0aENoYW5nZSddKTtcbiAgfVxufVxuXG5cbmltcG9ydCB0eXBlIHsgUmFkaW9CdXR0b25DaGFuZ2VEZXRhaWwgYXMgSUF0aFJhZGlvQnV0dG9uUmFkaW9CdXR0b25DaGFuZ2VEZXRhaWwgfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFJhZGlvQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhSYWRpb0J1dHRvbiB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIHJhZGlvLWJ1dHRvbiByZWNlaXZlcyBmb2N1c1xuICAgKi9cbiAgYXRoRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlIHJhZGlvLWJ1dHRvbiBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYXRoQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiB0aGUgaW5wdXQgc3RhdGVcbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhSYWRpb0J1dHRvblJhZGlvQnV0dG9uQ2hhbmdlRGV0YWlsPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdsYWJlbCcsICduYW1lJywgJ29yaWVudGF0aW9uJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkQXJpYUxhYmVsJywgJ3Nob3dSZXF1aXJlZCcsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1yYWRpby1idXR0b24tZ3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FyaWFMYWJlbCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja1RleHQnLCAnaGVscGVyVGV4dCcsICdsYWJlbCcsICduYW1lJywgJ29yaWVudGF0aW9uJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkQXJpYUxhYmVsJywgJ3Nob3dSZXF1aXJlZCcsICd0b29sdGlwVGV4dCcsICd0b29sdGlwV2lkdGgnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoUmFkaW9CdXR0b25Hcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENoYW5nZVZhbHVlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFJhZGlvQnV0dG9uR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFJhZGlvQnV0dG9uR3JvdXAge1xuXG4gIGF0aENoYW5nZVZhbHVlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8c3RyaW5nPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbGxhcHNhYmxlJywgJ2NvbGxhcHNlVGFyZ2V0JywgJ2NvbG9yJywgJ2hlYWRpbmdMZXZlbCcsICdoZWFkaW5nT3ZlcmxpbmUnLCAnaGVhZGluZ1NpemUnLCAnaGVhZGluZ1RleHQnLCAnaWNvbicsICdvdmVybGluZScsICdwaWN0b2dyYW0nLCAndG9vbHRpcCcsICd0b29sdGlwTGFiZWwnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXNlY3Rpb24tdGl0bGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbGxhcHNhYmxlJywgJ2NvbGxhcHNlVGFyZ2V0JywgJ2NvbG9yJywgJ2hlYWRpbmdMZXZlbCcsICdoZWFkaW5nT3ZlcmxpbmUnLCAnaGVhZGluZ1NpemUnLCAnaGVhZGluZ1RleHQnLCAnaWNvbicsICdvdmVybGluZScsICdwaWN0b2dyYW0nLCAndG9vbHRpcCcsICd0b29sdGlwTGFiZWwnLCAndHlwZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhTZWN0aW9uVGl0bGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhUb2dnbGVDb2xsYXBzZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhTZWN0aW9uVGl0bGUgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFNlY3Rpb25UaXRsZSB7XG4gIC8qKlxuICAgKiBFbWl0dGVkIHdoZW4gdGhlICdDb2xsYXBzZScgY29tcG9uZW50IGNvbGxhcHNlcyBvciBleHBhbmRzLlxuICAgKi9cbiAgYXRoVG9nZ2xlQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXJpYUxhYmVsJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdsYWJlbCcsICduYW1lJywgJ3JlcXVpcmVkJywgJ3JlcXVpcmVkQXJpYUxhYmVsJywgJ3NpemUnLCAndG9vbHRpcFRleHQnLCAndG9vbHRpcFdpZHRoJywgJ3R5cGUnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1zZWdtZW50ZWQtY29udHJvbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXJpYUxhYmVsJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2ZlZWRiYWNrJywgJ2ZlZWRiYWNrVGV4dCcsICdoZWxwZXJUZXh0JywgJ2hpZGVSZXF1aXJlZCcsICdsYWJlbCcsICduYW1lJywgJ3JlcXVpcmVkJywgJ3JlcXVpcmVkQXJpYUxhYmVsJywgJ3NpemUnLCAndG9vbHRpcFRleHQnLCAndG9vbHRpcFdpZHRoJywgJ3R5cGUnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoU2VnbWVudGVkQ29udHJvbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENoYW5nZVZhbHVlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFNlZ21lbnRlZENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFNlZ21lbnRlZENvbnRyb2wge1xuXG4gIGF0aENoYW5nZVZhbHVlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEF0aFNlZ21lbnRlZENvbnRyb2xJdGVtRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdpY29uJywgJ2ljb25Qb3NpdGlvbicsICdzZWxlY3RlZCcsICdzaXplJywgJ3R5cGUnLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWyd1blNlbGVjdEl0ZW0nLCAnc2V0Rm9jdXMnLCAnc2V0VGFiaW5kZXgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC1zZWdtZW50ZWQtY29udHJvbC1pdGVtJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdpY29uJywgJ2ljb25Qb3NpdGlvbicsICdzZWxlY3RlZCcsICdzaXplJywgJ3R5cGUnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoU2VnbWVudGVkQ29udHJvbEl0ZW0ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhGb2N1cycsICdhdGhDaGFuZ2UnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IFNlZ21lbnRlZENvbnRyb2xJdGVtQ2hhbmdlU2VsZWN0IGFzIElBdGhTZWdtZW50ZWRDb250cm9sSXRlbVNlZ21lbnRlZENvbnRyb2xJdGVtQ2hhbmdlU2VsZWN0IH0gZnJvbSAnLi4vdHlwZXMvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhTZWdtZW50ZWRDb250cm9sSXRlbSBleHRlbmRzIENvbXBvbmVudHMuQXRoU2VnbWVudGVkQ29udHJvbEl0ZW0ge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBzZWdtZW50ZWQgY29udHJvbCBpdGVtIGlzIGZvY3VzXG4gICAqL1xuICBhdGhGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgc2VnbWVudGVkIGNvbnRyb2wgaXRlbSBpcyBzZWxlY3RlZFxuICAgKi9cbiAgYXRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SUF0aFNlZ21lbnRlZENvbnRyb2xJdGVtU2VnbWVudGVkQ29udHJvbEl0ZW1DaGFuZ2VTZWxlY3Q+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY291bnRlcldpZHRoJywgJ2RldGFpbEZpcnN0JywgJ2RldGFpbExhc3QnLCAnZGlzYWJsZWQnLCAnZmVlZGJhY2snLCAnZmVlZGJhY2tDb3VudGVyJywgJ2ZlZWRiYWNrVGV4dCcsICdmcm9tQXJpYUxhYmVsJywgJ2dyb3VwQXJpYUxhYmVsJywgJ2hlbHBlclRleHQnLCAnbGFiZWxHcm91cCcsICdtYXgnLCAnbWluJywgJ25hbWUnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2hvd1JlcXVpcmVkJywgJ3N0ZXAnLCAnc3RlcHBlZCcsICd0b0FyaWFMYWJlbCcsICd0b29sdGlwVGV4dCcsICd0eXBlJywgJ3VuaXQnLCAndmFsdWUnLCAndmFsdWVUZXh0JywgJ3dpZHRoJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtc2xpZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb3VudGVyV2lkdGgnLCAnZGV0YWlsRmlyc3QnLCAnZGV0YWlsTGFzdCcsICdkaXNhYmxlZCcsICdmZWVkYmFjaycsICdmZWVkYmFja0NvdW50ZXInLCAnZmVlZGJhY2tUZXh0JywgJ2Zyb21BcmlhTGFiZWwnLCAnZ3JvdXBBcmlhTGFiZWwnLCAnaGVscGVyVGV4dCcsICdsYWJlbEdyb3VwJywgJ21heCcsICdtaW4nLCAnbmFtZScsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzaG93UmVxdWlyZWQnLCAnc3RlcCcsICdzdGVwcGVkJywgJ3RvQXJpYUxhYmVsJywgJ3Rvb2x0aXBUZXh0JywgJ3R5cGUnLCAndW5pdCcsICd2YWx1ZScsICd2YWx1ZVRleHQnLCAnd2lkdGgnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoU2xpZGVyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoQ2hhbmdlJywgJ2F0aEZvY3VzJywgJ2F0aEJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhTbGlkZXIge1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIGF0aENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHN0cmluZz4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBzbGlkZXIgbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FjdGlvblRleHQnLCAnYWxpZ25tZW50JywgJ2FyaWFMaXZlTWVzc2FnZScsICdhdGhBcmlhTGFiZWwnLCAnYXRoSWQnLCAnYXRoUm9sZScsICdjbGlja2FibGUnLCAnY29sbGFwc2VMYWJlbCcsICdjb21wbGV0ZWRMYWJlbCcsICdkaXNhYmxlZCcsICdlcnJvckxhYmVsJywgJ2V4cGFuZExhYmVsJywgJ2ZlZWRiYWNrJywgJ2hlYWRpbmdUZXh0JywgJ2lzQ29sbGFwc2FibGUnLCAnaXNDb21wbGV0ZScsICdpc0V4cGFuZGVkJywgJ251bWJlcicsICdyZWFkb25seScsICdzZWxlY3RlZCcsICdzaXplJywgJ3RvdGFsJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtc3RlcCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWN0aW9uVGV4dCcsICdhbGlnbm1lbnQnLCAnYXJpYUxpdmVNZXNzYWdlJywgJ2F0aEFyaWFMYWJlbCcsICdhdGhJZCcsICdhdGhSb2xlJywgJ2NsaWNrYWJsZScsICdjb2xsYXBzZUxhYmVsJywgJ2NvbXBsZXRlZExhYmVsJywgJ2Rpc2FibGVkJywgJ2Vycm9yTGFiZWwnLCAnZXhwYW5kTGFiZWwnLCAnZmVlZGJhY2snLCAnaGVhZGluZ1RleHQnLCAnaXNDb2xsYXBzYWJsZScsICdpc0NvbXBsZXRlJywgJ2lzRXhwYW5kZWQnLCAnbnVtYmVyJywgJ3JlYWRvbmx5JywgJ3NlbGVjdGVkJywgJ3NpemUnLCAndG90YWwnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoU3RlcCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENsaWNrJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFN0ZXAgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFN0ZXAge1xuXG4gIGF0aENsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8bnVtYmVyPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FyaWFMaXZlTWVzc2FnZScsICdhdGhBcmlhTGFiZWwnLCAnYXRoUm9sZScsICdjbGlja2FibGUnLCAnY29sbGFwc2VMYWJlbCcsICdjb21wbGV0ZWRMYWJlbCcsICdlcnJvckxhYmVsJywgJ2V4cGFuZExhYmVsJywgJ2hlYWRpbmdJY29uJywgJ2hlYWRpbmdUZXh0JywgJ29yaWVudGF0aW9uJywgJ3JlYWRvbmx5JywgJ3NpemUnLCAnc3RhcnRGcm9tJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtc3RlcHBlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXJpYUxpdmVNZXNzYWdlJywgJ2F0aEFyaWFMYWJlbCcsICdhdGhSb2xlJywgJ2NsaWNrYWJsZScsICdjb2xsYXBzZUxhYmVsJywgJ2NvbXBsZXRlZExhYmVsJywgJ2Vycm9yTGFiZWwnLCAnZXhwYW5kTGFiZWwnLCAnaGVhZGluZ0ljb24nLCAnaGVhZGluZ1RleHQnLCAnb3JpZW50YXRpb24nLCAncmVhZG9ubHknLCAnc2l6ZScsICdzdGFydEZyb20nXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoU3RlcHBlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aFNlbGVjdCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhTdGVwcGVyIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhTdGVwcGVyIHtcblxuICBhdGhTZWxlY3Q6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQXRoU3RlcEVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnbmFtZScsICdyZWFkb25seScsICdzZWxlY3RlZCddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtc3dpdGNoJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXNhYmxlZCcsICduYW1lJywgJ3JlYWRvbmx5JywgJ3NlbGVjdGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aFN3aXRjaCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aEZvY3VzJywgJ2F0aEJsdXInLCAnYXRoQ2hhbmdlJ10pO1xuICB9XG59XG5cblxuaW1wb3J0IHR5cGUgeyBTd2l0Y2hDaGFuZ2VEZXRhaWwgYXMgSUF0aFN3aXRjaFN3aXRjaENoYW5nZURldGFpbCB9IGZyb20gJy4uL3R5cGVzL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhTd2l0Y2gge1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzd2l0Y2ggcmVjZWl2ZXMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzd2l0Y2ggbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHN3aXRjaCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBhdGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJQXRoU3dpdGNoU3dpdGNoQ2hhbmdlRGV0YWlsPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2ljb24nLCAnaWNvbkFyaWFMYWJlbCcsICdsYWJlbCcsICduYXZpZ2F0aW9uRGF0YScsICdzZWxlY3RlZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXRhYicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaWNvbicsICdpY29uQXJpYUxhYmVsJywgJ2xhYmVsJywgJ25hdmlnYXRpb25EYXRhJywgJ3NlbGVjdGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aFRhYiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRhYiBleHRlbmRzIENvbXBvbmVudHMuQXRoVGFiIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdjb2xvcicsICdmcm96ZW4nLCAnbm9TZWxlY3RBbGwnLCAnc2VsZWN0YWJsZScsICdzaXplJywgJ3N0cmlwZWQnXSxcbiAgbWV0aG9kczogWydyZWZyZXNoJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtdGFibGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdjb2xvcicsICdmcm96ZW4nLCAnbm9TZWxlY3RBbGwnLCAnc2VsZWN0YWJsZScsICdzaXplJywgJ3N0cmlwZWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGFibGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhTZWxlY3Rpb25DaGFuZ2UnLCAnYXRoVGFibGVDbGljayddKTtcbiAgfVxufVxuXG5cbmltcG9ydCB0eXBlIHsgVGFibGVTZWxlY3Rpb25DaGFuZ2VFdmVudCBhcyBJQXRoVGFibGVUYWJsZVNlbGVjdGlvbkNoYW5nZUV2ZW50IH0gZnJvbSAnLi4vdHlwZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgdHlwZSB7IFRhYmxlQ2xpY2tFdmVudCBhcyBJQXRoVGFibGVUYWJsZUNsaWNrRXZlbnQgfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhUYWJsZSB7XG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuZXZlciByb3cgc2VsZWN0aW9uIGNoYW5nZXNcbiAgICovXG4gIGF0aFNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhUYWJsZVRhYmxlU2VsZWN0aW9uQ2hhbmdlRXZlbnQ+PjtcbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gYSBjbGlja2FibGUgcm93IGlzIGNsaWNrZWRcbiAgICovXG4gIGF0aFRhYmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJQXRoVGFibGVUYWJsZUNsaWNrRXZlbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC10YWJsZS1ib2R5JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aFRhYmxlQm9keSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRhYmxlQm9keSBleHRlbmRzIENvbXBvbmVudHMuQXRoVGFibGVCb2R5IHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdjb2xvcicsICdmcm96ZW4nLCAnbm9TZWxlY3RBbGwnLCAnc2VsZWN0QWxsU3RhdGUnLCAnc2VsZWN0YWJsZScsICdzZWxlY3RlZFJvd3MnLCAnc2l6ZScsICd0b3RhbFJvd3MnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC10YWJsZS1oZWFkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdjb2xvcicsICdmcm96ZW4nLCAnbm9TZWxlY3RBbGwnLCAnc2VsZWN0QWxsU3RhdGUnLCAnc2VsZWN0YWJsZScsICdzZWxlY3RlZFJvd3MnLCAnc2l6ZScsICd0b3RhbFJvd3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGFibGVIZWFkZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhTZWxlY3RBbGxDaGFuZ2UnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IFRhYmxlU2VsZWN0QWxsQ2hhbmdlRXZlbnQgYXMgSUF0aFRhYmxlSGVhZGVyVGFibGVTZWxlY3RBbGxDaGFuZ2VFdmVudCB9IGZyb20gJy4uL3R5cGVzL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVGFibGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRhYmxlSGVhZGVyIHtcbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gc2VsZWN0IGFsbCBjaGVja2JveCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBhdGhTZWxlY3RBbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJQXRoVGFibGVIZWFkZXJUYWJsZVNlbGVjdEFsbENoYW5nZUV2ZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdjZWxsV2lkdGgnLCAnY29sb3InLCAnZnJvemVuJywgJ2hhc0ludGVyYWN0aXZpdHknLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXRhYmxlLWhlYWRlci1pdGVtJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhbGlnbm1lbnQnLCAnY2VsbFdpZHRoJywgJ2NvbG9yJywgJ2Zyb3plbicsICdoYXNJbnRlcmFjdGl2aXR5JywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGFibGVIZWFkZXJJdGVtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVGFibGVIZWFkZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhUYWJsZUhlYWRlckl0ZW0ge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY2xpY2thYmxlJywgJ2NsaWNrYWJsZUFyaWFMYWJlbCcsICdjb2xvcicsICdleHBhbmRlZCcsICdmcm96ZW4nLCAnaGFzQ2hpbGRyZW4nLCAnbGFzdCcsICdwYXJlbnRJZCcsICdyZXNlcnZlQ2xpY2thYmxlJywgJ3Jlc2VydmVFeHBhbmRlcicsICdyb3dJZCcsICdzZWxlY3RhYmxlJywgJ3NlbGVjdGVkJywgJ3NlbGVjdGlvbkdyb3VwTmFtZScsICdzaXplJywgJ3N0cmlwZWQnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC10YWJsZS1yb3cnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NsaWNrYWJsZScsICdjbGlja2FibGVBcmlhTGFiZWwnLCAnY29sb3InLCAnZXhwYW5kZWQnLCAnZnJvemVuJywgJ2hhc0NoaWxkcmVuJywgJ2xhc3QnLCAncGFyZW50SWQnLCAncmVzZXJ2ZUNsaWNrYWJsZScsICdyZXNlcnZlRXhwYW5kZXInLCAncm93SWQnLCAnc2VsZWN0YWJsZScsICdzZWxlY3RlZCcsICdzZWxlY3Rpb25Hcm91cE5hbWUnLCAnc2l6ZScsICdzdHJpcGVkJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF0aFRhYmxlUm93IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYXRoUm93U2VsZWN0aW9uQ2hhbmdlJywgJ2F0aFJvd0NsaWNrJ10pO1xuICB9XG59XG5cblxuaW1wb3J0IHR5cGUgeyBUYWJsZVJvd1NlbGVjdGlvbkNoYW5nZUV2ZW50IGFzIElBdGhUYWJsZVJvd1RhYmxlUm93U2VsZWN0aW9uQ2hhbmdlRXZlbnQgfSBmcm9tICcuLi90eXBlcy9jb21wb25lbnRzJztcbmltcG9ydCB0eXBlIHsgVGFibGVSb3dDbGlja0V2ZW50IGFzIElBdGhUYWJsZVJvd1RhYmxlUm93Q2xpY2tFdmVudCB9IGZyb20gJy4uL3R5cGVzL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVGFibGVSb3cgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRhYmxlUm93IHtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhpcyByb3cgc2VsZWN0aW9uIGNoYW5nZXNcbiAgICovXG4gIGF0aFJvd1NlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElBdGhUYWJsZVJvd1RhYmxlUm93U2VsZWN0aW9uQ2hhbmdlRXZlbnQ+PjtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhpcyBjbGlja2FibGUgcm93IGlzIGNsaWNrZWRcbiAgICovXG4gIGF0aFJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SUF0aFRhYmxlUm93VGFibGVSb3dDbGlja0V2ZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdjZWxsV2lkdGgnLCAnY29sb3InLCAnZXhwYW5kZWQnLCAnZXhwYW5kZXInLCAnZXhwYW5kZXJBcmlhQ29udHJvbHMnLCAnZnJvemVuJywgJ2hhc0ludGVyYWN0aXZpdHknLCAnaXNDaGlsZCcsICdpc0hlYWRlcicsICdub0Zyb3plblNoYWRvdycsICdzaXplJywgJ3N0cmlwZWQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC10YWJsZS1yb3ctaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2NlbGxXaWR0aCcsICdjb2xvcicsICdleHBhbmRlZCcsICdleHBhbmRlcicsICdleHBhbmRlckFyaWFDb250cm9scycsICdmcm96ZW4nLCAnaGFzSW50ZXJhY3Rpdml0eScsICdpc0NoaWxkJywgJ2lzSGVhZGVyJywgJ25vRnJvemVuU2hhZG93JywgJ3NpemUnLCAnc3RyaXBlZCddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhUYWJsZVJvd0l0ZW0ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhUYWJsZVJvd0l0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRhYmxlUm93SXRlbSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydpdGVtcycsICdsaXN0QXJpYUxhYmVsJywgJ3R5cGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F0aC10YWJzJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydpdGVtcycsICdsaXN0QXJpYUxhYmVsJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGFicyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRhYnMgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRhYnMge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaGVhZGluZ1RleHQnLCAnaWNvbicsICdzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtdGFnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdoZWFkaW5nVGV4dCcsICdpY29uJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGFnIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVGFnIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhUYWcge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnY29sdW1ucycsICdjb250ZW50JywgJ2hpZXJhcmNoeScsICdsaW5lcycsICd3aXRoVG9vbHRpcCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXRleHQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2NvbHVtbnMnLCAnY29udGVudCcsICdoaWVyYXJjaHknLCAnbGluZXMnLCAnd2l0aFRvb2x0aXAnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVGV4dCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRleHQgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRleHQge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaGFzQXJyb3cnLCAnaGVhZGluZ1RleHQnLCAnbWF4V2lkdGgnLCAncG9zaXRpb24nLCAndHJpZ2dlciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXRvb2x0aXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2hhc0Fycm93JywgJ2hlYWRpbmdUZXh0JywgJ21heFdpZHRoJywgJ3Bvc2l0aW9uJywgJ3RyaWdnZXInXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVG9vbHRpcCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEF0aFRvb2x0aXAgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRvb2x0aXAge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXJpYUxhYmVsJywgJ2ljb24nLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXRvb2x0aXAtdHJpZ2dlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXJpYUxhYmVsJywgJ2ljb24nLCAnc2l6ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBBdGhUb29sdGlwVHJpZ2dlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aENsaWNrJywgJ2F0aEZvY3VzJywgJ2F0aEJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVG9vbHRpcFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFRvb2x0aXBUcmlnZ2VyIHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIGF0aENsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBidXR0b24gZ2FpbnMgZm9jdXNcbiAgICovXG4gIGF0aEZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogRW1pdHRlZCB3aGVuIHRoZSBidXR0b24gbG9zZXMgZm9jdXNcbiAgICovXG4gIGF0aEJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2J1dHRvbkFyaWFMYWJlbCcsICdjbGlja2FibGUnLCAnZGVzY3JpcHRpb24nLCAnaW5pdGlhbHMnLCAnc3JjSW1hZ2UnLCAndHlwZScsICd1c2VyTmFtZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXRoLXVzZXItZGV0YWlsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydidXR0b25BcmlhTGFiZWwnLCAnY2xpY2thYmxlJywgJ2Rlc2NyaXB0aW9uJywgJ2luaXRpYWxzJywgJ3NyY0ltYWdlJywgJ3R5cGUnLCAndXNlck5hbWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVXNlckRldGFpbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2F0aEFjdGlvbiddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBBdGhVc2VyRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50cy5BdGhVc2VyRGV0YWlsIHtcbiAgLyoqXG4gICAqIEVtbWl0dGVkIHdoZW4gYnV0dG9uLWxpbmsgaXMgY2xpY2tlZC5cbiAgICovXG4gIGF0aEFjdGlvbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnaW5pdGlhbHMnLCAnb3BlbicsICdzcmNJbWFnZScsICd0eXBlJywgJ3VzZXJOYW1lJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtdXNlci1tZW51JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydpbml0aWFscycsICdvcGVuJywgJ3NyY0ltYWdlJywgJ3R5cGUnLCAndXNlck5hbWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXRoVXNlck1lbnUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhdGhBY3Rpb24nXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQXRoVXNlck1lbnUgZXh0ZW5kcyBDb21wb25lbnRzLkF0aFVzZXJNZW51IHtcbiAgLyoqXG4gICAqIEVtaXR0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWRcbiAgICovXG4gIGF0aEFjdGlvbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgaXRlbTogSFRNTEF0aE1lbnVCdXR0b25JdGVtRWxlbWVudCB9Pj47XG59XG5cblxuIl19