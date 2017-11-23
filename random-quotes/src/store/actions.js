import {
  REQUEST_QUOTE,
  RECEIVE_QUOTE,
  FAIL_TO_LOAD_QUOTE,
} from './actionTypes';
import { getRandomQuote } from '../api/quotes';

export const requestQuote = () => ({ type: REQUEST_QUOTE });

export const receiveQuote = ({ text, author }) => ({
  type: RECEIVE_QUOTE,
  text,
  author,
});

export const failToLoadQuote = () => ({
  type: FAIL_TO_LOAD_QUOTE,
  errorMessage: 'Something went wrong, please try again.',
});

export const loadQuote = () => dispatch => {
  dispatch(requestQuote());
  return getRandomQuote()
    .then(({ content, title }) => {
      dispatch(receiveQuote({ text: content, author: title }));
    })
    .catch(() => {
      dispatch(failToLoadQuote());
    });
};
