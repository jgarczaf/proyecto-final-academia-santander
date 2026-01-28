import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-D-i5s4zr.js';

const collapseCss = ":host .ath-collapse{transition:height 0.5s;color:var(--ath-color-fg-default)}:host .ath-collapse--overflow-hidden{overflow:hidden}";

const AthCollapse = /*@__PURE__*/ proxyCustomElement(class AthCollapse extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.athCollapseState = createEvent(this, "athCollapseState");
    }
    timeoutHideContent;
    timeoutChangeOverflow;
    animationtime = 500;
    get el() { return this; }
    /**
     * If the component is expanded by default
     */
    show = false;
    isExpanded;
    collapseHeight;
    overflowHidden = true;
    /**
     * Event to emit if the component is expanded or collapsed.
     */
    athCollapseState;
    handleCollapse(event) {
        const targetId = event.detail;
        if (!targetId || targetId !== this.el?.id)
            return;
        this.isExpanded = !this.isExpanded;
        this.athCollapseState.emit({ id: this.el.id, isExpanded: this.isExpanded });
        clearTimeout(this.timeoutHideContent);
        clearTimeout(this.timeoutChangeOverflow);
        if (this.isExpanded) {
            this.show = true;
            this.timeoutChangeOverflow = setTimeout(() => {
                this.overflowHidden = false;
            }, this.animationtime);
        }
        else {
            this.timeoutHideContent = setTimeout(() => (this.show = false), this.animationtime);
            this.overflowHidden = true;
        }
    }
    handleResize() {
        this.getCollapseHeight();
    }
    async handleExpanded() {
        await this.getCollapseHeight();
    }
    getClassNames = () => ({
        'ath-collapse': true,
        'ath-collapse--expanded': this.isExpanded,
        'ath-collapse--collapsed': !this.isExpanded,
        'ath-collapse--overflow-hidden': this.overflowHidden,
    });
    getCollapseHeight = async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        await new Promise(resolve => requestAnimationFrame(resolve));
        const collapseElement = this.el.shadowRoot?.querySelector('.ath-collapse');
        if (collapseElement && this.isExpanded) {
            const prevHeight = collapseElement.style.height;
            collapseElement.style.height = 'auto';
            const newHeight = collapseElement.scrollHeight;
            collapseElement.style.height = prevHeight;
            await new Promise(resolve => requestAnimationFrame(resolve));
            this.collapseHeight = `${newHeight}px`;
        }
        else {
            this.collapseHeight = '0px';
        }
    };
    componentWillLoad() {
        this.isExpanded = this.show;
        this.athCollapseState.emit({ id: this.el?.id, isExpanded: this.isExpanded });
    }
    componentDidLoad() {
        this.getCollapseHeight();
    }
    disconnectedCallback() {
        clearTimeout(this.timeoutHideContent);
        clearTimeout(this.timeoutChangeOverflow);
    }
    render() {
        return (h(Host, { key: '08bc17e50c5fb6c7256b0d1b331b8231cb0bbde1' }, h("div", { key: 'bd4ac59b2eca99f5512b8e73d2d7d5b34b5c9476' }, h("div", { key: 'f469338b9dbd4f4cb489fec4450929194e574639', class: this.getClassNames(), style: { height: this.collapseHeight } }, this.show && h("slot", { key: '80f958764334f5d4cd4ad6d71ef813cae861008b' })))));
    }
    static get watchers() { return {
        "isExpanded": ["handleExpanded"]
    }; }
    static get style() { return collapseCss; }
}, [257, "ath-collapse", {
        "show": [1540],
        "isExpanded": [32],
        "collapseHeight": [32],
        "overflowHidden": [32]
    }, [[8, "athToggleCollapse", "handleCollapse"], [9, "resize", "handleResize"]], {
        "isExpanded": ["handleExpanded"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ath-collapse"];
    components.forEach(tagName => { switch (tagName) {
        case "ath-collapse":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AthCollapse);
            }
            break;
    } });
}

export { AthCollapse as A, defineCustomElement as d };
//# sourceMappingURL=p-DHqkcaR2.js.map

//# sourceMappingURL=p-DHqkcaR2.js.map