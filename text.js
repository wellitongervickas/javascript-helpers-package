import moment from 'moment';
import phoneHelper from './phone';

/**
 * @function convertDateUtc
 *
 * This function will append more
 * more 3 hours
 *
 * @param { date } date
 * @param { string } format
 * @return { date }
 * @public
 *
*/

export function convertDateUtc(date, format) {
  return moment(date).utc().format(format);
};

/**
 * @function convertDate
 *
 * When backward is false return Brazil date 15/11/2018 else american date 2018-11-15.
 *
 * If you enabled with time, returns a date white time based on date format validation
 * Ex: 15/11/2018 22:00:00 or 2018-11-15 22:00:00
 *
 * When enabled timezone, return less 3 hours
 * Ex: 22:00:00 returns 19:00:00
 *
 *
 * @param { date } date
 * @param { boolean | null } backward
 * @param { boolean | null } withTime
 * @param { boolean | null } timeZone
 * @return { date }
 * @public
 *
*/

export function convertDate(date, backward = false, withTime = true, timeZone = true) {

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
};

/**
 * @function firstCharUpper
 *
 * Get first chart of text and set to uppercase
 *
 * @param { string } string
 * @return { string }
 * @public
 *
*/

export function firstCharUpper(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};

/**
 * @function randNumber
 *
 * Generate a random number
 *
 * @param { number } max
 * @return { number }
 * @public
 *
*/

export function randNumber(max) {
  return max ? Math.floor(Math.random() * Math.floor(max)) : 0;
};

/**
 * @function parseNumber
 *
 * @param { string } text
 * @param { string } type
 * @return { string }
 * @public
 *
*/

export function parseNumber(text, type) {

  // Remove special chars
  text = onlyNumbers(text);

  switch (type) {

    case 'cpf':
      return `${text.slice(0, 3)}.${text.slice(3, 6)}.${text.slice(6, 9)}-${text.slice(9, 11)}`;

    case 'cnpj':
      return `${text.slice(0, 2)}.${text.slice(2, 5)}.${text.slice(5, 8)}/${text.slice(8, 12)}-${text.slice(12)}`;

    case 'document':
      if (text.length <= 13) {
        return `${text.slice(0, 3)}.${text.slice(3, 6)}.${text.slice(6, 9)}-${text.slice(9, 11)}`;
      } else if (text.length >= 14) {
        return `${text.slice(0, 2)}.${text.slice(2, 5)}.${text.slice(5, 8)}/${text.slice(8, 12)}-${text.slice(12)}`;
      } else {
        return text;
      }

    case 'zipcode':
      return `${text.slice(0, 5)}-${text.slice(5, 8)}`;

    case 'phone':
      return phoneHelper.parse(text);

    default:
      return text;
  }
};

/**
 * @function onlyNumbers
 *
 * @param { string } value
 * @return { string }
 * @public
 *
*/

export function onlyNumbers(value) {
  return value ? value.replace(/[^\d]/g,'') : '';
};

/**
 * @function convertToDecimal
 *
 * @param { string | number } value
 * @param { boolean | null } toFixed
 * @returns { number }
 * @public
 *
*/

export function convertToDecimal(value, toFixed = true) {
  if (value) {

    value = String(value).replace('.','');
    value = value.replace(',','.');

    if (toFixed) {
      return Number(value).toFixed(2);
    } else {
      return Number(value);
    }
  }

  return 0;
};

/**
 * @function convertToAmount
 *
 * @param { number | string } value
 * @return { number | string }
 * @public
 *
*/

export function convertToAmount(value) {
  if (value) {
    return String(value).replace('.', ',');
  }

  return 0;
};

/**
 * @function crop
 *
 * Crop text with max text length
 *
 * @param { string } text
 * @param { number | null } length
 * @return { string }
 * @public
 *
*/

export function crop(text, length = 20){
  return text && text.length > length ? (text.substring(0, length) + '...') : text;
};

