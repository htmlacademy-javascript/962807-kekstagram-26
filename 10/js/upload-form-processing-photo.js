const picturePreview = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectElementsList= document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const picturePreviewInitialClasses = picturePreview.className;
const effectTypes = {
  currentEffect: 'none',
  currentFilter: '',
  none: {
    name: 'none',
    filter: '',
  },
  chrome: {
    name:'chrome',
    filter: 'grayscale()',
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia()',
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    name: 'marvin',
    filter: 'invert(%)',
    sliderOptions: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    name: 'phobos',
    filter: 'blur(px)',
    sliderOptions: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    name: 'heat',
    filter: 'brightness()',
    sliderOptions: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

sliderElement.classList.add('visually-hidden');

const getCheckedEffect = () => document.querySelector('.effects__radio:checked').value;

const toggleEffect = (checkedEffect) => {
  picturePreview.className = picturePreviewInitialClasses;
  picturePreview.classList.add(`effects__preview--${checkedEffect}`);
  effectTypes.currentFilter = effectTypes[checkedEffect].filter;
  effectTypes.currentEffect = effectTypes[checkedEffect].name;
};

const updateSliderSettings = (checkedEffect) => {
  if (checkedEffect === 'none') {
    picturePreview.style.filter = '';
    return sliderElement.classList.add('visually-hidden');
  }
  sliderElement.classList.remove('visually-hidden');
  sliderElement.noUiSlider.updateOptions(effectTypes[checkedEffect].sliderOptions);
};

const updateEffectLevel = () => {
  const effectLevelCurrent = sliderElement.noUiSlider.get();
  effectLevel.value = effectLevelCurrent;
  return effectLevelCurrent;
};

const onEffectElementClick = () => {
  const checkedEffect = getCheckedEffect();
  if (checkedEffect === effectTypes.currentEffect) {return;}
  toggleEffect(checkedEffect);
  updateSliderSettings(checkedEffect);
};

const applyEffectDepth = () => {
  const effectLevelCurrent = updateEffectLevel();
  const effectFilterCurrent = effectTypes.currentFilter;
  const getFilterStyleString = () => {
    const pasteIndex = effectFilterCurrent.indexOf('(')+1;
    return effectFilterCurrent.slice(0, pasteIndex)+effectLevelCurrent+effectFilterCurrent.slice(pasteIndex);
  };

  picturePreview.style.filter = getFilterStyleString();
};

sliderElement.noUiSlider.on('update', applyEffectDepth);

const addEffectsHandler = () => {
  effectElementsList.addEventListener('click', onEffectElementClick);
};

const removeEffectsHandler = () => {
  effectElementsList.removeEventListener('click', onEffectElementClick);
  sliderElement.classList.add('visually-hidden');
};

export {addEffectsHandler, removeEffectsHandler};
