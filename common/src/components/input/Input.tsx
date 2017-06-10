import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from 'types';

import { getFormElementDimensions, getIconPadding, colors } from '../../styles';
import { IonicIcon, LoadingIcon, CloseIcon } from '../icon/Icon';

const RightIcon = styled(IonicIcon) `
    position: absolute;
    top: 0;
    right: 0;
`;

const RightCloseIcon = styled(CloseIcon) `
    position: absolute;
    top: 0;
    right: 0;
`;

const LeftIcon = styled(IonicIcon) `
    position: absolute;
    top: 0;
    left: 0;
`;

const LeftLoadingIcon = styled(LoadingIcon) `
    position: absolute;
    top: 0;
    left: 0;
`;

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
  type?: string; // TODO: add allowed types here
  value?: string;
  iconLeft?: string;
  iconRight?: string;
  clearable?: boolean;
  onClearClick?: (e?: React.SyntheticEvent<HTMLElement>) => void;
  [key: string]: any;
}

interface InputState {
  value: string;
  isFocused: boolean;
}

class Input extends React.Component<InputProps, InputState> {

  static defaultProps: InputProps = {
    type: 'text',
  };

  input: HTMLInputElement;

  constructor(props: InputProps) {
    super(props);
    const { value, autoFocus } = props;
    this.state = {
      value: value || '',
      isFocused: Boolean(autoFocus),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  componentWillReceiveProps(nextProps: InputProps) {
    const { value: currentValue } = this.props;
    const { value: nextValue } = nextProps;
    if (currentValue !== nextValue) {
      this.setState({
        value: nextValue as string,
      });
    }
  }

  handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      value: e.currentTarget.value,
    });
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  handleBlur(e: React.SyntheticEvent<HTMLInputElement>) {
    const { onBlur } = this.props;
    this.setState({
      isFocused: false,
    });
    if (onBlur) {
      onBlur(e);
    }
  }

  handleFocus(e: React.SyntheticEvent<HTMLInputElement>) {
    const { onFocus } = this.props;
    this.setState({
      isFocused: true,
    });
    if (onFocus) {
      onFocus(e);
    }
  }

  handleClearClick(e?: React.SyntheticEvent<HTMLElement>) {
    const { onClearClick } = this.props;
    this.setState({
      value: '',
    });
    this.input.focus();
    if (onClearClick) {
      onClearClick(e);
    }
  }

  getLeftIcon() {
    const { isLoading, iconLeft } = this.props;
    if (isLoading) {
      return <LeftLoadingIcon />;
    } else if (iconLeft) {
      return <LeftIcon name={iconLeft} />;
    }
    return null;
  }

  getRightIcon() {
    const { clearable, iconRight } = this.props;
    const { isFocused, value } = this.state;
    const hasValue = value.length > 0;
    if (clearable && isFocused && hasValue) {
      return <RightCloseIcon onClick={this.handleClearClick} />;
    } else if (iconRight) {
      return <RightIcon name={iconRight} />;
    }
    return null;
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
      clearable,
      onClearClick,
      ...otherProps,
    } = this.props;

    const { value } = this.state;

    return (
      <div className={className}>
        {this.getLeftIcon()}
        <input
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onBlur={this.handleBlur}
          placeholder={placeholder}
          type={type}
          onChange={this.handleChange}
          {...otherProps}
          ref={(input) => this.input = input}
          onFocus={this.handleFocus}
          value={value}
        />
        {this.getRightIcon()}
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
    ${({
    iconLeft,
    iconRight,
    isLoading: loadingIcon,
    clearable: clearIcon,
    }) =>
    getIconPadding({
      iconLeft,
      iconRight,
      loadingIcon,
      clearIcon,
    })
  }
    max-width: 100%;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  i {
    font-size: 1rem;
    color: ${colors.grey.default};
    ${props => getFormElementDimensions(props.size as Sizes)}
  }
`;

export default StyledInput;
