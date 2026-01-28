import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { HeadingSizes, SectionTitleColorType, SectionTitleOptionType } from './section-title.model';
export declare class AthSectionTitle implements ComponentInterface {
    private tooltipId;
    el: HTMLElement;
    /**
     * Option assigned to the decorative element.
     **/
    type: SectionTitleOptionType;
    /**
     * Color assigned to the decorative element and the 'overline' text.
     **/
    color: SectionTitleColorType;
    /**
     * The code of the Section Title's icon (used with type Icon)
     */
    icon: string;
    /**
     * The code of the Section Title's pictogram (used with type Pictogram)
     */
    pictogram: string;
    /**
     * Section title.
     **/
    headingText: string;
    /**
     * Indicates the heading size for the heading text.
     */
    headingSize: HeadingSizes;
    /**
     * Heading level assigned to the title. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>.
     **/
    headingLevel: number;
    /**
     * Text above the title, usually used to categorize the content.
     **/
    overline: string;
    /**
     * Heading level assigned to the overline. If 0, a <p> tag is assigned. Values between 1 and 6 correspond to <h1> ... <h6>.
     **/
    headingOverline: number;
    /**
     * 'The 'Section title' can become a button that shows or hides the content of the 'Collapse' component.
     **/
    collapsable: boolean;
    /**
     * Identifier of the 'Collapse' component whose visibility is controlled by this 'Section title'.
     **/
    collapseTarget: string;
    /**
     * Tooltip text to be included.
     **/
    tooltip: string;
    /**
     * Tooltip aria-label.
     **/
    tooltipLabel: string;
    isExpanded: boolean;
    /**
     * Emitted when the 'Collapse' component collapses or expands.
     */
    athToggleCollapse: EventEmitter<string>;
    handleCollapseStateChange(event: CustomEvent<{
        id: string;
        isExpanded: boolean;
    }>): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private handleCollapse;
    private getHostClassNames;
    private getClassNames;
    private getChevronClasses;
    private getCollapsableAttr;
    private getAttributes;
    render(): any;
}
