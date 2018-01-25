import { mapKeys as _mapKeys } from 'lodash';
import { FETCH_BOOK, FETCH_BOOKS } from '../actions';
import { addIdToObject } from '../helpers';

const initialBooksState = {};

export default (booksState = initialBooksState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      // Copy the current state and set a new property with a dynamic key value and the payload as the value
      const book = addIdToObject(action.book);
      return { ...booksState, [book.id]: book };
    case FETCH_BOOKS:
      // Create a new state object that uses an AJAX request response and grabs the 'id' property from each object in the response to use as its key
      const books = action.books.map(addIdToObject);
      return _mapKeys(books, 'id');
    default:
      return booksState;
  }
};
