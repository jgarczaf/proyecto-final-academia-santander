import { Host, h } from "@stencil/core";
import { getHeading } from "../../utils/helper/heading";
import { FcPictogram } from "../../sharedfc/input/index";
import { HeadingSize, SectionTitleColor, SectionTitleOption } from "./section-title.model";
let tooltipItemsequence = 0;
export class AthSectionTitle {
    tooltipId = `tooltip-${++tooltipItemsequence}`;
    el;
    /**
     * Option assigned to the decorative element.
     **/
    type = SectionTitleOption.Default;
    /**
     * Color assigned to the decorative element and the 'overline' text.
     **/
    color = SectionTitleColor.Primary;
    /**
     * The code of the Section Title's icon (used with type Icon)
     */
    icon;
    /**
     * The code of the Section Title's pictogram (used with type Pictogram)
     */
    pictogram;
    /**
     * Section title.
     **/
    headingText;
    /**
     * Indicates the heading size for the heading text.
     */
    headingSize = HeadingSize.Sm;
    /**
     * Heading level assigned to the title. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>.
     **/
    headingLevel = 4;
    /**
     * Text above the title, usually used to categorize the content.
     **/
    overline;
    /**
     * Heading level assigned to the overline. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>.
     **/
    headingOverline = 0;
    /**
     * 'The 'Section title' can become a button that shows or hides the content of the 'Collapse' component.
     **/
    collapsable;
    /**
     * Identifier of the 'Collapse' component whose visibility is controlled by this 'Section title'.
     **/
    collapseTarget;
    /**
     * Tooltip text to be included.
     **/
    tooltip = '';
    /**
     * Tooltip aria-label.
     **/
    tooltipLabel = 'Más información';
    isExpanded = false;
    /**
     * Emitted when the 'Collapse' component collapses or expands.
     */
    athToggleCollapse;
    handleCollapseStateChange(event) {
        if (event.detail.id === this.collapseTarget) {
            this.isExpanded = event.detail.isExpanded;
        }
    }
    handleKeyDown(ev) {
        if (['Enter', 'Space'].includes(ev.code)) {
            this.handleCollapse();
        }
    }
    handleCollapse = () => {
        this.isExpanded = !this.isExpanded;
        this.athToggleCollapse.emit(this.collapseTarget);
    };
    getHostClassNames = () => ({
        'ath-section-title-wrapper': true,
    });
    getClassNames = () => ({
        'ath-section-title': true,
        [`ath-section-title--${this.color}`]: this.type === SectionTitleOption.Default && !!this.color,
        [`ath-section-title--collapsable`]: !!this.collapsable,
        [`ath-section-title--expanded`]: !this.isExpanded,
        [`ath-section-title--hasLabel`]: !!this.headingText,
    });
    getChevronClasses = () => ({
        'ath-section-title--chevron': true,
        [`ath-section-title--chevron-rotate`]: !this.isExpanded,
    });
    getCollapsableAttr = (condition, value) => (condition ? value : undefined);
    getAttributes = () => ({
        'role': this.getCollapsableAttr(this.collapsable, 'button'),
        'tabindex': this.getCollapsableAttr(this.collapsable, '0'),
        'aria-controls': this.getCollapsableAttr(this.collapseTarget, this.collapseTarget),
        'aria-expanded': this.getCollapsableAttr(this.collapsable, `${this.isExpanded}`),
        'onClick': this.getCollapsableAttr(this.collapsable, this.handleCollapse),
    });
    render() {
        const HeadingOverline = getHeading(this.headingOverline);
        const HeadingLabel = getHeading(this.headingLevel);
        const decorationLeft = () => {
            switch (this.type) {
                case SectionTitleOption.Icon:
                    return h("ath-icon", { icon: this.icon, size: "lg" });
                case SectionTitleOption.Pictogram:
                    return this.pictogram && h(FcPictogram, { name: this.pictogram });
                case SectionTitleOption.Default:
                default:
                    return h("div", { class: "ath-section-title--decorator ath-section-title--default" });
            }
        };
        return (h(Host, { class: this.getHostClassNames() }, decorationLeft(), h("div", { ...this.getAttributes(), class: this.getClassNames() }, h("div", { class: "ath-section-title--content" }, this.overline && (h(HeadingOverline, { class: { 'ath-section-title--overline': true, [`ath-section-title--${this.color}-overline`]: !!this.color } }, this.overline)), h("div", { class: "ath-section-title--label-wrapper" }, h(HeadingLabel, { class: { 'ath-section-title--label': true, [`ath-section-title--label--${this.headingSize}`]: true } }, this.headingText, h("div", { class: "ath-section-title--slot" }, h("slot", null))))), this.collapsable && (h("div", { class: this.getChevronClasses() }, h("ath-icon", { icon: "chevron_up" })))), this.tooltip && (h("ath-tooltip", { id: this.tooltipId, "heading-text": this.tooltip, class: "ath-section-title--tooltip" }, h("ath-tooltip-trigger", { icon: "info", size: "md", "aria-label": this.tooltipLabel, onClick: ev => ev.stopPropagation(), onKeyDown: ev => ev.stopPropagation(), "aria-describedBy": this.tooltipId })))));
    }
    static get is() { return "ath-section-title"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["section-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["section-title.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "SectionTitleOptionType",
                    "resolved": "\"default\" | \"icon\" | \"pictogram\"",
                    "references": {
                        "SectionTitleOptionType": {
                            "location": "import",
                            "path": "./section-title.model",
                            "id": "src/components/section-title/section-title.model.ts::SectionTitleOptionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Option assigned to the decorative element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SectionTitleOption.Default"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "SectionTitleColorType",
                    "resolved": "\"accent\" | \"primary\"",
                    "references": {
                        "SectionTitleColorType": {
                            "location": "import",
                            "path": "./section-title.model",
                            "id": "src/components/section-title/section-title.model.ts::SectionTitleColorType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color assigned to the decorative element and the 'overline' text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "SectionTitleColor.Primary"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "The code of the Section Title's icon (used with type Icon)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "pictogram": {
                "type": "string",
                "attribute": "pictogram",
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
                    "text": "The code of the Section Title's pictogram (used with type Pictogram)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
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
                    "text": "Section title."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingSize": {
                "type": "string",
                "attribute": "heading-size",
                "mutable": false,
                "complexType": {
                    "original": "HeadingSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "HeadingSizes": {
                            "location": "import",
                            "path": "./section-title.model",
                            "id": "src/components/section-title/section-title.model.ts::HeadingSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the heading size for the heading text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "HeadingSize.Sm"
            },
            "headingLevel": {
                "type": "number",
                "attribute": "heading-level",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Heading level assigned to the title. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "4"
            },
            "overline": {
                "type": "string",
                "attribute": "overline",
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
                    "text": "Text above the title, usually used to categorize the content."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingOverline": {
                "type": "number",
                "attribute": "heading-overline",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Heading level assigned to the overline. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "collapsable": {
                "type": "boolean",
                "attribute": "collapsable",
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
                    "text": "'The 'Section title' can become a button that shows or hides the content of the 'Collapse' component."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "collapseTarget": {
                "type": "string",
                "attribute": "collapse-target",
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
                    "text": "Identifier of the 'Collapse' component whose visibility is controlled by this 'Section title'."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltip": {
                "type": "string",
                "attribute": "tooltip",
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
                    "text": "Tooltip text to be included."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "tooltipLabel": {
                "type": "string",
                "attribute": "tooltip-label",
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
                    "text": "Tooltip aria-label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'M\u00E1s informaci\u00F3n'"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
    static get events() {
        return [{
                "method": "athToggleCollapse",
                "name": "athToggleCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the 'Collapse' component collapses or expands."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "athCollapseState",
                "method": "handleCollapseStateChange",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=section-title.js.map
