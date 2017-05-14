/// <reference types="react" />
import * as React from 'react';
import { Sizes } from 'types';
export interface InputProps {
    isValid?: boolean;
    size?: Sizes;
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
