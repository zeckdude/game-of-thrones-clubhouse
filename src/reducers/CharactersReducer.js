import { mapKeys as _mapKeys } from 'lodash';
import { FETCH_CHARACTER, FETCH_CHARACTERS } from '../actions';
import { addIdToObject } from '../helpers';

const initialCharactersState = {};

export default (charactersState = initialCharactersState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      // Copy the current state and set a new property with a dynamic key value and the payload as the value
      const character = addIdToObject(action.character);
      return { ...charactersState, [character.id]: character };
    case FETCH_CHARACTERS:
      // Create a new state object that uses an AJAX request response and grabs the 'id' property from each object in the response to use as its key
      const characters = action.characters.map(addIdToObject);
      return _mapKeys(characters, 'id');
    default:
      return charactersState;
  }
};
