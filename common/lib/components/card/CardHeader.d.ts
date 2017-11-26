/// <reference types="react" />
import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
export interface CardHeaderProps {
    className?: string;
    component?: any;
    bordered?: string;
    title: string;
}
export interface CardContentProps {
    className?: string;
}
export declare const CardContent: StyledComponentClass<CardContentProps, any, Pick<CardContentProps, "className"> & {
    theme?: any;
}>;
export declare const BaseCardHeader: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const CardHeader: React.SFC<CardHeaderProps>;
export default CardHeader;
