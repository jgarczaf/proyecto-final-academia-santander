import { h } from './index-D2-yfY-d.js';

const accesibleCounterLabel = (accesibleLabel, value, maxlength) => {
    let label = accesibleLabel;
    label = label.replace(/\[length\]/g, String(value.length));
    label = label.replace(/\[max\]/g, String(maxlength));
    label = label.replace(/\[rest\]/g, String(maxlength - value.length));
    return label;
};
const FcInputCounter = props => {
    return [
        h("div", { class: "ath-input__counter", "aria-hidden": "true" }, !!props.value ? props.value.length : 0, props.maxlength && h("span", null, "/", props.maxlength)),
        h("div", { class: "ath-visibility-hidden", "aria-live": "polite" }, accesibleCounterLabel(props.accesibleLabel, (props.value = ''), props.maxlength)),
    ];
};

export { FcInputCounter as F };
//# sourceMappingURL=fc-counter-CNBQHE8G.js.map

//# sourceMappingURL=fc-counter-CNBQHE8G.js.map