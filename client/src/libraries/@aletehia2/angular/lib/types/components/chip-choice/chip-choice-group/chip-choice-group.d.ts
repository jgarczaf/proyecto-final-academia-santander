import { ComponentInterface, JSX, EventEmitter } from '../../../stencil-public-runtime';
import { ChipChoiceSizes } from '../chip-choice.model';
export declare class AthChipChoiceGroup implements ComponentInterface {
    el: HTMLAthChipChoiceGroupElement;
    internals: ElementInternals;
    /**
     * Weather the chips are disabled
     */
    disabled: boolean;
    /**
     * Allow multiple selection of chips
     */
    multiple: boolean;
    /**
     * The generic name for the chips
     */
    name: string;
    /**
     * The generic size of the chips
     */
    size: ChipChoiceSizes;
    /**
     * The width of the group
     */
    width: string;
    /**
     * The value for not multiple (use chip-choice-group as radio-group)
     */
    value: string;
    watchValueHandler(newValue: string): void;
    /**
     * Event to emit the current chips checked
     */
    athChangeValue: EventEmitter<HTMLAthChipChoiceElement[]>;
    handleChange(e: CustomEvent): void;
    handleMouseDown(e: KeyboardEvent): void;
    private chips;
    private selectedChip;
    private firstEnabledChip;
    private lastEnabledChip;
    private initialValue;
    componentDidLoad(): void;
    formResetCallback(): void;
    private loadChips;
    private setFocusFirstChip;
    private getChips;
    private propagateAttributes;
    private propagateAttribute;
    private getFirstEnabledChip;
    private getLastEnabledChip;
    private getFirstCheckedChip;
    private getChipIndex;
    private getHostStyles;
    private moveNextChip;
    private movePreviousChip;
    private selectFocusChip;
    private selectByValue;
    private unCheckAllChips;
    private emitCheckedChips;
    private setValue;
    private setInputValue;
    render(): JSX.Element;
}
