/// <reference types="react" />
import * as React from 'react';
export interface ChildContainerProps {
    fluid?: boolean;
    textCenter?: boolean;
    maxWidth?: number;
    className?: any;
}
export interface BaseContainerProps extends ChildContainerProps {
    className?: string;
    center?: boolean;
    vCenter?: boolean;
    hCenter?: boolean;
    fullHeight?: boolean;
    textColor?: string;
    bgColor?: string;
    backgroundUrl?: string;
}
declare const StyledContainer: React.ComponentClass<BaseContainerProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledContainer;
