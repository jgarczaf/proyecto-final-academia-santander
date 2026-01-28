import { h } from "@stencil/core";
import { formatDateToAriaLabel } from "../../../utils/date-utils";
const getContainerClasses = props => ({
    'ath-datepicker-item': true,
    [`is-selected`]: props.isSelected ?? false,
    [`is-start`]: props.isStart ?? false,
    [`is-middle`]: (!props.isStart && !props.isEnd && props.isMiddle) ?? false,
    [`is-end`]: props.isEnd ?? false,
    [`is-day`]: props.type === 'day',
    [`is-month`]: props.type === 'month',
    [`is-year`]: props.type === 'year',
    [`is-current`]: props.isCurrent ?? false,
    [`is-accent`]: props.color ? props.color === 'accent' : false,
});
const getItemClasses = props => ({
    'ath-datepicker-item-content': true,
    [`is-other-month`]: props.isOtherMonth ?? false,
    [`is-selected`]: (props.isSelected || props.isStart || props.isEnd) ?? false,
    [`is-current`]: props.isCurrent ?? false,
    [`is-disabled`]: props.isDisabled ?? false,
    [`is-highlighted`]: (props.isHighlighted && !props.isMiddle) ?? false,
    [`is-accent`]: props.color ? props.color === 'accent' : false,
});
export const FcDatepickerItem = props => {
    function handleClick(e) {
        if (props.isDisabled) {
            e.stopPropagation();
            return;
        }
        props.onSelect(e, props.value);
    }
    function getAriaLabel() {
        let aria = formatDateToAriaLabel(props.value, props.type);
        if (props.isDisabled) {
            aria += '. Use control + flechas para desplazarse al siguiente día disponible.';
        }
        return aria;
    }
    return (h("td", { ref: el => props.onDatepickerItemRef(el), class: getContainerClasses(props), tabIndex: props.isFocusable ? 0 : -1, onClick: handleClick, onKeyDown: props.onKeyDown, "aria-label": getAriaLabel(), "aria-selected": props.isSelected || props.isStart || props.isEnd ? 'true' : 'false', "aria-current": props.isCurrent ? 'date' : undefined, "aria-disabled": props.isDisabled ? 'true' : 'false' }, h("span", { class: getItemClasses(props) }, props.text)));
};
//# sourceMappingURL=fc-datepicker-item.js.map
