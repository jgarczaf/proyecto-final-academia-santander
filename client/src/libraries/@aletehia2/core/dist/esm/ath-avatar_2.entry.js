import { r as registerInstance, a as getElement, h, H as Host, c as createEvent } from './index-D2-yfY-d.js';
import { A as AvatarSizes, a as AvatarTypes } from './avatar.model-C4ALHBl6.js';
import { t as transformIconSize, a as IconType } from './icons-BnU0zKUi.js';

const avatarCss = ":host{display:flex;width:fit-content;height:fit-content}:host .ath-avatar--xs{height:var(--ath-sizing-avatar-height-xs);width:var(--ath-sizing-avatar-width-xs)}:host .ath-avatar--xs ::slotted([slot=img]){height:var(--ath-sizing-avatar-height-xs);width:var(--ath-sizing-avatar-width-xs)}:host .ath-avatar--xs svg{flex-shrink:0;height:var(--ath-sizing-avatar-height-xs);width:var(--ath-sizing-avatar-width-xs)}:host .ath-avatar--xs .ath-avatar--initials{font-size:var(--ath-font-size-heading-6);line-height:var(--ath-font-line-height-heading-6)}:host .ath-avatar--sm{height:var(--ath-sizing-avatar-height-sm);width:var(--ath-sizing-avatar-width-sm)}:host .ath-avatar--sm ::slotted([slot=img]){height:var(--ath-sizing-avatar-height-sm);width:var(--ath-sizing-avatar-width-sm)}:host .ath-avatar--sm svg{flex-shrink:0;height:var(--ath-sizing-avatar-height-sm);width:var(--ath-sizing-avatar-width-sm)}:host .ath-avatar--sm .ath-avatar--initials{font-size:var(--ath-font-size-heading-5);line-height:var(--ath-font-line-height-heading-5)}:host .ath-avatar--md{height:var(--ath-sizing-avatar-height-md);width:var(--ath-sizing-avatar-width-md)}:host .ath-avatar--md ::slotted([slot=img]){height:var(--ath-sizing-avatar-height-md);width:var(--ath-sizing-avatar-width-md)}:host .ath-avatar--md svg{flex-shrink:0;height:var(--ath-sizing-avatar-height-md);width:var(--ath-sizing-avatar-width-md)}:host .ath-avatar--md .ath-avatar--initials{font-size:var(--ath-font-size-heading-2);line-height:var(--ath-font-line-height-heading-2)}:host .ath-avatar--lg{height:var(--ath-sizing-avatar-height-lg);width:var(--ath-sizing-avatar-width-lg)}:host .ath-avatar--lg ::slotted([slot=img]){height:var(--ath-sizing-avatar-height-lg);width:var(--ath-sizing-avatar-width-lg)}:host .ath-avatar--lg svg{flex-shrink:0;height:var(--ath-sizing-avatar-height-lg);width:var(--ath-sizing-avatar-width-lg)}:host .ath-avatar--lg .ath-avatar--initials{font-size:var(--ath-font-size-heading-1);line-height:var(--ath-font-line-height-heading-1)}:host .ath-avatar--default{background:var(--ath-color-avatar-default-bg)}:host .ath-avatar svg{fill:var(--ath-color-avatar-default-bg)}:host .ath-avatar--initials{background:var(--ath-color-avatar-initials-bg)}:host .ath-avatar{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:var(--ath-border-radius-avatar);font-family:var(--ath-font-family-primary);font-weight:var(--ath-font-weight-heading);overflow:hidden}:host .ath-avatar--image{background:var(--ath-color-bg-secondary-subtlest-default)}:host .ath-avatar .ath-avatar--initials{display:flex;justify-content:center;align-items:center;color:var(--ath-color-avatar-initials-fg)}";

const AthAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Initials to display in the avatar.
     */
    initials;
    /**
     * Size of the avatar.
     */
    size = AvatarSizes.Medium;
    /**
     * Type of avatar (image or initials).
     */
    type;
    /**
     * Name used to generate initials if none are provided.
     */
    avatarName;
    /**
     * The aria-labelledby attribute of the icon
     */
    ariaLabelledby;
    get el() { return getElement(this); }
    avatarClassType;
    getClassNames = () => ({
        'ath-avatar': true,
        [`ath-avatar--${this.size}`]: true,
    });
    hasImage() {
        return !!this.el.querySelector('img');
    }
    getInitials = () => {
        if (this.initials) {
            this.avatarClassType = 'initials';
            return h("span", { class: "ath-avatar--initials" }, this.initials.toUpperCase().slice(0, 2));
        }
        else if (this.avatarName) {
            this.avatarClassType = 'initials';
            const initials = this.avatarName
                .split(' ')
                .map(word => word.charAt(0).toUpperCase())
                .slice(0, 2)
                .join('');
            return h("span", { class: "ath-avatar--initials" }, initials);
        }
        return null;
    };
    renderContent = () => {
        // If type is defined and is image, Check for image
        if (this.type === AvatarTypes.Image && this.hasImage()) {
            this.avatarClassType = 'image';
            return h("slot", { name: "img" });
        }
        // If type is defined and is initials, check for initials
        if (this.type === AvatarTypes.Initials) {
            return this.getInitials() || this.renderDefaultImg();
        }
        // If type is undefined, check in priority order (image>initials).
        if (!this.type) {
            if (this.hasImage()) {
                this.avatarClassType = 'image';
                return h("slot", { name: "img" });
            }
            const initialsContent = this.getInitials();
            if (initialsContent) {
                return initialsContent;
            }
        }
        // Fallback to default image
        return this.renderDefaultImg();
    };
    componentDidLoad() {
        const athAvatar = this.el.shadowRoot.querySelector('.ath-avatar');
        athAvatar.classList.add('ath-avatar--' + (this.avatarClassType || 'default'));
    }
    renderDefaultImg = () => {
        const theme = document.body.dataset.theme || 'core';
        const assetsPath = `assets/images/pictograms/${theme}/`;
        return (h("svg", { focusable: "false", "aria-hidden": "true", viewBox: "0 0 32 32" }, h("use", { xlinkHref: `${assetsPath}illu_male.svg` })));
    };
    hasAriaLabel() {
        const ariaLabel = this.el.getAttribute('aria-label');
        return !!ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const ariaLabel = this.el.getAttribute('aria-label');
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        const currentAriaLabel = this.hasAriaLabel() ? ariaLabel.trim() : !!this.avatarName ? this.avatarName : undefined;
        return {
            'aria-label': currentAriaLabel,
            'role': hasLabel ? 'img' : !!this.avatarName ? 'img' : undefined,
        };
    }
    render() {
        return (h(Host, { key: 'a461eacaa264acc2d073916de2261053259c3479', ...this.getHostAttributes() }, h("div", { key: '59a5693d40e4c848c371acd05b125c660aaa9097', class: this.getClassNames() }, this.renderContent())));
    }
};
AthAvatar.style = avatarCss;

const ButtonLinkColor = {
    Primary: 'primary'};
const ButtonLinkPosition = {
    Left: 'left',
    Right: 'right',
};
const ButtonLinkSize = {
    Medium: 'md'};

