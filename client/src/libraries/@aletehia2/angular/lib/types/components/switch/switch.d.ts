import { EventEmitter } from '../../stencil-public-runtime';
import { SwitchChangeDetail } from './switch.model';
export declare class AthSwitch {
    /**
     * Determines if the switch is disabled and cannot be interacted with
     * @default false
     */
    disabled: boolean;
    /**
     * Controls the selected/unselected state of the switch
     * @default false
     */
    selected: boolean;
    /**
     * Makes the switch read-only, preventing user interaction while still being focusable
     * @default false
     */
    readonly: boolean;
    /**
     * Name to identify the switch
     */
    name: string;
    /**
     * Event emitted when the switch receives focus
     */
    athFocus: EventEmitter<void>;
    /**
     * Event emitted when the switch loses focus
     */
    athBlur: EventEmitter<void>;
    /**
     * Event emitted when the switch state changes
     */
    athChange: EventEmitter<SwitchChangeDetail>;
    el: HTMLElement;
    private get isReadonly();
    private getClassNames;
    private getSwitchControllerClassNames;
    setFocus(): Promise<void>;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private handleKeyDown;
    private changeStatus;
    private getSwitchIcon;
    private getHostAttributes;
    render(): any;
}
