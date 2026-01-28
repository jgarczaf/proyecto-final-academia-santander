export type StepArgs = {
    'action-text': string;
    'disabled': boolean;
    'feedback': string;
    'heading-text': string;
    'is-collapsable': boolean;
    'is-complete': boolean;
    'is-expanded': boolean;
    'readonly': boolean;
    'selected': boolean;
    'number': number;
    'athClick'?: (event: CustomEvent<void>) => void;
    'defaultSlot': string;
};
export declare const ordererArgs: StepArgs;
