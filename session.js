const sessionHelper = (() => {

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

  const saveInStorage = (key, payload = {}) => {
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

  const getFromStorage = key => {
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

  const deleteOfStorage = key => {
    sessionStorage.removeItem(key);
  };

  return {
    save: saveInStorage,
    get: getFromStorage,
    delete: deleteOfStorage
  };

})();

export default sessionHelper;
