import { Sizes } from 'types';
export declare function getFormElementDimensions(size: Sizes): string;
export interface IconOptions {
    iconLeft?: string;
    iconRight?: string;
    loadingIcon?: boolean;
    clearIcon?: boolean;
}
export declare function getIconPadding({iconLeft, iconRight, loadingIcon, clearIcon}: IconOptions): string;
