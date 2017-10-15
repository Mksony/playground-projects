/// <reference types="react" />
import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
export interface CardProps {
    className?: string;
    bgColor?: string;
}
export interface CardHeaderProps {
    className?: string;
    component?: any;
    bordered?: string;
}
export interface CardContentProps {
    className?: string;
}
declare const Card: StyledComponentClass<React.HTMLProps<HTMLDivElement> & CardProps, any, React.HTMLProps<HTMLDivElement> & CardProps>;
export declare const CardHeader: StyledComponentClass<CardHeaderProps, any, CardHeaderProps>;
export declare const CardContent: StyledComponentClass<CardContentProps, any, CardContentProps>;
export default Card;
