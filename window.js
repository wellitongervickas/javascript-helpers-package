const windowHelper = (() => {

  /**
   * @scrollTo()
   *
   * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
   *
   * @public
   *
  */

  const scrollTo = el => el ? el.scrollIntoView({ behavior: 'smooth' }) : null;

  return {
    scrollTo
  }
})();

export default windowHelper;
