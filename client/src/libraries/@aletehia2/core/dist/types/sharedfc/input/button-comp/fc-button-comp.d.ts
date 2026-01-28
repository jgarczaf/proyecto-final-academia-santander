import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ButtonIconPosition } from "../../../components/button/button.model";
import { IconSizeTypes } from "../../../utils/helper/index";
import { IconColorTypes } from "../../../components/icon/icon.model";
export type FcButtonCompType = {
    color: IconColorTypes;
    size: IconSizeTypes;
    icon?: string;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
    readonly?: boolean;
    buttonAriaLabel?: string;
    tabindex?: number;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
};
export declare const FcButtonComp: FunctionalComponent<FcButtonCompType>;
