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

const isProperCommentLength = (comment, length) => comment.length <= length;

export {
  getRandomPositiveInteger,
  getPositiveIntegerArray,
  shuffleArray,
  isProperCommentLength
};
