import './full-size-picture-render.js';
import './full-size-picture-view.js';
import './upload-form-processing-photo.js';
import './upload-form-validate.js';
import './upload-form-view.js';
import './upload-form-zoom-photo.js';
import './upload-form-alerts.js';
import './miniature-filter.js';
import { setPhotoFormSubmit } from './upload-form-send.js';
import { renderContent } from './miniature-render.js';
import { getData } from './network.js';
import { showErrorMessage } from './util.js';

getData(renderContent, showErrorMessage);
setPhotoFormSubmit();
