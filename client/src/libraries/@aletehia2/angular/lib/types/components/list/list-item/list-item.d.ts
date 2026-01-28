import { EventEmitter } from '../../../stencil-public-runtime';
import { ListLinkTargetType, ListOrientationType, ListSizeType } from '../list.model';
export declare class AthListItem {
    el: HTMLElement;
    /** List item title */
    headingText: string;
    /** Heading level for the title */
    headingLevel: number;
    /** List item subtitle */
    subtitle: string;
    /** List item description */
    description: string;
    /** List item tooltip */
    tooltip: string;
    /** Tooltip max-width */
    tooltipMaxWidth: number;
    /** List item divider. If user doesn't inform it, its informed from parent list */
    hasDivider: boolean;
    /** List item orientation. Its informed from parent list */
    orientation: ListOrientationType;
    /** List item size. Its informed from parent list */
    size: ListSizeType;
    /** List item state disabled, only works if clickable is true */
    disabled: boolean;
    /** ListItem is clickable */
    clickable: boolean;
    /** URL when clickable is true */
    href?: string;
    /** Type of target to url*/
    target: ListLinkTargetType;
    /** Type of rel to url*/
    rel: string;
    /** The aria-label attribute of the clicable item */
    athAriaLabel: string | null;
    /** Additional text to be appended to the aria-label to indicate that this is an external link */
    externalLabel?: string;
    hasLeftSlot: boolean;
    hasRightSlot: boolean;
    calculatedLabelledBy: string;
    calculatedDescribedBy: string;
    /** Emitted when listItem is clicked */
    athClick: EventEmitter<void>;
    private listItemId;
    private headingTextId;
    private subtitleId;
    private descriptionId;
    private rightDetailId;
    private externalLabelId;
    private handleClick;
    componentWillLoad(): void;
    componentWillRender(): void;
    private isSlotted;
    private markEmptySlot;
    private setLabelledby;
    private setDescribedBy;
    private getHostAttributes;
    private getHostClassNames;
    private getListItemClassNames;
    private renderItem;
    private getClickableAttributes;
    private renderItemClickable;
    render(): any;
}
