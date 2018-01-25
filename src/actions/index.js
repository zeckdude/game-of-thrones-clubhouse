import axios from 'axios';
import { ROOT_URL } from '../config/api/an-api-of-ice-and-fire';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK = 'FETCH_BOOK';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const FETCH_HOUSE = 'FETCH_HOUSE';

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

export const fetchCharacter = (id) => {
  const request = axios.get(`${ROOT_URL}/characters/${id}`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_CHARACTER,
        character: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};

export const fetchCharacters = () => {
  const request = axios.get(`${ROOT_URL}/characters`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_CHARACTERS,
        characters: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};

export const fetchHouse = (id) => {
  const request = axios.get(`${ROOT_URL}/houses/${id}`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_HOUSE,
        house: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};

export const fetchHouses = () => {
  const request = axios.get(`${ROOT_URL}/houses`);

  return dispatch => request.then(
    // Success callback
    ({ data }) => {
      // Dispatch the action to the reducer
      dispatch({
        type: FETCH_HOUSES,
        houses: data,
      });
    },
    // Error callback
    (error) => {
      alert(`The request could not be completed due to a system error: ${error}`);
    }
  );
};
