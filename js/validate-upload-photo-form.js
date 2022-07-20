import {isProperStringLength} from './util.js';
const uploadPhotoForm = document.querySelector('#upload-select-image');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const MAX_STRING_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;
const HASHTAG_REGULAR = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__text',
  errorTextTag: 'span',
  errorTextParent: 'img-upload__text',
});


// Добавляем настраиваемый валидатор для комментария
pristine.addValidator(descriptionInput, (value) => isProperStringLength(value, MAX_STRING_LENGTH),
  `сообщение должно быть не более ${MAX_STRING_LENGTH} символов`);

// Объявляем функции валидации для хештегов
const stringToWords = (string) => string.split(' ');

const checkHashtagsCount = (value) => stringToWords(value).length <= MAX_HASHTAGS_COUNT;

const checkHashtagsDuplicate = (value) => {
  const hashtagsArray = stringToWords(value).map((hashtag) => hashtag.toLowerCase());
  const hashtagsSet = new Set(hashtagsArray);
  return hashtagsArray.length === hashtagsSet.size;
};

const checkHashtagsLength = (value) => stringToWords(value).every((hashtag) => hashtag.length <= MAX_HASHTAG_LENGTH);

const checkHashtagsChars = (value) => stringToWords(value).every((hashtag) => HASHTAG_REGULAR.test(hashtag));


// Добавляем настраиваемые валидаторы для хештегов
pristine.addValidator(hashtagInput, checkHashtagsCount,
  `Максимум ${MAX_HASHTAGS_COUNT} хеш-тегов`);

pristine.addValidator(hashtagInput, checkHashtagsDuplicate,
  'один и тот же хэш-тег не может быть использован дважды');

pristine.addValidator(hashtagInput, checkHashtagsLength,
  `максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая решётку`);

pristine.addValidator(hashtagInput, checkHashtagsChars,
  `хэш-тег начинается с символа # строка после решётки должна состоять из букв и чисел и не может содержать
  пробелы, спецсимволы (#, @, $ и т. п.);
  символы пунктуации (тире, дефис, запятая и т. п.);
  эмодзи и т. д.`);

// Добавляем общий валидатор для формы

uploadPhotoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  pristine.validate();
});


// #Валидация комментария:
// - комментарий не обязателен;
// - длина комментария не может составлять больше 140 символов;

// # Валидация хэш-тегов:
// - хэш-тег начинается с символа # (решётка);
// - строка после решётки должна состоять из букв и чисел и не может содержать
// пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации
// (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// - хеш-тег не может состоять только из одной решётки;
// - максимальная длина одного хэш-тега 20 символов, включая решётку;
// - хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег
// считаются одним и тем же тегом;
// - хэш-теги разделяются пробелами;
// - один и тот же хэш-тег не может быть использован дважды;
// - нельзя указать больше пяти хэш-тегов;
// - хэш-теги необязательны;
// - если фокус находится в поле ввода хэш-тега, нажатие на Esc
// не должно приводить к закрытию формы
// редактирования изображения.
