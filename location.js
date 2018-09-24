import createHistory from 'history/createBrowserHistory';

const locationHelper = (() => {

  /**
   * @function setRoute
   *
   * This function will set new pathname
   * when can't get a route history
   *
   * @public
   *
  */

  const setRoute = route => {
    if (route) {
      const history = createHistory();
      history.push(`${route}`);
    }
  }

  /**
   * @function getSlug
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
