let podcast = document.getElementById('podcast');

let buttons = podcast.querySelector('.buttons_PqSoC');


setTimeout(console.log(buttons), 11500);

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
    watchSlidesProgress: true,
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

  heroSwiper.on('slideChange', function () {
    // eslint-disable-next-line no-console
    console.log('slide changed');
  });

  return heroSwiper;
}

export {initHeroSwiper};
