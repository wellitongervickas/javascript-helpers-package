
/**
 * @function scrollTo
 *
 * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
 *
 * @param { object } el
 * @public
 *
*/

export function scrollTo(el) {
  return el ? el.scrollIntoView({ behavior: 'smooth' }) : null
};

/**
 * @function setTitle
 *
 * This function will update browser title
 *
 * @param { string } title
 * @param { string | null } appName
 * @public
 *
*/

export function setTitle(title, appName = null) {
  if (title) document.title = `${title} ${appName ? ' | ' + appName: ''}`;
};