'use strict';

var index = require('./index--hWT2F8k.js');

const DividerOrientation = {
    Horizontal: 'horizontal'};
const DividerSize = {
    Medium: 'md'};
const DividerColor = {
    Bold: 'bold'};
const DIVIDER_DEFAULT_ORIENTATION = DividerOrientation.Horizontal;
const DIVIDER_DEFAULT_SIZE = DividerSize.Medium;
const DIVIDER_DEFAULT_COLOR = DividerColor.Bold;

const dividerCss = ":host .ath-divider.ath-divider--color-bold{border-color:var(--ath-color-border-alpha-bold-default)}:host .ath-divider.ath-divider--color-bolder{border-color:var(--ath-color-border-alpha-bolder-default)}:host .ath-divider.ath-divider--color-boldest{border-color:var(--ath-color-border-alpha-boldest-default)}:host{display:block}:host .ath-divider{width:fit-content}:host .ath-divider--orientation-horizontal{width:100%;border-bottom-style:solid}:host .ath-divider--orientation-vertical{height:100%;border-left-style:solid}:host .ath-divider--size-md{border-width:2px}:host .ath-divider--size-sm{border-width:1px}";

const AthDivider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Orientation of the divider
     **/
    orientation = DIVIDER_DEFAULT_ORIENTATION;
    /**
     * Size of the divider
     **/
    size = DIVIDER_DEFAULT_SIZE;
    /**
     * Color of the divider
     **/
    color = DIVIDER_DEFAULT_COLOR;
    getAttributes = () => ({
        'role': 'separator',
        'aria-orientation': this.orientation,
    });
    getClassNames = () => ({
        'ath-divider': true,
        [`ath-divider--orientation-${this.orientation}`]: !!this.orientation,
        [`ath-divider--size-${this.size}`]: !!this.size,
        [`ath-divider--color-${this.color}`]: !!this.color,
    });
    render() {
        return (index.h(index.Host, { key: '29c0c6955490f30e48ae4016c22475eaa3ad294f', ...this.getAttributes() }, index.h("div", { key: '9a7d28bf41fc9ff8086e5c8eef312ddbf6259fe0', class: this.getClassNames() })));
    }
};
AthDivider.style = dividerCss;

exports.ath_divider = AthDivider;
//# sourceMappingURL=ath-divider.entry.cjs.js.map
