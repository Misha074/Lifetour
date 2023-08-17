import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initHeroSwiper} from './modules/swiper-hero/swiper-hero';
import './modules/youtube-video/youtube-video';
import './modules/nav-toggle/nav-toggle';
import {initToursSwiper} from './modules/swiper-tours/swiper-tours';
import {initTrainingSwiper} from './modules/swiper-training/swiper-training';
import {initReviewsSwiper} from './modules/swiper-reviews/swiper-reviews';
import {initAdvantagesSwiper} from './modules/swiper-advantages/swiper-advantages';
import {initGallerySwiper} from './modules/swiper-gallery/swiper-gallery';
import {inputValidate} from './modules/input-validate/input-validate';
import {initLeaflet} from './modules/leaflet/leaflet';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initHeroSwiper();

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initToursSwiper();
    initTrainingSwiper();
    initReviewsSwiper();
    initAdvantagesSwiper();
    initGallerySwiper();
    inputValidate();
    initLeaflet();

    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
