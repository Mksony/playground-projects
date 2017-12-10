import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import { DefaultColors, Sizes } from 'types';

import { colors, getFormElementDimensions } from '../../styles';

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

const Button: React.SFC<ButtonProps> = props => {
  const { label, className, ...otherProps } = props;
  return React.createElement(
    props.component!,
    { className, ...otherProps },
    label
  );
};

const resolveColor = (props: ButtonProps) => {
  const color = props.color!;
  const { ghost } = props;
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
// prettier-ignore
const StyledButton = styled(Button)`
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
