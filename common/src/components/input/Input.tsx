import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from 'types';

import { getFormElementDimensions } from '../../styles';

export interface InputProps {
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
      ref,
      ...otherProps,
    } = this.props;

    return (
      <div className={className}>
        <input
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          {...otherProps}
        />
      </div>
    );
  }
}

const StyledInput = styled(Input) `
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
    max-width: 100%;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`;

export default StyledInput;
