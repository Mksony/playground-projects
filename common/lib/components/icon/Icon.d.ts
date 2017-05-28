/// <reference types="react" />
import * as React from 'react';
export declare type ClickHandler = (e: React.SyntheticEvent<HTMLElement>) => void;
export interface IconProps {
    name: string;
    className?: string;
    onClick?: ClickHandler;
}
export declare const IonicIcon: React.SFC<IconProps>;
export declare const CloseIcon: React.ComponentClass<{
    className?: string | undefined;
    onClick: ClickHandler;
} & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export declare const LoadingIcon: React.ComponentClass<{
    className?: string | undefined;
} & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
