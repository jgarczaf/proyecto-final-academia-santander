import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';

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

const AthDivider = /*@__PURE__*/ proxyCustomElement(class AthDivider extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
        return (h(Host, { key: '29c0c6955490f30e48ae4016c22475eaa3ad294f', ...this.getAttributes() }, h("div", { key: '9a7d28bf41fc9ff8086e5c8eef312ddbf6259fe0', class: this.getClassNames() })));
    }
    static get style() { return dividerCss; }
}, [257, "ath-divider", {
        "orientation": [1],
        "size": [1],
        "color": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthDivider);
            }
            break;
    } });
}

export { AthDivider as A, defineCustomElement as d };
//# sourceMappingURL=p-BhtV36-z.js.map

//# sourceMappingURL=p-BhtV36-z.js.map