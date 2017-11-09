import { StyledComponentClass } from 'styled-components';
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
declare const StyledInputGroup: StyledComponentClass<InputGroupProps, any, InputGroupProps>;
export default StyledInputGroup;
