export function isDefined(value) {
    return value !== undefined;
}
export function attrBoolean(value, validFalse = true) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (value || validFalse) {
        return value.toString();
    }
    return undefined;
}
export function attrNumber(value) {
    if (value !== undefined && value !== null) {
        return value.toString();
    }
    return undefined;
}
export function attrString(value, validEmpty = false) {
    if (value?.length > 0) {
        return value;
    }
    if (validEmpty && String(value).trim().length === 0) {
        return '';
    }
    return undefined;
}
//# sourceMappingURL=attributes.js.map
