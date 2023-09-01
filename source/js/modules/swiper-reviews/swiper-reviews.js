let reviewsButtons = document.querySelector('.reviews__button-container');
let reviewsLink = document.querySelector('.reviews__more-link');
let reviewSlide = document.querySelector('.reviews__slide--nojs');

function initReviewsSwiper() {
  reviewsButtons.classList.remove('reviews__button-container--nojs');
  reviewsLink.classList.add('reviews__more-link--nojs');
  reviewSlide.classList.remove('reviews__slide--nojs');

  let reviewsSwiper = new Swiper('.reviews__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spacebetween: 0,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },

      1200: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        allowTouchMove: false,
      },
    },
  });
  return reviewsSwiper;
}

export {initReviewsSwiper};
