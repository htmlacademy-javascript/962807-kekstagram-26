import { generateRandomContent } from './data.js';

const renderContent = (templateId, content) => {
  const templateElement = document.querySelector(`#${templateId}`).content;
  const fragment = document.createDocumentFragment();
  for (const item of content) {
    const element = templateElement.cloneNode(true);
    element.querySelector('.picture__img').alt = item.description;
    element.querySelector('.picture__img').src = item.url;
    element.querySelector('.picture__likes').textContent = item.likes;
    const commentTemplate = element.querySelector('.picture__comments');
    commentTemplate.remove();
    for (const comment of item.comments) {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.textContent = comment.message;
      element.querySelector('.picture__info').prepend(commentElement);
    }
    fragment.prepend(element);
  }
  document.querySelector('.pictures').prepend(fragment);
};

renderContent('picture', generateRandomContent(25));
