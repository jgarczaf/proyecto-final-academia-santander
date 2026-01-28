import { LinkTargetTypes } from '../menu-lateral.model';
export type MenuLateralItemArgs = {
    'badge-label': string;
    'badge-max': number;
    'badge-value': number;
    'disabled': boolean;
    'icon': string;
    'name': string;
    'selected': boolean;
    'tooltip-text': string;
    'external-label': string;
    'href': string;
    'rel': string;
    'target': LinkTargetTypes;
};
export declare const ordererArgs: MenuLateralItemArgs;
