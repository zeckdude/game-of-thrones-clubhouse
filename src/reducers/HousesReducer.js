import { mapKeys as _mapKeys } from 'lodash';
import { FETCH_HOUSE, FETCH_HOUSES } from '../actions';
import { addIdToObject } from '../helpers';

const initialHousesState = {};

export default (housesState = initialHousesState, action) => {
  switch (action.type) {
    case FETCH_HOUSE:
      // Copy the current state and set a new property with a dynamic key value and the payload as the value
      const house = addIdToObject(action.house);
      return { ...housesState, [house.id]: house };
    case FETCH_HOUSES:
      // Create a new state object that uses an AJAX request response and grabs the 'id' property from each object in the response to use as its key
      const houses = action.houses.map(addIdToObject);
      return _mapKeys(houses, 'id');
    default:
      return housesState;
  }
};
