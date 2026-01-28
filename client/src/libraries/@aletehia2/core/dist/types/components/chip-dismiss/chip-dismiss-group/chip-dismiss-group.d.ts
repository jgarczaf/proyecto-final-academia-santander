import { ComponentInterface, JSX } from '../../../stencil-public-runtime';
import { ChipDismissSizes } from '../chip-dismiss.model';
export declare class AthChipDismissGroup implements ComponentInterface {
    /**
     * Weather the chips are disabled
     */
    disabled: boolean;
    /**
     * The generic size of the chips
     */
    size: ChipDismissSizes;
    /**
     * The width of the group
     */
    width: string;
    handleChipDismiss(event: CustomEvent): void;
    host: HTMLElement;
    componentDidLoad(): void;
    setChipsDisabled(): void;
    setChipsSize(): void;
    render(): JSX.Element;
}
