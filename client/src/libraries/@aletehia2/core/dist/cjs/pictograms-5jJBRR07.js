'use strict';

var index = require('./index--hWT2F8k.js');

const FcPictogram = props => {
    const theme = document.body.dataset.theme || 'core';
    const assetsPath = `assets/images/pictograms/${theme}/`;
    return !!props.name && index.h("img", { src: `${assetsPath}${props.name}.svg`, alt: "" });
};

exports.FcPictogram = FcPictogram;
//# sourceMappingURL=pictograms-5jJBRR07.js.map

//# sourceMappingURL=pictograms-5jJBRR07.js.map