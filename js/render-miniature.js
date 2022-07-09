import { randomContent } from './data.js';

const renderContent = (templateId, content) => {
  //Находим шаблон, создаём пустой фрагмент
  const elementTemplate = document.querySelector(`#${templateId}`).content;
  const fragment = document.createDocumentFragment();

  const renderContentElement = (item, id) => {
    //Клонируем шаблон и заполняем основными данными
    const element = elementTemplate.cloneNode(true);
    element.querySelector('.picture').dataset.pictureId = id;
    element.querySelector('.picture__img').alt = item.description;
    element.querySelector('.picture__img').src = item.url;
    element.querySelector('.picture__likes').textContent = item.likes;
    element.querySelector('.picture__comments').textContent = item.comments.length;
    fragment.append(element);
  };

  content.forEach(renderContentElement);
  document.querySelector('.pictures__title').after(fragment);
};

renderContent('picture', randomContent);
