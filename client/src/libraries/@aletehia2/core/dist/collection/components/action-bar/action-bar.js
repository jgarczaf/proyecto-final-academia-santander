import { h, Host } from "@stencil/core";
import { ActionBarAlignments, ActionBarSizes } from "./action-bar.model";
export class AthActionBar {
    el;
    /**
     * Indicates the alignment of the inner components
     */
    alignment = ActionBarAlignments.Left;
    /**
     * Indicates the size of the inner components
     */
    size = ActionBarSizes.Medium;
    componentDidLoad() {
        this.injectToChildren();
    }
    handlePropChange() {
        this.injectToChildren();
    }
    injectToChildren() {
        const slot = this.el.shadowRoot.querySelector('slot');
        if (!slot)
            return;
        const assignedElements = slot.assignedElements ? slot.assignedElements() : [];
        assignedElements.forEach(child => {
            const tag = child.tagName.toLowerCase();
            if (tag === 'ath-badge') {
                child.children[0] && (child.children[0].size = this.size);
            }
            if (tag === 'ath-divider') {
                child.style.height = this.getDividerHeightToken();
                child.color = 'boldest';
                child.orientation = 'vertical';
                child.size = 'sm';
            }
            else if (tag === 'ath-button' ||
                tag === 'ath-button-expandable' ||
                tag === 'ath-button-link' ||
                tag === 'ath-link' ||
                tag === 'ath-menu-button' ||
                tag === 'ath-segmented-control') {
                child.size = this.size;
            }
            else if (tag === 'ath-tooltip') {
                child.children[0] && child.children[0].children[0] && (child.children[0].children[0].size = this.size);
            }
        });
    }
    getDividerHeightToken = () => {
        return `var(--ath-sizing-action-bar-divider-height-${this.size})`;
    };
    getClassNames = () => ({
        'ath-action-bar': true,
        [`ath-action-bar--alignment-${this.alignment}`]: !!this.alignment,
    });
    render() {
        return (h(Host, { key: 'fac75fd00ea292f61ec3594254509f5ea7d9c23a', role: "toolbar" }, h("div", { key: '813edcc03bd5710c94513caba2eea38e836c4dc2', class: this.getClassNames() }, h("slot", { key: 'f669cdb51a054e1c4e8c499f40af14ca15352a97' }))));
    }
    static get is() { return "ath-action-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["action-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["action-bar.css"]
        };
    }
    static get properties() {
        return {
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "ActionBarAlignment",
                    "resolved": "\"center\" | \"justify\" | \"left\" | \"right\"",
                    "references": {
                        "ActionBarAlignment": {
                            "location": "import",
                            "path": "./action-bar.model",
                            "id": "src/components/action-bar/action-bar.model.ts::ActionBarAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the alignment of the inner components"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ActionBarAlignments.Left"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ActionBarSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ActionBarSize": {
                            "location": "import",
                            "path": "./action-bar.model",
                            "id": "src/components/action-bar/action-bar.model.ts::ActionBarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the size of the inner components"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ActionBarSizes.Medium"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "handlePropChange"
            }];
    }
}
//# sourceMappingURL=action-bar.js.map
