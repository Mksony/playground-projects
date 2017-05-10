import { REQUEST_QUOTE, RECEIVE_QUOTE, FAIL_TO_LOAD_QUOTE } from './actionTypes';
import { getRandomQuote } from '../api/quotes';

export const requestQuote = () => ({
  type: REQUEST_QUOTE,
});

export const receiveQuote = (quote) => ({
  type: RECEIVE_QUOTE,
  text: quote.content,
  author: quote.title,
});

export const failToLoadQuote = () => ({
  type: FAIL_TO_LOAD_QUOTE,
  errorMessage: 'Something went wrong, please try again.'
});

export const loadQuote = () => (dispatch) => {
  dispatch(requestQuote());
  return getRandomQuote()
    .then((quote) => {
      dispatch(receiveQuote(quote))
    }).catch(err => {
      dispatch(failToLoadQuote())
  })
}