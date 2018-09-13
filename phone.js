const phoneHelper = (() => {

  /**
   * @parse()
   *
   * @public
   *
  */

  const parse = (number) => {

    if (number) {

      // Remove special chars
      number = number.replace(/[^\d]/g,'');

      /**
       *
       * List of types
       *
       * (99) 9999-9999      
       * (99) 99999-9999     
       *
       * 55 (99) 9999-9999   
       * 55 (99) 99999-9999  
       *
       * 0[0 to 9]00 999 9999
       *
      */

      if (number.includes('55', 0,1)) {

        if (number.length === 12) {
          return  `${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 8)}-${number.slice(8)}`;
        } else if (number.length === 13) {
          return  `${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 9)}-${number.slice(9)}`;
        }

      } else if (number.match(/[0][0-9][0]{2}\d+/g)) {

        return  `${number.slice(0, 4)} ${number.slice(4, 7)} ${number.slice(7)}`;

      } else {
        if (number.length === 10) {
          return  `(${number.slice(0, 2)}) ${number.slice(2, 6)}-${number.slice(6)}`;
        } else if (number.length === 11) {
          return  `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7)}`;
        }
      }
    }
  }

  return {
    parse
  }
})();

export default phoneHelper;
