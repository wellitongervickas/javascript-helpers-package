/**
 * @function setRoute
 *
 * This function will set new pathname
 * when can't get a route history
 *
 * @param { string } route
 * @public
 *
*/

export function setRoute(route) {
  if (route) {
    const history = createHistory();
    history.push(`${route}`);
  }
};

/**
 * @function getSlug
 *
 * @return { string }
 * @public
 *
*/

export function getSlug(){
  return encodeURIComponent(window.location.hostname);
};

