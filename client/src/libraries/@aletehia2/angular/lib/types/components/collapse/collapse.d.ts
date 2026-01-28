import { EventEmitter } from '../../stencil-public-runtime';
export declare class AthCollapse {
    private timeoutHideContent;
    private timeoutChangeOverflow;
    private animationtime;
    el: HTMLElement;
    /**
     * If the component is expanded by default
     */
    show: boolean;
    isExpanded: boolean;
    collapseHeight: string;
    overflowHidden: boolean;
    /**
     * Event to emit if the component is expanded or collapsed.
     */
    athCollapseState: EventEmitter<{
        id: string;
        isExpanded: boolean;
    }>;
    handleCollapse(event: CustomEvent<string>): void;
    handleResize(): void;
    handleExpanded(): Promise<void>;
    private getClassNames;
    private getCollapseHeight;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
