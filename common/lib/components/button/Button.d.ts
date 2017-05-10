/// <reference types="react" />
import * as React from 'react';
export interface ButtonProps {
    component?: any;
    size?: 'small' | 'default' | 'medium' | 'large';
    color: 'primary' | 'secondary' | 'succes' | 'warning' | 'danger';
    ghost?: boolean;
    className?: string;
    onClick?: any;
    type?: any;
    label?: string;
}
declare const StyledButton: React.ComponentClass<ButtonProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledButton;
