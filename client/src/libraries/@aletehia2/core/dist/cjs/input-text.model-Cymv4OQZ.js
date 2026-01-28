'use strict';

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

exports.InputFeedbackTypes = InputFeedbackTypes;
exports.InputIconPositions = InputIconPositions;
exports.InputSizes = InputSizes;
exports.InputTextTypes = InputTextTypes;
exports.attrBoolean = attrBoolean;
exports.attrNumber = attrNumber;
exports.attrString = attrString;
//# sourceMappingURL=input-text.model-Cymv4OQZ.js.map

//# sourceMappingURL=input-text.model-Cymv4OQZ.js.map