import { ActionBarSize, ActionBarAlignment } from 'components';
export type ActionBarArgs = {
    'alignment': ActionBarAlignment;
    'aria-label': string;
    'aria-labelledby': string;
    'size': ActionBarSize;
    'defaultSlot': string;
};
export declare const ordererArgs: Partial<ActionBarArgs>;
