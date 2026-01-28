import { p as proxyCustomElement, H, h, c as Host } from './p-D-i5s4zr.js';
import { L as ListSizes, a as ListOrientation } from './p-Y0twCYlm.js';

const listCss = ".sc-ath-list-h{display:flex;flex-wrap:nowrap;flex-direction:var(--flex-direction--container)}.ath-list--horizontal.sc-ath-list-h{--flex-direction--container:row;--flex-direction--items:column}.ath-list--vertical.sc-ath-list-h{--flex-direction--container:column;--flex-direction--items:row}";

const AthList$1 = /*@__PURE__*/ proxyCustomElement(class AthList extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    /** List spacings size*/
    size = ListSizes.Medium;
    /** Define the list orientation*/
    orientation = ListOrientation.Vertical;
    /** Define if the list contains dividers between items*/
    hasDivider;
    /** List state disabled, only works if clickable is true */
    disabled = false;
    /** List is clickable */
    clickable = false;
    slottedItems = [];
    getHostAttributes = () => ({
        role: 'list',
    });
    getListClassNames = () => ({
        'ath-list': true,
        [`ath-list--${this.orientation}`]: !!this.orientation,
        'disabled': this.disabled,
        'clickable': this.clickable,
    });
    componentWillLoad() {
        this.slottedItems = Array.from(this.el.querySelectorAll('ath-list-item'));
        this.slottedItems.forEach((item, index) => {
            item.hasDivider = !!this.hasDivider && this.hasDivider && index < this.slottedItems.length - 1;
            item.orientation = this.orientation;
            item.size = this.size;
            if (this.disabled) {
                item.disabled = this.disabled;
            }
            if (this.clickable) {
                item.clickable = this.clickable;
            }
        });
    }
    render() {
        return (h(Host, { key: 'a1c21273acc5a149d3d7242039dfde0fa4144d2f', class: this.getListClassNames(), ...this.getHostAttributes() }, h("slot", { key: 'f663c4203bb859fa7dc17522fe926f2106460268' })));
    }
    static get style() { return listCss; }
}, [262, "ath-list", {
        "size": [1],
        "orientation": [1],
        "hasDivider": [4, "has-divider"],
        "disabled": [4],
        "clickable": [4],
        "slottedItems": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-list"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthList$1);
            }
            break;
    } });
}

const AthList = AthList$1;
const defineCustomElement = defineCustomElement$1;

export { AthList, defineCustomElement };
//# sourceMappingURL=ath-list.js.map

//# sourceMappingURL=ath-list.js.map