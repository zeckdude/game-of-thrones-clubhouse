import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
// import CharactersReducer from './CharactersReducer';
// import HousesReducer from './HousesReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  characters: [],
  houses: [],
});

export default rootReducer;
