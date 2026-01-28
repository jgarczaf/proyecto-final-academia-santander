import { FunctionalComponent } from '../../../stencil-public-runtime';
export type FcInputLabelType = {
    id?: string;
    htmlForId: string;
    label: string;
    required?: boolean;
    showRequired?: boolean;
    tooltipText?: string;
    tooltipWidth?: number;
};
export declare const FcInputLabel: FunctionalComponent<FcInputLabelType>;
