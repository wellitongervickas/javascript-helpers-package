const windowHelper = (() => {

  /**
   * @function scrollTo
   *
   * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
   *
   * @public
   *
  */

  const scrollTo = el => el ? el.scrollIntoView({ behavior: 'smooth' }) : null;

  /**
   * @function setTitle
   *
   * This function will update browser title
   *
   * @public
   *
  */

  const setTitle = (title, appName = null) => {

    if (title) document.title = `${title} ${appName ? ' | ' + appName: ''}`;
  }

  return {
    scrollTo,
    setTitle
  }
})();

export default windowHelper;
