import { __decorate } from "tslib";
import * as i0 from "@angular/core";
import {
  Component,
  ChangeDetectionStrategy,
  Directive,
  HostListener,
  APP_INITIALIZER,
  NgModule,
} from "@angular/core";
import { fromEvent } from "rxjs";
import { NG_VALUE_ACCESSOR, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => (this.el[item] = val));
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true,
    });
  });
};
const proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() =>
        this.el[methodName].apply(this.el, args),
      );
    };
  });
};
const proxyOutputs = (instance, el, events) => {
  events.forEach(
    (eventName) => (instance[eventName] = fromEvent(el, eventName)),
  );
};
const defineCustomElement = (tagName, customElement) => {
  if (
    customElement !== undefined &&
    typeof customElements !== "undefined" &&
    !customElements.get(tagName)
  ) {
    customElements.define(tagName, customElement);
  }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
  const decorator = function (cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

let AthAccordion = class AthAccordion {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthAccordion,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthAccordion,
      selector: "ath-accordion",
      inputs: {
        ariaLabel: "ariaLabel",
        expand: "expand",
        noLastItemDivider: "noLastItemDivider",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthAccordion = __decorate(
  [
    ProxyCmp({
      inputs: ["ariaLabel", "expand", "noLastItemDivider"],
    }),
  ],
  AthAccordion,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthAccordion,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-accordion",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["ariaLabel", "expand", "noLastItemDivider"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthAccordionItem = class AthAccordionItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["opened"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthAccordionItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthAccordionItem,
      selector: "ath-accordion-item",
      inputs: {
        description: "description",
        disabled: "disabled",
        expanded: "expanded",
        headingLevel: "headingLevel",
        headingText: "headingText",
        icon: "icon",
        noDivider: "noDivider",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthAccordionItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "description",
        "disabled",
        "expanded",
        "headingLevel",
        "headingText",
        "icon",
        "noDivider",
      ],
      methods: ["close"],
    }),
  ],
  AthAccordionItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthAccordionItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-accordion-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "description",
            "disabled",
            "expanded",
            "headingLevel",
            "headingText",
            "icon",
            "noDivider",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthActionBar = class AthActionBar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthActionBar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthActionBar,
      selector: "ath-action-bar",
      inputs: { alignment: "alignment", size: "size" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthActionBar = __decorate(
  [
    ProxyCmp({
      inputs: ["alignment", "size"],
    }),
  ],
  AthActionBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthActionBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-action-bar",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["alignment", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthAlert = class AthAlert {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthAlert,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthAlert,
      selector: "ath-alert",
      inputs: {
        closeAriaLabel: "closeAriaLabel",
        color: "color",
        description: "description",
        hasClose: "hasClose",
        headingLevel: "headingLevel",
        headingText: "headingText",
        isUrgent: "isUrgent",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthAlert = __decorate(
  [
    ProxyCmp({
      inputs: [
        "closeAriaLabel",
        "color",
        "description",
        "hasClose",
        "headingLevel",
        "headingText",
        "isUrgent",
        "type",
      ],
    }),
  ],
  AthAlert,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthAlert,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-alert",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "closeAriaLabel",
            "color",
            "description",
            "hasClose",
            "headingLevel",
            "headingText",
            "isUrgent",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthAvatar = class AthAvatar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthAvatar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthAvatar,
      selector: "ath-avatar",
      inputs: {
        ariaLabelledby: "ariaLabelledby",
        avatarName: "avatarName",
        initials: "initials",
        size: "size",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthAvatar = __decorate(
  [
    ProxyCmp({
      inputs: ["ariaLabelledby", "avatarName", "initials", "size", "type"],
    }),
  ],
  AthAvatar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthAvatar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-avatar",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["ariaLabelledby", "avatarName", "initials", "size", "type"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthBadge = class AthBadge {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthBadge,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthBadge,
      selector: "ath-badge",
      inputs: {
        color: "color",
        distanceX: "distanceX",
        distanceY: "distanceY",
        label: "label",
        max: "max",
        position: "position",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthBadge = __decorate(
  [
    ProxyCmp({
      inputs: [
        "color",
        "distanceX",
        "distanceY",
        "label",
        "max",
        "position",
        "type",
        "value",
      ],
    }),
  ],
  AthBadge,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthBadge,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-badge",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "color",
            "distanceX",
            "distanceY",
            "label",
            "max",
            "position",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthBreadcrumb = class AthBreadcrumb {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthBreadcrumb,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthBreadcrumb,
      selector: "ath-breadcrumb",
      inputs: {
        athAriaLabel: "athAriaLabel",
        collapsed: "collapsed",
        options: "options",
        separator: "separator",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthBreadcrumb = __decorate(
  [
    ProxyCmp({
      inputs: ["athAriaLabel", "collapsed", "options", "separator"],
    }),
  ],
  AthBreadcrumb,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthBreadcrumb,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-breadcrumb",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["athAriaLabel", "collapsed", "options", "separator"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthButton = class AthButton {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthButton,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthButton,
      selector: "ath-button",
      inputs: {
        clear: "clear",
        color: "color",
        disabled: "disabled",
        fullWidth: "fullWidth",
        icon: "icon",
        iconPosition: "iconPosition",
        size: "size",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthButton = __decorate(
  [
    ProxyCmp({
      inputs: [
        "clear",
        "color",
        "disabled",
        "fullWidth",
        "icon",
        "iconPosition",
        "size",
        "type",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthButton,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthButton,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-button",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "clear",
            "color",
            "disabled",
            "fullWidth",
            "icon",
            "iconPosition",
            "size",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthButtonExpandable = class AthButtonExpandable {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athToggleCollapse"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthButtonExpandable,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthButtonExpandable,
      selector: "ath-button-expandable",
      inputs: {
        collapseTarget: "collapseTarget",
        disabled: "disabled",
        icon: "icon",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthButtonExpandable = __decorate(
  [
    ProxyCmp({
      inputs: ["collapseTarget", "disabled", "icon", "size"],
      methods: ["setFocus"],
    }),
  ],
  AthButtonExpandable,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthButtonExpandable,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-button-expandable",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["collapseTarget", "disabled", "icon", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthButtonLink = class AthButtonLink {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthButtonLink,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthButtonLink,
      selector: "ath-button-link",
      inputs: {
        color: "color",
        disabled: "disabled",
        icon: "icon",
        iconPosition: "iconPosition",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthButtonLink = __decorate(
  [
    ProxyCmp({
      inputs: ["color", "disabled", "icon", "iconPosition", "size"],
      methods: ["setFocus"],
    }),
  ],
  AthButtonLink,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthButtonLink,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-button-link",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["color", "disabled", "icon", "iconPosition", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCalendar = class AthCalendar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCalendar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCalendar,
      selector: "ath-calendar",
      inputs: {
        color: "color",
        disabledDates: "disabledDates",
        highlightedDates: "highlightedDates",
        highlightedWeekends: "highlightedWeekends",
        max: "max",
        min: "min",
        selected: "selected",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCalendar = __decorate(
  [
    ProxyCmp({
      inputs: [
        "color",
        "disabledDates",
        "highlightedDates",
        "highlightedWeekends",
        "max",
        "min",
        "selected",
        "type",
      ],
    }),
  ],
  AthCalendar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCalendar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-calendar",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "color",
            "disabledDates",
            "highlightedDates",
            "highlightedWeekends",
            "max",
            "min",
            "selected",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCard = class AthCard {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCard,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCard,
      selector: "ath-card",
      inputs: {
        ariaLabelledBy: "ariaLabelledBy",
        clickable: "clickable",
        fluid: "fluid",
        maxWidth: "maxWidth",
        orientation: "orientation",
        size: "size",
        width: "width",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCard = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabelledBy",
        "clickable",
        "fluid",
        "maxWidth",
        "orientation",
        "size",
        "width",
      ],
    }),
  ],
  AthCard,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCard,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-card",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabelledBy",
            "clickable",
            "fluid",
            "maxWidth",
            "orientation",
            "size",
            "width",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCardHeader = class AthCardHeader {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCardHeader,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCardHeader,
      selector: "ath-card-header",
      inputs: {
        date: "date",
        headingText: "headingText",
        overline: "overline",
        subtitle: "subtitle",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCardHeader = __decorate(
  [
    ProxyCmp({
      inputs: ["date", "headingText", "overline", "subtitle"],
    }),
  ],
  AthCardHeader,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCardHeader,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-card-header",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["date", "headingText", "overline", "subtitle"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCardSelectable = class AthCardSelectable {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChange", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCardSelectable,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCardSelectable,
      selector: "ath-card-selectable",
      inputs: {
        disabled: "disabled",
        headingText: "headingText",
        overline: "overline",
        selected: "selected",
        size: "size",
        subtitle: "subtitle",
        tag: "tag",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCardSelectable = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "headingText",
        "overline",
        "selected",
        "size",
        "subtitle",
        "tag",
        "type",
      ],
      methods: ["select", "unselect"],
    }),
  ],
  AthCardSelectable,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCardSelectable,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-card-selectable",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "headingText",
            "overline",
            "selected",
            "size",
            "subtitle",
            "tag",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCardSelectableGroup = class AthCardSelectableGroup {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athValueChanged"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCardSelectableGroup,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCardSelectableGroup,
      selector: "ath-card-selectable-group",
      inputs: { disabled: "disabled", multiple: "multiple", size: "size" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCardSelectableGroup = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "multiple", "size"],
    }),
  ],
  AthCardSelectableGroup,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCardSelectableGroup,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-card-selectable-group",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "multiple", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCardThumbnail = class AthCardThumbnail {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCardThumbnail,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCardThumbnail,
      selector: "ath-card-thumbnail",
      inputs: {
        bottomTag: "bottomTag",
        highlightText: "highlightText",
        topTag: "topTag",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCardThumbnail = __decorate(
  [
    ProxyCmp({
      inputs: ["bottomTag", "highlightText", "topTag", "type"],
      methods: ["updateTypeCard"],
    }),
  ],
  AthCardThumbnail,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCardThumbnail,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-card-thumbnail",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["bottomTag", "highlightText", "topTag", "type"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCheckbox = class AthCheckbox {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athFocus", "athBlur", "athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCheckbox,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCheckbox,
      selector: "ath-checkbox",
      inputs: {
        ariaLabel: "ariaLabel",
        autofocus: "autofocus",
        checked: "checked",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideRequired: "hideRequired",
        indeterminate: "indeterminate",
        label: "label",
        name: "name",
        readonly: "readonly",
        required: "required",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCheckbox = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "autofocus",
        "checked",
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "hideRequired",
        "indeterminate",
        "label",
        "name",
        "readonly",
        "required",
        "value",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthCheckbox,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCheckbox,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-checkbox",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "autofocus",
            "checked",
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "hideRequired",
            "indeterminate",
            "label",
            "name",
            "readonly",
            "required",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCheckboxGroup = class AthCheckboxGroup {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChecked"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCheckboxGroup,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCheckboxGroup,
      selector: "ath-checkbox-group",
      inputs: {
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        label: "label",
        name: "name",
        readonly: "readonly",
        requiredAriaLabel: "requiredAriaLabel",
        showRequired: "showRequired",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCheckboxGroup = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "label",
        "name",
        "readonly",
        "requiredAriaLabel",
        "showRequired",
        "tooltipText",
        "tooltipWidth",
      ],
    }),
  ],
  AthCheckboxGroup,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCheckboxGroup,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-checkbox-group",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "label",
            "name",
            "readonly",
            "requiredAriaLabel",
            "showRequired",
            "tooltipText",
            "tooltipWidth",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthChipChoice = class AthChipChoice {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChange", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthChipChoice,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthChipChoice,
      selector: "ath-chip-choice",
      inputs: {
        disabled: "disabled",
        icon: "icon",
        label: "label",
        name: "name",
        role: "role",
        selected: "selected",
        size: "size",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthChipChoice = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "icon",
        "label",
        "name",
        "role",
        "selected",
        "size",
        "value",
      ],
      methods: ["select", "unselect"],
    }),
  ],
  AthChipChoice,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthChipChoice,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-chip-choice",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "icon",
            "label",
            "name",
            "role",
            "selected",
            "size",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthChipChoiceGroup = class AthChipChoiceGroup {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChangeValue"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthChipChoiceGroup,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthChipChoiceGroup,
      selector: "ath-chip-choice-group",
      inputs: {
        disabled: "disabled",
        multiple: "multiple",
        name: "name",
        size: "size",
        value: "value",
        width: "width",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthChipChoiceGroup = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "multiple", "name", "size", "value", "width"],
    }),
  ],
  AthChipChoiceGroup,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthChipChoiceGroup,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-chip-choice-group",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "multiple", "name", "size", "value", "width"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthChipDismiss = class AthChipDismiss {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athDismiss"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthChipDismiss,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthChipDismiss,
      selector: "ath-chip-dismiss",
      inputs: {
        disabled: "disabled",
        headingText: "headingText",
        icon: "icon",
        labelDismiss: "labelDismiss",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthChipDismiss = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "headingText", "icon", "labelDismiss", "size"],
    }),
  ],
  AthChipDismiss,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthChipDismiss,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-chip-dismiss",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "headingText", "icon", "labelDismiss", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthChipDismissGroup = class AthChipDismissGroup {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthChipDismissGroup,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthChipDismissGroup,
      selector: "ath-chip-dismiss-group",
      inputs: { disabled: "disabled", size: "size", width: "width" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthChipDismissGroup = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "size", "width"],
    }),
  ],
  AthChipDismissGroup,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthChipDismissGroup,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-chip-dismiss-group",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "size", "width"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCollapse = class AthCollapse {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athCollapseState"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCollapse,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCollapse,
      selector: "ath-collapse",
      inputs: { show: "show" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCollapse = __decorate(
  [
    ProxyCmp({
      inputs: ["show"],
    }),
  ],
  AthCollapse,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCollapse,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-collapse",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["show"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthCollapseIcon = class AthCollapseIcon {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthCollapseIcon,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthCollapseIcon,
      selector: "ath-collapse-icon",
      inputs: { expanded: "expanded" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthCollapseIcon = __decorate(
  [
    ProxyCmp({
      inputs: ["expanded"],
    }),
  ],
  AthCollapseIcon,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthCollapseIcon,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-collapse-icon",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["expanded"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthDatepicker = class AthDatepicker {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, [
      "athFocus",
      "athBlur",
      "athChange",
      "athInput",
    ]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthDatepicker,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthDatepicker,
      selector: "ath-datepicker",
      inputs: {
        autofocus: "autofocus",
        color: "color",
        disabled: "disabled",
        disabledDates: "disabledDates",
        feedback: "feedback",
        feedbackText: "feedbackText",
        format: "format",
        helperText: "helperText",
        hideRequired: "hideRequired",
        highlightedDates: "highlightedDates",
        highlightedWeekends: "highlightedWeekends",
        inputAriaLabel: "inputAriaLabel",
        label: "label",
        max: "max",
        min: "min",
        name: "name",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        size: "size",
        submitOnEnter: "submitOnEnter",
        tooltipText: "tooltipText",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthDatepicker = __decorate(
  [
    ProxyCmp({
      inputs: [
        "autofocus",
        "color",
        "disabled",
        "disabledDates",
        "feedback",
        "feedbackText",
        "format",
        "helperText",
        "hideRequired",
        "highlightedDates",
        "highlightedWeekends",
        "inputAriaLabel",
        "label",
        "max",
        "min",
        "name",
        "placeholder",
        "readonly",
        "required",
        "size",
        "submitOnEnter",
        "tooltipText",
        "type",
        "value",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthDatepicker,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthDatepicker,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-datepicker",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "autofocus",
            "color",
            "disabled",
            "disabledDates",
            "feedback",
            "feedbackText",
            "format",
            "helperText",
            "hideRequired",
            "highlightedDates",
            "highlightedWeekends",
            "inputAriaLabel",
            "label",
            "max",
            "min",
            "name",
            "placeholder",
            "readonly",
            "required",
            "size",
            "submitOnEnter",
            "tooltipText",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthDatepickerRange = class AthDatepickerRange {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athFocus", "athBlur", "athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthDatepickerRange,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthDatepickerRange,
      selector: "ath-datepicker-range",
      inputs: {
        autofocus: "autofocus",
        color: "color",
        disabled: "disabled",
        disabledDates: "disabledDates",
        feedback: "feedback",
        feedbackText: "feedbackText",
        format: "format",
        helperText: "helperText",
        hidePanel: "hidePanel",
        hideRequired: "hideRequired",
        highlightedDates: "highlightedDates",
        highlightedWeekends: "highlightedWeekends",
        inputAriaLabelEnd: "inputAriaLabelEnd",
        inputAriaLabelStart: "inputAriaLabelStart",
        label: "label",
        labelEnd: "labelEnd",
        labelStart: "labelStart",
        max: "max",
        min: "min",
        name: "name",
        placeholderEnd: "placeholderEnd",
        placeholderStart: "placeholderStart",
        readonly: "readonly",
        required: "required",
        requiredEnd: "requiredEnd",
        requiredStart: "requiredStart",
        size: "size",
        submitOnEnter: "submitOnEnter",
        tooltipText: "tooltipText",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthDatepickerRange = __decorate(
  [
    ProxyCmp({
      inputs: [
        "autofocus",
        "color",
        "disabled",
        "disabledDates",
        "feedback",
        "feedbackText",
        "format",
        "helperText",
        "hidePanel",
        "hideRequired",
        "highlightedDates",
        "highlightedWeekends",
        "inputAriaLabelEnd",
        "inputAriaLabelStart",
        "label",
        "labelEnd",
        "labelStart",
        "max",
        "min",
        "name",
        "placeholderEnd",
        "placeholderStart",
        "readonly",
        "required",
        "requiredEnd",
        "requiredStart",
        "size",
        "submitOnEnter",
        "tooltipText",
        "type",
        "value",
      ],
      methods: ["setFocus", "setFocusEnd"],
    }),
  ],
  AthDatepickerRange,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthDatepickerRange,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-datepicker-range",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "autofocus",
            "color",
            "disabled",
            "disabledDates",
            "feedback",
            "feedbackText",
            "format",
            "helperText",
            "hidePanel",
            "hideRequired",
            "highlightedDates",
            "highlightedWeekends",
            "inputAriaLabelEnd",
            "inputAriaLabelStart",
            "label",
            "labelEnd",
            "labelStart",
            "max",
            "min",
            "name",
            "placeholderEnd",
            "placeholderStart",
            "readonly",
            "required",
            "requiredEnd",
            "requiredStart",
            "size",
            "submitOnEnter",
            "tooltipText",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthDivider = class AthDivider {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthDivider,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthDivider,
      selector: "ath-divider",
      inputs: { color: "color", orientation: "orientation", size: "size" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthDivider = __decorate(
  [
    ProxyCmp({
      inputs: ["color", "orientation", "size"],
    }),
  ],
  AthDivider,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthDivider,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-divider",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["color", "orientation", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthDropdown = class AthDropdown {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChange", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthDropdown,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthDropdown,
      selector: "ath-dropdown",
      inputs: {
        announceResultText: "announceResultText",
        disabled: "disabled",
        dropdownAriaLabel: "dropdownAriaLabel",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideRequired: "hideRequired",
        label: "label",
        multiselect: "multiselect",
        name: "name",
        nochipsText: "nochipsText",
        noresultText: "noresultText",
        open: "open",
        overlayMaxHeight: "overlayMaxHeight",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        search: "search",
        searchAriaLabel: "searchAriaLabel",
        searchPlaceholder: "searchPlaceholder",
        showChips: "showChips",
        size: "size",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        value: "value",
        width: "width",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthDropdown = __decorate(
  [
    ProxyCmp({
      inputs: [
        "announceResultText",
        "disabled",
        "dropdownAriaLabel",
        "feedback",
        "feedbackText",
        "helperText",
        "hideRequired",
        "label",
        "multiselect",
        "name",
        "nochipsText",
        "noresultText",
        "open",
        "overlayMaxHeight",
        "placeholder",
        "readonly",
        "required",
        "search",
        "searchAriaLabel",
        "searchPlaceholder",
        "showChips",
        "size",
        "tooltipText",
        "tooltipWidth",
        "value",
        "width",
      ],
    }),
  ],
  AthDropdown,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthDropdown,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-dropdown",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "announceResultText",
            "disabled",
            "dropdownAriaLabel",
            "feedback",
            "feedbackText",
            "helperText",
            "hideRequired",
            "label",
            "multiselect",
            "name",
            "nochipsText",
            "noresultText",
            "open",
            "overlayMaxHeight",
            "placeholder",
            "readonly",
            "required",
            "search",
            "searchAriaLabel",
            "searchPlaceholder",
            "showChips",
            "size",
            "tooltipText",
            "tooltipWidth",
            "value",
            "width",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthDropdownOption = class AthDropdownOption {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["optSelected"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthDropdownOption,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthDropdownOption,
      selector: "ath-dropdown-option",
      inputs: {
        disabled: "disabled",
        icon: "icon",
        name: "name",
        optionGroup: "optionGroup",
        selected: "selected",
        selectedAriaLabel: "selectedAriaLabel",
        text: "text",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthDropdownOption = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "icon",
        "name",
        "optionGroup",
        "selected",
        "selectedAriaLabel",
        "text",
        "value",
      ],
      methods: [
        "updateMultiselect",
        "updateGroupOption",
        "activeDropdownOption",
        "noActiveDropdownOption",
        "filterNotFound",
        "setSelected",
        "filterFound",
        "selectOption",
        "unselectOption",
      ],
    }),
  ],
  AthDropdownOption,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthDropdownOption,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-dropdown-option",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "icon",
            "name",
            "optionGroup",
            "selected",
            "selectedAriaLabel",
            "text",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthEmptyState = class AthEmptyState {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthEmptyState,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthEmptyState,
      selector: "ath-empty-state",
      inputs: {
        description: "description",
        headingLevel: "headingLevel",
        headingSize: "headingSize",
        headingText: "headingText",
        hideImage: "hideImage",
        loadingLabel: "loadingLabel",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthEmptyState = __decorate(
  [
    ProxyCmp({
      inputs: [
        "description",
        "headingLevel",
        "headingSize",
        "headingText",
        "hideImage",
        "loadingLabel",
        "type",
      ],
    }),
  ],
  AthEmptyState,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthEmptyState,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-empty-state",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "description",
            "headingLevel",
            "headingSize",
            "headingText",
            "hideImage",
            "loadingLabel",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthIcon = class AthIcon {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthIcon,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthIcon,
      selector: "ath-icon",
      inputs: {
        ariaLabel: "ariaLabel",
        ariaLabelledby: "ariaLabelledby",
        color: "color",
        icon: "icon",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthIcon = __decorate(
  [
    ProxyCmp({
      inputs: ["ariaLabel", "ariaLabelledby", "color", "icon", "size"],
    }),
  ],
  AthIcon,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthIcon,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-icon",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["ariaLabel", "ariaLabelledby", "color", "icon", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthInputCounter = class AthInputCounter {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, [
      "athFocus",
      "athBlur",
      "athChange",
      "athInput",
    ]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthInputCounter,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthInputCounter,
      selector: "ath-input-counter",
      inputs: {
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideControls: "hideControls",
        hideRequired: "hideRequired",
        inputAriaLabel: "inputAriaLabel",
        label: "label",
        max: "max",
        min: "min",
        name: "name",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        size: "size",
        step: "step",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        unit: "unit",
        unitAriaLabel: "unitAriaLabel",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthInputCounter = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "hideControls",
        "hideRequired",
        "inputAriaLabel",
        "label",
        "max",
        "min",
        "name",
        "placeholder",
        "readonly",
        "required",
        "size",
        "step",
        "tooltipText",
        "tooltipWidth",
        "unit",
        "unitAriaLabel",
        "value",
      ],
    }),
  ],
  AthInputCounter,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthInputCounter,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-input-counter",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "hideControls",
            "hideRequired",
            "inputAriaLabel",
            "label",
            "max",
            "min",
            "name",
            "placeholder",
            "readonly",
            "required",
            "size",
            "step",
            "tooltipText",
            "tooltipWidth",
            "unit",
            "unitAriaLabel",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthInputPassword = class AthInputPassword {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, [
      "athFocus",
      "athBlur",
      "athChange",
      "athClear",
      "athInput",
    ]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthInputPassword,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthInputPassword,
      selector: "ath-input-password",
      inputs: {
        autocomplete: "autocomplete",
        autofocus: "autofocus",
        counter: "counter",
        counterLabel: "counterLabel",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideRequired: "hideRequired",
        inputAriaLabel: "inputAriaLabel",
        inputTabindex: "inputTabindex",
        label: "label",
        labelHidePassword: "labelHidePassword",
        labelShowPassword: "labelShowPassword",
        maxlength: "maxlength",
        name: "name",
        pattern: "pattern",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        size: "size",
        submitOnEnter: "submitOnEnter",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthInputPassword = __decorate(
  [
    ProxyCmp({
      inputs: [
        "autocomplete",
        "autofocus",
        "counter",
        "counterLabel",
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "hideRequired",
        "inputAriaLabel",
        "inputTabindex",
        "label",
        "labelHidePassword",
        "labelShowPassword",
        "maxlength",
        "name",
        "pattern",
        "placeholder",
        "readonly",
        "required",
        "size",
        "submitOnEnter",
        "tooltipText",
        "tooltipWidth",
        "value",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthInputPassword,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthInputPassword,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-input-password",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "autocomplete",
            "autofocus",
            "counter",
            "counterLabel",
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "hideRequired",
            "inputAriaLabel",
            "inputTabindex",
            "label",
            "labelHidePassword",
            "labelShowPassword",
            "maxlength",
            "name",
            "pattern",
            "placeholder",
            "readonly",
            "required",
            "size",
            "submitOnEnter",
            "tooltipText",
            "tooltipWidth",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthInputText = class AthInputText {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, [
      "athFocus",
      "athBlur",
      "athChange",
      "athClear",
      "athInput",
    ]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthInputText,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthInputText,
      selector: "ath-input-text",
      inputs: {
        autocomplete: "autocomplete",
        autofocus: "autofocus",
        clearButtonAriaLabel: "clearButtonAriaLabel",
        counter: "counter",
        counterLabel: "counterLabel",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        hasClear: "hasClear",
        helperText: "helperText",
        hideRequired: "hideRequired",
        icon: "icon",
        iconPosition: "iconPosition",
        inputAriaLabel: "inputAriaLabel",
        inputTabindex: "inputTabindex",
        label: "label",
        maxlength: "maxlength",
        name: "name",
        pattern: "pattern",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        size: "size",
        submitOnEnter: "submitOnEnter",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthInputText = __decorate(
  [
    ProxyCmp({
      inputs: [
        "autocomplete",
        "autofocus",
        "clearButtonAriaLabel",
        "counter",
        "counterLabel",
        "disabled",
        "feedback",
        "feedbackText",
        "hasClear",
        "helperText",
        "hideRequired",
        "icon",
        "iconPosition",
        "inputAriaLabel",
        "inputTabindex",
        "label",
        "maxlength",
        "name",
        "pattern",
        "placeholder",
        "readonly",
        "required",
        "size",
        "submitOnEnter",
        "tooltipText",
        "tooltipWidth",
        "type",
        "value",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthInputText,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthInputText,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-input-text",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "autocomplete",
            "autofocus",
            "clearButtonAriaLabel",
            "counter",
            "counterLabel",
            "disabled",
            "feedback",
            "feedbackText",
            "hasClear",
            "helperText",
            "hideRequired",
            "icon",
            "iconPosition",
            "inputAriaLabel",
            "inputTabindex",
            "label",
            "maxlength",
            "name",
            "pattern",
            "placeholder",
            "readonly",
            "required",
            "size",
            "submitOnEnter",
            "tooltipText",
            "tooltipWidth",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthInputTextarea = class AthInputTextarea {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, [
      "athFocus",
      "athBlur",
      "athChange",
      "athInput",
    ]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthInputTextarea,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthInputTextarea,
      selector: "ath-input-textarea",
      inputs: {
        autocomplete: "autocomplete",
        autofocus: "autofocus",
        counter: "counter",
        counterLabel: "counterLabel",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideRequired: "hideRequired",
        inputAriaLabel: "inputAriaLabel",
        inputTabindex: "inputTabindex",
        label: "label",
        maxlength: "maxlength",
        name: "name",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        rows: "rows",
        size: "size",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        value: "value",
        width: "width",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthInputTextarea = __decorate(
  [
    ProxyCmp({
      inputs: [
        "autocomplete",
        "autofocus",
        "counter",
        "counterLabel",
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "hideRequired",
        "inputAriaLabel",
        "inputTabindex",
        "label",
        "maxlength",
        "name",
        "placeholder",
        "readonly",
        "required",
        "rows",
        "size",
        "tooltipText",
        "tooltipWidth",
        "value",
        "width",
      ],
      methods: ["setFocus"],
    }),
  ],
  AthInputTextarea,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthInputTextarea,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-input-textarea",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "autocomplete",
            "autofocus",
            "counter",
            "counterLabel",
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "hideRequired",
            "inputAriaLabel",
            "inputTabindex",
            "label",
            "maxlength",
            "name",
            "placeholder",
            "readonly",
            "required",
            "rows",
            "size",
            "tooltipText",
            "tooltipWidth",
            "value",
            "width",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthLink = class AthLink {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthLink,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthLink,
      selector: "ath-link",
      inputs: {
        ariaDescribedby: "ariaDescribedby",
        ariaLabel: "ariaLabel",
        ariaLabelledby: "ariaLabelledby",
        disabled: "disabled",
        externalLabel: "externalLabel",
        icon: "icon",
        iconAriaLabel: "iconAriaLabel",
        linkHref: "linkHref",
        linkTarget: "linkTarget",
        size: "size",
        underline: "underline",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthLink = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaDescribedby",
        "ariaLabel",
        "ariaLabelledby",
        "disabled",
        "externalLabel",
        "icon",
        "iconAriaLabel",
        "linkHref",
        "linkTarget",
        "size",
        "underline",
      ],
    }),
  ],
  AthLink,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthLink,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-link",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaDescribedby",
            "ariaLabel",
            "ariaLabelledby",
            "disabled",
            "externalLabel",
            "icon",
            "iconAriaLabel",
            "linkHref",
            "linkTarget",
            "size",
            "underline",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthList = class AthList {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthList,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthList,
      selector: "ath-list",
      inputs: {
        clickable: "clickable",
        disabled: "disabled",
        hasDivider: "hasDivider",
        orientation: "orientation",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthList = __decorate(
  [
    ProxyCmp({
      inputs: ["clickable", "disabled", "hasDivider", "orientation", "size"],
    }),
  ],
  AthList,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthList,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-list",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "clickable",
            "disabled",
            "hasDivider",
            "orientation",
            "size",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthListItem = class AthListItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthListItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthListItem,
      selector: "ath-list-item",
      inputs: {
        athAriaLabel: "athAriaLabel",
        clickable: "clickable",
        description: "description",
        disabled: "disabled",
        externalLabel: "externalLabel",
        hasDivider: "hasDivider",
        headingLevel: "headingLevel",
        headingText: "headingText",
        href: "href",
        orientation: "orientation",
        rel: "rel",
        size: "size",
        subtitle: "subtitle",
        target: "target",
        tooltip: "tooltip",
        tooltipMaxWidth: "tooltipMaxWidth",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthListItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "athAriaLabel",
        "clickable",
        "description",
        "disabled",
        "externalLabel",
        "hasDivider",
        "headingLevel",
        "headingText",
        "href",
        "orientation",
        "rel",
        "size",
        "subtitle",
        "target",
        "tooltip",
        "tooltipMaxWidth",
      ],
    }),
  ],
  AthListItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthListItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-list-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "athAriaLabel",
            "clickable",
            "description",
            "disabled",
            "externalLabel",
            "hasDivider",
            "headingLevel",
            "headingText",
            "href",
            "orientation",
            "rel",
            "size",
            "subtitle",
            "target",
            "tooltip",
            "tooltipMaxWidth",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuButton = class AthMenuButton {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athAction"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuButton,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuButton,
      selector: "ath-menu-button",
      inputs: {
        alignment: "alignment",
        athAriaLabel: "athAriaLabel",
        autofocus: "autofocus",
        clear: "clear",
        color: "color",
        disabled: "disabled",
        icon: "icon",
        open: "open",
        overlayMaxHeight: "overlayMaxHeight",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuButton = __decorate(
  [
    ProxyCmp({
      inputs: [
        "alignment",
        "athAriaLabel",
        "autofocus",
        "clear",
        "color",
        "disabled",
        "icon",
        "open",
        "overlayMaxHeight",
        "size",
      ],
    }),
  ],
  AthMenuButton,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuButton,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-button",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "alignment",
            "athAriaLabel",
            "autofocus",
            "clear",
            "color",
            "disabled",
            "icon",
            "open",
            "overlayMaxHeight",
            "size",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuButtonItem = class AthMenuButtonItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelected"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuButtonItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuButtonItem,
      selector: "ath-menu-button-item",
      inputs: {
        disabled: "disabled",
        groupName: "groupName",
        icon: "icon",
        itemTabIndex: "itemTabIndex",
        name: "name",
        text: "text",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuButtonItem = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "groupName", "icon", "itemTabIndex", "name", "text"],
    }),
  ],
  AthMenuButtonItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuButtonItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-button-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "groupName",
            "icon",
            "itemTabIndex",
            "name",
            "text",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuHorizontal = class AthMenuHorizontal {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelected"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuHorizontal,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuHorizontal,
      selector: "ath-menu-horizontal",
      inputs: {
        athAriaLabel: "athAriaLabel",
        hasDivider: "hasDivider",
        items: "items",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuHorizontal = __decorate(
  [
    ProxyCmp({
      inputs: ["athAriaLabel", "hasDivider", "items"],
    }),
  ],
  AthMenuHorizontal,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuHorizontal,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-horizontal",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["athAriaLabel", "hasDivider", "items"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuHorizontalItem = class AthMenuHorizontalItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuHorizontalItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuHorizontalItem,
      selector: "ath-menu-horizontal-item",
      inputs: {
        badgeLabel: "badgeLabel",
        badgeMax: "badgeMax",
        badgeValue: "badgeValue",
        disabled: "disabled",
        externalLabel: "externalLabel",
        href: "href",
        label: "label",
        rel: "rel",
        selected: "selected",
        target: "target",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuHorizontalItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "badgeLabel",
        "badgeMax",
        "badgeValue",
        "disabled",
        "externalLabel",
        "href",
        "label",
        "rel",
        "selected",
        "target",
        "value",
      ],
    }),
  ],
  AthMenuHorizontalItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuHorizontalItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-horizontal-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "badgeLabel",
            "badgeMax",
            "badgeValue",
            "disabled",
            "externalLabel",
            "href",
            "label",
            "rel",
            "selected",
            "target",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuLateral = class AthMenuLateral {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelected"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuLateral,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuLateral,
      selector: "ath-menu-lateral",
      inputs: { items: "items" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuLateral = __decorate(
  [
    ProxyCmp({
      inputs: ["items"],
    }),
  ],
  AthMenuLateral,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuLateral,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-lateral",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["items"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuLateralItemAction = class AthMenuLateralItemAction {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuLateralItemAction,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuLateralItemAction,
      selector: "ath-menu-lateral-item-action",
      inputs: {
        ariaLabel: "ariaLabel",
        badgeLabel: "badgeLabel",
        badgeMax: "badgeMax",
        badgeValue: "badgeValue",
        disabled: "disabled",
        icon: "icon",
        name: "name",
        selected: "selected",
        tooltipText: "tooltipText",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuLateralItemAction = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "badgeLabel",
        "badgeMax",
        "badgeValue",
        "disabled",
        "icon",
        "name",
        "selected",
        "tooltipText",
      ],
    }),
  ],
  AthMenuLateralItemAction,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuLateralItemAction,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-lateral-item-action",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "badgeLabel",
            "badgeMax",
            "badgeValue",
            "disabled",
            "icon",
            "name",
            "selected",
            "tooltipText",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuLateralItemLink = class AthMenuLateralItemLink {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuLateralItemLink,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuLateralItemLink,
      selector: "ath-menu-lateral-item-link",
      inputs: {
        ariaLabel: "ariaLabel",
        badgeLabel: "badgeLabel",
        badgeMax: "badgeMax",
        badgeValue: "badgeValue",
        disabled: "disabled",
        externalLabel: "externalLabel",
        href: "href",
        icon: "icon",
        name: "name",
        rel: "rel",
        selected: "selected",
        target: "target",
        tooltipText: "tooltipText",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuLateralItemLink = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "badgeLabel",
        "badgeMax",
        "badgeValue",
        "disabled",
        "externalLabel",
        "href",
        "icon",
        "name",
        "rel",
        "selected",
        "target",
        "tooltipText",
      ],
    }),
  ],
  AthMenuLateralItemLink,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuLateralItemLink,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-lateral-item-link",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "badgeLabel",
            "badgeMax",
            "badgeValue",
            "disabled",
            "externalLabel",
            "href",
            "icon",
            "name",
            "rel",
            "selected",
            "target",
            "tooltipText",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuVertical = class AthMenuVertical {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelected"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuVertical,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuVertical,
      selector: "ath-menu-vertical",
      inputs: { appearance: "appearance" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuVertical = __decorate(
  [
    ProxyCmp({
      inputs: ["appearance"],
    }),
  ],
  AthMenuVertical,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuVertical,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-vertical",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["appearance"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuVerticalItemAction = class AthMenuVerticalItemAction {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuVerticalItemAction,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuVerticalItemAction,
      selector: "ath-menu-vertical-item-action",
      inputs: {
        disabled: "disabled",
        icon: "icon",
        open: "open",
        selected: "selected",
        text: "text",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuVerticalItemAction = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "icon", "open", "selected", "text", "value"],
    }),
  ],
  AthMenuVerticalItemAction,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuVerticalItemAction,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-vertical-item-action",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "icon", "open", "selected", "text", "value"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthMenuVerticalItemLink = class AthMenuVerticalItemLink {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthMenuVerticalItemLink,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthMenuVerticalItemLink,
      selector: "ath-menu-vertical-item-link",
      inputs: {
        disabled: "disabled",
        externalLabel: "externalLabel",
        href: "href",
        icon: "icon",
        rel: "rel",
        selected: "selected",
        target: "target",
        text: "text",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthMenuVerticalItemLink = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "externalLabel",
        "href",
        "icon",
        "rel",
        "selected",
        "target",
        "text",
        "value",
      ],
    }),
  ],
  AthMenuVerticalItemLink,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthMenuVerticalItemLink,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-menu-vertical-item-link",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "externalLabel",
            "href",
            "icon",
            "rel",
            "selected",
            "target",
            "text",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthModal = class AthModal {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athOpened", "athClosed"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthModal,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthModal,
      selector: "ath-modal",
      inputs: {
        appearance: "appearance",
        autofocus: "autofocus",
        clickOutsideClose: "clickOutsideClose",
        closeAriaLabel: "closeAriaLabel",
        fullScreen: "fullScreen",
        hasClose: "hasClose",
        hasDivider: "hasDivider",
        headingLevel: "headingLevel",
        headingText: "headingText",
        isAlert: "isAlert",
        maxHeight: "maxHeight",
        maxWidth: "maxWidth",
        open: "open",
        size: "size",
        subtitleText: "subtitleText",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthModal = __decorate(
  [
    ProxyCmp({
      inputs: [
        "appearance",
        "autofocus",
        "clickOutsideClose",
        "closeAriaLabel",
        "fullScreen",
        "hasClose",
        "hasDivider",
        "headingLevel",
        "headingText",
        "isAlert",
        "maxHeight",
        "maxWidth",
        "open",
        "size",
        "subtitleText",
      ],
      methods: ["openModal", "closeModal"],
    }),
  ],
  AthModal,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthModal,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-modal",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "appearance",
            "autofocus",
            "clickOutsideClose",
            "closeAriaLabel",
            "fullScreen",
            "hasClose",
            "hasDivider",
            "headingLevel",
            "headingText",
            "isAlert",
            "maxHeight",
            "maxWidth",
            "open",
            "size",
            "subtitleText",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthPagination = class AthPagination {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athPaginate", "athItemsPerPageChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthPagination,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthPagination,
      selector: "ath-pagination",
      inputs: {
        athAriaLabel: "athAriaLabel",
        currentPage: "currentPage",
        disabled: "disabled",
        itemsPerPage: "itemsPerPage",
        itemsSelector: "itemsSelector",
        noEndButtons: "noEndButtons",
        noItemsCount: "noItemsCount",
        noItemsSelector: "noItemsSelector",
        noJumpButtons: "noJumpButtons",
        totalItems: "totalItems",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthPagination = __decorate(
  [
    ProxyCmp({
      inputs: [
        "athAriaLabel",
        "currentPage",
        "disabled",
        "itemsPerPage",
        "itemsSelector",
        "noEndButtons",
        "noItemsCount",
        "noItemsSelector",
        "noJumpButtons",
        "totalItems",
      ],
    }),
  ],
  AthPagination,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthPagination,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-pagination",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "athAriaLabel",
            "currentPage",
            "disabled",
            "itemsPerPage",
            "itemsSelector",
            "noEndButtons",
            "noItemsCount",
            "noItemsSelector",
            "noJumpButtons",
            "totalItems",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthPanel = class AthPanel {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthPanel,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthPanel,
      selector: "ath-panel",
      inputs: { focusable: "focusable", label: "label" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthPanel = __decorate(
  [
    ProxyCmp({
      inputs: ["focusable", "label"],
    }),
  ],
  AthPanel,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthPanel,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-panel",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["focusable", "label"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthPictogram = class AthPictogram {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthPictogram,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthPictogram,
      selector: "ath-pictogram",
      inputs: {
        ariaLabel: "ariaLabel",
        ariaLabelledby: "ariaLabelledby",
        name: "name",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthPictogram = __decorate(
  [
    ProxyCmp({
      inputs: ["ariaLabel", "ariaLabelledby", "name", "size"],
    }),
  ],
  AthPictogram,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthPictogram,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-pictogram",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["ariaLabel", "ariaLabelledby", "name", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthProgressBar = class AthProgressBar {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthProgressBar,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthProgressBar,
      selector: "ath-progress-bar",
      inputs: {
        athAriaLabel: "athAriaLabel",
        infinite: "infinite",
        labelAlignment: "labelAlignment",
        labelLeft: "labelLeft",
        labelRight: "labelRight",
        max: "max",
        min: "min",
        value: "value",
        valueText: "valueText",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthProgressBar = __decorate(
  [
    ProxyCmp({
      inputs: [
        "athAriaLabel",
        "infinite",
        "labelAlignment",
        "labelLeft",
        "labelRight",
        "max",
        "min",
        "value",
        "valueText",
      ],
    }),
  ],
  AthProgressBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthProgressBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-progress-bar",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "athAriaLabel",
            "infinite",
            "labelAlignment",
            "labelLeft",
            "labelRight",
            "max",
            "min",
            "value",
            "valueText",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthRadioButton = class AthRadioButton {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athFocus", "athBlur", "athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthRadioButton,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthRadioButton,
      selector: "ath-radio-button",
      inputs: {
        ariaLabel: "ariaLabel",
        checked: "checked",
        disabled: "disabled",
        label: "label",
        name: "name",
        readonly: "readonly",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthRadioButton = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "checked",
        "disabled",
        "label",
        "name",
        "readonly",
        "value",
      ],
      methods: ["unCheck", "setFocus", "setTabindex"],
    }),
  ],
  AthRadioButton,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthRadioButton,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-radio-button",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "checked",
            "disabled",
            "label",
            "name",
            "readonly",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthRadioButtonGroup = class AthRadioButtonGroup {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChangeValue"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthRadioButtonGroup,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthRadioButtonGroup,
      selector: "ath-radio-button-group",
      inputs: {
        ariaLabel: "ariaLabel",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        label: "label",
        name: "name",
        orientation: "orientation",
        readonly: "readonly",
        requiredAriaLabel: "requiredAriaLabel",
        showRequired: "showRequired",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthRadioButtonGroup = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "label",
        "name",
        "orientation",
        "readonly",
        "requiredAriaLabel",
        "showRequired",
        "tooltipText",
        "tooltipWidth",
        "value",
      ],
    }),
  ],
  AthRadioButtonGroup,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthRadioButtonGroup,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-radio-button-group",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "label",
            "name",
            "orientation",
            "readonly",
            "requiredAriaLabel",
            "showRequired",
            "tooltipText",
            "tooltipWidth",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthSectionTitle = class AthSectionTitle {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athToggleCollapse"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthSectionTitle,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthSectionTitle,
      selector: "ath-section-title",
      inputs: {
        collapsable: "collapsable",
        collapseTarget: "collapseTarget",
        color: "color",
        headingLevel: "headingLevel",
        headingOverline: "headingOverline",
        headingSize: "headingSize",
        headingText: "headingText",
        icon: "icon",
        overline: "overline",
        pictogram: "pictogram",
        tooltip: "tooltip",
        tooltipLabel: "tooltipLabel",
        type: "type",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthSectionTitle = __decorate(
  [
    ProxyCmp({
      inputs: [
        "collapsable",
        "collapseTarget",
        "color",
        "headingLevel",
        "headingOverline",
        "headingSize",
        "headingText",
        "icon",
        "overline",
        "pictogram",
        "tooltip",
        "tooltipLabel",
        "type",
      ],
    }),
  ],
  AthSectionTitle,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthSectionTitle,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-section-title",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "collapsable",
            "collapseTarget",
            "color",
            "headingLevel",
            "headingOverline",
            "headingSize",
            "headingText",
            "icon",
            "overline",
            "pictogram",
            "tooltip",
            "tooltipLabel",
            "type",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthSegmentedControl = class AthSegmentedControl {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChangeValue"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthSegmentedControl,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthSegmentedControl,
      selector: "ath-segmented-control",
      inputs: {
        ariaLabel: "ariaLabel",
        color: "color",
        disabled: "disabled",
        feedback: "feedback",
        feedbackText: "feedbackText",
        helperText: "helperText",
        hideRequired: "hideRequired",
        label: "label",
        name: "name",
        required: "required",
        requiredAriaLabel: "requiredAriaLabel",
        size: "size",
        tooltipText: "tooltipText",
        tooltipWidth: "tooltipWidth",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthSegmentedControl = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLabel",
        "color",
        "disabled",
        "feedback",
        "feedbackText",
        "helperText",
        "hideRequired",
        "label",
        "name",
        "required",
        "requiredAriaLabel",
        "size",
        "tooltipText",
        "tooltipWidth",
        "type",
        "value",
      ],
    }),
  ],
  AthSegmentedControl,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthSegmentedControl,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-segmented-control",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLabel",
            "color",
            "disabled",
            "feedback",
            "feedbackText",
            "helperText",
            "hideRequired",
            "label",
            "name",
            "required",
            "requiredAriaLabel",
            "size",
            "tooltipText",
            "tooltipWidth",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthSegmentedControlItem = class AthSegmentedControlItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athFocus", "athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthSegmentedControlItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthSegmentedControlItem,
      selector: "ath-segmented-control-item",
      inputs: {
        color: "color",
        disabled: "disabled",
        icon: "icon",
        iconPosition: "iconPosition",
        selected: "selected",
        size: "size",
        type: "type",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthSegmentedControlItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "color",
        "disabled",
        "icon",
        "iconPosition",
        "selected",
        "size",
        "type",
        "value",
      ],
      methods: ["unSelectItem", "setFocus", "setTabindex"],
    }),
  ],
  AthSegmentedControlItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthSegmentedControlItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-segmented-control-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "color",
            "disabled",
            "icon",
            "iconPosition",
            "selected",
            "size",
            "type",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthSlider = class AthSlider {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athChange", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthSlider,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthSlider,
      selector: "ath-slider",
      inputs: {
        counterWidth: "counterWidth",
        detailFirst: "detailFirst",
        detailLast: "detailLast",
        disabled: "disabled",
        feedback: "feedback",
        feedbackCounter: "feedbackCounter",
        feedbackText: "feedbackText",
        fromAriaLabel: "fromAriaLabel",
        groupAriaLabel: "groupAriaLabel",
        helperText: "helperText",
        labelGroup: "labelGroup",
        max: "max",
        min: "min",
        name: "name",
        readonly: "readonly",
        required: "required",
        showRequired: "showRequired",
        step: "step",
        stepped: "stepped",
        toAriaLabel: "toAriaLabel",
        tooltipText: "tooltipText",
        type: "type",
        unit: "unit",
        value: "value",
        valueText: "valueText",
        width: "width",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthSlider = __decorate(
  [
    ProxyCmp({
      inputs: [
        "counterWidth",
        "detailFirst",
        "detailLast",
        "disabled",
        "feedback",
        "feedbackCounter",
        "feedbackText",
        "fromAriaLabel",
        "groupAriaLabel",
        "helperText",
        "labelGroup",
        "max",
        "min",
        "name",
        "readonly",
        "required",
        "showRequired",
        "step",
        "stepped",
        "toAriaLabel",
        "tooltipText",
        "type",
        "unit",
        "value",
        "valueText",
        "width",
      ],
    }),
  ],
  AthSlider,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthSlider,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-slider",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "counterWidth",
            "detailFirst",
            "detailLast",
            "disabled",
            "feedback",
            "feedbackCounter",
            "feedbackText",
            "fromAriaLabel",
            "groupAriaLabel",
            "helperText",
            "labelGroup",
            "max",
            "min",
            "name",
            "readonly",
            "required",
            "showRequired",
            "step",
            "stepped",
            "toAriaLabel",
            "tooltipText",
            "type",
            "unit",
            "value",
            "valueText",
            "width",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthStep = class AthStep {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthStep,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthStep,
      selector: "ath-step",
      inputs: {
        actionText: "actionText",
        alignment: "alignment",
        ariaLiveMessage: "ariaLiveMessage",
        athAriaLabel: "athAriaLabel",
        athId: "athId",
        athRole: "athRole",
        clickable: "clickable",
        collapseLabel: "collapseLabel",
        completedLabel: "completedLabel",
        disabled: "disabled",
        errorLabel: "errorLabel",
        expandLabel: "expandLabel",
        feedback: "feedback",
        headingText: "headingText",
        isCollapsable: "isCollapsable",
        isComplete: "isComplete",
        isExpanded: "isExpanded",
        number: "number",
        readonly: "readonly",
        selected: "selected",
        size: "size",
        total: "total",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthStep = __decorate(
  [
    ProxyCmp({
      inputs: [
        "actionText",
        "alignment",
        "ariaLiveMessage",
        "athAriaLabel",
        "athId",
        "athRole",
        "clickable",
        "collapseLabel",
        "completedLabel",
        "disabled",
        "errorLabel",
        "expandLabel",
        "feedback",
        "headingText",
        "isCollapsable",
        "isComplete",
        "isExpanded",
        "number",
        "readonly",
        "selected",
        "size",
        "total",
      ],
    }),
  ],
  AthStep,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthStep,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-step",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "actionText",
            "alignment",
            "ariaLiveMessage",
            "athAriaLabel",
            "athId",
            "athRole",
            "clickable",
            "collapseLabel",
            "completedLabel",
            "disabled",
            "errorLabel",
            "expandLabel",
            "feedback",
            "headingText",
            "isCollapsable",
            "isComplete",
            "isExpanded",
            "number",
            "readonly",
            "selected",
            "size",
            "total",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthStepper = class AthStepper {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelect"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthStepper,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthStepper,
      selector: "ath-stepper",
      inputs: {
        ariaLiveMessage: "ariaLiveMessage",
        athAriaLabel: "athAriaLabel",
        athRole: "athRole",
        clickable: "clickable",
        collapseLabel: "collapseLabel",
        completedLabel: "completedLabel",
        errorLabel: "errorLabel",
        expandLabel: "expandLabel",
        headingIcon: "headingIcon",
        headingText: "headingText",
        orientation: "orientation",
        readonly: "readonly",
        size: "size",
        startFrom: "startFrom",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthStepper = __decorate(
  [
    ProxyCmp({
      inputs: [
        "ariaLiveMessage",
        "athAriaLabel",
        "athRole",
        "clickable",
        "collapseLabel",
        "completedLabel",
        "errorLabel",
        "expandLabel",
        "headingIcon",
        "headingText",
        "orientation",
        "readonly",
        "size",
        "startFrom",
      ],
    }),
  ],
  AthStepper,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthStepper,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-stepper",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "ariaLiveMessage",
            "athAriaLabel",
            "athRole",
            "clickable",
            "collapseLabel",
            "completedLabel",
            "errorLabel",
            "expandLabel",
            "headingIcon",
            "headingText",
            "orientation",
            "readonly",
            "size",
            "startFrom",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthSwitch = class AthSwitch {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athFocus", "athBlur", "athChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthSwitch,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthSwitch,
      selector: "ath-switch",
      inputs: {
        disabled: "disabled",
        name: "name",
        readonly: "readonly",
        selected: "selected",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthSwitch = __decorate(
  [
    ProxyCmp({
      inputs: ["disabled", "name", "readonly", "selected"],
      methods: ["setFocus"],
    }),
  ],
  AthSwitch,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthSwitch,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-switch",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["disabled", "name", "readonly", "selected"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTab = class AthTab {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTab,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTab,
      selector: "ath-tab",
      inputs: {
        disabled: "disabled",
        icon: "icon",
        iconAriaLabel: "iconAriaLabel",
        label: "label",
        navigationData: "navigationData",
        selected: "selected",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTab = __decorate(
  [
    ProxyCmp({
      inputs: [
        "disabled",
        "icon",
        "iconAriaLabel",
        "label",
        "navigationData",
        "selected",
      ],
    }),
  ],
  AthTab,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTab,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-tab",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "disabled",
            "icon",
            "iconAriaLabel",
            "label",
            "navigationData",
            "selected",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTable = class AthTable {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelectionChange", "athTableClick"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTable,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTable,
      selector: "ath-table",
      inputs: {
        clickable: "clickable",
        color: "color",
        frozen: "frozen",
        noSelectAll: "noSelectAll",
        selectable: "selectable",
        size: "size",
        striped: "striped",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTable = __decorate(
  [
    ProxyCmp({
      inputs: [
        "clickable",
        "color",
        "frozen",
        "noSelectAll",
        "selectable",
        "size",
        "striped",
      ],
      methods: ["refresh"],
    }),
  ],
  AthTable,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTable,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "clickable",
            "color",
            "frozen",
            "noSelectAll",
            "selectable",
            "size",
            "striped",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTableBody = class AthTableBody {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTableBody,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTableBody,
      selector: "ath-table-body",
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTableBody = __decorate([ProxyCmp({})], AthTableBody);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTableBody,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table-body",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTableHeader = class AthTableHeader {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athSelectAllChange"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTableHeader,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTableHeader,
      selector: "ath-table-header",
      inputs: {
        clickable: "clickable",
        color: "color",
        frozen: "frozen",
        noSelectAll: "noSelectAll",
        selectAllState: "selectAllState",
        selectable: "selectable",
        selectedRows: "selectedRows",
        size: "size",
        totalRows: "totalRows",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTableHeader = __decorate(
  [
    ProxyCmp({
      inputs: [
        "clickable",
        "color",
        "frozen",
        "noSelectAll",
        "selectAllState",
        "selectable",
        "selectedRows",
        "size",
        "totalRows",
      ],
    }),
  ],
  AthTableHeader,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTableHeader,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table-header",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "clickable",
            "color",
            "frozen",
            "noSelectAll",
            "selectAllState",
            "selectable",
            "selectedRows",
            "size",
            "totalRows",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTableHeaderItem = class AthTableHeaderItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTableHeaderItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTableHeaderItem,
      selector: "ath-table-header-item",
      inputs: {
        alignment: "alignment",
        cellWidth: "cellWidth",
        color: "color",
        frozen: "frozen",
        hasInteractivity: "hasInteractivity",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTableHeaderItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "alignment",
        "cellWidth",
        "color",
        "frozen",
        "hasInteractivity",
        "size",
      ],
    }),
  ],
  AthTableHeaderItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTableHeaderItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table-header-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "alignment",
            "cellWidth",
            "color",
            "frozen",
            "hasInteractivity",
            "size",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTableRow = class AthTableRow {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athRowSelectionChange", "athRowClick"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTableRow,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTableRow,
      selector: "ath-table-row",
      inputs: {
        clickable: "clickable",
        clickableAriaLabel: "clickableAriaLabel",
        color: "color",
        expanded: "expanded",
        frozen: "frozen",
        hasChildren: "hasChildren",
        last: "last",
        parentId: "parentId",
        reserveClickable: "reserveClickable",
        reserveExpander: "reserveExpander",
        rowId: "rowId",
        selectable: "selectable",
        selected: "selected",
        selectionGroupName: "selectionGroupName",
        size: "size",
        striped: "striped",
        value: "value",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTableRow = __decorate(
  [
    ProxyCmp({
      inputs: [
        "clickable",
        "clickableAriaLabel",
        "color",
        "expanded",
        "frozen",
        "hasChildren",
        "last",
        "parentId",
        "reserveClickable",
        "reserveExpander",
        "rowId",
        "selectable",
        "selected",
        "selectionGroupName",
        "size",
        "striped",
        "value",
      ],
    }),
  ],
  AthTableRow,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTableRow,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table-row",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "clickable",
            "clickableAriaLabel",
            "color",
            "expanded",
            "frozen",
            "hasChildren",
            "last",
            "parentId",
            "reserveClickable",
            "reserveExpander",
            "rowId",
            "selectable",
            "selected",
            "selectionGroupName",
            "size",
            "striped",
            "value",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTableRowItem = class AthTableRowItem {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTableRowItem,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTableRowItem,
      selector: "ath-table-row-item",
      inputs: {
        alignment: "alignment",
        cellWidth: "cellWidth",
        color: "color",
        expanded: "expanded",
        expander: "expander",
        expanderAriaControls: "expanderAriaControls",
        frozen: "frozen",
        hasInteractivity: "hasInteractivity",
        isChild: "isChild",
        isHeader: "isHeader",
        noFrozenShadow: "noFrozenShadow",
        size: "size",
        striped: "striped",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTableRowItem = __decorate(
  [
    ProxyCmp({
      inputs: [
        "alignment",
        "cellWidth",
        "color",
        "expanded",
        "expander",
        "expanderAriaControls",
        "frozen",
        "hasInteractivity",
        "isChild",
        "isHeader",
        "noFrozenShadow",
        "size",
        "striped",
      ],
    }),
  ],
  AthTableRowItem,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTableRowItem,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-table-row-item",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "alignment",
            "cellWidth",
            "color",
            "expanded",
            "expander",
            "expanderAriaControls",
            "frozen",
            "hasInteractivity",
            "isChild",
            "isHeader",
            "noFrozenShadow",
            "size",
            "striped",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTabs = class AthTabs {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTabs,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTabs,
      selector: "ath-tabs",
      inputs: { items: "items", listAriaLabel: "listAriaLabel", type: "type" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTabs = __decorate(
  [
    ProxyCmp({
      inputs: ["items", "listAriaLabel", "type"],
    }),
  ],
  AthTabs,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTabs,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-tabs",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["items", "listAriaLabel", "type"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTag = class AthTag {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTag,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTag,
      selector: "ath-tag",
      inputs: {
        color: "color",
        headingText: "headingText",
        icon: "icon",
        size: "size",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTag = __decorate(
  [
    ProxyCmp({
      inputs: ["color", "headingText", "icon", "size"],
    }),
  ],
  AthTag,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTag,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-tag",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["color", "headingText", "icon", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthText = class AthText {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthText,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthText,
      selector: "ath-text",
      inputs: {
        color: "color",
        columns: "columns",
        content: "content",
        hierarchy: "hierarchy",
        lines: "lines",
        withTooltip: "withTooltip",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthText = __decorate(
  [
    ProxyCmp({
      inputs: [
        "color",
        "columns",
        "content",
        "hierarchy",
        "lines",
        "withTooltip",
      ],
    }),
  ],
  AthText,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthText,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-text",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "color",
            "columns",
            "content",
            "hierarchy",
            "lines",
            "withTooltip",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTooltip = class AthTooltip {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTooltip,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTooltip,
      selector: "ath-tooltip",
      inputs: {
        color: "color",
        hasArrow: "hasArrow",
        headingText: "headingText",
        maxWidth: "maxWidth",
        position: "position",
        trigger: "trigger",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTooltip = __decorate(
  [
    ProxyCmp({
      inputs: [
        "color",
        "hasArrow",
        "headingText",
        "maxWidth",
        "position",
        "trigger",
      ],
    }),
  ],
  AthTooltip,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTooltip,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-tooltip",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "color",
            "hasArrow",
            "headingText",
            "maxWidth",
            "position",
            "trigger",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthTooltipTrigger = class AthTooltipTrigger {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athClick", "athFocus", "athBlur"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthTooltipTrigger,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthTooltipTrigger,
      selector: "ath-tooltip-trigger",
      inputs: { ariaLabel: "ariaLabel", icon: "icon", size: "size" },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthTooltipTrigger = __decorate(
  [
    ProxyCmp({
      inputs: ["ariaLabel", "icon", "size"],
    }),
  ],
  AthTooltipTrigger,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthTooltipTrigger,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-tooltip-trigger",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["ariaLabel", "icon", "size"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthUserDetail = class AthUserDetail {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athAction"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthUserDetail,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthUserDetail,
      selector: "ath-user-detail",
      inputs: {
        buttonAriaLabel: "buttonAriaLabel",
        clickable: "clickable",
        description: "description",
        initials: "initials",
        srcImage: "srcImage",
        type: "type",
        userName: "userName",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthUserDetail = __decorate(
  [
    ProxyCmp({
      inputs: [
        "buttonAriaLabel",
        "clickable",
        "description",
        "initials",
        "srcImage",
        "type",
        "userName",
      ],
    }),
  ],
  AthUserDetail,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthUserDetail,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-user-detail",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            "buttonAriaLabel",
            "clickable",
            "description",
            "initials",
            "srcImage",
            "type",
            "userName",
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});
let AthUserMenu = class AthUserMenu {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["athAction"]);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AthUserMenu,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: AthUserMenu,
      selector: "ath-user-menu",
      inputs: {
        initials: "initials",
        open: "open",
        srcImage: "srcImage",
        type: "type",
        userName: "userName",
      },
      ngImport: i0,
      template: "<ng-content></ng-content>",
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
AthUserMenu = __decorate(
  [
    ProxyCmp({
      inputs: ["initials", "open", "srcImage", "type", "userName"],
    }),
  ],
  AthUserMenu,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AthUserMenu,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: "ath-user-menu",
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: "<ng-content></ng-content>",
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ["initials", "open", "srcImage", "type", "userName"],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});

const DIRECTIVES = [
  AthAccordion,
  AthAccordionItem,
  AthActionBar,
  AthAlert,
  AthAvatar,
  AthBadge,
  AthBreadcrumb,
  AthButton,
  AthButtonExpandable,
  AthButtonLink,
  AthCalendar,
  AthCard,
  AthCardHeader,
  AthCardSelectable,
  AthCardSelectableGroup,
  AthCardThumbnail,
  AthCheckbox,
  AthCheckboxGroup,
  AthChipChoice,
  AthChipChoiceGroup,
  AthChipDismiss,
  AthChipDismissGroup,
  AthCollapse,
  AthCollapseIcon,
  AthDatepicker,
  AthDatepickerRange,
  AthDivider,
  AthDropdown,
  AthDropdownOption,
  AthEmptyState,
  AthIcon,
  AthInputCounter,
  AthInputPassword,
  AthInputText,
  AthInputTextarea,
  AthLink,
  AthList,
  AthListItem,
  AthMenuButton,
  AthMenuButtonItem,
  AthMenuHorizontal,
  AthMenuHorizontalItem,
  AthMenuLateral,
  AthMenuLateralItemAction,
  AthMenuLateralItemLink,
  AthMenuVertical,
  AthMenuVerticalItemAction,
  AthMenuVerticalItemLink,
  AthModal,
  AthPagination,
  AthPanel,
  AthPictogram,
  AthProgressBar,
  AthRadioButton,
  AthRadioButtonGroup,
  AthSectionTitle,
  AthSegmentedControl,
  AthSegmentedControlItem,
  AthSlider,
  AthStep,
  AthStepper,
  AthSwitch,
  AthTab,
  AthTable,
  AthTableBody,
  AthTableHeader,
  AthTableHeaderItem,
  AthTableRow,
  AthTableRowItem,
  AthTabs,
  AthTag,
  AthText,
  AthTooltip,
  AthTooltipTrigger,
  AthUserDetail,
  AthUserMenu,
];

class ValueAccessor {
  constructor(el) {
    this.el = el;
    this.onChange = () => {};
    this.onTouched = () => {};
  }
  writeValue(value) {
    this.el.nativeElement.value = this.lastValue = value == null ? "" : value;
  }
  handleChangeEvent(value) {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
    }
  }
  _handleBlurEvent() {
    this.onTouched();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.el.nativeElement.disabled = isDisabled;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: ValueAccessor,
      deps: [{ token: i0.ElementRef }],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: ValueAccessor,
      host: { listeners: { focusout: "_handleBlurEvent()" } },
      ngImport: i0,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: ValueAccessor,
  decorators: [
    {
      type: Directive,
      args: [
        {
          /* tslint:disable-next-line:directive-selector */
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [{ type: i0.ElementRef }];
  },
  propDecorators: {
    _handleBlurEvent: [
      {
        type: HostListener,
        args: ["focusout"],
      },
    ],
  },
});

class RadioValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: RadioValueAccessor,
      deps: [{ token: i0.ElementRef }],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: RadioValueAccessor,
      selector: "ath-checkbox, ath-radio, ath-radio-group",
      host: {
        listeners: { athChange: "handleChangeEvent($event.target.value)" },
      },
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: RadioValueAccessor,
          multi: true,
        },
      ],
      usesInheritance: true,
      ngImport: i0,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: RadioValueAccessor,
  decorators: [
    {
      type: Directive,
      args: [
        {
          /* tslint:disable-next-line:directive-selector */
          selector: "ath-checkbox, ath-radio, ath-radio-group",
          host: {
            "(athChange)": "handleChangeEvent($event.target.value)",
          },
          providers: [
            {
              provide: NG_VALUE_ACCESSOR,
              useExisting: RadioValueAccessor,
              multi: true,
            },
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [{ type: i0.ElementRef }];
  },
});

class SelectValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: SelectValueAccessor,
      deps: [{ token: i0.ElementRef }],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: SelectValueAccessor,
      selector: "ath-combobox, ath-select",
      host: {
        listeners: { athChange: "handleChangeEvent($event.target.value)" },
      },
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: SelectValueAccessor,
          multi: true,
        },
      ],
      usesInheritance: true,
      ngImport: i0,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: SelectValueAccessor,
  decorators: [
    {
      type: Directive,
      args: [
        {
          /* tslint:disable-next-line:directive-selector */
          selector: "ath-combobox, ath-select",
          host: {
            "(athChange)": "handleChangeEvent($event.target.value)",
          },
          providers: [
            {
              provide: NG_VALUE_ACCESSOR,
              useExisting: SelectValueAccessor,
              multi: true,
            },
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [{ type: i0.ElementRef }];
  },
});

class TextValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: TextValueAccessor,
      deps: [{ token: i0.ElementRef }],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: "14.0.0",
      version: "16.2.12",
      type: TextValueAccessor,
      selector: "ath-input, ath-input-number, ath-textarea",
      host: {
        listeners: { athInput: "handleChangeEvent($event.target.value)" },
      },
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: TextValueAccessor,
          multi: true,
        },
      ],
      usesInheritance: true,
      ngImport: i0,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: TextValueAccessor,
  decorators: [
    {
      type: Directive,
      args: [
        {
          /* tslint:disable-next-line:directive-selector */
          selector: "ath-input, ath-input-number, ath-textarea",
          host: {
            "(athInput)": "handleChangeEvent($event.target.value)",
          },
          providers: [
            {
              provide: NG_VALUE_ACCESSOR,
              useExisting: TextValueAccessor,
              multi: true,
            },
          ],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [{ type: i0.ElementRef }];
  },
});

// @ts-nocheck
/*
 * Aletheia Component Library Directives
 * Re-exports all generated Angular directives
 */

class AletheiaComponentLibraryModule {
  static forRoot() {
    return {
      ngModule: AletheiaComponentLibraryModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => {
            return () => defineCustomElements(window);
          },
          multi: true,
        },
      ],
    };
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AletheiaComponentLibraryModule,
      deps: [],
      target: i0.ɵɵFactoryTarget.NgModule,
    });
  }
  static {
    this.ɵmod = i0.ɵɵngDeclareNgModule({
      minVersion: "14.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AletheiaComponentLibraryModule,
      declarations: [
        AthAccordion,
        AthAccordionItem,
        AthActionBar,
        AthAlert,
        AthAvatar,
        AthBadge,
        AthBreadcrumb,
        AthButton,
        AthButtonExpandable,
        AthButtonLink,
        AthCalendar,
        AthCard,
        AthCardHeader,
        AthCardSelectable,
        AthCardSelectableGroup,
        AthCardThumbnail,
        AthCheckbox,
        AthCheckboxGroup,
        AthChipChoice,
        AthChipChoiceGroup,
        AthChipDismiss,
        AthChipDismissGroup,
        AthCollapse,
        AthCollapseIcon,
        AthDatepicker,
        AthDatepickerRange,
        AthDivider,
        AthDropdown,
        AthDropdownOption,
        AthEmptyState,
        AthIcon,
        AthInputCounter,
        AthInputPassword,
        AthInputText,
        AthInputTextarea,
        AthLink,
        AthList,
        AthListItem,
        AthMenuButton,
        AthMenuButtonItem,
        AthMenuHorizontal,
        AthMenuHorizontalItem,
        AthMenuLateral,
        AthMenuLateralItemAction,
        AthMenuLateralItemLink,
        AthMenuVertical,
        AthMenuVerticalItemAction,
        AthMenuVerticalItemLink,
        AthModal,
        AthPagination,
        AthPanel,
        AthPictogram,
        AthProgressBar,
        AthRadioButton,
        AthRadioButtonGroup,
        AthSectionTitle,
        AthSegmentedControl,
        AthSegmentedControlItem,
        AthSlider,
        AthStep,
        AthStepper,
        AthSwitch,
        AthTab,
        AthTable,
        AthTableBody,
        AthTableHeader,
        AthTableHeaderItem,
        AthTableRow,
        AthTableRowItem,
        AthTabs,
        AthTag,
        AthText,
        AthTooltip,
        AthTooltipTrigger,
        AthUserDetail,
        AthUserMenu,
        RadioValueAccessor,
        SelectValueAccessor,
        TextValueAccessor,
      ],
      imports: [CommonModule, FormsModule],
      exports: [RadioValueAccessor, SelectValueAccessor, TextValueAccessor],
    });
  }
  static {
    this.ɵinj = i0.ɵɵngDeclareInjector({
      minVersion: "12.0.0",
      version: "16.2.12",
      ngImport: i0,
      type: AletheiaComponentLibraryModule,
      imports: [CommonModule, FormsModule],
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "16.2.12",
  ngImport: i0,
  type: AletheiaComponentLibraryModule,
  decorators: [
    {
      type: NgModule,
      args: [
        {
          declarations: [
            ...DIRECTIVES,
            RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor,
          ],
          imports: [CommonModule, FormsModule],
          exports: [RadioValueAccessor, SelectValueAccessor, TextValueAccessor],
        },
      ],
    },
  ],
});

/*
 * Public API Surface of component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export {
  AletheiaComponentLibraryModule,
  AthAccordion,
  AthAccordionItem,
  AthActionBar,
  AthAlert,
  AthAvatar,
  AthBadge,
  AthBreadcrumb,
  AthButton,
  AthButtonExpandable,
  AthButtonLink,
  AthCalendar,
  AthCard,
  AthCardHeader,
  AthCardSelectable,
  AthCardSelectableGroup,
  AthCardThumbnail,
  AthCheckbox,
  AthCheckboxGroup,
  AthChipChoice,
  AthChipChoiceGroup,
  AthChipDismiss,
  AthChipDismissGroup,
  AthCollapse,
  AthCollapseIcon,
  AthDatepicker,
  AthDatepickerRange,
  AthDivider,
  AthDropdown,
  AthDropdownOption,
  AthEmptyState,
  AthIcon,
  AthInputCounter,
  AthInputPassword,
  AthInputText,
  AthInputTextarea,
  AthLink,
  AthList,
  AthListItem,
  AthMenuButton,
  AthMenuButtonItem,
  AthMenuHorizontal,
  AthMenuHorizontalItem,
  AthMenuLateral,
  AthMenuLateralItemAction,
  AthMenuLateralItemLink,
  AthMenuVertical,
  AthMenuVerticalItemAction,
  AthMenuVerticalItemLink,
  AthModal,
  AthPagination,
  AthPanel,
  AthPictogram,
  AthProgressBar,
  AthRadioButton,
  AthRadioButtonGroup,
  AthSectionTitle,
  AthSegmentedControl,
  AthSegmentedControlItem,
  AthSlider,
  AthStep,
  AthStepper,
  AthSwitch,
  AthTab,
  AthTable,
  AthTableBody,
  AthTableHeader,
  AthTableHeaderItem,
  AthTableRow,
  AthTableRowItem,
  AthTabs,
  AthTag,
  AthText,
  AthTooltip,
  AthTooltipTrigger,
  AthUserDetail,
  AthUserMenu,
  DIRECTIVES,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
};
//# sourceMappingURL=aletheia2-angular.mjs.map
