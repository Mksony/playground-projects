/// <reference types="react" />
import * as React from 'react';
import { Sizes } from 'types';
export interface InputProps {
    isLoading?: boolean;
    isValid?: boolean;
    size?: Sizes;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    autoComplete?: string;
    autoFocus?: boolean;
    placeholder?: string;
    className?: string;
    type?: string;
    value?: string;
    iconLeft?: string;
    iconRight?: string;
    clearable?: boolean;
    onClearClick?: (e?: React.SyntheticEvent<HTMLElement>) => void;
    [key: string]: any;
}
declare const StyledInput: React.ComponentClass<InputProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledInput;
