import { randomContentData } from './data.js';
import { isEscapeKey } from './util.js';
import {
  renderFullPictureContainer,
  renderComments,
  fullPictureContainer,
  commentsLoader,
} from'./render-full-size-photo.js';
import {addZoomHandler, removeZoomHandler} from './zoom-photo.js';


const miniatureContainer = document.querySelector('.pictures.container');
const closeButton = document.querySelector('.big-picture__cancel');

const getPictureId = (event) => event.target.closest('.picture').dataset.pictureId;

const onFullPictureContainerEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeFullPictureContainer();
  }
};

function openFullPictureContainer(event) {
  const id = getPictureId(event);
  if (!id) {return;}
  renderFullPictureContainer(randomContentData[id]);
  fullPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.addEventListener('click', closeFullPictureContainer);
  commentsLoader.addEventListener('click', renderComments);
  addZoomHandler();
}

function closeFullPictureContainer() {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPictureContainerEscKeyDown);
  closeButton.removeEventListener('click', closeFullPictureContainer);
  commentsLoader.removeEventListener('click', renderComments);
  removeZoomHandler();
}

miniatureContainer.addEventListener('click', openFullPictureContainer);
