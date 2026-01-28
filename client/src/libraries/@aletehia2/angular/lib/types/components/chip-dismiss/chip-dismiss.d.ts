import { ComponentInterface, EventEmitter, JSX } from '../../stencil-public-runtime';
import { ChipDismissSizes } from './chip-dismiss.model';
export declare class AthChipDismiss implements ComponentInterface {
    el: HTMLElement | null;
    /**
     * The button is disabled
     */
    disabled: boolean;
    /**
     * The icon to the left
     */
    icon: string;
    /**
     * The text in the chip
     */
    headingText: string;
    /**
     * The accesible label-dismiss attribute in chip dismiss
     */
    labelDismiss: string;
    /**
     * The size of the chip dismiss
     */
    size: ChipDismissSizes;
    /**
     * Emitted when the x icon is clicked
     */
    athDismiss: EventEmitter<void>;
    private handleDismiss;
    private getSpanClassNames;
    private renderIcon;
    render(): JSX.Element;
}
