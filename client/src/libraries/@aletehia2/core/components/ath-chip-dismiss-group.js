import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { C as ChipDismissSize } from './p-CT2ZlU4F.js';

const chipDismissGroupCss = ":host{display:flex;align-items:center;align-content:center;gap:var(--ath-spacing-chip-group-row-gap) var(--ath-spacing-chip-group-col-gap);flex-wrap:wrap;width:100%}";

const AthChipDismissGroup$1 = /*@__PURE__*/ proxyCustomElement(class AthChipDismissGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
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
    get host() { return this; }
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
    static get style() { return chipDismissGroupCss; }
}, [257, "ath-chip-dismiss-group", {
        "disabled": [4],
        "size": [1],
        "width": [1]
    }, [[0, "athDismiss", "handleChipDismiss"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-chip-dismiss-group"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-chip-dismiss-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthChipDismissGroup$1);
            }
            break;
    } });
}

const AthChipDismissGroup = AthChipDismissGroup$1;
const defineCustomElement = defineCustomElement$1;

export { AthChipDismissGroup, defineCustomElement };
//# sourceMappingURL=ath-chip-dismiss-group.js.map

//# sourceMappingURL=ath-chip-dismiss-group.js.map