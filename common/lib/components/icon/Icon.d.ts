/// <reference types="react" />
import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
export declare type ClickHandler = (e: React.SyntheticEvent<HTMLElement>) => void;
export interface IconProps {
    name: string;
    className?: string;
    onClick?: ClickHandler;
}
export declare const IonicIcon: React.SFC<IconProps>;
export declare const CloseIcon: StyledComponentClass<{
    className?: string | undefined;
    onClick: ClickHandler;
}, any, {
    className?: string | undefined;
    onClick: ClickHandler;
}>;
export declare const LoadingIcon: StyledComponentClass<{
    className?: string | undefined;
}, any, {
    className?: string | undefined;
}>;
