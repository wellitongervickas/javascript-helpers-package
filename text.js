// http://momentjs.com/docs/
import moment from 'moment';
import phoneHelper from './phone';

const textHelper = (() => {

  /**
   * @convertDateUtc() => (less params)
   *
   * This function will append more
   * more 3 hours
   *
   * @public
   *
  */

  const convertDateUtc = (date, format) => {
    return moment(date).utc().format(format);
  }

  /**
   * @convertDate()
   *
   * When backward is false return Brazil date 15/11/2018 else american date 2018-11-15.
   *
   * If you enabled with time, returns a date white time based on date format validation
   * Ex: 15/11/2018 22:00:00 or 2018-11-15 22:00:00
   *
   * When enabled timezone, return less 3 hours
   * Ex: 22:00:00 returns 19:00:00
   *
   * @public
   *
  */

  const convertDate = (date, backward = false, withTime = true, timeZone = true) => {

    if (date) {

      const brazilDefault = withTime ? 'DD/MM/Y HH:mm:ss' : 'DD/MM/Y';
      const americaDefault = withTime ? 'Y-MM-DD HH:mm:ss' : 'Y-MM-DD';

      if (!backward) {

        if (timeZone) {
          return moment.utc(date).local().format(brazilDefault);
        } else {
          return moment(date).format(brazilDefault);
        }

      } else {

        if (timeZone) {
          return moment.utc(date).local().format(americaDefault);
        } else {
          return moment(date).format(americaDefault);
        }
      }
    }
  }

  /**
   * @firstCharUpper()
   *
   * Get first chart of text and set to uppercase
   *
   * @public
   *
  */

  const firstCharUpper = string => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
  }

  /**
   * @randNumber()
   *
   * Generate a random number
   *
   * @public
   *
  */

  const randNumber = max => {
    return max ? Math.floor(Math.random() * Math.floor(max)) : 0;
  }

  /**
   * @parseNumber()
   *
   * @public
   *
  */

  const parseNumber = (text, type) => {

    // Remove special chars
    text = onlyNumbers(text);

    switch (type) {
      case 'cpf':
        return `${text.slice(0, 3)}.${text.slice(3, 6)}.${text.slice(6, 9)}-${text.slice(9, 11)}`;

      case 'zipcode':
        return `${text.slice(0, 5)}-${text.slice(5, 8)}`;

      case 'phone':
        return phoneHelper.parse(text);

      default:
        return text;
    }
  }

  /**
   * @onlyNumbers()
   *
   * @public
   *
  */

  const onlyNumbers = value => value ? value.replace(/[^\d]/g,'') : '';


  /**
   * @convertToDecimal()
   *
   * @public
   *
  */

  const convertToDecimal = (value, toFixed = true) => {
    if (value) {

      value = String(value);
      value = value.replace('.','');
      value = value.replace(',','.');

      if (toFixed) {
        return Number(value).toFixed(2);
      } else {
        return Number(value);
      }
    }

    return 0;
  }

  /**
   * @convertToAmount()
   *
   * @public
   *
  */

  const convertToAmount = value => {
    if (value) {
      value = String(value);
      return value.replace('.', ',');
    }

    return 0;
  }

  /**
   * @crop()
   *
   * Crop text with max text length
   *
   * @public
   *
  */

  const crop = (text, length = 20) => text && text.length > length ? (text.substring(0, length) + '...') : text;

  return {
    firstCharUpper,
    parseNumber,
    convertDate,
    onlyNumbers,
    crop,
    randNumber,
    convertDateUtc,
    convertToDecimal,
    convertToAmount,
  }
})();

export default textHelper;
