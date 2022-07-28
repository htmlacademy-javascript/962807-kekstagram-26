const ZOOM_STEP = 25;
const ZOOM_MIN = 25;
const ZOOM_MAX = 100;
const picturePreview = document.querySelector('.img-upload__preview img');
const zoomContainer = document.querySelector('.img-upload__scale');
const zoomValue = zoomContainer.querySelector('.scale__control--value');

const changeZoom = (zoomNewValue) => {
  zoomValue.value = `${zoomNewValue}%`;
  picturePreview.style.transform =`scale(${(zoomNewValue/100).toFixed(2)})`;
};

const setZoomDefault = () => {
  changeZoom(ZOOM_MAX);
};

const onZoomButtonClick = (event) => {
  const zoomCurrent = parseInt(zoomValue.value, 10);
  const isZoomOutButton = event.target.matches('.scale__control--smaller');
  const isZoomInButton = event.target.matches('.scale__control--bigger');

  if (!event.target.matches('button')) {return;}
  if ((isZoomOutButton && zoomCurrent === ZOOM_MIN) ||
  (isZoomInButton && zoomCurrent === ZOOM_MAX)) {return;}

  const zoomNewValue = isZoomInButton
    ? zoomCurrent + ZOOM_STEP
    : zoomCurrent - ZOOM_STEP;

  changeZoom(zoomNewValue);
};

const addZoomHandler = () => {
  zoomContainer.addEventListener('click', onZoomButtonClick);
};

const removeZoomHandler = () => {
  zoomContainer.removeEventListener('click', onZoomButtonClick);
};

export {addZoomHandler, removeZoomHandler, setZoomDefault};
