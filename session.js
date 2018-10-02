/**
  * @function saveInStorage
  *
  * This method will save a data of strings in the browser memory
  * using session storage passing a key and payload
  *
  * @param { string } key
  * @param { object | string } payload
  * @public
  *
*/

export function saveInStorage(key, payload = {}) {
  sessionStorage.setItem(key, btoa(JSON.stringify(payload)))
};

/**
  * @function getFromStorage
  *
  * This method will get a data of the browser memory
  * using session storage passing a key to return a data or null
  *
  * @param { string } key
  * @return { object }
  * @public
  *
*/

export function getFromStorage(key) {
  const data = sessionStorage.getItem(key);
  return (data) ? JSON.parse(atob(data)) : null;
};

/**
 * @function deleteOfStorage
 *
 * This function will delete a session storage
 *
 * @param { string } key
 * @public
 *
*/

export function deleteOfStorage(key) {
  sessionStorage.removeItem(key);
};
