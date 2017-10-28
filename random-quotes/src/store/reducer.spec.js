import reducer, { initialState } from './reducer';
import * as actionTypes from './actionTypes';

describe('quote reducer', () => {
  it('should return the initial state', () => {
    const expected = initialState;
    const actual = reducer(undefined, {});

    expect(actual).toEqual(expected);
  });

  it('should return the quote fetching state', () => {
    const action = {
      type: actionTypes.REQUEST_QUOTE,
    };

    const expected = {
      ...initialState,
      isFetching: true,
    };
    const actual = reducer(undefined, action);

    expect(actual).toEqual(expected);
  })

  it('should return new state with author and quote', () => {
    const action = {
      type: actionTypes.RECEIVE_QUOTE,
      author: 'John Doe',
      text: 'Hello, World',
    }

    const expected = {
      ...initialState,
      author: 'John Doe',
      text: 'Hello, World',
      isFetching: false,
    }
    const actual = reducer(undefined, action);

    expect(actual).toEqual(expected);
  });

  it('should return the error state when error action gets dispatched', () => {
    const action = {
      type: actionTypes.FAIL_TO_LOAD_QUOTE,
      errorMessage: 'Something went wrong, please try again.',
    }

    const expected = {
      ...initialState,
      errorMessage: 'Something went wrong, please try again.',
    }
    const actual = reducer(undefined, action);

    expect(actual).toEqual(expected);
  });
});