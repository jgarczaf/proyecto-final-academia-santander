import { FunctionalComponent } from '../../../stencil-public-runtime';
export type FcPageButtonType = {
    selected: boolean;
    disabled: boolean;
    pageNumber: number;
    onClick?: () => void;
    pageButtonRef?: (el: HTMLButtonElement | null) => void;
};
export declare const FcPageButton: FunctionalComponent<FcPageButtonType>;