const buttonLinkCss = ".ath-button-link__inner:hover{text-decoration-line:underline}.ath-button-link__inner:active{text-decoration-line:underline;color:var(--ath-color-fg-primary-pressed)}.ath-button-link--disabled .ath-button-link__inner:hover{text-decoration-line:none}:host{display:inline-flex;user-select:none}:host .ath-button-link--container{display:inline-flex;font-family:var(--ath-font-family-primary);font-size:var(--font-size);font-weight:var(--ath-font-weight-medium);line-height:var(--ath-font-line-height-body);border-radius:var(--ath-border-radius-2xs);outline:none;transition:background 0.5s;cursor:pointer}:host .ath-button-link--container .ath-button-link__inner{display:inline-flex;justify-content:center;align-items:center;gap:var(--ath-spacing-between-100)}:host .ath-button-link--container.ath-button-link--disabled{box-shadow:none;color:var(--ath-color-fg-disabled);pointer-events:none}:host[disabled]:not([disabled=false]),:host[disabled=true]{cursor:not-allowed}:host(:focus:not(:active)),:host(:focus-visible:not(:active)){outline:none}:host(:focus:not(:active)) .ath-button-link--container,:host(:focus-visible:not(:active)) .ath-button-link--container{outline:2px solid var(--ath-color-border-focus);outline-offset:2px;color:var(--ath-color-fg-primary-default)}:host(:focus:not(:active)) .ath-button-link--container .ath-button-link__inner,:host(:focus-visible:not(:active)) .ath-button-link--container .ath-button-link__inner{text-decoration-line:underline}.ath-button-link--sm{--font-size:var(--ath-font-size-comp-sm)}.ath-button-link--md{--font-size:var(--ath-font-size-comp-md)}.ath-button-link--lg{--font-size:var(--ath-font-size-comp-lg)}:host .ath-button-link--primary:not(.ath-button-link--disabled){color:var(--ath-color-fg-primary-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled){color:var(--ath-color-fg-default)}:host .ath-button-link--primary:not(.ath-button-link--disabled) :hover{color:var(--ath-color-fg-primary-hovered)}:host .ath-button-link--primary:not(.ath-button-link--disabled){color:var(--ath-color-fg-primary-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled){color:var(--ath-color-fg-default)}:host .ath-button-link--secondary:not(.ath-button-link--disabled) :hover{color:var(--ath-color-fg-primary-hovered)}";

const AthButtonLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athClick = createEvent(this, "athClick");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
    }
    get el() { return getElement(this); }
    /**
     * The color variant of the button-link
     */
    color = ButtonLinkColor.Primary;
    /**
     * The size of the buton-link
     */
    size = ButtonLinkSize.Medium;
    /**
     * The code of the button-link's icon
     */
    icon;
    /**
     * Icon Position
     */
    iconPosition = ButtonLinkPosition.Left;
    /**
     * The button-link is disabled
     */
    disabled = false;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    /**
     * Emitted when the button-link is clicked
     */
    athClick;
    /**
     * Emitted when the button-link gains focus
     */
    athFocus;
    /**
     * Emitted when the button-link loses focus
     */
    athBlur;
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
        'ath-button-link': true,
    });
    getSpanClassNames = () => ({
        'ath-button-link--container': true,
        [`ath-button-link--disabled`]: this.disabled,
        [`ath-button-link--${this.size}`]: !!this.size,
        [`ath-button-link--${this.color}`]: !!this.color,
    });
    renderIcon = () => {
        const iconSize = transformIconSize(IconType.ButtonLink, this.size);
        return h("ath-icon", { icon: this.icon, color: "inherit", size: iconSize });
    };
    render() {
        const hostTabindex = this.el.getAttribute('tabindex') === '-1' ? '-1' : '0';
        return (h(Host, { key: '0198f0b8c0d485c210f878994ddd42b8385bc024', role: "button", class: this.getHostClassNames(), tabindex: this.disabled ? '-1' : hostTabindex, onFocus: this.handleFocus, onBlur: this.handleBlur, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false' }, h("span", { key: 'f8dc664dbda30fa37e65db2d0047b2758d6b5974', class: this.getSpanClassNames(), part: "button-link-styles" }, h("span", { key: '3baf1047389aa42b71e0e453b9222f37bb56b408', class: "ath-button-link__inner" }, this.icon && this.iconPosition === ButtonLinkPosition.Left && this.renderIcon(), h("slot", { key: 'b23b89609695c86b96e1b82ff9c37d0002e66a73' }), this.icon && this.iconPosition === ButtonLinkPosition.Right && this.renderIcon()))));
    }
};
AthButtonLink.style = buttonLinkCss;

export { AthAvatar as ath_avatar, AthButtonLink as ath_button_link };
//# sourceMappingURL=ath-avatar.ath-button-link.entry.js.map
