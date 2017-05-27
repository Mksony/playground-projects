import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Datalist from './Datalist';

const source = [
  {
    'title': 'Little - Denesik',
    'description': 'Reduced attitude-oriented pricing structure',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/judzhin_miles/128.jpg',
    'price': '$75.41',
  },
  {
    'title': 'Deckow Inc',
    'description': 'Pre-emptive responsive extranet',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/macxim/128.jpg',
    'price': '$13.99',
  },
  {
    'title': 'Wiegand, Volkman and Wolff',
    'description': 'Enterprise-wide optimal software',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/oskamaya/128.jpg',
    'price': '$97.39',
  },
  {
    'title': 'Anderson LLC',
    'description': 'Organic tangible function',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/polarity/128.jpg',
    'price': '$81.28',
  },
  {
    'title': 'AndOne LLC',
    'description': 'Organic tangible function',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/polarity/128.jpg',
    'price': '$81.28',
  },
  {
    'title': 'Spinka - Bartell',
    'description': 'Digitized optimal core',
    'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/craigelimeliah/128.jpg',
    'price': '$40.57',
  },
];

interface SampleSearchState {
  suggestions: any[];
  value: string;
}

class SampleSearch extends React.Component<any, SampleSearchState> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.state = {
      suggestions: [],
      value: '',
    };
  }

  getSuggestions(value: string) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : source.filter(lang =>
      lang.title.toLowerCase().slice(0, inputLength) === inputValue,
    );
  }

  handleChange(e: React.SyntheticEvent<HTMLInputElement>, { newValue }: { newValue: string; }) {
    this.setState({
      value: newValue,
    });
  }

  onSuggestionsFetchRequested({ value }: { value: string }) {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  handleClear() {
    this.setState({
      value: '',
    });
  }

  render() {
    const {
      suggestions,
      value,
    } = this.state;
    return (
      <Datalist
        value={value}
        suggestions={suggestions}
        getSuggestionValue={(suggestion) => suggestion.title as string}
        onChange={this.handleChange}
        renderSuggestion={(suggestion) => <div>{suggestion.title}</div>}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        handleClear={this.handleClear}
        size="large"
      />
    );
  }

}

storiesOf('Datalist', module)
  .add('Default', () => {
    return (
      <SampleSearch />
    );
  });
