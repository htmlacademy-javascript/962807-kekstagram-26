import { randomContentData } from './data.js';
import { isEscapeKey } from './util.js';
import {
  renderFullPictureContainer,
  fullPictureContainer,
} from'./render-full-size-photo.js';


const miniatureContainer = document.querySelector('.pictures.container');
const closeButton = document.querySelector('.big-picture__cancel');

const getPictureId = (event) => {
  const pictureElement = event.target.closest('.picture');
  if (!pictureElement) {return;}
  return pictureElement.dataset.pictureId;
};

const onFullPictureContainerEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    onCloseButton();
  }
};

function onMiniatureElement(event) {
  const id = getPictureId(event);
  if (!id) {return;}
  renderFullPictureContainer(randomContentData[id]);
  fullPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.addEventListener('click', onCloseButton);
}

function onCloseButton() {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.removeEventListener('click', onCloseButton);
}

miniatureContainer.addEventListener('click', onMiniatureElement);
