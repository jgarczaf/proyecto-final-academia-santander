import { Host, h } from "@stencil/core";
import { EmptyStateType, HeadingSize } from "./empty-state.model";
import { FcPictogram } from "../../sharedfc/input/index";
export class AthEmptyState {
    /**
     * Indicates the type of empty state
     */
    type = EmptyStateType.Empty;
    /**
     * Indicates if the image will be hidden
     * Does not apply when type is 'loading'
     */
    hideImage = false;
    /**
     * Text to empty state heading
     */
    headingText;
    /**
     * Indicates the heading level for the empty state.
     */
    headingLevel = 4;
    /**
     * Indicates the heading size for the heading text.
     */
    headingSize = HeadingSize.Sm;
    /**
     * Text to empty state description.
     */
    description;
    /**
     * Accesibility label for loading state (only when type is 'loading')
     */
    loadingLabel;
    announcedLoadingText = '';
    liveTimer;
    componentDidLoad() {
        if (this.type === EmptyStateType.Loading) {
            this.scheduleLiveAnnounce();
        }
    }
    disconnectedCallback() {
        this.clearLiveTimer();
    }
    scheduleLiveAnnounce() {
        this.clearLiveTimer();
        this.liveTimer = window.setTimeout(() => {
            this.announcedLoadingText = this.loadingLabel || 'Cargando…';
        }, 150);
    }
    clearLiveTimer() {
        if (this.liveTimer) {
            clearTimeout(this.liveTimer);
            this.liveTimer = undefined;
        }
    }
    getPictogramName() {
        switch (this.type) {
            case EmptyStateType.Empty:
                return 'illu_empty';
            case EmptyStateType.SearchNoResults:
                return 'illu_search';
            case EmptyStateType.Error:
                return 'illu_error_connection';
            default:
                return this.type;
        }
    }
    transformHeadingSize() {
        const transform = {
            sm: '4',
            md: '3',
            lg: '2',
        };
        return transform[this.headingSize] || transform.sm;
    }
    getClassNames = () => ({
        'ath-empty-state': true,
        'ath-empty-state--hide-image': this.hideImage && this.type !== EmptyStateType.Loading,
    });
    render() {
        const HeadingTag = `h${this.headingLevel}`;
        const headingSizeClass = this.transformHeadingSize();
        if (this.type === EmptyStateType.Loading) {
            return (h(Host, null, h("div", { class: "ath-empty-state--loading", role: "status" }, h("div", { class: "sr-only" }, this.announcedLoadingText), h("img", { class: "ath-empty-state--loading-gif", src: "./assets/images/loading.gif", alt: "" }))));
        }
        return (h(Host, null, h("div", { class: this.getClassNames() }, !this.hideImage && (h("div", { class: `ath-empty-state--image ${this.type}` }, h(FcPictogram, { name: this.getPictogramName() }))), h("div", { class: "ath-empty-state-info" }, this.headingText && h(HeadingTag, { class: `ath-h${headingSizeClass} heading` }, this.headingText), this.description && h("p", { class: "description" }, this.description), h("slot", { name: "body" })), h("slot", { name: "footer" }))));
    }
    static get is() { return "ath-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["empty-state.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["empty-state.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "EmptyStateTypes",
                    "resolved": "\"empty\" | \"error\" | \"loading\" | \"search-no-results\"",
                    "references": {
                        "EmptyStateTypes": {
                            "location": "import",
                            "path": "./empty-state.model",
                            "id": "src/components/empty-state/empty-state.model.ts::EmptyStateTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the type of empty state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "EmptyStateType.Empty"
            },
            "hideImage": {
                "type": "boolean",
                "attribute": "hide-image",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates if the image will be hidden\r\nDoes not apply when type is 'loading'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "headingText": {
                "type": "string",
                "attribute": "heading-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to empty state heading"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "headingLevel": {
                "type": "number",
                "attribute": "heading-level",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the heading level for the empty state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "4"
            },
            "headingSize": {
                "type": "string",
                "attribute": "heading-size",
                "mutable": false,
                "complexType": {
                    "original": "HeadingSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "HeadingSizes": {
                            "location": "import",
                            "path": "./empty-state.model",
                            "id": "src/components/empty-state/empty-state.model.ts::HeadingSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the heading size for the heading text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "HeadingSize.Sm"
            },
            "description": {
                "type": "string",
                "attribute": "description",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to empty state description."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "loadingLabel": {
                "type": "string",
                "attribute": "loading-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accesibility label for loading state (only when type is 'loading')"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "announcedLoadingText": {}
        };
    }
}
//# sourceMappingURL=empty-state.js.map
