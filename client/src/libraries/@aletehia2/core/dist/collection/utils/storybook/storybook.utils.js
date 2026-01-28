export function getAttributesFromArgs(args, optionsArgs = []) {
    let attributes = '';
    const options = Array.isArray(optionsArgs) ? { exclude: optionsArgs } : optionsArgs;
    const { exclude = [], boolean = [] } = options;
    for (const key in args) {
        if (args[key] !== undefined && !exclude.includes(key)) {
            let value = args[key];
            let attribute = '';
            if (boolean.includes(key)) {
                attribute = value ? `${key}` : '';
            }
            else {
                attribute = `${key}="${value}"`;
            }
            attributes += ` ${attribute}`;
        }
    }
    return attributes.trim();
}
export function orderObjectByAttributes(obj) {
    const keys = Object.keys(obj).sort();
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}
//# sourceMappingURL=storybook.utils.js.map
