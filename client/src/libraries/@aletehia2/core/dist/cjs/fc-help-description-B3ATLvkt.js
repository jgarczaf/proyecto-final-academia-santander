'use strict';

var index = require('./index--hWT2F8k.js');

const getHelpDescriptionClassNames = (position = 'right', hasArrow = false) => ({
    '_ath-help-description': true,
    [`_ath-help-description--${position}`]: !!position,
    '_ath-help-description--has-arrow': hasArrow,
});
const FcHelpDescription = props => {
    return [
        index.h("div", { class: getHelpDescriptionClassNames(props.position, props.hasArrow), id: props.id }, index.h("div", { class: "content" }, index.h("div", { class: "text" }, props.text))),
    ];
};

exports.FcHelpDescription = FcHelpDescription;
//# sourceMappingURL=fc-help-description-B3ATLvkt.js.map

//# sourceMappingURL=fc-help-description-B3ATLvkt.js.map