/// <reference types="react" />
import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
import { DefaultColors, Sizes } from 'types';
export interface ButtonProps {
    component?: React.SFC<any> | React.ComponentClass<any> | string;
    size?: Sizes;
    color?: DefaultColors;
    ghost?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    type?: {};
    label: string;
}
declare const StyledButton: StyledComponentClass<ButtonProps, any, Pick<ButtonProps, "label" | "className" | "component" | "size" | "color" | "ghost" | "onClick" | "type"> & {
    theme?: any;
}>;
export default StyledButton;
