import { h } from './index-D2-yfY-d.js';

const FcPictogram = props => {
    const theme = document.body.dataset.theme || 'core';
    const assetsPath = `assets/images/pictograms/${theme}/`;
    return !!props.name && h("img", { src: `${assetsPath}${props.name}.svg`, alt: "" });
};

export { FcPictogram as F };
//# sourceMappingURL=pictograms-gNbJzsB4.js.map

//# sourceMappingURL=pictograms-gNbJzsB4.js.map