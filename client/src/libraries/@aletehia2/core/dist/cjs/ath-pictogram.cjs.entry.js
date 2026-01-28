'use strict';

var index = require('./index--hWT2F8k.js');

const PictogramSizeType = {
    Medium: 'md'};

const pictogramCss = ":host{display:inline-flex;height:fit-content;width:fit-content}:host .ath-pictogram--xs img{width:var(--ath-size-pictogram-xs);height:auto}:host .ath-pictogram--sm img{width:var(--ath-size-pictogram-sm);height:auto}:host .ath-pictogram--md img{width:var(--ath-size-pictogram-md);height:auto}:host .ath-pictogram--lg img{width:var(--ath-size-pictogram-lg);height:auto}:host .ath-pictogram--xl img{width:var(--ath-size-pictogram-xl);height:auto}:host .ath-pictogram--2xl img{width:var(--ath-size-pictogram-2xl);height:auto}";

const AthPictogram = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    theme;
    get el() { return index.getElement(this); }
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
        const assetsPath = index.getAssetPath(`assets/images/pictograms/${this.theme}`);
        console.log('assetsPath', assetsPath);
        return (index.h(index.Host, { key: '349d890869ea5b7b5f9b6a87adfb92be9dae3b42', ...this.getHostAttributes() }, index.h("div", { key: '37735e58245e09e9b6d1e6febeca517903032816', class: this.classNames() }, index.h("img", { key: '9b50d55e45de59c7fcb0062187f106aa0a8acf9b', src: `${assetsPath}/${this.name}.svg`, alt: "" }))));
    }
};
AthPictogram.style = pictogramCss;

exports.ath_pictogram = AthPictogram;
//# sourceMappingURL=ath-pictogram.entry.cjs.js.map
