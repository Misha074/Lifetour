let advantagesButtons = document.querySelector('.advantages__button-container');
let sswiper = document.querySelector('.advantages__swiper');
let advantagesLink = document.querySelector('.advantages__more-link');

function initAdvantagesSwiper() {
  if (window.innerWidth >= 1200) {
    advantagesButtons.classList.remove('advantages__button-container--nojs');
    sswiper.classList.remove('advantages__swiper--nojs');
    advantagesLink.classList.add('advantages__more-link--nojs');

    let advantagesSwiper = new Swiper('.advantages__swiper', {
      // Стрелки переключения слайдов
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },

      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      spacebetween: 0,
      allowTouchMove: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },
    });
    return advantagesSwiper;
  }
}

export {initAdvantagesSwiper};
