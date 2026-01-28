import { SegmentedControlItemChangeSelect } from '../../segmented-control.model';
export type SegmentedControlItemArgs = {
    'disabled': boolean;
    'icon-position': string;
    'icon': string;
    'selected': boolean;
    'value': string;
    'defaultSlot': string;
    'athChange'?: (event: CustomEvent<SegmentedControlItemChangeSelect>) => void;
};
export declare const defaultArgs: Partial<SegmentedControlItemArgs>;
