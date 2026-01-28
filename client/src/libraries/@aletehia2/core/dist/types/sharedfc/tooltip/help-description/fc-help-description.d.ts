import { FunctionalComponent } from '../../../stencil-public-runtime';
export type FcHelpDescriptionType = {
    text: string;
    position: 'bottom' | 'bottom-right';
    hasArrow?: boolean;
    id?: string;
};
export declare const FcHelpDescription: FunctionalComponent<FcHelpDescriptionType>;
