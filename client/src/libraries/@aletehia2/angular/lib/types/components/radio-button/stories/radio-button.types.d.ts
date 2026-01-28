import { RadioButtonChangeDetail } from '../radio-button.model';
export type RadioButtonArgs = {
    'aria-label': string;
    'checked': boolean;
    'disabled': boolean;
    'label': string;
    'name': string;
    'readonly': boolean;
    'value': string;
    'athFocus'?: (event: CustomEvent<void>) => void;
    'athBlur'?: (event: CustomEvent<void>) => void;
    'athChange'?: (event: CustomEvent<RadioButtonChangeDetail>) => void;
};
export declare const ordererArgs: Partial<RadioButtonArgs>;
