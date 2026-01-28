import { ListOrientationType, ListSizeType } from './list.model';
export declare class AthList {
    el: HTMLElement;
    /** List spacings size*/
    size: ListSizeType;
    /** Define the list orientation*/
    orientation: ListOrientationType;
    /** Define if the list contains dividers between items*/
    hasDivider: boolean;
    /** List state disabled, only works if clickable is true */
    disabled: boolean;
    /** List is clickable */
    clickable: boolean;
    slottedItems: HTMLAthListItemElement[];
    private getHostAttributes;
    private getListClassNames;
    componentWillLoad(): void;
    render(): any;
}
