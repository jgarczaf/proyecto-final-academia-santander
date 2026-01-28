import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';

const ActionBarAlignments = {
    Left: 'left'};
const ActionBarSizes = {
    Medium: 'md'};

const actionBarCss = ":host .ath-action-bar{display:inline-flex;width:100%;align-items:center;gap:var(--ath-spacing-action-bar-col-gap)}:host .ath-action-bar--alignment-left{justify-content:flex-start}:host .ath-action-bar--alignment-center{justify-content:center}:host .ath-action-bar--alignment-right{justify-content:flex-end}:host .ath-action-bar--alignment-justify{justify-content:space-between}";

const AthActionBar$1 = /*@__PURE__*/ proxyCustomElement(class AthActionBar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    get el() { return this; }
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
    static get watchers() { return {
        "size": ["handlePropChange"]
    }; }
    static get style() { return actionBarCss; }
}, [257, "ath-action-bar", {
        "alignment": [1],
        "size": [1]
    }, undefined, {
        "size": ["handlePropChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-action-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-action-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthActionBar$1);
            }
            break;
    } });
}

const AthActionBar = AthActionBar$1;
const defineCustomElement = defineCustomElement$1;

export { AthActionBar, defineCustomElement };
//# sourceMappingURL=ath-action-bar.js.map

//# sourceMappingURL=ath-action-bar.js.map