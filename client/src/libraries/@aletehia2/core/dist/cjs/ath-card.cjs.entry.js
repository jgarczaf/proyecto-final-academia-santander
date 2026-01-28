'use strict';

var index = require('./index--hWT2F8k.js');

var CardSize;
(function (CardSize) {
    CardSize["Small"] = "sm";
    CardSize["Medium"] = "md";
})(CardSize || (CardSize = {}));
var CardOrientation;
(function (CardOrientation) {
    CardOrientation["Vertical"] = "vertical";
    CardOrientation["Horizontal"] = "horizontal";
})(CardOrientation || (CardOrientation = {}));

const cardCss = ".sc-ath-card-h .ath-card--vertical.sc-ath-card{--flex-direction:column;--height:100%;--gap-footer:var(--ath-spacing-between-100)}.sc-ath-card-h .ath-card--vertical--fluid.sc-ath-card{--ratio:16/9}.sc-ath-card-h .ath-card--horizontal.sc-ath-card{--flex-direction:row;--gap-footer:var(--ath-spacing-card-footer-col-gap);--height:100%;--width:100%}.sc-ath-card-h .ath-card--horizontal--fluid.sc-ath-card{--ratio:1/1}.sc-ath-card-h{display:block;height:fit-content}.sc-ath-card-h .ath-card.sc-ath-card{outline:none;display:flex;width:inherit;height:inherit;align-items:flex-start;gap:var(--ath-spacing-card-gap);flex-shrink:0;border-radius:var(--ath-border-radius-card);border:var(--ath-border-width-card) solid var(--ath-color-border-alpha-bolder-default);overflow:auto;flex-direction:var(--flex-direction)}.sc-ath-card-h .ath-card-thumbnail.sc-ath-card{align-self:stretch;width:100%}.sc-ath-card-h .ath-card-wrapper.sc-ath-card{display:flex;flex-direction:column;height:var(--height);width:var(--width);background:var(--ath-color-card-content-bg)}.sc-ath-card-h .ath-card-wrapper--sm.sc-ath-card{padding:var(--ath-spacing-card-content-padding-around-sm);gap:var(--ath-spacing-card-content-row-gap-sm);--width:calc(100% - (var(--ath-spacing-card-content-padding-around-sm) + var(--ath-spacing-card-content-padding-around-sm)))}.sc-ath-card-h .ath-card-wrapper--md.sc-ath-card{padding:var(--ath-spacing-card-content-padding-around-md);gap:var(--ath-spacing-card-content-row-gap-md);--width:calc(100% - (var(--ath-spacing-card-content-padding-around-md) + var(--ath-spacing-card-content-padding-around-md)))}.sc-ath-card-h .ath-card-wrapper_content.sc-ath-card{display:flex;flex-direction:column;flex:1 0 0;align-items:flex-start;gap:var(--ath-spacing-card-content-header-body-row-gap);align-self:stretch}.sc-ath-card-h .ath-card--clickable.sc-ath-card{cursor:pointer}.sc-ath-card-h .ath-card--clickable.sc-ath-card:hover{box-shadow:var(--ath-box-shadow-position-x-0) var(--ath-box-shadow-position-y-4) var(--ath-box-shadow-blur-8) var(--ath-box-shadow-spread-0) var(--ath-color-card-drop-shadow-hovered)}.sc-ath-card-h .ath-card--clickable.sc-ath-card:active{box-shadow:var(--ath-box-shadow-position-x-0) var(--ath-box-shadow-position-y-4) var(--ath-box-shadow-blur-8) var(--ath-box-shadow-spread-0) var(--ath-color-card-drop-shadow-pressed)}.sc-ath-card-h ath-icon.sc-ath-card{align-self:end}.sc-ath-card-h.sc-ath-card-s>[slot=body],.sc-ath-card-h .sc-ath-card-s>[slot=body]{color:var(--ath-color-fg-default);font-family:var(--ath-font-family-body);font-size:var(--ath-font-size-body-lg);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(ath-font-line-height-body)}.sc-ath-card-h.sc-ath-card-s>[slot=footer],.sc-ath-card-h .sc-ath-card-s>[slot=footer]{display:flex;flex-direction:var(--flex-direction);gap:var(--gap-footer);justify-content:flex-end}.sc-ath-card-h .ath-card-header.sc-ath-card{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-header-row-gap);width:100%}.sc-ath-card-h .ath-card-header_wrapper.sc-ath-card{display:flex;align-items:flex-start;align-self:stretch}.sc-ath-card-h .ath-card-header_wrapper__addons.sc-ath-card{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-header-date-img-row-gap);flex:1 0 0}.sc-ath-card-h .ath-card-header_wrapper__addons-img.sc-ath-card{display:flex;align-items:center;align-self:stretch}.sc-ath-card-h .ath-card-header_wrapper__addons-date.sc-ath-card{color:var(--ath-color-fg-primary-default);font-family:var(--ath-font-family-body);font-size:var(--ath-font-size-body-md);font-style:normal;font-weight:var(--ath-font-weight-body-regular);line-height:var(--ath-font-line-height-body)}.sc-ath-card-h .ath-card-header_wrapper__tag.sc-ath-card{display:flex;justify-content:flex-end;align-items:flex-start;flex:1 0 0}.sc-ath-card-h .ath-card-header_overline.sc-ath-card{color:var(--ath-color-fg-subtle);font-family:var(--ath-font-family-overline);font-size:var(--ath-font-size-overline);font-style:normal;font-weight:var(--ath-font-weight-overline);line-height:var(--ath-font-line-height-overline)}.sc-ath-card-h .ath-card-header_titles.sc-ath-card{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ath-spacing-card-header-titles-row-gap);align-self:stretch}.sc-ath-card-h .ath-card-header_titles__title.sc-ath-card{align-self:stretch;color:var(--ath-color-fg-primary-heading);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-card-title);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-card-title)}.sc-ath-card-h .ath-card-header_titles__subtitle.sc-ath-card{align-self:stretch;color:var(--ath-color-fg-default);font-family:var(--ath-font-family-heading);font-size:var(--ath-font-size-card-subtitle);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-card-subtitle)}.sc-ath-card-h .empty.sc-ath-card{display:none}.sc-ath-card-h:focus,.sc-ath-card-h:focus-visible{outline:none}.sc-ath-card-h:focus .ath-card--clickable.sc-ath-card,.sc-ath-card-h:focus-visible .ath-card--clickable.sc-ath-card{box-shadow:0px 0px 0px 2px var(--ath-color-drop-shadow-focus), 0px 0px 0px 4px var(--ath-color-border-focus)}";

