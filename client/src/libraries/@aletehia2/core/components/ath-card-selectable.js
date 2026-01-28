import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';
import { d as defineCustomElement$3 } from './p-DbpanEQL.js';
import { d as defineCustomElement$2 } from './p-B4i4aRdS.js';

var CardSelectableSize;
(function (CardSelectableSize) {
    CardSelectableSize["Small"] = "sm";
    CardSelectableSize["Medium"] = "md";
})(CardSelectableSize || (CardSelectableSize = {}));
var CardSelectableType;
(function (CardSelectableType) {
    CardSelectableType["Single"] = "single";
    CardSelectableType["Multiselect"] = "multiselect";
})(CardSelectableType || (CardSelectableType = {}));

const cardSelectableCss = ".sc-ath-card-selectable-h .ath-card-selectable.sc-ath-card-selectable{--overline-color:var(--ath-color-fg-subtle);--headline-color:var(--ath-color-fg-primary-heading);--subheadline-color:var(--ath-color-fg-default);--icon-color:var(--ath-color-icon-primary-default);--card-border:var(--ath-border-width-card) solid var(--ath-color-border-alpha-bolder-default);--card-shadow:none}.sc-ath-card-selectable-h .ath-card-selectable--multiselect.sc-ath-card-selectable{--icon-border:1px solid var(--ath-color-checkbox-border-default);--icon-background:var(--ath-color-checkbox-bg-default);--icon-color:var(--ath-color-checkbox-icon-default)}.sc-ath-card-selectable-h .ath-card-selectable--multiselect.ath-card-selectable--selected.sc-ath-card-selectable:not(.ath-card-selectable--disabled){--icon-border:1px solid var(--ath-color-checkbox-border-checked);--icon-background:var(--ath-color-checkbox-bg-checked)}.sc-ath-card-selectable-h .ath-card-selectable--multiselect.ath-card-selectable--disabled.sc-ath-card-selectable:not(.ath-card-selectable--selected){--icon-border:1px solid var(--ath-color-checkbox-border-default)}.sc-ath-card-selectable-h .ath-card-selectable--multiselect.ath-card-selectable--selected.ath-card-selectable--disabled.sc-ath-card-selectable{--icon-background:var(--ath-color-bg-alpha-boldest-disabled)}.sc-ath-card-selectable-h .ath-card-selectable--disabled.sc-ath-card-selectable{--overline-color:var(--ath-color-fg-disabled);--headline-color:var(--ath-color-fg-disabled);--subheadline-color:var(--ath-color-fg-disabled);--icon-border:none;cursor:not-allowed}.sc-ath-card-selectable-h .ath-card-selectable--disabled.sc-ath-card-selectable:not(.ath-card-selectable--multiselect){--icon-color:var(--ath-color-icon-disabled)}.sc-ath-card-selectable-h .ath-card-selectable--selected.sc-ath-card-selectable{--card-border:var(--ath-border-width-card) solid var(--ath-color-card-selectable-border-selected)}.sc-ath-card-selectable-h:hover .ath-card-selectable.sc-ath-card-selectable:not(.ath-card-selectable--disabled):not(.ath-card-selectable--selected){--card-border:var(--ath-border-width-card) solid var(--ath-color-card-border-hovered);--card-shadow:var(--ath-box-shadow-position-x-0) var(--ath-box-shadow-position-y-4) var(--ath-box-shadow-blur-8) var(--ath-box-shadow-spread-0)\n    var(--ath-color-card-drop-shadow-hovered)}.sc-ath-card-selectable-h:hover .ath-card-selectable--selected.sc-ath-card-selectable{--card-border:var(--ath-border-width-card) solid var(--ath-color-card-selectable-border-selected);--card-shadow:var(--ath-box-shadow-position-x-0) var(--ath-box-shadow-position-y-4) var(--ath-box-shadow-blur-8) var(--ath-box-shadow-spread-0)\n    var(--ath-color-card-drop-shadow-hovered)}.sc-ath-card-selectable-h:active .ath-card-selectable.sc-ath-card-selectable:not(.ath-card-selectable--disabled){--card-border:var(--ath-border-width-card) solid var(--ath-color-card-border-pressed);--card-shadow:var(--ath-box-shadow-position-x-0) var(--ath-box-shadow-position-y-4) var(--ath-box-shadow-blur-8) var(--ath-box-shadow-spread-0)\n    var(--ath-color-card-drop-shadow-pressed)}.sc-ath-card-selectable-h:focus-visible{outline:none}.sc-ath-card-selectable-h:focus-visible .ath-card-selectable.sc-ath-card-selectable{outline:none;--card-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus)}.sc-ath-card-selectable-h{display:inline-grid;width:100%;cursor:pointer}.sc-ath-card-selectable-h .ath-card-selectable.sc-ath-card-selectable{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-gap);border-radius:var(--ath-border-radius-card);border:var(--card-border);background:var(--ath-color-card-content-bg);box-shadow:var(--card-shadow)}.sc-ath-card-selectable-h .ath-card-selectable--sm.sc-ath-card-selectable{padding:var(--ath-spacing-card-content-padding-around-sm)}.sc-ath-card-selectable-h .ath-card-selectable--md.sc-ath-card-selectable{padding:var(--ath-spacing-card-content-padding-around-md)}.sc-ath-card-selectable-h .ath-card-selectable_content.sc-ath-card-selectable{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-content-header-body-row-gap);align-self:stretch}.sc-ath-card-selectable-h .ath-card-selectable_header.sc-ath-card-selectable{display:flex;justify-content:flex-end;align-items:flex-start;gap:var(--ath-spacing-card-selectable-indicator-col-gap);align-self:stretch}.sc-ath-card-selectable-h .ath-card-selectable_headlines.sc-ath-card-selectable{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-header-row-gap);flex:1 0 0}.sc-ath-card-selectable-h .ath-card-selectable_overline.sc-ath-card-selectable{color:var(--overline-color);font-family:var(--ath-font-family-overline);font-size:var(--ath-font-size-overline);font-style:normal;font-weight:var(--ath-font-weight-overline);line-height:var(--ath-font-line-height-overline)}.sc-ath-card-selectable-h .ath-card-selectable_wrapper.sc-ath-card-selectable{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-header-titles-row-gap);align-self:stretch}.sc-ath-card-selectable-h .ath-card-selectable_headline.sc-ath-card-selectable{color:var(--headline-color);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-card-title);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-card-title)}.sc-ath-card-selectable-h .ath-card-selectable_subheadline.sc-ath-card-selectable{color:var(--subheadline-color);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-card-subtitle);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-card-subtitle)}.sc-ath-card-selectable-h .ath-card-selectable_check.sc-ath-card-selectable{display:flex;justify-content:center;align-items:center;width:var(--ath-sizing-checkbox-box-width);height:var(--ath-sizing-checkbox-box-width);border-radius:var(--ath-border-radius-checkbox);border:var(--icon-border);background:var(--icon-background);color:var(--icon-color)}";

