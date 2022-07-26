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
    event.stopPropagation();
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
  bodyElement.removeEventListener('click', onOutOfAlertElementClick);
  bodyElement.removeEventListener('keydown', onAlertElementEscKeyDown);
}

const renderAlertElement = (template) => {
  const element = template.cloneNode(true);
  const closeButton = element.querySelector('button');
  element.firstElementChild.style.zIndex = 10;
  bodyElement.append(element);
  closeButton.addEventListener('click', onCloseButtonClick);
  bodyElement.addEventListener('click', onOutOfAlertElementClick);
  bodyElement.addEventListener('keydown', onAlertElementEscKeyDown);
};

const showAlertOnSuccess = () => renderAlertElement(templateSuccess);
const showAlertOnError = () => renderAlertElement(templateError);

export {showAlertOnSuccess, showAlertOnError};
