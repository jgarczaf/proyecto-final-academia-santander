'use strict';

var index = require('./index--hWT2F8k.js');
var list_model = require('./list.model-B3OQWN4y.js');

const listCss = ".sc-ath-list-h{display:flex;flex-wrap:nowrap;flex-direction:var(--flex-direction--container)}.ath-list--horizontal.sc-ath-list-h{--flex-direction--container:row;--flex-direction--items:column}.ath-list--vertical.sc-ath-list-h{--flex-direction--container:column;--flex-direction--items:row}";

const AthList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /** List spacings size*/
    size = list_model.ListSizes.Medium;
    /** Define the list orientation*/
    orientation = list_model.ListOrientation.Vertical;
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
        return (index.h(index.Host, { key: 'a1c21273acc5a149d3d7242039dfde0fa4144d2f', class: this.getListClassNames(), ...this.getHostAttributes() }, index.h("slot", { key: 'f663c4203bb859fa7dc17522fe926f2106460268' })));
    }
};
AthList.style = listCss;

exports.ath_list = AthList;
//# sourceMappingURL=ath-list.entry.cjs.js.map
