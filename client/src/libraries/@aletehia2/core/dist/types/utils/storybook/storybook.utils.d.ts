export type optionsAttributesArgs = string[] | {
    exclude?: string[];
    boolean?: string[];
};
export declare function getAttributesFromArgs(args: {
    [key: string]: unknown;
}, optionsArgs?: optionsAttributesArgs): string;
export declare function orderObjectByAttributes<T extends {
    [key: string]: unknown;
}>(obj: T): T;
