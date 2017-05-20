/// <reference types="react" />
import * as React from 'react';
import { DefaultColors, Sizes } from 'types';
export interface ButtonProps {
    component?: any;
    size?: Sizes;
    color: DefaultColors;
    ghost?: boolean;
    className?: string;
    onClick?: {};
    type?: {};
    label?: string;
}
declare const StyledButton: React.ComponentClass<ButtonProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledButton;
