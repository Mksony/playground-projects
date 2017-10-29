import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as quotes from '../api/quotes';
import {
  REQUEST_QUOTE,
  RECEIVE_QUOTE,
  FAIL_TO_LOAD_QUOTE,
} from './actionTypes';
import {
  requestQuote,
  receiveQuote,
  failToLoadQuote,
  loadQuote,
} from './actions';
import { initialState } from './reducer';

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);
const store = createMockStore(initialState);

const quote = {
  text: 'Hello World',
  author: 'John Doe',
};

afterEach(() => {
  store.clearActions();
});

describe('requestQuote()', () => {
  it('should dispatch action of type REQUEST_QUOTE', () => {
    const expected = { type: REQUEST_QUOTE };

    store.dispatch(requestQuote());
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});

describe('receiveQuote()', () => {
  it('should dispatch action of type RECEIVE_QUOTE', () => {
    const expected = {
      type: RECEIVE_QUOTE,
      ...quote,
    };

    store.dispatch(receiveQuote(quote));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});

describe('failToLoadQuote()', () => {
  it('should dispatch action of type FAIL_TO_LOAD_QUOTE', () => {
    const expected = {
      type: FAIL_TO_LOAD_QUOTE,
      errorMessage: 'Something went wrong, please try again.',
    };

    store.dispatch(failToLoadQuote());
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});

describe('loadQuote()', () => {
  it('should dispatch receive quote on success', () => {
    quotes.getRandomQuote = jest.fn(() =>
      Promise.resolve({
        content: quote.text,
        title: quote.author,
      })
    );

    const expected = [
      { type: REQUEST_QUOTE },
      {
        type: RECEIVE_QUOTE,
        ...quote,
      },
    ];

    return store.dispatch(loadQuote()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expected);
    });
  });

  it('should dispatch fail action on failure', () => {
    quotes.getRandomQuote = jest.fn(() => Promise.reject());

    const expected = [
      { type: REQUEST_QUOTE },
      {
        type: FAIL_TO_LOAD_QUOTE,
        errorMessage: 'Something went wrong, please try again.',
      },
    ];

    return store.dispatch(loadQuote()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expected);
    });
  });
});
