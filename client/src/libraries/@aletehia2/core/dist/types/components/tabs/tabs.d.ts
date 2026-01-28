import { TabItem, TabsType } from './tabs.model';
export declare class AthTabs {
    /**
     * Tipo de Tabs
     */
    type: TabsType;
    /**
     * Etiqueta accesible para la lista de tabs
     */
    listAriaLabel: string;
    /**
     * Lista de tabs a generar
     */
    items: TabItem[] | string;
    selectedTabId: string;
    activeTabId: string;
    showLeftArrow: boolean;
    showRightArrow: boolean;
    el: HTMLElement;
    private hostId;
    private tabs;
    private panelElements;
    private firstEnabledTabId;
    private lastEnabledTabId;
    private tabGroup;
    private resizeObserver;
    onItemsChange(newValue: TabItem[] | string, oldValue: TabItem[] | string): void;
    componentWillLoad(): void;
    private generateTabs;
    private getTabs;
    private parseItems;
    private getTabElements;
    componentDidLoad(): void;
    private setPanelAtributes;
    private detectFirstAndLastEnabledTab;
    private detectSelectedTab;
    private showSelectedPanel;
    disconnectedCallback(): void;
    private handleTabClick;
    private handleKeyUp;
    private scrollTabs;
    private updateArrowsVisibility;
    private checkNumberOfPanels;
    private getHostClassNames;
    private getTabItemClassNames;
    private getTabListClassNames;
    render(): any;
}
