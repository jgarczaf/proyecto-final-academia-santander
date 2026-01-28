export type TextArgs = {
    'content': string;
    'lines': number;
    'withTooltip': boolean;
    'columns': {
        'numColumns': number;
        'spacing': string;
    };
    'hierarchy': 'p' | 'h1' | 'h2' | 'h3';
    'color': string;
};
export declare const orderedArgs: Partial<TextArgs>;
