import readingTime from 'reading-time';

export const getLowercasedAndTrimedString = (string) =>
  string.toLowerCase().split(' ').join('');

export const getReadingTime = (content) => {
  if (content && content.content) {
    const time = readingTime(content.content);
    return Math.round(time.minutes) || 0;
  }
};
export const getArrayWithoutDuplicate = (array) =>
  array.filter((element, index) => array.indexOf(element) === index);

export const getRandomId = () => Math.floor(Math.random() * 10000 + 1);

export const getIsEven = (i) => {
  return i % 2 === 0;
};

export const getTruncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

export const getPrice = (price, checkout) =>
  Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0));

export const getListFromTwoArrays = (arr1, arr2) => {
  const finalList = [];
  [...arr1, ...arr2].map((element, i) => {
    if (arr1[i]) {
      finalList.push(arr1[i]);
    }

    if (arr2[i]) {
      finalList.push(arr2[i]);
    }
  });
  return finalList;
};
