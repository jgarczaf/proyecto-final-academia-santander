'use strict';

const IconSize = {
    Medium: 'md',
    Small: 'sm',
    Extrasmall: 'xs',
};
exports.Icons = void 0;
(function (Icons) {
    Icons["Add"] = "add";
    Icons["InputClearValue"] = "close";
    Icons["DropDown"] = "chevron-down";
    Icons["Minimize"] = "minimize";
    Icons["PasswordHide"] = "eye-close";
    Icons["PasswordView"] = "eye";
    Icons["Search"] = "search";
    Icons["Info"] = "info";
})(exports.Icons || (exports.Icons = {}));
exports.IconType = void 0;
(function (IconType) {
    IconType["Button"] = "button";
    IconType["ButtonComp"] = "buttonComp";
    IconType["ButtonExpandable"] = "buttonExpandable";
    IconType["ButtonLink"] = "buttonLink";
    IconType["ButtonIconOnly"] = "iconOnly";
    IconType["Link"] = "link";
    IconType["Feedback"] = "feedback";
    IconType["Input"] = "input";
    IconType["Label"] = "label";
    IconType["Message"] = "message";
    IconType["Combobox"] = "combobox";
    IconType["Chipchoice"] = "chipchoice";
    IconType["SegmentedControlItem"] = "segmentedControlItem";
    IconType["SegmentedControlItemIconOnly"] = "segmentedControlItemIconOnly";
})(exports.IconType || (exports.IconType = {}));
function transformIconSize(type, size) {
    const map = {
        link: { sm: 'xs', md: 'sm', lg: 'sm' },
        button: { xs: 'xs', sm: 'sm', md: 'sm', lg: 'sm' },
        buttonComp: { xs: 'xs', sm: 'md', md: 'lg' },
        buttonExpandable: { sm: 'xs', md: 'sm', lg: 'sm' },
        buttonLink: { sm: 'xs', md: 'sm', lg: 'sm' },
        iconOnly: { xs: 'xs', sm: 'sm', md: 'md', lg: 'md' },
        feedback: { sm: 'sm', md: 'md', lg: 'lg' },
        input: { sm: 'xs', md: 'xs', lg: 'sm' },
        label: { sm: 'xs', md: 'xs', lg: 'sm' },
        message: { sm: 'xs', md: 'xs', lg: 'md' },
        combobox: { sm: 'xs', md: 'xs', lg: 'md' },
        chipchoice: { sm: 'xs', md: 'sm' },
        segmentedControlItem: { sm: 'xs', md: 'sm', lg: 'sm', xl: 'sm' },
        segmentedControlItemIconOnly: { sm: 'xs', md: 'sm', lg: 'md', xl: 'md' },
    };
    return map[type][size];
}

exports.IconSize = IconSize;
exports.transformIconSize = transformIconSize;
//# sourceMappingURL=icons-DfQaoUal.js.map

//# sourceMappingURL=icons-DfQaoUal.js.map