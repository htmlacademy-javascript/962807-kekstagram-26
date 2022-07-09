import { randomContent } from './data.js';
const fullPictureContainer = document.querySelector('.big-picture');
const miniatureContainer = document.querySelector('.pictures.container');
const closeButton = document.querySelector('.big-picture__cancel');


const renderComments = (comments) => {
  //Находим элементы для заполнения комментариями
  const commentContainer = fullPictureContainer.querySelector('.social__comments');
  const commentElement = fullPictureContainer.querySelector('.social__comment');
  const commentAvatar = commentElement.querySelector('.social__picture');
  const commentMessage = commentElement.querySelector('.social__text');
  commentContainer.innerHTML = '';

  //Заполняем основными комментариями, вставляем
  for (const comment of comments) {
    const {avatar, message, name} = comment;
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentMessage.textContent = message;
    commentContainer.append(commentElement.cloneNode(true));
  }
};

const renderFullPictureContainer = (target) => {
  //Извлекаем контентные данные
  const {description, url, likes, comments} = target;

  //Находим элементы для заполнения контентными данными
  const picture = fullPictureContainer.querySelector('.big-picture__img img');
  const authorContainer = fullPictureContainer.querySelector('.social__header');
  const authorAvatar = authorContainer.querySelector('.social__picture');
  const authorDescription = authorContainer.querySelector('.social__caption');
  const likesCount =  authorContainer.querySelector('.likes-count');
  const commentsCount = fullPictureContainer.querySelector('.social__comment-count');
  const commentsCountSummary = commentsCount.querySelector('.comments-count');
  const commentsLoader = fullPictureContainer.querySelector('.comments-loader');

  //Заполняем основными контентными данными
  picture.src = url;
  picture.alt = description;
  authorAvatar.src = 'img/avatar-1.svg';
  authorDescription.textContent = description;
  likesCount.textContent = likes;
  commentsCountSummary.textContent = comments.length;

  //Временно прячем некоторые элементы
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};


const closeFullPictureContainer = (event) => {
  if (event.type !== 'click' && event.key !== 'Escape') {return;}
  document.querySelector('.big-picture').classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeFullPictureContainer);
  document.removeEventListener('keydown', closeFullPictureContainer);
};

const showFullPictureContainer = (event) => {
  const id = event.target.closest('.picture').dataset.pictureId;
  if (!id) {return;}
  renderFullPictureContainer(randomContent[id]);
  renderComments(randomContent[id].comments);
  fullPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeFullPictureContainer);
  document.addEventListener('keydown', closeFullPictureContainer);
};

miniatureContainer.addEventListener('click', showFullPictureContainer);
