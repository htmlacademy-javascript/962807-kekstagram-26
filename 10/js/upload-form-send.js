import { showAlertOnSuccess, showAlertOnError } from './upload-form-alerts.js';
import { onClosePictureFormButtonClick} from './upload-form-view.js';
import { pristine, uploadPhotoForm } from './upload-form-validate.js';
import { sendData } from './network.js';

const submitButton = document.querySelector('.img-upload__submit');

//Объявляем вспомогательные функции отправки формы
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Загружаем...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onUploadSuccess = () => {
  showAlertOnSuccess();
  unblockSubmitButton();
  onClosePictureFormButtonClick();
};

const onUploadError = () => {
  showAlertOnError();
  unblockSubmitButton();
};

//Валидация и отправка формы
const setPhotoFormSubmit = () => {
  uploadPhotoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(uploadPhotoForm);
      sendData(onUploadSuccess, onUploadError, formData);
    }
  });
};

export {setPhotoFormSubmit};
