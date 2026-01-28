import { h } from './index-D2-yfY-d.js';

const getHelpDescriptionClassNames = (position = 'right', hasArrow = false) => ({
    '_ath-help-description': true,
    [`_ath-help-description--${position}`]: !!position,
    '_ath-help-description--has-arrow': hasArrow,
});
const FcHelpDescription = props => {
    return [
        h("div", { class: getHelpDescriptionClassNames(props.position, props.hasArrow), id: props.id }, h("div", { class: "content" }, h("div", { class: "text" }, props.text))),
    ];
};

export { FcHelpDescription as F };
//# sourceMappingURL=fc-help-description-DXgUGRJZ.js.map

//# sourceMappingURL=fc-help-description-DXgUGRJZ.js.map