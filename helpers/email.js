/**
 * @function isValid
 *
 * This function will validate
 * a email and return true/false
 *
 * @param { string } email
 * @return { boolean }
 * @public
 *
*/

export function isValid(email) {
  if (email) {
    const regExpCode = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g');
    return regExpCode.test(email);
  }
};
