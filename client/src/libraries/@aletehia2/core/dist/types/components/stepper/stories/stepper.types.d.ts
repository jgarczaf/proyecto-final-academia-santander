export type StepperArgs = {
    'clickable': boolean;
    'collapse-label': string;
    'completed-label': string;
    'aria-live-message': string;
    'ath-aria-label': string;
    'ath-role': string;
    'error-label': string;
    'expand-label': string;
    'heading-icon': string;
    'heading-text': string;
    'orientation': string;
    'readonly': boolean;
    'size': string;
    'start-from': number;
    'athSelect'?: (event: CustomEvent<void>) => void;
};
export declare const orderedArgs: StepperArgs;
