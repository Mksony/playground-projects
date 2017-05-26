import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from 'types';

import { getFormElementDimensions, getIconPadding, colors } from '../../styles';
import { IonicIcon, LoadingIcon } from '../icon/Icon';

const RightIcon = styled(IonicIcon) `
    position: absolute;
    top: 0;
    right: 0;
`;

const LeftIcon = styled(IonicIcon) `
    position: absolute;
    top: 0;
    left: 0;
`;

const RightLoadingIcon = styled(LoadingIcon) `
    position: absolute;
    top: 0;
    right: 0;
`;

export interface InputProps {
  isLoading?: boolean;
  isValid?: boolean;
  size?: Sizes;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  type?: string; // TODO: add allowed types here
  value?: string;
  iconLeft?: string;
  iconRight?: string;
  [key: string]: any;
}

class Input extends React.Component<InputProps, {}> {

  static defaultProps: InputProps = {
    type: 'text',
  };

  constructor() {
    super();
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e: React.SyntheticEvent<HTMLInputElement>) {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  }

  render() {
    const {
      autoComplete,
      autoFocus,
      placeholder,
      className,
      type,
      onChange,
      isValid,
      size,
      iconLeft,
      iconRight,
      isLoading,
      ...otherProps,
    } = this.props;

    return (
      <div className={className}>
        {iconLeft && <LeftIcon name={iconLeft as string} />}
        <input
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          {...otherProps}
        />
        {iconRight && !isLoading && <RightIcon name={iconRight as string} />}
        {isLoading && <RightLoadingIcon />}
      </div>
    );
  }
}

const StyledInput = styled(Input) `
  position: relative;
  input {
    background-color: white;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    display: inline-flex;
    font-size: 1rem;
    justify-content: flex-start;
    ${props => getFormElementDimensions(props.size as Sizes)}
    ${({ iconLeft, iconRight }) => getIconPadding(iconLeft, iconRight)}
    max-width: 100%;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  i {
    font-size: 1rem;
    color: ${colors.grey.default}
    ${props => getFormElementDimensions(props.size as Sizes)}
  }
`;

export default StyledInput;
