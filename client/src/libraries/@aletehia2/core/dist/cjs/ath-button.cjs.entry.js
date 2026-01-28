'use strict';

var index = require('./index--hWT2F8k.js');
var button_model = require('./button.model-5JSyxGxn.js');
var icons = require('./icons-DfQaoUal.js');

const buttonCss = ":host{--border-radius:var(--ath-border-radius-button);--border-width:var(--ath-border-width-button);--font-weight:var(--ath-font-weight-medium)}:host .ath-button--xs{--col-gap:var(--ath-spacing-button-col-gap-xs);--spacing-x:var(--ath-spacing-button-padding-x-xs);--spacing-y:var(--ath-spacing-button-padding-y-xs);--font-size:var(--ath-font-size-button-xs);--line-height:var(--ath-font-line-height-button-xs)}:host .ath-button--xs.ath-button--icon-only{--spacing:var(--ath-spacing-button-padding-around-xs)}:host .ath-button--sm{--col-gap:var(--ath-spacing-button-col-gap-sm);--spacing-x:var(--ath-spacing-button-padding-x-sm);--spacing-y:var(--ath-spacing-button-padding-y-sm);--font-size:var(--ath-font-size-button-sm);--line-height:var(--ath-font-line-height-button-sm)}:host .ath-button--sm.ath-button--icon-only{--spacing:var(--ath-spacing-button-padding-around-sm)}:host .ath-button--md{--col-gap:var(--ath-spacing-button-col-gap-md);--spacing-x:var(--ath-spacing-button-padding-x-md);--spacing-y:var(--ath-spacing-button-padding-y-md);--font-size:var(--ath-font-size-button-md);--line-height:var(--ath-font-line-height-button-md)}:host .ath-button--md.ath-button--icon-only{--spacing:var(--ath-spacing-button-padding-around-md)}:host .ath-button--lg{--col-gap:var(--ath-spacing-button-col-gap-lg);--spacing-x:var(--ath-spacing-button-padding-x-lg);--spacing-y:var(--ath-spacing-button-padding-y-lg);--font-size:var(--ath-font-size-button-lg);--line-height:var(--ath-font-line-height-button-lg)}:host .ath-button--lg.ath-button--icon-only{--spacing:var(--ath-spacing-button-padding-around-lg)}:host(:hover) .ath-button--solid:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-hovered);--background-color:var(--ath-color-button-bg-primary-hovered);--border-color:var(--ath-color-button-border-primary-hovered)}:host(:focus),:host(:focus-visible){outline:none}:host(:focus) .ath-button--solid:not(.ath-button--disabled).ath-button--primary,:host(:focus-visible) .ath-button--solid:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-default);--background-color:var(--ath-color-button-bg-primary-default);--border-color:var(--ath-color-button-border-primary-default);--box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-default), 0px 0px 0px 4px var(--ath-color-border-focus)}:host(:active) .ath-button--solid:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-pressed);--background-color:var(--ath-color-button-bg-primary-pressed);--border-color:var(--ath-color-button-border-primary-pressed)}:host .ath-button--solid:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-default);--background-color:var(--ath-color-button-bg-primary-default);--border-color:var(--ath-color-button-border-primary-default)}:host(:hover) .ath-button--solid:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-hovered);--background-color:var(--ath-color-button-bg-secondary-hovered);--border-color:var(--ath-color-button-border-secondary-hovered)}:host(:focus),:host(:focus-visible){outline:none}:host(:focus) .ath-button--solid:not(.ath-button--disabled).ath-button--secondary,:host(:focus-visible) .ath-button--solid:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-default);--background-color:var(--ath-color-button-bg-secondary-default);--border-color:var(--ath-color-button-border-secondary-default);--box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}:host(:active) .ath-button--solid:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-pressed);--background-color:var(--ath-color-button-bg-secondary-pressed);--border-color:var(--ath-color-button-border-secondary-pressed)}:host .ath-button--solid:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-default);--background-color:var(--ath-color-button-bg-secondary-default);--border-color:var(--ath-color-button-border-secondary-default)}:host(:hover) .ath-button--clear:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-clear-hovered);--background-color:var(--ath-color-button-bg-primary-clear-hovered);--border-color:var(--ath-color-button-border-primary-clear-hovered)}:host(:focus) .ath-button--clear:not(.ath-button--disabled).ath-button--primary,:host(:focus-visible) .ath-button--clear:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-clear-default);--background-color:var(--ath-color-button-bg-primary-clear-default);--border-color:var(--ath-color-button-border-primary-clear-default);--box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}:host(:active) .ath-button--clear:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-clear-pressed);--background-color:var(--ath-color-button-bg-primary-clear-pressed);--border-color:var(--ath-color-button-border-primary-clear-pressed)}:host .ath-button--clear:not(.ath-button--disabled).ath-button--primary{--color:var(--ath-color-button-fg-primary-clear-default);--border-color:var(--ath-color-button-border-primary-clear-default);--background-color:var(--ath-color-button-bg-primary-clear-default)}:host(:hover) .ath-button--clear:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-clear-hovered);--background-color:var(--ath-color-button-bg-secondary-clear-hovered);--border-color:var(--ath-color-button-border-secondary-clear-hovered)}:host(:focus) .ath-button--clear:not(.ath-button--disabled).ath-button--secondary,:host(:focus-visible) .ath-button--clear:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-clear-default);--background-color:var(--ath-color-button-bg-secondary-clear-default);--border-color:var(--ath-color-button-border-secondary-clear-default);--box-shadow:0px 0px 0px 2px var(--ath-color-border-focus)}:host(:active) .ath-button--clear:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-clear-pressed);--background-color:var(--ath-color-button-bg-secondary-clear-pressed);--border-color:var(--ath-color-button-border-secondary-clear-pressed)}:host .ath-button--clear:not(.ath-button--disabled).ath-button--secondary{--color:var(--ath-color-button-fg-secondary-clear-default);--border-color:var(--ath-color-button-border-secondary-clear-default);--background-color:var(--ath-color-button-bg-secondary-clear-default)}:host .ath-button--disabled{--color:var(--ath-color-button-fg-disabled)}:host .ath-button--disabled.ath-button--solid{--background-color:var(--ath-color-button-bg-disabled);--border-color:var(--ath-color-button-border-disabled)}:host .ath-button--disabled.ath-button--clear{--background-color:transparent;--border-color:none}:host{display:inline-block;width:fit-content;vertical-align:top;vertical-align:-webkit-baseline-middle;user-select:none}:host .ath-button--container{display:flex;position:relative;align-items:center;justify-content:center;padding:calc(var(--spacing-y) - var(--border-width)) calc(var(--spacing-x) - var(--border-width));font-family:var(--ath-font-family-primary);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);background-color:var(--background-color);border-radius:var(--border-radius);border-width:var(--border-width);border-style:solid;border-color:var(--border-color);outline:none;transition:background 0.5s;cursor:pointer}:host .ath-button--container .ath-button__inner{position:relative;display:flex;column-gap:var(--col-gap);flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center}:host .ath-button--container.ath-button--clear{text-decoration:underline}:host .ath-button--container.ath-button--icon-only{padding:calc(var(--spacing) - var(--border-width))}:host .ath-button--container.ath-button--link{text-decoration:none}:host .ath-button--container.ath-button--full-width{width:100%}:host .ath-button--container.ath-button--disabled{box-shadow:none;cursor:not-allowed}:host .ath-button--container.ath-button--disabled.ath-button--clear{border-style:none}:host(:focus:not(:active)),:host(:focus-visible:not(:active)){outline:none}:host(:focus:not(:active)) .ath-button--container,:host(:focus-visible:not(:active)) .ath-button--container{outline:2px solid var(--ath-color-border-focus);outline-offset:2px}:host(:focus:not(:active)) .ath-button--clear,:host(:focus-visible:not(:active)) .ath-button--clear{text-decoration:none}";

const AthButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athClick = index.createEvent(this, "athClick");
        this.athFocus = index.createEvent(this, "athFocus");
        this.athBlur = index.createEvent(this, "athBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    showLeftIcon;
    showRightIcon;
    get el() { return index.getElement(this); }
    internals;
    /**
     * The color variant of the button
     */
    color = button_model.ButtonColor.Primary;
    /**
     * The size of the buton
     */
    size = button_model.ButtonSize.Medium;
    /**
     * The type of the button
     */
    type = button_model.ButtonType.Button;
    /**
     * Whether the button has an icon and his position
     */
    iconPosition = button_model.ButtonIconPosition.None;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The clear of the button (background and border color)
     */
    clear = false;
    /**
     * The button can be adapted to its container width
     */
    fullWidth = false;
    /**
     * The button is disabled
     */
    disabled = false;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    /**
     * Emitted when the button is clicked
     */
    athClick;
    /**
     * Emitted when the button gains focus
     */
    athFocus;
    /**
     * Emitted when the button loses focus
     */
    athBlur;
    componentWillLoad() {
        this.showLeftIcon = this.icon && (this.iconPosition === button_model.ButtonIconPosition.Left || this.iconPosition === button_model.ButtonIconPosition.IconOnly);
        this.showRightIcon = this.icon && this.iconPosition === button_model.ButtonIconPosition.Right;
    }
    componentDidLoad() {
        if (this.el.hasAttribute('autofocus') && this.el.getAttribute('autofocus') !== 'false') {
            this.setFocus();
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            this.handleClick();
        }
    }
    handleClick = ( /**event: Event*/) => {
        if (!this.disabled) {
            if (this.type === button_model.ButtonType.Submit) {
                this.internals?.form && this.internals.form.requestSubmit();
            }
            if (this.type === button_model.ButtonType.Reset) {
                this.internals?.form && this.internals.form.reset();
            }
            this.athClick.emit();
        }
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    getHostClassNames = () => ({
        'ath-button': true,
    });
    getSpanClassNames = () => ({
        'ath-button--container': true,
        [`ath-button--${this.size}`]: !!this.size,
        [`ath-button--solid`]: !this.clear,
        [`ath-button--clear`]: this.clear,
        [`ath-button--${this.color}`]: !!this.color,
        [`ath-button--icon-only`]: this.iconPosition === button_model.ButtonIconPosition.IconOnly,
        [`ath-button--disabled`]: this.disabled,
        [`ath-button--full-width`]: this.fullWidth,
    });
    getButtonStyle = () => ({
        width: this.fullWidth ? '100%' : 'auto',
    });
    renderIcon = () => {
        const isIconOnly = this.iconPosition === button_model.ButtonIconPosition.IconOnly;
        const iconSize = isIconOnly ? icons.transformIconSize(icons.IconType.ButtonIconOnly, this.size) : icons.transformIconSize(icons.IconType.Button, this.size);
        return index.h("ath-icon", { icon: this.icon, size: iconSize, color: "inherit" });
    };
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (index.h(index.Host, { key: '8fc2872696e2fa1458f54ba2191892ba645f86ff', role: "button", class: this.getHostClassNames(), tabindex: this.disabled ? '-1' : hostTabindex, onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false', style: this.getButtonStyle() }, index.h("span", { key: '79dbcf9c510d2927e62ec9c971154b1fbe361759', class: this.getSpanClassNames(), part: "button-styles" }, index.h("span", { key: 'ee797cd189d0bad80d0e5883b6549b606081d84b', class: "ath-button__inner" }, this.showLeftIcon && this.renderIcon(), this.iconPosition != 'icon-only' && index.h("slot", { key: 'a095aeb8301f29c0e688b47f9f6d997a58034fd3' }), this.showRightIcon && this.renderIcon()))));
    }
    static get formAssociated() { return true; }
};
AthButton.style = buttonCss;

exports.ath_button = AthButton;
//# sourceMappingURL=ath-button.entry.cjs.js.map
