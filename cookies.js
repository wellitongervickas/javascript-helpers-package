const cookiesHelper = (() => {

  /**
    * @saveIntoCookies()
    *
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
    * @getFromCookies()
    *
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
    * @deleteFromCookies()
    *
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
