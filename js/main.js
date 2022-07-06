const getRandomPositiveInteger = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isProperCommentLength = (comment, length) => comment.length <= length;

const shuffleArray = (array) => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const getPositiveIntegerArray = (size) =>
  Array.from({ length: size }, (i, j) => j + 1);

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
  const ContentArray = [];
  const PostId = shuffleArray(getPositiveIntegerArray(count));
  const PhotoId = shuffleArray(getPositiveIntegerArray(count));
  const CommentsPerPost = Array.from(
    { length: count }, () => getRandomPositiveInteger(1, LIMIT_COMMENTS_COUNT)
  );
  const CommentsAmount = CommentsPerPost.reduce((sum, item) => sum + item, 0);
  const CommentsId = shuffleArray(getPositiveIntegerArray(CommentsAmount));

  function ContentItem(id) {
    this.id = PostId[id];
    this.url = `photos/${PhotoId[id]}.jpg`;
    this.description = DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)];
    this.likes = getRandomPositiveInteger(15, 200);
    this.comments = Array.from({ length: CommentsPerPost[id] }, () => new Comment());
    // console.log(this)
  }

  function Comment() {
    this.id = CommentsId.pop();
    this.avatar = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`;
    this.message = shuffleArray(MESSAGES.slice()).slice(0, getRandomPositiveInteger(1, 2)).join(' ');
    this.name = NAMES[getRandomPositiveInteger(0, NAMES.length - 1)];
    // console.log(this);
  }
  for (let i = 0; i < count; i++) {
    ContentArray.push(new ContentItem(i));
  }
  return ContentArray;
}

getRandomPositiveInteger(1, 8);
isProperCommentLength('comment', 3);
generateRandomContent(5);

// console.dir(generateRandomContent(5));
