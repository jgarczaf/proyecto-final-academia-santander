import { Host, h } from "@stencil/core";
import { getHeading } from "../../../utils/helper/heading";
import { ListLinkTarget, ListOrientation, ListSizes } from "../list.model";
import { IconColor } from "../../icon/icon.model";
let listItemSequence = 0;
export class AthListItem {
    el;
    /** List item title */
    headingText;
    /** Heading level for the title */
    headingLevel = 4;
    /** List item subtitle */
    subtitle;
    /** List item description */
    description;
    /** List item tooltip */
    tooltip;
    /** Tooltip max-width */
    tooltipMaxWidth = 240;
    /** List item divider. If user doesn't inform it, its informed from parent list */
    hasDivider;
    /** List item orientation. Its informed from parent list */
    orientation = ListOrientation.Vertical;
    /** List item size. Its informed from parent list */
    size = ListSizes.Medium;
    /** List item state disabled, only works if clickable is true */
    disabled = false;
    /** ListItem is clickable */
    clickable = false;
    /** URL when clickable is true */
    href;
    /** Type of target to url*/
    target = ListLinkTarget.Self;
    /** Type of rel to url*/
    rel;
    /** The aria-label attribute of the clicable item */
    athAriaLabel;
    /** Additional text to be appended to the aria-label to indicate that this is an external link */
    externalLabel = 'Se abre una ventana nueva';
    hasLeftSlot = true;
    hasRightSlot = true;
    calculatedLabelledBy;
    calculatedDescribedBy;
    /** Emitted when listItem is clicked */
    athClick;
    listItemId = `list-item-${++listItemSequence}`;
    headingTextId = `heading-text-${this.listItemId}`;
    subtitleId = `subtitle-${this.listItemId}`;
    descriptionId = `description-${this.listItemId}`;
    rightDetailId = `right-detail-${this.listItemId}`;
    externalLabelId = `external-${this.listItemId}`;
    handleClick = (event) => {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.athClick.emit();
    };
    componentWillLoad() {
        this.hasLeftSlot = this.isSlotted('left-detail');
        this.hasRightSlot = this.isSlotted('right-detail');
        this.calculatedLabelledBy = this.setLabelledby();
        this.calculatedDescribedBy = this.setDescribedBy();
    }
    componentWillRender() {
        if (!this.hasLeftSlot)
            this.markEmptySlot('.ath-list-item--left-detail');
        if (!this.hasRightSlot)
            this.markEmptySlot('.ath-list-item--right-detail');
    }
    isSlotted(slotName) {
        const slottedElements = this.el.querySelectorAll(`[slot="${slotName}"]`);
        return slottedElements.length > 0;
    }
    markEmptySlot(slotSelector) {
        const slot = this.el.querySelector(slotSelector);
        if (slot) {
            slot.classList.add('empty');
        }
    }
    setLabelledby() {
        const ids = [];
        if (this.headingText) {
            ids.push(this.headingTextId);
        }
        if (this.subtitle) {
            ids.push(this.subtitleId);
        }
        if (this.target === ListLinkTarget.Blank) {
            ids.push(this.externalLabelId);
        }
        return ids.length > 0 ? ids.join(' ') : undefined;
    }
    setDescribedBy() {
        const ids = [];
        if (this.description) {
            ids.push(this.descriptionId);
        }
        const hasRightSlot = this.el.querySelectorAll(`[slot="right-detail"]`).length > 0;
        if (hasRightSlot) {
            ids.push(this.rightDetailId);
        }
        return ids.length > 0 ? ids.join(' ') : undefined;
    }
    getHostAttributes = () => ({
        role: 'listitem',
    });
    getHostClassNames = () => ({
        [`ath-list-item--${this.orientation}`]: !!this.orientation,
        [`ath-list-item--${this.size}-${this.orientation}`]: !!this.size && !!this.orientation,
        disabled: this.disabled,
    });
    getListItemClassNames = () => ({
        [`ath-list-item`]: true,
        [`ath-list-item--divider`]: !!this.hasDivider,
        clickable: this.clickable,
        disabled: this.disabled,
    });
    renderItem() {
        const HeadingTitle = getHeading(this.headingLevel);
        return (h("div", { class: this.getListItemClassNames() }, this.isSlotted('left-detail') && (h("div", { class: "ath-list-item--left-detail" }, h("slot", { name: "left-detail" }))), h("div", { class: "ath-list-item--center-detail", part: "center-detail" }, this.headingText && (h(HeadingTitle, { id: this.headingTextId, class: "ath-list-item--title" }, this.headingText)), this.subtitle && (h("div", { class: "ath-list-item--subtitle" }, h("span", { class: "ath-list-item--subtitle-wrapper", id: this.subtitleId }, this.subtitle), h("div", { class: "ath-list-item--subtitle-tooltip" }, this.tooltip && (h("ath-tooltip", { class: this.disabled ? 'tooltip-trigger' : '', headingText: this.tooltip, position: "bottom", maxWidth: this.tooltipMaxWidth }, h("ath-tooltip-trigger", { size: "xs", tabindex: this.disabled ? '-1' : '0' })))))), this.description && (h("span", { id: this.descriptionId, class: "ath-list-item--description" }, this.description))), this.isSlotted('right-detail') && (h("div", { class: "ath-list-item--right-detail", id: this.rightDetailId }, h("slot", { name: "right-detail" }))), this.clickable && (h("div", null, h("ath-icon", { class: "icon", icon: "chevron_right", color: this.disabled ? IconColor.Disabled : IconColor.Default })))));
    }
    getClickableAttributes = () => {
        const externalLabel = this.externalLabel ?? 'Se abre una ventana nueva';
        const linkAriaLabel = this.athAriaLabel ? (this.target === ListLinkTarget.Blank ? `${this.athAriaLabel} ${externalLabel}` : this.athAriaLabel) : null;
        return {
            'tabindex': this.disabled ? '-1' : '0',
            'aria-disabled': this.disabled ? 'true' : 'false',
            'onClick': this.handleClick,
            'aria-label': linkAriaLabel || undefined,
            'aria-labelledby': !this.athAriaLabel ? this.calculatedLabelledBy : undefined,
            'aria-describedby': this.calculatedDescribedBy,
        };
    };
    renderItemClickable() {
        if (this.href) {
            return (h("a", { class: this.disabled ? 'clickable disabled' : 'clickable', href: this.href, target: '_' + this.target, rel: this.rel, ...this.getClickableAttributes() }, this.renderItem(), this.target === ListLinkTarget.Blank && (h("span", { class: "sr-only", id: this.externalLabelId }, this.externalLabel))));
        }
        return (h("div", { class: this.disabled ? 'clickable disabled' : 'clickable', role: "button", ...this.getClickableAttributes() }, this.renderItem()));
    }
    render() {
        return (h(Host, { key: 'f953710c29c3e7c0cd062e4bee66ff6da784a9c9', class: this.getHostClassNames(), ...this.getHostAttributes() }, this.clickable ? this.renderItemClickable() : this.renderItem()));
    }
    static get is() { return "ath-list-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "List item title"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Heading level for the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "4"
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
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
                    "text": "List item subtitle"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                    "text": "List item description"
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
                    "text": "List item tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipMaxWidth": {
                "type": "number",
                "attribute": "tooltip-max-width",
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
                    "text": "Tooltip max-width"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "240"
            },
            "hasDivider": {
                "type": "boolean",
                "attribute": "has-divider",
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
                    "text": "List item divider. If user doesn't inform it, its informed from parent list"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "ListOrientationType",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "ListOrientationType": {
                            "location": "import",
                            "path": "../list.model",
                            "id": "src/components/list/list.model.ts::ListOrientationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List item orientation. Its informed from parent list"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ListOrientation.Vertical"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ListSizeType",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ListSizeType": {
                            "location": "import",
                            "path": "../list.model",
                            "id": "src/components/list/list.model.ts::ListSizeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List item size. Its informed from parent list"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ListSizes.Medium"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "List item state disabled, only works if clickable is true"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "ListItem is clickable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "href": {
                "type": "string",
                "attribute": "href",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "URL when clickable is true"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
                "mutable": false,
                "complexType": {
                    "original": "ListLinkTargetType",
                    "resolved": "\"blank\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "ListLinkTargetType": {
                            "location": "import",
                            "path": "../list.model",
                            "id": "src/components/list/list.model.ts::ListLinkTargetType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of target to url"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ListLinkTarget.Self"
            },
            "rel": {
                "type": "string",
                "attribute": "rel",
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
                    "text": "Type of rel to url"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "athAriaLabel": {
                "type": "string",
                "attribute": "ath-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The aria-label attribute of the clicable item"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "externalLabel": {
                "type": "string",
                "attribute": "external-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional text to be appended to the aria-label to indicate that this is an external link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Se abre una ventana nueva'"
            }
        };
    }
    static get states() {
        return {
            "hasLeftSlot": {},
            "hasRightSlot": {},
            "calculatedLabelledBy": {},
            "calculatedDescribedBy": {}
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
                    "text": "Emitted when listItem is clicked"
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
//# sourceMappingURL=list-item.js.map
