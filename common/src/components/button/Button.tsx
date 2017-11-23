import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import { DefaultColors, Sizes } from 'types';

import { colors, getFormElementDimensions } from '../../styles';
// tslint:disable:no-any
export interface ButtonProps {
  component?: any; // TODO: Find correct typing for component or string
  size?: Sizes;
  color: DefaultColors;
  ghost?: boolean;
  className?: string;
  onClick?: {};
  type?: {};
  label?: string;
}

const Button: React.SFC<ButtonProps> = ({
  label,
  className,
  component,
  ghost,
  ...otherProps,
}) => {
  return React.createElement(component, { className, ...otherProps }, label);
};

const resolveColor = ({ color, ghost }: ButtonProps) => {
  return `
    background-color: ${ghost ? 'transparent' : colors[color]};
    border-color: ${colors[color]};
    color: ${ghost ? colors[color] : 'white'};
    &:hover {
      background-color: ${ghost ? colors[color] : 'transparent'};
      color: ${ghost ? 'white' : colors[color]};
    }
  `;
};

const StyledButton = styled(Button) `
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  ${props => getFormElementDimensions(props.size as Sizes)}
  ${resolveColor}
  transition: all 200ms ease-in-out;
  user-select: none;
`;

StyledButton.defaultProps = {
  component: 'button',
  size: 'default',
  color: 'primary',
};

export default StyledButton;
