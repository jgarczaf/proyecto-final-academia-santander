import { h, Host } from "@stencil/core";
import { TooltipColor, TooltipPosition, TooltipTrigger } from "./tooltip.model";
let tooltipSequence = 0;
export class AthTooltip {
    hostId = ++tooltipSequence;
    tooltipId = `tooltip-${this.hostId}`;
    /**
     * Whether the tooltip has an arrow
     */
    hasArrow = true;
    /**
     * The position of the tooltip
     */
    position = TooltipPosition.Right;
    /**
     * The variant of the tooltip
     */
    color = TooltipColor.Primary;
    /**
     * Whether the tooltip has a maximum width, and if so, the maximum width
     */
    maxWidth = 240;
    /**
     * The action that will show the tooltip
     */
    trigger = TooltipTrigger.Hover;
    /**
     * The text in the tooltip
     */
    headingText = '';
    isVisible = false;
    el;
    handleFocus() {
        if (this.trigger === TooltipTrigger.Hover) {
            this.showTooltip();
        }
    }
    handleBlur() {
        if (this.trigger === TooltipTrigger.Hover) {
            this.hideTooltip();
        }
    }
    handleClick() {
        if (this.trigger === TooltipTrigger.Click) {
            if (this.isVisible) {
                this.hideTooltip();
            }
            else {
                this.showTooltip();
                document.addEventListener('focusout', this.hideTooltip);
            }
        }
    }
    handleMouseEnter() {
        if (this.trigger === TooltipTrigger.Hover) {
            this.showTooltip();
        }
    }
    handleMouseLeave() {
        if (this.trigger === TooltipTrigger.Hover) {
            this.hideTooltip();
        }
    }
    handleKeyDown(ev) {
        if (this.isVisible && ev.code === 'Escape') {
            this.hideTooltip();
        }
    }
    showTooltip = () => {
        this.isVisible = true;
        this.calculateTooltipPosition();
    };
    calculateTooltipPosition = () => {
        const container = this.el.querySelector('.ath-tooltip-container');
        const tooltip = this.el.querySelector('[role="tooltip"]');
        let containerPosition;
        let tooltipPosition;
        if (container) {
            containerPosition = container.getBoundingClientRect();
            tooltipPosition = tooltip.getBoundingClientRect();
        }
        if (!tooltip) {
            return;
        }
        const minimumContainerSize = 40;
        const combinedXtranslation = container.clientWidth < minimumContainerSize ? container.clientWidth / 2 + 20 : 40;
        const gap = 12;
        switch (this.position) {
            case 'top':
                tooltip.style.top = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.left = `${containerPosition.width / 2 - tooltipPosition.width / 2}px`;
                break;
            case 'left':
                tooltip.style.top = `-${tooltipPosition.height / 2 - containerPosition.height / 2}px`;
                tooltip.style.left = `-${tooltip.clientWidth + 8 + gap}px`;
                break;
            case 'bottom':
                tooltip.style.bottom = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.left = `${containerPosition.width / 2 - tooltipPosition.width / 2}px`;
                break;
            case 'right':
                tooltip.style.top = `-${tooltipPosition.height / 2 - containerPosition.height / 2}px`;
                tooltip.style.left = `${containerPosition.width + 8 + gap}px`;
                break;
            case 'top-left':
                tooltip.style.top = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.left = `-${tooltip.clientWidth - combinedXtranslation}px`;
                break;
            case 'top-right':
                tooltip.style.top = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.right = `-${tooltipPosition.width - combinedXtranslation}px`;
                break;
            case 'bottom-left':
                tooltip.style.bottom = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.left = `-${tooltip.clientWidth - combinedXtranslation}px`;
                break;
            case 'bottom-right':
                tooltip.style.bottom = `-${tooltipPosition.height + 8 + gap}px`;
                tooltip.style.right = `-${tooltipPosition.width - combinedXtranslation}px`;
                break;
        }
    };
    hideTooltip = () => {
        this.isVisible = false;
        document.removeEventListener('focusout', this.hideTooltip);
    };
    classNames = () => ({
        'ath-tooltip': true,
        [`ath-tooltip--${this.position}`]: !!this.position,
        [`ath-tooltip--${this.color}`]: !!this.color,
        'ath-tooltip--no-arrow': !this.hasArrow,
        'ath-tooltip--visible': this.isVisible,
    });
    componentDidLoad() {
        const topWindow = window.top || window;
        topWindow.addEventListener('keydown', this.handleKeyDown.bind(this));
        const trigger = this.el.querySelector('ath-button') ?? this.el.querySelector('ath-tooltip-trigger');
        if (trigger) {
            trigger.setAttribute('aria-describedby', this.tooltipId);
        }
    }
    render() {
        return (h(Host, { key: 'fcf26ea0d30845fed490abc175efbf28e609aed6' }, h("div", { key: 'b231769ea13b73ee44f0f41e436731c8ff283c6e', class: "ath-tooltip-container" }, h("slot", { key: '4b607cd8184146c029339504ad28c53cc41630a5' }), this.headingText !== '' && (h("span", { key: '9081aa38bf233bdcf10e2c15760061ffb88654d6', id: this.tooltipId, role: "tooltip", class: this.classNames(), style: {
                '--max-width': this.maxWidth === 0 ? 'none' : `${this.maxWidth}px`,
            } }, this.headingText)))));
    }
    static get is() { return "ath-tooltip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
            "hasArrow": {
                "type": "boolean",
                "attribute": "has-arrow",
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
                    "text": "Whether the tooltip has an arrow"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "TooltipPositions",
                    "resolved": "\"bottom\" | \"bottom-left\" | \"bottom-right\" | \"left\" | \"right\" | \"top\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "TooltipPositions": {
                            "location": "import",
                            "path": "./tooltip.model",
                            "id": "src/components/tooltip/tooltip.model.ts::TooltipPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The position of the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TooltipPosition.Right"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "TooltipColors",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "TooltipColors": {
                            "location": "import",
                            "path": "./tooltip.model",
                            "id": "src/components/tooltip/tooltip.model.ts::TooltipColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The variant of the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TooltipColor.Primary"
            },
            "maxWidth": {
                "type": "number",
                "attribute": "max-width",
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
                    "text": "Whether the tooltip has a maximum width, and if so, the maximum width"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "240"
            },
            "trigger": {
                "type": "string",
                "attribute": "trigger",
                "mutable": false,
                "complexType": {
                    "original": "TooltipTriggers",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {
                        "TooltipTriggers": {
                            "location": "import",
                            "path": "./tooltip.model",
                            "id": "src/components/tooltip/tooltip.model.ts::TooltipTriggers"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The action that will show the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "TooltipTrigger.Hover"
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
                    "text": "The text in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "athFocus",
                "method": "handleFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "athBlur",
                "method": "handleBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "athClick",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mouseenter",
                "method": "handleMouseEnter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseleave",
                "method": "handleMouseLeave",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=tooltip.js.map
