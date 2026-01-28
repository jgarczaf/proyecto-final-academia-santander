import { h } from "@stencil/core";
export const FcPictogram = props => {
    const theme = document.body.dataset.theme || 'core';
    const assetsPath = `assets/images/pictograms/${theme}/`;
    return !!props.name && h("img", { src: `${assetsPath}${props.name}.svg`, alt: "" });
};
//# sourceMappingURL=pictograms.js.map
