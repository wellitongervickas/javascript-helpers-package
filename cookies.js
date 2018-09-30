const cookiesHelper = (() => {

  /**
    * @function saveIntoCookies
    *
    * This function will save a payload
    * in browser cookies
    *
    * @param { string } key
    * @param { object | string } payload
    * @public
    *
  */

  const saveIntoCookies = (key, payload = null) => {

    if (key) {
      const value = btoa(JSON.stringify(payload));
      let date = new Date();
      date.setTime(date.getTime()+(60*60*1000));
      document.cookie = `${key}=${value}; expires=${ date.toGMTString() }; path=/`;
    }
  };

  /**
    * @function getFromCookies
    *
    * This function will get a key
    * from browser cookies and return
    *
    * @param { string } key
    * @return { object }
    * @public
    *
  */

  const getFromCookies = key => {
    if (key) {
      const escape = (s) => s.replace(/([.*+?^${}()|[\]/\\])/g, '\\$1');
      let match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(key) + '=([^;]*)'));
      return match && match[1] ? JSON.parse(atob(match[1])) : null;
    }
  };

  /**
    * @function deleteFromCookies
    *
    * This function will remove
    * a key from browser cookies
    *
    * @param { string } key
    * @public
    *
  */

  const deleteFromCookies = key => {
    if (key) {
      document.cookie = `${encodeURIComponent(key)}=; expires=; path=/`;
    }
  };

  return {
    save: saveIntoCookies,
    get: getFromCookies,
    delete: deleteFromCookies
  };

})();

export default cookiesHelper;
