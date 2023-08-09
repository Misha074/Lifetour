function initToursSwiper() {
  let toursSwiper = new Swiper('.tours__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spacebetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 19,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  return toursSwiper;
}

export {initToursSwiper};
