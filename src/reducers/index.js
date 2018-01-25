import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import CharactersReducer from './CharactersReducer';
import HousesReducer from './HousesReducer';
import BreadcrumbsReducer from './BreadcrumbsReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  characters: CharactersReducer,
  houses: HousesReducer,
  breadcrumbs: BreadcrumbsReducer,
});

export default rootReducer;
