import { Host, h } from "@stencil/core";
import { ChipDismissSize } from "../chip-dismiss.model";
export class AthChipDismissGroup {
    /**
     * Weather the chips are disabled
     */
    disabled;
    /**
     * The generic size of the chips
     */
    size = ChipDismissSize.Medium;
    /**
     * The width of the group
     */
    width;
    handleChipDismiss(event) {
        const chipEl = event.target;
        chipEl.remove();
    }
    host;
    componentDidLoad() {
        this.setChipsDisabled();
        this.setChipsSize();
    }
    setChipsDisabled() {
        if (this.disabled !== undefined) {
            const chips = this.host.querySelectorAll('ath-chip-dismiss');
            if (!chips)
                return;
            chips.forEach(chip => {
                const currentDisabled = chip.getAttribute('disabled');
                if (currentDisabled === null) {
                    chip.setAttribute('disabled', this.disabled.toString());
                }
            });
        }
    }
    setChipsSize() {
        if (!!this.size) {
            const chips = this.host.querySelectorAll('ath-chip-dismiss');
            if (!chips)
                return;
            chips.forEach((chip) => {
                const currentSize = chip.getAttribute('size');
                if (!currentSize && this.size) {
                    chip.size = this.size;
                }
            });
        }
    }
    render() {
        return (h(Host, { key: '9fab0b191416d338c832558c4bc70fa7321f7562', role: "group", style: this.width ? { width: this.width } : undefined }, h("slot", { key: '7b65b1f698c4d846e4832a565a1838d9c5a68be9' })));
    }
    static get is() { return "ath-chip-dismiss-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-dismiss-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-dismiss-group.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Weather the chips are disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ChipDismissSizes",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "ChipDismissSizes": {
                            "location": "import",
                            "path": "../chip-dismiss.model",
                            "id": "src/components/chip-dismiss/chip-dismiss.model.ts::ChipDismissSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The generic size of the chips"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "ChipDismissSize.Medium"
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
                    "text": "The width of the group"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "athDismiss",
                "method": "handleChipDismiss",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=chip-dismiss-group.js.map
