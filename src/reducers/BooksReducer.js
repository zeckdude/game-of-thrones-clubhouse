import { FETCH_BOOKS } from '../actions';

const initialBooksState = [];

export default (booksState = initialBooksState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      // Replace the books on the state
      return action.books;
    default:
      return booksState;
  }
};
