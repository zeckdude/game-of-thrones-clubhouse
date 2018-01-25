import axios from 'axios';
import { ROOT_URL } from '../config/api/an-api-of-ice-and-fire';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK = 'FETCH_BOOK';

export const fetchBook = (id) => {
  const request = axios.get(`${ROOT_URL}/books/${id}`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_BOOK,
        book: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};

export const fetchBooks = () => {
  const request = axios.get(`${ROOT_URL}/books`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_BOOKS,
        books: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};
