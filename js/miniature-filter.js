import { contentData } from './network.js';
import { renderContent, removeContent } from './miniature-render.js';
import { shuffleArray } from './util.js';

const filterSection = document.querySelector('.img-filters');
const filterForm = filterSection.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const popularButton = filterForm.querySelector('#filter-discussed');
const DATA_MAX = 10;

const toggleCurrentFilter = (element) => {
  const activeSelector = 'img-filters__button--active';
  const previousElement = filterForm.querySelector('.'+ activeSelector);
  previousElement.classList.remove(activeSelector);
  previousElement.disabled = false;
  element.classList.add(activeSelector);
  if (element === randomButton) {return;}
  element.disabled = true;
};

const onRandomButtonClick = () => {
  toggleCurrentFilter(randomButton);
  const data = shuffleArray(contentData.slice()).slice(0, DATA_MAX);
  removeContent();
  renderContent(data);
};

const onPopularButtonClick = () => {
  toggleCurrentFilter(popularButton);
  const data = contentData.slice();
  data.sort((a, b) => b.comments.length - a.comments.length);
  removeContent();
  renderContent(data);
};

const onDefaultButtonClick = () => {
  toggleCurrentFilter(defaultButton);
  removeContent();
  renderContent(contentData);
};

defaultButton.addEventListener('click', onDefaultButtonClick);
randomButton.addEventListener('click', onRandomButtonClick);
popularButton.addEventListener('click', onPopularButtonClick);
