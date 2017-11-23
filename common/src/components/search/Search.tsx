import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import styled from 'styled-components';
import { Sizes } from 'types';

import { getFormElementDimensions, colors } from '../../styles';
import Input from '../input/Input';

interface InputWrapperProps {
  size: Sizes;
  className?: string;
}

const InputWrapper: React.SFC<InputWrapperProps> = ({
  children,
  className,
}) => (<div className={className}>{children}</div>);

const StyledWrapper = styled(InputWrapper) `
  .react-autosuggest__container {
    position: relative;
  }
  .react-autosuggest__input--open input {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .react-autosuggest__suggestion {
    ${props => getFormElementDimensions(props.size as Sizes)}
    cursor: pointer;
    &:hover {
      background-color: ${colors.grey.extraLight};
    }
  }
  .react-autosuggest__suggestion--highlighted {
    background-color: ${colors.grey.light};
  }
  .react-autosuggest__suggestions-container--open {
    position: absolute;
    border: 1px solid transparent;
    border-radius: 3px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top: 0;
    border-color: ${colors.grey.light};
    background-color: white;
    width: 100%;
  }
`;

export interface SearchProps {
  icon?: string;
  getSuggestionValue: (suggestion: any) => string;
  onSuggestionSelected?: (
    e: React.SyntheticEvent<HTMLElement>,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }: any)
    => void;
  renderSuggestion: (suggestion: any) => React.ReactElement<any>;
  renderSuggestionsContainer?: (
    { containerProps, children, query }: any,
  ) => React.ReactElement<any>;
  suggestions: any[];
  onChange: (e: React.FormEvent<any>, params?: any) => void;
  onSuggestionsFetchRequested: ({ value }: { value: string }) => void;
  onSuggestionsClearRequested?: () => void;
  handleClear: () => void;
  placeholder?: string;
  value: string;
  type?: string;
  size?: Sizes;
  isLoading?: boolean;
}

const renderInputComponent = ({
  size,
  icon,
  handleClear,
}: SearchProps) => (inputProps: any) => {
    return (
      <Input
        size={size}
        iconLeft={icon}
        clearable
        onClearClick={handleClear}
        {...inputProps}
      />
    );
  };

class Search extends React.Component<SearchProps> {

  static defaultProps: Partial<SearchProps> = {
    placeholder: 'Search...',
    type: 'search',
    size: 'default',
    icon: 'search',
  };

  render() {
    const {
      value,
      suggestions,
      onChange,
      placeholder,
      getSuggestionValue,
      onSuggestionsClearRequested,
      onSuggestionsFetchRequested,
      onSuggestionSelected,
      renderSuggestion,
      type,
      size,
    } = this.props;

    const inputProps = {
      placeholder,
      value,
      onChange,
      type,
    };

    return (
      <StyledWrapper size={size as Sizes}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent(this.props)}
          focusInputOnSuggestionClick={false}
        />
      </StyledWrapper>
    );
  }
}

export default Search;
