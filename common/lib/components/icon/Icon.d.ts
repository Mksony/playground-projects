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
}, any, Pick<{
    className?: string | undefined;
    onClick: ClickHandler;
}, "className" | "onClick"> & {
    theme?: any;
}>;
export declare const LoadingIcon: StyledComponentClass<{
    className?: string | undefined;
}, any, Pick<{
    className?: string | undefined;
}, "className"> & {
    theme?: any;
}>;
