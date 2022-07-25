const elementTemplate = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

const renderContentElement = (item, id) => {
  const element = elementTemplate.cloneNode(true);
  const pictureImg = element.querySelector('.picture__img');
  element.querySelector('.picture').dataset.pictureId = id;
  pictureImg.alt = item.description;
  pictureImg.src = item.url;
  element.querySelector('.picture__img').src = item.url;
  element.querySelector('.picture__likes').textContent = item.likes;
  element.querySelector('.picture__comments').textContent = item.comments.length;
  fragment.append(element);
};

const renderContent = (content) => {
  content.forEach(renderContentElement);
  document.querySelector('.pictures__title').after(fragment);
};

export {renderContent};
