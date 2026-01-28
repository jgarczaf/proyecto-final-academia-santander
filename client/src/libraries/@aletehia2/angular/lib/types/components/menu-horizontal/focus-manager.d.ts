export declare const moveFocusToItem: (items: {
    id: string;
    disabled?: boolean;
}[], direction: number, activeItemId: string, toEnd?: boolean) => string | undefined;
export declare const focusItem: (itemId: string, el: HTMLElement) => void;
