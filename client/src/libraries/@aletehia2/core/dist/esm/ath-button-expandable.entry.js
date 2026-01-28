import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { t as transformIconSize, a as IconType } from './icons-BnU0zKUi.js';

const ButtonExpandableSizesTypes = {
    Large: 'lg'};

const buttonExpandableCss = ".sc-ath-button-expandable-h{--border-radius:var(--ath-border-radius-2xs);--color:var(--ath-color-fg-default);--font-family:var(--ath-font-family-primary);--font-weight:var(--ath-font-weight-medium);--line-height:var(--ath-font-line-height-body);--col-gap:var(--ath-spacing-between-100)}.sc-ath-button-expandable-h .ath-button-expandable--sm.sc-ath-button-expandable{--font-size:var(--ath-font-size-body-sm)}.sc-ath-button-expandable-h .ath-button-expandable--md.sc-ath-button-expandable{--font-size:var(--ath-font-size-body-md)}.sc-ath-button-expandable-h .ath-button-expandable--lg.sc-ath-button-expandable{--font-size:var(--ath-font-size-body-lg)}.sc-ath-button-expandable-h{display:inline-flex;border-radius:var(--border-radius);cursor:pointer;user-select:none}.sc-ath-button-expandable-h:focus-visible:not(:active),.sc-ath-button-expandable-h:focus:not(:active){outline:none;box-shadow:0 0 0 2px var(--ath-color-border-focus)}.sc-ath-button-expandable-h:hover:not([disabled]),.sc-ath-button-expandable-h:hover:not([disabled=true]),.sc-ath-button-expandable-h:active{outline:none}.sc-ath-button-expandable-h:hover:not([disabled]) .ath-button-expandable--text.sc-ath-button-expandable,.sc-ath-button-expandable-h:hover:not([disabled=true]) .ath-button-expandable--text.sc-ath-button-expandable,.sc-ath-button-expandable-h:active .ath-button-expandable--text.sc-ath-button-expandable{text-decoration:underline}[disabled].sc-ath-button-expandable-h:not([disabled=false]),[disabled=true].sc-ath-button-expandable-h{cursor:not-allowed}[disabled].sc-ath-button-expandable-h:not([disabled=false]):hover .ath-button-expandable--text.sc-ath-button-expandable,[disabled=true].sc-ath-button-expandable-h:hover .ath-button-expandable--text.sc-ath-button-expandable{text-decoration:none}.sc-ath-button-expandable-h .ath-button-expandable--container.sc-ath-button-expandable{display:flex;justify-content:center;align-items:center;color:var(--color);font-family:var(--font-family);font-style:normal;gap:var(--col-gap);font-size:var(--font-size);line-height:var(--line-height)}.sc-ath-button-expandable-h .ath-button-expandable--text.sc-ath-button-expandable{font-weight:var(--font-weight);white-space:nowrap}.sc-ath-button-expandable-h .ath-button-expandable--disabled.sc-ath-button-expandable{color:var(--ath-color-fg-disabled)}.sc-ath-button-expandable-h .ath-button-expandable--chevron.sc-ath-button-expandable{display:flex}.sc-ath-button-expandable-h .ath-button-expandable--chevron.sc-ath-button-expandable ath-icon.sc-ath-button-expandable{transition:transform 0.3s ease-in-out}.sc-ath-button-expandable-h .ath-button-expandable--chevron-rotate.sc-ath-button-expandable ath-icon.sc-ath-button-expandable{transform:rotate(180deg)}";

const AthButtonExpandable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.athToggleCollapse = createEvent(this, "athToggleCollapse");
    }
    get el() { return getElement(this); }
    /**
     * The size of the buton
     */
    size = ButtonExpandableSizesTypes.Large;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon;
    /**
     * The button is disabled
     */
    disabled = false;
    isExpanded = false;
    athToggleCollapse;
    collapseTarget;
    async setFocus() {
        if (!this.disabled) {
            this.el.focus();
        }
    }
    handleCollapseStateChange(event) {
        if (event.detail.id === this.collapseTarget) {
            this.isExpanded = event.detail.isExpanded;
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code) && !this.disabled) {
            ev.preventDefault();
            this.handleCollapse();
        }
    }
    handleCollapse = () => {
        this.isExpanded = !this.isExpanded;
        this.athToggleCollapse.emit(this.collapseTarget);
    };
    getHostClassNames = () => ({
        'ath-button-expandable': true,
    });
    getSpanClassNames = () => ({
        'ath-button-expandable--container': true,
        [`ath-button-expandable--${this.size}`]: !!this.size,
        [`ath-button-expandable--disabled`]: this.disabled,
    });
    getChevronClasses = () => ({
        'ath-button-expandable--chevron': true,
        [`ath-button-expandable--chevron-rotate`]: !this.isExpanded,
    });
    getAttributes = () => ({
        'role': 'button',
        'tabindex': this.disabled ? '-1' : this.el.getAttribute('tabindex') === '-1' ? '-1' : '0',
        'aria-controls': !this.disabled && this.collapseTarget ? this.collapseTarget : undefined,
        'aria-expanded': !this.disabled && this.collapseTarget ? `${this.isExpanded}` : undefined,
        'aria-disabled': this.disabled ? 'true' : 'false',
        'onClick': this.disabled ? undefined : this.handleCollapse,
        'onMouseDown': e => {
            if (this.disabled)
                e.preventDefault();
        },
    });
    renderIcon = icon => {
        return h("ath-icon", { icon: icon, size: transformIconSize(IconType.ButtonExpandable, this.size), color: this.disabled ? 'disabled' : 'default' });
    };
    render() {
        return (h(Host, { key: 'faaf0dc92d1e94e5c133963373731a0d56074765', class: this.getHostClassNames(), ...this.getAttributes() }, h("span", { key: 'ceba8888df59955d0fc3227a473df51e09a636df', class: this.getSpanClassNames() }, this.icon && this.renderIcon(this.icon), h("span", { key: '64ecb5be015571bb4d19b4d64cb4a9bc19765ccc', class: "ath-button-expandable--text" }, h("slot", { key: '730ca476a633e2c78e268c9541a5c834b74f231b' })), h("div", { key: 'b9eb2f5149f7e054f6b12fae1d3bcb726ea65f22', class: this.getChevronClasses() }, this.renderIcon('chevron_up')))));
    }
};
AthButtonExpandable.style = buttonExpandableCss;

export { AthButtonExpandable as ath_button_expandable };
//# sourceMappingURL=ath-button-expandable.entry.js.map
