import { JSX, ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { ModalAppearanceType, ModalSizeType } from './modal.model';
export declare class AthModal implements ComponentInterface {
    el: HTMLElement;
    /**
     * Indicates the illustration used when the prop isAlert is set to true
     */
    appearance: ModalAppearanceType;
    /**
     * Indicates whether the modal should automatically focus the first interactive element
     */
    autofocus: boolean;
    /**
     * Indicates whether the modal should close when clicking outside
     */
    clickOutsideClose: boolean;
    /**
     * Indicates whether the modal will occupy the full screen
     */
    fullScreen: boolean;
    /**
     * Indicates whether the modal has a close (X) button
     */
    hasClose: boolean;
    /**
     * Indicates whether there is a divider between the header and the slots
     */
    hasDivider: boolean;
    /**
     * Indicates the heading level of the title
     */
    headingLevel: number;
    /**
     * Indicates the title text
     */
    headingText: string;
    /**
     * Indicates whether the modal has role "Alert", and interrupts the screen reader flow
     */
    isAlert: boolean;
    /**
     * Indicates the maximum height of the modal
     */
    maxHeight: string;
    /**
     * Indicates the maximum width of the modal
     */
    maxWidth: string;
    /**
     * Indicates whether the modal is displayed by default
     */
    open: boolean;
    /**
     * Differentiates the modal size between sm and md
     */
    size: ModalSizeType;
    /**
     * Indicates the subtitle text
     */
    subtitleText: string;
    /**
     * Accessible text for the close (X) button
     */
    closeAriaLabel: string;
    /**
     * Emitted when the modal is opened
     */
    athOpened: EventEmitter<void>;
    /**
     * Emitted when the modal is closed
     */
    athClosed: EventEmitter<void>;
    /**
     * Method to open the modal
     */
    openModal(): Promise<void>;
    /**
     * Method to close the modal
     */
    closeModal(): Promise<void>;
    private previouslyFocusedElement;
    private focusableElements;
    handleKeyDown(e: KeyboardEvent): void;
    private findFocusableElements;
    private focusFirstElement;
    private blurOuterElement;
    componentDidLoad(): void;
    private trapFocus;
    private getDeepActiveElement;
    private handleBackdropClick;
    private getAccesibilityAttributes;
    private getDialogClassNames;
    private getHeaderClassNames;
    private getDialogStyle;
    private renderHeading;
    private renderHeadingSubtitle;
    render(): JSX.Element;
}
