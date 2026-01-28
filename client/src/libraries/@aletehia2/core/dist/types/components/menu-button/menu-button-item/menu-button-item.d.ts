import { JSX, EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
export declare class AthMenuButtonItem implements ComponentInterface {
    el: HTMLElement | null;
    /**
     * name option
     */
    name: string;
    /**
     * Weather the button is disabled
     */
    disabled: boolean;
    /**
     * The name of the grout the item belongs to
     */
    groupName: string;
    /**
     * The icon of the menu-button-item
     */
    icon: string;
    /**
     * The text of the menu-button-item
     */
    text: string;
    itemTabIndex: number;
    /**
     * Emitted when the item is clicked and triggers an action
     */
    athSelected: EventEmitter<HTMLAthMenuButtonItemElement>;
    private handleClick;
    handleKeyDown(ev: KeyboardEvent): void;
    private getMenuButtonOptionLevelClassNames;
    render(): JSX.Element;
}
