let toursButtons = document.querySelector('.tours__button-container');

function initToursSwiper() {
  toursButtons.classList.remove('tours__button-container--nojs');

  let toursSwiper = new Swiper('.tours__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spacebetween: 0,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 19,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  return toursSwiper;
}

export {initToursSwiper};
