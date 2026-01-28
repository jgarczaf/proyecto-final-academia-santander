import { ActionBarAlignment, ActionBarSize } from './action-bar.model';
export declare class AthActionBar {
    el: HTMLElement;
    /**
     * Indicates the alignment of the inner components
     */
    alignment: ActionBarAlignment;
    /**
     * Indicates the size of the inner components
     */
    size: ActionBarSize;
    componentDidLoad(): void;
    handlePropChange(): void;
    private injectToChildren;
    private getDividerHeightToken;
    private getClassNames;
    render(): any;
}
