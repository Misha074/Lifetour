function initTrainingSwiper() {
  let trainingSwiper = new Swiper('.training__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spacebetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  return trainingSwiper;
}

export {initTrainingSwiper};
