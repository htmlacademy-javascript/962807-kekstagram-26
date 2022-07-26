import { contentData } from './network.js';
import { renderContent, removeContent } from './miniature-render.js';
import { shuffleArray } from './util.js';

const filterSection = document.querySelector('.img-filters');
const filterForm = filterSection.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const popularButton = filterForm.querySelector('#filter-discussed');

const DATA_MAX = 10;

filterSection.classList.remove('img-filters--inactive');
randomButton.classList.add('img-filters__button--active');

const getActiveButton = () => {

}

const toggleCurrentFilter = (element) => {
  const activeClassButton = 'img-filters__button--active';
  filterForm.querySelector('.img-filters__button--active').classList.remove(activeClassButton);
  element.classList.add(activeClassButton);
}

// const currentFilter = () => {

// };
// const disable = () => {
//   defaultButton.disabled = true;
//   randomButton.disabled = true;
//   popularButton.disabled = true;
// };
// const enable = () => {
//   filterForm.disable = false;
//   randomButton.disable = false;
//   randomButton.disable = false;
// };
// const debounce = () => {
//   disable();
//   setTimeout(enable, 5000);
// };


const onRandomButtonClick = () => {
  const data = shuffleArray(contentData.slice()).slice(0, DATA_MAX);
  removeContent();
  renderContent(data);
};

const onPopularButtonClick = () => {
  const data = contentData.slice();
  data.sort((a, b) => b.comments.length - a.comments.length);
  removeContent();
  renderContent(data);
};

const onDefaultButtonClick = () => {
  removeContent();
  renderContent(contentData);
};

defaultButton.addEventListener('click', onDefaultButtonClick);
randomButton.addEventListener('click', onRandomButtonClick);
popularButton.addEventListener('click', onPopularButtonClick);

// setTimeout(onRandomButtonClick, 5000);
// setTimeout(onRandomButtonClick, 3000);
// setTimeout(onDefaultButtonClick, 14000);
