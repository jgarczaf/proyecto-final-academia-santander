import { Host, h } from "@stencil/core";
export class AthCollapse {
    timeoutHideContent;
    timeoutChangeOverflow;
    animationtime = 500;
    el;
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
    static get is() { return "ath-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["collapse.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["collapse.css"]
        };
    }
    static get properties() {
        return {
            "show": {
                "type": "boolean",
                "attribute": "show",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If the component is expanded by default"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {},
            "collapseHeight": {},
            "overflowHidden": {}
        };
    }
    static get events() {
        return [{
                "method": "athCollapseState",
                "name": "athCollapseState",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event to emit if the component is expanded or collapsed."
                },
                "complexType": {
                    "original": "{ id: string; isExpanded: boolean }",
                    "resolved": "{ id: string; isExpanded: boolean; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isExpanded",
                "methodName": "handleExpanded"
            }];
    }
    static get listeners() {
        return [{
                "name": "athToggleCollapse",
                "method": "handleCollapse",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "resize",
                "method": "handleResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=collapse.js.map
