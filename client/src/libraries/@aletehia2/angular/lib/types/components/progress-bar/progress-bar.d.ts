import { ProgressBarLabelAlignmentType } from './progress-bar.model';
export declare class AthProgressBar {
    el: HTMLElement;
    /**
     * Infinite determines if the progress bar is a loop or not
     */
    infinite: boolean;
    /**
     * Text of the label left
     */
    labelLeft: string;
    /**
     * Text of the label right
     */
    labelRight: string;
    /**
     * Change label alignment
     */
    labelAlignment: ProgressBarLabelAlignmentType;
    /**
     * Number min of progress bar
     */
    min: number;
    /**
     * Number max of progress bar
     */
    max: number;
    /**
     * Value of the progress bar
     */
    value: number;
    /**
     * Value text of the progress bar
     */
    valueText: string;
    /**
     * Aria Label
     */
    athAriaLabel: string;
    /**
     * Calculate the percetage of value
     */
    private get valuePercentage();
    private uniqueId;
    private getHostAtributtes;
    private getClassNames;
    private getFillerClassNames;
    render(): any;
}
