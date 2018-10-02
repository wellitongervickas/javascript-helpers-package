/**
 * @function countValues
 *
 * This function will get total value
 * by property or default value
 *
 * @param { array } list
 * @param { string | null } property
 * @return { number }
 * @public
 *
*/

export function countValues(list, property = null) {
  if (list.length) {
    return list.reduce((prev, value) => {
      return prev + (property ? value[property] : value);
    }, 0);
  }

  return 0;
};

/**
 * @function convertToArray
 *
 * This function receive a object
 * to convert by array
 *
 * @param { object } object
 * @param { boolean | null } keys
 * @return { array }
 * @public
 *
*/

export function convertToArray(object, keys = false) {
  if (object) {
    if (keys === false) {
      return Object.values(object);
    } else {
      return Object.keys(object);
    }
  }
};

/**
 * @function renderListOptions
 *
 * Create list of options
 * to put on select field
 *
 * @param { array } list
 * @param { string | null } property
 * @return { array }
 * @public
 *
*/

export function renderListOptions(list, property = null) {

  if (list) {
    return list.map(item => {
      return { value: item.id, label: property ? item[property] : item.label };
    });
  }

  return [];
};

