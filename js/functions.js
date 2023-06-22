// Функция для проверки длины строки.

const checkStringLength = (string, length) => (string.length) <= length;

// Функция для проверки строки на палиндром

const isPolindrom = (string) => {
  const noSpaceString = string.replaceAll(' ', '');
  const normalizeString = noSpaceString.toUpperCase();
  let newString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    const reverse = normalizeString.at(i);
    newString += reverse;
  }
  return normalizeString === newString;
};

