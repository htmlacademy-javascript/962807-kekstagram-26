//Находим элементы для заполнения целевыми данными
const fullPictureContainer = document.querySelector('.big-picture');
const picture = fullPictureContainer.querySelector('.big-picture__img img');
const authorContainer = fullPictureContainer.querySelector('.social__header');
const authorAvatar = authorContainer.querySelector('.social__picture');
const authorDescription = authorContainer.querySelector('.social__caption');
const likesCount =  authorContainer.querySelector('.likes-count');
const commentsCount = fullPictureContainer.querySelector('.social__comment-count');
const commentsCountSummary = commentsCount.querySelector('.comments-count');
const commentsLoader = fullPictureContainer.querySelector('.comments-loader');

//Находим элементы для заполнения комментариями
const commentContainer = fullPictureContainer.querySelector('.social__comments');
const commentElement = fullPictureContainer.querySelector('.social__comment');
const commentAvatar = commentElement.querySelector('.social__picture');
const commentMessage = commentElement.querySelector('.social__text');

const preparedComments = []; //Кэш для рендеринга комментариев
const COMMENT_RENDER_COUNT = 2; //Количество(шаг) подгружаемых комментариев


//Разбивает исходный массив комментариев на подмассивы по количеству подгружаемых комментариев
const prepareComments = (comments) => {
  preparedComments.length=0;
  comments = comments.slice();
  for (let index = 0; index < comments.length; index+=COMMENT_RENDER_COUNT) {
    const ending = (comments[index+COMMENT_RENDER_COUNT]) ?
      index+COMMENT_RENDER_COUNT: comments.length;
    const commentsPortion = comments.slice(index, ending);
    preparedComments.push(commentsPortion);
  }
  return preparedComments;
};


//Заполняет контейнер комментариями и вставляет в окно
const renderComments = () => {
  const commentsToRender = preparedComments.shift();

  commentsToRender.forEach(({avatar, message, name}) => {
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentMessage.textContent = message;
    commentContainer.append(commentElement.cloneNode(true));
  });

  commentsCount.firstChild.data = `${commentContainer.children.length} из `;
  if (commentContainer.children.length === +commentsCountSummary.textContent) {
    commentsLoader.classList.add('hidden');
  } else {commentsLoader.classList.remove('hidden'); }
};


//Заполняет элементы окна целевыми данными
const renderFullPictureContainer = ({description, url, likes, comments}) => {
  commentContainer.innerHTML = '';
  picture.src = url;
  picture.alt = description;
  authorAvatar.src = 'img/avatar-1.svg';
  authorDescription.textContent = description;
  likesCount.textContent = likes;
  commentsCountSummary.textContent = comments.length;

  prepareComments(comments);
  renderComments();
};

export {renderFullPictureContainer, renderComments, fullPictureContainer, commentsLoader};
