import { h } from "@stencil/core";
const getHelpDescriptionClassNames = (position = 'right', hasArrow = false) => ({
    '_ath-help-description': true,
    [`_ath-help-description--${position}`]: !!position,
    '_ath-help-description--has-arrow': hasArrow,
});
export const FcHelpDescription = props => {
    return [
        h("div", { class: getHelpDescriptionClassNames(props.position, props.hasArrow), id: props.id }, h("div", { class: "content" }, h("div", { class: "text" }, props.text))),
    ];
};
//# sourceMappingURL=fc-help-description.js.map
