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
    // breakpoints: {
    //   768: {
    //     slidesPerView: 1,
    //     // spaceBetween: 30,
    //   },
    //   1200: {
    //     slidesPerView: 1,
    //     // spaceBetween: 40,
    //   },
    // },
  });
  return heroSwiper;
}

export {initHeroSwiper};
