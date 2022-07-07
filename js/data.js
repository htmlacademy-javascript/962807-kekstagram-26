import {
  getRandomPositiveInteger,
  getPositiveIntegerArray,
  shuffleArray,
  isProperCommentLength
} from './util.js';

const DESCRIPTIONS = [
  'А давайте напишем «Киса и Ося были тут».',
  'А здесь из луца воду делают…',
  'Вермишелево ждёт!',
  'Всё в наших руках',
  'Жизнь прекрасна, невзирая на недочёты.',
  'Житие мое...',
  'Здесь моя город Кушкек.',
  'Знаменито.',
  'Кр-р-расота!',
  'Красота-то какая! Лепота!',
  'Мы хотим танцевать',
  'Нраица!',
  'Очень приятно, царь!',
  'Планета, где меня родили.',
  'Поедем на извозчике.',
  'Поедемте в нумера!',
  'После пяти бутылочек возможно всё!',
  'Хорошему человеку гороха не жалко',
  'Царь во дворца, царь во дворца! ',
  'Это я удачно зашел…',
  'Я требую продолжения банкета!',
  'Як ше маш ?!',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Максим Бирюков',
  'Максим Самойлов',
  'Георгий Белоусов',
  'Яна Орлова',
  'Нина Нефедова',
  'Матвей Степанов',
  'Ева Савина',
  'Полина Захарова',
  'Мария Кондрашова',
  'Лев Долгов',
];
const LIMIT_COMMENTS_COUNT = 5;

function generateRandomContent(count) {
  const idArray = getPositiveIntegerArray(count);
  const postId = shuffleArray(idArray);
  const photoId = shuffleArray(idArray);
  const commentsPerPost = Array.from(
    { length: count }, () => getRandomPositiveInteger(1, LIMIT_COMMENTS_COUNT)
  );
  const commentsAmount = commentsPerPost.reduce((sum, item) => sum + item, 0);
  const commentsId = shuffleArray(getPositiveIntegerArray(commentsAmount));

  function ContentItem(id) {
    this.id = postId[id];
    this.url = `photos/${photoId[id]}.jpg`;
    this.description = DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)];
    this.likes = getRandomPositiveInteger(15, 200);
    this.comments = Array.from({ length: commentsPerPost[id] }, () => new Comment());
  }

  function Comment() {
    this.id = commentsId.pop();
    this.avatar = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`;
    this.message = shuffleArray(MESSAGES).slice(0, getRandomPositiveInteger(1, 2)).join(' ');
    this.name = NAMES[getRandomPositiveInteger(0, NAMES.length - 1)];
  }

  return Array.from({ length: count}, (_, index) => new ContentItem(index++));
}

isProperCommentLength('comment', 3);

export {generateRandomContent};
