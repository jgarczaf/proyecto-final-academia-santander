import { ComponentInterface } from '../../stencil-public-runtime';
import { EmptyStateTypes, HeadingSizes } from './empty-state.model';
export declare class AthEmptyState implements ComponentInterface {
    /**
     * Indicates the type of empty state
     */
    type: EmptyStateTypes;
    /**
     * Indicates if the image will be hidden
     * Does not apply when type is 'loading'
     */
    hideImage: boolean;
    /**
     * Text to empty state heading
     */
    headingText: string;
    /**
     * Indicates the heading level for the empty state.
     */
    headingLevel: number;
    /**
     * Indicates the heading size for the heading text.
     */
    headingSize: HeadingSizes;
    /**
     * Text to empty state description.
     */
    description: string;
    /**
     * Accesibility label for loading state (only when type is 'loading')
     */
    loadingLabel: string;
    announcedLoadingText: string;
    private liveTimer?;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private scheduleLiveAnnounce;
    private clearLiveTimer;
    private getPictogramName;
    private transformHeadingSize;
    private getClassNames;
    render(): any;
}
