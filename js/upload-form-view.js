import { isEscapeKey } from './util.js';
import {addZoomHandler, removeZoomHandler, setZoomDefault} from './upload-form-zoom-photo.js';
import {addEffectsHandler, removeEffectsHandler} from './upload-form-processing-photo.js';
import { showAlertOnError } from './upload-form-alerts.js';

const uploadPictureForm = document.querySelector('.img-upload__overlay');
const uploadPictureButton = document.querySelector('#upload-file');
const closePictureFormButton = document.querySelector('#upload-cancel');
const picturePreview = document.querySelector('.img-upload__preview img');

const effectItemDefault = document.querySelector('#effect-none');
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const pictureInput = document.querySelector('.img-upload__input');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const onPictureFormEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    if (document.activeElement === hashtag) {return;}
    event.preventDefault();
    onClosePictureFormButtonClick();
  }
};

const resetPictureFormDefaults = () => {
  effectItemDefault.checked = true;
  hashtag.value = '';
  textDescription.value = '';
  pictureInput.value = '';
  picturePreview.src = '';
};

const uploadPicture = () => {
  const file = uploadPictureButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    picturePreview.src = URL.createObjectURL(file);
    return true;
  } else {
    return showAlertOnError();
  }
};

function onUploadPictureButtonClick() {
  if (!uploadPicture()) {return;}
  uploadPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closePictureFormButton.addEventListener('click', onClosePictureFormButtonClick);
  document.addEventListener('keydown', onPictureFormEscKeyDown);
  setZoomDefault();
  addZoomHandler();
  addEffectsHandler();
}

function onClosePictureFormButtonClick() {
  uploadPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureFormEscKeyDown);
  closePictureFormButton.removeEventListener('click', onClosePictureFormButtonClick);
  resetPictureFormDefaults();
  removeZoomHandler();
  removeEffectsHandler();
}

uploadPictureButton.addEventListener('change', onUploadPictureButtonClick);

export {onClosePictureFormButtonClick};
