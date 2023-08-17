function initHeroSwiper() {
  let heroSwiper = new Swiper('.hero__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spacebetween: 0,
    allowTouchMove: true,
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
  return heroSwiper;
}

export {initHeroSwiper};
