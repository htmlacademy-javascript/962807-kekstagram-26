const picturePreview = document.querySelector('.img-upload__preview img');
const zoomContainer = document.querySelector('.img-upload__scale');
const zoomIn = zoomContainer.querySelector('.scale__control--bigger');
const zoomOut = zoomContainer.querySelector('.scale__control--smaller');
const zommValue = zoomContainer.querySelector('.scale__control--value');
const zoomStep = 25;
// transform: scale(0.75)
