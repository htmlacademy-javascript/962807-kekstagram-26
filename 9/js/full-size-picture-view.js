import { randomContentData } from './data-generate.js';
import { isEscapeKey } from './util.js';
import {
  renderFullPictureContainer,
  fullPictureContainer,
  commentsLoader,
  renderComments,
} from'./full-size-picture-render.js';

const miniatureContainer = document.querySelector('.pictures.container');
const closeButton = document.querySelector('.big-picture__cancel');

const onCommentsLoaderClick = () => renderComments();

const getPictureId = (event) => {
  const pictureElement = event.target.closest('.picture');
  if (!pictureElement) {return;}
  return pictureElement.dataset.pictureId;
};

const onFullPictureContainerEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    onCloseButtonClick();
  }
};

function onMiniatureElementClick(event) {
  const id = getPictureId(event);
  if (!id) {return;}
  renderFullPictureContainer(randomContentData[id]);
  fullPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.addEventListener('click', onCloseButtonClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
}

function onCloseButtonClick() {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.removeEventListener('click', onCloseButtonClick);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
}

miniatureContainer.addEventListener('click', onMiniatureElementClick);
