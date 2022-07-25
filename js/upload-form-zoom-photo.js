const picturePreview = document.querySelector('.img-upload__preview img');
const zoomContainer = document.querySelector('.img-upload__scale');
const zoomInButton = zoomContainer.querySelector('.scale__control--bigger');
const zoomOutButton = zoomContainer.querySelector('.scale__control--smaller');
const zoomValue = zoomContainer.querySelector('.scale__control--value');

const ZOOM_STEP = 25;
const ZOOM_MIN = 25;
const ZOOM_MAX = 100;

const getZoomValue = () => parseInt(zoomValue.value, 10);

const changeZoom = (zoomNewValue) => {
  zoomValue.value = `${zoomNewValue}%`;
  picturePreview.style.transform =`scale(${(zoomNewValue/100).toFixed(2)})`;
};

const onZoomOutButtonClick = () => {
  const zoomCurrent = getZoomValue();
  const zoomNewValue = zoomCurrent - ZOOM_STEP;
  if (zoomNewValue < ZOOM_MIN) {return;}
  changeZoom(zoomNewValue);
};

const onZoomInButtonClick = () => {
  const zoomCurrent = getZoomValue();
  const zoomNewValue = zoomCurrent + ZOOM_STEP;
  if (zoomNewValue > ZOOM_MAX) {return;}
  changeZoom(zoomNewValue);
};

const setZoomDefault = () => {
  changeZoom(ZOOM_MAX);
};

const addZoomHandler = () => {
  zoomOutButton.addEventListener('click', onZoomOutButtonClick);
  zoomInButton.addEventListener('click', onZoomInButtonClick);
};

const removeZoomHandler = () => {
  zoomOutButton.removeEventListener('click', onZoomOutButtonClick);
  zoomInButton.removeEventListener('click', onZoomInButtonClick);
};

export {addZoomHandler, removeZoomHandler, setZoomDefault};
