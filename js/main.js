const getRandomPositiveInteger = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return Math.floor(Math.random()*(max - min + 1)) + min;
};

const isProperCommentLength = (comment, length) => comment.length <= length;

getRandomPositiveInteger(1, 8);
isProperCommentLength('comment', 3);
