export declare const moveFocusToTab: (tabs: {
    id: string;
    disabled?: boolean;
}[], direction: number, activeTabId: string, toEnd?: boolean) => string | undefined;
export declare const focusTab: (tabId: string, el: HTMLElement) => void;
