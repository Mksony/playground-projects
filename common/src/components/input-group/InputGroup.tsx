import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from 'types';

import Input, {InputProps} from '../input/Input';
import Button, {ButtonProps} from '../button/Button';

export interface InputGroupProps {
  buttonProps?: ButtonProps,
  inputProps?: InputProps,
  buttonLabel?: string;
  placeholder?: string;
  size?: Sizes;
  className?: string;
}

const InputGroup: React.SFC<InputGroupProps> = ({
  buttonProps,
  inputProps,
  size,
  buttonLabel,
  placeholder,
  className,
}) => (
  <div className={className}>
    <Input {...inputProps} size={size} placeholder={placeholder}/>
    <Button
      color="primary"
      {...buttonProps}
      size={size}
      label={buttonLabel}
      type="submit"
    />
  </div>
);

const StyledInputGroup = styled(InputGroup)`
  display: flex;
  & > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export default StyledInputGroup;
