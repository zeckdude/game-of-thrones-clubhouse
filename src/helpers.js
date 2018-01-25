/**
 * Parse a predictive URL and grab the number off the end
 * @param  {string} url  API URL
 * @return {number}      Id
 */
export const parseIdFromUrl = url => Number(url.match(/(\d+)$/)[0]);

/**
 * For the given object, determine the Id based on the URl, and then add the Id to the object
 * @param {object} responseObject The object with the new Id property added
 */
export const addIdToObject = responseObject => ({ ...responseObject, id: parseIdFromUrl(responseObject.url) });
