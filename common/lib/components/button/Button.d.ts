import { StyledComponentClass } from 'styled-components';
import { DefaultColors, Sizes } from 'types';
export interface ButtonProps {
    component?: any;
    size?: Sizes;
    color?: DefaultColors;
    ghost?: boolean;
    className?: string;
    onClick?: {};
    type?: {};
    label?: string;
}
declare const StyledButton: StyledComponentClass<ButtonProps, any, Pick<ButtonProps, "label" | "className" | "component" | "size" | "color" | "ghost" | "onClick" | "type"> & {
    theme?: any;
}>;
export default StyledButton;
