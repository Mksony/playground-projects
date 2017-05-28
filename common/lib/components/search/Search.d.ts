/// <reference types="react" />
import * as React from 'react';
import { Sizes } from 'types';
export interface SearchProps {
    icon?: string;
    getSuggestionValue: (suggestion: any) => string;
    onSuggestionSelected?: (e: React.SyntheticEvent<HTMLElement>, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}: any) => void;
    renderSuggestion: (suggestion: any) => React.ReactElement<any>;
    renderSuggestionsContainer?: ({containerProps, children, query}: any) => React.ReactElement<any>;
    suggestions: any[];
    onChange: (e: React.SyntheticEvent<HTMLInputElement>, {newValue}: {
        newValue: string;
    }) => void;
    onSuggestionsFetchRequested: ({value}: {
        value: string;
    }) => void;
    onSuggestionsClearRequested?: () => void;
    handleClear: () => void;
    placeholder?: string;
    value: string;
    type?: string;
    size?: Sizes;
    isLoading?: boolean;
}
declare class Search extends React.Component<SearchProps, null> {
    static defaultProps: Partial<SearchProps>;
    render(): JSX.Element;
}
export default Search;
