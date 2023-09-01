let trainingButtons = document.querySelector('.training__button-container');
let trainingLink = document.querySelector('.training__more-link');

function initTrainingSwiper() {
  trainingButtons.classList.remove('training__button-container--nojs');
  trainingLink.classList.add('training__more-link--nojs');

  let trainingSwiper = new Swiper('.training__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },

    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spacebetween: 0,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  return trainingSwiper;
}

export {initTrainingSwiper};
