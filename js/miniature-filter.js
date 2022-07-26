import { contentData } from './network.js';
import { renderContent, removeContent } from './miniature-render.js';
import { shuffleArray } from './util.js';

const filterSection = document.querySelector('.img-filters');
const filterForm = filterSection.querySelector('.img-filters__form');
const defaultButton =filterForm.querySelector('#filter-default');
const randomButton =filterForm.querySelector('#filter-random');
const popularButton =filterForm.querySelector('#filter-discussed');

const DATA_MAX = 10;

filterSection.classList.remove('img-filters--inactive');

const currentFilter = () => {

};

const debounce = () => {
  filterForm.disable = true;
  setTimeout(filterForm.disable = false, 5000);
};


const onRandomButtonClick = (event) => {
  debounce();
  const data = shuffleArray(contentData.slice()).slice(0, DATA_MAX);
  removeContent();
  renderContent(data);
};

const onPopularButtonClick = (event) => {
  debounce();
  const data = contentData.slice();
  data.sort((a, b) => b.comments.length - a.comments.length);
  removeContent();
  renderContent(data);
};

const onDefaultButtonClick = (event) => {
  debounce();
  removeContent();
  renderContent(contentData);
};

setTimeout(onRandomButtonClick, 5000);
setTimeout(onPopularButtonClick, 9000);
setTimeout(onDefaultButtonClick, 14000);
