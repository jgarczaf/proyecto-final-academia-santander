import { h } from './p-D-i5s4zr.js';

const FcPictogram = props => {
    const theme = document.body.dataset.theme || 'core';
    const assetsPath = `assets/images/pictograms/${theme}/`;
    return !!props.name && h("img", { src: `${assetsPath}${props.name}.svg`, alt: "" });
};

export { FcPictogram as F };
//# sourceMappingURL=p-mJhgEAok.js.map

//# sourceMappingURL=p-mJhgEAok.js.map