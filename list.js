const listHelper = (() => {

  /**
   * @countValues()
   *
   * This function will get total value
   * by property or default value
   *
   * @public
   *
  */

  const countValues = (list, property) => {
    if (list.length) {
      return list.reduce((prev, value) => {
        return prev + (property ? value[property] : value);
      }, 0);
    }

    return 0;
  }

  /**
   * @convertToArray()
   *
   * This function receive a object
   * to convert by array
   *
   * @public
   *
  */

  const convertToArray = (object, keys = false) => {
    if (object) {
      if (keys === false) {
        return Object.values(object);
      } else {
        return Object.keys(object);
      }
    }
  }

  /**
   * @renderListOptions()
   *
   * Create list of options
   * to put on select field
   *
   * @public
   *
  */

  const renderListOptions = (list, property) => {

    if (list) {
      const newList = list.map(item => {
        return { value: item.id, label: property ? item[property] : item.label };
      });

      return newList;
    }

    return [];
  }

  return {
    renderListOptions,
    convertToArray,
    countValues
  }
})();

export default listHelper;
