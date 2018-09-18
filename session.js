const sessionHelper = (() => {

  /**
    * @saveInStorage()
    *
    * This method will save a data of strings in the browser memory
    * using session storage passing a key and payload
    *
    * @public
    *
  */

  const saveInStorage = (key, payload = null) => {
    sessionStorage.setItem(key, btoa(JSON.stringify(payload)))
  };

  /**
    * @getFromStorage()
    *
    * This method will get a data of the browser memory
    * using session storage passing a key to return a data or null
    *
    * @public
    *
  */

  const getFromStorage = key => {
    const data = sessionStorage.getItem(key);
    return (data) ? JSON.parse(atob(data)) : null;
  };

  /**
   * @deleteOfStorage()
   *
   * This function will delete a session storage
   *
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