let cardSequence = 0;
const AthCard = class {
    hostId = `card-${++cardSequence}`;
    titleId = `${this.hostId}-title`;
    subtitleId = `${this.hostId}-subtitle`;
    bodyId = `${this.hostId}-body`;
    dateId = `${this.hostId}-date`;
    tagId = `${this.hostId}-tag`;
    /**
     * Size of the card
     **/
    size = CardSize.Small;
    /**
     * Orientation Card
     **/
    orientation = CardOrientation.Vertical;
    /**
     * Card is clickable
     **/
    clickable = false;
    /**
     * if Card thumbnail is fluid
     */
    fluid = false;
    /**
     * ancho de la card
     */
    width;
    /**
     * ancho máximo de la card
     */
    maxWidth;
    /**
     * ancho máximo de la card
     */
    ariaLabelledBy;
    /**
     * Emitted when card is clicked
     */
    athClick;
    /**
     * Emitted when card gains focus
     */
    athFocus;
    /**
     * Emitted when card loses focus
     */
    athBlur;
    get el() { return index.getElement(this); }
    ArticleEl;
    header;
    isHeaderSlotted = true;
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.athClick = index.createEvent(this, "athClick");
        this.athFocus = index.createEvent(this, "athFocus");
        this.athBlur = index.createEvent(this, "athBlur");
        this.header = {
            headingText: undefined,
            date: undefined,
            overline: undefined,
            subtitle: undefined,
        };
    }
    handleClick = () => {
        this.ArticleEl.focus();
        this.athClick.emit();
    };
    handleFocus = () => {
        this.athFocus.emit();
    };
    handleBlur = () => {
        this.athBlur.emit();
    };
    getClassNames = () => ({
        'ath-card': true,
        [`ath-card--${this.orientation}`]: true,
        'ath-card--clickable': this.clickable,
        'ath-card--fluid': this.fluid,
    });
    getImgClassNames = () => ({
        'ath-card-header_wrapper__addons-img': true,
    });
    getTagClassNames = () => ({
        'ath-card-header_wrapper__tag': true,
    });
    getWrapperClassNames = () => ({
        'ath-card-wrapper': true,
        [`ath-card-wrapper--${this.size}`]: !!this.size,
    });
    getThumbnailClassNames = () => ({
        'ath-card-thumbnail': true,
    });
    getAriaAttributes = () => {
        return {
            'aria-labelledby': this.clickable && this.titleId ? this.titleId : this.ariaLabelledBy || undefined,
            'aria-describedby': this.clickable ? [this.dateId, this.tagId, this.subtitleId, this.bodyId].filter(Boolean).join(' ') : undefined,
        };
    };
    getHostAttributes = () => ({
        style: !!this.width ? { width: this.width } : undefined,
        role: this.clickable ? 'button' : undefined,
        tabindex: this.clickable ? 0 : -1,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.clickable ? this.handleClick : undefined,
    });
    renderIcon = () => {
        return index.h("ath-icon", { icon: "arrow_right" });
    };
    isSlotted(slotName) {
        const namedSlot = this.el.querySelector(`[slot="${slotName}"]`);
        if (namedSlot && slotName === 'thumbnail') {
            const thumbnail = this.el.querySelector('ath-card-thumbnail');
            if (thumbnail && typeof thumbnail['updateTypeCard'] === 'function') {
                thumbnail['updateTypeCard'](this.fluid, this.orientation === CardOrientation.Vertical);
            }
        }
        return !!namedSlot;
    }
    emptySlot(slotSelector) {
        const element = this.el.querySelector(slotSelector);
        if (element) {
            element.classList.add('empty');
        }
    }
    fillHeaderinterface() {
        const athHeader = this.el.querySelector('ath-card-header');
        if (athHeader) {
            this.header.date = athHeader.date ?? undefined;
            this.header.headingText = athHeader.headingText ?? undefined;
            this.header.overline = athHeader.overline ?? undefined;
            this.header.subtitle = athHeader.subtitle ?? undefined;
        }
        else {
            this.isHeaderSlotted = false;
        }
    }
    componentWillLoad() {
        this.fillHeaderinterface();
    }
    componentDidLoad() {
        if (!this.isHeaderSlotted)
            this.emptySlot('.ath-card-header');
        if (!this.isSlotted('img'))
            this.emptySlot('.ath-card-header_wrapper__addons-img');
        if (!this.isSlotted('tag'))
            this.emptySlot('.ath-card-header_wrapper__tag');
        if (!this.isSlotted('thumbnail'))
            this.emptySlot('.ath-card-thumbnail');
    }
    renderHeader = () => {
        return (index.h("div", { class: "ath-card-header" }, index.h("div", { class: "ath-card-header_wrapper" }, index.h("div", { class: "ath-card-header_wrapper__addons" }, index.h("div", { class: this.getImgClassNames() }, index.h("slot", { name: "img" })), !!this.header.date && (index.h("span", { id: this.dateId, class: "ath-card-header_wrapper__addons-date" }, this.header.date))), index.h("div", { class: this.getTagClassNames(), id: this.tagId }, index.h("slot", { name: "tag" }))), !!this.header.overline && index.h("span", { class: "ath-card-header_overline" }, " ", this.header.overline, " "), index.h("div", { class: "ath-card-header_titles" }, !!this.header.headingText && (index.h("span", { id: this.titleId, class: "ath-card-header_titles__title" }, this.header.headingText)), !!this.header.subtitle && (index.h("span", { id: this.subtitleId, class: "ath-card-header_titles__subtitle" }, this.header.subtitle)))));
    };
    render() {
        const containsHeader = Object.values(this.header).some(value => value != undefined) || this.isSlotted('img') || this.isSlotted('thumbnail') || this.isSlotted('tag');
        return (index.h(index.Host, { key: '8ad3a20b4a55a9adf3dd8e4327afd251f2738501', ...this.getHostAttributes(), ...this.getAriaAttributes() }, index.h("article", { key: '03f0231d6a0e3b493b10ebf60bad7826dacc437c', ref: (el) => (this.ArticleEl = el), class: this.getClassNames() }, index.h("div", { key: 'efa47b1424488f0c05f2ece2870385436bb5d0ba', class: this.getThumbnailClassNames() }, index.h("slot", { key: '90b027bb92401566c8379a1152edd8d428e8adce', name: "thumbnail" })), index.h("div", { key: 'e508b52b4a24855720ef78003c79c73be35ebc3a', class: this.getWrapperClassNames() }, index.h("div", { key: '97e9c59a9470324391354bac3a091d6126c9a59d', class: "ath-card-wrapper_content" }, containsHeader && this.renderHeader(), index.h("div", { key: '39fb9aa3461bbaefee419fa785d8f7494bed03bd', id: this.bodyId }, index.h("slot", { key: 'ef95949ff2343d570bf997263e838baab94ce473', name: "body" }))), !this.clickable && index.h("slot", { key: '409402d5e377c63154c631f41da2bba86d6a9cab', name: "footer" }), this.clickable && this.renderIcon()))));
    }
};
AthCard.style = cardCss;

exports.ath_card = AthCard;
//# sourceMappingURL=ath-card.entry.cjs.js.map
