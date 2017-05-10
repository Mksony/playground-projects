/// <reference types="react" />
import * as React from 'react';
export interface InputProps {
    isValid?: boolean;
    size?: 'small' | 'default' | 'medium' | 'large';
    onBlur?: any;
    onChange?: any;
    autoComplete?: string;
    autoFocus?: boolean;
    placeholder?: string;
    className?: string;
    type?: string;
}
declare const StyledInput: React.ComponentClass<InputProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledInput;
