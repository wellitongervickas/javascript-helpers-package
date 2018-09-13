const locationHelper = (() => {

  /**
   * @getSlug()
   *
   * @public
   *
  */

  const getSlug = () => encodeURIComponent(window.location.hostname);

  return {
    setRoute,
    getSlug,
  };

})();

export default locationHelper;
