import { contentData } from './network.js';
import { renderContent, removeContent } from './miniature-render.js';
import { shuffleArray, debounce } from './util.js';

const DATA_MAX = 10;
const RERENDER_DELAY = 500;
const filterSection = document.querySelector('.img-filters');
const filterForm = filterSection.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const popularButton = filterForm.querySelector('#filter-discussed');

const toggleCurrentFilter = (element) => {
  const activeSelector = 'img-filters__button--active';
  const previousElement = filterForm.querySelector(`.${ activeSelector}`);
  previousElement.classList.remove(activeSelector);
  element.classList.add(activeSelector);
};

const updateContent = debounce((data) => {
  removeContent();
  renderContent(data);
}, RERENDER_DELAY);


const onRandomButtonClick = () => {
  toggleCurrentFilter(randomButton);
  const data = shuffleArray(contentData).slice(0, DATA_MAX);
  updateContent(data);
};

const onPopularButtonClick = () => {
  toggleCurrentFilter(popularButton);
  const data = contentData.slice();
  data.sort((a, b) => b.comments.length - a.comments.length);
  updateContent(data);
};

const onDefaultButtonClick = () => {
  toggleCurrentFilter(defaultButton);
  updateContent(contentData);
};

defaultButton.addEventListener('click', onDefaultButtonClick);
randomButton.addEventListener('click', onRandomButtonClick);
popularButton.addEventListener('click', onPopularButtonClick);
