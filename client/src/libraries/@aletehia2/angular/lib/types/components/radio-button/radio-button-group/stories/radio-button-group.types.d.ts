import { RadioButtonChangeDetail } from '../../radio-button.model';
export type RadioButtonGroupArgs = {
    'aria-label': string;
    'disabled': boolean;
    'feedback': string;
    'feedback-text': string;
    'helper-text': string;
    'label': string;
    'name': string;
    'orientation': string;
    'readonly': boolean;
    'required-aria-label': string;
    'show-required': boolean;
    'tooltip-text': string;
    'tooltip-width': number;
    'athChangeValue'?: (event: CustomEvent<RadioButtonChangeDetail>) => void;
};
export declare const ordererArgs: Partial<RadioButtonGroupArgs>;
