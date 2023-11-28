import moment from 'moment';

/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

const idGenerator = (events, length = 1) => {
  const arrayData = [];
  events.map((data) => {
    return arrayData.push(parseInt(data.id, 10));
  });
  const number = (Math.max(...arrayData) + 1).toString();
  return number.length < length ? `${'0'.repeat(length - number.length)}${number}` : number;
};

const USDollar = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

const formatToDate = (date) => moment(date).format('DD MMM YYYY');

export { ellipsis, idGenerator, USDollar, formatToDate };
