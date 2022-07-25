import { isEscapeKey } from './util.js';

const bodyElement = document.querySelector('body');
const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

const getAlertElement = () => document.querySelector('.success') || document.querySelector('.error');

const removeAlertElement = () => {
  getAlertElement().remove();
};

const onAlertElementEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    onCloseButtonClick();
  }
};

const onOutOfAlertElementClick = (event) => {
  if (event.target === getAlertElement()) {
    onCloseButtonClick();
  }
};

function onCloseButtonClick() {
  removeAlertElement();
  document.removeEventListener('click', onOutOfAlertElementClick);
  document.removeEventListener('keydown', onAlertElementEscKeyDown);
}

const renderAlertElement = (template) => {
  const element = template.cloneNode(true);
  const closeButton = element.querySelector('button');
  bodyElement.append(element);
  closeButton.addEventListener('click', onCloseButtonClick);
  document.body.addEventListener('click', onOutOfAlertElementClick);
  document.body.addEventListener('keydown', onAlertElementEscKeyDown);
};

const showAlertOnSuccess = () => renderAlertElement(templateSuccess);
const showAlertOnError = () => renderAlertElement(templateError);

export {showAlertOnSuccess, showAlertOnError};
