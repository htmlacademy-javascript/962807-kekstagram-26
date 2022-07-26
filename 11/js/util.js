const getRandomPositiveInteger = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getPositiveIntegerArray = (size) =>
  Array.from({ length: size }, (i, j) => j + 1);

const shuffleArray = (array) => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const isEscapeKey = (event) => event.key === 'Escape';

const isProperStringLength = (string, length) => {
  if (typeof(string) !== 'string') {
    throw new TypeError(`${string} не является строкой`);
  }
  return string.length <= length;
};

const showErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomPositiveInteger,
  getPositiveIntegerArray,
  shuffleArray,
  isProperStringLength,
  isEscapeKey,
  showErrorMessage,
  debounce
};
