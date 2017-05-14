/// <reference types="react" />
import * as React from 'react';
import { Sizes } from 'types';
import { InputProps } from '../input/Input';
import { ButtonProps } from '../button/Button';
export interface InputGroupProps {
    buttonProps?: ButtonProps;
    inputProps?: InputProps;
    buttonLabel?: string;
    placeholder?: string;
    size?: Sizes;
    className?: string;
}
declare const StyledInputGroup: React.ComponentClass<InputGroupProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledInputGroup;
