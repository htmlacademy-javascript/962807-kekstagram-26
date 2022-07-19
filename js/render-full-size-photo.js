const fullPictureContainer = document.querySelector('.big-picture');

const renderComments = (comments) => {
  //Находим элементы для заполнения комментариями
  const commentContainer = fullPictureContainer.querySelector('.social__comments');
  const commentElement = fullPictureContainer.querySelector('.social__comment');
  const commentAvatar = commentElement.querySelector('.social__picture');
  const commentMessage = commentElement.querySelector('.social__text');
  const fragment = document.createDocumentFragment();
  commentContainer.innerHTML = '';

  //Заполняем контейнер комментариями и вставляем его в окно
  comments.forEach(({avatar, message, name}) => {
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentMessage.textContent = message;
    fragment.append(commentElement.cloneNode(true));
  });
  commentContainer.append(fragment);
};

const renderFullPictureContainer = ({description, url, likes, comments}) => {

  //Находим элементы для заполнения остальными данными
  const picture = fullPictureContainer.querySelector('.big-picture__img img');
  const authorContainer = fullPictureContainer.querySelector('.social__header');
  const authorDescription = authorContainer.querySelector('.social__caption');
  const likesCount =  authorContainer.querySelector('.likes-count');
  const commentsCount = fullPictureContainer.querySelector('.social__comment-count');
  const commentsCountSummary = commentsCount.querySelector('.comments-count');
  const commentsLoader = fullPictureContainer.querySelector('.comments-loader');

  //Заполняем элементы данными
  picture.src = url;
  picture.alt = description;
  authorDescription.textContent = description;
  likesCount.textContent = likes;
  commentsCountSummary.textContent = comments.length;

  renderComments(comments);

  //Временно прячем некоторые элементы
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export {renderFullPictureContainer, fullPictureContainer};
