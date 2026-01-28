import { h } from './p-D-i5s4zr.js';

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
//# sourceMappingURL=p-DbxVRoPv.js.map

//# sourceMappingURL=p-DbxVRoPv.js.map