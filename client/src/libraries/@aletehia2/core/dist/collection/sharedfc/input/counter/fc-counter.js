import { h } from "@stencil/core";
const accesibleCounterLabel = (accesibleLabel, value, maxlength) => {
    let label = accesibleLabel;
    label = label.replace(/\[length\]/g, String(value.length));
    label = label.replace(/\[max\]/g, String(maxlength));
    label = label.replace(/\[rest\]/g, String(maxlength - value.length));
    return label;
};
export const FcInputCounter = props => {
    return [
        h("div", { class: "ath-input__counter", "aria-hidden": "true" }, !!props.value ? props.value.length : 0, props.maxlength && h("span", null, "/", props.maxlength)),
        h("div", { class: "ath-visibility-hidden", "aria-live": "polite" }, accesibleCounterLabel(props.accesibleLabel, (props.value = ''), props.maxlength)),
    ];
};
//# sourceMappingURL=fc-counter.js.map
