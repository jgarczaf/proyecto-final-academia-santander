import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { ButtonExpandableSizesType } from './button-expandable.model';
export declare class AthButtonExpandable implements ComponentInterface {
    el: HTMLElement | null;
    /**
     * The size of the buton
     */
    size: ButtonExpandableSizesType;
    /**
     * The code of the button's icon (used with iconPosition)
     */
    icon: string;
    /**
     * The button is disabled
     */
    disabled: boolean;
    isExpanded: boolean;
    athToggleCollapse: EventEmitter<string>;
    collapseTarget: string;
    setFocus(): Promise<void>;
    handleCollapseStateChange(event: CustomEvent<{
        id: string;
        isExpanded: boolean;
    }>): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private handleCollapse;
    private getHostClassNames;
    private getSpanClassNames;
    private getChevronClasses;
    private getAttributes;
    private renderIcon;
    render(): any;
}
