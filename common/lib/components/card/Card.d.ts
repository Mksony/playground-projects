/// <reference types="react" />
import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
export interface CardProps {
    className?: string;
    bgColor?: string;
}
declare const Card: StyledComponentClass<CardProps, any, Pick<CardProps, "className" | "bgColor"> & {
    theme?: any;
}>;
export declare const CardContent: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default Card;
