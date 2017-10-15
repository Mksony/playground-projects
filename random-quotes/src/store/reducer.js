import { REQUEST_QUOTE, RECEIVE_QUOTE, FAIL_TO_LOAD_QUOTE} from './actionTypes';

export const initialState = {
  isFetching: false,
  text: null,
  author: null,
  errorMessage: null,
};

const quote = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUOTE:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case RECEIVE_QUOTE:
      return {
        ...state,
        isFetching: false,
        text: action.text,
        author: action.author,
      }
    case FAIL_TO_LOAD_QUOTE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
}

export default quote;

export const getFetchingState = (state) => state.isFetching;
export const getQuote = (state) => state.text;
export const getAuthor = (state) => state.author;
export const getErrorMessage = (state) => state.errorMessage;