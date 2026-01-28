function attrBoolean(value, validFalse = true) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (value || validFalse) {
        return value.toString();
    }
    return undefined;
}
function attrNumber(value) {
    if (value !== undefined && value !== null) {
        return value.toString();
    }
    return undefined;
}
function attrString(value, validEmpty = false) {
    if (value?.length > 0) {
        return value;
    }
    if (validEmpty && String(value).trim().length === 0) {
        return '';
    }
    return undefined;
}

const InputTextTypes = {
    Text: 'text',
    Email: 'email',
    Search: 'search',
    Url: 'url',
    Tel: 'tel',
};
const InputSizes = {
    Medium: 'md'};
const InputIconPositions = {
    Left: 'left'};
const InputFeedbackTypes = {
    Error: 'error',
    None: 'none',
};

export { InputTextTypes as I, InputFeedbackTypes as a, InputIconPositions as b, InputSizes as c, attrBoolean as d, attrString as e, attrNumber as f };
//# sourceMappingURL=p-BV9c4BOf.js.map

//# sourceMappingURL=p-BV9c4BOf.js.map