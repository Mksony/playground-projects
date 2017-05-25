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
  size,
  children,
  className,
}) => (<div className={className}>{children}</div>);

const StyledWrapper = styled(InputWrapper) `
  .react-autosuggest__input--open {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .react-autosuggest__suggestion {
    ${props => getFormElementDimensions(props.size as Sizes)}
    &:hover {
      background-color: ${colors.grey.extraLight};
    }
  }
  .react-autosuggest__suggestion--highlighted {
    background-color: ${colors.grey.light};
  }
  .react-autosuggest__suggestions-container--open {
    border: 1px solid transparent;
    border-radius: 3px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top: 0;
    border-color: ${colors.grey.light};
  }
`;

export interface SearchProps {
  getSuggestionValue: (suggestion: any) => string;
  renderSuggestion: (suggestion: any) => React.ReactElement<any>;
  renderSuggestionsContainer?: ({ containerProps, children, query }: any) => React.ReactElement<any>;
  suggestions: any[];
  onChange: (e: React.SyntheticEvent<HTMLInputElement>, { newValue }: { newValue: string; }) => void;
  onSuggestionsFetchRequested: ({ value }: { value: string }) => void;
  onSuggestionsClearRequested?: () => void;
  placeholder?: string;
  value: string;
  type?: string;
  size?: Sizes;
  isLoading?: boolean;
}

const renderInputComponent = ({ size }: SearchProps) => (inputProps: any) => {
  return (
    <Input
      size={size}
      {...inputProps}
    />
  );
};

class Search extends React.Component<SearchProps, null> {

  static defaultProps: Partial<SearchProps> = {
    placeholder: 'Search...',
    type: 'search',
    size: 'default',
  };

  constructor() {
    super();
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }: { value: string; }) {
    const { onSuggestionsFetchRequested } = this.props;
    onSuggestionsFetchRequested({ value });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    const { onSuggestionsClearRequested } = this.props;
    if (onSuggestionsClearRequested) {
      onSuggestionsClearRequested();
    }
  }

  render() {
    const {
      value,
      suggestions,
      onChange,
      placeholder,
      getSuggestionValue,
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
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
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
