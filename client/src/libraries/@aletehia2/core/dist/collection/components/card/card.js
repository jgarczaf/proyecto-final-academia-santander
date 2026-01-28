import { Host, h } from "@stencil/core";
import { CardOrientation, CardSize } from "./card.model";
let cardSequence = 0;
export class AthCard {
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
    el;
    ArticleEl;
    header;
    isHeaderSlotted = true;
    constructor() {
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
        return h("ath-icon", { icon: "arrow_right" });
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
        return (h("div", { class: "ath-card-header" }, h("div", { class: "ath-card-header_wrapper" }, h("div", { class: "ath-card-header_wrapper__addons" }, h("div", { class: this.getImgClassNames() }, h("slot", { name: "img" })), !!this.header.date && (h("span", { id: this.dateId, class: "ath-card-header_wrapper__addons-date" }, this.header.date))), h("div", { class: this.getTagClassNames(), id: this.tagId }, h("slot", { name: "tag" }))), !!this.header.overline && h("span", { class: "ath-card-header_overline" }, " ", this.header.overline, " "), h("div", { class: "ath-card-header_titles" }, !!this.header.headingText && (h("span", { id: this.titleId, class: "ath-card-header_titles__title" }, this.header.headingText)), !!this.header.subtitle && (h("span", { id: this.subtitleId, class: "ath-card-header_titles__subtitle" }, this.header.subtitle)))));
    };
    render() {
        const containsHeader = Object.values(this.header).some(value => value != undefined) || this.isSlotted('img') || this.isSlotted('thumbnail') || this.isSlotted('tag');
        return (h(Host, { key: '8ad3a20b4a55a9adf3dd8e4327afd251f2738501', ...this.getHostAttributes(), ...this.getAriaAttributes() }, h("article", { key: '03f0231d6a0e3b493b10ebf60bad7826dacc437c', ref: (el) => (this.ArticleEl = el), class: this.getClassNames() }, h("div", { key: 'efa47b1424488f0c05f2ece2870385436bb5d0ba', class: this.getThumbnailClassNames() }, h("slot", { key: '90b027bb92401566c8379a1152edd8d428e8adce', name: "thumbnail" })), h("div", { key: 'e508b52b4a24855720ef78003c79c73be35ebc3a', class: this.getWrapperClassNames() }, h("div", { key: '97e9c59a9470324391354bac3a091d6126c9a59d', class: "ath-card-wrapper_content" }, containsHeader && this.renderHeader(), h("div", { key: '39fb9aa3461bbaefee419fa785d8f7494bed03bd', id: this.bodyId }, h("slot", { key: 'ef95949ff2343d570bf997263e838baab94ce473', name: "body" }))), !this.clickable && h("slot", { key: '409402d5e377c63154c631f41da2bba86d6a9cab', name: "footer" }), this.clickable && this.renderIcon()))));
    }
    static get is() { return "ath-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "CardSizes",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "CardSizes": {
                            "location": "import",
                            "path": "./card.model",
                            "id": "src/components/card/card.model.ts::CardSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CardSize.Small"
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "CardOrientations",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "CardOrientations": {
                            "location": "import",
                            "path": "./card.model",
                            "id": "src/components/card/card.model.ts::CardOrientations"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Orientation Card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CardOrientation.Vertical"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "Card is clickable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "fluid": {
                "type": "boolean",
                "attribute": "fluid",
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
                    "text": "if Card thumbnail is fluid"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "ancho de la card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "maxWidth": {
                "type": "string",
                "attribute": "max-width",
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
                    "text": "ancho m\u00E1ximo de la card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "ariaLabelledBy": {
                "type": "string",
                "attribute": "aria-labelled-by",
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
                    "text": "ancho m\u00E1ximo de la card"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "athClick",
                "name": "athClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when card is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Emitted when card gains focus"
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
                    "text": "Emitted when card loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=card.js.map
