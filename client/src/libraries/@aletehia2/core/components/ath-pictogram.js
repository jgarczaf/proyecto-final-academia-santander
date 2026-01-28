import { p as proxyCustomElement, H, g as getAssetPath, h, c as Host } from './p-D-i5s4zr.js';

const PictogramSizeType = {
    Medium: 'md'};

const pictogramCss = ":host{display:inline-flex;height:fit-content;width:fit-content}:host .ath-pictogram--xs img{width:var(--ath-size-pictogram-xs);height:auto}:host .ath-pictogram--sm img{width:var(--ath-size-pictogram-sm);height:auto}:host .ath-pictogram--md img{width:var(--ath-size-pictogram-md);height:auto}:host .ath-pictogram--lg img{width:var(--ath-size-pictogram-lg);height:auto}:host .ath-pictogram--xl img{width:var(--ath-size-pictogram-xl);height:auto}:host .ath-pictogram--2xl img{width:var(--ath-size-pictogram-2xl);height:auto}";

const AthPictogram$1 = /*@__PURE__*/ proxyCustomElement(class AthPictogram extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    theme;
    get el() { return this; }
    /**
     * The pictogram name
     */
    name;
    /**
     * The size of the pictogram
     */
    size = PictogramSizeType.Medium;
    /**
     * The aria-label attribute of the pictogram
     */
    ariaLabel;
    /**
     * The aria-labelledby attribute of the pictogram
     */
    ariaLabelledby;
    componentWillLoad() {
        this.theme = document.body.dataset.theme || 'core';
    }
    hasAriaLabel() {
        return !!this.ariaLabel?.trim();
    }
    hasAriaLabelledBy() {
        return !this.hasAriaLabel() && !!this.ariaLabelledby?.trim();
    }
    getHostAttributes() {
        const hasLabel = this.hasAriaLabel() || this.hasAriaLabelledBy();
        return {
            'aria-hidden': !hasLabel ? 'true' : undefined,
            'aria-label': this.hasAriaLabel() ? this.ariaLabel.trim() : undefined,
            'aria-labelledby': this.hasAriaLabelledBy() ? this.ariaLabelledby.trim() : undefined,
            'role': hasLabel ? 'img' : undefined,
        };
    }
    classNames = () => ({
        'ath-pictogram': true,
        [`ath-pictogram--${this.size}`]: !!this.size,
    });
    render() {
        const assetsPath = getAssetPath(`assets/images/pictograms/${this.theme}`);
        console.log('assetsPath', assetsPath);
        return (h(Host, { key: '349d890869ea5b7b5f9b6a87adfb92be9dae3b42', ...this.getHostAttributes() }, h("div", { key: '37735e58245e09e9b6d1e6febeca517903032816', class: this.classNames() }, h("img", { key: '9b50d55e45de59c7fcb0062187f106aa0a8acf9b', src: `${assetsPath}/${this.name}.svg`, alt: "" }))));
    }
    static get style() { return pictogramCss; }
}, [257, "ath-pictogram", {
        "name": [1],
        "size": [513],
        "ariaLabel": [1, "aria-label"],
        "ariaLabelledby": [1, "aria-labelledby"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-pictogram"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-pictogram":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthPictogram$1);
            }
            break;
    } });
}

const AthPictogram = AthPictogram$1;
const defineCustomElement = defineCustomElement$1;

export { AthPictogram, defineCustomElement };
//# sourceMappingURL=ath-pictogram.js.map

//# sourceMappingURL=ath-pictogram.js.map