import { r as registerInstance, a as getElement, h, H as Host } from './index-D2-yfY-d.js';
import { C as ChipDismissSize } from './chip-dismiss.model-CT2ZlU4F.js';

const chipDismissGroupCss = ":host{display:flex;align-items:center;align-content:center;gap:var(--ath-spacing-chip-group-row-gap) var(--ath-spacing-chip-group-col-gap);flex-wrap:wrap;width:100%}";

const AthChipDismissGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
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
};
AthChipDismissGroup.style = chipDismissGroupCss;

export { AthChipDismissGroup as ath_chip_dismiss_group };
//# sourceMappingURL=ath-chip-dismiss-group.entry.js.map