let cardSelectableSequence = 0;
const AthCardSelectable$1 = /*@__PURE__*/ proxyCustomElement(class AthCardSelectable extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.athChange = createEvent(this, "athChange");
        this.athFocus = createEvent(this, "athFocus");
        this.athBlur = createEvent(this, "athBlur");
    }
    hostId = `card-selectable-${++cardSelectableSequence}`;
    headlineId;
    subheadlineId;
    tagId;
    get el() { return this; }
    /**
     * Size of the card
     **/
    size = CardSelectableSize.Small;
    /**
     * headline of the card
     **/
    headingText;
    /**
     * subtitle of the card
     **/
    subtitle;
    /**
     * overline of the card
     **/
    overline;
    /**
     * type of card
     **/
    type = CardSelectableType.Single;
    /**
     * Indicates whether the card is selected
     **/
    selected = false;
    /**
     * Indicates whether the card is disabled
     **/
    disabled = false;
    /**
     * tag of the card
     **/
    tag;
    athChange;
    athFocus;
    athBlur;
    visualSelected = false;
    async select(firstLoad) {
        if (!this.disabled) {
            this.visualSelected = true;
            if (!firstLoad)
                this.el.focus();
        }
    }
    async unselect() {
        if (!this.disabled) {
            this.visualSelected = false;
            this.el.blur();
        }
    }
    handleClick = () => {
        if (this.disabled)
            return;
        this.selected = this.type === CardSelectableType.Single ? true : !this.selected;
        this.visualSelected = this.type === CardSelectableType.Single ? true : !this.selected;
        this.athChange.emit(this.el);
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    handleKeyDown = (ev) => {
        switch (ev.code) {
            case 'Space':
            case 'Enter':
                ev.preventDefault();
                this.handleClick();
                break;
        }
    };
    getHostAttributes = () => ({
        role: this.type === CardSelectableType.Single ? 'radio' : 'checkbox',
        tabindex: this.visualSelected && !this.disabled ? '0' : '-1',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onkeydown: this.handleKeyDown,
    });
    getAriaAttributes = () => {
        const describedBy = [this.tagId, this.subheadlineId].filter(Boolean).join(' ');
        return {
            'aria-labelledby': !!this.headingText ? this.headlineId : undefined,
            'aria-describedby': describedBy != '' ? describedBy : undefined,
            'aria-disabled': this.disabled ? 'true' : undefined,
            'aria-checked': this.selected ? 'true' : 'false',
        };
    };
    getCheckClassNames = () => ({
        'ath-card-selectable_check': true,
    });
    getCardClassNames = () => ({
        'ath-card-selectable': true,
        'ath-card-selectable--disabled': this.disabled,
        [`ath-card-selectable--${this.type}`]: true,
        [`ath-card-selectable--${this.size}`]: true,
        'ath-card-selectable--selected': this.selected,
        'ath-color-text--disabled': this.disabled,
    });
    componentWillLoad() {
        if (this.headingText)
            this.headlineId = `${this.hostId}-headline`;
        if (this.subtitle)
            this.subheadlineId = `${this.hostId}-subheadline`;
        if (this.tag)
            this.tagId = `${this.hostId}-tag`;
    }
    renderIcon = () => {
        const icon = this.type === CardSelectableType.Single ? 'check' : 'completed';
        const size = this.type === CardSelectableType.Single ? 'md' : 'sm';
        return h("ath-icon", { icon: icon, size: size, color: "inherit" });
    };
    render() {
        const tagColor = this.disabled ? 'disabled' : 'primary';
        return (h(Host, { key: '6d08a21002df084479058f8d93e45628a9329ed9', ...this.getHostAttributes(), ...this.getAriaAttributes() }, h("div", { key: 'd35fab7d32784832d7cadcf5df6b9d0c917c83cd', class: this.getCardClassNames() }, h("div", { key: '3fa24bf7b6c7776bb2d8fa23173f87181cb973b9', class: "ath-card-selectable_content" }, h("div", { key: '1d523271e83617df2ea4df86aace6ad74dace95d', class: "ath-card-selectable_header" }, h("div", { key: '749d37e6fdf65dd5a383c0eb766ae425467b90b4', class: "ath-card-selectable_headlines" }, !!this.tag && h("ath-tag", { key: '2760783944a8b7f36a262ca62721c1f5914e0814', id: this.tagId, size: "md", color: tagColor, headingText: this.tag }), !!this.overline && h("span", { key: '82d68ede238a760609d0e254d19c8aa337f1a90f', class: "ath-card-selectable_overline" }, this.overline), h("div", { key: '3662695148d2a6bc0f516ef4bd6202d026682131', class: "ath-card-selectable_wrapper" }, h("span", { key: '410680a9f1d9a8344cc5f6faeb9576f1e8d4e093', id: this.headlineId, class: "ath-card-selectable_headline" }, this.headingText), h("span", { key: '2a68821556b97af93d03aae8c3ff24417ec8e1c4', id: this.subheadlineId, class: "ath-card-selectable_subheadline" }, this.subtitle))), h("div", { key: '8654bef79dc43de589e67e0566e2b23ccf6df3be', class: this.getCheckClassNames() }, this.selected && this.renderIcon())), h("slot", { key: 'b3cd6aaf85513675066ed13264ab44de8f4a1ce6', name: "body" })))));
    }
    static get style() { return cardSelectableCss; }
}, [262, "ath-card-selectable", {
        "size": [1],
        "headingText": [1, "heading-text"],
        "subtitle": [1],
        "overline": [1],
        "type": [1],
        "selected": [1028],
        "disabled": [4],
        "tag": [1],
        "visualSelected": [32],
        "select": [64],
        "unselect": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-card-selectable", "ath-icon", "ath-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-card-selectable":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthCardSelectable$1);
            }
            break;
        case "ath-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ath-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AthCardSelectable = AthCardSelectable$1;
const defineCustomElement = defineCustomElement$1;

export { AthCardSelectable, defineCustomElement };
//# sourceMappingURL=ath-card-selectable.js.map

//# sourceMappingURL=ath-card-selectable.js.map