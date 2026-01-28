import { h } from "@stencil/core";
export const FcPageButton = props => {
    const getPageButtonClass = () => {
        return {
            'ath-pagination-page-button': true,
            ...(props.selected && { 'ath-pagination-page-button--selected': true }),
            ...(props.disabled && { 'ath-pagination-page-button--disabled': true }),
        };
    };
    const handleClick = () => {
        if (!props.disabled && props.onClick) {
            props.onClick();
        }
    };
    return (h("button", { ref: props.pageButtonRef, class: { ...getPageButtonClass() }, onClick: handleClick, "aria-label": `Página ${props.pageNumber}`, disabled: props.disabled, "aria-disabled": props.disabled ? 'true' : 'false', "aria-current": props.selected ? 'page' : undefined }, h("span", { class: "ath-pagination-page-button-number" }, props.pageNumber)));
};
//# sourceMappingURL=fc-page-button.js.map
