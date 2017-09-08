import { StyledComponentClass } from 'styled-components';
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
declare const StyledButton: StyledComponentClass<ButtonProps, any, ButtonProps>;
export default StyledButton;
