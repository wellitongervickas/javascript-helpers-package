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

