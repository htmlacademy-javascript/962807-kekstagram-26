import { isEscapeKey } from './util.js';

const uploadPictureForm = document.querySelector('.img-upload__overlay');
const uploadPictureButton = document.querySelector('#upload-file');
const closePictureFormButton = document.querySelector('#upload-cancel');

const onPictureFormEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closePictureForm();
  }
};

function openPictureForm() {
  uploadPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closePictureFormButton.addEventListener('click', closePictureForm);
  document.addEventListener('keydown', onPictureFormEscKeyDown);
}

function closePictureForm() {
  uploadPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureFormEscKeyDown);
  closePictureFormButton.removeEventListener('click', closePictureForm);
}

uploadPictureButton.addEventListener('change', openPictureForm);
