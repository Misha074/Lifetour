import {iosVhFix} from './utils/ios-vh-fix';
import {initHeroSwiper} from './modules/swiper-hero/swiper-hero';
import './modules/youtube-video/youtube-video';
import './modules/nav-toggle/nav-toggle';
import {initToursSwiper} from './modules/swiper-tours/swiper-tours';
import {initTrainingSwiper} from './modules/swiper-training/swiper-training';
import {initReviewsSwiper} from './modules/swiper-reviews/swiper-reviews';
import {initAdvantagesSwiper} from './modules/swiper-advantages/swiper-advantages';
import {initGallerySwiper} from './modules/swiper-gallery/swiper-gallery';
import {inputValidate} from './modules/input-validate/input-validate';
// import {initLeaflet} from './modules/leaflet/leaflet';
import './modules/leaflet/leaflet';
import './modules/scroll/scroll';
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
  });
});
